import type { BaseServerConfiguration, Configuration, RequestContext, ResponseContext } from '../../openapi-v2';
import { createConfiguration, ServerConfiguration, AuthenticationApi } from '../../openapi-v2';

const EXPIRATION_THRESHOLD = 1000 * 60 * 5;

function decodeJwtPayload(token: string): { exp?: number } | null {
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  try {
    const payload = Buffer.from(parts[1], 'base64url').toString('utf-8');
    return JSON.parse(payload);
  } catch {
    return null;
  }
}
const BASE_URLS_MAP = new Map<string, BaseServerConfiguration>([
]);

/* eslint-disable no-underscore-dangle */
export class ConfigurationService {
  private static _instance: ConfigurationService | null = null;

  static get instance(): ConfigurationService {
    if (!ConfigurationService._instance) {
      throw new Error('ConfigurationService not initialized');
    }

    return ConfigurationService._instance;
  }

  static initialize(apiKey: string, baseServer: BaseServerConfiguration) {
    if (ConfigurationService._instance) {
      throw new Error('ConfigurationService already initialized');
    }

    ConfigurationService._instance = new ConfigurationService(apiKey, baseServer);

    return ConfigurationService._instance;
  }

  static generateServerConfiguration(baseUrl?: string): BaseServerConfiguration {
    const baseServer = BASE_URLS_MAP.get(baseUrl ?? '');

    return baseServer ?? new ServerConfiguration<{}>(baseUrl ?? '', {});
  }

  private accessToken: string | undefined;
  private expiresAt: number;

  constructor(
    private apiKey: string,
    private baseServer: BaseServerConfiguration,
  ) {
    this.expiresAt = Date.now();
  }

  generateNewClient<T extends { new(config: Configuration): InstanceType<T> }>(ClientClass: T): InstanceType<T> {
    this.validateIsLoggedIn();

    const newClient = new ClientClass(this.configuration);

    return newClient;
  }

  async generateToken() {
    const authClient = new AuthenticationApi(createConfiguration({
      baseServer: this.baseServer,
    }));

    const login = await authClient.login({
      refreshToken: this.apiKey,
    });

    this.accessToken = login.accessToken;

    const payload = decodeJwtPayload(this.accessToken);

    if (!payload) {
      throw new Error('Invalid JWT token');
    }

    this.expiresAt = (payload.exp ?? Math.floor(Date.now() / 1000) + 60 * 15) * 1000;

    return {
      accessToken: login.accessToken,
      expiresAt: payload.exp,
    };
  }

  validateIsLoggedIn() {
    if (!this.accessToken) {
      throw new Error('Please login first');
    }
  }

  private get configuration(): Configuration {
    return createConfiguration({
      baseServer: this.baseServer,
      authMethods: {
        default: {
          getName: () => 'Logged In',
          applySecurityAuthentication: () => this.validateIsLoggedIn(),
        },
      },
      promiseMiddleware: [{
        pre: async (context: RequestContext) => {
          if (this.expiresAt <= Date.now() + EXPIRATION_THRESHOLD) {
            await this.generateToken();
          }

          context.setHeaderParam('Authorization', `Bearer ${this.accessToken}`);

          return context;
        },
        post: async (context: ResponseContext) => (context),
      }],
    });
  }
}
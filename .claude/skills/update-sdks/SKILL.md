---
name: update-sdks
description: Use when the OpenAPI spec has changed in the vayu backend monorepo and the TypeScript, Go, and Python SDK clients need to be regenerated and updated to match.
disable-model-invocation: true
user-invocable: true
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [branch-name]
---

# Update SDKs from OpenAPI Spec

Sync the OpenAPI spec from the vayu backend monorepo, regenerate all three SDK clients, update the hand-written wrapper code, and open a PR.

## Quick Reference

| Language | Generated code | Wrapper code | Exports |
|----------|---------------|--------------|---------|
| TypeScript | `typescript/openapi/` | `typescript/sdk/clients/*.ts` | `typescript/sdk/clients/index.ts` (barrel re-export) |
| Go | `go/openapi/` | `go/api/api_*.go` | N/A (package structure) |
| Python | `python/openapi/` | `python/vayu_sdk/apis/api_*.py` | `python/vayu_sdk/apis/__init__.py` (explicit imports) |

## Steps

### 1. Verify setup

- Confirm `../vayu` exists and contains `libs/client/vayu-client-openapi.yml`
- If the spec file doesn't exist, run `cd ../vayu && npx nx run zapi-specgen:generate-openapi-vayu-client`
- If `../vayu` doesn't exist, stop and tell the user

### 2. Copy spec and diff

- Copy `../vayu/libs/client/vayu-client-openapi.yml` to `open-api-files/open-api.yaml`
- Diff old vs new. If identical, tell the user the spec is already up to date and stop
- Show the user a summary: new endpoints, changed endpoints, removed endpoints

### 3. Create branch

- Name: `update-sdks/$ARGUMENTS` if argument provided, otherwise `update-sdks/{YYYY-MM-DD}`
- Branch from `main`

### 4. Run code generation

- Execute `./generate.sh` from repo root
- If it fails, show error output and stop

### 5. Update wrapper code

Read existing wrapper files first — match the style exactly. Then update based on the spec diff.

**TypeScript** — thin pass-through wrappers:

```typescript
// Pattern: typescript/sdk/clients/{Resource}Client.ts
import { {Resource}Api } from '../../openapi';
import { ConfigurationService } from '../services/configuration.service';

export class {Resource}Client {
  private client: {Resource}Api;
  constructor() {
    this.client = ConfigurationService.instance.generateNewClient({Resource}Api);
  }
  // Methods destructure convenience params, delegate to this.client
  async list(paginationOptions?) {
    const { limit, cursor } = paginationOptions ?? {};
    return this.client.list{Resources}(limit, cursor);
  }
}
// Export via barrel: typescript/sdk/clients/index.ts → export * from './{Resource}Client';
```

**Go** — thick wrappers with context, builder pattern, error transform:

```go
// Pattern: go/api/api_{resource}.go
// 1. Type aliases at top for convenience:
type Customer = openapi.CreateCustomerResponseCustomer

// 2. Constructor builder funcs:
func NewCreateCustomerRequest() *openapi.CreateCustomerRequest { ... }

// 3. Methods use context + builder + explicit error handling:
func (api *CustomersAPI) List(limit, cursor *int32) (*ListCustomersResponse, error) {
    ctx, cancel := client.GenerateContextWithTimeout()
    defer cancel()
    request := api.client.CustomersAPI.ListCustomers(ctx)
    if limit != nil { request = request.Limit(*limit) }
    response, _, err := request.Execute()
    if err != nil { return nil, client.BuildVayuErrorFromGenericOpenAPIError(err) }
    return response, nil
}
```

**Python** — medium wrappers with flattened params:

```python
# Pattern: python/vayu_sdk/apis/api_{resource}.py
from openapi.api.{resource}_api import {Resource}Api
from vayu_sdk.clients.vayu_client import VayuClient

class {Resource}API:
    def __init__(self, vayu_client: VayuClient):
        vayu_client.validate_logged_in()
        self.__client = {Resource}Api(vayu_client.api_client)

    # Methods accept flattened params, construct request objects internally
    def create(self, name: str, external_id: str = None):
        request = CreateCustomerRequest(name=name, externalId=external_id)
        return self.__client.create_{resource}(create_{resource}_request=request)

# Export: python/vayu_sdk/apis/__init__.py → from .api_{resource} import (Type1, Type2, ...)
```

**For each language, when adding a new API group:**
1. Read an existing wrapper file as reference
2. Create the new file following the same pattern
3. Update exports (index.ts / \_\_init\_\_.py)

### 6. Commit and open PR

- Stage all changes
- Commit: `feat: update SDKs from latest OpenAPI spec`
- Push branch
- `gh pr create` with title and body summarizing spec changes and wrapper updates

## Common Mistakes

- **Skipping the diff step** — always diff before running codegen; if spec is unchanged, stop early
- **Not reading existing wrappers first** — each language has a distinct pattern (thin/thick/medium); copying the wrong style breaks consistency
- **Forgetting exports** — TypeScript needs barrel re-export in `index.ts`, Python needs explicit imports in `__init__.py`
- **Go type aliases** — new Go wrappers must define type aliases at the top of the file for all request/response types used
- **Go error handling** — every Go method must transform errors via `client.BuildVayuErrorFromGenericOpenAPIError(err)`

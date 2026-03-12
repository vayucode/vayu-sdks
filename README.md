# Vayu SDKs

Official client libraries for the [Vayu](https://withvayu.com) API. Submit events for processing and storage, manage billing-related entities, and perform various other operations seamlessly.

## SDKs

| Language | Package | Install |
|----------|---------|---------|
| [TypeScript](./typescript/) | [![npm](https://img.shields.io/npm/v/vayu-ts?label=vayu-ts)](https://www.npmjs.com/package/vayu-ts) | `npm install vayu-ts` |
| [Python](./python/) | [![PyPI](https://img.shields.io/pypi/v/vayu-client?label=vayu-client)](https://pypi.org/project/vayu-client/) | `pip install vayu-client` |
| [Go](./go/) | [vayu-sdks/go](https://github.com/vayucode/vayu-sdks/tree/main/go) | `go get github.com/vayucode/vayu-sdks/go` |

## Quick Start

### TypeScript

```typescript
import { Vayu } from 'vayu-ts';

const vayu = new Vayu('VAYU_API_KEY');
```

### Python

```python
from vayu_sdk import Vayu

vayu = Vayu('VAYU_API_KEY')
```

### Go

```go
import VayuSDK "github.com/vayucode/vayu-sdks/go"

vayu := VayuSDK.NewVayu("VAYU_API_KEY")
```

## Repository Structure

```
vayu-sdks/
├── typescript/        # TypeScript SDK (published to npm as vayu-ts)
├── go/                # Go SDK (Go module at github.com/vayucode/vayu-sdks/go)
├── python/            # Python SDK (published to PyPI as vayu-client)
├── open-api-files/    # Shared OpenAPI spec (single source of truth)
├── generate.sh        # Unified code generation for all 3 SDKs
└── openapitools.json  # Pinned openapi-generator-cli version
```

## Code Generation

All three SDKs are generated from a shared OpenAPI spec using [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator). Each SDK has a thin wrapper layer on top of the generated code to provide idiomatic APIs.

To regenerate all clients:

```bash
./generate.sh
```

## Links

- [Vayu Website](https://withvayu.com)
- [API Documentation](https://docs.withvayu.com)

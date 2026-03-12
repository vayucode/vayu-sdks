---
name: update-sdks
description: Sync the OpenAPI spec from the vayu backend monorepo and regenerate all SDK clients (TypeScript, Go, Python), update wrapper code, and open a PR.
disable-model-invocation: true
user-invocable: true
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [branch-name]
---

# Update SDKs from OpenAPI Spec

You are updating all three SDK clients (TypeScript, Go, Python) from the latest OpenAPI spec in the backend monorepo.

## Prerequisites

The vayu backend monorepo must be checked out as a sibling directory at `../vayu` relative to this repo. Verify this before proceeding.

## Steps

### 1. Verify setup

- Confirm `../vayu` exists and contains `libs/client/vayu-client-openapi.yml`
- If the spec file doesn't exist, try running `cd ../vayu && npx nx run zapi-specgen:generate-openapi-vayu-client` to generate it
- If `../vayu` doesn't exist, stop and tell the user

### 2. Copy the spec

- Copy `../vayu/libs/client/vayu-client-openapi.yml` to `open-api-files/open-api.yaml`
- Show the user a summary of what changed in the spec (diff the old vs new)

### 3. Create a branch

- Branch name: `update-sdks/$ARGUMENTS` if an argument was provided, otherwise `update-sdks/{date}` using today's date
- Create the branch from `main`

### 4. Run code generation

- Execute `./generate.sh` from the repo root
- This runs `openapi-generator-cli` for all 3 languages:
  - TypeScript → `typescript/openapi/`
  - Go → `go/openapi/`
  - Python → `python/openapi/`

### 5. Update wrapper code

Analyze the spec diff to identify new, changed, or removed endpoints. Then update the hand-written wrapper clients:

**TypeScript** (`typescript/sdk/clients/`):
- Each client class wraps a generated API class from `typescript/openapi/apis/`
- If new API groups were added in the spec, create new client files following the existing pattern
- If existing endpoints changed signatures, update the corresponding client methods
- Update `typescript/sdk/clients/index.ts` exports if new clients were added

**Go** (`go/api/`):
- Each `api_*.go` file wraps generated functions from `go/openapi/`
- If new API groups were added, create new wrapper files following the existing pattern
- Update method signatures if endpoint parameters changed

**Python** (`python/vayu_sdk/apis/`):
- Each `api_*.py` file wraps generated classes from `python/openapi/`
- If new API groups were added, create new wrapper files following the existing pattern
- Update `python/vayu_sdk/apis/__init__.py` exports if new APIs were added

**Important:** Read the existing wrapper code first to understand the patterns before making changes. Match the existing style exactly.

### 6. Commit and open PR

- Stage all changes: spec file, generated code, wrapper code updates
- Commit with message: `feat: update SDKs from latest OpenAPI spec`
- Push the branch
- Open a PR with `gh pr create` including:
  - Title: `feat: update SDKs from latest OpenAPI spec`
  - Body: summary of spec changes (new/changed/removed endpoints) and what wrapper code was updated

### Error handling

- If `generate.sh` fails, show the error output and stop
- If `../vayu` spec file is not found, tell the user to check their local vayu checkout
- If there are no changes after copying the spec (identical file), tell the user the spec is already up to date and stop

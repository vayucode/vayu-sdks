# SDK Monorepo Automation Design

## Overview

This document describes the automation pipeline for `vayu-sdks`, covering how OpenAPI spec changes flow from the backend monorepo (`vayu`) into updated, published SDKs.

## Pipeline

```
Developer workstation                      GitHub (vayu-sdks)
┌─────────────────────────┐               ┌──────────────────────────────┐
│ Developer invokes        │               │                              │
│ /update-sdks skill       │               │                              │
│                          │               │                              │
│ Skill:                   │               │                              │
│  1. Copies spec from     │               │                              │
│     ../vayu              │               │                              │
│  2. Runs generate.sh     │──── PR ──────▶│ CI checks (ts/go/py)         │
│  3. Updates wrapper code │               │                              │
│  4. Opens PR             │               │ On merge:                    │
│                          │               │  version bump + publish      │
└─────────────────────────┘               └──────────────────────────────┘
```

---

## 1. Claude Code Skill: `/update-sdks`

### Trigger

Developer invokes `/update-sdks` while working in the `vayu-sdks` repo.

### Spec source

Convention-based: the skill reads the OpenAPI spec from `../vayu` (sibling directory). Specifically:

- Runs `nx run zapi-specgen:generate-openapi-vayu-client` in `../vayu` (or reads the already-generated file)
- Copies the output to `open-api-files/open-api.yaml`

### Steps

1. **Copy spec**: Read `../vayu/libs/client/vayu-client-openapi.yml` → write to `open-api-files/open-api.yaml`
2. **Run codegen**: Execute `./generate.sh` which runs `openapi-generator-cli` for all 3 languages:
   - TypeScript → `typescript/openapi/`
   - Go → `go/openapi/`
   - Python → `python/openapi/`
3. **Update wrapper code**: Analyze the spec diff, identify new/changed/removed endpoints, and update the hand-written wrapper clients:
   - TypeScript: `typescript/sdk/clients/*.ts`
   - Go: `go/api/*.go`
   - Python: `python/vayu_sdk/apis/*.py`
4. **Create branch and PR**: Branch off `main`, commit all changes, push, and open a PR via `gh pr create`

### Skill design notes

- The skill is a Claude Code custom slash command defined in the `vayu-sdks` repo
- Developer stays in the loop — can review generated code and wrapper updates before the PR is opened
- If the wrapper code updates look wrong, the developer can intervene and fix before committing

---

## 2. Publish Workflow (on merge to main)

Single workflow: `.github/workflows/publish.yml`

### Trigger

```yaml
on:
  push:
    branches: [main]
```

### Versioning

All 3 SDKs share a **synchronized version number** stored in a single `VERSION` file at the repo root. When any SDK changes are merged, all 3 get bumped and published together.

### Jobs

#### 2a. Version bump

- Read current version from root `VERSION` file
- Increment patch (or minor/major via manual dispatch)
- Commit updated version + create git tag `v{version}`
- Push commit and tag

#### 2b. Publish TypeScript

- Working directory: `typescript/`
- `npm ci && npm run build`
- Update version in `package.json` to match root `VERSION`
- `npm publish --access public`
- Secrets: `NPM_TOKEN`

#### 2c. Publish Python

- Working directory: `python/`
- `python setup.py sdist bdist_wheel`
- Update version in `vayu_sdk/__init__.py` to match root `VERSION`
- `twine upload dist/*`
- Secrets: `PYPI_API_TOKEN`

#### 2d. Publish Go

- Go modules are resolved directly from GitHub — no package manager upload needed
- Create version-specific git tags for supported Go versions:
  - Read `go/version_support/supported_versions.txt`
  - For each Go version, create tag `go/v{version}` (Go module convention for subdirectories)
- Create GitHub Release linking all tags

### Go module path

The Go module path is `github.com/vayucode/vayu-sdks/go`. For Go modules in a monorepo subdirectory, tags must be prefixed with the subdirectory path: `go/v1.0.0` instead of `v1.0.0`. This is a standard Go convention.

Existing consumers using `github.com/weft-finance/vayu-go` will need to update their import path. This is a breaking change documented in the migration guide (ENG-4401).

---

## 3. CI Checks (on PRs)

Single unified workflow: `.github/workflows/ci.yml`

### Trigger

```yaml
on:
  pull_request:
    branches: [main]
```

### Jobs

Each job uses path filters to only run when its subdirectory changes.

#### 3a. TypeScript

- Condition: changes in `typescript/**` or `open-api-files/**`
- Steps: `npm ci`, `npm run build`, `npm run lint`

#### 3b. Go

- Condition: changes in `go/**` or `open-api-files/**`
- Matrix: supported Go versions from `go/version_support/supported_versions.txt`
- Steps: `go build ./...`, `go test ./...`

#### 3c. Python

- Condition: changes in `python/**` or `open-api-files/**`
- Steps: `pip install -r requirements.txt`, `python setup.py sdist bdist_wheel` (build validation)

---

## 4. OpenAPI Generator Config

Standardized across all 3 languages. Single `openapitools.json` at repo root pins version `7.11.0`.

### Generator options per language

| Language | Generator | Key options |
|----------|-----------|-------------|
| TypeScript | `typescript` | `prependFormOrBodyParameters=true`, `disallowAdditionalPropertiesIfNotPresent=false` |
| Go | `go` | Same as above + `enumClassPrefix=true`, `isGoSubmodule=true`, `withGoMod=false` |
| Python | `python` | Same base + `generateSourceCodeOnly=true`, `packageName=openapi` |

All options are defined in `generate.sh` at the repo root.

---

## Decisions log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Spec source | Convention-based (`../vayu`) | Simple, no config needed, devs already have both repos checked out as siblings |
| Versioning | Synchronized across all 3 SDKs | Consumers can easily tell which versions are compatible |
| CI structure | Unified workflow with path-filtered jobs | Less files to maintain, single view of CI status |
| V2 API support | Skipped for now | Only vayu-ts had v2, can be added later |
| Git history | Fresh copy (no history preservation) | Cleaner monorepo history, old history stays in archived repos |

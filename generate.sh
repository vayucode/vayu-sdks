#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SPEC_FILE="$SCRIPT_DIR/open-api-files/open-api.yaml"

if [ ! -f "$SPEC_FILE" ]; then
  echo "Error: OpenAPI spec not found at $SPEC_FILE"
  echo "Copy the spec from the vayu monorepo first."
  exit 1
fi

echo "=== Generating TypeScript client ==="
(yes || true) | npx @openapitools/openapi-generator-cli generate \
  -g typescript \
  --additional-properties=prependFormOrBodyParameters=true,disallowAdditionalPropertiesIfNotPresent=false \
  -o "$SCRIPT_DIR/typescript/openapi" \
  -i "$SPEC_FILE"

# Clean up generated artifacts
rm -rf "$SCRIPT_DIR/typescript/openapi/.openapi-generator" \
       "$SCRIPT_DIR/typescript/openapi/.openapi-generator-ignore" \
       "$SCRIPT_DIR/typescript/openapi/git_push.sh"

echo ""
echo "=== Generating Go client ==="
(yes || true) | npx @openapitools/openapi-generator-cli generate \
  -g go \
  --git-user-id vayucode \
  --git-repo-id vayu-sdks/go \
  --additional-properties=prependFormOrBodyParameters=true,disallowAdditionalPropertiesIfNotPresent=false,enumClassPrefix=true,isGoSubmodule=true,withGoMod=false \
  -o "$SCRIPT_DIR/go/openapi" \
  -i "$SPEC_FILE"

# Clean up generated artifacts
rm -rf "$SCRIPT_DIR/go/openapi/.openapi-generator" \
       "$SCRIPT_DIR/go/openapi/.openapi-generator-ignore" \
       "$SCRIPT_DIR/go/openapi/git_push.sh" \
       "$SCRIPT_DIR/go/openapi/go.mod" \
       "$SCRIPT_DIR/go/openapi/go.sum"

# Fix any remaining placeholder import paths
find "$SCRIPT_DIR/go/openapi" -name '*.go' -exec \
  sed -i 's|github.com/GIT_USER_ID/GIT_REPO_ID|github.com/vayucode/vayu-sdks/go|g' {} +

echo ""
echo "=== Generating Python client ==="
(yes || true) | npx @openapitools/openapi-generator-cli generate \
  -g python \
  --additional-properties=prependFormOrBodyParameters=true,disallowAdditionalPropertiesIfNotPresent=false,generateSourceCodeOnly=true,packageName=openapi \
  -o "$SCRIPT_DIR/python" \
  -i "$SPEC_FILE"

# Clean up generated artifacts
rm -rf "$SCRIPT_DIR/python/.openapi-generator" \
       "$SCRIPT_DIR/python/.openapi-generator-ignore" \
       "$SCRIPT_DIR/python/git_push.sh"

echo ""
echo "=== Done ==="

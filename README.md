# PoC Node.js Application (`poc-node-app`)

Demonstration application consuming shared GitHub Actions workflows and utilities from [`automationinferno/gha-shared-library`](https://github.com/automationinferno/gha-shared-library).

## Workflow Pipeline
Continuous Integration is configured via `.github/workflows/ci.yml` invoking the organization's reusable workflow:

```yaml
jobs:
  call-node-ci:
    uses: automationinferno/gha-shared-library/.github/workflows/reusable-node-ci.yml@v1
    with:
      node-version-file: '.nvmrc'
      run-lint: true
      run-test: true
      run-build: true
```

# Framer code components

code components under code folder

## sync code components

Through framer still not provide any way to sync code components, we use e2e to sync files

1. create `auth.json` at `scripts/auth.json`

```json
{
  "account": "your account",
  "password": "your password"
}
```

2. run e2e script

```bash
node framer/scripts/update-code-components.js
```

### --prod for use https://ringcentral.github.io/juno/index.js

```bash
# node framer/scripts/update-code-components.js --prod
```

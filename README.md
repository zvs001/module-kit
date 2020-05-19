
### Install

`npm install -D @betroll/module-kit`

### Configs

Use tsconfig.json in your module like that:
```json
{
  "extends": "@betroll/module-kit/tsconfig",
  "ts-node": {
    "transpileOnly": true
  }
}
```


### Commands

- `npx module-kit-clean` - will delete all *.js, *.d.ts files in project

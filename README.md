Lib provides utils for typescript modules

### Install

`npm install -D module-kit`

Important: typescript only for now

### Commands

### module-kit-clean

```
module-kit-clean --help
```

Remove files, excluding `index.js` and `cmd.js`
```
module-kit-clean --exclude index.js cmd.js
```

Default glob for deletion:
```
./**/*.js
./**/*.d.ts
./**/*.js.map
!typings
!node_modules
!bin
!_
```

### Configs
Add scripts to your library `package.json`:

```json
{
  "scripts": {
    "prepack": "npx tsc --noEmit false",
    "postpublish": "npm run clean",
    "clean": "npx module-kit-clean"
  }
}
``` 



You can use `tsconfig.json` in your module like that:
```json
{
  "extends": "module-kit/tsconfig",
  "ts-node": {
    "transpileOnly": true
  }
}
```

### Commands

- `npx module-kit-clean` - will delete all `*.js`, `*.d.ts` files in project


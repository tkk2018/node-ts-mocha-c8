# ts-mocha-c8

## How to use

```bash
npm install
npm run build:all
npm run converage
npm run converage:dist
```

## Findings

### `mocha` and `vitest`

1. `vitest` unable to run tests that are inside the `dist` folder.
2. `mocha` can only run tests in the order of folder/filename<sup>[1](https://stackoverflow.com/q/28229424/16027098)</sup>.
   `vitest` has more options<sup>[2](https://github.com/vitest-dev/vitest/discussions/1933)</sup> but I can't find any example.

### `ts-node` and `tsx`

The `tsx` support the `module` out of box.

### `nyc` and `c8`

The main issue is that `nyc` is unable to calculate the correct coverage when the `type` of the `package.json` is `module`. See this [issue](https://github.com/istanbuljs/nyc/issues/1353) for more details.

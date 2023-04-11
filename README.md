# Code challenge

## Requirements

- Node.js (v18+)
- Package manager (pnpm, yarn, npm)

## Files
```
src
  |- code.ts // write your code here
  |- index.ts
  |- lib.ts
testcase
  |- example-in.json // example testcase input
  |- example-out.json // example testcase output
  |- small-in.json // small testcase input
  |- small-out.json // small testcase output
  |- medium-in.json // medium testcase input
  |- medium-out.json // medium testcase output
  |- large-in.json // large testcase input
  |- large-out.json // large testcase output
```

## Commands

### Test your code with testcase (example, small, medium, large)

Format: `pnpm test TESTCASE`

```
$ pnpm test example
```

## Result

### Passed

```
Testcase example: Passed
Memory: 0.010MB
Duration: 0.254ms
```

### Failed

```
Testcase small: Failed
Expected values to be strictly deep-equal:
+ actual - expected ... Lines skipped

  {
    Abagail: [
...
    Kylie: [
      -4899,
+     4809
-     4801
    ],
...
      4487
    ]
  }
Memory: 0.978MB
Duration: 2.803ms
```

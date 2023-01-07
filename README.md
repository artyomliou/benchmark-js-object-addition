# Benchmark JS Object Addition

# Goal

Find a best solution for:

1. Frequent addtion
2. Frequent addtion + Convert to plain object

# Test environment

- Node.js 16
- Laptop with R5-5625u
- Ubuntu 22.04

# How to test

## 3 types of objects

After frequent addition, these objects will be converted into `plain object`.

1. `Plain object`
2. `Map`, then convert with `Object.fromEntries()`
3. Declare `array` and save key-value pair into it, then convert with `Object.fromEntries()`

## 4 sizes

- 10
- 100
- 1000
- 10000

## 3 key types

- number `10000`
- string `"10000"`
- string `"foobar10000"`

## Execution

```
node index.js
```

# Result

## number `10000`

| Test case         | Object |  Map  | Entries |
| :---------------- | :----: | :---: | :-----: |
| 10                |   28   |  59   |   135   |
| 100               |   18   |  12   |   19    |
| 1000              |   57   |  69   |   78    |
| 10000             |  887   | 1165  |  1004   |
| 100000            |  8176  | 15575 |  15135  |
| 10 toObject()     |   6    |  16   |   14    |
| 100 toObject()    |   1    |   7   |    6    |
| 1000 toObject()   |   0    |  66   |   49    |
| 10000 toObject()  |   0    |  655  |   557   |
| 100000 toObject() |   0    | 8308  |  5607   |

## string `"10000"`

| Test case         | Object |  Map  | Entries |
| :---------------- | :----: | :---: | :-----: |
| 10                |   35   |  71   |   135   |
| 100               |   36   |  16   |   26    |
| 1000              |  258   |  111  |   132   |
| 10000             |  1762  | 1549  |  1502   |
| 100000            | 14059  | 17792 |  26615  |
| 10 toObject()     |   7    |  20   |   14    |
| 100 toObject()    |   1    |   8   |    7    |
| 1000 toObject()   |   0    |  72   |   56    |
| 10000 toObject()  |   0    |  708  |   618   |
| 100000 toObject() |   0    | 9033  |  5995   |

## string `"foobar10000"`

| Test case         | Object |  Map  | Entries |
| :---------------- | :----: | :---: | :-----: |
| 10                |   41   |  106  |   166   |
| 100               |   75   |  21   |   28    |
| 1000              |  640   |  181  |   149   |
| 10000             |  5710  | 7129  |  1565   |
| 100000            | 62130  | 27750 |  19887  |
| 10 toObject()     |   6    |  25   |   22    |
| 100 toObject()    |   1    |  68   |   73    |
| 1000 toObject()   |   0    | 2706  |  3395   |
| 10000 toObject()  |   0    | 7194  |  2912   |
| 100000 toObject() |   1    | 47594 |  35866  |

# Conclusion

- For fastest object addition, use `Map()`, but `Entries` could offer more stable performance.
- For fastest object addition and `toObject()` call, use `plain object`.

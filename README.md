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

|           (index) | Object  |   Map   | Entries |
| ----------------: | :-----: | :-----: | :-----: |
|                10 | 0.04ms  | 0.09ms  | 0.28ms  |
|               100 | 0.03ms  | 0.02ms  | 0.08ms  |
|              1000 | 0.09ms  | 0.13ms  | 0.14ms  |
|             10000 | 1.35ms  | 2.12ms  | 1.70ms  |
|            100000 | 15.09ms | 28.86ms | 28.94ms |
|     10 toObject() | 0.01ms  | 0.03ms  | 0.06ms  |
|    100 toObject() | 0.00ms  | 0.01ms  | 0.02ms  |
|   1000 toObject() | 0.00ms  | 0.11ms  | 0.08ms  |
|  10000 toObject() | 0.00ms  | 1.13ms  | 0.96ms  |
| 100000 toObject() | 0.00ms  | 15.61ms | 9.81ms  |

## string `"10000"`

|           (index) | Object  |   Map   | Entries |
| ----------------: | :-----: | :-----: | :-----: |
|                10 | 0.07ms  | 0.12ms  | 0.25ms  |
|               100 | 0.05ms  | 0.03ms  | 0.05ms  |
|              1000 | 0.46ms  | 0.19ms  | 0.23ms  |
|             10000 | 2.58ms  | 2.79ms  | 2.56ms  |
|            100000 | 23.30ms | 34.43ms | 41.63ms |
|     10 toObject() | 0.01ms  | 0.03ms  | 0.04ms  |
|    100 toObject() | 0.00ms  | 0.01ms  | 0.01ms  |
|   1000 toObject() | 0.00ms  | 0.11ms  | 0.09ms  |
|  10000 toObject() | 0.00ms  | 1.13ms  | 1.03ms  |
| 100000 toObject() | 0.00ms  | 15.59ms | 9.54ms  |

## string `"foobar10000"`

|           (index) |  Object  |   Map   | Entries |
| ----------------: | :------: | :-----: | :-----: |
|                10 |  0.08ms  | 0.15ms  | 0.19ms  |
|               100 |  0.11ms  | 0.04ms  | 0.05ms  |
|              1000 |  0.85ms  | 0.27ms  | 0.25ms  |
|             10000 |  8.34ms  | 12.66ms | 2.63ms  |
|            100000 | 121.66ms | 47.10ms | 34.05ms |
|     10 toObject() |  0.01ms  | 0.04ms  | 0.04ms  |
|    100 toObject() |  0.00ms  | 0.14ms  | 0.12ms  |
|   1000 toObject() |  0.00ms  | 4.44ms  | 5.83ms  |
|  10000 toObject() |  0.00ms  | 10.86ms | 4.59ms  |
| 100000 toObject() |  0.00ms  | 69.71ms | 68.79ms |

# Conclusion

- For fastest object addition, use `Map()`, but `Entries` could offer more stable performance.
- For fastest object addition and `toObject()` call, use `plain object`.

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

Environment = nodejs 14 & R5-5625U

## number `10000`

|           (index) | Object  |   Map   | Entries |
| ----------------: | :-----: | :-----: | :-----: |
|                10 | 0.03ms  | 0.08ms  | 0.26ms  |
|               100 | 0.03ms  | 0.02ms  | 0.03ms  |
|              1000 | 0.25ms  | 0.13ms  | 0.18ms  |
|             10000 | 1.49ms  | 1.81ms  | 1.60ms  |
|            100000 | 18.16ms | 35.44ms | 25.89ms |
|     10 toObject() | 0.01ms  | 0.02ms  | 0.01ms  |
|    100 toObject() | 0.00ms  | 0.01ms  | 0.01ms  |
|   1000 toObject() | 0.00ms  | 0.06ms  | 0.06ms  |
|  10000 toObject() | 0.00ms  | 0.94ms  | 0.55ms  |
| 100000 toObject() | 0.00ms  | 14.52ms | 5.99ms  |

## string `"10000"`

|           (index) | Object  |   Map   | Entries |
| ----------------: | :-----: | :-----: | :-----: |
|                10 | 0.04ms  | 0.12ms  | 0.32ms  |
|               100 | 0.05ms  | 0.02ms  | 0.03ms  |
|              1000 | 0.37ms  | 0.13ms  | 0.14ms  |
|             10000 | 2.82ms  | 2.06ms  | 1.46ms  |
|            100000 | 29.73ms | 30.37ms | 30.44ms |
|     10 toObject() | 0.01ms  | 0.03ms  | 0.02ms  |
|    100 toObject() | 0.00ms  | 0.01ms  | 0.01ms  |
|   1000 toObject() | 0.00ms  | 0.06ms  | 0.07ms  |
|  10000 toObject() | 0.00ms  | 0.96ms  | 0.59ms  |
| 100000 toObject() | 0.00ms  | 22.14ms | 7.03ms  |

## string `"foobar10000"`

|           (index) | Object  |   Map   | Entries |
| ----------------: | :-----: | :-----: | :-----: |
|                10 | 0.04ms  | 0.09ms  | 0.25ms  |
|               100 | 0.08ms  | 0.03ms  | 0.03ms  |
|              1000 | 0.60ms  | 0.20ms  | 0.18ms  |
|             10000 | 8.16ms  | 5.09ms  | 1.76ms  |
|            100000 | 84.55ms | 32.37ms | 22.95ms |
|     10 toObject() | 0.01ms  | 0.03ms  | 0.02ms  |
|    100 toObject() | 0.00ms  | 0.09ms  | 0.08ms  |
|   1000 toObject() | 0.00ms  | 2.74ms  | 3.79ms  |
|  10000 toObject() | 0.00ms  | 2.96ms  | 3.35ms  |
| 100000 toObject() | 0.00ms  | 60.03ms | 38.63ms |

# Conclusion

- For fastest object addition, use `Map()`, but `Entries` could offer more stable performance.
- For fastest object addition and `toObject()` call, use `plain object`.

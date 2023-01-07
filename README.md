Benchmark JS Object Addition
============================

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
After frequent addition, these objects will be converted into plain object.  
1. Plain object
2. Map
3. Keep key and value in array, then convert with Object.fromEntries()

## 4 sizes
- 10 
- 100
- 1000
- 10000

## 3 key types
- number ```10000```
- string ```"10000"```
- string ```"foobar10000"```

# Result
## number ```10000```
│ index            │ Object │ Map  │ Entries │
│------------------|--------|------|---------|
│ 10               │   29   │  32  │   42    │
│ 100              │   20   │  12  │   19    │
│ 1000             │   59   │  80  │   110   │
│ 10000            │  964   │ 1085 │  1474   │
│ 10 toObject()    │   5    │  13  │   10    │
│ 100 toObject()   │   0    │  9   │   15    │
│ 1000 toObject()  │   0    │  64  │   60    │
│ 10000 toObject() │   0    │ 1105 │   611   │

## string ```"10000"```
│ index            │ Object │ Map  │ Entries │
│------------------|--------|------|---------|
│ 10               │   32   │  62  │   43    │
│ 100              │   24   │  16  │   23    │
│ 1000             │  300   │  97  │   119   │
│ 10000            │  1872  │ 1328 │  1568   │
│ 10 toObject()    │   6    │  18  │   10    │
│ 100 toObject()   │   0    │  16  │    8    │
│ 1000 toObject()  │   1    │  75  │   62    │
│ 10000 toObject() │   0    │ 1123 │   570   │

## string ```"foobar10000"```
│ index            │ Object │ Map  │ Entries │
│------------------|--------|------|---------|
│ 10               │   39   │  48  │   81    │
│ 100              │   81   │  17  │   23    │
│ 1000             │  659   │ 126  │   103   │
│ 10000            │  5463  │ 2362 │  1593   │
│ 10 toObject()    │   6    │  16  │   18    │
│ 100 toObject()   │   1    │  88  │   39    │
│ 1000 toObject()  │   0    │ 3118 │   657   │
│ 10000 toObject() │   0    │ 4254 │  3637   │

# Conclusion
- For numeric key, always use plain object.  
- For string key, the length of key matters. Both Map and entries could be good candidate. But if we take the cost of ```toObject()``` into consideration, the performance of plain object has no obvious disadvantage.
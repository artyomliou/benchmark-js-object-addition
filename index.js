import { performance } from 'node:perf_hooks'
const keyTransformer = (num) => num
const sizes = [10, 100, 1000, 10000, 100000]
const types = [
  {
    title: 'Object',
    create() {
      this.obj = {}
    },
    set(k, v) {
      this.obj[k] = v
    },
    toObject() {
      return this.obj
    },
    clear() {
      this.obj = null
    }
  },
  {
    title: 'Map',
    create() {
      this.map = new Map()
    },
    set(k, v) {
      this.map.set(k, v)
    },
    toObject() {
      return Object.fromEntries(this.map)
    },
    clear() {
      this.map = null
    }
  },
  {
    title: 'Entries',
    create() {
      this.entries = new Array()
    },
    set(k, v) {
      this.entries.push([k, v])
    },
    toObject() {
      return Object.fromEntries(this.entries)
    },
    clear() {
      this.entries = null
    }
  },
]
const result = {
  '10': {},
  '10 toObject()': {},
  '100': {},
  '100 toObject()': {},
  '1000': {},
  '1000 toObject()': {},
  '10000': {},
  '10000 toObject()': {},
  '100000': {},
  '100000 toObject()': {},
}
for (const type of types) {
  for (const size of sizes) {
    // Addition
    const additionStart = performance.now()
    type.create()
    for (let i = 0; i < size; i++) {
      type.set(keyTransformer(i), `tttteeeesssstttt${i}`)
    }
    const additionEnd = performance.now()
    result[`${size}`][type.title] = (additionEnd - additionStart).toFixed(2) + 'ms'

    // toObject()
    const toObjectStart = performance.now()
    type.toObject()
    const toObjectEnd = performance.now()
    result[`${size} toObject()`][type.title] = (toObjectEnd - toObjectStart).toFixed(2) + 'ms'

    // Clear
    type.clear()
  }
}
console.table(result)
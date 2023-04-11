import { writeFileSync } from 'fs'

import { faker } from '@faker-js/faker'

import { Input, Output, findAlmostMinMax } from './code.ts'

const createTestcase = (n: number, m: number): Input => Array(n).fill(0).reduce(
  (prev) => {
    const len = Math.round(Math.random() * (m - 3)) + 3
    return {
      [faker.name.firstName()]: Array(len).fill(0).map(() => Math.round((Math.random() - 0.5) * m * 100)),
      ...prev,
    }
  },
  {
    A: Array(m).fill(0),
    B: Array(3).fill(0),
    C: [0, 1, 1],
    D: [1, 2, 3],
    E: [1, 2, 3, 4],
    F: [1, 2, 3, 4, 5],
    G: [5, 4, 3, 2, 1],
    H: [4, 3, 2, 1],
    I: [3, 2, 1],
    J: [1, 1, 0],
    K: [1, 1, 2, 3, 3],
    L: [3, 3, 2, 1, 1],
  },
)

const [testcase] = process.argv.slice(-1)
const input = createTestcase(1_000, 1_000)
writeFileSync(`testcase/${testcase}-in.json`, JSON.stringify(input))
const output: Output = Object.entries(input).reduce(
  (prev, [key, arr]) => ({
    ...prev,
    [key]: findAlmostMinMax(arr),
  }),
  {},
)
writeFileSync(`testcase/${testcase}-out.json`, JSON.stringify(output))

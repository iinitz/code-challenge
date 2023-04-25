import { writeFileSync } from 'fs'

import { Input, Output, genFibo } from './code.ts'

const createTestcase = (n: number): Input => Array(n).fill(0).map(() => Math.round(Math.random() * n + 2))

const [testcase] = process.argv.slice(-1)
const input = createTestcase(100_000)
writeFileSync(`testcase/${testcase}-in.json`, JSON.stringify(input))
const fibo = genFibo(Math.max(...input))
const output: Output = input.map((x) => fibo[x] ?? 'None')
writeFileSync(`testcase/${testcase}-out.json`, JSON.stringify(output))

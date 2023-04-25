import { testFn } from './lib.ts'

export type Input = number[]
export type Output = (number | 'None')[]

export const genFibo = (x: number): { [k: number]: number } => {
  const fibo = { 0: 0, 1: 1 }
  let i = 0 // n - 2
  let j = 1 // n - 1
  let n = 1
  while (j < x) {
    n += 1
    const tmp = i + j // n
    i = j
    j = tmp
    fibo[tmp] = n
  }
  return fibo
}
const fn = (input: Input) => {
  const fibo = genFibo(Math.max(...input))
  const output: Output = input.map((x) => fibo[x] ?? 'None')
  return output
}

export default testFn<Input, Output>(fn)

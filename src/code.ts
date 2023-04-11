import { testFn } from './lib.ts'

export type Input = {
  [key: string]: number[]
}
export type Output = {
  [key: string]: number[] | string
}

export const findAlmostMinMax = (arr: number[]) => {
  const set = new Set(arr)
  if (set.size < 3) {
    return 'None'
  }
  const sorted = [...set].sort((a, b) => a - b)
  return [sorted[1], sorted[sorted.length - 2]]
}
const fn = (input: Input) => {
  const output: Output = Object.entries(input).reduce(
    (prev, [key, arr]) => ({
      ...prev,
      [key]: findAlmostMinMax(arr),
    }),
    {},
  )
  return output
}

export default testFn<Input, Output>(fn)

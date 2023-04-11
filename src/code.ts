import { testFn } from './lib.ts'

type Input = {
  // Input type
}
type Output = {
  // Output type
}

// Implement your function here
const fn = (input: Input) => {
  console.log(input)
  const output: Output = {}
  return output
}

export default testFn<Input, Output>(fn)

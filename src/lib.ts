type Fn<I, O> = (input: I) => O | Promise<O>
export const testFn = <I, O>(fn: Fn<I, O>) => (input: I): Promise<O> => new Promise((resolve, reject) => {
  try {
    const output = fn(input)
    resolve(output)
  } catch (err) {
    reject(err)
  }
})

export const importTestcase = async (testcase: string) => {
  try {
    const { default: input } = await import(`../testcase/${testcase}-in.json`, {
      assert: {
        type: 'json',
      },
    })
      .catch(() => {
        console.error(`Load testcase ${testcase} failed: Check \`testcase/${testcase}-in.json\` exist.`)
      })
    const { default: output } = await import(`../testcase/${testcase}-out.json`, {
      assert: {
        type: 'json',
      },
    })
      .catch(() => {
        console.error(`Load testcase ${testcase} failed: Check \`testcase/${testcase}-out.json\` exist.`)
      })
    return {
      input,
      output,
    }
  } catch (err) {
    return {
      input: null,
      output: null,
    }
  }
}

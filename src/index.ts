import { AssertionError, deepStrictEqual } from 'assert'
import { PerformanceObserver, performance } from 'perf_hooks'

import fn from './code.ts'
import { importTestcase } from './lib.ts'

const prefObs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration.toFixed(3)}ms`)
  })
})
prefObs.observe({ entryTypes: ['measure'], buffered: true })

const main = async () => {
  if (process.argv.length === 3) {
    const [testcase] = process.argv.slice(-1)
    const { input, output } = await importTestcase(testcase)
    if (input && output) {
      const start = process.memoryUsage().heapUsed / 1_024 / 1_024
      performance.mark('start')
      const result = await fn(input)
      performance.mark('end')
      const used = process.memoryUsage().heapUsed / 1_024 / 1_024
      try {
        deepStrictEqual(result, output)
        console.log(`Testcase ${testcase}: Passed`)
      } catch (err) {
        console.log(`Testcase ${testcase}: Failed`)
        const { message } = err as AssertionError
        console.error(message)
      } finally {
        performance.measure('Duration', 'start', 'end')
        console.log(`Memory: ${(used - start).toFixed(3)}MB`)
      }
    }
  } else {
    throw new Error('Please provide testcase name [example, small, medium, large]: `$ pnpm test example`')
  }
}
main()
  .catch((err: Error) => console.error(err.message))

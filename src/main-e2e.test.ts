import { run } from './main'
import { Dirent, existsSync } from 'fs'
import smellsJson from './testHelpers/drtools-summary-smells.json'
import metricsJson from './testHelpers/drtools-metric-summary.json'
import coocurrencesJson from './testHelpers/drtools-cooccurrences-smells.json'
import smellsLimitsJson from './testHelpers/smells-limits.json'
import { output } from './testHelpers/final.output'
import { setOutput, setFailed } from '@actions/core'

jest.mock('fs/promises', () => ({
  readdir: async () =>
    Promise.resolve([{ isDirectory: () => true, name: 'dirName' } as Dirent])
}))

jest.mock('fs', () => ({
  readFileSync: (path: string) => {
    if (path.includes('drtools-summary-smells')) {
      return JSON.stringify(smellsJson)
    } else if (path.includes('drtools-metric-summary')) {
      return JSON.stringify(metricsJson)
    } else if (path.includes('drtools-cooccurrences-smells')) {
      return JSON.stringify(coocurrencesJson)
    } else {
      return JSON.stringify(smellsLimitsJson)
    }
  },
  existsSync: jest.fn().mockReturnValue(true)
}))

jest.mock('@actions/core', () => ({
  getInput: () => 'basePath',
  setOutput: jest.fn(),
  setFailed: jest.fn(),
  debug: jest.fn()
}))

describe('Action', () => {
  it('should pass and write to PR', async () => {
    await run()
    expect((setOutput as jest.Mock).mock.calls[0][1]).toBe(output)
  })

  it('if there are no limits, should set output but not fail message', async () => {
    ;(existsSync as jest.Mock).mockReturnValueOnce(false)
    await run()
    expect(setOutput).toHaveBeenCalled()
    expect(setFailed).not.toHaveBeenCalled()
  })

  it('if there are smells over limits, should set output and fail message', async () => {
    await run()
    expect(setOutput).toHaveBeenCalled()
    expect(setFailed).toHaveBeenCalled()
  })
})

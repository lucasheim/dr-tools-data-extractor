import { output } from '../testHelpers/drtools-cooccurrences-smells.output'
import { parseCooccurrencesSummary } from './coocurrences'

const coocurrenceSmells = import(
  '../testHelpers/drtools-cooccurrences-smells.json'
)

describe('Coocurrences Parser', () => {
  it('should parse', async () => {
    const coocurrencesJson = (await coocurrenceSmells).default
    const response = parseCooccurrencesSummary(JSON.stringify(coocurrencesJson))
    expect(response).toBe(output)
  })
})

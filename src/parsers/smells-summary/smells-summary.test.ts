import { parseSmellsSummary } from './smells-summary'
import { output } from '../../testHelpers/drtools-summary-smells.output'

const summarySmells = import('../../testHelpers/drtools-summary-smells.json')

describe('Smells Summary Parser', () => {
  it('should parse', async () => {
    const smellsSummaryJson = (await summarySmells).default
    const response = parseSmellsSummary(JSON.stringify(smellsSummaryJson))
    expect(response).toBe(output)
  })
})

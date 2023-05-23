import { parseMetricSummary } from './metric-summary'
import { output } from '../testHelpers/drtools-metric-summary.output'

const summaryMetrics = import('../testHelpers/drtools-metric-summary.json')

describe('Metric Summary Parser', () => {
  it('should parse', async () => {
    const metricsSummaryJson = (await summaryMetrics).default
    const response = parseMetricSummary(JSON.stringify(metricsSummaryJson))
    expect(response).toBe(output)
  })
})

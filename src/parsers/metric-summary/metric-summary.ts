import { outputTemplate } from './metric-summary.output'
import { Metric } from './metric-summary.types'

export const parseMetricSummary = (metricSummaryFile: string): string => {
  const metricsSummary: Metric[] = JSON.parse(metricSummaryFile)

  return outputTemplate(metricsSummary)
}

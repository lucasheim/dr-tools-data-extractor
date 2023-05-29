import { formatNumber } from '../common'
import {
  MetricMap,
  FormattedMetricMap,
  MetricNames,
  MetricAverageExplanation,
  FormattedMetric,
  Metric
} from './metric-summary.types'

export const outputTemplate = (metrics: Metric[]): string => {
  const mappedMetrics = mapEntries(metrics)

  return `| Description     | Total      |  Average      | Median        | Standard Deviation    |
|:----------------|-----------:|--------------:|--------------:|----------------------:|
${outputTableRow(mappedMetrics[MetricMap.NAMESPACES])}
${outputTableRow(mappedMetrics[MetricMap.TYPES])}
${outputTableRow(mappedMetrics[MetricMap.SLOC])}
${outputTableRow(mappedMetrics[MetricMap.METHODS])}
${outputTableRow(mappedMetrics[MetricMap.CYCLO])}
`
}

const mapEntries = (metrics: Metric[]): FormattedMetricMap => {
  return metrics.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.description]: {
        description: MetricNames[curr.description as MetricMap],
        value: String(curr.value),
        percent: `${String(curr.percent)} ${
          MetricAverageExplanation[curr.description as MetricMap]
        }`,
        median: formatNumber(curr.median),
        std_dev: formatNumber(curr.std_dev)
      }
    }),
    {}
  ) as FormattedMetricMap
}

const outputTableRow = (metric: FormattedMetric): string => {
  return `| ${metric.description} | ${metric?.value} | ${metric.percent} | ${metric.median} | ${metric.std_dev} |`
}

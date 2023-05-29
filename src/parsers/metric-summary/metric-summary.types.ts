export type FormattedMetricMap = {
  [key in MetricMap]: FormattedMetric
}

export interface Metric {
  description: string
  value: number
  percent: number
  median: number
  std_dev: number
}

export type FormattedMetric = {
  description: string
  value: string
  percent: string
  median: string
  std_dev: string
}

export enum MetricMap {
  NAMESPACES = 'total_namespaces',
  TYPES = 'total_types',
  SLOC = 'total_sloc',
  METHODS = 'total_methods',
  CYCLO = 'total_cyclo'
}

export const MetricNames: { [key in MetricMap]: string } = {
  [MetricMap.NAMESPACES]: 'Namespaces',
  [MetricMap.TYPES]: 'Types',
  [MetricMap.SLOC]: 'SLOC',
  [MetricMap.METHODS]: 'Methods',
  [MetricMap.CYCLO]: 'CYCLO'
}

export const MetricAverageExplanation: { [key in MetricMap]: string } = {
  [MetricMap.NAMESPACES]: '',
  [MetricMap.TYPES]: '(types/namespaces)',
  [MetricMap.SLOC]: '(SLOC/types)',
  [MetricMap.METHODS]: '(methods/types)',
  [MetricMap.CYCLO]: '(CYCLO/types)'
}

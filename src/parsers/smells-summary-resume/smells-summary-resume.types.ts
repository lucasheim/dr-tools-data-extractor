export interface SmellsSummaryResume {
  granularity: string
  total_smells: number
  perc_total_smells: string
  more_than_one_smell: number
  perc_more_than_one_smell: string
  total: number
  perc_total: string
}

export enum Granularity {
  NAMESPACE = 'NAMESPACE',
  TYPES = 'TYPE',
  METHODS = 'METHOD'
}

export const GranularityDescriptionMap = {
  [Granularity.NAMESPACE]: 'Namespaces',
  [Granularity.TYPES]: 'Types',
  [Granularity.METHODS]: 'Methods'
}

export type FormattedSmellSummaryMap = {
  [key in Granularity]: FormattedSmellSummary
}

export type FormattedSmellSummary = {
  description: string
  total_smells: number
  perc_total_smells: string
  more_than_one_smell: number
  perc_more_than_one_smell: string
  total: number
  perc_total: string
}

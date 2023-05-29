import { outputTemplate } from './smells-summary.output'
import { SmellsSummary } from './smells-summary.types'

export const parseSmellsSummary = (smellsSummaryFile: string): string => {
  const smellsSummary: SmellsSummary[] = JSON.parse(smellsSummaryFile)

  return outputTemplate(smellsSummary)
}

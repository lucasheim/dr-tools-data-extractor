interface Smell {
  smell: string
  instances: string
  perc_instances: string
}

export interface AnalysisBlock {
  granularity: string
  smells: Smell[]
}

const parseSmell = (smells: Smell[]): string => {
  return smells
    .map(
      ({ smell, instances, perc_instances }) =>
        `**${smell}** - ${instances} instances - ${perc_instances}\n`
    )
    .join('')
}

export const parseSmellsSummary = (smellsSummaryFile: string): string => {
  const smellsSummary: AnalysisBlock[] = JSON.parse(smellsSummaryFile)

  return smellsSummary
    .map(
      ({ granularity, smells }) => `### ${granularity}\n${parseSmell(smells)}`
    )
    .join('')
}

import { Granularity, GranularityDescriptionMap } from '../common'
import { Smell, SmellsSummary } from './smells-summary.types'

type FormattedSmellsSummary = {
  [key in Granularity]: Smell[]
}

export const outputTemplate = (smellsSummary: SmellsSummary[]): string => {
  const entries = mapEntries(smellsSummary)
  return `${outputSection(entries, Granularity.NAMESPACE)}\n
${outputSection(entries, Granularity.TYPES)}\n
${outputSection(entries, Granularity.METHODS)}`
}

const outputSection = (
  granularitySummary: FormattedSmellsSummary,
  granularity: Granularity
): string => {
  const sectionSummary = granularitySummary[granularity]
  if (!sectionSummary || !sectionSummary.length) {
    return ''
  }

  return `### ${GranularityDescriptionMap[granularity]}
| Smell | # of Instances | % |
|:----------------|-----------:|------------------------------:|
${sectionSummary.map(outputTableRow).join('\n')}`
}

const outputTableRow = ({
  instances,
  perc_instances,
  smell
}: Smell): string => {
  return `| ${smell} | ${instances} | ${perc_instances} |`
}

const mapEntries = (smellsSummary: SmellsSummary[]): FormattedSmellsSummary => {
  return smellsSummary.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.granularity]: curr.smells
    }),
    {}
  ) as FormattedSmellsSummary
}

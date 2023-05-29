import {
  FormattedSmellSummary,
  FormattedSmellSummaryMap,
  Granularity,
  GranularityDescriptionMap,
  SmellsSummaryResume
} from './smells-summary-resume.types'

export const outputTemplate = (
  smellsSummaryResume: SmellsSummaryResume[]
): string => {
  const mappedSmellSummaries = mapEntries(smellsSummaryResume)
  return `| Granularity | Smell Detected | with more than one smell |
|:----------------|-----------:|------------------------------:|
${outputTableRow(mappedSmellSummaries[Granularity.NAMESPACE])}
${outputTableRow(mappedSmellSummaries[Granularity.TYPES])}
${outputTableRow(mappedSmellSummaries[Granularity.METHODS])}`
}

const mapEntries = (data: SmellsSummaryResume[]): FormattedSmellSummaryMap => {
  return data.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.granularity]: {
        description: GranularityDescriptionMap[curr.granularity as Granularity],
        total_smells: curr.total_smells,
        perc_total_smells: curr.perc_total_smells,
        more_than_one_smell: curr.more_than_one_smell,
        perc_more_than_one_smell: curr.perc_more_than_one_smell,
        total: curr.total,
        perc_total: curr.perc_total
      }
    }),
    {}
  ) as FormattedSmellSummaryMap
}

const outputTableRow = ({
  description,
  more_than_one_smell,
  perc_more_than_one_smell,
  perc_total,
  perc_total_smells,
  total,
  total_smells
}: FormattedSmellSummary): string => {
  return `| ${description} | **${total_smells}** (${perc_total_smells}) of **${total}** | **${more_than_one_smell}** (${perc_more_than_one_smell} of detected or ${perc_total} of total) |`
}

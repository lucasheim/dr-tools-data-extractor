import { Granularity, GranularityDescriptionMap } from '../common'
import { CoOcurrence, CoOcurrencesCategorized } from './coocurrences.types'

type FormattedCoOcurrences = {
  [key in Granularity]: CoOcurrence[]
}

export const outputTemplate = (
  coocurrences: CoOcurrencesCategorized[]
): string => {
  const entries = mapEntries(coocurrences)
  return `${[
    outputSection(entries, Granularity.NAMESPACE),
    outputSection(entries, Granularity.TYPES),
    outputSection(entries, Granularity.METHODS)
  ].join('\n\n')}`
}

const mapEntries = (
  coocurrences: CoOcurrencesCategorized[]
): FormattedCoOcurrences => {
  return coocurrences.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.category]: curr.data
    }),
    {}
  ) as FormattedCoOcurrences
}

const outputSection = (
  categorizedCooccurrences: FormattedCoOcurrences,
  granularity: Granularity
): string => {
  const sectionSummary = categorizedCooccurrences[granularity]
  if (!sectionSummary || !sectionSummary.length) {
    return ''
  }

  return `**Category: ${GranularityDescriptionMap[granularity]}**
| Co-Occurrence | # of Instances | % | Impacts on |
|:----------------|-----------:|-------------:|:---------------|
${sectionSummary.map(outputTableRow).join('\n')}`
}

const outputTableRow = ({
  description,
  impacts_on,
  instances,
  percentual
}: CoOcurrence): string => {
  return `| ${description} | ${instances} | ${percentual} | ${impacts_on} |`
}

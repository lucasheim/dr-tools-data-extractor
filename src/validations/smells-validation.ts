import { parseSmellLimits } from '../parsers/smells-limits'
import { AnalysisBlock } from '../parsers/smells-summary'

interface LimitError {
  smell: string
  maximumExpected: number
  found: number
  granularity: string
}

export const validateSmellsLimit = (
  smellsSummaryFile: string,
  smellLimitsFile: string
): LimitError[] => {
  const foundSmells = JSON.parse(smellsSummaryFile) as AnalysisBlock[]
  if (foundSmells.length === 0) {
    return []
  }
  const existingSmellsMap: {
    [granularity: string]: { [smell: string]: number }
  } = foundSmells.reduce(
    (prev, { granularity, smells }) => ({
      ...prev,
      [granularity]: smells.reduce(
        (previous, { smell, instances }) => ({
          ...previous,
          [smell]: instances
        }),
        {}
      )
    }),
    {}
  )

  const limitSmellMap = parseSmellLimits(smellLimitsFile)
  return limitSmellMap.reduce((prev, { granularity, limits }) => {
    const limitedSmells = Object.keys(limits)
    const surpassed = limitedSmells.filter(
      smell => existingSmellsMap[granularity][smell] > limits[smell]
    )

    return [
      ...prev,
      ...surpassed.map(sm => ({
        granularity,
        smell: sm,
        maximumExpected: limits[sm],
        found: existingSmellsMap[granularity][sm]
      }))
    ]
  }, [] as LimitError[])
}

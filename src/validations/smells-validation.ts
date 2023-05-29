import * as core from '@actions/core'
import { parseSmellLimits } from '../parsers/smells-limits'
import { SmellsSummary } from '../parsers/smells-summary/smells-summary.types'

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
  const foundSmells = JSON.parse(smellsSummaryFile) as SmellsSummary[]

  core.debug(`Found Smells: ${foundSmells}`)

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

  core.debug(`Smells Map: ${existingSmellsMap}`)

  const limitSmellMap = parseSmellLimits(smellLimitsFile)

  core.debug(`Smells limit map: ${limitSmellMap}`)

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

import { outputTemplate } from './coocurrences.output'
import { CoOcurrencesCategorized } from './coocurrences.types'

export const parseCooccurrencesSummary = (coocurrenceFile: string): string => {
  const coocurrences: CoOcurrencesCategorized[] = JSON.parse(coocurrenceFile)

  return outputTemplate(coocurrences)
}

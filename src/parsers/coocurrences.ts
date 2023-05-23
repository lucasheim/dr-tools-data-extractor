interface CoOcurrencesCategorized {
  category: string
  data: CoOcurrence[]
}

interface CoOcurrence {
  description: string
  instances: number
  percentual: string
  smells: string
  impacts_on: string
}

const parseCooccurrences = (coocurrences: CoOcurrence[]): string => {
  return coocurrences
    .map(
      ({ description, instances, percentual, impacts_on }) =>
        `**${description}** - ${instances} instances - ${percentual}\nImpacts on: ${impacts_on}`
    )
    .join('\n\n')
}

export const parseCooccurrencesSummary = (coocurrenceFile: string): string => {
  const coocurrences: CoOcurrencesCategorized[] = JSON.parse(coocurrenceFile)

  return coocurrences
    .map(({ category, data }) => `# ${category}\n${parseCooccurrences(data)}\n`)
    .join('')
}

interface Metric {
  description: string
  value: number
  percent: number
  median: number
  std_dev: number
}

const fromSnakeCaseToCapitalized = (text: string): string => {
  return text
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => [word.charAt(0).toUpperCase(), ...word.slice(1)].join(''))
    .join(' ')
}

export const parseMetricSummary = (metricSummaryFile: string): string => {
  const metricsSummary: Metric[] = JSON.parse(metricSummaryFile)

  return metricsSummary
    .map(
      ({ description, value }) =>
        `**${fromSnakeCaseToCapitalized(description)}** - ${value}\n`
    )
    .join('')
}

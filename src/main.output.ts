export const outputTemplate = (
  metricsSummary: string,
  smellsSummary: string,
  coocurrences: string
): string => `# :man_health_worker: DR-Tools Diagnosis :woman_health_worker:

## General metrics :bar_chart:
${metricsSummary}

## Smells :wastebasket:
${smellsSummary}

## Coocurrences :link:
${coocurrences}`

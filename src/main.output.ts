export const outputTemplate = (
  metricsSummary: string,
  smellsSummary: string,
  coocurrences: string
): string => `# :man-health-worker: DR-Tools Diagnosis :woman-health-worker:

## General metrics :bar_chart:
${metricsSummary}

## Smells :wastebasket:
${smellsSummary}

## Coocurrences :link:
${coocurrences}`

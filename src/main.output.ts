export const outputTemplate = (
  metricsSummary: string,
  smellsSummary: string,
  coocurrences: string
): string => `# DR-Tools Diagnosis

## General metrics
${metricsSummary}

## Smells
${smellsSummary}

## Coocurrences
${coocurrences}`

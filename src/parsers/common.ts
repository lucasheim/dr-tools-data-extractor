export enum Granularity {
  NAMESPACE = 'NAMESPACE',
  TYPES = 'TYPE',
  METHODS = 'METHOD'
}

export const GranularityDescriptionMap = {
  [Granularity.NAMESPACE]: 'Namespaces',
  [Granularity.TYPES]: 'Types',
  [Granularity.METHODS]: 'Methods'
}

export const formatNumber = (value: number): string => {
  if (!value) {
    return '-'
  }
  return value.toFixed(2)
}

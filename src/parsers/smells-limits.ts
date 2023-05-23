export interface SmellLimit {
  granularity: string
  limits: {
    [smell: string]: number
  }
}

export const parseSmellLimits = (smellLimitsFile: string): SmellLimit[] => {
  const smellLimits: SmellLimit[] = JSON.parse(smellLimitsFile)

  return smellLimits
}

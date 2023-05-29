export interface SmellsSummary {
  granularity: string
  smells: Smell[]
}

export interface Smell {
  smell: string
  instances: string
  perc_instances: string
}

export interface CoOcurrencesCategorized {
  category: string
  data: CoOcurrence[]
}

export interface CoOcurrence {
  description: string
  instances: number
  percentual: string
  smells: string
  impacts_on: string
}

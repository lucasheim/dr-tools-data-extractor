export interface BaseRankingItem {
  severity: string
  representativity: string
  quality: string
  intervention: string
  cdi: string
}

export interface MethodRankingItem extends BaseRankingItem {
  method: string
  line: number
}

export interface TypeRankingItem extends BaseRankingItem {
  type: string
}

export interface NamespaceRankingItem extends BaseRankingItem {
  namespace: string
}

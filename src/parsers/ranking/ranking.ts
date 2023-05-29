import { outputTemplate } from './ranking.output'
import {
  MethodRankingItem,
  NamespaceRankingItem,
  TypeRankingItem
} from './ranking.type'

export const parseRanking = (
  namespaceRankingFile: string,
  typeRankingFile: string,
  methodRankingFile: string
): string => {
  const namespaceRanking: NamespaceRankingItem[] =
    JSON.parse(namespaceRankingFile)
  const typeRanking: TypeRankingItem[] = JSON.parse(typeRankingFile)
  const methodRanking: MethodRankingItem[] = JSON.parse(methodRankingFile)

  return outputTemplate(namespaceRanking, typeRanking, methodRanking)
}

import { Granularity } from '../common'
import {
  BaseRankingItem,
  MethodRankingItem,
  NamespaceRankingItem,
  TypeRankingItem
} from './ranking.type'

const rankingConfig = {
  [Granularity.NAMESPACE]: {
    field: 'namespace',
    title: 'Namespaces',
    column: 'Namespace',
    top: 10
  },
  [Granularity.TYPES]: {
    field: 'type',
    title: 'Types',
    column: 'Type',
    top: 20
  },
  [Granularity.METHODS]: {
    field: 'method',
    title: 'Methods',
    column: 'Method',
    top: 20
  }
}

export const outputTemplate = (
  namespaceRanking: NamespaceRankingItem[],
  typeRanking: TypeRankingItem[],
  methodRanking: MethodRankingItem[]
): string => {
  return `<details>

${[
  outputSection<NamespaceRankingItem>(namespaceRanking, Granularity.NAMESPACE),
  outputSection<TypeRankingItem>(typeRanking, Granularity.TYPES),
  outputSection<MethodRankingItem>(methodRanking, Granularity.METHODS)
].join('\n')}

</details>`
}

const outputSection = <T extends BaseRankingItem>(
  items: T[],
  granularity: Granularity
): string => {
  const { field, title, column, top } = rankingConfig[granularity]

  return `## Most Critical ${title} (Top ${top})
| ${column} | Severity | Representativity | Quality | Intervention | CDI |
|:----------------|-----------:|-------------:|---------------:|-----------------:|--------------:|
${items
  .slice(0, top)
  .map(item => outputTableRow(item, field))
  .join('\n')}`
}

const outputTableRow = <T extends BaseRankingItem>(
  item: T,
  field: string
): string => {
  return `| ${item[field as keyof T]} | ${item.severity} | ${
    item.representativity
  } | ${item.quality} | ${item.intervention} |  **${item.cdi}** |`
}

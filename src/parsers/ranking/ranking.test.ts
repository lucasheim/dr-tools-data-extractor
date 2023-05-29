import { output } from '../../testHelpers/drtools-ranking.output'
import { parseRanking } from './ranking'

const namespaceRankingFile = import(
  '../../testHelpers/drtools-cdi-namespaces.json'
)

const typesRankingFile = import('../../testHelpers/drtools-cdi-types.json')

const methodsRankingFile = import('../../testHelpers/drtools-cdi-methods.json')

describe('Ranking Parser', () => {
  it('should parse', async () => {
    const namespaceRankingJson = (await namespaceRankingFile).default
    const typesRankingJson = (await typesRankingFile).default
    const methodsRankingJson = (await methodsRankingFile).default
    const response = parseRanking(
      JSON.stringify(namespaceRankingJson),
      JSON.stringify(typesRankingJson),
      JSON.stringify(methodsRankingJson)
    )
    expect(response).toBe(output)
  })
})

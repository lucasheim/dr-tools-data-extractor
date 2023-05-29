import { output } from '../../testHelpers/drtools-summary-smells-resume.output'
import { parseSmellsResume } from './smells-summary-resume'

const smellsResume = import(
  '../../testHelpers/drtools-summary-smells-resume.json'
)

describe('Smells Summary Parser', () => {
  it('should parse', async () => {
    const smellsResumeJson = (await smellsResume).default
    const response = parseSmellsResume(JSON.stringify(smellsResumeJson))
    expect(response).toBe(output)
  })
})

import { SmellsSummaryResume } from './smells-summary-resume.types'
import { outputTemplate } from './smells-summary-resume.output'

export const parseSmellsResume = (smellsSummaryResumeFile: string): string => {
  const smellsSummary: SmellsSummaryResume[] = JSON.parse(
    smellsSummaryResumeFile
  )

  return outputTemplate(smellsSummary)
}

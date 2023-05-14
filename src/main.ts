import * as core from '@actions/core'
import { readdir } from 'fs/promises'
import path from 'path'
import { readFileSync } from 'fs'

interface Smell {
  smell: string
  instances: string
  perc_instances: string
}

interface AnalysisBlock {
  granularity: string
  smells: Smell[]
}

async function run(): Promise<void> {
  try {
    const getDirectories = async (source: string) =>
      (
        await readdir(path.resolve(process.cwd(), source), {
          withFileTypes: true
        })
      )
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

    const [directoryName] = await getDirectories(
      './spring-boot-project/spring-boot/.drtools/analysis/'
    )

    const smellsSummaryFile = readFileSync(
      `./spring-boot-project/spring-boot/.drtools/analysis/${directoryName}/smells/drtools-summary-smells.json`,
      'utf-8'
    )
    const smellsSummary: AnalysisBlock[] = JSON.parse(smellsSummaryFile)

    const formatSmells = (smells: Smell[]) => {
      return smells.map(
        ({ smell, instances, perc_instances }) =>
          `*${smell}* - ${instances} instances - ${perc_instances}\n`
      )
    }

    const text = smellsSummary.map(
      ({ granularity, smells }) => `# ${granularity}\n${formatSmells(smells)}`
    )

    core.setOutput('prtext', text)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

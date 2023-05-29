import * as core from '@actions/core'
import { readdir } from 'fs/promises'
import path from 'path'
import { existsSync, readFileSync } from 'fs'
import { validateSmellsLimit } from './validations/smells-validation'
import { outputTemplate } from './main.output'
import { parseMetricSummary } from './parsers/metric-summary/metric-summary'
import { parseCooccurrencesSummary } from './parsers/coocurrences/coocurrences'
import { parseSmellsSummary } from './parsers/smells-summary/smells-summary'
import { parseRanking } from './parsers/ranking/ranking'

enum AnalysisFiles {
  SmellsSummary,
  MetricsSummary,
  CoOcurrencesSmells,
  SmellLimits,
  NamespaceRanking,
  TypeRanking,
  MethodRanking
}

const pathMap: { [key in AnalysisFiles]: (basePath: string) => string } = {
  [AnalysisFiles.SmellsSummary]: (basePath: string) =>
    `${basePath}/smells/drtools-summary-smells.json`,
  [AnalysisFiles.MetricsSummary]: (basePath: string) =>
    `${basePath}/metrics/drtools-metric-summary.json`,
  [AnalysisFiles.CoOcurrencesSmells]: (basePath: string) =>
    `${basePath}/smells/drtools-cooccurrences-smells.json`,
  [AnalysisFiles.SmellLimits]: (basePath: string) =>
    `${basePath}/smells-limits.json`,
  [AnalysisFiles.NamespaceRanking]: (basePath: string) =>
    `${basePath}/ranking/drtools-cdi-namespaces.json`,
  [AnalysisFiles.TypeRanking]: (basePath: string) =>
    `${basePath}/ranking/drtools-cdi-types.json`,
  [AnalysisFiles.MethodRanking]: (basePath: string) =>
    `${basePath}/ranking/drtools-cdi-methods.json`
}

const getDirectories = async (source: string): Promise<string[]> =>
  (
    await readdir(path.resolve(process.cwd(), source), {
      withFileTypes: true
    })
  )
    .filter(file => file.isDirectory())
    .map(dir => dir.name)

export async function run(): Promise<void> {
  try {
    const baseFolder = core.getInput('basePath')

    const [directoryName] = await getDirectories(`${baseFolder}/analysis/`)

    core.debug(`Directory name: ${directoryName}`)

    const baseAnalysisPath = `${baseFolder}/analysis/${directoryName}`

    core.debug(`Analysis Path: ${baseAnalysisPath}`)

    core.debug(
      `Smells Summary Path: ${pathMap[AnalysisFiles.SmellsSummary](
        baseAnalysisPath
      )}`
    )

    const smellsSummaryFile = readFileSync(
      pathMap[AnalysisFiles.SmellsSummary](baseAnalysisPath),
      'utf-8'
    )
    const smellsSummary = parseSmellsSummary(smellsSummaryFile)

    core.debug(`Smells Summary: ${smellsSummaryFile}`)

    core.debug(
      `Metrics Summary Path: ${pathMap[AnalysisFiles.MetricsSummary](
        baseAnalysisPath
      )}`
    )

    const metricsSummaryFile = readFileSync(
      pathMap[AnalysisFiles.MetricsSummary](baseAnalysisPath),
      'utf-8'
    )
    const metricsSummary = parseMetricSummary(metricsSummaryFile)

    core.debug(`Metrics Summary: ${metricsSummaryFile}`)

    core.debug(
      `Coocurrences Path: ${pathMap[AnalysisFiles.CoOcurrencesSmells](
        baseAnalysisPath
      )}`
    )

    const coocurrencesFile = readFileSync(
      pathMap[AnalysisFiles.CoOcurrencesSmells](baseAnalysisPath),
      'utf-8'
    )
    const coocurrences = parseCooccurrencesSummary(coocurrencesFile)

    core.debug(`Coocurrences: ${coocurrencesFile}`)

    const namespaceRankingFile = readFileSync(
      pathMap[AnalysisFiles.NamespaceRanking](baseAnalysisPath),
      'utf-8'
    )

    const typeRankingFile = readFileSync(
      pathMap[AnalysisFiles.TypeRanking](baseAnalysisPath),
      'utf-8'
    )

    const methodRankingFile = readFileSync(
      pathMap[AnalysisFiles.MethodRanking](baseAnalysisPath),
      'utf-8'
    )

    const ranking = parseRanking(
      namespaceRankingFile,
      typeRankingFile,
      methodRankingFile
    )

    const smellsLimitPath = pathMap[AnalysisFiles.SmellLimits](baseFolder)

    core.debug(`Limits Path: ${smellsLimitPath}`)

    if (existsSync(smellsLimitPath)) {
      core.debug('Exists limits')

      const smellLimits = readFileSync(smellsLimitPath, 'utf-8')

      core.debug(`Limits content: ${smellLimits}`)

      const violations = validateSmellsLimit(smellsSummaryFile, smellLimits)

      core.debug(`Violations: ${violations}`)

      if (violations.length) {
        core.setFailed(JSON.stringify(violations))
      }
    }

    const pullRequestOutput = outputTemplate(
      metricsSummary,
      smellsSummary,
      coocurrences,
      ranking
    )

    core.setOutput('prtext', pullRequestOutput)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) core.setFailed(error)
  }
}

run()

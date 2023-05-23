import { validateSmellsLimit } from './smells-validation'
import smellsJson from '../testHelpers/drtools-summary-smells.json'
import smellsLimitsJson from '../testHelpers/smells-limits.json'

describe('Smells Validations', () => {
  it('should return empty array if smell summary is empty', () => {
    const smellsSummaryFile = '[]'
    const smellsLimitsFile = JSON.stringify(smellsLimitsJson)
    const response = validateSmellsLimit(smellsSummaryFile, smellsLimitsFile)
    expect(response).toStrictEqual([])
  })

  it('should return empty array if limit file is empty', () => {
    const smellsSummaryFile = JSON.stringify(smellsJson)
    const smellsLimitsFile = '[]'
    const response = validateSmellsLimit(smellsSummaryFile, smellsLimitsFile)
    expect(response).toStrictEqual([])
  })

  it('should return violation if there is one', () => {
    const smellsSummaryFile = JSON.stringify(smellsJson)
    const smellsLimitsFile = JSON.stringify([
      {
        granularity: 'TYPE',
        limits: {
          'Insufficient Modularization': 200
        }
      }
    ])
    const response = validateSmellsLimit(smellsSummaryFile, smellsLimitsFile)
    expect(response).toStrictEqual([
      {
        granularity: 'TYPE',
        smell: 'Insufficient Modularization',
        maximumExpected: 200,
        found: 208
      }
    ])
  })

  it('should return violations of different granularities', () => {
    const smellsSummaryFile = JSON.stringify(smellsJson)
    const smellsLimitsFile = JSON.stringify([
      {
        granularity: 'TYPE',
        limits: {
          'Insufficient Modularization': 200
        }
      },
      {
        granularity: 'NAMESPACE',
        limits: {
          'Too Large Package/Subsystem': 0
        }
      }
    ])
    const response = validateSmellsLimit(smellsSummaryFile, smellsLimitsFile)
    expect(response).toStrictEqual([
      {
        smell: 'Insufficient Modularization',
        granularity: 'TYPE',
        maximumExpected: 200,
        found: 208
      },
      {
        smell: 'Too Large Package/Subsystem',
        granularity: 'NAMESPACE',
        maximumExpected: 0,
        found: 11
      }
    ])
  })
})

export const outputTemplate = (
  metricsSummary: string,
  smellsSummary: string,
  coocurrences: string,
  ranking: string
): string => `![DR-Tools Logo](https://guilhermeslacerda.github.io/drtools-site/images/logo_drtools.png?raw=true)


DR-Tools Code Health - Diagnosis
================================

- [DR-Tools Code Health - Diagnosis](#dr-tools-code-health---diagnosis)
- [Metrics](#metrics)
  - [Summary](#summary)
- [Smells](#smells)
  - [Smell Summary](#smell-summary)
  - [Smell Detected](#smell-detected)
    - [Namespace](#namespace)
    - [Type](#type)
    - [Method](#method)
  - [Co-Occurrences](#co-occurrences)
- [Ranking and Prioritization](#ranking-and-prioritization)
  - [Most Critical Namespaces (Top 10)](#most-critical-namespaces-top-10)
  - [Most Critical Types (Top 20)](#most-critical-types-top-20)
  - [Most Critical Methods (Top 20)](#most-critical-methods-top-20)
  
# Metrics

## Summary

${metricsSummary}

# Smells

## Summary

${smellsSummary}

## Co-Ocurrences

${coocurrences}

# Ranking and Prioritization

${ranking}

**Legend:**

*Criteria (severity, representativity, quality, intervention):* Values between 1 (less critical) and 10 (more critical)
*CDI (code disease indicator):* Values between 1 (less critical) and 100 (more critical)

**Explanation:**

<font size="2">

* The **severity** of a code element is determined by the sum of the severities of the smells present in the element, considering the weights given to their importance, which can be defined by the developer.

* The **representativity** defines how representative the smells present in a code element are compared to other smells at the same granularity. Based on representativeness, it is possible to assess which code elements are most affected by smells at a given granularity.

* The **impact on quality** is determined by mapping the quality attributes associated with smells to their respective weights, also defined by the developer.

* The **intervention** defines the degree of importance in addressing a given code element, considering the perception of the developers, who can customize these weights.

The **DR-Tools Code Health** allows analyzing each of these criteria individually and in their respective granularity. These values are presented and normalized on a scale of 1 (less critical) to 10 (more critical).
Additionally, a normalized indicator is provided that aggregates all these criteria, called the *Code Disease Indicator (CDI)*, with values ranging from 1 (least critical) to 100 (most critical).

</font>`

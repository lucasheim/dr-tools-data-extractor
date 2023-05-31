export const output = `![DR-Tools Logo](https://guilhermeslacerda.github.io/drtools-site/images/logo_drtools.png?raw=true)


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

| Description     | Total      |  Average      | Median        | Standard Deviation    |
|:----------------|-----------:|--------------:|--------------:|----------------------:|
| Namespaces | 109 | 100  | - | - |
| Types | 1060 | 9 (types/namespaces) | 5.00 | 14.79 |
| SLOC | 88702 | 83 (SLOC/types) | 44.00 | 140.20 |
| Methods | 9816 | 9 (methods/types) | 5.00 | 4.82 |
| CYCLO | 22109 | 20 (CYCLO/types) | - | - |


# Smells

## Summary

### Namespaces
| Smell | # of Instances | % |
|:----------------|-----------:|------------------------------:|
| Too Large Package/Subsystem | 11 | 100.00% |

### Types
| Smell | # of Instances | % |
|:----------------|-----------:|------------------------------:|
| Insufficient Modularization | 208 | 96.30% |
| Multifaceted Abstraction | 51 | 23.61% |
| Deep Hierarchy | 24 | 11.11% |
| God Class | 10 | 4.63% |
| Hub-like Modularization | 5 | 2.31% |
| Deficient Encapsulation | 1 | 0.46% |
| Wide Hierarchy | 1 | 0.46% |

### Methods
| Smell | # of Instances | % |
|:----------------|-----------:|------------------------------:|
| Complex Method | 1706 | 90.84% |
| Bumpy Road | 509 | 27.10% |
| Long Method | 43 | 2.29% |
| Long Parameter List | 34 | 1.81% |

## Co-Ocurrences

<details>

**Category: Types**
| Co-Occurrence | # of Instances | % | Impacts on | Smells |
|:----------------|-----------:|-------------:|:---------------|--:|
| Complex and low cohesion structures in types | 36 | 16.67% | Cohesion, Complexity | Insufficient Modularization, Multifaceted Abstraction |
| Deep hierarchy, big and low cohesion structures in types | 5 | 2.31% | Complexity, Size | God Class, Insufficient Modularization, Deep Hierarchy, Multifaceted Abstraction |
| Low cohesion and big structures in types | 2 | 0.93% | Cohesion, Size | Insufficient Modularization, God Class |
| Complex structures in types | 1 | 0.46% | Complexity, Size | God Class, Insufficient Modularization, Multifaceted Abstraction |
| Low cohesion and high coupling structures in types | 1 | 0.46% | Cohesion, Coupling | Insufficient Modularization, Hub-Like Modularization |

**Category: Methods**
| Co-Occurrence | # of Instances | % | Impacts on | Smells |
|:----------------|-----------:|-------------:|:---------------|--:|
| High complexity structures in methods | 343 | 18.26% | Complexity | Complex Method, Bumpy Road |
| Structures difficult to maintain in methods  | 17 | 0.91% | Complexity, Size | Complex Method, Long Method |
| Several parameters and complex structures in methods | 15 | 0.80% | Complexity, Size | Long Parameter List, Complex Method |
| Complex structures in methods | 12 | 0.64% | Complexity | Bumpy Road, Long Method, Complex Method |
| Big structures in methods | 1 | 0.05% | Size | Long Method, Long Parameter List |

</details>

# Ranking and Prioritization

<details>

## Most Critical Namespaces (Top 10)
| Namespace | Severity | Representativity | Quality | Intervention | CDI |
|:----------------|-----------:|-------------:|---------------:|-----------------:|--------------:|
| org.springframework.boot.context.config | 10.000 | 1.000 | 1.000 | 1.000 |  **10.000** |
| org.springframework.boot | 6.946 | 1.000 | 1.000 | 1.000 |  **6.946** |
| org.springframework.boot.context.properties.source | 6.143 | 1.000 | 1.000 | 1.000 |  **6.143** |
| org.springframework.boot.convert | 6.143 | 1.000 | 1.000 | 1.000 |  **6.143** |
| org.springframework.boot.context.properties.bind | 4.054 | 1.000 | 1.000 | 1.000 |  **4.054** |
| org.springframework.boot.context.properties | 3.732 | 1.000 | 1.000 | 1.000 |  **3.732** |
| org.springframework.boot.web.servlet | 2.125 | 1.000 | 1.000 | 1.000 |  **2.125** |
| org.springframework.boot.env | 1.643 | 1.000 | 1.000 | 1.000 |  **1.643** |
| org.springframework.boot.web.server | 1.161 | 1.000 | 1.000 | 1.000 |  **1.161** |
| org.springframework.boot.logging.logback | 1.161 | 1.000 | 1.000 | 1.000 |  **1.161** |
## Most Critical Types (Top 20)
| Type | Severity | Representativity | Quality | Intervention | CDI |
|:----------------|-----------:|-------------:|---------------:|-----------------:|--------------:|
| org.springframework.boot.SpringApplication | 8.871 | 10.000 | 10.000 | 10.000 |  **88.707** |
| org.springframework.boot.context.properties.ConfigurationPropertiesTests | 10.000 | 7.750 | 5.784 | 6.625 |  **67.196** |
| org.springframework.boot.context.properties.bind.JavaBeanBinderTests | 5.555 | 7.750 | 5.784 | 6.625 |  **37.328** |
| org.springframework.boot.web.servlet.server.AbstractServletWebServerFactoryTests | 4.996 | 7.750 | 5.784 | 6.625 |  **33.568** |
| org.springframework.boot.SpringApplicationTests | 4.306 | 7.750 | 5.784 | 6.625 |  **28.933** |
| org.springframework.boot.context.properties.source.ConfigurationPropertyName | 3.486 | 7.750 | 8.297 | 6.625 |  **26.345** |
| org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory | 3.704 | 7.750 | 5.784 | 6.625 |  **24.890** |
| org.springframework.boot.context.properties.bind.ValueObjectBinderTests | 2.602 | 5.500 | 4.568 | 4.000 |  **12.199** |
| org.springframework.boot.context.properties.bind.Binder | 1.980 | 5.500 | 4.568 | 4.000 |  **9.282** |
| org.springframework.boot.jdbc.DataSourceBuilder | 1.919 | 5.500 | 2.865 | 4.000 |  **7.911** |
| org.springframework.boot.context.properties.bind.MapBinderTests | 1.901 | 5.500 | 2.865 | 4.000 |  **7.835** |
| org.springframework.boot.context.properties.bind.CollectionBinderTests | 1.793 | 5.500 | 2.865 | 4.000 |  **7.390** |
| org.springframework.boot.jdbc.DataSourceBuilderTests | 1.749 | 5.500 | 2.865 | 4.000 |  **7.210** |
| org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory | 1.745 | 5.500 | 2.865 | 4.000 |  **7.194** |
| org.springframework.boot.context.config.ConfigDataEnvironmentContributors | 1.511 | 5.500 | 4.568 | 4.000 |  **7.086** |
| org.springframework.boot.context.config.ConfigDataEnvironmentPostProcessorIntegrationTests | 1.580 | 3.250 | 3.189 | 2.125 |  **4.511** |
| org.springframework.boot.web.reactive.server.AbstractReactiveWebServerFactoryTests | 1.510 | 3.250 | 3.189 | 2.125 |  **4.310** |
| org.springframework.boot.env.ConfigTreePropertySource | 1.239 | 3.250 | 3.189 | 2.125 |  **3.538** |
| org.springframework.boot.context.properties.ConfigurationPropertiesBeanFactoryInitializationAotProcessorTests | 1.397 | 3.250 | 2.135 | 2.125 |  **3.497** |
| org.springframework.boot.context.properties.bind.BindableRuntimeHintsRegistrarTests | 1.396 | 3.250 | 2.135 | 2.125 |  **3.495** |
## Most Critical Methods (Top 20)
| Method | Severity | Representativity | Quality | Intervention | CDI |
|:----------------|-----------:|-------------:|---------------:|-----------------:|--------------:|
| org.springframework.boot.web.embedded.jetty.JettyWebServer.start() | 10.000 | 10.000 | 10.000 | 10.000 |  **100.000** |
| org.springframework.boot.context.properties.source.ConfigurationPropertyName.defaultElementEquals(Elements e1, Elements e2, int i) | 9.441 | 10.000 | 10.000 | 10.000 |  **94.410** |
| org.springframework.boot.context.properties.source.ConfigurationPropertyName.dashIgnoringElementEquals(Elements e1, Elements e2, int i) | 9.417 | 10.000 | 10.000 | 10.000 |  **94.167** |
| org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize() | 9.417 | 10.000 | 10.000 | 10.000 |  **94.167** |
| org.springframework.boot.context.properties.source.ConfigurationPropertyName$ElementsParser.parse(Function<CharSequence,CharSequence> valueProcessor) | 9.004 | 10.000 | 10.000 | 10.000 |  **90.035** |
| org.springframework.boot.web.embedded.undertow.UndertowWebServer.start() | 8.979 | 10.000 | 10.000 | 10.000 |  **89.792** |
| org.springframework.boot.env.OriginTrackedPropertiesLoader.load(boolean expandLists) | 8.542 | 10.000 | 10.000 | 10.000 |  **85.418** |
| org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory.createManager(ServletContextInitializer... initializers) | 8.226 | 10.000 | 10.000 | 10.000 |  **82.258** |
| org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory.getDocumentRootResourceManager() | 8.080 | 10.000 | 10.000 | 10.000 |  **80.800** |
| org.springframework.boot.cloud.CloudFoundryVcapEnvironmentPostProcessor.flatten(Properties properties, Map<String,Object> input, String path) | 7.983 | 10.000 | 10.000 | 10.000 |  **79.828** |
| org.springframework.boot.context.properties.bind.DataObjectPropertyName.toDashedForm(String name) | 7.618 | 10.000 | 10.000 | 10.000 |  **76.182** |
| org.springframework.boot.context.config.ConfigDataImporter.load(ConfigDataLoaderContext loaderContext, List<ConfigDataResolutionResult> candidates) | 7.302 | 10.000 | 10.000 | 10.000 |  **73.023** |
| org.springframework.boot.context.properties.ConfigurationPropertiesBean.create(String name, Object instance, Class<?> type, Method factory, BindMethod bindMethod) | 7.205 | 10.000 | 7.972 | 8.024 |  **62.435** |
| org.springframework.boot.context.properties.ConfigurationPropertiesBean.ConfigurationPropertiesBean(String name, Object instance, ConfigurationProperties annotation, Bindable<?> bindTarget, BindMethod bindMethod) | 5.724 | 10.000 | 7.972 | 8.024 |  **49.601** |
| org.springframework.boot.context.config.ConfigDataEnvironment.ConfigDataEnvironment(DeferredLogFactory logFactory, ConfigurableBootstrapContext bootstrapContext, ConfigurableEnvironment environment, ResourceLoader resourceLoader, Collection<String> additionalProfiles, ConfigDataEnvironmentUpdateListener environmentUpdateListener) | 5.724 | 10.000 | 7.972 | 8.024 |  **49.601** |
| org.springframework.boot.env.ConfigTreePropertySource$PropertyFileContent.PropertyFileContent(Path path, Resource resource, Origin origin, boolean cacheContent, boolean autoTrimTrailingNewLine) | 5.527 | 10.000 | 7.972 | 8.024 |  **47.890** |
| org.springframework.boot.context.properties.source.ConfigurationPropertyName$Elements.Elements(CharSequence source, int size, int[] start, int[] end, ElementType[] type, CharSequence[] resolved) | 5.428 | 10.000 | 7.972 | 8.024 |  **47.035** |
| org.springframework.boot.SpringApplication.prepareContext(DefaultBootstrapContext bootstrapContext, ConfigurableApplicationContext context, ConfigurableEnvironment environment, SpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) | 6.382 | 10.000 | 5.817 | 5.390 |  **45.113** |
| org.springframework.boot.context.properties.source.SpringIterableConfigurationPropertySource$Mappings.updateMappings(String[] propertyNames) | 7.357 | 5.500 | 6.197 | 5.171 |  **41.366** |
| org.springframework.boot.web.embedded.tomcat.TomcatWebServer.rethrowDeferredStartupExceptions() | 6.719 | 5.500 | 6.197 | 5.171 |  **37.778** |

</details>

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

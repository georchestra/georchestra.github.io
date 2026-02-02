---
layout: post
title: "El nuevo módulo de analítica"
date: 2026-01-29 09:00:00
lang: es
uid: 2026-01-29
---

[ Traducción automática (ChatGPT)]

El nuevo módulo de Analítica, tema de debates y presentaciones en todas las reuniones de la comunidad desde hace más de 2 años, se lanzará próximamente. Para abrir el apetito, aquí tienes una breve descripción de cómo funciona este módulo.

<a href="https://docs.georchestra.org/analytics/en/latest/user_guide/images/ogcstats.png"><img src="https://docs.georchestra.org/analytics/en/latest/user_guide/images/ogcstats.png" alt="Visualización de uso OGC" style="width:500px;"></a>

<!--más-->

## ¿Por qué un nuevo módulo?

geOrchestra cuenta desde hace tiempo con un módulo de analítica cuyo objetivo es recopilar datos de uso de los servicios OGC y proporcionar representaciones gráficas: número de solicitudes por capas de mapa, por organización, por usuario.

La necesidad de sustituir este módulo se hizo evidente con el reemplazo progresivo del Security-proxy por el Gateway. En efecto, la recopilación de logs estaba en parte codificada en el proxy de seguridad, y el Gateway no está pensado para asumir este papel: las tecnologías actuales permiten imaginar una recopilación mediante mecanismos más desacoplados.

Todo el antiguo módulo de analítica ha prestado un buen servicio durante muchos años, pero ahora carece de flexibilidad: las visualizaciones de datos están “codificadas a mano”, al igual que las tablas de la base de datos, y el análisis de uso se limita estrictamente a los datos OGC. E incluso así, se limita a los servicios WxS (no cubre los nuevos estándares OGC API).

No olvidemos que el seguimiento del uso de la plataforma está en el centro de las necesidades de reporting, ya que permite justificar los recursos invertidos en herramientas tecnológicas, pero también el tiempo dedicado a un mapa, una visualización o un conjunto de datos. Justificar y, por lo tanto… financiar. Cuanto más control se tenga sobre la visualización de los datos, más se podrá mostrar en detalle el impacto del tiempo y los recursos invertidos.

Por ello, se decidió considerar un reemplazo completo de este módulo.

Desde el geOcom 2023 de la comunidad, un grupo de trabajo se ha centrado en el tema. Las elecciones técnicas no son evidentes. Se han realizado varias presentaciones: [geOcom 2023](https://www.georchestra.org/public/geocom2023/presentation/AmeliorationsStatsUsages.pdf), [geOcom 2024](https://www.georchestra.org/public/geocom2024/presentations/jour_2/11%20-%20JP%20-%20Am%C3%A9lioration%20des%20statistiques%20d%E2%80%99usage.pdf), [geOcom 2025](https://www.georchestra.org/public/geocom2025/presentations/jour_2_matin/01_JP_NR_Superset_de_la_dataviz_dans_geOrchestra.pdf).

A finales de 2024, la financiación de la región francesa de Hauts-de-France permitió lanzar el desarrollo de este nuevo módulo, complementado por financiación de la MEL para la cobertura de OGC API Feature (actualmente en curso).

## Un nuevo módulo… ¡que hace lo mismo!

Sí, efectivamente. En su estado actual, hace más o menos lo mismo:

- el Gateway expone sus logs de acceso,
- estos logs de acceso se recopilan y se almacenan en una base de datos,
- luego se procesan para extraer información relevante y, por ahora, solo procesan el uso OGC. El resultado se almacena en forma de tablas y vistas en la base de datos,
- una visualización de datos ofrece gráficos que muestran: número de solicitudes por capas de mapa, por organización, por usuario ;o). Exagero un poco: hay algunos más.

## Sí, pero entonces, ¿cuál es el punto?

De acuerdo, volvamos a la lista anterior para destacar algunas diferencias:

- el Gateway expone sus logs de acceso **_mediante un estándar, [OpenTelemetry](https://github.com/open-telemetry)_**. De hecho, _cualquier herramienta_ capaz de exponer sus logs de acceso mediante OpenTelemetry puede conectarse al sistema.
- estos logs de acceso se recopilan **_mediante una herramienta “lista para usar”_**, [Vector](https://vector.dev/), y se almacenan en una base de datos.
    - Esta herramienta es altamente configurable, acepta múltiples fuentes de datos, puede transformarlas sobre la marcha, incluso fusionarlas. Y su mantenimiento no es responsabilidad del proyecto geOrchestra.
    - la **_base de datos utilizada está optimizada para grandes volúmenes de datos de series temporales_**. Se trata de [TimescaleDB](https://en.wikipedia.org/wiki/TimescaleDB). TimescaleDB es una extensión de PostgreSQL que añade varias funcionalidades clave para esta optimización: vistas de agregación de datos en un intervalo de tiempo determinado (vistas por hora, por día, por lo que se desee) que se actualizan automáticamente, gestión de retención de datos, compresión, particionamiento automático. Todo ello es, por supuesto, altamente configurable.
- luego se procesan para extraer información relevante y, por ahora, solo procesan el uso OGC. El resultado se almacena en forma de tablas y vistas en la base de datos.
    - El procesamiento de datos es, de hecho, la única herramienta desarrollada internamente. Un [CLI en Python](https://github.com/georchestra/analytics/tree/main/analytics-cli) que, aunque actualmente solo cubre datos OGC, está diseñado para ser fácil de enriquecer con funcionalidades que vayan más allá del uso OGC. Lenguaje Python, para ser accesible a todos.
    - Aquí de nuevo y, sobre todo, utilizamos la base de datos TimescaleDB para optimizar los tiempos de respuesta de la visualización de datos y la capacidad de la base de datos para manejar la carga a lo largo del tiempo.
- una visualización de datos **_en Apache Superset_** ofrece gráficos que muestran: número de solicitudes por capas de mapa, por organización, por usuario ;o). Exagero un poco: hay algunos más. Y, sobre todo, podrás añadir fácilmente tus propios gráficos, compartirlos con la comunidad, etc. Te recuerdo que la integración de Apache Superset en geOrchestra se llevó a cabo en la primera mitad de 2025 y fue [presentada](https://www.georchestra.org/public/geocom2025/presentations/jour_2_matin/01_JP_NR_Superset_de_la_dataviz_dans_geOrchestra.pdf) en el [geOcom 2025](https://www.georchestra.org/fr/geocom2025/). Una vez más, utilizamos un componente “listo para usar”, o casi. Y, de hecho, eres libre de construir tu visualización de datos con otra herramienta si no te gusta Superset.

La noción clave aquí es, por tanto, la **_flexibilidad_**. También hemos optado por apoyarnos en la mayor medida posible en estándares y herramientas existentes, en el espíritu del proyecto geOrchestra, con la idea de la interoperabilidad, pero también con el objetivo de limitar los costes de mantenimiento del software a lo largo del tiempo.

La contrapartida de esta elección es que, para que todos estos componentes funcionen juntos como se espera, deben ensamblarse y configurarse meticulosamente. [El repositorio del nuevo módulo de analítica](https://github.com/georchestra/analytics) y la [documentación](https://docs.georchestra.org/analytics/en/latest/) que lo acompaña te proporcionarán valores estándar, pero dado que cada plataforma tiene sus propias particularidades, probablemente será necesario verificar cada paso durante la instalación y la configuración.

He trabajado mucho en la documentación, que espero sea suficientemente exhaustiva, pero deberá leerse con atención.

No hay duda de que este nuevo módulo será ampliamente debatido y probablemente modificado en la [reunión comunitaria de invierno](https://www.georchestra.org/blog/2026/01/08/community-meeting-2026-registration-fr/) dentro de dos meses.

Jean, por el proyecto geOrchestra

![Flujo de trabajo del módulo de analítica](/public/analytics2026/global-workflow.png)
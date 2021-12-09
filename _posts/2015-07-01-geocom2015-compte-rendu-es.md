---
layout: post
title: "Actas de la GeoCom 2015"
date: 2015-07-01 16:00:00
lang: es
uid: 2015-07-01
---

La Maison de l'Alsacia fue sede de la GeoCom en 2015 del 22 al 24 de junio, que tuvo lugar en excelentes condiciones. Cuarenta personas, de la comunidad de usuarios, administradores y desarrolladores, se unieron para compartir prácticas y desarrollar el plan de trabajo para el próximo año. El evento fue transmitido en vivo por YouTube, lo que permitió a varias personas distantes seguir el encuentro.

<!--more-->

<a href="/public/geocom2015/20150623_153316.JPG" hreflang="fr"><img src="/public/geocom2015/20150623_153316_mini.JPG" alt="geocom2015" style="float:right; margin: 0 0 1em 1em;" title="geocom 2015, la communauté" /></a>

La primera jornada del lunes se dedicó a las presentaciones de las plataformas, y recordatorios sobre  el “ecosistema geOrchestra". Concluyó con un estado de situación puesto en perspectiva con los decisiones registradas en la hoja de ruta definida en al anterior GeoCom en en 2014.  
El día martes se realizaron una serie de intervenciones en torno a tres temas principales: **valorización de servicios**, **la publicación de los datos**, **mantenimiento de plataformas**. Algunas de las presentaciones están disponibles en línea (en francés):

 * [Integrar aplicaciones de terceros en geOrchestra](http://slides.com/sebastienpelhate/geocom2015)
 * Capas a objetos con Elasticsearch
 * [Inspirobot, los metadatos de puntuación](http://slides.com/lecault/inspirobot#/)
 * Monitoreo de servicios
 * [Geonetwork 3](https://docs.google.com/presentation/d/1gi5MkZcPIWDLtG8xTmdGE3zoymXohGac8K-tGug39QQ/)
 * [Capacitación a geOrchestra](http://slides.com/stlejer-morvrini/deck/fullscreen)
 * [La página georchestra.org ](https://docs.google.com/presentation/d/15SqLVcHlhEaMRjzQwOSlck7RqGgWWXcSwNiH5YYEjQw/)

Por último, el miércoles fue dedicada al desarrollo común de la hoja de ruta, que transcribimos aquí.


## Interoperabilidad : abrir los datos en otro almacenes

La conexión con los servicios geográficos básicos (visualización, acceso a datos, búsqueda de metadatos) es un hecho. La comunidad ahora quiere interactuar con otros sistemas de manejo de la información de datos localizables. Apoyarse en la normas TJS, SOS, WPS reduciría las interrupciones entre sistemas. Del mismo modo, la capacidad de intercambiar datos con el mundo OpenStreetMap conciliaría las Infraestructuras de datos Espaciales con las bases de datos contributivas. Para que estas diversas fuentes puedan ser mezcladas, analizadas y compartidas  por los usuarios, es necesario que los contextos (es decir las configuraciones de mapas) sean compatibles con estas normas. 

 * El consumo de datos tabulares mediante Table Join Service
 * Interrogación del sensores  mediante Sensor Observation Service
 * Apoyo genérico para servicios de procesamiento de Web
 * Contextos de mapa que integren servicios WMTS y otras interfaces (OWSContext)
 * Intercambio de datos con OpenStreetMap



## Gestión Plataforma: dominar la complejidad

En “IDE”,  la letra "I" se refiere a Infraestructuras. Una infraestructura esta constituida por módulos múltiples que hay que  que monitorear constantemente. Se debe proporcionar a los administradores tableros completos, todo acerca del uso (la carga, el uso) que el sistema (es decir, las consecuencias de la carga) o la calidad (apreciaciones de los usuarios, informes de errores, calidad de la información).

 * Arquitectura de informes (reporting)
 * Configuración de todos los módulos disponibles para el administrador de datos
 * La simplificación de la administración del módulo Geofence
 * “Single sign on” en federaciones de identidad  (Shibboleth)


## Flujo de trabajo ergoconómico: simplificar, delegar para ahorrar tiempo

Las evoluciones de geOrchestra apuntan a ahorrar tiempo para todas las personas: los usuarios, los administradores, los productores de datos.  Volverlo más simple, y así poder delegar más y ahorrar mas tiempo, pero conservando las opciones de configuración fina y personalización necesaria para el alto rendimiento.

 * delegación del flujo de trabajo para la  publicación (geonetwork, geoservidor, módulo independiente, QGIS …)
 * función de búsqueda unificada de datos, metadatos, contenidos literales
 * generador de estilos enriquecido, nuevas clasificaciones, estilizado de rasters
 * consola de administración, en particular de los usuarios
 * encabezado compatible con la reutilización de módulos en sitios de terceros
 * escritura y conversión de metadatos en una hoja de cálculo (módulo Zaphir CIGAL)
 * visualización directa de metadatos en los visualizadores.
 * Mejora de la ergo-economía de consulta y administración del catálogo (geonetwork 3 cswreader y mdreader)


## El apoyo comunitario : intercambio de conocimientos

El apoyo comunitario también debe ser "libre". El contenido estructurado en "granos" que se unen a una oferta de formación / apoyo común (un MOOC). La comunidad debe desarrollar un reflejo de intercambio de conocimientos y saber-hacer, intercambiando las intenciones de cada uno antes d realizarlas para que para cualquier oportunidad sea utilizable, e informando posteriormente sobre los logros alcanzados.

 * base común de formación integrada de contenido existente
 * vvigilancia tecnológica y pruebas de concepto por las plataformas
 * partage et capitalisation des bonnes pratiques
 * mise à disposition des applicatifs tiers sur github



## Usos profesionales y especializados : afrontar los retos

Asegurarse que la  IDE responda a necesidades actuales, ya sea directamente (módulos especializados en  "contribución al geOrchestra") o mostrando que es posible  (productos “estrella”, mejores prácticas, API …)

 * perfiles de usuario, incluyendo en particular un contexto adecuado a la especialidad del usuario por defecto
 * módulo de catastro, en fase de desarrollo
 * módulo de consulta de informaciones de urbanismo 
 * módulo de diseño de atlas
 * compatibilidad con flujos (Atom WFS2) para el geoportal de urbanismo.


## Cierre del GeoCom en 2015 por Marie-Christine Schott, responsable del servicio SIG en el Consejo Regional de Alsacia

"Nos alegramos de descubrir una comunidad dinámica que reune todas las facetas y las capacidades en materia de intercambio de datos. Es importante no bajar la guardia porque la disponibilidad y el rendimiento de estas aplicaciones son críticas para la adopción de estas nuevas prácticas de trabajo. Debemos aprovechar esta comunidad para permanecer atentos y reactivos frente a grandes reformas institucionales y para responder mejor a los desafíos actuales."

## Finalmente

Encuentre en  [imagenes](https://www.flickr.com/photos/fvanderbiest/sets/72157654956059600) y en formato "[storify](https://storify.com/fvanderbiest/geocom-2015-strasbourg)" l'aventure GeoCom 2015. 

Queremos agradecer a la región de Alsacia y la Casa Alsacia por acoger el evento, y esperamos verlos el próximo año en Burdeos!.


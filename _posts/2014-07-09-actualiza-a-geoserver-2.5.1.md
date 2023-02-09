---
layout: post
title:  "Actualiza a GeoServer 2.5.1"
date:   2014-07-09 11:47:13
categories: labs geoserver
lang: es
uid: 2014-07-09
---
geOrchestra esta migrando de GeoServer 2.3.2 (utilizado desde 13.06) utilizado desde el último estable (momento de escribir) 2.5.1

<!--more-->

Esta actualización trae un montón de nuevas características y correcciones de errores
Indicamos algunos:

 * Mejor manejo del client-cache integrado para tiles servido por el GeoWebCache, integrado
 * un servicio mas completo de CSW incrustado
 * un mayor rendimiento en las capas vectoriales servidos por postgis.
 * ...

Hemos compilado y desplegado satisfactoriamente la última versión de GeoServer estable en el geOrchestra demo server con las siguientes opciones: app-schema, authkey, charts, control-flow, css, csw, dds, dxf, feature-aggregate, feature-pregeneralized, gdal, geoxacml, imagemap, inspire, istyler, libjpeg-turbo, mysql, ogr, pyramid, script, spatialite, wps, w3ds.

Esta mejora se embarcará con geOrchestra 14.12, al final del año. En las próximas semanas, vamos a comprobar que la integración con los otros componentes de la suite geOrchestra esta bien, y que no se produzca una regresión.

Para los más aventureros como tú, es posible probar esta nueva construcción revisando en la rama [2.5.1-georchestra](https://github.com/georchestra/geoserver/tree/2.5.1-georchestra) en el repositorio [georchestra/geoserver](https://github.com/georchestra/geoserver/) con la ayuda de la edición [#677](https://github.com/georchestra/georchestra/issues/677).

Este es un trabajo de Florent Gravin, [Camptocamp](#), con el apoyo de [GeoBretagne](https://cms.geobretagne.fr/). GeoFence no ha sido probado con esta nueva construcción GeoServer.

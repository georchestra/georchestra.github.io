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

Hemos compilado y desplegado satisfactoriamente la última versión de GeoServer estable en el [geOrchestra demo server](http://sdi.georchestra.org/geoserver/web/) con las siguientes opciones: app-schema, authkey, charts, control-flow, css, csw, dds, dxf, feature-aggregate, feature-pregeneralized, gdal, geoxacml, imagemap, inspire, istyler, libjpeg-turbo, mysql, ogr, pyramid, script, spatialite, wps, w3ds.

This improvement will ship with geOrchestra 14.12, at the end of the year.
In the following weeks, we'll check that integration with the other components of the geOrchestra suite is good, and that no regression occur.

For the most adventurous of you, it is possible to test this new build by checking out the [2.5.1-georchestra](https://github.com/georchestra/geoserver/tree/2.5.1-georchestra) branch in the [georchestra/geoserver](https://github.com/georchestra/geoserver/) repository with help from the [#677](https://github.com/georchestra/georchestra/issues/677) issue.  

This is work from Florent Gravin, [Camptocamp](http://www.camptocamp.com/geospatial/), with support from [GeoBretagne](http://cms.geobretagne.fr/). GeoFence was not tested with this new GeoServer build.
<!--more-->


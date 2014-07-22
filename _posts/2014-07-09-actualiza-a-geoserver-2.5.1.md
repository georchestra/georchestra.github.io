---
layout: post
title:  "Upgrade to GeoServer 2.5.1"
date:   2014-07-09 11:47:13
categories: labs geoserver
lang: en
uid: 2014-07-09
---

geOrchestra is currently migrating from GeoServer 2.3.2 (used since 13.06) to latest stable (at the time of writing) 2.5.1.

<!--more-->

This update brings a lot of new features and bug fixes.
To state a few:

 * better client-cache handling for tiles served by the integrated GeoWebCache,
 * a more complete embedded CSW service,
 * higher performances on vector layers served by postgis.
 * ...

We have successfully compiled and deployed the latest version of GeoServer stable on the [geOrchestra demo server](http://sdi.georchestra.org/geoserver/web/) with the following options: app-schema, authkey, charts, control-flow, css, csw, dds, dxf, feature-aggregate, feature-pregeneralized, gdal, geoxacml, imagemap, inspire, istyler, libjpeg-turbo, mysql, ogr, pyramid, script, spatialite, wps, w3ds.

Esta mejora se embarcará con geOrchestra 14.12, al final del año. En las próximas semanas, vamos a comprobar que la integración con los otros componentes de la suite geOrchestra esta bien, y que no se produzca una regresión.

Para los más aventureros como tú, es posible probar esta nueva construcción revisando en la rama [2.5.1-georchestra](https://github.com/georchestra/geoserver/tree/2.5.1-georchestra) en el repositorio [georchestra/geoserver](https://github.com/georchestra/geoserver/) con la ayuda de la edición [#677](https://github.com/georchestra/georchestra/issues/677).

Este es un trabajo de Florent Gravin, [Camptocamp](http://www.camptocamp.com/geospatial/), con el apoyo de [GeoBretagne](http://cms.geobretagne.fr/). GeoFence no ha sido probado con esta nueva construcción GeoServer.

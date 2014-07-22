---
layout: post
title:  "Actualiza a GeoServer 2.5.1"
date:   2014-07-09 11:47:13
categories: labs geoserver
lang: es
uid: 2014-07-09
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

This improvement will ship with geOrchestra 14.12, at the end of the year.
In the following weeks, we'll check that integration with the other components of the geOrchestra suite is good, and that no regression occur.

For the most adventurous of you, it is possible to test this new build by checking out the [2.5.1-georchestra](https://github.com/georchestra/geoserver/tree/2.5.1-georchestra) branch in the [georchestra/geoserver](https://github.com/georchestra/geoserver/) repository with help from the [#677](https://github.com/georchestra/georchestra/issues/677) issue.  

This is work from Florent Gravin, [Camptocamp](http://www.camptocamp.com/geospatial/), with support from [GeoBretagne](http://cms.geobretagne.fr/). GeoFence was not tested with this new GeoServer build.
<!--more-->


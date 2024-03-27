---
layout: page
lang: en
title: Software
uid: software
permalink: /software.html
---

geOrchestra's core relies on a security proxy based on [Spring Security](https://projects.spring.io/spring-security/) and on a [single-sign-on system](https://en.wikipedia.org/wiki/Single_sign-on) using [CAS](https://www.jasig.org/cas).

geOrchestra provides independant and interoperable modules to build your own custom spatial data infrastructure:

 * a [data catalog](https://github.com/georchestra/geonetwork/) based on [GeoNetwork](https://geonetwork-opensource.org/) version 4.2.8,
 * a map and feature server: [GeoServer](https://geoserver.org/) version 2.22.5,
 * an [advanced data access list manager](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md): [GeoFence](https://github.com/geoserver/geofence),
 * a map tiles server: [GeoWebCache](https://geowebcache.org/) version 1.16.2,
 * an [advanced web map viewer](https://docs.mapstore.geosolutionsgroup.com) with query, styling, editing functions,
 * a [user, orgs & roles manager](https://github.com/georchestra/georchestra/blob/master/console/README.md) ("console"),
 * a [module to display data usage statistics](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) ("analytics").

#### License

All geOrchestra modules are available under the terms of the [GNU GPL v3](https://github.com/georchestra/georchestra/blob/master/LICENSE.txt) license, except:

 * JASIG CAS - [Apache License, version 2.0](https://github.com/Jasig/cas/blob/master/LICENSE),
 * GeoNetwork & GeoServer - [GPL v2](https://www.gnu.org/licenses/gpl-2.0.html),
 * MapStore2 - [BSD](https://github.com/geosolutions-it/MapStore2/blob/master/LICENSE.txt),
 * GeoWebCache - [LGPL](https://www.gnu.org/licenses/lgpl.html).

Our main libraries are using a mix of licenses, compatible with the [Open Source definition](https://opensource.org/osd):

 * GeoTools - [LGPL](https://www.gnu.org/licenses/lgpl.html),
 * proj4js - [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

#### Web Services

A geOrchestra platform advertises standard web services to discover ([CSW](https://www.opengeospatial.org/standards/cat)), view ([WMS](https://www.opengeospatial.org/standards/wms), [WMTS](https://www.opengeospatial.org/standards/wmts)), symbolize ([SLD](https://www.opengeospatial.org/standards/sld)), query and download ([WFS](https://www.opengeospatial.org/standards/wfs)), edit ([WFS-T](https://www.opengeospatial.org/standards/wfs)), and even process ([WPS](https://www.opengeospatial.org/standards/wps)) geographical features. It also provides powerful web applications making use of these services (and eventually combining them). It interoperates perfectly with GIS softwares such as [QGIS](https://www.qgis.org/) and [ArcGIS](https://www.arcgis.com/).

#### Releases

The project publishes one or two major releases per year (eg 23.0.0 or 23.1.0). They are supported for 12 months.

We also publish patch releases (eg 23.0.5) every month or so, to fix bugs and security issues.

[Releases](https://github.com/georchestra/georchestra/releases) can be found on github: [https://github.com/georchestra/georchestra/releases](https://github.com/georchestra/georchestra/releases)

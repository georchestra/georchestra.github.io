---
layout: page
lang: en
title: Software
uid: software
---

geOrchestra's core relies on a security proxy based on [Spring Security](http://projects.spring.io/spring-security/) and on a [single-sign-on system](http://en.wikipedia.org/wiki/Single_sign-on) using [CAS](http://www.jasig.org/cas).

geOrchestra provides independant and interoperable modules to build your own custom spatial data infrastructure:

 * a data catalog based on [GeoNetwork](http://geonetwork-opensource.org/) version 2.10,
 * a map and feature server: [GeoServer](http://geoserver.org/) version 2.3.2,
 * an advanced data access list manager: [GeoFence](https://github.com/geosolutions-it/geofence),
 * a map tiles server: [GeoWebCache](http://geowebcache.org/) version 1.5.1,
 * an advanced web map viewer with query, styling, editing functions,
 * a data extractor to extract, reproject and download datasets from OGC services,
 * a user and group manager ("ldapadmin"),
 * a log parser to display data usage statistics ("analytics").

A geOrchestra platform advertises standard web services to discover ([CSW](http://www.opengeospatial.org/standards/cat)), view ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), symbolize ([SLD](http://www.opengeospatial.org/standards/sld)), query and download ([WFS](http://www.opengeospatial.org/standards/wfs)), edit ([WFS-T](http://www.opengeospatial.org/standards/wfs)), and even process ([WPS](http://www.opengeospatial.org/standards/wps)) geographical features. It also provides powerful web applications making use of these services (and eventually combining them). It interoperates perfectly with GIS softwares such as [QGIS](http://www.qgis.org/) and [ArcGIS](http://www.arcgis.com/).

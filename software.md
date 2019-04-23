---
layout: page
lang: en
title: Software
uid: software
permalink: /software.html
---

geOrchestra's core relies on a security proxy based on [Spring Security](http://projects.spring.io/spring-security/) and on a [single-sign-on system](http://en.wikipedia.org/wiki/Single_sign-on) using [CAS](http://www.jasig.org/cas).

geOrchestra provides independant and interoperable modules to build your own custom spatial data infrastructure:

 * a [data catalog](https://github.com/georchestra/geonetwork/blob/georchestra-gn3-3.0.x/README.md) based on [GeoNetwork](http://geonetwork-opensource.org/) version 3.4,
 * a map and feature server: [GeoServer](http://geoserver.org/) version 2.12.1,
 * an [advanced data access list manager](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md): [GeoFence](https://github.com/geoserver/geofence),
 * a map tiles server: [GeoWebCache](http://geowebcache.org/) version 1.8.1,
 * an [advanced web map viewer](https://github.com/georchestra/georchestra/blob/master/mapfishapp/README.md) with query, styling, editing functions,
 * a [data extractor](https://github.com/georchestra/georchestra/blob/master/extractorapp/README.md) to extract, reproject and download datasets from OGC services,
 * a [user, orgs & roles manager](https://github.com/georchestra/georchestra/blob/master/console/README.md) ("ldapadmin"),
 * a [module to display data usage statistics](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) ("analytics").

#### License

All geOrchestra modules are available under the terms of the [GNU GPL v3](https://github.com/georchestra/georchestra/blob/master/LICENSE.txt) license, except:

 * JASIG CAS - [Apache License, version 2.0](https://github.com/Jasig/cas/blob/master/LICENSE),
 * GeoNetwork & GeoServer - [GPL v2](http://www.gnu.org/licenses/gpl-2.0.html),
 * GeoWebCache - [LGPL](http://www.gnu.org/licenses/lgpl.html).

Our main libraries are using a mix of licenses, compatible with the [Open Source definition](http://opensource.org/osd):

 * GeoTools - [LGPL](http://www.gnu.org/licenses/lgpl.html),
 * OpenLayers & GeoExt - BSD-style,
 * ExtJS - [GPL v3](https://github.com/probonogeek/extjs/blob/3.x/license.txt),
 * proj4js - [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

#### Web Services

A geOrchestra platform advertises standard web services to discover ([CSW](http://www.opengeospatial.org/standards/cat)), view ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), symbolize ([SLD](http://www.opengeospatial.org/standards/sld)), query and download ([WFS](http://www.opengeospatial.org/standards/wfs)), edit ([WFS-T](http://www.opengeospatial.org/standards/wfs)), and even process ([WPS](http://www.opengeospatial.org/standards/wps)) geographical features. It also provides powerful web applications making use of these services (and eventually combining them). It interoperates perfectly with GIS softwares such as [QGIS](http://www.qgis.org/) and [ArcGIS](http://www.arcgis.com/).

#### Releases

[Releases](https://github.com/georchestra/georchestra/releases) are published in a time based fashion, every 6 months, following a [planned schedule](https://github.com/georchestra/georchestra/milestones).
They are supported for 12 months, though older releases may have different support length.

Version       | Docs                                                                                          | Released      | End of life
------------- | ----------------------------------------------------------------------------------------------|---------------|-------------
19.04         | [Release](https://github.com/georchestra/georchestra/releases/tag/v19.04)                     | 2018-02-07    | 2020-04
18.06         | [Release](https://github.com/georchestra/georchestra/releases/tag/v18.06)                     | 2018-02-07    | 2019-06
17.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v17.12)                     | 2018-02-07    | **2019-02**
16.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v16.12)                     | 2017-02-20    | **2018-02**
15.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v15.12)                     | 2016-02-24    | **2017-02**
15.06         | [Blog](/blog/2015/07/13/georchestra-15.06-en/)                                                | 2015-07-10    | **2016-07**
14.12         | [Blog](/blog/2015/01/30/georchestra-14.12-is-available/)                                      | 2015-01-30    | **2016-01**
14.06         | [Blog](/blog/2014/07/10/release-14.06/)                                                       | 2014-07-10    | **2015-07**
14.01         | [Blog](/blog/2014/02/03/release-14.01/)                                                       | 2014-01-30    | **2015-01**
13.09         | [Blog](/blog/2013/10/02/georchestra-release-13.09/)                                           | 2013-10-02    | **2014-10**
13.06         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1306) | 2013-06-27    | **2014-06**
13.02         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1302) | 2013-03-25    | **2014-03**
12.11         | [Blog](/blog/2012/12/16/georchestra-12.11-bolivia-is-out/)                                    | 2012-12-13    | **2013-12**
12.06         | -                                                                                             | 2012-07-25    | **2013-07**
11.10         | -                                                                                             | 2011-12-16    | **2012-12**

The above releases are hosted on branches forked from the master branch at the release date.  

Bugs are fixed on the oldest supported branch bringing the feature, and ported to later branches (up to master) via cascading merges. You may refer to the [geOrchestra repository network](https://github.com/georchestra/georchestra/network) for a graphical view of the above.  

New features are merged into the master branch, which means they'll be available in the next stable version.

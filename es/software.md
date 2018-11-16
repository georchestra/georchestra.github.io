---
layout: page
lang: es
title: Software
uid: software
permalink: /es/software.html
---

El núcleo de geOrchestra se basa en un proxy de seguridad basado en [Spring Security](http://projects.spring.io/spring-security/) y en un [Sistema single-sign-on](http://en.wikipedia.org/wiki/Single_sign-on) usando [CAS](http://www.jasig.org/cas).

geOrchestra ofrece módulos independientes e interoperables para construir su propia infraestructura de datos espaciales que cuenta con:

 * un [catálogo de datos](https://github.com/georchestra/geonetwork/blob/georchestra-gn3-3.0.x/README.md) basado en [GeoNetwork](http://geonetwork-opensource.org/) versión 3.4,
 * un servidor de mapas con: [GeoServer](http://geoserver.org/) versión 2.12.1,
 * un [gestor avanzado de listas de acceso a datos](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md): [GeoFence](https://github.com/geoserver/geofence),
 * un servidor de tiles de mapa: [GeoWebCache](http://geowebcache.org/) versión 1.8.1,
 * un [visor de mapas web](https://github.com/georchestra/georchestra/blob/master/mapfishapp/README.md) con consultas, estilos y funciones de edición,
 * un [extractor de datos](https://github.com/georchestra/georchestra/blob/master/extractorapp/README.md) para extraer, reproyectar y descargar los conjuntos de datos de los servicios OGC,
 * un [usuario y administrador de grupo](https://github.com/georchestra/georchestra/blob/master/console/README.md) ("ldapadmin"),
 * un [modulo para ver las estadísticas de uso de datos](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) ("analytics").

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

#### Servicios web

La plataforma geOrchestra brinda servicios web estándar, para descubrir ([CSW](http://www.opengeospatial.org/standards/cat)), vistas ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), simbolización ([SLD](http://www.opengeospatial.org/standards/sld)), consulta y descarga ([WFS](http://www.opengeospatial.org/standards/wfs)), edición ([WFS-T](http://www.opengeospatial.org/standards/wfs)), e incluso de proceso ([WPS](http://www.opengeospatial.org/standards/wps)) las características geográficas. También proporciona potentes aplicaciones web que hacen uso de estos servicios (y eventualmente, la combinación de ellos). Interopera perfectamente con programas SIG como [QGIS](http://www.qgis.org/) y [ArcGIS](http://www.arcgis.com/).

#### Lanzamientos

[Lanzamientos](https://github.com/georchestra/georchestra/releases) se publican cada 6 meses, a raiz de un [calendario previsto](https://github.com/georchestra/georchestra/milestones).
Estan apoyados por 12 meses, sin embargo versiones anteriores pueden tener un apoyo diferente.

Version       | Docs                                                                                          | Released      | End of life
------------- | ----------------------------------------------------------------------------------------------|---------------|-------------
17.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v17.12)                     | 2018-02-07    | 2019-02
16.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v16.12)                     | 2017-02-20    | 2018-02
15.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v15.12)                     | 2016-02-24    | **2017-02**
15.06         | [Blog](/blog/2015/07/13/georchestra-15.06-es/)                                                | 2015-07-10    | **2016-07**
14.12         | [Blog](/blog/2015/01/30/georchestra-14.12-esta-disponible/)                                   | 2015-01-30    | **2016-01**
14.06         | [Blog](/blog/2014/07/10/version-14.06-es/)                                                    | 2014-07-10    | **2015-07**
14.01         | [Blog](/blog/2014/02/03/release-14.01/)                                                       | 2014-01-30    | **2015-01**
13.09         | [Blog](/blog/2013/10/02/georchestra-13.09/)                                                   | 2013-10-02    | **2014-10**
13.06         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1306) | 2013-06-27    | **2014-06**
13.02         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1302) | 2013-03-25    | **2014-03**
12.11         | [Blog](/blog/2012/12/16/georchestra-12.11-bolivia/)                                           | 2012-12-13    | **2013-12**
12.06         | -                                                                                             | 2012-07-25    | **2013-07**
11.10         | -                                                                                             | 2011-12-16    | **2012-12**

Las versiones anteriores son alojadas en ramas bifurcadas de la rama principal, de acuerdo a la fecha de vencimiento.

Los errores fijos en la rama más antigua son soportadas, trayendo las caracteristicas a las ramas posteriores(hasta master) mediante la fusión en cascada. Puede hacer referencia a [geOrchestra repository network](https://github.com/georchestra/georchestra/network) para una vista gráfica.

Las nuevas caracteristicas se combinan en la rama principal, lo que significa que estarán disponibles en la proxima versión estable.

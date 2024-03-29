---
layout: page
lang: es
title: Software
uid: software
permalink: /es/software.html
---

El núcleo de geOrchestra se basa en un proxy de seguridad basado en [Spring Security](https://projects.spring.io/spring-security/) y en un [Sistema single-sign-on](https://en.wikipedia.org/wiki/Single_sign-on) usando [CAS](https://www.jasig.org/cas).

geOrchestra ofrece módulos independientes e interoperables para construir su propia infraestructura de datos espaciales que cuenta con:

 * un [catálogo de datos](https://github.com/georchestra/geonetwork/) basado en [GeoNetwork](https://geonetwork-opensource.org/) versión 4.0.6,
 * un servidor de mapas con: [GeoServer](https://geoserver.org/) versión 2.18.3,
 * un [gestor avanzado de listas de acceso a datos](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md): [GeoFence](https://github.com/geoserver/geofence),
 * un servidor de tiles de mapa: [GeoWebCache](https://geowebcache.org/) versión 1.16.2,
 * un [visor de mapas web](https://github.com/georchestra/georchestra/blob/master/mapfishapp/README.md) con consultas, estilos y funciones de edición,
 * un [extractor de datos](https://github.com/georchestra/georchestra/blob/master/extractorapp/README.md) para extraer, reproyectar y descargar los conjuntos de datos de los servicios OGC,
 * un [usuario y administrador de grupo](https://github.com/georchestra/georchestra/blob/master/console/README.md) ("ldapadmin"),
 * un [modulo para ver las estadísticas de uso de datos](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) ("analytics").

#### License

All geOrchestra modules are available under the terms of the [GNU GPL v3](https://github.com/georchestra/georchestra/blob/master/LICENSE.txt) license, except:

 * JASIG CAS - [Apache License, version 2.0](https://github.com/Jasig/cas/blob/master/LICENSE),
 * GeoNetwork & GeoServer - [GPL v2](https://www.gnu.org/licenses/gpl-2.0.html),
 * GeoWebCache - [LGPL](https://www.gnu.org/licenses/lgpl.html).

Our main libraries are using a mix of licenses, compatible with the [Open Source definition](https://opensource.org/osd):

 * GeoTools - [LGPL](https://www.gnu.org/licenses/lgpl.html),
 * OpenLayers & GeoExt - BSD-style,
 * ExtJS - [GPL v3](https://github.com/probonogeek/extjs/blob/3.x/license.txt),
 * proj4js - [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

#### Servicios web

La plataforma geOrchestra brinda servicios web estándar, para descubrir ([CSW](https://www.opengeospatial.org/standards/cat)), vistas ([WMS](https://www.opengeospatial.org/standards/wms), [WMTS](https://www.opengeospatial.org/standards/wmts)), simbolización ([SLD](https://www.opengeospatial.org/standards/sld)), consulta y descarga ([WFS](https://www.opengeospatial.org/standards/wfs)), edición ([WFS-T](https://www.opengeospatial.org/standards/wfs)), e incluso de proceso ([WPS](https://www.opengeospatial.org/standards/wps)) las características geográficas. También proporciona potentes aplicaciones web que hacen uso de estos servicios (y eventualmente, la combinación de ellos). Interopera perfectamente con programas SIG como [QGIS](https://www.qgis.org/) y [ArcGIS](https://www.arcgis.com/).

#### Lanzamientos

El proyecto lanza una o dos versiones principales cada año (por ejemplo, 23.0.0 o 23.1.0). Cada una de estas versiones tiene soporte durante 12 meses.

También publicamos periódicamente versiones de "parches" (por ejemplo: 23.0.5), cuyo objetivo es corregir errores identificados y posibles problemas de seguridad.

Nuestros [lanzamientos](https://github.com/georchestra/georchestra/releases) se pueden encontrar en github : [https://github.com/georchestra/georchestra/releases](https://github.com/georchestra/georchestra/releases)

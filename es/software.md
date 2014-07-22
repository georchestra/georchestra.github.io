---
layout: page
lang: es
title: Software
uid: software
---

El núcleo de geOrchestra se basa en un proxy de seguridad basado en [Spring Security](http://projects.spring.io/spring-security/) y en un [single-sign-on system](http://en.wikipedia.org/wiki/Single_sign-on) usando [CAS](http://www.jasig.org/cas).

geOrchestra ofrece módulos independientes e interoperables para construir su propia infraestructura de datos espaciales de modo:
  
 * un catálogo de datos basado en [GeoNetwork](http://geonetwork-opensource.org/) version 2.10,
 * un servidor de mapas con: [GeoServer](http://geoserver.org/) version 2.3.2,
 * un gestor avanzado de listas de acceso a datos: [GeoFence](https://github.com/geosolutions-it/geofence),
 * un servidor de mosaicos de mapa: [GeoWebCache](http://geowebcache.org/) version 1.5.1,
 * un visor de mapas web con sonsultas, estilos, funciones de edición,
 * un extractor de datos para extraer, reproyectar y descargar los conjuntos de datos de los servicios OGC,
 * un usuario y administrador de grupo ("ldapadmin"),
 * Un analizador de registro para ver las estadísticas de uso de datos ("analytics").

Una plataforma geOrchestra brinda servicios web estándar para descubrir ([CSW](http://www.opengeospatial.org/standards/cat)), vistas ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), simbolizan ([SLD](http://www.opengeospatial.org/standards/sld)), consulta y descarga ([WFS](http://www.opengeospatial.org/standards/wfs)), edición ([WFS-T](http://www.opengeospatial.org/standards/wfs)), e incluso de proceso ([WPS](http://www.opengeospatial.org/standards/wps)) las características geográficas. También proporciona potentes apicaciones web que hacen uso de estos servicios (y eventualmente, la conbinación de ellos). Interopera perfectamente con programas SIG como [QGIS](http://www.qgis.org/) y [ArcGIS](http://www.arcgis.com/).


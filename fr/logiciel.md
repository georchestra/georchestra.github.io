---
layout: page
lang: fr
title: Logiciel
uid: software
permalink: /fr/logiciel.html
---

Au coeur de geOrchestra se trouve un proxy de sécurité basé sur [Spring Security](https://projects.spring.io/spring-security/) et un système d'[authentification unique](https://fr.wikipedia.org/wiki/Authentification_unique), implémenté par [CAS](https://www.jasig.org/cas).

geOrchestra propose en standard une suite de modules, indépendants et interopérables, avec lesquels on compose son Infrastructure de Données Spatiales "à la carte" :

 * un [catalogue de métadonnées](https://github.com/georchestra/geonetwork/), basé sur [GeoNetwork](https://geonetwork-opensource.org/) version 4.0.6,
 * un serveur cartographique : [GeoServer](https://geoserver.org/) version 2.18.3,
 * un [module de gestion avancée des droits d'accès aux données](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md) : [GeoFence](https://github.com/geoserver/geofence),
 * un serveur de tuiles : [GeoWebCache](https://geowebcache.org/) version 1.16.2,
 * un [visualiseur de données géographiques avancé](https://github.com/georchestra/georchestra/blob/master/mapfishapp/README.md) qui remplit également la fonction d'éditeur d'objets géographiques,
 * un [extracteur](https://github.com/georchestra/georchestra/blob/master/extractorapp/README.md), qui permet de télécharger des archives contenant les données géographiques issues de services OGC,
 * une [console d'administration des utilisateurs, roles et organismes](https://github.com/georchestra/georchestra/blob/master/console/README.md) ("ldapadmin"),
 * un [module présentant les statistiques d'utilisation](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) de l'IDS ("analytics").

#### License

Les modules de geOrchestra sont tous disponibles selon les termes de la licence [GNU GPL v3](https://github.com/georchestra/georchestra/blob/master/LICENSE.txt), sauf :

 * JASIG CAS - [Apache License, version 2.0](https://github.com/Jasig/cas/blob/master/LICENSE),
 * GeoNetwork & GeoServer - [GPL v2](https://www.gnu.org/licenses/gpl-2.0.html),
 * GeoWebCache - [LGPL](https://www.gnu.org/licenses/lgpl.html).

Les librairies principales utilisent une variété de licenses compatibles avec la definition de l'[Open Source](https://opensource.org/osd) :

 * GeoTools - [LGPL](https://www.gnu.org/licenses/lgpl.html),
 * OpenLayers & GeoExt - BSD-style,
 * ExtJS - [GPL v3](https://github.com/probonogeek/extjs/blob/3.x/license.txt),
 * proj4js - [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

#### Services Web

Une plateforme geOrchestra expose des services standards de découverte ([CSW](https://www.opengeospatial.org/standards/cat)), visualisation ([WMS](https://www.opengeospatial.org/standards/wms), [WMTS](https://www.opengeospatial.org/standards/wmts)), stylage ([SLD](https://www.opengeospatial.org/standards/sld)), interrogation ([WFS](https://www.opengeospatial.org/standards/wfs)), édition ([WFS-T](https://www.opengeospatial.org/standards/wfs)), voire traitement ([WPS](https://www.opengeospatial.org/standards/wps)) de données géographiques, ainsi que les outils web pour les consommer. Elle est parfaitement interopérable avec des logiciels SIG comme [QGIS](https://www.qgis.org/) ou [ArcGIS](https://www.arcgis.com/).


#### Versions

Le projet publie une ou deux versions majeures chaque année (par exemple 23.0.0 or 23.1.0). Chacune de ces versions est supportée pendant 12 mois.

Nous publions également des versions "patch" (ex: 23.0.5) régulièrement, dont l'objet est de corriger les bugs identifiés et d'éventuels problèmes de sécurité.

Nos [releases](https://github.com/georchestra/georchestra/releases) se trouvent sur github : [https://github.com/georchestra/georchestra/releases](https://github.com/georchestra/georchestra/releases)

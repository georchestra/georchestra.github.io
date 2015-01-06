---
layout: page
lang: fr
title: Logiciel
uid: software
---

Au coeur de geOrchestra se trouve un proxy de sécurité basé sur [Spring Security](http://projects.spring.io/spring-security/) et un système d'[authentification unique](http://fr.wikipedia.org/wiki/Authentification_unique), implémenté par [CAS](http://www.jasig.org/cas).

geOrchestra propose en standard une suite de modules, indépendants et interopérables, avec lesquels on compose son Infrastructure de Données Spatiales "à la carte" :

 * un [catalogue de métadonnées](https://github.com/georchestra/geonetwork/blob/georchestra-14.12/README.md), basé sur [GeoNetwork](http://geonetwork-opensource.org/) version 2.10,
 * un serveur cartographique : [GeoServer](http://geoserver.org/) version 2.5.4,
 * un [module de gestion avancée des droits d'accès aux données](https://github.com/georchestra/geofence/blob/georchestra/georchestra.md) : [GeoFence](https://github.com/geosolutions-it/geofence),
 * un serveur de tuiles : [GeoWebCache](http://geowebcache.org/) version 1.5.1,
 * un [visualiseur de données géographiques avancé](https://github.com/georchestra/georchestra/blob/master/mapfishapp/README.md) qui remplit également la fonction d'éditeur d'objets géographiques,
 * un [extracteur](https://github.com/georchestra/georchestra/blob/master/extractorapp/README.md), qui permet de télécharger des archives contenant les données géographiques issues de services OGC,
 * une [console d'administration des utilisateurs et des groupes](https://github.com/georchestra/georchestra/blob/master/ldapadmin/README.md) ("ldapadmin"),
 * un [module présentant les statistiques d'utilisation](https://github.com/georchestra/georchestra/blob/master/analytics/README.md) de l'IDS ("analytics").

#### License

Les modules de geOrchestra sont tous disponibles selon les termes de la licence [GNU GPL v3](https://github.com/georchestra/georchestra/blob/master/LICENSE.txt), sauf :

 * JASIG CAS - [Apache License, version 2.0](https://github.com/Jasig/cas/blob/master/LICENSE),
 * GeoNetwork & GeoServer - [GPL v2](http://www.gnu.org/licenses/gpl-2.0.html),
 * GeoWebCache - [LGPL](http://www.gnu.org/licenses/lgpl.html).

Les librairies principales utilisent une variété de licenses compatibles avec la definition de l'[Open Source](http://opensource.org/osd) :

 * GeoTools - [LGPL](http://www.gnu.org/licenses/lgpl.html),
 * OpenLayers & GeoExt - BSD-style,
 * ExtJS - [GPL v3](https://github.com/probonogeek/extjs/blob/3.x/license.txt),
 * proj4js - [MIT](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

#### Services Web

Une plateforme geOrchestra expose des services standards de découverte ([CSW](http://www.opengeospatial.org/standards/cat)), visualisation ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), stylage ([SLD](http://www.opengeospatial.org/standards/sld)), interrogation ([WFS](http://www.opengeospatial.org/standards/wfs)), édition ([WFS-T](http://www.opengeospatial.org/standards/wfs)), voire traitement ([WPS](http://www.opengeospatial.org/standards/wps)) de données géographiques, ainsi que les outils web pour les consommer. Elle est parfaitement interopérable avec des logiciels SIG comme [QGIS](http://www.qgis.org/) ou [ArcGIS](http://www.arcgis.com/).


#### Versions

Sauf exceptions, nous publions une nouvelle [version](https://github.com/georchestra/georchestra/releases) tous les 6 mois, en suivant un [calendrier public](https://github.com/georchestra/georchestra/milestones). Chaque version est supportée pendant au moins 12 mois.

Version       | Docs                                                                                          | Sortie        | Fin de vie
------------- | ----------------------------------------------------------------------------------------------|---------------|-------------
14.12         |                                                                                               | 2015-01-xx    | 2016-01
14.06         | [Blog](/blog/2014/07/10/version-14.06/)                                                       | 2014-07-10    | 2015-07
14.01         | [Blog](/blog/2014/02/03/version-14.01/)                                                       | 2014-01-30    | 2015-01
13.09         | [Blog](/blog/2013/10/02/georchestra-version-13.09/)                                           | 2013-10-02    | 2014-10
13.06         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1306) | 2013-06-27    | **2014-06**
13.02         | [Notes](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1302) | 2013-03-25    | **2014-03**
12.11         | [Blog](/blog/2012/12/16/georchestra-12.11-bolivia-est-disponible/)                            | 2012-12-13    | **2013-12**
12.06         | [Blog](/blog/2011/12/17/pigma-nouvelle-plateforme-georchestra/)                               | 2012-07-25    | **2013-07**
11.10         | -                                                                                             | 2011-12-16    | **2012-12**

Les versions ci-dessus sont portées par des branches qui dérivent de la branche master en date de la sortie.  

Tout bogue est corrigé sur la plus ancienne branche supportée apportant la fonctionnalité, puis porté sur les branches les plus récentes (jusque master) par des "merge en cascade". Nous vous invitons à jeter un oeil à la [vue "réseau" du dépôt geOrchestra](https://github.com/georchestra/georchestra/network) pour en voir l'illustration.  

Toute nouvelle fonctionnalité est implémentée sur la branche master, ce qui signifie qu'elle sera disponible pour la prochaine version stable. 
Le site de démonstration [sdi.georchestra.org](http://sdi.georchestra.org/) est maintenu à jour sur la branche master, ce qui permet de montrer ces fonctionnalités qui apparaîtront dans la prochaine version.

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

Sauf exceptions, nous publions une nouvelle [version](https://github.com/georchestra/georchestra/releases) tous les 6 mois, en suivant un [calendrier public](https://github.com/georchestra/georchestra/milestones). Chaque version est supportée pendant au moins 12 mois.

Version       | Docs                                                                                          | Sortie        | Fin de vie
------------- | ----------------------------------------------------------------------------------------------|---------------|-------------
22.0.2        | [Release](https://github.com/georchestra/georchestra/releases/tag/22.0.2)                     | 2022-05-04    | **2023-05**
20.1.7        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.7)                     | 2022-05-04    | **2023-05**
22.0.1        | [Release](https://github.com/georchestra/georchestra/releases/tag/22.0.1)                     | 2022-04-29    | **2023-04**
20.1.6        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.6)                     | 2022-04-28    | **2023-04**
22.0.0        | [Release](https://github.com/georchestra/georchestra/releases/tag/22.0.0)                     | 2022-03-24    | **2023-03**
20.1.5        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.5)                     | 2022-02-11    | **2023-02**
20.1.4        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.4)                     | 2021-09-13    | **2022-09**
20.1.3        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.3)                     | 2021-06-17    | **2022-06**
20.0.8        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.8)                     | 2021-06-17    | **2022-06**
20.1.1        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.1)                     | 2021-02-24    | **2022-02**
20.0.7        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.7)                     | 2021-02-24    | **2022-02**
20.1.0        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.1.0)                     | 2020-11-03    | **2021-11**
20.0.6        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.6)                     | 2020-08-25    | **2021-08**
20.0.6        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.5)                     | 2020-07-03    | **2021-07**
20.0.4        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.4)                     | 2020-06-10    | **2021-06**
20.0.3        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.3)                     | 2020-05-14    | **2021-05**
20.0.2        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.2)                     | 2020-04-15    | **2021-04**
20.0.1        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.1)                     | 2020-02-17    | **2021-02**
20.0.0        | [Release](https://github.com/georchestra/georchestra/releases/tag/20.0.0)                     | 2020-02-14    | **2021-02**
19.04         | [Release](https://github.com/georchestra/georchestra/releases/tag/v19.04)                     | 2019-04-12    | **2020-04**
18.06         | [Release](https://github.com/georchestra/georchestra/releases/tag/v18.06)                     | 2018-07-20    | **2019-07**
17.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v17.12)                     | 2018-02-07    | **2019-02**
16.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v16.12)                     | 2017-02-20    | **2018-02**
15.12         | [Release](https://github.com/georchestra/georchestra/releases/tag/v15.12)                     | 2016-02-24    | **2017-02**
15.06         | [Blog](/blog/2015/07/13/georchestra-15.06-fr/)                                                | 2015-07-10    | **2016-07**
14.12         | [Blog](/blog/2015/01/30/georchestra-14.12-est-disponible/)                                    | 2015-01-30    | **2016-01**
14.06         | [Blog](/blog/2014/07/10/version-14.06/)                                                       | 2014-07-10    | **2015-07**
14.01         | [Blog](/blog/2014/02/03/version-14.01/)                                                       | 2014-01-30    | **2015-01**
13.09         | [Blog](/blog/2013/10/02/georchestra-version-13.09/)                                           | 2013-10-02    | **2014-10**
13.06         | [Notes](https://github.com/georchestra/georchestra/) | 2013-06-27    | **2014-06**
13.02         | [Notes](https://github.com/georchestra/georchestra/) | 2013-03-25    | **2014-03**
12.11         | [Blog](/blog/2012/12/16/georchestra-12.11-bolivia-est-disponible/)                            | 2012-12-13    | **2013-12**
12.06         | [Blog](/blog/2011/12/17/pigma-nouvelle-plateforme-georchestra/)                               | 2012-07-25    | **2013-07**
11.10         | -                                                                                             | 2011-12-16    | **2012-12**

Les versions ci-dessus sont portées par des branches qui dérivent de la branche master en date de la sortie.  

Tout bogue est corrigé sur la plus ancienne branche supportée apportant la fonctionnalité, puis porté sur les branches les plus récentes (jusque master) par des "merge en cascade". Nous vous invitons à jeter un oeil à la [vue "réseau" du dépôt geOrchestra](https://github.com/georchestra/georchestra/network) pour en voir l'illustration.  

Toute nouvelle fonctionnalité est implémentée sur la branche master, ce qui signifie qu'elle sera disponible pour la prochaine version stable.

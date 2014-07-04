---
layout: page
lang: fr
title: Logiciel
uid: software
---

Au coeur de geOrchestra se trouve un proxy de sécurité basé sur [Spring Security](http://projects.spring.io/spring-security/) et un système d'[authentification unique](http://fr.wikipedia.org/wiki/Authentification_unique), implémenté par [CAS](http://www.jasig.org/cas).

geOrchestra propose en standard une suite de modules, indépendants et interopérables, avec lesquels on compose son Infrastructure de Données Spatiales "à la carte" :

 * un catalogue de métadonnées, basé sur [GeoNetwork](http://geonetwork-opensource.org/) version 2.10,
 * un serveur cartographique : [GeoServer](http://geoserver.org/) version 2.3.2,
 * un module de gestion avancée des droits d'accès aux données : [GeoFence](https://github.com/geosolutions-it/geofence),
 * un serveur de tuiles : [GeoWebCache](http://geowebcache.org/) version 1.5.1,
 * un visualiseur de données géographiques avancé qui remplit également la fonction d'éditeur d'objets géographiques,
 * un extracteur, qui permet de télécharger des archives contenant les données géographiques issues de services OGC,
 * une console d'administration des utilisateurs et des groupes ("ldapadmin"),
 * un module présentant les statistiques d'utilisation de l'IDS ("analytics").
 
Une plateforme geOrchestra expose des services standards de découverte ([CSW](http://www.opengeospatial.org/standards/cat)), visualisation ([WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts)), stylage ([SLD](http://www.opengeospatial.org/standards/sld)), interrogation ([WFS](http://www.opengeospatial.org/standards/wfs)), édition ([WFS-T](http://www.opengeospatial.org/standards/wfs)), voire traitement ([WPS](http://www.opengeospatial.org/standards/wps)) de données géographiques, ainsi que les outils web pour les consommer. Elle est parfaitement interopérable avec des logiciels SIG comme [QGIS](http://www.qgis.org/) ou [ArcGIS](http://www.arcgis.com/).

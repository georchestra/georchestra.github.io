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
 * un serveur de tuiles : [GeoWebCache](http://geowebcache.org/) version 1.5.1,
 * un visualiseur de données géographiques avancé qui remplit également la fonction d'éditeur d'objets géographiques,
 * un extracteur, qui permet de télécharger des archives contenant les données géographiques issues de services OGC,
 * un module pour gérer les utilisateurs et les groupes depuis un navigateur ("ldapadmin"),
 * un module pour obtenir des statistiques d'utilisation de l'IDS ("analytics").
 
Une plateforme geOrchestra expose des services standards de découverte (CSW), visualisation (WMS, WMTS), stylage (SLD), interrogation (WFS), édition (WFS-T), voire traitement (WPS) de données géographiques, ainsi que les outils web pour les consommer. Elle est interopère parfaitement avec des logiciels SIG comme QGIS.

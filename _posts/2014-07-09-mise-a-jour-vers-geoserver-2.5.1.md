---
layout: post
title:  "Mise à jour vers GeoServer 2.5.1"
date:   2014-07-09 11:47:13
categories: labs geoserver
lang: fr
uid: 2014-07-09
---

Le processus de migration de GeoServer 2.3.2 (utilisé par geOrchestra depuis la version 13.06) à GeoServer 2.5.1 au sein de geOrchestra est en cours.

<!--more-->

Ce saut de plusieurs versions majeures de GeoServer apporte son lot de nouveautés au projet geOrchestra.  
Citons notamment :

 * une meilleure gestion du cache client pour les tuiles issues du GeoWebCache intégré,
 * un service CSW intégré plus complet,
 * de meilleures performances sur les couches vecteur servies par postgis.
 * ...

Nous avons réussi à compiler et déployer la dernière version stable de GeoServer sur la plateforme de démonstration avec les options suivantes : app-schema, authkey, charts, control-flow, css, csw, dds, dxf, feature-aggregate, feature-pregeneralized, gdal, geoxacml, imagemap, inspire, istyler, libjpeg-turbo, mysql, ogr, pyramid, script, spatialite, wps, w3ds.

Cette évolution sera livrée avec geOrchestra 14.12.  
En effet, dans les semaines à venir, nous allons vérifier la bonne intégration de cette nouvelle version avec l'ensemble des composants de la suite geOrchestra.  
Pour les plus aventureux d'entre vous, il est d'ores et déjà possible de tester en utilisant la branche [2.5.1-georchestra](https://github.com/georchestra/geoserver/tree/2.5.1-georchestra) du dépôt [georchestra/geoserver](https://github.com/georchestra/geoserver/) et en se référant au ticket d'évolution [#677](https://github.com/georchestra/georchestra/issues/677).  

C'est une réalisation de Florent Gravin, [Camptocamp](http://www.camptocamp.com/geospatial/), sur financement [GeoBretagne](http://cms.geobretagne.fr/). Dans ce cadre, l'intégration avec GeoFence n'a pas été testée.

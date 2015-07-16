---
layout: post
title:  "geOrchestra 15.06"
date:   2015-07-13 11:00:00
lang: fr
uid: 2015-07-13
---

L'équipe geOrchestra est heureuse d'annoncer la sortie de geOrchestra 15.06

Cette version apporte plusieurs améliorations décisives :
 * support complet de la toute récente Debian 8 "Jessie", soit une durée de vie plus longue pour votre serveur.
 * Les artéfacts standard GeoServer peuvent être utilisés en substitution du "GeoServer goût geOrchestra". Cela permettra un apport plus rapide des nouvelles fonctionnalités, mais en plus cela votre admistrateur sera un peu plus zen quand une vulnérabilité sera découverte dans GeoServer.
 * Des tests d'intégration sont lancés [à chaque fois](https://github.com/georchestra/georchestra/blob/15.06/.travis.yml) que du nouveau code est contribué à geOrchestra, grâce au nouveau service [travis-ci](https://travis-ci.org/georchestra/georchestra).
 * Des artéfacts plus légers. Nous sommes parvenus à unr eŕduction de 20 à 50% du volume en excluant les documentations inutiles, les exemples et tests du fichier WAR. Cela économise de la bande passante  (et du temps !) à ceux d'entre vous qui tirez les artéfacts de notre <a href="https://sdi.georchestra.org/ci/job/georchestra-template/" data-proofer-ignore>CI hébergé</a>.

<img src="/public/posts/2015-07-13/travis.png" alt="travis-ci" />

<!--more-->


Entre autres améliorations :
 * mapfishapp: iD est maintenant le choix premier pour éditer la couche de fond OSM - voir [#992](https://github.com/georchestra/georchestra/issues/992),
 
 <img src="/public/posts/2015-07-13/id.png" alt="osm editor iD" />
 
 * mapfishapp: l'utilisateur peut exporter en GML ou KML les objets qu'il aura sélectionnés par requête - voir [#995](https://github.com/georchestra/georchestra/pull/995),
 
 <img src="/public/posts/2015-07-13/export.png" alt="kml gml export" />
 
 * mapfishapp: l'admin peut limiter l'étendue de toutes les recherches de métadonnées. L'utilisateur peut aussi limiter sa recherche à l'emprise spatiale courante - voir [#964](https://github.com/georchestra/georchestra/pull/964),
 
  <img src="/public/posts/2015-07-13/extent.png" alt="extent" />
 
 * mapfishapp: nous avons ajouté la possibilité de filtrer les objets visibles dans les les couches POSTées avec CQL - voir [#921](https://github.com/georchestra/georchestra/pull/921),
 
 <img src="/public/posts/2015-07-13/cql.png" alt="cql" />
 
 * proxy: intercèpte les erreurs "connection refused" - voir [#963](https://github.com/georchestra/georchestra/pull/963),

 * documentation: nous avons ajouté une page sur la configuration SASL configuration pour AD distant - voir [#958](https://github.com/georchestra/georchestra/pull/958).


La liste complète des points d'attention peut être retrouvée sur l'issue tracker de GitHub, avec l'indication du jalon [15.06](https://github.com/georchestra/georchestra/issues?q=milestone%3A15.06).

Grand merci à tous les contributeurs pour cette superbe version !

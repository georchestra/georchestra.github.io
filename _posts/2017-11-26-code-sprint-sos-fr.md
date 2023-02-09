---
layout: post
title:  "Code Sprint SWE/SOS & Doc"
date:   2017-11-26 19:33:13
lang: fr
uid: 2010-11-26
---

Fin novembre s'est tenu à Rennes un Code Sprint "SWE/SOS & Doc".
Une quinzaine de personnes, issues de la communauté geOrchestra et plus largement du monde de la recherche, se sont retrouvées au laboratoire d'innovation publique ("Ti Lab") autour de deux objectifs : se faire la main sur des données, standards et logiciels du "sensor web", et travailler sur la documentation de l'administrateur de plateforme geOrchestra.

Retour sur l'événement, en mode compte rendu.

<!--more-->

Les capteurs, de plus en plus omniprésents, génèrent des séries de données temporelles géoréférencées ou facilement géoréférençables. Être en mesure d'acquérir, traiter, stocker et partager ce type de données est un enjeu croissant au sein des infrastructures de données géographiques.
L'OGC a d'ailleurs produit un certain nombre de standards ([Observations & Measurements](https://www.opengeospatial.org/standards/om), [SensorML](https://www.opengeospatial.org/standards/sensorml), [SensorThings](https://www.opengeospatial.org/standards/sensorthings), [SOS](https://www.opengeospatial.org/standards/sos), [SPS](https://www.opengeospatial.org/standards/sps)...) à cet effet.

L'objectif à court terme était donc de se familiariser avec les concepts, comprendre l'usage de ces nouveaux standards, et de tester leur effectivité en mettant en œuvre un service et une application cliente sur la base de données fournies au début de l'expérimentation.
A moyen terme, nous souhaiterions ajouter à geOrchestra la capacité de servir et de consommer ces nouveaux types de données, en les croisant avec le patrimoine de données géoréférencées déjà présent sur une plateforme.

Nous avons rapidement identifié le standard SOS comme premier objet d'intérêt. Peut être un peu vite, car [SensorThings](https://github.com/opengeospatial/sensorthings), plus récent, se montre également très prometteur.

Les services SOS sont moins répandus que nos classiques services WMS, WFS ou même CSW. Pour preuve, nous n'en avons identifié qu'une petite dizaine dans le monde francophone, reposant notamment sur les logiciels [istSOS](https://www.istsos.org/), [52 North SOS](https://52north.org/communities/sensorweb/sos/), [Constellation](https://www.constellation-sdi.org/fr/) ou encore [OpenSensorHub](https://opensensorhub.org/).
Nous vous en livrons quelques uns ci-dessous, à travers leurs documents de capacités:

 * [Grand Lyon Velov](https://download.data.grandlyon.com/sos/velov?service=SOS&request=GetCapabilities) avec istSOS
 * [Observatoire AMMA-CATCH](https://bd.amma-catch.org/amma-catchWS2/WS/sos/default?service=SOS&request=GetCapabilities) avec Constellation
 * [Un service de test](https://sensiasoft.net:8181/sensorhub/sos?service=SOS&acceptVersions=2.0.0&request=GetCapabilities) avec OpenSensorHub
 * [La démo](https://sensorweb.demo.52north.org/52n-sos-webapp/service?service=SOS&request=GetCapabilities) de 52 North
 
Très vite, on se rend compte qu'il nous faut acquérir un nouveau vocable, pour entrer dans ce monde des capteurs. On retient les élèments essentiels suivants :
 
 * une "**Feature of Interest**", aka FoI, est un objet du monde réel, un territoire, une zone d'étude, pour lequel on va s'intéresser aux évolutions d'un ou plusieurs phénomènes (ex : la température pour le FoI "fleuve la Loire").
 * une "**Observed Property**" ou encore "**Phenomenon**" est une propriété que l'on mesure à l'aide d'un capteur. Typiquement, on mesure la température, la luminosité, la hauteur d'eau, le Ph, le niveau de bruit, etc, etc, etc
 * une "**Procedure**" : il peut s'agir soit d'un capteur physique, qui réalise la mesure, soit du résultat d'un calcul, par exemple une simulation numérique. On peut également parler de "station".
 * un "**Result**" est, sans surprise, la valeur de mesurée d'une "**Observed Property**"
 * un "**Phenomenon Time**" indique l'horodatage associée au résultat de l'observation
 * une "**Observation**" est effectuée sur une "**Procedure**" donnée, qui mesure une "**Observed Property**" d'une "**Feature of Interest**" à un certain "**Phenomenon Time**", elle est stockée dans le "**Result**". Ouf !

Ces premières présentations effectuées, nous avons voulu installer et configurer un certain nombre de serveurs SOS: MapServer, OpenSensorHub, 52 North... 

L'expérimentation avec MapServer est reproductible sur la base du dépôt [fvanderbiest/mapserver-sos-experiment](https://github.com/fvanderbiest/mapserver-sos-experiment) contenant données et configurations applicatives. Sur cette base, nous avons pu monter un serveur SOS 1.0.0 fonctionnel à partir des données fournies, assez rapidement (quelques heures), qui supporte GetObservation.
Le service est cependant très limité : uniquement SOS 1.0.0 et il manque cruellement le support de getFeatureOfInterest ! 
Pour finir, le support de SOS dans MapServer semble ancien et assez peu maintenu.

On installe très rapidement OpenSensorHub à partir du [binaire fourni](https://github.com/opensensorhub/osh-core/releases), et on accède facilement à une démonstration et une interface d'administration classieuse.
La [documentation fournie](https://docs.opensensorhub.org/) est intéressante, mais insuffisante sur certains points, notamment la connection aux données. Le support de PostgreSQL est manquant pour le moment, seul ElasticSearch semble supporté actuellement. Nous n'irons donc pas plus loin dans le cadre du code sprint.

52 North SOS s'installe sans mal dans un container de servlet (tomcat, jetty) avec un PostgreSQL / PostGIS pour le stockage des données. Il y crée très vite une bonne [cinquantaine de tables](https://wiki.52north.org/SensorWeb/SosDataModeling), reprenant les concepts du standard SWE exposés ci-dessus. L'enjeu est donc d'alimenter ces tables à partir des données de l'expérience. Une première approche, en mode "ETL" échoue, du fait de la complexité du schéma. La seconde approche basée sur la manipulation des services web est plus concluante. Les méthodes InsertFeatureOfInterest, InsertSensor, InsertObservation, InsertResultTemplate, InsertResult se scriptent relativement aisément.

Côté client, OpenLayers 2 offre un support limité de SOS 1.0.0, grâce à une collection de classes de type protocole et formats. On réutilise donc l'[exemple fourni](https://dev.openlayers.org/releases/OpenLayers-2.13.1/examples/sos.html) pour consommer les services que nous venons de monter, ainsi que ceux précédemment identifiés. Les tentatives ne sont pas très concluantes dans le temps imparti, soit parce que MapServer ne supporte pas GetFeatureOfInterest, soit parce que nous n'arrivons pas à récupérer les observations (pour le service Amma Catch).

OpenSensorHub offre une bibliothèque cliente très complet pour interagir avec des services SOS et visualiser les données : [opensensorhub/osh-js](https://github.com/opensensorhub/osh-js). Les [exemples fournis](https://opensensorhub.github.io/osh-js/Showcase/) sont séduisants. On note surtout la possibilité:

 * d’utiliser des websockets pour garder la communication ouverte entre client et serveur
 * de créer des dashboards pour visualiser l’état des capteurs
 * d’interagir avec des cartes.

Pour finir, un [compte rendu](https://docs.google.com/document/d/19EdIPI3Hj1ZrjsSUWwBPtviQka56ZDzXxBEKk6m-U1A/edit?usp=sharing) de l'atelier SOS a été écrit à plusieurs mains.

En parallèle, un autre groupe a réfléchi aux modalités d'écriture et de mise à disposition de la documentation dédiée aux administrateurs de plateformes geOrchestra.
La documentation a été amorcée sur [gitbook](https://georchestra.gitbooks.io/data-admin/content/fr/), elle mérite désormais d'être enrichie lors de futurs sprints. Un [compte rendu](https://docs.google.com/document/d/1sCprrc1c_FgEhDWs5EySGGal8CQN61BUCK3Q_gae_B0/edit) détaillé de la session "documentation" est également disponible.

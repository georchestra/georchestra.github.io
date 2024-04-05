---
layout: post
title: "Community Sprint Ariège 2024"
date: 2024-04-04 14:00:00
lang: fr
uid: 2024-04-04
---

La rencontre de la communauté geOrchestra s'est tenue en Ariège du 19 au 21 mars 2023. Dans l'esprit du manifeste du projet, développeurs (Camptocamp, JDEV, Pi-Geosolutions) et administrateurs des plateformes de données (DataGrandEst, GéoBretagne, CRAIG, INRAE, Rennes Métropole) ont participé à l'évolution de geOrchestra.

Les participants ont d'abord élaboré une vision commune : une meilleure expérience producteur pour publier des données de tous types, et utilisateur pour y accéder ; une meilleure supervision des données pour l'administrateur ; une communauté davantage tournée vers l'international.

Les groupes se sont ensuite auto-organisés pour trouver des solutions, allant parfois jusqu'à leur implémentation pendant la rencontre.


<!--more-->


## L'expérience utilisateur

Pour l'utilisateur : prendre en compte les fédérations d'identité, en particulier nationales, permettra de reconnaître un même utilisateur entre les plateformes, puis lui ouvrira la possibilité de co-visualiser des données protégées sur des plateformes différentes. Cette évolution est recommandée par la feuille de route numérique France Nation Verte.

Pour l'utilisateur encore : les modèles de langage amélioreront la découverte des données : "y a-t-il des données sur les feuillus autour de Brest", et masqueront la complexité des sources multiples. Pour ensuite aller vers des questions plus complexes : "donne-moi une estimation du nombre de feuillus autour de Brest", et la génération de produits : "fabrique un graphique temporel du nombre de feuillus autour de Brest".

Data.gouv.fr étant un parcours utilisateur incontournable, les travaux d'interopérabilité se poursuivent. Si, dans le sens geOrchestra->data.gouv, les champs classiques sont repris, il faut encore améliorer la reconnaissance des licences (mise en correspondance des valeurs possibles et injection des valeurs compatibles avec data.gouv) et du producteur des données.


## L'expérience producteurs

Pour l'alimentation en données par leurs producteurs : cinq cas d'utilisation ont été identifiés. Avec le plus simple, le producteur est accompagné pour publier une seule fois un unique jeu de données. Les cas plus complexes synchronisent le SI local avec la plateforme. Le format VRT de la librairie OGR/GDAL apparaît de plus en plus comme un contrat d'interface sobre et efficace. Un assistant générateur de VRT a été conçu pendant les rencontres.

Les blocages d'interopérabilité constatés entre GeoIDE et geOrchestra ont été décortiqués. Il s'agit maintenant de trouver un compromis permettant la consultation transparente des données GeoIDE dans geOrchestra.

Les services statistiques ont souvent recours à GéoCLIP pour publier leurs indicateurs (observatoires des territoires par exemple). Les données y sont bien rangées et accessibles par API. geOrchestra et ses visualiseurs pourrait recenser, covisualiser ou intégrer automatiquement ces données, économisant ainsi l'effort de publication. Les versions récentes de GéoCLIP (4.12) permettent le moissonnage avec un bon rendu dans le datahub (exemple avec le jeu de données "[Part de la population active de 15 ans ou plus ayant un emploi et utilisant les transports en commun](https://www.geo2france.fr/datahub/dataset/act_lieu.pt_popactxx_trans_5)", publié sur l'infrastructure de la Région Hauts-de-France)

<img src="/public/ariege2024/datahub.png" alt="datahub geo2france" width="480px" height="auto">


## L'expérience créateurs d'application

L'API Feature spécifiée par l'OGC permet un accès aux données en phase avec les attentes des développeurs. geOrchestra propose deux parcours complémentaires. L'un ajoute une capacité OGC Features à GeoServer, et ajoute donc ce standard à ceux automatiquement proposés par la plateforme (WMS, WFS, WCS) pour servir des données géographique. L'autre, indépendant de GeoServer et développé pour la Métropole de Lille, donne accès aux données en base via API OGC et supporte les données non géographiques. Les deux peuvent fonctionner simultanément.


## Un circuit des données plus cohérent

geOrchestra est constitué de modules indépendants gérés par leurs propres communautés logicielles. L'infrastructure hérite ainsi de leur résilience et de leur dynamisme. Tous ces modules sont équipés d'API. Il est donc possible de piloter chacun des modules par API, mais aussi d'orchestrer l'ensemble des modules. L'intérêt est double : concevoir des produits "tour de contrôle" qui vérifient l'intégrité de la donnée tout au long de son cycle de vie, depuis le dépôt jusqu'à la consommation ; et programmer l'infrastructure pour qu'elle réalise automatiquement des tâches. L'enjeu est alors que, par retours d'expérience, la communauté améliore sa connaissance des API et de leur mise en oeuvre.


## Un terrain 3D France métropolitaine

Le standard OGC 3D Tiles est supporté par le visualiseur MapStore : terrain 3D, placage des données, interrogation, annotations. georchestra.org propose un flux 'terrain' tuilé sur la France métropolitaine entière afin que la communauté explore son usage. Il peut être exploité simplement dans n'importe quelle instance mapstore comme 'support de relief' plutôt que le globe ellipsoïde plat proposé par défaut, cf https://docs.mapstore.geosolutionsgroup.com/en/latest/developer-guide/maps-configuration/#cesium-terrain-provider. Le calcul de plusieurs jours (dont un MNT COG France entière à 5m) a commencé lors des rencontres. Des tests seront fait pour trouver un moyen de mixer ce flux 'terrain' à 5m avec des modèles locaux encore plus précis.


## Préparation du geOcom

La communication pour la rencontre annuelle des utilisateurs et développeurs, le geoCom 2024 a été préparée et lancée, avec un superbe visuel pour l'illustrer (cf ci-dessous).
le formulaire d'inscription est [en ligne](https://www.helloasso.com/associations/georchestra/evenements/geocom-2024).


<img src="/public/geocom2024/geocom2024_affiche_small.jpg" alt="Affiche geOcom 2024" width="480px" height="auto">


## Communauté internationale

geOrchestra est présent en Slovaquie, dans les Caraïbes, au Portugal et plus loin... ce qui contribue grandement à son rayonnement et à sa richesse. Cependant les réflexes ne sont pas encore acquis : comment être accueillant lors des rencontres, comment rédiger les documentations ?

La communauté s'est donc positionnée pour une incubation du projet par l'OSGeo, de façon à être conseillée pour adopter les bonnes pratiques d'un projet international.

<img src="/public/ariege2024/presov.png" alt="www.geoportalksk.sk" width="480px" height="auto">


## Evolutions réalisées au cours des rencontres

Des contributions ont été apportées au support des dernières versions de GeoServer 2.24 et 2.25, au proxy de sécurité, à Mviewer, à la migration d'Apache http server vers Nginx, à l'instance demo.georchestra.org, à la documentation... 

Pour les curieux ou les techniques :
 * debian package for georchestra-gateway - https://github.com/georchestra/georchestra-gateway/pull/111
 * ansible - test gateway as replacement for tomcat@proxycas - https://github.com/georchestra/ansible/issues/128
 * ansible - assets from datahub fails until datadir is cloned - https://github.com/georchestra/ansible/issues/130
 * ansible - updated datahub config - https://github.com/georchestra/ansible/issues/111
 * ansible - ldap custom schema fails at first run - https://github.com/georchestra/ansible/issues/129
 * ansible - playbook does not run under ansible >= 2.16.4 https://github.com/georchestra/ansible/issues/131
 * documentation - https://github.com/georchestra/georchestra/pull/4213
 * "please test geoserver 2.25-RC" - https://github.com/georchestra/georchestra/issues/4204
 * geoserver 2.25.x - https://github.com/georchestra/georchestra/pull/4211
 * geoserver 2.24.x - https://github.com/georchestra/georchestra/pull/4205
 * new header does not work with SP - https://github.com/georchestra/georchestra/issues/4210
 * SP - harmonize /whoami with gateway - https://github.com/georchestra/georchestra/pull/4212
 * Removing deb packages ? - https://github.com/georchestra/georchestra/issues/2957
 * harvesting data.gouv.fr - https://github.com/georchestra/georchestra/issues/4182
 * WIP for better csw-dcat harvesting - https://github.com/georchestra/geonetwork/pull/288


## Visualisateur cartographique 

MapStore2 est un visualisateur avancé pour geOrchestra.  
L'intégration de Mapstore2 dans le contexte de geOrchestra a été financée par différentes plateformes sous le pilotage de Rennes Métropole. Cela a été l'occasion de faire le point sur les développements réalisés, les points difficiles et les solutions apportées, pour commencer à élaborer une feuille de route des prochains développements. 


Nous remercions tous les participants pour leur participation, et particulièrement l'équipe des Vallons d'Aïga qui a hébergé ces rencontres !


<img src="/public/ariege2024/groupe.jpg" alt="groupe community meeting ariège 2024" width="480px" height="auto">

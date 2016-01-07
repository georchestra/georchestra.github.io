---
layout: post
title:  "geOrchestra 16.x, quelques nouvelles"
date:   2016-07-01 11:00:00
lang: fr
uid: 2016-07-01
---

geOrchestra publie habituellement une nouvelle version logicielle tous les six mois. Décembre-Janvier est une période de finalisation. Cependant, [le dernier GeoCom](/blog/2015/07/01/geocom2015-compte-rendu/) a mis en avant des évolutions significatives programmées pour la prochaine version. Nous devons donc prendre davantage de temps pour finaliser la version 15.12, qui arrivera plus tard dans l'année (et sera donc probablement renommée).

Voici un éclairage sur les principales avancées de la future version.

<!--more-->

Un très gros travail concerne les "WARs génériques" ([#94](https://github.com/georchestra/georchestra/issues/94)). Depuis le début, nous avons mis l'accent sur une infrastructure 100% libre et modifiable, avec d'une part les sources et d'autre part le moyen de les compiler. Ce mode sera bien sûr conservé mais pouvait en rebuter certains par sa complexité. Nous proposons donc une alternative plus simple : tous les paramètres applicatifs pourront être modifiés au runtime dans le répertoire /etc/georchestra, et toutes les applications seront génériques et, de fait, téléchargeables sur [build.georchestra.org](http://build.georchestra.org/) (sous la forme de paquets rpm ou deb).

Cette évolution permettra aussi de distribuer les applications sous forme d'images [Docker](http://www.docker.com/). Nous verrons si Docker, en sus de faciliter les développements, est en mesure de servir en contexte de production.

Une nouvelle console d'administration sera proposée. Elle unifiera la gestion des utilisateurs et la communication avec ceux-ci, la gestion des groupes, les statistiques d'utilisation, la traçabilité de l'administration ([#1018](https://github.com/georchestra/georchestra/issues/1018)).

Par défaut, une plateforme geOrchestra exposera des services et applications en https, mais il sera toujours possible de fonctionner sans SSL ([#1123](https://github.com/georchestra/georchestra/issues/1123)). Avec la démocratisation du SSL introduite par l'initiative [Let's Encrypt](https://letsencrypt.org/), nous pensons qu'il s'agit là d'une stratégie pertinente.

Le catalogue sera logiquement basculé sur [GeoNetwork 3](http://geonetwork-opensource.org/) ([#1120](https://github.com/georchestra/georchestra/issues/1120)), et le serveur OGC sur la dernière version de [GeoServer](http://geoserver.org) publiée dans la branche 2.8.x. Ceux qui n'utilisent pas GeoFence pour gérer les droits sur les données peuvent déjà utiliser GeoServer en version standard.

Pour le visualiseur, de nouveaux addons arrivent : changer rapidement de fond de plan, afficher la carte en plein écran ([#981](https://github.com/georchestra/georchestra/issues/981)), charger des données OpenStreetMap sur la carte ([#1031](https://github.com/georchestra/georchestra/issues/1031)), imprimer des atlas ([#1017](https://github.com/georchestra/georchestra/issues/1017)). 

Le requêteur sera renforcé : tampons, stockage de la requête, interface revisitée ([#1012](https://github.com/georchestra/georchestra/issues/1012) à [#1014](https://github.com/georchestra/georchestra/issues/1014)).

Par ailleurs, la visualisation des métadonnées sera facilitée depuis le visualiseur.

Enfin, tout ceci nécessitera évidemment une grosse mise à jour de la documentation, et comprendra beaucoup d'autres petites améliorations moins visibles mais réclamées par les utilisateurs.

Vous pouvez consulter sur GitHub l'[ensemble des évolutions et corrections prévues](https://github.com/georchestra/georchestra/issues?q=is%3Aissue+milestone%3A15.12)

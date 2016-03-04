---
layout: post
title:  "geOrchestra 15.12 est sortie"
date:   2016-03-05 11:00:00
lang: fr
uid: 2016-03-05
---

geOrchestra 15.12 est immédiatement disponible. Cette version met l'accent sur les modes de déploiement pour différentes tailles d'infrastructures de données spatiales, depuis la simple instance de démonstration jusqu'à la plateforme à fort trafic. Cette évolution du projet a été décidée au [GeoCom 2015](/blog/2015/07/01/geocom2015-compte-rendu/) et initiée lors du [codesprint](/blog/2015/06/16/codesprint-report/) qui a suivi.

Dans les évolutions fonctionnelles, on pourra citer le passage à Geonetwork 3 et de nouveaux addons pour geOrchestra, et le cortège habituel de correctifs qui accompagne chaque sortie de version.

Voici toutes les évolutions de geOrchestra 15.12 en détails.


<!--more-->

## Le déploiement revu

 Outre la compilation des applicatifs depuis les sources, sont maintenant proposés au choix : 
 
* des archives [WAR](https://fr.wikipedia.org/wiki/WAR_%28format_de_fichier%29) génériques (georchestra/georchestra/#94). Chacune contient une application qui se configurent automatiquement au démarrage,
* des [paquets deb](https://fr.wikipedia.org/wiki/Deb) ou [rpm](https://fr.wikipedia.org/wiki/RPM_Package_Manager) qui permettent de distribuer ces applications sur systèmes Debian ou Redhat,
* des containers [Docker](https://fr.wikipedia.org/wiki/Docker_%28logiciel%29) qui embarquent chaque application avec ses dépendances système,
* des recettes [Ansible](https://fr.wikipedia.org/wiki/Ansible_%28logiciel%29) qui déploient entièrement la plateforme dans des environnement [Vagrant](https://fr.wikipedia.org/wiki/Vagrant), ou peuvent servir de modèle pour un déploiement automatisé sur tout serveur.

Ces évolutions ont pour objectif de simplifier la vie des développeurs et des administrateurs système, mais aussi d'offrir davantage de possibilités aux administrateurs de données qui peuvent désormais intervenir directement sur la configuration de leurs applications.

<a href="/public/geor1512/workflow-app-generic-fr.png"><img src="/public/geor1512/workflow-app-generic-fr.png" alt="circuits de déploiement" title="circuits de déploiement, fev. 2016" /></a>
 

## Les applications génériques

A leur démarrage, les applications génériques consultent une série de fichiers pour se configurer. Il faut donc, pour démarrer, récupérer le  [répertoire commun de configuration](https://github.com/georchestra/datadir) et l'adapter pour la plateforme cible. Chaque applications geOrchestra y est décrite dans un sous-répertoire.

Ce répertoire gagnera à être placé sous contrôle de version. On disposera ainsi d'un historique des configurations et on pourra faire évoluer celles-ci en documentant les mises à jour.

Le chemin vers de répertoire doit être précisé dans chaque serveur tomcat au moyen de la variable `CATALINA_OPTS` et du paramètre `georchestra.datadir=/path/to/datadir`. On peut donc faire coexister plusieurs configurations sur un même système, chacune ayant son propre *datadir*.

Les applications génériques sont construites périodiquement par [l'intégration continue](https://build.georchestra.org/ci/job/georchestra-generic-wars/) qui a été renforcée à cette occasion. Vous pouvez les télécharger sur [http://build.georchestra.org/](http://build.georchestra.org/). L'intégration continue alimente aussi des dépôts deb et rpm, permettant au système de télécharger les nouvelles versions d'applications lors de ses mises à jour.

## Comment déployer

Les WAR génériques nous permettent de décliner geOrchestra en plusieurs modes de déploiement. Vous pouvez, au choix :

* télécharger manuellement les WAR et les déployer sur vos instances tomcat (ou laisser le système le faire avec les dépôts apt et rpm), appliquer les nouveaux réglages en comparant votre *datadir* avec sa source

* faire reposer votre architecture sur des container Docker

* déployer entièrement une instance de démonstration en une seule ligne de commande : `vagrant machin truc`


## Caveat

Lors du passage d'une version à l'autre, certaines mises à jour manuelles sont nécessaires. En particulier, les mises à jour de bases ou adaptations de configuration ne sont pas automatisées. Se référer aux notes de version.







Cette évolution permettra aussi de distribuer les applications sous forme de containers [Docker](http://www.docker.com/). Nous verrons si Docker, en sus de faciliter les développements, est en mesure de servir en contexte de production.

Une nouvelle console d'administration sera proposée. Elle unifiera la gestion des utilisateurs et la communication avec ceux-ci, la gestion des groupes, les statistiques d'utilisation, la traçabilité de l'administration ([#1018](https://github.com/georchestra/georchestra/issues/1018)).

Par défaut, geOrchestra sera publié en https pour les applications et les services ([#1123](https://github.com/georchestra/georchestra/issues/1123)). 
Avec la démocratisation du SSL introduite par l'initiative [Let's Encrypt](https://letsencrypt.org/), nous pensons qu'il s'agit là d'une stratégie pertinente.

Le catalogue sera logiquement basculé sur [GeoNetwork 3](http://geonetwork-opensource.org/) ([#1120](https://github.com/georchestra/georchestra/issues/1120)), et le serveur OGC sur la dernière version de [GeoServer](http://geoserver.org) publiée dans la branche 2.8.x. 
Ceux qui n'utilisent pas GeoFence pour gérer les droits sur les données, peuvent déjà utiliser GeoServer en version standard.

Pour le visualiseur, de nouveaux addons arrivent : changer rapidement de fond de plan, affichage plein écran ([#981](https://github.com/georchestra/georchestra/issues/981)), chargement de données OpenStreetMap sur la carte ([#1031](https://github.com/georchestra/georchestra/issues/1031)), service d'impression d'atlas ([#1017](https://github.com/georchestra/georchestra/issues/1017)). 
Le requêteur sera renforcé : tampons, stockage de la requête, interface ([#1012](https://github.com/georchestra/georchestra/issues/1012) à [#1014](https://github.com/georchestra/georchestra/issues/1014)).
La visualisation des métadonnées sera facilitée depuis le visualiseur.

Enfin, tout ceci nécessitera évidemment une grosse mise à jour de la documentation, et comprendra beaucoup d'autres petites améliorations moins visibles mais réclamées par les utilisateurs.

Vous pouvez consulter sur GitHub l'[ensemble des évolutions et corrections prévues](https://github.com/georchestra/georchestra/issues?q=is%3Aissue+milestone%3A15.12)
173 500 000 00018
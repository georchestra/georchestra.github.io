---
layout: post
title:  "geOrchestra 15.12 est sortie"
date:   2016-03-05 11:00:00
lang: fr
uid: 2016-03-05
---

geOrchestra 15.12 est immédiatement disponible. Cette version met l'accent sur les modes de déploiement pour différentes tailles d'infrastructures de données spatiales, depuis la simple instance de démonstration jusqu'à la plateforme à fort trafic. Cette évolution du projet a été décidée au [GeoCom 2015](/blog/2015/07/01/geocom2015-compte-rendu/) et initiée lors du [codesprint](/blog/2015/06/16/codesprint-report/) qui a suivi.

Dans les évolutions fonctionnelles majeures, on pourra citer le passage à GeoNetwork 3 et GeoServer 2.8, de nouveaux addons pour le visualiseur, ainsi que le cortège habituel de correctifs qui accompagne chaque sortie de version. Voir notre [précédent billet](/blog/2016/01/07/georchestra-16.x-fr/) pour les améliorations fonctionnelles.

Ce billet détaille les principales évolutions de geOrchestra 15.12 côté système.

<!--more-->

## Le déploiement revu

Outre la compilation des applicatifs depuis les sources, sont maintenant proposés au choix : 
 
* des archives [WAR](https://fr.wikipedia.org/wiki/WAR_%28format_de_fichier%29) génériques (georchestra/georchestra/#94). Chacune contient une application qui se configure automatiquement au démarrage,
* des [paquets debian](https://fr.wikipedia.org/wiki/Deb) ou [rpm](https://fr.wikipedia.org/wiki/RPM_Package_Manager) qui permettent de distribuer ces applications sur systèmes Debian ou Redhat,
* des images [Docker](https://fr.wikipedia.org/wiki/Docker_%28logiciel%29) qui embarquent chaque application avec ses dépendances système,
* des recettes [Ansible](https://fr.wikipedia.org/wiki/Ansible_%28logiciel%29) qui déploient une plateforme complète, soit dans un environnement virtuel avec [Vagrant](https://fr.wikipedia.org/wiki/Vagrant), soit peuvent servir de modèle pour un déploiement automatisé sur un serveur.

Ces évolutions ont pour objectif de simplifier la vie des développeurs et des administrateurs système, mais aussi d'offrir davantage de possibilités aux administrateurs de données qui peuvent désormais intervenir directement sur la configuration de leurs applications.

<a href="/public/geor1512/workflow-app-generic-fr.png"><img src="/public/geor1512/workflow-app-generic-fr.png" alt="circuits de déploiement" title="circuits de déploiement, fev. 2016" /></a>


## Les applications génériques

A leur démarrage, les applications génériques consultent une série de fichiers pour se configurer. Il faut donc, pour démarrer, récupérer le [répertoire commun de configuration](https://github.com/georchestra/datadir) (aka "datadir") et l'adapter pour la plateforme cible. Chaque application geOrchestra y est configurée via un sous-répertoire.

Ce répertoire gagnera à être placé sous contrôle de version. On disposera ainsi d'un historique des configurations et on pourra faire évoluer celles-ci en documentant les mises à jour.

Le chemin vers ce répertoire doit être précisé dans chaque serveur tomcat au moyen de la variable `CATALINA_OPTS` et du paramètre `georchestra.datadir=/path/to/datadir`. On peut donc faire coexister plusieurs configurations sur un même système, chacune ayant son propre "datadir".

Les applications génériques sont construites périodiquement par [l'intégration continue](https://build.georchestra.org/ci/job/georchestra-generic-wars/) qui a été renforcée à cette occasion. Vous pouvez les télécharger sur [https://build.georchestra.org/](https://build.georchestra.org/). L'intégration continue alimente aussi des dépôts deb et rpm, permettant au système de télécharger les nouvelles versions d'applications lors de ses mises à jour.

## Comment déployer

Les WAR génériques nous permettent de décliner l'installation de geOrchestra selon plusieurs modes. Vous pouvez, au choix :

* télécharger manuellement les WAR et les déployer sur vos instances tomcat (ou laisser le système le faire avec les dépôts apt et rpm), appliquer les nouveaux réglages en comparant votre *datadir* avec sa source

* déployer entièrement une instance de démonstration en une seule ligne de commande : `vagrant up`

* faire reposer votre architecture sur les images Docker fournies par le [repository communautaire](https://hub.docker.com/u/georchestra/), que vous surchargerez pour appliquer votre personnalisation.

Il est toujours possible de construire ses applications en y intégrant un profil de configuration spécifique, hérité de la [configuration template](https://github.com/georchestra/template), comme auparavant. Ce mode est plus complexe à mettre en oeuvre, mais permet de personnaliser l'IDS de manière plus poussée, par exemple par surcharge des fichiers css et images.

## Caveat

Lors du passage d'une version à l'autre, certaines mises à jour manuelles sont nécessaires. En particulier, les mises à jour de bases ou adaptations de configuration ne sont pas automatisées. Se référer aux [notes de version](https://github.com/georchestra/georchestra/blob/15.12/RELEASE_NOTES.md).
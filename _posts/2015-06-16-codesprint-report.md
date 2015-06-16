---
layout: post
title: "Codesprint, le retour"
date: 2015-06-16 11:00:00
lang: fr
uid: 2015-06-16
---

La semaine dernière s'est tenu notre premier codesprint organisé. Grâce à l'Agrocampus Ouest, nous avons bénéficié d'un [cadre exceptionnel](https://twitter.com/fvanderbiest/status/609283098170294273) apprécié de 
tous les participants. Développeurs et administrateurs de données ont travaillé ensemble pendant deux jours sur l'avenir de geOrchestra.
Nos sujets de sprint : les rasters, l'accompagnement des utilisateurs, la supervision et le packaging des applications.

<!--more-->


## Les rasters

Par méconnaissance de son potentiel, la donnée raster est le parent pauvre des IDS. Le groupe a souhaité montrer qu'elle peut être exploitée grâce au profil SLD.
Le stylage raster n'entraîne aucun ralentissement : pourquoi s'en priver !

Un styleur raster intégré au [visualiseur geOrchestra](http://sdi.georchestra.org/mapfishapp) a été conçu. Reposant sur un workflow similaire au styleur vecteur
(trouver le Web Coverage Service, décrire les données, construire un formulaire, stocker le style, le rappeler, le partager),
il permet le choix de la bande à traiter, la fabrication et l'application de la colormap.

Nous avons remarqué que les capacités des services de coverage sont suffisamment détaillées pour alimenter des analyses automatiques,
possibilité que nous étudierons si le styleur raster rencontre son public.

Le styleur raster sera prochainement intégré dans master.

<p><a href="/public/codesprint2015/20150612_raster.jpg"><img src="/public/codesprint2015/20150612_raster.jpg" alt="roadmap datadir" title="proto raster, juin 2015" style="width: 400px;" /></a></p>


## L'accompagnement

Déjà abordé lors du [geocom2014](/blog/2014/07/03/compte-rendu-du-geocom-2014/), ce sujet a été approfondi par quatre sprinters. Une IDS ouverte connaît peu sa population d'utilisateurs
et n'a pas de moyen simple pour la réunir. Par conséquent, un MOOC (Massive Open Online Course) nous semble très adapté. Nous nous appuierons sur le MOOC IDS conçu par Agrocampus Ouest (plateforme [moodle](https://moodle.org/)).

Les "grains" de formation sont en cours de rapatriement, ils pourront être accédés individuellement ou selon des parcours de formation.
Les licences type attribution/share-alike permettront la réutilisation commerciale.


## La distribution

Construire entièrement à partir des sources fait partie du contrat de geOrchestra en tant que logiciel libre. Certaines plateformes automatisent ce build dans leurs recettes de déploiement,
et parfois en profitent pour surcharger le code source et intégrer des fonctions locales. D'autres, aux besoins plus standards, souhaiteraient une installation facilitée et surtout
des modes de configuration sans compilation.

Le sprint a permis aux administrateurs de répertorier leurs souhaits de paramétrage - pour ceux qui connaissent : GEOR_custom, listes de services, addons...
Chaque serveur d'application pourra, au moyen d'une variable d'environnement, préciser l'emplacement des fichiers de configuration concentrés dans une unique arborescence.
Les modules applicatifs seront proposés sous forme d'archives génériques versionnées, téléchargeables depuis georchestra.org.

A suivre, la mise en oeuvre de ce principe sur l'ensemble des modules pour la 15.12.


<p><a href="/public/codesprint2015/20150612_data_dir.jpg"><img src="/public/codesprint2015/20150612_data_dir.jpg" alt="roadmap datadir" title="roadmap datadir, juin 2015" style="width: 400px;" /></a></p>

## La supervision

Nous avons réalisé que les administrateurs de données consultent un grand nombre de sources d'informations pour analyser le fonctionnement de l'IDS :
journaux d'erreurs provenant des diverses applications, indicateurs de disponibilité, trafics, charge... de façon peu efficace et chronophage.
Un groupe de sprinteurs a montré que la pile [Logstash](https://www.elastic.co/products/logstash)/[Graylog](https://www.graylog.org/) améliore l'accessibilité et l'utilisation des capteurs.
Nous avons de plus vu que l'extension [monitor/audit](http://docs.geoserver.org/stable/en/user/extensions/monitoring/index.html) de GeoServer 
permet le calcul instantané de métriques comme la répartition des requêtes par namespace.
Nous avons enfin joué avec [Logstalgia](https://github.com/acaudwell/Logstalgia) qui représente le trafic sous la forme d'une (violente) partie de [pong](https://fr.wikipedia.org/wiki/Pong).

<p><a href="/public/codesprint2015/20150612_logstalgia.png"><img src="/public/codesprint2015/20150612_logstalgia.png" alt="logstalgia" title="SDI par temps calme, juin 2015" style="width: 400px;" /></a></p>

A suivre, une expérimentation Graylog à la région Bretagne et un prototype de dataviz temps réel sur les trafics, avec objectif de partager ces pratiques avec la communauté
geOrchestra.


## Bilan

* les groupes de 2 ou 3 permettent de se concentrer sur un objectif, avec des résultats à la sortie.
* les développeurs apprécient le retour direct des administrateurs sur les fonctionnalités qu'ils proposent, et réciproquement les administrateurs voient leurs principales préoccupations comprises.
* ce format codesprint est très efficace pour dégager un consensus en quelques minutes, puis pour se consacrer à la production avec un retour immédiat. Sur l'ensemble des sujets, le consensus et la réalisation auraient sans doute pris beaucoup plus de temps via ticket ou messagerie.
* nous avons probablement passé trop de temps en restitution formelle alors que l'information circule déjà entre les groupes. Il suffit de noter les objectifs et les résultats sur les tableaux.

Ce codesprint aboutit à quatre actions sérieusement engagées, à finaliser pour la version 15.12.


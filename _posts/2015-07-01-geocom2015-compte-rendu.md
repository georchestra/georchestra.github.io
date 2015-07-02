---
layout: post
title: "Compte rendu du GeoCom 2015"
date: 2015-07-01 16:00:00
lang: fr
uid: 2015-07-01
---

Du 22 au 24 juin, la Maison de l'Alsace a hébergé le GeoCom 2015, qui s'est déroulé dans d'excellentes conditions.
Une quarantaine de personnes, issues de la communauté des utilisateurs, administrateurs et développeurs, ont pu se retrouver pour partager les pratiques et élaborer la feuille de route de l'année à venir. 
L'événement était retransmis en direct sur YouTube, ce qui a permis à plusieurs personnes distantes de suivre les échanges.

La première demi-journée du lundi était dédiée aux présentations des plateformes, et à des rappels sur "l'écosystème geOrchestra". 
Elle s'est conclue sur un état des lieux par rapport à la feuille de route post-GeoCom 2014.

La journée de mardi a fait l'objet d'une série d'interventions autour de trois thématiques principales : valorisation des services, publication de données et maintenance des plateformes.

Enfin, le mercredi a été consacré à l'élboration commune de la feuille de route, que nous retranscrivons ici.


## Interopérabilité : s'ouvrir aux autres entrepôts

La connexion avec les services géographiques de base (visualisation, accès aux données, recherche de métadonnées) est acquise. La communauté souhaite maintenant s'interfacer avec d'autres systèmes d'informations maniant des données localisables. Le support des normes TJS, SOS, WPS permettrait de réduire les ruptures entre les systèmes. 
De même, la possibilité d'échanger des données avec le monde OpenStreetMap concilierait davantage les IDS avec les bases de données contributives. Pour que ces sources soient mixées, analysées, partagées par les utilisateurs, il faut que les contextes (ie configurations de carte) supportent ces normes.

 * consommation de données par Table Joining Service
 * interrogation de capteurs via Sensor Observation Service
 * support générique des Web Processing Services
 * contextes de carte supportant WMTS et autres interfaces (OWSContext)
 * échanges de données avec OpenStreetMap



## Gestion de plateforme : maîtriser la complexité

Dans IDS il y a "I" pour Infrastructure. Une infrastructure est constituée de modules multiples qu'il faut surveiller en permanence. Il faut fournir aux administrateurs des tableaux de bord complets, autant sur l'utilisation (la charge, l'usage) que sur le système (ie les conséquences de la charge), voire sur la qualité (appréciation des utilisateurs, signalement d'erreurs, qualité des informations).

 * architecture de reporting
 * configuration de l'ensemble des modules accessible à l'administrateur de données
 * simplification de l'administration geofence
 * Single Sign On sur des fédérations d'identité (Shibboleth)


## Ergonomie, workflow : simplifier, déléguer pour gagner du temps 

Les évolutions vont dans le sens d'un gain de temps pour toutes les populations : utilisateurs, administrateurs, producteurs. Faire plus simple, donc pouvoir déléguer davantage pour gagner du temps, tout en conservant le paramétrage fin et la personnalisation indispensables à la performance.

 * délégation du workflow de publication (geonetwork, geoserver, module indépendant, QGIS...)
 * fonction de recherche unifiée sur données, métadonnées, contenus littéraux
 * styliseur enrichi, nouvelles classifications, prise en charge des rasters
 * console d'administration, notamment des utilisateurs
 * header compatible avec la réutilisation des modules sur des sites tiers
 * saisie et conversion de métadonnées dans un tableur (module Zaphir CIGAL)
 * visualisation directe des métadonnées dans les visualiseurs
 * amélioration de l'ergonomie de consultation et d'administration du catalogue (GeoNetwork 3, cswReader et mdReader)


## Accompagnemement : partager le savoir

L'accompagnement aussi doit être "libre". Les contenus structurés en "grains" rejoignent une offre de formation/accompagnement commune (un MOOC). La communauté doit développer un réflexe de partage des savoir-faire, en échangeant en amont sur les intentions pour que toute opportunité soit exploitable, et en informant en aval sur les réalisations.

 * tronc commun de formations bâti à partir des contenus existants
 * veille technologique et preuves de concept par les plateformes
 * partage et capitalisation des bonnes pratiques
 * mise à disposition des applicatifs tiers sur github



## Métier : répondre aux enjeux

Faire en sorte que l'IDS sache répondre aux enjeux actuels, soit en direct (modules métier en "contribution geOrchestra"), soit en montrant que c'est possible (produits d'appel, bonnes pratiques, API...)

 * profils utilisateurs, comportant notamment un contexte métier par défaut
 * module cadastre, en cours de réalisation
 * module de consultation des informations urbanisme
 * module de conception d'atlas
 * support des flux (Atom, WFS2) pour le géoportail de l'urbanisme


## Clôture du GeoCom 2015 par Marie-Christine Schott, Responsable du service SIG au Conseil Régional d'Alsace

On se réjouit de découvrir une communauté dynamique rassemblant toutes les facettes et les compétences du partage de données. Il est important de rester vigilant car la disponibilité et la performance des applicatifs sont déterminants dans l'adoption de ces nouvelles pratiques de travail. Il faut profiter de cette communauté pour rester à l'écoute et réactifs face à des réformes institutionnelles d'envergure, et pour mieux répondre aux enjeux actuels.

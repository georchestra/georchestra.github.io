---
layout: post
title: "geOrchestra 14.12 est disponible"
date: 2015-01-30 09:37:00
lang: fr
uid: 2015-01-30
---

Le PSC a le plaisir de vous annoncer la sortie immédiate de **geOrchestra 14.12**, 6ème version depuis qu'on fait des notes de version. 
Le rythme d'une version tous les 6 mois est toujours maintenu à quelques jours près grâce à la ténacité des développeurs et au soutien permanent des plateformes utilisatrices.

Cette version se veut à la fois plus simple pour les utilisateurs finaux et plus facile à intégrer pour les administrateurs - fruit des nombreux rapports et suggestions recensés sur le [bugtracker](https://github.com/georchestra/georchestra/issues) (600 tickets depuis octobre 2012).  
Une [documentation d'installation](https://github.com/georchestra/georchestra/blob/master/README.md) complète et pas à pas accompagne désormais les primo-installants.

<!--more-->


## Côté outils

Désormais, une seule fenêtre présente tous les services OGC prédéfinis : **WMS**, **WFS**, **WMTS**.

<img src="/public/posts/2015-01-31/about.jpg" alt="layer finder" />

Ces services sont configurés dans des fichiers externes, partageables entre instances, voire générés par des applicatifs tiers. 
Un filtre bien pratique accélère la découverte des services.

Une nouvelle option dans le menu de chaque couche permet d'afficher à tout moment les points d'entrée d'une couche pour les copier/coller vers son SIG. 

<img src="/public/posts/2015-01-31/layerfinder.jpg" alt="layer information" />

Depuis le visualiseur, la recherche plein texte de séries de données dans les catalogues peut **exploiter les métadonnées de service** pour découvrir un service non décrit dans la métadonnée de donnée.
geOrchestra augmente ainsi la compatibilité avec les IDS tierces.

Un contexte de carte peut être référencé dans une métadonnée du catalogue. 

<iframe width="420" height="315" src="https://www.youtube.com/embed/vX67NfFrj4o" frameborder="0" allowfullscreen></iframe>

Les **contextes sont mieux décrits** : titre & résumé affichés au chargement, ainsi que possibilité de filtrage sur mots clés.
Ces contextes sont de plus en plus utilisés pour envoyer des cartes entre plateformes ou entre outils (visualiseur mobile par exemple).

Dans les fonctions avancées : une géométrie extraite d'une première couche peut servir de filtre spatial sur une autre. 
On peut donc par exemple extraire les maisons dans une zone donnée [screenshot].

L'**impression est améliorée** : support de la rotation & export PNG notamment. 
La mise en page a été revue afin de dégager plus de place pour la carte.

Pour rappel, le visualiseur peut charger des addons spécialisés de manière à étendre ses fonctionnalités de base.
Certains utilisent déjà "calcul de profil en long", "génération de bassin versant", "annotation"...  
Un nouvel addon active **Google Streetview** pour afficher une vue terrain et basculer vers StreetView.  

<img src="/public/posts/2015-01-31/streetview.jpg" alt="streetview" />

Il faut également noter la nouvelle possibilité de **placer le composant généré par un addon (bouton, onglet, champ de formulaire ...) où on le souhaite dans l'interface**.

Côté téléchargement, les rasters sont maintenant extraits dans leur **résolution native** pour peu que leur fiche de métadonnée mentionne cette valeur. 
Les courriels de notification ont également été améliorés.

Pour finir, les **traductions espagnoles, françaises, allemandes** sont maintenues à jour grâce à nos branches internationales :)


## Côté moteur

GeoServer passe en version **2.5.4** (décembre 2014) avec le support optionnel de GeoFence.

Parmi les notes de version cumulées entre GeoServer 2.3.2 et 2.5.4, on notera principalement:

 * la possibilité de configurer le délai de rétention en cache client des tuiles du GeoWebCache intégré (GEOS-4760)
 * un meilleur référencement des couches OGC dans le service CSW optionel (GEOS-6012)
 * des performances améliorées sur les couches vectorielles servies par PostGIS (GEOS-5027)
 * une prise en compte des liens vers les fiches de métadonnées dans les capabilities WFS (GEOS-3387)
 * une meilleure compatibilité avec WMS 1.3.0 du GeoWebCache intégré (GEOS-5685)
 * et bien d'autres encore ...

Enfin, la sécurité du système a été renforcée au niveau des proxies OGC.


## Côté admin

La stabilité des builds a été améliorée, à travers la mise en place d'un [dépôt maven dédié au projet](http://sdi.georchestra.org/maven/repository/), et avec la détection des erreurs de build javascript.

De plus, le projet propose désormais des exemples de configuration comme le répertoire [htdocs](https://github.com/georchestra/htdocs), ainsi que des répertoires minimaux de configuration pour [GeoServer](https://github.com/georchestra/geoserver_minimal_datadir) et [GeoNetwork](https://github.com/georchestra/geonetwork_minimal_datadir).


## Côté système

Le déploiement d'une IDS geOrchestra peut désormais se faire selon 4 modalités (!) :

 * pour du développement ou pour un besoin de démonstration ponctuel, il est possible d'utiliser des **containers Docker**, créés à partir des recettes proposées dans le dépôt [georchestra/docker](https://github.com/georchestra/docker).
 * pour un déploiement rapide de tous les composants de l'IDS, y compris geofence, il est désormais possible d'utiliser le [playbook ansible](https://github.com/landryb/georchestra-ansible) contribué par Landry Breuil, du [CRAIG](http://craig.fr/).
 * pour une mise en place du middleware nécessaire à l'IDS (apache, tomcat, postgresql, openldap), il existe depuis peu un autre [playbook ansible](https://gitlab.geo.gob.bo/adsib/georchestra_ansible/tree/master) contribué par Daniel Quisbert de [GeoBolivia](http://geo.gob.bo/) et Juan Coronel, Daniel Jimenez de l'[ADSIB](http://www.adsib.gob.bo/).
 * comme toujours, en construisant les WARs du projet sur un profil personnalisé et en les déployant sur une infrastructure dédiée, en suivant la [documentation actualisée](https://github.com/georchestra/georchestra/blob/master/README.md). L'architecture proposée par défaut repose sur plusieurs instances tomcat et permet la **montée en charge** de l'IDS.


## Côté communauté

Le  développement est toujours aussi dynamique; [OpenHub](https://www.openhub.net/p/georchestra) relève 1250 commits et 12  contributeurs sur les 12 derniers mois (en baisse car l'automne 2013 a été particulièrement intense). 

La liste [georchestra-dev](https://groups.google.com/forum/#!forum/georchestra-dev) est principalement fréquentée par les francophones avec quelques discussions en anglais.
N'hésitez pas à poster dans votre langue !

Effet du très convivial geOcom 2014, les participants à la liste sont plus nombreux, et les questions de plus en plus pointues. 
Le **geOcom 2015 aura lieu en Alsace** probablement en juin. Nous espérons vous y rencontrer !


## Pour aller plus loin ...

Consultez les [notes de version](https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md#version-1412-stable-version) qui fournissent des informations détaillées pour la mise à jour. 

Pensez également à visiter :

 * l'[intégration continue](https://sdi.georchestra.org/ci/),
 * le [bugtracker](https://github.com/georchestra/georchestra/issues),
 * le [tableau Kanban du projet](https://huboard.com/georchestra/georchestra).
---
layout: post
title: "geOrchestra 25 est disponible"
date: 2025-09-06 19:00:00
lang: fr
uid: 2025-09-06
---

La [version 25.0.0 de geOrchestra](https://github.com/georchestra/georchestra/releases/tag/25.0.0) est disponible depuis début juillet.

<!--more-->

La version 25.0 de geOrchestra comprend :

* L'en-tête du composant Web peut être configuré via un fichier JSON (plus besoin de le compiler)
* La gateway est désormais compatible avec ProConnect et FranceConnect v2
* La dernière version de GeoServer 2.27.1 avec correctifs de sécurité et fonctionnalités de l'API OGC activées par défaut. 
* GeoNetwork a été mis à jour vers la version 4.4.8, avec prise en charge des instances Datahub par portail.
* Le nouvel éditeur de métadonnées [financé par financement participatif](https://camptocamp.com/en/news-events/help-fund-the-new-geonetwork-editor) est disponible en test.
* La mise à jour vers Mapstore2-georchestra 2024.02, avec de nombreuses améliorations (voir [https://github.com/georchestra/mapstore2-georchestra/releases/tag/2024.02.00-geOrchestra](https://github.com/georchestra/mapstore2-georchestra/releases/tag/2024.02.00-geOrchestra))
et [https://github.com/geosolutions-it/MapStore2/releases/tag/v2024.02.00](https://github.com/geosolutions-it/MapStore2/releases/tag/v2024.02.00))
* Les rôles peuvent être attribués aux organisations dans la console.

Les notes de migration sont disponibles [ici](https://github.com/georchestra/georchestra/blob/25.0.x/migrations/25.0/README.md).

Les différentes méthodes de déploiement (Docker, Ansible, paquets Debian, wars autonomes…) ont été mises à jour pour intégrer cette nouvelle version.

Le [site de démo](https://demo.georchestra.org) a été mis à jour.

Merci à nos nombreux contributeurs, non seulement en argent, mais aussi en temps !
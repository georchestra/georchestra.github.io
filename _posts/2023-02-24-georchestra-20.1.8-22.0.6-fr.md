---
layout: post
title: "geOrchestra 20.1.8 et 22.0.6"
date: 2023-02-24 10:00:00
lang: fr
uid: 2023-02-14
---

Suite à [l'annonce le 20 février dernier d'une vulnérabilité dans GeoServer](https://geoserver.org/vulnerability/2023/02/20/ogc-filter-injection.html), 5 versions de GeoServer ont été publiées, chacune incorporant un patch pour combler cette vulnérabilité.

La communauté geOrchestra a travaillé immédiatement afin de mettre à jour GeoServer dans les 2 branches stables de geOrchestra et les mettre à disposition sous toutes les méthodes de diffusion.

**Les versions [20.1.8](https://github.com/georchestra/georchestra/releases/tag/20.1.8) et geOrchestra [22.0.6](https://github.com/georchestra/georchestra/releases/tag/22.0.6) embarquent donc un GeoServer 2.18.7 à jour.**

<!--more-->

Pour bénéficier de ces mises à jour, plusieurs solutions s'offrent à vous :

- utiliser les paquets debian venant de l'intégration continue communautaire sur [https://packages.georchestra.org](https://packages.georchestra.org/).

- utiliser les wars l'intégration continue communautaire sur [https://packages.georchestra.org/bot/wars/](https://packages.georchestra.org/bot/wars/)

- utiliser les images Docker officielles sur [https://hub.docker.com/u/georchestra](https://hub.docker.com/u/georchestra).

- pour ceux utilisant des GeoServer 'vanilla' il est conseillé de mettre à jour vers la dernière version mineure de la branche utilisée


Pour les instances geOrchestra qui seraient sur des branches plus anciennes (<=2.17) il sera conseillé de migrer sur des versions plus récentes, les versions plus anciennes de GeoServer ne recevant plus de mises à jour de sécurité. 

En cas de difficultés, la [liste de discussion](https://groups.google.com/group/georchestra?hl=fr) ou le [canal IRC](https://kiwiirc.com/client/irc.libera.chat/georchestra) sont les meilleurs endroits pour trouver de l'aide.


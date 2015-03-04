---
layout: post
title: "GitHub : on y vient"
date: 2012-06-12 09:19:13
lang: fr
uid: 2012-06-12-a
---

<img style="max-width: 800px; float: left; margin-top: 10px; margin-bottom: 10px; margin-right: 10px;" src="/public/octocat.png" width="79" height="79" alt="github octocat" />

Le projet geOrchestra <a href="https://github.com/georchestra">teste actuellement GitHub</a> avec pour objectif d'en faire le futur dépôt de sources. Ce transfert est motivé par le haut niveau de service et la richesse fonctionnelle de GitHub, et par le protocole git qui facilite beaucoup les contributions. Attention, les développements sont toujours effectués sur le dépôt subversion et le code sur GitHub n'est encore qu'une copie.

<!--more-->

Les dépôts suivants ont été ouverts :

* <a href="https://github.com/georchestra/georchestra">https://github.com/georchestra/georchestra</a> qui propose une copie de <i>trunk</i>
* <a href="https://github.com/georchestra/geonetwork">https://github.com/georchestra/geonetwork</a> qui propose l'adaptation de GeoNetwork utilisé dans geOrchestra
* <a href="https://github.com/georchestra/contribs">https://github.com/georchestra/contribs</a> qui reçoit les contributions externes à geOrchestra. Contributions non supportées par le projet, mais susceptibles de le rejoindre après revue et acceptation
* https://github.com/georchestra/mapfishapp-i18n qui reçoit l'effort communautaire d'internationalisation du visualiseur

Les <i>submodules</i> sont référencés avec le protocole http. Le rapatriement initial est sensiblement plus lent comparé au protocole <i>git</i>, mais cela permet de récupérer les sources derrière un proxy ou un pare-feu.

Le passage définitif à GitHub pourra survenir lorsque les protocoles de déploiement et la documentation prendront ce nouveau protocole en compte.

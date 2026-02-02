---
layout: post
title: "Le nouveau module analytics"
date: 2026-01-29 09:00:00
lang: fr
uid: 2026-01-29
---

Le nouveau module Analytics, objet de discussions et de présentations à chaque rencontre de la communauté depuis plus de 2 ans, arrive bientôt sur les étagères. Pour vous mettre en appétit, je reprends ici dans les grandes lignes le fonctionnement de ce module.

<a href="https://docs.georchestra.org/analytics/en/latest/user_guide/images/ogcstats.png"><img src="https://docs.georchestra.org/analytics/en/latest/user_guide/images/ogcstats.png" alt="Visualisation d'usages OGC" style="width:500px;"></a>

<!--more-->

## Pourquoi un nouveau module ?

geOrchestra dispose depuis longtemps d'un module analytics, dont la fonction est de collecter les usages des services OGC et de fournir des rendus graphiques : nombre de requêtes par couches carto, par organisation, par utilisateur.

Le besoin de remplacer ce module s'est manifesté avec le remplacement prograssif du Security-proxy par la Gateway. En effet, la collecte des logs était en partie codée dans le security proxy, et la Gateway n'a pas vocation à reprendre ce rôle : les technologies actuelles permettent d'envisager une collecte via des moyens plus découplés.

Tout l'ancien module analytics a fidèlement tenu son rôle pendant des années mais manque de flexibilité : dataviz codée "en dur", tables en base de données aussi, analyse d'usage strictement limitée aux données OGC. Et encore, limité aux services WxS (ne couvre pas les nouveaux standards OGC API).

N'oublions pas que le suivi des usages d'une plateforme est au coeur des besoins de reporting, permettant de justifier les moyens investis dans les outils technologiques, mais aussi le temps passé sur une carte, une viualisation, une donnée. Justifier et donc... financer. Plus on a de contrôle sur la dataviz, plus on va pouvoir montrer en détail l'impact du temps et des moyens investis.

Il a donc été décidé de considérer un remplacement complet de ce module.

Depuis le geOcom 2023 de la communauté, un groupe de travail se penche sur le sujet. Les choix techniques, en effet, ne sont pa évidents. Plusieurs restitutions ont eu lieu : [geOcom 2023](https://www.georchestra.org/public/geocom2023/presentation/AmeliorationsStatsUsages.pdf), [geOcom 2024](https://www.georchestra.org/public/geocom2024/presentations/jour_2/11%20-%20JP%20-%20Am%C3%A9lioration%20des%20statistiques%20d%E2%80%99usage.pdf), [geOcom 2025](https://www.georchestra.org/public/geocom2025/presentations/jour_2_matin/01_JP_NR_Superset_de_la_dataviz_dans_geOrchestra.pdf).

Fin 2024, un financement de la région Haut-de-France a permis de lancer l'écriture de ce nouveau module, complétée par un financement de la MEL pour la couverture d'OGC API Feature (en cours).


## Un nouveau module... qui fait la même chose !

Hé oui. En l'état actuel, il fait à peu près la même chose : 

- la Gateway expose ses logs d'accès, 
- ces logs d'accès sont collectés et stockés en base de données,
- ils sont ensuite traités pour extraire les informations pertinentes et pour l'instant ne traitent que les usages OGC. Le résultat est stocké sous forme de table et de vues en base de données,
- une dataviz propose des graphiques affichant : nombre de requêtes par couches carto, par organisation, par utilisateur ;o). J'exagère un peu, il y en a un peu plus.

## Oui mais alors, à quoi bon ?

OK, reprenons la liste ci-dessus pour mettre en valeur quelques différences : 

- la Gateway expose ses logs d'accès, **_via un standard, [OpenTelemetry](https://github.com/open-telemetry)_**. En fait, _n'importe quel outil_ pouvant exposer ses logs d'accès via OpenTelemetry peut se brancher sur le système.
- ces logs d'accès sont collectés **_via un outil "sur étagère"_**, [Vector](https://vector.dev/), et stockés en base de données. 
    - Cet outil est fortement configurable, accepte plusieurs sources de données, peut les transformer à la volée, les fusionner même. Et sa maintenance n'est pas à la charge du projet geOrchestra.
    - la **_base de données utilisée est optimisée pour de gros volumes de données à caractère temporel_**. Il s'agit de [TimescaleDB](https://en.wikipedia.org/wiki/TimescaleDB). TimescaleDB est une extension PostgreSQL, qui ajoute plusieurs fonctionnalités clef pour cette optimisation : vue d'agrégation des données à un pas de temps donné (vues par heure, par jour, par ce que vous voulez) mises à jour automatiquement, gestion de la rétention des données, compression, partitionnement automatique. Le tout évidemment hautement configurable.
- ils sont ensuite traités pour extraire les informations pertinentes et pour l'instant ne traitent que les usages OGC. Le résultat est stocké sous forme de table et de vues en base de données. 
    - Le traitement des données, c'est en fait le seul outil maison. Une [CLI python](https://github.com/georchestra/analytics/tree/main/analytics-cli) qui, certes, pour l'instant ne couvre que les données OGC, mais est pensée pour être facile à enrichir de fonctionnalités pour aller au-délà des usages OGC. Python, pour être accessible à tous.
    - Là aussi et surtout, on utilise la base TimescaleDB, pour optimiser les temps de réponses de la dataviz et la tenue en charge de la base au fil du temps.
- une dataviz **_dans Apache Superset_** propose des graphiques affichant : nombre de requêtes par couches carto, par organisation, par utilisateur ;o). J'exagère un peu, il y en a un peu plus. Et surtout, vous pourrez facilement rajouter vos propres graphiques, les partager avec la communauté, etc. Je rappelle que l'intégration d'Apache Superset dans geOrchestra a été réalisée au premier semestre 2025 et [présentée](https://www.georchestra.org/public/geocom2025/presentations/jour_2_matin/01_JP_NR_Superset_de_la_dataviz_dans_geOrchestra.pdf) au [geOcom 2025](https://www.georchestra.org/fr/geocom2025/). On utilise donc là aussi une brique "sur étagère", ou presque. Et en fait, libre à vous de faire votre dataviz sur un autre outil si vous ne voulez pas Superset. 

La notion clef ici, c'est donc la **_flexibilité_** de la solution. Nous avons aussi fait le choix de reposer autant que possible sur des standards et outils existants, dans l'esprit du projet geOrchestra, dans l'idée d'interopérabilité, mais aussi dans l'idée de limiter les coûts de maintenance logicielle dans le temps.

La contrepartie de ce choix, c'est que pour que toutes ces briques fonctionnent entre elles de la façon attendue, on doit méticuleusement les assembler et les configurer. [Le repo du nouveau module analytics](https://github.com/georchestra/analytics) et [la documentation](https://docs.georchestra.org/analytics/en/latest/) assortie vous fourniront des valeurs standard, mais, chaque plateforme ayant ses spécificités, il faudra sans doute vérifier chaque étape dans la mise en place et la configuration.

J'ai beaucoup travaillé sur la documentation, que j'espère suffisamment eshaustive, mais il faudra la lire attentivement.

Nul doute que ce nouveau module sera abondamment discuté et sans doute amendé à l'occasion de [la rencontre d'hiver de la communauté](https://www.georchestra.org/blog/2026/01/08/community-meeting-2026-registration-fr/) dans 2 mois.

Jean, pour le projet geOrchestra

![Workflow of the analytics module](/public/analytics2026/global-workflow.png)




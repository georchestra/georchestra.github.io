---
layout: post
title: "Code Sprint au Ti Lab"
date: 2023-02-14 12:00:00
lang: fr
uid: 2023-02-14
---

Les 7, 8 et 9 Février s'est tenu le meeting des contributeurs geOrchestra au [Ti Lab](https://www.bretagne.bzh/actualites/ti-lab-laboratoire-regional-dinnovation-publique/), à Rennes. Les sociétés [Camptocamp](https://www.camptocamp.com/fr), [Jdev](https://jdev.fr/) et [pi-Geosolutions](http://www.pi-geosolutions.fr/), les plateformes [CRAIG](https://www.craig.fr/), [Data Grand Est](https://www.datagrandest.fr/portail/fr), [Rennes Métropole](https://public.sig.rennesmetropole.fr/header/), [GéoBretagne](https://geobretagne.fr/), ainsi que les membres du PSC ont travaillé sur des objectifs fixés selon les désirs de chacun. Après que l'ensemble du groupe a proposé les profils utilisateurs qui ont constitué le fil rouge du codesprint, six équipes se sont formées.

<!--more-->

Une équipe a produit une maquette de site pour le projet, afin de refléter ce qu'apporte geOrchestra à chaque profil.

Une équipe a proposé une [nouvelle page d'accueil](https://github.com/georchestra/homepage) pour mieux aiguiller les utilisateurs. Cette page sera entièrement personnalisable pour chaque plateforme.
Le [bandeau geOrchestra](https://github.com/georchestra/header) amorce une refonte, sur la base de "[web components](https://developer.mozilla.org/fr/docs/Web/Web_Components)".

Une équipe a construit une [plateforme geOrchestra de démonstration](https://demo.georchestra.org/), déployée de façon automatique, qui reflétera toujours les dernières évolutions du projet. Cette instance référence toutes les données de toutes les plateformes geOrchestra connues. Elle publie aussi à titre de démonstration les données de la BDTopo IGN sur la France entière, en services web OGC.

Une équipe a proposé une nouvelle structuration de la [documentation utilisateurs, administrateurs et developpeurs](https://docs.georchestra.org/), ainsi que les outils pour la maintenir. La documentation de deux produits geOrchestra (plugin cadastre et [plugin urbanisme](https://georchestra-mapstore2-urbanisme.readthedocs.io/fr/latest/)) ont quasiment migré vers le nouveau modèle de documentation. Une page d'accueil pour naviguer dans la documentation a été créée.

Une équipe a affiné le déploiement de [geOrchestra sur Kubernetes](https://github.com/georchestra/helm-georchestra), fournissant ainsi les recettes pour administrer de grosses plateformes. La [recette de déploiement par Ansible](https://github.com/georchestra/ansible) a été aussi améliorée pour déployer plus facilement une instance complète. L'auto-hébergement de geOrchestra est ainsi grandement amélioré pour tous ceux qui souhaitent une maîtrise complète de leur plateforme.

Les participants sont unanimes sur l'intérêt d'un tel code sprint, dont la productivité a été excellente (plus de 50 contributions recensées sur le [projet dédié](https://github.com/orgs/georchestra/projects/11)) !

Du support utilisateur aux administrateurs systèmes, la variété des participants a été appréciée par chacun et elle a montré que, si les problèmes traités sont différents, ils sont interdépendants et contribuent aux mêmes objectifs.

Le PSC remercie tous les participants, leur enthousiasme et volonté de progresser ensemble et dans l'esprit du logiciel libre ! Et le [Ti Lab](https://www.bretagne.bzh/actualites/ti-lab-laboratoire-regional-dinnovation-publique/) pour son accueil et son atmosphère inspirante.

Le PSC geOrchestra

---
layout: post
title:  "Compte-rendu du geOcom 2014"
date:   2014-07-03 18:49:13
categories: geocom
lang: fr
uid: 2014-07-03
---

Este GeoCOM 2014 se celebró en excelentes condiciones en Clermont Ferrand, reunió a los directores presentes o futuras plataformas: PIGMA, CRAIG, CIGAL, GéoBretagne, GeoSAS, INRA de Nancy, la aglomeración de Puy en Velay Moulins, Vienne, Clermont Ferrand, Rennes, Universidad de Clermont; desarrolladores Camptocamp; y los miembros del PSC geOrchestra.

Objetivos: conocer y compartir, construir sobre las buenas prácticas, construir juntos la hoja de ruta. 10 temas votados han sido tratados con para cada uno: un escenario, un tiempo de intercambio y la recolección de las aspiraciones de evolución del proyecto.

Desgraciadamente, la webconferencia no funcionó y los sentimos mucho por l@s que querian seguir los debates a distancia   

¡Gracias a todos los participantes y panelistas por venir, su compromiso y sus contribuciones, hasta el año que viene!

<!--more-->

Restitución de temas tratados: encuentre las presentaciones en la página [page de l'événement](http://www.craig.fr/reunions/1229-georchestra-community-meeting), puesta en línea por el CRAIG. 

## Los Visualizadores

Se trata de los casos de reutilización mas visibles, son un elmento clave para valorizar la IDE y los datos.  
La série s/mviewer es presentada. Los usuarios comparten un gran necesidad de *simplicidad* para proponer a un tipo de usuario determinado exactamente lo que necesita, sin importar una multiplicación de los vizualizadores conectados a una IDE. Pero también se comparte un deseo de interoperabilidad para poder pasar de un visulizador al otro sin perder el contexto, y así cubrir toda una gama de usos sin duplicar la información. En todos los casos se mantiene el enlace hacia el dato y el metadato. 

Tendances : "gros doigts"/"fisher price", contextes, pas de "mode", personnalisation couleur/logo/layout


## Le fond OpenStreetMap mutualisé

Aujourd'hui, Picardie et Bretagne proposent sept fonds de plan OSM France entière selon WMS & co au moins en projections 2154 et 3857. La charge est lourde à porter pour ces plateformes régionales, le trafic France entière est important (livré de base avec certains clients). Nous souhaitons donc trouver un hébergement et une administration communs pour délivrer ce service à plusieurs.

Pour produire des cartes seules, la base pèse 20 Go. Pour servir aussi des données attributaires il faut 200 Go - geOrchestra peut servir ces données en flux sans problème. Le stockage en base doit être extrêmement performant. L'expiration des tuiles doit être outillée. Il faut s'attendre à des pointes de 1000 t/s, 200 mbps.

Le CRAIG pourrait libérer un hébergement, et le savoir-faire Bretagne + Picardie est à disposition.

=> tendances : hébergement unique, imposm3, SSD, administration à plusieurs, cahier des charges commun pour les styles.


## Une IDS "INSPIRE compliant"

Après un exposé des devoirs d'une IDS face à INSPIRE, on échange sur le ressenti de chaque plateforme. Les metadata party, c'est bien; mais l'effet est court et la relance doit être permanente.  
Les produits d'appel comme s/mviewer sont incitatifs.

L'évolution vers GeoNetwork3 est déjà programmée pour geOrchestra, on espère une nette amélioration de l'ergonomie pour l'administrateur.

La géopublication est très utilisée par certains mais les services REST GeoServer mériteraient un approfondissement (directory of shapefiles, metadatas...) pour une meilleure intégration et délégation.

La communauté ressent également le besoin d'outils qualité neutres et plus ergonomiques que les validateurs officiels.

Pour le téléchargement, les avis divergent sur l'intérêt de proposer en sus le téléchargement dit "simple" par atom.

=> tendances : assurance qualité, capitalisation des pratiques, veille sur les groupes de travail.


## Sécurité des données

Le module optionnel GeoFence permet un contrôle extrêmement fin pouvant aller jusqu'à limiter l'accès à certains objets, attributs, périmètres géographiques, au prix d'une multiplication importante du nombre de règles. Le module peut contrôler un nuage d'instances de GeoServer. Dans la communauté, certains sont concernés par un contrôle fin, d'autres non. On mentionne aussi la possibilité de limiter l'usage de données non personnelles par les conditions d'utilisation, sans implémenter de filtrage d'accès.

=> tendances : améliorer l'ergonomie de GeoFence, conserver ce module optionnel.


## Performance

Une méthode à effets (et coûts) croissants est exposée : supervision, limites de sécurité, optimisation http/images/styles/données, tuilage, navigateurs récents, scalabilité verticale/horizontale de l'hébergement. Pour la continuité de service, la répartition de charge GeoServer et la relance automatique donnent de très bons résultats et réduisent beaucoup la charge d'administration.

Les lectures toujours indispensables :
* GeoServer in production http://docs.geoserver.org/stable/en/user/production/index.html
* GeoServer on steroid http://blog.geoserver.org/2013/10/02/geoserver-foss4g-2013/
* GeoServer in production http://boundlessgeo.com/whitepaper/geoserver-production-2/

=> tendances : ajout d'une [offre Nagios](https://github.com/georchestra/nagios) à geOrchestra, partager les test cases.


## WPS


Illustration très parlante et de saison (Silo vs geOrchestra FC) sur la nécessité d'associer plusieurs services OGC pour fabriquer et exposer des traitements comme le calcul dynamique de bassins versants à partir d'un semis de points issus d'une donnée elle-même exposée.

Après les WPS, il faut s'intéresser à des services plus spécialisés comme SOS et TJS. Et surtout ne pas négliger les rasters de données, fortement méconnus et sous exploités.

=> tendances : SOS, TJS, exploiter les rasters.



## Mutualisation des formations

Après la présentation d'une maquette de site qui serait le réceptacle commun des ressources autour de geOrchestra, les participants échangent sur le capital à mettre en commun car l'accompagnement est jugé par tous indispensable. Il faudrait, dans les ressources produites par chacun, atteindre une granularité adaptée pour permettre la réutilisation de fragments.

=> tendances : site commun, le PSC reçoit et partage, licence ouverte sur les ressources.


## Relations geOrchestra/OSM/HOT

Après présentation du projet HOT qui ouvre sur un contexte bien plus large que nos plateformes locales, on comprend l'intérêt que peut représenter une IDS sachant faire le pont (bidirectionnel ?) entre les données OSM et les SIG. Ce pont serait également utile pour mieux échanger avec les communautés 'non SIG'.

=> tendances : support OSM bidirectionnel, internationalisation.


## Code Sprint du samedi

En fait de code sprint, le PSC a plutôt analysé et factorisé les tendances développées au cours du geoCom pour façonner la feuille de route stratégique de geOrchestra :

### Simplicité

Maintenant que les services lourds sont opérationnels il faut les rendre accessibles. Pour adresser chaque cible il faut des outils très simples, personnalisables, tout en mutualisant l'effort de conception et de développement.

Les pistes explorées par s/mviewer ont montré de bons très résultats : adoption immédiate, lien conservé avec les outils experts, ciblage, connexion sociale. Leur conception n'est pas pérenne mais ils sont déjà compatibles, disponibles et leur évolution peut être concertée.

Les principes développés par ces outils devront alimenter la refonte long terme du visualiseur avancé.


### Extension de la communauté

La question de savoir si geOrchestra doit investir pour être davantage réutilisé, ou au contraire doit se concentrer sur quelques "grosses" plateformes, a été tranchée en faveur d'une extension.

Le gros travail de factorisation a été assumé par les plateformes régionales. Nous pouvons maintenant viser une plus grande généricité des distributions.

L'extension de la communauté va cependant générer une plus grande charge d'accompagnement à compenser en amont par la capitalisation des bonnes pratiques.


### Liens avec d'autres communautés

Il s'agit d'étendre l'audience de primo-utilisateurs des services vers d'autres communautés, professionnelles ou non. Pour cela il faut des applicatifs ou des connexions spécialisées : applicatifs métiers, OpenStreetMap, raster, TJS...

Ces extensions ne sont pas forcément dans geOrchestra (notion de "contrib"), mais elles sont suffisamment concertées pour être compatibles et réutilisables.


### Efficacité et qualité

INSPIRE est atteint "manuellement", ce qui consomme du temps. Une fois l'IDS opérationnelle, il est souhaitable de miser sur des outils de vérification qualité et d'autocorrection. Ces outils permettront de prendre le contrôle du stock de données et métadonnées. Le bénéfice sera ressenti par les administrateurs (gain de temps, adaptation) comme par les utilisateurs (meilleure uniformité et réponse à leurs souhaits).

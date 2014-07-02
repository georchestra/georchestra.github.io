---
layout: post
title: "geOrchestra version 13.09"
date: 2013-10-02 10:13:13
lang: fr
uid: 2013-10-02
---

<p>Le comité de pilotage geOrchestra est heureux de vous annoncer la sortie de
geOrchestra 13.09. Cette sixième version millésimée apporte de nombreuses
nouveautés, améliorations et corrections. La version 13.09 geOrchestra est en
démonstration sur <a href="http://sdi.georchestra.org/mapfishapp/?lang=fr" hreflang="fr">http://sdi.georchestra.org/</a>.</p>

<!--more-->

<p>Cette version majeure a été supportée par les projets GeoPicardie, PIGMA,
CIGALsace, GeoBretagne et CRAIG. Merci également à tous les contributeurs,
testeurs, traducteurs de la communauté geOrchestra. A noter que la communauté
ne travaille pas que sur le noyau logiciel : propositions d'addons,
entraide sur les listes, événement GeoCom et enseignement font partie du
paysage.</p>
<p><a href="/public/screenshots/13.09/georchestra_commits.png"><img src="/public/screenshots/13.09/.georchestra_commits_m.jpg" alt="georchestra_commits.png" style="display:block; margin:0 auto;" title="georchestra_commits.png, oct. 2013" /></a></p>
<p>geOrchestra maintient sont objectif de suivre de près les versions stables
de GeoServer, GeoNetwork, OpenLayers. Ces projets connaissent un coup
d'accélération remarquable, rendant la tâche hardue, mais cela ouvre des
horizons intéressants : W3DS, CSS styling, WPS ...</p>
<h2>Côté utilisateur</h2>
<p>Les utilisateurs qui aiment dessiner sur leurs cartes apprécieront le
nouveau module d'annotation : il permet de tracer des formes géométriques,
de placer des étiquettes, et d'en modifier le style. Pour finir, ces
informations peuvent être exportées en KML.</p>
<p>Avec cette nouvelle version, les utilisateurs pourront également superposer
directement des fichiers Shapefile, MIF/MID, GML ou KML, voire TAB et GPX,
chargés depuis leur navigateur.</p>
<p>Le module d'impression sait consommer l'ensemble de ces couches et produit
désormais un fichier PDF plus conforme à ce qui est visible à l'écran.</p>
<p><a href="/public/screenshots/13.09/viewer_annotation.png"><img src="/public/screenshots/13.09/.viewer_annotation_m.jpg" alt="viewer_annotation.png" style="display:block; margin:0 auto;" title="viewer_annotation.png, oct. 2013" /></a></p>
<p>Pour apprivoiser les catalogues volumineux, l'explorateur de données du
visualiseur est équipée d'un petit analyseur de syntaxe :
<em>@producteur</em> va rechercher les données chez un producteur,
<em>#motclef</em> sélectionne les données liées à un mot-clef,
<em>-exclure</em> filtre les fiches comprenant le mot &quot;exclure&quot;... Cette
syntaxe est facile à apprivoiser et la pertinence des résultats s'en trouve
grandement améliorée.</p>
<p>Pour faciliter l'échange de cartes, les fichiers de contextes (Web Map
Contexts ou OWS Context) peuvent être lus même s'ils ont été sauvegardés dans
une projection différente, et la durée de validité des permaliens est
affichée.</p>
<p>Les remarques de la communauté ont permis d'améliorer l'ergonomie.
Exemple : le bouton &quot;appliquer&quot; sur l'éditeur de styles (SLD) en fait un
vrai outil interactif : on peut tester visuellement le résultat sans
quitter l'interface de contrôle.</p>
<p><a href="/public/screenshots/13.09/viewer_styler.png"><img src="/public/screenshots/13.09/.viewer_styler_m.jpg" alt="viewer_styler.png" style="display:block; margin:0 auto;" title="viewer_styler.png, oct. 2013" /></a></p>
<h2>Côté administrateur</h2>
<p>Le nouveau module <em>ldapadmin</em> permet, côté frontend,
l'auto-enregistrement des utilisateurs (éventuellement avec modération) et la
récupération de mot de passe. Côté backend, le module offre une interface
complète de gestion des utilisateurs et des groupes dans le navigateur. Un
profil d'administrateur de structure déconcentre l'inscription des utilisateurs
pour une structure donnée, et donc la délivrance des droits sur les outils et
les données.</p>
<p>GeoNetwork a reçu beaucoup de correctifs pour stabiliser l'importante
évolution de la version précédente.</p>
<h2>Côté normes et interopérabilité</h2>
<p>Tant côté client que serveur, WMS 1.3.0, WFS 2.0 et CSW 2.0.2 deviennent la
norme, avec toujours la possibilité d'exploiter WMS 1.1.1 et WFS 1.0 pour les
services qui ne sont pas compatibles avec des versions plus élevées.</p>
<p>Le standard WMTS a fait son apparition dans le visualiseur et le module
d'impression, ce qui offre notamment la possibilité d'accélérer le rendu des
cartes, mais également d'accéder aux couches du GeoPortail IGN.</p>
<p>L'extraction de données permet désormais la récupération des métadonnées
liées dans l'archive à télécharger. De plus les extractions vers KML,
TIF+TFW/TAB ont été ajoutées. L'authentification depuis les clients lourds a
été améliorée.</p>
<p><a href="/public/screenshots/13.09/viewer_layers.png"><img src="/public/screenshots/13.09/.viewer_layers_m.jpg" alt="viewer_layers.png" style="display:block; margin:0 auto;" title="viewer_layers.png, oct. 2013" /></a></p>
<h2>Côté réutilisation</h2>
<p>L'effort de traduction se poursuit : tous les développements autour de
geOrchestra doivent permettre l'internationalisation. Des non-développeurs ont
apporté leur contribution (cf traduction en Russe du visualiseur), qu'ils en
soient ici remerciés !</p>
<p><a href="/public/screenshots/13.09/viewer_en.png"><img src="/public/screenshots/13.09/.viewer_en_s.jpg" alt="Viewer, EN translation" style="display:block; margin:0 auto;" title="Viewer, EN translation, oct. 2013" /></a> <a href="/public/screenshots/13.09/viewer_fr.png"><img src="/public/screenshots/13.09/.viewer_fr_s.jpg" alt="Viewer, FR translation" style="display:block; margin:0 auto;" title="Viewer, FR translation, oct. 2013" /></a> <a href="/public/screenshots/13.09/viewer_es.png"><img src="/public/screenshots/13.09/.viewer_es_s.jpg" alt="Viewer, ES translation" style="display:block; margin:0 auto;" title="Viewer, ES translation, oct. 2013" /></a> <a href="/public/screenshots/13.09/viewer_ru.png"><img src="/public/screenshots/13.09/.viewer_ru_s.jpg" alt="Viewer, RU translation" style="display:block; margin:0 auto;" title="Viewer, RU translation, oct. 2013" /></a></p>
<p>Enfin, des variables globales supplémentaires, telles que le nom de
plateforme ou le mail de l'administrateur, permettent de centraliser davantage
la configuration tout en conservant des modules séparés.</p>
<p>Consultez les <a href="https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md" hreflang="en">notes de version</a> pour avoir connaissance de l'ensemble des
évolutions et les instructions de mise à jour.</p>
<h2>Côté communauté</h2>
<p>Comme toujours, <a href="https://github.com/georchestra/" hreflang="en">le
code source est en accès libre</a> ainsi que le bugtracker et toutes les
branches des contributeurs. Le code hors dépendances externes est <a href="http://www.ohloh.net/p/georchestra" hreflang="en">analysé périodiquement par
Ohloh</a> . La communauté est en bonne santé !</p>
<p><a href="/public/screenshots/13.09/georchestra_ohloh.png"><img src="/public/screenshots/13.09/georchestra_ohloh.png" alt="geOrchestra on Ohloh" style="display:block; margin:0 auto;" title="geOrchestra on Ohloh, oct. 2013" /></a></p>

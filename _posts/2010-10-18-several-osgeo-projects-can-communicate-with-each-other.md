---
layout: post
title: "Several OSGeo projects can communicate with each other..."
date: 2010-10-18 21:32:13
lang: fr
uid: 2010-10-18
---

<div class="post-content">

<p>A la question &quot;geOrchestra, c'est quoi&quot;, il est souvent difficile de donner
une réponse concise. Répondre &quot;une infrastructure de données spatiale&quot;
n'apporte rien de très concret.</p>
<p>Un article wikipedia sur l'<a href="http://en.wikipedia.org/wiki/Open_Source_Geospatial_Foundation" hreflang="en">Open Source Geospatial Foundation</a> présente un <a href="http://upload.wikimedia.org/wikipedia/commons/0/09/GeoServer_GeoNetwork_with_web_app.svg" hreflang="en">croquis</a> fort intéressant. On y retrouve GeoServer,
GeoNetwork, OpenLayers... dialoguant en bidirectionnel grâce aux normes OGC. La
légende : <q>Several OSGeo projects can communicate with each other</q>,
plusieurs projets OSGeo peuvent communiquer entre eux.</p>
<p><a href="http://en.wikipedia.org/wiki/File:GeoServer_GeoNetwork_with_web_app.svg" hreflang="en"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/GeoServer_GeoNetwork_with_web_app.svg/349px-GeoServer_GeoNetwork_with_web_app.svg.png" alt="" /></a> <em>This file is licensed under the Creative Commons
Attribution-Share Alike 3.0 Unported, 2.5 Generic, 2.0 Generic and 1.0 Generic
license.</em></p>
<p>Ce schéma résume parfaitement l'approche engagée par les IDS comme <a href="http://www.easysdi.org/" hreflang="fr">EasySDI</a> ou geOrchestra: l'essentiel
est de contribuer aux briques fondamentales, de les valoriser et de
démultiplier leurs possibilités en les intégrant entre elles sans les dévoyer.
geOrchestra se positionne très favorablement sur ce schéma :</p>
<ul>
<li>intégrer GeoServer, GeoNetwork, OpenLayers (ça c'est fait !)</li>
<li>délivrer des formats comme GeoRSS, KML pour s'interfacer avec Google Earth,
WorldWind (réalisé par GeoServer)</li>
<li>proposer une interface transactionnelle par WFS (réalisé par
GeoServer)</li>
<li>ajouter une strate d'optimisation par cache qui absorbe une partie de la
charge (réalisé par GeoWebCache)</li>
<li>ajouter des datastores majeurs comme OpenStreetMap (fait !)</li>
<li>enfin, faciliter la fabrication d'<a href="http://fr.wikipedia.org/wiki/Application_composite" hreflang="fr">applications
composites</a> sans a-priori technologique pour desservir des besoins pointus à
faible coûts. L'API mapfishapp est un bon début...</li>
</ul>

</div>

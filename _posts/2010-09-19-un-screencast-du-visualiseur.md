---
layout: post
title:  "Vidéo du visualiseur"
date:   2010-09-19 12:20:13
lang: fr
uid: 2010-09-19
---

<p>Cette vidéo présente le visualiseur mapfishapp et l'utilisation des styleur et requêteur.</p>

<!--more-->

<p>Les étapes suivies dans cette démo et les dessous techniques :</p>
<ul>
<li><strong>00:10 - déplacements et recentrage de la carte</strong></li>
</ul>
<blockquote>
<p>les tuiles constituant chaque couche sont fabriquées par des services WMS et
affichées par mapfishapp. Le chargement par tuile permet de travailler avec une
grande surface d'affichage, et soulage le travail du serveur lorsque les fonds
sont prétuilés - c'est le cas ici pour les photographies aériennes. Le service
en ligne <a href="http://www.geonames.org/">geonames</a> est utilisé pour
recentrer la carte sur un toponyme. <a href="http://www.geonames.org/">geonames</a> est une base de données en ligne
librement accessible et contenant plus de 7 millions de toponymes sur le monde
entier.</p>
</blockquote>
<ul>
<li><strong>00:25 - sélection des couches raster</strong></li>
</ul>
<blockquote>
<p>mapfishapp peut ajouter des couches provenant de services WMS dont on
connaît l'adresse, ou de couches WMS référencées dans un catalogue de données
interrogeable par le protocole CSW. L'utilisateur peut régler l'opacité de
chaque couche. L'ensemble peut ensuite être sauvegardé dans un fichier au
format Web Map Context, et être rechargé ultérieurement.</p>
</blockquote>
<ul>
<li><strong>00:36 - fabrication d'un style personnalisé</strong></li>
</ul>
<blockquote>
<p>la couche est interrogée par WFS:describeFeatureType pour en récupérer les
attributs. Un document SLD est ensuite fabriqué puis stocké sur le serveur
mapfishapp. Lorsque la couche est réclamée au serveur WMS, celui-ci télécharge
d'abord le document SLD puis fabrique une carte personnalisée en fonction des
filtres et styles.</p>
</blockquote>
<ul>
<li><strong>02:44 - sélection géographique</strong></li>
</ul>
<blockquote>
<p>le requêteur fabrique des requêtes WFS géométriques et/ou attributaires. Il
reçoit un flux GML qui est ensuite affiché en vecteur sur la carte et en
valeurs dans un tableau. Il est possible de sélectionner des objets sur la
carte, ils sont alors surlignés dans le tableau, et vice-versa.</p>
</blockquote>
<p>Les commentaires sont ouverts !</p>

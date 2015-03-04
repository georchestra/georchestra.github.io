---
layout: post
title: "geOrchestra fait le plein d'OpenStreetMap"
date: 2010-10-01 20:11:13
lang: fr
uid: 2010-10-01-b
---

<p><img src="/public/icons/osm_logo.png" alt="openstreetmap" style="width:70px;float:left; margin: 0 1em 1em 0;" title="openstreetmap, sept. 2010" /> On ne
présente plus <a href="http://www.openstreetmap.fr/">OpenStreetMap</a>, le
projet de données libres qui rivalise avec les fournisseurs de données
propriétaires. La suite d'outils OpenStreetMap utilisant <a href="http://www.postgis.fr/">postGIS</a>, ses données sont donc naturellement
exposées aux services OGC et IDS comme geOrchestra.</p>

<!--more-->

<p>Le souhait de livrer les composants geOrchestra accompagnés de données
abondantes, libres et prêtes à l'emploi pourrait voir le jour. Grâce à <a href="http://code.google.com/p/mapserver-utils/">mapserver-utils</a> de Thomas
Bonfort et aux contributions de Pierre Mauduit, il est possible de fabriquer
des rendus de haute qualité, exposés en WMS ou WFS, et dans les projections
utilisées par les SIG.</p>
<p><a href="http://code.google.com/p/mapserver-utils/">mapserver-utils</a> a
décortiqué la sémiologie des cartes OpenStreetMap pour en ensuite construire
une suite de styles mapserver. <a href="http://blog.geoserver.org/2009/01/30/geoserver-and-openstreetmap/">Des
initiatives similaires</a> existent dans le monde geoserver.</p>
<h3>170 classes</h3>
<p>Pierre Mauduit a réutilisé ce travail pour produire trois styles visibles
sur qualitystreetmap.org : <a href="http://maps.qualitystreetmap.org/?zoom=12&amp;lat=6066711.44625&amp;lon=-373896.02136&amp;layers=B00F00">
osm</a>, <a href="http://maps.qualitystreetmap.org/?zoom=12&amp;lat=6066711.44625&amp;lon=-373896.02136&amp;layers=0B0F00">
google</a> et <a href="http://maps.qualitystreetmap.org/?zoom=12&amp;lat=6066711.44625&amp;lon=-373896.02136&amp;layers=00BF00">
bing</a>. Ils offrent un rendu agréable et homogène à toutes les échelles grâce
à plus de 170 classes décrites.</p>
<p><a href="/public/screenshots/style_osm.png"><img src="/public/screenshots/style_osm.png" alt="osm style osm" title="osm style osm, sept. 2010" /></a> <a href="/public/screenshots/style_bing.png"><img src="/public/screenshots/style_bing.png" alt="osm style bing" title="osm style bing, sept. 2010" /></a> <a href="/public/screenshots/style_google.png"><img src="/public/screenshots/style_google.png" alt="osm style google" title="osm style google, sept. 2010" /></a></p>
<h3>Intégration dans geOrchestra</h3>
<p>Les données &quot;france&quot; d'OpenStreetMap comptent 11,2 millions d'objets. La
problématique est de conserver un niveau de performance acceptable tout en ne
compromettant pas l'interopérabilité de la solution.</p>
<ul>
<li>import initial des données : téléchargement sur <a href="http://download.geofabrik.de/osm/europe/">geofabrik</a> au format osm.bz2.
Bien noter la référence temporelle du lot téléchargé, cette information sera
utilisée pour mettre en oeuvre les mises à jour périodiques. Chargement dans la
base postGIS avec <a href="http://wiki.openstreetmap.org/wiki/Osm2pgsql">osm2pgsql</a> compilé depuis les
sources (le paquet lenny est obsolète).</li>
</ul>
<ul>
<li>optimisation de la base en fonction des classes : on crée un index sur
les attributs utilisés pour la classification.</li>
</ul>
<ul>
<li>publication en WMS. On utilise la bibliothèque <a href="http://www.antigrain.com/">AGG</a> et <a href="http://mapserver.org/mapfile/outputformat.html">mapserver compilé avec
l'option --with-experimental-png</a> qui divise la taille des tuiles par 2 ou 3
grâce à l'optimisation (invisible) de la palette.</li>
</ul>
<ul>
<li>tuilage avec <a href="http://geowebcache.org/">geowebcache</a>. Le test
portant sur la projection EPSG:2154, on choisit d'utiliser pour grille de
tuilage l'emprise maximale proposée par cette projection et on prend les seuils
de zoom (&lt;scaleDenominators&gt; en terminologie geowebcache). Voici la
grille utilisée :</li>
</ul>
<pre>
    &lt;!-- france lambert 93 --&gt;
    &lt;gridSet&gt;
      &lt;name&gt;EPSG:2154&lt;/name&gt;
      &lt;srs&gt;
        &lt;number&gt;2154&lt;/number&gt;
      &lt;/srs&gt;
      &lt;extent&gt;
        &lt;coords&gt;
          &lt;double&gt;-357823.2365&lt;/double&gt;
          &lt;double&gt;6037008.6939&lt;/double&gt;
          &lt;double&gt;1313632.3628&lt;/double&gt;
          &lt;double&gt;7230727.3772&lt;/double&gt;
        &lt;/coords&gt;
      &lt;/extent&gt;
      &lt;alignTopLeft&gt;false&lt;/alignTopLeft&gt;
      &lt;scaleDenominators&gt;
        &lt;double&gt;559082263.928571464&lt;/double&gt;
        &lt;double&gt;279541131.964285732&lt;/double&gt;
        &lt;double&gt;139770565.982142864&lt;/double&gt;
        &lt;double&gt;69885282.991071432&lt;/double&gt;
        &lt;double&gt;34942641.495535716&lt;/double&gt;
        &lt;double&gt;17471320.747767858&lt;/double&gt;
        &lt;double&gt;8735660.373883929&lt;/double&gt;
        &lt;double&gt;4367830.186941965&lt;/double&gt;
        &lt;double&gt;2183915.093470982&lt;/double&gt;
        &lt;double&gt;1091957.546735491&lt;/double&gt;
        &lt;double&gt;545978.773367746&lt;/double&gt;
        &lt;double&gt;272989.386683873&lt;/double&gt;
        &lt;double&gt;136494.693341936&lt;/double&gt;
        &lt;double&gt;68247.346670968&lt;/double&gt;
        &lt;double&gt;34123.673335484&lt;/double&gt;
        &lt;double&gt;17061.836667742&lt;/double&gt;
        &lt;double&gt;8530.918333871&lt;/double&gt;
        &lt;double&gt;4265.459166936&lt;/double&gt;
   &lt;!-- &lt;double&gt;2132.729583468&lt;/double&gt; --&gt;
   &lt;!-- &lt;double&gt;1066.364791734&lt;/double&gt; --&gt;
      &lt;/scaleDenominators&gt;
      &lt;metersPerUnit&gt;1&lt;/metersPerUnit&gt;
      &lt;tileHeight&gt;256&lt;/tileHeight&gt;
      &lt;tileWidth&gt;256&lt;/tileWidth&gt;
    &lt;/gridSet&gt;
</pre>
<ul>
<li>paramétrage des expires : on se contente d'envoyer au client un délai
d'expiration de plusieurs jours. Geowebcache permettrait de régler ce délai
pour chaque seuil de zoom.</li>
</ul>
<h3>Le résultat</h3>
<p>La vidéo suivante illustre (imparfaitement) le rendu d'openstreetmap à
toutes les échelles.</p>
<div style="text-align: center;"><object type="application/x-shockwave-flash" data="http://blog.georchestra.org/?pf=player_flv.swf" width="400" height="280"><param name="movie" value="http://blog.georchestra.org/?pf=player_flv.swf" />
<param name="wmode" value="transparent" />
<param name="allowFullScreen" value="true" />
<param name="FlashVars" value="title=test%20OpenStreetMap&amp;margin=1&amp;showvolume=1&amp;showtime=1&amp;showfullscreen=1&amp;buttonovercolor=ff9900&amp;slidercolor1=cccccc&amp;slidercolor2=999999&amp;sliderovercolor=0066cc&amp;flv=http://blog.georchestra.org/public/screencasts/test-osm.flv&amp;width=400&amp;height=300" /></object></div>
<p>Avec le processus de téléchargement, de mise à jour et de rendu des données,
OpenStreetMap, <strong>geOrchestra se dote d'un référentiel cartographique
libre, performant, prêt à l'emploi dans les projections utilisées par les
SIG.</strong> En attendant de découvrir toutes les possibilités offertes par
cet apport, on ne peut que remercier la communauté des <em>mappers</em> et les
contributeurs qui ont aidé au montage. <a href="http://geobretagne.fr/mapfishapp">GeoBretagne bénéficie déjà du fond
OpenStreetMap</a>.</p>

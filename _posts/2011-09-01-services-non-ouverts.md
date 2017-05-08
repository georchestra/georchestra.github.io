---
layout: post
title: "Investir ou pas sur les API/services non ouvertes"
date: 2011-09-01 20:13:13
lang: fr
uid: 2011-09-01-20-13
---

<p>Dans quelques jours, l'API Yahoo sera fermée. Yahoo recommande à ses utilisateurs de se
tourner vers celle de
Nokia. Et dans un ticket d'OpenLayers (#3481) on trouve :</p>
<p><q>Finally, the GoogleNG layer violates the overall intent of the terms of
service that to use the tiles, you've got to use the whole map interface. The
whole point is that you can't use the tiles directly.</q>. Traduction:
Finalement, la couche google viole l'esprit des conditions d'utilisation pour l'utilisation des tuiles, vous devez
utiliser l'interface google
maps complète. Le fait est que vous ne pouvez utiliser les tuiles
directement.</p>

<!--more-->

<p>La consommation directe des tuiles google par OpenLayers, une voie
pressentie pour le support gmaps dans geOrchestra sans embarquer toute l'API
Google, n'est donc plus possible. Dans les conditions d'utilisation de google
maps, on lit en effet :</p>
<p><q>(a) No Access to Maps API(s) except through the Service. You must not
access or use the Maps API(s) or any Content through any technology or means
other than those provided in the Service, or through other explicitly
authorized means Google may designate. For example, you must not access map
tiles or imagery through interfaces or channels (including undocumented Google
interfaces) other than the Maps API(s).</q></p>
<p>Le ticket
1590 prévoit que geOrchestra utilise les fonds google ou autres car ce
besoin a été plusieurs fois exprimé : google couvre la terre entière, donc
des périmètres d'étude bien éloignés de la zone INSPIRE... Mais ces
évolutions|abandons|subtilités de licence posent question.</p>
<p>Il apparaît risqué d'investir sur des API dépendantes d'une décision du
fournisseur, cf <q>Google may, at any time, terminate its legal agreement with
you or cease providing all or any part of the Service immediately without any
notice if:...(d) providing the Service could
create a substantial economic burden as determined by Google in its reasonable
good faith judgment</q>. Une lecture critique des conditions d'utilisation
s'avère dans tous les cas indispensable avant d'engager les développements.</p>
<p>En investissant principalement sur les normes OGC, on se met à l'abri de ces
risques.</p>

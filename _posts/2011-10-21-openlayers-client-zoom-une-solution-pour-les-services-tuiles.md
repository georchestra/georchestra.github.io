---
layout: post
title: "OpenLayers Client Zoom : une solution pour les services tuilés"
date: 2011-10-21 17:30:13
lang: fr
uid: 2011-10-21
---

<p>Les résolutions fixes proposées par les services tuilés sont un obstacle à
l'interopérabilité. Une solution se profile côté client dans OpenLayers.</p>

<!--more-->

<p>Extrait traduit d'un article Camptocamp (http://www.camptocamp.com/en/blog/2011/10/openlayers-client-zoom-feature/).</p>
<blockquote>
<p>Jusqu'à aujourd'hui, OpenLayers ne permettait pas l'affichage d'une couche
tuilée dans des résolutions non supportées par le service de tuilage de la
couche. Si une carte était chargée à une résolution que le service de tuilage
ne supportait pas, alors des tuiles non existantes étaient réclamées et des
images cassées étaient affichées sur la carte.</p>
<p>A l'occasion dd'un contrat avec Swisstopo, Camptocamp a travaillé à faire
évoluer cette situation pour rendre possible l'affichage de couches tuilées à
des résolutions non supportées par le service de tuilage. La logique est
simple: lorsque la carte est positionnée sur une résolution non supportée par
le service de tuilage, OpenLayers réclame les tuiles de cette couche dans des
résolutions moindres, et redimensionne la div de la couche en utilisant le
facteur d'échelle resolution_moindre/resolution_carte.</p>
<p>Parfaire le patch a été une petite épreuve, mais il a été finalement
fusionné avec la branche développement d'OpenLayers. Un exemple de cette
fonctionnalité est disponible en ligne sur http://elemoine.github.com/openlayers/examples/clientzoom.html : Testez-le !</p>
<p>Merci à Swisstopo pour avoir financé ce travail. Et remerciements spéciaux à
Andreas Hocevar pour son aide et support, et pour le patch “positionnement de
tuile basé sur pourcentages&quot; sur lequel ce travail est fondé.</p>
</blockquote>

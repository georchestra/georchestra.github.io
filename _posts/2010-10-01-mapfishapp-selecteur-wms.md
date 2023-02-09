---
layout: post
title: "Mapfishapp : sélecteur WMS"
date: 2010-10-01 20:00:13
lang: fr
uid: 2010-10-01-a
---

<p>Camptocamp a intégré un nouveau et pratique sélecteur de serveur WMS pour
mapfishapp. Il est composé d'une liste de serveurs, la sélection d'un serveur
déclenche un getCapabilities et liste les couches du serveur. 

<!--more-->

La liste des serveurs provient d'un flux JSON ressemblant à ceci :</p>
~~~ json
{
  servers: [
    {&quot;name&quot;: &quot;GeoLittoral&quot;, &quot;url&quot;: &quot;https://geolittoral.application.equipement.gouv.fr/wms/metropole&quot;},
    {&quot;name&quot;: &quot;GeoBretagne.fr&quot;, &quot;url&quot;: &quot;https://geobretagne.fr/geoserver/wms&quot;}
  ]
}
~~~

<p>Le fichier de conf javascript permet de modifier l'origine de ce flux avec le paramètre <code>GEOR.custom.WMS_LIST_URL</code>. </p>

<p>
Cette fonctionnalité est disponible à partir du build #17.</p>

<p><a href="/public/screenshots/wms-selector.png"><img src="/public/screenshots/wms-selector.png" alt="sélecteur wms" title="sélecteur wms, oct. 2010" /></a></p>

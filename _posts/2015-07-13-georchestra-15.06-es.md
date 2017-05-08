---
layout: post
title:  "geOrchestra 15.06"
date:   2015-07-13 11:00:00
lang: es
uid: 2015-07-13
---

El equipo de geOrchestra tiene el agrado de anunciar la salida de geOrchestra 15.06.

Esta nueva versión brinda varias mejoras clave:

 * soporte completo del nuevo Debian 8 "Jessie", lo que significa una vida útil más larga para tu servidor.
 * se pueden utilizar los artefactos GeoServer estándar, en vez del "GeoServer con sabor a geOrchestra". Permite incorporar las nuevas funcionalidades de GeoServer más rapidamente, pero también facilitará la vida de tu administrador cuando se descubra una vulnerabilidad en GeoServer.
 * pruebasse realizan pruebas de integración a [cada modificación](https://github.com/georchestra/georchestra/blob/15.06/.travis.yml) del código de geOrchestra, gracias al servicio gratis de [travis-ci](https://travis-ci.org/georchestra/georchestra).
 * artefactos más livianos. Logramos reducir el peso entre 20% a 50% excluyendo la documentación, los ejemplos y las pruebas inutiles del archivo WAR. Con eso se reduce el ancho de banda (y el tiempo!) necesario para recuperar los artefactos de nuestra plataforma de integración continua autoalojado.

<img src="/public/posts/2015-07-13/travis.png" alt="Plataforma de integración continua travis-ci" />

<!--more-->

Otras mejoras destacables:

 * mapfishapp: el editor iD es ahora la primera elección para editar la capa de fondo OSM - ver [#992](https://github.com/georchestra/georchestra/issues/992),
 
 <img src="/public/posts/2015-07-13/id.png" alt="Editor iD de OpenStreetMap" />
 
 * mapfishapp: los objetos seleccionados mediante una consulta pueden ser exportados en GML o KML - ver [#995](https://github.com/georchestra/georchestra/pull/995),
 
 <img src="/public/posts/2015-07-13/export.png" alt="Exportación de objetos seleccionados en KML o GML" />
 
 * mapfishapp: se puede configurar mapfishapp para restringir todas las búsquedas de metadatos a un encuadre específico. También al momento de la consulta, se puede restringir la búsqueda de metadatos al nivel de zoom actual del mapa - ver [#964](https://github.com/georchestra/georchestra/pull/964),
 
  <img src="/public/posts/2015-07-13/extent.png" alt="Restricción de la búsqueda de metadatos a un encuadre específico" />
 
 * mapfishapp: se añade la posibilidad de aplicar filtros CQL sobre las capas, para limitar los objetos visibles - ver [#921](https://github.com/georchestra/georchestra/pull/921),
 
 <img src="/public/posts/2015-07-13/cql.png" alt="Filtro CQL sobre las capas" />
 
 * proxy: intercepción limpia de los errores de tipo "connection refused" - ver [#963](https://github.com/georchestra/georchestra/pull/963),

 * documentación: nueva página sobre la configuración SASL para un Active Directory remoto - ver [#958](https://github.com/georchestra/georchestra/pull/958).

La lista completa de mejoras y resoluciones de bugs se puede encontrar en el manejador de issues de GitHub, con el hito [15.06](https://github.com/georchestra/georchestra/issues?q=milestone%3A15.06).

¡Muchas gracias a todas las personas que contribuyeron a esta nueva versión!

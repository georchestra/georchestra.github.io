---
layout: post
title: "geOrchestra 13.09"
date: 2013-10-02 10:13:13
lang: es
uid: 2013-10-02
---

<p>El comite director de geOrchestra tiene el agrado de anunciar la salida de
geOrchestra 13.09. Esta sexta versión brinda numerosas novedades y
correcciones. La versión 13.09 geOrchestra esta en demostración sobre http://sdi.georchestra.org/.</p>

<!--more-->

<p>Esta versión mayor fue sostenida por los proyectos GeoPicardie, PIGMA,
CIGALsace, GeoBretagne y CRAIG. Gracias igualmente a todos l@s contribuidores,
probadores y traductores de la comunidad geOrchestra. Se debe notar que la
comunidad no solo trabaja sobre el núcleo de software: propuestas de addons,
ayuda sobre las listas, evento GeoCom y enseñanza forman parte del paisaje.</p>
<p>geOrchestra mantiene su objetivo de seguir de cerca las versiones estables
de GeoServer, GeoNetwork, OpenLayers. Estos proyectos conocen una acceleración
destacable, aumentando el desafio, pero abriendo horizontes interesantes: W3DS,
CSS styling, WPS...</p>
<h2>Lado usuario</h2>
<p>Los usuarios que gustan dibujar sobre sus mapas disfrutarán el nuevo módulo
de anotación: permite trazar formas geometricas, añadir etiquetas y modificar
el estilo. Cabe resaltar que estas informaciones pueden ser exportadas en
KML.</p>
<p>Con esta nueva versión, los usuarios podrán también superponer directamente
archivos Shapefile, MIF/MID, GML o KML, y hasta TAB y GPX, cargados desde su
navegador.</p>
<p>El módulo de impresión sabe consumir todos los tipos de capas y produce
ahora un archivo PDF más conforme a lo que se ve en la pantalla.</p>
<p>Para familiarizarse con los catálogos voluminosos, el explorador de datos
del visualizador esta dotado de un pequeño analizador de sintaxis:
<em>@productor</em> busca los datos de este productor, <em>#palabraclave</em>
selecciona los datos ligados a esta palabra-clave, <em>-excluir</em> filtra las
fichas que contienen la palabra &quot;excluir&quot;... Esta sintaxis es fácil de aprender
y la pertinencia de los resultados se encuentra altamente mejorada.</p>
<p>Para facilitar el intercambio de mapas, los archivos de contextos (Web Map
Contexts y OWS Context) pueden ser leidos aún si han sido guardados en una
proyección diferente, y la duración de validez de los permalinks esta
escrita.</p>
<p>Las observaciones de la comunidad han permitido mejorar la ergonomía. Por
ejemplo, el botón &quot;aplicar&quot; sobre el editor de estilos (SLD) lo vuelve en una
verdadera herramienta interactiva: podemos probar visualmente el resultado sin
salir de la interfaz de control.</p>
<h2>Lado administrador</h2>
<p>El nuevo módulo ldapadmin permite, del lado frontend, el auto-registro de
usuarios (eventualmente con moderación) y la recuperación de la clave. Del lado
backend, el módulo ofrece una interfaz completa de gestión de usuarios y de
grupos en el navegador. Un nuevo perfil de administrador de organización delega
la inscripción de usuarios en una estructura, y entonces la otorgación de
derechos sobre las herramientas y los datos.</p>
<p>GeoNetwork recibió numerosos correctivos para estabilizar la importante
evolución de la versión anterior.</p>
<h2>Lado de estándares e interoperabilidad</h2>
<p>Que sea del lado cliente o del lado servidor, WMS 1.3.0, WFS 2.0 y CSW 2.0.2
llegan a ser las versiones por omisión, y queda la posibilidad de explotar WMS
1.1.1 t WFS 1.0 para los servicios que no son compatibles con versiones más
elevadas.</p>
<p>El estándar WMTS hace su aparición en el visualizador y el módulo de
impresión, lo que ofrece en particular la posibilidad de acelerar el cargamento
de los mapas, pero también de acceder a las capas del GeoPortail IGN de
Francia.</p>
<p>La extracción de datos permite ahora la recuperación de los metadatos
correspondientes en el archivo para descargar. Además las extracciones hacía
KML, TIF+TFW/TAB han sido añadidas. La autenticación desde los clientes pesados
ha sido mejorada.</p>
<h2>Lado reutilización</h2>
<p>El esfuerzo de traducción sigue: todos los desarrollos alrededor de
geOrchestra deben permitir la internacionalización. No-desarrolladores han
aportado su contribución (ver la traducción en ruso del visualizador), ¡gracias
a ellos!</p>
<p>Finalmente, variables globales addicionales, tales como el nombre de la
plataforma, permiten centralizar más la configuración, pero conservando módulos
separados.</p>
<p>Consultar las <a href="https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md" hreflang="en">notas de versión</a> para tomar conocimiento de todas las
evoluciones e instrucciones de actualización.</p>
<h2>Lado comunidad</h2>
<p>Como siempre, <a href="https://github.com/georchestra/" hreflang="en">el
código fuente esta en acceso libre</a> con el bugtracker y todas las ramas de
los contribuidores. El código, sin dependencias externas, <a href="http://www.ohloh.net/p/georchestra" hreflang="en">esta analizado
periodicamente por Ohloh</a> . ¡La comunidad esta en buen camino!</p>

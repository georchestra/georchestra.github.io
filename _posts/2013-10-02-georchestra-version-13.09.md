 le mercredi  2 octobre 2013, 10:13
    
          <div class="post-excerpt"><p>Le comité de pilotage geOrchestra est heureux de vous annoncer la sortie de
geOrchestra 13.09. Cette sixième version millésimée apporte de nombreuses
nouveautés, améliorations et corrections. La version 13.09 geOrchestra est en
démonstration sur <a href="http://sdi.georchestra.org/mapfishapp/?lang=fr" hreflang="fr">http://sdi.georchestra.org/</a>.</p>
<p>The Project Steering Committee of geOrchestra is proud to announce the
release of geOrchestra 13.09. In this sixth release you will find a number of
new features, improvements and corrections. geOrchestra 13.09 is available at
<a href="http://sdi.georchestra.org/mapfishapp/?lang=en" hreflang="en">http://sdi.georchestra.org/</a>.</p>
<p>El comite director de geOrchestra tiene el agrado de anunciar la salida de
geOrchestra 13.09. Esta sexta versión brinda numerosas novedades y
correcciones. La versión 13.09 geOrchestra esta en demostración sobre <a href="http://sdi.georchestra.org/mapfishapp/?lang=es" hreflang="es">http://sdi.georchestra.org/</a>.</p>
<p><strong>Spanish &amp; English translations in this same post</strong></p></div>
        
    <div class="post-content"><p>Cette version majeure a été supportée par les projets GeoPicardie, PIGMA,
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
<p>=======================================================================</p>
<h2>geOrchestra in english</h2>
<p>This major release was made thanks to the support of the following
projects : GeoPicardie, PIGMA, CIGALsace, GeoBretagne and CRAIG. Thanks go
as well to all the contributors, testers, translators of the geOrchestra
community. Indeed it is worth noting our community is not only working on the
core software components but also by proposing addons, offering help and
support on our mailing lists, organising geOrchestra-oriented events (as
GeoCom) and trainings.</p>
<p>geOrchestra hold their commitment to sticking to GeoServer, Geonetwork,
Openlayers, stable releases. These projects are progressing at an accelerated
pace, making our task uneasy, but we are stimulated by the interesting
perspectives emerging: W3DS, CSS styling, WPS ...</p>
<h2>On the user's side</h2>
<p>Those who like to draw sketches on maps will enjoy the new annotation
module: one can draw geometries, place labels and tune their styling. This
information can then be exported in KML. In geOrchestra 13.09 users will also
have the ability to display their own files (Shapefile, MIF/MID, GML, KML, even
TAB and GPX) in their own browser. The printing module can now deal with all
the layers and create a PDF file which is more faithful to what the browser
diplays.</p>
<p>Designed to tame the bulkiest catalogs, the viewer's data explorer was
fitted with a simple syntax analyser: <em>@producer</em> fetches a producer's
data, <em>#keyword</em> gets those data linked to a keyword, <em>-exclude</em>
filters out files containing the word &quot;exclude&quot;, etc. We believe this syntax is
easy to be accustomed with, and the pertinence of search results gets greatly
improved.</p>
<p>As an improvement to map interchange, context files (Web Map Context and OWS
Context) can now be used even if saved in a different projection, and the
validity of permalinks is now displayed.</p>
<p>Feedbacks from the community helped us improve ergonomy. E.g.: the new
&quot;apply&quot; button on the style editor (SLD) makes it truly interactive as one can
now visually test the result without closing the control window.</p>
<h2>On the administration's side</h2>
<p>A new ldapadmin module makes it possible for users on the front end to self
register (with or without a moderation) and retrieve passwords. On the back end
the module now offers a complete user- and group-management interface from the
browser. A structure manager profile severs the link between user registration
and structure, hence allowing a flexible attribution of permissions on tools
and data.</p>
<p>Geonetwork underwent lots of updates to stabilise the significant evolution
from the previous version.</p>
<h2>On the standard and interoperability side</h2>
<p>Both on the client and server side WMS 1.3.0, WFS 2.0 and CSW 2.0.2 are now
the norm, still with the possibility of exploiting WMS 1.1.1 and WFS 1.0 for
those services which don't support more recent versions. The WMTS standard
makes its way to the viewer and the printing module, speeding up map rendering,
but also access IGN's GeoPortal layers. Data extraction now comes with the
associated metadata in the downloadable archive. Moreover extraction options to
KML, TIF+TFW/TAB formats were added. Authentication from heavy clients was also
improved.</p>
<h2>On reusablity</h2>
<p>The translation effort is going on: all the geOrchestra-related developments
must allow internationalisation. Non-developers have brought their stone (e.g.
the new Russian version for the viewer), let them be thanked for their
contribution!</p>
<p>At last, additionnal global variables as a platform name or admin mail allow
a more centralised configuration, as well as keeping separate modules.</p>
<p>For more on evolutions and update instructions, please refer to the <a href="https://github.com/georchestra/georchestra/blob/master/RELEASE_NOTES.md" hreflang="en">version notes</a>.</p>
<h2>On the community side</h2>
<p>As usual <a href="https://github.com/georchestra/" hreflang="en">the sources
are on free access</a> with the bugtracker and all contributors' branches. The
code (save external dependencies) <a href="http://www.ohloh.net/p/georchestra" hreflang="en">is periodically analysed by Ohloh</a>. The geOrchestra community
is well and thriving!</p>
<p>=======================================================================</p>
<h2>geOrchestra en español</h2>
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
<p>=======================================================================</p>
<h3>Sorry, no russian translation for this post, just <a href="http://sdi.georchestra.org/mapfishapp/?lang=ru" hreflang="ru">this</a>.</h3></div>

      </div>

  

    
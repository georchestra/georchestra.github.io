---
layout: post
title:  "Compte-rendu du geOcom 2014"
date:   2014-07-03 18:49:13
categories: geocom
lang: fr
uid: 2014-07-03
---

Este GeoCOM 2014 se celebró en excelentes condiciones en Clermont Ferrand, reunió a los directores presentes o futuras plataformas: PIGMA, CRAIG, CIGAL, GéoBretagne, GeoSAS, INRA de Nancy, la aglomeración de Puy en Velay Moulins, Vienne, Clermont Ferrand, Rennes, Universidad de Clermont; desarrolladores Camptocamp; y los miembros del PSC geOrchestra.

Objetivos: conocer y compartir, construir sobre las buenas prácticas, construir juntos la hoja de ruta. 10 temas votados han sido tratados con para cada uno: un escenario, un tiempo de intercambio y la recolección de las aspiraciones de evolución del proyecto.

Desgraciadamente, la webconferencia no funcionó y los sentimos mucho por l@s que querian seguir los debates a distancia   

¡Gracias a todos los participantes y panelistas por venir, su compromiso y sus contribuciones, hasta el año que viene!

<!--more-->

Restitución de temas tratados: encuentre las presentaciones en la [pagina del l'evento](http://www.craig.fr/reunions/1229-georchestra-community-meeting), puesta en línea por el CRAIG. 

## Los Visualizadores

Se trata de los casos de reutilización mas visibles, son un elmento clave para valorizar la IDE y los datos.  
La série s/mviewer es presentada. Los usuarios comparten un gran necesidad de *simplicidad* para proponer a un tipo de usuario determinado exactamente lo que necesita, sin importar una multiplicación de los vizualizadores conectados a una IDE. Pero también se comparte un deseo de interoperabilidad para poder pasar de un visulizador al otro sin perder el contexto, y así cubrir toda una gama de usos sin duplicar la información. En todos los casos se mantiene el enlace hacia el dato y el metadato. 

Tendencias : "dedos grandes"/"fisher price", contextos, sin "modo", personalización coulor/logo/layout


## El fondo OpenStreetMap mutualizado

Hoy, las regiones Picardía y Bretaña ofrecen siete fondos cartográficos OSM de Francia entera en WMS & co, al menos en las proyecciones 2154 y 3857. La carga es difícil de soportar para estas plataformas regionales, el tráfico toda Francia es importante  (suministrado con algunos básicos clientes). Queremos encontrar el alojamiento y la administración común de proporcionar este servicio entre varios.

Para producir sólo mapas, la base pesa 20 Go. Para servir también datos atributarios se requiere 200GB - geOrchestra puede servir a estos flujos de datos sin problemas. El almacenamiento en base debe ser extremadamente eficiente. El vencimiento de las baldozas (tiles) debe ser automatizado. Se espera un trafico máximo de 1.000 t/s, 200 mbps. 

El CRAIG podría liberar un alojamiento y la experiencia de Bretaña + Picardía está disponible.

=> tendencias : alojamiento único, imposm3, SSD, administración compartida, terminos de referencia comun para los estilos.


## Una IDE "INSPIRE compliant"

Después de describir las obligaciones de una IDE frente a la directiva européa INSPIRE, intercambiamos el sentimiento de cada plataforma. Las "metadata party", esta bién; pero el efecto es corto y los recordatorios deben ser permanentes. 
Los productos llamativos como s/mviewer estimulantes. 

La evolución hacia GeoNetwork3 ya está programada para geOrchestra,se espera una marcada mejora en la ergonomía para el administrador. 

El geopublishing es utilizado por algunos, pero los servicios de REST GeoServer  merecen una profundización (directory of shapefiles, metadatas...) para una mejor integración y delegación.

La comunidad también siente la necesidad de herramientas de verificación de calidad neutrales y más ergonómicos que los validadores oficiales. 

Para descargas, las opiniones difieren sobre el valor de ofrecer ademas la descarga  "simple" via atom.
=> tendencias : seguro de qualidad, capitalización de buenas practicas, seguimiento sobre los grupos de trabajo.


## Seguridad de datos

El módulo GeoFence opcional permite un control extremadamente preciso para limitar el acceso a ciertos objetos, atributos, perímetros geográficos, a costa de un aumento significativo en el número de reglas. El módulo puede controlar nube de instancias de GeoServer. En la comunidad, algunos necesitan un control fino, otros no. También se menciona la posibilidad de limitar el uso de los datos no personales por las condiciones de uso, sin implementar el filtrado de acceso.

=> tendencias: mejorar la usabilidad de GeoFence, mantener este módulo como opcional.


## Performance

Un método con efectos (y costos) crecientes es expuesto: la supervisión, los límites de seguridad, optimización http / images / estilos / datos, tiling, navegadores modernos, escalabilidad horizontal / vertical del alojamiento. Para la continuidad del servicio, balanceo de carga GeoServer y el reinicio automático dan muy buenos resultados y reducen en gran medida la carga administrativa.

Lecturas indispensables:
* GeoServer in production http://docs.geoserver.org/stable/en/user/production/index.html
* GeoServer on steroid http://blog.geoserver.org/2013/10/02/geoserver-foss4g-2013/
* GeoServer in production http://boundlessgeo.com/whitepaper/geoserver-production-2/

=> tendencias : adición de una [oferta Nagios](https://github.com/georchestra/nagios) a geOrchestra, compartir los test cases.


## WPS


Ilustración muy elocuente y de temporada futbolisdtica (Silo vs geOrchestra  FC) dedicada a la necesidad de combinar varios servicios OGC para producir y exhibir tratamientos como cálculos dinámicos, tales como cuencas a partir de un conjunto de puntos estraidos de un datos ya expuesto.

Después de los WPS, debemos mirar a los servicios más especializados, como SOS y TJS. Y antes que todo no olvidarnos de los rasters de datos, en gran medida desconocidos y subutilizados.

=> tendencias : SOS, TJS, explotar los rasters.



## Mutualisation des formations

Après la présentation d'une maquette de site qui serait le réceptacle commun des ressources autour de geOrchestra, les participants échangent sur le capital à mettre en commun car l'accompagnement est jugé par tous indispensable. Il faudrait, dans les ressources produites par chacun, atteindre une granularité adaptée pour permettre la réutilisation de fragments.

=> tendances : site commun, le PSC reçoit et partage, licence ouverte sur les ressources.


## Relations geOrchestra/OSM/HOT

Après présentation du projet HOT qui ouvre sur un contexte bien plus large que nos plateformes locales, on comprend l'intérêt que peut représenter une IDS sachant faire le pont (bidirectionnel ?) entre les données OSM et les SIG. Ce pont serait également utile pour mieux échanger avec les communautés 'non SIG'.

=> tendances : support OSM bidirectionnel, internationalisation.


## Code Sprint du samedi

En fait de code sprint, le PSC a plutôt analysé et factorisé les tendances développées au cours du geoCom pour façonner la feuille de route stratégique de geOrchestra :

### Simplicité

Maintenant que les services lourds sont opérationnels il faut les rendre accessibles. Pour adresser chaque cible il faut des outils très simples, personnalisables, tout en mutualisant l'effort de conception et de développement.

Les pistes explorées par s/mviewer ont montré de bons très résultats : adoption immédiate, lien conservé avec les outils experts, ciblage, connexion sociale. Leur conception n'est pas pérenne mais ils sont déjà compatibles, disponibles et leur évolution peut être concertée.

Les principes développés par ces outils devront alimenter la refonte long terme du visualiseur avancé.


### Extension de la communauté

La question de savoir si geOrchestra doit investir pour être davantage réutilisé, ou au contraire doit se concentrer sur quelques "grosses" plateformes, a été tranchée en faveur d'une extension.

Le gros travail de factorisation a été assumé par les plateformes régionales. Nous pouvons maintenant viser une plus grande généricité des distributions.

L'extension de la communauté va cependant générer une plus grande charge d'accompagnement à compenser en amont par la capitalisation des bonnes pratiques.


### Liens avec d'autres communautés

Il s'agit d'étendre l'audience de primo-utilisateurs des services vers d'autres communautés, professionnelles ou non. Pour cela il faut des applicatifs ou des connexions spécialisées : applicatifs métiers, OpenStreetMap, raster, TJS...

Ces extensions ne sont pas forcément dans geOrchestra (notion de "contrib"), mais elles sont suffisamment concertées pour être compatibles et réutilisables.


### Efficacité et qualité

INSPIRE est atteint "manuellement", ce qui consomme du temps. Une fois l'IDS opérationnelle, il est souhaitable de miser sur des outils de vérification qualité et d'autocorrection. Ces outils permettront de prendre le contrôle du stock de données et métadonnées. Le bénéfice sera ressenti par les administrateurs (gain de temps, adaptation) comme par les utilisateurs (meilleure uniformité et réponse à leurs souhaits).

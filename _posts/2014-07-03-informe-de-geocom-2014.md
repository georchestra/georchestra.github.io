---
layout: post
title:  "Informe de geOcom 2014"
date:   2014-07-03 18:49:13
categories: geocom
lang: es
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

=> tendencias : adición de una [oferta Nagios](https://github.com/georchestra/nagios) a geOrchestra, compartir los test cases.


## WPS


Ilustración muy elocuente y de temporada futbolisdtica (Silo vs geOrchestra  FC) dedicada a la necesidad de combinar varios servicios OGC para producir y exhibir tratamientos como cálculos dinámicos, tales como cuencas a partir de un conjunto de puntos estraidos de un datos ya expuesto.

Después de los WPS, debemos mirar a los servicios más especializados, como SOS y TJS. Y antes que todo no olvidarnos de los rasters de datos, en gran medida desconocidos y subutilizados.

=> tendencias : SOS, TJS, explotar los rasters.



## Puesta en común de capacitaciones 

Después de la presentación de un prototipo de sitio que seria el recipiente  compartido de los recursos creados entorno a geOrchestra, los participantes comparten entorno al capital a compartirse, ya que el acompañamiento y soporte es considerado esencial por todos. Sería necesario alcanzar, en los recursos producidos por cada uno, una granularidad suficiente como para permitir una reutilización de fragmentos.

 => tendencias: sitio común, el PSC recibe y comparte, licencia abierta sobre los recursos.


## Relaciones geOrchestra/OSM/HOT

Después de la presentación del proyecto HOT que abre a un contexto mucho más amplio que nuestras plataformas locales, es comprensible el interés que implica una IDE que sepa hacer un puente bidireccional entre datos OSM y SIG. Este puente también sería útil para interactuar mejor con la comunidades 'no SIG' 

=> tendencias: soporte OSM bidireccional, internacionalización.

## Code Sprint del sabado

En vez de code sprint, el PSC se dedicó mas bién a analizar y factorizar las tendencias desarrolladas durante el geoCom para definir la hoha de ruta estratégica de GeOrchestra : 

### Simplicdad

Ahora que los servicios pesados están en funcionamiento, se debe hacerlos accesibles. Para alcanzar todo tipo de público, se necesitan herramientas muy simples, adaptables, al mismo tiempo que hay que compartir los esfuerzos  de concepción y desarrollo. 

Las vías exploradas por s / mviewer mostraron muy buenos resultados: adopción inmediata, nexo conservado con las herramientas expertas, connexión social. Su diseño no es perenne, pero ya son compatibles, disponibles y su evolución se puede coordinar. Los principios desarrollados por estas herramientas impulsarán la reformulación a largo plazo del visualizador avanzado.


### Ampliación de la comunidad

La cuestión de saber si geOrchestra debe invertir para ser reutilizado (ampliación de la comunidad), o si a contrario debe centrarse en unas pocas plataformas "grandes", se dirimió a favor de la ampliación. 

El duro trabajo de factorización fue asumido por las plataformas regionales. Ahora podemos apuntar a distribuciones más genéricas. 

Sin embargo, la ampliación de la comunidad va a generar una mayor carga de soporte para compensar la capitalización aguas arriba de las buenas prácticas.

### Nexos con otras comunidades

Se trata de ampliar la audiencias de los principales usuarios de los servicios a otras comunidades, profesionales o no. Esto requiere aplicacióne o conexiones especializadas: aplicaciones de negocio, OpenStreetMap, raster, TJS ... 

Estas extensiones no son necesariamente en geOrchestra (noción de "contrib"), pero que están suficientemente coordinadas para ser compatibles y reutilizables.


### Eficiencia y calidad

INSPIRE se logra "manualmente", lo que lleva tiempo. Una vez la IDE operativa, es deseable centrarse en herramientas de control de calidad y de auto-corrección. Estas herramientas permiten tomar el control del stock de datos y metadatos. El beneficio será sentido por los administradores (ahorro de tiempo, adaptación) como por los usuarios (mejor coherencia y respuesta a sus demandas).

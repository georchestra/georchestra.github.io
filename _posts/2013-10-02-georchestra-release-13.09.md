---
layout: post
title: "geOrchestra 13.09 is released"
date: 2013-10-02 10:13:13
lang: en
uid: 2013-10-02
---

<p>The Project Steering Committee of geOrchestra is proud to announce the
release of geOrchestra 13.09. In this sixth release you will find a number of
new features, improvements and corrections. geOrchestra 13.09 is available at
https://sdi.georchestra.org/.
</p>

<!--more-->

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
code (save external dependencies) <a href="https://www.ohloh.net/p/georchestra" hreflang="en">is periodically analysed by Ohloh</a>. The geOrchestra community
is well and thriving!</p>

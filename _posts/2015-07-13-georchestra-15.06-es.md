---
layout: post
title:  "geOrchestra 15.06"
date:   2015-07-13 11:00:00
lang: es
uid: 2015-07-13
---

The geOrchestra team is pleased to announce the release of geOrchestra 15.06

This release brings several key enhancements:

 * full support for the newer Debian 8 "Jessie", which means a longer life span for your server.
 * standard GeoServer artifacts can be used instead of the "geOrchestra flavoured GeoServer". Not only will this bring new features more quickly in, but this will also make your administrator more relax when a vulnerability is discovered in GeoServer.
 * integration tests are run [everytime](https://github.com/georchestra/georchestra/blob/15.06/.travis.yml) new code is contributed to geOrchestra, thanks to the free [travis-ci](https://travis-ci.org/georchestra/georchestra) service.
 * lighter artifacts. We achieved a 20 to 50% reduction of size by excluding useless documentation, examples and tests from the WAR file. This saves bandwidth (and time !) for those of you who pull the artifacts from our <a href="https://sdi.georchestra.org/ci/job/georchestra-template/" data-proofer-ignore>hosted CI</a>.

<img src="/public/posts/2015-07-13/travis.png" alt="travis-ci" />

<!--more-->


Other enhancements include:

 * mapfishapp: iD is now the primary choice to edit the background OSM layer - see [#992](https://github.com/georchestra/georchestra/issues/992),
 
 <img src="/public/posts/2015-07-13/id.png" alt="osm editor iD" />
 
 * mapfishapp: the user may export into GML or KML the features he selected after a query - see [#995](https://github.com/georchestra/georchestra/pull/995),
 
 <img src="/public/posts/2015-07-13/export.png" alt="kml gml export" />
 
 * mapfishapp: the admin may restrict all metadata searches to a specific extent. The user is also able to restrict his search to the current map extent - see [#964](https://github.com/georchestra/georchestra/pull/964),
 
  <img src="/public/posts/2015-07-13/extent.png" alt="extent" />
 
 * mapfishapp: we added the possibility to filter visible features in POSTed layers with CQL - see [#921](https://github.com/georchestra/georchestra/pull/921),
 
 <img src="/public/posts/2015-07-13/cql.png" alt="cql" />
 
 * proxy: intercepts "connection refused" errors - see [#963](https://github.com/georchestra/georchestra/pull/963),

 * documentation: we added a page about SASL configuration for remote AD - see [#958](https://github.com/georchestra/georchestra/pull/958).


The full list of issues can be found on the GitHub issue tracker, tagged with milestone [15.06](https://github.com/georchestra/georchestra/issues?q=milestone%3A15.06).

Many thanks to all contributors for this great release !

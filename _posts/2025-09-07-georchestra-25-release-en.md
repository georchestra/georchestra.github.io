---
layout: post
title: "geOrchestra 25 is released"
date: 2025-09-06 19:00:00
lang: en
uid: 2025-09-06
---

The [25.0.0 geOrchestra release](https://github.com/georchestra/georchestra/releases/tag/25.0.0) has been made available since early july.


<!--more-->

The 25.0 georchestra release features:

* webcomponent header can be configured by a json file (no need to build it anymore)
* gateway is now compatible with proconnect and franceconnect v2
* latest GeoServer 2.27.1 with security fixes, and OGC API Features enabled by default.
* GeoNetwork has been updated to 4.4.8, with support for per-portal datahub instance
* the new [crowdfunded](https://camptocamp.com/en/news-events/help-fund-the-new-geonetwork-editor) metadata editor is available for testing
* and update to mapstore2-georchestra 2024.02, with many improvements (see [https://github.com/georchestra/mapstore2-georchestra/releases/tag/2024.02.00-geOrchestra](https://github.com/georchestra/mapstore2-georchestra/releases/tag/2024.02.00-geOrchestra)
and [https://github.com/geosolutions-it/MapStore2/releases/tag/v2024.02.00](https://github.com/geosolutions-it/MapStore2/releases/tag/v2024.02.00))
* roles can be assigned to organizations in the console

Migration notes are available [here](https://github.com/georchestra/georchestra/blob/25.0.x/migrations/25.0/README.md).

The various deployment methods (docker, ansible, debian packages, standalone wars..) have been updated to provide this new release.

The [demo website](https://demo.georchestra.org) has been updated.


Thanks to many contributors, not only by money, but also time!
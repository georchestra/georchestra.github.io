---
layout: post
title: "geOrchestra 20.1.8 and 22.0.6"
date: 2023-02-24 12:00:00
lang: en
uid: 2023-02-14
---

Following [the announcement on February 20 of a vulnerability in GeoServer](https://geoserver.org/vulnerability/2023/02/20/ogc-filter-injection.html), 5 versions of GeoServer have been released, each incorporating a patch to address this vulnerability.

The geOrchestra community worked immediately to update GeoServer in the 2 stable branches of geOrchestra and make them available under all distribution methods.


**The [20.1.8](https://github.com/georchestra/georchestra/releases/tag/20.1.8) and geOrchestra [22.0.6](https://github.com/georchestra/georchestra/releases/tag/22.0.6) versions are shipped with an up-to-date GeoServer 2.18.7.**

<!--more-->

To benefit from these updates, several solutions are available to you:

- using the Debian packages provided by the community continuous integration on [https://packages.georchestra.org](https://packages.georchestra.org/).

- using the war provided by the community continuous integration on [https://packages.georchestra.org/bot/wars/](https://packages.georchestra.org/bot/wars/)

- using the official Docker images on [https://hub.docker.com/u/georchestra](https://hub.docker.com/u/georchestra).

- for those using 'vanilla' GeoServer it is advisable to update to the latest minor version of the branch used


For geOrchestra instances that would be on older branches (<=2.17) it will be advisable to migrate to more recent versions, older versions of GeoServer no longer receiving security updates.

In case of difficulties, the [mailing list](https://groups.google.com/group/georchestra?hl=fr) or the [IRC channel](https://kiwiirc.com/client/irc.libera.chat/georchestra) are the best places to find help.


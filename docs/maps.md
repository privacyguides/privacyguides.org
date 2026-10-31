---
meta_title: "Recommended Maps and Navigation Apps - Privacy Guides"
title: Maps and Navigation
icon: material/map
description: Privacy-respecting map providers and navigation apps which don't build an advertising profile based on your searches and locations.
cover: maps.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

Use a **map and navigation app** that doesn't build an advertising profile based on your searches and location history. Instead of using Google Maps, Apple Maps, or Waze, we recommend these privacy-respecting alternatives.

The recommendations here do not collect personally identifying information (PII) based on each application's privacy policy. There is **no guarantee** that these privacy policies are honored.

## Organic Maps

<div class="admonition recommendation" markdown>

![Organic Maps logo](assets/img/maps/organic-maps.svg){ align=right }

**Organic Maps** is an open-source, community-developed map display and satnav-style navigation app for walkers, drivers, and cyclists. The app offers worldwide, offline maps based on OpenStreetMap data, and navigation with privacy — no location tracking, no data collection, and no ads. The app can be used completely offline.

Features include cycling routes, hiking trails and walking paths, turn-by-turn navigation with voice guidance, and public transport route planning (only available in supported regions and cities).

[:octicons-home-16: Homepage](https://organicmaps.app){ .md-button .md-button--primary }
[:octicons-eye-16:](https://organicmaps.app/privacy){ .card-link title="Privacy Policy" }
[:octicons-code-16:](https://github.com/organicmaps/organicmaps){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.organicmaps)
- [:simple-appstore: App Store](https://apps.apple.com/app/organic-maps/id1567437057)
- [:simple-github: GitHub](https://github.com/organicmaps/organicmaps/releases)
- [:simple-linux: Linux](https://flathub.org/apps/app.organicmaps.desktop)

</details>

</div>

Please note that Organic Maps is a simple, basic app that lacks certain features many users might expect, such as satellite images, street view images, and real-time traffic information.

## OsmAnd

<div class="admonition recommendation" markdown>

![OsmAnd logo](assets/img/maps/osmand.svg){ align=right }

**OsmAnd** is an open-source, offline map and navigation application based on OpenStreetMap that offers turn-by-turn navigation for walking, cycling, driving, as well as public transport. You can find a detailed overview of OsmAnd's supported [features](https://wiki.openstreetmap.org/wiki/OsmAnd#Features) on the OpenStreet Map Wiki.

[:octicons-home-16: Homepage](https://osmand.net){ .md-button .md-button--primary }
[:octicons-eye-16:](https://osmand.net/docs/legal/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://osmand.net/docs/intro){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/osmandapp){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.osmand)
- [:simple-appstore: App Store](https://apps.apple.com/us/app/id934850257)
- [:simple-android: Android](https://osmand.net/docs/versions/free-versions)

</details>

</div>

<div class="admonition warning" markdown>
<p class="admonition-title">Unique User Identifier</p>

OsmAnd generates a [unique user identifier (UUID)](https://osmand.net/docs/legal/terms-of-use/#6-unique-user-indentifier) for each app install that rotates every three months and is used for internal reports and statistics. The UUID is also sent to OsmAnd's servers when downloading maps. On Android, there is a setting that controls whether the UUID is sent with each download request. From the home screen, go to :material-menu: → :gear: **Settings** → :gear: **OsmAnd settings** → :material-web: **Identifiers**.

- [ ] Uncheck **Send Unique User Identifier (UUID)**

This setting is not available on the iOS app.

</div>

The app also includes a setting for sharing anonymous data about your downloaded maps and the features you use. This setting is disabled by default on Android, but enabled by default on iOS. To disable it in the iOS app, tap the :material-menu: on the home screen to find the :gear: **Settings** menu. Select that, then select :gear: **OsmAnd settings**.

- [ ] Uncheck **Send anonymous data**

OsmAnd allows you to overlay or underlay external map data, such as satellite images from Microsoft or [traffic data](https://themm.net/public/osmand_traffic) from Google, although the latter is ignored by the automatic route planning. OsmAnd also has an optional integration of street view images provided by [Mapillary](https://mapillary.com).

## HERE WeGo

<div class="admonition recommendation" markdown>

![HERE WeGo logo](assets/img/maps/here.png){ align=right }

**HERE WeGo** is a proprietary app made by HERE Technologies, a company owned by a consortium of multiple German automakers as well as Intel. The app's features include turn-by-turn navigation for walking, cycling and driving as well as using public transport, live traffic information, speed camera warnings, terrain and satellite maps, the ability to download maps for offline use, and shop info such as opening times or Yelp reviews.

The app can send your location data in order to provide real-time traffic information, but this is an opt-in feature and the data is anonymized (not linked to your personal identity). 

[:octicons-home-16: Homepage](https://www.here.com/products/wego){ .md-button .md-button--primary }
[:octicons-eye-16:](https://legal.here.com/en-gb/privacy/here-wego-here-application-or-here-maps-privacy-supplement-updated){ .card-link title="Privacy Policy" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.here.app.maps&pli=1)
- [:simple-appstore: App Store](https://apps.apple.com/us/app/here-wego-maps-navigation/id955837609)
- [:octicons-browser-16: Web](https://wego.here.com/)

</details>

</div>

Unlike the previous recommendations, HERE WeGo uses its own proprietary map data and is therefore a good option for users who live in regions where OpenStreetMap is insufficient. In fact, HERE's map data is used by several car manufacturers for their built-in navigation systems.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must not collect PII per their privacy policy.
- Must not require users to create an account with them.
- Must not require users to share location data. If the user opts in to sharing their location, this data must be anonymized.
- Must retain core functionality when offline and allow users to download maps for offline use.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Apps should be open source.
- Should have route planning for public transport.
- Should have real-time traffic information for route planning.
- Should support advanced features such as detailed shop/point of interest (POI) information and reviews, topographic maps, and satellite and street view images.

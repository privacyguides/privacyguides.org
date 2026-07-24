---
title: Maps and Navigation
description: Privacy-respecting map providers and navigation apps which don't build an advertising profile based on your searches and locations.
aliases:
- /maps
- /en/maps
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#organic-maps" title="Organic Maps" image="./organic-maps.svg" subtitle="Organic Maps is an open-source, community-developed map display and satnav-style navigation app for walkers, drivers, and cyclists. The app offers worldwide, offline maps based on OpenStreetMap data, and navigation with privacy — no location tracking, no data collection, and no ads." >}}
  {{< card link="#osmand" title="OsmAnd" image="./osmand.svg" subtitle="OsmAnd is an open-source, offline map and navigation application based on OpenStreetMap that offers turn-by-turn navigation for walking, cycling, driving, as well as public transport. You can find a detailed overview of OsmAnd's supported features on the OpenStreet Map Wiki." >}}
{{< /cards >}}
</div>

Use a **map and navigation app** that doesn't build an advertising profile based on your searches and location history. Instead of using Google Maps, Apple Maps, or Waze, we recommend these privacy-respecting alternatives.

The recommendations here do not collect personally identifying information (PII) based on each application's privacy policy. There is **no guarantee** that these privacy policies are honored.

## Organic Maps

{{< title-card logo="./organic-maps.svg" >}}

**Organic Maps** is an open-source, community-developed map display and satnav-style navigation app for walkers, drivers, and cyclists. The app offers worldwide, offline maps based on OpenStreetMap data, and navigation with privacy — no location tracking, no data collection, and no ads. The app can be used completely offline.

Features include cycling routes, hiking trails and walking paths, turn-by-turn navigation with voice guidance, and public transport route planning (only available in supported regions and cities).

{{< cards >}}
  {{< card link="https://organicmaps.app" title="Homepage" icon="home" >}}
  {{< card link="https://organicmaps.app/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://flathub.org/apps/app.organicmaps.desktop)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=app.organicmaps)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/organic-maps/id1567437057)
[{{< badge content="GitHub" >}}](https://github.com/organicmaps/organicmaps/releases)

Please note that Organic Maps is a simple, basic app that lacks certain features many users might expect, such as satellite images, street view images, and real-time traffic information.

## OsmAnd

{{< title-card logo="./osmand.svg" >}}

**OsmAnd** is an open-source, offline map and navigation application based on OpenStreetMap that offers turn-by-turn navigation for walking, cycling, driving, as well as public transport. You can find a detailed overview of OsmAnd's supported [features](https://wiki.openstreetmap.org/wiki/OsmAnd#Features) on the OpenStreet Map Wiki.

{{< cards >}}
  {{< card link="https://osmand.net" title="Homepage" icon="home" >}}
  {{< card link="https://osmand.net/docs/legal/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=net.osmand)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/us/app/id934850257)
[{{< badge content="Android" >}}](https://osmand.net/docs/versions/free-versions)

OsmAnd generates a [unique user identifier (UUID)](https://osmand.net/docs/legal/terms-of-use/#6-unique-user-indentifier) for each app install that rotates every three months and is used for internal reports and statistics. The UUID is also sent to OsmAnd's servers when downloading maps. On Android, there is a setting that controls whether the UUID is sent with each download request. From the home screen, go to the menu → **Settings** → **OsmAnd settings** → **Identifiers**.

- [ ] Uncheck **Send Unique User Identifier (UUID)**

This setting is not available on the iOS app.

The app also includes a setting for sharing anonymous data about your downloaded maps and the features you use. This setting is disabled by default on Android, but enabled by default on iOS. To disable it in the iOS app, tap the menu on the home screen to find **Settings**. Select that, then select **OsmAnd settings**.

- [ ] Uncheck **Send anonymous data**

OsmAnd allows you to overlay or underlay external map data, such as satellite images from Microsoft or [traffic data](https://themm.net/public/osmand_traffic) from Google, although the latter is ignored by the automatic route planning. OsmAnd also has an optional integration of street view images provided by [Mapillary](https://mapillary.com).

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

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

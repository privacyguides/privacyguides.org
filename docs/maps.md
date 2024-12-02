---
meta_title: "Recommended Maps and Navigation Apps - Privacy Guides"
title: "Maps and Navigation"
icon: material/map 
description: Privacy-respecting map providers and navigation apps which don't build an advertising profile based on your searches and locations.
cover: maps.webp
global:
 - [randomize-element, "table tbody"]
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

Use a **map and navigation app** that doesn't build an advertising profile based on your searches and location history. Instead of using Google Maps, Apple Maps, or Waze, we recommend these privacy-respecting alternatives.

## Recommended Providers

The recommendations here either do not collect any user data or at least do not collect personally identifying information (PII) based on each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

| Provider | Map Data | Offline Maps | Data Collection | License |
|---|---|---|---|---|
| [Organic Maps](#organic-maps) | [OpenStreetMap](https://www.openstreetmap.org/) | :material-check:{ .pg-green } | None | Free (Apache 2.0) |
| [OsmAnd](#osmand) | [OpenStreetMap](https://www.openstreetmap.org/) | :material-check:{ .pg-green } | None | Free (GNU GPL 3.0) |
| [Magic Earth](#magic-earth) | [OpenStreetMap](https://https://www.openstreetmap.org/) | :material-check:{ .pg-green } | Anonymized[^1] | Proprietary |
| [HERE WeGo](#here-wego) | Proprietary | :material-check:{ .pg-green } | Anonymized[^2] | Proprietary |

[^1]: Location data is used to provider real-time traffic data, but cannot be linked to a specific user.
[^2]: Some opt-in features such as live traffic data require sending user data such as location and speed to HERE. This data is collected in a way that does not identify the user personally according to the [privacy policy](https://legal.here.com/en-gb/privacy/here-wego-here-application-or-here-maps-privacy-supplement-updated)


### Organic Maps

<div class="admonition recommendation" markdown>

![Organic Maps logo](assets/img/maps/organic-maps.svg){ align=right }

**Organic Maps** is an open source, community-developed map display and satnav-style navigation app for walkers, drivers, and cyclists. The app offers worldwide offline maps based on OpenStreetMap data, and navigation with privacy - no location tracking, no data collection, and no ads. The app can be used completely offline.

Features include cycling routes, hiking trails and walking paths, turn-by-turn navigation with voice guidance, and public transport route planning (only available in supported regions and cities).

[:octicons-home-16: Homepage](https://organicmaps.app/){ .md-button .md-button--primary }
[:octicons-eye-16:](hhttps://organicmaps.app/privacy/){ .card-link title="Privacy Policy" }
[:octicons-code-16:](https://github.com/organicmaps/organicmaps){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-github: GitHub](https://github.com/organicmaps/organicmaps)
- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.organicmaps)
- [:simple-appstore: App Store](https://apps.apple.com/app/organic-maps/id1567437057)
- [:simple-linux: Linux](https://flathub.org/apps/app.organicmaps.desktop)

</details>

</div>

Please note that Organic Maps is a simple, basic app that lacks features many users might expect such as satellite images, streetview images, and live traffic information.

### OsmAnd

<div class="admonition recommendation" markdown>

![OsmAnd logo](assets/img/maps/osmand.svg){ align=right }

**OsmAnd** is an offline map and navigation application based on OpenStreetMap. It is open-source and does not collect any user data. Some features are paid if you download the app from the Play Store or Apple App Store, but a completely free (though unofficial) version is available on F-Droid. OsmAnd offers turn-by-turn navigation for walking, cycling, driving as well as public transport.

[:octicons-home-16: Homepage](https://osmand.net/){ .md-button .md-button--primary }
[:octicons-eye-16:](https://osmand.net/docs/legal/privacy-policy/){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://osmand.net/docs/intro){ .card-link title=Documentation}
:octicons-code-16:](https://github.com/osmandapp){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.osmand)
- [:simple-appstore: App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257)

</details>

</div>

Compared to Organic Maps, OsmAnd offers many more [features](https://wiki.openstreetmap.org/wiki/OsmAnd#Features) but is also more complicated to use. One noteworthy feature is the ability to overlay or underlay external map data, such as satellite images from Microsoft or [traffic data](https://web.archive.org/web/20211203063453/http://themm.net/public/osmand_traffic) from Google, although the latter is ignored by the automatic route planning. OsmAnd also has an optional integration of streetview images provided by [Mapillary](https://www.mapillary.com/).

### Magic Earth

<div class="admonition recommendation" markdown>

![Magic Earth logo](assets/img/maps/magic-earth.png){ align=right }

**Magic Earth** is a proprietary app based on OpenStreetMap data. Its features include turn-by-turn navigation, live traffic information for route planning, speed camera warnings, public transport info, 3D and satellite maps, and the ability to download maps for offline use. The app may send position data to Magic Earth's traffic provider to provide real-time traffic information. The data is anonymized, using a changing key (so it's not linked to you), and it is deleted after 5 minutes.

[:octicons-home-16: Homepage](https://www.magicearth.com/){ .md-button .md-button--primary }
[:octicons-eye-16:](https://www.magicearth.com/privacy/){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://www.magicearth.com/faq-en/){ .card-link title=Documentation}

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.generalmagic.magicearth&hl=en)
- [:simple-appstore: App Store](https://itunes.apple.com/us/app/magic-earth-gps-navigation/id1007331679?mt=8)

</details>

</div>

Magic Earth is free for all end-users but the developer also has a paid SDK for business partners. Because of this business model, they have decided against open sourcing the app.

While the app has some useful features such as [traffic info in several countries](https://www.magicearth.com/feature-availablity/#hd_traffic) it also lacks others such as detailed shop info and reviews or streetview images.

### HERE WeGo

<div class="admonition recommendation" markdown>

![HERE WeGo logo](assets/img/maps/here.png){ align=right }

**HERE WeGo** is a proprietary app made by HERE Technologies, a company owned by a consortium of multiple German automakers as well as Intel. Unlike the previous recommendations, HERE WeGo uses its own map data rather than relying on OpenStreetMap. The app's features include turn-by-turn navigation for walking, cycling and driving as well as using public transport, live traffic information, speed camera warnings, terrain and satellite maps, the ability to download maps for offline use, and shop info such as opening times or Yelp reviews.

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

Despite being less privacy-focused than our other recommendations, HERE WeGo uses its own proprietary map data and is therefore a good alternative for users who live in regions where OpenStreetMap is insufficient. In fact, HERE's map data is used by several car manufacturers for their built-in navigation systems.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must not collect PII per their privacy policy.
- Must not require users to create an account with them.
- Must not require users to share location data, and if the user opts in to sharing their location the data  must be anonymized.
- Maps can be downloaded and the app used entirely offline.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Apps should be open source.
- Should have route planning for public transport.
- Should have real-time traffic information for route planning.
- Should have advanced features (that users may expect coming from Google or Apple Maps) such as detailed shop/POI information and reviews, topographic maps, and satellite or streetview images.

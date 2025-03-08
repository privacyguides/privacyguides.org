---
title: " Private Weather Apps"
icon: "material/weather-partly-snowy-rainy"
description: "Weather apps often ask for your location and share it with advertisers. Instead, use private open-source weather apps."
cover: weather.jpg
---

<small>Protects against the following threat:</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

**Weather apps** often ask for your location to provide accurate weather info.  Often, they don't let you manually input your location.

When any weather app ask for location, only grant it "Approximate location" and select "Only while using the app". You can temporarily change it to "Always" if you need it for travel. If the app claim you didn't give it location access, the app is lying to you. It could be because of out-of-date knowledge of Android APIs, or because the app wants you to give it precise location access, either because it is easier for them to use this as opposed to Approximate location, or to [sell the data](https://www.theguardian.com/technology/2019/jan/04/weather-channel-app-lawsuit-location-data-selling).

While the steps mentioned above will protect you from most of the tracking, it will not stop non-location tracking. Furthermore, Privacy Guides believes that you shouldn't rely only on yourself to consistently uphold your privacy.

The tools recommended below are fully **private** and are **open-source**. See the criteria section at the end for more.

## Breezy Weather

<div class="admonition recommendation" markdown>

![Breezy Weather logo](assets/img/weather/breezy.webp){ align=right }

Breezy Weather is an Android weather app with a modern and neat interface, similar to Big Tech ones. It is highly customizable, allowing you for example to change icons and choose your preferred weather sources.

The app supports [Android approximate location permission](https://developer.android.com/codelabs/approximate-location), although you might need to wait a bit or try a few times, as it first says "Location not found" when using it.

The app comes in two different flavors, both of which are fully open-source and contain no proprietary components. The standard flavor has all of the 50 weather sources (only some sources will be available in your country), while the FreeNet one only contains sources that are libre and self-hostable, like OpenMeteo.

The app gives severe weather alerts as well as precipations alerts.

[:octicons-home-16: Homepage](https://github.com/breezy-weather/breezy-weather?tab=readme-ov-file#breezy-weather){ .md-button .md-button--primary }
[:octicons-eye-16:](https://github.com/breezy-weather/breezy-weather/blob/main/PRIVACY.md){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/breezy-weather/breezy-weather/blob/main/README.md){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/breezy-weather/breezy-weather){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/breezy-weather/breezy-weather?tab=readme-ov-file#contribute){ .card-link title="Contribute" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-android: Github](https://github.com/breezy-weather/breezy-weather/releases)
- [:simple-obtainium: Obtainium](https://github.com/breezy-weather/breezy-weather/blob/main/INSTALL.md#obtainium)

</details>
</div>

## QuickWeather

<div class="admonition recommendation" markdown>

![QuickWeather logo](assets/img/weather/quick.png){ align=right }

QuickWeather is a no-fuss weather app that boasts being "really fast". Looking away from the name, we see a couple of nice features. The app supports the "Approximate location" permission, which is a good middle-ground between privacy and convenience. Furthermore, the app also has a rain radar, allowing you to quickly see whether it will rain where you live.

The app only supports  two sources: Open-Meteo and OpenWeatherMap([API key](https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base) needed.)

The app can give notifications about current weather, but "weather alerts" are only available if you give the app access to *precise* location, something we don't recommend.

[:octicons-home-16: Homepage](https://github.com/TylerWilliamson/QuickWeather){ .md-button .md-button--primary }
[:octicons-eye-16:](https://github.com/TylerWilliamson/QuickWeather/blob/master/PrivacyPolicy.md){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/TylerWilliamson/QuickWeather/tree/master?tab=readme-ov-file#-quickweather){ .card-link title="Documentation" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.ominous.quickweather)
- [:simple-android: Github](https://github.com/TylerWilliamson/QuickWeather/releases)

</details>
</div>

## Weather Master

<div class="admonition recommendation" markdown>

![Weather Master logo](assets/img/weather/master.svg){ align=right }

Weather Master is a powerful weather app with a lot of information, 15 weather sources and customization.

The app not only informs you about the weather, but also about air pollution, air quality, UV index, pollen level, humidity level, and [more](https://github.com/PranshulGG/WeatherMaster?tab=readme-ov-file#-features). The app also has a weather radar.

The app doesn't support Android approximate location permission, but you can easily type where you live and it will remember it.

Unfortunately, the app doesn't support Android's pop-up notifications, so any alerts - including severe weather alerts - will only be displayed in the app.

The app is highly customisable, allowing you not only to select which weather source you want between the 15 proposed, but also what forecasting model you want to use and what map provider you prefer.

[:octicons-home-16: Homepage](https://github.com/PranshulGG/WeatherMaster){ .md-button .md-button--primary }
[:octicons-eye-16:](https://github.com/PranshulGG/WeatherMaster/blob/master/app/src/main/assets/pages/aboutPages/PrivacyPolicy.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/PranshulGG/WeatherMaster?tab=readme-ov-file#-weathermaster){ .card-link title="Documentation" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-android: Github](https://github.com/PranshulGG/WeatherMaster/releases)

</details>
</div>

## OSSWeather

<div class="admonition recommendation" markdown>

![OSSWeather logo](assets/img/weather/oss.png){ align=right }

OSSWeather is a weather app available on both on iOS and Android. While the interface can be overwhelming at first, it is highly customizable. For example, you can change the number of days,  hours, and minutes available for forecasts. It is also designed for pros, with the option to choose between more than 15 forecasting models (with a few variants per model), and even compare 3 models in one chart.

Unfortunately, it only support 3 weather sources and doesn't support iOS or Android's "Approximate location" permission. It also doesn't give severe weather alerts.

[:octicons-home-16: Homepage](https://github.com/Akylas/oss-weather){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Akylas/oss-weather){ .card-link title="Documentation" }
[:octicons-heart-16:](https://github.com/sponsors/farfromrefug){ .card-link title="Contribute" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-appstore: App Store](https://apps.apple.com/en/app/oss-weather/id1499117252)
- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.akylas.weather)
- [:simple-android: Github](https://github.com/Akylas/oss-weather/releases)

</details>

</div>

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Be open-source
- Doesn't require an account or doesn't exclusively use sources that require an account
- Have enough weather sources to cover most countries.
- Allow manual input of location
- Doesn't contain any telemetry

### Best-Case scenario

- Support giving only 'Approximate location' permission instead of potentially risky precise location.
- Allow you to choose between a wide variety of weather sources and forecast models.
- Support for emergency weather alerts

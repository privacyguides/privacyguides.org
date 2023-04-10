---
title: "Mobile Browsers"
icon: material/cellphone-information
description: These browsers are what we currently recommend for standard/non-anonymous internet browsing on your phone.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Private Mobile Browser Recommendations
    url: "./"
    relatedLink: "../desktop-browsers/"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Brave
    image: /assets/img/browsers/brave.svg
    url: https://brave.com
    applicationCategory: Web Browser
    operatingSystem:
      - Android
    subjectOf:
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Safari
    image: /assets/img/browsers/safari.svg
    url: https://www.apple.com/safari/
    applicationCategory: Web Browser
    operatingSystem:
      - iOS
    subjectOf:
      "@type": WebPage
      url: "./"
---

Здесь перечислены мобильные браузеры, которые мы рекомендуем, и руководства по их настройке для обычного (неанонимного) пользования интернетом. Если вам нужна анонимность в сети, используйте [Tor](tor.md). Мы рекомендуем использовать как можно меньше расширений, так как они имеют привилегированный доступ к браузеру, требуют доверия к их разработчикам, могут [идентифицировать вас](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), а также [ослабляют](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) изоляцию между сайтами.

## Android

На Android браузер Firefox менее безопасен, чем основанные на Chromium альтернативы: движок Mozilla, [GeckoView](https://mozilla.github.io/geckoview/), ещё не поддерживает [изоляцию сайтов](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) и не включает [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

### Brave

!!! recommendation

    ![Логотип Brave](assets/img/browsers/brave.svg){ align=right }
    
    **Браузер Brave** включает встроенный блокировщик контента и [инструменты приватности](https://brave.com/privacy-features/), многие из которых включены по умолчанию.
    
    Brave основан на Chromium, поэтому он покажется вам знакомым, а также у него не должно быть проблем с совместимостью.
    
    [:octicons-home-16: Официальный сайт](https://brave.com/ru/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion-сайт" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Исходный код" }
    
    ??? downloads annotate
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)

#### Рекомендованные настройки

Tor Browser — это единственный способ действительно анонимно пользоваться интернетом. Если вы используете Brave, мы рекомендуем изменить следующие настройки, чтобы сохранить приватность, но все браузеры кроме [Tor](tor.md#tor-browser) могут *кем-нибудь* отслеживаться в том или ином виде.

Эти настройки можно найти в :material-menu: → **Настройки** → **Brave Shields & privacy**

##### Режим «Только HTTPS»:

Brave включает несколько инструментов защиты от отслеживания в разделе [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Мы рекомендуем включить эти настройки [на всех сайтах](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-), которые вы посещаете.

##### Brave shields global defaults

Shields' options can be downgraded on a per-site basis as needed, but by default we recommend setting the following:

<div class="annotate" markdown>

- [x] Select **Aggressive** under Block trackers & ads

    ??? warning "Use default filter lists"
        Brave allows you to select additional content filters within the internal `brave://adblock` page. We advise against using this feature; instead, keep the default filter lists. Using extra lists will make you stand out from other Brave users and may also increase attack surface if there is an exploit in Brave and a malicious rule is added to one of the lists you use.

- [x] Select **Upgrade connections to HTTPS**
- [x] Select **Always use secure connections**
- [x] (Optional) Select **Block Scripts** (1)
- [x] Select **Strict, may break sites** under **Block fingerprinting**

</div>

1. This option provides functionality similar to uBlock Origin's advanced [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode) or the [NoScript](https://noscript.net/) extension.

##### Clear browsing data

- [x] Select **Clear data on exit**

##### Блокировка отслеживания через социальные сети

- [ ] Отключите все компоненты социальных сетей

##### Другие настройки приватности

<div class="annotate" markdown>

- [x] Select **Disable non-proxied UDP** under [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Uncheck **Allow sites to check if you have payment methods saved**
- [ ] Uncheck **IPFS Gateway** (1)
- [x] Select **Close tabs on exit**
- [ ] Uncheck **Allow privacy-preserving product analytics (P3A)**
- [ ] Uncheck **Automatically send diagnostic reports**
- [ ] Uncheck **Automatically send daily usage ping to Brave**

</div>

1. InterPlanetary File System (IPFS) is a decentralized, peer-to-peer network for storing and sharing data in a distributed filesystem. Unless you use the feature, disable it.

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) позволяет синхронизировать данные браузера (историю, закладки и т. д.) между несколькими устройствами без необходимости создавать аккаунт, а также защищает их при помощи E2EE.

## iOS

На iOS любое приложение, которое может открывать веб-страницы, [использует](https://developer.apple.com/app-store/review/guidelines) только предоставляемый Apple [движок WebKit](https://developer.apple.com/documentation/webkit), поэтому нет особых причин использовать сторонний браузер.

### Safari

!!! recommendation

    ![Логотип Safari](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** — браузер по умолчанию на iOS. Мы рекомендуем включить фильтры, помеченные *#recommended* в разделах "Блокировка рекламы" и "Антитрекинг" [блокировщики контента] (https://kb.adguard.com/en/safari/overview#content-blockers).
    
    [:octicons-home-16: Официальный сайт](https://www.apple.com/ru/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/ru/legal/privacy/data/ru/safari/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://support.apple.com/ru-ru/guide/safari/welcome/mac){ .card-link title=Документация}

#### Рекомендованные настройки

These options can be found in :gear: **Settings** → **Safari** → **Privacy and Security**.

##### Cross-Site Tracking Prevention

- [x] Enable **Prevent Cross-Site Tracking**

This enables WebKit's [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp). The feature helps protect against unwanted tracking by using on-device machine learning to stop trackers. ITP protects against many common threats, but it does not block all tracking avenues because it is designed to not interfere with website usability.

##### Privacy Report

Privacy Report provides a snapshot of cross-site trackers currently prevented from profiling you on the website you're visiting. It can also display a weekly report to show which trackers have been blocked over time.

Privacy Report is accessible via the Page Settings menu.

##### Privacy Preserving Ad Measurement

- [ ] Disable **Privacy Preserving Ad Measurement**

Ad click measurement has traditionally used tracking technology that infringes on user privacy. [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) is a WebKit feature and proposed web standard aimed towards allowing advertisers to measure the effectiveness of web campaigns without compromising on user privacy.

The feature has little privacy concerns on its own, so while you can choose to leave it on, we consider the fact that it's automatically disabled in Private Browsing to be an indicator for disabling the feature.

##### Always-on Private Browsing

Open Safari and tap the Tabs button, located in the bottom right. Then, expand the Tab Groups list.

- [x] Select **Private**

Safari's Private Browsing mode offers additional privacy protections. Private Browsing uses a new [ephemeral](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) session for each tab, meaning tabs are isolated from one another. There are also other smaller privacy benefits with Private Browsing, such as not sending a webpage’s address to Apple when using Safari's translation feature.

Do note that Private Browsing does not save cookies and website data, so it won't be possible to remain signed into sites. This may be an inconvenience.

##### iCloud Sync

Synchronization of Safari History, Tab Groups, iCloud Tabs and saved passwords are E2EE. However, by default, bookmarks are [not](https://support.apple.com/en-us/HT202303). Apple can decrypt and access them in accordance with their [privacy policy](https://www.apple.com/legal/privacy/en-ww/).

You can enable E2EE for you Safari bookmarks and downloads by enabling [Advanced Data Protection](https://support.apple.com/en-us/HT212520). Go to your **Apple ID name → iCloud → Advanced Data Protection**.

- [x] Turn On **Advanced Data Protection**

If you use iCloud with Advanced Data Protection disabled, we also recommend checking to ensure Safari's default download location is set to locally on your device. This option can be found in :gear: **Settings** → **Safari** → **General** → **Downloads**.

### AdGuard

!!! recommendation

    ![Логотип AdGuard](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard для iOS** — это бесплатный и открытый блокировщик контента для Safari, который использует нативный [API блокировки контента](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).
    
    AdGuard для iOS имеет несколько премиум-функций, хотя стандартные средства блокировки контента Safari бесплатны.
    
    [:octicons-home-16: Официальный сайт](https://adguard.com/ru/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/ru/privacy/ios.html){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Исходный код" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Дополнительные списки блокировки замедляют работу браузера и могут упростить атаку, поэтому пользуйтесь только тем, что вам необходимо.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

### Минимальные требования к сервисам

- Must support automatic updates.
- Must receive engine updates in 0-1 days from upstream release.
- Any changes required to make the browser more privacy-respecting should not negatively impact user experience.
- Android browsers must use the Chromium engine.
    - Unfortunately, Mozilla GeckoView is still less secure than Chromium on Android.
    - iOS browsers are limited to WebKit.

### Extension Criteria

- Must not replicate built-in browser or OS functionality.
- Must directly impact user privacy, i.e. must not simply provide information.

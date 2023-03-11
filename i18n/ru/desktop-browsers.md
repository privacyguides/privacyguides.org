---
title: "Desktop Browsers"
icon: material/laptop
description: Firefox and Brave are our recommendations for standard/non-anonymous browsing.
---

These are our currently recommended desktop web browsers and configurations for standard/non-anonymous browsing. If you need to browse the internet anonymously, you should use [Tor](tor.md) instead. In general, we recommend keeping your browser extensions to a minimum; they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

## Firefox

!!! recommendation

    ![Логотип Bromite](assets/img/browsers/bromite.svg){ align=right }
    
    **Bromite** - это браузер, основанный на [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)), с основой на конфиденциальность и безопасность, встроенную блокировку рекламы и некоторую рандомизацию цифровых отпечатков.
    
    [Перейти на bromite.org](https://www.bromite.org){ .md-button .md-button--primary } [Политика конфиденциальности](https://www.bromite.org/privacy){ .md-button } downloads
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! warning
    Каждый установщик Firefox с веб-сайта Mozilla имеет в себе уникальный идентификатор, который используется для телеметрии. Идентификатор **не** включен в релизы браузера из [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

### Firefox

Tor Browser - это единственный способ действительно анонимно просматривать Интернет. When you use Firefox, we recommend changing the following settings to protect your privacy from certain parties, but all browsers other than [Tor Browser](tor.md#tor-browser) will be traceable by *somebody* in some regard or another.

Эти параметры можно найти на странице настроек *Приватность и защита* ( ≡ → Настройки → Приватность и защита).

##### Улучшенная защита от отслеживания:

- Выберите «Строгая»

Это защищает вас, блокируя трекеры социальных сетей, скрипты отпечатков пальцев (обратите внимание, что это не защищает вас от *всех* отпечатков пальцев), криптомайнеры, межсайтовые файлы cookie для отслеживания и некоторые другие средства отслеживания. Улучшенная защита от отслеживания защищает от многих распространенных угроз, но не блокирует все пути отслеживания, поскольку разработан таким образом, чтобы минимально или вообще не влиять на удобство использования сайта.

##### Куки и данные сайтов:

[Firefox Sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) использует сквозное шифрование.

- Выберите «Удалять куки и данные сайтов при закрытии Firefox»

Это защищает вас от постоянных файлов cookie, но не защищает вас от файлов cookie, полученных в течение одного сеанса просмотра. Когда эта функция включена, можно легко очистить куки браузера, просто перезапустив Firefox. Вы можете установить исключения для каждого сайта, если вы хотите оставаться зарегистрированным на определенном сайте, который вы часто посещаете.

##### Отключение поисковых предложений

- [ ] Uncheck **Provide search suggestions**

Функции предложения поиска могут быть недоступны в вашем регионе.

Поисковые предложения отправляют все, что вы набираете в адресной строке, в поисковую систему по умолчанию, независимо от того, отправляете ли вы фактический поиск. Отключение поисковых предложений позволяет более точно контролировать данные, которые вы отправляете поставщику поисковых систем.

##### Отключение телеметрии

- [ ] Uncheck **Allow Firefox to send technical and interaction data to Mozilla**
- [ ] Uncheck **Allow Firefox to install and run studies**
- [ ] Uncheck **Allow Firefox to send backlogged crash reports on your behalf**

> Firefox sends data about your Firefox version and language; device operating system and hardware configuration; memory, basic information about crashes and errors; outcome of automated processes like updates, safebrowsing, and activation to us. When Firefox sends data to us, your IP address is temporarily collected as part of our server logs.

Additionally, the Firefox Accounts service collects [some technical data](https://www.mozilla.org/en-US/privacy/firefox/#firefox-accounts). If you use a Firefox Account you can opt-out:

1. Open your [profile settings on accounts.firefox.com](https://accounts.firefox.com/settings#data-collection)
2. Uncheck **Data Collection and Use** > **Help improve Firefox Accounts**

##### Режим «Только HTTPS»:

- Выберите: "Включить режим «Только HTTPS» во всех окнах".

Это предотвращает непреднамеренное подключение к веб-сайту с обычным HTTP-текстом. Протокол HTTP в настоящее время используется крайне редко, поэтому это практически не должно повлиять на ваш ежедневный просмотр веб-страниц.

### Firefox Sync

[Firefox Sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) allows your browsing data (history, bookmarks, etc.) to be accessible on all your devices and protects it with E2EE.

### Расширения

The [Arkenfox project](https://github.com/arkenfox/user.js) provides a set of carefully considered options for Firefox. If you [decide](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) to use Arkenfox, a [few options](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) are subjectively strict and/or may cause some websites to not work properly - [which you can easily change](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) to suit your needs. We **strongly recommend** reading through their full [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox also enables [container](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users) support.

## Bromite

!!! recommendation

    ![Логотип Safari](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** - это браузер по умолчанию в iOS.
    
    Он включает в себя [функции обеспечения конфиденциальности](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0): Intelligent Tracking Protection, отчет о конфиденциальности, изолированные вкладки частного доступа, частный узел iCloud и автоматическое обновление до HTTPS.
    
    [:octicons-home-16: Homepage](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Source Code" }
    
    ??? downloads annotate
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)

    1. We advise against using the Flatpak version of Brave, as it replaces Chromium's sandbox with Flatpak's, which is less effective. Additionally, the package is not maintained by Brave Software, Inc.

### Firefox

Tor Browser - это единственный способ действительно анонимно просматривать Интернет. When you use Brave, we recommend changing the following settings to protect your privacy from certain parties, but all browsers other than the [Tor Browser](tor.md#tor-browser) will be traceable by *somebody* in some regard or another.

These options can be found in :material-menu: → **Settings**.

##### Режим «Только HTTPS»:

Brave includes some anti-fingerprinting measures in its [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) feature. We suggest configuring these options [globally](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) across all pages that you visit.

Shields' options can be downgraded on a per-site basis as needed, but by default we recommend setting the following:

<div class="annotate" markdown>

- [x] Select **Prevent sites from fingerprinting me based on my language preferences**
- [x] Select **Aggressive** under Trackers & ads blocking

    ??? warning "Use default filter lists"
        Brave allows you to select additional content filters within the internal `brave://adblock` page. We advise against using this feature; instead, keep the default filter lists. Using extra lists will make you stand out from other Brave users and may also increase attack surface if there is an exploit in Brave and a malicious rule is added to one of the lists you use.

- [x] (Optional) Select **Block Scripts** (1)
- [x] Select **Strict, may break sites** under Block fingerprinting

</div>

1. This option provides functionality similar to uBlock Origin's advanced [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode) or the [NoScript](https://noscript.net/) extension.

##### Постоянно включенный режим инкогнито

- [x] Выбрать **Всегда использовать безопасные соединения**

##### Предотвращение перекрестного отслеживания

<div class="annotate" markdown>

- [x] Select **Disable non-proxied UDP** under [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Uncheck **Use Google services for push messaging**
- [ ] Uncheck **Allow privacy-preserving product analytics (P3A)**
- [ ] Uncheck **Automatically send daily usage ping to Brave**
- [ ] Uncheck **Automatically send diagnostic reports**
- [x] Select **Always use secure connections** in the **Security** menu
- [ ] Uncheck **Private window with Tor** (1)

    !!! tip "Sanitizing on Close"
        - [x] Select **Clear cookies and site data when you close all windows** in the *Cookies and other site data* menu

        If you wish to stay logged in to a particular site you visit often, you can set exceptions on a per-site basis under the *Customized behaviors* section.

</div>

1. Brave is **not** as resistant to fingerprinting as the Tor Browser and far fewer people use Brave with Tor, so you will stand out. Where [strong anonymity is required](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) use the [Tor Browser](tor.md#tor-browser).

##### Отчет о конфиденциальности

Disable built-in extensions you do not use in **Extensions**

- [ ] Uncheck **Hangouts**
- [ ] Uncheck **WebTorrent**

##### Конфиденциальные рекламные отчеты

InterPlanetary File System (IPFS) is a decentralized, peer-to-peer network for storing and sharing data in a distributed filesystem. Unless you use the feature, disable it.

- Выберите **Предотвращение межсайтового отслеживания** для включения

##### Apple Pay

Under the *System* menu

<div class="annotate" markdown>

- [ ] Uncheck **Continue running apps when Brave is closed** to disable background apps (1)

</div>

1. This option is not present on all platforms.

### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) allows your browsing data (history, bookmarks, etc.) to be accessible on all your devices without requiring an account and protects it with E2EE.

## Дополнительные советы

We generally do not recommend installing any extensions as they increase your attack surface. However, uBlock Origin may prove useful if you value content blocking functionality.

### AdGuard для Safari

!!! recommendation

    ![Логотип Snowflake](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Логотип Snowflake](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** - это расширение для браузера, которое позволяет вам отдавать свою скорость интернета проекту Tor, используя "прокси Snowflake" в вашем браузере.
    
    Люди, подвергающиеся цензуре, могут использовать прокси-серверы Snowflake для подключения к сети Tor. downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

We suggest following the [developer's documentation](https://github.com/gorhill/uBlock/wiki/Blocking-mode) and picking one of the "modes". Additional filter lists can impact performance and [may increase attack surface](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

##### Other lists

These are some other [filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) that you may want to consider adding:

- [x] Check **Privacy** > **AdGuard URL Tracking Protection**
- Add [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

### Минимальные требования к сервисам

- Must be open-source software.
- Supports automatic updates.
- Receives engine updates in 0-1 days from upstream release.
- Available on Linux, macOS, and Windows.
- Any changes required to make the browser more privacy-respecting should not negatively impact user experience.
- Blocks third-party cookies by default.
- Supports [state partitioning](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) to mitigate cross-site tracking.[^1]

### В лучшем случае

Эти критерии представляют собой то, что мы хотели бы видеть от идеального проекта в этой категории. Наши рекомендации могут не соответствовать всем или нескольким из этих критериев, но проекты, которые им соответствуют, расположены выше остальных.

- Includes built-in content blocking functionality.
- Supports cookie compartmentalization (à la [Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers)).
- Supports Progressive Web Apps.  
  PWAs enable you to install certain websites as if they were native apps on your computer. This can have advantages over installing Electron-based apps, because you benefit from your browser's regular security updates.
- Does not include add-on functionality (bloatware) that does not impact user privacy.
- Does not collect telemetry by default.
- Provides open-source sync server implementation.
- Defaults to a [private search engine](search-engines.md).

### Extension Criteria

- Must not replicate built-in browser or OS functionality.
- Must directly impact user privacy, i.e. must not simply provide information.

[^1]: Brave's implementation is detailed at [Brave Privacy Updates: Partitioning network-state for privacy](https://brave.com/privacy-updates/14-partitioning-network-state/).

---
title: "Tor 網絡"
icon: simple/torproject
description: 使用 Tor 網絡來保護您的網際網路瀏覽免受窺探， Tor 網絡是一個規避審查的安全網路。
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

**Tor** 網絡是一組由志願者操作的伺服器，可讓您免費連線，並改善您的隱私權和安全性。 個人和組織還可以通過 Tor 網絡與“.onion 隱藏服務”分享資訊，而不會損害他們的隱私。 很難阻止和追蹤 Tor 流量，因此它是一種有效的審查規避工具。

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

Tor 的工作原理是通過志願者運營的服務器來引導您的網際網路路徑，而不是直接連接到您試圖訪問的網站。 這樣可以混淆流量來源，所連接的伺服器都無法看到流量來去的完整路徑，也意味著即使您連接的伺服器無法破壞您的匿名性。

[詳細的 Tor 總覽  :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## 正在連接到Tor

有多種方式可以從您的設備連上  Tor 網絡，最常用的是 ** Tor 瀏覽器**，這是 Firefox 的一個分支，專為桌面電腦和 Android 的匿名瀏覽而設計。 除了下面列出的應用程序外，還有專門設計用於連接到 Tor 網絡的操作系統，例如 [Qubes OS 作業系統](desktop.md#qubes-os) [Whonix](desktop.md#whonix)，它們提供比標準 Tor 瀏覽器更高的安全性和保護。

### Tor Browser

!!! recommendation

    ! [Tor 瀏覽器標誌] (assets/img/browsers/tor.svg) {align = right}
    
    * * Tor 瀏覽器* *需要匿名的好選擇，為您提供 Tor 網絡和橋接的存取權限，它包含預設設置和擴展其自動配置安全級別有： *標準* 、 *更安全*和*最安全*三種。
    
    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android] (https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows] (https://www.torproject.org/download/)
        - [:simple-apple: macOS] (https://www.torproject.org/download/)
        - [:simple-linux: Linux] (https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD] (https://www.freshports.org/security/tor)

!!! 危險

    您應該* *永遠不要* *在Tor瀏覽器上安裝任何其他擴充功能，或編輯「關於：配置」設定，包括我們為Firefox建議的設定。 瀏覽器擴充套件和非標準設置會使您在 Tor 網絡上突顯出來，從而使您的瀏覽器更容易變成 [fingerprint]（ https://support.torproject.org/glossary/browser-fingerprinting ）。

Tor 瀏覽器旨在防止指紋識別----根據您的瀏覽器配置識別您。 因此，您 **不應** 修改瀏覽器超出預設 [安全級別](https://tb-manual.torproject.org/security-settings/)。

### Orbot

!!! recommendation

    ! [Orbot標誌] (assets/img/self-contained-networks/orbot.svg) {align = right}
    
    * * Orbot * *是一款免費的Tor VPN ，適用於智慧型手機，可讓裝置上的任何應用程式流量通過 Tor 網絡。
    
    [:octicons-home-16: Homepage](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentation}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store] (https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub] (https://github.com/guardianproject/orbot/releases)

為了抵抗流量分析攻擊，請考慮在 :material-menu: → **設置** → **連接**中啟用 *隔離目標地址* 。 在連接不同網域名時即使用不同的 Tor 迴路（不同的中繼和出口節點）。

!!! 提示“ Android 使用訣竅”

    Orbot 可以代理個別應用程式，如果它們有支援 SOCKS 或 HTTP 代理。 它也能使用 [VpnService]（ https://developer.android.com/reference/android/net/VpnService ）代理您的所有網路連接，其 VPN killswitch 設置在   :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.。
    
    Guardian Project 的[F-Droid repository] (https://guardianproject.info/fdroid)和[Google Play] (https://play.google.com/store/apps/details?id=org.torproject.android)上Orbot 往往不是最新版，因此請考慮直接從 [GitHub repository] (https://github.com/guardianproject/orbot/releases) 下載。
    
    所有版本都使用同一個簽名，因此它們應該相互兼容。

## 中繼和橋接

### Snowflake

!!! recommendation

    ! [Snowflake logo] (assets/img/browsers/snowflake.svg#only-light) {align = right}
    ! [Snowflake logo] (assets/img/browsers/snowflake-dark.svg#only-dark) {align = right}
    
    * * Snowflake * *允許您在瀏覽器中操作「Snowflake proxy」，將網路頻寛捐給 Tor 專案。
    
    被審查的人可以使用 Snowflake 代理來連接 Tor 網絡。 Snowflake 是貢獻 Tor 網絡的好方法，即便您沒有運行 Tor 中繼或橋接的技術知識。
    
    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-firefoxbrowser: Firefox] (https://addons.mozilla.org/zh-CN/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome] (https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web] (https://snowflake.torproject.org/embed "保持此頁面開啟成為Snowflake代理")

??? 提示: Embedded Snowflake

    您可以在瀏覽器中啟用 Snowflake ，只需按下下方開關，即可= =保持此頁面開啟= =。 您還可以安裝 Snowflake 瀏覽器擴充元件，當開啟瀏覽器時它會一直執行，但添加第三方擴充元件可能會增加遭攻擊面。
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>如果沒有顯示嵌入，請確保您沒有封鎖來自`torproject.org`的第三方框架。 或者，請造訪[此頁面] (https://snowflake.torproject.org/embed.html)。</small>

Snowflake 無法加強隱私，也不會在您的個人瀏覽器中連接 Tor網絡。 但如果您的網際網路連接沒有被審查的情形，請考慮使用它，幫助受審查網路中的人們能有更好的隱私。 無需擔心人們通過您的代理訪問哪些網站----他們的可見瀏覽 IP 地址將與其 Tor 出口節點相匹配，而不是您的 IP 地址。

運行 Snowflake 代理風險很低，甚至低於運行 Tor 中繼或橋接器，而這些中繼器或橋接器已經不算是特別高風險的工作。 但是，它通過您的網路進行代理流量，在某些方面可能會產生影響，特別是您的網路頻寬有限制的話。 在運行代理之前，要確保已清楚了解[ Snowflake 運作方式](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) 。

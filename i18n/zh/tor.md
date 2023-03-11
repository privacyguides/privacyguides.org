---
title: "桌面端浏览器"
icon: simple/torproject
description: 使用Tor网络保护您的互联网浏览免受窥探， Tor网络是一个规避审查的安全网络。
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

**Tor** 网络是一组由志愿者操作的服务器，允许您免费连接以提高您的互联网的隐私和安全。 个人和组织也可以通过Tor网络与".onion隐藏服务"分享信息，而不损害其隐私。 由于Tor流量难以阻止和跟踪，因此Tor是一种有效的审查规避工具。

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

Tor的工作原理是通过这些志愿者操作的服务器路由您的互联网流量，而不是直接连接到您试图访问的网站。 这会混淆流量的来源，并且连接路径中的任何服务器都无法看到流量来自和流向的完整路径，这意味着即使您用于连接的服务器也无法打破您的匿名性。

[详细的Tor概述 :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## 连接到Tor

有多种方法可以从您的设备连接到Tor网络，最常用的是 **Tor浏览器**，这是Firefox的一个分支，专为桌面计算机和Android的匿名浏览而设计。 除了下面列出的应用程序，还有专门设计用于连接到Tor网络的操作系统，例如 [Whonix](desktop.md#whonix) on [Qubes OS](desktop.md#qubes-os)，它提供了比标准Tor浏览器更高的安全性和保护。

### Tor浏览器

!!! recommendation

    ! [Tor浏览器徽标] (assets/img/browsers/tor.svg) {align = right}
    
    * * Tor浏览器* *是您需要匿名时的选择，它为您提供了对Tor网络和网桥的访问权限，并且它包括默认安全的默认设置和扩展： *标准* ， *更安全*和*最安全*。
    
    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! 危险

    You should **never** install any additional extensions on Tor Browser or edit `about:config` settings, including the ones we suggest for Firefox. Browser extensions and non-standard settings make you stand out from others on the Tor network, thus making your browser easier to [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

Tor浏览器旨在防止指纹识别，或根据您的浏览器配置识别您。 Therefore, it is imperative that you do **not** modify the browser beyond the default [security levels](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** is a free Tor VPN for smartphones which routes traffic from any app on your device through the Tor network.
    
    [:octicons-home-16: Homepage](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentation}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

For resistance against traffic analysis attacks, consider enabling *Isolate Destination Address* in :material-menu: → **Settings** → **Connectivity**. This will use a completely different Tor Circuit (different middle relay and exit nodes) for every domain you connect to.

!!! tip "Tips for Android"

    Orbot can proxy individual apps if they support SOCKS or HTTP proxying. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.
    
    Orbot is often outdated on the Guardian Project's [F-Droid repository](https://guardianproject.info/fdroid) and [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), so consider downloading directly from the [GitHub repository](https://github.com/guardianproject/orbot/releases) instead.
    
    All versions are signed using the same signature so they should be compatible with each other.

## Relays and Bridges

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser.
    
    People who are censored can use Snowflake proxies to connect to the Tor network. Snowflake is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.
    
    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Embedded Snowflake"

    You can enable Snowflake in your browser by clicking the switch below and ==leaving this page open==. You can also install Snowflake as a browser extension to have it always run while your browser is open, however adding third-party extensions can increase your attack surface.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>If the embed does not appear for you, ensure you are not blocking the third-party frame from `torproject.org`. Alternatively, visit [this page](https://snowflake.torproject.org/embed.html).</small>

Snowflake does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even moreso than running a Tor relay or bridge which are already not particularly risky endeavours. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

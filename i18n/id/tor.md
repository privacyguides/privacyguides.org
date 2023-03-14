---
title: "Jaringan Tor"
icon: simple/torproject
description: Lindungi penjelajahan internet Anda dari pengintaian dengan menggunakan jaringan Tor, sebuah jaringan aman yang menghindari sensor.
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

Jaringan **Tor** adalah sekelompok server yang dioperasikan secara sukarela yang memungkinkan Anda terhubung secara gratis dan meningkatkan privasi dan keamanan Anda di Internet. Individuals and organizations can also share information over the Tor network with ".onion hidden services" without compromising their privacy. Karena lalu lintas Tor sulit diblokir dan dilacak, Tor merupakan alat pengelabuan sensor yang efektif.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

Tor bekerja dengan merutekan lalu lintas internet Anda melalui server yang dioperasikan secara sukarela, alih-alih membuat koneksi langsung ke situs yang Anda coba kunjungi. Hal ini mengaburkan dari mana lalu lintas berasal, dan tidak ada server di jalur koneksi yang dapat melihat jalur penuh dari mana lalu lintas berasal dan pergi, yang berarti bahkan server yang Anda gunakan untuk terhubung tidak dapat merusak anonimitas Anda.

[Detailed Tor Overview :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## Menghubungkan ke Tor

There are a variety of ways to connect to the Tor network from your device, the most commonly used being the **Tor Browser**, a fork of Firefox designed for anonymous browsing for desktop computers and Android. In addition to the apps listed below, there are also operating systems designed specifically to connect to the Tor network such as [Whonix](desktop.md#whonix) on [Qubes OS](desktop.md#qubes-os), which provide even greater security and protections than the standard Tor Browser.

### Peramban Tor

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }
    
    **Tor Browser** is the choice if you need anonymity, as it provides you with access to the Tor network and bridges, and it includes default settings and extensions that are automatically configured by the default security levels: *Standard*, *Safer* and *Safest*.
    
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

!!! bahaya

    Anda sebaiknya **jangan pernah** memasang ekstensi tambahan apa pun pada Tor Browser atau mengedit pengaturan `about:config`, termasuk yang kami sarankan untuk Firefox. Ekstensi browser dan pengaturan non-standar membuat Anda menonjol dari orang lain di jaringan Tor, sehingga membuat peramban Anda lebih mudah untuk [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

The Tor Browser is designed to prevent fingerprinting, or identifying you based on your browser configuration. Therefore, it is imperative that you do **not** modify the browser beyond the default [security levels](https://tb-manual.torproject.org/security-settings/).

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

!!! tip "Tips untuk Android"

    Orbot dapat memproksi aplikasi individual jika aplikasi tersebut mendukung proksi SOCKS atau HTTP. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.
    
    Orbot is often outdated on the Guardian Project's [F-Droid repository](https://guardianproject.info/fdroid) and [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), so consider downloading directly from the [GitHub repository](https://github.com/guardianproject/orbot/releases) instead.
    
    All versions are signed using the same signature so they should be compatible with each other.

## Relays and Bridges

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser.
    
    Orang-orang yang disensor bisa menggunakan proksi Snowflake untuk menyambung ke jaringan Tor. Snowflake adalah cara yang bagus untuk berkontribusi pada jaringan bahkan jika Anda tidak memiliki pengetahuan teknis untuk menjalankan relai atau jembatan Tor.
    
    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Embedded Snowflake"

    Anda dapat mengaktifkan Snowflake di browser Anda dengan mengklik tombol di bawah ini dan ==membiarkan halaman ini terbuka==. You can also install Snowflake as a browser extension to have it always run while your browser is open, however adding third-party extensions can increase your attack surface.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Jika sematan tidak muncul untuk Anda, pastikan Anda tidak memblokir bingkai pihak ketiga dari `torproject.org`. Atau, kunjungi [halaman ini](https://snowflake.torproject.org/embed.html).</small>

Snowflake tidak meningkatkan privasi Anda dengan cara apa pun, juga tidak digunakan untuk terhubung ke jaringan Tor dalam browser pribadi Anda. Namun, jika koneksi internet Anda tidak disensor, Anda sebaiknya mempertimbangkan untuk menjalankannya untuk membantu orang-orang di jaringan yang disensor mencapai privasi yang lebih baik. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Menjalankan proxy Snowflake berisiko rendah, bahkan lebih rendah daripada menjalankan Tor relay atau bridge yang sudah tidak terlalu berisiko. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

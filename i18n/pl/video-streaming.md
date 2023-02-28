---
title: "Strumieniowanie filmów"
icon: material/video-wireless
---

Podstawowym zagrożeniem związanym z korzystaniem z platformy do strumieniowania filmów jest to, że Twoje nawyki dotyczące strumieniowania oraz listy subskrypcyjne mogą zostać wykorzystane do profilowania Ciebie. Warto połączyć te narzędzia z [VPN](vpn.md) lub [Tor](https://www.torproject.org/), aby utrudnić profilowanie.

## Klienty

!!! rekomendacja

    ![FreeTube logo](assets/img/video-streaming/freetube.svg){ align=right }
    
    **FreeTube** to bezpłatna i otwarta aplikacja komputerowa dla [YouTube](https://youtube.com). Podczas korzystania z FreeTube, Twoja lista subskrypcji i listy odtwarzania są zapisywane lokalnie na Twoim urządzeniu. FreeTube domyślnie blokuje wszystkie reklamy na YouTube.
    
    **The LBRY desktop client** helps you stream videos from the LBRY network and stores your subscription list in your own LBRY wallet.
    
    [:octicons-home-16: Strona WWW](https://freetubeapp.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://freetubeapp.io/privacy.php){ .card-link title="Polityka prywatności" }
    [:octicons-info-16:](https://docs.freetubeapp.io/){ .card-link title=Dokumentacja}
    [:octicons-code-16:](https://github.com/FreeTubeApp/FreeTube){ .card-link title="Kod źródłowy" }
    [:octicons-heart-16:](https://liberapay.com/FreeTube){ .card-link title=Darowizna }
    
    ??? do pobrania
    
        - [:fontawesome-brands-windows: Windows](https://freetubeapp.io/#download)
        - [:fontawesome-brands-apple: macOS](https://freetubeapp.io/#download)
        - [:fontawesome-brands-linux: Linux](https://freetubeapp.io/#download)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/io.freetubeapp.FreeTube)

!!! note

    Only the **LBRY desktop client** is recommended, as the [Odysee](https://odysee.com) website and the LBRY clients in F-Droid, Play Store, and the App Store have mandatory synchronization and telemetry.

!!! warning

    While watching and hosting videos, your IP address is visible to the LBRY network. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

We recommend **against** synchronizing your wallet with LBRY Inc., as synchronizing encrypted wallets is not supported yet. If you synchronize your wallet with LBRY Inc., you have to trust them to not look at your subscription list, [LBC](https://lbry.com/faq/earn-credits) funds, or take control of your channel.

You can disable *Save hosting data to help the LBRY network* option in :gear: **Settings** → **Advanced Settings**, to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must not require a centralized account to view videos.
    - Decentralized authentication, such as via a mobile wallet's private key is acceptable.

--8<-- "includes/abbreviations.pl.txt"

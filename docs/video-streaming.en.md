---
title: "Video Streaming"
icon: material/video-wireless
---
The primary threat when using a video streaming platform is that your streaming habits and subscription lists could be used to profile you. You should combine these tools with a [VPN](/vpn) or [Tor](https://www.torproject.org/) to make it harder to profile your usage.

## Clients

### FreeTube

!!! Warning

    When using Freetube, your IP address is still known to YouTube, [Invidious](https://instances.invidious.io) and the SponsorBlock instances that you use. Consider using a [VPN](/vpn) or [Tor](https://www.torproject.org) if your [threat model](threat-modeling.md) requires hiding your IP address.

!!! recommendation

    ![FreeTube logo](/assets/img/video-streaming/freetube.svg){ align=right }

    **FreeTube** is a free and open source desktop application for [YouTube](https://youtube.com). When using FreeTube, your subscription list and playlists are saved locally on your device.

    FreeTube also features [SponsorBlock](https://sponsor.ajay.app) to help you skip sponsored advertisements. All YouTube advertisements are also blocked by default.

    [Visit freetubeapp.io](https://freetubeapp.io){ .md-button .md-button--primary } [Privacy Policy](https://freetubeapp.io/privacy.php){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://freetubeapp.io/#download)
    - [:fontawesome-brands-apple: macOS](https://freetubeapp.io/#download)
    - [:fontawesome-brands-linux: Linux](https://freetubeapp.io/#download)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/io.freetubeapp.FreeTube)
    - [:fontawesome-brands-github: Source](https://github.com/FreeTubeApp/FreeTube/)

### LBRY

!!! note

    Only the **LBRY desktop client** is recommended. The [Odysee](https://odysee.com) website and the LBRY clients in F-Droid, Play Store, and the AppStore have mandatory synchronization and telemetry.

!!! recommendation

    ![LBRY logo](/assets/img/video-streaming/lbry.svg){ align=right }

    **The LBRY network** is a decentralized video sharing network. It uses a [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-like network to store the video content, and a [blockchain](https://wikipedia.org/wiki/Blockchain) to store the indexes for those videos. The main benefit of this design is censorship resistance.

    **The LBRY desktop client** helps you stream videos from the LBRY network and stores your subscription list in your own LBRY wallet.

    [Visit lbry.com](https://lbry.com){ .md-button .md-button--primary } [Privacy Policy](https://lbry.com/privacypolicy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://lbry.com/get)
    - [:fontawesome-brands-apple: macOS](https://lbry.com/osx)
    - [:fontawesome-brands-linux: Linux](https://lbry.com/linux)
    - [:fontawesome-brands-github: Source](https://github.com/lbryio)

!!! warning

    While watching and hosting videos, your IP address is visible to the LBRY network. Consider using a [VPN](/vpn) or [Tor](https://www.torproject.org) if your [threat model](/threat-modeling) requires hiding your IP address.

We recommend **against** synchronizing your wallet with LBRY Inc., as synchronizing encrypted wallets is not supported yet. If you synchronize your wallet with LBRY Inc., you have to trust them to not look at your subscription list, [LBC](https://lbry.com/faq/earn-credits) funds, or take control of your channel.

You can  disable *Save hosting data to help the LBRY network* option (⚙️ Settings → Advanced Settings) to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

### NewPipe

!!! recommendation

    ![Newpipe logo](/assets/img//video-streaming/newpipe.svg){ align=right }

    **NewPipe** is a free and open source Android application for [YouTube](https://youtube.com), [SoundCloud](https://soundcloud.com), [media.ccc.de](https://media.ccc.de), [FramaTube](https://framatube.org), and [Bandcamp](https://bandcamp.com).

    Your subscription list and playlists are saved locally on your Android device.

    [Visit newpipe.net](https://newpipe.net){ .md-button .md-button--primary } [Privacy Policy](https://newpipe.net/legal/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-android: F-Droid repo](https://newpipe.net/FAQ/tutorials/install-add-fdroid-repo)
    - [:fontawesome-brands-github: Source](https://github.com/TeamNewPipe/NewPipe)

!!! note

    NewPipe is available on the main [F-Droid](https://www.f-droid.org)'s repository. We recommend that you use NewPipe's own [F-Droid repository](https://newpipe.net/FAQ/tutorials/install-add-fdroid-repo) instead to get faster updates.

### NewPipe x SponsorBlock

!!! recommendation

    ![NewPipe x SponsorBlock logo](/assets/img/video-streaming/newpipe.svg){ align=right }

    **NewPipe x SponsorBlock** is a fork of [NewPipe](https://newpipe.net) with [SponsorBlock](https://sponsor.ajay.app) integrated to help you skip sponsored advertisements.
    It also has some experimental settings such as the ability to use the built-in player for local playback, an option to force fullscreen on landscape mode, and an option to disable error reporting prompts.

    [Visit github.com](https://github.com/polymorphicshade/NewPipe){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-android: F-Droid repo](https://apt.izzysoft.de/fdroid/index/apk/org.polymorphicshade.newpipe)
    - [:fontawesome-brands-github: Source](https://github.com/polymorphicshade/NewPipe)

This fork is not endorsed by or affiliated with the upstream project. The NewPipe team has [rejected](https://github.com/TeamNewPipe/NewPipe/pull/3205) integration with SponsorBlock and thus this fork is created to provide this functionality.

## Web-based Frontends

### Invidious

!!! warning

    Invidious does not proxy the video stream through its server by default. Videos watched through Invidious will still make direct connections to Google's servers (googlevideo.com); however, some instances support video proxying. This can be enabled by adding `&local=true` to the URL.

!!! recommendation

    ![Invidious logo](/assets/img/video-streaming/invidious.svg#only-light){ align=right }
    ![Invidious logo](/assets/img/video-streaming/invidious-dark.svg#only-dark){ align=right }

    **Invidious** is a free and open source front end for YouTube that is also self-hostable. There are list of [public instances](https://instances.invidious.io). Some instances have [Tor](https://www.torproject.org) onion services support.

    [Visit invidious.io](https://invidious.io){ .md-button .md-button--primary } [Privacy Policy](){ .md-button }

    **Downloads**
    - [:fontawesome-solid-earth-americas: Instances](https://instances.invidious.io)
    - [:fontawesome-brands-github: Source](https://github.com/iv-org/invidious)

!!! tip

    Invidious is useful if you want to disable JavaScript in your browser, such as [Tor Browser](https://www.torproject.org/) on the Safest security setting. It does not provide privacy by itself and we don’t recommend logging into any accounts.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Invidious, as other peoples' usage will be linked to your hosting.

When you are using an Invidious instance, be sure to go read the Privacy Policy of that specific instance. Invidious instances can be modified by their owners and therefore may not reflect their associated privacy policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII (Personally Identifiable Information).

### Piped

!!! recommendation

    ![Piped logo](/assets/img/video-streaming/piped.svg){ align=right }

    **Piped** is a free and open source front end for YouTube that is also self-hostable. Alternative instances can be selected from "Preferences".

    Piped requires JavaScript in order to function.

    [Visit piped.kavin.rocks](https://piped.kavin.rocks/){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-github: Source](https://github.com/TeamPiped/Piped)

!!! tip

    Piped is useful if you want to use [SponsorBlock](https://sponsor.ajay.app) without installing an extension or to access age-restricted content without an account. It does not provide privacy by itself and we don’t recommend logging into any accounts.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Piped, as other peoples' usage will be linked to your hosting.

When you are using a Piped instance, be sure to go read the Privacy Policy of that specific instance. Piped instances can be modified by their owners and therefore may not reflect their associated privacy policy.

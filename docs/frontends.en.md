---
title: "Frontends"
icon: material/flip-to-front
---

Sometimes services will try to force you to sign up for an account by blocking access to content with annoying popups. They might also break without JavaScript enabled. These frontends can allow you to get around these restrictions.

## LBRY

### Librarian

!!! recommendation

    ![Librarian logo](assets/img/frontends/librarian.svg#only-light){ align=right }
    ![Librarian logo](assets/img/frontends/librarian-dark.svg#only-dark){ align=right }

    **Librarian** is a free and open-source frontend for [Odysee](https://odysee.com/) (LBRY) that is also self-hostable.
    
    There are a number of public instances, with some instances having [Tor](https://www.torproject.org) onion services support.

    [:octicons-repo-16: Repository](https://codeberg.org/librarian/librarian){ .md-button .md-button--primary }
    [:octicons-server-16:](https://librarian.codeberg.page/){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://codeberg.org/librarian/librarian/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://codeberg.org/librarian/librarian){ .card-link title="Source Code" }

!!! warning

    Librarian does not proxy video streams by default. Videos watched through Librarian will still make direct connections to Odysee's servers (e.g. `odycdn.com`); however, some instances may enable proxying which would be detailed in the instance's privacy policy.

!!! tip

    Librarian is useful if you want watch LBRY content on mobile without mandatory telemetry and if you want to disable JavaScript in your browser, as is the case with [Tor Browser](https://www.torproject.org/) on the Safest security level.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Librarian, as other peoples' usage will be linked to your hosting.

When you are using a Librarian instance, make sure to read the privacy policy of that specific instance. Librarian instances can be modified by their owners and therefore may not reflect the default policy. Librarian instances feature a "privacy nutrition label" to provide an overview of their policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII.

## Twitter

### Nitter

!!! recommendation

    ![Nitter logo](assets/img/frontends/nitter.svg){ align=right }

    **Nitter** is a free and open-source frontend for [Twitter](https://twitter.com) that is also self-hostable.

    There are a number of public instances, with some instances having [Tor](https://www.torproject.org) onion services support.

    [:octicons-repo-16: Repository](https://github.com/zedeus/nitter){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/zedeus/nitter/wiki/Instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/zedeus/nitter/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/zedeus/nitter){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/zedeus/nitter#nitter){ .card-link title=Contribute }

!!! tip

    Nitter is useful if you want to browser Twitter content without having to log in and if you want to disable JavaScript in your browser, as is the case with [Tor Browser](https://www.torproject.org/) on the Safest security level. It also allows you to [create RSS feeds for Twitter](news-aggregators.md#twitter).

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Nitter, as other peoples' usage will be linked to your hosting.

When you are using a Nitter instance, make sure to read the privacy policy of that specific instance. Nitter instances can be modified by their owners and therefore may not reflect the default policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII.

## TikTok

### ProxiTok

!!! recommendation

    ![ProxiTok logo](assets/img/frontends/proxitok.svg){ align=right }

    **ProxiTok** is an open source frontend to the [TikTok](https://www.tiktok.com) website that is also self-hostable.

    There are a number of public instances, with some instances having [Tor](https://www.torproject.org) onion services support.

    [:octicons-repo-16: Repository](https://github.com/pablouser1/ProxiTok){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/pablouser1/ProxiTok/wiki/Public-instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/pablouser1/ProxiTok/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pablouser1/ProxiTok){ .card-link title="Source Code" }

!!! tip

    ProxiTok is useful if you want to disable JavaScript in your browser, such as [Tor Browser](https://www.torproject.org/) on the Safest security level.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting ProxiTok, as other peoples' usage will be linked to your hosting.

When you are using a ProxiTok instance, make sure to read the privacy policy of that specific instance. ProxiTok instances can be modified by their owners and therefore may not reflect their associated privacy policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII.

## YouTube

### FreeTube

!!! recommendation

    ![FreeTube logo](assets/img/frontends/freetube.svg){ align=right }

    **FreeTube** is a free and open-source desktop application for [YouTube](https://youtube.com). When using FreeTube, your subscription list and playlists are saved locally on your device.

    By default, FreeTube blocks all YouTube advertisements. In addition, FreeTube optionally integrates with [SponsorBlock](https://sponsor.ajay.app) to help you skip sponsored video segments.

    [:octicons-home-16: Homepage](https://freetubeapp.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://freetubeapp.io/privacy.php){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.freetubeapp.io/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/FreeTubeApp/FreeTube){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/FreeTube){ .card-link title=Contribute }

    ??? downloads

        - [:simple-windows11: Windows](https://freetubeapp.io/#download)
        - [:simple-apple: macOS](https://freetubeapp.io/#download)
        - [:simple-linux: Linux](https://freetubeapp.io/#download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/io.freetubeapp.FreeTube)

!!! Warning

    When using FreeTube, your IP address may still be known to YouTube, [Invidious](https://instances.invidious.io) or [SponsorBlock](https://sponsor.ajay.app/) depending on your configuration. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

### Yattee

!!! recommendation

    ![Yattee logo](assets/img/frontends/yattee.svg){ align=right }

    **Yattee** is a free and open-source privacy oriented video player for iOS, tvOS and macOS for [YouTube](https://youtube.com). When using Yattee, your subscription list are saved locally on your device.

    By default, Yattee blocks all YouTube advertisements. In addition, Yattee optionally integrates with [SponsorBlock](https://sponsor.ajay.app) to help you skip sponsored video segments.

    [:octicons-home-16: Homepage](https://github.com/yattee/yattee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://r.yattee.stream/docs/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/yattee/yattee/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/yattee/yattee){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/yattee/yattee/wiki/Donations){ .card-link title=Contribute }

    ??? downloads

        - [:simple-apple: App Store](https://apps.apple.com/us/app/yattee/id1595136629)
        - [:simple-github: GitHub](https://github.com/yattee/yattee/releases)

Due to App Store restrictions, you'll need to take a few [extra steps](https://gonzoknows.com/posts/Yattee/) before you can use Yattee.

!!! Warning

    When using Yattee, your IP address may still be known to YouTube, [Invidious](https://instances.invidious.io), [Piped](https://github.com/TeamPiped/Piped/wiki/Instances) or [SponsorBlock](https://sponsor.ajay.app/) depending on your configuration. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

### NewPipe (Android)

!!! recommendation annotate

    ![Newpipe logo](assets/img/frontends/newpipe.svg){ align=right }

    **NewPipe** is a free and open-source Android application for [YouTube](https://youtube.com), [SoundCloud](https://soundcloud.com), [media.ccc.de](https://media.ccc.de), [Bandcamp](https://bandcamp.com), and [PeerTube](https://joinpeertube.org/) (1).

    Your subscription list and playlists are saved locally on your Android device.

    [:octicons-home-16: Homepage](https://newpipe.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://newpipe.net/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://teamnewpipe.github.io/documentation/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/TeamNewPipe/NewPipe){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://newpipe.net/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-github: GitHub](https://github.com/TeamNewPipe/NewPipe/releases)

1. The default instance is [FramaTube](https://framatube.org/), however more can be added via **Settings** → **Content** → **PeerTube instances**

!!! Warning

    When using NewPipe, your IP address will be visible to the video providers used. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

### Invidious

!!! recommendation

    ![Invidious logo](assets/img/frontends/invidious.svg#only-light){ align=right }
    ![Invidious logo](assets/img/frontends/invidious-dark.svg#only-dark){ align=right }

    **Invidious** is a free and open-source frontend for [YouTube](https://youtube.com) that is also self-hostable.

    There are a number of public instances, with some instances having [Tor](https://www.torproject.org) onion services support.

    [:octicons-home-16: Homepage](https://invidious.io){ .md-button .md-button--primary }
    [:octicons-server-16:](https://instances.invidious.io){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://docs.invidious.io/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/iv-org/invidious){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://invidious.io/donate/){ .card-link title=Contribute }

!!! warning

    Invidious does not proxy video streams by default. Videos watched through Invidious will still make direct connections to Google's servers (e.g. `googlevideo.com`); however, some instances support video proxying—simply enable *Proxy videos* within the instances' settings or add `&local=true` to the URL.

!!! tip

    Invidious is useful if you want to disable JavaScript in your browser, such as [Tor Browser](https://www.torproject.org/) on the Safest security level. It does not provide privacy by itself, and we don’t recommend logging into any accounts.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Invidious, as other peoples' usage will be linked to your hosting.

When you are using an Invidious instance, make sure to read the privacy policy of that specific instance. Invidious instances can be modified by their owners and therefore may not reflect their associated privacy policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII.

### Piped

!!! recommendation

    ![Piped logo](assets/img/frontends/piped.svg){ align=right }

    **Piped** is a free and open-source frontend for [YouTube](https://youtube.com) that is also self-hostable.

    Piped requires JavaScript in order to function and there are a number of public instances.

    [:octicons-repo-16: Repository](https://github.com/TeamPiped/Piped){ .md-button .md-button--primary }
    [:octicons-server-16:](https://piped.kavin.rocks/preferences#ddlInstanceSelection){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://piped-docs.kavin.rocks/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/TeamPiped/Piped){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/TeamPiped/Piped#donations){ .card-link title=Contribute }

!!! tip

    Piped is useful if you want to use [SponsorBlock](https://sponsor.ajay.app) without installing an extension or to access age-restricted content without an account. It does not provide privacy by itself, and we don’t recommend logging into any accounts.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting Piped, as other peoples' usage will be linked to your hosting.

When you are using a Piped instance, make sure to read the privacy policy of that specific instance. Piped instances can be modified by their owners and therefore may not reflect their associated privacy policy.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

Recommended frontends...

- Must be open-source.
- Must be self-hostable.
- Must provide all basic website functionality available to anonymous users.

We only consider frontends for websites which are...

- Not normally accessible without JavaScript.

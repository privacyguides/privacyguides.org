---
title: "视频串流"
icon: 资料/视频-无线
description: These networks allow you to stream internet content without building an advertising profile based on your interests.
---

使用视频流媒体平台时的主要威胁是，你的流媒体习惯和订阅名单可能被用来对你进行分析。 你应该将这些工具与 [VPN](vpn.md) 或 [Tor](https://www.torproject.org/) 结合起来，以使你的使用情况更难被分析。

## 客户端

!!! recommendation

    ![FreeTube logo](assets/img/video-streaming/freetube.svg){ align=right }
    
    **FreeTube** 是一个自由且开源的 [YouTube](https://youtube.com)桌面应用程序。 当你使用FreeTube时，订阅列表和播放列表都会被保存在设备本地。 默认情况下，FreeTube阻止所有YouTube广告。
    
    此外，FreeTube还可以与 [SponsorBlock](https://sponsor.ajay.app)集成，以帮助你跳过推广的视频片段。
    
    [:octicons-home-16: Homepage](https://freetubeapp.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://freetubeapp.io/privacy.php){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.freetubeapp.io/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/FreeTubeApp/FreeTube){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/FreeTube){ .card-link title=Contribute }
    
    ??? 下载
    
        - [:fontawesome-brands-windows: Windows](https://freetubeapp.io/#download)
        - [:fontawesome-brands-apple: macOS](https://freetubeapp.io/#download)
        - [:fontawesome-brands-linux: Linux](https://freetubeapp.io/#download)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/io.freetubeapp.FreeTube)

!!! note

    Only the **LBRY desktop client** is recommended, as the [Odysee](https://odysee.com) website and the LBRY clients in F-Droid, Play Store, and the App Store have mandatory synchronization and telemetry.

!!! 推荐

    ![LBRY logo](assets/img/video-streaming/lbry.svg){ align=right }
    
    **The LBRY network** 是一个分布式视频分享网络。 它使用一个类似 [BitTorrent](https://wikipedia.org/wiki/BitTorrent)的网络来存储视频内容，并使用一个 [blockchain](https://wikipedia.org/wiki/Blockchain)来存储这些视频的索引。

We recommend **against** synchronizing your wallet with LBRY Inc., as synchronizing encrypted wallets is not supported yet. 备注

You can disable *Save hosting data to help the LBRY network* option in :gear: **Settings** → **Advanced Settings**, to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must not require a centralized account to view videos.
    - Decentralized authentication, such as via a mobile wallet's private key is acceptable.

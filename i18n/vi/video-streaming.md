---
title: "Video Streaming"
icon: material/video-wireless
---

The primary threat when using a video streaming platform is that your streaming habits and subscription lists could be used to profile you. You should combine these tools with a [VPN](vpn.md) or [Tor](https://www.torproject.org/) to make it harder to profile your usage.

## LBRY

!!! khuyến nghị

    ![LBRY logo](assets/img/video-streaming/lbry.svg){ align=right }
    
    **The LBRY network** is a decentralized video sharing network. It uses a [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-like network to store the video content, and a [blockchain](https://wikipedia.org/wiki/Blockchain) to store the indexes for those videos. The main benefit of this design is censorship resistance.
    
    **The LBRY desktop client** helps you stream videos from the LBRY network and stores your subscription list in your own LBRY wallet.
    
    [Homepage](https://freetubeapp.io){ .md-button .md-button--primary } [Chính Sách Bảo Mật](https://freetubeapp.io/privacy.php){ .md-button }
    
    ??? tải xuống
    
        - [:fontawesome-brands-windows: Windows](https://freetubeapp.io/#download)
        - [:fontawesome-brands-apple: macOS](https://freetubeapp.io/#download)
        - [:fontawesome-brands-linux: Linux](https://freetubeapp.io/#download)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/io.freetubeapp.FreeTube)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/FreeTubeApp/FreeTube/)

!!! note

    Only the **LBRY desktop client** is recommended, as the [Odysee](https://odysee.com) website and the LBRY clients in F-Droid, Play Store, and the App Store have mandatory synchronization and telemetry.

!!! warning

    While watching and hosting videos, your IP address is visible to the LBRY network. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

We recommend **against** synchronizing your wallet with LBRY Inc., as synchronizing encrypted wallets is not supported yet. If you synchronize your wallet with LBRY Inc., you have to trust them to not look at your subscription list, [LBC](https://lbry.com/faq/earn-credits) funds, or take control of your channel.

You can disable *Save hosting data to help the LBRY network* option in :gear: **Settings** → **Advanced Settings**, to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! cảnh báo
    PrivateBin sử dụng JavaScript để xử lý mã hóa, vì vậy bạn phải tin tưởng nhà cung cấp ở mức độ họ không đưa bất kỳ JavaScript độc hại nào vào để lấy khóa cá nhân của bạn.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** là một pastebin trực tuyến mã nguồn mở, tối giản, nơi máy chủ không có kiến ​​thức về dữ liệu đã dán. Dữ liệu được mã hóa/giải mã trong trình duyệt bằng 256-bit AES. tải xuống
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/dani-garcia/vaultwarden)

- Must not require a centralized account to view videos.
    - Decentralized authentication, such as via a mobile wallet's private key is acceptable.

--8<-- "includes/abbreviations.vi.txt"

---
title: "Transmissão de vídeo"
icon: material/video-wireless
---

A principal ameaça ao usar uma plataforma de streaming de vídeo é que os seus hábitos de streaming e listas de assinaturas podem ser usados para traçar o seu perfil. Você deve combinar estas ferramentas com um [VPN](/vpn) ou [Tor](https://www.torproject.org/) para tornar mais difícil o perfil do seu uso.

## Clientes

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Ao usar o Freetube, seu endereço IP ainda é conhecido pelo YouTube, [Invidious](https://instances.invidious.io) e as instâncias SponsorBlock que você usa. It uses a [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-like network to store the video content, and a [blockchain](https://wikipedia.org/wiki/Blockchain) to store the indexes for those videos. The main benefit of this design is censorship resistance.
    
    **The LBRY desktop client** helps you stream videos from the LBRY network and stores your subscription list in your own LBRY wallet.
    
    [:octicons-home-16: Homepage](https://lbry.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://lbry.com/privacypolicy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://lbry.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! note

    Only the **LBRY desktop client** is recommended, as the [Odysee](https://odysee.com) website and the LBRY clients in F-Droid, Play Store, and the App Store have mandatory synchronization and telemetry.

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    While watching and hosting videos, your IP address is visible to the LBRY network. Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org) if your [threat model](basics/threat-modeling.md) requires hiding your IP address.

We recommend **against** synchronizing your wallet with LBRY Inc., as synchronizing encrypted wallets is not supported yet. If you synchronize your wallet with LBRY Inc., you have to trust them to not look at your subscription list, [LBC](https://lbry.com/faq/earn-credits) funds, or take control of your channel.

You can disable *Save hosting data to help the LBRY network* option in :gear: **Settings** → **Advanced Settings**, to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

- Must not require a centralized account to view videos.
    - Decentralized authentication, such as via a mobile wallet's private key is acceptable.

--8<-- "includes/abbreviations.pt.txt"

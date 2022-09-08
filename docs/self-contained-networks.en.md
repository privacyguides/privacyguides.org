---
title: "Self-Contained Networks"
icon: material/security-network
---
These networks are designed to keep your traffic anonymous.

## Freenet

!!! recommendation

    ![Freenet logo](assets/img/self-contained-networks/freenet.svg){ align=right }

    **Freenet** is a peer-to-peer platform for censorship-resistant communication. It uses a decentralized distributed data store to keep and deliver information, and has a suite of free software for publishing and communicating on the Web without fear of censorship. Both Freenet and some of its associated tools were originally designed by Ian Clarke, who defined Freenet's goal as providing freedom of speech on the Internet with strong anonymity protection.

    [:octicons-home-16: Homepage](https://freenetproject.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://freenetproject.org/pages/documentation.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/freenet/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freenetproject.org/pages/donate.html){ .card-link title=Contribute }

    ??? downloads

        - [:simple-windows11: Windows](https://freenetproject.org/pages/download.html#windows)
        - [:simple-apple: macOS](https://freenetproject.org/pages/download.html#os-x)
        - [:simple-linux: Linux](https://freenetproject.org/pages/download.html#gnulinux-posix)
        - [:simple-freebsd: FreeBSD](https://freenetproject.org/pages/download.html#gnulinux-posix)
        - [:simple-openbsd: OpenBSD](https://freenetproject.org/pages/download.html#gnulinux-posix)
        - [:simple-netbsd: NetBSD](https://freenetproject.org/pages/download.html#gnulinux-posix)

## Invisible Internet Project

!!! recommendation

    ![I2P logo](assets/img/self-contained-networks/i2p.svg#only-light){ align=right }
    ![I2P logo](assets/img/self-contained-networks/i2p-dark.svg#only-dark){ align=right }

    **I2P** is a computer network layer that allows applications to send messages to each other pseudonymously and securely. Uses include anonymous Web surfing, chatting, blogging, and file transfers. The software that implements this layer is called an I2P router and a computer running I2P is called an I2P node. The software is free and open-source and is published under multiple licenses.

    [:octicons-home-16: Homepage](https://geti2p.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://geti2p.net/en/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://geti2p.net/en/get-involved/guides/new-developers#getting-the-i2p-code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://geti2p.net/en/get-involved){ .card-link title=Contribute }

    ??? downloads

        - [:simple-windows11: Windows](https://geti2p.net/en/download#windows)
        - [:simple-apple: macOS](https://geti2p.net/en/download#mac)
        - [:simple-linux: Linux](https://geti2p.net/en/download#unix)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/i2p)
        - [:simple-openbsd: OpenBSD](https://openports.se/net/i2pd)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/wip/i2pd)
        - [:simple-android: Android](https://geti2p.net/en/download#android)
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.i2p.android)
        - [:simple-fdroid: F-Droid](https://f-droid.org/app/net.i2p.android.router)

## Tor

!!! recommendation

    ![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

    The **Tor** network is a group of volunteer-operated servers that allows people to improve their privacy and security on the Internet. You use the Tor network by connecting through a series of virtual tunnels rather than making a direct connection to the site you're trying to visit, thus allowing both organizations and individuals to share information over public networks without compromising their privacy. Tor is an effective censorship circumvention tool.

    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torproject:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title=Onion }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)
        - [:simple-openbsd: OpenBSD](https://openports.se/net/tor)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/net/tor)
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-fdroid: F-Droid](https://support.torproject.org/tormobile/tormobile-7/)
        - [:simple-android: Android](https://www.torproject.org/download/#android)

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
        - [:simple-fdroid: F-Droid](https://guardianproject.info/fdroid)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)

For resistance against traffic analysis attacks, consider enabling *Isolate Destination Address* in :material-menu: → **Settings** → **Connectivity**. This will use a completely different Tor Circuit (different middle relay and exit nodes) for every domain you connect to.

!!! tip "Tips for Android"

    Orbot can proxy individual apps if they support SOCKS or HTTP proxying. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.

    Orbot is often outdated on the Guardian Project's [F-Droid repository](https://guardianproject.info/fdroid) and [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), so consider downloading directly from the [GitHub repository](https://github.com/guardianproject/orbot) instead.

    All versions are signed using the same signature so they should be compatible with each other.

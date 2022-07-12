---
title: "File Sharing and Sync"
icon: material/share-variant
---
Discover how to privately share your files between your devices, with your friends and family, or anonymously online.

## File Sharing

### Magic Wormhole

!!! recommendation

    ![Magic Wormhole logo](assets/img/file-sharing-sync/magic_wormhole.png){ align=right }

    **Magic Wormhole** is a package that provides a library and a command-line tool named wormhole, which makes it possible to get arbitrary-sized files and directories (or short pieces of text) from one computer to another.

    [:octicons-repo-16: Repository](https://github.com/magic-wormhole/magic-wormhole){ .md-button .md-button--primary }
    [:octicons-info-16:](https://magic-wormhole.readthedocs.io/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/magic-wormhole/magic-wormhole){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)
        - [:fontawesome-brands-apple: macOS](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#macos-os-x)
        - [:fontawesome-brands-linux: Linux](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)

### Send

!!! recommendation

    ![Send logo](assets/img/file-sharing-sync/firefox-send.svg){ align=right }

    **Send** is a fork from the discontinued project Firefox Send. It provides [end-to-end encryption](https://github.com/timvisee/send/blob/master/docs/encryption.md) with optional password. You can run your [own instance](https://github.com/timvisee/send-instances/#host-your-own-instance). The author of this fork also provides a [command-line client](https://github.com/timvisee/ffsend) to send files from your terminal to the Firefox Send instances.

    Many [instances](https://github.com/timvisee/send-instances) are available, with different characteristics, such as more storage or longer available time. 

    [:octicons-home-16: Homepage](https://send.vis.ee/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/timvisee/send){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Source Code" }

### Bitwarden Send

!!! recommendation

    ![Bitwarden logo](assets/img/file-sharing-sync/bitwarden.svg){ align=right }

    **Bitwarden Send** is a tool provided by the [Bitwarden](passwords.md#bitwarden) password manager. It allows you to share text and files securely with [end-to-end encryption](https://bitwarden.com/help/send-encryption). A [password](https://bitwarden.com/help/send-privacy/#send-passwords) can be required along with the send link. Bitwarden Send also features [automatic deletion](https://bitwarden.com/help/send-lifespan).

    You need the [Premium Plan](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) to be able to share files. Free plan only allows text sharing.

    [:octicons-home-16: Homepage](https://bitwarden.com/products/send/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://bitwarden.com/help/about-send/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bitwarden/clients){ .card-link title="Source Code" }

### OnionShare

!!! recommendation

    ![OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ align=right }

    **OnionShare** is an open-source tool that lets you securely and anonymously share a file of any size. It works by starting a web server accessible as a Tor onion service, with an unguessable URL that you can share with the recipients to download or send files.

    [:octicons-home-16: Homepage](https://onionshare.org){ .md-button .md-button--primary }
    [:pg-tor:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title=Onion }
    [:octicons-info-16:](https://docs.onionshare.org/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://onionshare.org/#download)
        - [:fontawesome-brands-apple: macOS](https://onionshare.org/#download)
        - [:fontawesome-brands-linux: Linux](https://onionshare.org/#download)

## FreedomBox

!!! recommendation

    ![FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ align=right }

    **FreedomBox** is an operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications that you might want to self-host.

    [:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Contribute }

## File Sync

### Syncthing

!!! recommendation

    ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }

    **Syncthing** is an open-source peer-to-peer continuous file synchronization utility. It is used to synchronize files between two or more devices over the local network or the internet. Syncthing does not use a centralized server; it uses the [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) to transfer data between devices. All data is encrypted using TLS.

    [:octicons-home-16: Homepage](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://syncthing.net/downloads/)
        - [:fontawesome-brands-apple: macOS](https://syncthing.net/downloads/)
        - [:fontawesome-brands-linux: Linux](https://syncthing.net/downloads/)
        - [:fontawesome-brands-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:pg-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:pg-netbsd: NetBSD](https://syncthing.net/downloads/)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.nutomic.syncthingandroid/)

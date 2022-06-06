---
title: "Cloud Storage"
icon: material/file-cloud
---
Many cloud storage providers require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by either putting you in control of your data or by implementing E2EE.

If these alternatives do not fit your needs, we suggest you look into [Encryption Software](encryption.md).

## Nextcloud

!!! recommendation

    ![Nextcloud logo](assets/img/cloud/nextcloud.svg){ align=right }

    **Nextcloud** is a suite of free and open-source client-server software for creating your own file hosting services on a private server you control. It also comes with experimental E2EE.

    [:octicons-home-16: Homepage](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://nextcloud.com/install/#install-clients)
        - [:fontawesome-brands-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:fontawesome-brands-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)
        - [:pg-openbsd: OpenBSD](https://openports.se/www/nextcloud)
        - [:pg-netbsd: NetBSD](https://pkgsrc.se/www/php-nextcloud)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.nextcloud.client)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1125420102)

We recommend checking if your Nextcloud provider supports E2EE, otherwise you have to trust the provider to not look at your files.

When self-hosting Nextcloud, you should also enable E2EE to protect against your hosting provider snooping on your data.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }

    **Proton Drive** is an E2EE general file storage service by the popular encrypted email provider [Proton Mail](https://proton.me/mail).

    [:octicons-home-16: Homepage](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Source Code" }

Proton Drive is currently in beta and only is only available through a web client.

When using a web client, you are placing trust in the server to send you proper JavaScript code to derive the decryption key and authentication token locally in your browser. A compromised server can send you malicious JavaScript code to steal your master password and decrypt your data. If this does not fit your [threat model](basics/threat-modeling.md), consider using an alternative.

## Cryptee

!!! recommendation

    ![Cryptee logo](./assets/img/cloud/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/cloud/cryptee-dark.svg#only-dark){ align=right }

    **Cryptee** is a web-based, encrypted, secure photo storage service and documents editor.

    [:octicons-home-16: Homepage](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Source Code" }

## Tahoe-LAFS

!!! note

    Due to the complexity of the system and the amount of nodes needed to set it up, Tahoe-LAFS is only recommended for seasoned system administrators.

!!! recommendation

    ![Tahoe-LAFS logo](./assets/img/cloud/tahoe-lafs.svg#only-light){ align=right }
    ![Tahoe-LAFS logo](./assets/img/cloud/tahoe-lafs-dark.svg#only-dark){ align=right }

    **Tahoe-LAFS** is a free, open, and decentralized cloud storage system. It distributes your data across multiple servers. Even if some of the servers fail or are taken over by an attacker, the entire file store continues to function correctly, preserving your privacy and security. The servers used as storage pools do not have access to your data.

    [:octicons-home-16: Homepage](https://www.tahoe-lafs.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://tahoe-lafs.readthedocs.io/en/latest/){ .card-link title=Documentation}
    [:octicons-code-16:](https://www.tahoe-lafs.org/trac/tahoe-lafs/browser){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://tahoe-lafs.readthedocs.io/en/latest/donations.html){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://tahoe-lafs.readthedocs.io/en/latest/Installation/install-tahoe.html#microsoft-windows)
        - [:fontawesome-brands-apple: macOS](https://tahoe-lafs.readthedocs.io/en/latest/Installation/install-tahoe.html#linux-bsd-or-macos)
        - [:fontawesome-brands-linux: Linux](https://tahoe-lafs.readthedocs.io/en/latest/Installation/install-tahoe.html#linux-bsd-or-macos)
        - [:pg-netbsd: NetBSD](https://tahoe-lafs.readthedocs.io/en/latest/Installation/install-tahoe.html#linux-bsd-or-macos)

--8<-- "includes/abbreviations.en.md"

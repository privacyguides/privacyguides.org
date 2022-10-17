---
title: "Cloud Storage"
icon: material/file-cloud
---
Many cloud storage providers require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by either putting you in control of your data or by implementing E2EE.

If these alternatives do not fit your needs, we suggest you look into [Encryption Software](encryption.md).

## Cryptee

!!! recommendation

    ![Cryptee logo](./assets/img/cloud/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/cloud/cryptee-dark.svg#only-dark){ align=right }

    **Cryptee** is a web-based E2EE data storage service. It primarily focuses on photo and video storage as well document editing. Cryptee is a PWA, which means that it works seamlessly across all modern devices without requiring native apps for each respective platform.

    Cryptee offers 100MB of storage for free, with paid options if you need more. Sign-up doesn't require an e-mail or other personally identifiable information.

    [:octicons-home-16: Homepage](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Source Code" }

    ??? downloads
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

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

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)
        - [:simple-openbsd: OpenBSD](https://openports.se/www/nextcloud)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/www/php-nextcloud)

We recommend checking if your Nextcloud provider supports E2EE, otherwise you have to trust the provider to not look at your files.

When self-hosting, you should also enable E2EE to protect against your hosting provider snooping on your data.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }

    **Proton Drive** is an E2EE general file storage service by the popular encrypted email provider [Proton Mail](https://proton.me/mail).

    [:octicons-home-16: Homepage](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)

Proton Drive is currently only available through a web client and an Android app.

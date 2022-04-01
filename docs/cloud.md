---
title: Cloud Storage
---
If you are currently using a Cloud Storage Service like Dropbox, Google Drive, Microsoft OneDrive or Apple iCloud, you are putting complete trust in your service provider to not look at your files.

Consider reducing the need to trust your provider, by using an alternative below that supports [end-to-end encryption (E2EE)](https://wikipedia.org/wiki/End-to-end_encryption).

### Nextcloud
!!! recommendation

    ![Nextcloud logo](/assets/img/cloud/nextcloud.svg){ align=right }

    **Nextcloud** is a suite of free and open-source client-server software for creating your own file hosting services on a private server you control. It also comes with experimental end-to-end encryption (E2EE).

    We recommend checking if your Nextcloud provider supports E2EE, otherwise you have to trust the provider to not look at your files.

    When self hosting Nextcloud, you should also remember to enable E2EE to protect against your hosting provider from snooping on your data.

    [Visit nextcloud.com](https://nextcloud.com){ .md-button .md-button--primary } [Privacy Policy](https://nextcloud.com/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-apple: macOS](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-linux: Linux](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)
    - [:pg-openbsd: OpenBSD](https://openports.se/www/nextcloud)
    - [:pg-netbsd: NetBSD](https://pkgsrc.se/www/php-nextcloud)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.nextcloud.client)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1125420102)
    - [:fontawesome-brands-github: Source](https://github.com/nextcloud)

### Proton Drive
!!! recommendation

    ![Proton Drive logo](/assets/img/cloud/protondrive.svg){ align=right }

    **Proton Drive** is an end-to-end encrypted (E2EE) general file storage service by the popular encrypted email provider [ProtonMail](https://protonmail.com).

    Proton Drive is currently in beta and only is only available through a web client.

    When using a web client, you are placing trust in the server to send you proper JavaScript code to derive the decryption key and authentication token locally in your browser. A compromised server can send you malicious JavaScript code to steal your master password and decrypt your data. If this does not fit your [threat model](/threat-modeling/), consider using an alternative.

    [Visit drive.protonmail.com](https://drive.protonmail.com){ .md-button .md-button--primary } [Privacy Policy](https://protonmail.com/privacy-policy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-github: Source](https://github.com/ProtonMail/WebClients)

### Cryptee
!!! recommendation

    ![Cryptee logo](./assets/img/cloud/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/cloud/cryptee-dark.svg#only-dark){ align=right }

    **Cryptee** is an encrypted, secure photo storage service, and an encrypted documents editor to write personal docs, notes, journals, store files & more.

    [Visit crypt.ee](https://crypt.ee){ .md-button .md-button--primary } [Privacy Policy](https://crypt.ee/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-github: Source](https://github.com/cryptee/web-client)

### Tahoe-LAFS (Advanced)
!!! recommendation

    ![Tahoe-LAFS logo](./assets/img/cloud/tahoe-lafs.svg#only-light){ align=right }
    ![Tahoe-LAFS logo](./assets/img/cloud/tahoe-lafs-dark.svg#only-dark){ align=right }

    **Tahoe-LAFS** is a free and open decentralized cloud storage system. It distributes your data across multiple servers. Even if some of the servers fail or are taken over by an attacker, the entire file store continues to function correctly, preserving your privacy and security. The servers used as storage pools do not have access to your data.

    Due to the complexity of the system and the amount of nodes needed to set it up, Tahoe-LAFS is only recommended for seasoned system administrators.

    [Visit tahoe-lafs.org](https://www.tahoe-lafs.org){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://github.com/tahoe-lafs/tahoe-lafs#via-pip)
    - [:fontawesome-brands-apple: macOS](https://github.com/tahoe-lafs/tahoe-lafs#via-pip)
    - [:fontawesome-brands-linux: Linux](https://github.com/tahoe-lafs/tahoe-lafs#using-os-packages)
    - [:pg-netbsd: NetBSD](https://pkgsrc.se/filesystems/tahoe-lafs)
    - [:fontawesome-brands-git: Source](https://www.tahoe-lafs.org/trac/tahoe-lafs/browser)

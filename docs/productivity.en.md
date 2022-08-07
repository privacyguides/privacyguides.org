---
title: "Productivity Tools"
icon: material/file-sign
---
Most online office suites do not support E2EE, meaning the cloud provider has access to everything you do. The privacy policy may legally protect your rights, but it does not provide technical access constraints.

## Office Suites

We recommend running a local Office suite. If you're using Microsoft Windows, we suggest Microsoft Office as it has support from [MDAG](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview) which prevents untrusted Word, PowerPoint and Excel files from accessing trusted resources. Application Guard opens untrusted files in an isolated [Hyper-V](https://en.wikipedia.org/wiki/Hyper-V)-enabled container. On macOS [iWork](https://www.apple.com/iwork) has [App Sandbox](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html).

For other platforms, consider below:

### LibreOffice

!!! recommendation

    ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ align=right }

    **LibreOffice** is a free and open-source office suite with extensive functionality.

    [:octicons-home-16: Homepage](https://www.libreoffice.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://documentation.libreoffice.org/en/english-documentation/){ .card-link title=Documentation}
    [:octicons-code-16:](https://www.libreoffice.org/about-us/source-code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.libreoffice.org/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:pg-flathub: Flatpak](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)
        - [:pg-openbsd: OpenBSD](https://openports.se/editors/libreoffice)
        - [:pg-netbsd: NetBSD](https://pkgsrc.se/misc/libreoffice)
        - [:fontawesome-brands-google-play: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:fontawesome-brands-app-store-ios: App Store](https://www.libreoffice.org/download/android-and-ios/)

### OnlyOffice

!!! recommendation

    ![OnlyOffice logo](assets/img/productivity/onlyoffice.svg){ align=right }

    **OnlyOffice** is a cloud-based free and open-source office suite with extensive functionality, including integration with Nextcloud.

    [:octicons-home-16: Homepage](https://www.onlyoffice.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://helpcenter.onlyoffice.com/userguides.aspx){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ONLYOFFICE){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-apple: macOS](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-linux: Linux](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/www/onlyoffice-documentserver/)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.onlyoffice.documents)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id944896972)

### CryptPad

!!! recommendation

    ![CryptPad logo](assets/img/productivity/cryptpad.svg){ align=right }

    **CryptPad** is a private-by-design alternative to popular office tools. All content on this web service is end-to-end encrypted and can be shared with other users easily.

    [:octicons-home-16: Homepage](https://cryptpad.fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptpad.fr/pad/#/2/pad/view/GcNjAWmK6YDB3EO2IipRZ0fUe89j43Ryqeb4fjkjehE/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.cryptpad.fr/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/cryptpad){ .card-link title=Contribute }

## Paste services

!!! warning

    Encrypted Pastebin websites like the ones recommended here use JavaScript to handle encryption, so you must trust the provider to the extent that they do not inject any malicious JavaScript to get your private key. Consider self-hosting to mitigate this threat.

### PrivateBin

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }

    **PrivateBin** is a minimalist, open-source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256-bit AES. It is the improved version of ZeroBin. There is a [list of instances](https://privatebin.info/directory/).

    [:octicons-home-16: Homepage](https://privatebin.info){ .md-button .md-button--primary }
    [:octicons-server-16:](https://privatebin.info/directory/){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/wiki/FAQ){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Source Code" }

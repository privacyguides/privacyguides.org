---
title: "Clientes de streaming de vídeo"
icon: material/file-sign
---

Most online office suites do not support E2EE, meaning the cloud provider has access to everything you do. The privacy policy may legally protect your rights, but it does not provide technical access constraints.

## Suítes de Escritório

### LibreOffice

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo do LibreOffice](/assets/img/productivity/libreoffice.svg){ align=right }
    
    **LibreOffice** é uma suite de escritório gratuita e de código aberto com amplas funcionalidades.
    
    [Visite libreoffice.org](https://www.libreoffice.org){ .md-button .md-button--primary } [Política de Privacidade](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.libreoffice.org/download/download/)
    - [:fontawesome-brands-apple: macOS](https://www.libreoffice.org/download/download/)
    - [:fontawesome-brands-linux: Linux](https://www.libreoffice.org/download/download/)
    - [:pg-flathub: Flatpak](https://www.libreoffice.org/download/download/)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)
    - [:pg-openbsd: OpenBSD](https://openports.se/editors/libreoffice)
    - [:pg-netbsd: NetBSD](https://pkgsrc.se/misc/libreoffice)
    - [:fontawesome-brands-google-play: Google Play](https://www.libreoffice.org/download/android-and-ios/)
    - [:fontawesome-brands-app-store-ios: App Store](https://www.libreoffice.org/download/android-and-ios/)
    - [:fontawesome-brands-git: Source](https://www.libreoffice.org/about-us/source-code) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! Isto permite-nos fornecer recomendações completamente objectivas.</strong> Desenvolvemos um conjunto claro de requisitos para qualquer provedor de VPN que deseje ser recomendado, incluindo criptografia forte, auditorias de segurança independentes, tecnologia moderna, e muito mais.

    ![OnlyOffice logo](/assets/img/productivity/onlyoffice.svg){ align=right }
    
    **OnlyOffice** é uma alternativa, é uma suite de escritório gratuita e de código aberto com uma extensa funcionalidade. [Visite apenasoffice.com](https://www.onlyoffice.com){ .md-button .md-button--primary } [Política de Privacidade](https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.onlyoffice.com/download-desktop.aspx?from=default)
    - [:fontawesome-brands-apple: macOS](https://www.onlyoffice.com/download-desktop.aspx?from=default)
    - [:fontawesome-brands-linux: Linux](https://www.libreoffice.org/download/download/)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/wwww/onlyoffice-documentserver/)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.onlyoffice.documents)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/onlyoffice-documents/id944896972)
    - [:fontawesome-brands-github: Source](https://github.com/ONLYOFFICE)

### OnlyOffice

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo Framadate](/assets/img/productivity/framadate.svg){ align=right }
    
    **Framadate** é um serviço online gratuito e de código aberto para planejar uma consulta ou tomar uma decisão de forma rápida e fácil. Não é necessário registo.
    
    [:octicons-home-16: Homepage](https://cryptpad.fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptpad.fr/pad/#/2/pad/view/GcNjAWmK6YDB3EO2IipRZ0fUe89j43Ryqeb4fjkjehE/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.cryptpad.fr/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/cryptpad){ .card-link title=Contribute }

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

In general, we define collaboration platforms as full-fledged suites which could reasonably act as a replacement to collaboration platforms like Google Drive.

- Open-source.
- Makes files accessible via WebDAV unless it is impossible due to E2EE.
- Has sync clients for Linux, macOS, and Windows.
- Supports document and spreadsheet editing.
- Supports real-time document collaboration.
- Supports exporting documents to standard document formats (e.g. ODF).

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should store files in a conventional filesystem.
- Should support TOTP or FIDO2 multi-factor authentication support, or Passkey logins.

## Planejamento

### PrivateBin

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ align=right }
    
    **LibreOffice** is a free and open-source office suite with extensive functionality.
    
    [:octicons-home-16: Homepage](https://www.libreoffice.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://documentation.libreoffice.org/en/english-documentation/){ .card-link title=Documentation}
    [:octicons-code-16:](https://www.libreoffice.org/about-us/source-code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.libreoffice.org/donate/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-appstore: App Store](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-windows11: Windows](https://www.libreoffice.org/download/download/)
        - [:simple-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:simple-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.libreoffice.LibreOffice)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)

### OnlyOffice

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![OnlyOffice logo](assets/img/productivity/onlyoffice.svg){ align=right }
    
    **OnlyOffice** is a cloud-based free and open-source office suite with extensive functionality, including integration with Nextcloud.
    
    [:octicons-home-16: Homepage](https://www.onlyoffice.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://helpcenter.onlyoffice.com/userguides.aspx){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ONLYOFFICE){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onlyoffice.documents)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id944896972)
        - [:simple-windows11: Windows](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-apple: macOS](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-linux: Linux](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.onlyoffice.desktopeditors)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/onlyoffice-documentserver/)

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

In general, we define office suites as applications which could reasonably act as a replacement for Microsoft Word for most needs.

- Must be cross-platform.
- Must be open-source software.
- Must function offline.
- Must support editing documents, spreadsheets, and slideshows.
- Must export files to standard document formats.

## Paste services

### PrivateBin

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** is a minimalist, open-source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256-bit AES. It is the improved version of ZeroBin. There is a [list of instances](https://privatebin.info/directory/).
    
    [:octicons-home-16: Homepage](https://privatebin.info){ .md-button .md-button--primary }
    [:octicons-server-16:](https://privatebin.info/directory/){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/wiki/FAQ){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Source Code" }

--8<-- "includes/abbreviations.pt.txt"

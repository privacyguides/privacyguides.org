---
title: "Produktivitetsverktyg"
icon: material/file-sign
description: Most online office suites do not support E2EE, meaning the cloud provider has access to everything you do.
---

Most online office suites do not support E2EE, meaning the cloud provider has access to everything you do. The privacy policy may legally protect your rights, but it does not provide technical access constraints.

## Collaboration Platforms

### Nextcloud

!!! recommendation

    ![Nextcloud-logotyp](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** är en svit med gratis klient-serverprogramvara med öppen källkod för att skapa egna filhostingtjänster på en privat server som du kontrollerar.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! fara

    Vi rekommenderar inte att du använder [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) för Nextcloud eftersom det kan leda till dataförluster; det är mycket experimentellt och inte av produktionskvalitet. For this reason, we don't recommend third-party Nextcloud providers.

### CryptPad

!!! recommendation

    ![CryptPad logo](assets/img/productivity/cryptpad.svg){ align=right }
    
    **CryptPad** is a private-by-design alternative to popular office tools. All content on this web service is end-to-end encrypted and can be shared with other users easily.
    
    [:octicons-home-16: Homepage](https://cryptpad.fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptpad.fr/pad/#/2/pad/view/GcNjAWmK6YDB3EO2IipRZ0fUe89j43Ryqeb4fjkjehE/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.cryptpad.fr/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/cryptpad){ .card-link title=Contribute }

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

In general, we define collaboration platforms as full-fledged suites which could reasonably act as a replacement to collaboration platforms like Google Drive.

- Open-source.
- Makes files accessible via WebDAV unless it is impossible due to E2EE.
- Has sync clients for Linux, macOS, and Windows.
- Supports document and spreadsheet editing.
- Supports real-time document collaboration.
- Supports exporting documents to standard document formats (e.g. ODF).

#### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Should store files in a conventional filesystem.
- Should support TOTP or FIDO2 multi-factor authentication support, or Passkey logins.

## Office Suites

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
    
        - [:simple-googleplay: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-appstore: App Store](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-windows11: Windows](https://www.libreoffice.org/download/download/)
        - [:simple-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:simple-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.libreoffice.LibreOffice)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)

### OnlyOffice

!!! recommendation

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

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

In general, we define office suites as applications which could reasonably act as a replacement for Microsoft Word for most needs.

- Måste vara plattformsoberoende.
- Måste vara programvara med öppen källkod.
- Must function offline.
- Must support editing documents, spreadsheets, and slideshows.
- Must export files to standard document formats.

## Paste services

### PrivateBin

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** is a minimalist, open-source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256-bit AES. It is the improved version of ZeroBin. There is a [list of instances](https://privatebin.info/directory/).
    
    [:octicons-home-16: Homepage](https://privatebin.info){ .md-button .md-button--primary }
    [:octicons-server-16:](https://privatebin.info/directory/){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/wiki/FAQ){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Source Code" }

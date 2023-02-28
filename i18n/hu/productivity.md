---
title: "Produktivitás Eszközök"
icon: material/file-sign
---

A legtöbb online irodai programcsomag nem támogatja az E2EE-t, ami azt jelenti, hogy a felhőszolgáltató hozzáfér mindenhez, amit csinálsz. Az adatvédelmi nyilatkozat törvényileg védheti a jogaidat, de nem biztosít technikai hozzáférési korlátokat.

## Kollaborációs Platformok

### Nextcloud

!!! recommendation

    ![Nextcloud logo](assets/img/cloud/nextcloud.svg){ align=right }
    
    A **Nextcloud** egy ingyenes és nyílt forráskódú kliens-szerver szoftvercsomag, amellyel saját fájltárhely-szolgáltatásokat hozhatsz létre egy privát általad ellenőrzött szerveren.
    
    [:octicons-home-16: Kezdőlap](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! danger

    Nem javasoljuk az [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) használatát a Nextcloudhoz, mivel adatvesztéshez vezethet; ez erősen kísérleti jellegű és nem gyártási minőségű. Emiatt nem ajánljuk a Nextcloud harmadik féltől származó szolgáltatóit.

### CryptPad

!!! recommendation

    ![CryptPad logo](assets/img/productivity/cryptpad.svg){ align=right }
    
    A **CryptPad** egy a népszerű irodai eszközök privátra tervezett alternatívája. A webes szolgáltatás minden tartalma végponttól végpontig titkosított, és könnyen megosztható más felhasználókkal.
    
    [:octicons-home-16: Honlat](https://cryptpad.fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptpad.fr/pad/#/2/pad/view/GcNjAWmK6YDB3EO2IipRZ0fUe89j43Ryqeb4fjkjehE/){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://docs.cryptpad.fr/){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://opencollective.com/cryptpad){ .card-link title=Közremőködés }

### Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** A [szabványos kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

Általános esetben az kollaborációs platformokat olyan teljes értékű csomagokként határozzuk meg, amelyek ésszerűen helyettesíthetik az olyan kollaborációs platformokat, mint a Google Drive.

- Nyílt forráskódú.
- WebDAV-on keresztül elérhetővé tesz fájlokat, kivéve, ha az E2EE miatt nem lehetséges.
- Szinkronizáló kliensekkel rendelkezik Linux, macOS és Windows rendszerekre.
- Támogat dokumentum- és táblázatkezelést.
- Támogat valós idejű dokumentum-kollaborációt.
- Támogatja a dokumentumok szabványos dokumentumformátumba (pl. ODF) történő exportálását.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Fájlokat egy hagyományos fájlrendszerben kell tárolnia.
- Támogatnia kell TOTP vagy FIDO2 többfaktoros hitelesítés használatát, vagy Passkey bejelentkezéseket.

## Irodai Programcsomagok

### LibreOffice

!!! recommendation

    ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ align=right }
    
    **A **LibreOffice** egy ingyenes és nyílt forráskódú irodai programcsomag széleskörű funkcionalitással.
    
    [:octicons-home-16: Kezdőlap](https://www.libreoffice.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://documentation.libreoffice.org/en/english-documentation/){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://www.libreoffice.org/about-us/source-code){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://www.libreoffice.org/donate/){ .card-link title=Közreműködés }
    
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
    
    Az **OnlyOffice** egy felhőalapú, ingyenes és nyílt forráskódú irodai programcsomag, amely széleskörű funkciókkal rendelkezik, beleértve a Nextclouddal való integrációt is.
    
    [:octicons-home-16: Kezdőlap](https://www.onlyoffice.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://helpcenter.onlyoffice.com/userguides.aspx){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/ONLYOFFICE){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onlyoffice.documents)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id944896972)
        - [:simple-windows11: Windows](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-apple: macOS](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-linux: Linux](https://www.onlyoffice.com/download-desktop.aspx)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.onlyoffice.desktopeditors)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/onlyoffice-documentserver/)

### Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** A [szabványos kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

Általános esetben az irodai programcsomagokat úgy határozzuk meg, mint olyan alkalmazásokat, amelyek a legtöbb igényt kielégítően helyettesíthetik a Microsoft Wordöt.

- Cross-platformnak kell lennie.
- Must be open-source software.
- Működnie kell offline.
- Támogatnia kell a dokumentumok, táblázatok és diavetítések szerkesztését.
- Fájlokat szabványos dokumentumformátumba kell exportálnia.

## Paste szolgáltatások

### PrivateBin

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **A **PrivateBin** egy minimalista, nyílt forráskódú online pastebin, ahol a szerver nem ismeri a pastelt adatokat. Az adatok titkosítása/dekódolása a böngészőben történik 256 bites AES használatával. Ez a ZeroBin továbbfejlesztett változata. Van egy [lista a példányokról](https://privatebin.info/directory/).
    
    [:octicons-home-16: Honlap](https://privatebin.info){ .md-button .md-button--primary }
    [:octicons-server-16:](https://privatebin.info/directory/){ .card-link title="Publikus Példányok"}
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/wiki/FAQ){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Forráskód" }

--8<-- "includes/abbreviations.hu.txt"

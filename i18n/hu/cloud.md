---
title: "Felhőtárhely"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Sok felhőalapú tárhelyszolgáltatónak elvárása a teljes bizalmad abban, hogy nem fogják megnézni a fájljaidat. The alternatives listed below eliminate the need for trust by implementing secure E2EE.

If these alternatives do not fit your needs, we suggest you look into using encryption software like [Cryptomator](encryption.md#cryptomator-cloud) with another cloud provider. Using Cryptomator in conjunction with **any** cloud provider (including these) may be a good idea to reduce the risk of encryption flaws in a provider's native clients.

??? question "A Nextcloud-ot keresed?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do [not recommend](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is a Swiss encrypted cloud storage provider from the popular encrypted email provider [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Honlap](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Adatvédelmi Tájékoztató" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

The Proton Drive web application has been independently audited by Securitum in [2021](https://proton.me/blog/security-audit-all-proton-apps), full details were not made available, but Securitum's letter of attestation states:

> Auditors identified two low-severity vulnerabilities. Additionally, five general recommendations were reported. At the same time, we confirm that no important security issues were identified during the pentest.

Proton Drive's brand new mobile clients have not yet been publicly audited by a third-party.

## Tresorit

!!! recommendation

    ![Tresorit logo](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** is a Hungarian encrypted cloud storage provider founded in 2011. Tresorit is owned by the Swiss Post, the national postal service of Switzerland.
    
    [:octicons-home-16: Homepage](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit has received a number of independent security audits:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] Compliance [Certification](https://www.certipedia.com/quality_marks/9108644476) by TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Penetration Testing by Computest
    - This review assessed the security of the Tresorit web client, Android app, Windows app, and associated infrastructure.
    - Computest discovered two vulnerabilities which have been resolved.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Penetration Testing by Ernst & Young.
    - This review analyzed the full source code of Tresorit and validated that the implementation matches the concepts described in Tresorit's [white paper](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf).
    - Ernst & Young additionally tested the web, mobile, and desktop clients: "Test results found no deviation from Tresorit’s data confidentiality claims."

They have also received the Digital Trust Label, a certification from the [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) which requires passing [35 criteria](https://digitaltrust-label.swiss/criteria/) related to security, privacy, and reliability.

## Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** Az [alap kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

### Minimális Követelmények

- Végponttól végpontig terjedő titkosítást kell érvényesítenie.
- Ingyenes csomagot vagy próbaidőszakot kell kínálnia a teszteléshez.
- Támogatnia kell TOTP vagy FIDO2 többlépcsős hitelesítés használatát, vagy Passkey bejelentkezéseket.
- Olyan webes felületet kell kínálnia, amely támogat alapvető fájlkezelési funkciókat.
- Lehetővé kell tennie az összes fájl/dokumentum egyszerű exportálását.
- Szabványos, felülvizsgált titkosítást kell használnia.

### Legjobb Esetben

A legjobb esetben alkalmazott követelményeink azt fejezik ki, hogy mit szeretnénk látni egy tökéletes projekttől ebben a kategóriában. Előfordulhat, hogy ajánlásaink nem tartalmazzák az összes ilyen funkciót, de azok, amelyek igen, magasabb helyen szerepelhetnek, mint mások ezen az oldalon.

- A klienseknek nyílt forráskódúaknak kell lenniük.
- A klienseket teljes egészükben független harmadik félnek kell felülvizsgálnia.
- Natív klienseket kell kínálnia Linux, Android, Windows, macOS és iOS rendszerekre.
    - Ezeknek a klienseknek integrálódniuk kell natív operációs rendszer eszközökkel, amik felhőtárhely szolgáltatóknak lettek létrehozva, például a Files alkalmazás integrációjával iOS-en, vagy a DocumentsProvider funkcióval Androidon.
- Támogatnia kell az egyszerű fájlmegosztást más felhasználókkal.
- Legalább alapvető fájlelőnézeti és szerkesztési funkciókat kell kínálnia a webes felületen.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 compliance relates to the company's [information security management system](https://en.wikipedia.org/wiki/Information_security_management) and covers the sales, development, maintenance and support of their cloud services.

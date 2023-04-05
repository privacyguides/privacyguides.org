---
title: "Molnlagring"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Många molnlagringsleverantörer kräver ditt fulla förtroende för att de inte kommer att titta på dina filer. The alternatives listed below eliminate the need for trust by implementing secure E2EE.

If these alternatives do not fit your needs, we suggest you look into using encryption software like [Cryptomator](encryption.md#cryptomator-cloud) with another cloud provider. Using Cryptomator in conjunction with **any** cloud provider (including these) may be a good idea to reduce the risk of encryption flaws in a provider's native clients.

??? fråga "Letar du efter Nextcloud?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do [not recommend](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is a Swiss encrypted cloud storage provider from the popular encrypted email provider [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
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

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

### Minimikrav

- Måste genomdriva end-to-end-kryptering.
- Måste erbjuda en gratis plan eller provperiod för testning.
- Måste stödja TOTP- eller FIDO2-multifaktorautentisering eller inloggning med lösenord.
- Måste erbjuda ett webbgränssnitt som stöder grundläggande filhanteringsfunktioner.
- Måste möjliggöra enkel export av alla filer/dokument.
- Måste använda standard, granskad kryptering.

### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Klienterna bör ha öppen källkod.
- Klienterna bör granskas i sin helhet av en oberoende tredje part.
- De bör erbjuda inhemska klienter för Linux, Android, Windows, macOS och iOS.
    - Dessa klienter bör integreras med operativsystemets verktyg för leverantörer av molnlagring, t. ex. integrering av Files-appen i iOS eller DocumentsProvider-funktionen i Android.
- Det bör vara enkelt att dela filer med andra användare.
- Bör erbjuda åtminstone grundläggande funktioner för förhandsgranskning och redigering av filer i webbgränssnittet.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 compliance relates to the company's [information security management system](https://en.wikipedia.org/wiki/Information_security_management) and covers the sales, development, maintenance and support of their cloud services.

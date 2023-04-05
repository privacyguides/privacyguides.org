---
title: "Cloud opslag"
icon: material/file-cloud
description: Veel aanbieders van cloud-opslag eisen jouw volledige vertrouwen dat zij niet in jouw bestanden zullen kijken. Dit zijn de privé alternatieven!
---

Veel aanbieders van cloud-opslag eisen jouw volledige vertrouwen dat zij niet in jouw bestanden zullen kijken. De onderstaande alternatieven elimineren de noodzaak van vertrouwen door veilige E2EE te implementeren.

Als deze alternatieven niet aan jouw behoeften voldoen, raden wij je aan te kijken naar het gebruik van encryptiesoftware zoals [Cryptomator](encryption.md#cryptomator-cloud) met een andere cloud provider. Het gebruik van Cryptomator in combinatie met **elke** cloud provider (inclusief deze) kan een goed idee zijn om het risico van versleutelingsfouten in de native clients van een provider te verminderen.

??? question "Op zoek naar Nextcloud?"

    Nextcloud is [nog steeds een aanbevolen tool](productivity.md) voor het zelf hosten van een bestandsbeheersuite, maar we bevelen momenteel geen opslagproviders van derden aan, omdat we de ingebouwde E2EE-functionaliteit van Nextcloud niet aanbevelen voor thuisgebruikers.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is een E2EE algemene bestandsopslagdienst van de populaire versleutelde e-mailprovider [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Homepage](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

De Proton Drive webapplicatie is onafhankelijk gecontroleerd door Securitum in [2021](https://proton.me/blog/security-audit-all-proton-apps), volledige details werden niet beschikbaar gesteld, maar in de verklaring van Securitum staat:

> De controleurs ontdekten twee zwakke plekken met een lage ernstgraad. Daarnaast werden vijf algemene aanbevelingen gedaan. Tegelijkertijd bevestigen wij dat tijdens de pentest geen belangrijke beveiligingsproblemen zijn vastgesteld.

De gloednieuwe mobiele klanten van Proton Drive zijn nog niet publiekelijk gecontroleerd door een derde partij.

## Tresorit

!!! recommendation

    Tresorit logo](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** is een Hongaarse aanbieder van versleutelde cloud-opslag, opgericht in 2011. Tresorit is eigendom van de Zwitserse Post, de nationale postdienst van Zwitserland.
    
    [:octicons-home-16: Homepage](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentatie}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit heeft een aantal onafhankelijke beveiligingsaudits ontvangen:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] Conformiteit [Certificering](https://www.certipedia.com/quality_marks/9108644476) door TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Penetratietesten door Computest
    - Bij deze evaluatie is de beveiliging van de Tresorit webclient, Android app, Windows app en bijbehorende infrastructuur beoordeeld.
    - Computest ontdekte twee kwetsbaarheden die zijn opgelost.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Penetratie testen door Ernst & Young.
    - Deze evaluatie analyseerde de volledige broncode van Tresorit en bevestigde dat de implementatie overeenkomt met de concepten die zijn beschreven in Tresorit's [white paper](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf).
    - Ernst & Young testte bovendien de web-, mobiele en desktopclients: "Testresultaten vonden geen afwijking van Tresorit's claims over de vertrouwelijkheid van gegevens."

Ze hebben ook het Digital Trust Label ontvangen, een certificering van het [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) waarvoor ze moeten voldoen aan [35 criteria](https://digitaltrust-label.swiss/criteria/) met betrekking tot veiligheid, privacy en betrouwbaarheid.

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je jezelf vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat je de juiste keuze maakt.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

### Minimale vereisten

- Moet end-to-end encryptie afdwingen.
- Moet een gratis plan of proefperiode aanbieden om te testen.
- Moet TOTP of FIDO2 multi-factor authenticatie ondersteunen, of Passkey-logins.
- Moet een webinterface bieden die basisfuncties voor bestandsbeheer ondersteunt.
- Moet gemakkelijke export van alle bestanden/documenten mogelijk maken.
- Gebruik standaard gecontroleerde versleuteling.

### Beste geval

Onze best-case criteria geven aan wat wij zouden willen zien van het perfecte project in deze categorie. Het is mogelijk dat onze aanbevelingen geen of niet alle functies bevatten, maar degene die dat wel doen kunnen hoger gerangschikt worden dan andere op deze pagina.

- Clients moeten open-source zijn.
- Clients moeten in hun geheel door een onafhankelijke derde partij worden gecontroleerd.
- Moet native clients aanbieden voor Linux, Android, Windows, macOS en iOS.
    - Deze clients moeten integreren met native OS tools voor cloud storage providers, zoals Files app integratie op iOS, of DocumentsProvider functionaliteit op Android.
- Moet het gemakkelijk delen van bestanden met andere gebruikers ondersteunen.
- Moet ten minste een basisfunctionaliteit voor het bekijken en bewerken van bestanden op de webinterface bieden.

[^1]: [De naleving van ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 heeft betrekking op het beheersysteem voor informatiebeveiliging van het bedrijf [](https://en.wikipedia.org/wiki/Information_security_management) en heeft betrekking op de verkoop, de ontwikkeling, het onderhoud en de ondersteuning van hun clouddiensten.

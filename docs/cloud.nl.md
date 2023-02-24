---
title: "Cloud opslag"
icon: material/file-cloud
---

Veel aanbieders van cloud-opslag eisen uw volledige vertrouwen dat zij niet in uw bestanden zullen kijken. De onderstaande alternatieven nemen de behoefte aan vertrouwen weg door u de controle over uw gegevens te geven of door E2EE te implementeren.

Als deze alternatieven niet aan uw behoeften voldoen, raden wij u aan te kijken naar [Encryptie Software](encryption.md).

??? question "Op zoek naar Nextcloud?"

    Nextcloud is [nog steeds een aanbevolen tool](productivity.md) voor het zelf hosten van een bestandsbeheersuite, maar we bevelen momenteel geen opslagproviders van derden aan, omdat we de ingebouwde E2EE-functionaliteit van Nextcloud niet aanbevelen voor thuisgebruikers.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is een E2EE algemene bestandsopslagdienst van de populaire versleutelde e-mailprovider [Proton Mail](https://proton.me/mail).
    
    [:octicons-home-16: Homepage](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

De mobiele clients van Proton Drive werden in december 2022 uitgebracht en zijn nog niet open-source. Proton heeft in het verleden zijn broncode releases uitgesteld tot na de eerste product releases, en [is van plan om](https://www.reddit.com/r/ProtonDrive/comments/zf14i8/comment/izdwmme/?utm_source=share&utm_medium=web2x&context=3) de broncode vrij te geven tegen eind 2023. Proton Drive desktop clients zijn nog in ontwikkeling.

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als u vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

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

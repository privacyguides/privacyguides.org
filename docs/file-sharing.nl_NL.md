---
title: "Delen en synchroniseren van bestanden"
icon: material/share-variant
---

Ontdek hoe je jouw bestanden privé kunt delen tussen jouw apparaten, met jouw vrienden en familie, of anoniem online.

## Bestanden Delen

### Send

!!! aanbeveling

    ![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** is een vork van Mozilla 's beëindigde Firefox Send-service waarmee je bestanden naar anderen kunt verzenden met een link. Bestanden worden op jouw apparaat versleuteld zodat ze niet door de server kunnen worden gelezen, en ze kunnen optioneel ook met een wachtwoord worden beveiligd. De maintainer van Send hosts een [openbare instantie](https://send.vis.ee/). Je kunt andere openbare instanties gebruiken, of je kunt Send zelf hosten.
    
    [:octicons-home-16: Homepage](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Bijdragen }

Send kan worden gebruikt via de webinterface of via de [ffsend](https://github.com/timvisee/ffsend) CLI. Als je vertrouwd bent met de commandline en vaak bestanden verstuurt, raden wij je aan de CLI-client te gebruiken om versleuteling op basis van JavaScript te vermijden. Je kunt de vlag `--host` opgeven om een specifieke server te gebruiken:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! aanbeveling

    OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** is een open-source tool waarmee je veilig en anoniem een bestand van elke grootte kunt delen. Het werkt door een webserver te starten die toegankelijk is als een Tor onion service, met een onleesbare URL die je met de ontvangers kunt delen om bestanden te downloaden of te verzenden.
    
    [:octicons-home-16: Homepage](https://onionshare.org){ .md-button .md-button--primary }
    [:pg-tor:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title=Onion }
    [:octicons-info-16:](https://docs.onionshare.org/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaard criteria](about/criteria.md) hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

- Mag geen gedecodeerde gegevens op een externe server opslaan.
- Moet open-source zijn.
- Moet clients hebben voor Linux, macOS en Windows; of een webinterface.

## FreedomBox

!!! recommendation

    FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** is een besturingssysteem ontworpen om te draaien op een [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). Het doel is om het gemakkelijk te maken om servertoepassingen op te zetten die je misschien zelf wilt hosten.
    
    [:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentatie}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Bijdrage leveren }

## Bestandssynchronisatie

### Nextcloud (client-server)

!!! recommendation

    Nextcloud logo](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** is een suite van gratis en open-source client-server software voor het creëren van jouw eigen bestandshosting diensten op een prive-server die je controleert.
    
    [:octicons-home-16: Homepage](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Bijdragen }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! danger

    Wij raden het gebruik van de [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) voor Nextcloud af, omdat dit kan leiden tot gegevensverlies; het is zeer experimenteel en niet van productiekwaliteit.

### Syncthing (P2P)

!!! recommendation

    Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** is een open-source peer-to-peer continue bestandssynchronisatie hulpprogramma. Het wordt gebruikt om bestanden te synchroniseren tussen twee of meer toestellen via het lokale netwerk of het internet. Syncthing gebruikt geen gecentraliseerde server; het gebruikt het [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) om gegevens tussen apparaten over te dragen. Alle gegevens worden versleuteld met behulp van TLS.
    
    [:octicons-home-16: Homepage](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Bijdrage leveren }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaard criteria](about/criteria.md) hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

#### Minimale vereisten

- Mag geen externe/cloudserver van derden vereisen.
- Moet open-source zijn.
- Moet clients hebben voor Linux, macOS en Windows; of een webinterface.

#### Beste geval

Onze best-case criteria geven aan wat wij zouden willen zien van het perfecte project in deze categorie. Het is mogelijk dat onze aanbevelingen geen of niet alle functies bevatten, maar degene die dat wel doen kunnen hoger gerangschikt worden dan andere op deze pagina.

- Heeft mobiele clients voor iOS en Android, die tenminste document previews ondersteunen.
- Ondersteunt back-up van foto's van iOS en Android, en ondersteunt optioneel synchronisatie van bestanden/mappen op Android.

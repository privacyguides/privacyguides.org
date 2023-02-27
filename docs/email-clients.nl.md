---
title: "E-mailcliënten"
icon: material/email-open
---

Onze aanbevelingslijst bevat e-mailcliënten die zowel [OpenPGP](encryption.md#openpgp) als sterke authenticatie ondersteunen, zoals [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). Met OAuth kunt u [Multi-Factor Authentication](basics/multi-factor-authentication.md) gebruiken en accountdiefstal voorkomen.

??? warning "E-mail biedt geen forward secrecy"

    Bij gebruik van end-to-end encryptie (E2EE) technologie zoals OpenPGP, zal e-mail nog steeds [enkele metadata](email.md#email-metadata-overzicht) bevatten die niet versleuteld zijn in de header van de e-mail.
    
    OpenPGP ondersteunt ook geen [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), wat betekent dat als uw of de geadresseerde's private sleutel ooit wordt gestolen, alle voorgaande berichten die ermee zijn versleuteld zullen worden blootgelegd: [How do I protect my private keys?](basics/email-security.md) Overweeg het gebruik van een medium dat forward secrecy biedt:
    
    [Real-time Communication](real-time-communication.md){ .md-button }

## Cross-Platform

### Thunderbird

!!! recommendation

    ![Thunderbird-logo](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** is een gratis, open-source, cross-platform email, nieuwsgroep, nieuwsfeed, en chat (XMPP, IRC, Twitter) client ontwikkeld door de Thunderbird gemeenschap, en voorheen door de Mozilla Foundation.
    
    [:octicons-home-16: Homepage](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=Documentatie}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### Aanbevolen configuratie

We raden aan om sommige van deze instellingen te wijzigen om Thunderbird een beetje meer privé te maken.

Deze opties zijn te vinden in :material-menu: → **Instellingen** → **Privacy & Beveiliging**.

##### Web Content

- [ ] Deselecteer  **Onthoud websites en links die ik heb bezocht**
- [ ] Deselecteer  **Accepteer cookies van sites**

##### Telemetrie

- [ ] Deselecteer  **Toestaan dat Thunderbird technische en interactiegegevens naar Mozilla stuurt**

#### Thunderbird-user.js (geavanceerd)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js), is een set van configuratie-opties die erop gericht is zoveel mogelijk van de web-browsing functies binnen Thunderbird uit te schakelen om de aanvals oppervlakte te verkleinen en de privacy te behouden. let op

## Platform specifiek

### Apple Mail (macOS)

!!! recommendation

    ![Apple Mail-logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** is opgenomen in macOS en kan worden uitgebreid met OpenPGP-ondersteuning met [GPG Suite](/encryption/#gpg-suite), waarmee de mogelijkheid wordt toegevoegd om versleutelde e-mail te versturen.
    
    [:octicons-home-16: Homepage](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentatie}

### Canary Mail (iOS)

!!! recommendation

    ![Canary Mail-logo](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** is een betaalde e-mailclient die is ontworpen om end-to-end versleuteling naadloos te laten verlopen met beveiligingsfuncties zoals een biometrische app-vergrendeling.
    
    [:octicons-home-16: Homepage](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentatie}
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! warning

    Canary Mail heeft pas onlangs een Windows- en Android-client uitgebracht, hoewel die volgens ons niet zo stabiel zijn als hun iOS- en Mac-tegenhangers.

Canary Mail is closed-source. We raden het aan omdat er maar weinig keuzes zijn voor e-mailclients op iOS die PGP E2EE ondersteunen.

### FairEmail (Android)

!!! recommendation

    ![FairEmail logo](assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** is een minimale, open-source e-mail app, die gebruik maakt van open standaarden (IMAP, SMTP, OpenPGP) met een laag data- en batterijverbruik.
    
    [:octicons-home-16: Homepage](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### Gnome evolutie (Gnome)

!!! recommendation

    ![Evolution logo](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution** is een applicatie voor het beheer van persoonlijke informatie die geïntegreerde mail-, agenda- en adresboekfuncties biedt. Evolution heeft uitgebreide [documentation](https://help.gnome.org/users/evolution/stable/) om u op weg te helpen.
    
    [:octicons-home-16: Homepage](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! recommendation

    ![K-9 Mail logo](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail** is een onafhankelijke mail-applicatie die zowel POP3 als IMAP mailboxen ondersteunt, maar alleen push mail voor IMAP ondersteunt.
    
    In de toekomst zal K-9 Mail de [officieel gemerkte](https://k9mail.app/2022/06/13/K-9-Mail-and-Thunderbird.html) Thunderbird client voor Android zijn.
    
    [:octicons-home-16: Homepage](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

!!! warning

    Bij het beantwoorden van iemand op een mailinglijst kan de optie "beantwoorden" ook de mailinglijst omvatten. Zie voor meer informatie [thundernest/k-9 #3738](https://github.com/thundernest/k-9/issues/3738).

### Kontact (KDE)

!!! recommendation

    ![Kontact logo](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** is een persoonlijke informatiemanager (PIM) applicatie van het [KDE](https://kde.org) project. Het biedt een mail client, adresboek, organizer en RSS client.
    
    [:octicons-home-16: Homepage](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Browser)

!!! recommendation

    ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** is een browser extensie die de uitwisseling van versleutelde e-mails mogelijk maakt volgens de OpenPGP encryptie standaard.
    
    [:octicons-home-16: Homepage](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Broncode}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Bijdragen" }
    
    ??? downloads "Downloaden"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! recommendation

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }
    
    **NeoMutt** is een open-source command line mail reader (of MUA) voor Linux en BSD. Het is een vork van [Mutt](https://en.wikipedia.org/wiki/Mutt_(email_client)) met toegevoegde mogelijkheden.
    
    NeoMutt is een tekst-gebaseerde client die een steile leercurve heeft. Het is echter zeer aanpasbaar.
    
    [:octicons-home-16: Homepage](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

### Minimum kwalificaties

- Apps ontwikkeld voor open-source besturingssystemen moeten open-source zijn.
- Mag geen telemetrie verzamelen, of een gemakkelijke manier hebben om alle telemetrie uit te schakelen.
- Moet OpenPGP-berichtversleuteling ondersteunen.

### Beste geval

Onze best-case criteria geven aan wat wij zouden willen zien van het perfecte project in deze categorie. Het is mogelijk dat onze aanbevelingen geen of niet alle functies bevatten, maar degene die dat wel doen kunnen hoger gerangschikt worden dan andere op deze pagina.

- Moet open-source zijn.
- Moet cross-platform zijn.
- Verzamelt standaard geen telemetrie.
- Moet OpenPGP native ondersteunen, dat wil zeggen zonder extensies.
- Moet ondersteuning bieden voor het lokaal opslaan van OpenPGP-versleutelde e-mails.

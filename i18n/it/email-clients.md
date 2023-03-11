---
title: "Condivisione di file"
icon: material/email-open
description: These email clients are privacy-respecting and support OpenPGP email encryption.
---

Il nostro elenco di raccomandazioni contiene client di posta elettronica che supportano sia [OpenPGP](encryption.md#openpgp) che l'autenticazione forte come [Open Authorization (OAuth)](https://it.wikipedia.org/wiki/OAuth). OAuth consente di utilizzare l'[autenticazione a più fattori](basics/multi-factor-authentication.md) e di prevenire il furto di account.

??? warning "Email does not provide forward secrecy"

    When using end-to-end encryption (E2EE) technology like OpenPGP, email will still have [some metadata](email.md#email-metadata-overview) that is not encrypted in the header of the email.
    
    OpenPGP also does not support [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed: [How do I protect my private keys?](basics/email-security.md) Consider using a medium that provides forward secrecy:
    
    [Real-time Communication](real-time-communication.md){ .md-button }

## Multipiattaforma

### Thunderbird

!!! recommendation

    ![Thunderbird logo](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** è un client di posta elettronica, newsgroup, news feed e chat (XMPP, IRC, Twitter) gratuito, open-source e multipiattaforma, sviluppato dalla comunità Thunderbird e precedentemente dalla Mozilla Foundation.
    
    [:octicons-home-16: Pagina principale](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=Documentazione}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### Firefox

Si consiglia di modificare alcune di queste impostazioni per rendere Thunderbird un po' più privato.

Queste opzioni si trovano in :material-menu: → **Impostazioni** → **Privacy e sicurezza**.

##### Web Content

- [ ] Uncheck  **Remember websites and links I've visited**
- [ ] Uncheck  **Accept cookies from sites**

##### Telemetria

- [ ] Uncheck  **Allow Thunderbird to send technical and interaction data to Mozilla**

#### Thunderbird-user.js (avanzato)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js), è un insieme di opzioni di configurazione che mira a disabilitare il maggior numero possibile di funzioni di navigazione web all'interno di Thunderbird, al fine di ridurre la superficie e mantenere la privacy. Alcune modifiche sono state prese dal [progetto Arkenfox](https://github.com/arkenfox/user.js).

## Specifiche alla piattaforma

### Apple Mail (macOS)

!!! recommendation

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** è incluso in macOS e può essere esteso per avere il supporto OpenPGP con [GPG Suite](encryption.md#gpg-suite), che aggiunge la possibilità di inviare e-mail crittografate.
    
    [:octicons-home-16: Pagina principale](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentazione}

### Canary Mail (iOS)

!!! recommendation

    ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** è un client di posta elettronica a pagamento progettato per rendere perfetta la crittografia end-to-end con funzioni di sicurezza come il blocco biometrico dell'app.
    
    [:octicons-home-16: Pagina principale](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentazione}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! warning "Avviso"

    Canary Mail ha rilasciato solo di recente un client per Windows e Android, anche se non crediamo che siano stabili come le loro controparti per iOS e Mac.

Canary Mail è closed-source. Lo consigliamo a causa della scarsa scelta di client di posta elettronica su iOS che supportano la E2EE PGP.

### FairEmail (Android)

!!! recommendation

    ![FairEmail logo](assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** è un'applicazione di posta elettronica minimale e open-source, che utilizza standard aperti (IMAP, SMTP, OpenPGP) con un basso consumo di dati e batteria.
    
    [:octicons-home-16: Pagina principale](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! recommendation

    ![Evolution logo](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution** è un'applicazione per la gestione delle informazioni personali che fornisce funzionalità integrate di posta, calendario e rubrica. Evolution dispone di un'ampia [documentazione](https://help.gnome.org/users/evolution/stable/) per aiutarti a iniziare.
    
    [:octicons-home-16: Pagina principale](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! recommendation

    ![K-9 Mail logo](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail** è un'applicazione di posta elettronica indipendente che supporta sia le caselle POP3 che IMAP, ma supporta solo la posta push per IMAP.
    
    In futuro, K-9 Mail sarà il client [ufficiale](https://k9mail.app/2022/06/13/K-9-Mail-and-Thunderbird.html) di Thunderbird per Android.
    
    [:octicons-home-16: Pagina principale](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

!!! warning "Avviso"

    ![Kontact logo](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** è un'applicazione di gestione delle informazioni personali (PIM, personal information manager) del progetto [KDE](https://kde.org). Offre un client di posta, una rubrica, un'agenda e un client RSS.

### Kontact (KDE)

!!! recommendation

    ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** è un'estensione del browser che consente di scambiare e-mail crittografate secondo lo standard di crittografia OpenPGP. [:octicons-home-16: Pagina principale](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Codice sorgente" }
    
    ???
    
    downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc) downloads
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Browser)

!!! recommendation

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }
    
    **NeoMutt** è un lettore di posta elettronica a riga di comando (o MUA) open-source per Linux e BSD.
    
    È un fork di [Mutt](https://it.wikipedia.org/wiki/Mutt) con funzioni aggiuntive. NeoMutt è un client basato sul testo che ha una curva di apprendimento molto ripida.

### NeoMutt (CLI)

!!! recommendation

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }
    
    **NeoMutt** is an open-source command line mail reader (or MUA) for Linux and BSD. It's a fork of [Mutt](https://en.wikipedia.org/wiki/Mutt_(email_client)) with added features.
    
    NeoMutt is a text-based client that has a steep learning curve. It is however, very customizable.
    
    [:octicons-home-16: Homepage](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

## CryptPad

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. recommendation

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** è un pastebin online minimalista e open-source in cui il server non ha alcuna conoscenza dei dati incollati. Infatti, vengono criptati/decriptati nel tuo browser utilizzando AES a 256 bit. downloads
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

### Minimum Qualifications

- Le applicazioni sviluppate per sistemi operativi open-source devono essere open-source.
- Must not collect telemetry, or have an easy way to disable all telemetry.
- Must support OpenPGP message encryption.

### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Should be open-source.
- Should be cross-platform.
- Should not collect any telemetry by default.
- Should support OpenPGP natively, i.e. without extensions.
- Should support storing OpenPGP encrypted emails locally.

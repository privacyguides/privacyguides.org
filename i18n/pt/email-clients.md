---
title: "Partilha de ficheiros"
icon: material/email-open
description: These email clients are privacy-respecting and support OpenPGP email encryption.
---

Nossa lista de recomendações contém clientes de e-mail que suportam tanto [OpenPGP](/encryption/#openpgp) e autenticação forte como [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). OAuth permite-lhe utilizar [Multi-Factor Authentication](/multi-factor-authentication) e prevenir o roubo de contas.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. warning "Email does not provide forward secrecy"

    When using end-to-end encryption (E2EE) technology like OpenPGP, email will still have [some metadata](email.md#email-metadata-overview) that is not encrypted in the header of the email.
    
    OpenPGP also does not support [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed: [How do I protect my private keys?](basics/email-security.md) Consider using a medium that provides forward secrecy:
    
    [Real-time Communication](real-time-communication.md){ .md-button }

## Cross-Platform

### Thunderbird

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logótipo Thunderbird](/assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** é um cliente gratuito, de código aberto, email multiplataforma, newsgroup, news feed, e chat (XMPP, IRC, Twitter) desenvolvido pela comunidade Thunderbird, e anteriormente pela Fundação Mozilla.
    
    [Visite thunderbird.net](https://www.thunderbird.net){ .md-button .md-button--primary } [Política de Privacidade](https://www.mozilla.org/privacy/thunderbird){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.thunderbird.net)
    - [:fontawesome-brands-apple: macOS](https://www.thunderbird.net)
    - [:fontawesome-brands-linux: Linux](https://www.thunderbird.net)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.Thunderbird)
    - [:fontawesome-brands-git: Source](https://hg.mozilla.org/comm-central) downloads
    
        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### Firefox

We recommend changing some of these settings to make Thunderbird a little more private.

Estas opções podem ser encontradas na página *Privacidade & Segurança* configurações ( ≡ → Configurações → Privacidade & Segurança).

##### Web Content

- [ ] Uncheck  **Remember websites and links I've visited**
- [ ] Uncheck  **Accept cookies from sites**

##### Telemetry

- [ ] Uncheck  **Allow Thunderbird to send technical and interaction data to Mozilla**

#### Thunderbird-user.js (advanced)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js), is a set of configurations options that aims to disable as many of the web-browsing features within Thunderbird as possible in order to reduce surface area and maintain privacy. Some of the changes are backported from the [Arkenfox project](https://github.com/arkenfox/user.js).

## Platform Specific

### Apple Mail (macOS)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** is included in macOS and can be extended to have OpenPGP support with [GPG Suite](encryption.md#gpg-suite), which adds the ability to send PGP-encrypted email.
    
    [:octicons-home-16: Homepage](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentation}

### Canary Mail (iOS)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** is a paid email client designed to make end-to-end encryption seamless with security features such as a biometric app lock.
    
    [:octicons-home-16: Homepage](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    Canary Mail only recently released a Windows and Android client, though we don't believe they are as stable as their iOS and Mac counterparts.

Canary Mail is closed-source. We recommend it due to the few choices there are for email clients on iOS that support PGP E2EE.

### FairEmail (Android)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo do Mailvelope](/assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** é uma extensão do navegador que permite a troca de e-mails criptografados seguindo o padrão de criptografia OpenPGP.
    
    [Visite mailvelope.com](https://www.mailvelope.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.mailvelope.com/en/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
    - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)
    - [:fontawesome-brands-github: Source](https://github.com/mailvelope/mailvelope) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![K-9 Logotipo do correio](/assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail*** é uma aplicação de correio independente que suporta tanto caixas de correio POP3 como IMAP, mas só suporta push mail para IMAP. [Visite k9mail.app](https://k9mail.app){ .md-button .md-button--primary } [Política de Privacidade](https://k9mail.app/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.fsck.k9)
    - [:fontawesome-brands-github: Source](https://github.com/k9mail)
    
    [:octicons-home-16: Homepage](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo FairEmail](/assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** é uma aplicação de e-mail de código aberto mínima, utilizando padrões abertos (IMAP, SMTP, OpenPGP) com um baixo consumo de dados e bateria.
    
    [Visite email.faircode.eu](https://email.faircode.eu){ .md-button .md-button--primary } [Política de Privacidade](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/eu.faircode.email/)
    - [:fontawesome-brands-github: Source](https://github.com/M66B/FairEmail)
    
    [:octicons-home-16: Homepage](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    ![logo Canary Mail](/assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** é um cliente de e-mail pago concebido para tornar a encriptação end-to-end sem falhas com funcionalidades de segurança, tais como um bloqueio biométrico da aplicação. [Visite canarymail.io](https://canarymail.io){ .md-button .md-button--primary } [Política de Privacidade](https://canarymail.io/privacy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://download.canarymail.io/get_windows)
    - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/app/id1236045954)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1236045954)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)

### Kontact (KDE)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Kontact logo](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** is a personal information manager (PIM) application from the [KDE](https://kde.org) project. It provides a mail client, address book, organizer and RSS client.
    
    [:octicons-home-16: Homepage](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentation}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Browser)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** is a browser extension that enables the exchange of encrypted emails following the OpenPGP encryption standard.
    
    [:octicons-home-16: Homepage](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

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

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

### Minimum Qualifications

- Apps developed for open-source operating systems must be open-source.
- Must not collect telemetry, or have an easy way to disable all telemetry.
- Must support OpenPGP message encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be open-source.
- Should be cross-platform.
- Should not collect any telemetry by default.
- Should support OpenPGP natively, i.e. without extensions.
- Should support storing OpenPGP encrypted emails locally.

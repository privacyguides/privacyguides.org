---
title: "Email Clients"
icon: material/email-open
---
Our recommendation list contains email clients that support both [OpenPGP](encryption.md#openpgp) and strong authentication such as [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). OAuth allows you to use [Multi-Factor Authentication](basics/multi-factor-authentication.md) and prevent account theft.

??? Attention "Email does not provide forward secrecy"
    When using end-to-end encryption (E2EE) technology like OpenPGP, email will still have [some metadata](email.md#email-metadata-overview) that is not encrypted in the header of the email.

    OpenPGP also does not support [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed: [How do I protect my private keys?](basics/email-security.md) Consider using a medium that provides forward secrecy:

    [Real-time Communication](real-time-communication.md){ .md-button }

## Cross-Platform

### Thunderbird

!!! recommendation

    ![Thunderbird logo](assets/img/email-clients/thunderbird.svg){ align=right }

    **Thunderbird** is a free, open-source, cross-platform email, newsgroup, news feed, and chat (XMPP, IRC, Twitter) client developed by the Thunderbird community, and previously by the Mozilla Foundation.

    [:octicons-home-16: Homepage](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=Documentation}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.Thunderbird)

## Platform Specific

### Apple Mail (macOS)

!!! recommendation

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }

    **Apple Mail** is included in macOS and can be extended to have OpenPGP support with [GPG Suite](/encryption/#gpg-suite), which adds the ability to send encrypted email.

    [:octicons-home-16: Homepage](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentation}

### Canary Mail (iOS)

!!! recommendation

    ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ align=right }

    **Canary Mail** is a paid email client designed to make end-to-end encryption seamless with security features such as a biometric app lock.

    [:octicons-home-16: Homepage](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentation}

    ??? downloads

        - [:simple-apple: Mac App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)

!!! attention

    Canary Mail only recently released a Windows and Android client, though we don't believe they are as stable as their iOS and Mac counterparts.

Canary Mail is closed-source. We recommend it due to the few choices there are for email clients on iOS that support PGP E2EE.

### FairEmail (Android)

!!! recommendation

    ![FairEmail logo](assets/img/email-clients/fairemail.svg){ align=right }

    **FairEmail** is a minimal, open-source email app, using open standards (IMAP, SMTP, OpenPGP) with a low data and battery usage.

    [:octicons-home-16: Homepage](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-fdroid: F-Droid](https://f-droid.org/packages/eu.faircode.email/)

### GNOME Evolution (GNOME)

!!! recommendation

    ![Evolution logo](assets/img/email-clients/evolution.svg){ align=right }

    **Evolution** is a personal information management application that provides integrated mail, calendaring and address book functionality. Evolution has extensive [documentation](https://help.gnome.org/users/evolution/stable/) to help you get started.

    [:octicons-home-16: Homepage](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! recommendation

    ![K-9 Mail logo](assets/img/email-clients/k9mail.svg){ align=right }

    **K-9 Mail** is an independent mail application that supports both POP3 and IMAP mailboxes, but only supports push mail for IMAP.

    In the future, K-9 Mail will be the [officially branded](https://k9mail.app/2022/06/13/K-9-Mail-and-Thunderbird.html) Thunderbird client for Android.

    [:octicons-home-16: Homepage](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribute }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-fdroid: F-Droid](https://f-droid.org/packages/com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

### Kontact (KDE)

!!! recommendation

    ![Kontact logo](assets/img/email-clients/kontact.svg){ align=right }

    **Kontact** is a personal information manager (PIM) application from the [KDE](https://kde.org) project. It provides a mail client, address book, organizer and RSS client.

    [:octicons-home-16: Homepage](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentation}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Browser)

!!! recommendation

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

!!! recommendation

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }

    NeoMutt is an open-source command line mail reader (or MUA) for Linux and BSD. It's a fork of [Mutt](https://en.wikipedia.org/wiki/Mutt_(email_client)) with added features.

    NeoMutt is a text-based client that has a steep learning curve. It is however, very customizable.

    [:octicons-home-16: Homepage](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-linux: Linux](https://neomutt.org/distro)
        - [:simple-apple: macOS](https://neomutt.org/distro)

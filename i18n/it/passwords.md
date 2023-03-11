---
title: "Gestori di password"
icon: material/form-textbox-password
description: Password managers allow you to securely store and manage passwords and other credentials.
---

I gestori di password consentono di archiviare e gestire in modo sicuro le password e altre credenziali con l'uso di una password principale.

[Introduzione alle password :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info

    I gestori di password integrati nei software, come i browser e i sistemi operativi, a volte non sono all'altezza di un software di gestione delle password dedicato. Il vantaggio di un gestore di password integrato è la buona integrazione con il software, ma spesso può essere molto semplice e privo di caratteristiche di privacy e sicurezza che le offerte autonome offrono.
    
    Ad esempio, il gestore di password di Microsoft Edge non offre affatto E2EE. Il gestore di password di Google ha E2EE [facoltativo](https://support.google.com/accounts/answer/11350823), e [Apple](https://support.apple.com/en-us/HT202303) offre E2EE di default.

## Cloud

Questi gestori di password sincronizzano le password su un server cloud per facilitarne l'accesso da tutti i dispositivi e per garantire la sicurezza contro la perdita del dispositivo.

### Bitwarden

!!! recommendation

    ![Logo di Bitwarden](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** è un gestore di password gratuito e open-source. L'obiettivo è quello di risolvere i problemi di gestione delle password per individui, team e organizzazioni aziendali. Bitwarden è una delle soluzioni migliori e più sicure per memorizzare tutti i vostri login e password, mantenendoli comodamente sincronizzati tra tutti i vostri dispositivi.
    
    [:octicons-home-16: Pagina principale](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden dispone anche di [Bitwarden Send](https://bitwarden.com/products/send/), che consente di condividere testi e file in modo sicuro con [crittografia end-to-end](https://bitwarden.com/help/send-encryption). Una password [](https://bitwarden.com/help/send-privacy/#send-passwords) può essere richiesta insieme al link di invio. Bitwarden Send dispone anche di [cancellazione automatica](https://bitwarden.com/help/send-lifespan).

Per poter condividere i file è necessario il [piano Premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans). Il piano gratuito consente solo la condivisione del testo.

Il codice lato server di Bitwarden è [open-source](https://github.com/bitwarden/server), quindi se non vuoi usare il cloud Bitwarden, puoi facilmente ospitare il proprio server di sincronizzazione Bitwarden.

**Vaultwarden** è un'implementazione alternativa del server di sincronizzazione di Bitwarden scritta in Rust e compatibile con i client ufficiali di Bitwarden, perfetta per l'implementazione self-hosted quando l'esecuzione del servizio ufficiale, che richiede molte risorse, non è ideale. Se desideri ospitare Bitwarden sul proprio server, è quasi certamente preferibile utilizzare Vaultwarden al codice server ufficiale di Bitwarden.

[:octicons-repo-16: Repository di Vaultwarden](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentazione}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Codice sorgente" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribuisci }

### 1Password

!!! recommendation

    ![logo 1Password](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** è un gestore di password con una forte attenzione alla sicurezza e alla facilità d'uso, che consente di archiviare password, carte di credito, licenze software e qualsiasi altra informazione sensibile in una cassaforte digitale sicura. Il caveau personale è ospitato sui server di 1Password per una [tariffa mensile](https://1password.com/sign-up/). 1Password è [ispezionato](https://support.1password.com/security-assessments/) su base regolare e fornisce un'assistenza clienti eccezionale. 1Password è closed source; tuttavia, la sicurezza del prodotto è documentata in modo esauriente nel suo [white paper sulla sicurezza](https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: Pagina principale](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Documentazione}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

Tradizionalmente, **1Password** ha offerto la migliore esperienza d'uso del gestore di password per chi utilizza macOS e iOS; tuttavia, ora ha raggiunto la parità di funzionalità su tutte le piattaforme. Vanta molte caratteristiche orientate alle famiglie e alle persone meno tecniche, oltre a funzionalità avanzate.

Il caveau personale di 1Password è protetto sia dalla password principale che da una chiave di sicurezza randomizzata di 34 caratteri per criptare i vostri dati sui loro server. Questa chiave di sicurezza aggiunge un livello di protezione ai dati, perché i dati sono protetti da un'elevata entropia, indipendentemente dalla password principale. Molte altre soluzioni di gestione delle password si affidano interamente alla forza della password principale per proteggere i dati.

Un vantaggio di 1Password rispetto a Bitwarden è il supporto di prima classe per i client nativi. Mentre Bitwarden relega molte funzioni, in particolare quelle di gestione dell'account, all'interfaccia del suo vault web, 1Password rende disponibili quasi tutte le funzioni all'interno dei suoi client nativi per dispositivi mobili o desktop. I client di 1Password hanno anche un'interfaccia utente più intuitiva, che li rende più facili da usare e da navigare.

### Psono

!!! recommendation

    ![Logo Psono](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** è un gestore di password gratuito e open-source sviluppato in Germania, con particolare attenzione alla gestione delle password per i team. Psono supporta la condivisione sicura di password, file, segnalibri ed email. download
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)
    
    [:octicons-home-16: Pagina principale](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Documentazione}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono fornisce un'ampia documentazione sul proprio prodotto. Il web-client di Psono può essere auto-ospitato; in alternativa, è possibile scegliere la Community Edition completa o l'Enterprise Edition con funzionalità aggiuntive.

### CryptPad

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

#### Requisiti minimi

- Must utilize strong, standards-based/modern E2EE.
- Must have thoroughly documented encryption and security practices.
- Must have a published audit from a reputable, independent third-party.
- All non-essential telemetry must be optional.
- Must not collect more PII than is necessary for billing purposes.

#### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Telemetry should be opt-in (disabled by default) or not collected at all.
- Should be open-source and reasonably self-hostable.

## Archiviazione locale

These options allow you to manage an encrypted password database locally.

### KeePassDX (Android)

!!! recommendation

    ![Logo KeePassDX](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** è un leggero gestore di password per Android, che consente di modificare i dati crittografati in un unico file in formato KeePass e di compilare i moduli in modo sicuro.
    
    [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) permette di sbloccare contenuti cosmetici e funzioni del protocollo non standard, ma soprattutto aiuta e incoraggia lo sviluppo. [:octicons-home-16: Pagina principale](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribuisci }
    
    ???

Inoltre, è disponibile una versione solo offline: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Questa versione è stata ridotta nel tentativo di ridurre la superficie di attacco. We advise you check each record manually.

### Strongbox (iOS & macOS)

!!! recommendation

    ![Logo Strongbox](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** è un gestore di password nativo e open-source per iOS e macOS. Supportando entrambi i formati KeePass e Password Safe, Strongbox può essere utilizzato in tandem con altri gestori di password, come KeePassXC, su piattaforme non Apple.
    
    Utilizzando un [modello freemium] (https://strongboxsafe.com/pricing/), Strongbox offre la maggior parte delle funzionalità nel suo livello gratuito, mentre quelle più convenienti [features](https://strongboxsafe.com/comparison/), come l'autenticazione biometrica, sono bloccate dietro un abbonamento o una licenza perpetua. [:octicons-home-16: Pagina principale](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Contribuisci }
    
    ???

### gopass

!!! recommendation

    ![logo gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** è un gestore di password per la riga di comando scritto in Go. Funziona su tutti i principali sistemi operativi desktop e server (Linux, macOS, BSD, Windows). [:octicons-home-16: Pagina principale](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribuisci }
    
    ???
    
    downloads
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd) downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

Additionally, there is an offline-only version offered: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). This version is stripped down in an attempt to reduce attack surface.

### Linea di comando

These products are minimal password managers that can be used within scripting applications.

#### gopass

!!! recommendation

    ![gopass logo](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** is a password manager for the command line written in Go. It works on all major desktop and server operating systems (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Homepage](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### CryptPad

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

- Must be cross-platform.

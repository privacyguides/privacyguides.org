---
title: "Autenticatori a più fattori"
icon: 'material/two-factor-authentication'
---

## Chiavi di sicurezza fisiche

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    Le **YubiKey** sono tra le chiavi di sicurezza più diffuse. Alcuni modelli di YubiKey dispongono di un'ampia gamma di funzionalità come: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 e WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP e HOTP](https://developers.yubico.com/OATH).
    
    Uno dei vantaggi di YubiKey è che una chiave può fare quasi tutto ciò che ci si aspetta da una chiave di sicurezza fisica (YubiKey 5). Invitiamo a svolgere il [quiz](https://www.yubico.com/quiz/) per essere sicuri di fare il giusto acquisto.
    
    [:octicons-home-16: Pagina principale](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentazione}

La [tabella di confronto](https://www.yubico.com/store/compare/) mostra le caratteristiche e le differenze tra le YubiKey. Consigliamo vivamente di scegliere le chiavi della Serie 5.

Le YubiKey possono essere programmate utilizzando [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) o [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). Per la gestione dei codici TOTP, è possibile utilizzare il [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). Tutti i client di Yubico sono open source.

Per i modelli che supportano HOTP e TOTP, ci sono 2 slot nell'interfaccia OTP che possono essere utilizzati per HOTP e 32 slot per memorizzare i segreti TOTP. Questi segreti vengono memorizzati in modo criptato sulla chiave e non vengono mai esposti ai dispositivi a cui sono collegati. Una volta fornito un seme (segreto condiviso) al Yubico Authenticator, questo fornirà solo codici a sei cifre, ma mai il seme. Questo modello di sicurezza contribuisce a limitare le possibilità di un aggressore che comprometta uno dei dispositivi che eseguono il Yubico Authenticatore, rendendo la YubiKey resistente a un aggressione fisica.

!!! warning
    Il firmware delle YubiKeys non è open-source, né aggiornabile. Se desideri avere le funzionalità presenti in versioni più nuove del firmware, o se è presente una vulnerabilità nella tua versione corrente, è necessario comprare una nuova chiavetta.

### Nitrokey / Librem Key

!!! recommendation

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** ha una chiave di sicurezza che supporta [FIDO2 e WebAuthn] (basics/multi-factor-authentication.md#fido-fast-identity-online), chiamata **Nitrokey FIDO2**. Per il supporto PGP, è necessario un'altra delle loro chiavi, come la **Nitrokey Start**, la **Nitrokey Pro 2** o la **Nitrokey Storage 2**.
    
    [:octicons-home-16: Pagina principale](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentazione}

La [tabella di confronto](https://www.nitrokey.com/#comparison) mostra le caratteristiche e le differenze tra le chiavette Nitrokey. La **Nitrokey 3** elencata ha un insieme di funzioni combinate.

I modelli Nitrokey possono essere configurati utilizzando l'applicazione [Nitrokey](https://www.nitrokey.com/download).

Per i modelli che supportano HOTP e TOTP, ci sono 3 slot per HOTP e 15 per TOTP. Alcune Nitrokey possono fungere da gestori di password. Possono memorizzare fino a 16 credenziali diverse, criptandole con la stessa password dell'interfaccia OpenPGP.

!!! warning "Avviso"

    Sebbene le Nitrokey non rilascino i segreti HOTP/TOTP al dispositivo a cui sono collegati, la memoria HOTP e TOTP non è crittografata ed è vulnerabile agli attacchi fisici. Se desideri memorizzare i segreti HOTP o TOTP, consigliamo caldamente di utilizzare una Yubikey.

!!! warning "Avviso"

    Reimpostare l'interfaccia OpenPGP su una Nitrokey rende il database [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

 Nitrokey Pro 2, Nitrokey Storage 2 e l'imminente Nitrokey 3 supportano la verifica dell'integrità del sistema per i laptop con il firmware [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/). La [Librem Key di Purism](https://puri.sm/products/librem-key/) è un rebranding della NitroKey Pro 2 con un firmware simile e può essere utilizzata per gli stessi scopi.

Il firmware di Nitrokey è open-source, a differenza di YubiKey. Il firmware dei modelli NitroKey moderni (tranne che per **NitroKey Pro 2**) è aggiornabile.

!!! important

    L'applicazione Nitrokey, pur essendo compatibile con le chiavi Librem, richiede la versione 3.6 o superiore di `libnitrokey` per riconoscerle. Attualmente il pacchetto è obsoleto nelle repository di Windows, macOS e della maggior parte delle distribuzioni Linux; è quindi probabile dover compilare l'applicazione Nitrokey per farla funzionare con Librem Key. Su Linux, è possibile ottenere una versione aggiornata da [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

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

- Must use high quality, tamper resistant hardware security modules.
- Must support the latest FIDO2 specification.
- Must not allow private key extraction.
- Devices which cost over $35 must support handling OpenPGP and S/MIME.

#### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Should be available in USB-C form-factor.
- Should be available with NFC.
- Should support TOTP secret storage.
- Should support secure firmware updates.

## Applicazioni di autenticazione

Le applicazioni di autenticazione implementano lo standard di sicurezza daottato dalla Internet Engineering Task Force (IETF) chaiamto **'Time-based One-time Passwords'**, o **'TOTP'**. È un metodo in cui i siti web condividono un segreto con l'utente, il quale viene utilizzato dall'applicazione di autenticazione per generare, solitamente, un codice a sei cifre basato sull'ora corrente, che viene inserita durante l'accesso al sito web da controllare. Tipicamente questi codici vengono rigenerati ogni 30 secondi; quando ne viene generato uno nuovo, quello vecchio diventa inutile. Anche se un hacker fosse in grado di ottenere il codice a sei cifre, non ha modo di invertire il codice per ottenere il segreto originale, né di prevedere quali potrebbero essere i codici futuri.

Consigliamo vivamente di utilizare applicazioni TOTP per dispositivi mobili invece delle alternative desktop; questo perché Android e iOS offrono una migliore sicurezza e isolazione delle applicazioni, rispetto alla maggior parte dei sistemi operativi per desktop.

### Raivo OTP

!!! recommendation

    ![Aegis logo](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** è un'applicazione gratuita, sicura e open-source per gestire i token di verifica dei due passaggi per i vostri servizi online.
    
    [:octicons-home-16: Pagina principale](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recommendation

    ![Raivo OTP logo](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** è un client per password su iOS nativo, leggero e sicuro, basato sul tempo (TOTP) & sul contatore (HOTP). Ravio OTP offre la sincronizzazione & il backup opzionali via iCloud. È inoltre disponibile per macOS come applicazione nella barra di stato, ma non funzione indipendentemente dall'applicazione su iOS.
    
    [:octicons-home-16: Pagina principale](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

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

- Deve essere un software open-source.
- Must not require internet connectivity.
- Must not sync to a third-party cloud sync/backup service.
    - **Optional** E2EE sync support with OS-native tools is acceptable, e.g. encrypted sync via iCloud.

--8<-- "includes/abbreviations.it.txt"

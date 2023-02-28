---
title: "Condivisione e sincronizzazione dei file"
icon: material/share-variant
---

Scopri come condividere privatamente i tuoi file tra i tuoi dispositivi, con i tuoi amici e familirai, o in modo anonimo online.

## Condivisione di file

### Send

!!! recommendation

    ![Logo Send](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** è un fork del servizio Firefox Send di Mozilla, ormai dismesso, che consente di inviare file ad altri con un link. I file vengono crittografati sul dispositivo in modo da non poter essere letti dal server e possono essere protetti da password. Il manutentore di Send ospita una [istanza pubblica](https://send.vis.ee/). È possibile utilizzare altre istanze pubbliche o ospitare Send autonomamente.
    
    [:octicons-home-16: Pagina principale](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Istanze pubbliche"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Contribuisci }

Send può essere utilizzato tramite la sua interfaccia web o tramite la CLI [ffsend](https://github.com/timvisee/ffsend). Se hai familiarità con la riga di comando e invii spesso file, consigliamo di utilizzare il client CLI per evitare la crittografia basata su JavaScript. È possibile specificare il flag `--host` per utilizzare un server specifico:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! recommendation

    ![Logo di OnionShare](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** è uno strumento open-source che consente di condividere in modo sicuro e anonimo file di qualsiasi dimensione. Funziona avviando un server web accessibile come servizio Tor onion, con un URL inesplicabile che si può condividere con i destinatari per scaricare o inviare file.
    
    [:octicons-home-16: Pagina principale](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Servizio Onion" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

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

- Must not store decrypted data on a remote server.
- Deve essere un software open-source.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

## FreedomBox

!!! recommendation

    ![Logo Syncthing](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** è un'utility open-source di sincronizzazione continua dei file peer-to-peer. Viene utilizzato per sincronizzare i file tra due o più dispositivi sulla rete locale o su Internet.
    
    Syncthing non utilizza un server centralizzato, ma il [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) per trasferire i dati tra i dispositivi.

## Sincronizzazione dei file

### Nextcloud (Client-Server)

!!! recommendation

    ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ align=right }
    
    **LibreOffice** è una suite per ufficio gratis, open-source e ricca di funzionalità.
    
    [:octicons-home-16: Pagina principale](https://www.libreoffice.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://documentation.libreoffice.org/en/english-documentation/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://www.libreoffice.org/about-us/source-code){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.libreoffice.org/donate/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-appstore: App Store](https://www.libreoffice.org/download/android-and-ios/)
        - [:simple-windows11: Windows](https://www.libreoffice.org/download/download/)
        - [:simple-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:simple-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.libreoffice.LibreOffice)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)

!!! danger "Pericolo"

    ![OnlyOffice logo](assets/img/productivity/onlyoffice.svg){ align=right }
    
    **OnlyOffice** è una suite di ufficio basata sul cloud gratuita, open-source e ricca di funzionalità, come l'integrazione con Nextcloud.

### Syncthing (P2P)

!!! recommendation

    ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** is an open-source peer-to-peer continuous file synchronization utility. It is used to synchronize files between two or more devices over the local network or the internet. Syncthing does not use a centralized server; it uses the [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) to transfer data between devices. All data is encrypted using TLS.
    
    [:octicons-home-16: Homepage](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

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

- Must not require a third-party remote/cloud server.
- Deve essere un software open-source.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

#### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Has mobile clients for iOS and Android, which at least support document previews.
- Supports photo backup from iOS and Android, and optionally supports file/folder sync on Android.

--8<-- "includes/abbreviations.it.txt"

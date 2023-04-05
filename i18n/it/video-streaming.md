---
title: "Streaming video"
icon: material/video-wireless
description: These networks allow you to stream internet content without building an advertising profile based on your interests.
---

Il rischio principale quando si usa una piattaforma di streaming video è che le tue abitudini e iscrizioni possano essere usate per profilarti. Suggeriamo di utilizzare questi strumenti accompagnati da un [VPN](vpn.md) o [Tor](https://www.torproject.org/) in modo da rendere più difficile la profilazione.

## Client

!!! recommendation

    ![LBRY logo](assets/img/video-streaming/lbry.svg){ align=right }
    
    **La rete LBRY** è una rete di condivisione video decentralizzata. Utilizza una rete simile a [BitTorrent](https://it.wikipedia.org/wiki/BitTorrent) per memorizzare i contenuti video e una [blockchain](https://it.wikipedia.org/wiki/Blockchain) per memorizzare gli indici di tali video. Il vantaggio principale di questo design è la resistenza alla censura.
    
    **Il client desktop di LBRY** consente lo streaming di video dalla rete LBRY e memorizza l'elenco delle iscrizioni nel proprio portafoglio LBRY.
    
    [:octicons-home-16: Pagina principale](https://lbry.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://lbry.com/privacypolicy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://lbry.com/faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! note

    Si raccomanda solo il **client desktop LBRY**, poiché il sito web [Odysee](https://odysee.com) e i client LBRY in F-Droid, Play Store e App Store hanno la sincronizzazione e la telemetria obbligatorie.

!!! warning

    Durante la visione e l'hosting dei video, il tuo indirizzo IP è visibile alla rete LBRY. Considera l'uso di [VPN](vpn.md) o [Tor](https://www.torproject.org) se il [modello di minaccia](basics/threat-modeling.md) richiede di nascondere l'indirizzo IP.

Raccomandiamo di **non sincronizzare** il portafoglio con LBRY Inc. poiché la sincronizzazione dei portafogli crittografati non è ancora supportata. Se sincronizzi il tuoportafoglio con LBRY Inc. devi fidarti del fatto che non guarderanno la tua lista delle iscrizioni, i fondi di [LBC](https://lbry.com/faq/earn-credits) o prenderanno il controllo del tuo canale.

È possibile disattivare l'opzione *Save hosting data to help the LBRY network* in :gear: **Settings** → **Advanced Settings**, per evitare di esporre il proprio indirizzo IP e i video guardati quando si utilizza LBRY per un periodo di tempo prolungato.

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

- Non deve richiedere un account centralizzato per visualizzare i video.
    - L'autenticazione decentralizzata, ad esempio tramite la chiave privata di un wallet mobile, è accettabile.

---
title: "Streaming video"
icon: material/video-wireless
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

!!! note "Nota"

    Si raccomanda solo il **client desktop LBRY**, poiché il sito web [Odysee](https://odysee.com) e i client LBRY in F-Droid, Play Store e App Store hanno la sincronizzazione e la telemetria obbligatorie.

!!! warning "Avviso"

    Durante la visione e l'hosting dei video, il tuo indirizzo IP è visibile alla rete LBRY. Considera l'uso di [VPN](vpn.md) o [Tor](https://www.torproject.org) se il [modello di minaccia](basics/threat-modeling.md) richiede di nascondere l'indirizzo IP.

Raccomandiamo di **non sincronizzare** il portafoglio con LBRY Inc. poiché la sincronizzazione dei portafogli crittografati non è ancora supportata. Se sincronizzi il tuoportafoglio con LBRY Inc. devi fidarti del fatto che non guarderanno la tua lista delle iscrizioni, i fondi di [LBC](https://lbry.com/faq/earn-credits) o prenderanno il controllo del tuo canale.

È possibile disattivare l'opzione *Save hosting data to help the LBRY network* in :gear: **Settings** → **Advanced Settings**, per evitare di esporre il proprio indirizzo IP e i video guardati quando si utilizza LBRY per un periodo di tempo prolungato.

## CryptPad

**Si noti che non siamo affiliati a nessuno dei progetti che raccomandiamo.** In aggiunta [ai nostri criteri standard](about/criteria.md), abbiamo sviluppato un chiaro insieme di requisiti che ci permettono di fornire raccomandazioni obiettive. Vi suggeriamo di familiarizzare con questo elenco prima di scegliere di utilizzare un progetto e di condurre le vostre ricerche per assicurarvi che la scelta sia giusta per voi.

!!! example "Questa sezione è nuova"

    Stiamo lavorando per stabilire criteri definiti per ogni sezione del nostro sito, e questo potrebbe essere soggetto a modifiche. Se hai domande sui nostri criteri, ti preghiamo di [chiedere sul nostro forum](https://discuss.privacyguides.net/latest) e non dare per scontato che non abbiamo preso in considerazione qualcosa nel formulare le nostre raccomandazioni se non è elencato qui. Sono molti i fattori presi in considerazione e discussi quando raccomandiamo un progetto e documentare ogni singolo fattore è un lavoro in corso.

- Non deve richiedere un account centralizzato per visualizzare i video.
    - L'autenticazione decentralizzata, ad esempio tramite la chiave privata di un wallet mobile, è accettabile.

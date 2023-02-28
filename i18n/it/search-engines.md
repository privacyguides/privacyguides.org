---
title: "Motori di ricerca"
icon: material/search-web
---

Utilizza un motore di ricerca che non crei un profilo pubblicitario basato sulle tue ricerche.

Le raccomandazioni riportate si basano sui meriti delle privacy policy di ciascun servizio. Non c'è **alcuna garanzia** che queste vengano rispettate.

Considera l'utilizzo di un [VPN](vpn.md) o di [Tor](https://www.torproject.org/) se il tuo modello di minaccia richiede di nascondere l'indirizzo IP al provider di ricerca.

## Brave Search

!!! recommendation

    ![Brave Search logo](assets/img/search-engines/brave-search.svg){ align=right }
    
    **Brave Search** è sviluppato da Brave e fornisce principalmente risultati dal proprio indice indipendente, il quale è ottimizzato rispetto a Google Search, potendo quindi fornire risultati più contestualmente accurati, rispetto alle altre alternative.
    
    Brave Search comprende funzionalità uniche come 'Discussions', che mette in evidenza risultati incentrati su conversazioni, come i post dei forum.
    
    Suggeriamo di disabilitare l'opzione [Anonymous usage metrics](https://search.brave.com/help/usage-metrics) nelle impostazioni, che è attiva di default.
    
    [:octicons-home-16: Pagina principale](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Servizio Onion" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentazione}

Brave Search ha sede negli Stati Uniti. La loro[informativa sulla privacy](https://search.brave.com/help/privacy-policy) dichiara che raccolgono dati aggregati, i quali includono il sistema operativo e il browser in utilizzo, ma nessuna informazione d'identificazione personale. Gli indirizzi IP sono temporaneamente processati, ma non conservati.

## DuckDuckGo

!!! recommendation

    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){ align=right }
    
    **DuckDuckGo** è uno dei motori di ricerca privati più conosciuto. Tra le funzionalità di ricerca di DukDuckGo vi sono i [bangs](https://duckduckgo.com/bang) e molte [risposte istantanee](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/). Il motore di ricerca si basa su un'API commerciale di Bing per fornire la maggior parte di risultati, ma utilizza numerose [altre fonti](https://help.duckduckgo.com/results/sources/) per le risposte istantanee e risultati secondari.
    
    DuckDuckGo è il motore di ricerca predefinito del Tor Browser ed è una delle poche opzioni disponibili sul browser Safari di Apple.
    
    [:octicons-home-16: Pagina principale](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Servizio Onion" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentazione}

DuckDuckGo ha sede negli Stati Uniti. La loro[informativa della privacy](https://duckduckgo.com/privacy) dichiara che **raccolgono** le tue ricerche per migliorare il prodotto, ma non registrano il tuo indirizzo IP o qualsiasi altra informazione d'identificazione personale.

DuckDuckGo offre altre [due versioni](https://help.duckduckgo.com/features/non-javascript/) del proprio motore di ricerca, entrambe le quali non richiedono JavaScript. Tuttavia, queste versioni mancano di funzionalità. Possono essere inoltre essere utilizzate in congiunzione con il loro [indirizzo onion Tor](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/), aggiungendo [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) o [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) rispettivamente.

## SearXNG

!!! recommendation

    ![SearXNG logo](assets/img/search-engines/searxng.svg){ align=right }
    
    **SearXNG** è un meta-motore di ricerca open source e self-hostable, che aggrega risultati di altri motore di ricerca, ma senza raccogliere alcuna informazione a sua volta. È un fork attivamente mantenuto di [SearX](https://github.com/searx/searx).
    
    [:octicons-home-16: Pagina principale](https://searxng.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://searx.space/){ .card-link title="Istanze pubbliche"}
    [:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Codice sorgente" }

SearXNG è un proxy tra l'utente e i motori di ricerca che aggrega. Le tue stringhe di ricerca vengono inviate a tutti i motori dai quali SearXNG ottiene i suoi risultati.

Nel caso di self-hosting, è importante che anche altre persone utilizzino la tua istanza, in modo che le stringhe di ricerca si confondino tra di loro. Rimani attento a dove e come esegui il self-hosting, in quanto utenti che ricercano contenuti illegali mediante la tua istanza potrebbero attirare l'attenzione indesiderata delle autorità.

Quando utilizzi una istanza di SearXNG, ricordati di leggere la rispettiva informativa della privacy. Dato che le istanze possono essere modificate dai corrispettivi proprietari, non necessariamente riflettono la propria informativa sulla privacy. Alcune istante vengono eseguite come servizio nascosto Tor, il che può garantire più privacy, a patto che le tue stringhe di ricerca non contengano PII.

## Startpage

!!! recommendation

    ![Startpage logo](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![Startpage logo](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }
    
    **Startpage** è un motore di ricerca privato noto per riportare risultati di ricerca di Google.  Il fiore all'occhiello di Startpage è la [Anonymous View](https://www.startpage.com/en/anonymous-view/), che si sforza di standardizzare l'attività degli utenti in modo da rendere più difficile l'identificazione univoca. Questa funzione può essere utile per nascondere [alcune](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) caratteristiche della rete e del browser. A differenza di quanto suggerisce il nome, non ci si deve affidare a questa funzione per ottenere l'anonimato. Se cerchi l'anonimato, utilizzate invece il [Tor Browser](tor.md#tor-browser).
    
    [:octicons-home-16: Pagina principale](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentazione}

!!! warning "Avviso"

    Startpage limita regolarmente l'accesso ai suori servizi a determinati indirizzi IP, come quelli riservati per i VPN e Tor. [DuckDuckGo](#duckduckgo) e [Brave Search](#brave-search) sono opzioni più amichevoli se il tuo Threat Model richiede di nascondere il tuo indirizzo IP al provider di ricerca.

Startpage ha sede nei Paesi Bassi. Secondo la loro [informativa sulla privacy](https://www.startpage.com/en/privacy-policy/), registrano dettagli quali: sistema operativo, tipo di browser e lingua. Non registrano l'indirizzo IP, le stringhe di ricerca o altre informazioni d'identificazione personale.

L'azionista di maggioranza di Startpage è System1, un'azienda di tecnologie pubblicitarie. Non riteniamo ciò essere un problema, visto che seguono una distinta e separata [informativa sulla privacy](https://system1.com/terms/privacy-policy). Il team di Privacy Guides contattò Startpage [ nel 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) per chiarire le preoccupazioni legate al considerevole investimento da parte si System1 nel servizio; siamo stati soddisfatti dalle risposte ricevute.

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

### Requisiti minimi

- Non devono raccogliere informazioni di identificazione personale secondo la loro informativa sulla privacy.
- Non devono permettere agli utenti di creare un account con loro.

### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Dovrebbe essere basato su software open-source.
- Non dovrebbe bloccare gli indirizzi IP dei nodi di uscita di Tor.

--8<-- "includes/abbreviations.it.txt"

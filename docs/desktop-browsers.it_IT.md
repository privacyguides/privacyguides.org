---
title: "Browser desktop"
icon: material/laptop
---

Questi sono i browser e le configurazioni per desktop attualmente consigliati per la navigazione standard/non anonima. Se hai bisogno di navigare in Internet in modo anonimo, dovresti invece utilizzare [Tor](tor.md). In generale, si consiglia di ridurre al minimo le estensioni del browser; hanno un accesso privilegiato all'interno del browser, richiedono fiducia nello sviluppatore, possono farti [risaltare](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)e [indebolire l'isolamento del sito](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ).

### Firefox

!!! recommendation

    ![Firefox logo](assets/img/browsers/firefox.svg){ align=right }
    
    **Firefox** offre robuste impostazioni di privacy, come la [protezione antitracciamento avanzata](https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop), che aiuta a bloccare varie [tipologie di tracciamento](https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop#w_che-cosa-viene-bloccato-con-la-protezione-antitracciamento-avanzata).
    
    [:octicons-home-16: Pagina principale](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/firefox/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://donate.mozilla.org/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! warning
    Firefox include un [token di download](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) univoco nella sezione dei download del sito di Mozilla e utilizza la telemetria in Firefox per inviarlo. Il token **non** è incluso nelle versioni rilasciate dall'[FTP di Mozilla](https://ftp.mozilla.org/pub/firefox/releases/).

#### Configurazione consigliata

Il Tor Browser è l'unico che veramente permette di navigare Internet anonimamente. Quando utilizzi Firefox, si consiglia di modificare le seguenti impostazioni per proteggere la privacy da alcune parti, ma tutti i browser diversi da [Tor Browser](tor.md#tor-browser) saranno tracciabili da *qualcuno* in un modo o nell'altro.

Queste opzioni si trovano in :material-menu: → **Impostazioni** → **Privacy e sicurezza**.

##### Protezione antitracciamento avanzata

- [x] Seleziona Protezione antitracciamento avanzata **Restrittiva**

Essa ti protegge bloccando i tracker dei social, script di fingerprinting (nota che questo non ti protegge da *tutte* le forme di fingerprinting), minatori di criptovalute, cookie di tracciamento cross-site e altri contenuti di tracciamento. La Protezione antitracciamento avanzata protegge da molte minacce comuni, ma non blocca tutte le vie di tracciamente, perché progettata per avere minimo o nessun impatto sull'usabilità dei siti.

##### Sanitizzazione alla chiusura

Se vuoi mantenere l'accesso per alcuni siti in particolare, puoi consentire le eccezioni in **Cookie e dati dei siti web** → **Gestisci eccezioni...**

- [x] Seleziona **Elimina cookie e dati dei siti web alla chiusura di Firefox**

Ciò ti protegge dai cookie persistenti, ma non da quelli acquisiti durante ogni sessione di navigazione. Con questa opzione attiva, è possibile eliminare facilmente i cookie del browser riavviando Firefox. È possibile impostare le eccezioni per ogni sito, ad esempio se desideri mantenere l'accesso ad un sito particolare che frequenti spesso.

##### Suggerimenti di ricerca

- [ ] Disabilita **Visualizza suggerimenti di ricerca**

I suggerimenti di ricerca potrebbero non essere disponibili nella tua zona.

I suggerimento di ricerca inviano tutto quello che viene scritto nella barra di ricerca al motore di ricerca predefinito, indipendentemente se le stringe vengono inviate o meno. Disabilitare i suggerimenti di ricerca ti permette di controllare più precisamente quali dati invii al motore di ricerca che utilizzi.

##### Telemetria

- [ ] Disabilita **Consenti a Firefox di inviare a Mozilla dati tecnici e relativi all’interazione con il browser**
- [ ] Disabilita **Consenti a Firefox di installare e condurre studi**
- [ ] Disabilita **Consenti a Firefox di inviare segnalazioni di arresto anomalo in sospeso**

> Firefox invia dati relativi alla versione e alla lingua di Firefox, al sistema operativo del dispositivo, alla configurazione hardware, memoria, informazioni basiche sugli arresti anomali ed errori, ai risultati dei processi automatici come gli aggiornamenti, Safebrowsing e l'attivazione a noi. Quando Firefox ci invia dati, il tuo indirizzo IP viene temporaneamente raccolto da parte dei nostri server.

##### Modalità solo HTTPS

- [x] Seleziona **Attiva in tutte le finestre**

Questo ti aiuta a prevenire il collegamento non intenzionale ad un sito web in HTTP. Siti web senza l'HTTPS sono piuttosto rari il giorno d'oggi, quindi questa opzione non dovrebbe avere un grosso impatto sulla tua navigazione quotidiana.

#### Firefox Sync

La [sincronizzazione via Firefox](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) permette ai tuoi dati di navigazione (cronologia, segnalibri, etc.) di essere accessibili su tutti i tuoi dispositivi; i dati vengono protetti mediante E2EE.

#### Arkenfox (avanzato)

Il progetto [Arkenfox](https://github.com/arkenfox/user.js) fornisce un insieme di opzioni attentamente selezionate per Firefox. Se [decidi](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) di utilizzare Arkenfox, [alcune opzioni](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) sono più stringenti di altri e/o potrebbero causare il malfunzionamento di alcuni siti web - [opzioni che possono essere cambiate facilmente](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) per aderire alle tue necessità. **Consigliamo caldamente** di leggere tutto il loro [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox inoltre abilita il supporto per le [schede contenitore](https://support.mozilla.org/it/kb/containers-schede-contenitore-firefox#per-utenti-avanzati).

### Brave

!!! recommendation

    ![Brave logo](assets/img/browsers/brave.svg){ align=right }
    
    **Brave Browser** include un content blocker integrato e [funzionalità di privacy](https://brave.com/privacy-features/), molte delle quali attive in modo predefinito.
    
    Brave è sviluppato a partire dal progetto del browser web Chromium, quindi dovrebbe risultare familiare e avere problemi minimi di compatibilità con i siti web.
    
    [:octicons-home-16: Pagina principale](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Servizio Onion" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Codice sorgente" }
    
    ??? downloads annotate
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)

    1. Sconsigliamo l'utilizzo della versione Flatpack di Brave, in quanto rimpiazza il sandbox di Chromium con quello di Flatpak, il quale è meno efficace. Inoltre, il pacchetto non è gestito da Brave Software, Inc.

#### Configurazione consigliata

Il Tor Browser è l'unico che veramente permette di navigare Internet anonimamente. Quando utilizzi Brave, consigliamo di cambiare le seguenti impostazioni per proteggere la tua privay da alcune parti, ma tutti i browser eccetto il [Tor Browser](tor.md#tor-browser) sono tracciabili da *qualcuno* in qualche modo.

Queste opzioni possono essere trovare in :material-menu: → **Impostazioni**.

##### Shields

Brave include alcune misure contro il fingerprinting nella sua funzionalità [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Consigliamo di configurare queste opzioni [globalmente](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) applicate a tutti i siti che visiti.

Le funzionalità di Shields possono essere ridotte per ogni sito se necessario; ciò nonostante, raccomandiamo le seguenti impostazioni:

<div class="annotate" markdown>

- [x] Seleziona **Impedisci il fingerprinting tramite le impostazioni della lingua**
- [x] Seleziona il Blocco di tracker e annunci come **Aggressivo**

    ??? warning "Usa gli elenchi di filtri predefiniti"
        Brave ti consente di selezionare ulteriori filtri di contenuti mediante la pagina interna `brave://adblock`. Si consiglia di non utilizzare questa funzione e di mantenere gli elenchi di filtri predefiniti. il loro utilizzo ti distingue dagli altri utenti Brave, e potrebbe inoltre aumentare la superficie di attacco se esiste un exploit nel browser sfruttabile da codice malizioso presente nelle liste stesse.

- [x] (Opzionale) Seleziona **Blocco degli script** (1)
- [x] Sleziona Blocca il fingerprinting come **Rigido, potrebbe non far funzionare alcuni siti**

</div>

1. Questa opzione fornisce una funzionalità simile alle [modalità di blocco](https://github.com/gorhill/uBlock/wiki/Blocking-mode) avanzate di uBlock Origin o dell'estensione [NoScript](https://noscript.net/).

##### Blocco dei social

- [ ] Deseleziona tutte le opzioni legate ai social

##### Privacy e sicurezza

<div class="annotate" markdown>

- [x] Seleziona **Disabilita UDP senza proxy** in [Gestione politica IP WebRTC IP](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Disabilita **Utilizza i servizzi Google per  la messaggistica push**
- [ ] Disabilita **Acconsenti all'analisi dei prodotti di tutel della privacy (P3A)**
- [ ] Disabilita **Invia automaticamente un ping di utilizzo giornaliero a Brave**
- [ ] Disabilita **Invia automaticamente i rapporti di diagnostica**
- [x] Seleziona **Utilizza sempre connessioni sicure** nel menu **Sicurezza** 
- [ ] Disabilita **Finestra in Incognito con Tor** (1)

    !!! important "Sanitizzazione alla chiusura"
        - [x] Seleziona **Cancella cookie e dati dei siti alla chiusura di tutte le finestre** nel menu *Cookie e altri dati dei siti*

        Se desideri rimanere connesso a un particolare sito che si visita spesso, è possibile impostare eccezioni su base individuale nella sezione *Comportamenti personalizzati*.

</div>

1. Brave **non è** resistente al fingerprinting come il Tor Browser e molte meno persone utilizzano Brave con Tor, facendoti quindi distinguere. Quando [è necessario un forte anonimato](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) utilizzare il [Tor Browser](tor.md#tor-browser).

##### Estensioni

Disabilita le estensioni integrate che non utilizzi in **Estensioni**

- [ ] Disabilita **Hangouts**
- [ ] Disabilita **WebTorrent**

##### IPFS

L'InterPlanetary File System (IPFS) è una rete peer-to-peer e decentralizzata, utilizzata per archiviare e condividere dati mediante un filesystem distribuito. Se non utilizzi questa funzione, disabilitala.

- [x] Seleziona **Disabilitato** in Metodo per risolvere le risorse IPFS

##### Impostazioni aggiuntive

Sotto il menù *Sistema*

<div class="annotate" markdown>

- [ ] Disabilita **Continua a eseguire applicazioni in background dopo la chiusura di Brave** per disabilitare le applicazioni in background (1)

</div>

1. Questa opzione non è presente su tutte le piattaforme.

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permette ai dati di navigazione (cronologia, segnalibri, ecc.) di essere accessibili su tutti i dispositivi senza richiedere un account e li protegge con E2EE.

## Risorse aggiuntive

In genere non consigliamo l'installazione di estensioni, poiché aumentano la superficie di attacco. Tuttavia, uBlock Origin può rivelarsi utile se si apprezza la funzionalità di blocco dei contenuti.

### uBlock Origin

!!! recommendation

    ![uBlock Origin logo](assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin** è un popolare blocker di contenuti che aiuta a bloccare pubblicità, tracker e script di fingerprinting.
    
    [:octicons-repo-16: Repository](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

Consigliamo di seguire la [documentazione dello sviluppatore](https://github.com/gorhill/uBlock/wiki/Blocking-mode) e di scegliere una delle "modalità". Liste di filtri aggiuntive possono intaccare le prestazioni ed aumentare la superficie di attacco, quindi utilizza solo il necessario. Se è presente una [vulnerabilità in uBlock Origin](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css), un filtro di terze parti potrebbe aggiungere regole dannose che possono potenzialmente rubare i dati dell'utente.

---
title: "Browser mobile"
icon: octicons/device-mobile-16
description: Questi browser sono quelli che attualmente consigliamo per la navigazione Internet standard/non anonima sul tuo telefono.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Private Mobile Browser Recommendations
    url: "./"
    relatedLink: "../desktop-browsers/"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Brave
    image: /assets/img/browsers/brave.svg
    url: https://brave.com
    applicationCategory: Web Browser
    operatingSystem:
      - Android
    subjectOf:
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Safari
    image: /assets/img/browsers/safari.svg
    url: https://www.apple.com/safari/
    applicationCategory: Web Browser
    operatingSystem:
      - iOS
    subjectOf:
      "@type": WebPage
      url: "./"
---

Questi sono i browser e le configurazioni attualmente consigliati per la navigazione standard/non anonima. Se hai bisogno di navigare in Internet in modo anonimo, dovresti invece usare [Tor](tor.md). In generale, consigliamo di tenere il numero di estensioni al minimo: hanno accesso privilegiato all'interno del browser, richiedono di fidarsi dello sviluppatore, possono farti [risaltare](https://it.wikipedia.org/wiki/Device_fingerprint) e [indeboliscono](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) l'isolamento dei siti.

## Android

Per Android, Firefox è meno sicuro delle alternative basate su Chromium: il motore di Mozilla, [GeckoView](https://mozilla.github.io/geckoview/), non supporta ancora [l'isolamento dei siti](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) e non ha abilitato [l'isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

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
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)

#### Configurazione consigliata

Il Tor Browser è l'unico che veramente permette di navigare Internet anonimamente. Quando usi Brave, consigliamo di cambiare le seguenti impostazioni per proteggere la tua privacy da terze parti, ma tutti i browser eccetto il [Tor Browser](tor.md#tor-browser) sono tracciabili da *qualcuno* in qualche modo.

Queste opzioni si trovano in :material-menu: → **Impostazioni** → **Brave Shields & privacy**

##### Shields

Brave include alcune misure contro il fingerprinting nella sua funzionalità [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Consigliamo di configurare queste opzioni [globalmente](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) applicate a tutti i siti che visiti.

##### Valori predefiniti globali di Brave Shields

Le funzionalità di Shields possono essere ridotte per ogni sito se necessario; ciò nonostante, raccomandiamo le seguenti impostazioni:

<div class="annotate" markdown>

- [x] Seleziona **Aggressivo** sotto Blocca tracker & pubblicità

???? warning "Usa gli elenchi di filtri predefiniti"
        Brave ti consente di selezionare ulteriori filtri di contenuti mediante la pagina interna `brave://adblock`. Si consiglia di non utilizzare questa funzione e di mantenere gli elenchi di filtri predefiniti. il loro utilizzo ti distingue dagli altri utenti Brave, e potrebbe inoltre aumentare la superficie di attacco se esiste un exploit nel browser sfruttabile da codice malizioso presente nelle liste stesse.

- [x] Select **Upgrade connections to HTTPS**
- [x] Select **Always use secure connections**
- [x] (Optional) Select **Block Scripts** (1)
- [x] Select **Strict, may break sites** under **Block fingerprinting**

</div>

1. This option provides functionality similar to uBlock Origin's advanced [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode) or the [NoScript](https://noscript.net/) extension.

##### Svuota dati di navigazione

- [x] Seleziona **Cancellare i dati all'uscita**

##### Blocco dei social media

- [ ] Deseleziona tutte le opzioni legate ai social

##### Altre impostazioni sulla privacy

<div class="annotate" markdown>

- [x] Select **Disable non-proxied UDP** under [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Uncheck **Allow sites to check if you have payment methods saved**
- [ ] Uncheck **IPFS Gateway** (1)
- [x] Select **Close tabs on exit**
- [ ] Uncheck **Allow privacy-preserving product analytics (P3A)**
- [ ] Uncheck **Automatically send diagnostic reports**
- [ ] Uncheck **Automatically send daily usage ping to Brave**

</div>

1. InterPlanetary File System (IPFS) is a decentralized, peer-to-peer network for storing and sharing data in a distributed filesystem. Unless you use the feature, disable it.

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permette ai dati di navigazione (cronologia, segnalibri, ecc.) di essere accessibili su tutti i dispositivi senza richiedere un account e li protegge con E2EE.

## iOS

Per iOS, ogni app che può navigare il web è [costretta](https://developer.apple.com/app-store/review/guidelines) ad usare il framework [WebKit](https://developer.apple.com/documentation/webkit) di Apple, perciò non ci sono molti motivi per usare un browser di terze parti.

### Safari

!!! recommendation

    ![Safari logo](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** è il browser web predefinito di iOS. Include [funzionalità di privacy](https://support.apple.com/it-it/guide/iphone/iphb01fc3c85/15.0/ios/15.0) come l'anti-tracciamento intelligente, il resoconto sulla privacy, l'isolamento dei pannelli in navigazione privata, Relay privato di iCloud e aggiornamenti automatici all'HTTPS.
    
    [:octicons-home-16: Pagina principale](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Documentazione}

#### Configurazione consigliata

Queste opzioni si trovano in :gear: **Impostazioni** → **Safari** → **Privacy e sicurezza**.

##### Prevenzione del cross-site tracking

- [x] Attiva **Blocca cross-site tracking**

Questa opzione attiva la [Protezione intelligente dal tracciamento](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) di WebKit. La funzione aiuta a proteggere dal tracciamento indesiderato utilizzando l'apprendimento automatico sul dispositivo per bloccare i tracker. La PIT protegge dalla maggior parte dei pericoli comuni, ma non blocca tutte le vie di tracciamento, essendo progettato per non interferire con l'usabilità dei siti web.

##### Resoconto sulla privacy

Il resoconto sulla privacy fornisce un'istantanea dei tracker cross-site attualmente bloccati, impedendo loro di creare un tuo profilo sul sito web che stai visitando. Inoltre, fornisce un resoconto settimanale che mostra quali tracker sono stati bloccati.

Il resoconto sulla privacy è accessibile dal menu impostazioni pagina.

##### Misurazione pubblicità che tutela la privacy

- [ ] Disattiva **Misurazione pubblicità che tutela la privacy**

Tradizionalmente, la misurazione dei click pubblicitari usa tecnologia di tracciamento che viola la privacy dell'utente. La [Misurazione dei click privata](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) è una funzionalità di WebKit che propone uno standard web mirato, che consenta agli inserzionisti di misurare l'efficacia delle campagne web senza compromettere la privacy dell'utente.

Questa funzionalità non è molto preoccupante dal punto di vista della privacy di per sè, ma consideriamo che è automaticamente disabilitata duarante la navigazione privata come segnale per non utilizzarla.

##### Navigazione privata sempre attiva

Apri Safari e premi il pulsante Schede posto in basso a destra. Poi espandi la lista dei gruppi di schede.

- [x] Seleziona **Privata**

La modalità di navigazione privata di Safari offre ulteriori protezioni sulla privacy. La navigazione privata utilizza una nuova sessione [effimera](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) per ogni scheda, isolandole una dall'altra. La navigazione privata offre anche altri piccoli vantaggi in termini di privacy, come la possibilità di non inviare l'indirizzo di una pagina web ad Apple quando si usa la funzione di traduzione di Safari.

Nota che la navigazione privata non salva i cookie e i dati dei siti, quindi non sarà possibile mantenere l'accesso nei siti. Ciò può essere sconveniente.

##### Sincronizzazione iCloud

La sincronizzazione della cronologia di Safari, dei gruppi di schede, delle schede iCloud e delle password salvate è E2EE. Tuttavia, i segnalibri [non](https://support.apple.com/it-it/HT202303) lo sono in modo predefinito. Apple può decifrarli e accedervi in conformità con la sua [politica sulla privacy](https://www.apple.com/legal/privacy/it/).

Puoi abilitare la E2EE per i segnalibri e i download di Safari attivando la [Protezione avanzata dei dati](https://support.apple.com/it-it/HT212520). Vai al tuo **nome ID Apple → iCloud → Protezione avanzata dei dati**.

- [x] Attiva **Protezione avanzata dei dati**

Se usi iCloud con la Protezione avanzata dei dati, consigliamo anche di controllare che la posizione di download predefinita di Safari sia impostata localmente sul tuo dispositivo. Questa opzione si trova in :gear: **Impostazioni** → **Safari** → **Generale** → **Download**.

### AdGuard

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard per iOS** è un'estensione per il blocco dei contenuti gratuita ed open-source per Safari che utilizza la [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker) integrata.
    
    AdGuard per iOS ha alcune funzionalità premium, ma il blocco di contenuti standard di Safari è gratuito.
    
    [:octicons-home-16: Pagina principale](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Liste di filtri aggiuntive possono intaccare le prestazioni ed aumentare la superficie di attacco, quindi utilizza solo il necessario.

## Criteri

**Si noti che non siamo affiliati a nessuno dei progetti che consigliamo.** Oltre a [i nostri criteri standard](about/criteria.md), abbiamo sviluppato una chiara serie di requisiti che ci permettono di fornire raccomandazioni obiettive. Ti consigliamo di familiarizzare con questo elenco prima di scegliere di utilizzare un progetto e condurre le tue ricerche per assicurarti che sia la scelta giusta per te.

!!! example "Questa sezione è nuova"

    Stiamo lavorando per stabilire criteri definiti per ogni sezione del nostro sito, e questo potrebbe essere soggetto a modifiche. Se hai domande sui nostri criteri, [chiedi sul nostro forum](https://discuss.privacyguides.net/latest) e non dare per scontato che non abbiamo preso in considerazione qualcosa quando formuliamo i nostri consigli se non è elencato qui. Sono molti i fattori presi in considerazione e discussi quando raccomandiamo un progetto e documentare ogni singolo fattore è un lavoro in corso.

### Requisiti minimi

- Deve supportare gli aggiornamenti automatici.
- Deve ricevere gli aggiornamenti del motore in 0-1 giorni dalla pubblicazione upstream.
- Qualsiasi modifica necessaria per rendere il browser più rispettoso della privacy non dovrebbe avere un impatto negativo sull'esperienza dell'utente.
- I browser Android devono usare il motore Chromium.
    - Purtroppo, Mozilla GeckoView per ora è meno sicuro di Chromium su Android.
    - I browser iOS sono limitati a WebKit.

### Criteri delle estensioni

- Non deve replicare funzionalità integrate nel browser o del sistema operativo.
- Deve avere un impatto diretto sulla privacy dell'utente, cioè non deve limitarsi a fornire informazioni.

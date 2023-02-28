---
title: "Browser mobile"
icon: octicons/device-mobile-16
---

Questi sono i browser e le configurazioni attualmente consigliati per la navigazione standard e non anonima. Se hai bisogno di navigare in Internet in modo anonimo, dovresti invece utilizzare [Tor](tor.md). In generale, raccomandiamo di tenere il numero di estensioni al minimo: hanno accesso privilegiato all'interno del browser, richiedono di fidarsi dello sviluppatore, possono farti [risaltare](https://it.wikipedia.org/wiki/Device_fingerprint) e [indeboliscono](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) l'isolamento dei siti.

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

#### Firefox

Il Tor Browser è l'unico che veramente permette di navigare Internet anonimamente. Quando utilizzi Brave, consigliamo di cambiare le seguenti impostazioni per proteggere la tua privay da alcune parti, ma tutti i browser eccetto il [Tor Browser](tor.md#tor-browser) sono tracciabili da *qualcuno* in qualche modo.

Queste opzioni si trovano in :material-menu: → **Impostazioni** → **Brave Shields & privacy**

##### Shields

Brave include alcune misure contro il fingerprinting nella sua funzionalità [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Consigliamo di configurare queste opzioni [globalmente](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) applicate a tutti i siti che visiti.

##### Brave shields global defaults

Le funzionalità di Shields possono essere ridotte per ogni sito se necessario; ciò nonostante, raccomandiamo le seguenti impostazioni:

<div class="annotate" markdown>

- [x] Seleziona **Aggressivo** sotto Blocca tracker & pubblicità

???? warning "Usa gli elenchi di filtri predefiniti"
        Brave ti consente di selezionare ulteriori filtri di contenuti mediante la pagina interna `brave://adblock`. Si consiglia di non utilizzare questa funzione e di mantenere gli elenchi di filtri predefiniti. il loro utilizzo ti distingue dagli altri utenti Brave, e potrebbe inoltre aumentare la superficie di attacco se esiste un exploit nel browser sfruttabile da codice malizioso presente nelle liste stesse.

- [x] Seleziona **Aggiorna le connessioni a HTTPS**
- [x] (Opzionale) Seleziona **Blocco degli script** (1)
- [x] Sleziona **Rigido, potrebbe non far funzionare alcuni siti** in **Blocca il fingerprinting**

</div>

1. Questa opzione fornisce una funzionalità simile alle [modalità di blocco](https://github.com/gorhill/uBlock/wiki/Blocking-mode) avanzate di uBlock Origin o dell'estensione [NoScript](https://noscript.net/).

##### Clear browsing data

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

1. L'InterPlanetary File System (IPFS) è una rete peer-to-peer e decentralizzata, utilizzata per archiviare e condividere dati mediante un filesystem distribuito. Se non utilizzi questa funzione, disabilitala.

</div>

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permette ai dati di navigazione (cronologia, segnalibri, ecc.) di essere accessibili su tutti i dispositivi senza richiedere un account e li protegge con E2EE.

## iOS

Per iOS, ogni applicazione che può navigare il web è [ristretta](https://developer.apple.com/app-store/review/guidelines) ad utilizzare il framework di Apple [WebKit](https://developer.apple.com/documentation/webkit); non ci sono molte ragioni, quindi, per utilizzare un browser web di terzi.

### Safari

!!! recommendation

    ![Safari logo](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** è il browser web predefinito di iOS. Include [funzionalità di privacy](https://support.apple.com/it-it/guide/iphone/iphb01fc3c85/15.0/ios/15.0) come l'anti-tracciamento intelligente, il resoconto sulla privacy, l'isolamento dei pannelli in navigazione privata, Relay privato di iCloud e aggiornamenti automatici all'HTTPS.
    
    [:octicons-home-16: Pagina principale](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Documentazione}

#### Firefox

Queste opzioni si trovano in :gear: **Impostazioni** → **Safari** → **Privacy e sicurezza**.

##### Prevenzione del cross-site tracking

- [x] Seleziona **Blocca cross-site tracking**

Questa opzione abilita [l'anti-tracciamento intelligente](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) fornito da WebKit. La funzione aiuta a proteggere dal tracciamento indesiderato utilizzando l'apprendimento automatico sul dispositivo per bloccare i tracker. L'anti-tracciamento intelligente protegge dalla maggior parte dei pericoli comuni, ma non blocca tutte le vie di tracciamento, essendo progettato per non interferire con l'usabilità dei siti web.

##### Resoconto sulla privacy

Il resoconto sulla privacy fornisce un'istantanea dei tracker cross-site attualmente bloccati, impedendo loro di creare un tuo profilo sul sito web che stai visitando. Inoltre, fornisce un resoconto settimanale che mostra quali tracker sono stati bloccati.

Il rapporto sulla privacy è accessibile dal menu impostazioni pagina.

##### Misurazione pubblicità che tutela la privacy

- [ ] Disabilita **Misurazione pubblicità che tutela la privacy**

Tradizionalmente, la misurazione dei click pubblicitari usa tecnologia di tracciamento che viola la privacy dell'utente. La [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) è una funzionalità di WebKit che propone uno standard web mirato, che consenta agli inserzionisti di misurare l'efficacia delle campagne web senza compromettere la privacy dell'utente.

Questa funzionalità non è molto preoccupante dal punto di vista della privacy di per sè, ma consideriamo che è automaticamente disabilitata duarante la navigazione privata come segnale per non utilizzarla.

##### Navigazione privata sempre attiva

La sincronizzazione della cronologia di Safari, dei gruppi di pannelli, dei pannelli di iCloud e delle password salvate è E2EE. Poi espandi la lista dei gruppi di schede.

- [x] Seleziona **privata**

La modalità di navigazione privata di Safari offre ulteriori protezioni sulla privacy. La navigazione privata utilizza una nuova sessione [effimera](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) per ogni scheda, isolandole una dall'altra. La navigazione privata offre anche altri piccoli vantaggi in termini di privacy, come la possibilità di non inviare l'indirizzo di una pagina web ad Apple quando si usa la funzione di traduzione di Safari.

Non consigliamo generalmente di installare alcuna estensione, visto che incrementano la tua superficie di attacco. Ciò può essere sconveniente.

##### Sincronizzazione iCloud

La sincronizzazione della cronologia di Safari, dei gruppi di schede, delle schede iCloud e delle password salvate è E2EE. However, by default, bookmarks are [not](https://support.apple.com/en-us/HT202303). Apple può decifrarli e accedervi in conformità con la sua [politica sulla privacy](https://www.apple.com/legal/privacy/it/).

Se usi iCloud, consigliamo anche di controllare che la posizione di download predefinita di Safari sia impostata localmente sul tuo dispositivo. Go to your **Apple ID name → iCloud → Advanced Data Protection**.

- [x] Turn On **Advanced Data Protection**

If you use iCloud with Advanced Data Protection disabled, we also recommend checking to ensure Safari's default download location is set to locally on your device. Questa opzione si trova in :gear: **Impostazioni** → **Safari** → **Generale** → **Download**.

### AdGuard

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard for iOS** è un'estensione per il blocco dei contenuti gratuita ed open-source per Safari che utilizza la [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker) integrata.
    
    AdGuard per iOS ha alcune funzionalità premium, ma il blocco di contenuti standard di Safari è gratuito.
    
    [:octicons-home-16: Pagina principale](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Liste di filtri aggiuntive possono intaccare le prestazioni ed aumentare la superficie di attacco, quindi utilizza solo il necessario.

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

- Must support automatic updates.
- Must receive engine updates in 0-1 days from upstream release.
- Any changes required to make the browser more privacy-respecting should not negatively impact user experience.
- Android browsers must use the Chromium engine.
    - Unfortunately, Mozilla GeckoView is still less secure than Chromium on Android.
    - iOS browsers are limited to WebKit.

### Extension Criteria

- Must not replicate built-in browser or OS functionality.
- Must directly impact user privacy, i.e. must not simply provide information.

--8<-- "includes/abbreviations.it.txt"

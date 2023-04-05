---
title: "Servizi VPN"
icon: material/vpn
description: Questi sono i migliori servizi VPN per proteggere la tua privacy e sicurezza online. Trovate un fornitore che non ti spii.
---

Se stai cercando ulteriore **privacy** dal tuo ISP, su una rete Wi-Fi pubblica o durante il torrenting di file, una VPN potrebbe essere la soluzione per te purché tu comprenda i rischi coinvolti. Riteniamo che questi provider siano una spanna sopra gli altri:

<div class="grid cards" markdown>

- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! danger "Le VPN non forniscono anonimato"

    L'utilizzo di una VPN **non** manterrà anonime le tue abitudini di navigazione, né aggiungerà ulteriore sicurezza al traffico non sicuro (HTTP).
    
    Se stai cercando **anonimato**, dovresti usare il Tor Browser **invece** di una VPN.
    
    Se stai cercando maggiore **sicurezza**, dovresti sempre assicurarti di connetterti a siti Web usando HTTPS. Una VPN non è un sostituto per buone pratiche di sicurezza.
    
    [Scarica Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Tor Myths & FAQ](basics/tor-overview.md){ .md-button }

[Panoramica dettagliata della VPN :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Provider consigliati

I fornitori che consigliamo utilizzano la crittografia, accettano Monero, supportano WireGuard & OpenVPN e applicano una politica di non registrazione del traffico. Leggi la nostra [lista completa di criteri](#criteria) per maggiori informazioni.

### IVPN

!!! recommendation

    ![IVPN logo](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** è un altro provider VPN premium, il quale opera dal 2009. IVPN ha sede a Gibilterra.
    
    [:octicons-home-16: Pagina principale](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 Paesi

IVPN ha [server in 35 paesi](https://www.ivpn.net/server-locations).(1) Scegliere un provider VPN con un server più vicino a te ridurrà la latenza del traffico di rete che invii. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 16-09-2022

Riteniamo inoltre che sia meglio per la sicurezza delle chiavi private del provider VPN utilizzare [server dedicati](https://en.wikipedia.org/wiki/Dedicated_hosting_service), invece di soluzioni condivise più economiche (con altri clienti) come [server privati virtuali](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Audit indipendente

IVPN è stata sottoposta a un [audit no-logging da parte di Cure53](https://cure53.de/audit-report_ivpn.pdf) che si è concluso in favore della dichiarazione di no-logging di IVPN. IVPN ha inoltre completato un [esauriente rapporto pentest Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) nel gennaio 2020. IVPN ha inoltre dichiarato di avere in programma [rapporti annuali](https://www.ivpn.net/blog/independent-security-audit-concluded) in futuro. Un'ulteriore revisione è stata condotta [nell'aprile 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) ed è stata prodotta da Cure53 [sul loro sito web](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Client Open-Source

A partire da febbraio 2020 [le applicazioni IVPN sono ora open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Il codice sorgente può essere ottenuto dalla loro organizzazione [GitHub](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accetta contanti e Monero

Oltre ad accettare carte di credito/debito e PayPal, IVPN accetta Bitcoin, **Monero** e **contanti/valuta locale** (sui piani annuali) come forme anonime di pagamento.

#### :material-check:{ .pg-green } Supporto WireGuard

IVPN supporta il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) è un protocollo più recente che utilizza una crittografia [all'avanguardia](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

IVPN [raccomanda](https://www.ivpn.net/wireguard/) l'uso di WireGuard con il proprio servizio e, pertanto, il protocollo è quello predefinito in tutte le applicazioni di IVPN. IVPN offre anche un generatore di configurazione WireGuard da utilizzare con le [app](https://www.wireguard.com/install/) ufficiali WireGuard.

#### :material-check:{ .pg-green } Port Forwarding remoto

Il port forwarding remoto [](https://en.wikipedia.org/wiki/Port_forwarding) è possibile con un piano Pro. Il port forwarding [può essere attivato](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) tramite l'area client. Il port forwarding è disponibile su IVPN solo quando si utilizzano protocolli WireGuard o OpenVPN ed è [disabilitato sui server statunitensi](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Client Mobile

Oltre a fornire file di configurazione OpenVPN standard, IVPN ha client mobili per [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client)e [GitHub](https://github.com/ivpn/android-app/releases) che consentono facili connessioni ai loro server.

#### :material-information-outline:{ .pg-blue } Funzionalità aggiuntive

I client IVPN supportano l'autenticazione a due fattori (i client Mullvad no). IVPN offre anche la funzionalità "[AntiTracker](https://www.ivpn.net/antitracker)", che blocca le reti pubblicitarie e i tracker a livello di rete.

### Mullvad

!!! recommendation

    ![Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** è una VPN veloce ed economica con una grande attenzione alla trasparenza e alla sicurezza. Sono operativi dal **2009**. Mullvad ha sede in Svezia e non dispone di una prova gratuita.
    
    [:octicons-home-16: Pagina principale](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

#### :material-check:{ .pg-green } 41 Paesi

Mullvad ha [server in 41 paesi](https://mullvad.net/servers/).(1) Scegliere un provider VPN con un server più vicino a te ridurrà la latenza del traffico di rete che invii. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 19-01-2023

Riteniamo inoltre che sia meglio per la sicurezza delle chiavi private del provider VPN utilizzare [server dedicati](https://en.wikipedia.org/wiki/Dedicated_hosting_service), invece di soluzioni condivise più economiche (con altri clienti) come [server privati virtuali](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Audit indipendente

I client VPN di Mullvad sono stati verificati da Cure53 e Assured AB in un rapporto pentest [pubblicato su cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). I ricercatori di sicurezza hanno concluso:

> Cure53 e Assured AB sono soddisfatti dei risultati dell'audit e il software lascia un'impressione complessivamente positiva. Con la dedizione alla sicurezza del team interno al complesso Mullvad VPN, i tester non hanno dubbi riguardo alla giusta direzione del progetto da un punto di vista della sicurezza.

Nel 2020 [ è stato annunciato](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) un secondo audit e il [rapporto di audit finale](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) è stato reso disponibile sul sito web di Cure53:

> I risultati di questo progetto di maggio-giugno 2020 rivolto al complesso di Mullvad sono piuttosto positivi. [...] L'ecosistema applicativo complessivo utilizzato da Mullvad lascia un'impressione solida e strutturata. La struttura complessiva dell'applicazione rende facile l'introduzione di patch e correzioni in modo strutturato. Più di ogni altra cosa, i risultati individuati da Cure53 mostrano l'importanza di controllare e rivalutare costantemente gli attuali vettori di fuga, al fine di garantire sempre la privacy degli utenti finali. Detto questo, Mullvad fa un ottimo lavoro nel proteggere l'utente finale dalle comuni perdite di informazioni d'identificazione personale e i relativi rischi legati alla privacy.

Nel 2021 [è stato annunciato](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) un audit dell'infrastruttura e il [rapporto di audit finale](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) è stato reso disponibile sul sito web di Cure53. Un altro rapporto è stato commissionato [nel giugno 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) ed è disponibile sul sito Web di [Assured](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Client Open-Source

Mullvad fornisce il codice sorgente per i loro client desktop e mobili nella loro organizzazione [GitHub](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accetta contanti e Monero

Mullvad, oltre ad accettare carte di credito/debito e PayPal, accetta Bitcoin, Bitcoin Cash, **Monero** e **contanti/valuta locale** come forme anonime di pagamento. Accettano inoltre Swish e bonifici bancari.

#### :material-check:{ .pg-green } Supporto WireGuard

Mullvad supporta il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) è un protocollo più recente che utilizza una crittografia [all'avanguardia](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

Mullvad [raccomanda a](https://mullvad.net/en/help/why-wireguard/) l'uso di WireGuard con il proprio servizio. È il protocollo predefinito o l'unico sulle app Mullvad per Android, iOS, macOS e Linux, ma su Windows è necessario [abilitare manualmente](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad offre anche un generatore di configurazione WireGuard da utilizzare con le [app](https://www.wireguard.com/install/) ufficiali WireGuard.

#### :material-check:{ .pg-green } Supporto IPv6

Mullvad supporta il futuro del networking [IPv6](https://en.wikipedia.org/wiki/IPv6). La loro rete consente di accedere a [servizi ospitati su IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) a differenza di altri provider che bloccano le connessioni IPv6.

#### :material-check:{ .pg-green } Port Forwarding remoto

Il [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) remoto è consentito per chi effettua pagamenti una tantum, ma non per gli account con metodo di pagamento ricorrente/sottoscrizione. Questo per evitare che Mullvad possa identificarti in base all'utilizzo della porta e alle informazioni di abbonamento memorizzate. Per ulteriori informazioni, controlla [Port forwarding con Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/).

#### :material-check:{ .pg-green } Client Mobile

Mullvad ha pubblicato i client [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) e [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), entrambi hanno un'interfaccia facile da usare anziché richiedere di configurare manualmente la connessione WireGuard. Il client Android è disponibile anche su [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Funzionalità aggiuntive

Mullvad è molto trasparente su quali nodi [possiede o fitta](https://mullvad.net/en/servers/). Utilizzano [ShadowSocks](https://shadowsocks.org/) nella loro configurazione ShadowSocks + OpenVPN, rendendoli più resistenti ai firewall con [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) che cercano di bloccare le VPN. Presumibilmente, la [Cina deve utilizzare un metodo diverso per bloccare i server ShadowSocks](https://github.com/net4people/bbs/issues/22). Il sito web di Mullvad è accessibile anche tramite Tor presso [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

!!! recommendation annotate

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** è un forte concorrente nello spazio VPN ed è attivo dal 2016. Proton AG ha sede in Svizzera e offre un livello gratuito limitato, così come un'opzione premium più ricca di funzioni.
    
    **Gratuito** — **Piano Plus da 71,88€ all'anno** (1)
    
    [:octicons-home-16: Pagina principale](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Codice sorgente" } downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

#### :material-check:{ .pg-green } 67 Paesi

Proton VPN ha [server in 67 paesi](https://protonvpn.com/vpn-servers).(1) Scegliere un provider VPN con un server più vicino a te ridurrà la latenza del traffico di rete che invii. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 16-09-2022

Riteniamo inoltre che sia meglio per la sicurezza delle chiavi private del provider VPN se utilizzano [server dedicati](https://en.wikipedia.org/wiki/Dedicated_hosting_service), invece di soluzioni condivise più economiche (con altri clienti) come [server privati virtuali](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Audit indipendente

Nel mese di gennaio del 2020, Proton VPN è stato sottoposto ad un audit indipendente da parte di SEC Consult. SEC Consult ha riscontrato alcune vulnerabilità di basso e medio rischio nelle applicazioni di Windows, Android e iOS, le quali sono state "adeguatamente risolte" da Proton VPN prima della pubblicazione dei rapporti. Nessuno dei problemi identificati avrebbe potuto garantire a un hacker di accedere da remoto al tuo dispositivo o al tuo traffico. Puoi visualizzare i singoli report per ciascuna piattaforma su [protonvpn.com](https://protonvpn.com/blog/open-source/). Nell'aprile 2022 Proton VPN ha riceuto [un altro audit](https://protonvpn.com/blog/no-logs-audit/) e il rapporto è stato [prodotto da Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). Una [lettera di attestazione](https://proton.me/blog/security-audit-all-proton-apps) è stata fornita per le applicazioni di Proton VPN il 9 novembre 2021 da [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Client Open-Source

Proton VPN fornisce il codice sorgente per i loro client desktop e mobile nella loro organizzazione [GitHub](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accetta contanti

Proton VPN, oltre ad accettare carte di credito/debito, PayPal e [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), accetta anche **contanti/valuta locale** come forma anonima di pagamento.

#### :material-check:{ .pg-green } Supporto WireGuard

Proton VPN supporta principalmente il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) è un protocollo più recente che utilizza una crittografia [all'avanguardia](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

Proton VPN [consiglia](https://protonvpn.com/blog/wireguard/) l'uso di WireGuard con il loro servizio. Sulle app Proton VPN per Windows, macOS, iOS, Android, ChromeOS e Android TV, WireGuard è il protocollo predefinito; tuttavia, il supporto [](https://protonvpn.com/support/how-to-change-vpn-protocols/) per il protocollo non è presente nella loro app Linux.

#### :material-alert-outline:{ .pg-orange } Port Forwarding remoto

Proton VPN attualmente supporta solo il [port forwarding](https://protonvpn.com/support/port-forwarding/) remoto su Windows, il che potrebbe influire su alcune applicazioni. In particolare le applicazioni Peer-to-peer come i client Torrent.

#### :material-check:{ .pg-green } Client mobile

Oltre a fornire file di configurazione OpenVPN standard, Proton VPN ha client mobile per [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US)e [GitHub](https://github.com/ProtonVPN/android-app/releases) che consentono facili connessioni ai loro server.

#### :material-information-outline:{ .pg-blue } Funzionalità aggiuntive

I client Proton VPN supportano l'autenticazione a due fattori su tutte le piattaforme, ad eccezione di Linux, al momento. Proton VPN ha i propri server e datacenter in Svizzera, Islanda e Svezia. Offrono il blocco delle pubblicità e dei domini malware noti mediante il loro servizio DNS. Inoltre, Proton VPN offre anche server "Tor" che consentono di connettersi facilmente ai siti onion, ma consigliamo comunque di utilizzare [il browser Tor ufficiale](https://www.torproject.org/) per questo scopo.

#### :material-alert-outline:{ .pg-orange } La funzione Killswitch non funziona sui Mac basati su Intel

Arresti anomali del sistema [possono verificarsi](https://protonvpn.com/support/macos-t2-chip-kill-switch/) sui Mac basati su Intel quando si utilizza la funzionalità killswitch VPN. Se hai bisogno di questa funzione e utilizzi un Mac con chipset Intel, dovresti considerare l'utilizzo di un altro servizio VPN.

## CryptPad

!!! danger "Pericolo"

    È importante notare che l'utilizzo di una VPN non ti rende anonimo, ma può migliorare la tua privacy in alcune situazioni. Una VPN non è uno strumento per attività illegali. Non affidarti ad una politica "no log".

**Si prega di notare che non siamo affiliati a nessuno dei fornitori che raccomandiamo. Questo ci permette di fornire raccomandazioni completamente oggettive.** Abbiamo sviluppato un insieme di requisti chiari per ogni provider di VPN, tra cui una forte crittografia, controlli sulla sicurezza indipendenti, tecnologia moderna e altro. Ti suggeriamo di familiarizzare con questa lista prima di scegliere un provider VPN e di condurre la propria ricerca per assicurarsi che il provider scelto sia il più affidabile possibile.

### Tecnologia

Richiediamo a tutti i provider VPN da noi consigliati di fornire file di configurazione OpenVPN da utilizzare in qualsiasi client. **Se** una VPN fornisce il proprio client personalizzato, richiediamo un killswitch per bloccare le fughe di dati di rete quando si è disconnessi.

**Requisiti minimi:**

- Supporto per protocolli forti come WireGuard & OpenVPN.
- Killswitch integrato nei client.
- Supporto multihop. Il multihopping è importante per mantenere i dati privati nel caso in cui un nodo venisse compromesso.
- Se vengono forniti client VPN, devono essere [open-source](https://en.wikipedia.org/wiki/Open_source), come il software VPN che generalmente hanno incorporato. Crediamo che la disponibilità del [codice sorgente](https://en.wikipedia.org/wiki/Source_code) fornisca grande trasparenza riguardo ciò che il tuo dispositivo sta effettivamente facendo.

**Caso migliore:**

- Supporto per WireGuard e OpenVPN.
- Killswitch con opzioni altamente configurabili (abilitazione/disabilitazione su determinate reti, all'avvio, ecc.)
- Client VPN facili da usare
- Supporto per [IPv6](https://en.wikipedia.org/wiki/IPv6). Ci aspettiamo che i server accettino connessioni in arrivo via IPv6 e che ti permettano di accedere a servizi su indirizzi IPv6.
- La capacità di [port forwarding remoto](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) aiuta a creare connessioni quando si utilizza software per la condivisione file P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)), o nell'hosting di un server (es. Mumble).

### Privacy

Preferiamo che i provider da noi consigliati raccolgano il minor numero di dati possibile. È necessario non raccogliere informazioni personali al momento della registrazione e accettare forme di pagamento anonime.

**Requisiti minimi:**

- [Criptovaluta anonima](cryptocurrency.md) **o** opzione di pagamento in contanti.
- Nessuna informazione personale richiesta per registrarsi: solo nome utente, password ed e-mail al massimo.

**Caso migliore:**

- Accetta più [opzioni di pagamento anonime](advanced/payments.md).
- Non sono accettate informazioni personali (nome utente autogenerato, nessuna mail richiesta, ecc.).

### Sicurezza

Una VPN è inutile se non è nemmeno in grado di fornire una sicurezza adeguata. Richiediamo a tutti i nostri provider consigliati di rispettare gli standard di sicurezza attuali per le loro connessioni OpenVPN. L'ideale sarebbe utilizzare schemi di crittografia a prova di futuro per impostazione predefinita. Richiediamo inoltre che una terza parte indipendente verifichi la sicurezza del fornitore, idealmente in modo molto completo e su base ripetuta (annuale).

**Requisiti minimi:**

- Schemi di crittografia forti: OpenVPN con autenticazione SHA-256; handshake RSA-2048 o migliore; crittografia dei dati AES-256-GCM o AES-256-CBC.
- Perfect Forward Secrecy (PFS).
- Audit sulla sicurezza pubblicati da un'azienda terza affidabile.

**Caso migliore:**

- Crittografia più forte: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Audit sulla sicurezza completi pubblicati da un'azienda terza affidabile.
- Programmi di bug-bounty e/o un processo coordinato di divulgazione delle vulnerabilità.

### Fiducia

Non affideresti le tue finanze a qualcuno con un'identità falsa, quindi perché dovresti affidargli i tuoi dati internet? Richiediamo che i provider da noi consigliati rendano pubbliche la loro dirigenza o proprietà. Vorremmo anche vedere frequenti rapporti di trasparenza, soprattutto per quanto riguarda il modo in cui vengono gestite le richieste del governo.

**Requisiti minimi:**

- Dirigenza o proprietà pubblica.

**Caso migliore:**

- Dirigenza pubblica.
- Rapporti di trasparenza frequenti.

### Marketing

Con i fornitori di VPN che raccomandiamo ci piace vedere un marketing responsabile.

**Requisiti minimi:**

- Deve utilizzare sistemi di analisi dei dati propri (es. no Google Analytics). Il sito del provider deve inoltre rispettare [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) per le persone che desiderano rinunciare.

Non deve avere alcun marketing ritenuto irresponsabile:

- Garantire al 100% la protezione dell'anonimato. Quando qualcuno afferma che qualcosa è al 100% significa che non esiste fallimento. Sappiamo che le persone possono deanonimizzarsi facilmente in vari modi, ad es.:
    - Riutilizzare informazioni personali (es., account e-mail, pseudonimi unici ecc.) con cui hanno eseguito accessi senza software di anonimizzazione (Tor, VPN, ecc.)
    - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Sostenere che un singolo circuito VPN è più "anonimo di Tor", il quale è un circuito con 3 o più hop che cambiano regolarmente.
- Utilizzare linguaggio responsabile: per esempio, è accettabile dire che la VPN è "disconnessa" o "non connessa", tuttavia affermare che un utente è "esposto", "vulnerabile" o "compromesso" può creare allarmismi incorretti e inutili. Per esempio, quella persona potrebbe semplicemente star usando un'altra VPN o Tor.

**Caso migliore:**

Il marketing responsabile, che è sia educativo che utile per il consumatore, potrebbe includere:

- Un confronto accurato con quando si dovrebbe usare [Tor](tor.md).
- Disponibilità del sito web del provider VPN su un [servizio .onion](https://en.wikipedia.org/wiki/.onion)

### Funzionalità aggiuntive

Anche se non requisiti rigidi, ci sono alcuni fattori che abbiamo considerato nel determinare quali servizi consigliare. Tra questi ci sono funzionalità di blocco dei tracker e delle pubblicità, canarini di garanzia, connessioni multihop, eccellenza nell'assistenza clienti, numero di connessioni simultanee consentite, ecc.

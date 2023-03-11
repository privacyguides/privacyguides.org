---
title: "VPN Services"
icon: material/vpn
description: These are the best VPN services for protecting your privacy and security online. Find a provider here that isn’t out to spy on you.
---

If you're looking for additional **privacy** from your ISP, on a public Wi-Fi network, or while torrenting files, a VPN may be the solution for you as long as you understand the risks involved. We think these providers are a cut above the rest:

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

[Detailed VPN Overview :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Provider consigliati

I fornitori che consigliamo utilizzano la crittografia, accettano Monero, supportano WireGuard & OpenVPN e applicano una politica di non registrazione del traffico. Read our [full list of criteria](#criteria) for more information.

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

#### :material-check:{ .pg-green } 35 Countries

IVPN has [servers in 35 countries](https://www.ivpn.net/server-locations).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 16-09-2022

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

IVPN has undergone a [no-logging audit from Cure53](https://cure53.de/audit-report_ivpn.pdf) which concluded in agreement with IVPN's no-logging claim. IVPN has also completed a [comprehensive pentest report Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in January 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

As of February 2020 [IVPN applications are now open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepts Cash and Monero

In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment.

#### :material-check:{ .pg-green } WireGuard Support

IVPN supporta il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

IVPN [recommends](https://www.ivpn.net/wireguard/) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is possible with a Pro plan. Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, IVPN has mobile clients for [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), and [GitHub](https://github.com/ivpn/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

I client IVPN supportano l'autenticazione a due fattori (i client Mullvad no). IVPN also provides "[AntiTracker](https://www.ivpn.net/antitracker)" functionality, which blocks advertising networks and trackers from the network level.

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

#### :material-check:{ .pg-green } 41 Countries

Mullvad has [servers in 41 countries](https://mullvad.net/servers/).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 19-01-2023

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Mullvad's VPN clients have been audited by Cure53 and Assured AB in a pentest report [published at cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). The security researchers concluded:

> Cure53 and Assured AB are happy with the results of the audit and the software leaves an overall positive impression. Con la dedizione alla sicurezza del team interno al complesso Mullvad VPN, i tester non hanno dubbi riguardo alla giusta direzione del progetto da un punto di vista della sicurezza.

In 2020 a second audit [was announced](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) was made available on Cure53's website:

> The results of this May-June 2020 project targeting the Mullvad complex are quite positive. [...] L'ecosistema applicativo complessivo utilizzato da Mullvad lascia un'impressione solida e strutturata. La struttura complessiva dell'applicazione rende facile l'introduzione di patch e correzioni in modo strutturato. Più di ogni altra cosa, i risultati individuati da Cure53 mostrano l'importanza di controllare e rivalutare costantemente gli attuali vettori di fuga, al fine di garantire sempre la privacy degli utenti finali. Detto questo, Mullvad fa un ottimo lavoro nel proteggere l'utente finale dalle comuni perdite di informazioni d'identificazione personale e i relativi rischi legati alla privacy.

In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepts Cash and Monero

Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. Accettano inoltre Swish e bonifici bancari.

#### :material-check:{ .pg-green } WireGuard Support

Mullvad supporta il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } IPv6 Support

Mullvad supports the future of networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Their network allows you to [access services hosted on IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) as opposed to other providers who block IPv6 connections.

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is allowed for people who make one-time payments, but not allowed for accounts with a recurring/subscription-based payment method. Questo per evitare che Mullvad possa identificarti in base all'utilizzo della porta e alle informazioni di abbonamento memorizzate. See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

#### :material-check:{ .pg-green } Mobile Clients

Mullvad has published [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) and [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Additional Functionality

Mullvad is very transparent about which nodes they [own or rent](https://mullvad.net/en/servers/). They use [ShadowSocks](https://shadowsocks.org/) in their ShadowSocks + OpenVPN configuration, making them more resistant against firewalls with [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) trying to block VPNs. Supposedly, [China has to use a different method to block ShadowSocks servers](https://github.com/net4people/bbs/issues/22). Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

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

#### :material-check:{ .pg-green } 67 Countries

Proton VPN has [servers in 67 countries](https://protonvpn.com/vpn-servers).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Ciò è dovuto al fatto che il percorso verso la destinazione è più breve (meno hop).
{ .annotate }

1. Ultimo controllo: 16-09-2022

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Nel mese di gennaio del 2020, Proton VPN è stato sottoposto ad un audit indipendente da parte di SEC Consult. SEC Consult ha riscontrato alcune vulnerabilità di basso e medio rischio nelle applicazioni di Windows, Android e iOS, le quali sono state "adeguatamente risolte" da Proton VPN prima della pubblicazione dei rapporti. Nessuno dei problemi identificati avrebbe potuto garantire a un hacker di accedere da remoto al tuo dispositivo o al tuo traffico. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source/). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit/) and the report was [produced by Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Open-Source Clients

Proton VPN provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepts Cash

Proton VPN, in addition to accepting credit/debit cards, PayPal, and [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), also accepts **cash/local currency** as an anonymous form of payment.

#### :material-check:{ .pg-green } WireGuard Support

Proton VPN supporta principalmente il protocollo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Inoltre, WireGuard mira a essere più semplice e performante.

Proton VPN [recommends](https://protonvpn.com/blog/wireguard/) the use of WireGuard with their service. On Proton VPN's Windows, macOS, iOS, Android, ChromeOS, and Android TV apps, WireGuard is the default protocol; however, [support](https://protonvpn.com/support/how-to-change-vpn-protocols/) for the protocol is not present in their Linux app.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

Proton VPN currently only supports remote [port forwarding](https://protonvpn.com/support/port-forwarding/) on Windows, which may impact some applications. In particolare le applicazioni Peer-to-peer come i client Torrent.

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, Proton VPN has mobile clients for [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

I client Proton VPN supportano l'autenticazione a due fattori su tutte le piattaforme, ad eccezione di Linux, al momento. Proton VPN ha i propri server e datacenter in Svizzera, Islanda e Svezia. Offrono il blocco delle pubblicità e dei domini malware noti mediante il loro servizio DNS. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

#### :material-alert-outline:{ .pg-orange } Killswitch feature is broken on Intel-based Macs

System crashes [may occur](https://protonvpn.com/support/macos-t2-chip-kill-switch/) on Intel-based Macs when using the VPN killswitch. Se hai bisogno di questa funzione e utilizzi un Mac con chipset Intel, dovresti considerare l'utilizzo di un altro servizio VPN.

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

- [Anonymous cryptocurrency](cryptocurrency.md) **or** cash payment option.
- Nessuna informazione personale richiesta per registrarsi: solo nome utente, password ed e-mail al massimo.

**Caso migliore:**

- Accepts multiple [anonymous payment options](advanced/payments.md).
- No personal information accepted (autogenerated username, no email required, etc.).

### Sicurezza

Una VPN è inutile se non è nemmeno in grado di fornire una sicurezza adeguata. Richiediamo a tutti i nostri provider consigliati di rispettare gli standard di sicurezza attuali per le loro connessioni OpenVPN. L'ideale sarebbe utilizzare schemi di crittografia a prova di futuro per impostazione predefinita. Richiediamo inoltre che una terza parte indipendente verifichi la sicurezza del fornitore, idealmente in modo molto completo e su base ripetuta (annuale).

**Requisiti minimi:**

- Schemi di crittografia forti: OpenVPN con autenticazione SHA-256; handshake RSA-2048 o migliore; crittografia dei dati AES-256-GCM o AES-256-CBC.
- Perfect Forward Secrecy (PFS).
- Audit sulla sicurezza pubblicati da un'azienda terza affidabile.

**Best Case:**

- Crittografia più forte: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Audit sulla sicurezza completi pubblicati da un'azienda terza affidabile.
- Programmi di bug-bounty e/o un processo coordinato di divulgazione delle vulnerabilità.

### Fiducia

Non affideresti le tue finanze a qualcuno con un'identità falsa, quindi perché dovresti affidargli i tuoi dati internet? Richiediamo che i provider da noi consigliati rendano pubbliche la loro dirigenza o proprietà. Vorremmo anche vedere frequenti rapporti di trasparenza, soprattutto per quanto riguarda il modo in cui vengono gestite le richieste del governo.

**Requisiti minimi:**

- Dirigenza o proprietà pubblica.

**Best Case:**

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

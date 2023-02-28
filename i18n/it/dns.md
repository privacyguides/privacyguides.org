---
title: "Resolver DNS"
icon: material/dns
---

!!! faq "Quando utilizzare il DNS crittografato?"

    I DNS crittografati con server di terze parti dovrebbero essere utilizzati solo per aggirare forme di [blocco del DNS](https://en.wikipedia.org/wiki/DNS_blocking) basilari, quando sei sicuro che ciò non causi alcuna conseguenza. Il DNS crittografato non aiuta a nascondere la tua attività di navigazione.
    
    [Per saperne di più sul DNS](basics/dns-overview.md){ .md-button }

## Provider consigliati

| Fornitore DNS                                                                   | Informativa sulla privacy                                                                             | Protocolli                                                    | Logging       | ECS       | Filtraggio                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | In parte[^1]  | No        | In base alla scelta del server. L'elenco dei filtri utilizzati è disponibile qui. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                     | In parte[^2]  | No        | In base alla scelta del server.                                                                                                                            |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ      | Opzionale[^3] | No        | In base alla scelta del server.                                                                                                                            |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | No[^4]        | No        | In base alla scelta del server. L'elenco dei filtri utilizzati è disponibile qui. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                     | Optional[^5]  | Opzionale | In base alla scelta del server.                                                                                                                            |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt   | In parte[^6]  | Opzionale | In base alla scelta del server, blocco dei malware di default.                                                                                             |

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

- Deve supportare le [DNSSEC](advanced/dns-overview.md#what-is-dnssec)
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Consente di disabilitare la [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs)
- Preferire il supporto di [anycast](https://it.wikipedia.org/wiki/Anycast) o il supporto di geo-steering

## Proxy DNS crittografati

### Android

Le utlime versioni di iOS, iPadOS, tvOS e macOS supportano sia DoT, che DoH. Entrambi i protocolli sono supportati nativamente mediante i [profili di configurazione](https://support.apple.com/it-it/guide/iphone/iph6c493b19/ios) o tramite l'[API DNS Settings](https://developer.apple.com/documentation/networkextension/dns_settings).

### Dispositivi Apple

Dopo l'installazione di un profilo di configurazione o di un'applicazione che utilizza la DNS Settings API, è possibile selezionare la configurazione DNS. Se una VPN è attiva, la risoluzione all'interno del tunnel VPN utilizzerà le impostazioni DNS della VPN, e non quelle del sistema.

Apple non fornisce un'interfaccia nativa per la creazione di profili DNS criptati. Il '[Secure DNS profile creator](https://dns.notjakob.com/tool.html)' è uno strumento non ufficiale per creare i tuoi profili DNS crittografati, che tuttavia non saranno firmati.

#### Profili firmati

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    ![Logo RethinkDNS](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** è un client Android open-source che supporta [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) e DNS Proxy oltre a memorizzare nella cache le risposte DNS, registrare localmente le query DNS e può essere usato anche come firewall. [:octicons-home-16: Pagina principale](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Codice sorgente" }
    
    ???

## Self-hosting

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](advanced/dns-overview.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![logo dnscrypt-proxy](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** è un proxy DNS con supporto per [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh) e [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Source Code" }
    
    ??? warning "La funzione DNS anonimizzato [**non**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonimizza il resto del traffico di rete."

### dnscrypt-proxy

!!! recommendation

    ![Logo AdGuard Home](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** è un programma open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) che utilizza il [filtraggio DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) per bloccare i contenuti web indesiderati, come la pubblicità.
    
    !!! [:octicons-home-16: Pagina principale](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Codice sorgente" }
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Self-hosted Solutions

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as Smart TVs and other IoT devices, as no client-side software is needed.

### AdGuard Home

!!! recommendation

    ![Logo Pi-hole](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** è un sito open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) che utilizza il [filtraggio DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) per bloccare contenuti web indesiderati, come la pubblicità.
    
    Pi-hole è stato progettato per essere ospitato su un Raspberry Pi, ma non è limitato a tale hardware.
    
    Il software dispone di un'interfaccia web intuitiva per visualizzare gli approfondimenti e gestire i contenuti bloccati.

### Pi-hole

!!! recommendation

    ![Pi-hole logo](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribute }

--8<-- "includes/abbreviations.it.txt"

[^1]: AdGuard memorizza le statistiche aggregate delle prestazioni dei propri server DNS, ovvero il numero di richieste dirette a un particolare server, il numero di richieste bloccate e la velocità di elaborazione di esse. Inoltre, conservano e memorizzano i domini richiesti nelle ultime 24 ore. "Abbiamo bisogno di queste informazioni per identificare e bloccare nuovi tracker e minacce" "Registriamo anche quante volte un tracker viene bloccato. Abbiamo bisogno di queste informazioni per rimuovere le regole obsolete dai nostri filtri" [https://adguard.com/it/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare raccoglie e memorizza solo dati limitati delle stringhe DNS che vengono inviate al resolver 1.1.1.1. Il resolver 1.1.1.1 non registra dati personali, e la maggior parte dei dati di identificazione personali limitati nelle stringhe DNS viene archiviata per solo 25 ore. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D registra solo i resolver Premium con profili DNS personalizzati. I resolver gratuiti non registrano dati. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Il servizio di DNS di Mullvad è disponibile per tutti, abbonati a Mullvad VPN e non. La loro informativa sulla privacy dichiara che non registrano in alcun modo le richieste DNS. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS fornisce funzioni opzionali di approfondimento e di logging. Puoi decidere il tempo di retenzione e la posizione dell'archivio per tutti i dati che decidi di registrare. A meno che non venga specificatamente richiesto, nessun dato viene registrato. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 raccoglie alcuni dati con l'intenzione di monitorare e rispondere a eventuali minacce. Tali dati potrebbero essere poi rimescolati e condivisi, ad esempio ai fini della ricerca sulla sicurezza. Quad9 non colleziona o registra gli indirizzi IP, o qualsiasi altro dato ritenuto d'identificazione personale. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

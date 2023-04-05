---
title: "Resolver DNS"
icon: material/dns
description: Questi sono alcuni provider DNS cifrati a cui consigliamo di passare, per sostituire la configurazione predefinita del tuo ISP.
---

I DNS cifrati con server di terze parti dovrebbero essere utilizzati solo per aggirare il [blocco DNS](https://en.wikipedia.org/wiki/DNS_blocking) di base quando si può essere certi che non ci saranno conseguenze. Il DNS cifrato non aiuta a nascondere la tua attività di navigazione.

[Per saperne di più sui DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

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

**Si prega di notare che non siamo affiliati a nessuno dei progetti che raccomandiamo.** Oltre a [i nostri criteri standard](about/criteria.md), abbiamo sviluppato una chiara serie di requisiti per consentirci di fornire raccomandazioni oggettive. Suggeriamo di familiarizzare con questo elenco prima di scegliere di utilizzare un progetto e di condurre le tue ricerche per assicurarti che la scelta sia giusta per te.

!!! example "Questa sezione è nuova"

    Stiamo lavorando per stabilire criteri definiti per ogni sezione del nostro sito, e ciò potrebbe essere soggetto a modifiche. Se hai domande sui nostri criteri, ti preghiamo di [chiedere sul nostro forum](https://discuss.privacyguides.net/latest) e non dare per scontato che non abbiamo preso in considerazione qualcosa nel formulare le nostre raccomandazioni se non è elencato qui. Sono molti i fattori presi in considerazione e discussi quando raccomandiamo un progetto e documentare ogni singolo fattore è un lavoro in corso.

- Deve supportare le [DNSSEC](advanced/dns-overview.md#what-is-dnssec)
- [Minimizzazione QNAME](advanced/dns-overview.md#what-is-qname-minimization).
- Consente di disabilitare la [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs)
- Preferire il supporto di [anycast](https://it.wikipedia.org/wiki/Anycast) o il supporto di geo-steering

## Supporto nativo del sistema operativo

### Android

Android 9 e successivi supportano il 'DNS over TLS'. Le impostazioni sono disponibili in: **Impostazioni** &rarr; **Rete & Internet** &rarr; **DNS privato**.

### Dispositivi Apple

Le utlime versioni di iOS, iPadOS, tvOS e macOS supportano sia DoT, che DoH. Entrambi i protocolli sono supportati in modo nativo tramite [profili di configurazione](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) o tramite [impostazioni DNS API](https://developer.apple.com/documentation/networkextension/dns_settings).

Dopo l'installazione di un profilo di configurazione o di un'app che utilizza l'API Impostazioni DNS, è possibile selezionare la configurazione DNS. Se una VPN è attiva, la risoluzione all'interno del tunnel VPN utilizzerà le impostazioni DNS della VPN e non le impostazioni a livello di sistema.

#### Profili firmati

Apple non fornisce un'interfaccia nativa per la creazione di profili DNS cifrati. Il '[Secure DNS profile creator](https://dns.notjakob.com/tool.html)' è uno strumento non ufficiale per creare i tuoi profili DNS cifrati, che tuttavia non saranno firmati. I profili firmati sono da preferire; la firma convalida l'origine di un profilo, e aiuta a garantire l'integrità dello stesso. I profili di configurazione firmati sono contrassegnati dall'etichetta verde "Verificato". Per ulteriori informazioni sulla firma del codice, vedere [Informazioni sulla firma del codice](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **I profili firmati** vengono offerti da [AdGuard](https://adguard.com/it/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io) e [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `systemd-resolved', che molte distribuzioni Linux usano per fare le ricerche DNS, non supporta ancora [DoH](https://github.com/systemd/systemd/issues/8639). Se vuoi usare DoH, è necessario installare un proxy come [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) e [configurarlo] (https://wiki.archlinux.org/title/Dnscrypt-proxy) per prendere tutte le query DNS dal resolver di sistema e inoltrarle tramite HTTPS.

## Proxy DNS cifrati

I software proxy per il DNS cifrato forniscono un proxy locale a cui inoltrare le richieste [DNS non cifrate](advanced/dns-overview.md#unencrypted-dns). In genere viene usato su piattaforme che non supportano nativamente il [DNS cifrato](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![Logo RethinkDNS](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![Logo RethinkDNS](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** è un client Android open-source che supporta [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) e DNS Proxy oltre a memorizzare nella cache le risposte DNS, registrare localmente le query DNS e può essere usato anche come firewall.
    
    [:octicons-home-16: Pagina principale](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Codice Sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! recommendation

    ![logo dnscrypt-proxy](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** è un proxy DNS con supporto per [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh) e [DNS anonimizzato](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "La funzione DNS anonimizzato [**non**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonimizza il resto del traffico di rete."
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Soluzioni self-hosted

Una soluzione DNS self-hosted è utile per fornire il filtraggio su piattaforme controllate, come Smart TV e altri dispositivi IoT, poiché non è necessario alcun software lato client.

### AdGuard Home

!!! recommendation

    ![Logo AdGuard Home](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** è un [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) open-source che utilizza il [filtraggio DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) per bloccare contenuti web indesiderati, come gli annunci pubblicitari.
    
    AdGuard Home è dotato di un'interfaccia web raffinata per visualizzare gli insight e gestire i contenuti bloccati.
    
    [:octicons-home-16: Pagina principale](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Codice sorgente" }

### Pi-hole

!!! recommendation

    ![Logo Pi-hole](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** è un [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) open-source che utilizza il [filtraggio DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) per bloccare contenuti web indesiderati, come la pubblicità.
    
    Pi-hole è stato progettato per essere eseguito su un Raspberry Pi, ma non è limitato a tale hardware. Il software dispone di un'interfaccia web intuitiva per visualizzare gli insight e gestire i contenuti bloccati.
    
    [:octicons-home-16: Pagina principale](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribuisci }

[^1]: AdGuard memorizza le statistiche aggregate delle prestazioni dei propri server DNS, ovvero il numero di richieste dirette a un particolare server, il numero di richieste bloccate e la velocità di elaborazione di esse. Inoltre, conservano e memorizzano i domini richiesti nelle ultime 24 ore. "Abbiamo bisogno di queste informazioni per identificare e bloccare nuovi tracker e minacce" "Registriamo anche quante volte un tracker viene bloccato. Abbiamo bisogno di queste informazioni per rimuovere le regole obsolete dai nostri filtri" [https://adguard.com/it/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare raccoglie e memorizza solo dati limitati delle stringhe DNS che vengono inviate al resolver 1.1.1.1. Il resolver 1.1.1.1 non registra dati personali, e la maggior parte dei dati di identificazione personali limitati nelle stringhe DNS viene archiviata per solo 25 ore. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D registra solo i resolver Premium con profili DNS personalizzati. I resolver gratuiti non registrano dati. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Il servizio di DNS di Mullvad è disponibile per tutti, abbonati a Mullvad VPN e non. La loro informativa sulla privacy dichiara che non registrano in alcun modo le richieste DNS. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS fornisce funzioni opzionali di approfondimento e di logging. Puoi decidere il tempo di retenzione e la posizione dell'archivio per tutti i dati che decidi di registrare. A meno che non venga specificatamente richiesto, nessun dato viene registrato. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 raccoglie alcuni dati con l'intenzione di monitorare e rispondere a eventuali minacce. Tali dati potrebbero essere poi rimescolati e condivisi, ad esempio ai fini della ricerca sulla sicurezza. Quad9 non colleziona o registra gli indirizzi IP, o qualsiasi altro dato ritenuto d'identificazione personale. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

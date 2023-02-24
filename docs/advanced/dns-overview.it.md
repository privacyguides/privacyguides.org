---
title: "Panoramica DNS"
icon: material/dns
---

Il [Domain Name System](https://it.wikipedia.org/wiki/Domain_Name_System) è 'l'elenco telefonico di Internet'. Il DNS traduce i nomi di dominio in indirizzi IP, in modo che i browser e altri servizi possano caricare le risorse internet mediante un network decentralizzato di server.

## Che cos'è il DNS?

Quando visiti un sito, viene restituito un indirizzo numerico. Per esempio, quando visiti `privacyguides.org`,viene restituito l'indirizzo `192.98.54.105`.

Il DNS esiste dai [primi giorni](https://en.wikipedia.org/wiki/Domain_Name_System#History) di Internet. Le richieste DNS fatte da e verso i server DNS **non sono** crittografate generalmente. In un ambiente residenziale, un cliente riceve i server dall'ISP mediante [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

Le richieste DNS non crittografate possono essere facilmente **sorvegliate** e **modificate** in transito. In alcune parti del mondo, agli ISP viene ordinato di eseguire un [filtraggio primitivo del DNS](https://en.wikipedia.org/wiki/DNS_blocking). Quando viene effettuata una richiesta dell'indirizzo IP di un dominio bloccato, il server potrebbe non rispondere o fornire un indirizzo IP differente. Dato che il protocollo DNS non è crittografato, l'ISP (o qualsiasi operatore di rete) può utilizzare la [DPI](https://it.wikipedia.org/wiki/Deep_packet_inspection) per monitorare le richieste. Gli ISP possono inoltre bloccare richieste aventi caratteristiche comuni, indipendentemente dal server DNS utilizzato. DNS non crittografato utilizza sempre la [porta](https://it.wikipedia.org/wiki/Porta_(reti)) 53 e l'UDP.

Di seguito, discutiamo e foniamo un tutorial per dimostrare cosa un osservatore esterno potrebbe vedere in entrambi i casi di [DNS crittografato](#what-is-encrypted-dns) e non.

### DNS non crittografato

1. Utilizzando [`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (parte del progetto [Wireshark](https://it.wikipedia.org/wiki/Wireshark)) possiamo monitorare e registrare il flusso di pacchetti Internet. Il comando registra pacchetti che soddisfano le regole specificate:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. Possiamo poi utilizzare il comando [`dig`](https://it.wikipedia.org/wiki/Domain_Information_Groper) (Linux, MacOS ecc.) o [`nslookup`](https://it.wikipedia.org/wiki/Nslookup) (Windows) per inviare la ricerca DNS ad entrambi i server. Software come i browser web effettuano queste ricerche automaticamente, a meno che non venga specificato di utilizzare DNS crittografato.

    === "Linux, macOS"

        ```
        dig +noall +answer privacyguides.org @1.1.1.1
        dig +noall +answer privacyguides.org @8.8.8.8
        ```
    === "Windows"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. Successivamente vogliamo [analizzare](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) i risultati:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

Se esegui il comando Wireshark sopra citato, il pannello superiora mostra i "[frame](https://en.wikipedia.org/wiki/Ethernet_frame)", mentre quello inferiore mostra tutti i dati riguardanti il "frame" selezionato. Soluzioni di filtraggio e monitoraggio aziendali (come quelle acquistate dalle amministrazioni pubbliche) possono eseguire il processo automaticamente, senza interazione umana, e aggregare i "frame" per produrre dati statistici utili all'osservatore della rete.

| No. | Tempo    | Fonte     | Destinazione | Protocollo | Lunghezza | Info                                                                        |
| --- | -------- | --------- | ------------ | ---------- | --------- | --------------------------------------------------------------------------- |
| 1   | 0.000000 | 192.0.2.1 | 1.1.1.1      | DNS        | 104       | Query standard 0x58ba A privacyguides.org OPT                               |
| 2   | 0.293395 | 1.1.1.1   | 192.0.2.1    | DNS        | 108       | Risposta standard alla query 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3   | 1.682109 | 192.0.2.1 | 8.8.8.8      | DNS        | 104       | Query standard 0xf1a9 A privacyguides.org OPT                               |
| 4   | 2.154698 | 8.8.8.8   | 192.0.2.1    | DNS        | 108       | Risposta standard alla query 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

Un osservatore potrebbe modificare uno qualsiasi di questi pacchetti.

## Che cos'è il "DNS crittografato"?

Il DNS crittografato può riferirsi a uno dei diversi protocolli, i più comuni dei quali sono:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) fu uno dei primi metodi per la crittografia delle query DNS. DNSCrypt opera sulla porta 443 e funziona con entrambi i protocolli di trasporto TCP e UDP. DNSCrypt non è mai stato sottoposto alla [Internet Engineering Task Force (IETF)](https://it.wikipedia.org/wiki/Internet_Engineering_Task_Force), né è passato attraverso il processo di [Request for Comments (RFC, "richiesta di commenti")](https://it.wikipedia.org/wiki/Request_for_Comments); non è mai stato quindi ampiamente utilizzato al di fuori di alcune [implementazioni](https://dnscrypt.info/implementations). DI conseguenza, è stato largamente rimpiazzato dal più popolare [DNS over HTTPS](#dns-over-https-doh).

### DNS over TLS (DoT)

[**DNS over TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) è un altro metodo per criptare le comunicazioni DNS, definito in [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). Il supporto è stato implementato per la prima volta in Android 9, iOS 14 e su Linux in [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) nella versione 237. Negli ultimi anni la preferenza del settore si è spostata da DoT a DoH, in quanto DoT è [protocollo complesso](https://dnscrypt.info/faq/) e presenta una conformità variabile all'RFC tra le implementazioni esistenti. DoT opera anche su una porta dedicata 853 che può essere facilmente bloccata da firewall restrittivi.

### DNS over HTTPS (DoH)

[**DNS over HTTPS**](https://it.wikipedia.org/wiki/DNS_over_HTTPS) come definito in [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) pacchettizza le query nel protocollo [HTTP/2](https://it.wikipedia.org/wiki/HTTP/2) e fornisce sicurezza con HTTPS. Il supporto è stato aggiunto per la prima volta in browser web come Firefox 60 e Chrome 83.

L'implementazione nativa di DoH è presente in iOS 14, macOS 11, Microsoft Windows e Android 13 (tuttavia, non sarà abilitata [per impostazione predefinita](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). Il supporto generale per i desktop Linux è in attesa dell'implementazione di systemd [](https://github.com/systemd/systemd/issues/8639) quindi [l'installazione di software di terze parti è ancora necessaria](../dns.md#linux).

## Cosa può vedere un esterno?

In questo esempio registreremo ciò che accade quando facciamo una richiesta al DoH:

1. Per prima cosa, avviare `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. In secondo luogo, fare una richiesta con `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. Dopo aver effettuato la richiesta, possiamo interrompere la cattura dei pacchetti con <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Analizzare i risultati con Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

Possiamo vedere l'[instaurazione della connessione](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) e l'[handshake TLS](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) che si verifica con qualsiasi connessione crittografata. Osservando i pacchetti "application data" che seguono, nessuno di essi contiene il dominio richiesto o l'indirizzo IP restituito.

## Perché **non dovrei** utilizzare un DNS criptato?

Nei luoghi in cui vige il filtraggio (o la censura) di Internet, la visita a risorse proibite può avere conseguenze che vanno considerate nel [modello di minaccia](../basics/threat-modeling.md). Noi **non** suggeriamo l'uso di DNS criptati per questo scopo. Utilizza [Tor](https://torproject.org) o una [VPN](../vpn.md). Se utilizzi una VPN, usufruisci dei server DNS della VPN. Quando si utilizza una VPN, ci si affida già a loro per tutte le attività di rete.

Quando si effettua una ricerca DNS, in genere è perché si vuole accedere a una risorsa. Di seguito verranno illustrati alcuni dei metodi che possono rivelare le attività di navigazione dell'utente anche quando si utilizza un DNS crittografato:

### Indirizzo IP

Il modo più semplice per determinare l'attività di navigazione potrebbe essere quello di esaminare gli indirizzi IP a cui accedono i dispositivi. Ad esempio, se l'osservatore sa che `privacyguides.org` si trova all'indirizzo `198.98.54.105`, e il tuodispositivo sta richiedendo dati da `198.98.54.105`, è molto probabile che tu stia visitando Privacy Guides.

Questo metodo è utile solo quando l'indirizzo IP appartiene a un server che ospita solo pochi siti web. Inoltre, non è molto utile se il sito è ospitato su una piattaforma condivisa (ad esempio, Github Pages, Cloudflare Pages, Netlify, WordPress, Blogger, ecc). Inoltre, non è molto utile se il server è ospitato dietro un reverse proxy [](https://it.wikipedia.org/wiki/Reverse_proxy), molto comune nella moderna Internet.

### Indicazione del nome del server (Server Name Indication, SNI)

L'indicazione del nome del server è tipicamente utilizzata quando un indirizzo IP ospita molti siti web. Potrebbe trattarsi di un servizio come Cloudflare o di un'altra protezione [attacco denial-of-service](https://it.wikipedia.org/wiki/Denial_of_service).

1. Avviare nuovamente la cattura con `tshark`. Abbiamo aggiunto un filtro con il nostro indirizzo IP in modo da non catturare molti pacchetti:

    ```bash
    tshark -w /tmp/pg.pcap port 443 and host 198.98.54.105
    ```

2. Poi visitiamo [https://privacyguides.org](https://privacyguides.org).

3. Dopo aver visitato il sito web, vogliamo interrompere la cattura dei pacchetti con <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Poi vogliamo analizzare i risultati:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    Vedremo la creazione della connessione, seguita dall'handshake TLS per il sito web di Privacy Guides. Intorno al frame 5. vedrai "Client Hello".

5. Espandi il triangolo &#9656; accanto a ciascun campo:

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Handshake Protocol: Client Hello
        ▸ Handshake Protocol: Client Hello
          ▸ Extension: server_name (len=22)
            ▸ Server Name Indication extension
    ```

6. Possiamo vedere il valore SNI che rivela il sito web che stiamo visitando. Il comando `tshark` può fornire direttamente il valore per tutti i pacchetti contenenti un valore SNI:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

Ciò significa che anche se si utilizzano server "DNS criptati", il dominio sarà probabilmente divulgato tramite SNI. Il protocollo [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) porta con sé [Encrypted Client Hello](https://blog.cloudflare.com/encrypted-client-hello/), che impedisce questo tipo di fuga d'informazioni.

I governi, in particolare [Cina](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) e [Russia](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), hanno[già iniziato a bloccarlo](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) o hanno espresso il desiderio di farlo. Recentemente, la Russia ha [iniziato a bloccare i siti web](https://github.com/net4people/bbs/issues/108) stranieri che utilizzano lo standard [HTTP/3](https://it.wikipedia.org/wiki/HTTP/3). Questo perché il protocollo [QUIC](https://it.wikipedia.org/wiki/QUIC) che fa parte di HTTP/3 richiede che anche `ClientHello` sia criptato.

### Online Certificate Status Protocol (OCSP)

Un altro modo in cui il browser può rivelare le attività di navigazione è il protocollo [Online Certificate Status Protocol](https://it.wikipedia.org/wiki/Online_Certificate_Status_Protocol). Quando si visita un sito web HTTPS, il browser potrebbe verificare se il [certificato](https://it.wikipedia.org/wiki/Certificato_digitale) del sito web è stato revocato. Questo avviene generalmente tramite il protocollo HTTP, il che significa che è **non** crittografato.

La richiesta OCSP contiene il certificato "[numero seriale](https://it.wikipedia.org/wiki/Certificato_digitale#Struttura_dei_Certificati)", che è unico. Viene inviato al "responder OCSP" per verificarne lo stato.

Possiamo simulare quello che farebbe un browser usando il comando [`openssl`](https://it.wikipedia.org/wiki/OpenSSL).

1. Ottenere il certificato del server e utilizzare [`sed`](https://it.wikipedia.org/wiki/Sed_(Unix)) per conservare solo la parte importante e scriverla in un file:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. Ottenere il certificato intermedio. [Autorità di certificazione (CA)](https://it.wikipedia.org/wiki/Certificate_authority) di solito non firmano direttamente un certificato, ma utilizzano un cosiddetto certificato "intermedio".

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. Il primo certificato in `pg_and_intermediate.cert` è in realtà il certificato del server dal passo 1. Possiamo usare di nuovo `sed` per cancellare fino alla prima istanza di END:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. Ottenere il responder OCSP per il certificato del server:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    Il nostro certificato mostra il risponditore del certificato Lets Encrypt. Se si desidera visualizzare tutti i dettagli del certificato, è possibile utilizzare:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. Avviare l'acquisizione dei pacchetti:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```

6. Effettuare la richiesta OCSP:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. Aprire l'acquisizione:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    Il protocollo "OCSP" prevede due pacchetti: una "Richiesta" e una "Risposta". Per la "Richiesta" possiamo vedere il "numero seriale" espandendo il triangolo &#9656; accanto a ciascun campo:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Request
            ▸ reqCert
              serialNumber
    ```

    Per la "Risposta" possiamo vedere anche il "numero seriale":

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ responses: 1 item
              ▸ SingleResponse
                ▸ certID
                  serialNumber
    ```

8. Oppure utilizzare `tshark` per filtrare i pacchetti per il numero seriale:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

Se l'osservatore della rete dispone del certificato pubblico, che è pubblicamente disponibile, può abbinare il numero seriale a quel certificato e quindi determinare il sito che stai visitando. Il processo può essere automatizzato e può associare gli indirizzi IP ai numeri seriali. È anche possibile controllare i log di [Certificate Transparency](https://en.wikipedia.org/wiki/Certificate_Transparency) per il numero seriale.

## Dovrei utilizzare un DNS criptato?

Abbiamo creato questo diagramma di flusso per descrivere quando *dovresti* utilizzare il DNS criptato:

``` mermaid
graph TB
    Inizio[Inizio] --> anonymous{Cerchi di<br> essere anonimo?}
    anonymous--> | Sì | tor(Usa Tor)
    anonymous --> | No | censorship{Evitare<br> la censura?}
    censorship --> | Sì | vpnOrTor(Usa<br> VPN o Tor)
    censorship --> | No | privacy{Vuoi privacy<br> dall'ISP?}
    privacy --> | Sì | vpnOrTor
    privacy --> | No | obnoxious{ISP fa<br> reindirizzamenti<br> odiosi?}
    obnoxious --> | Sì | encryptedDNS(Usa<br> DNS criptato<br> di terze parti)
    obnoxious --> | No | ispDNS{L'ISP supporta<br> DNS criptato?}
    ispDNS --> | Sì | useISP(Usa<br> DNS criptato<br> con l'ISP)
    ispDNS --> | No | nothing(Non fare nulla)
```

Il DNS criptato con una terza parte dovrebbe essere usato solo per aggirare i reindirizzamenti e il [blocco DNS](https://en.wikipedia.org/wiki/DNS_blocking) basilare quando puoi essere sicuro che non ci saranno conseguenze o sei interessato a un provider che faccia qualche filtro rudimentale.

[Elenco dei server DNS consigliati](../dns.md ""){.md-button}

## Che cosa sono le DNSSEC?

Le [Domain Name System Security Extensions](https://it.wikipedia.org/wiki/DNSSEC) (DNSSEC) sono una funzione del DNS che autentica le risposte alle ricerche di nomi di dominio. Non forniscono una protezione della privacy per tali ricerche, ma piuttosto impedisce agli aggressori di manipolare o avvelenare le risposte alle richieste DNS.

In altre parole, le DNSSEC firmano digitalmente i dati per garantirne la validità. Per garantire una ricerca sicura, la firma avviene a ogni livello del processo di ricerca DNS. Di conseguenza, tutte le risposte del DNS sono affidabili.

Il processo di firma delle DNSSEC è simile a quello di una persona che firma un documento legale con una penna; quella persona firma con una firma unica che nessun altro può creare e un esperto del tribunale può esaminare quella firma e verificare che il documento è stato firmato da quella persona. Queste firme digitali garantiscono che i dati non siano stati manomessi.

Le DNSSEC implementano una politica di firma digitale gerarchica su tutti i livelli del DNS. Ad esempio, nel caso di una ricerca su `privacyguides.org`, un server DNS root firmerà una chiave per il server dei nomi `.org` e il server dei nomi `.org` firmerà una chiave per il server dei nomi autoritativo `privacyguides.org`.

<small>Adattato da [DNS Security Extensions (DNSSEC) overview (Panoramica delle DNS Security Extensions (DNSSEC))](https://cloud.google.com/dns/docs/dnssec) di Google e [DNSSEC: An Introduction (DNSSEC: una introduzione)](https://blog.cloudflare.com/dnssec-an-introduction/) di Cloudflare, entrambi con licenza [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).</small>

## Che cos'è la minimizzazione del QNAME?

Un QNAME è un "nome qualificato", ad esempio `privacyguides.org`. La minimizzazione del QNAME riduce la quantità di informazioni inviate dal server DNS al [server dei nomi autoritativi](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server).

Invece di inviare l'intero dominio `privacyguides.org`, la minimizzazione del QNAME significa che il server DNS chiederà tutti i record che terminano in `.org`. Ulteriori descrizioni tecniche sono definite in [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## Che cos'è la sottorete client EDNS (EDNS Client Subnet, ECS)?

La [sottorete client EDNS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) è un metodo che consente a un resolver DNS ricorsivo di specificare una [sottorete](https://it.wikipedia.org/wiki/Sottorete) per l'host o il [client](https://it.wikipedia.org/wiki/Client) che sta effettuando la query DNS.

Ha lo scopo di "velocizzare" la consegna dei dati fornendo al client una risposta che appartiene a un server vicino, come ad esempio una rete di distribuzione di contenuti [](https://it.wikipedia.org/wiki/Content_Delivery_Network), spesso utilizzata per lo streaming video e per servire applicazioni web in JavaScript.

Questa funzione ha un costo in termini di privacy, in quanto comunica al server DNS alcune informazioni sulla posizione del client.

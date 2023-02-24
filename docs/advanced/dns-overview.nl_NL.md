---
title: "Inleiding tot DNS"
icon: material/dns
---

Het [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) is het "telefoonboek van het internet". DNS vertaalt domeinnamen naar IP-adressen zodat browsers en andere diensten internetbronnen kunnen laden, via een gedecentraliseerd netwerk van servers.

## Wat is DNS?

Wanneer je een website bezoekt, wordt een numeriek adres teruggezonden. Wanneer je bijvoorbeeld `privacyguides.org`bezoekt, wordt het adres `192.98.54.105` teruggezonden.

DNS bestaat al sinds de [begindagen](https://en.wikipedia.org/wiki/Domain_Name_System#History) van het internet. DNS-verzoeken aan en van DNS-servers zijn **niet** over het algemeen gecodeerd. In een residentiële omgeving krijgt een klant servers van de ISP via [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

Onversleutelde DNS-verzoeken kunnen onderweg gemakkelijk worden **gesurveilleerd** en **gewijzigd**. In sommige delen van de wereld worden ISP's opgedragen primitieve [DNS-filters te gebruiken](https://en.wikipedia.org/wiki/DNS_blocking). Wanneer je het IP-adres opvraagt van een domein dat is geblokkeerd, antwoordt de server mogelijk niet of met een ander IP-adres. Aangezien het DNS-protocol niet versleuteld is, kan de ISP (of om het even welke netwerkexploitant) [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) gebruiken om verzoeken te controleren. ISP's kunnen ook verzoeken blokkeren op basis van gemeenschappelijke kenmerken, ongeacht welke DNS-server wordt gebruikt. Onversleutelde DNS gebruikt altijd [poort](https://en.wikipedia.org/wiki/Port_(computer_networking)) 53 en gebruikt altijd UDP.

Hieronder bespreken we en geven we een tutorial om te bewijzen wat een externe waarnemer kan zien met gewone onversleutelde DNS en [versleutelde DNS](#what-is-encrypted-dns).

### Onversleutelde DNS

1. Met [`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (onderdeel van het [Wireshark](https://en.wikipedia.org/wiki/Wireshark) project) kunnen we de internet packet flow monitoren en opnemen. Dit commando registreert pakketten die aan de gespecificeerde regels voldoen:

    ```bash
    tshark -w /tmp/dns.pcap udp poort 53 en host 1.1.1.1 of host 8.8.8.8
    ```

2. We kunnen dan [`dig`](https://en.wikipedia.org/wiki/Dig_(command)) (Linux, MacOS etc) of [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) (Windows) gebruiken om de DNS lookup naar beide servers te sturen. Software zoals webbrowsers doen deze lookups automatisch, tenzij zij geconfigureerd zijn om gecodeerde DNS te gebruiken.

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

3. Vervolgens willen wij [analyseren](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) de resultaten:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

Als je het bovenstaande Wireshark-commando uitvoert, toont het bovenste deelvenster de "[frames](https://en.wikipedia.org/wiki/Ethernet_frame)", en het onderste deelvenster toont alle gegevens over het geselecteerde frame. Oplossingen voor bedrijfsfiltering en -monitoring (zoals die welke door overheden worden aangeschaft) kunnen dit proces automatisch uitvoeren, zonder menselijke tussenkomst, en kunnen deze frames samenvoegen tot statistische gegevens die nuttig zijn voor de netwerkwaarnemer.

| Nee. | Tijd     | Bron      | Bestemming | Protocol | Lengte | Info                                                                    |
| ---- | -------- | --------- | ---------- | -------- | ------ | ----------------------------------------------------------------------- |
| 1    | 0.000000 | 192.0.2.1 | 1.1.1.1    | DNS      | 104    | Standaard zoekopdracht 0x58ba A privacyguides.org OPT                   |
| 2    | 0.293395 | 1.1.1.1   | 192.0.2.1  | DNS      | 108    | Standaard vraag antwoord 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3    | 1.682109 | 192.0.2.1 | 8.8.8.8    | DNS      | 104    | Standaard zoekopdracht 0xf1a9 A privacyguides.org OPT                   |
| 4    | 2.154698 | 8.8.8.8   | 192.0.2.1  | DNS      | 108    | Standaard query-antwoord 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

Een waarnemer kan elk van deze pakketten wijzigen.

## Wat is "versleutelde DNS"?

Versleutelde DNS kan verwijzen naar een van een aantal protocollen, waarvan de meest voorkomende zijn:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) was een van de eerste methoden om DNS-query's te versleutelen. DNSCrypt werkt op poort 443 en werkt met zowel de TCP- als de UDP-transportprotocollen. DNSCrypt is nooit ingediend bij de [Internet Engineering Task Force (IETF)](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) en is ook nooit door het [Request for Comments (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments) proces gegaan, dus is het buiten een paar [implementaties nog niet op grote schaal gebruikt](https://dnscrypt.info/implementations). Als gevolg daarvan is het grotendeels vervangen door het meer populaire [DNS over HTTPS](#dns-over-https-doh).

### DNS over TLS (DoT)

[**DNS over TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) is een andere methode voor het versleutelen van DNS-communicatie die is gedefinieerd in [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). Ondersteuning werd voor het eerst geïmplementeerd in Android 9, iOS 14, en op Linux in [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) in versie 237. De laatste jaren is de voorkeur in de sector verschoven van DoT naar DoH, omdat DoT een [complex protocol is](https://dnscrypt.info/faq/) en de naleving van de RFC in de bestaande implementaties varieert. DoT werkt ook op een speciale poort 853 die gemakkelijk kan worden geblokkeerd door restrictieve firewalls.

### DNS over HTTPS (DoH)

[**DNS over HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) zoals gedefinieerd in [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) verpakt query's in het [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protocol en biedt beveiliging met HTTPS. Ondersteuning werd voor het eerst toegevoegd in webbrowsers zoals Firefox 60 en Chrome 83.

Native implementatie van DoH dook op in iOS 14, macOS 11, Microsoft Windows, en Android 13 (het zal echter niet standaard worden ingeschakeld [](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). Algemene Linux desktop ondersteuning wacht op de systemd [implementatie](https://github.com/systemd/systemd/issues/8639) dus [het installeren van third-party software is nog steeds vereist](../dns.md#linux).

## Wat kan een buitenstaander zien?

In dit voorbeeld zullen we vastleggen wat er gebeurt als we een DoH-verzoek doen:

1. Start eerst `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. Ten tweede, doe een aanvraag met `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. Na het verzoek te hebben gedaan, kunnen we de packet capture stoppen met <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Analyseer de resultaten in Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

We zien de [verbinding tot stand brengen](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) en [TLS handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) die bij elke versleutelde verbinding optreedt. Als we kijken naar de "toepassings gegevens" pakketten die volgen, bevat geen van hen het domein dat we hebben aangevraagd of het IP adres dat wordt teruggestuurd.

## Waarom **zou ik geen** versleutelde DNS gebruiken?

Op plaatsen waar internet wordt gefilterd (of gecensureerd), kan het bezoeken van verboden bronnen eigen gevolgen hebben waarmee je rekening moet houden in jouw [bedreigingsmodel](../basics/threat-modeling.md). Wij **niet** suggereren het gebruik van gecodeerde DNS voor dit doel. Gebruik in plaats daarvan [Tor](https://torproject.org) of een [VPN](../vpn.md). Als je een VPN gebruikt, moet je de DNS-servers van jouw VPN gebruiken. Wanneer je een VPN gebruikt, vertrouwt je hen al jouw netwerkactiviteiten toe.

Wanneer we een DNS lookup doen, is dat meestal omdat we toegang willen tot een bron. Hieronder bespreken we enkele van de methoden die jouw surf-activiteiten kunnen onthullen, zelfs wanneer je versleutelde DNS gebruikt:

### IP-adres

De eenvoudigste manier om de surfactiviteit vast te stellen, is te kijken naar de IP-adressen waartoe jouw apparaten toegang hebben. Als de waarnemer bijvoorbeeld weet dat `privacyguides.org` op `198.98.54.105`staat, en jouw apparaat gegevens opvraagt van `198.98.54.105`, is de kans groot dat je Privacy Guides bezoekt.

Deze methode is alleen nuttig wanneer het IP-adres toebehoort aan een server die slechts enkele websites host. Het is ook niet erg nuttig als de site wordt gehost op een gedeeld platform (bijv. Github Pages, Cloudflare Pages, Netlify, WordPress, Blogger, enz). Het is ook niet erg nuttig als de server gehost wordt achter een [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy), wat heel gebruikelijk is op het moderne Internet.

### Server Naam Aanwijzing (SNA)

Server Name Indication wordt meestal gebruikt wanneer een IP-adres veel websites host. Dit kan een dienst als Cloudflare zijn, of een andere [Denial-of-service-aanval](https://en.wikipedia.org/wiki/Denial-of-service_attack) bescherming.

1. Begin opnieuw te vangen met `tshark`. We hebben een filter toegevoegd met ons IP adres zodat je niet veel pakketten opvangt:

    ```bash
    tshark -w /tmp/pg.pcap poort 443 en host 198.98.54.105
    ```

2. Dan gaan we naar [https://privacyguides.org](https://privacyguides.org).

3. Na het bezoek aan de website, willen we de packet capture stoppen met <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Vervolgens willen we de resultaten analyseren:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    We zullen de verbinding tot stand zien komen, gevolgd door de TLS handshake voor de Privacy Gidsen website. Rond frame 5. zie je een "Client Hello".

5. Vouw de driehoek &#9656; uit naast elk veld:

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Handshake Protocol: Client Hello
        ▸ Handshake Protocol: Client Hello
          ▸ Uitbreiding: server_name (len=22)
            ▸ Uitbreiding servernaam-aanduiding
    ```

6. Wij kunnen de SNI-waarde zien die aangeeft welke website wij bezoeken. Het `tshark` commando kan je de waarde rechtstreeks geven voor alle pakketten die een SNI waarde bevatten:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

Dit betekent dat zelfs als we "Encrypted DNS" servers gebruiken, het domein waarschijnlijk zal worden onthuld via SNI. Het [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) protocol brengt het [Encrypted Client Hello](https://blog.cloudflare.com/encrypted-client-hello/) met zich mee, dat dit soort lekken voorkomt.

Regeringen, met name [China](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) en [Rusland](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), zijn al begonnen [met het blokkeren van](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) of hebben de wens geuit dit te doen. Onlangs is Rusland [begonnen met het blokkeren van buitenlandse websites](https://github.com/net4people/bbs/issues/108) die gebruik maken van de [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) norm. Dit komt doordat het [QUIC](https://en.wikipedia.org/wiki/QUIC) protocol dat deel uitmaakt van HTTP/3 vereist dat `ClientHello` ook gecodeerd wordt.

### Protocol voor onlinecertificaatstatus (PVOC/OCSP)

Een andere manier waarop jouw browser jouw surfactiviteiten kan onthullen is met het [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol). Wanneer je een HTTPS-website bezoekt, kan de browser controleren of het [-certificaat](https://en.wikipedia.org/wiki/Public_key_certificate) van de website is ingetrokken. Dit gebeurt over het algemeen via het HTTP-protocol, wat betekent dat het **niet** versleuteld is.

Het OCSP-verzoek bevat het certificaat "[serienummer](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)", dat uniek is. Het wordt naar de "OCSP responder" gezonden om de status ervan te controleren.

We kunnen simuleren wat een browser zou doen met het [`openssl`](https://en.wikipedia.org/wiki/OpenSSL) commando.

1. Haal het server certificaat op en gebruik [`sed`](https://en.wikipedia.org/wiki/Sed) om alleen het belangrijke deel te bewaren en schrijf het uit naar een bestand:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. Haal het tussenliggende certificaat op. [Certificaatautoriteiten (CA)](https://en.wikipedia.org/wiki/Certificate_authority) ondertekenen een certificaat gewoonlijk niet rechtstreeks; zij gebruiken een zogeheten "intermediair" certificaat.

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. Het eerste certificaat in `pg_and_intermediate.cert` is eigenlijk het servercertificaat uit stap 1. We kunnen `sed` opnieuw gebruiken om te wissen tot de eerste instantie van END:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. Haal de OCSP responder voor het server certificaat op:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    Ons certificaat toont de Lets Encrypt certificaat responder. Als we alle details van het certificaat willen zien, kunnen we gebruik maken van:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. Start de pakketopname:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```

6. Doe het OCSP-verzoek:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. Open de opname:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    Er komen twee pakketten met het "OCSP"-protocol: een "Request" en een "Response". Voor de "Aanvraag" kunnen we het "serienummer" zien door het driehoekje &#9656; naast elk veld uit te vouwen:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Verzoek
            ▸ reqCert
              serialNumber
    ```

    Voor de "Response" kunnen we ook het "serienummer" zien:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ antwoorden: 1 item
              ▸ SingleResponse
                ▸ certID
                  serialNumber
    ```

8. Of gebruik `tshark` om de pakketten te filteren op het Serienummer:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

Als de netwerkwaarnemer het publieke certificaat heeft, dat publiekelijk beschikbaar is, kunnen zij het serienummer met dat certificaat vergelijken en op basis daarvan de site bepalen die je bezoekt. Het proces kan worden geautomatiseerd en IP-adressen kunnen worden gekoppeld aan serienummers. Het is ook mogelijk om [Certificate Transparency](https://en.wikipedia.org/wiki/Certificate_Transparency) logs te controleren op het serienummer.

## Moet ik versleutelde DNS gebruiken?

We hebben dit stroomschema gemaakt om te beschrijven wanneer u *versleutelde DNS zou moeten* gebruiken:

``` mermaid
grafiek TB
    Start[Start] --> anoniem{Probeert<br> anoniem te zijn?}
    anonymous--> | Yes | tor(Use Tor)
    anonymous --> | No | censorship{Avoiding<br> censorship?}
    censuur --> | Ja | vpnOrTor(Gebruik<br> VPN of Tor)
    censuur --> | Nee | privacy{Wil je privacy<br> van ISP?}
    privacy --> | Yes | vpnOrTor
    privacy --> | No | obnoxious{ISP makes<br> obnoxious<br> redirects?}
    onaangenaam --> | Yes | encryptedDNS(Gebruik<br> gecodeerde DNS<br> met derde partij)
    onaangenaam --> | No | ispDNS{Doet ISP ondersteunen<br> gecodeerde DNS?}
    ispDNS --> | Yes | useISP(Gebruik<br> gecodeerde DNS<br> met ISP)
    ispDNS --> | No | nothing(Doe niets)
```

Versleutelde DNS met een derde partij mag alleen worden gebruikt om redirects en basis-DNS-blokkering van [te omzeilen](https://en.wikipedia.org/wiki/DNS_blocking) als je er zeker van kunt zijn dat er geen gevolgen zijn of als je geïnteresseerd bent in een provider die een aantal rudimentaire filters uitvoert.

[Lijst van aanbevolen DNS-servers](../dns.md ""){.md-button}

## Wat is DNSSEC?

[DNSSEC (Domain Name System Security Extensions](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions)) is een functie van DNS waarmee reacties op domeinnaamzoekopdrachten worden geverifieerd. Het biedt geen bescherming van de privacy voor die lookups, maar voorkomt dat aanvallers de antwoorden op DNS-verzoeken manipuleren of vergiftigen.

Met andere woorden, DNSSEC ondertekent gegevens digitaal om de geldigheid ervan te helpen garanderen. Om een veilige lookup te garanderen, vindt de ondertekening plaats op elk niveau in het DNS lookup-proces. Als gevolg daarvan kunnen alle antwoorden van DNS worden vertrouwd.

Het DNSSEC-ondertekeningsproces is vergelijkbaar met iemand die een juridisch document met een pen ondertekent; die persoon ondertekent met een unieke handtekening die niemand anders kan maken, en een gerechtsdeskundige kan naar die handtekening kijken en verifiëren dat het document door die persoon is ondertekend. Deze digitale handtekeningen garanderen dat er niet met de gegevens is geknoeid.

DNSSEC implementeert een hiërarchisch digitaal ondertekeningsbeleid over alle lagen van DNS. Bijvoorbeeld, in het geval van een `privacyguides.org` lookup, zou een root DNS-server een sleutel ondertekenen voor de `.org` nameserver, en de `.org` nameserver zou dan een sleutel ondertekenen voor `privacyguides.org`'s gezaghebbende nameserver.

<small>Aangepast uit [DNS Security Extensions (DNSSEC) overview](https://cloud.google.com/dns/docs/dnssec) van Google en [DNSSEC: An Introduction](https://blog.cloudflare.com/dnssec-an-introduction/) van Cloudflare, beide met een licentie onder [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).</small>

## Wat is QNAME-minimalisatie?

Een QNAME is een "gekwalificeerde naam", bijvoorbeeld `privacyguides.org`. QNAME-minimalisatie vermindert de hoeveelheid informatie die van de DNS-server naar de [authoratieve naamserver](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server) wordt gestuurd.

In plaats van het hele domein `privacyguides.org` te sturen, betekent QNAME-minimalisatie dat de DNS-server alle records opvraagt die eindigen op `.org`. Een verdere technische beschrijving is te vinden in [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## Wat is EDNS Client Subnet (ECS)?

Het [EDNS Client Subnet](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) is een methode voor een recursieve DNS-oplosser om een [subnetwerk](https://en.wikipedia.org/wiki/Subnetwork) te specificeren voor de [host of client](https://en.wikipedia.org/wiki/Client_(computing)) die de DNS-query uitvoert.

Het is bedoeld om de levering van gegevens te "versnellen" door de client een antwoord te geven dat toebehoort aan een server die zich dicht bij hem bevindt, zoals een [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network), die vaak worden gebruikt bij videostreaming en het serveren van JavaScript-webapps.

Deze functie gaat wel ten koste van de privacy, aangezien de DNS-server informatie krijgt over de locatie van de client.

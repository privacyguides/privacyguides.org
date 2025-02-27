---
title: "DNS Overview"
icon: material/dns
description: The Domain Name System is the "phonebook of the internet," helping your browser find the website it's looking for.
---

The [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) is the 'phone book of the Internet'. DNS translates domain names to IP addresses so browsers and other services can load Internet resources, through a decentralized network of servers.

## What is DNS?

When you visit a website, a numerical address is returned. For example, when you visit `privacyguides.org`, the address `192.98.54.105` is returned.

DNS has existed since the [early days](https://en.wikipedia.org/wiki/Domain_Name_System#History) of the Internet. DNS requests made to and from DNS servers are **not** generally encrypted. In a residential setting, a customer is given servers by the ISP via [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

Unencrypted DNS requests are able to be easily **surveilled** and **modified** in transit. In some parts of the world, ISPs are ordered to do primitive [DNS filtering](https://en.wikipedia.org/wiki/DNS_blocking). When you request the IP address of a domain that is blocked, the server may not respond or may respond with a different IP address. As the DNS protocol is not encrypted, the ISP (or any network operator) can use [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) to monitor requests. ISPs can also block requests based on common characteristics, regardless of which DNS server is used.

Below, we discuss and provide a tutorial to prove what an outside observer may see using regular unencrypted DNS and [encrypted DNS](#what-is-encrypted-dns).

### Unencrypted DNS

1. Using [`tshark`](https://wireshark.org/docs/man-pages/tshark.html) (part of the [Wireshark](https://en.wikipedia.org/wiki/Wireshark) project) we can monitor and record internet packet flow. This command records packets that meet the rules specified:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. We can then use [`dig`](https://en.wikipedia.org/wiki/Dig_(command)) (Linux, macOS, etc.) or [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) (Windows) to send the DNS lookup to both servers. Software such as web browsers do these lookups automatically, unless they are configured to use encrypted DNS.

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

3. Next, we want to [analyze](https://wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) the results:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

If you run the Wireshark command above, the top pane shows the "[frames](https://en.wikipedia.org/wiki/Ethernet_frame)", and the bottom pane shows all the data about the selected frame. Enterprise filtering and monitoring solutions (such as those purchased by governments) can do the process automatically, without human interaction, and can aggregate those frames to produce statistical data useful to the network observer.

| No. | Time     | Source    | Destination | Protocol | Length | Info                                                                   |
|-----|----------|-----------|-------------|----------|--------|------------------------------------------------------------------------|
| 1   | 0.000000 | 192.0.2.1 | 1.1.1.1     | DNS      | 104    | Standard query 0x58ba A privacyguides.org OPT                          |
| 2   | 0.293395 | 1.1.1.1   | 192.0.2.1   | DNS      | 108    | Standard query response 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3   | 1.682109 | 192.0.2.1 | 8.8.8.8     | DNS      | 104    | Standard query 0xf1a9 A privacyguides.org OPT                          |
| 4   | 2.154698 | 8.8.8.8   | 192.0.2.1   | DNS      | 108    | Standard query response 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

An observer could modify any of these packets.

## What is "encrypted DNS"?

Encrypted DNS can refer to one of a number of protocols, the most common ones being [DNSCrypt](#dnscrypt), [DNS over TLS](#dns-over-tls-dot), and [DNS over HTTPS](#dns-over-https-doh).

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) was one of the first methods of encrypting DNS queries. DNSCrypt operates on port 443 and works with both the TCP or UDP transport protocols. DNSCrypt has never been submitted to the [Internet Engineering Task Force (IETF)](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) nor has it gone through the [Request for Comments (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments) process, so it has not been used widely outside a few [implementations](https://dnscrypt.info/implementations). As a result, it has been largely replaced by the more popular [DNS over HTTPS](#dns-over-https-doh).

### DNS over TLS (DoT)

[**DNS over TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) is another method for encrypting DNS communication that is defined in [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). Support was first implemented in Android 9, iOS 14, and on Linux in [systemd-resolved](https://freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) in version 237. Preference in the industry has been moving away from DoT to DoH in recent years, as DoT is a [complex protocol](https://dnscrypt.info/faq) and has varying compliance to the RFC across the implementations that exist. DoT also operates on a dedicated port 853 which can be blocked easily by restrictive firewalls.

### DNS over HTTPS (DoH)

[**DNS over HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS), as defined in [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484), packages queries in the [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protocol and provides security with HTTPS. Support was first added in web browsers such as Firefox 60 and Chrome 83.

Native implementation of DoH showed up in iOS 14, macOS 11, Microsoft Windows, and Android 13 (however, it won't be enabled [by default](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). General Linux desktop support is waiting on the systemd [implementation](https://github.com/systemd/systemd/issues/8639) so [installing third-party software is still required](../dns.md#encrypted-dns-proxies).

### Native Operating System Support

#### Android

Android 9 and above support DNS over TLS. The settings can be found in: **Settings** &rarr; **Network & Internet** &rarr; **Private DNS**.

#### Apple Devices

The latest versions of iOS, iPadOS, tvOS, and macOS, support both DoT and DoH. Both protocols are supported natively via [configuration profiles](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) or through the [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

After installation of either a configuration profile or an app that uses the DNS Settings API, the DNS configuration can be selected. If a VPN is active, resolution within the VPN tunnel will use the VPN's DNS settings and not your system-wide settings.

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html).

#### Linux

`systemd-resolved`, which many Linux distributions use to do their DNS lookups, doesn't yet [support DoH](https://github.com/systemd/systemd/issues/8639). If you want to use DoH, you'll need to install a proxy like [dnscrypt-proxy](../dns.md#dnscrypt-proxy) and [configure it](https://wiki.archlinux.org/title/Dnscrypt-proxy) to take all the DNS queries from your system resolver and forward them over HTTPS.

## What can an outside party see?

In this example we will record what happens when we make a DoH request:

1. First, start `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. Second, make a request with `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. After making the request, we can stop the packet capture with <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Analyze the results in Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

We can see the [connection establishment](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) and [TLS handshake](https://cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake) that occurs with any encrypted connection. When looking at the "application data" packets that follow, none of them contain the domain we requested or the IP address returned.

## Why **shouldn't** I use encrypted DNS?

In locations where there is internet filtering (or censorship), visiting forbidden resources may have its own consequences which you should consider in your [threat model](../basics/threat-modeling.md). We do **not** suggest the use of encrypted DNS for this purpose. Use [Tor](../advanced/tor-overview.md) or a [VPN](../vpn.md) instead. If you're using a VPN, you should use your VPN's DNS servers. When using a VPN, you are already trusting them with all your network activity.

When we do a DNS lookup, it's generally because we want to access a resource. Below, we will discuss some of the methods that may disclose your browsing activities even when using encrypted DNS:

### IP Address

The simplest way to determine browsing activity might be to look at the IP addresses your devices are accessing. For example, if the observer knows that `privacyguides.org` is at `198.98.54.105`, and your device is requesting data from `198.98.54.105`, there is a good chance you're visiting Privacy Guides.

This method is only useful when the IP address belongs to a server that only hosts few websites. It's also not very useful if the site is hosted on a shared platform (e.g. GitHub Pages, Cloudflare Pages, Netlify, WordPress, Blogger, etc.). It also isn't very useful if the server is hosted behind a [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy), which is very common on the modern Internet.

### Server Name Indication (SNI)

Server Name Indication is typically used when an IP address hosts many websites. This could be a service like Cloudflare, or some other [Denial-of-service attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) protection.

1. Start capturing again with `tshark`. We've added a filter with our IP address, so you don't capture many packets:

    ```bash
    tshark -w /tmp/pg.pcap port 443 and host 198.98.54.105
    ```

2. Then we visit [https://privacyguides.org](https://privacyguides.org).

3. After visiting the website, we want to stop the packet capture with <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Next we want to analyze the results:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    We will see the connection establishment, followed by the TLS handshake for the Privacy Guides website. Around frame 5. you'll see a "Client Hello".

5. Expand the triangle &#9656; next to each field:

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Handshake Protocol: Client Hello
        ▸ Handshake Protocol: Client Hello
          ▸ Extension: server_name (len=22)
            ▸ Server Name Indication extension
    ```

6. We can see the SNI value which discloses the website we are visiting. The `tshark` command can give you the value directly for all packets containing a SNI value:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

This means even if we are using "Encrypted DNS" servers, the domain will likely be disclosed through SNI. The [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) protocol brings with it [Encrypted Client Hello](https://blog.cloudflare.com/encrypted-client-hello), which prevents this kind of leak.

Governments, in particular [China](https://zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni) and [Russia](https://zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni), have either already [started blocking](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) it or expressed a desire to do so. Recently, Russia has [started blocking foreign websites](https://github.com/net4people/bbs/issues/108) that use the [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) standard. This is because the [QUIC](https://en.wikipedia.org/wiki/QUIC) protocol that is a part of HTTP/3 requires that `ClientHello` also be encrypted.

### Online Certificate Status Protocol (OCSP)

Another way your browser can disclose your browsing activities is with the [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol). When visiting an HTTPS website, the browser might check to see if the website's [certificate](https://en.wikipedia.org/wiki/Public_key_certificate) has been revoked. This is generally done through the HTTP protocol, meaning it is **not** encrypted.

The OCSP request contains the certificate "[serial number](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)", which is unique. It is sent to the "OCSP responder" in order to check its status.

We can simulate what a browser would do using the [`openssl`](https://en.wikipedia.org/wiki/OpenSSL) command.

1. Get the server certificate and use [`sed`](https://en.wikipedia.org/wiki/Sed) to keep just the important part and write it out to a file:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. Get the intermediate certificate. [Certificate Authorities (CA)](https://en.wikipedia.org/wiki/Certificate_authority) normally don't sign a certificate directly; they use what is known as an "intermediate" certificate.

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. The first certificate in `pg_and_intermediate.cert` is actually the server certificate from step 1. We can use `sed` again to delete until the first instance of END:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. Get the OCSP responder for the server certificate:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    Our certificate shows the Lets Encrypt certificate responder.
    If we want to see all the details of the certificate we can use:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. Start the packet capture:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```

6. Make the OCSP request:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. Open the capture:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    There will be two packets with the "OCSP" protocol: a "Request" and a "Response". For the "Request" we can see the "serial number" by expanding the triangle &#9656; next to each field:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Request
            ▸ reqCert
              serialNumber
    ```

    For the "Response" we can also see the "serial number":

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

8. Or use `tshark` to filter the packets for the Serial Number:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

If the network observer has the public certificate, which is publicly available, they can match the serial number with that certificate and therefore determine the site you're visiting from that. The process can be automated and can associate IP addresses with serial numbers. It is also possible to check [Certificate Transparency](https://en.wikipedia.org/wiki/Certificate_Transparency) logs for the serial number.

## Should I use encrypted DNS?

We made this flow chart to describe when you *should* use encrypted DNS:

``` mermaid
graph TB
    Start[Start] --> anonymous{Trying to be<br> anonymous?}
    anonymous--> | Yes | tor(Use Tor)
    anonymous --> | No | censorship{Avoiding<br> censorship?}
    censorship --> | Yes | vpnOrTor(Use<br> VPN or Tor)
    censorship --> | No | privacy{Want privacy<br> from ISP?}
    privacy --> | Yes | vpnOrTor
    privacy --> | No | obnoxious{ISP makes<br> obnoxious<br> redirects?}
    obnoxious --> | Yes | encryptedDNS(Use<br> encrypted DNS<br> with 3rd party)
    obnoxious --> | No | ispDNS{Does ISP support<br> encrypted DNS?}
    ispDNS --> | Yes | useISP(Use<br> encrypted DNS<br> with ISP)
    ispDNS --> | No | nothing(Do nothing)
```

Encrypted DNS with a third party should only be used to get around redirects and basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences, or you're interested in a provider that does some rudimentary filtering.

[List of recommended DNS servers](../dns.md){ .md-button }

## What is DNSSEC?

[Domain Name System Security Extensions](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) (DNSSEC) is a feature of DNS that authenticates responses to domain name lookups. It does not provide privacy protections for those lookups, but rather prevents attackers from manipulating or poisoning the responses to DNS requests.

In other words, DNSSEC digitally signs data to help ensure its validity. In order to ensure a secure lookup, the signing occurs at every level in the DNS lookup process. As a result, all answers from DNS can be trusted.

The DNSSEC signing process is similar to someone signing a legal document with a pen; that person signs with a unique signature that no one else can create, and a court expert can look at that signature and verify that the document was signed by that person. These digital signatures ensure that data has not been tampered with.

DNSSEC implements a hierarchical digital signing policy across all layers of DNS. For example, in the case of a `privacyguides.org` lookup, a root DNS server would sign a key for the `.org` nameserver, and the `.org` nameserver would then sign a key for `privacyguides.org`’s authoritative nameserver.

<small>Adapted from [DNS Security Extensions (DNSSEC) overview](https://cloud.google.com/dns/docs/dnssec) by Google and [DNSSEC: An Introduction](https://blog.cloudflare.com/dnssec-an-introduction) by Cloudflare, both licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0).</small>

## What is QNAME minimization?

A QNAME is a "qualified name", for example `discuss.privacyguides.net`. In the past, when resolving a domain name your DNS resolver would ask every server in the chain to provide any information it has about your full query. In this example below, your request to find the IP address for `discuss.privacyguides.net` gets asked of every DNS server provider:

| Server                 | Question Asked                              | Response                                    |
|------------------------|---------------------------------------------|---------------------------------------------|
| Root server            | What's the IP of discuss.privacyguides.net? | I don't know, ask .net's server...          |
| .net's server          | What's the IP of discuss.privacyguides.net? | I don't know, ask Privacy Guides' server... |
| Privacy Guides' server | What's the IP of discuss.privacyguides.net? | 5.161.195.190!                              |

With "QNAME minimization," your DNS resolver now only asks for just enough information to find the next server in the chain. In this example, the root server is only asked for enough information to find the appropriate nameserver for the .net TLD, and so on, without ever knowing the full domain you're trying to visit:

| Server                 | Question Asked                                       | Response                          |
|------------------------|------------------------------------------------------|-----------------------------------|
| Root server            | What's the nameserver for .net?                      | *Provides .net's server*          |
| .net's server          | What's the nameserver for privacyguides.net?         | *Provides Privacy Guides' server* |
| Privacy Guides' server | What's the nameserver for discuss.privacyguides.net? | This server!                      |
| Privacy Guides' server | What's the IP of discuss.privacyguides.net?          | 5.161.195.190                     |

While this process can be slightly more inefficient, in this example neither the central root nameservers nor the TLD's nameservers ever receive information about your *full* query, thus reducing the amount of information being transmitted about your browsing habits. Further technical description is defined in [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## What is EDNS Client Subnet (ECS)?

The [EDNS Client Subnet](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) is a method for a recursive DNS resolver to specify a [subnetwork](https://en.wikipedia.org/wiki/Subnetwork) for the [host or client](https://en.wikipedia.org/wiki/Client_(computing)) which is making the DNS query.

It's intended to "speed up" delivery of data by giving the client an answer that belongs to a server that is close to them such as a [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network), which are often used in video streaming and serving JavaScript web apps.

This feature does come at a privacy cost, as it tells the DNS server some information about the client's location, generally your IP network. For example, if your IP address is `198.51.100.32` the DNS provider might share `198.51.100.0/24` with the authoritative server. Some DNS providers anonymize this data by providing another IP address which is approximately near your location.

If you have `dig` installed you can test whether your DNS provider gives EDNS information out to DNS nameservers with the following command:

```bash
dig +nocmd -t txt o-o.myaddr.l.google.com +nocomments +noall +answer +stats
```

Note that this command will contact Google for the test, and return your IP as well as EDNS client subnet information. If you want to test another DNS resolver you can specify their IP, to test `9.9.9.11` for example:

```bash
dig +nocmd @9.9.9.11 -t txt o-o.myaddr.l.google.com +nocomments +noall +answer +stats
```

If the results include a second edns0-client-subnet TXT record (like shown below), then your DNS server is passing along EDNS information. The IP or network shown after is the precise information which was shared with Google by your DNS provider.

```text
o-o.myaddr.l.google.com. 60 IN TXT "198.51.100.32"
o-o.myaddr.l.google.com. 60 IN TXT "edns0-client-subnet 198.51.100.0/24"
;; Query time: 64 msec
;; SERVER: 9.9.9.11#53(9.9.9.11)
;; WHEN: Wed Mar 13 10:23:08 CDT 2024
;; MSG SIZE  rcvd: 130
```

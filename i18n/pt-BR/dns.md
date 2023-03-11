---
title: "Introdução ao DNS"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

DNS criptografado com servidores de terceiros só deve ser usado para contornar o [bloqueio básico de DNS](https://en.wikipedia.org/wiki/DNS_blocking) quando você pode ter certeza de que não haverá nenhuma consequência. DNS encriptada não irá te ajudar a esconder qualquer uma das suas atividades de navegação.

[Saiba mais sobre DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Provedores Recomendados

| Provedor de DNS                                                                 | Política de Privacidade                                                                               | Protocolos                                                    | Registro     | ECS      | Filtragem                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | Some[^1]     | Não      | Baseado na escolha do servidor. As listas de filtragem usadas podem ser encontradas aqui. [**DNS over HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) as defined in [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) packages queries in the [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protocol and provides security with HTTPS. Support was first added in web browsers such as Firefox 60 and Chrome 83. |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                     | Some[^2]     | Não      | Baseado na escolha do servidor.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ      | Optional[^3] | Não      | Baseado na escolha do servidor.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | No[^4]       | Não      | Baseado na escolha do servidor. As listas de filtragem usadas podem ser encontradas aqui. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)                                                                                                                                                                                                                                                                  |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                     | Optional[^5] | Optional | Baseado na escolha do servidor.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt   | Some[^6]     | Optional | Based on server choice, Malware blocking by default.                                                                                                                                                                                                                                                                                                                                                                             |

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must support [DNSSEC](advanced/dns-overview.md#what-is-dnssec).
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Allow for [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) to be disabled.
- Prefer [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support or geo-steering support.

## DNSCrypt

### Android

Android 9 and above support DNS over TLS. The settings can be found in: **Settings** &rarr; **Network & Internet** &rarr; **Private DNS**.

### Apple Devices

The latest versions of iOS, iPadOS, tvOS, and macOS, support both DoT and DoH. Both protocols are supported natively via [configuration profiles](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) or through the [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

After installation of either a configuration profile or an app that uses the DNS Settings API, the DNS configuration can be selected. If a VPN is active, resolution within the VPN tunnel will use the VPN's DNS settings and not your system-wide settings.

#### Signed Profiles

Apple does not provide a native interface for creating encrypted DNS profiles. Info Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `systemd-resolved`, which many Linux distributions use to do their DNS lookups, doesn't yet [support DoH](https://github.com/systemd/systemd/issues/8639). If you want to use DoH, you'll need to install a proxy like [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) and [configure it](https://wiki.archlinux.org/title/Dnscrypt-proxy) to take all the DNS queries from your system resolver and forward them over HTTPS.

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](advanced/dns-overview.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### DNS

!!! recommendation

    obnoxious --> | Yes | encryptedDNS(Use<br> encrypted DNS<br> with 3rd party)
        obnoxious --> | No | ispDNS{Does ISP support<br> encrypted DNS?} ispDNS --> | Yes | useISP(Use<br> encrypted DNS<br> with ISP)
        ispDNS --> | No | nothing(Do nothing)
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### DNS

!!! recommendation

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** is a DNS proxy with support for [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), and [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "The anonymized DNS feature does [**not**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonymize other network traffic."
    
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

    ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    AdGuard Home features a polished web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

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

[^1]: AdGuard stores aggregated performance metrics of their DNS servers, namely the number of complete requests to a particular server, the number of blocked requests, and the speed of processing requests. They also keep and store the database of domains requested in within last 24 hours. "We need this information to identify and block new trackers and threats." "We also log how many times this or that tracker has been blocked. We need this information to remove outdated rules from our filters." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare collects and stores only the limited DNS query data that is sent to the 1.1.1.1 resolver. The 1.1.1.1 resolver service does not log personal data, and the bulk of the limited non-personally identifiable query data is stored only for 25 hours. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D only logs for Premium resolvers with custom DNS profiles. Free resolvers do not log data. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad's DNS service is available to both subscribers and non-subscribers of Mullvad VPN. Their privacy policy explicitly claims they do not log DNS requests in any way. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS can provide insights and logging features on an opt-in basis. You can choose retention times and log storage locations for any logs you choose to keep. If it's not specifically requested, no data is logged. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 collects some data for the purposes of threat monitoring and response. That data may then be remixed and shared, such as for the purpose of security research. Quad9 does not collect or record IP addresses or other data they deem personally identifiable. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

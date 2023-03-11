---
title: "DNS Çözümleyicileri"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

Encrypted DNS with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. Şifrelenmiş DNS internet faaliyetlerinizi gizlemenize yardımcı olmaz.

[Learn more about DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Önerilen Sağlayıcılar

| DNS Sağlayıcısı                                                                 | Gizlilik Politikası                                                                                   | Protokoller                                                   | Günlük kaydı     | ECS          | Filtreleme                                                                                                                                          |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | Bazı[^1]         | Hayır        | Sunucu seçimine göre. Kullanılan filtre listesine buradan ulaşabilirsiniz. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                     | Bazı[^2]         | Hayır        | Sunucu seçimine göre.                                                                                                                               |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ      | İsteğe bağlı[^3] | Hayır        | Sunucu seçimine göre.                                                                                                                               |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | Hayır[^4]        | Hayır        | Sunucu seçimine göre. Kullanılan filtre listesine buradan ulaşabilirsiniz. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                     | İsteğe bağlı[^5] | İsteğe bağlı | Sunucu seçimine göre.                                                                                                                               |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt   | Bazı[^6]         | İsteğe bağlı | Sunucu seçimine bağlı olarak, Malware varsayılan olarak engellenir.                                                                                 |

## Kriterler

**Lütfen önerdiğimiz projelerin hiçbirine bağlı olmadığımızı unutmayın.** [standart kriterlerimize](about/criteria.md)ek olarak, objektif tavsiyelerde bulunabilmemiz için bir dizi gereklilik geliştirdik. Bir projeyi kullanmayı seçmeden önce bu listeye aşina olmanızı ve sizin için doğru seçim olduğundan emin olmak için kendi araştırmanızı yapmanızı öneririz.

!!! örnek "Bu bölüm yenidir"

    Sitemizin her bölümü için tanımlanmış kriterler oluşturmaya çalışıyoruz ve bu değişebilir. Kriterlerimizle ilgili herhangi bir sorunuz varsa, lütfen [forumumuzda sorun](https://discuss.privacyguides.net/latest) ve burada listelenmemişse, önerilerimizi yaparken dikkate almadığımızı düşünmeyin. Bir projeyi önerdiğimizde dikkate alınan ve tartışılan birçok faktör vardır ve her birini belgelemek devam eden bir çalışmadır.

- [DNSSEC](advanced/dns-overview.md#what-is-dnssec) desteklemelidir.
- [QNAME Minimizasyonu](advanced/dns-overview.md#what-is-qname-minimization).
- [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) adresinin devre dışı bırakılmasına izin verilmelidir.
- [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) desteği veya coğrafi yönlendirme desteği tercih edilmelidir.

## İşletim Sistemi Desteği

### Android

Android 9 ve üstü, TLS üzerinden DNS'yi destekler. Ayarlar şurada bulunabilir: **Ayarlar** &rarr; **Ağ & İnternet** &rarr; **Özel DNS**.

### Apple Cihazları

iOS, iPadOS, tvOS ve macOS'in en son sürümleri hem DoT hem de DoH'yi desteklemektedir. Her iki protokol de [yapılandırma profilleri](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) veya [DNS Ayarları API'si](https://developer.apple.com/documentation/networkextension/dns_settings)aracılığıyla doğal olarak desteklenmektedir.

Bir yapılandırma profili veya DNS Ayarları API'sini kullanan bir uygulama yüklendikten sonra DNS yapılandırması seçilebilir. Bir VPN etkinse, VPN tüneli içindeki çözünürlük, sistem genelindeki ayarlarınızı değil VPN'in DNS ayarlarını kullanacaktır.

#### Signed Profiles

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `systemd-resolved`, which many Linux distributions use to do their DNS lookups, doesn't yet [support DoH](https://github.com/systemd/systemd/issues/8639). If you want to use DoH, you'll need to install a proxy like [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) and [configure it](https://wiki.archlinux.org/title/Dnscrypt-proxy) to take all the DNS queries from your system resolver and forward them over HTTPS.

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](advanced/dns-overview.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! öneri

    ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** is an open-source Android client supporting [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) and DNS Proxy along with caching DNS responses, locally logging DNS queries and can be used as a firewall too.
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! öneri

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

!!! öneri

    ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    AdGuard Home features a polished web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

### Pi-hole

!!! öneri

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

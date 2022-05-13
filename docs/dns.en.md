---
title: "DNS Resolvers"
icon: material/dns
---

!!! faq "Should I use encrypted DNS?"

    Encrypted DNS with third party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. Encrypted DNS will not help you hide any of your browsing activity.

    [Learn more about DNS](technology/dns.md){ .md-button }

## Recommended Providers

| DNS Provider | Privacy Policy | Protocols | Logging | ECS | Filtering |
| ------------ | -------------- | --------- | ------- | --- | --------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html) | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html) | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Some[^1] | No | Based on server choice. Filter list being used can be found here. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS)
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH <br> DoT | Some[^2] | No | Based on server choice.|
| [**ControlD**](https://controld.com) | [:octicons-link-external-24:](https://controld.com/privacy) | Cleartext <br> DoH <br> DoT | Optional[^3] | No |  Based on server choice.  |
| [**MullvadDNS**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/) | DoH <br> DoT | No[^4] | No | Based on server choice. Filter list being used can be found here. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)
| [**NextDNS**](https://www.nextdns.io) | [:octicons-link-external-24:](https://www.nextdns.io/privacy) | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Optional[^5] | Optional | Based on server choice. |
| [**Quad9**](https://quad9.net) | [:octicons-link-external-24:](https://quad9.net/privacy/policy/) | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Some[^6] | Optional |  Based on server choice, Malware blocking by default. |

[^1]: AdGuard stores aggregated performance metrics of their DNS servers, namely the number of complete requests to a particular server, the number of blocked requests, and the speed of processing requests. They also keep and store the database of domains requested in within last 24 hours. "We need this information to identify and block new trackers and threats." "We also log how many times this or that tracker has been blocked. We need this information to remove outdated rules from our filters." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare collects and stores only the limited DNS query data that is sent to the 1.1.1.1 resolver. The 1.1.1.1 resolver service does not log personal data, and the bulk of the limited non-personally identifiable query data is stored only for 25 hours. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Neither ControlD's free nor premium plans have logging enabled by default. Premium subscribers can enable logging/analytics at will. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad's DNS service is available to both subscribers and non-subscribers of Mullvad VPN. Their privacy policy explicitly claims they do not log DNS requests in any way. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS can provide insights and logging features on an opt-in basis. You can choose retention times and log storage locations for any logs you choose to keep. If it's not specifically requested, no data is logged. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 collects some data for the purposes of threat monitoring and response. That data may then be remixed and shared, such as for the purpose of security research. Quad9 does not collect or record IP addresses or other data they deem personally identifiable. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

The criteria for the servers listed above are:

- Must support [DNSSEC](technology/dns.md#what-is-dnssec-and-when-is-it-used)
- Must have [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support
- [QNAME Minimization](technology/dns.md#what-is-qname-minimization)
- Allow for [ECS](technology/dns.md#what-is-edns-client-subnet-ecs) to be disabled

## Native Operating System Support

### Android

Android 9 and above support DNS over TLS. Android 13 will support DNS over HTTPS. The settings can be found in: **Settings** &rarr; **Network & Internet** &rarr; **Private DNS**.

### Apple Devices

The latest versions of iOS, iPadOS, tvOS, and macOS, support both DoT and DoH. Both protocols are supported natively via [configuration profiles](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) or through the [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

After installation of either a configuration profile or an app that utilizes the DNS Settings API, the DNS configuration can be selected. If a VPN is active, resolution within the VPN tunnel will use the VPN's DNS settings and not your system-wide settings.

#### Signed Profiles

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [ControlD](https://kb.controld.com/en/tutorials), [NextDNS](https://apple.nextdns.io), [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

#### iOS/iPadOS

Select **Settings** &rarr; **General** &rarr; **VPN, DNS, & Device Management** &rarr; **DNS**

#### macOS

Select **System Preferences &rarr; Profiles** or **System Preferences** &rarr; **Network** &rarr; **Advanced**, (depending on if you have configuration profiles installed).

#### tvOS

Select **Settings** &rarr; **General** &rarr; **Privacy** &rarr; **Share Apple TV Analytics** &rarr; then press the *Play* button on the remote.

### Windows

You can [turn on DoH](https://docs.microsoft.com/en-us/windows-server/networking/dns/doh-client-support) by accessing Windows settings in the control panel.

Select **Settings** &rarr; **Network & Internet** &rarr; **Ethernet or WiFi**, &rarr; **Edit DNS Settings** &rarr; **Preferred DNS encryption** &rarr; **Encrypted only (DNS over HTTPS)**.

### Linux

`systemd-resolved`, which many Linux distributions use to do their DNS lookups, doesn't yet [support DoH](https://github.com/systemd/systemd/issues/8639). If you want to use DoH, you'll need to install a proxy like [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) and [configure it](https://wiki.archlinux.org/title/Dnscrypt-proxy) to take all the DNS queries from your system resolver and forward them over HTTPS.

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](technology/dns.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](technology/dns.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }

    **RethinkDNS** is an open-source Android client supporting [DNS-over-HTTPS](technology/dns.md#dns-over-https-doh), [DNS-over-TLS](technology/dns.md#dns-over-tls-dot), [DNSCrypt](technology/dns.md#dnscrypt) and DNS Proxy along with caching DNS responses, locally logging DNS queries and can be used as a firewall too.

    [Website](https://rethinkdns.com){ .md-button .md-button--primary } [Privacy Policy](https://rethinkdns.com/privacy){ .md-button }

    ??? downloads

        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.celzero.bravedns)
        - [:fontawesome-brands-github: Source](https://github.com/celzero/rethink-app)

### DNSCloak

!!! recommendation

    ![DNSCloak logo](assets/img/ios/dnscloak.png){ align=right }

    **DNSCloak** is an open-source iOS client supporting [DNS-over-HTTPS](technology/dns.md#dns-over-https-doh), [DNSCrypt](technology/dns.md#dnscrypt), and [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki) options such as caching DNS responses, locally logging DNS queries, and custom block lists. You can [add custom resolvers by DNS stamp](https://medium.com/privacyguides/adding-custom-dns-over-https-resolvers-to-dnscloak-20ff5845f4b5).

    [Project Info](https://github.com/s-s/dnscloak/blob/master/README.md){ .md-button .md-button--primary } [Privacy Policy](https://drive.google.com/file/d/1050No_pU74CAWUS5-BwQWyO2x_aiMzWc/view){ .md-button }

    ??? downloads

        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1452162351)
        - [:fontawesome-brands-github: Source](https://github.com/s-s/dnscloak)

### dnscrypt-proxy

!!! recommendation

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }

    **dnscrypt-proxy** is a DNS proxy with support for [DNSCrypt](technology/dns.md#dnscrypt), [DNS-over-HTTPS](technology/dns.md#dns-over-https-doh), and [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).

    !!! warning "The anonymized DNS feature does [**not**](technology/dns.md#why-shouldnt-i-use-encrypted-dns) anonymize other network traffic."

    [Wiki](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .md-button .md-button--primary } [Privacy Policy](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }

    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:fontawesome-brands-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:fontawesome-brands-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)
        - [:fontawesome-brands-github: Source](https://github.com/DNSCrypt/dnscrypt-proxy)

--8<-- "includes/abbreviations.en.md"

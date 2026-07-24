---
title: DNS Resolvers
description: We recommend choosing these encrypted DNS providers to replace your ISP's default configuration.
aliases:
- /dns
- /en/dns
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#control-d" title="Control D" image="./control-d.svg" subtitle="Control D is a customizable DNS service which lets you block security threats, unwanted content, and advertisements on a DNS level. In addition to their paid plans, they offer a number of preconfigured DNS resolvers you can use for free." >}}
  {{< card link="#nextdns" title="NextDNS" image="./nextdns.svg" subtitle="NextDNS is a customizable DNS service which lets you block security threats, unwanted content, and advertisements on a DNS level. They offer a fully functional free plan for limited use." >}}
  {{< card link="#rethinkdns" title="RethinkDNS" image="./rethinkdns.svg" subtitle="RethinkDNS is an open-source Android client that supports DoH, DoT, DNSCrypt and DNS Proxy. It also provides additional functionality such as caching DNS responses, locally logging DNS queries, and using the app as a firewall." >}}
  {{< card link="#dnscrypt-proxy" title="DNSCrypt-Proxy" image="./dnscrypt-proxy.svg" subtitle="DNSCrypt-Proxy is a DNS proxy with support for DNSCrypt, DoH, and Anonymized DNS." >}}
{{< /cards >}}
</div>

Encrypted **DNS** with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. Encrypted DNS will not help you hide any of your browsing activity.

[Learn more about DNS](../../../wiki/advanced/dns-overview/index.md)

These are our favorite public DNS resolvers based on their privacy and security characteristics, and their worldwide performance. Some of these services offer basic DNS-level blocking of malware or trackers depending on the server you choose, but if you want to be able to see and customize what is blocked, you should use a dedicated DNS filtering product instead.

| DNS Provider | Protocols | Logging / Privacy Policy | [ECS](../../../wiki/advanced/dns-overview/index.md#what-is-edns-client-subnet-ecs) | Filtering | Signed Apple Profile |
|---|---|---|---|---|---|
| [**AdGuard Public DNS**](https://adguard-dns.io/en/public-dns.html) | Cleartext <br>DoH/3 <br>DoT <br>DoQ <br>DNSCrypt | Anonymized[^1] | Anonymized | Based on server choice. Filter list being used can be found here. [Link](https://github.com/AdguardTeam/AdGuardSDNSFilter) | Yes [Link](https://adguard-dns.io/en/blog/encrypted-dns-ios-14.html) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setup) | Cleartext <br>DoH/3 <br>DoT | Anonymized[^2] | No | Based on server choice. | No [Link](https://community.cloudflare.com/t/requesting-1-1-1-1-signed-profiles-for-apple/571846) |
| [**Control D Free DNS**](https://controld.com/free-dns) | Cleartext <br>DoH/3 <br>DoT <br>DoQ | No[^3] | No | Based on server choice. | Yes <br>[iOS](https://docs.controld.com/docs/ios-platform) <br>[macOS](https://docs.controld.com/docs/macos-platform#manual-setup-profile) |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) | DoH <br>DoT | No[^4] | No | Based on server choice. Filter list being used can be found here. [Link](https://github.com/mullvad/dns-adblock) | Yes [Link](https://github.com/mullvad/encrypted-dns-profiles) |
| [**Quad9**](https://quad9.net) | Cleartext <br>DoH/3 <br>DoT <br>DoQ <br>DNSCrypt | Anonymized[^5] | Optional | Based on server choice. Malware blocking is included by default. | Yes <br>[iOS](https://docs.quad9.net/Setup_Guides/iOS/iOS_14_and_later_(Encrypted)) <br>[macOS](https://docs.quad9.net/Setup_Guides/MacOS/Big_Sur_and_later_(Encrypted)) |

[^1]:
    AdGuard stores aggregated performance metrics of their DNS servers, namely the number of complete requests to a particular server, the number of blocked requests, and the speed of processing requests. They also keep and store the database of domains requested within the last 24 hours.
    > We need this information to identify and block new trackers and threats.
    > We also log how many times this or that tracker has been blocked. We need this information to remove outdated rules from our filters.

    AdGuard DNS: [*Privacy Policy*](https://adguard-dns.io/en/privacy.html)
[^2]:
    Cloudflare collects and stores only the limited DNS query data that is sent to the 1.1.1.1 resolver. The 1.1.1.1 resolver service does not log personal data, and the bulk of the limited non-personally identifiable query data is stored only for 25 hours.

    1.1.1.1 Public DNS Resolver: [*Cloudflare’s commitment to privacy*](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver)
[^3]:
    Control D only logs specific account data for Premium resolvers with custom DNS profiles. Free resolvers do not retain any data.

    Control D: [*Privacy Policy*](https://controld.com/privacy)
[^4]:
    Mullvad's DNS service is available to both subscribers and non-subscribers of Mullvad VPN. Their privacy policy explicitly claims they do not log DNS requests in any way.

    Mullvad: [*No-logging of user activity policy*](https://mullvad.net/en/help/no-logging-data-policy)
[^5]:
    Quad9 collects some data for the purposes of threat monitoring and response. That data may then be remixed and shared for purposes like furthering their security research. Quad9 does not collect or record IP addresses or other data they deem personally identifiable.

    Quad9: [*Data and Privacy Policy*](https://quad9.net/privacy/policy)

## Cloud-Based DNS Filtering

These DNS filtering solutions offer a web dashboard where you can customize the block lists to your exact needs. These services can be used easily across multiple networks.

### Control D

{{< title-card logo="./control-d.svg" >}}

**Control D** is a customizable DNS service which lets you block security threats, unwanted content, and advertisements on a DNS level.

In addition to their paid plans, they offer a number of preconfigured DNS resolvers you can use for free.

{{< cards >}}
  {{< card link="https://controld.com" title="Homepage" icon="home" >}}
  {{< card link="https://controld.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://docs.controld.com/docs/ctrld)
[{{< badge content="macOS" color="indigo" >}}](https://docs.controld.com/docs/gui-setup-utility)
[{{< badge content="Windows" color="red" >}}](https://docs.controld.com/docs/gui-setup-utility)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.controld.setuputility)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/1518799460)
[{{< badge content="GitHub" >}}](https://github.com/Control-D-Inc/ctrld/releases)

### NextDNS

{{< title-card logo="./nextdns.svg" >}}

**NextDNS** is a customizable DNS service which lets you block security threats, unwanted content, and advertisements on a DNS level.

They offer a fully functional free plan for limited use.

{{< cards >}}
  {{< card link="https://nextdns.io" title="Homepage" icon="home" >}}
  {{< card link="https://nextdns.io/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://github.com/nextdns/nextdns/wiki)
[{{< badge content="macOS" color="indigo" >}}](https://apps.apple.com/us/app/nextdns/id1464122853)
[{{< badge content="Windows" color="red" >}}](https://github.com/nextdns/nextdns/wiki/Windows)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/nextdns/id1463342498)
[{{< badge content="GitHub" >}}](https://github.com/nextdns/nextdns/releases)

When used with an account, NextDNS will enable insights and logging features by default (as some features require it). You can choose retention time and log storage location for any logs you choose to keep, or disable logs altogether.

NextDNS's free plan is fully functional, but should not be relied upon for security or other critical filtering applications, because after 300,000 DNS queries in a month all filtering, logging, and other account-based functionality are disabled. It can still be used as a regular DNS provider after that point, so your devices will continue to function and make secure queries via DNS-over-HTTPS (DoH), just without your filter lists.

NextDNS also offers a public DoH service at `https://dns.nextdns.io` and DNS-over-TLS/QUIC (DoT/DoQ) at `dns.nextdns.io`, which are available by default in Firefox and Chromium, and subject to their default, no-logging [privacy policy](https://nextdns.io/privacy).

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](../../../wiki/advanced/dns-overview/index.md#unencrypted-dns) resolver to forward to. Typically, it is used on platforms that don't natively support [encrypted DNS](../../../wiki/advanced/dns-overview/index.md#what-is-encrypted-dns).

### RethinkDNS

{{< title-card logo="./rethinkdns.svg" >}}

**RethinkDNS** is an open-source Android client that supports [DoH](../../../wiki/advanced/dns-overview/index.md#dns-over-https-doh), [DoT](../../../wiki/advanced/dns-overview/index.md#dns-over-tls-dot), [DNSCrypt](../../../wiki/advanced/dns-overview/index.md#dnscrypt) and DNS Proxy. It also provides additional functionality such as caching DNS responses, locally logging DNS queries, and using the app as a firewall.

{{< cards >}}
  {{< card link="https://rethinkdns.com" title="Homepage" icon="home" >}}
  {{< card link="https://rethinkdns.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
[{{< badge content="GitHub" >}}](https://github.com/celzero/rethink-app/releases)

While RethinkDNS takes up the Android VPN slot, you can still use a VPN or Orbot with the app by [adding a WireGuard configuration](https://docs.rethinkdns.com/proxy/wireguard) or [manually configuring Orbot as a Proxy server](https://docs.rethinkdns.com/firewall/orbot), respectively.

### DNSCrypt-Proxy

{{< title-card logo="./dnscrypt-proxy.svg" >}}

**DNSCrypt-Proxy** is a DNS proxy with support for [DNSCrypt](../../../wiki/advanced/dns-overview/index.md#dnscrypt), [DoH](../../../wiki/advanced/dns-overview/index.md#dns-over-https-doh), and [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).

{{< cards >}}
  {{< card link="https://github.com/DNSCrypt/dnscrypt-proxy" title="Source Code Repository" icon="code" >}}
  {{< card link="https://github.com/DNSCrypt/dnscrypt-proxy/wiki" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)
[{{< badge content="macOS" color="indigo" >}}](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
[{{< badge content="Windows" color="red" >}}](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)

> [!WARNING]
> The anonymized DNS feature does [not](../../../wiki/advanced/dns-overview/index.md#why-shouldnt-i-use-encrypted-dns) anonymize other network traffic.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

All DNS products...

- Must support [DNSSEC](../../../wiki/advanced/dns-overview/index.md#what-is-dnssec).
- Must support [QNAME Minimization](../../../wiki/advanced/dns-overview/index.md#what-is-qname-minimization).
- Must anonymize [ECS](../../../wiki/advanced/dns-overview/index.md#what-is-edns-client-subnet-ecs) or disable it by default.

Additionally, all public providers...

- Must not log any personal data to disk.
    - As noted in the footnotes, some providers collect query information for purposes like security research, but in such cases, the data must not be associated with any PII such as IP address, etc.
- Should support [anycast](https://en.wikipedia.org/wiki/Anycast) or geo-steering.

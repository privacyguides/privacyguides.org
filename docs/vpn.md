---
meta_title: "Private VPN Service Recommendations and Comparison, No Sponsors or Ads - Privacy Guides"
title: "VPN Services"
icon: material/vpn
description: The best VPN services for protecting your privacy and security online. Find a provider here that isn't out to spy on you.
cover: vpn.webp
global:
 - [randomize-element, "table tbody"]
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

If you're looking for additional *privacy* from your ISP, on a public Wi-Fi network, or while torrenting files, a **VPN** may be the solution for you.

<div class="admonition danger" markdown>
<p class="admonition-title">VPNs do not provide anonymity</p>

Using a VPN will **not** keep your browsing habits anonymous, nor will it add additional security to non-secure (HTTP) traffic.

If you are looking for **anonymity**, you should use the Tor Browser. If you're looking for added **security**, you should always ensure you're connecting to websites using HTTPS. A VPN is not a replacement for good security practices.

[Download Tor](https://torproject.org){ .md-button .md-button--primary } [Tor Myths & FAQ](advanced/tor-overview.md){ .md-button }

</div>

[Detailed VPN Overview :material-arrow-right-drop-circle:](basics/vpn-overview.md){ .md-button }

## Recommended Providers

Our recommended providers use encryption, support WireGuard & OpenVPN, and have a no logging policy. Read our [full list of criteria](#criteria) for more information.

| Provider | Countries | WireGuard | Port Forwarding | IPv6 | Anonymous Payments
|---|---|---|---|---|---
| [Proton](#proton-vpn) | 112+ | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Partial Support | :material-information-outline:{ .pg-blue } Limited Support | Cash
| [IVPN](#ivpn) | 37+ | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } | :material-information-outline:{ .pg-blue } Outgoing Only | Monero, Cash
| [Mullvad](#mullvad) | 49+ | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } | :material-check:{ .pg-green } | Monero, Cash

### Proton VPN

<div class="admonition recommendation" markdown>

![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }

**Proton VPN** is a strong contender in the VPN space, and they have been in operation since 2016. Proton AG is based in Switzerland and offers a limited free tier, as well as a more featured premium option.

[:octicons-home-16: Homepage](https://protonvpn.com){ .md-button .md-button--primary }
[:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://protonvpn.com/support){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1437005085)
- [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
- [:fontawesome-brands-windows: Windows](https://protonvpn.com/download-windows)
- [:simple-apple: macOS](https://protonvpn.com/download-macos)
- [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup)

</details>

</div>

#### :material-check:{ .pg-green } 112 Countries

Proton VPN has [servers in 112 countries](https://protonvpn.com/vpn-servers) or [5](https://protonvpn.com/support/how-to-create-free-vpn-account) if you use their [free plan](https://protonvpn.com/free-vpn/server).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. This is because of a shorter route (fewer hops) to the destination.
{ .annotate }

1. Last checked: 2024-08-06

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

As of January 2020, Proton VPN has undergone an independent audit by SEC Consult. SEC Consult found some medium and low risk vulnerabilities in Proton VPN's Windows, Android, and iOS applications, all of which were "properly fixed" by Proton VPN before the reports were published. None of the issues identified would have provided an attacker remote access to your device or traffic. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Open-Source Clients

Proton VPN provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepts Cash

Proton VPN, in addition to accepting credit/debit cards, PayPal, and [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), also accepts **cash/local currency** as an anonymous form of payment.

#### :material-check:{ .pg-green } WireGuard Support

Proton VPN supports the WireGuard® protocol. [WireGuard](https://wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://wireguard.com/protocol). Additionally, WireGuard aims to be simpler and more performant.

Proton VPN [recommends](https://protonvpn.com/blog/wireguard) the use of WireGuard with their service. Proton VPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://wireguard.com/install).

#### :material-alert-outline:{ .pg-orange } Limited IPv6 Support

Proton [now supports IPv6](https://protonvpn.com/support/prevent-ipv6-vpn-leaks) in their browser extension and Linux client, but only 80% of their servers are IPv6-compatible. On other platforms, the Proton VPN client will block all outgoing IPv6 traffic, so you don't have to worry about your IPv6 address being leaked, but you will not be able to connect to any IPv6-only sites, nor will you be able to connect to Proton VPN from an IPv6-only network.

#### :material-information-outline:{ .pg-info } Remote Port Forwarding

Proton VPN currently only supports ephemeral remote [port forwarding](https://protonvpn.com/support/port-forwarding) via NAT-PMP, with 60 second lease times. The official Windows and Linux apps provide an easy-to-access option for it, while on other operating systems you'll need to run your own [NAT-PMP client](https://protonvpn.com/support/port-forwarding-manual-setup). Torrent applications often support NAT-PMP natively.

#### :material-information-outline:{ .pg-blue } Anti-Censorship

Proton VPN has their [Stealth](https://protonvpn.com/blog/stealth-vpn-protocol) protocol which *may* help in situations where VPN protocols like OpenVPN or WireGuard are blocked with various rudimentary techniques. Stealth encapsulates the VPN tunnel in TLS session in order to look like more generic internet traffic.

Unfortunately, it does not work very well in countries where sophisticated filters that analyze all outgoing traffic in an attempt to discover encrypted tunnels are deployed. Stealth is available on Android, iOS, Windows, and macOS, but it's not yet available on Linux.

#### :material-check:{ .pg-green } Mobile Clients

Proton VPN has published [App Store](https://apps.apple.com/app/id1437005085) and [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/ProtonVPN/android-app/releases).

<div class="admonition warning" markdown>
<p class="admonition-title">How to opt out of sharing telemetry</p>

On Android, Proton hides telemetry settings under the misleadingly labeled "**Help us fight censorship**" menu in the settings panel. On other platforms these settings can be found under the "**Usage statistics**" menu.

We are noting this because while we don't necessarily recommend against sharing anonymous usage statistics with developers, it is important that these settings are easily found and clearly labeled.

</div>

#### :material-information-outline:{ .pg-blue } Additional Notes

Proton VPN clients support two-factor authentication on all platforms. Proton VPN has their own servers and datacenters in Switzerland, Iceland and Sweden. They offer content blocking and known-malware blocking with their DNS service. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](tor.md#tor-browser) for this purpose.

##### :material-alert-outline:{ .pg-orange } Kill switch feature is broken on Intel-based Macs

System crashes [may occur](https://protonvpn.com/support/macos-t2-chip-kill-switch) on Intel-based Macs when using the VPN kill switch. If you require this feature, and you are using a Mac with Intel chipset, you should consider using another VPN service.

### IVPN

<div class="admonition recommendation" markdown>

![IVPN logo](assets/img/vpn/ivpn.svg){ align=right }

**IVPN** is another premium VPN provider, and they have been in operation since 2009. IVPN is based in Gibraltar and does not offer a free trial.

[:octicons-home-16: Homepage](https://ivpn.net){ .md-button .md-button--primary }
[:octicons-eye-16:](https://ivpn.net/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://ivpn.net/knowledgebase/general){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ivpn){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1193122683)
- [:octicons-moon-16: Accrescent](https://accrescent.app/app/net.ivpn.client)
- [:simple-github: GitHub](https://github.com/ivpn/android-app/releases)
- [:fontawesome-brands-windows: Windows](https://ivpn.net/apps-windows)
- [:simple-apple: macOS](https://ivpn.net/apps-macos)
- [:simple-linux: Linux](https://ivpn.net/apps-linux)

</details>

</div>

#### :material-check:{ .pg-green } 37 Countries

IVPN has [servers in 37 countries](https://ivpn.net/status).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. This is because of a shorter route (fewer hops) to the destination.
{ .annotate }

1. Last checked: 2024-08-06

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

IVPN has had multiple [independent audits](https://ivpn.net/en/blog/tags/audit) since 2019 and has publicly announced their commitment to [annual security audits](https://ivpn.net/blog/ivpn-apps-security-audit-concluded).

#### :material-check:{ .pg-green } Open-Source Clients

As of February 2020 [IVPN applications are now open source](https://ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepts Cash and Monero

In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment. Prepaid cards with redeem codes are [also available](https://ivpn.net/knowledgebase/billing/voucher-cards-faq).

#### :material-check:{ .pg-green } WireGuard Support

IVPN supports the WireGuard® protocol. [WireGuard](https://wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://wireguard.com/protocol). Additionally, WireGuard aims to be simpler and more performant.

IVPN [recommends](https://ivpn.net/wireguard) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://wireguard.com/install).

#### :material-information-outline:{ .pg-blue } IPv6 Support

IVPN allows you to [connect to services using IPv6](https://ivpn.net/knowledgebase/general/do-you-support-ipv6) but doesn't allow you to connect from a device using an IPv6 address.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

IVPN previously supported port forwarding, but removed the option in [June 2023](https://ivpn.net/blog/gradual-removal-of-port-forwarding). Missing this feature could negatively impact certain applications, especially peer-to-peer applications like torrent clients.

#### :material-check:{ .pg-green } Anti-Censorship

IVPN has obfuscation modes using [V2Ray](https://v2ray.com/en/index.html) which helps in situations where VPN protocols like OpenVPN or WireGuard are blocked. Currently, this feature is only available on Desktop and [iOS](https://ivpn.net/knowledgebase/ios/v2ray). It has two modes where it can use [VMess](https://guide.v2fly.org/en_US/basics/vmess.html) over QUIC or TCP connections. QUIC is a modern protocol with better congestion control and therefore may be faster with reduced latency. The TCP mode makes your data appear as regular HTTP traffic.

#### :material-check:{ .pg-green } Mobile Clients

IVPN has published [App Store](https://apps.apple.com/app/id1193122683) and [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/ivpn/android-app/releases).

#### :material-information-outline:{ .pg-blue } Additional Notes

IVPN clients support two-factor authentication. IVPN also provides "[AntiTracker](https://ivpn.net/antitracker)" functionality, which blocks advertising networks and trackers from the network level.

### Mullvad

<div class="admonition recommendation" markdown>

![Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }

**Mullvad** is a fast and inexpensive VPN with a serious focus on transparency and security. They have been in operation since 2009. Mullvad is based in Sweden and offers a 14-day money-back guarantee for [payment methods](https://mullvad.net/en/help/refunds) that allow it.

[:octicons-home-16: Homepage](https://mullvad.net){ .md-button .md-button--primary }
[:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://mullvad.net/en/help){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/mullvad){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1488466513)
- [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
- [:fontawesome-brands-windows: Windows](https://mullvad.net/en/download/windows)
- [:simple-apple: macOS](https://mullvad.net/en/download/macos)
- [:simple-linux: Linux](https://mullvad.net/en/download/linux)

</details>

</div>

#### :material-check:{ .pg-green } 49 Countries

Mullvad has [servers in 49 countries](https://mullvad.net/servers).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. This is because of a shorter route (fewer hops) to the destination.
{ .annotate }

1. Last checked: 2025-03-10

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Mullvad has had multiple [independent audits](https://mullvad.net/en/blog/tag/audits) and has publicly announced their endeavors to conduct [annual audits](https://mullvad.net/en/blog/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit) of their apps and infrastructure.

#### :material-check:{ .pg-green } Open-Source Clients

Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepts Cash and Monero

Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. Prepaid cards with redeem codes are also available. Mullvad also accepts Swish and bank wire transfers, as well as a few European payment systems.

#### :material-check:{ .pg-green } WireGuard Support

Mullvad supports the WireGuard® protocol. [WireGuard](https://wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://wireguard.com/protocol). Additionally, WireGuard aims to be simpler and more performant.

Mullvad [recommends](https://mullvad.net/en/help/why-wireguard) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://wireguard.com/install).

#### :material-check:{ .pg-green } IPv6 Support

Mullvad allows you to [access services hosted on IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support) and connect from a device using an IPv6 address.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

Mullvad previously supported port forwarding, but removed the option in [May 2023](https://mullvad.net/en/blog/2023/5/29/removing-the-support-for-forwarded-ports). Missing this feature could negatively impact certain applications, especially peer-to-peer applications like torrent clients.

#### :material-check:{ .pg-green } Anti-Censorship

Mullvad offers several features to help bypass censorship and access the internet freely:

- **Obfuscation modes**: Mullvad has two built-in obfuscation modes: "UDP-over-TCP" and ["WireGuard over Shadowsocks"](https://mullvad.net/en/blog/introducing-shadowsocks-obfuscation-for-wireguard). These modes disguise your VPN traffic as regular web traffic, making it harder for censors to detect and block. Supposedly, China has to use a [new method to disrupt Shadowsocks-routed traffic](https://gfw.report/publications/usenixsecurity23/en).
- **Advanced obfuscation with Shadowsocks and v2ray**: For more advanced users, Mullvad provides a guide on how to use the [Shadowsocks with v2ray](https://mullvad.net/en/help/shadowsocks-with-v2ray) plugin with Mullvad clients. This setup provides an additional layer of obfuscation and encryption.
- **Custom server IPs**: To counter IP-blocking, you can request custom server IPs from Mullvad's support team. Once you receive the custom IPs, you can input the text file in the "Server IP override" settings, which will override the chosen server IP addresses with ones that aren't known to the censor.
- **Bridges and proxies**: Mullvad also allows you to use bridges or proxies to reach their API (needed for authentication), which can help bypass censorship attempts that block access to the API itself.

#### :material-check:{ .pg-green } Mobile Clients

Mullvad has published [App Store](https://apps.apple.com/app/id1488466513) and [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Additional Notes

Mullvad is very transparent about which nodes they [own or rent](https://mullvad.net/en/servers). They also provide the option to enable Defense Against AI-guided Traffic Analysis ([DAITA](https://mullvad.net/en/blog/daita-defense-against-ai-guided-traffic-analysis)) in their apps. DAITA protects against the threat of advanced traffic analysis which can be used to connect patterns in VPN traffic with specific websites.

## Criteria

<div class="admonition danger" markdown>
<p class="admonition-title">Danger</p>

It is important to note that using a VPN provider will not make you anonymous, but it will give you better privacy in certain situations. A VPN is not a tool for illegal activities. Don't rely on a "no log" policy.

</div>

**Please note we are not affiliated with any of the providers we recommend. This allows us to provide completely objective recommendations.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements for any VPN provider wishing to be recommended, including strong encryption, independent security audits, modern technology, and more. We suggest you familiarize yourself with this list before choosing a VPN provider, and conduct your own research to ensure the VPN provider you choose is as trustworthy as possible.

### Technology

We require all our recommended VPN providers to provide standard configuration files which can be used in a generic, open-source client. **If** a VPN provides their own custom client, we require a kill switch to block network data leaks when disconnected.

**Minimum to Qualify:**

- Support for strong protocols such as WireGuard.
- Kill switch built in to clients.
- Multi-hop support. Multi-hopping is important to keep data private in case of a single node compromise.
- If VPN clients are provided, they should be [open source](https://en.wikipedia.org/wiki/Open_source), like the VPN software they generally have built into them. We believe that [source code](https://en.wikipedia.org/wiki/Source_code) availability provides greater transparency about what the program is actually doing.
- Censorship resistance features designed to bypass firewalls without DPI.

**Best Case:**

- Kill switch with highly configurable options (enable/disable on certain networks, on boot, etc.)
- Easy-to-use VPN clients
- [IPv6](https://en.wikipedia.org/wiki/IPv6) support. We expect that servers will allow incoming connections via IPv6 and allow you to access services hosted on IPv6 addresses.
- Capability of [remote port forwarding](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) assists in creating connections when using P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) file sharing software or hosting a server (e.g., Mumble).
- Obfuscation technology which camouflages the true nature of internet traffic, designed to circumvent advanced internet censorship methods like DPI.

### Privacy

We prefer our recommended providers to collect as little data as possible. Not collecting personal information on registration, and accepting anonymous forms of payment are required.

**Minimum to Qualify:**

- [Anonymous cryptocurrency](cryptocurrency.md) **or** cash payment option.
- No personal information required to register: Only username, password, and email at most.

**Best Case:**

- Accepts multiple [anonymous payment options](advanced/payments.md).
- No personal information accepted (auto-generated username, no email required, etc.).

### Security

A VPN is pointless if it can't even provide adequate security. We require all our recommended providers to abide by current security standards. Ideally, they would use more future-proof encryption schemes by default. We also require an independent third-party to audit the provider's security, ideally in a very comprehensive manner and on a repeated (yearly) basis.

**Minimum to Qualify:**

- Strong Encryption Schemes: OpenVPN with SHA-256 authentication; RSA-2048 or better handshake; AES-256-GCM or AES-256-CBC data encryption.
- Forward Secrecy.
- Published security audits from a reputable third-party firm.
- VPN servers that use full-disk encryption or are RAM-only.

**Best Case:**

- Strongest Encryption: RSA-4096.
- Optional quantum-resistant encryption.
- Forward Secrecy.
- Comprehensive published security audits from a reputable third-party firm.
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
- RAM-only VPN servers.

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

- Public-facing leadership or ownership.
- Company based in a jurisdiction where it cannot be forced to do secret logging.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the VPN providers we recommend we like to see responsible marketing.

**Minimum to Qualify:**

- Must self-host analytics (i.e., no Google Analytics).

Must not have any marketing which is irresponsible:

- Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know people can quite easily deanonymize themselves in a number of ways, e.g.:
    - Reusing personal information (e.g., email accounts, unique pseudonyms, etc.) that they accessed without anonymity software (Tor, VPN, etc.)
    - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Claim that a single circuit VPN is "more anonymous" than Tor, which is a circuit of three or more hops that regularly changes.
- Use responsible language: i.e., it is okay to say that a VPN is "disconnected" or "not connected", however claiming that someone is "exposed", "vulnerable" or "compromised" is needless use of alarming language that may be incorrect. For example, that person might simply be on another VPN provider's service or using Tor.

**Best Case:**

Responsible marketing that is both educational and useful to the consumer could include:

- An accurate comparison to when [Tor](tor.md) should be used instead.
- Availability of the VPN provider's website over a [.onion service](https://en.wikipedia.org/wiki/.onion)

### Additional Functionality

While not strictly requirements, there are some factors we looked into when determining which providers to recommend. These include content blocking functionality, warrant canaries, excellent customer support, the number of allowed simultaneous connections, etc.

---
title: "VPN Services"
icon: material/vpn
description: These are the best VPN services for protecting your privacy and security online. Find a provider here that isn’t out to spy on you.
---

If you're looking for additional **privacy** from your ISP, on a public Wi-Fi network, or while torrenting files, a VPN may be the solution for you as long as you understand the risks involved. We think these providers are a cut above the rest:

<div class="grid cards" markdown>

- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! danger "VPNs bieten keine Anonymität"

    Using a VPN will **not** keep your browsing habits anonymous, nor will it add additional security to non-secure (HTTP) traffic.
    
    If you are looking for **anonymity**, you should use the Tor Browser **instead** of a VPN.
    
    If you're looking for added **security**, you should always ensure you're connecting to websites using HTTPS. A VPN is not a replacement for good security practices.
    
    [Tor herunterladen](https://www.torproject.org/){ .md-button .md-button--primary } [Tor-Mythen & FAQ](advanced/tor-overview.md){ .md-button }

[Detailed VPN Overview :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Empfohlene Anbieter

Die von uns empfohlenen Anbieter verwenden Verschlüsselung, akzeptieren Monero, unterstützen WireGuard & OpenVPN und haben eine No-Logging-Richtlinie. Read our [full list of criteria](#criteria) for more information.

### IVPN

!!! recommendation

    ![IVPN logo](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** ist ein weiterer Premium-VPN-Anbieter und ist seit 2009 aktiv. IVPN hat den Sitz in Gibraltar.
    
    [:octicons-home-16: Homepage](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Datenschutzrichtlinie" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Quellcode" }
    
    ??? downloads
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 Countries

IVPN has [servers in 35 countries](https://www.ivpn.net/server-locations).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Der Grund dafür ist eine kürzere Route (weniger Sprünge) zum Ziel.
{ .annotate }

1. Stand: 2022-09-16

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

IVPN has undergone a [no-logging audit from Cure53](https://cure53.de/audit-report_ivpn.pdf) which concluded in agreement with IVPN's no-logging claim. IVPN has also completed a [comprehensive pentest report Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in January 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

As of February 2020 [IVPN applications are now open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepts Cash and Monero

In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment.

#### :material-check:{ .pg-green } WireGuard Support

IVPN unterstützt das WireGuard®-Protokoll. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Darüber hinaus zielt WireGuard darauf ab, einfacher und leistungsfähiger zu sein.

IVPN [recommends](https://www.ivpn.net/wireguard/) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is possible with a Pro plan. Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, IVPN has mobile clients for [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), and [GitHub](https://github.com/ivpn/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

IVPN-Clients unterstützen Zwei-Faktor-Authentifizierung (die Clients von Mullvad nicht). IVPN also provides "[AntiTracker](https://www.ivpn.net/antitracker)" functionality, which blocks advertising networks and trackers from the network level.

### Mullvad

!!! recommendation

    ![Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** ist ein schnelles und preiswertes VPN mit einem ernsthaften Fokus auf Transparenz und Sicherheit. Mullvad ist seit **2009** in Betrieb. Mullvad ist in Schweden ansässig und bietet keine kostenlose Testversion an.
    
    [:octicons-home-16: Homepage](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Dienst" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Datenschutzrichtlinie" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Quellcode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

#### :material-check:{ .pg-green } 41 Countries

Mullvad has [servers in 41 countries](https://mullvad.net/servers/).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Der Grund dafür ist eine kürzere Route (weniger Sprünge) zum Ziel.
{ .annotate }

1. Stand: 2023-01-19

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Mullvad's VPN clients have been audited by Cure53 and Assured AB in a pentest report [published at cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). The security researchers concluded:

> Cure53 and Assured AB are happy with the results of the audit and the software leaves an overall positive impression. With security dedication of the in-house team at the Mullvad VPN compound, the testers have no doubts about the project being on the right track from a security standpoint.

In 2020 a second audit [was announced](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) was made available on Cure53's website:

> The results of this May-June 2020 project targeting the Mullvad complex are quite positive. [...] The overall application ecosystem used by Mullvad leaves a sound and structured impression. The overall structure of the application makes it easy to roll out patches and fixes in a structured manner. More than anything, the findings spotted by Cure53 showcase the importance of constantly auditing and re-assessing the current leak vectors, in order to always ensure privacy of the end-users. With that being said, Mullvad does a great job protecting the end-user from common PII leaks and privacy related risks.

In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepts Cash and Monero

Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. Sie akzeptieren auch Swish- und Banküberweisungen.

#### :material-check:{ .pg-green } WireGuard Support

Mullvad unterstützt das WireGuard®-Protokoll. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Darüber hinaus zielt WireGuard darauf ab, einfacher und leistungsfähiger zu sein.

Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } IPv6 Support

Mullvad supports the future of networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Their network allows you to [access services hosted on IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) as opposed to other providers who block IPv6 connections.

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is allowed for people who make one-time payments, but not allowed for accounts with a recurring/subscription-based payment method. This is to prevent Mullvad from being able to identify you based on your port usage and stored subscription information. See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

#### :material-check:{ .pg-green } Mobile Clients

Mullvad has published [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) and [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Additional Functionality

Mullvad is very transparent about which nodes they [own or rent](https://mullvad.net/en/servers/). They use [ShadowSocks](https://shadowsocks.org/) in their ShadowSocks + OpenVPN configuration, making them more resistant against firewalls with [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) trying to block VPNs. Supposedly, [China has to use a different method to block ShadowSocks servers](https://github.com/net4people/bbs/issues/22). Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

!!! recommendation annotate

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** ist ein starker Anwärter im VPN-Bereich und ist seit 2016 in Betrieb. Die Proton AG hat ihren Sitz in der Schweiz und bietet sowohl eine begrenzte kostenlose als auch eine umfangreichere Premium-Option an.
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Datenschutzrichtlinie" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Quellcode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

#### :material-check:{ .pg-green } 67 Countries

Proton VPN has [servers in 67 countries](https://protonvpn.com/vpn-servers).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Der Grund dafür ist eine kürzere Route (weniger Sprünge) zum Ziel.
{ .annotate }

1. Stand: 2022-09-16

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Im Januar 2020 hat sich Proton VPN einem unabhängigen Audit durch SEC Consult unterzogen. SEC Consult fand einige Sicherheitslücken mit mittlerem und niedrigem Risiko in den Windows-, Android- und iOS-Anwendungen von Proton VPN, die alle von Proton VPN vor der Veröffentlichung der Berichte "ordnungsgemäß behoben" wurden. Keines der festgestellten Probleme hätte angreifenden Fernzugriff auf dein Gerät oder deinen Datenverkehr ermöglicht. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source/). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit/) and the report was [produced by Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Open-Source Clients

Proton VPN provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepts Cash

Proton VPN, in addition to accepting credit/debit cards, PayPal, and [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), also accepts **cash/local currency** as an anonymous form of payment.

#### :material-check:{ .pg-green } WireGuard Support

Proton VPN unterstützt hauptsächlich das WireGuard®-Protokoll. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Darüber hinaus zielt WireGuard darauf ab, einfacher und leistungsfähiger zu sein.

Proton VPN [recommends](https://protonvpn.com/blog/wireguard/) the use of WireGuard with their service. On Proton VPN's Windows, macOS, iOS, Android, ChromeOS, and Android TV apps, WireGuard is the default protocol; however, [support](https://protonvpn.com/support/how-to-change-vpn-protocols/) for the protocol is not present in their Linux app.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

Proton VPN currently only supports remote [port forwarding](https://protonvpn.com/support/port-forwarding/) on Windows, which may impact some applications. Especially Peer-to-peer applications like Torrent clients.

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, Proton VPN has mobile clients for [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

Proton VPN Clients unterstützen Zwei-Faktor-Authentifizierung auf allen Plattformen außer Linux. Proton VPN hat eigene Server und Rechenzentren in der Schweiz, Island und Schweden. Sie bieten mit ihrem DNS-Dienst die Möglichkeit, Werbung und Schadware zu blockieren. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

#### :material-alert-outline:{ .pg-orange } Killswitch feature is broken on Intel-based Macs

System crashes [may occur](https://protonvpn.com/support/macos-t2-chip-kill-switch/) on Intel-based Macs when using the VPN killswitch. Wenn du diese Funktion benötigst und einen Mac mit Intel-Chipsatz verwendest, solltest du einen anderen VPN-Dienst nutzen.

## Kriterien

!!! danger

    It is important to note that using a VPN provider will not make you anonymous, but it will give you better privacy in certain situations. Ein VPN ist kein Werkzeug für illegale Aktivitäten. Verlasse dich nicht auf "no Log" Richtlienen.

**Bitte beachte, dass wir mit keinem der Projekte, die wir empfehlen, verbunden sind. Dies ermöglicht es uns, völlig objektive Empfehlungen zu geben.** Zusätzlich zu unseren [Standardkriterien](about/criteria.md) haben wir eine Reihe klarer Anforderungen für alle VPN-Anbieter*innen entwickelt, die empfohlen werden wollen, darunter starke Verschlüsselung, unabhängige Sicherheitsprüfungen, moderne Technologie und mehr. We suggest you familiarize yourself with this list before choosing a VPN provider, and conduct your own research to ensure the VPN provider you choose is as trustworthy as possible.

### Technologie

We require all our recommended VPN providers to provide OpenVPN configuration files to be used in any client. **If** a VPN provides their own custom client, we require a killswitch to block network data leaks when disconnected.

**Mindestvoraussetzung um zu qualifizieren:**

- Unterstützung von starken Protokollen wie WireGuard & OpenVPN.
- Notaus ist in den Clients integriert.
- Multihop-Unterstützung. Multihopping ist wichtig, um Daten im Falle einer Kompromittierung eines einzelnen Knotens geheim zu halten.
- Wenn VPN-Clients zur Verfügung gestellt werden, sollten sie [Open Source](https://de.wikipedia.org/wiki/Open_Source)sein, wie die VPN-Software, die in der Regel in sie integriert ist. Wir sind der Meinung, dass [Quellcode](https://de.wikipedia.org/wiki/Quelltext) mehr Transparenz darüber bietet, was dein Gerät tatsächlich tut.

**Best Case:**

- Unterstützung von WireGuard und OpenVPN.
- Notaus mit hochgradig konfigurierbaren Optionen (Aktivierung/Deaktivierung in bestimmten Netzen, beim Booten usw.)
- Einfach zu bedienende VPN-Clients
- Unterstützt [IPv6](https://de.wikipedia.org/wiki/IPv6). Wir erwarten, dass die Server eingehende Verbindungen über IPv6 zulassen und dir den Zugang zu Diensten ermöglichen, die auf IPv6-Adressen gehostet werden.
- Capability of [remote port forwarding](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) assists in creating connections when using P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) file sharing software or hosting a server (e.g., Mumble).

### Datenschutz

Wir ziehen es vor, dass die von uns empfohlenen Anbieter*innen so wenig Daten wie möglich sammeln. Der Verzicht auf die Erhebung personenbezogener Daten bei der Anmeldung und die Annahme anonymer Zahlungsformen sind erforderlich.

**Mindestvoraussetzung um zu qualifizieren:**

- [Anonymous cryptocurrency](cryptocurrency.md) **or** cash payment option.
- Für die Registrierung sind keine persönlichen Daten erforderlich: Höchstens Benutzername, Passwort und E-Mail.

**Best Case:**

- Accepts multiple [anonymous payment options](advanced/payments.md).
- No personal information accepted (autogenerated username, no email required, etc.).

### Sicherheit

A VPN is pointless if it can't even provide adequate security. We require all our recommended providers to abide by current security standards for their OpenVPN connections. Ideally, they would use more future-proof encryption schemes by default. We also require an independent third-party to audit the provider's security, ideally in a very comprehensive manner and on a repeated (yearly) basis.

**Mindestvoraussetzung um zu qualifizieren:**

- Strong Encryption Schemes: OpenVPN with SHA-256 authentication; RSA-2048 or better handshake; AES-256-GCM or AES-256-CBC data encryption.
- Perfect Forward Secrecy (PFS).
- Published security audits from a reputable third-party firm.

**Best Case:**

- Strongest Encryption: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Comprehensive published security audits from a reputable third-party firm.
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.

### Vertrauen

You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Mindestvoraussetzung um zu qualifizieren:**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the VPN providers we recommend we like to see responsible marketing.

**Mindestvoraussetzung um zu qualifizieren:**

- Must self-host analytics (i.e., no Google Analytics). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for people who want to opt-out.

Must not have any marketing which is irresponsible:

- Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know people can quite easily deanonymize themselves in a number of ways, e.g.:
    - Reusing personal information (e.g., email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc.)
    - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Claim that a single circuit VPN is "more anonymous" than Tor, which is a circuit of three or more hops that regularly changes.
- Use responsible language: i.e., it is okay to say that a VPN is "disconnected" or "not connected", however claiming that someone is "exposed", "vulnerable" or "compromised" is needless use of alarming language that may be incorrect. For example, that person might simply be on another VPN provider's service or using Tor.

**Best Case:**

Responsible marketing that is both educational and useful to the consumer could include:

- An accurate comparison to when [Tor](tor.md) should be used instead.
- Availability of the VPN provider's website over a [.onion service](https://en.wikipedia.org/wiki/.onion)

### Zusätzliche Funktionalitäten

While not strictly requirements, there are some factors we looked into when determining which providers to recommend. These include adblocking/tracker-blocking functionality, warrant canaries, multihop connections, excellent customer support, the number of allowed simultaneous connections, etc.

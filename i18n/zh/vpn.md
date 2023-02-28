---
title: "VPN服务"
icon: 资料/vpn
---

选择无日志的 VPN 供应商，他们不会出卖或读取你的网络流量。

??? 危险 "VPNs 不提供匿名性"

    使用VPN **不** 会隐藏你的浏览习惯, 它也不会为不安全(HTTP) 流量额外增加安全性。
    
    如果你在寻求**匿名**, 你应该使用Tor 浏览器 **而不是** VPN。
    
    如果你在寻求增进**安全**, 你应该始终确保在使用 HTTPS连接到网站。 VPN不是良好安全实践的替代品。
    
    [Download Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Tor Myths & FAQ](basics/tor-overview.md){ .md-button }

??? 问题 "VPN何时有用？"

    如果你只是想要从ISP那里、或者在使用公共Wi-Fi网络和给文件做种时提高一些**隐私**，那么只要在了解相关风险的前提下，VPN可能是个解决方案。
    
    [More Info](basics/vpn-overview.md){ .md-button }

## 推荐的供应商

!!! 摘要"准则"

    我们推荐的供应商使用加密，接受Monero支付 ，支持WireGuard & OpenVPN ，并且有无日志策略。 请阅读我们的 [full list of criteria](#our-criteria) 了解更多信息。

### Proton VPN

!!! 推荐备注

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN**是VPN领域的强有力竞争者，他们自2016年以来一直保持运营。 Proton AG总部位于瑞士，提供有限制的免费使用等级，以及更具特色的高级选项。
    
    **免费** — **Plus 套餐 USD $71.88/年** (1)
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Source Code" } downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

??? 检查注释 "64个国家"

    Proton VPN有[64个国家的服务器](https://protonvpn.com/vpn-servers) (1)。 挑一个拥有离你最近的服务器的VPN供应商将减少你的网络流量的发送延迟。 这是因为到达目的地的路由较短(跳数较少)。
    
    我们还认为，如果VPN供应商使用[专用服务器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是使用[虚拟专用服务器](https://en.wikipedia.org/wiki/Virtual_private_server)等更便宜的(与其他客户)共享的解决方案，能提高VPN供应商私人密钥的安全性。

1. 如果订阅2年(119.76美元)，还可享受10%的折扣。

??? 检查"独立审计"

    截至2020年1月，Proton VPN已经接受了SEC咨询公司的独立审计。 SEC Consult在Proton VPN的Windows、Android和iOS应用程序中发现了一些中度和低度风险的漏洞，在报告发布前，Proton VPN都已经 "妥善修复"。 所发现的问题中没有任何一个能让攻击者远程访问你的设备或流量。 你可以在 [protonvpn.com](https://protonvpn.com/blog/open-source/)查看每个平台的单独报告。 2022年4月，Proton VPN接受了[另一次审计](https://protonvpn.com/blog/no-logs-audit/)，报告是[由Securitum制作](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf)。 A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

??? 检查“开源客户端”

    Proton VPN在其[GitHub组织](https://github.com/ProtonVPN)中提供其桌面和移动客户端的源代码。

??? 检查"接受现金"

    Proton VPN除了接受信用卡/借记卡和PayPal之外，还接受比特币和**现金/当地货币**作为匿名支付方式。

??? 检查 "WireGuard支持"。

    Proton VPN主要支持WireGuard®协议。 [WireGuard](https://www.wireguard.com)是一个较新的协议，使用最先进的 [cryptography](https://www.wireguard.com/protocol/)。 此外， WireGuard旨在更简单、更高效。
    
    Proton VPN [recommends](https://protonvpn.com/blog/wireguard/)在其服务中使用WireGuard。 在Proton VPN的Windows、macOS、iOS、Android、ChromeOS和Android TV应用程序中，WireGuard是默认协议；但是，在他们的Linux应用程序中，该协议还没有得到 [support](https://protonvpn.com/support/how-to-change-vpn-protocols/)。

??? 警告 "远程端口转发"

    Proton VPN目前只支持Windows上的远程[端口转发](https://protonvpn.com/support/port-forwarding/)，这可能会影响一些应用程序。 特别是点对点的应用，如Torrent客户端。

??? success "Mobile Clients"

    In addition to providing standard OpenVPN configuration files, Proton VPN has mobile clients for [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases) allowing for easy connections to their servers.

??? info "Additional Functionality"

    Proton VPN clients support two factor authentication on all platforms except Linux at the moment. Proton VPN has their own servers and datacenters in Switzerland, Iceland and Sweden. They offer adblocking and known malware domains blocking with their DNS service. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

!!! danger "Killswitch feature is broken on Intel-based Macs"

    System crashes [may occur](https://protonvpn.com/support/macos-t2-chip-kill-switch/) on Intel-based Macs when using the VPN killswitch. If you require this feature, and you are using a Mac with Intel chipset, you should consider using another VPN service.

### IVPN

!!! recommendation

    ![IVPN标志](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN**是另一个高级VPN供应商，他们自2009年以来一直在运营。 挑一个拥有离你最近的服务器的VPN供应商将减少你的网络流量的发送延迟。
    
    这是因为到达目的地的路由较短(跳数较少)。 我们还认为，如果VPN供应商使用[专用服务器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是使用[虚拟专用服务器](https://en.wikipedia.org/wiki/Virtual_private_server)等更便宜的(与其他客户)共享的解决方案，能提高VPN供应商私人密钥的安全性。

??? 检查"独立审计"

    IVPN has [servers in 35 countries](https://www.ivpn.net/server-locations) (1). 挑一个拥有离你最近的服务器的VPN供应商将减少你的网络流量的发送延迟。 这是因为到达目的地的路由较短(跳数较少)。
    
    我们还认为，如果VPN供应商使用[专用服务器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是使用[虚拟专用服务器](https://en.wikipedia.org/wiki/Virtual_private_server)等更便宜的(与其他客户)共享的解决方案，能提高VPN供应商私人密钥的安全性。

1. 如果订阅2年(119.76美元)，还可享受10%的折扣。

??? 检查"独立审计"

    IVPN has undergone a [no-logging audit from Cure53](https://cure53.de/audit-report_ivpn.pdf) which concluded in agreement with IVPN's no-logging claim. IVPN has also completed a [comprehensive pentest report Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in January 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

??? 检查“开源客户端”

    As of February 2020 [IVPN applications are now open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

??? 检查 "WireGuard支持"。

    In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment.

??? 检查 "WireGuard支持"。

    IVPN supports the WireGuard® protocol. [WireGuard](https://www.wireguard.com)是一个较新的协议，使用最先进的 [cryptography](https://www.wireguard.com/protocol/)。 此外， WireGuard旨在更简单、更高效。
    
    IVPN [recommends](https://www.ivpn.net/wireguard/) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

??? success "Remote Port Forwarding"

    Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is possible with a Pro plan. Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? success "Mobile Clients"

    In addition to providing standard OpenVPN configuration files, IVPN has mobile clients for [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), and [GitHub](https://github.com/ivpn/android-app/releases) allowing for easy connections to their servers.

??? info "Additional Functionality"

    IVPN clients support two factor authentication (Mullvad's clients do not). IVPN also provides "[AntiTracker](https://www.ivpn.net/antitracker)" functionality, which blocks advertising networks and trackers from the network level.

### Mullvad

!!! recommendation

    ![Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** is a fast and inexpensive VPN with a serious focus on transparency and security. 挑一个拥有离你最近的服务器的VPN供应商将减少你的网络流量的发送延迟。 这是因为到达目的地的路由较短(跳数较少)。
    
    我们还认为，如果VPN供应商使用[专用服务器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是使用[虚拟专用服务器](https://en.wikipedia.org/wiki/Virtual_private_server)等更便宜的(与其他客户)共享的解决方案，能提高VPN供应商私人密钥的安全性。 downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

??? 检查"独立审计"

    Mullvad has [servers in 41 countries](https://mullvad.net/servers/) (1). 挑一个拥有离你最近的服务器的VPN供应商将减少你的网络流量的发送延迟。 这是因为到达目的地的路由较短(跳数较少)。
    
    我们还认为，如果VPN供应商使用[专用服务器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是使用[虚拟专用服务器](https://en.wikipedia.org/wiki/Virtual_private_server)等更便宜的(与其他客户)共享的解决方案，能提高VPN供应商私人密钥的安全性。

1. 如果订阅2年(119.76美元)，还可享受10%的折扣。

??? 检查"独立审计"

    Mullvad's VPN clients have been audited by Cure53 and Assured AB in a pentest report [published at cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). The security researchers concluded:
    
    > Cure53 and Assured AB are happy with the results of the audit and the software leaves an overall positive impression. With security dedication of the in-house team at the Mullvad VPN compound, the testers have no doubts about the project being on the right track from a security standpoint.
    
    In 2020 a second audit [was announced](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) was made available on Cure53's website:
    
    > The results of this May-June 2020 project targeting the Mullvad complex are quite positive. [...] The overall application ecosystem used by Mullvad leaves a sound and structured impression. The overall structure of the application makes it easy to roll out patches and fixes in a structured manner. More than anything, the findings spotted by Cure53 showcase the importance of constantly auditing and re-assessing the current leak vectors, in order to always ensure privacy of the end-users. With that being said, Mullvad does a great job protecting the end-user from common PII leaks and privacy related risks.
    
    In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

??? 检查“开源客户端”

    Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

??? 检查 "WireGuard支持"。

    Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. [WireGuard](https://www.wireguard.com)是一个较新的协议，使用最先进的 [cryptography](https://www.wireguard.com/protocol/)。

??? 检查 "WireGuard支持"。

    Mullvad supports the WireGuard® protocol. [WireGuard](https://www.wireguard.com)是一个较新的协议，使用最先进的 [cryptography](https://www.wireguard.com/protocol/)。 此外， WireGuard旨在更简单、更高效。
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

??? success "IPv6 Support"

    Mullvad supports the future of networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Their network allows you to [access services hosted on IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) as opposed to other providers who block IPv6 connections.

??? success "Remote Port Forwarding"

    Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is allowed for people who make one-time payments, but not allowed for accounts with a recurring/subscription-based payment method. This is to prevent Mullvad from being able to identify you based on your port usage and stored subscription information. See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

??? success "Mobile Clients"

    Mullvad has published [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) and [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

??? info "Additional Functionality"

    Mullvad is very transparent about which nodes they [own or rent](https://mullvad.net/en/servers/). They use [ShadowSocks](https://shadowsocks.org/) in their ShadowSocks + OpenVPN configuration, making them more resistant against firewalls with [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) trying to block VPNs. Supposedly, [China has to use a different method to block ShadowSocks servers](https://github.com/net4people/bbs/issues/22). Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

## Criteria

!!! 危险

    值得注意的是，使用VPN供应商不会使你成为匿名者，但在某些情况下会给你更好的隐私。 VPN不是非法活动的工具。 不要依赖 "无日志 "政策。

**请注意，我们与我们推荐的任何供应商都没有关系。 这使我们能够提供完全客观的建议。** 除了 [我们的标准标准](about/criteria.md)，我们还为任何希望被推荐的VPN供应商制定了一套明确的要求，包括强大的加密、独立的安全审计、现代技术等。 我们建议你在选择VPN供应商之前熟悉这份清单，并进行自己的研究，以确保你选择的VPN供应商尽可能值得信赖。

### 技术

我们要求所有我们推荐的VPN供应商提供OpenVPN配置文件，以便在任何客户端使用。 **如果** 一个VPN提供他们自己的定制客户端，我们需要一个killswitch来阻止断开连接时的网络数据泄露。

**符合条件的最低要求。**

- 支持强大的协议，如WireGuard & OpenVPN。
- 客户端内置的杀毒软件。
- 多跳支持。 多重跳转对于在单个节点受损的情况下保持数据的私密性非常重要。
- 如果提供VPN客户端，它们应该是 [开源的](https://en.wikipedia.org/wiki/Open_source)，就像它们一般内置的VPN软件。 我们相信， [源代码](https://en.wikipedia.org/wiki/Source_code) 的可用性提供了更大的透明度，了解你的设备实际上在做什么。

**Best Case:**

- 支持WireGuard和OpenVPN。
- 具有高度可配置的选项（在某些网络上启用/禁用，在启动时，等等）的杀戮开关。
- 易于使用的VPN客户端
- 支持 [IPv6](https://en.wikipedia.org/wiki/IPv6)。 我们希望服务器将允许通过IPv6的传入连接，并允许你访问IPv6地址上托管的服务。
- [远程端口转发的能力](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) 在使用P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) 文件共享软件或托管服务器（如Mumble）时，有助于创建连接。

### 隐私

We prefer our recommended providers to collect as little data as possible. 不在注册时收集个人信息，并接受匿名的支付方式，这是必须的。

**符合条件的最低要求。**

- Monero或现金支付选项。
- 注册时不需要提供个人信息。最多只有用户名、密码和电子邮件。

**Best Case:**

- 接受Monero、现金和其他形式的匿名支付方式（礼品卡等）。
- 不接受个人信息（自动生成的用户名，不需要电子邮件，等等。）

### 安全性

A VPN is pointless if it can't even provide adequate security. We require all our recommended providers to abide by current security standards for their OpenVPN connections. Ideally, they would use more future-proof encryption schemes by default. We also require an independent third-party to audit the provider's security, ideally in a very comprehensive manner and on a repeated (yearly) basis.

**符合条件的最低要求。**

- Strong Encryption Schemes: OpenVPN with SHA-256 authentication; RSA-2048 or better handshake; AES-256-GCM or AES-256-CBC data encryption.
- Perfect Forward Secrecy (PFS).
- Published security audits from a reputable third-party firm.

**Best Case:**

- Strongest Encryption: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Comprehensive published security audits from a reputable third-party firm.
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**符合条件的最低要求。**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the VPN providers we recommend we like to see responsible marketing.

**符合条件的最低要求。**

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

### Additional Functionality

While not strictly requirements, there are some factors we looked into when determining which providers to recommend. These include adblocking/tracker-blocking functionality, warrant canaries, multihop connections, excellent customer support, the number of allowed simultaneous connections, etc.

--8<-- "includes/abbreviations.zh.txt"

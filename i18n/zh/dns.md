---
title: "DNS解析器"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

Encrypted DNS with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. 加密的DNS不会帮助你隐藏任何浏览活动。

[Learn more about DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## 推荐的供应商

| DNS供应商                                                                          | 隐私政策                                                                                                  | 协议                                                            | 日志记录   | ECS | 筛选                                                                                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------ | --- | ----------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | 一些[^1] | No  | 基于服务器的选择。 正在使用的过滤器列表可以在这里找到。 [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                     | 一些[^2] | No  | 基于服务器的选择。                                                                                             |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ      | 可选[^3] | No  | 基于服务器的选择。                                                                                             |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | No[^4] | No  | 基于服务器的选择。 正在使用的过滤器列表可以在这里找到。 [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                     | 可选[^5] | 可选  | 基于服务器的选择。                                                                                             |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt   | 一些[^6] | 可选  | 基于服务器的选择，默认为恶意软件拦截。                                                                                   |

## 标准

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。

- 必须支持 [DNSSEC](advanced/dns-overview.md#what-is-dnssec)。
- [QNAME最小化](advanced/dns-overview.md#what-is-qname-minimization).
- 允许 [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) 被禁用。
- 倾向于 [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) 支持或地理转向支持。

## 本地操作系统支持

### 安卓

安卓9及以上系统支持通过TLS的DNS。 这些设置可以在下面找到。 **设置** &rarr; **网络 & 互联网** &rarr; **私人DNS**。

### 苹果设备

最新版本的iOS、iPadOS、tvOS和macOS，同时支持DoT和DoH。 通过 [配置文件](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) ，或通过 [DNS设置API](https://developer.apple.com/documentation/networkextension/dns_settings)，这两种协议都得到了本地支持。

在安装配置文件或使用DNS设置API的应用程序后，可以选择DNS配置。 如果VPN处于激活状态，在VPN隧道内的解析将使用VPN的DNS设置，而不是你整个系统的设置。

#### 已签名的配置文件

苹果公司没有为创建加密的DNS配置文件提供本地接口。 [安全DNS配置文件创建者](https://dns.notjakob.com/tool.html) 是一个非官方的工具，用于创建你自己的加密DNS配置文件，然而它们将不会被签署。 签名的档案是首选；签名验证了档案的来源，有助于确保档案的完整性。 绿色的 "已验证 "标签被赋予已签署的配置文件。 关于代码签名的更多信息，见 [关于代码签名](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html)。 ** [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html)、 [NextDNS](https://apple.nextdns.io)和 [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/)提供了签名的配置文件**。

!!! 信息

    `systemd-resolved`，许多Linux发行版使用它来进行DNS查询，但还不[支持DoH](https://github.com/systemd/systemd/issues/8639)。 如果你想使用DoH，你需要安装一个代理，如 [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)和[配置它](https://wiki.archlinux.org/title/Dnscrypt-proxy)，从你的系统解析器接收所有的DNS查询并通过HTTPS转发。

## 加密DNS代理

加密的DNS代理软件为 [未加密的DNS](advanced/dns-overview.md#unencrypted-dns) 解析器提供一个本地代理转发。 通常情况下，它被用于那些不支持 [加密DNS的平台](advanced/dns-overview.md#what-is-encrypted-dns)。

### RethinkDNS

!!! recommendation

    ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS标志](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS**是一个开源的Android客户端，支持 [DNS-over-HTTPS]（advanced/dns-overview.md#dns-over-https-doh）、 [DNS-over-TLS]（advanced/dns-overview.md#dns-over-tls-dot）、 [DNSCrypt]（advanced/dns-overview.md#dnscrypt）和DNS Proxy，同时还可以缓存DNS响应，本地记录DNS查询，也可以作为防火墙使用。
    
    [:octicons-home-16: 主页](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="源代码" }
    
    ??? 下载
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-代理

!!! recommendation

    ![dnscrypt-proxy标志](assets/img/dns/dnscrypt-proxy.svg) { align=right }
    
    **dnscrypt-proxy**是一个DNS代理，支持 [DNSCrypt]（advanced/dns-overview.md#dnscrypt）， [DNS-over-HTTPS]（advanced/dns-overview.md#dns-over-https-doh），以及[Anonymized DNS]（https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS）。
    
    !!! 警告 "匿名DNS功能不会[***](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns)匿名化其他网络流量。"
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title="贡献" }
    
    ??? 下载
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## 自我托管的解决方案

自我托管的DNS解决方案对于在智能电视和其他物联网设备等受控平台上提供过滤非常有用，因为不需要客户端软件。

### AdGuard Home

!!! recommendation

    ![AdGuard Home标识](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home**是一个开源的 [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole)，它使用[DNS过滤](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/)来阻止不需要的网络内容，如广告。
    
    AdGuard Home有一个精致的网络界面，可以查看洞察力和管理被阻止的内容。
    
    [:octicons-home-16: 主页](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="源代码" }

### Pi-hole

!!! recommendation

    ! [Pi-hole标志](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole**是一个开源的 [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole)，它使用[DNS过滤](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/)来阻止不需要的网络内容，如广告。
    
    Pi-hole被设计为在Raspberry Pi上托管，但它并不局限于这种硬件。 该软件具有一个友好的网络界面，可以查看洞察力和管理封锁的内容。
    
    [:octicons-home-16: 主页](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="源代码" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title="贡献" }

[^1]: AdGuard存储其DNS服务器的汇总性能指标，即对特定服务器的完整请求数、被阻止的请求数和处理请求的速度。 他们还保留并存储了过去24小时内请求的域名数据库。 "我们需要这些信息来识别和阻止新的追踪者和威胁。" "我们还记录了这个或那个追踪器被封锁的次数。 我们需要这些信息来从我们的过滤器中删除过时的规则"。 [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare只收集和存储发送到1.1.1.1解析器的有限DNS查询数据。 1.1.1.1解析器服务不记录个人数据，而且大部分有限的非个人识别的查询数据只存储25小时。 [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D只记录具有自定义DNS配置文件的高级解析器。 自由解析器不记录数据。 [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad的DNS服务对Mullvad VPN的订阅者和非订阅者都适用。 他们的隐私政策明确声称他们不会以任何方式记录DNS请求。 [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS可以在选择加入的基础上提供见解和日志记录功能。 你可以为你选择保留的任何日志选择保留时间和日志存储位置。 如果没有特别要求，就不记录数据。 [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9收集了一些数据，用于威胁监测和应对。 然后，这些数据可能被重新混合和共享，例如为了安全研究的目的。 Quad9不会收集或记录IP地址或其他他们认为可以识别个人身份的数据。 [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

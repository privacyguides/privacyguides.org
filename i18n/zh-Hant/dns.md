---
title: "DNS解析器"
icon: material/dns
description: 我們建議切換到這些加密 DNS 提供商，以取代您 ISP 所預設的配置。
---

使用第三方伺服器的加密 DNS 只能避開基本的 [DNS 封鎖](https://en.wikipedia.org/wiki/DNS_blocking) ，當您確定不會有不良後果時。 加密的 DNS 無法為您隱藏瀏覽活動。

[了解更多 DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## 推薦的 DNS 提供商

| DNS 提供者                                                                         | 隐私政策                                                                                                  | 協議                                                            | 日誌記錄   | ECS | 篩選                                                                                                  |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------ | --- | --------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | 一些[^1] | 不是  | 根據伺服器的選擇。 使用的過濾器列表可以在這裡找到。 [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | 明文 <br> DoH/3 <br> DoT                            | 一些[^2] | 不是  | 根據伺服器的選擇。                                                                                           |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | 明文 <br> DoH/3 <br> DoT <br> DoQ             | 可選[^3] | 不是  | 根據伺服器的選擇。                                                                                           |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | 否[^4]  | 不是  | 根據伺服器的選擇。 正在使用的過濾器列表可以在這裡找到。 [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)  |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | 明文 <br> DoH/3 <br> DoT                            | 可選[^5] | 可選的 | 根據伺服器的選擇。                                                                                           |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | 明文 <br> DoH <br> DoT <br> DNSCrypt          | 一些[^6] | 可選的 | 根據伺服器選擇，預設會封鎖惡意程式碼。                                                                                 |

## 標準

**請注意，我們這裏所推薦專案沒有任何牽扯。 ** 除了 [我們的標準準則](about/criteria.md)外，還有一套明確要求以提出客觀建議。 我們建議您在選擇使用任何項目之前先熟悉此列表，並進行自己的研究，以確保您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為這個網站的各個部分建立明確標準，它可能依情況變化。 如果您對我們的標準有任何疑問，請[在我們的論壇上提問] (https://discuss.privacyguides.net/latest) ，不要因為未列出而認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個專案時，會考慮和討論許多因素，記錄每一個項目都是一件持續的工作。

- 必須支援 [ DNSSEC ](advanced/dns-overview.md#what-is-dnssec)。
- [QNAME 最小化](advanced/dns-overview.md#what-is-qname-minimization).
- 可讓 [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs)禁用 。
- 首選 [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) 支援或地理轉向支援。

## 原生作業系統支援

### Android

Android 9 以上版本支持 DoT (DNS over TLS)。 設定方式可以在以下位置找到： **設定** &rarr; **網路 & 網際網路** &rarr; **私人 DNS**。

### Apple裝置

最新版本的 iOS、iPadOS、tvOS 和 macOS 都支持 DoT 和 DoH。 這兩個通訊協議都透過 [組態檔](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) 或透過 [DNS 設定 API ](https://developer.apple.com/documentation/networkextension/dns_settings)獲得原生支援。

安裝設定設定檔或使用 DNS 設定API 的應用程式後，即可選擇 DNS 設定。 如果啟用 VPN， 隧道內的解析將使用 VPN 的 DNS 設置，而不是設備系統的設置。

#### 已簽署的設定檔

Apple不提供用於建立加密DNS設定檔的原生介面。 [Secure DNS profile creator](https://dns.notjakob.com/tool.html) 是一款非正式工具用以建立您自己的加密 DNS 設定檔。不過這個軟體並未得到簽署。 最好是簽署過個人資設定檔；簽署會驗證個人資料的來源，並有助於確保個人資料的完整性。 綠色的「已驗證」標籤會提供給已簽署的配置文件。 代碼簽名的詳細資訊，請參閱 [關於代碼簽名](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html)。 由 [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html)、 [NextDNS](https://apple.nextdns.io)和 [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/)提供的**簽名設定檔** 。

!!! 資訊

    許多 Linux 發行版用來進行DNS查詢的`systemd-resolved` 還不[支援 DoH] (https://github.com/systemd/systemd/issues/8639)。 如果要使用 DoH ，您需要安裝一個類似 [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)的代理，並[設定] (https://wiki.archlinux.org/title/Dnscrypt-proxy)讓系統解析器獲取所有 DNS 查詢，並透過 HTTPS 轉發。

## 加密的DNS代理

加密DNS代理軟體提供了一個本地代理，用於將 [個未加密的DNS](advanced/dns-overview.md#unencrypted-dns) 解析器轉發到。 通常，它用於原本不支持 [加密 DNS ](advanced/dns-overview.md#what-is-encrypted-dns)的平臺。

### RethinkDNS

!!! recommendation

    ! [RethinkDNS logo] (assets/img/android/rethinkdns.svg#only-light) {align = right}
    ! [RethinkDNS logo] (assets/img/android/rethinkdns-dark.svg#only-dark) {align = right}
    
    * * RethinkDNS * *是一個開源 Android 用戶端工具，支持 [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh)、 [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot)、 [DNSCrypt](advanced/dns-overview.md#dnscrypt)和 DNS 代理，以及快取DNS 回應、本地記錄 DNS 查詢，也可用作防火牆。
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! recommendation

    ! [dnscrypt-proxy logo] (assets/img/dns/dnscrypt-proxy.svg) {align = right}
    
    * * dnscrypt-proxy * *是 DNS 代理，支持 [DNSCrypt](advanced/dns-overview.md#dnscrypt)、 [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh)和[Anonymized DNS] (https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS)。
    
    !!! 警告 "匿名化 DNS 功能[* * 不會 * *] (advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns)匿名化其他網路流量。
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## 自主託管方案

在被控制平臺，自主託管 DNS 可提供有用的過濾，例如智能電視和其他物聯網設備，因為不需要客戶端軟件。

### AdGuard首頁

!!! recommendation

    ! [AdGuard 首頁標誌] (assets/img/dns/adguard-home.svg) {align = right}
    
    * * AdGuard * *是一個開源的 [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) ，使用[DNS 過濾] (https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/)來封鎖不需要的網頁內容，例如廣告。
    
    AdGuard 首頁提供精美的網頁介面，可查看有用資訊並管理被封鎖的內容。
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

### Pi-hole

!!! recommendation

    ! [Pi-hole logo] (assets/img/dns/pi-hole.svg) {align = right}
    
    * * Pi-hole * *是一個開源的 [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) ，它使用 [DNS 篩選] (https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/)來阻止不需要的網頁內容，例如廣告。
    
    Pi-hole 設計應用在 Raspberry Pi ，但它不限於這種硬體。 該軟體良好的 Web 界面，可查看有用資訊和管理被阻止的內容。
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribute }

[^1]: AdGuard 儲存其 DNS 伺服器的總和效能指標，即對特定伺服器的全部請求數量、被封鎖的請求數量，以及處理請求的速度。 他們還會保存和儲存過去24小時內所請求的網域資料庫。 我們需要這些資訊來識別和阻止新的追蹤器和威脅。 我們還記錄了這些追蹤器被封鎖的次數。 我們需要這些資訊以便在過濾器中刪除過時的規則。 [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare 僅收集並儲存發送至  1.1.1.1解析器的有限 DNS 查詢資料。 1.1.1.1解析器服務不會記錄個人資料，且大部分有限的非個人識別查詢資料僅存儲25小時。 [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D 只有記錄使用自定義 DNS 配置的高級解析器。 免費解析器不記錄數據。 [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad 的 DNS 服務可供 Mullvad VPN 的訂閱者和非訂閱者使用。 他們的隱私政策明確聲稱他們不會以任何方式記錄 DNS 請求。 [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS 可以在選擇加入的基礎上提供洞察和記錄功能。 您可以選擇保留的任何日誌選擇時間長短和日誌儲存位置。 如果沒有特別要求，則不會記錄任何數據。 [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9會收集一些資料，以進行威脅監控和回應。 然後這些資料會被重新混合與共享，例如用於安全研究。 Quad9 不會收集或記錄 IP 位址或其他他們認為可識別個人身份的資料。 [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

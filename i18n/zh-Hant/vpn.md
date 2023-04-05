---
title: "VPN 服務"
icon: material/vpn
description: 這些是保護您線上隱私和安全的最佳 VPN 服務。 在這裡找一個不會監視您的供應商。
---

連接到網際網路連線供應商、公共Wi-Fi 網路或下載文件時，如何能有更好的 **隱私**保護 ，只要了解所涉及的風險， VPN 可能是您的解決方案。 我們認為這些供應商高於其他供應商：

<div class="grid cards" markdown>

- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! 注意 "VPN 不會讓您匿名"

    使用 VPN 將* *不會* *讓您的瀏覽習慣被匿名，也不會替不安全（ HTTP ）流量增加額外的安全性。
    
    如果您追求的是* *匿名性* * ，應該使用 Tor 瀏覽器* *代替* * VPN。
    
    如果要的是更多* *安全性* * ，您應該確保您全程使用 HTTPS 連接到網站。 VPN 不能取代良好的安全措施。
    
    [Download Tor] (https://www.torproject.org/){ .md-button .md-button--primary } [Tor Myths & FAQ] (advanced/tor-overview.md){ .md-button }

[VPN 概述 :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## 推薦的 DNS 提供商

我們推薦的提供商使用加密、可接受Monero 、支持WireGuard & OpenVPN ，且具有不記錄政策。 閱讀我們的 [完整列表標準](#criteria) 以獲取更多信息。

### IVPN

!!! recommendation

    ! [IVPN logo] (assets/img/vpn/ivpn.svg) {align = right}
    
    * * IVPN * *是另一家高級 VPN 提供商，自  2009年開始運營。 IVPN 位於直布羅陀。
    
    [:octicons-home-16: Homepage](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-android: Android] (https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store] (https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows] (https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS] (https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux] (https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 個國家

IVPN 在 35 個國家/地區擁有 [伺服器](https://www.ivpn.net/server-locations)。 (1)選擇離您最近的伺服器 VPN 供應商，將減少發送網路流量的延遲。 這是因為到目的地的路線較短（跳數較少）。
{ .annotate }

1. 上次檢查日期： 2022-09-16

我們認為，如果 VPN 提供商使用 [專用伺服器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是更便宜（與其他客戶共享)的解決方案 ，例如 [虛擬專用服務器](https://en.wikipedia.org/wiki/Virtual_private_server)，則 VPN提供商的私鑰更安全。

#### :material-check:{ .pg-green } 獨立稽核

IVPN 通過 Cure53</a> 的

不留記錄審計，該審計結果與 IVPN 的不留記錄聲明一致。 IVPN 還在2020年1月完成了Cure53 [全面的 pentest 報告](https://cure53.de/summary-report_ivpn_2019.pdf) 。 IVPN 也表示打算未來會定期提出 [年度報告](https://www.ivpn.net/blog/independent-security-audit-concluded)。 2022年4月進行[進一步評估](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) ，並由執行單位 Cure53 發佈[在其網站](https://cure53.de/pentest-report_IVPN_2022.pdf)。</p> 



#### :material-check:{ .pg-green } 開源客戶端

2020 二月後 [IVPN 應用程式已公開其源代碼](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source)。 源代碼可以從他們的 [GitHub組織](https://github.com/ivpn)獲得。



#### :material-check:{ .pg-green } 接受現金和Monero

除了接受信用卡/簽帳卡和 PayPal 外， IVPN 還接受比特幣 **Monero** 和 **現金/當地貨幣** （年度方案繳費）作為匿名付款方式。



#### :material-check:{ .pg-green } WireGuard支持

IVPN 支援 WireGuard 協議。 [WireGuard](https://www.wireguard.com) 是一個較新的協議，使用最先進的 [加密技術](https://www.wireguard.com/protocol/)。 此外， WireGuard的目標是更簡單，更高效。

IVPN [建議](https://www.ivpn.net/wireguard/)搭配 WireGuard 一起使用， IVPN's 所有應用程式皆已預設 WireGuard 協議。 IVPN 亦提供 WireGuard 設置生成器以用於官方版本的 WireGuard [應用軟體](https://www.wireguard.com/install/)。



#### :material-check:{ .pg-green } 遠端端口轉發

使用昇級方案可用遠端 [端口轉發](https://en.wikipedia.org/wiki/Port_forwarding) 。  [可以由客戶端區域激活](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html)端口轉發 。 只有使用 WireGuard 或 OpenVPN 協議，IVPN 方可轉發端口，但在[美國的伺服器](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html) 不支援此功能。



#### :material-check:{ .pg-green } 手機客戶端

除標準的 OpenVPN 配置文件外， IVPN可以在 [App Store ](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683)、 [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client)和  [GitHub](https://github.com/ivpn/android-app/releases) 下載移動客戶端，以輕鬆連接到他們的伺服器。



#### :material-information-outline:{ .pg-blue } 額外功能

IVPN 客戶端支援雙因素驗證（Mullvad 客戶端不支援）。 IVPN 有"[反追蹤](https://www.ivpn.net/antitracker)" 功能，以阻絕來自網路層的廣告與追蹤。



### Mullvad

!!! recommendation

    ! [Mullvad 標誌] (assets/img/vpn/mullvad.svg) {align = right}
    
    * * Mullvad * *是一個快速且便宜的VPN ，非常注重透明和安全性。 自* * 2009 年* *開始運營。 Mullvad 總部位於瑞典，不提供免費試用。
    
    [:octicons-home-16: Homepage](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store] (https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub] (https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows] (https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS] (https://mullvad.net/en/download/macos/)
        - [:simple-linux: ] (https://mullvad.net/en/download/linux/)
    



#### :material-check:{ .pg-green } 41 個國家

Mullvad 在 41 個國家/地區設有 [伺服器](https://mullvad.net/servers/)。(1)選擇離您最近伺服器，這將減少您網路流量的延遲。 這是因為到目的地的路線較短（跳數較少）。 

{ .annotate }

1. 上次檢查日期： 2023-01-19

我們認為，如果 VPN 提供商使用 [專用伺服器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是更便宜（與其他客戶共享)的解決方案 ，例如 [虛擬專用服務器](https://en.wikipedia.org/wiki/Virtual_private_server)，則 VPN提供商的私鑰更安全。



#### :material-check:{ .pg-green } 獨立稽核

Cure53 審計了 Mullvad's VPN 客戶端軟體， Assured AB 對他們進行穿透測試，相關報告在[ cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf)。 安全研究人員得出結論：



> Cure53 和 Assured AB 對審計結果感到滿意，Mullvad 留下整體正面的印象。 由於 Mullvad VPN 內部團隊在安全上的投入，測試人員肯定了該項目從安全角度來看是正確的。

2020年宣布第二次審計 [](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) ， [最終報告結果](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) 可在 Cure53 網站上獲得：



> 2020年5月~6月針對 Mullvad  的專案結果是相當正面。 [...] Mullvad 使用的整體應用生態系統給人留下了結構完善之印象。 該應用程序的整體結構更容易以結構化的方式推出補丁和修復。 Cure53 的發現展示了不斷審核和重新評估當前泄漏向量的重要性，以始終確保最終用戶的隱私。 Mullvad 在保護最終用戶免受常見 PII 洩漏和隱私相關風險方面做得很好。

2021年宣布[基礎設施審計](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) ，並在 Cure53 網站上公布[最終審計報告](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) 。 2022年6月</日>另一份委託 Assured 所作的報告 。</p> 



#### :material-check:{ .pg-green } 開源客戶端

Mullvad 在[GitHub 提供其桌面和移動客戶端的源代碼](https://github.com/mullvad/mullvadvpn-app)。



#### :material-check:{ .pg-green } 接受現金和Monero

除了接受信用卡/簽帳卡和 PayPal 外， IVPN 還接受比特幣 **Monero** 和 **現金/當地貨幣** （年度方案繳費）作為匿名付款方式。 他們也接受 Swish 和銀行電匯。



#### :material-check:{ .pg-green } WireGuard支持

Mullvad 支持 WireGuard ®協議。 [WireGuard](https://www.wireguard.com) 是一個較新的協議，使用最先進的 [加密技術](https://www.wireguard.com/protocol/)。 此外， WireGuard的目標是更簡單，更高效。

Mullvad [建議](https://mullvad.net/en/help/why-wireguard/) 搭配 WireGuard 使用。  Android, iOS, macOS, 與 Linux  Mullvad 應用軟體已將 WireGuard 調為預設協議，但 Windows 則須要自行 [手動打開](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard。 Mullvad 提供 WireGuard 配置生成器，搭配 WireGuard  官方 [應用程序](https://www.wireguard.com/install/)。



#### :material-check:{ .pg-green } IPv6 支持

Mullvad 支持未來的網路主流 [IPv6](https://en.wikipedia.org/wiki/IPv6)。 他們的網路可讓您 [存取託管在 IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) 的服務，有些供應商會阻止IPv6 連接。



#### :material-check:{ .pg-green } Remote Port Forwarding

遠端 [端口輚發](https://en.wikipedia.org/wiki/Port_forwarding) 可允許單次付款的使用者，但長期/訂閱付款的帳戶不可使用。 這是為了防止 Mullvad 能夠根據端口使用情況和存儲的訂閱資訊來辨識使用者。 請參見 Mullvad VPN</a> 端口轉發 了解更多資訊。</p> 



#### :material-check:{ .pg-green } 手機客戶端

Mullvad 有 [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) 和 [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) 用戶端，兩者易於使用的界面，無須手動配置 WireGuard 連接。 Android 客戶端也從 [GitHub](https://github.com/mullvad/mullvadvpn-app/releases)下載。



#### :material-information-outline:{ .pg-blue } 額外功能

Mullvad 對 [自有或租用](https://mullvad.net/en/servers/)的節點非常透明。 他們在 ShadowSocks + OpenVPN 配置中使用 [ShadowSocks](https://shadowsocks.org/) ，以更能抵抗 [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) 試圖阻止 VPN 之防火牆。 據推測， [中國使用不同的方法來阻止 ShadowSocks 伺服器](https://github.com/net4people/bbs/issues/22)。 Mullvad 網站也可以通過 Tor 訪問 [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion)。



### Proton VPN

!!! recommendation annotate

    ! [Proton VPN標誌] (assets/img/vpn/protonvpn.svg) {align = right}
    
    * * Proton VPN * *是 VPN 領域強大競爭者，自 2016 年開始營運。 Proton AG 總部位於瑞士，提供有限的免費會員等級，以及更多功能的付費選項。
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store] (https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub] (https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows] (https://protonvpn.com/download-windows)
        - [:simple-linux: Linux] (https://protonvpn.com/support/linux-vpn-setup/)
    



#### :material-check:{ .pg-green } 67個國家

Proton VPN 在67個國家/地區設有 [伺服器](https://protonvpn.com/vpn-servers). (1)選擇距離您最近的伺服器的VPN供應商，將減少您網路流量的延遲。 這是因為到目的地的路線較短（跳數較少）。 

{ .annotate }

1. 上次檢查日期： 2022-09-16

我們認為，如果 VPN 提供商使用 [專用伺服器](https://en.wikipedia.org/wiki/Dedicated_hosting_service)，而不是更便宜（與其他客戶共享)的解決方案 ，例如 [虛擬專用服務器](https://en.wikipedia.org/wiki/Virtual_private_server)，則 VPN提供商的私鑰更安全。



#### :material-check:{ .pg-green } 獨立稽核

截至 2020年1月， Proton VPN 已接受 SEC Consult 的獨立審計。 SEC Consult 在 Proton VPN Windows、Android 和 iOS應用程序中發現一些中低風險漏洞，Proton VPN 已在報告發布之前全部“正確修復”這些漏洞。 所發現的問題都不會讓攻擊者遠端存取您的裝置或流量。 您可以透過 [protonvpn.com](https://protonvpn.com/blog/open-source/)查看各個平臺的報告。  2022 年 4月Proton VPN 通過 [另一次審計](https://protonvpn.com/blog/no-logs-audit/) ，[ Securitum 所作的報告在此](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf)。  [Securitum](https://research.securitum.com)  在 2021年11月9日簽發 [Proton VPN 的應用程式認證函](https://proton.me/blog/security-audit-all-proton-apps) 。



#### :material-check:{ .pg-green } 開源客戶端

Proton VPN 在 [GitHub](https://github.com/ProtonVPN) 提供其桌面和移動客戶端的源代碼。



#### :material-check:{ .pg-green } 接受現金

除信用卡/簽帳卡、PayPal 和 [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc)之外，Proton VPN 還接受 **現金/當地貨幣** 等匿名付款方式。



#### :material-check:{ .pg-green } WireGuard支持

Proton VPN 支持 WireGuard ®協議。 [WireGuard](https://www.wireguard.com) 是一個較新的協議，使用最先進的 [加密技術](https://www.wireguard.com/protocol/)。 此外， WireGuard的目標是更簡單，更高效。

Proton VPN [建議](https://protonvpn.com/blog/wireguard/) 搭配 WireGuard 使用。   Proton VPN 在 Windows, macOS, iOS, Android, ChromeOS, 以及 Android TV 等平台的應用軟體， WireGuard 已是預設協議，不過[尚未支援](https://protonvpn.com/support/how-to-change-vpn-protocols/) Linux 作業系統的應用軟體。



#### :material-alert-outline:{ .pg-orange } 遠端端口轉發

Proton VPN 目前只支援 Windows 遠端 [端口轉發](https://protonvpn.com/support/port-forwarding/) ，它可能會影響某些應用程式。 尤其是像 Torrent 客戶端這類 P2P 應用程式。



#### :material-check:{ .pg-green } 手機客戶端

除了提供標準的 OpenVPN 配置檔案外， Proton VPN 還有 [ App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085)、 [ Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US)和 [個GitHub](https://github.com/ProtonVPN/android-app/releases) 的移動客戶端，可以輕鬆連接到其伺服器。



#### :material-information-outline:{ .pg-blue } 額外功能

除 Linux 以外，Proton VPN 客戶端目前支持所有平臺上的雙因素身份驗證。 在瑞士、冰島和瑞典，Proton VPN 擁有自己的伺服器和資料中心。 他們透過自己的 DNS 服務，來封鎖廣告和已知的惡意軟體網域。 此外， Proton VPN 還提供“Tor”伺服器，讓您可輕鬆連接到洋蔥網站，但我們仍然強烈建議這類目的，最好還是使用 [官方 Tor 瀏覽器](https://www.torproject.org/) 。



#### :material-alert-outline:{ .pg-orange } Killswitch 無法用在  Intel 處理器的 Mac 電腦

Intel 處理器的 Mac 電腦 若用 VPN killswitch 會發生 [系統崩潰](https://protonvpn.com/support/macos-t2-chip-kill-switch/) 。 如果您需要此功能，但使用的是搭載 Intel 晶片組的Mac ，則應考慮使用其他 VPN 服務。



## 標準

!!! 危險

    重要的是要注意，使用 VPN 不會使您匿名，但在某些情況下可以提供更好的隱私。 VPN不是非法活動的工具。 不要依靠“不留記錄”政策。
    

**請注意我們和所推薦的服務商沒有任何利害關係。 這使我們能夠提供完全客觀的建議。** 除了 [我們的標準條件](about/criteria.md)外，我們還為任何希望獲得推薦的 VPN 服務商制定了一套明確的要求，包括強大的加密、獨立的安全審計、現代技術等。 我們建議您在選擇 VPN 供應商之前先熟悉此清單，並進行自己的研究，盡可能地確保您選擇的 VPN 供應商值得信賴。



### 技術

我們要求所有推薦的 VPN 服務商有提供 OpenVPN 配置檔案，以便用在任何客戶端。 **如果** VPN 提供自定用戶端，則要求有 killswitch 來阻止未連接 VPN 時網路資料遭洩漏。

**最低合格要求：**

- 支援強固的協議，如 WireGuard & OpenVPN。
- 客戶端內建  Killswitch。
- Multihop支持。 萬一單個節點受損，多跳方式就非常重要，才能保持數據的私密性。
- 如果提供 VPN 用戶端，它們應該為 [開源](https://en.wikipedia.org/wiki/Open_source)，就如同所內置的 VPN 軟體。 我們相信， 可取得的[源代碼](https://en.wikipedia.org/wiki/Source_code) 可為用戶設備實際運作提供更高的透明度。

**最佳案例：**

- 支持 WireGuard 和 OpenVPN。
- Killswitch 具高度可配置選項（啟用/禁用某些網路、開機時啟閉等上）
- 易於使用的 VPN 客戶端
- 支援 [IPv6](https://en.wikipedia.org/wiki/IPv6)協議 我們預期伺服器將允許透過 IPv6 傳入連線，並允許您存取託管在IPv6 位址上的服務。
- [遠端端口轉發](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) 的功能可協助在使用P2P （[對等](https://en.wikipedia.org/wiki/Peer-to-peer)）檔案共享軟體或自建伺服器（例如Mumble ）時建立連接。



### 隱私

我們希望所推薦的提供商盡可能減少客戶資料收集。 不收集註冊時的個人資訊，並接受匿名形式的付款是必需的。

**最低合格要求：**

- [匿名加密貨幣](cryptocurrency.md) **或** 現金支付選項。
- 註冊時無需個人資料：最多只需提供使用者名稱、密碼和電子郵件。

**最佳案例：**

- 接受多種 [匿名付款方式](advanced/payments.md)。
- 無需任何個人資訊（自動生成的用戶名稱、不要求電子郵件等）。



### 安全

若 VPN 不能提供足夠安全性，它就毫無意義。 我們要求所有推薦的供應商遵守其 OpenVPN 連接的現行安全標準。 理想中，預設他們會使用更多面向未來的加密方案。 我們要求有獨立的第三方來審核供應商的安全性，理想情況下是每年都能進行全方方面審計。

**最低合格要求：**

- 強固加密方案：具有 SHA-256 驗證的 OpenVPN; RSA-2048 或更好的握手; AES-256-GCM 或 AES-256-CBC 數據加密。
- 完全前向保密 (PFS)
- 公佈信譽良好第三方公司的安全審計。

**最佳案例：**

- 最強加密： RSA-4096。
- 完全前向保密 (PFS)
- 由信譽良好的第三方公司執行公佈的全面安全審計。
- 漏洞獎勵計劃和/或協調漏洞披露過程。



### 信任

您不會把財務資料交給身份作假的人，又怎會信任他們來處置您的網路資料？ 我們要求推薦的供應商公開其所有權或領導層級狀況。 我們也希望看到頻繁的透明度報告，特別是關於如何處理政府要求的報告。

**最低合格要求：**

- 面向公眾的領導或所有權。

**最佳案例：**

- 面向公眾的領導
- 頻繁的透明度報告。



### 行銷

對於所推薦的 VPN 服務商，我們樂見更負責任的營銷。

**最低合格要求：**

- 必須自行託管分析工具（例如不用 Google Analytics ）。 供應商的網站還必須符合 [DNT（請勿追蹤）](https://en.wikipedia.org/wiki/Do_Not_Track) 的要求。

不得有任何不負責任的行銷：

- 保證 100% 匿名性保護。 當有人聲稱某件事是100% 時，這意味他對失敗也無從確定。 我們知道有許多方式可以輕易地去匿名化，例如： 
      - 重複未用匿名軟體（ Tor 、VPN等）情況下所留的個人資料（例如電子郵件帳戶、獨特的假名等）。
    - [瀏覽器指紋](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- 聲稱單一迴路中 VPN 比 Tor  “更匿名” ， Tor 是由三個或更多個跳組成經常變化的迴路。
- 使用負責任的語言：也就是說，可以說VPN “已斷開”或“未連接” ，但是聲稱某人“暴露” ， “易受攻擊”或“受損”是不必要的使用可能不正確的警告語言。 例如，此人可能只是使用其他VPN提供商的服務或使用Tor。

**最佳案例：**

負責任的行銷，既具教育意義又對消費者實用，可能包括：

- 與何時應使用 [Tor](tor.md) 的準確比較。
- VPN 服務商網站可否透過 [.onion服務](https://en.wikipedia.org/wiki/.onion)訪問。



### 附加功能

雖不是嚴格要求，在決定推薦哪些服務商時我們還會考慮其他一些便利或隱私因素。 其中包括i廣告/跟蹤阻擋功能、warrant canaries、多跳連接、出色的客戶支持、允許同時連接的數量等。

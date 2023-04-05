---
title: VPN 簡介
icon: material/vpn
description: 虛擬私用網路將風險從您的ISP 轉移到您信任的第三方。 你應該記住這些事情。
---

虛擬專用網路是將您的網路末端延伸到世界其它地方的一種方式。 ISP 可以看到網路終端設備（例如數據機）的網際網路進出流量。

HTTPS 等加密協議通常應用在網際網路，因此雖無法確切地知道您發布或閱讀的內容，但還是可以了解您所請求訪問的 [網域名](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns)。

VPN 可以提供幫助，將信任轉移到世界其他地方的伺服器。 因此， ISP只會看到您已連接到VPN ，而不會看到您正在傳遞的活動。

## 我應該使用 VPN 嗎？

**是**，除非你已經在使用Tor。 VPN可以做兩件事：將風險從網際網路服務提供商轉移到 VPN，並將向第三方服務隱藏您的 IP 地址。

VPN 無法加密裝置與 VPN 伺服器之間連線以外的資料。 VPN 提供商可以像 ISP 一樣查看和修改您的流量。 而且沒有方式可以驗證 VPN 提供商的“無記錄”政策是否貫徹。

VPN 確實可向第三方服務隱藏您的實際 IP ，但前提是IP 沒被洩漏。 它們有助您混在他人之中，以減輕基於 IP 的追蹤。

## 什麼時候不該使用 VPN ？

在 [身份已可辨識](common-threats.md#common-misconceptions) 的情況下，VPN 就沒效用了。

這樣做可能會觸發垃圾郵件和欺詐偵測系統，例如您正試圖登入銀行網站。

## 那加密呢？

VPN供應商提供的加密僅發生在您的裝置與伺服器之間。 它保證此特定連結是安全的。 這比用未加密代理的更進一步，因為對手可以攔截您的設備和前述未加密代理之間的通訊並加以修改。 然而軟體或瀏覽器與服務供應商之間的加密並不是依此加密處理。

為了保持所瀏覽網站活動的私密和安全，您必須使用 HTTPS。 這將確保您的密碼、會話令牌和查詢對VPN提供商是安全的。 請考慮在瀏覽器中啟用「HTTPS everywhere」，以減輕 [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf)等攻擊。

## 我應該將加密 DNS 與 VPN 一起使用嗎？

除非您的 VPN 服務商自行託管加密的 DNS 伺服器， **不要**. 使用 DOH/DOT (或其它任何 DNS 加密) 與第三方伺服器只有需信任更多實體，在安全隱私則**一點幫助也沒有** 。 您的 VPN 提供商仍可以根據 IP 地址和其他方法查看您訪問的網站。 您現在除了信任 VPN 供應商外，還得同時信任 VPN 供應商和DNS 供應商。

推薦加密 DNS 的常見理由是有助於防止 DNS 欺騙。 您的瀏覽器應該已經檢查了 [TLS 憑證](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) 和 **HTTPS** ，並警告您。 如果沒用 **HTTPS**，則對手可以修改您的 DNS 查詢之外的任何東西，最終結果將沒太大差異。

**您不應把加密 DNS 與Tor**一起使用。 這將把您所有 DNS 請求引至某單一迴路，這會讓加密 DNS 提供商可對您消除匿名性。

## 我應該*同時* 使用 Tor 與 VPN 嗎？

撔 Tor 與 VPN 一起使用 ，您基本上創建了一個永久的入口節點，這類節點通常帶有與金錢相關追蹤痕跡。 這樣根本沒增加額外好處，反而明顯地擴大了連接時的攻擊面。 如果您希望向 ISP 或政府隱藏您的Tor 使用， Tor 內建一個解決方案：Tor 橋接。 [閱讀更多關於Tor橋接以及為什麼沒必要使用 VPN](../advanced/tor-overview.md)。

## 如果我需要匿名怎麼辦？

VPN無法提供匿名性。 您的VPN提供商可知道您真實 IP 地址，並且通常有一個可以直接與您連結的金錢線索。 您不能依靠 VPN「無記錄」政策來保護您的資料。 請用 [Tor](https://www.torproject.org/) 代替。

## 提供Tor 節點的 VPN 提供商好不好呢？

不要使用此功能。 使用 Tor 的重點是不信任您的 VPN 提供商。 目前 Tor 只支援 [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) 通訊協議。 [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) （在 [WebRTC](https://en.wikipedia.org/wiki/WebRTC) 中用於語音和影片分享，新的 [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) 協議等） ， [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) 和其他封包將被丟棄。 為了彌補這一點， VPN 提供商通常會引導全部的non-TCP 封包通過他們的 VPN 伺服器（您的第一個跳）。 [ProtonVPN ](https://protonvpn.com/support/tor-vpn/)的情況就是如此。 此外，使用此 Tor over VPN 設定時，您無法控制 Tor 其他重要的功能，例如 [隔離目標位址](https://www.whonix.org/wiki/Stream_Isolation) （為您訪問不同網域使用不同的Tor 迴路）。

該功能應被視為方便訪問 Tor 網絡的方式，而不是為了保持匿名。 為保持適當的匿名性，請使用 Tor 瀏覽器、TorSocks 或 Tor 閘道。

## VPN 何時有用？

VPN在各種情況下仍可能對您有用，例如：

1. **僅需**對網路連線服務商隱藏您的流量 。
1. 對 ISP 和反盜版組織隱藏您的下載（如 torrents）。
1. 從第三方網站和服務中隱藏您的IP ，防止基於IP的追蹤。

類似這些情況或者如果您有其他令人信服的理由，可考慮使用我們所列出認為最值得信賴的 VPN 提供商。 使用 VPN 意謂著您 *方便* 這些服務供應者。 任何情況下，最好使用以安全為**設計理念** 的工具，例如 Tor。

## 資料來源和進一步閱讀

1. [VPN - a Very Precarious Narrative](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) by Dennis Schubert
1. [Tor Network概述](../advanced/tor-overview.md)
1. [IVPN隱私指南](https://www.ivpn.net/privacy-guides)
1. [「我需要 VPN 嗎？」"Do I need a VPN?" ](https://www.doineedavpn.com)，
IVPN 開發的工具，幫助個人決定 VPN 是否適合他們，以因應各式 VPN 營銷。</li> </ol> 
   
   

## VPN 相關資訊

- [VPN 問題和隱私評論網站](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [免費 VPN 應用程式調查](https://www.top10vpn.com/free-vpn-app-investigation/)
- [揭露隱身的 VPN 擁有者：由 23 家公司運營101款 VPN 產品](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [這家中國公司祕密支持24個尋求危險權限的流行應用程序](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

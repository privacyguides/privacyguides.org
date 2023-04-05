---
title: "影片串流"
icon: material/video-wireless
description: 這些服務可讓您串流互聯網內容，而不會記錄個人興趣建立廣告剖繪。
---

使用影片串流平臺時的主要威脅是您的串流習慣和訂閱清單可能被用來剖繪分析您的個人喜好。 您應該將這些工具與 [VPN](vpn.md) 或 [Tor](https://www.torproject.org/) 相結合，以便更難分析您的使用情況。

## LBRY

!!! recommendation

    ! [LBRY標誌] (assets/img/video-streaming/lbry.svg) {align = right}
    
    * * LBRY 網路* *是一個分散式視頻共享網絡。 它透過類似 [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-l網路來儲存影片內容，再利用 [區塊錬](https://wikipedia.org/wiki/Blockchain) 來存儲影片之索引。 這種設計的主要好處是抵抗審查。
    
    * * LBRY 桌面用戶端* *可協助串流來自 LBRY 網路的影片，並將訂閱清單儲存在自己的 LBRY 錢包。
    
    [:octicons-home-16: Homepage](https://lbry.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://lbry.com/privacypolicy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://lbry.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! 備註

    建議僅使用* * LBRY桌面用戶端* * ，因為 F-Droid、Play Store 和App Store 中的 [Odysee](https://odysee.com)網站和 LBRY 用戶端具有強制同步和遙測功能。

!!! 警告

    在觀看和託管影片時，LBRY 網路可看到您的 IP 位址。 如果您的[威脅模型] (basics/threat-modeling.md)需要隱藏您的IP 位址，請考慮使用 [VPN](vpn.md)或 [Tor](https://www.torproject.org)。

建議**不要** 錢包與 LBRY Inc. 設為同步，因為尚不支援錢包同步的加密功能。 如果您將錢包與 LBRY Inc.同步，則必須信任他們不會查看您的訂閱列表， [LBC](https://lbry.com/faq/earn-credits) 資金或控制您的頻道。

您可以禁用 *儲存託管資料，其設置方法為* 選項中的 :gear: **設置** → **進階設置**，來避免在長時間使用 LBRY 時暴露 IP 地址和觀看的視頻。

## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

- 無需集中式帳戶就可觀看影片。
    - 分散式驗證，例如通過行動錢包的私鑰進行驗證是可以接受的。

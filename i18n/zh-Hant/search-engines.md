---
title: "搜尋引擎"
icon: material/search-web
description: 這些尊重隱私的搜尋引擎不會根據您的搜尋建立廣告剖繪。
---

這些尊重隱私的搜尋引擎不會根據您的搜尋建立廣告剖繪。

這裡的建議是基於每個服務的隱私政策的優點。 **不能保證**這些隱私政策都有好好落實。

如果您的威脅模型需要向搜尋供應商隱藏您的IP位址，請考慮使用 [VPN](vpn.md) 或 [Tor](https://www.torproject.org/) 。

## Brave Search

!!! recommendation

    ! [Brave Search logo] (assets/img/search-engines/brave-search.svg) {align = right}
    
    * * Brave Search * *由 Brave 開發，主要提供自己獨立索引的結果。 該索引是針對 Google 搜索進行優化，因此與其他替代方案相比，可以提供更具上下文準確性的結果。
    
    Brave Search 包括獨特的功能，如討論，突出了對話為中心的結果，如論壇文章。
    
    我們建議您停用[匿名使用指標] (https://search.brave.com/help/usage-metrics) ，因為它預設為啟用，可在設定中停用。
    
    [:octicons-home-16: Homepage](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentation}

Brave Search 總部在美國。 他們的 [隱私政策](https://search.brave.com/help/privacy-policy) 規定他們收集聚合使用指標，其中包括正在使用的作業系統和瀏覽器，但沒有收集個人識別資訊。 IP位址會暫時處理，但不會保留。

## DuckDuckGo

!!! recommendation

    ! [DuckDuckGo logo] (assets/img/search-engines/duckduckgo.svg) {align = right}
    
    * * DuckDuckGo * *最主流的隱私搜尋引擎選項之一。 著名的 DuckDuckGo 搜索功能包括 [bangs]( https://duckduckgo.com/bang)和許多[即時答案] (https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/)。 搜尋引擎依賴商業 Bing API 來提供大多數結果，但它確實使用許多[其他來源](https://help.duckduckgo.com/results/sources/ )來獲取即時答案和其他非主要結果。
    
    DuckDuckGo 是 Tor瀏覽器的預設搜尋引擎，也是 Apple Safari 瀏覽器上為數不多的可用選項之一。
    
    [:octicons-home-16: Homepage](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentation}

Brave Search 總部在美國。 他們的[隱私政策](https://duckduckgo.com/privacy)聲明他們**確實** 記錄使用者搜尋以改善其產品，但不會記錄 IP 地址或其它可識別的個人資訊。

DuckDuckGo 提供兩種 [其它版本](https://help.duckduckgo.com/features/non-javascript/) 搜尋引擎，兩者皆不需要JavaScript。 然而，這些版本缺少特色。 這些版本也可以與其 [Tor 洋蔥地址](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) 一起使用，通過為相應的版本附加 [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) 或 [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) 後綴。

## SearXNG

!!! recommendation

    ! [SearXNG logo] (assets/img/search-engines/searxng.svg) {align = right}
    
    * * SearXNG * *是一個開源、自我託管的中繼搜索引擎，聚合其他搜索引擎的結果，而自身不儲存任何資訊。 它是一個積極維護的 [SearX] (https://github.com/searx/searx)分支。
    
    [:octicons-home-16: Homepage](https://searxng.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://searx.space/){ .card-link title="Public Instances"}
    [:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Source Code" }

SearXNG 是您和它所聚合的搜尋引擎之間的代理。 您的搜尋查詢仍會傳送至 SearXNG 取得搜尋結果的搜尋引擎。

在自我託管時，重要的是要讓其他人使用您的實例，以便查詢能夠混入其中。 您應該小心處理 SearXNG 託管，因為若有人在您的執行實例上查找非法內容，可能會引起當局的關注。

當您使用 SearXNG 實體時，請務必閱讀他們的隱私權政策。 由於 SearXNG 實體可能會被其擁有者修改，因此它們不一定反映其隱私政策。 有些實體是以 Tor 隱藏服務運行，只要您的搜尋查詢不包含 PII ，這可能會授予一些隱私。

## Startpage

!!! recommendation

    ! [Startpage logo] (assets/img/search-engines/startpage.svg#only-light) {align = right}
    ! [Startpage logo] (assets/img/search-engines/startpage-dark.svg#only-dark) {align = right}
    
    * * Startpage * *是一個提供 Google 搜索結果而聞名的私密搜索引擎。  Startpage 的獨特功能之一是[匿名視圖] (https://www.startpage.com/en/anonymous-view/) ，它努力標準化用戶活動，使其更難被突出識別。 這個功能可用來隱藏 [某些](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) 網路與瀏覽器特徵。 不像名字所暗示的，該功能不應該依賴於匿名。 如果您正在尋找匿名性，請改用[Tor瀏覽器] (tor.md#tor-browser)。
    
    [:octicons-home-16: Homepage](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentation}

!!! 警告

    Startpage 定期限制服務對某些 IP位址的存取，例如為 VPN 或Tor 保留的IP。 [DuckDuckGo](#duckduckgo)和[Brave Search] (#brave-search)是更友好的選項，如果您的威脅模型需要向搜索提供商隱藏您的IP位址。

Startpage位於荷蘭。 根據他們的 [隱私政策](https://www.startpage.com/en/privacy-policy/)，他們記錄細節如：作業系統、瀏覽器類型和語言。 他們不會記錄您的IP位址、搜尋查詢或其他個人識別資訊。

Startpage 大股東是System1，它是一家廣告技術公司。 我們不認為這是問題，因為他們有明顯分開的 [隱私政策](https://system1.com/terms/privacy-policy)。 Privacy Guides 團隊2020年</a> 聯繫 Startpage
，以消除對 System1對該服務大量投資的擔憂。 我們對收到的答案感到滿意。</p> 



## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。
    



### 最低合格要求

- 不得根據其隱私權政策收集個人身份資訊。
- 不得要求使用者建立帳戶。



### 最佳案例

最佳案例標準代表了我們希望從這個類別的完美項目應具備的功能。 推薦產品可能沒有此功能，但若有這些功能則會讓排名更為提高。

- 應該以開源軟體為基礎。
- 不應該封鎖 Tor退出節點的 IP位址。

---
title: "Tor 簡介"
icon: 'simple/torproject'
description: Tor 是一個免費使用的去中心化網路，其讓用戶在使用網際網路之際盡可能地保護自己的隱私。
---

Tor 是一個免費使用的去中心化網路，其讓用戶在使用網際網路之際盡可能地保護自己的隱私。 如果使用得當，該網路可以實現私人和匿名瀏覽和通訊。

## 連接明網服務的路徑建立

「明網服務」是用任何瀏覽器都可訪問的網站，例如 [privacyguides.org](https://www.privacyguides.org)。 Tor 允許您匿名連接到某些網站，由數千個志願者運行的伺服器組成的網絡引導您的流量，這些伺服器稱為節點（或中繼）。

每當您連接到 Tor 時，它都會選擇三個節點來構建通往網際網路的路徑，這種路徑稱為「迴路」。

<figure markdown>
  ! [Tor 路徑顯示您的設備到達目的地網站之前所連接的入口節點，中間節點和出口節點] (../assets/img/how-tor-works/tor-path.svg#only-light)
  ! Tor 路徑顯示您的設備到達目的地網站之前所連接的入口節點，中間節點和出口節點] (../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor 迴路路徑</figcaption>
</figure>

每個節點都有自己的功能：

### 入口節點

入口節點，通常稱為守護節點，是 Tor 客戶端連接的第一個節點。 入口節點能夠看到您的 IP 位址，但無法看到您正在連接的內容。

不像其它節點 Tor 客戶端會隨機地選取入口節點後持續使用二~三個月以防護某些外部攻擊 [^1]

### 中間節點

中間節點是 Tor 客戶端連接的第二個節點。 它可以看到流量來自哪個節點（入口節點）以及它下一步要去哪個節點。 中間節點無法看到您的 IP 位址或您連接的網域。

對於每個新迴路，中間節點是隨機從所有可用的 Tor 節點中選出。

### 出口節點

出口節點是您的 Web 流量離開 Tor 網路並轉發到所需目的地的點。 出口節點無法看到您的 IP 位址，但它知道將連接到哪個網站。

出口節點將從所有可用的 Tor 節點中隨機選擇，並使用退出中繼標記。[^ 2]

## Onion 服務的路徑建立

“Onion 服務” （也通常被稱為“隱藏服務” ）是只能由 Tor 瀏覽器訪問的網站。 這些網站有一個長串隨機生成的域名，結尾為 `.onion`。

在Tor中連接到 Onion服務的工作原理與連接到明網服務非常相似，但您的流量在到達目的地伺服器之前會通過 **6 個** 節點。 不過就如之前所言，其中只有三個節點會有助 *您的*匿名性，而另外三個節點則是為了保護 * Onion 服務* 匿名性，隱藏該網站的真正  IP 和位置，就如同 Tor 瀏覽器如何隱蔽您的 IP 一樣。

<figure style="width:100%" markdown>
  ! [Tor路徑顯示您的流量通過您的三個Tor節點加上三個額外的Tor節點隱藏網站的身份] (../assets/img/how-tor-works/tor-path-hidden-service.svg#only-light)
  ! [Tor路徑顯示您的流量被路由通過您的三個Tor節點加上三個額外的Tor節點隱藏網站的身份] (../assets/img/how-tor-works/tor-path-hidden-service-dark.svg#only-dark)
  <figcaption>Tor電路路徑與洋蔥服務。 <span class="pg-blue">藍色</span> 圍欄中的節點屬於您的瀏覽器，而 <span class="pg-red">紅色</span> 圍欄中的節點屬於伺服器，因此它們的身份對您是隱藏的。</figcaption>
</figure>

## 加密

Tor 使用來自出口，中間和入口節點的密鑰對每個封包（傳輸數據區塊）依序進行三次加密。

一旦 Tor 構建了電路，數據傳輸將按照以下方式進行：

1. 首先：當數據包到達入口節點時，第一層加密被移除。 在這個加密封包中，入口節點將找到另一個具有中間節點地址的加密封包。 然後，入口節點將將封包轉發到中間節點。

2. 其次：當中間節點從入口節點接收到封包時，它也會利用其密鑰刪除一層加密，找到具有出口節點地址的加密數據包。 然後中間節點將數據包轉發到出口節點。

3. 最後：當退出節點收到其數據包時，它將使用其密鑰移除最後一層加密。 出口節點將看到目的地地址，並將封包轉發到該地址。

下面是顯示此過程的圖表。 每個節點都會移除自己的加密層，當目的地伺服器傳回數據時，同樣過程會再反向發生。 例如，出口節點不知道你是誰，但它確實知道封包來自哪個節點，因此添加了自己的加密層並將其發送回來。

<figure markdown>
  ![Tor 加密](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor 加密](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>通過 Tor 網路發送與接數資料</figcaption>
</figure>

Tor 允許我們連接到伺服器，而不讓任何一方知道完整路徑。 入口節點知道你是誰，但不知道你要去哪裡；中間節點不知道你是誰或你要去哪裡；出口節點知道你要去哪裡，但不知道你是誰。 由於出口節點負責了最終連線，目的地伺服器永遠不會知道您的 IP 位址。

## 注意事項

雖然 Tor 確實提供了強大的隱私保證，但必須意識到它並不完美：

- 資金充足的對手有能力被動地觀察全球大多數網絡流量，他們有機會通過先進的流量分析來解除 Tor 用戶的匿名化。 Tor 也不能保護你免於不當地暴露自己，例如你分享了太多關於你真實身份的信息。
- Tor 出口節點還可以監控通過它們的流量。 這意味著可以記錄和監控未加密的流量，例如純 HTTP 流量。 如果此類流量包含個人身份識別信息，則該出口節點可以將會消除匿名性。 因此，我們建議在可能的情況下使用 HTTPS。

如果您希望使用 Tor 瀏覽網頁，我們只建議使用 **官方** Tor 瀏覽器：它旨在防止指紋。

- [Tor 瀏覽器 :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## 其他資源

- [Tor 瀏覽器用戶手冊](https://tb-manual.torproject.org)
- [ Tor 如何運作 - Computerphile](https://invidious.privacyguides.net/embed/QRYzre4bf7I?local=true) <small>(YouTube)</small>
- [Tor O洋蔥服務- Computerphile](https://invidious.privacyguides.net/embed/lVcbq_a5N9I?local=true) <small>(YouTube)</small>

[^1]: 迴路中的第一個節點被稱為“入口守衛”或“守衛”。 它是一個快速和穩定的中繼站，作迴路中的第一個入口通常會維持 2~3個月，以防止已知的匿名破壞攻擊。 其餘的迴路則會依每次訪問網站而變化，這些中繼節點共同提供Tor  完整隱私保護。 了解更多關於守衛中繼的運作，請參考 [部落格文章](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) 和 [入口守衛論文paper](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf)。 ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: 中繼標記：迴路位置（例如， “Guard” ， “Exit” ， “BadExit” ） ，迴路屬性（例如， “Fast” ， “Stable” ）或角色（例如， “Authority” ， “HSDir” ）這些中繼節點的特殊（ dis- ）資格，是由目錄機構分配並在目錄協議規範中進一步定義。 ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

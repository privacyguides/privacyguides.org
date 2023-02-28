---
title: "Tor 簡介"
icon: 'simple/torproject'
---

Tor 是一個免費使用的去中心化網路，專為盡可能多地使用互聯網而設計。 如果使用得當，該網路可以實現私人和匿名瀏覽和通信。

## 工作原理

Tor 的工作原理是通過一個由數千個志願者運行的服務器組成的網絡路由您的流量，稱為節點（或中繼）。

每當您連接到 Tor 時，它都會選擇三個節點來構建通往網際網路的路徑，這種路徑稱為「電路」。 每個節點都有自己的功能：

### 入口節點

入口節點，通常稱為守護節點，是Tor客戶端連接的第一個節點。 入口節點能夠看到您的 IP 位址，但無法看到您正在連接的內容。

Unlike the other nodes, the Tor client will randomly select an entry node and stick with it for two to three months to protect you from certain attacks.[^1]

### 中間節點

中間節點是 Tor 客戶端連接的第二個節點。 它可以看到流量來自哪個節點（入口節點）以及它下一步要去哪個節點。 中間節點無法看到您的 IP 位址或您連接的網域。

對於每個新電路，中間節點會從所有可用的 Tor 節點中隨機選擇。

### 出口節點

出口節點是您的 Web 流量離開 Tor 網路並轉發到所需目的地的點。 The exit node is unable to see your IP address, but it does know what site it's connecting to.

出口節點將從所有可用的 Tor 節點中隨機選擇，並使用退出中繼標記。[^ 2]

<figure markdown>
  ![Tor path](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway</figcaption>
</figure>

## 加密

Tor 使用來自出口，中間和入口節點的密鑰對每個數據包（傳輸數據區塊）進行三次加密，依此順序。

一旦 Tor 構建了電路，數據傳輸將按照以下方式進行：

1. 首先：當數據包到達入口節點時，第一層加密被移除。 在這個加密數據包中，入口節點將找到另一個具有中間節點地址的加密數據包。 然後，入口節點將將數據包轉發到中間節點。

2. Secondly: when the middle node receives the packet from the entry node, it too will remove a layer of encryption with its key, and this time finds an encrypted packet with the exit node's address. The middle node will then forward the packet to the exit node.

3. Lastly: when the exit node receives its packet, it will remove the last layer of encryption with its key. The exit node will see the destination address and forward the packet to that address.

下面是一個替代圖表，顯示了這個過程。 每個節點都會移除自己的加密層，當目標服務器返回數據時，同樣的過程完全相反。 例如，退出節點不知道你是誰，但它確實知道它來自哪個節點，因此它添加了自己的加密層並將其發送回來。

<figure markdown>
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>Sending and receiving data through the Tor Network</figcaption>
</figure>

Tor 允許我們連接到服務器，而不需要任何一方知道整個路徑。 入口節點知道你是誰，但不知道你要去哪裡；中間節點不知道你是誰或你要去哪裡；出口節點知道你要去哪裡，但不知道你是誰。 由於出口節點負責了最終連線，目標伺服器永遠不會知道您的 IP 位址。

## 注意事項

雖然 Tor 確實提供了強大的隱私保證，但必須意識到 Tor 並不完美：

- 資金充足的對手有能力被動地觀察全球大多數網絡流量，他們有機會通過先進的流量分析來解除 Tor 用戶的匿名化。 Tor 也不能保護你免於錯誤地暴露自己，例如如果你分享了太多關於你真實身份的信息。
- Tor 出口節點還可以監控通過它們的流量。 這意味著可以記錄和監控未加密的流量，例如純 HTTP 流量。 如果此類流量包含個人身份識別信息，則可以將您去匿名化到該出口節點。 因此，我們建議在可能的情況下使用 HTTPS。

如果您希望使用 Tor 瀏覽網頁，我們只建議使用 **官方** Tor 瀏覽器：它旨在防止指紋。

- [Tor Browser :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## Additional Resources

- [Tor Browser User Manual](https://tb-manual.torproject.org)
- [How Tor Works - Computerphile](https://invidious.privacyguides.net/embed/QRYzre4bf7I?local=true) <small>(YouTube)</small>
- [Tor Onion Services - Computerphile](https://invidious.privacyguides.net/embed/lVcbq_a5N9I?local=true) <small>(YouTube)</small>

--8<-- "includes/abbreviations.zh-Hant.txt"

[^1]: The first relay in your circuit is called an "entry guard" or "guard". It is a fast and stable relay that remains the first one in your circuit for 2-3 months in order to protect against a known anonymity-breaking attack. The rest of your circuit changes with every new website you visit, and all together these relays provide the full privacy protections of Tor. For more information on how guard relays work, see this [blog post](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) and [paper](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) on entry guards. ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: Relay flag: a special (dis-)qualification of relays for circuit positions (for example, "Guard", "Exit", "BadExit"), circuit properties (for example, "Fast", "Stable"), or roles (for example, "Authority", "HSDir"), as assigned by the directory authorities and further defined in the directory protocol specification. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

---
title: "Tor概述"
icon: 'simple/torproject'
---

Tor是一个免费使用的去中心化网络，专为尽量隐私地使用互联网而设计。 如果使用得当，该网络可以实现隐私且匿名地浏览和通信。

## 路径的构建

Tor的工作原理是通过一个由数千个志愿者运行的服务器（称为节点（或中继））组成的网络路由您的流量。

每次你连接到Tor，它都会选择三个节点来建立一条通往互联网的路径--这条路径被称为 "线路"。 每个节点都有自己的功能：

### 入口节点

入口节点，通常被称为守护节点，是你的Tor客户端连接到的第一个节点。 入口节点能够看到你的IP地址，但它无法看到你正在连接什么。

与其他节点不同，Tor客户端会随机选择一个入口节点并坚持两到三个月，以保护你免受某些攻击。[^1]

### 中间节点

中间节点是你的Tor客户端连接的第二个节点。 它可以看到流量来自哪个节点--入口节点--以及它接下来要去哪个节点。 中间节点不能，看到你的IP地址或你正在连接的域。

对于每个新线路，在所有可用的Tor节点中随机选择中间节点。

### 出口节点

出口节点是你的网络流量离开Tor网络并被转发到待达目的地的地方。 出口节点无法看到你的IP地址，但它确实知道正在连接到哪个网站。

出口节点将从运行有出口中继标志的所有可用Tor节点中随机选择。[^2]

<figure markdown>
  ![Tor path](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway</figcaption>
</figure>

## 加密

Tor用出口、中间和入口节点的密钥对每个数据包（一个传输的数据块）进行三次加密--按顺序进行。

一旦Tor建立了一个电路，数据传输就会按以下方式进行。

1. 首先：当数据包到达入口节点时，第一层的加密被移除。 在这个加密的数据包中，入口节点会发现另一个带有中间节点地址的加密数据包。 然后，入口节点将把数据包转发给中间节点。

2. 第二：当中间节点收到来自入口节点的数据包时，它也会用自己的密钥去掉一层加密，这时会发现一个带有出口节点地址的加密数据包。 然后，中间节点将把数据包转发给出口节点。

3. 最后：当出口节点收到其数据包时，它将用其密钥去除最后一层加密。 出口节点将看到目标地址并将数据包转发到该地址。

下面是一个显示该过程的替代图。 每个节点都会移除自己的加密层，而当目的地服务器返回数据时，同样的过程会完全反向发生。 例如，出口节点不知道你是谁，但它知道它来自哪个节点，因此它添加了自己的加密层并将其发送回来。

<figure markdown>
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>Sending and receiving data through the Tor Network</figcaption>
</figure>

通过使用Tor，我们可以在没有任何一方知道整个线路的情况下连接到一个服务器。 入口节点知道你是谁，但不知道你要去哪里；中间节点不知道你是谁，也不知道你要去哪里；而出口节点知道你要去哪里，但不知道你是谁。 因为出口节点是进行最终连接的，目标服务器永远不会知道你的IP地址。

## Caveats (注意)

尽管Tor确实提供了强有力的隐私保障，但您必须意识到Tor并不完美：

- 资金充足、能够被动地观察全球大多数网络通信量的对手有机会通过先进的通信量分析将Tor用户去匿名化。 Tor也不能防止您错误地暴露自己，例如分享了太多关于您真实身份的信息。
- Tor出口节点也可以监控通过它们的流量。 这意味着没有加密的流量，如普通的HTTP流量，可以被记录和监控。 如果这种流量包含个人可识别信息，那么那个出口节点可以把你去匿名化。 因此，我们建议尽可能使用HTTPS over Tor。

如果您希望使用Tor浏览网页，我们只建议使用 **官方** Tor浏览器，该浏览器旨在防止指纹。

- [Tor浏览器 :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## 其它资源

- [Tor浏览器用户手册](https://tb-manual.torproject.org)
- [Tor如何工作 - Computerphile](https://www.youtube-nocookie.com/embed/QRYzre4bf7I) <small>(YouTube)</small>
- [Tor洋葱服务 - Computerphile](https://www.youtube-nocookie.com/embed/lVcbq_a5N9I) <small>(YouTube)</small>

[^1]: 您线路上的第一个中继称为“入口警卫“或“警卫”。 它是一个快速而稳定的中继，会在2-3个月内持续作为你的线路的第一个中继，以防止已知的破坏匿名性的攻击。 你的线路其余部分会随着你访问的每个新网站而改变，所有这些中继器一起提供Tor的全部隐私保护。 关于警卫中继器如何工作的更多信息，请参阅这篇 [博文](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) 和 [关于入口警卫的论文](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf)。 ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: 中继标志：由目录权限分配并在目录协议规范中进一步定义的线路位置（例如， “Guard”、“Exit”、“BadExit” ）、线路属性（例如， “Fast”、“Stable” ）或角色（例如， “Authority”、“HSDir” ）的中继的特殊（ dis- ）限定。 ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

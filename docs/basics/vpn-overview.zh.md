---
title: VPN概述
icon: 资料/vpn
---

虚拟专用网络是一种将你的网络末端延伸到世界其他地方的方式。 ISP可以看到进入和离开你的网络终端设备（即调制解调器）的互联网流量。

互联网上普遍使用HTTPS等加密协议，因此他们可能无法准确看到你所发布或阅读的内容，但他们可以了解到你所请求的 [域](dns-overview.md#why-shouldnt-i-use-encrypted-dns)。

VPN可以提供帮助，因为它可以将信任转移到世界其他地方的服务器上。 因此，ISP只看到你连接到了VPN，而对你传入的活动一无所知。

## 我应该使用VPN吗？

**是的**，除非你已经在使用Tor。 VPN做两件事：将风险从你的互联网服务提供商转移到vpn本身，并从第三方服务中隐藏你的IP。

VPN不能对你的设备和VPN服务器之间连接之外的数据进行加密。 VPN供应商可以像你的ISP一样看到并修改你的流量。 而且，没有办法以任何方式验证VPN供应商的 "无记录 "政策。

然而，假如IP没有泄露，他们的确可以向第三方服务隐藏您的实际IP。 它们可以帮助您融入其他人并减轻基于IP的跟踪。

## 什么时候我不应该使用VPN？

在你使用你的 [已知身份的情况下使用VPN，](common-threats.md#common-misconceptions) ，不太可能是有用的。

这样做可能会触发垃圾邮件和欺诈检测系统，例如，如果你要登录银行的网站。

## 那加密呢？

VPN供应商提供的加密是在你的设备和他们的服务器之间。 它保证这个特定的链接是安全的。 这比使用未加密的代理更上一层楼，因为网络上的对手可以截获你的设备和上述代理之间的通信，并修改它们。 然而，你的应用程序或浏览器与服务提供商之间的加密并不由这种加密处理。

为了保持你在你访问的网站上的实际操作的私密性和安全性，你必须使用HTTPS。 这将使你的密码、会话令牌和查询不被VPN供应商发现。 考虑在你的浏览器中启用 "HTTPS everywhere"，以减轻降级攻击，如 [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf)。

## 我是否应该使用带有VPN的加密DNS？

除非你的VPN供应商托管加密的DNS服务器，否则 **，不要用**。 使用DOH/DOT（或任何其他形式的加密DNS）与第三方服务器将只是增加了更多的实体信任，对改善你的隐私/安全 **根本没用**。 你的VPN供应商仍然可以根据IP地址和其他方法看到你访问的网站。 你现在不是只信任你的VPN供应商，而是同时信任VPN供应商和DNS供应商。

推荐加密DNS的一个常见原因是，它有助于防止DNS欺骗。 然而，你的浏览器应该已经在检查 [TLS证书](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) 与 **HTTPS** ，并警告你。 如果你没有使用 **HTTPS**，那么对手仍然可以直接修改你的DNS查询以外的任何东西，最终结果将没有什么不同。

更不必说， **，你不应该共用Tor和加密DNS**。 这将把你所有的DNS请求定向到某个单一连接，并允许加密DNS提供商对你进行去匿名化。

## 我应该共用Tor *和* VPN吗？

通过将Vpn与Tor一起使用，您基本上创建了一个永久的入口节点，而且还通常附有资金相关的跟踪线索。 这没有为你带来额外的好处，同时大大增加了连接的攻击面。 如果您希望向ISP或政府隐藏Tor使用情况， Tor有内置的解决方案： Tor桥。 [阅读更多关于Tor桥和为什么使用VPN是没有必要的](tor-overview.md)。

## 那如果我需要匿名呢？

VPN不能提供匿名性。 你的VPN供应商仍然会看到你的真实IP地址，而且往往有一个可以直接关联到你的资金线索。 您不能依赖“无日志记录”策略来保护您的数据。 使用 [Tor](https://www.torproject.org/) 来代替。

## 提供Tor节点的VPN供应商怎么样？

不要使用该功能。 使用Tor的意义在于，你无需信任你的VPN供应商。 目前Tor只支持 [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) 协议。 [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) （用于 [WebRTC](https://en.wikipedia.org/wiki/WebRTC) 音频和视频共享，新的[HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) 协议等）， [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) 和其他数据包将被丢弃。 为了弥补这一点，VPN供应商通常会将所有非TCP数据包通过其VPN服务器（你的第一跳）进行路由。 [ProtonVPN](https://protonvpn.com/support/tor-vpn/)就是这种情况。 此外，在使用这种Tor over VPN设置时， 您无法控制其他重要的Tor功能，例如 [目的地址隔离](https://www.whonix.org/wiki/Stream_Isolation) (对您访问的每个域名使用不同的Tor线路)。

该功能应被视为访问Tor网络的一种便捷方式，而不是为了保持匿名。 为了获得适当的匿名性，请使用Tor浏览器、TorSocks或Tor网关。

## VPN何时有用？

VPN在各种情况下仍可能对您有用，例如:

1. **仅仅** 向您的Internet服务提供商隐藏流量。
1. 向你的ISP和反盗版组织隐藏你的下载（如torrent）。
1. 向第三方网站和服务隐藏你的IP，防止基于IP的跟踪。

对于像这样的使用情况，或者如果你有其他令人信服的理由，我们上面列出的VPN供应商是我们认为最值得信赖的。 然而，使用VPN供应商仍然意味着你在 *信任* 该供应商。 几乎在任何其他情况下，你都应该使用一个**由设计保证的** 安全工具，如Tor。

## 资料来源及延伸阅读

1. [VPN -一个非常危险的叙事 ](https://schub.io/blog/2019/04/08/very-precarious-narrative.html)作者：丹尼斯·舒伯特（ Dennis Schubert ）
1. [Tor网络概述](../advanced/tor-overview.md)
1. [IVPN隐私指南](https://www.ivpn.net/privacy-guides)
1. ["我需要一个VPN吗？"](https://www.doineedavpn.com)这是由IVPN开发的一个工具，通过帮助个人决定VPN是否适合他们，来挑战咄咄逼人的VPN营销。

## VPN的相关信息

- [VPN和隐私审查网站的问题](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [免费VPN应用调查](https://www.top10vpn.com/free-vpn-app-investigation/)
- [揭开隐蔽VPN所有者的面纱：101个VPN产品仅由23家公司运营](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [这家中国公司秘密地在24个流行的应用程序背后寻求危险的权限](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

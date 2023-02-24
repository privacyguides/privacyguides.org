---
title: "电脑浏览器"
icon: material/laptop
---

这些是我们目前推荐的用于标准/非匿名浏览的桌面网络浏览器和配置。 如果您需要匿名浏览互联网，则应使用 [Tor](tor.md) 。 一般来说，我们建议尽量减少你的浏览器扩展；它们在你的浏览器内有特权访问，需要你信任开发者，可以使你 [，突出](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)，并且 [，削弱](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) 网站隔离。

## Firefox（火狐浏览器）

!!! recommendation

    ![火狐标志](assets/img/browsers/firefox.svg){ align=right }
    
    **火狐浏览器**提供强大的隐私设置，如[增强型跟踪保护](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop)，它可以帮助阻止各种[类型的跟踪](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks)。
    
    [:octicons-home-16: 主页](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/firefox/){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title=文档}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="源代码" }
    [:octicons-heart-16:](https://donate.mozilla.org/){ .card-link title="贡献" }
    
    ??? 下载
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! 警告
    Firefox在从Mozilla网站的下载中包括一个独特的 [下载令牌](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) ，并使用Firefox中的遥测技术来发送该令牌。 </strong> 该令牌是 **，不包括在 [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/)的版本中。</p>

### 推荐配置

Tor浏览器是匿名浏览互联网的唯一途径。 当你使用火狐浏览器时，我们建议改变以下设置，以保护你的隐私不受某些方面的影响，但除了 [Tor浏览器](tor.md#tor-browser) ，其他所有的浏览器都会被 *有人* ，在某些方面可以追踪。

这些选项可以在 :material-menu: → **设置** → **隐私 & 安全**中找到。

##### 增强跟踪保护

- [x] 选择 **严格的** 增强跟踪保护

这可以通过阻止社交媒体追踪器、指纹脚本（注意，这并不能保护你 *所有* 指纹）、加密器、跨网站追踪cookies和其他一些追踪内容来保护你。 ETP可以防止许多常见的威胁，但它并不阻止所有的跟踪途径，因为它的设计对网站的可用性影响最小甚至没有影响。

##### 关闭时消毒

如果你想在特定的网站上保持登录状态，你可以在 **Cookies和网站数据** → **管理例外情况中允许例外。**

- [x] 勾选 **当Firefox关闭时，删除cookies和网站数据**

这可以保护您免受持久性cookies的影响，但不能保护您免受在任何一个浏览会话中获得的cookies的影响。 启用该功能后，只需重新启动火狐浏览器，就可以轻松清理浏览器的cookies。 如果你希望在你经常访问的特定网站上保持登录状态，你可以在每个网站的基础上设置例外。

##### 搜索建议

- [ ] 取消勾选 **提供搜索建议**

搜索建议功能可能在你的地区无法使用。

搜索建议将你在地址栏中输入的所有内容发送到默认的搜索引擎，而不管你是否提交了实际的搜索。 禁用搜索建议可以让你更精确地控制你向搜索引擎供应商发送的数据。

##### 遥测

- [ ] 取消勾选 **允许火狐浏览器向Mozilla发送技术和互动数据**
- [ ] 取消勾选 **允许Firefox安装和运行研究**
- [ ] 取消勾选 **允许火狐代表您发送积压的崩溃报告**

> 火狐浏览器会向我们发送有关您的火狐浏览器版本和语言、设备操作系统和硬件配置、内存、有关崩溃和错误的基本信息以及更新、安全浏览和激活等自动处理结果的数据。 当火狐浏览器向我们发送数据时，您的IP地址会被暂时收集，作为我们服务器日志的一部分。

此外，火狐账户服务还收集 [一些技术数据](https://www.mozilla.org/en-US/privacy/firefox/#firefox-accounts)。 如果你使用Firefox账户，你可以选择退出。

1. 在 accounts.firefox.com</a>上打开你的

配置文件设置。</li> 
   
   2 取消勾选 **数据收集和使用** > **帮助改进火狐账户**</ol> 



##### HTTPS-Only 模式

- [x] 选择 **启用所有窗口的纯HTTPS-Only模式**

这可以防止你无意中以纯文本的HTTP方式连接到一个网站。 现在没有HTTPS的网站已经不多见了，所以这对你的日常浏览应该没有什么影响。



### 火狐同步

[火狐浏览器同步](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) ，使您的浏览数据（历史记录、书签等）可以在您的所有设备上访问，并通过E2EE进行保护。



### Arkenfox (advanced)

[Arkenfox项目](https://github.com/arkenfox/user.js) ，为Firefox提供了一套精心考虑的选项。 如果你 [决定](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) 使用Arkenfox，有几个 [选项](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) 是主观严格的和/或可能导致一些网站不能正常工作-- [，你可以很容易地改变](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) 以满足你的需要。 我们 **，强烈建议** ，阅读其完整的 [wiki](https://github.com/arkenfox/user.js/wiki)。 Arkenfox还能支持 [容器](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users)。



## Brave

!!! recommendation

    ![Brave标识](assets/img/browsers/brave.svg){ align=right }
    
    **Brave浏览器**包括一个内置的内容拦截器和[隐私功能](https://brave.com/privacy-features/)，其中许多功能都是默认启用的。
    
    Brave是建立在Chromium网络浏览器项目之上的，所以它应该有熟悉的感觉，而且网站兼容性问题最小。
    
    [:octicons-home-16: 首页](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="洋葱服务" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title="文档"}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="源代码" }
    
    ??? 下载注释
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)
    

    1. 我们建议不要使用Flatpak版本的Brave，因为它用Flatpak的沙箱代替了Chromium的沙箱，效果较差。 此外，该软件包并非由Brave Software, Inc.维护。



### 推荐配置

Tor浏览器是匿名浏览互联网的唯一途径。 当您使用Brave时，我们建议您更改以下设置，以保护您的隐私不受某些方的侵害，但除了 [Tor浏览器](tor.md#tor-browser) 之外的所有浏览器都可以在某些方面被 *个人* 追踪。

这些选项可以在 :material-menu: → **设置**中找到。



##### 盾

Brave在其 [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) 功能中包括一些防指纹的措施。 我们建议将这些选项配置为 [，在你访问的所有页面上全局](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-)。

Shields的选项可以根据需要在每个站点的基础上进行降级，但在默认情况下，我们建议设置以下内容。

<div class="annotate" markdown>

- [x] 选择**防止网站根据我的语言偏好对我进行指纹识别**
- [x] 选择跟踪器和广告拦截下的**攻击性**

？? warning "Use default filter lists"
        Brave允许你在内部`brave://adblock`页面中选择额外的内容过滤器。 我们建议不要使用这个功能；相反，保留默认的过滤列表。 使用额外的列表会使你从其他Brave用户中脱颖而出，如果Brave中存在漏洞，恶意规则被添加到你使用的列表中，也可能增加攻击面。

- [x] （可选）选择**屏蔽脚本**（1）
- [x] 在屏蔽指纹下选择**严格的，可能会破坏网站**。

</div>

1. 该选项提供的功能类似于uBlock Origin的高级 [阻止模式](https://github.com/gorhill/uBlock/wiki/Blocking-mode) 或 [NoScript](https://noscript.net/) 扩展。



##### 社交媒体图标

- [ ] 取消勾选所有社交媒体组件



##### 隐私和安全

<div class="annotate" markdown>

- [x] 在[WebRTC IP处理策略]下选择**禁用非代理的UDP**(https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc）
- [ ] 取消勾选 **使用谷歌服务推送消息**
- [ ] 取消勾选 **允许保留隐私的产品分析（P3A）**
- [ ] 取消勾选 **自动向Brave发送每日使用情况的Ping***。[] 取消勾选 **自动向Brave发送每日使用情况的ping**
- [] 取消勾选 **自动发送诊断报告**
- [x] 在**安全**菜单中选择 **始终使用安全连接**
- [] 取消勾选 **使用Tor的私人窗口** (1)

    !!! 提示 "关闭时消毒 "
        - [x] 在*Cookies和其他网站数据*菜单中选择**关闭所有窗口时清除cookies和网站数据**

        如果你希望在你经常访问的特定网站上保持登录状态，你可以在*自定义行为*部分中按网站设置例外。

</div>

1. Brave是 **，而不是** ，对指纹的抵抗力不如Tor浏览器，而且使用Brave和Tor的人要少得多，所以你会脱颖而出。 在需要强大的匿名性的地方 [](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) ，使用 [Tor浏览器](tor.md#tor-browser)。



##### 扩展程序

在 **Extensions**，禁用你不使用的内置扩展程序。

- [ ] 取消勾选 **Hangouts**
- [] 取消勾选 **WebTorrent**



##### IPFS（星际文件系统）

InterPlanetary File System（IPFS）是一个分散的、点对点的网络，用于在分布式文件系统中存储和共享数据。 除非你使用该功能，否则禁用它。

- [x] 在解决IPFS资源的方法上选择 **禁用**



##### 附加设置

在 *系统* 菜单下

<div class="annotate" markdown>

- [] 取消勾选**当Brave关闭时继续运行的应用程序**以禁用后台应用程序 (1)

</div>

1. 这个选项并不存在于所有平台上。



### Brave 同步

[Brave 同步](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) 允许你的浏览数据（历史记录、书签等）在你所有的设备上访问，而不需要账户，并以E2EE进行保护。



## 其它资源

我们一般不建议安装任何扩展，因为它们会增加你的攻击面。 然而，如果你重视内容封锁功能，uBlock Origin可能证明是有用的。



### uBlock Origin

!!! recommendation

    ![uBlock Origin标识](assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin**是一个流行的内容阻止器，可以帮助你阻止广告、跟踪器和指纹脚本。
    
    [:octicons-repo-16: Repository](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title="文档"}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="源代码" }
    
    ??? 下载
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
    

我们建议按照 [开发人员的文档](https://github.com/gorhill/uBlock/wiki/Blocking-mode) ，并选择其中的一种 "模式"。 额外的过滤器列表会影响性能， [可能会增加攻击面](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css)。



##### 其它列表

这些是其他一些 [过滤器列表](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) ，你可能要考虑添加。

- [x] 检查 **隐私** > **AdGuard URL跟踪保护**
- 添加 [其实合法的URL缩短器工具](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)



## 条件

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。
    



### 最低要求

- 开源
- 支持自动更新。
- 在上游发布后0-1天内收到引擎更新。
- 可用于Linux、macOS和Windows。
- 为使浏览器更加尊重隐私所需的任何改变都不应该对用户体验产生负面影响。
- 默认情况下，阻止第三方的cookies。
- 支持 [状态分区](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) ，以减轻跨网站追踪。[^1]



### 最好的情况下

我们的最佳案例标准代表了我们希望从这个类别的完美项目中看到的东西。 我们的推荐可能不包括任何或所有这些功能，但那些包含这些功能的推荐可能比本页面上的其他推荐排名更高。

- 包括内置的内容阻止功能。
- 支持cookie分区（à la [多账户容器](https://support.mozilla.org/en-US/kb/containers)）。
- 支持渐进式网络应用程序。  
  PWA使你能够安装某些网站，就像在你的电脑上安装本地应用程序一样。 这比安装基于电子的应用程序有优势，因为你可以从浏览器的定期安全更新中受益。

- 不包括不影响用户隐私的附加功能（臃肿软件）。

- 默认情况下不收集遥测数据。
- 提供开源的同步服务器实现。
- 默认为 [私人搜索引擎](search-engines.md)。



### 扩展标准

- 不得复制内置浏览器或操作系统的功能。
- 必须直接影响用户隐私，即不能简单地提供信息。



[^1]:    
    Brave的实现详见 [Brave隐私更新。分割网络状态的隐私](https://brave.com/privacy-updates/14-partitioning-network-state/)。

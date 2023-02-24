---
title: Linux概述
icon: simple/linux
---

人们通常认为， [开源](https://en.wikipedia.org/wiki/Open-source_software) 软件本身是安全的，因为源代码是可用的。 预期社区验证会定期进行；但这并不总是 [案例](https://seirdy.one/posts/2022/02/02/floss-security/)。 这确实取决于许多因素，如项目活动、开发人员经验、应用于 [代码审查的严格程度](https://en.wikipedia.org/wiki/Code_review)，以及对 [代码库](https://en.wikipedia.org/wiki/Codebase) 的特定部分给予关注的频率，这些部分可能多年未被触及。

目前，桌面Linux与它们的专利同行相比，确实有一些可以更好地改进的地方，例如：。

- 一个经过验证的启动链，如苹果的 [安全启动](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) （有 [安全飞地](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)），安卓的 [验证启动](https://source.android.com/security/verifiedboot)，ChromeOS的 [验证启动](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot)，或微软Windows的 [启动过程](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) ，有 [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm)。 这些功能和硬件技术都可以帮助防止恶意软件的持续篡改或 [邪恶女仆的攻击](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- 一个强大的沙箱解决方案，如在 [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html)， [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md)，和 [Android](https://source.android.com/security/app-sandbox)。 常用的Linux沙箱解决方案，如 [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) 和 [Firejail](https://firejail.wordpress.com/) ，仍然有很长的路要走。
- 强大的 [漏洞缓解措施](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

尽管有这些缺点，但如果你想，桌面Linux发行版还是很不错的。

- 避免专有操作系统中经常出现的遥测现象
- 保持 [软件自由](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- 有关注隐私的系统，如 [Whonix](https://www.whonix.org) 或 [Tails](https://tails.boum.org/)

我们的网站通常使用术语 "Linux "来描述桌面Linux发行版。 其他也使用Linux内核的操作系统，如ChromeOS、Android和Qubes OS，这里不作讨论。

[我们的Linux推荐 :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## 选择您的发行版

并非所有的 Linux 发行版都是相同的。 虽然我们的Linux推荐页面并不是要成为你应该使用哪个发行版的权威来源，但在选择使用哪个发行版时，有几件事你应该记住。

### 发布周期

我们强烈建议你选择与稳定的上游软件版本接近的发行版，通常被称为滚动发行版。 这是因为冻结发布周期的发行版往往不更新软件包版本，并且在安全更新方面落后。

对于冻结的发行版，如 [Debian](https://www.debian.org/security/faq#handling)，软件包维护者被要求回传补丁来修复漏洞，而不是将软件提升到上游开发者发布的 "下一个版本"。 </a> 有些安全补丁

，根本没有收到 [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) （特别是不太流行的软件），因此在这种补丁模式下，不能进入发行版。 因此，小的安全修复有时会被推迟到下一个主要版本。</p> 

我们不认为保留软件包和应用临时补丁是一个好主意，因为它偏离了开发者可能打算让软件工作的方式。 [理查德-布朗](https://rootco.de/aboutme/) ，有一个关于这个问题的介绍。

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U" title="定期发布是错误的，为你的生活而滚动" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 传统vs原子更新

传统上，Linux发行版的更新方式是依次更新所需的软件包。 如果在更新时发生错误，传统的更新，如基于Fedora、Arch Linux和Debian的发行版中使用的更新，可能不太可靠。

原子更新发行版完全或根本不应用更新。 通常情况下，事务性更新系统也是原子性的。

事务性更新系统创建了一个快照，在应用更新之前和之后进行。 如果更新在任何时候失败（也许是由于电源故障），更新可以很容易地回滚到 "最后已知良好状态"。

原子更新法用于Silverblue、Tumbleweed和NixOS等不可变的发行版，可以通过这种模式实现可靠性。 [Adam Šamalík](https://twitter.com/adsamalik) 提供了一个关于 `rpm-ostree` 如何与Silverblue一起工作的演讲。

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ" title="让我们试试Fedora Silverblue--一个不可改变的桌面操作系统! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### “以安全为重点”的分发

通常在“以安全为中心”的发行版和“渗透测试”发行版之间存在一些混淆。 快速搜索“最安全的Linux发行版”通常会得到像Kali Linux ， Black Arch和Parrot OS这样的结果。 这些发行版是攻击性的渗透测试发行版，捆绑了测试其他系统的工具。 它们不包括任何 "额外的安全 "或用于常规使用的防御性缓解措施。



### 基于Arch的发行版

基于Arch的发行版不推荐给那些刚接触Linux的人，（无论哪个发行版），因为它们需要定期进行 [系统维护](https://wiki.archlinux.org/title/System_maintenance)。 Arch没有底层软件选择的分发更新机制。 因此，你必须保持对当前趋势的了解，并在技术取代旧有做法时自行采用。

对于一个安全的系统，你还应该有足够的Linux知识来为他们的系统正确设置安全，如采用 [强制性访问控制](https://en.wikipedia.org/wiki/Mandatory_access_control) 系统，设置 [内核模块](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) 黑名单，硬化启动参数，操作 [sysctl](https://en.wikipedia.org/wiki/Sysctl) 参数，并知道他们需要哪些组件，如 [Polkit](https://en.wikipedia.org/wiki/Polkit)。

任何使用 [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **的人必须** ，对他们从该服务中安装的PKGBUILD进行审计。 AUR软件包是社区制作的内容，没有经过任何审查，因此很容易受到软件供应链的攻击，事实上在过去已经发生了 [](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/)。 AUR总是应该少用，而且往往在各种网页上有很多不好的建议，指导人们盲目地使用 [AUR帮助器](https://wiki.archlinux.org/title/AUR_helpers) ，而没有足够的警告。 类似的警告也适用于在基于Debian的发行版上使用第三方个人软件包档案（PPAs）或在Fedora上使用社区项目（COPR）。

如果你对Linux有经验，并希望使用基于Arch的发行版，我们只推荐主线Arch Linux，而不是它的任何衍生品。 我们特别建议不要使用这两种Arch衍生品。

- **Manjaro**: 这个发行版将软件包保留2周，以确保他们自己的修改不会破坏，而不是确保上游的稳定。 当使用AUR软件包时，它们通常是根据Arch的软件库中最新的 [库构建的](https://en.wikipedia.org/wiki/Library_(computing))。
- **Garuda**: 他们使用 [Chaotic-AUR](https://aur.chaotic.cx/) ，它自动地、盲目地从AUR编译软件包。 没有验证过程来确保AUR包不会受到供应链的攻击。



### Kicksecure

虽然我们强烈建议不要使用像Debian这样的过时的发行版，但有一种基于Debian的操作系统已经被加固，比典型的Linux发行版要安全得多。 [Kicksecure](https://www.kicksecure.com/)。 Kicksecure，简单地说，是一组脚本、配置和软件包，可以大大减少 Debian 的攻击面。 它默认涵盖了大量的隐私和加固建议。



### Linux-libre内核和“Libre”发行版

</strong> 我们强烈建议 **，不要使用Linux-libre内核，因为它 [，删除了安全缓解措施](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) ，并且 [，出于意识形态的原因，抑制了内核对脆弱微码的警告](https://news.ycombinator.com/item?id=29674846)。</p> 



## 一般建议



### 驱动器加密

大多数Linux发行版在其安装程序中都有一个选项用于启用 [LUKS](../encryption.md#linux-unified-key-setup) FDE。 如果在安装时没有设置这个选项，你将不得不备份你的数据并重新安装，因为加密是在 [磁盘分区](https://en.wikipedia.org/wiki/Disk_partitioning)，但在 [文件系统](https://en.wikipedia.org/wiki/File_system) 被格式化之前应用。 我们还建议安全地删除你的存储设备。

- [安全数据清除 :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)



### Swap

考虑使用 [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) 或 [加密的交换空间](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) ，而不是未加密的交换空间，以避免敏感数据被推送到 [交换空间](https://en.wikipedia.org/wiki/Memory_paging)的潜在安全问题。 基于Fedora的发行版 [，默认使用ZRAM](https://fedoraproject.org/wiki/Changes/SwapOnZRAM)。



### Wayland

我们建议使用支持 [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) 显示协议的桌面环境，因为它的开发考虑到了安全 [](https://lwn.net/Articles/589147/)。 其前身 [X11](https://en.wikipedia.org/wiki/X_Window_System)，不支持GUI隔离，允许所有窗口 [，记录屏幕、日志和注入其他窗口的输入](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html)，使任何沙箱的尝试都是徒劳的。 虽然有一些选项可以做嵌套的X11，比如 [Xpra](https://en.wikipedia.org/wiki/Xpra) 或 [Xephyr](https://en.wikipedia.org/wiki/Xephyr)，但它们往往会带来负面的性能后果，而且设置起来也不方便，比起Wayland来并不可取。

幸运的是，常见的环境，如 [GNOME](https://www.gnome.org)， [KDE](https://kde.org)，以及窗口管理器 [Sway](https://swaywm.org) 都支持 Wayland。 一些发行版如Fedora和Tumbleweed默认使用它，其他一些发行版可能在未来也会这样做，因为X11处于 [hard maintenance mode](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly)。 如果你使用的是这些环境之一，就像在桌面显示管理器中选择 "Wayland "会话一样简单([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)) 。

</strong> 我们建议 **，反对使用没有Wayland支持的桌面环境或窗口管理器，如Cinnamon（Linux Mint的默认）、Pantheon（Elementary OS的默认）、MATE、Xfce和i3。</p> 



### 专有固件(Microcode更新)

Linux发行版，如那些 [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) 或DIY（Arch Linux），不附带专有的 [微码](https://en.wikipedia.org/wiki/Microcode) 更新，而这些更新通常会修补漏洞。 这些漏洞的一些明显例子包括： [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), 以及其他 [硬件漏洞](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html)。

我们 **，强烈建议** ，安装微码更新，因为你的CPU在出厂时已经在运行专有的微码。 Fedora和openSUSE都有默认应用的微码更新。



### 更新

大多数Linux发行版会自动安装更新或提醒你这样做。 重要的是保持你的操作系统是最新的，这样当发现漏洞时，你的软件就会打上补丁。

一些发行版（尤其是那些针对高级用户的发行版）更加简陋，希望你能自己做一些事情（例如Arch或Debian）。 这些将需要手动运行 "软件包管理器" (`apt`, `pacman`, `dnf`, 等等)，以便接收重要的安全更新。

此外，一些发行版将不会自动下载固件更新。 为此，你将需要安装 [`fwupd`](https://wiki.archlinux.org/title/Fwupd)。



## 隐私调整



### MAC地址随机化

许多桌面Linux发行版（Fedora、openSUSE等）将自带 [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager)，以配置以太网和Wi-Fi设置。

在使用NetworkManager时，可以随机化 [](https://fedoramagazine.org/randomize-mac-address-nm/) [MAC地址](https://en.wikipedia.org/wiki/MAC_address)。 这在Wi-Fi网络上提供了更多的隐私，因为它使你更难追踪你所连接的网络上的特定设备。 它并不是 [****](https://papers.mathyvanhoef.com/wisec2016.pdf) 让你匿名。

我们建议将设置改为 **随机** ，而不是 **稳定**，正如 [文章中建议的那样](https://fedoramagazine.org/randomize-mac-address-nm/)。

如果你使用 [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components)，你需要设置 [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) ，这将启用 [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=)。

对以太网连接的MAC地址进行随机化的意义不大，因为系统管理员可以通过查看你在 [网络交换机上使用的端口找到你](https://en.wikipedia.org/wiki/Network_switch)。 随机化Wi-Fi MAC地址取决于Wi-Fi固件的支持。



### 其他标识符

还有一些其他的系统标识符，你可能要小心对待。 你应该考虑一下，看看它是否适用于你的 [威胁模型](../basics/threat-modeling.md)。

- **主机名。** 你的系统的主机名是与你所连接的网络共享的。 你应该避免在你的主机名中包括像你的名字或操作系统这样的识别术语，而是坚持使用通用术语或随机字符串。
- **用户名。** 同样地，你的用户名在你的系统中以各种方式使用。 考虑使用 "用户 "这样的通用术语，而不是你的真实姓名。
- **机器ID：**：在安装过程中，会生成一个独特的机器ID并存储在你的设备上。 考虑 [，将其设置为一个通用的ID](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id)。



### 系统计数

Fedora 项目 [通过使用一个 [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) 变量而不是唯一的 ID 来计算](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) 有多少独特的系统访问它的镜像。 Fedora这样做是为了确定负载并在必要时为更新提供更好的服务器。

这个 [选项](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) ，目前默认是关闭的。 我们建议将 `countme=false` 添加到 `/etc/dnf/dnf.conf` ，以备将来启用它。 在使用 `rpm-ostree` 的系统上，如Silverblue，通过屏蔽 [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) 计时器来禁用 countme 选项。

openSUSE 还使用一个 [唯一的 ID](https://en.opensuse.org/openSUSE:Statistics) 来计算系统，可以通过删除 `/var/lib/zypp/AnonymousUniqueId` 文件来禁用它。

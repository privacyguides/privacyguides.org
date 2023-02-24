---
title: "桌面版应用"
icon: simple/linux
---

由于隐私保护和软件自由，Linux发行版被普遍推荐。 如果你还没有使用Linux，下面是我们建议尝试的一些发行版，以及一些适用于许多Linux发行版的一般隐私和安全改进提示。

- [安卓概况 :material-arrow-right-drop-circle:](os/linux-overview.md)

## 传统发行版

### Fedora Workstation（Fedora 工作站）

!!! recommendation

    ![Fedora标志](assets/img/linux-desktop/fedora-workstation.svg) { align=right }
    
    **Fedora Workstation**是我们为刚接触Linux的人推荐的发行版。 Fedora通常在其他发行版之前采用较新的技术，例如： [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org)。 这些新技术往往伴随着安全、隐私和总体可用性的改进。
    
    [:octicons-home-16: 主页](https://getfedora.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/docs/){ .card-link title=文档}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=贡献 }

Fedora有一个半滚动的发布周期。 虽然有些软件包如 [GNOME](https://www.gnome.org) 被冻结到下一个 Fedora 版本，但大多数软件包(包括内核)在整个发行期都会频繁更新。 每个Fedora版本都支持一年，每6个月发布一个新版本。

### openSUSE Tumbleweed

!!! recommendation

    ![openSUSE Tumbleweed logo](assets/img/linux-desktop/opensus-tumbleweed.svg){ align=right }
    
    **openSUSE Tumbleweed**是一个稳定的滚动发布版本。
    
    openSUSE Tumbleweed 有一个 [事务性更新](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) 系统，使用 [Btrfs](https://en.wikipedia.org/wiki/Btrfs) 和 [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) 来确保快照在出现问题时可以回滚。
    
    [:octicons-home-16: 主页](https://getfedora.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/docs/){ .card-link title=文档}
    [:octicons-heart-16:](https://shop.opensuse.org/){ .card-link title=贡献 }

Tumbleweed采用的是滚动发布模式，每次更新都是以快照的形式发布。 当你升级你的系统时，会下载一个新的快照。 每个快照都要通过一系列的自动测试，由 [openQA](https://openqa.opensuse.org) ，以确保其质量。

### Arch Linux

!!! recommendation

    ![Arch标志](assets/img/linux-desktop/archlinux.svg){ align=right }
    
    **Arch Linux**是一个轻量级的、自己动手的（DIY）发行版，意味着你只得到你所安装的东西。 更多信息见他们的 [FAQ]（https://wiki.archlinux.org/title/Frequently_asked_questions）。
    
    [:octicons-home-16: 主页](https://getfedora.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/docs/){ .card-link title=文档}
    [:octicons-heart-16:](https://archlinux.org/donate/){ .card-link title=贡献 }

Arch Linux有一个滚动的发布周期。 没有固定的发布时间表，软件包的更新非常频繁。

作为一个 DIY 发行版，您需要 [自行设置并维护您的](os/linux-overview.md#arch-based-distributions) 系统。 Arch有一个 [官方安装程序](https://wiki.archlinux.org/title/Archinstall) ，使安装过程更容易一些。

[Arch Linux的很大一部分软件包](https://reproducible.archlinux.org) ，都是 [，可复制的](https://reproducible-builds.org)。

## 不变的发行版

### Fedora Silverblue

!!! recommendation

    ![Fedora Silverblue logo](assets/img/linux-desktop/fedora-silverblue.svg){ align=right }。
    
    **Fedora Silverblue**和**Fedora Kinoite**是Fedora的不可改变的变体，非常注重容器工作流程。 Silverblue配有 [GNOME]（https://www.gnome.org/）桌面环境，而Kinoite配有 [KDE]（https://kde.org/）。 Silverblue和Kinoite遵循与Fedora Workstation相同的发布时间表，受益于同样的快速更新，并与上游保持非常紧密的联系。
    
    [:octicons-home-16: 主页](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/fedora-silverblue/){ .card-link title=文档}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=贡献 }

Silverblue(和Kinoite)与Fedora Workstation不同，它们用一个更先进的替代品 [`rpm-ostree`](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/)，取代了 [DNF](https://fedoraproject.org/wiki/DNF) 软件包管理。 `rpm-ostree` 软件包管理器的工作方式是为系统下载一个基本镜像，然后在一个 [git](https://en.wikipedia.org/wiki/Git)-like commit tree中叠加软件包。 当系统更新时，会下载一个新的基本图像，覆盖物将被应用于该新图像。

更新完成后，你将重新启动系统进入新的部署。 `rpm-ostree` 保持系统的两个部署，这样如果在新的部署中出现问题，你可以很容易地回滚。 还可以根据需要选择钉更多的部署。

[Flatpak](https://www.flatpak.org) 是这些发行版上的主要软件包安装方法，因为 `rpm-ostree` 只是为了在基础镜像上叠加那些不能留在容器内的软件包。

作为Flatpaks的替代方案，可以选择 [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) ，创建 [Podman](https://podman.io) 容器，与主机操作系统共享主目录，模仿传统的Fedora环境，这对有眼光的开发者来说是一个 [有用的功能](https://containertoolbx.org)。

### NixOS

!!! recommendation

    ![NixOS标志](assets/img/linux-desktop/nixos.svg){ align=right }
    
    NixOS是一个基于Nix软件包管理器的独立发行版，注重可重复性和可靠性。
    
    [:octicons-home-16: 主页](https://nixos.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://nixos.org/learn.html){ .card-link title=文档}
    [:octicons-heart-16:](https://nixos.org/donate.html){ .card-link title=贡献 }

NixOS的软件包管理器将每个软件包的每个版本保存在 **Nix商店的不同文件夹中**。 由于这个原因，你可以在你的系统上安装同一软件包的不同版本。 在包的内容被写入文件夹后，该文件夹被变成只读。

NixOS还提供了原子式更新；首先它下载（或构建）新一代系统的软件包和文件，然后切换到它。 有不同的方法来切换到新一代；你可以告诉NixOS在重启后激活它，或者你可以在运行时切换到它。 你也可以 *测试* ，在运行时切换到新的一代，但不把它设置为当前系统的一代。 如果在更新过程中出现了什么问题，你可以直接重新启动，并自动返回到你的系统的工作版本。

Nix软件包管理器使用一种纯粹的函数式语言--它也被称为Nix--来定义软件包。

[Nixpkgs](https://github.com/nixos/nixpkgs) （软件包的主要来源）包含在一个GitHub仓库中。 你也可以用同样的语言定义你自己的包，然后轻松地将它们纳入你的配置中。

Nix是一个基于源代码的软件包管理器；如果在二进制缓存中没有预置的可用软件包，Nix将直接使用其定义从源代码中构建软件包。 它在一个沙盒式的 *纯* 环境中构建每个软件包，该环境尽可能地独立于主机系统，从而使二进制文件可以重现。

## 以匿名为重点的发行版

### Whonix

!!! recommendation

    ![Whonix标志](assets/img/linux-desktop/whonix.svg){ align=right }
    
    **Whonix**是基于 [Kicksecure](https://www.whonix.org/wiki/Kicksecure)，一个注重安全的Debian分叉。 它的目的是在互联网上提供隐私、安全和匿名性。 Whonix最好与[Qubes OS]（#qubes-os）一起使用。
    
    [:octicons-home-16: 主页](https://www.whonix.org/){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://www.dds6qkxpwdeubwucdiaord2xgbbeyds25rbsgr73tbfpqpt4a6vjwsyd.onion){ .card-link title="洋葱服务" }
    [:octicons-info-16:](https://www.whonix.org/wiki/Documentation){ .card-link title=文档}
    [:octicons-heart-16:](https://www.whonix.org/wiki/Donate){ .card-link title=贡献 }

Whonix旨在作为两个虚拟机运行：一个 "工作站 "和一个Tor "网关"。 工作站的所有通信都必须通过Tor网关。 这意味着，即使工作站被某种恶意软件入侵，真实的IP地址仍然是隐藏的。

它的一些功能包括Tor流隔离， [按键匿名化](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak)， [加密的交换](https://github.com/Whonix/swap-file-creator)，以及一个加固的内存分配器。

Whonix的未来版本可能包括 [全系统AppArmor策略](https://github.com/Whonix/apparmor-profile-everything) 和 [沙盒应用程序启动器](https://www.whonix.org/wiki/Sandbox-app-launcher) ，以完全限制系统上的所有进程。

[Whonix最好与Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers)，Qubes-Whonix与其他管理程序相比有各种 [，缺点](https://forums.whonix.org/t/qubes-whonix-security-disadvantages-help-wanted/8581)。

### Tails

!!! recommendation

    ![Tails标志](assets/img/linux-desktop/tails.svg){ align=right }
    
    **Tails**是一个基于Debian的实时操作系统，它通过Tor路由所有的通信，它可以从DVD、U盘或SD卡安装在几乎任何电脑上启动。 它使用 [Tor]（tor.md）来保护隐私和匿名，同时规避审查制度，而且在关闭电源后，它不会在其使用的计算机上留下任何痕迹。
    
    [:octicons-home-16: 主页](https://tails.boum.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://tails.boum.org/doc/index.en.html){ .card-link title=文档}
    [:octicons-heart-16:](https://tails.boum.org/donate/){ .card-link title=贡献 }

Tails由于具有失忆功能（意味着没有任何东西被写入磁盘），对于反取证来说是非常好的；然而，它并不是像Whonix那样的加固发行版。 它缺乏Whonix所具有的许多匿名和安全功能，而且更新频率更低（每六周才更新一次）。 被恶意软件入侵的Tails系统可能会绕过透明代理，允许用户去匿名化。

Tails默认在Tor浏览器中包括 [uBlock Origin](desktop-browsers.md#ublock-origin) ，这有可能使对手更容易对Tails用户进行指纹识别。 [Whonix](desktop.md#whonix) 虚拟机可能更加防漏，然而它们不是失忆的，这意味着数据可能会从你的存储设备中恢复。

在设计上，Tails是为了在每次重启后完全重置自己。 加密的 [持久性存储](https://tails.boum.org/doc/persistent_storage/index.en.html) ，可以配置为在重启之间存储一些数据。

## 以安全为重点的发行版

### Qubes操作系统

!!! recommendation

    ![Qubes OS标志](assets/img/qubes/qubes_os.svg){ align=right }
    
    **Qubes OS**是一个开源的操作系统，旨在为桌面计算提供强大的安全性。 Qubes基于Xen、X窗口系统和Linux，可以运行大多数Linux应用程序并使用大多数Linux驱动程序。
    
    [:octicons-home-16: 主页](https://www.qubes-os.org/){ .md-button .md-button--primary }
    [:material-arrow-right-drop-circle: 概述](os/qubes-overview.md){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://qubesosfasa4zl44o4tws22di6kepyzfeqv3tg4e3ztknltfxqrymdad.onion){ .card-link title="洋葱头服务" }
    [:octicons-eye-16:](https://www.qubes-os.org/privacy/){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://www.qubes-os.org/doc/){ .card-link title="文档" }
    [:octicons-code-16:](https://github.com/QubesOS/){ .card-link title="源代码" }
    [:octicons-heart-16:](https://www.qubes-os.org/donate/){ .card-link title=贡献 }

Qubes OS是一个基于Xen的操作系统，旨在通过安全的虚拟机（VM）为桌面计算提供强大的安全性，也被称为 *Qubes*。

Qubes OS操作系统通过将子系统（如网络、USB等）和应用程序隔离在独立的虚拟机中来保证计算机的安全。 如果系统的一个部分被破坏，额外的隔离可能会保护系统的其他部分。 更多详情请见Qubes [FAQ](https://www.qubes-os.org/faq/)。

## 条件

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。

我们推荐的操作系统。

- 必须是开源的。
- 必须定期接受软件和Linux内核的更新。
- Linux发行版必须支持 [Wayland](os/linux-overview.md#Wayland)。
- 在安装过程中必须支持全盘加密。
- 不得将定期发布的信息冻结1年以上。 我们 [，不建议将](os/linux-overview.md#release-cycle) "长期支持 "或 "稳定 "的发行版用于桌面使用。
- 必须支持各种各样的硬件。

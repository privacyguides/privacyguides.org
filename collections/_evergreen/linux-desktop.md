---
layout: evergreen
title: Linux Desktop
mathjax: false
description: |
   Linux distributions are commonly recommended for privacy protection and user freedom. Below are some suggestions with some general privacy and security improvements.
---

## Traditional distributions

{% for item_hash in site.data.operating-systems.linux-desktop %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Immutable distributions

{% for item_hash in site.data.operating-systems.linux-desktop-immutable %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Anonymity-focused distributions

{% for item_hash in site.data.operating-systems.linux-desktop-tor %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## GNU/Linux

It is often believed that [open source](https://en.wikipedia.org/wiki/Open-source_software) software is inherently secure because the source code is available. There is an expectation that community verification occurs regularly; however, this isn't always [the case](https://seirdy.one/2022/02/02/floss-security.html). It does depend on a number of factors, such as project activity, developer experience, level of rigour applied to [code reviews](https://en.wikipedia.org/wiki/Code_review) and how often attention is given to specific parts of the [codebase](https://en.wikipedia.org/wiki/Codebase) that may go untouched for years.

At the moment, desktop GNU/Linux does have some areas that could be better improved when compared to their proprietary counterparts, e.g:

 * A verified boot chain, unlike Apple's [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (with [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android's [Verified Boot](https://source.android.com/security/verifiedboot) or Microsoft Windows's [boot process](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) with [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). These features and hardware technologies can all help prevent persistant tampering by malware or [evil maid attacks](https://en.wikipedia.org/wiki/Evil_Maid_attack)
 * Strong sandboxing solution such as that found in [MacOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), and [Android](https://source.android.com/security/app-sandbox). Commonly used Linux sandboxing solutions such as [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) and [Firejail](https://firejail.wordpress.com/) still have a long way to go
 * Strong [exploit mitigations](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Despite of these drawbacks, desktop GNU/Linux distributions are great if you want to:

 * Avoid telemetry that often comes with proprietary operating systems
 * Maintain [software freedom](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
 * Have purpose built systems such as [Whonix](https://www.whonix.org) or [Tails](https://tails.boum.org/)

This page uses the term "Linux" to describe desktop GNU/Linux distributions. Other operating systems which also use the Linux kernel such as ChromeOS, Android, and Qubes OS are not discussed here.

### Release cycle
We highly recommend that you choose distributions which stay close to the stable upstream software releases. This is because frozen release cycle distributions often don't update package versions and fall behind on security updates.

For frozen distributions, package maintainers are expected to backport patches to fix vulnerabilities (Debian is one such [example](https://www.debian.org/security/faq#handling)) rather than bump the software to the "next version" released by the upstream developer. Some security fixes [do not](https://arxiv.org/abs/2105.14565) recieve a CVE (particularly less popular software) at all and therefore do not make it into the distribution with this patching model. As a result minor security fixes are sometimes held back until the next major release.

We don't believe holding packages back and applying interim patches is a good idea, as it diverges from the way the developer might have intended the software to work. [Richard Brown](https://rootco.de) has a great presentation about this:

<iframe
  width="731" height="411"
  src="https://www.youtube.com/embed/i8c0mg_mS7U"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

### Traditional vs Atomic updates

The most common method that Linux distributions use for updating is the traditional method, where updates are applied sequentially as packages of files. Traditional updates such as those used in Fedora, Archlinux, and Debian based distributions can be less reliable if an error occurs while updating. <img style="width: 500px; float: right; padding: 15px 5px 10px 20px;" src="/assets/img/linux-desktop/updates.gif" alt="Image showing traditional vs Atomic updates"/>

Atomic updating distributions apply updates in full or not at all. Typically transactional update systems are also atomic.

A transactional update system, creates a snapshot that is made before and after an update is applied. If an update fails part of the way through (perhaps because of a power failure), rolling the update back to the "last known good state" is easy.

For fast-moving distributions like [Silverblue](https://www.youtube.com/watch?v=-hpV5l-gJnQ), Tumbleweed and NixOS reliability can be achieved with this model.

### "Security-focused" distributions
There is often some confusion about "security-focused" distributions and "pentesting" distributions. A quick search for "the most secure Linux distribution" will often give results like Kali Linux, Black Arch, and Parrot OS.  These distributions are offensive penetration testing distributions, that bundle tools for testing other systems. They don't include any "extra security" or defensive mitigations intended for regular use.

### Arch-based distributions

Arch based distributions are not recommended for new users, regardless of the distribution. Arch does not have an distribution update mechanism for the underlying software choices. As a result the user of the system must stay aware with current trends and adopt technologies as they supersede older practices.

For a secure system, the user is also expected to have sufficient Linux knowledge to properly set up security for their system such as adopting a [mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) system, setting up [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, hardening boot parameters, manipulating [sysctl](https://en.wikipedia.org/wiki/Sysctl) parameters and knowing what components they need such as [Polkit](https://en.wikipedia.org/wiki/Polkit).

Any user using the [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **must** be comfortable in auditing PKGBUILDs that they install from that service. AUR packages are user-produced content and are not vetted in any way and therefore are vulnerable to software supply chain attacks, which has in fact happened [in the past](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR should always be used sparingly and often there is a lot of bad advice on various pages which direct users to blindly use [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) without sufficient warning. Similar warnings apply to using third party Personal Package Archives (PPAs) on Debian based distributions or Community Projects (COPR) on Fedora.

For advanced users, we only recommend Arch Linux, not any of its derivatives. We recommend against these two Arch derivatives specifically:

 * **Manjaro**: This distribution holds packages back for 2 weeks to make sure that their own changes don't break, not to make sure that upstream is stable. When AUR packages are used, they are often built against the latest [libraries](https://en.wikipedia.org/wiki/Library_(computing)) from Arch's repositories.
 * **Garuda**: They use [Chaotic-AUR](https://aur.chaotic.cx/) which automatically and blindly compiles packages from the AUR. There is no verification process to make sure that the AUR packages don't suffer from supply chain attacks.

### Linux-libre kernel and "Libre" distributions
We strongly recommend **against** using the Linux-libre kernel, since it [removes security mitigations](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) and [surpresses kernel warnings](https://news.ycombinator.com/item?id=29674846) about vulnerable microcode for ideological reasons.

## General Recommendations

### Drive Encryption

Most Linux distributions have an installer option for enabling [Linux Unified Key Setup (LUKS)](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) encryption upon installation.

If this option isn't set at installation time, the user will have to backup their data and re-install, as encryption is applied after [disk partitioning](https://en.wikipedia.org/wiki/Disk_partitioning) but before [file systems](https://en.wikipedia.org/wiki/File_system) are [formatted](https://en.wikipedia.org/wiki/Disk_formatting).

### Swap

Consider using [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) or [encrypted SWAP](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) instead of unencrypted swap to avoid potential security issues with sensitive data being pushed to [swap space](https://en.wikipedia.org/wiki/Memory_paging).

Fedora based distributions [use ZRAM](https://fedoraproject.org/wiki/Changes/SwapOnZRAM), by default.

### Wayland

We recommend using a desktop environment that supports the [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) display protocol as it developed with security [in mind](https://lwn.net/Articles/589147/) unlike it's predecessor, [X11](https://theinvisiblethings.blogspot.com/2011/04/linux-security-circus-on-gui-isolation.html). Fortunately common environments such as [GNOME](https://www.gnome.org), [KDE](https://kde.org) and the window manager [Sway](https://swaywm.org) have support for Wayland. Some distributions like Fedora and Tumbleweed use it by default and some others may do so in the future as X11 is in [hard maitenance mode](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). If you're using one of those environments it is as easy as selecting the "Wayland" session at the desktop display manager ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [KDM](https://en.wikipedia.org/wiki/KDE_Display_Manager)).

We recommend **against** using desktop environments or window managers that do not have Wayland support such as Cinnamon (default on Linux Mint), Pantheon (default on Elemetary OS) MATE, XFCE and i3.

### Proprietary firmware (microcode updates)
Linux distributions such as those which are [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) or DIY (Archlinux), don't come with the proprietary [microcode](https://en.wikipedia.org/wiki/Microcode) updates. Some notable examples of these vulnerabilities include [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)) and other [hardware vulnerabilities](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

We **highly recommend** that you install the microcode updates, as your CPU is already running the proprietary microcode from the factory.

Fedora or openSUSE have the microcode updates applied by default.

## Privacy tweaks

### MAC address randomization

Many desktop linux distributions (Fedora, openSUSE etc) will come with [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), to configure ethernet and WiFi settings.

It is possible to [randomize](https://fedoramagazine.org/randomize-mac-address-nm/) the [MAC address](https://en.wikipedia.org/wiki/MAC_address) when using NetworkManager. This provides a bit more privacy on WiFi networks as it makes it harder to track specific devices on the network you're connected to. It does [**not**](https://papers.mathyvanhoef.com/wisec2016.pdf) make you anonymous.

We recommend changing the setting to **random** instead of **stable**, as suggested in the [article](https://fedoramagazine.org/randomize-mac-address-nm/).

If you are using [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components) you will need to set [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) which will enable [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

### Other identifiers

There are other system [identifiers](https://madaidans-insecurities.github.io/guides/linux-hardening.html#identifiers) which you may wish to be careful about. You should give this some thought to see if it applies to your [threat model](/threat-modeling):

#### Hostnames and usernames

Do not put anything uniquely indentifying in your hostname or username. Keep them as generic names, such as "host" and "user", so you cannot be identified by them.

#### Timezones / Locales / Keymaps

If possible, your timezone should be set to "UTC" and your locale and keymap to "US".

#### Machine ID

A unique [Machine ID](https://www.man7.org/linux/man-pages/man5/machine-id.5.html) is stored in `/var/lib/dbus/machine-id` and on systemd systems, `/etc/machine-id` also. These should be edited to something generic, such as the [Whonix ID](https://github.com/Whonix/dist-base-files/blob/master/etc/machine-id): `b08dfa6083e7567a1921a715000001fb`

### System counting

The Fedora project [counts](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) how many unique systems access it's mirrors by counting using a ID on the system. They do this to determine load and provision better servers for updates where necessary.

This [option](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) appears to be off by default. We recommend adding `countme=false` to `/etc/dnf/dnf.conf` just in case it is enabled in the future. On systems that use `rpm-ostree` such as Silverblue, the countme option is disabled by [masking the rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) timer.

openSUSE also uses a [unique ID](https://en.opensuse.org/openSUSE:Statistics) to count systems, and that can be disabled by deleting the `/var/lib/zypp/AnonymousUniqueId` file.

## Application confinement

### Sandboxing
On Linux, app sandboxing and access control are extremely lacking compared to macOS and ChromeOS. User applications installed via traditional package managers typically have no confinement whatsoever. We will discuss a few common sandboxing methods below:

#### **1. Flatpak**
[Flatpak](https://flatpak.org/) first and foremost is a universal package manager for Linux. Its primary function so to be a package format which can be used in most Linux distributions. However, it does come with the benefit of giving the user some form of permission control.

It should be noted that Flatpak's sandbox is quite weak, as laid out in [this article](https://madaidans-insecurities.github.io/linux.html#flatpak).

The problem with Flatpak's lax high level permissions could be mitigated by using an application called [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). Consider revoking the access to the network socket (internet access), the pulse audio socket (for both audio in and out), `device=all` (access to all devices including the camera), and `org.freedesktop.secrets` dbus (access to secrets stored on your keychain) for applications which do not need it. If an application works natively with Wayland (and not running through the XWayland compatibility layer), consider revoking its access to the X11 socket as well. Broad filesystem permissions. This entails `filesystem=home` and `filesystem=host` should be revoked and replaced with just the directories the app should be allowed to access. Some sample overrides can be founded [here](https://github.com/tommytran732/Flatpak-Overrides).

However, problems like hard-coded access to some kernel interfaces like `/sys` and `/proc` and a weak seccomp filter still remain and cannot be solved by the user.

#### **2. Firejail**

Firejail is another common sandboxing technique. However, it is a giant SUID binary and has a large attack surface. In short, Firejail makes the system safer from processes that are confined by it, but less safe from processes running outside of it. In general, the usage of Firejail is not recommended. More information on this can be found in Madaidan's [article](https://madaidans-insecurities.github.io/linux.html#firejail).

### gVisor
Most container based solutions are not the ideal approach for app sandboxing, as they typically share the same kernel as the host for performance reasons. Vulnerabilities in the host's kernel could lead to container breakouts and sandbox bypasses.

If you are using Docker, it is highly recommended that you use the [gVisor](https://gvisor.dev) runtime which implements a pseudo kernel for each application container and limits their direct access to the host's kernel.

### Mandatory Access Control
Mandatory access control systems on Linux Desktop are largely ineffective policies/profiles; however, it is still worth it to keep them enabled.

On Fedora, SELinux comes preconfigured with targetted policies and will confine system daemons out of the box. We recommend that you never turn off SELinux or put it into permissive mode on Fedora.

On openSUSE, the user has a choice of AppArmor or SELinux during the installation process. We recommend sticking to the default for each variant (AppArmor for Tumbleweed and SELinux for MicroOS). openSUSE's SELinux policies are derived from Fedora.

Arch and Arch-based operating systems often do not come with a mandatory access control system out of the box. We highly recommend that you follow the [Arch Wiki](https://wiki.archlinux.org/title/AppArmor) to set up AppArmor.

### Making your own policies/profiles
For advanced users, you can make your own AppArmor profiles, SELinux policies, Bubblewrap profiles, and Seccomp blacklist to have better confinement of applications. This is quite a tedious and complicated task so we won't go into detail about how to do it here, but we do have a few projects that you could use as reference.

 * Whonix's [AppArmor Everything](https://github.com/Whonix/apparmor-profile-everything)
 * Krathalan's [AppArmor profiles](https://github.com/krathalan/apparmor-profiles)
 * noatsecure's [SELinux templates](https://github.com/noatsecure/hardhat-selinux-templates)
 * Seirdy's [Bubblewrap scripts](https://sr.ht/~seirdy/bwrap-scripts)

## Advanced Hardenening options

### Firewalls
You should have an inbound Firewall to block connections to your computer at all times. Consider Red Hat's [documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/using-and-configuring-firewalld_configuring-and-managing-networking) on how to setup Firewalld or Ubuntu's [documentation](https://help.ubuntu.com/community/UFW) on how to setup UFW.

Fedora comes with Firewalld by default; however, their rules are very permissive by default. Consider closing port 1000-65535 with both TCP and UDP after the operating system installation. You should also remove the whitelist for `smb-client` and `mdns` services if you do not use them.

For unconfined applications, solutions like [OpenSnitch](https://github.com/evilsocket/opensnitch) and [Portmaster](https://safing.io/portmaster/) may help.

Keep in mind that you are still assuming that none of your apps are malicious, because these Firewalls are based on IPTables/Nftables and a malicious app can simply add its own IPTables/Nftables rule higher up in the chain to bypass it.

If you are using Flatpak packages, you can revoke their network socket access using Flatseal and prevent them from accessing your network. This permission is not bypassable.

If you are using non-classic Snap packages on a system with proper snap confinement support (with both AppArmor and CGroupsv1 present), you can use the Snap Store to revoke network permission as well. This is also not bypassable.

### Kernel hardening
Consider following section [2.2](https://madaidans-insecurities.github.io/guides/linux-hardening.html#sysctl), [2.3](https://madaidans-insecurities.github.io/guides/linux-hardening.html#boot-parameters), and [2.5](https://madaidans-insecurities.github.io/guides/linux-hardening.html#kernel-attack-surface-reduction) on Madaidan's [hardening guide](https://madaidans-insecurities.github.io/guides/linux-hardening.html#identifiers) for sysctl and boot parameters hardening and kernel attack surface reduction.

Note that setting `kernel.unprivileged_userns_clone=0` will stop Flatpak, Podman, Docker, and LXC containers from working. Do not set this flag if you are using those technologies.

### Disabling SMT
SMT has been the cause of numerous hardware vulnerabilities, and subsequent patches for those vulnerabilities often come with performance penalties that negate most of the performance gain given by SMT. If you followed the "kernel hardening" section above, some kernel parameters already disable SMT. However, if you are not following it, or if the option is available to you, we recommend that you disable it in your firmware as well.

### Linux-Hardened
Certain distributions like Arch Linux comes with linux-hardened, a kernel package with hardening patches and more security-conscious defaults.

Linux-Hardened comes with `kernel.unprivileged_userns_clone=0` by default. If you are using Flatpak, Podman, Docker, or LXC containers or other technologies that relies on unpriviledged user namespaces, consider setting `kernel.unprivileged_userns_clone=1`.

### GRSecurity
GRSecurity is a set of kernel patches that substantially increase security in the Linux kernel. Unfortunately, it effectively closed off in 2017. If you have access to the latest GRSecurity patches, it is highly recommended that you use them.

### Hardened memory allocator
The [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc) from [GrapheneOS](https://grapheneos.org) can be used on Linux distributions. It is available by default on Whonix and is available as an [AUR package](https://wiki.archlinux.org/title/Security#Hardened_malloc) on Arch based distributions. If you are using the AUR package, consider setting up `LD_PRELOAD` as described in the [Arch Wiki](https://wiki.archlinux.org/title/Security#Hardened_malloc).

### Umask
If you are not using openSUSE, consider changing the default umask for both regular users and root to 077.

Changing umask to 077 tends to break snapper on openSUSE and is not recommended.

### Mountpoint hardening
Consider adding `nodev`, `noexec`, and `nosuid` to mountpoints which do not need them. Typically, these could be applied to `/boot`, `/boot/efi`, `/home`, `/root`, and `/var`.

If you use [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/), `/var/log/journal` must not have any of those options.

If you are on Arch Linux, do not apply `noexec` to `/var/tmp`.

### PAM
Consider following section [14](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam) on [Madaidan's hardening guide](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam).

On systems where pam_faillock is not available, consider using [pam_tally2](https://access.redhat.com/solutions/37687) instead.

### USBGuard
Consider following the [Arch Wiki](https://wiki.archlinux.org/title/USBGuard) to set up USBGuard.

### Secure Boot
Consider following section [21](https://madaidans-insecurities.github.io/guides/linux-hardening.html#physical-security) on Madaidan's [hardening guide](https://madaians-insecurities.github.io/guides/linux-hardening.html#identifiers).

By default, UEFI secure boot on Linux distributions is rather ineffective. Besides the problems mentioned in Madaidan's guide, only the chainloader (shim), the boot loader (GRUB), and the kernel are verified. The initramfs is often left unverified, unencrypted, and open up the window for an [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attack.

This problem could be reduced by either [combinding the kernel, initramfs, and microcode](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot) into a signed EFI stub or by encrypting the `/boot` partition. If you are using openSUSE, your `/boot` partition should be encrypted by default should you enable drive encrytion.

A guide for converting a normal `/boot` partition into an encrypted one on Fedora Workstation (not Silverblue!) can be found [here](https://mutschler.eu/linux/install-guides/fedora-btrfs-33/).

After setting up Secure Boot, set a password on your firmware to prevent an adversary from opening it and disabling Secure Boot.

Note that these recommendations can only make you a bit more resistant against evil maid attacks, but they cannot compete with proper verified boot like on Android, ChromeOS, or macOS as there is no root filesystem verification to prevent persistent tampering by malware.

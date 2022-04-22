---
title: "Linux"
icon: fontawesome/brands/linux
---
Linux distributions are commonly recommended for privacy protection and user freedom. Below are some suggestions with some general privacy and security improvements.

## Traditional Distributions

### Fedora Workstation

!!! recommendation

    ![Fedora logo](assets/img/linux-desktop/fedora-workstation.svg){ align=right }

    **Fedora Workstation** is our recommended distribution for users new to Linux. Fedora generally adopts newer technologies before other distributions e.g., [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), and soon, [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). These new technologies often come with improvements in security, privacy, and usability in general.

    [Visit getfedora.org](https://getfedora.org/){ .md-button .md-button--primary }

Fedora has a semi-[rolling release](https://en.wikipedia.org/wiki/Rolling_release) cycle. While some packages like [GNOME](https://www.gnome.org) are frozen until the next Fedora release, most packages (including the kernel) are updated frequently throughout the lifespan of the release. Each Fedora release is supported for one year, with a new version released every 6 months.

### openSUSE Tumbleweed

!!! recommendation

    ![openSUSE Tumbleweed logo](assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }

    **openSUSE Tumbleweed** is a stable [rolling release](https://en.wikipedia.org/wiki/Rolling_release) distribution.

    openSUSE Tumbleweed has a [transactional update](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) system that uses [Btrfs](https://en.wikipedia.org/wiki/Btrfs) and [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) to ensure that snapshots can be rolled back should there be a problem.

    [Visit get.opensuse.org](https://get.opensuse.org/tumbleweed/){ .md-button .md-button--primary }

Tumbleweed follows a rolling release model where each update is released as a snapshot of the distribution. When the user upgrades their system, a new snapshot is downloaded. Each snapshot is run through a series of automated tests by [openQA](https://openqa.opensuse.org) to ensure its quality.

### Arch Linux

!!! recommendation

    ![Arch logo](assets/img/linux-desktop/archlinux.svg){ align=right }

    **Arch Linux** is a lightweight, do-it-yourself (DIY) distribution meaning that you only get what you install. For more information see their [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).

    [Visit archlinux.org](https://archlinux.org/){ .md-button .md-button--primary }

Arch Linux has a rolling release cycle. There is no fixed release schedule and packages are updated very frequently.

Being a DIY distribution, the user is [expected to setup and maintain](#arch-based-distributions) their system. Arch has an [official installer](https://wiki.archlinux.org/title/Archinstall) to make the installation process a little easier.

A large portion of [Arch Linux’s packages](https://reproducible.archlinux.org) are [reproducible](https://reproducible-builds.org).

## Immutable Distributions

### Fedora Silverblue

!!! recommendation

    ![Fedora Silverblue logo](assets/img/linux-desktop/fedora-silverblue.svg){ align=right }

    **Fedora Silverblue** and **Fedora Kinoite** are immutable variants of Fedora with a strong focus on container workflows. Silverblue comes with the [GNOME](https://www.gnome.org/) desktop environment while Kinoite comes with [KDE](https://kde.org/). Silverblue and Kinoite follow the same release schedule as Fedora Workstation, benefiting from the same fast updates and staying very close to upstream.

    [Visit silverblue.fedoraproject.org](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }

Silverblue (and Kinoite) differ from Fedora Workstation as they replace the [DNF](https://fedoraproject.org/wiki/DNF) package manager with a much more advanced alternative called [`rpm-ostree`](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/). The `rpm-ostree` package manager works by downloading a base image for the system, then overlaying packages over it in a [git](https://en.wikipedia.org/wiki/Git)-like commit tree. When the system is updated, a new base image is downloaded and the overlays will be applied to that new image.

After the update is complete the user will reboot the system into the new deployment. `rpm-ostree` keeps two deployments of the system so that a user can easily rollback if something breaks in the new deployment. There is also the option to pin more deployments as needed.

[Flatpak](https://www.flatpak.org) is the primary package installation method on these distributions, as `rpm-ostree` is only meant to overlay packages that cannot stay inside of a container on top of the base image.

As an alternative to Flatpaks, there is the option of [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) to create [Podman](https://podman.io) containers with a shared home directory with the host operating system and mimic a traditional Fedora environment, which is a [useful feature](https://containertoolbx.org) for the discerning developer.

### NixOS

!!! recommendation

    ![NixOS logo](assets/img/linux-desktop/nixos.svg){ align=right }

    NixOS is an independent distribution based on the Nix package manager with a focus on reproducibility and reliability.

    [Visit nixos.org](https://nixos.org/){ .md-button .md-button--primary }

NixOS’s package manager keeps every version of every package in a different folder in the **Nix store**. Due to this you can have different versions of the same package installed on your system. After the package contents have been written to the folder, the folder is made read-only.

NixOS also provides atomic updates; first it downloads (or builds) the packages and files for the new system generation and then switches to it. There are different ways to switch to a new generation; you can tell NixOS to activate it after reboot or you can switch to it at runtime. You can also *test* the new generation by switching to it at runtime, but not setting it as the current system generation. If something in the update process breaks, you can just reboot and automatically and return to a working version of your system.

Nix the package manager uses a purely functional language - which is also called Nix - to define packages.

[Nixpkgs](https://github.com/nixos/nixpkgs) (the main source of packages) are contained in a single GitHub repository. You can also define your own packages in the same language and then easily include them in your config.

Nix is a source-based package manager; if there’s no pre-built available in the binary cache, Nix will just build the package from source using its definition. It builds each package in a sandboxed *pure* environment, which is as independent of the host system as possible, thus making binaries reproducible.

## Anonymity-Focused Distributions

### Whonix

!!! recommendation

    ![Whonix logo](assets/img/linux-desktop/whonix.svg){ align=right }

    **Whonix** is based on [Kicksecure](https://www.whonix.org/wiki/Kicksecure), a security-focused fork of Debian. It aims to provide privacy, security, and anonymity on the internet.

    [Visit whonix.org](https://www.whonix.org/){ .md-button .md-button--primary }

Whonix is meant to run as two virtual machines: a “Workstation” and a Tor “Gateway”. All communications from the Workstation has to go through the Tor gateway, and will be routed through the Tor Network.

Some of its features include Tor Stream Isolation, [keystroke anonymization](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak), [encrypted swap](https://github.com/Whonix/swap-file-creator), and a hardened memory allocator.

Future versions of Whonix will likely include [full system AppArmor policies](https://github.com/Whonix/apparmor-profile-everything) and a [sandbox app launcher](https://www.whonix.org/wiki/Sandbox-app-launcher) to fully confine all processes on the system.

Whonix is best used [in conjunction with Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers).

### Tails

!!! recommendation

    ![Tails logo](assets/img/linux-desktop/tails.svg){ align=right }

    **Tails** is a live operating system based on Debian that routes all communications through Tor.

    It can boot on almost any computer from a DVD, USB stick, or SD card. It aims to preserve privacy and anonymity while circumventing censorship and leaving no trace of itself on the computer it is used on.

    [Visit tails.boum.org](https://tails.boum.org/){ .md-button .md-button--primary }

By design, Tails is meant to completely reset itself after each reboot. Encrypted [persistent storage](https://tails.boum.org/doc/first_steps/persistence/index.en.html) can be configured to store some data.

## GNU/Linux Overview

It is often believed that [open source](https://en.wikipedia.org/wiki/Open-source_software) software is inherently secure because the source code is available. There is an expectation that community verification occurs regularly; however, this isn’t always [the case](https://seirdy.one/2022/02/02/floss-security.html). It does depend on a number of factors, such as project activity, developer experience, level of rigour applied to [code reviews](https://en.wikipedia.org/wiki/Code_review), and how often attention is given to specific parts of the [codebase](https://en.wikipedia.org/wiki/Codebase) that may go untouched for years.

At the moment, desktop GNU/Linux does have some areas that could be better improved when compared to their proprietary counterparts, e.g:

- A verified boot chain, unlike Apple’s [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (with [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android’s [Verified Boot](https://source.android.com/security/verifiedboot) or Microsoft Windows’s [boot process](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) with [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). These features and hardware technologies can all help prevent persistent tampering by malware or [evil maid attacks](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- Strong sandboxing solution such as that found in [MacOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), and [Android](https://source.android.com/security/app-sandbox). Commonly used Linux sandboxing solutions such as [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) and [Firejail](https://firejail.wordpress.com/) still have a long way to go
- Strong [exploit mitigations](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Despite these drawbacks, desktop GNU/Linux distributions are great if you want to:

- Avoid telemetry that often comes with proprietary operating systems
- Maintain [software freedom](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Have purpose built systems such as [Whonix](https://www.whonix.org) or [Tails](https://tails.boum.org/)

This page uses the term “Linux” to describe desktop GNU/Linux distributions. Other operating systems which also use the Linux kernel such as ChromeOS, Android, and Qubes OS are not discussed here.

### Release cycle

We highly recommend that you choose distributions which stay close to the stable upstream software releases. This is because frozen release cycle distributions often don’t update package versions and fall behind on security updates.

For frozen distributions, package maintainers are expected to backport patches to fix vulnerabilities (Debian is one such [example](https://www.debian.org/security/faq#handling)) rather than bump the software to the “next version” released by the upstream developer. Some security fixes [do not](https://arxiv.org/abs/2105.14565) receive a [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (particularly less popular software) at all and therefore do not make it into the distribution with this patching model. As a result minor security fixes are sometimes held back until the next major release.

We don’t believe holding packages back and applying interim patches is a good idea, as it diverges from the way the developer might have intended the software to work. [Richard Brown](https://rootco.de/aboutme/) has a presentation about this:

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U"
  title="Regular Releases are Wrong, Roll for your life"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

### Traditional vs Atomic updates

Traditionally, Linux distributions update by sequentially updating the desired packages. Traditional updates such as those used in Fedora, Arch Linux, and Debian based distributions can be less reliable if an error occurs while updating.

Atomic updating distributions apply updates in full or not at all. Typically, transactional update systems are also atomic.

A transactional update system creates a snapshot that is made before and after an update is applied. If an update fails at any time (perhaps due to a power failure), the update can be easily rolled back to a “last known good state”.

The Atomic update method is used for immutable distributions like Silverblue, Tumbleweed, and NixOS and can achieve reliability with this model. [Adam Šamalík](https://twitter.com/adsamalik) provided a presentation on how `rpm-ostree` works with Silverblue:

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ"
  title="Let's try Fedora Silverblue — an immutable desktop OS! - Adam Šamalik"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

### “Security-focused” distributions

There is often some confusion about “security-focused” distributions and “pentesting” distributions. A quick search for “the most secure Linux distribution” will often give results like Kali Linux, Black Arch, and Parrot OS. These distributions are offensive penetration testing distributions that bundle tools for testing other systems. They don’t include any “extra security” or defensive mitigations intended for regular use.

### Arch-based distributions

Arch based distributions are not recommended for new users, regardless of the distribution. Arch does not have an distribution update mechanism for the underlying software choices. As a result the user of the system must stay aware with current trends and adopt technologies as they supersede older practices.

For a secure system, the user is also expected to have sufficient Linux knowledge to properly set up security for their system such as adopting a [mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) system, setting up [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, hardening boot parameters, manipulating [sysctl](https://en.wikipedia.org/wiki/Sysctl) parameters, and knowing what components they need such as [Polkit](https://en.wikipedia.org/wiki/Polkit).

Any user using the [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **must** be comfortable in auditing PKGBUILDs that they install from that service. AUR packages are user-produced content and are not vetted in any way and therefore are vulnerable to software supply chain attacks, which has in fact happened [in the past](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR should always be used sparingly and often there is a lot of bad advice on various pages which direct users to blindly use [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) without sufficient warning. Similar warnings apply to using third party Personal Package Archives (PPAs) on Debian based distributions or Community Projects (COPR) on Fedora.

For advanced users, we only recommend Arch Linux, not any of its derivatives. We recommend against these two Arch derivatives specifically:

- **Manjaro**: This distribution holds packages back for 2 weeks to make sure that their own changes don’t break, not to make sure that upstream is stable. When AUR packages are used, they are often built against the latest [libraries](https://en.wikipedia.org/wiki/Library_(computing)) from Arch’s repositories.
- **Garuda**: They use [Chaotic-AUR](https://aur.chaotic.cx/) which automatically and blindly compiles packages from the AUR. There is no verification process to make sure that the AUR packages don’t suffer from supply chain attacks.

### Linux-libre kernel and “Libre” distributions

We strongly recommend **against** using the Linux-libre kernel, since it [removes security mitigations](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) and [suppresses kernel warnings](https://news.ycombinator.com/item?id=29674846) about vulnerable microcode for ideological reasons.

## General Recommendations

### Drive Encryption

Most Linux distributions have an installer option for enabling [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) FDE upon installation.

If this option isn’t set at installation time, the user will have to backup their data and re-install, as encryption is applied after [disk partitioning](https://en.wikipedia.org/wiki/Disk_partitioning) but before [file systems](https://en.wikipedia.org/wiki/File_system) are [formatted](https://en.wikipedia.org/wiki/Disk_formatting).

When securely erasing storage devices such as a [Solid-state drive (SSD)](https://en.wikipedia.org/wiki/Solid-state_drive) you should use the [ATA Secure Erase](https://ata.wiki.kernel.org/index.php/ATA_Secure_Erase) command. This command can be issued from your UEFI setup. If the storage device is a regular [hard drive](https://en.wikipedia.org/wiki/Hard_disk_drive), consider using [`nwipe`](https://en.wikipedia.org/wiki/Nwipe).

### Swap

Consider using [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) or [encrypted swap](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) instead of unencrypted swap to avoid potential security issues with sensitive data being pushed to [swap space](https://en.wikipedia.org/wiki/Memory_paging). Fedora based distributions [use ZRAM](https://fedoraproject.org/wiki/Changes/SwapOnZRAM) by default.

### Wayland

We recommend using a desktop environment that supports the [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) display protocol as it developed with security [in mind](https://lwn.net/Articles/589147/). Its predecessor, [X11](https://en.wikipedia.org/wiki/X_Window_System), does not support GUI isolation, allowing all windows to [record screen, log and inject inputs in other windows](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), making any attempt at sandboxing futile. While there are options to do nested X11 such as [Xpra](https://en.wikipedia.org/wiki/Xpra) or [Xephyr](https://en.wikipedia.org/wiki/Xephyr), they often come with negative performance consequences and are not convenient to set up and are not preferable over Wayland.

Fortunately, common environments such as [GNOME](https://www.gnome.org), [KDE](https://kde.org), and the window manager [Sway](https://swaywm.org) have support for Wayland. Some distributions like Fedora and Tumbleweed use it by default and some others may do so in the future as X11 is in [hard maintenance mode](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). If you’re using one of those environments it is as easy as selecting the “Wayland” session at the desktop display manager ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

We recommend **against** using desktop environments or window managers that do not have Wayland support such as Cinnamon (default on Linux Mint), Pantheon (default on Elementary OS), MATE, Xfce, and i3.

### Proprietary firmware (microcode updates)

Linux distributions such as those which are [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) or DIY (Arch Linux) don’t come with the proprietary [microcode](https://en.wikipedia.org/wiki/Microcode) updates. Some notable examples of these vulnerabilities include [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), and other [hardware vulnerabilities](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

We **highly recommend** that you install the microcode updates, as your CPU is already running the proprietary microcode from the factory. Fedora and openSUSE both have the microcode updates applied by default.

## Privacy tweaks

### MAC address randomization

Many desktop Linux distributions (Fedora, openSUSE etc) will come with [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), to configure Ethernet and Wi-Fi settings.

It is possible to [randomize](https://fedoramagazine.org/randomize-mac-address-nm/) the [MAC address](https://en.wikipedia.org/wiki/MAC_address) when using NetworkManager. This provides a bit more privacy on Wi-Fi networks as it makes it harder to track specific devices on the network you’re connected to. It does [**not**](https://papers.mathyvanhoef.com/wisec2016.pdf) make you anonymous.

We recommend changing the setting to **random** instead of **stable**, as suggested in the [article](https://fedoramagazine.org/randomize-mac-address-nm/).

If you are using [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), you will need to set [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) which will enable [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

There isn’t much point in randomizing the MAC address for Ethernet connections as a system administrator can find you by looking at the port you are using on the [network switch](https://en.wikipedia.org/wiki/Network_switch). Randomizing Wi-Fi MAC addresses depends on support from the Wi-Fi’s firmware.

### Other identifiers

There are other system [identifiers](https://madaidans-insecurities.github.io/guides/linux-hardening.html#identifiers) which you may wish to be careful about. You should give this some thought to see if it applies to your [threat model](threat-modeling.md):

- [10.1 Hostnames and usernames](https://madaidans-insecurities.github.io/guides/linux-hardening.html#hostnames)
- [10.2 Time zones / Locales / Keymaps](https://madaidans-insecurities.github.io/guides/linux-hardening.html#timezones-locales-keymaps)
- [10.3 Machine ID](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id)

### System counting

The Fedora Project [counts](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) how many unique systems access its mirrors by using a [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) variable instead of a unique ID. Fedora does this to determine load and provision better servers for updates where necessary.

This [option](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) is currently off by default. We recommend adding `countme=false` to `/etc/dnf/dnf.conf` just in case it is enabled in the future. On systems that use `rpm-ostree` such as Silverblue, the countme option is disabled by masking the [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) timer.

openSUSE also uses a [unique ID](https://en.opensuse.org/openSUSE:Statistics) to count systems, which can be disabled by deleting the `/var/lib/zypp/AnonymousUniqueId` file.

## Sandboxing and Application confinement

Some sandboxing solutions for desktop Linux distributions do exist, however they are not as strict as those found in MacOS or ChromeOS. Applications installed from the package manager (`dnf`, `apt`, etc.) typically have **no** sandboxing or confinement whatsoever. Below are a few projects that aim to solve this problem:

### Flatpak

[Flatpak](https://flatpak.org) aims to be a universal package manager for Linux. One of its main goals is to provide a universal package format which can be used in most Linux distributions. It provides some [permission control](https://docs.flatpak.org/en/latest/sandbox-permissions.html). Madaidan [points out](https://madaidans-insecurities.github.io/linux.html#flatpak) that Flatpak sandboxing could be improved as particular Flatpaks often have greater permission than required. There does seem to be [some agreement](https://theevilskeleton.gitlab.io/2021/02/11/response-to-flatkill-org.html) that this is the case.

Users can restrict applications further by issuing [Flatpak overrides](https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-override). This can be done with the command-line or by using [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). Some sample overrides are provided by [tommytran732](https://github.com/tommytran732/Flatpak-Overrides) and [rusty-snake](https://github.com/rusty-snake/kyst/tree/main/flatpak).

We generally recommend revoking access to:

- the Network (`share=network`) socket (internet access)
- the PulseAudio socket (for both audio in and out), `device=all` (access to all devices including the camera)
- `org.freedesktop.secrets` dbus (access to secrets stored on your keychain) for applications which do not need it

If an application works natively with Wayland (and not running through the [XWayland](https://wayland.freedesktop.org/xserver.html) compatibility layer), consider revoking its access to the X11 (`socket=x11`) and [Inter-process communications (IPC)](https://en.wikipedia.org/wiki/Unix_domain_socket) socket (`share=ipc`) as well.

We also recommend restricting broad filesystem permissions such as `filesystem=home` and `filesystem=host` which should be revoked and replaced with just the directories that the app needs to access. Some applications like [VLC](https://www.flathub.org/apps/details/org.videolan.VLC) implement the [Portals](https://docs.flatpak.org/en/latest/portal-api-reference.html) [API](https://en.wikipedia.org/wiki/API), which allows a file manager to pass files to the Flatpak application (e.g. VLC) without specific filesystem access privileges. VLC is only able to access the specific file that the user wants to open, rather than requiring privileges to particular locations.

Hard-coded access to some kernel interfaces like [`/sys`](https://en.wikipedia.org/wiki/Sysfs) and [`/proc`](https://en.wikipedia.org/wiki/Procfs#Linux) and weak [seccomp](https://en.wikipedia.org/wiki/Seccomp) filters unfortunately cannot be secured by the user with Flatpak.

### Firejail

[Firejail](https://firejail.wordpress.com/) is another method of sandboxing. As it is a large [setuid](https://en.wikipedia.org/wiki/Setuid) binary, it has a large [attack surface](https://en.wikipedia.org/wiki/Attack_surface) which may assist in [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation).

The main risk is that Firejail may make the system safer from processes confined by it, but make it also less safe from processes running outside of Firejail. We [don’t recommend](https://madaidans-insecurities.github.io/linux.html#firejail) the use of Firejail.

### Mandatory Access Control

[Mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) systems require policy files in order to force constraints on the system.

The two main control systems are [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) (used on Android and Fedora) and [AppArmor](https://en.wikipedia.org/wiki/AppArmor).

Fedora includes SELinux preconfigured with some policies that will confine [system daemons](https://en.wikipedia.org/wiki/Daemon_(computing)) (background processes). We don’t recommend disabling SELinux.

openSUSE gives the choice of AppArmor or SELinux during the installation process. We recommend sticking to the default for each variant (AppArmor for [Tumbleweed](https://get.opensuse.org/tumbleweed/) and SELinux for [MicroOS](https://microos.opensuse.org/)). openSUSE’s SELinux policies are derived from Fedora.

Arch and Arch-based operating systems often do not come with a mandatory access control system and that must be configured manually for either [AppArmor](https://wiki.archlinux.org/title/AppArmor) or [SELinux](https://wiki.archlinux.org/title/SELinux).

Linux desktops don't usually include individual app confinement rules, unlike Android which sandboxes every application installed.

### Making your own policies/profiles

For advanced users, you can make your own AppArmor profiles, SELinux policies, Bubblewrap profiles, and [seccomp](https://en.wikipedia.org/wiki/Seccomp) blacklist to have better confinement of applications. This is quite a tedious and complicated task so we won’t go into detail about how to do it here, but we do have a few projects that you could use as reference.

- Whonix’s [AppArmor Everything](https://github.com/Whonix/apparmor-profile-everything)
- Krathalan’s [AppArmor profiles](https://github.com/krathalan/apparmor-profiles)
- noatsecure’s [SELinux templates](https://github.com/noatsecure/hardhat-selinux-templates)
- Seirdy’s [Bubblewrap scripts](https://sr.ht/~seirdy/bwrap-scripts)

### Securing Linux containers

If you’re running a server you may have heard of Linux Containers, Docker, or Podman which refer to a kind of [OS-level virtualization](https://en.wikipedia.org/wiki/OS-level_virtualization). Containers are more common in server and development environments where individual apps are built to operate independently.

[Docker](https://en.wikipedia.org/wiki/Docker_(software)) is one of the most common container solutions. It does not run a proper sandbox, and this means that there is a large kernel [attack surface](https://en.wikipedia.org/wiki/Attack_surface). The [daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) controls everything and [typically](https://docs.docker.com/engine/security/rootless/#known-limitations) runs as root. If it crashes for some reason, all the containers will crash too. The [gVisor](https://en.wikipedia.org/wiki/GVisor) runtime which implements an application level kernel can help limit the number of [syscalls](https://en.wikipedia.org/wiki/System_call) an application can make and can help isolate it from the host’s [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)).

Red Hat develops [Podman](https://docs.podman.io/en/latest/) and secures it with SELinux to [isolate](https://www.redhat.com/sysadmin/apparmor-selinux-isolation) containers from each other. One of the notable differences between Docker and Podman is that Docker requires [root](https://en.wikipedia.org/wiki/Superuser) while Podman can run with [rootless containers](https://developers.redhat.com/blog/2020/09/25/rootless-containers-with-podman-the-basics) that are also [daemonless](https://developers.redhat.com/blog/2018/08/29/intro-to-podman), meaning if one crashes they don’t all come down.

Another option is [Kata containers](https://katacontainers.io/), where virtual machines masquerade as containers. Each Kata container has its own Linux kernel and is isolated from the host.

These container technologies can be useful even for enthusiastic home users who may want to run certain web app software on their local area network (LAN) such as [Vaultwarden](https://github.com/dani-garcia/vaultwarden) or images provided by [linuxserver.io](https://www.linuxserver.io) to increase privacy by decreasing dependence on various web services.

## Additional hardening

### Firewalls

A [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) may be used to secure connections to your system. If you’re on a public network, the necessity of this may be greater than if you’re on a local trusted network that you control. We would generally recommend that you block incoming connections only, unless you’re using an application firewall such as [OpenSnitch](https://github.com/evilsocket/opensnitch) or [Portmaster](https://safing.io/portmaster/).

Red Hat distributions (such as Fedora) are typically configured through [firewalld](https://en.wikipedia.org/wiki/Firewalld). Red Hat has plenty of [documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/using-and-configuring-firewalld_configuring-and-managing-networking) regarding this topic. There is also the [Uncomplicated Firewall](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) which can be used as an alternative.

Consider blocking all ports which are **not** [well known](https://en.wikipedia.org/wiki/Well-known_port#Well-known_ports) or “privileged ports”. That is, ports from 1025 up to 65535. Block both [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) and [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) after the operating system is installed.

If you use Fedora, consider removing the whitelist for for [smb](https://en.wikipedia.org/wiki/Server_Message_Block)-client and [mdns](https://en.wikipedia.org/wiki/Multicast_DNS) services if you do not use them.

All these firewalls use the [Netfilter](https://en.wikipedia.org/wiki/Netfilter) framework and therefore cannot protect against malicious programs running on the system. A malicious program could insert its own rules.

If you are using Flatpak packages, you can revoke their network socket access using Flatseal and prevent those applications from accessing your network. This permission is not bypassable.

If you are using non-classic [Snap](https://en.wikipedia.org/wiki/Snap_(package_manager)) packages on a system with proper snap confinement support (with both AppArmor and [CGroupsv1](https://en.wikipedia.org/wiki/Cgroups) present), you can use the Snap Store to revoke network permission as well. This is also not bypassable.

### Kernel hardening

There are some additional kernel hardening options such as configuring [sysctl](https://en.wikipedia.org/wiki/Sysctl#Linux) keys and [kernel command-line parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) which are described in the following pages. We don’t recommend you change these options unless you learn about what they do.

- [2.2 Sysctl](https://madaidans-insecurities.github.io/guides/linux-hardening.html#sysctl)
- [2.3 Boot parameters](https://madaidans-insecurities.github.io/guides/linux-hardening.html#boot-parameters)
- [2.5 Kernel attack surface reduction](https://madaidans-insecurities.github.io/guides/linux-hardening.html#kernel-attack-surface-reduction)

Note that setting `kernel.unprivileged_userns_clone=0` will stop Flatpak, Snap (that depend on browser-sandbox), Electron based AppImages, Podman, Docker, and LXC containers from working. Do **not** set this flag if you are using container products.

### Linux-Hardened

Some distributions like Arch Linux have the [linux-hardened](https://github.com/anthraxx/linux-hardened), kernel package. It includes [hardening patches](https://wiki.archlinux.org/title/security#Kernel_hardening) and more security-conscious defaults. Linux-Hardened has `kernel.unprivileged_userns_clone=0` disabled by default. See the [warning above](#kernel-hardening) about how this might impact you.

### Simultaneous multithreading (SMT)

[SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) has been the cause of numerous hardware vulnerabilities, and subsequent patches for those vulnerabilities often come with performance penalties that negate most of the performance gain given by SMT. If you followed the “kernel hardening” section above, some kernel parameters already disable SMT. If the option is available to you, we recommend that you disable it in your firmware as well.

### Hardened memory allocator

The [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc) from [GrapheneOS](https://grapheneos.org) can be used on Linux distributions. It is available by default on Whonix and is available as an [AUR package](https://wiki.archlinux.org/title/Security#Hardened_malloc) on Arch based distributions. If you are using the AUR package, consider setting up `LD_PRELOAD` as described in the [Arch Wiki](https://wiki.archlinux.org/title/Security#Hardened_malloc).

### Umask

If you are not using openSUSE, consider changing the default [umask](https://en.wikipedia.org/wiki/Umask) for both regular users and root to 077. Changing umask to 077 can break snapper on openSUSE and is **not** recommended.

### Mountpoint hardening

Consider adding the [following options](https://man7.org/linux/man-pages/man8/mount.8.html) `nodev`, `noexec`, and `nosuid` to [mountpoints](https://en.wikipedia.org/wiki/Mount_(computing)) which do not need them. Typically, these could be applied to `/boot`, `/boot/efi`, `/home`, `/root`, and `/var`.

If you use [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/), `/var/log/journal` must not have any of those options. If you are on Arch Linux, do not apply `noexec` to `/var/tmp`.

### Linux Pluggable Authentication Modules (PAM)

There is also further hardening to [PAM](https://en.wikipedia.org/wiki/Linux_PAM) to secure authentication to your system. [14. PAM](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam) has some tips on this.

On Red Hat distributions you can use [`authselect`](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_authentication_and_authorization_in_rhel/configuring-user-authentication-using-authselect_configuring-authentication-and-authorization-in-rhel) to configure this e.g.:

```bash
sudo authselect select <profile_id, default: sssd> with-faillock without-nullok with-pamaccess
```

On systems where [`pam_faillock`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) is not available, consider using [`pam_tally2`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) instead.

### USB port protection

To better protect your [USB](https://en.wikipedia.org/wiki/USB) ports from attacks such as [BadUSB](https://en.wikipedia.org/wiki/BadUSB) we recommend [USBGuard](https://github.com/USBGuard/usbguard). USBGuard has [documentation](https://github.com/USBGuard/usbguard#documentation) as does the [Arch Wiki](https://wiki.archlinux.org/title/USBGuard).

Another alternative option if you’re using the [linux-hardened](#linux-hardened) is the [`deny_new_usb`](https://github.com/GrapheneOS/linux-hardened/commit/96dc427ab60d28129b36362e1577b6673b0ba5c4) sysctl. See [Preventing USB Attacks with `linux-hardened`](https://blog.lizzie.io/preventing-usb-attacks-with-linux-hardened.html).

### Secure Boot

[Secure Boot](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_Boot) can be used to secure the boot process by preventing the loading of [unsigned](https://en.wikipedia.org/wiki/Public-key_cryptography) [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) drivers or [boot loaders](https://en.wikipedia.org/wiki/Bootloader). Some guidance for this is provided in [21. Physical security](https://madaidans-insecurities.github.io/guides/linux-hardening.html#physical-security) and [21.4 Verified boot](https://madaidans-insecurities.github.io/guides/linux-hardening.html#verified-boot).

For further resources on Secure Boot we suggest taking a look at the following for instructional advice:

- The Archwiki’s [Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot) article. There are two main methods, the first is to use a [shim](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#shim), the second more complete way is to [use your own keys](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Using_your_own_keys).

For background of how Secure Boot works on Linux:

- [The Strange State of Authenticated Boot and Disk Encryption on Generic Linux Distributions](https://0pointer.net/blog/authenticated-boot-and-disk-encryption-on-linux.html)
- [Rod Smith’s Managing EFI Boot Loaders for Linux](https://www.rodsbooks.com/efi-bootloaders/)
- [Dealing with Secure Boot](https://www.rodsbooks.com/efi-bootloaders/secureboot.html)
- [Controlling Secure Boot](https://www.rodsbooks.com/efi-bootloaders/controlling-sb.html)

One of the problems with Secure Boot particularly on Linux is that only the [chainloader](https://en.wikipedia.org/wiki/Chain_loading#Chain_loading_in_boot_manager_programs) (shim), the [boot loader](https://en.wikipedia.org/wiki/Bootloader) (GRUB), and the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) are verified and that’s where verification stops. The [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) is often left unverified, unencrypted, and open up the window for an [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attack. There are a few things that can be done to reduce risk such as:

- Creating an [EFI Boot Stub](https://docs.kernel.org/admin-guide/efi-stub.html) that contains the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) and [microcode](https://en.wikipedia.org/wiki/Microcode). This EFI stub can then be signed. If you use [dracut](https://en.wikipedia.org/wiki/Dracut_(software)) this can easily be done with the [`--uefi-stub` switch](https://man7.org/linux/man-pages/man8/dracut.8.html) or the [`uefi_stub` config](https://www.man7.org/linux/man-pages/man5/dracut.conf.5.html) option.
- [Encrypting the boot partition](https://wiki.archlinux.org/title/GRUB#Encrypted_/boot). However, this has its own issues, the first being that [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) only supports [LUKS1](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) and not the newer default LUKS2 scheme. As the bootloader runs in [protected mode](https://en.wikipedia.org/wiki/Protected_mode) and the encryption module lacks [SSE acceleration](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) the boot process will take minutes to complete.
- Using [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module) to perform a [measured boot](https://www.krose.org/~krose/measured_boot).

After setting up Secure Boot it is crucial that you set a “firmware password” (also called a “supervisor password, “BIOS password” or “UEFI password”), otherwise an adversary can simply disable Secure Boot.

These recommendations can make you a little more resistant to [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, but they not good as a proper verified boot process such as that found on [Android](https://source.android.com/security/verifiedboot), [ChromeOS](https://support.google.com/chromebook/answer/3438631) or [Windows](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process).

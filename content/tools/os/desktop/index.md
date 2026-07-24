---
title: "Desktop/PC"
description: Linux distributions are commonly recommended for privacy protection and software freedom.
aliases:
- /desktop
- /en/desktop
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

Linux distributions are commonly recommended for privacy protection and software freedom. If you don't already use Linux, below are some distributions we suggest trying out, as well as some general privacy and security improvement tips that are applicable to many Linux distributions. Please note that some of our recommended software may not be packaged for your Linux distribution of choice.

- [General Linux Overview](../../../wiki/os/linux/index.md)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#fedora-linux" title="Fedora Linux" image="./fedora.svg" subtitle="Fedora Linux is our recommended desktop distribution for people new to Linux. Fedora generally adopts newer technologies (e.g., Wayland and PipeWire) before other distributions. These new technologies often come with improvements in security, privacy, and usability in general." >}}
  {{< card link="#opensuse-tumbleweed" title="openSUSE Tumbleweed" image="./opensuse-tumbleweed.svg" subtitle="openSUSE Tumbleweed is a stable rolling release distribution. openSUSE Tumbleweed uses Btrfs and Snapper to ensure that snapshots can be rolled back should there be a problem." >}}
  {{< card link="#arch-linux" title="Arch Linux" image="./archlinux.svg" subtitle="Arch Linux is a lightweight, do-it-yourself (DIY) distribution, meaning that you only get what you install. For more information see their FAQ." >}}
  {{< card link="#fedora-atomic-desktops" title="Fedora Atomic Desktops" image="./fedora.svg" subtitle="Fedora Atomic Desktops are variants of Fedora which use the rpm-ostree package manager and have a strong focus on containerized workflows and Flatpak for desktop applications. All of these variants follow the same release schedule as Fedora Workstation, benefiting from the same fast updates and staying very close to upstream." >}}
  {{< card link="#nixos" title="NixOS" image="./nixos.svg" subtitle="NixOS is an independent distribution based on the Nix package manager with a focus on reproducibility and reliability." >}}
  {{< card link="#whonix" title="Whonix" image="./whonix.svg" subtitle="Whonix is based on Kicksecure, a security-focused fork of Debian. It aims to provide privacy, security, and anonymity on the internet. Whonix is best used in conjunction with Qubes OS." >}}
  {{< card link="#tails" title="Tails" image="./tails.svg" subtitle="Tails is a live operating system based on Debian that routes all communications through Tor, which can boot on on almost any computer from a DVD, USB stick, or SD card installation. It uses Tor to preserve privacy and anonymity while circumventing censorship, and it leaves no trace of itself on the computer it is used on after it is powered off." >}}
  {{< card link="#qubes-os" title="Qubes OS" image="./qubes_os.svg" subtitle="Qubes OS is an open-source operating system designed to provide strong security for desktop computing through secure virtual machines (or “qubes”). Qubes is based on Xen, the X Window System, and Linux. It can run most Linux applications and use most of the Linux drivers." >}}
  {{< card link="#secureblue" title="Secureblue" image="./secureblue.svg" subtitle="Secureblue is a security-focused operating system based on Fedora Atomic Desktops. It includes a number of security features intended to proactively defend against the exploitation of both known and unknown vulnerabilities, and ships with Trivalent, their hardened, Chromium-based web browser." >}}
  {{< card link="#kicksecure" title="Kicksecure" image="./kicksecure.svg" subtitle="Kicksecure—in oversimplified terms—is a set of scripts, configurations, and packages that substantially reduce the attack surface of Debian. It covers a lot of privacy and hardening recommendations by default. It also serves as the base OS for Whonix." >}}
{{< /cards >}}
</div>

## Traditional Distributions

### Fedora Linux

{{< title-card logo="./fedora.svg" >}}

**Fedora Linux** is our recommended desktop distribution for people new to Linux. Fedora generally adopts newer technologies (e.g., [Wayland](https://wayland.freedesktop.org) and [PipeWire](https://pipewire.org)) before other distributions. These new technologies often come with improvements in security, privacy, and usability in general.

{{< cards >}}
  {{< card link="https://fedoraproject.org" title="Homepage" icon="home" >}}
  {{< card link="https://docs.fedoraproject.org/en-US/docs" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

Fedora comes in two primary desktop editions, [Fedora Workstation](https://fedoraproject.org/workstation), which uses the GNOME desktop environment, and [Fedora KDE Plasma Desktop](https://fedoraproject.org/kde), which uses KDE. Historically, Fedora Workstation has been more popular and widely recommended, but KDE has been gaining in popularity and provides an experience more similar to Windows, which may make transitioning to Linux easier for some. The security and privacy benefits of both editions are very similar, so it mostly comes down to personal preference.

Fedora has a semi-rolling release cycle. While some packages like the desktop environment are frozen until the next Fedora release, most packages (including the kernel) are updated frequently throughout the lifespan of the release. Each Fedora release is supported for one year, with a new version released every 6 months.

### openSUSE Tumbleweed

{{< title-card logo="./opensuse-tumbleweed.svg" >}}

**openSUSE Tumbleweed** is a stable rolling release distribution.

openSUSE Tumbleweed uses [Btrfs](https://en.wikipedia.org/wiki/Btrfs) and [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) to ensure that snapshots can be rolled back should there be a problem.

{{< cards >}}
  {{< card link="https://get.opensuse.org/tumbleweed" title="Homepage" icon="home" >}}
  {{< card link="https://doc.opensuse.org" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

As with the recommendation to avoid X11 in our [criteria](#criteria) for Linux distributions, we recommend avoiding desktop environments that support only the legacy X11 window system (for example, Xfce). Currently, KDE Plasma defaults to X11, but Wayland is supported.

Tumbleweed follows a rolling release model where each update is released as a snapshot of the distribution. When you upgrade your system, a new snapshot is downloaded. Each snapshot is run through a series of automated tests by [openQA](https://openqa.opensuse.org) to ensure its quality.

### Arch Linux

{{< title-card logo="./archlinux.svg" >}}

**Arch Linux** is a lightweight, do-it-yourself (DIY) distribution, meaning that you only get what you install. For more information see their [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).

{{< cards >}}
  {{< card link="https://archlinux.org" title="Homepage" icon="home" >}}
  {{< card link="https://wiki.archlinux.org" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

Arch Linux has a rolling release cycle. There is no fixed release schedule and packages are updated very frequently.

Being a DIY distribution, you are [expected to set up and maintain](../../../wiki/os/linux/index.md#arch-based-distributions) your system on your own. Arch has an [official installer](https://wiki.archlinux.org/title/Archinstall) to make the installation process a little easier.

A large portion of [Arch Linux’s packages](https://reproducible.archlinux.org) are [reproducible](https://reproducible-builds.org)[^1].

## Atomic Distributions

**Atomic distributions** (sometimes also referred to as **immutable distributions**) are operating systems which handle package installation and updates by layering changes atop your core system image, rather than by directly modifying the system. Advantages of atomic distros include increased stability and the ability to easily roll back updates. See [*Traditional vs. Atomic Updates*](../../../wiki/os/linux/index.md#traditional-vs-atomic-updates) for more info.

### Fedora Atomic Desktops

{{< title-card logo="./fedora.svg" >}}

**Fedora Atomic Desktops** are variants of Fedora which use the `rpm-ostree` package manager and have a strong focus on containerized workflows and Flatpak for desktop applications. All of these variants follow the same release schedule as Fedora Workstation, benefiting from the same fast updates and staying very close to upstream.

{{< cards >}}
  {{< card link="https://fedoraproject.org/atomic-desktops" title="Homepage" icon="home" >}}
  {{< card link="https://docs.fedoraproject.org/en-US/emerging" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[Fedora Atomic Desktops](https://fedoramagazine.org/introducing-fedora-atomic-desktops) come in a variety of flavors depending on the desktop environment you prefer. As with the recommendation to avoid X11 in our [criteria](#criteria) for Linux distributions, we recommend avoiding flavors that support only the legacy X11 window system.

These operating systems differ from Fedora Workstation as they replace the [DNF](https://docs.fedoraproject.org/en-US/quick-docs/dnf) package manager with a much more advanced alternative called [`rpm-ostree`](https://coreos.github.io/rpm-ostree). The `rpm-ostree` package manager works by downloading a base image for the system, then overlaying packages over it in a [git](https://en.wikipedia.org/wiki/Git)-like commit tree. When the system is updated, a new base image is downloaded and the overlays will be applied to that new image.

After the update is complete, you will reboot the system into the new deployment. `rpm-ostree` keeps two deployments of the system so that you can easily roll back if something breaks in the new deployment. There is also the option to pin more deployments as needed.

[Flatpak](https://flatpak.org) is the primary package installation method on these distributions, as `rpm-ostree` is only meant to overlay packages that cannot stay inside a container on top of the base image.

As an alternative to Flatpaks, there is the option of [Toolbx](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox) to create [Podman](https://podman.io) containers which mimic a traditional Fedora environment, a [useful feature](https://containertoolbx.org) for the discerning developer. These containers share a home directory with the host operating system.

### NixOS

{{< title-card logo="./nixos.svg" >}}

**NixOS** is an independent distribution based on the Nix package manager with a focus on reproducibility and reliability.

{{< cards >}}
  {{< card link="https://nixos.org" title="Homepage" icon="home" >}}
  {{< card link="https://nixos.org/learn.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

NixOS’s package manager keeps every version of every package in a different folder in the **Nix store**. Due to this you can have different versions of the same package installed on your system. After the package contents have been written to the folder, the folder is made read-only.

NixOS also provides atomic updates. It first downloads (or builds) the packages and files for the new system generation and then switches to it. There are different ways to switch to a new generation: you can tell NixOS to activate it after reboot, or you can switch to it at runtime. You can also *test* the new generation by switching to it at runtime, but not setting it as the current system generation. If something breaks during the update process, you can just reboot to return to a working version of your system.

The Nix package manager uses a purely functional language—which is also called Nix—to define packages.

[Nixpkgs](https://github.com/nixos/nixpkgs) (the main source of packages) are contained in a single GitHub repository. You can also define your own packages in the same language and then easily include them in your config.

Nix is a source-based package manager; if there’s no pre-built available in the binary cache, Nix will just build the package from source using its definition. It builds each package in a sandboxed *pure* environment, which is as independent of the host system as possible. Binaries built with this method are reproducible[^1].

## Anonymity-Focused Distributions

### Whonix

{{< title-card logo="./whonix.svg" >}}

**Whonix** is based on [Kicksecure](#kicksecure), a security-focused fork of Debian. It aims to provide privacy, security, and [anonymity](../../../wiki/basics/common-threats/index.md#anonymity-vs-privacy) on the internet. Whonix is best used in conjunction with [Qubes OS](#qubes-os).

{{< cards >}}
  {{< card link="https://whonix.org" title="Homepage" icon="home" >}}
  {{< card link="https://whonix.org/wiki/Documentation" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

Whonix is meant to run as two virtual machines: a “Workstation” and a Tor “Gateway.” All communications from the Workstation must go through the Tor gateway. This means that even if the Workstation is compromised by malware of some kind, the true IP address remains hidden.

Some of its features include Tor Stream Isolation, [keystroke anonymization](https://whonix.org/wiki/Keystroke_Deanonymization#Kloak), [encrypted swap](https://github.com/Whonix/swap-file-creator), and a hardened memory allocator. Future versions of Whonix will likely include [full system AppArmor policies](https://github.com/roddhjav/apparmor.d) and a [sandboxed app launcher](https://whonix.org/wiki/Sandbox-app-launcher) to fully confine all processes on the system.

Whonix is best used [in conjunction with Qubes](https://whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers). We have a [recommended guide](../../../wiki/os/qubes/index.md#connecting-to-tor-via-a-vpn) on configuring Whonix in conjunction with a VPN ProxyVM in Qubes to hide your Tor activities from your ISP.

### Tails

{{< title-card logo="./tails.svg" >}}

**Tails** is a live operating system based on Debian that routes all communications through Tor, which can boot on on almost any computer from a DVD, USB stick, or SD card installation. It uses [Tor](../../software/tor/index.md) to preserve privacy and [anonymity](../../../wiki/basics/common-threats/index.md#anonymity-vs-privacy) while circumventing censorship, and it leaves no trace of itself on the computer it is used on after it is powered off.

{{< cards >}}
  {{< card link="https://tails.net" title="Homepage" icon="home" >}}
  {{< card link="https://tails.net/doc/index.en.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

> [!WARNING]
> Tails [doesn't erase](https://gitlab.tails.boum.org/tails/tails/-/issues/5356) the [video memory](https://en.wikipedia.org/wiki/Dual-ported_video_RAM) when shutting down. When you restart your computer after using Tails, it might briefly display the last screen that was displayed in Tails. If you shut down your computer instead of restarting it, the video memory will erase itself automatically after being unpowered for some time.

Tails is great for counter forensics due to amnesia (meaning nothing is written to the disk); however, it is not a hardened distribution like Whonix. It lacks many anonymity and security features that Whonix has and gets updated much less often (only once every six weeks). A Tails system that is compromised by malware may potentially bypass the transparent proxy, allowing for the user to be deanonymized.

Tails includes [uBlock Origin](../../software/browser-extensions/index.md#ublock-origin) in Tor Browser by default, which may potentially make it easier for adversaries to fingerprint Tails users. [Whonix](#whonix) virtual machines may be more leak-proof, however they are not amnesic, meaning data may be recovered from your storage device.

By design, Tails is meant to completely reset itself after each reboot. Encrypted [persistent storage](https://tails.net/doc/persistent_storage/index.en.html) can be configured to store some data between reboots.

## Security-focused Distributions

<small>Protects against the following threat(s):</small>
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)

### Qubes OS

{{< title-card logo="./qubes_os.svg" >}}

**Qubes OS** is an open-source operating system designed to provide strong security for desktop computing through secure virtual machines (or "qubes"). Qubes is based on Xen, the X Window System, and Linux. It can run most Linux applications and use most of the Linux drivers.

{{< cards >}}
  {{< card link="https://qubes-os.org" title="Homepage" icon="home" >}}
  {{< card link="https://qubes-os.org/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

Qubes OS secures the computer by isolating subsystems (e.g., networking, USB, etc.) and applications in separate *qubes*. Should one part of the system be compromised via an exploit in a [targeted attack](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals), the extra isolation is likely to protect the rest of the *qubes* and the core system.

For further information about how Qubes works, read our full [Qubes OS overview](../../../wiki/os/qubes/index.md) page.

### Secureblue

{{< title-card logo="./secureblue.svg" >}}

**Secureblue** is a security-focused operating system based on [Fedora Atomic Desktops](#fedora-atomic-desktops). It includes a number of [security features](https://secureblue.dev/features) intended to proactively defend against the exploitation of both known and unknown vulnerabilities, and ships with [Trivalent](https://github.com/secureblue/Trivalent), their hardened, Chromium-based web browser.

{{< cards >}}
  {{< card link="https://secureblue.dev" title="Homepage" icon="home" >}}
  {{< card link="https://secureblue.dev/install" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

**Trivalent** is Secureblue's hardened Chromium for desktop Linux inspired by [GrapheneOS](../android/distributions/index.md#grapheneos)'s Vanadium browser.

Secureblue also provides GrapheneOS's [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc) and enables it globally (including for Flatpaks).

### Kicksecure

While we [recommend against](../../../wiki/os/linux/index.md#release-cycle) "perpetually outdated" distributions like Debian for desktop use in most cases, Kicksecure is a Debian-based operating system which has been hardened to be much more than a typical Linux install.

{{< title-card logo="./kicksecure.svg" >}}

**Kicksecure**—in oversimplified terms—is a set of scripts, configurations, and packages that substantially reduce the attack surface of Debian. It covers a lot of privacy and hardening recommendations by default. It also serves as the base OS for [Whonix](#whonix).

{{< cards >}}
  {{< card link="https://kicksecure.com" title="Homepage" icon="home" >}}
  {{< card link="https://kicksecure.com/wiki/Privacy_Policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

## Criteria

Choosing a Linux distro that is right for you will come down to a huge variety of personal preferences, and this page is **not** meant to be an exhaustive list of every viable distribution. Our Linux overview page has some advice on [choosing a distro](../../../wiki/os/linux/index.md#choosing-your-distribution) in more detail. The distros on *this* page do all generally follow the guidelines we covered there, and all meet these standards:

- Free and open source.
- Receives regular software and kernel updates.
- Avoids X11, as its last major release was [more than a decade](https://x.org/wiki/Releases) ago.
    - The notable exception here is Qubes, but the [isolation issues](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation) which X11 typically has are avoided by virtualization. This isolation only applies to apps *running in different qubes* (virtual machines); apps running in the *same* qube are not protected from each other.
- Supports full-disk encryption during installation.
- Doesn't freeze regular releases for more than 1 year.
    - We [recommend against](../../../wiki/os/linux/index.md#release-cycle) "Long Term Support" or "stable" distro releases for desktop usage.
- Supports a wide variety of hardware.
- Preference towards larger projects.
    - Maintaining an operating system is a major challenge, and smaller projects have a tendency to make more avoidable mistakes, or delay critical updates (or worse, disappear entirely). We lean towards projects which will likely be around 10 years from now (whether that's due to corporate backing or very significant community support), and away from projects which are hand-built or have a small number of maintainers.

In addition, [our standard criteria](../../../about/criteria.md) for recommended projects still applies. **Please note we are not affiliated with any of the projects we recommend.**

[^1]: Reproducibility entails the ability to verify that packages and binaries made available to the end user match the source code, which can be useful against potential [Supply Chain Attacks](../../../wiki/basics/common-threats/index.md#attacks-against-certain-organizations){ .pg-viridian }.

---
title: "Linux"
icon: simple/linux
---
Linux distributions are commonly recommended for privacy protection and software freedom.

- [General Linux Overview :material-arrow-right-drop-circle:](linux-desktop/overview.md)

If you don't already use Linux, below are some distributions we suggest trying out, as well as some general privacy and security improvement tips that are applicable to many Linux distributions.

## Traditional Distributions

### Fedora Workstation

!!! recommendation

    ![Fedora logo](assets/img/linux-desktop/fedora-workstation.svg){ align=right }

    **Fedora Workstation** is our recommended distribution for people new to Linux. Fedora generally adopts newer technologies before other distributions e.g., [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), and soon, [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). These new technologies often come with improvements in security, privacy, and usability in general.

    [:octicons-home-16: Homepage](https://getfedora.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/docs/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribute }

Fedora has a semi-rolling release cycle. While some packages like [GNOME](https://www.gnome.org) are frozen until the next Fedora release, most packages (including the kernel) are updated frequently throughout the lifespan of the release. Each Fedora release is supported for one year, with a new version released every 6 months.

### openSUSE Tumbleweed

!!! recommendation

    ![openSUSE Tumbleweed logo](assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }

    **openSUSE Tumbleweed** is a stable rolling release distribution.

    openSUSE Tumbleweed has a [transactional update](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) system that uses [Btrfs](https://en.wikipedia.org/wiki/Btrfs) and [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) to ensure that snapshots can be rolled back should there be a problem.

    [:octicons-home-16: Homepage](https://get.opensuse.org/tumbleweed/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://doc.opensuse.org/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://shop.opensuse.org/){ .card-link title=Contribute }

Tumbleweed follows a rolling release model where each update is released as a snapshot of the distribution. When you upgrade your system, a new snapshot is downloaded. Each snapshot is run through a series of automated tests by [openQA](https://openqa.opensuse.org) to ensure its quality.

### Arch Linux

!!! recommendation

    ![Arch logo](assets/img/linux-desktop/archlinux.svg){ align=right }

    **Arch Linux** is a lightweight, do-it-yourself (DIY) distribution meaning that you only get what you install. For more information see their [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).

    [:octicons-home-16: Homepage](https://archlinux.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.archlinux.org/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://archlinux.org/donate/){ .card-link title=Contribute }

Arch Linux has a rolling release cycle. There is no fixed release schedule and packages are updated very frequently.

Being a DIY distribution, you are [expected to set up and maintain](linux-desktop/overview.md#arch-based-distributions) your system on your own. Arch has an [official installer](https://wiki.archlinux.org/title/Archinstall) to make the installation process a little easier.

A large portion of [Arch Linux’s packages](https://reproducible.archlinux.org) are [reproducible](https://reproducible-builds.org).

## Immutable Distributions

### Fedora Silverblue

!!! recommendation

    ![Fedora Silverblue logo](assets/img/linux-desktop/fedora-silverblue.svg){ align=right }

    **Fedora Silverblue** and **Fedora Kinoite** are immutable variants of Fedora with a strong focus on container workflows. Silverblue comes with the [GNOME](https://www.gnome.org/) desktop environment while Kinoite comes with [KDE](https://kde.org/). Silverblue and Kinoite follow the same release schedule as Fedora Workstation, benefiting from the same fast updates and staying very close to upstream.

    [:octicons-home-16: Homepage](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/fedora-silverblue/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribute }

Silverblue (and Kinoite) differ from Fedora Workstation as they replace the [DNF](https://fedoraproject.org/wiki/DNF) package manager with a much more advanced alternative called [`rpm-ostree`](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/). The `rpm-ostree` package manager works by downloading a base image for the system, then overlaying packages over it in a [git](https://en.wikipedia.org/wiki/Git)-like commit tree. When the system is updated, a new base image is downloaded and the overlays will be applied to that new image.

After the update is complete you will reboot the system into the new deployment. `rpm-ostree` keeps two deployments of the system so that you can easily rollback if something breaks in the new deployment. There is also the option to pin more deployments as needed.

[Flatpak](https://www.flatpak.org) is the primary package installation method on these distributions, as `rpm-ostree` is only meant to overlay packages that cannot stay inside of a container on top of the base image.

As an alternative to Flatpaks, there is the option of [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) to create [Podman](https://podman.io) containers with a shared home directory with the host operating system and mimic a traditional Fedora environment, which is a [useful feature](https://containertoolbx.org) for the discerning developer.

### NixOS

!!! recommendation

    ![NixOS logo](assets/img/linux-desktop/nixos.svg){ align=right }

    NixOS is an independent distribution based on the Nix package manager with a focus on reproducibility and reliability.

    [:octicons-home-16: Homepage](https://nixos.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://nixos.org/learn.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://nixos.org/donate.html){ .card-link title=Contribute }

NixOS’s package manager keeps every version of every package in a different folder in the **Nix store**. Due to this you can have different versions of the same package installed on your system. After the package contents have been written to the folder, the folder is made read-only.

NixOS also provides atomic updates; first it downloads (or builds) the packages and files for the new system generation and then switches to it. There are different ways to switch to a new generation; you can tell NixOS to activate it after reboot or you can switch to it at runtime. You can also *test* the new generation by switching to it at runtime, but not setting it as the current system generation. If something in the update process breaks, you can just reboot and automatically and return to a working version of your system.

Nix the package manager uses a purely functional language - which is also called Nix - to define packages.

[Nixpkgs](https://github.com/nixos/nixpkgs) (the main source of packages) are contained in a single GitHub repository. You can also define your own packages in the same language and then easily include them in your config.

Nix is a source-based package manager; if there’s no pre-built available in the binary cache, Nix will just build the package from source using its definition. It builds each package in a sandboxed *pure* environment, which is as independent of the host system as possible, thus making binaries reproducible.

## Anonymity-Focused Distributions

### Whonix

!!! recommendation

    ![Whonix logo](assets/img/linux-desktop/whonix.svg){ align=right }

    **Whonix** is based on [Kicksecure](https://www.whonix.org/wiki/Kicksecure), a security-focused fork of Debian. It aims to provide privacy, security, and anonymity on the internet. Whonix is best used in conjunction with [Qubes OS](qubes.md).

    [:octicons-home-16: Homepage](https://www.whonix.org/){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://www.dds6qkxpwdeubwucdiaord2xgbbeyds25rbsgr73tbfpqpt4a6vjwsyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://www.whonix.org/wiki/Documentation){ .card-link title=Documentation}
    [:octicons-heart-16:](https://www.whonix.org/wiki/Donate){ .card-link title=Contribute }

Whonix is meant to run as two virtual machines: a “Workstation” and a Tor “Gateway.” All communications from the Workstation must go through the Tor gateway. This means that even if the Workstation is compromised by malware of some kind, the true IP address remains hidden.

Some of its features include Tor Stream Isolation, [keystroke anonymization](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak), [encrypted swap](https://github.com/Whonix/swap-file-creator), and a hardened memory allocator.

Future versions of Whonix will likely include [full system AppArmor policies](https://github.com/Whonix/apparmor-profile-everything) and a [sandbox app launcher](https://www.whonix.org/wiki/Sandbox-app-launcher) to fully confine all processes on the system.

Whonix is best used [in conjunction with Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers), Qubes-Whonix has various [disadvantages](https://forums.whonix.org/t/qubes-whonix-security-disadvantages-help-wanted/8581) when compared to other hypervisors.

### Tails

!!! recommendation

    ![Tails logo](assets/img/linux-desktop/tails.svg){ align=right }

    **Tails** is a live operating system based on Debian that routes all communications through Tor, which can boot on on almost any computer from a DVD, USB stick, or SD card installation. It uses [Tor](tor.md) to preserve privacy and anonymity while circumventing censorship, and it leaves no trace of itself on the computer it is used on after it is powered off.

    [:octicons-home-16: Homepage](https://tails.boum.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://tails.boum.org/doc/index.en.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://tails.boum.org/donate/){ .card-link title=Contribute }

Tails is great for counter forensics due to amnesia (meaning nothing is written to the disk); however, it is not a hardened distribution like Whonix. It lacks many anonymity and security features that Whonix has and gets updated much less often (only once every six weeks). A Tails system that is compromised by malware may potentially bypass the transparent proxy allowing for the user to be deanonymized.

Tails also installs uBlock Origin in Tor Browser by default, which potentially makes it easier for adversaries to fingerprint Tails users, and increases the attack surface of the browser. For all of these reasons, if your only goal is to browse the internet anonymously, Tails is not as good of a choice as using [Whonix](linux-desktop.md/#whonix) with [Qubes OS](qubes.md), which is much more secure and leakproof. If your goal is to use a computer without leaving any trace afterwards, Tails may be a good solution for you.

By design, Tails is meant to completely reset itself after each reboot. Encrypted [persistent storage](https://tails.boum.org/doc/first_steps/persistence/index.en.html) can be configured to store some data between reboots.

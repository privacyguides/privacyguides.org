---
title: Linux Overview
icon: fontawesome/brands/linux
---
It is often believed that [open source](https://en.wikipedia.org/wiki/Open-source_software) software is inherently secure because the source code is available. There is an expectation that community verification occurs regularly; however, this isn’t always [the case](https://seirdy.one/2022/02/02/floss-security.html). It does depend on a number of factors, such as project activity, developer experience, level of rigour applied to [code reviews](https://en.wikipedia.org/wiki/Code_review), and how often attention is given to specific parts of the [codebase](https://en.wikipedia.org/wiki/Codebase) that may go untouched for years.

At the moment, desktop GNU/Linux does have some areas that could be better improved when compared to their proprietary counterparts, e.g:

- A verified boot chain, unlike Apple’s [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (with [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android’s [Verified Boot](https://source.android.com/security/verifiedboot) or Microsoft Windows’s [boot process](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) with [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). These features and hardware technologies can all help prevent persistent tampering by malware or [evil maid attacks](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- Strong sandboxing solution such as that found in [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), and [Android](https://source.android.com/security/app-sandbox). Commonly used Linux sandboxing solutions such as [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) and [Firejail](https://firejail.wordpress.com/) still have a long way to go
- Strong [exploit mitigations](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Despite these drawbacks, desktop GNU/Linux distributions are great if you want to:

- Avoid telemetry that often comes with proprietary operating systems
- Maintain [software freedom](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Have purpose built systems such as [Whonix](https://www.whonix.org) or [Tails](https://tails.boum.org/)

Our website generally uses the term “Linux” to describe desktop GNU/Linux distributions. Other operating systems which also use the Linux kernel such as ChromeOS, Android, and Qubes OS are not discussed here.

[Our Linux Recommendations :material-arrow-right:](../linux-desktop.md){ .md-button }

## Release cycle

We highly recommend that you choose distributions which stay close to the stable upstream software releases, often referred to as rolling release distributions. This is because frozen release cycle distributions often don’t update package versions and fall behind on security updates.

For frozen distributions, package maintainers are expected to backport patches to fix vulnerabilities (Debian is one such [example](https://www.debian.org/security/faq#handling)) rather than bump the software to the “next version” released by the upstream developer. Some security fixes [do not](https://arxiv.org/abs/2105.14565) receive a [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (particularly less popular software) at all and therefore do not make it into the distribution with this patching model. As a result minor security fixes are sometimes held back until the next major release.

We don’t believe holding packages back and applying interim patches is a good idea, as it diverges from the way the developer might have intended the software to work. [Richard Brown](https://rootco.de/aboutme/) has a presentation about this:

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U"
  title="Regular Releases are Wrong, Roll for your life"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

## Traditional vs Atomic updates

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

## “Security-focused” distributions

There is often some confusion about “security-focused” distributions and “pentesting” distributions. A quick search for “the most secure Linux distribution” will often give results like Kali Linux, Black Arch, and Parrot OS. These distributions are offensive penetration testing distributions that bundle tools for testing other systems. They don’t include any “extra security” or defensive mitigations intended for regular use.

## Arch-based distributions

Arch based distributions are not recommended for those new to Linux, regardless of the distribution. Arch does not have an distribution update mechanism for the underlying software choices. As a result you have to stay aware with current trends and adopt technologies as they supersede older practices on your own.

For a secure system, you are also expected to have sufficient Linux knowledge to properly set up security for their system such as adopting a [mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) system, setting up [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, hardening boot parameters, manipulating [sysctl](https://en.wikipedia.org/wiki/Sysctl) parameters, and knowing what components they need such as [Polkit](https://en.wikipedia.org/wiki/Polkit).

Anyone using the [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **must** be comfortable in auditing PKGBUILDs that they install from that service. AUR packages are community-produced content and are not vetted in any way, and therefore are vulnerable to software supply chain attacks, which has in fact happened [in the past](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR should always be used sparingly and often there is a lot of bad advice on various pages which direct people to blindly use [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) without sufficient warning. Similar warnings apply to using third party Personal Package Archives (PPAs) on Debian based distributions or Community Projects (COPR) on Fedora.

If you are experienced with Linux and wish to use an Arch-based distribution, we only recommend Arch Linux proper, not any of its derivatives. We recommend against these two Arch derivatives specifically:

- **Manjaro**: This distribution holds packages back for 2 weeks to make sure that their own changes don’t break, not to make sure that upstream is stable. When AUR packages are used, they are often built against the latest [libraries](https://en.wikipedia.org/wiki/Library_(computing)) from Arch’s repositories.
- **Garuda**: They use [Chaotic-AUR](https://aur.chaotic.cx/) which automatically and blindly compiles packages from the AUR. There is no verification process to make sure that the AUR packages don’t suffer from supply chain attacks.

## Linux-libre kernel and “Libre” distributions

We strongly recommend **against** using the Linux-libre kernel, since it [removes security mitigations](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) and [suppresses kernel warnings](https://news.ycombinator.com/item?id=29674846) about vulnerable microcode for ideological reasons.

--8<-- "includes/abbreviations.en.md"

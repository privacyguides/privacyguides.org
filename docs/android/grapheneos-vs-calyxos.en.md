---
title: "Why we recommend GrapheneOS over CalyxOS"
icon: 'material/cellphone-cog'
---

GrapheneOS and CalyxOS are often compared as similar options for people looking for an alternative Android OS for their Pixel devices. Below are some of the reasons why we recommend GrapheneOS over CalyxOS.

## Update Frequency

CalyxOS has a track record of being slower to apply security and feature updates to its OS and core applications than other custom Android operating systems. Timely security updates are one of the most important factors to consider when determining whether an OS is secure enough for regular use, which is a requirement for privacy.

In contrast to that, GrapheneOS manages to stay close to upstream and in some cases even [deliver updates even before the stock OS does](https://grapheneos.org/features#more-complete-patching).

As an example, [GrapheneOS's first Android 12 release](https://grapheneos.org/releases#2021102020) was in October 2021, whereas [CalyxOS moved to Android 12](https://calyxos.org/news/2022/01/19/android-12-changelog/) in January 2022.

## Sandboxed Google Play vs Privileged microG

When Google Play Services are used on GrapheneOS, they are confined using the highly restrictive, default [`untrusted_app`](https://source.android.com/security/selinux/concepts) [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) domain. As a result, you have full control as to what these apps can access via permissions, just like any other app you install. Additionally, you can selectively choose which profile(s) to install the Sandboxed Google Play in.

microG is a partially open-source re-implementation of Google Play Services.[^1] On CalyxOS, it runs in the highly privileged [`system_app`](https://source.android.com/security/selinux/concepts) SELinux domain like regular Google Play Services, and it uses [signature spoofing](https://github.com/microg/GmsCore/wiki/Signature-Spoofing) to masquerade as Google Play Services. This is less secure than Sandboxed Google Play's approach, which does not need access to sensitive system APIs.

When using Sandboxed Google Play, you have the option to reroute location requests to the Play Services API back to the OS location API, which uses satellite based location services. With microG, you have the option to choose between different backend location providers, including *shifting trust* to another location backend, like Mozilla; using [DejaVu](https://github.com/n76/DejaVu), a location backend that locally collects and saves RF-based location data to an offline database which can be used when GPS is not available; or to simply not use a network location backend at all.

Network location providers like Play Services or Mozilla rely the on the MAC addresses of surrounding WiFi access points and Bluetooth devices being submitted for location approximation. Choosing a network location like Mozilla to use with microG provides little to no privacy benefit over Google because you are still submitting the same data and trusting them to not profile you.

Local RF location backends like DejaVu require that the phone has a working GPS first for the local RF data collected to be useful. This makes them less effective as location providers, as the job of a location provider is to assist location approximation when satellite based services are not working.

If your [threat model](threat-modeling.md) requires protecting your location or the MAC addresses of nearby devices, rerouting location requests to the OS location API is probably the best option. The benefit brought by microG's custom location backend is minimal at best when compared to Sandboxed Google Play.

In terms of application compatibility, ==Sandboxed Google Play on GrapheneOS is always going to be more compatible== as it is the same code as what is released by Google. microG is a reimplementation of these services. As a result, it only supports the various parts that have been reimplemented, meaning some things such as [Google Play Games](https://play.google.com/googleplaygames) and [In-app Billing API](https://android-doc.github.io/google/play/billing/api.html) are not yet supported.

Larger apps, especially games, require [Play Asset Delivery](https://android-developers.googleblog.com/2020/06/introducing-google-play-asset-delivery.html) to be installed, which is currently not implemented in microG. Authentication using [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) with online services on Android also relies on Play Services, and does not currently work with microG.

[^1]: It should be noted that microG still uses proprietary Google binaries for some of its components such as DroidGuard. Push notifications, if enabled, still go through Google's servers just like with Play Services. Outside of default microG setups like on CalyxOS, it is possible to run microG in the unprivileged [`untrusted app`](https://source.android.com/security/selinux/concepts) SELinux domain and without the signature spoofing patch. However, microG's functionality and compatibility, which is already not nearly as broad as Sandboxed Google Play, will greatly diminish.

## Privileged eSIM Activation Application

Currently, eSIM activation is tied to a privileged proprietary application by Google. The app has the `READ_PRIVILEGED_PHONE_STATE` permission, giving Google access to your hardware identifiers such as the IMEI.

On GrapheneOS, the app comes disabled and you can *optionally* enable it after installing Sandboxed Google Play.

On CalyxOS, the app comes installed by default (regardless of whether you choose to have microG or not) and you cannot opt-out. This means that Google still has access to your hardware identifiers regardless of whether or not you need eSIM activation and they can be accessed persistently.

## Privileged App Extensions

Android 12 comes with special support for seamless app updates with [third-party app stores](https://android-developers.googleblog.com/2020/09/listening-to-developer-feedback-to.html). The popular Free and Open-Source Software (FOSS) repository [F-Droid](https://f-droid.org) doesn't implement this feature and requires a [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged) to be included with the Android distribution in order to have unattended app updates.

CalyxOS includes the [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged), which may lower device security.

On the other hand, GrapheneOS officially recommends [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play) instead. Many FOSS Android apps are also in Google's Play Store but sometimes they are not (like [NewPipe](../video-streaming.md#newpipe)). In those cases, you can [keep up with updates using RSS](../android.md#manually-with-rss-notifications).

## Profiles

GrapheneOS significantly improves [user profiles](overview.md#user-profiles) in [multiple ways](https://grapheneos.org/features#improved-user-profiles), such as increasing the limit of how many profiles you can create (16 instead of the standard 4), allowing you to log out of user profiles, disabling app installation, and notification forwarding. All of these improvements make it so user profiles can be daily driven without sacrificng too much usability.

CalyxOS doesn't feature any improvements to user profiles over AOSP, and instead includes a device controller app so that the [work profile](overview.md#work-profile) can be used without needing to download a third party app such as [Shelter](../android.md#shelter). However, work profiles are not nearly as flexible (as you're limited to only one) and don't provide the same amount of isolation and security.

## Additional Hardening

GrapheneOS improves upon [AOSP](https://source.android.com/) security with:

- **Hardened WebView:** Vanadium WebView requires [64-bit](https://en.wikipedia.org/wiki/64-bit_computing) processes on the [WebView](https://developer.android.com/reference/android/webkit/WebView) process and disables legacy [32-bit](https://en.wikipedia.org/wiki/32-bit_computing) processes. It uses hardened compiler options such as [`-fwrapv`](https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html) and [`-fstack-protector-strong`](https://gcc.gnu.org/onlinedocs/gcc-4.9.3/gcc/Optimize-Options.html), which can help protect against [stack buffer overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow). [API](https://en.wikipedia.org/wiki/API)s such as the [battery status API](https://chromestatus.com/feature/4537134732017664) are disabled for privacy reasons. All system apps on GrapheneOS use the Vanadium WebView which means that apps which use WebView will also benefit from Vanadium's hardening. The [Vanadium patch set](https://github.com/GrapheneOS/Vanadium) is a lot more comprehensive than CalyxOS's [Chromium patch set](https://gitlab.com/CalyxOS/chromium-patches) which is derived from it.
- **Hardened Kernel:** GrapheneOS kernel includes some hardening from the [linux-hardened](https://github.com/GrapheneOS/linux-hardened) project and the [Kernel Self Protection Project (KSPP)](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project). CalyxOS uses the [same kernel](https://calyxos.org/docs/development/build/kernel/) as regular Android with some minor modifications.
- **Hardened Memory Allocator:** GrapheneOS uses the [hardened malloc](https://github.com/GrapheneOS/hardened_malloc) subproject as its memory allocator. This focuses on hardening against [memory heap corruption](https://en.wikipedia.org/wiki/Memory_corruption). CalyxOS uses the default AOSP [Scudo Malloc](https://source.android.com/devices/tech/debug/scudo), which is generally [less effective](https://twitter.com/danielmicay/status/1033671709197398016). Hardened Malloc has uncovered vulnerabilities in AOSP which have been [fixed](https://github.com/GrapheneOS/platform_system_core/commit/be11b59725aa6118b0e1f0712572e835c3d50746) by GrapheneOS such as [CVE-2021-0703](https://nvd.nist.gov/vuln/detail/CVE-2021-0703).
- **Secure Exec Spawning:** GrapheneOS [spawns](https://en.wikipedia.org/wiki/Spawn_(computing)) fresh processes as opposed to using the [Zygote model](https://ayusch.com/android-internals-the-android-os-boot-process) used by AOSP and CalyxOS. The Zygote model weakens [Address Space Layout Randomization](https://en.wikipedia.org/wiki/Address_space_layout_randomization) (ASLR) and is considered [less secure](https://wenke.gtisc.gatech.edu/papers/morula.pdf). Creating [fresh processes](https://grapheneos.org/usage#exec-spawning) is safer but will have some performance penalty when launching a new application. These penalties are not really noticeable unless you have an [old device](https://support.google.com/nexus/answer/4457705) with slow storage such as the Pixel 3a/3a XL as it has [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC).

**Please note that these are just a few examples and are not an extensive list of GrapheneOS's hardening**. For a more complete list, please read GrapheneOS' [official documentation](https://grapheneos.org/features).

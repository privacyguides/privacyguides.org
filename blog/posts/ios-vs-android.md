---
date:
    created: 2025-05-19T20:15:00Z
categories:
    - Opinion
authors:
    - fria
tags:
    - Security
    - iOS
    - Android
preview:
---

# iOS vs Android Security: What Each Can Learn from the Other

Both Android and iOS run on the vast majority of our mobile devices, meaning they are entrusted with our most sensitive data. While they trade blows, there are areas where the two differ in security features and philosophy.

## Source Model

One of the most glaring differences is the source model of each operating system: iOS is *mostly* closed source while Android is *mostly* open source, I'll get to what I mean by that in a bit.

### iOS

iOS is a closed-source operating system, but it's based on the open-source [XNU kernel](https://github.com/apple-oss-distributions/xnu). The kernel handles almost everything on the operating system, so it's good that such a vital component is openly available to examine and do what you want with.

It's important to note that being open-source doesn't [inherently make software secure](https://seirdy.one/posts/2022/02/02/floss-security/), but it can be helpful for anyone wanting to audit the code.

I'd like to see Apple realease its entire operating system as open source in order to foster a spirit of openness and allow for [reproducible builds](https://reproducible-builds.org), allowing third parties to verify that the downloaded binaries match the released source code. As of now, that's impossible thanks to iOS's closed nature. A fully open-source iOS would also be the first step in third-party 

### Android

The beating heart of Android is the [Android Open Source Project](https://source.android.com) (AOSP). AOSP is essentially a complete open-source mobile operating system on its own. Android was designed from the beginning to be used by lots of different companies for their own mobile phone offerings, so the open nature is useful toward that goal.

However, AOSP is only a barebones operating system. OEMs are expected to add their own proprietary components to make their own, custom user experience. This is why most Android phones you buy are full of proprietary software like Facebook and other OEM software; companies that sell Android phones mainly use AOSP as a secure base to then run on their phones with proprietary drivers and their own custom Android. While the openness of AOSP is great, the OEMs making the phones ultimately ruin it.

Because AOSP is open source though, non-OEM third parties such as [GrapheneOS](https://grapheneos.org) have made their own fully open-source Android operating systems. GrapheneOS supports [reproducible builds](https://grapheneos.org/build#reproducible-builds).

Many custom AOSP operating systems, while being open source, actually reduce security from AOSP through delayed updates and not supporting important Android security features like [Verified Boot](https://source.android.com/docs/security/features/verifiedboot) (this problem applies to many open source Android operating systems, but not GrapheneOS as they explicitly aim to never downgrade security from AOSP).

A problem inherent to being downstream of AOSP, third-party operating systems also must wait for Google to [ship patches and updates](https://x.com/grapheneos/status/1964561043906048183) for them to apply. Ultimately they are up to the whims of the upstream project which is not ideal.

## Hardware

Hardware is vital to security. Modern smartphones are complicated, with lots of different processors and components, all runnng their own firmware and with their own potential security vulnerabilities. It's important to lock down these components as much as possible.

### iOS

Apple makes their own SoC on their platforms, which affords them a lot of control over how it works. You can read about how they integrate their hardware tightly on their [Apple Platform Security](https://support.apple.com/guide/security/hardware-security-overview-secf020d1074/web) page.

Apple has started to replace other components as well, with their newest phones boasting their N1 wireless chip that handles WiFi, Bluetooth, and Thread connectivity as well as their in-house cellular modem. Apple has a lot of control over the components in their phones which avoids supply-chain issues that other OEMs run into, with each third-party component relying on a third party to [patch security vulnerabilities](https://www.binarly.io/blog/the-firmware-supply-chain-security-is-broken-can-we-fix-it) and fix bugs in their firmware.

![Graphic showing the supply chain of various OEMs, and Apple bypassing the whole supply chain because they use their own firmware and hardware](../assets/images/ios-vs-android/binarly-graphic.png)

<small aria-hidden="true">Photo: [Binarly](https://www.binarly.io/blog/the-firmware-supply-chain-security-is-broken-can-we-fix-it)</small>

Apple can deal with vulnerabilities themselves when they're reported instead of waiting for a third party to fix it. According to their [docs](https://support.apple.com/guide/security/peripheral-processor-security-seca500d4f2b/1/web/1):

>Whenever possible, Apple works to reduce the number of peripheral processors necessary and to avoid designs that require firmware. But when separate processors with their own firmware are required, efforts are taken to help ensure an attacker can’t persist on that processor.

They take care to reduce attack surface by disabling debug interfaces and signing the firmware with keys stored in Apple's own hardware security modules.

Apple also supports all the important hardware security features you'd want, like a [Secure Element](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) for secure cryptography and secret storage, secure [biometric hardware](https://support.apple.com/guide/security/biometric-security-sec067eb0c9e/1/web/1) including 3D face scans for Face ID, hardware-backed [indicator lights](https://theapplewiki.com/wiki/Secure_Indicator_Light) for camera and microphone, [hardware killswitches](https://support.apple.com/guide/security/hardware-microphone-disconnect-secbbd20b00b/1/web/1) for the microphone on iPads, and [MTE](https://security.apple.com/blog/memory-integrity-enforcement/) for their latest iPhones.

Processors that deal with networking are isolated via an [IOMMU](https://support.apple.com/guide/security/security-features-connecting-wireless-sec8a67fa93d/1/web/1#sec7e0184776) so that they can't access each others' memory.

Overall, Apple does an excellent job with hardware security, most Android OEMs could stand to learn from them.

### Android

Because Android is used by so many different OEMs, you often don't know what you're getting in terms of hardware security. Android devices, particularly cheaper phones, often lack security features such as a [secure element](https://developer.android.com/privacy-and-security/keystore) or [MTE support](https://developer.android.com/ndk/guides/arm-mte#hwsupport).

There aren't really many examples in the Android world of an OEM with the same level of control over their hardware as Apple. Most Android OEMs are going to use third party SoC's and other components, which introduces possible supply chain issues with trusting third-party firmware and potential delays with security updates.


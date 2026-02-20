---
date:
    created: 2025-09-27T17:00:00Z
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

# iOS vs Android Security: What They Can Learn From Each Other

Both Android and iOS run on the vast majority of our mobile devices, meaning they are entrusted with our most sensitive data. While they trade blows, there are areas where the two differ in security features and philosophy.<!-- more -->

## Source Model

One of the most glaring differences is the source model of each operating system: iOS is *mostly* closed source while Android is *mostly* open source.

### iOS

iOS is a closed-source OS, but it's based on the open-source [XNU kernel](https://github.com/apple-oss-distributions/xnu). The kernel handles almost everything on the OS, so it's good that such a vital component is openly available to examine and test.

It's important to note that being open source [doesn't inherently make software secure](https://seirdy.one/posts/2022/02/02/floss-security), but it can be helpful for anyone wanting to audit the code.

I'd like to see Apple release the source code of its entire OS in order to foster a spirit of openness and enable [reproducible builds](https://reproducible-builds.org). The latter would allow third parties to verify that the downloaded binaries match the released source code. Currently, that's impossible due to iOS's closed nature. Furthermore, a fully open-source iOS would also be the first step in third-party OS support on the platform.

### Android

The beating heart of Android is the [Android Open Source Project](https://source.android.com) (AOSP). AOSP is essentially a complete, open-source mobile OS on its own. Android was designed from the beginning to be used by lots of different companies for each of their own mobile phone offerings, so the open nature is useful toward that goal.

However, AOSP is only a bare-bones OS. OEMs are expected to add their own proprietary components to make a custom user experience specific to their brand. This is why most Android phones you buy are pre-installed with proprietary software like [Samsung Notes](https://www.samsung.com/ae/apps/samsung-notes/) and other OEM software. Companies that sell Android phones mainly use AOSP as a secure base to then run on their phones with proprietary drivers and a custom Android OS. While the openness of AOSP is great, the OEMs producing the phones ultimately ruin it.

Because AOSP is open source though, non-OEM third parties such as [GrapheneOS](https://grapheneos.org) have made their own fully open-source Android OS. Unlike stock Android operating systems, GrapheneOS supports [reproducible builds](https://grapheneos.org/build#reproducible-builds).

Many open-source, custom AOSP-based operating systems actually reduce security from AOSP through delayed updates and lack of support for important Android security features like [Verified Boot](https://source.android.com/docs/security/features/verifiedboot). GrapheneOS is an exception as they explicitly aim to [never downgrade security from AOSP](https://grapheneos.org/features#:~:text=It%20starts%20from%20the%20strong%20baseline%20of%20the%20Android%20Open%20Source%20Project%20(AOSP)%20and%20takes%20great%20care%20to%20avoid%20increasing%20attack%20surface%20or%20hurting%20the%20strong%20security%20model.).

One problem custom Android operating systems face is the inherent issue of being [downstream](https://en.wikipedia.org/wiki/Downstream_(software_development)) of AOSP, which means third-party operating systems must wait for the upstream project to ship patches and updates. In this case, AOSP-based operating systems are [at the whim of Google](https://x.com/grapheneos/status/1964561043906048183) for timely security patches and updates, which is not ideal.

Google doesn't make Android code fully open source for the full development cycle; instead they have an [internal](https://source.android.com/docs/setup/contribute/release-lifecycle) branch that's not accessible to the public which they then release to the public when they deem it's ready, which means that any patches in this internal branch are not accessible to any project that exclusively relies on AOSP code.

## Kernel

The kernel is the low-level code that controls just about everything that happens in an operating system. As you can imagine, a kernel exploit could give an attacker highly privileged access to your system, so the kernel should be as locked down and as minimal as possible, with it being written in a memory-safe language like Rust. Unfortunately, operating systems until now have mostly resorted to a monolithic kernel design, which puts all duties of the operating system like memory management, device drivers, etc are in the kernel proper. This allows for more performance and less complexity but much more attack surface.

In contrast, a microkernel design puts as much as possible outside the kernel, which reduces the possible attack surface but increases the complexity and can have a performance hit.

### iOS

iOS uses their own open source XNU kernel for their operating systems. It's an interesting design as Apple originally took the [Mach](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/Mach/Mach.html) microkernel and combined it with code from the monolithic [FreeBSD](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/BSD/BSD.html#//apple_ref/doc/uid/TP30000905-CH214-TPXREF101) kernel to create the hybrid [XNU](https://github.com/apple-oss-distributions/xnu) kernel.

This leaves XNU in an interesting place where it's doesn't have the full attack surface of a monolithic kernel nor the full security of a microkernel, since 

>in OS X, Mach is linked with other kernel components into a single kernel address space. This is primarily for performance; it is much faster to make a direct call between linked components than it is to send messages or do remote procedure calls (RPC) between separate tasks. This modular structure results in a more robust and extensible system than a monolithic kernel would allow, without the performance penalty of a pure microkernel.

It's a bit frustrating to know that the only reason they didn't go with a full microkernel design seems to be performance; I'd like to think that nowadays computers are fast enough that it wouldn't matter so much. Apple should persue a microkernel design as soon as possible to avoid kernel exploits.

Apple has made good progress in pushing for things like drivers to run in userspace rather than kernelspace through [System Extensions](https://developer.apple.com/documentation/systemextensions), which replace [kernel extensions](https://support.apple.com/guide/security/securely-extending-the-kernel-sec8e454101b/web) that used to run in the kernel. This is a promising development and I think it represents a desire from Apple to move toward a microkernel.

### Exclaves

Apple as seemingly been working on a new feature inside their kernel called "[exclaves](https://www.theregister.com/2025/03/08/kernel_sanders_apple_rearranges_xnu/)" that appear to isolate and protect components of the kernel from the rest of the kernel.

An interesting example of how this is being used is to [secure](https://theapplewiki.com/wiki/Secure_Indicator_Light) the camera and microphone indicator lights so that a compromise of the kernel won't mean a compromise of the indicator lights.

There are references to a new "Secure Kernel" with a version string for "cL4" which may be a reference to the secure [seL4](https://sel4.systems) microkernel, possibly hinting even more at Apple's long-term ambitions.

This is great news, I hope we hear more about exclaves in the future, especially via an official announcement from Apple and not from digging through code.

#### Memory Safety

Unfortunately, the XNU kernel is still mostly written in C. This is a problem for any piece of software but *especially* so for the kernel. I really hope Apple makes an effort to start replacing the internals with a memory-safe language.

[Embedded Swift](https://docs.swift.org/embedded/documentation/embedded/introduction) is a low level programming language based on [Swift](https://www.swift.org) that aims to preserve the memory safety of Swift while being more suitable for low-level programs like embedded controllers or system kernels. While it's still experimental, I'll be watching. Apple has [switched](https://www.swift.org/blog/swift-at-apple-migrating-the-password-monitoring-service-from-java/) some of their servers to Swift to massive benefit and they've been switching more of their [iOS apps](https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/) to Swift, so I believe they will eventually work on switching the rest of their code to Swift in due time.

### Android

Android uses the Linux kernel, a monolithic kernel that's a favorite of sysadmins and open source enthusiasts alike. Unfortunately, the monolithic nature of Linux makes it a [massive attack surface](https://xcancel.com/GrapheneOS/status/1923966381965394221#m) for Android.

GrapheneOS even considers the Linux kernel to be their [main weakness](https://xcancel.com/GrapheneOS/status/1828148094661198105#m) at the moment, and have expressed a desire to switch to a microkernel at some point in the future.

### Memory Safety

The Linux kernel is mainly written in C, a memory-unsafe language.

The [Rust for Linux](https://rust-for-linux.com) project has successfully added support for Rust in Linux, and they're looking to increase the amount of memory safe code, so definitely watch out for that.

## Hardware

Hardware is vital to security. Modern smartphones pose a challenge with lots of processors and components, each with their own firmware and potential security vulnerabilities. It's important to lock down these components as much as possible.

### iOS

Apple makes their own SoC on their platforms, which affords them a lot of control over how it works. You can read about how they integrate their hardware tightly on their [Apple Platform Security](https://support.apple.com/guide/security/hardware-security-overview-secf020d1074/web) page.

Apple has started to replace other components as well, with their newest phones boasting their N1 wireless chip that handles Wi-Fi, Bluetooth, and Thread connectivity, as well as their in-house cellular modem. Apple has a lot of control over the components in their phones, which avoids supply chain issues that other OEMs encounter, where each component relies on a third party to [patch security vulnerabilities](https://binarly.io/blog/the-firmware-supply-chain-security-is-broken-can-we-fix-it) and fix bugs in their firmware.

![Graphic showing the supply chain of various OEMs, and Apple bypassing the whole supply chain because they use their own firmware and hardware](../assets/images/ios-vs-android/binarly-graphic.png)

<small aria-hidden="true">Photo: [Binarly](https://binarly.io/blog/the-firmware-supply-chain-security-is-broken-can-we-fix-it)</small>

Apple can patch vulnerabilities themselves when they're reported instead of waiting for a third party to fix them. According to their [docs](https://support.apple.com/guide/security/peripheral-processor-security-seca500d4f2b/1/web/1):

> Whenever possible, Apple works to reduce the number of peripheral processors necessary and to avoid designs that require firmware. But when separate processors with their own firmware are required, efforts are taken to help ensure an attacker can’t persist on that processor.

They take care to reduce attack surface by disabling debug interfaces and signing the firmware with keys stored in Apple's own hardware security modules.

Apple also supports all the important hardware security features you'd want, like a [Secure Element](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) for secure cryptography and secret storage, secure [biometric hardware](https://support.apple.com/guide/security/biometric-security-sec067eb0c9e/1/web/1) including 3D face scans for Face ID, hardware-backed [indicator lights](https://theapplewiki.com/wiki/Secure_Indicator_Light) for camera and microphone, [hardware kill switches](https://support.apple.com/guide/security/hardware-microphone-disconnect-secbbd20b00b/1/web/1) for the microphone on iPads, and [MTE](https://security.apple.com/blog/memory-integrity-enforcement) for their latest iPhones.

Processors that handle networking are isolated via an [IOMMU](https://support.apple.com/guide/security/security-features-connecting-wireless-sec8a67fa93d/1/web/1#sec7e0184776) so that they can't access each other's memory.

Overall, Apple does an excellent job with hardware security. Most Android OEMs could stand to learn from them.

### Android

Because Android is used by so many different OEMs, you often don't know what you're getting in terms of hardware security. Android devices, particularly cheaper phones, often lack security features such as a [secure element](https://developer.android.com/privacy-and-security/keystore) or [MTE support](https://developer.android.com/ndk/guides/arm-mte#hwsupport).

There aren't really many examples in the Android world of an OEM with the same level of control over their hardware as Apple. Most Android OEMs are going to use third party SoC's and other components, which introduces possible supply chain issues with trusting third-party firmware and potential delays with security updates.

## App Store

Android and iOS have very different approaches in terms of downloading and acquiring apps.

### iOS

iOS restricts app downloads to their own App Store. Apple claims this is for security purposes, but it restricts user freedom and makes it possible for Apple to [censor](https://9to5mac.com/2024/09/28/apple-cooperating-with-russia-to-remove-vpn-apps-from-app-store) apps in certain regions.

Apple has a [whitepaper](https://www.apple.com/privacy/docs/Building_a_Trusted_Ecosystem_for_Millions_of_Apps.pdf) explaining why they believe restricting to just the App Store is the best approach to security. Unfortuantely, malicious and fruadulent apps [bypass](https://techcrunch.com/2025/10/09/sora-copycats-flooded-apples-app-store-and-some-still-remain/) Apple's App Store review regularly. Automated and human review can only do so much against an onslaught of malicious apps, so I think that a better approach is to design the system to disallow apps from having access to as much as possible and providing users with highly secure devices to prevent malware as much as possible. In the same whitepaper, Apple outlines some things they've done to combat malicious apps in a more systemic way such as SDK package signing. In contrast to their claims, the EU's DMA seems to have spurred them to improve security on iOS in several ways while also increasing user freedom.

The App Store does enforce certain [security](https://support.apple.com/guide/security/about-app-store-security-secb8f887a15/1/web/1) properties, mainly through the App Review process. This process can't catch everything though, and [malware](https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385) still slips through the cracks.

The lack of third-party app store support means that it's not possible to use an app store with better security properties than the Apple App Store. For example, apps in the App Store have Apple's DRM, which makes reproducible builds [impossible](https://github.com/signalapp/Signal-iOS/issues/641#:~:text=So%20while%20truly%20reproducible%20builds%20are%20not%20possible). If one wanted to use an app store without this security regression, they'd be out of luck.

One positive of the App Store though is they enforce things like a [minimum SDK](https://developer.apple.com/app-store/submitting) requirement. Apps built targeting earlier SDK's can be missing newer security improvements and potentially have access to more data.

In the EU, Apple was forced to allow [third-party app stores](https://developer.apple.com/support/dma-and-apps-in-the-eu) and sideloading in iOS. In order to accommodate the extra security risk, they implemented the same [notarization](https://developer.apple.com/documentation/Security/notarizing-macos-software-before-distribution) feature from macOS. It would be nice to see them roll this out globally, but it seems to be locked to the EU for now.

### Android

Android takes the opposite approach and lets you simply download and run apps from the internet. This gives you much more freedom as a user but could potentially open you up to more malicious apps, for example, apps that abuse [accessibility permissions](https://blog.pradeo.com/accessibility-services-mobile-analysis-malware) to gain deep access to your device.

Google [Play Protect](https://developers.google.com/android/play-protect) is a built-in anti-malware in many Android devices that's meant to protect you against malicious apps, so it's not like you're completely defenseless. In my opinion, though, anti-malware isn't the correct solution. Hardening the sandbox with tighter restrictions and more permissions, such as the user-facing [network permission](https://grapheneos.org/features#network-permission-toggle) in GrapheneOS, is the best approach.

Google, in a slightly bizarre twist, locks users to only being able to download apps from the Play Store if they enable [Advanced Protection](https://support.google.com/accounts/answer/9764949?hl=en), so if you want the highest security on a stock Android device, you will have to sacrifice sideloading.

As I pointed out with the Apple App Store, malicious apps [bypass](https://www.forbes.com/sites/daveywinder/2025/03/18/60-million-malicious-google-play-downloads-as-331-apps-bypass-security/) the Play Store review all the time. The idea that the Play Store review process is a viable defense against malware is misguided and can put users at risk in my opinion. Google needs to enforce security on the OS level as much as possible to avoid malicious apps, not rely on Play Store review.

The Google Play Store sets a strict [SDK level requirement](https://developer.android.com/google/play/requirements/target-sdk), but apps downloaded outside the Google Play Store have much more leniency. Sideloaded apps can target very old SDK levels, which means they won't have the same security restrictions as apps targeting newer SDK's. The closest thing to a guardrail against running apps with older SDKs is a warning notification from the OS about an app targeting an SDK at or below Android 5.1 (!?). For reference, Android 5 came out in 2014.

I think Android could stand to enforce a higher SDK level and simply refuse to run apps that target lower than say a few versions ago. There's no reason to support apps that think they're on Android 5. GrapheneOS, in line with its firm security posture, raises the minimum SDK from AOSP.

Because of Android's support for third-party app stores, it's possible to use an app store with superior security to the Google Play Store. [Accrescent](https://accrescent.app) is just such an example.

Accrescent, among other features, allows for developers to control their own signing keys and doesn't require an account. This is an improvement over the Google Play Store where Google controls the signing keys and you need a Google account to download apps from it.

## Alternate OS Support

Support for installing alternate operating systems isn't just important for user freedom, it's needed so that third parties can make their own, more secure and more private operating systems than what comes pre-installed.

### iOS

In order to install any apps or use many features on iOS, you need an [Apple Account](https://account.apple.com). Apple Accounts ask for your real name and require a phone number during account creation, on top of tying your app and other purchases to an account. While iOS is known to be privacy-friendly, Apple's [privacy policy](https://www.apple.com/legal/privacy/en-ww) leaves a lot to be desired.

iOS doesn't allow you to unlock the bootloader to install another OS. While [jailbreaking](https://en.wikipedia.org/wiki/IOS_jailbreaking) is possible, it requires exploiting your device and ultimately undermining your device's security.

iOS should allow for fully unlocking and relocking the bootloader for alternate operating systems so that a version of iOS without any user data being sent to Apple can be installed.

This goes along with open sourcing their OS as well. When Apple eventually drops support for devices, it would be good to still be able to get updates through a third-party OS, although they wouldn't be able to update the firmware.

Alternate operating systems can also allow people to more fully utilize the hardware security features. For example, the [MTE](https://security.apple.com/blog/memory-integrity-enforcement) support in newer iPhones currently doesn't cover everything in the OS, just "the kernel and over 70 userland processes," as well as being optional for app developers to enable. An alternate OS could be more strict and enable it for everything in the OS as well as apps by default, with a toggle to disable it if they crash.

Apple's refusal to allow unlocking the bootloader on iPhones also stifles security researchers' ability to do their work, with many of them having to resort to exploiting the phone just to have the access they need.

Apple's [Security Research Device](https://security.apple.com/research-device) program is an acknowledgement of this problem. It offers built-in access to make security research much easier. However, it's only offered as a "12-month renewable loan" (meaning you never own the device) and is only available to people with "a proven track record of success in finding security issues on Apple platforms, or other modern operating systems and platforms". This means if you're not already an established security researcher, you won't have access to it.

In my opinion, this strict locking down of the platform stifles up-and-coming security researchers. Apple should allow users to unlock the bootloader on their devices if they want, with a warning about the security implications.

### Android

While Android is, on paper, much more free in terms of alternate OS support, many OEMs don't properly support fully [unlocking and relocking](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) the bootloader. Google Pixels are really your only option on Android in this regard.

The open nature of Android is ruined a bit by most of the OEMs, like [Samsung](https://x.com/GrapheneOS/status/1960374409572610192#m).

GrapheneOS is probably the best example of what an alternate OS can achieve. They've made [significant security improvements](https://grapheneos.org/features) over the default Pixel OS and AOSP.

For example, whereas MTE is locked behind [Advanced Protection](https://support.google.com/accounts/answer/9764949?hl=en) on the stock Pixel OS, GrapheneOS utilizes the hardware feature by default and with significantly [more coverage](https://x.com/GrapheneOS/status/1965810573066768865#m).

GrapheneOS also disables USB at the [hardware level](https://grapheneos.org/features#usb-c-port-and-pogo-pins-control). This is a demonstrable security improvement, as forensics companies like [Cellebrite](https://discuss.grapheneos.org/d/14344-cellebrite-premium-july-2024-documentation) have leaked documentation showing they're not able to get into GrapheneOS devices above a 2022 patch level.

The ability to unlock the bootloader on Android devices is a huge boon for security research as well.

## Permissions

Both operating systems sandbox their apps to prevent access to most of the system, but many things like the camera and microphone are left to users to decide if they allow them or not. iOS and Android differ in what permissions they offer and the granularity of the permissions.

### iOS

iOS has historically been ahead of AOSP in terms of the permissions it offers.

iOS's [paste permission](https://developer.apple.com/documentation/uikit/uipasteboard) prevents apps from nefariously reading data from your clipboard without your permission, something AOSP lacks still.

Since iOS 13, when apps request file access, they need to go through the [system file picker](https://developer.apple.com/documentation/uikit/providing-access-to-directories) and are only granted access to the specific files the user allows via a security-scoped URL. They don't gain access to the full filesystem like apps can on [Android](https://developer.android.com/training/data-storage/manage-all-files#:~:text=Android%20provides%20a%20special%20app%20access%20called%20all%2Dfiles%20access%20for%20these%20situations.).

iOS added the [Local Network](https://developer.apple.com/documentation/technotes/tn3179-understanding-local-network-privacy) permission in iOS 14, preventing apps from accessing other devices on your local network such as other phones or computers, maybe even network drives with sensitive data on them. Android later [added this permission](https://developer.android.com/privacy-and-security/local-network-permission) in Android 16, albeit currently as opt-in for developers.

Their [contact picker](https://support.apple.com/guide/iphone/control-access-to-contacts-iph9536aa9a5/ios) from iOS 18 allows you to select specific individual contacts you want an app to have access to without giving the app access to your full contact list, a feature which AOSP has yet to implement (although GrapheneOS has a more [granular version](https://grapheneos.org/usage#contact-scopes) of this that they made first).

iOS 26 recently added a [Wired Accessories](https://support.apple.com/en-us/111806) setting as well so you can change how the phone behaves when a wired accessory is connected.

While iOS tends to lead in terms of the sheer number of permissions, they could stand to be more granular. On iOS, once you grant a permission, it tends to stay until you remove it. They have a "one time" option for location, but seemingly not for anything else.

iOS's permissions also tend to lean toward individual apps rather than global permissions. There's no global toggle for the camera or microphone for example like on Android. When you try to disable WiFi or Bluetooth globally through the Control Center on iOS, they won't actually fully disable: you need to go to the settings in order to properly disable them (unless you have Airplane Mode on for some reason).

There's also the matter of some permissions only being available in certain regions: Apparently, Chinese iPhones have a granular [network permission](https://sspai.com/post/35720) that can allow you grant specific apps network access. This would be a huge security improvement on iOS, and it's a feature that's already been implemented so it's quite confusing why they wouldn't ship this feature globally.

These permissions might protect you from third-party apps, but Apple's own apps can actually [bypass the system permissions](https://blog.xpnsec.com/bypassing-macos-privacy-controls/#:~:text=A%20quick%20review%20of%20Calendar's,How%20can%20we%20subvert%20this?). Allowing their own apps privileged access in the system is, in my opinion, both a privacy and security issue. This means that any Apple app could access your camera, microphone, etc without you knowing about it. I'd like to see Apple not make their own apps privileged, I think that would make users more comfortable and give them more control over their system.

### Android

Android's permissions tend to lag behind iOS, but they usually end up implementing them in the end. The strength on Android is the global toggles for things like camera and microphone, and much wider use of "one time" permissions.

GrapheneOS greatly expands on the permissions AOSP offers, giving highly granular options such as [Contact Scopes](https://grapheneos.org/usage#contact-scopes) that allow you not only to pick what specific contacts you want, but also specific information from each contact.

GrapheneOS also implements a user-facing [Network permission](https://grapheneos.org/features#network-permission-toggle) allowing apps to individually be granted network access.

You would think with examples of these features already being implemented on *their own platform*, AOSP would go ahead and add them, but that doesn't seem to be the case. I'd like to see Android implement equivalent versions of these permissions to what GrapheneOS offers. GrapheneOS has already developed and tested the permissions; Google just needs to copy them.

The stock OS pre-installed on an Android phone suffers from a similar problem as iOS on an iPhone in that Google Play Services are [highly privileged](https://developers.google.com/android/guides/permissions#:~:text=Google%20Play%20services%20automatically%20obtains%20all%20permissions%20it%20needs%20to%20support%20its%20APIs.) in the OS. GrapheneOS's [sandboxed Google Play Services](https://grapheneos.org/features#sandboxed-google-play) provides to option to install it inside the standard app sandbox, preventing it from having any access outside what a normal app would have. This is a massive boost in security and privacy and is how Google Play Services should operate by default.

## Profiles

Support for separate user profiles allows for strong separation of activities, similar to how different browser profiles allow you to separate your browsing.

### iOS

iOS doesn't allow for separate profiles. This is a major detriment on iOS as Android does support separate profiles, each encrypted with a separate encryption key.

iOS could benefit massively from introducing multiple user profiles. Apple has already implemented the feature on [iPadOS](https://support.apple.com/guide/deployment/shared-ipad-overview-dep9a34c2ba2/web) but requires the iPad to be supervised.

### Android

Android's support for separate [user profiles](https://source.android.com/docs/devices/admin/multi-user) take great pains to enforce separation of data using separate encryption keys and settings.

It's intending for separate physical people, but it can easily be used to keep one person to keep data separate. Even Android themselves acknowledge this with [work profiles](https://www.android.com/enterprise/work-profile/) allowing businesses to keep their employees' personal data separate from their work data, preventing leakage either direction.

Profiles also form the basis of Android's [Private Space](https://source.android.com/docs/security/features/private-space) feature, which allows you to make a secure silo for sensitive apps and data.

The closest iOS gets is the ability to [lock and hide apps](https://support.apple.com/guide/iphone/lock-or-hide-or-an-app-iph00f208d05/ios), which is useful but not as strong as Android's profiles separation.

## Insider Attack Resistance

Both Android and iOS are highly secure against attacks on firmware and internal components thanks to their use of signatures to verify that the firmware is made by the OEM. But what if the attacker has access to the signing keys?

### iOS

Apple makes no mention of a feature protecting against insider attacks that I could find, which seems like a big omission. I think it's clear that you're expected to trust Apple fully on iOS, which is fair but I think it limits what security features they're willing to implement sometimes.

### Android

Android on the other hand implements [insider attack resistance](https://android-developers.googleblog.com/2018/05/insider-attack-resistance.html) by preventing the firmware on the secure element from being upgraded unless the correct user password is input.

Specifically, this prevents a targeted malicious update against a specific user from working without the user's cooperation. This is a great security feature and very needed in a world where governments have tried to coerce companies into pushing a [targeted malicious update](https://www.apple.com/customer-letter/) before.

## Browser

The browser is a major way users are exposed to malware. Your browser runs untrusted code from multiple sources constantly, and any vulnerability could yield a treasure trove of data including bank account session tokens and passwords.

### iOS

On iOS, you're [locked to using WebKit](https://developer.apple.com/app-store/review/guidelines/#:~:text=Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20JavaScript.). Any other browser you install is essentially just a reskin of Safari.

Apple did allow [alternate browser engines](https://developer.apple.com/support/alternative-browser-engines/) in the EU, but in other regions you're still locked to using WebKit. However, there have yet to be any [alternate browser engines](https://www.macobserver.com/news/15-months-later-iphone-users-still-cant-choose-a-real-browser/) available that I could find.

While Safari does offer good [privacy features](https://webkit.org/blog/15697/private-browsing-2-0/), it's lacking some important security protections that other browsers have like [site isolation](https://docs.webkit.org/Deep%20Dive/SiteIsolation.html#finding-what-needs-to-be-done), which they are currently working on implementing but it will be some time before it's done.

Locking users out of other browsers stifles competition and user freedom, not to mention potentially [putting users at risk](https://predictors.fail/#:~:text=As%20pointed%20out%20by%20iLeakage%2C%20Safari%20lacks%20Site%20Isolation%2C%20a%20measure%20used%20to%20enforce%20that%20two%20different%20webpages%20not%20from%20the%20same%20domain%20can%20never%20be%20handled%20by%20the%20same%20process.) by locking them out of using browsers with faster updates and more advanced [security features](https://www.chromium.org/Home/chromium-security/site-isolation/).

Apple should open up their ecosystem to allow for alternate browser engines globally instead of just in the EU.

## App Fingerprinting

Just like in a browser, it's possible for an to fingerprint your device and identify you as the same person. It's not as much of a concern usually as on browsers since apps tend to keep persistent data while they're installed anyway, but it's something to keep in mind.

### iOS

It's difficult to know all the exact methods used for fingerpinting as fingerprinting services like [fingerprint.com](https://fingerprint.com) are tight-lipped on a lot of it. They don't want anyone knowing how they do it so operating systems can patch those vectors. However, we can use their apps and test how effective they are, and look at what they make visible to us.

Fingerprint offers an iOS [demo app](https://apps.apple.com/en/app/fingerprint-pro/id1644105278) so you can see how well it works.

Fingerprinting may not be all that necessary however since Apple's [IDFV](https://developer.apple.com/documentation/uikit/uidevice/identifierforvendor) by design allows apps by the same vendor to identify the same device. It changes when all apps by that vendor are deleted but in my testing, I got the same identifier in their demo app even after deleting and reinstalling the apps. Fingerprint claims that the idnetifier will be the same after a device restart, after deleting and reinstalling the app, after installing a provisioning profile, after jailbreaking, after lockdown mode is enabled, and after reseting the device settings to their default values. The only case when it will change is after a full factory reset.

It will also try to detect if your device is jailbroken, or has been factory reset.

I think it's clear that Apple draws the line at the same vendor having the same device ID when their apps are installed, but apps are clearly still able to identify you even then.

Apple's [IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager/advertisingidentifier) is meant to provide this type of identifiers across vendors over time on the same device only optionally through the [App Tracking Transparency](https://developer.apple.com/documentation/AppTrackingTransparency) framework. Clearly this level of fingerprinting is a violation of Apple's intentions for the identifiers on iOS and I hope they can address whatever is being used as a fingerprinting vector here.

### Android

Android app fingerprinting is a well-known problem, with multiple possible vectors. Apps are able to see all other installed apps and the date and time they were updated, for example. A GrapheneOS [forum discussion](https://discuss.grapheneos.org/d/17118-identifiers-across-private-space-and-profiles/4) lays out a few ways app fingerprinting can work, even across profiles.

FingerprintJS supports [Android devices](https://dev.fingerprint.com/docs/native-android-integration) and claims it can identify the same device after it restarts, after app data/cache is cleared, after the app is deleted and reinstalled, after a factory reset, even if the app is installed in different profiles or user accounts. This is particularly upsetting since many people use Android profiles to separate out their activities.

I hope Google will see app fingerprinting as a real problem and take steps to mitigate it, especially between factory resets and profiles. I feel that those are the most important boundaries to uphold: a factory reset should be a clean slate, and a separate profile should be almost like a separate phone.

## Optional App Hardening

While enforcing strong security is great, it's not always possible to force all apps to adhere to the best security practices. That's why providing developers optional security features they can enable is so beneficial; developers can get their apps ready for them before they become the default. For example, MTE is a new hardware security feature recently enabled in the stock OS on Google Pixels and on iPhones. If Apple and Google made it on by default, a lot of apps would constantly crash and it would ruin the user experience. Giving devs an opportunity to test it out and enable it optionally first allows them to get their app ready so they can seemlessly transition to the new default security after a while.

### iOS


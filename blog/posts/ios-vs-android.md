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

One of the most glaring differences is the source model of each operating system: iOS is *mostly* closed source while Android is *mostly* open source. Continue reading to learn the implications of this difference.

### iOS

iOS is a closed-source OS, but it's based on the open-source [XNU kernel](https://github.com/apple-oss-distributions/xnu). The kernel handles almost everything on the OS, so it's good that such a vital component is openly available to examine and test.

It's important to note that being open source [doesn't inherently make software secure](https://seirdy.one/posts/2022/02/02/floss-security), but it can be helpful for anyone wanting to audit the code.

I'd like to see Apple release the source code of its entire OS in order to foster a spirit of openness and enable [reproducible builds](https://reproducible-builds.org). The latter would allow third parties to verify that the downloaded binaries match the released source code. Currently, that's impossible due to iOS's closed nature. Furthermore, a fully open-source iOS would also be the first step in third-party OS support on the platform.

### Android

The beating heart of Android is the [Android Open Source Project](https://source.android.com) (AOSP). AOSP is essentially a complete, open-source mobile OS on its own. Android was designed from the beginning to be used by lots of different companies for each of their own mobile phone offerings, so the open nature is useful toward that goal.

However, AOSP is only a bare-bones OS. OEMs are expected to add their own proprietary components to make a custom user experience specific to their brand. This is why most Android phones you buy are pre-installed with proprietary software like Facebook and other OEM software. Companies that sell Android phones mainly use AOSP as a secure base to then run on their phones with proprietary drivers and a custom Android OS. While the openness of AOSP is great, the OEMs producing the phones ultimately ruin it.

Because AOSP is open source though, non-OEM third parties such as [GrapheneOS](https://grapheneos.org) have made their own fully open-source Android OS. Unlike stock Android operating systems, GrapheneOS supports [reproducible builds](https://grapheneos.org/build#reproducible-builds).

Many open-source, custom AOSP-based operating systems actually reduce security from AOSP through delayed updates and lack of support for important Android security features like [Verified Boot](https://source.android.com/docs/security/features/verifiedboot). GrapheneOS is an exception as they explicitly aim to [never downgrade security from AOSP](https://grapheneos.org/features#:~:text=It%20starts%20from%20the%20strong%20baseline%20of%20the%20Android%20Open%20Source%20Project%20(AOSP)%20and%20takes%20great%20care%20to%20avoid%20increasing%20attack%20surface%20or%20hurting%20the%20strong%20security%20model.).

One problem custom Android operating systems face is the inherent issue of being [downstream](https://en.wikipedia.org/wiki/Downstream_(software_development)) of AOSP, which means third-party operating systems must wait for the upstream project to ship patches and updates. In this case, AOSP-based operating systems are [at the whim of Google](https://x.com/grapheneos/status/1964561043906048183) for timely security patches and updates, which is not ideal.

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

The App Store does enforce certain [security](https://support.apple.com/guide/security/about-app-store-security-secb8f887a15/1/web/1) properties, mainly through the App Review process. This process can't catch everything though, and [malware](https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385) still slips through the cracks.

The lack of third-party app store support means that it's not possible to use an app store with better security properties than the Apple App Store. For example, apps in the App Store have Apple's DRM, which makes reproducible builds [impossible](https://github.com/signalapp/Signal-iOS/issues/641#:~:text=So%20while%20truly%20reproducible%20builds%20are%20not%20possible). If one wanted to use an app store without this security regression, they'd be out of luck.

One positive of the App Store though is they enforce things like a [minimum SDK](https://developer.apple.com/app-store/submitting) requirement. Apps built targeting earlier SDK's can be missing newer security improvements and potentially have access to more data.

In the EU, Apple was forced to allow [third-party app stores](https://developer.apple.com/support/dma-and-apps-in-the-eu) and sideloading in iOS. In order to accommodate the extra security risk, they implemented the same [notarization](https://developer.apple.com/documentation/Security/notarizing-macos-software-before-distribution) feature from macOS. It would be nice to see them roll this out globally, but it seems to be locked to the EU for now.

### Android

Android takes the opposite approach and lets you simply download and run apps from the internet. This gives you much more freedom as a user but could potentially open you up to more malicious apps, for example, apps that abuse [accessibility permissions](https://blog.pradeo.com/accessibility-services-mobile-analysis-malware) to gain deep access to your device.

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

GrapheneOS utilizes hardware features like MTE, which is locked behind [Advanced Protection](https://support.google.com/accounts/answer/9764949?hl=en) normally, by default and with significantly [more coverage](https://x.com/GrapheneOS/status/1965810573066768865#m).

They also disable USB at the [hardware level](https://grapheneos.org/features#usb-c-port-and-pogo-pins-control). This is a demonstrable security improvement, as forensics companies like [Cellebrite](https://discuss.grapheneos.org/d/14344-cellebrite-premium-july-2024-documentation) have leaked documentation showing they're not able to get into GrapheneOS devices above a 2022 patch level.

The ability to unlock the bootloader on Android devices is a huge boon for security research as well.

## Permissions

Both operating systems sandbox their apps to prevent access to most of the system, but many things like the camera and microphone are left to users to decide if they allow them or not. iOS and Android differ in what permissions they offer and the granularity of the permissions.

### iOS

iOS has historically been ahead of AOSP in terms of the permissions it offers.

iOS's [paste permission](https://developer.apple.com/documentation/uikit/uipasteboard) prevents apps from nefariously reading data from your clipboard without your permission, something AOSP lacks still.

Since iOS 13, apps need to go through the [system file picker](https://developer.apple.com/documentation/uikit/providing-access-to-directories) and are only granted access to the specific files the user allows via a security-scoped URL, they don't gain access to the full filesystem like apps can on [Android](https://developer.android.com/training/data-storage/manage-all-files#:~:text=Android%20provides%20a%20special%20app%20access%20called%20all%2Dfiles%20access%20for%20these%20situations.).

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

iOS doesn't allow for separate profiles. This is a major detriment on iOS as Android does support separate profiles, each encrypted with a separate encryption key..

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

On iOS, you're [locked to using WebKit](https://developer.apple.com/app-store/review/guidelines/#:~:text=Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20JavaScript.). Any other browesr you install is essentially just a reskin of Safari.

Apple did allow [alternate browser engines](https://developer.apple.com/support/alternative-browser-engines/) in the EU, but in other regions you're still locked to using WebKit.

While Safari does offer good [privacy features](https://webkit.org/blog/15697/private-browsing-2-0/), it's lacking some important security protections that other browsers have like [site isolation](https://docs.webkit.org/Deep%20Dive/SiteIsolation.html#finding-what-needs-to-be-done), which they are currently working on implementing but it will be some time before it's done.

Locking users out of other browsers stifles competition and user freedom, not to mention potentially [putting users at risk](https://predictors.fail/#:~:text=As%20pointed%20out%20by%20iLeakage%2C%20Safari%20lacks%20Site%20Isolation%2C%20a%20measure%20used%20to%20enforce%20that%20two%20different%20webpages%20not%20from%20the%20same%20domain%20can%20never%20be%20handled%20by%20the%20same%20process.) by locking them out of using browsers with faster updates and more advanced [security features](https://www.chromium.org/Home/chromium-security/site-isolation/).

Apple should open up their ecosystem to allow for alternate browser engines globally instead of just in the EU.

## Optional App Hardening


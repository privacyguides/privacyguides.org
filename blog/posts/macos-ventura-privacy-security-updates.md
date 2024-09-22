---
date:
    created: 2022-10-27
categories:
    - News
authors:
    - jonah
tags:
    - macOS
    - Security
links:
    - posts/ios-configuration-guide.md
license: BY-SA
description: We cover the improvements macOS Ventura will bring to Apple users when it comes to personal privacy and security.
schema_type: NewsArticle
---
# New Privacy and Security Features in macOS 13 Ventura

macOS Ventura was released this week, and the Apple users among us may be interested in the improvements it brings to your personal privacy and security. We always recommend running the most up-to-date version of your operating system available. Updates add privacy and security improvements all the time—and macOS Ventura is no exception.<!-- more --> Some notable new additions to the macOS privacy ecosystem include:

- Lockdown Mode
- Rapid Security Responses
- Passkeys

Let's venture in and see what these updates will mean for you.

## Lockdown Mode

Apple's headline security feature for macOS and iOS this year was **Lockdown Mode**, a setting which allows you to enable much stricter security protections on your device. Designed for the rare few who are actively targeted by cyberattacks, Lockdown Mode still received widespread attention in the privacy and security space as an important attack surface reduction tool.

Enabling Lockdown Mode can be done easily in the **System Settings** app:

1. Click **Privacy & Security** in the sidebar.
2. Scroll down to **Lockdown Mode** and click **Turn On**.
3. Click **Turn On & Restart** to restart your device in Lockdown Mode.

Lockdown Mode needs to be enabled separately on each device. Lockdown Mode [changes your device's behavior](https://support.apple.com/en-us/HT212650) significantly in a number of ways. Its worth trying for yourself to see if it impacts your everyday usage. There is little downside to enabling it as its impact to most features is relatively minor in day-to-day use.

### Safari

Enabling Lockdown Mode disables a number of "complex web technologies". These can impact your device's browsing performance and battery efficiency, in some cases to a significant degree. The changes to Safari include:

- JavaScript's Just-in-Time (JIT) compilation features are disabled. JIT allows JavaScript code to be compiled on the fly during its execution. Disabling JIT shows performance decreases by up to 95% in some browser benchmarks, though this difference is difficult to notice in everyday browsing. Unfortunately, the added performance and complexity of JIT in JavaScript comes with a [significant security cost](https://microsoftedge.github.io/edgevr/posts/Super-Duper-Secure-Mode/). An analysis [conducted](https://docs.google.com/spreadsheets/d/1FslzTx4b7sKZK4BR-DpO45JZNB1QZF9wuijK3OxBwr0/edit#gid=0) by Mozilla indicates that over half of Chrome exploits "in the wild" abused a JIT bug, so disabling JIT can roughly cut your attack surface in half.
- [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly) (WASM) support is also disabled. WASM was created to allow for high-performance applications on web pages; however, it can be used to fingerprint browsers to track people across websites and apps.
- JPEG 2000 support is disabled. Safari is the only modern browser to [support](https://caniuse.com/jpeg2000) the JPEG 2000 image format, which makes its support an easy way to identify Safari users.
- PDF previews are disabled. The PDF format has historically been subject to a number of exploits; this change means that PDF files will be downloaded and have to be opened in a dedicated PDF previewing app instead.

Other technologies that were [disabled](https://blog.alexi.sh/posts/2022/07/lockdown-jsc/) include WebGL, MathML, Gamepad API, Web Audio API, RTCDataChannel, and SVG Fonts. Additionally, many other external web fonts are disabled, limiting websites to only the fonts pre-installed on the device. This notably breaks a lot of icons on various websites, which are often replaced by an empty square.

Luckily, Lockdown Mode can be disabled on a per-site basis on Safari, so none of these issues should prevent you from enabling Lockdown Mode on your device. If you encounter a trusted website which breaks with Lockdown Mode enabled, you can easily add an exception for that website while keeping the rest of Lockdown Mode's protections intact.

### Apple Services

Lockdown Mode also changes the way a number of different Apple services are used on your device.

- **Messages**: Most message attachments are blocked, besides certain image, video, and audio attachments. This includes most iMessage "apps" such as in-conversation games. Link previews are also disabled.
- **FaceTime**: Incoming calls are blocked, unless you have previously called that person or contact. This is likely in response to past FaceTime bugs, such as the [exploit in 2019](https://9to5mac.com/2019/01/28/facetime-bug-hear-audio/) which allowed an attacker to listen in on your microphone before you picked up the call.
- **Photos**: The new Shared Albums functionality in iCloud Photos is blocked, and invitations are automatically rejected. Shared Albums do still work on any devices without Lockdown Mode enabled.

In addition to these, other Apple services like **Home** will reject incoming invitations unless you have previously interacted with the sender.

### Device Changes

Some other device functionality is limited with Lockdown Mode enabled as well. If you have a Mac with Apple Silicon, connected devices or accessories are not allowed to connect unless your Mac is unlocked and explicit approval of the device is given. Configuration profiles can no longer be installed either, and the ability to enroll in a Mobile Device Management (MDM) system is disabled. These are enterprise management features, which are occasionally abused to control or monitor devices.

## Passkeys

**Passkeys** are likely to be the most impactful new feature for the everyday person's security practices. Passkeys are a cross-platform standard supported by Google, Apple, and Microsoft. Based on the FIDO2 standard, passkeys are the first real effort to replace passwords as your primary mode of authentication.

Using a passkey stored on your phone is supported by most browsers in macOS, but only Safari currently allows you to use a passkey stored on your Mac. Passkeys generated on your iPhone or Mac are stored in iCloud Keychain, which is end-to-end encrypted with your phone or computer's lock screen password. In Safari, passkeys are replacing the single-device WebAuthn registration, which allowed you to use your computer as a hardware key with Touch ID.

The benefits of passkeys are fairly limited at the moment, until more services support the standard for primary or multi-factor authentication.

## Rapid Security Responses

Alongside iOS 16, Apple is introducing **Rapid Security Responses** (RSR) to macOS Ventura. RSR allows Apple to ship small security fixes on the fly much faster than before.

Previously, releasing even a small security patch meant Apple had to release a huge multi-gigabyte update package. This was required to preserve the system's cryptographic integrity, following changes to how the system volume is handled in macOS Big Sur. With RSR, updates are much smaller, so patches can be downloaded much faster and applied more reliably.

RSR patches are applied immediately. However, [they are tied](https://support.apple.com/guide/deployment/whats-new-dep950aed53e/1/web/1.0) to the macOS minor version they are released with, meaning you need to be on the latest available macOS update to receive them: they are not a replacement for regular updates.

What [remains to be seen](https://eclecticlight.co/2022/09/22/apple-can-patch-ventura-on-the-fly-rsr-is-coming/) is which security patches will be released via RSR as opposed to standard security updates. More severe bugs, including Mach zone memory leaks and bugs which could cause kernel panics, are still likely to require a formal macOS update rather than a quick patch.

## Gatekeeper Changes

**Gatekeeper** is Apple's primary approach to handling malware on macOS, which has historically operated as a "scan at launch" feature for newly downloaded apps. In macOS Ventura, Gatekeeper has been updated to run signature and notarization checks upon every launch of an application, as opposed to just the first launch. This should improve its malware scanning capabilities, but could potentially [cause problems](https://eclecticlight.co/2022/09/24/why-some-apps-wont-run-in-ventura-and-how-to-fix-it/) with apps which update themselves. This practice is common with apps distributed outside the App Store, and could lead to discrepancies between the app's code signature and actual content.

## A Bug with Malware Scanners and Monitoring Tools

WIRED [reported](https://www.wired.com/story/apple-macos-ventura-bug-security-tools/) that a bug in the initial release of macOS Ventura cuts off third-party security products like [BlockBlock](https://objective-see.org/products/blockblock.html) from Objective-See from the access they need to perform system scans. There is a workaround to fix this access, so if you use tools like these you should manually check your security app to make sure it is working as intended. Apple should fix this problem in the next system update.

## Final Thoughts

If you are a Mac user, macOS Ventura brings a lot of new security and privacy features to the table. We recommend upgrading to macOS Ventura as soon as possible (I already have). We'll continue to keep an eye on how security features like these are used and improved in the future, on Apple platforms and beyond.

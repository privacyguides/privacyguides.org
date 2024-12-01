---
date:
    created: 2024-11-30
categories:
    - Opinion
authors:
    - fria
tags:
    - PWA
    - IWA
    - Web
license: BY-SA
---
# State of the Web App: Current Woes and Promising Futures

The concept of a [progressive web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) is enticing: an application using web technologies that is inherently cross platform (since it runs in a browser) and acts like a native app, even functioning offline. Support for PWAs in traditionally locked-down platforms like iOS means that PWAs can give users the freedom to install apps without having to go through Apple’s App Store. But there are problems with web content that PWAs haven't solved.<!-- more -->

## Current Web-Based Apps

Attempts at similar things have been made before, the most infamous of which is [Electron](https://www.electronjs.org). Electron is a software framework that allows developers to easily create cross-platform apps by essentially bundling an entire Chromium browser in with the app. This approach has its [drawbacks](https://usa.kaspersky.com/blog/electron-framework-security-issues/28952/?srsltid=AfmBOor_UcYY-84soHz5K2ULTmhlX44-DsIfJp_StotBrusD63MweSGO), though. Browsers have huge attack surface so it's important to keep them updated with the latest security fixes, but many Electron apps ship outdated versions, leaving those apps vulnerable. Each Electron app has its own version of Chromium with its own attack surface, amounting to a performance and security nightmare. In contrast, PWAs use the browser that you already have installed, so as long as you keep it updated, all your apps will have the latest security fixes.

So why isn't every Electron app shipping as a PWA? The answer is an age-old problem with web content: the fact that you have to trust the server fully. You make an HTML GET request and you're served the content (i.e., the site's HTML, CSS, and JavaScript), but if the server is compromised, you'll be served a compromised website. You also need to rely on the security of DNS name resolution and the [certificate authority](https://www.digicert.com/blog/what-is-a-certificate-authority) system. This is a huge problem for security-sensitive applications like messengers. An attacker that gains access to their server—even just temporarily—could distribute compromised clients to millions of people, potentially breaking E2EE or executing a host of other malicious actions.

## Improving Web Apps

A typical native app is downloaded onto your computer from some kind of trusted place like an app store and only receives updates when the developers push them out. Additionally, there's usually a process of checks and verification before that happens, like Apple's [App Review](https://developer.apple.com/distribute/app-review) and the Google Play [App Review](https://support.google.com/googleplay/android-developer/answer/9859455) process. In contrast to PWAs, with which the threat of an attacker with server access constantly looms, it's much more difficult to target a particular person. In other words, a malicious app update is much less likely to escape scrutiny than a highly targeted attack via compromised servers.

Isolated Web Apps (IWAs) build on the work done on PWAs and [Web Packaging](https://github.com/WICG/webpackage). They are a specification that allows web content to be distributed offline outside of a browser, much like a traditional app. It can be signed just like a regular app too, allowing you to verify that it came from the proper place and hasn't been modified. You could install an IWA from your favorite app store just like any other app and have the same security assurances. This would be incredibly useful in allowing for cross-platform E2EE web apps that don't need to trust a server every time you use them.

Google [distinguishes](https://chromeos.dev/en/web/isolated-web-apps) between the drive by web, PWAs, and IWAs. The drive by web requires more conservative access to the system as the most accessible and is therefore least trusted. PWAs are a bit more trusted and can integrate a bit more deeply into the system as a result. IWAs are the most trusted and, as such, can have deeper access into the system and more powerful capabilities.

<figure markdown>
  ![Diagram showing the drive by web, a PWA, and then a dotted line separating them from IWAs](../assets/images/pwa-vs-iwa/iwa-diagram.png)
  <figcaption>source: <a href="https://chromeos.dev/en/web/isolated-web-apps">chromeos.dev</a></figcaption>
</figure>

This higher security assurance from isolated and signed web applications and the inherently more trusted nature of a natively installed app will allow for IWAs to safely access APIs which wouldn't be safe to allow normal websites to access, like [Direct Sockets](https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md).

IWAs use a totally new [URL scheme](https://github.com/WICG/isolated-web-apps/blob/main/Scheme.md) since they're not relying on HTTPS certificate authorities or DNS. They're totally isolated from each other and the web using enforced Content Security Policy and Cross-Origin Isolation, hence the name.

## Issues

The [Worldwide Web Consortium](https://www.w3.org) currently has an open issue on their GitHub for IWAs with some interesting discussions that are worth checking out. There are some [criticisms](https://github.com/w3ctag/design-reviews/issues/842#issuecomment-1989631915) of IWAs, at least in their current form. A big point of contention is giving IWAs access to more powerful features like raw TCP and UDP socket access, similar to what a natively installed app might be able to do, which Martin Thomson at Mozilla argues is dangerous even with user consent. Martin wrote a nice in-depth [article](https://lowentropy.net/posts/bundles) on bundling web content that's worth checking out on their website. It'll be a long process of iterating on the design before a version of this idea that's secure and available across browsers.

Right now, Chrome ships the feature [enabled by default](https://chromestatus.com/feature/5146307550248960) but only on ChromeOS for admin-controlled machines and select development partners of Google. Safari and Firefox haven't implemented the feature, with [Firefox](https://github.com/mozilla/standards-positions/issues/799#issuecomment-2342084330) taking a stance against it. Perhaps in its trial run, the technology will prove its potential, or maybe IWAs aren't the best solution after all and another attempt at improving web apps will come along. I'll be watching with great interest either way.

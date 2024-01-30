---
title: Browser Extensions
icon: material/puzzle-outline
description: These browser extensions can enhance your browsing experience and protect your privacy.
cover: browser-extensions.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

In general, we recommend keeping your browser extensions to a minimum to decrease your attack surface. They have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

However, some provide functionality which can outweigh these downsides in certain situations, particularly when it comes to [content blocking](basics/common-threats.md#mass-surveillance-programs).

Don't install extensions which you don't immediately have a need for, or ones that duplicate the functionality of your browser. For example, [Brave](desktop-browsers.md#brave) users don't need to install uBlock Origin, because Brave Shields already provides the same functionality.

## Content Blockers

### uBlock Origin

<div class="admonition recommendation" markdown>

![uBlock Origin logo](assets/img/browsers/ublock_origin.svg){ align=right }

**uBlock Origin** is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts.

[:octicons-repo-16: Repository](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
[:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin)
- [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

</details>

</div>

We suggest following the [developer's documentation](https://github.com/gorhill/uBlock/wiki/Blocking-mode) and picking one of the "modes". Additional filter lists can impact performance and [may increase attack surface](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

These are some other [filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) that you may want to consider adding:

- [x] Check **Privacy** > **AdGuard URL Tracking Protection**
- Add [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

### uBlock Origin Lite

uBlock Origin also has a "Lite" version of their extension, which offers a very limited feature-set compared to the original extension. However, it has a few distinct advantages over its full-fledged sibling, so you may want to consider it if...

- ...you don't want to grant full "read/modify website data" permissions to any extensions (even a trusted one like uBlock Origin)
- ...you want a more resource (memory/CPU) efficient content blocker[^1]
- ...your browser only supports Manifest V3 extensions

<div class="admonition recommendation" markdown>

![uBlock Origin Lite logo](assets/img/browsers/ublock_origin_lite.svg){ align=right }

**uBlock Origin Lite** is a Manifest V3 compatible content blocker. Compared to the original *uBlock Origin*, this extension does not require broad "read/modify data" permissions to function, which lowers the risk of [:material-bug-outline: Passive Attacks](basics/common-threats.md#security-and-privacy){ .pg-orange } on your browser if a malicious rule is added to a filter list.

[:octicons-repo-16: Repository](https://github.com/uBlockOrigin/uBOL-home#readme){ .md-button .md-button--primary }
[:octicons-eye-16:](https://github.com/uBlockOrigin/uBOL-home/wiki/Privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/uBlockOrigin/uBOL-home/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/gorhill/uBlock/tree/master/platform/mv3){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh)

</details>

</div>

We only recommend this version of uBlock Origin if you never want to make any changes to your filter lists, because it only supports a few pre-selected lists and offers no additional customization options, including the ability to select elements to block manually. These restrictions are due to limitations in Manifest V3's design.

This version offers three levels of blocking: "Basic" works without requiring any special privileges to view and modify site content, while the "Optimal" and "Complete" levels do require that broad permission, but offer a better filtering experience with additional cosmetic rules and scriptlet injections.

If you set the default filtering mode to "Optimal" or "Complete" the extension will request read/modify access to **all** websites you visit. However, you also have the option to change the setting to "Optimal" or "Complete" on a **per-site** basis by adjusting the slider in the extension's pop-up panel on any given site. When you do so, the extension will request read/modify access to that site only. Therefore, if you want to take advantage of uBlock Origin Lite's "permission-less" configuration, you should probably leave the default setting as "Basic" and only adjust it higher on sites where that level is not adequate.

uBlock Origin Lite only receives block list updates whenever the extension is updated from your browser's extension marketplace, as opposed to on demand. This means that you may miss out on new threats being blocked for weeks until a full extension release is published.

### AdGuard

We recommend [Safari](mobile-browsers.md#safari-ios) for iOS users, which unfortunately is not supported by uBlock Origin. Luckily, Adguard provides an adequate alternative:

<div class="admonition recommendation" markdown>

![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }

**AdGuard for iOS** is a free and open-source content-blocking extension for Safari that uses the native [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).

[:octicons-home-16: Homepage](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
[:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-appstore: App Store](https://apps.apple.com/app/id1047223162)

</details>

</div>

Additional filter lists do slow things down and may increase your attack surface, so only apply what you need. AdGuard for iOS has some premium features; however, standard Safari content blocking is free of charge.

## Criteria

- Must not replicate built-in browser or OS functionality.
- Must directly impact user privacy, i.e. must not simply provide information.

[^1]: uBlock Origin Lite *itself* will consume no resources, because it uses newer APIs which make the browser process the filter lists natively, instead of running JavaScript code within the extension to handle the filtering. However, this resource advantage is only [theoretical](https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)#is-ubol-more-efficient-cpu--and-memory-wise-than-ubo), because it's possible that standard uBlock Origin's filtering code is more efficient than your browser's native filtering code. This has not yet been benchmarked.

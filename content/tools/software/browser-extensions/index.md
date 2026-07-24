---
title: Browser Extensions
description: These browser extensions can enhance your browsing experience and protect your privacy.
aliases:
- /browser-extensions
- /en/browser-extensions
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

In general, we recommend keeping your browser extensions to a minimum to decrease your attack surface. They have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

However, some provide functionality which can outweigh these downsides in certain situations, particularly when it comes to [content blocking](../../../wiki/basics/common-threats/index.md#mass-surveillance-programs).

Don't install extensions which you don't immediately have a need for, or ones that duplicate the functionality of your browser. For example, [Brave](../desktop-browsers/index.md#brave) users don't need to install uBlock Origin, because Brave Shields already provides the same functionality.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#ublock-origin" title="uBlock Origin" image="./ublock_origin.svg" subtitle="uBlock Origin is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts." >}}
  {{< card link="#ublock-origin-lite" title="uBlock Origin Lite" image="./ublock_origin_lite.svg" subtitle="uBlock Origin Lite is a Manifest V3 compatible content blocker. Compared to the original uBlock Origin, this extension does not require broad read/modify data permissions to function, which lowers the risk of Passive Attacks on your browser if a malicious rule is added to a filter list." >}}
  {{< card link="#adguard" title="AdGuard for iOS" image="./adguard.svg" subtitle="AdGuard for iOS is a free and open-source content-blocking extension for Safari that uses the native Content Blocker API." >}}
{{< /cards >}}
</div>

## Content Blockers

### uBlock Origin

{{< title-card logo="./ublock_origin.svg" >}}

**uBlock Origin** is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts.

{{< cards >}}
  {{< card link="https://github.com/gorhill/uBlock#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/gorhill/uBlock/wiki/Privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/ublock-origin)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
[{{< badge content="Opera" >}}](https://addons.opera.com/en/extensions/details/ublock/)

We suggest following the [developer's documentation](https://github.com/gorhill/uBlock/wiki/Blocking-mode) and picking one of the "modes". Additional filter lists can impact performance and [may increase attack surface](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

These are some other [filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) that you may want to consider adding:

- [x] Check **Privacy** > **AdGuard URL Tracking Protection**
- Add [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

### uBlock Origin Lite

uBlock Origin also has a "Lite" version of their extension, which offers a limited feature-set compared to the original extension. However, it has a few distinct advantages over its full-fledged sibling, so you may want to consider it if...

- ...you don't want to grant full "read/modify website data" permissions to any extensions (even a trusted one like uBlock Origin)
- ...you want a more resource (memory/CPU) efficient content blocker[^1]
- ...your browser only supports Manifest V3 extensions. This is the case for Chrome[^2].

{{< title-card logo="./ublock_origin_lite.svg" >}}

**uBlock Origin Lite** is a Manifest V3 compatible content blocker. Compared to the original *uBlock Origin*, this extension does not require broad "read/modify data" permissions to function, which lowers the risk of [Passive Attacks](../../../wiki/basics/common-threats/index.md#security-and-privacy){ .pg-orange } on your browser if a malicious rule is added to a filter list.

{{< cards >}}
  {{< card link="https://github.com/uBlockOrigin/uBOL-home#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/uBlockOrigin/uBOL-home/wiki/Privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/cimighlppcgcoapaliogpjjdehbnofhn)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id6745342698)

We only recommend this version of uBlock Origin if you never want to add any filter lists not included by default, or need advanced options such as [dynamic filtering](https://github.com/gorhill/ublock/wiki/dynamic-filtering:-quick-guide) and the network logger. These restrictions are due to limitations in Manifest V3's design, notably the hard limit on the number of filtering rules, and the fact that extensions generally cannot fetch remote resources.[^3]

This version offers three levels of blocking: "Basic" works without requiring any special privileges to view and modify site content, while the "Optimal" and "Complete" levels do require that broad permission, but offer a better filtering experience with additional cosmetic rules and scriptlet injections.

If you set the default filtering mode to "Optimal" or "Complete" the extension will request read/modify access to **all** websites you visit. However, you also have the option to change the setting to "Optimal" or "Complete" on a **per-site** basis by adjusting the slider in the extension's pop-up panel on any given site. When you do so, the extension will request read/modify access to that site only. Therefore, if you want to take advantage of uBlock Origin Lite's "permission-less" configuration, you should probably leave the default setting as "Basic" and only adjust it higher on sites where that level is not adequate.

uBlock Origin Lite only receives block list updates whenever the extension is updated from your browser's extension marketplace, as opposed to on demand. Google has an [expedited review process](https://developer.chrome.com/docs/webstore/skip-review) for filter updates, which means you still typically receive filter list updates as frequently as uBlock Origin Lite chooses to publish a release (historically every 2-7 days). However, only so-called "[safe rules](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#safe_rules)" can be updated, which may limit the update frequency of lists using advanced techniques.

### AdGuard

We recommend [Safari](../mobile-browsers/index.md#safari-ios) for iOS users, which unfortunately is only supported by uBlock Origin **Lite**. Luckily, AdGuard provides an adequate alternative:

{{< title-card logo="./adguard.svg" >}}

**AdGuard for iOS** is a free and open-source content-blocking extension for Safari that uses the native [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).

{{< cards >}}
  {{< card link="https://adguard.com/en/adguard-ios/overview.html" title="Homepage" icon="home" >}}
  {{< card link="https://adguard.com/privacy/ios.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1047223162)

Additional filter lists do slow things down and may increase your attack surface, so only apply what you need. AdGuard for iOS has some premium features; however, standard Safari content blocking is free of charge.

## Criteria

- Must not replicate built-in browser or OS functionality.
- Must directly impact user privacy, i.e. must not simply provide information.

[^1]: uBlock Origin Lite *itself* will consume no resources, because it uses newer APIs which make the browser process the filter lists natively, instead of running JavaScript code within the extension to handle the filtering. However, this resource advantage is only [theoretical](https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)#is-ubol-more-efficient-cpu--and-memory-wise-than-ubo), because it's possible that standard uBlock Origin's filtering code is more efficient than your browser's native filtering code. This has not yet been benchmarked.

[^2]: [Brave](https://brave.com/blog/brave-shields-manifest-v3/) and [Opera](https://xcancel.com/Opera_Security/status/2066543496001888753) have committed to maintain MV2 support for as long as they're able to.

[^3]: This is starting to change, as MV3 extensions can now request to use scripts. This has enabled [AdGuard](https://adguard.com/en/blog/adguard-browser-extension-v5-2.html) to propose to import custom filters list by the url, as opposed to having to manually paste the rules, as is the case with uBOL.

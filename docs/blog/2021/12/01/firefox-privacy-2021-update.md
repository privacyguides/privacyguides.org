---
title: 'Firefox Privacy: 2021 Update'
image: 'blog/2021/12/01/firefox-privacy-2021-update.png'
created: "2021-12-01"
author: 'Daniel'
template: overrides/blog.en.html
---
<script>
    window.location.href = "https://discuss.privacyguides.org/t/firefox-privacy-2021-update/37";
</script>
A lot changed between 2019 and now, not least in regards to Firefox. Since our last post, Mozilla has [improved](https://blog.mozilla.org/en/products/firefox/latest-firefox-rolls-out-enhanced-tracking-protection-2-0-blocking-redirect-trackers-by-default/) privacy with [Enhanced Tracking Protection (ETP)](https://blog.mozilla.org/en/products/firefox/firefox-now-available-with-enhanced-tracking-protection-by-default/). Earlier this year Mozilla introduced [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/) (Dynamic First Party Isolation dFPI). This was then further tightened with [Enhanced Cookie Clearing](https://blog.mozilla.org/security/2021/08/10/firefox-91-introduces-enhanced-cookie-clearing/). We’re also looking very forward to [Site Isolation](https://blog.mozilla.org/security/2021/05/18/introducing-site-isolation-in-firefox/) (code named Fission) being enabled by default in the coming releases.

Now that so many privacy features are built into the browser, there is little need for extensions made by third-party developers. Accordingly, we have updated our very outdated [browser](../../../../desktop-browsers.md) section. If you’ve got an old browser profile we suggest **creating a new one**. Some of the old advice may make your browser _more_ unique.

#### Privacy Tweaks “about:config”

We’re no longer recommending that users set `about:config` switches manually. Those switches need to be up to date and continuously maintained. They should be studied before blindly making modifications. Sometimes their behaviour changes in between Firefox releases, is superseded by other keys or they are removed entirely. We do not see any point in duplicating the efforts of the community [Arkenfox](https://github.com/arkenfox/user.js) project. Arkenfox has very good documentation in their [wiki](https://github.com/arkenfox/user.js/wiki) and we use it ourselves.

#### LocalCDN and Decentraleyes

These extensions aren’t required with Total Cookie Protection (TCP), which is enabled if you’ve set Enhanced Tracking Protection (ETP) to **Strict**.

Replacing scripts on CDNs with local versions is not a comprehensive solution and is a form of [enumeration of badness](https://www.ranum.com/security/computer_security/editorials/dumb/). While it may work with some scripts that are included it doesn’t help with most other third-party connections.

CDN extensions never really improved privacy as far as sharing your IP address was concerned and their usage is fingerprintable as this Tor Project developer [points out](https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/22089#note_2639603). They are the wrong tool for the job and are not a substitute for a good VPN or Tor. Its worth noting the [resources](https://git.synz.io/Synzvato/decentraleyes/-/tree/master/resources) for Decentraleyes are hugely out of date and would not be likely used anyway.

#### NeatURLs and ClearURLS

Previously we recommended ClearURLs to remove tracking parameters from URLs you might visit. These extensions are no longer needed with uBlock Origin’s [`removeparam`](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#removeparam) feature.

#### HTTPS Everywhere

The EFF announced back in September they were [deprecating HTTPS-Everywhere](https://www.eff.org/deeplinks/2021/09/https-actually-everywhere) as most browsers now have an HTTPS-Only feature. We are pleased to see privacy features built into the browser and Firefox 91 introduced [HTTPS by Default in Private Browsing](https://blog.mozilla.org/security/2021/08/10/firefox-91-introduces-https-by-default-in-private-browsing/).

#### Multi Account Containers and Temporary Containers

Container extensions aren’t as important as they used to be for privacy now that we have [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/).

Multi Account Container will still have some use if you use [Mozilla VPN](https://en.wikipedia.org/wiki/Mozilla_VPN) as it is going to be [integrated](https://github.com/mozilla/multi-account-containers/issues/2210) allowing you to configure specified containers to use a particular VPN server. Another use might be if you want to login to multiple accounts on the same domain.

#### Just-In-Time Compilation (JIT)

What is “Disable JIT” in Bromite? This option disables the JavaScript performance feature [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation). It can increase security but at the cost of performance. Those trade-offs vary wildly and are explored in [this](https://microsoftedge.github.io/edgevr/posts/Super-Duper-Secure-Mode/) publication by Johnathan Norman from the Microsoft Edge team. This option is very much a security vs performance option.

#### Mozilla browsers on Android

We don’t recommend any Mozilla based browsers on Android. This is because we don’t feel that [GeckoView](https://mozilla.github.io/geckoview) is quite as secure as it could be as it doesn’t support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture), soon to be coming in desktop browsers or [isolated processes](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

We also noticed that there isn’t an option for [HTTPS-Only mode](https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218). The only way to get something similar is to install the [deprecated](https://www.eff.org/deeplinks/2021/09/https-actually-everywhere) extension [HTTPS Everywhere](https://www.eff.org/https-everywhere).

There are places which Firefox on Android shines for example browsing news websites where you may want to _partially_ load some JavaScript (but not all) using medium or hard [blocking mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode). The [reader view](https://support.mozilla.org/en-US/kb/view-articles-reader-view-firefox-android) is also pretty cool. We expect things will change in the future, so we’re keeping a close eye on this.

#### Fingerprinting

Firefox has the ability to block known third party [fingerprinting resources](https://blog.mozilla.org/security/2020/01/07/firefox-72-fingerprinting/). Mozilla has [advanced protection](https://support.mozilla.org/kb/firefox-protection-against-fingerprinting) against fingerprinting (RFP is enabled with Arkenfox).

We do not recommend extensions that promise to change your [browser fingerprint](https://blog.torproject.org/browser-fingerprinting-introduction-and-challenges-ahead/). Some of those extensions [are detectable](https://www.cse.chalmers.se/~andrei/codaspy17.pdf) by websites through JavaScript and [CSS](https://hal.archives-ouvertes.fr/hal-03152176/file/style-fingerprinting-usenix.pdf) methods, particularly those which inject anything into the web content.

This includes **all** extensions that try to change the user agent or other browser behaviour to prevent fingerprinting. We see these often recommended on Reddit and would like to say that they will likely make you more unique and can be circumvented. Arkenfox has [a good list](https://github.com/arkenfox/user.js/wiki/4.1-Extensions#small_orange_diamond-%EF%B8%8F-anti-fingerprinting-extensions-fk-no) of extensions you shouldn’t be using. They also have [another list](https://github.com/arkenfox/user.js/wiki/4.1-Extensions#small_orange_diamond-dont-bother) of extensions you needn’t bother with either. We also like to say testing sites which show you how unique you are in a set of users are often using hugely tainted results that are not indicative of real-world usage.

----------

_Special thanks to [Thorin-Oakenpants](https://github.com/Thorin-Oakenpants) and [Tommy](https://tommytran.io) for their help with providing advice and further documentation during the research phase.

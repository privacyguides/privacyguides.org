---
title: Browser Recommendations
---
These are our current web browser recommendations and settings. We recommend keeping extensions to a minimum: they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

## General Recommendations
### Tor Browser
!!! recommendation

    ![Tor Browser logo](/assets/img/browsers/tor.svg){ align=right }

    **Tor Browser** is the choice if you need anonymity. This browser provides you with access to the Tor Bridges and [Tor Network](https://en.wikipedia.org/wiki/Tor_(network)), along with extensions that can be automatically configured to fit its three security levels - *Standard*, *Safer* and *Safest*. We recommend that you do not change any of Tor Browser's default configurations outside of the standard security levels.

    !!! anonyimity
        This product provides anonyimity.

    !!! Extensions
        You should **never** install any additional extensions on Tor Browser, including the ones we suggest for Firefox. Browser extensions make you stand out from other Tor users and your browser easier to [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

    [Visit torproject.org](https://www.torproject.org){ .md-button .md-button--primary } [:pg-tor:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .md-button } [Privacy Policy](https://support.torproject.org/tbb/tbb-3/){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://www.torproject.org/download/)
    - [:fontawesome-brands-apple: macOS](https://www.torproject.org/download/)
    - [:fontawesome-brands-linux: Linux](https://www.torproject.org/download/)
    - [:fontawesome-brands-linux: Linux (Flatpak)](https://flathub.org/apps/details/com.github.micahflee.torbrowser-launcher)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
    - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid/)
    - [:fontawesome-brands-git: Source](https://trac.torproject.org/projects/tor)

## Desktop Browser Recommendations
{% for item_hash in site.data.software.browsers-desktop %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Mobile Browser Recommendations
On Android, Mozilla's engine [GeckoView](https://mozilla.github.io/geckoview/) has yet to support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) or enable [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196). Firefox on Android also doesn't yet have [HTTPS-Only mode](https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218) built-in. We do not recommend Firefox or any Gecko based browsers at this time.

On iOS all web browsers use [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview), so all browsers on the App Store are essentially Safari under the hood.

{% for item_hash in site.data.software.browsers-mobile %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Additional Resources
{% for item_hash in site.data.software.browsers-resources %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

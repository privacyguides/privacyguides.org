---
title: Browser Recommendations
---
These are our current web browser recommendations and settings. We recommend keeping extensions to a minimum: they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

## General Recommendations
### Tor Browser
!!! recommendation

    ![Tor Browser logo](/assets/img/browsers/tor.svg){ align=right }

    **Tor Browser** is the choice if you need anonymity. This browser provides you with access to the Tor Bridges and [Tor Network](https://en.wikipedia.org/wiki/Tor_(network)), along with extensions that can be automatically configured to fit its three security levels - *Standard*, *Safer* and *Safest*. We recommend that you do not change any of Tor Browser's default configurations outside of the standard security levels.

    !!! anonyimity "This product provides anonyimity"

    !!! warning
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
### Firefox
!!! recommendation

    ![Firefox logo](/assets/img/browsers/firefox.svg){ align=right }

    **Firefox** provides strong privacy settings such as [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), which can help block various [types of tracking](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).

    These options can be found in the *Privacy & Security* settings page ( ≡ → Settings → Privacy & Security).

    #### **Enhanced Tracking Protection (ETP)**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Select: "Strict"</li>
    </ul>

    #### **Sanitize on Close**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Select: "Delete cookies and site data when Firefox is closed"</li>
    </ul>
    You can still stay logged into websites by allowing exceptions.

    #### **Disable Search Suggestions**
    *These features may not be available depending on your region.*
    <ul style="list-style-type:none;padding-left:0;">
        <li>Toggle off: "Suggestions from the web"</li>
        <li>Toggle off: "Suggestions from sponsors"</li>
        <li>Toggle off: "Improve the Firefox Suggest experience"</li>
    </ul>

    #### **Disable Telemetry**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Uncheck: "Allow Firefox to send technical and interaction data to Mozilla"</li>
        <li>Uncheck: "Allow Firefox to install and run studies"</li>
        <li>Uncheck: "Allow Firefox to send backlogged crash reports on your behalf"</li>
    </ul>

    #### **HTTPS-Only Mode**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Select: "Enable HTTPS-Only Mode in all windows".</li>
    </ul>

    #### Sync
    The [Firefox sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) service is end-to-end encrypted.

    #### Extensions
    We generally do not recommend installing any extensions as they increase your [attack surface](https://en.wikipedia.org/wiki/Attack_surface); however, if you want content blocking, [uBlock Origin](/browsers/#additional-resources) might be useful to you. The extension is also a 🏆️ [Recommended Extension](https://support.mozilla.org/kb/add-on-badges#w_recommended-extensions) by Mozilla.

    #### Arkenfox (advanced)
    The [Arkenfox project](https://github.com/arkenfox/user.js) provides a set of carefully considered options for Firefox. These options are quite strict but a few are subjective and may cause some websites to not work properly. You can easily change these settings to suit your needs. We **strongly recommend** reading through their [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox also enables [container](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users) support.
    !!! warning
        Firefox includes a unique [download token](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) in downloads from Mozilla's website and uses telemetry in Firefox to send the token. The token is **not** included in releases from the [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

    [Visit firefox.com](https://firefox.com){ .md-button .md-button--primary } [Privacy Policy](https://www.mozilla.org/privacy/firefox){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://www.mozilla.org/firefox/windows)
    - [:fontawesome-brands-apple: macOS](https://www.mozilla.org/firefox/mac)
    - [:fontawesome-brands-linux: Linux](https://www.mozilla.org/firefox/linux)
    - [:fontawesome-brands-linux: Linux (Flatpak)](https://flathub.org/apps/details/org.mozilla.firefox)
    - [:fontawesome-brands-git: Source](https://hg.mozilla.org/mozilla-central)

## Mobile Browser Recommendations
On Android, Mozilla's engine [GeckoView](https://mozilla.github.io/geckoview/) has yet to support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) or enable [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196). Firefox on Android also doesn't yet have [HTTPS-Only mode](https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218) built-in. We do not recommend Firefox or any Gecko based browsers at this time.

On iOS all web browsers use [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview), so all browsers on the App Store are essentially Safari under the hood.

### Bromite
!!! recommendation

    ![Bromite logo](/assets/img/browsers/bromite.svg){ align=right }

    **Bromite** is a [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser))-based browser with privacy and security enhancements, built-in ad blocking, and some fingerprinting randomization.

    These options can be found in *Privacy and Security* ( ⁝ → ⚙️ Settings → Privacy and Security).

    #### **HTTPS-Only Mode**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Select: Always use secure connections.</li>
    </ul>

    #### **Always-on Incognito Mode**
    <ul style="list-style-type:none;padding-left:0;">
        <li>Select: "Open links in incognito tabs always"</li>
        <li>Select: "Close all open tabs on exit"</li>
        <li>Select: "Open external links in incognito"</li>
    </ul>

    [Visit bromite.org](https://www.bromite.org){ .md-button .md-button--primary } [Privacy Policy](https://www.bromite.org/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-android: Android](https://www.bromite.org/fdroid)
    - [:fontawesome-brands-github: Source](https://github.com/bromite/bromite)

### Safari
!!! recommendation

    ![Safari logo](/assets/img/browsers/safari.svg){ align=right }

    **Safari** is the default browser in iOS. It includes [privacy features](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) such as Intelligent Tracking Protection, Privacy Report, isolated Private Browsing tabs, iCloud Private Relay, and automatic HTTPS upgrades.

    These options can be found in *Privacy and Security* (⚙️ Settings → Safari → Privacy and Security).

    #### **Cross-Site Tracking Prevention**
    Toggling this setting enables WebKit's [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp).
    <ul style="list-style-type:none;padding-left:0;">
      <li>Toggle On: "Prevent Cross-Site Tracking".</li>
    </ul>

    #### **Privacy Report**
    Privacy Report provides a snapshot of cross-site trackers currently prevented from profiling you on the website you're visiting. It can also display a weekly report to show which trackers have been blocked over time.

    Privacy Report is accessible through the "**Aa**" icon in the URL bar.

    #### **Privacy Preserving Ad Measurement**
    This is WebKit's own [implementation](https://webkit.org/blog/8943/privacy-preserving-ad-click-attribution-for-the-web/) of privacy preserving ad click attribution. If you do not wish to participate, you can disable this feature.
    <ul style="list-style-type:none;padding-left:0;">
      <li>Toggle Off: "Privacy Preserving Ad Measurement".</li>
    </ul>

    #### **Apple Pay**
    If you do not use Apple Pay, you can toggle off the ability for websites to check for it.
    <ul style="list-style-type:none;padding-left:0;">
      <li>Toggle Off: "Check for Apple Pay".</li>
    </ul>

    #### **Always-on Private Browsing**
    Open Safari and press the tabs icon in the bottom right corner. Open Tab Groups, located in the bottom middle.
    <ul style="list-style-type:none;padding-left:0;">
      <li>Select: "Private".</li>
    </ul>

    #### iCloud Sync
    While synchronization of Safari History, Tab Groups, and iCloud Tabs is end-to-end encrypted, bookmarks are [not](https://support.apple.com/en-us/HT202303); they are only encrypted in transit and stored in an encrypted format on Apple's servers. Apple may be able to decrypt and access them.

    If you use iCloud, we also recommend checking to ensure Safari's default download location is set to locally on your device. This option can be found in *General* (⚙️ Settings → Safari → General → Downloads).

    #### Extensions
    We generally do not recommend installing [any extensions](https://www.sentinelone.com/blog/inside-safari-extensions-malware-golden-key-user-data/) as they increase your browser's [attack surface](https://en.wikipedia.org/wiki/Attack_surface); however, if you want content blocking, [AdGuard for Safari](/browsers/#additional-resources) might be useful to you.

    [Visit apple.com](https://www.apple.com/safari/){ .md-button .md-button--primary } [Privacy Policy](https://www.apple.com/legal/privacy/data/en/safari/){ .md-button }

    **Downloads**
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/safari/id1146562112)

## Additional Resources
### uBlock Origin

!!! recommendation

    ![uBlock Origin logo](/assets/img/browsers/ublock_origin.svg){ align=right }

    **uBlock Origin** is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts.

    We suggest enabling all of the [filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) under the "Ads," "Privacy," and "Malware domains". The "Annoyances" and "Multipurpose" lists can also be enabled, but they may break some social media functions. The *AdGuard URL Tracking Protection* filter list makes extensions like CleanURLs and NeatURLs redundant.

    We also suggest adding the [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt) list and any of the regional lists that might apply to your browsing habits. To add this list, first access settings by clicking on the uBO icon, then the settings icon (⚙️). Go to the bottom of the Filter lists pane and place a checkmark next to Import under the Custom section. Paste the URL of the filter list above into the text area that appears below and click "Apply changes".

    Additional filter lists do slow things down and may increase your [attack surface](https://en.wikipedia.org/wiki/Attack_surface), so only apply what you need.

    uBlock Origin also has different [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode). The easy mode [might not](https://www.ranum.com/security/computer_security/editorials/dumb/) necessarily keep you safe from every tracker out there, whereas the more advanced modes let you control exactly what needs to run.

    [Visit github.com](https://github.com/gorhill/uBlock){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
    - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
    - [:fontawesome-brands-opera: Opera](https://addons.opera.com/extensions/details/ublock)
    - [:fontawesome-brands-github: Source](https://github.com/gorhill/uBlock)

### AdGuard for Safari
!!! recommendation

    ![AdGuard logo](/assets/img/browsers/adguard.svg){ align=right }

    **AdGuard for Safari** is a free and open-source content-blocking extension for Safari that uses the native [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker). We suggest enabling the filters labled *#recommended* under the "Ad Blocking" and "Privacy" [content blockers](https://kb.adguard.com/en/safari/overview#content-blockers). The *#recommended* filters can also be enabled for the "Social Widgets" and "Annoyances" content blockers, but they may break some social media functions.

    Additional filter lists do slow things down and may increase your [attack surface](https://en.wikipedia.org/wiki/Attack_surface), so only apply what you need.

    There is also [AdGuard for iOS](https://adguard.com/en/adguard-ios/overview.html) which is able to perform system-wide content blocking by means of DNS filtering.

    [Visit adguard.com](https://adguard.com/en/adguard-safari/overview.html){ .md-button .md-button--primary } [Privacy Policy](https://adguard.com/en/privacy/safari.html){ .md-button }

    **Downloads**
    - [:fontawesome-brands-safari: Safari](https://apps.apple.com/app/adguard-for-safari/id1440147259)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/apple-store/id1047223162)
    - [:fontawesome-brands-git: Source](https://github.com/AdguardTeam/AdGuardForSafari)

### Terms of Service; Didn't Read
!!! recommendation

    ![Terms of Service; Didn't Read logo](/assets/img/browsers/terms_of_service_didnt_read.svg){ align=right }

    **Terms of Service; Didn't Read** grades websites based on their terms of service agreements and privacy policies. It also gives short summaries of those agreements. The analyses and ratings are published transparently by a community of reviewers.

    We do not recommend installing ToS;DR as a browser extension. The same information is provided on their website.

    [Visit tosdr.org](https://tosdr.org){ .md-button .md-button--primary } [Privacy Policy](https://addons.mozilla.org/firefox/addon/terms-of-service-didnt-read/privacy){ .md-button }

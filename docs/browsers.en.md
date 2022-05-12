---
title: "Web Browsers"
icon: octicons/browser-16
---
These are our current web browser recommendations and settings. We recommend keeping extensions to a minimum: they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

## General Recommendations

### Tor Browser

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }

    **Tor Browser** is the choice if you need anonymity. This browser provides you with access to the Tor Bridges and [Tor Network](https://en.wikipedia.org/wiki/Tor_(network)), along with extensions that can be automatically configured to fit its three security levels - *Standard*, *Safer* and *Safest*. We recommend that you do not change any of Tor Browser's default configurations outside of the standard security levels.

    [Homepage](https://www.torproject.org){ .md-button .md-button--primary } [:pg-tor:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .md-button } [Privacy Policy](https://support.torproject.org/tbb/tbb-3/){ .md-button }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.torproject.org/download/)
        - [:fontawesome-brands-apple: macOS](https://www.torproject.org/download/)
        - [:fontawesome-brands-linux: Linux](https://www.torproject.org/download/)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.github.micahflee.torbrowser-launcher)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid/)
        - [:fontawesome-brands-git: Source](https://trac.torproject.org/projects/tor)

!!! warning
    You should **never** install any additional extensions on Tor Browser, including the ones we suggest for Firefox. Browser extensions make you stand out from other people on the Tor network, and make your browser easier to [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

## Desktop Browser Recommendations

### Firefox

!!! recommendation

    ![Firefox logo](assets/img/browsers/firefox.svg){ align=right }

    **Firefox** provides strong privacy settings such as [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), which can help block various [types of tracking](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).

    [Homepage](https://firefox.com){ .md-button .md-button--primary } [Privacy Policy](https://www.mozilla.org/privacy/firefox){ .md-button }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.mozilla.org/firefox/windows)
        - [:fontawesome-brands-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:fontawesome-brands-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.firefox)
        - [:fontawesome-brands-git: Source](https://hg.mozilla.org/mozilla-central)

!!! warning
    Firefox includes a unique [download token](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) in downloads from Mozilla's website and uses telemetry in Firefox to send the token. The token is **not** included in releases from the [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

#### Recommended Configuration

Tor Browser is the only way to truly browse the internet anonymously. When you use Firefox we recommend changing the following settings to protect your privacy from certain parties, but all browsers other than Tor will be traceable by *somebody* in some regard or another.

These options can be found in :material-menu: → **Settings** → **Privacy & Security**.

##### Enhanced Tracking Protection

- [x] Select **Strict** Enhanced Tracking Protection

This protects you by blocking social media trackers, fingerprinting scripts (note that this does not protect you from *all* fingerprinting), cryptominers, cross-site tracking cookies, and some other tracking content. ETP protects against many common threats, but it does not block all tracking avenues because it is designed to have minimal to no impact on site usability.

##### Sanitize on Close

If you want to stay logged in to particular sites, you can allow exceptions in **Cookies and Site Data** → **Manage Exceptions...**

- [x] Check **Delete cookies and site data when Firefox is closed**

This protects you from persistent cookies, but does not protect you against cookies acquired during any one browsing session. When this is enabled, it becomes possible to easily cleanse your browser cookies by simply restarting Firefox. You can set exceptions on a per-site basis, if you wish to stay logged in to a particular site you visit often.

##### Search Suggestions

- [ ] Disable **Suggestions from the web**
- [ ] Disable **Suggestions from sponsors**
- [ ] Disable **Improve the Firefox Suggest experience**

Search suggestion features may not be available in your region.

Search suggestions send everything you type in the address bar to the default search engine, regardless of whether you submit an actual search. Disabling search suggestions allows you to more precisely control what data you send to your search engine provider.

##### Telemetry

- [ ] Uncheck **Allow Firefox to send technical and interaction data to Mozilla**
- [ ] Uncheck **Allow Firefox to install and run studies**
- [ ] Uncheck **Allow Firefox to send backlogged crash reports on your behalf**

> Firefox sends data about your Firefox version and language; device operating system and hardware configuration; memory, basic information about crashes and errors; outcome of automated processes like updates, safebrowsing, and activation to us. When Firefox sends data to us, your IP address is temporarily collected as part of our server logs.

##### HTTPS-Only Mode

- [x] Select **Enable HTTPS-Only Mode in all windows**

This prevents you from unintentionally connecting to a website in plain-text HTTP. Sites without HTTPS are uncommon nowadays, so this should have little to no impact on your day to day browsing.

#### Sync

[Firefox Sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) allows your browsing data (history, bookmarks, etc.) to be accessible on all your devices and protects it with E2EE.

#### Extensions

We generally do not recommend installing any extensions as they increase your attack surface. However, if you want content blocking, [uBlock Origin](#additional-resources) might be useful to you. The extension is also a :trophy: [Recommended Extension](https://support.mozilla.org/kb/add-on-badges#w_recommended-extensions) by Mozilla.

#### Arkenfox (advanced)

The [Arkenfox project](https://github.com/arkenfox/user.js) provides a set of carefully considered options for Firefox. These options are quite strict but a few are subjective and may cause some websites to not work properly. You can easily change these settings to suit your needs. We **strongly recommend** reading through their [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox also enables [container](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users) support.

## Mobile Browser Recommendations

Firefox on Android is still less secure than Chromium-based alternatives: Mozilla's engine, [GeckoView](https://mozilla.github.io/geckoview/), has yet to support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) or enable [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

On iOS, any app that can browse the web is [restricted](https://developer.apple.com/app-store/review/guidelines) to using an Apple-provided [WebKit framework](https://developer.apple.com/documentation/webkit), so there is little reason to use a third-party web browser.

### Bromite

!!! recommendation

    ![Bromite logo](assets/img/browsers/bromite.svg){ align=right }

    **Bromite** is a Chromium-based browser with privacy and security enhancements, built-in ad blocking, and some fingerprinting randomization.

    [Homepage](https://www.bromite.org){ .md-button .md-button--primary } [Privacy Policy](https://www.bromite.org/privacy){ .md-button }

    ??? downloads

        - [:fontawesome-brands-android: Android](https://www.bromite.org/fdroid)
        - [:fontawesome-brands-github: Source](https://github.com/bromite/bromite)

These options can be found in :material-menu: → :gear: **Settings** → **Privacy and Security**.

#### Recommended Configuration

##### HTTPS-Only Mode

- [x] Select **Always use secure connections**

This prevents you from unintentionally connecting to a website in plain-text HTTP. The HTTP protocol is extremely uncommon nowadays, so this should have little to no impact on your day to day browsing.

##### Always-on Incognito Mode

- [x] Select **Open links in incognito tabs always**
- [x] Select **Close all open tabs on exit**
- [x] Select **Open external links in incognito**

### Safari

!!! recommendation

    ![Safari logo](assets/img/browsers/safari.svg){ align=right }

    **Safari** is the default browser in iOS. It includes [privacy features](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) such as Intelligent Tracking Protection, Privacy Report, isolated Private Browsing tabs, iCloud Private Relay, and automatic HTTPS upgrades.

    [Website](https://www.apple.com/safari/){ .md-button .md-button--primary } [Privacy Policy](https://www.apple.com/legal/privacy/data/en/safari/){ .md-button }

#### Recommended Configuration

These options can be found in :gear: **Settings** → **Safari** → **Privacy and Security**.

##### Cross-Site Tracking Prevention

- [x] Enable **Prevent Cross-Site Tracking**

This enables WebKit's [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp). The feature helps protect against unwanted tracking by using on-device machine learning to stop trackers. ITP protects against many common threats, but it does not block all tracking avenues because it is designed to not interfere with website usability.

##### Privacy Report

Privacy Report provides a snapshot of cross-site trackers currently prevented from profiling you on the website you're visiting. It can also display a weekly report to show which trackers have been blocked over time.

Privacy Report is accessible through the "**Aa**" icon in the URL bar.

##### Privacy Preserving Ad Measurement

- [ ] Disable **Privacy Preserving Ad Measurement**

Ad click measurement has traditionally used tracking technology that infringes on user privacy. [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) is a WebKit feature and proposed web standard aimed towards allowing advertisers to measure the effectiveness of web campaigns without compromising on user privacy.

The feature has little privacy concerns on its own, so while you can choose to leave it on, we consider the fact that it's automatically disabled in Private Browsing to be an indicator for disabling the feature.

##### Apple Pay

If you do not use Apple Pay, you can toggle off the ability for websites to check for it.

- [ ] Disable **Allow websites to check for Apple Pay and Apple Card**

##### Always-on Private Browsing

Open Safari and tap the Tabs button, located in the bottom right. Then, expand the Tab Groups list.

- [x] Select **Private**

Safari's Private Browsing mode offers additional privacy protections. Private Browsing uses a new [ephemeral](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) session for each tab, meaning tabs are isolated from one another. There are also other smaller privacy benefits with Private Browsing, such as not sending a webpage’s address to Apple when using Safari's translation feature.

Do note that Private Browsing does not save cookies and website data, so it won't be possible to remain signed into sites. This may be an inconvenience.

##### iCloud Sync

While synchronization of Safari History, Tab Groups, and iCloud Tabs uses E2EE, bookmarks sync does [not](https://support.apple.com/en-us/HT202303); they are only encrypted in transit and stored in an encrypted format on Apple's servers. Apple may be able to decrypt and access them.

If you use iCloud, we also recommend checking to ensure Safari's default download location is set to locally on your device. This option can be found in :gear: **Settings** → **Safari** → **General** → **Downloads**.

#### Extensions

We generally do not recommend installing [any extensions](https://www.sentinelone.com/blog/inside-safari-extensions-malware-golden-key-user-data/) as they increase your browser's attack surface; however, if you want content blocking, [AdGuard for Safari](#additional-resources) might be useful to you.

## Additional Resources

### uBlock Origin

!!! recommendation

    ![uBlock Origin logo](assets/img/browsers/ublock_origin.svg){ align=right }

    **uBlock Origin** is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts.

    We suggest enabling all of the [filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) under the "Ads," "Privacy," and "Malware domains". The "Annoyances" and "Multipurpose" lists can also be enabled, but they may break some social media functions. The *AdGuard URL Tracking Protection* filter list makes extensions like CleanURLs and NeatURLs redundant.

    [Extension Info](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }

    ??? downloads

        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
        - [:fontawesome-brands-opera: Opera](https://addons.opera.com/extensions/details/ublock)
        - [:fontawesome-brands-github: Source](https://github.com/gorhill/uBlock)

We also suggest adding the [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt) list and any of the regional lists that might apply to your browsing habits. To add this list, first access settings by clicking on the uBO icon, then the settings icon ( :gear: ). Go to the bottom of the Filter lists pane and place a checkmark next to Import under the Custom section. Paste the URL of the filter list above into the text area that appears below and click "Apply changes".

Additional filter lists do slow things down and may increase your attack surface, so only apply what you need.

uBlock Origin also has different [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode). The easy mode [might not](https://www.ranum.com/security/computer_security/editorials/dumb/) necessarily keep you safe from every tracker out there, whereas the more advanced modes let you control exactly what needs to run.

### AdGuard for Safari

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }

    **AdGuard for Safari** is a free and open-source content-blocking extension for Safari that uses the native [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker). 

    We suggest enabling the filters labled *#recommended* under the "Ad Blocking" and "Privacy" [content blockers](https://kb.adguard.com/en/safari/overview#content-blockers). The *#recommended* filters can also be enabled for the "Social Widgets" and "Annoyances" content blockers, but they may break some social media functions.

    [Website](https://adguard.com/en/adguard-safari/overview.html){ .md-button .md-button--primary } [Privacy Policy](https://adguard.com/en/privacy/safari.html){ .md-button }

    ??? downloads

        - [:fontawesome-brands-safari: Safari](https://apps.apple.com/app/adguard-for-safari/id1440147259)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/apple-store/id1047223162)
        - [:fontawesome-brands-git: Source](https://github.com/AdguardTeam/AdGuardForSafari)

Additional filter lists do slow things down and may increase your attack surface, so only apply what you need.

There is also [AdGuard for iOS](https://adguard.com/en/adguard-ios/overview.html) which is able to perform system-wide content blocking by means of DNS filtering.

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }

    **Snowflake** is a browser extension which allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser. People who are censored can use Snowflake proxies to connect to the Tor network. Installing this extension is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.

    [Website](https://snowflake.torproject.org/){ .md-button .md-button--primary }

The Snowflake browser extension does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy. Their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even moreso than running a Tor relay or bridge which are already not particularly risky endeavours. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

### Terms of Service; Didn't Read

!!! recommendation

    ![Terms of Service; Didn't Read logo](assets/img/browsers/terms_of_service_didnt_read.svg){ align=right }

    **Terms of Service; Didn't Read** grades websites based on their terms of service agreements and privacy policies. It also gives short summaries of those agreements. The analyses and ratings are published transparently by a community of reviewers.

    [Website](https://tosdr.org){ .md-button .md-button--primary } [Privacy Policy](https://addons.mozilla.org/firefox/addon/terms-of-service-didnt-read/privacy){ .md-button }

We do not recommend installing ToS;DR as a browser extension. The same information is provided on their website.

--8<-- "includes/abbreviations.en.md"

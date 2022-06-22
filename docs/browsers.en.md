---
title: "Web Browsers"
icon: octicons/browser-16
---
These are our currently recommended web browsers and configurations. In general, we recommend keeping extensions to a minimum: they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.

## General Recommendations

### Tor Browser

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }

    **Tor Browser** is the choice if you need anonymity, as it provides you with access to the Tor Bridges and [Tor Network](https://en.wikipedia.org/wiki/Tor_(network)), along with settings and extensions that are automatically configured by the default security levels: *Standard*, *Safer* and *Safest*.

    The Tor Browser is designed to prevent fingerprinting, or identifying you based on your browser configuration. Therefore, it is imperative that you do **not** modify the browser beyond the default [security levels](https://tb-manual.torproject.org/security-settings/).

    For further information about the Tor Browser we suggest taking a look at the [manual](https://tb-manual.torproject.org/about/).

    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:pg-tor:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title=Onion }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.torproject.org/download/)
        - [:fontawesome-brands-apple: macOS](https://www.torproject.org/download/)
        - [:fontawesome-brands-linux: Linux](https://www.torproject.org/download/)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.github.micahflee.torbrowser-launcher)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid/)

!!! danger

    You should **never** install any additional extensions on Tor Browser, including the ones we suggest for Firefox. Nor should you manually enable HTTPS-only mode or edit `about:config` settings. Browser extensions and non-standard settings make you stand out from others on the Tor network, thus making your browser easier to [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

## Desktop Recommendations

We recommend Brave over Firefox as it is easier to configure for most people, neither of them are better than the other. You can chose either one.

### Brave

!!! recommendation

    ![Brave logo](assets/img/browsers/brave.svg){ align=right }

    **Brave Browser** includes a built in content blocker and [privacy features](https://brave.com/privacy-features/), many of which are enabled by default.

    Brave is built upon the Chromium web browser project, so it should feel familiar and have minimal website compatibility issues.

    We don't recommend Brave's mobile browser offerings as there are better [options](#mobile-recommendations) for mobile platforms.

    [:octicons-home-16: Homepage](https://brave.com/){ .md-button .md-button--primary }
    [:pg-tor:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title=Onion }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Source Code" }

    ??? downloads annotate

        - [:fontawesome-brands-windows: Windows](https://brave.com/download/)
        - [:fontawesome-brands-apple: macOS](https://brave.com/download/)
        - [:fontawesome-brands-linux: Linux](https://brave.com/linux/) (1)

    1. We advise against using the Flatpak version of Brave, as it replaces Chromium's sandbox with Flatpak's, which is less effective. Additionally, the package is not maintained by Brave Software, Inc.

#### Recommended Configuration

Tor Browser is the only way to truly browse the internet anonymously. When you use Brave we recommend changing the following settings to protect your privacy from certain parties, but all browsers other than the [Tor Browser](#tor-browser) will be traceable by *somebody* in some regard or another.

These options can be found in :material-menu: → **Settings**.

##### Shields

Brave includes some anti-fingerprinting measures in its [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) feature. We suggest configuring these options [globally](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) across all pages that you visit.

Shields' options can be downgraded on a per-site basis as needed, but by default we recommend setting the following:

<div class="annotate" markdown>

- [x] Select **Aggressive** under Trackers & ads blocking

    ??? warning "Use default filter lists"
        Brave allows you to select additional content filters within the internal `brave://adblock` page. We advise against using this feature; instead, keep the default filter lists. Using extra lists will make you stand out from other Brave users and may also increase attack surface if there is an exploit in Brave and a malicious rule is added to one of the lists you use.

- [x] (Optional) Select **Block Scripts** (1)
- [x] Select **Strict, may break sites** under Block fingerprinting

</div>

1. This option provides functionality similar to uBlock Origin's advanced [blocking modes](https://github.com/gorhill/uBlock/wiki/Blocking-mode) or the [NoScript](https://noscript.net/) extension.

##### Social media blocking

- [ ] Uncheck all social media components

##### Privacy and Security

- [ ] Select **Disable Non-Proxied UDP** under [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Uncheck **Use Google services for push messaging**
- [ ] Uncheck **Allow privacy-preserving product analytics (P3A)**
- [ ] Uncheck **Automatically send daily usage ping to Brave**
- [x] Select **Always use secure connections** in the **Security** menu

    !!! important "Sanitizing on Close"
        - [x] Select **Clear cookies and site data when you close all windows** in the *Cookies and other site data* menu

        If you wish to stay logged in to a particular site you visit often, you can set exceptions on a per-site basis under the *Customized behaviors* section.

##### Extensions

Disable built-in extensions you do not use in **Extensions**

<div class="annotate" markdown>

- [ ] Uncheck **Hangouts**
- [ ] Uncheck **Private window with Tor** (1)
- [ ] Uncheck **WebTorrent**

</div>

1. Brave is **not** as resistant to fingerprinting as the Tor Browser and far fewer people use Brave with Tor, so you will stand out. Where [strong anonymity is required](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) use the [Tor Browser](#tor-browser).

##### IPFS

InterPlanetary File System (IPFS) is a decentralized, peer-to-peer network for storing and sharing data in a distributed filesystem. Unless you use the feature, disable it.

- [ ] Select **Disabled** on Method to resolve IPFS resources

##### Additional settings

Under the system *System* menu

<div class="annotate" markdown>

- [ ] Uncheck **Continue running apps when Brave is closed** to disable background apps (1)

</div>

1. This option is not present on all platforms.

### Firefox

!!! recommendation

    ![Firefox logo](assets/img/browsers/firefox.svg){ align=right }

    **Firefox** provides strong privacy settings such as [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), which can help block various [types of tracking](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).

    [:octicons-home-16: Homepage](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/firefox/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title=Documentation}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.mozilla.org/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.mozilla.org/firefox/windows)
        - [:fontawesome-brands-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:fontawesome-brands-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.firefox)

!!! warning
    Firefox includes a unique [download token](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) in downloads from Mozilla's website and uses telemetry in Firefox to send the token. The token is **not** included in releases from the [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

#### Recommended Configuration

Tor Browser is the only way to truly browse the internet anonymously. When you use Firefox we recommend changing the following settings to protect your privacy from certain parties, but all browsers other than [Tor Browser](#tor-browser) will be traceable by *somebody* in some regard or another.

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

#### Arkenfox (advanced)

The [Arkenfox project](https://github.com/arkenfox/user.js) provides a set of carefully considered options for Firefox. If you [decide](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) to use Arkenfox, a [few options](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) are subjectively strict and/or may cause some websites to not work properly - [which you can easily change](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) to suit your needs. We **strongly recommend** reading through their full [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox also enables [container](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users) support.

## Mobile Recommendations

On Android, Firefox is still less secure than Chromium-based alternatives: Mozilla's engine, [GeckoView](https://mozilla.github.io/geckoview/), has yet to support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) or enable [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

On iOS, any app that can browse the web is [restricted](https://developer.apple.com/app-store/review/guidelines) to using an Apple-provided [WebKit framework](https://developer.apple.com/documentation/webkit), so there is little reason to use a third-party web browser.

### Bromite

!!! recommendation

    ![Bromite logo](assets/img/browsers/bromite.svg){ align=right }

    **Bromite** is a Chromium-based browser with privacy and security enhancements, built-in ad blocking, and some fingerprinting randomization.

    [:octicons-home-16: Homepage](https://www.bromite.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.bromite.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/bromite/bromite/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bromite/bromite){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/bromite/bromite#donate){ .card-link title=Contribute }

    ??? downloads annotate

        - [:pg-f-droid: F-Droid](https://www.bromite.org/fdroid) (1)

    1. If you use [Neo Store](/android/#neo-store), you can enable the *Bromite repository* in:<br> :material-dots-vertical: → **Repositories**

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

    [:octicons-home-16: Homepage](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Documentation}

#### Recommended Configuration

These options can be found in :gear: **Settings** → **Safari** → **Privacy and Security**.

##### Cross-Site Tracking Prevention

- [x] Enable **Prevent Cross-Site Tracking**

This enables WebKit's [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp). The feature helps protect against unwanted tracking by using on-device machine learning to stop trackers. ITP protects against many common threats, but it does not block all tracking avenues because it is designed to not interfere with website usability.

##### Privacy Report

Privacy Report provides a snapshot of cross-site trackers currently prevented from profiling you on the website you're visiting. It can also display a weekly report to show which trackers have been blocked over time.

Privacy Report is accessible via the Page Settings menu (:pg-textformat-size:).

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

Synchronization of Safari History, Tab Groups, iCloud Tabs, and saved passwords are E2EE. However, bookmarks are [not](https://support.apple.com/en-us/HT202303). Apple can decrypt and access them in accordance with their [privacy policy](https://www.apple.com/legal/privacy/en-ww/).

If you use iCloud, we also recommend checking to ensure Safari's default download location is set to locally on your device. This option can be found in :gear: **Settings** → **Safari** → **General** → **Downloads**.

## Additional Resources

We generally do not recommend installing any extensions as they increase your attack surface. However, uBlock Origin or AdGuard may prove useful if you value content blocking functionality.

### uBlock Origin

!!! recommendation

    ![uBlock Origin logo](assets/img/browsers/ublock_origin.svg){ align=right }

    **uBlock Origin** is a popular content blocker that could help you block ads, trackers, and fingerprinting scripts.

    [:octicons-repo-16: Repository](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

We suggest leaving the extension in its default configuration. Additional filter lists can impact performance and may increase attack surface, so only apply what you need. If there is a [vulnerability in uBlock Origin](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css) a third party filter could add malicious rules that can potentially steal user data.

### AdGuard for iOS

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }

    **AdGuard for iOS** is a free and open-source content-blocking extension for Safari that uses the native [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).

    AdGuard for iOS has some premium features, however standard Safari content blocking is free of charge.

    [:octicons-home-16: Homepage](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Additional filter lists do slow things down and may increase your attack surface, so only apply what you need.

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }

    **Snowflake** allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser.

    People who are censored can use Snowflake proxies to connect to the Tor network. Snowflake is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.

    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/){ .card-link title=Firefox }
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie){ .card-link title=Chrome }
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Embedded Snowflake"

    You can enable Snowflake in your browser by clicking the switch below and ==leaving this page open==. You can also install Snowflake as a browser extension to have it always run while your browser is open, however adding third-party extensions can increase your attack surface.

    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>If the embed does not appear for you, ensure you are not blocking the third-party frame from `torproject.org`. Alternatively, visit [this page](https://snowflake.torproject.org/embed.html).</small>

Snowflake does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even moreso than running a Tor relay or bridge which are already not particularly risky endeavours. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

### Terms of Service; Didn't Read

!!! recommendation

    ![Terms of Service; Didn't Read logo](assets/img/browsers/terms_of_service_didnt_read.svg){ align=right }

    **Terms of Service; Didn't Read** grades websites based on their terms of service agreements and privacy policies. It also gives short summaries of those agreements. The analyses and ratings are published transparently by a community of reviewers.

    [:octicons-globe-16: Website](https://tosdr.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://docs.tosdr.org/sp/tosdr.org-Privacy-Policy.89456373.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.tosdr.org/index.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://tosdr.org/donate){ .card-link title=Contribute }

We do not recommend installing ToS;DR as a browser extension; the same information is also provided on their website.

--8<-- "includes/abbreviations.en.md"

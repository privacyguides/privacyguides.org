---
meta_title: "Ad-Free Privacy Tool/Service Recommendations - Privacy Guides"
title: "Privacy Tools"
icon: material/tools
hide:
  - toc
description: A complete list of the privacy tools, services, software, and hardware recommended by the Privacy Guides community.
---

If you're looking for a specific solution to something, these are the hardware and software tools we recommend in a variety of categories. Our recommended privacy tools are primarily chosen based on security features, with additional emphasis on decentralized and open-source tools. They are applicable to a variety of threat models ranging from protection against global mass surveillance programs and avoiding big tech companies to mitigating attacks, but only you can determine what will work best for your needs.

<div class="grid" markdown>

<div markdown>
[VPN Providers](vpn.md){ .md-button }
[Password Managers](passwords.md){ .md-button }
[Email Providers](email.md){ .md-button }
[Browser Extensions](browser-extensions.md){ .md-button }
[DNS Servers](dns.md){ .md-button }
[Email Aliasing Services](email-aliasing.md){ .md-button }
[Photo Organization Tools](photo-management.md){ .md-button }
</div>

</div>

<div markdown>

<div class="admonition info" markdown>

[Self-hosting recommendations](self-hosting/index.md) have been moved to their own category.

</div>

</div>

If you want assistance figuring out the best privacy tools and alternative programs for your needs, start a discussion on our [forum](https://discuss.privacyguides.net) or our [Matrix](https://matrix.to/#/#privacyguides:matrix.org) community!

For more details about each project, why they were chosen, and additional tips or tricks we recommend, click the "Learn more" link in each section, or click on the recommendation itself to be taken to that specific section of the page.

<div class="grid" markdown>

<div markdown>
- [x] **Ad-Free Recommendations**
- [x] **Frequent Updates**
- [x] **Trusted by Readers**
</div>

<div markdown>
- [x] **Complete Editorial Independence**
- [x] **Open-Source Contributions**
- [x] **Trusted by Journalists**
</div>

</div>

## Private Web Browsers

<div class="admonition recommendation" markdown>

![Tor Browser logo](assets/images/browsers/tor.svg){ align=left }

**Tor Browser** (Desktop & Android) is the top choice if you need anonymity, as it provides you with access to the **Tor** network, a group of volunteer-operated servers that allows you to connect for free and improve your privacy and security on the Internet. Individuals and organizations can also share information over the Tor network with ".onion hidden services" without compromising their privacy. Because Tor traffic is difficult to block and trace, Tor is an effective censorship circumvention tool.

[Read Our Full Review :material-arrow-right-drop-circle:](tor.md){ .md-button .md-button--primary }

</div>

<div class="grid cards" markdown>

- ![Mullvad Browser logo](assets/images/browsers/mullvad_browser.svg){ .lg .middle .twemoji } **Mullvad Browser**

    ---

    **Mullvad Browser** is a version of [Tor Browser](tor.md#tor-browser) with Tor network integrations removed, aimed at providing Tor Browser's anti-fingerprinting browser technologies to VPN users.

    - [Read Full Review :material-arrow-right-drop-circle:](desktop-browsers.md#mullvad-browser)

- ![Firefox logo](assets/images/browsers/firefox.svg){ .lg .middle .twemoji } **Firefox**

    ---

    **Firefox** is a great Chromium alternative which provides strong privacy settings such as [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), which can help block various [types of tracking](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).

    - [Read Full Review :material-arrow-right-drop-circle:](desktop-browsers.md#firefox)

- ![Brave logo](assets/images/browsers/brave.svg){ .lg .middle .twemoji } **Brave Browser**

    ---

    **Brave** is a private-by-default browser based on Chromium, so it should feel familiar and have minimal website compatibility issues.

    - [Brave Desktop Review :material-arrow-right-drop-circle:](desktop-browsers.md#brave)
    - [Brave Mobile Review :material-arrow-right-drop-circle:](mobile-browsers.md#brave)

- ![Safari logo](assets/images/browsers/safari.svg){ .lg .middle .twemoji } **Safari (iOS)**

    ---

    We recommend **Safari** due to its [anti-fingerprinting](https://webkit.org/blog/15697/private-browsing-2-0) features and default tracker blocking. It also separates your cookies in private browsing mode to prevent tracking between tabs.

    - [Read Full Review :material-arrow-right-drop-circle:](mobile-browsers.md#safari-ios)

</div>

<div class="grid" markdown>

<div markdown>
### Browser Extensions

<div class="grid cards" markdown>

- ![uBlock Origin logo](assets/images/browsers/ublock_origin.svg){ .twemoji loading=lazy } [uBlock Origin](browser-extensions.md#ublock-origin)
- ![uBlock Origin Lite logo](assets/images/browsers/ublock_origin_lite.svg){ .twemoji loading=lazy } [uBlock Origin Lite](browser-extensions.md#ublock-origin-lite)
- ![AdGuard logo](assets/images/browsers/adguard.svg){ .twemoji loading=lazy } [AdGuard for iOS](browser-extensions.md#adguard)

</div>

</div>

<div markdown>
### More Tor Network Tools

<div class="grid cards" markdown>

- ![Onion Browser logo](assets/images/self-contained-networks/onion_browser.svg){ .twemoji loading=lazy } [Onion Browser (Tor for iOS)](tor.md#onion-browser-ios)

</div>

</div>

</div>

## Top 3 Private VPN Providers

<details class="danger" markdown>
<summary>VPNs do not provide anonymity</summary>

Using a VPN will **not** keep your browsing habits anonymous, nor will it add additional security to non-secure (HTTP) traffic.

If you are looking for **anonymity**, you should use the Tor Browser.

If you're looking for added **security**, you should always ensure you're connecting to websites using HTTPS. A VPN is not a replacement for good security practices.

[Learn more :material-arrow-right-drop-circle:](vpn.md)

</details>

<div class="grid cards" markdown>

- ![Proton VPN logo](assets/images/vpn/protonvpn.svg){ .lg .middle .twemoji } **Proton VPN**

    ---

    - [x] **112+ Countries**
    - [x] WireGuard Support
    - [x] Cash Payments
    - [x] Partial Port Forwarding Support
    - [ ] No IPv6

    [Read Full Review :material-arrow-right-drop-circle:](vpn.md#proton-vpn)

- ![IVPN logo](assets/images/vpn/mini/ivpn.svg){ .lg .middle .twemoji } **IVPN**

    ---

    - [x] **37+ Countries**
    - [x] WireGuard Support
    - [x] Monero & Cash Payments
    - [ ] No Port Forwarding
    - [ ] No IPv6

    [Read Full Review :material-arrow-right-drop-circle:](vpn.md#ivpn)

- ![Mullvad logo](assets/images/vpn/mullvad.svg){ .lg .middle .twemoji } **Mullvad**

    ---

    - [x] **49+ Countries**
    - [x] WireGuard Support
    - [x] Monero & Cash Payments
    - [ ] No Port Forwarding
    - [x] IPv6 Support

    [Read Full Review :material-arrow-right-drop-circle:](vpn.md#mullvad)

</div>

## Top 3 Private Email Providers

<div class="grid cards" markdown>

- ![Proton Mail logo](assets/images/email/protonmail.svg){ .lg .middle .twemoji } **Proton Mail**

    ---

    Proton Mail is an email service with a focus on privacy, encryption, security, and ease of use. They have been in operation since 2013. Proton AG is based in Geneva, Switzerland. The Proton Mail Free plan comes with 500 MB of Mail storage, which you can increase up to 1 GB for free.

    [Read Full Review :material-arrow-right-drop-circle:](email.md#proton-mail)

- ![Mailbox Mail logo](assets/images/email/mailbox-mail.svg){ .lg .middle .twemoji } **Mailbox Mail**

    ---

    Mailbox Mail (formerly *Mailbox.org*) is an email service with a focus on being secure, ad-free, and powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox Mail is based in Berlin, Germany. Accounts start with up to 2 GB storage, which can be upgraded as needed.

    [Read Full Review :material-arrow-right-drop-circle:](email.md#mailbox-mail)

- ![Tuta logo](assets/images/email/tuta.svg#only-light){ .lg .middle .twemoji }![Tuta logo](assets/images/email/tuta-dark.svg#only-dark){ .lg .middle .twemoji } **Tuta**

    ---

    Tuta (formerly *Tutanota*) is an email service with a focus on security and privacy through the use of encryption. Tuta has been in operation since 2011 and is based in Hanover, Germany. Free accounts start with 1 GB of storage.

    [Read Full Review :material-arrow-right-drop-circle:](email.md#tuta)

</div>

<div class="grid" markdown>

<div markdown>
### Email Aliasing Services

<div class="grid cards" markdown>

- ![Addy.io logo](assets/images/email-aliasing/addy.svg){ .twemoji loading=lazy } [Addy.io](email-aliasing.md#addyio)
- ![SimpleLogin logo](assets/images/email-aliasing/simplelogin.svg){ .twemoji loading=lazy } [SimpleLogin](email-aliasing.md#simplelogin)

</div>

</div>

</div>

### Secure Email Clients

<div class="grid cards" markdown>

- ![Thunderbird logo](assets/images/email-clients/thunderbird.svg){ .twemoji loading=lazy } [Thunderbird](email-clients.md#thunderbird)
- ![Apple Mail logo](assets/images/email-clients/applemail.png){ .twemoji loading=lazy } [Apple Mail (macOS)](email-clients.md#apple-mail-macos)
- ![FairEmail logo](assets/images/email-clients/fairemail.svg){ .twemoji loading=lazy } [FairEmail (Android)](email-clients.md#fairemail-android)
- ![GNOME Evolution logo](assets/images/email-clients/evolution.svg){ .twemoji loading=lazy } [GNOME Evolution (Linux)](email-clients.md#gnome-evolution-gnome)
- ![Kontact logo](assets/images/email-clients/kontact.svg){ .twemoji loading=lazy } [Kontact (Linux)](email-clients.md#kontact-kde)
- ![Mailvelope logo](assets/images/email-clients/mailvelope.svg){ .twemoji loading=lazy } [Mailvelope (PGP in standard webmail)](email-clients.md#mailvelope-browser)
- ![NeoMutt logo](assets/images/email-clients/mutt.svg){ .twemoji loading=lazy } [NeoMutt (CLI)](email-clients.md#neomutt-cli)

</div>

[Learn more :material-arrow-right-drop-circle:](email-clients.md)

## More Private Service Providers

### Cloud Storage

<div class="grid cards" markdown>

- ![Proton Drive logo](assets/images/cloud/protondrive.svg){ .twemoji loading=lazy } [Proton Drive](cloud.md#proton-drive)
- ![Tresorit logo](assets/images/cloud/tresorit.svg){ .twemoji loading=lazy } [Tresorit](cloud.md#tresorit)
- ![Peergos logo](assets/images/cloud/peergos.svg){ .twemoji loading=lazy } [Peergos](cloud.md#peergos)

</div>

[Learn more :material-arrow-right-drop-circle:](cloud.md)

### Data Removal Services

<div class="grid cards" markdown>

- ![EasyOptOuts logo](assets/images/data-broker-removals/easyoptouts.svg){ .twemoji loading=lazy } [EasyOptOuts](data-broker-removals.md#easyoptouts-paid)
- ![Google logo](assets/images/data-broker-removals/google.svg){ .twemoji loading=lazy } [Google *Results about you*](data-broker-removals.md#google-results-about-you-free)

</div>

[Learn more :material-arrow-right-drop-circle:](data-broker-removals.md)

### DNS

#### DNS Providers

We [recommend](dns.md#recommended-providers) a number of encrypted DNS servers based on a variety of criteria, such as [Quad9](https://quad9.net) amongst others. We recommend for you to read our pages on DNS before choosing a provider. In many cases, using an alternative DNS provider is not recommended.

[Learn more :material-arrow-right-drop-circle:](dns.md)

#### Encrypted DNS Proxies

<div class="grid cards" markdown>

- ![RethinkDNS logo](assets/images/android/rethinkdns.svg#only-light){ .twemoji loading=lazy }![RethinkDNS logo](assets/images/android/rethinkdns-dark.svg#only-dark){ .twemoji loading=lazy } [RethinkDNS](dns.md#rethinkdns)
- ![DNSCrypt-Proxy logo](assets/images/dns/dnscrypt-proxy.svg){ .twemoji loading=lazy } [DNSCrypt-Proxy](dns.md#dnscrypt-proxy)

</div>

[Learn more :material-arrow-right-drop-circle:](dns.md#encrypted-dns-proxies)

### Financial Services

#### Payment Masking Services

<div class="grid cards" markdown>

- ![Privacy.com logo](assets/images/financial-services/privacy_com.svg#only-light){ .twemoji loading=lazy }![Privacy.com logo](assets/images/financial-services/privacy_com-dark.svg#only-dark){ .twemoji loading=lazy } [Privacy.com](financial-services.md#privacycom-us)
- ![MySudo logo](assets/images/financial-services/mysudo.svg#only-light){ .twemoji loading=lazy }![MySudo logo](assets/images/financial-services/mysudo-dark.svg#only-dark){ .twemoji loading=lazy } [MySudo](financial-services.md#mysudo-us-paid)

</div>

[Learn more :material-arrow-right-drop-circle:](financial-services.md#payment-masking-services)

#### Online Gift Card Marketplaces

<div class="grid cards" markdown>

- ![Coincards logo](assets/images/financial-services/coincards.svg){ .twemoji loading=lazy } [Coincards](financial-services.md#coincards)

</div>

[Learn more :material-arrow-right-drop-circle:](financial-services.md#gift-card-marketplaces)

### Photo Management

<div class="grid cards" markdown>

- ![Ente logo](assets/images/photo-management/ente.svg){ .twemoji loading=lazy } [Ente Photos](photo-management.md#ente-photos)

</div>

[Learn more :material-arrow-right-drop-circle:](photo-management.md)

### Search Engines

<div class="grid cards" markdown>

- ![Brave Search logo](assets/images/search-engines/brave-search.svg){ .twemoji loading=lazy } [Brave Search](search-engines.md#brave-search)
- ![DuckDuckGo logo](assets/images/search-engines/duckduckgo.svg){ .twemoji loading=lazy } [DuckDuckGo](search-engines.md#duckduckgo)
- ![SearXNG logo](assets/images/search-engines/searxng.svg){ .twemoji loading=lazy } [SearXNG](search-engines.md#searxng)
- ![Startpage logo](assets/images/search-engines/startpage.svg#only-light){ .twemoji loading=lazy }![Startpage logo](assets/images/search-engines/startpage-dark.svg#only-dark){ .twemoji loading=lazy } [Startpage](search-engines.md#startpage)

</div>

[Learn more :material-arrow-right-drop-circle:](search-engines.md)

## Software

### AI Chat

<div class="grid cards" markdown>

- ![Kobold logo](assets/images/ai-chat/kobold.png){ .twemoji loading=lazy } [Kobold.cpp](ai-chat.md#koboldcpp)
- ![Llamafile logo](assets/images/ai-chat/llamafile.webp){ .twemoji loading=lazy } [Llamafile](ai-chat.md#llamafile)
- ![Ollama logo](assets/images/ai-chat/ollama.png){ .twemoji loading=lazy } [Ollama (CLI)](ai-chat.md#ollama-cli)

</div>

[Learn more :material-arrow-right-drop-circle:](ai-chat.md)

### Calendar Sync

<div class="grid cards" markdown>

- ![Tuta logo](assets/images/email/tuta.svg#only-light){ .twemoji loading=lazy }![Tuta logo](assets/images/email/tuta-dark.svg#only-dark){ .twemoji loading=lazy } [Tuta](calendar.md#tuta)
- ![Proton Calendar logo](assets/images/calendar/proton-calendar.svg){ .twemoji loading=lazy } [Proton Calendar](calendar.md#proton-calendar)

</div>

[Learn more :material-arrow-right-drop-circle:](calendar.md)

### Cryptocurrency

<div class="grid cards" markdown>

- ![Monero logo](assets/images/cryptocurrency/monero.svg){ .twemoji loading=lazy } [Monero](cryptocurrency.md#monero)

</div>

[Learn more :material-arrow-right-drop-circle:](cryptocurrency.md)

### Data and Metadata Redaction

<div class="grid cards" markdown>

- ![MAT2 logo](assets/images/data-redaction/mat2.svg){ .twemoji loading=lazy } [MAT2](data-redaction.md#mat2)
- ![Metadata Cleaner](assets/images/data-redaction/metadatacleaner.svg){ .twemoji loading-lazy } [Metadata Cleaner](data-redaction.md#metadata-cleaner)
- ![ExifEraser logo](assets/images/data-redaction/exiferaser.svg){ .twemoji loading=lazy } [ExifEraser (Android)](data-redaction.md#exiferaser-android)
- ![ExifTool logo](assets/images/data-redaction/exiftool.png){ .twemoji loading=lazy } [ExifTool (CLI)](data-redaction.md#exiftool-cli)

</div>

[Learn more :material-arrow-right-drop-circle:](data-redaction.md)

### Document Collaboration

<div class="grid cards" markdown>

- ![CryptPad logo](assets/images/document-collaboration/cryptpad.svg){ .twemoji loading=lazy } [CryptPad](document-collaboration.md#cryptpad)

</div>

[Learn more :material-arrow-right-drop-circle:](document-collaboration.md)

### Encryption Software

<details class="info" markdown>
<summary>Operating System Encryption</summary>

For encrypting your OS drive, we typically recommend using the encryption tool your operating system provides, whether that is **BitLocker** on Windows, **FileVault** on macOS, or **LUKS** on Linux. These tools are included with the operating system and take advantage of hardware encryption elements such as a [secure cryptoprocessor](basics/hardware.md/#tpmsecure-cryptoprocessor).

[Learn more :material-arrow-right-drop-circle:](encryption.md#operating-system-encryption)

</details>

#### Cross-Platform Tools

<div class="grid cards" markdown>

- ![Cryptomator logo](assets/images/encryption-software/cryptomator.svg){ .twemoji loading=lazy } [Cryptomator](encryption.md#cryptomator-cloud)
- ![VeraCrypt logo](assets/images/encryption-software/veracrypt.svg#only-light){ .twemoji loading=lazy }![VeraCrypt logo](assets/images/encryption-software/veracrypt-dark.svg#only-dark){ .twemoji loading=lazy } [VeraCrypt (FDE)](encryption.md#veracrypt-disk)
- ![Kryptor logo](assets/images/encryption-software/kryptor.png){ .twemoji loading=lazy } [Kryptor](encryption.md#kryptor)
- ![Tomb logo](assets/images/encryption-software/tomb.png){ .twemoji loading=lazy } [Tomb](encryption.md#tomb)

</div>

[Learn more :material-arrow-right-drop-circle:](encryption.md)

#### OpenPGP Clients

<div class="grid cards" markdown>

- ![GnuPG logo](assets/images/encryption-software/gnupg.svg){ .twemoji loading=lazy } [GnuPG](encryption.md#gnu-privacy-guard)
- ![GPG4Win logo](assets/images/encryption-software/gpg4win.svg){ .twemoji loading=lazy } [GPG4Win (Windows)](encryption.md#gpg4win)
- ![GPG Suite logo](assets/images/encryption-software/gpgsuite.png){ .twemoji loading=lazy } [GPG Suite (macOS)](encryption.md#gpg-suite)
- ![OpenKeychain logo](assets/images/encryption-software/openkeychain.svg){ .twemoji loading=lazy } [OpenKeychain](encryption.md#openkeychain)

</div>

[Learn more :material-arrow-right-drop-circle:](encryption.md#openpgp)

### File Sharing and Sync

<div class="grid cards" markdown>

- ![Send logo](assets/images/file-sharing-sync/send.svg){ .twemoji loading=lazy } [Send](file-sharing.md#send)
- ![OnionShare logo](assets/images/file-sharing-sync/onionshare.svg){ .twemoji loading=lazy } [OnionShare](file-sharing.md#onionshare)
- ![Syncthing logo](assets/images/file-sharing-sync/syncthing.svg){ .twemoji loading=lazy } [Syncthing](file-sharing.md#syncthing-p2p)

</div>

[Learn more :material-arrow-right-drop-circle:](file-sharing.md)

### Frontends

<div class="grid cards" markdown>

- ![Redlib logo](assets/images/frontends/redlib.svg){ .twemoji loading=lazy } [Redlib (Reddit, Web)](frontends.md#redlib)
- ![FreeTube logo](assets/images/frontends/freetube.svg){ .twemoji loading=lazy } [FreeTube (YouTube, Desktop)](frontends.md#freetube)
- ![LibreTube logo](assets/images/frontends/libretube.svg#only-light){ .twemoji loading=lazy }![LibreTube logo](assets/images/frontends/libretube-dark.svg#only-dark){ .twemoji loading=lazy } [LibreTube (YouTube, Android)](frontends.md#libretube-android)
- ![NewPipe logo](assets/images/frontends/newpipe.svg){ .twemoji loading=lazy } [NewPipe (YouTube, Android)](frontends.md#newpipe-android)
- ![Invidious logo](assets/images/frontends/invidious.svg#only-light){ .twemoji loading=lazy }![Invidious logo](assets/images/frontends/invidious-dark.svg#only-dark){ .twemoji loading=lazy } [Invidious (YouTube, Web)](frontends.md#invidious)
- ![Piped logo](assets/images/frontends/piped.svg){ .twemoji loading=lazy } [Piped (YouTube, Web)](frontends.md#piped)

</div>

[Learn more :material-arrow-right-drop-circle:](frontends.md)

### Health and Wellness Apps

<div class="grid cards" markdown>

- ![Drip logo](assets/images/health-and-wellness/drip.png){ .twemoji loading=lazy } [Drip](health-and-wellness.md#drip)
- ![Euki logo](assets/images/health-and-wellness/euki.svg){ .twemoji loading=lazy } [Euki](health-and-wellness.md#euki)
- ![Apple Health logo](assets/images/health-and-wellness/apple-health.webp#only-light){ .twemoji loading=lazy } ![Apple Health logo](assets/images/health-and-wellness/apple-health-dark.webp#only-dark){ .twemoji loading=lazy } [Apple Health](health-and-wellness.md#apple-health)
- ![Apple Fitness logo](assets/images/health-and-wellness/apple-fitness.webp){ .twemoji loading=lazy } [Apple Fitness](health-and-wellness.md#apple-fitness)
- ![Gadgetbridge logo](assets/images/health-and-wellness/gadgetbridge.svg#only-light){ .twemoji loading=lazy }![Gadgetbridge logo](assets/images/health-and-wellness/gadgetbridge-dark.svg#only-dark){ .twemoji loading=lazy } [Gadgetbridge](health-and-wellness.md#gadgetbridge)
- ![Apple Health logo](assets/images/health-and-wellness/apple-health.webp#only-light){ .twemoji loading=lazy } ![Apple Health logo](assets/images/health-and-wellness/apple-health-dark.webp#only-dark){ .twemoji loading=lazy } [Apple Health Records](health-and-wellness.md#apple-health-records)
- ![CommonHealth logo](assets/images/health-and-wellness/commonhealth.png){ .twemoji loading=lazy } [CommonHealth](health-and-wellness.md#commonhealth)

</div>

[Learn more :material-arrow-right-drop-circle:](health-and-wellness.md)

### Language Tools

<div class="grid cards" markdown>

- ![LibreTranslate logo](assets/images/language-tools/libretranslate.png){ .twemoji } [LibreTranslate](language-tools.md#libretranslate)

</div>

[Learn more :material-arrow-right-drop-circle:](language-tools.md)

### Maps and Navigation Apps

<div class="grid cards" markdown>

- ![Organic Maps logo](assets/images/maps/organic-maps.svg){ .twemoji loading=lazy } [Organic Maps](maps.md#organic-maps)
- ![OsmAnd logo](assets/images/maps/osmand.svg){ .twemoji loading=lazy } [OsmAnd](maps.md#osmand)

</div>

[Learn more :material-arrow-right-drop-circle:](maps.md)

### Multi-Factor Authentication Tools

**Note:** [Hardware security keys](#security-keys) have been moved to their own category.

<div class="grid cards" markdown>

- ![Ente Auth logo](assets/images/multi-factor-authentication/ente-auth.svg){ .twemoji loading=lazy } [Ente Auth](multi-factor-authentication.md#ente-auth)
- ![Aegis logo](assets/images/multi-factor-authentication/aegis.png){ .twemoji loading=lazy } [Aegis Authenticator (Android)](multi-factor-authentication.md#aegis-authenticator-android)

</div>

[Learn more :material-arrow-right-drop-circle:](multi-factor-authentication.md)

### News Aggregators

<div class="grid cards" markdown>

- ![Akregator logo](assets/images/news-aggregators/akregator.svg){ .twemoji loading=lazy } [Akregator](news-aggregators.md#akregator)
- ![NewsFlash logo](assets/images/news-aggregators/newsflash.png){ .twemoji loading=lazy } [NewsFlash](news-aggregators.md#newsflash)
- ![Feeder logo](assets/images/news-aggregators/feeder.png){ .twemoji} [Feeder (Android)](news-aggregators.md#feeder)
- ![Miniflux logo](assets/images/news-aggregators/miniflux.svg#only-light){ .twemoji loading=lazy }![Miniflux logo](assets/images/news-aggregators/miniflux-dark.svg#only-dark){ .twemoji loading=lazy } [Miniflux](news-aggregators.md#miniflux)
- ![NetNewsWire logo](assets/images/news-aggregators/netnewswire.png){ .twemoji loading=lazy } [NetNewsWire](news-aggregators.md#netnewswire)
- ![Newsboat logo](assets/images/news-aggregators/newsboat.svg){ .twemoji loading=lazy } [Newsboat](news-aggregators.md#newsboat)

</div>

[Learn more :material-arrow-right-drop-circle:](news-aggregators.md)

### Notebooks

<div class="grid cards" markdown>

- ![Standard Notes logo](assets/images/notebooks/standard-notes.svg){ .twemoji loading=lazy } [Standard Notes](notebooks.md#standard-notes)
- ![Notesnook logo](assets/images/notebooks/notesnook.svg){ .twemoji loading=lazy } [Notesnook](notebooks.md#notesnook)
- ![Joplin logo](assets/images/notebooks/joplin.svg){ .twemoji loading=lazy } [Joplin](notebooks.md#joplin)
- ![Cryptee logo](assets/images/notebooks/cryptee.svg#only-light){ .twemoji loading=lazy }![Cryptee logo](assets/images/notebooks/cryptee-dark.svg#only-dark){ .twemoji loading=lazy } [Cryptee](notebooks.md#cryptee)
- ![Org-mode logo](assets/images/notebooks/org-mode.svg){ .twemoji loading=lazy } [Org-mode](notebooks.md#org-mode)

</div>

[Learn more :material-arrow-right-drop-circle:](notebooks.md)

### Office Suites

<div class="grid cards" markdown>

- ![LibreOffice logo](assets/images/office-suites/libreoffice.svg){ .twemoji loading=lazy } [LibreOffice](office-suites.md#libreoffice)
- ![OnlyOffice logo](assets/images/office-suites/onlyoffice.svg){ .twemoji loading=lazy } [OnlyOffice](office-suites.md#onlyoffice)

</div>

[Learn more :material-arrow-right-drop-circle:](office-suites.md)

### Password Managers

<div class="grid cards" markdown>

- ![Bitwarden logo](assets/images/password-management/bitwarden.svg){ .twemoji loading=lazy } [Bitwarden](passwords.md#bitwarden)
- ![Proton Pass logo](assets/images/password-management/protonpass.svg){ .twemoji loading=lazy } [Proton Pass](passwords.md#proton-pass)
- ![1Password logo](assets/images/password-management/1password.svg){ .twemoji loading=lazy } [1Password](passwords.md#1password)
- ![Psono logo](assets/images/password-management/psono.svg){ .twemoji loading=lazy } [Psono](passwords.md#psono)
- ![KeePassXC logo](assets/images/password-management/keepassxc.svg){ .twemoji loading=lazy } [KeePassXC](passwords.md#keepassxc)
- ![KeePassDX logo](assets/images/password-management/keepassdx.svg){ .twemoji loading=lazy } [KeePassDX (Android)](passwords.md#keepassdx-android)
- ![KeePassium logo](assets/images/password-management/keepassium.svg){ .twemoji loading=lazy } [KeePassium (iOS & macOS)](passwords.md#keepassium-ios-macos)
- ![Gopass logo](assets/images/password-management/gopass.svg){ .twemoji loading=lazy } [Gopass (CLI)](passwords.md#gopass-cli)

</div>

[Learn more :material-arrow-right-drop-circle:](passwords.md)

### Pastebins

<div class="grid cards" markdown>

- ![PrivateBin logo](assets/images/pastebins/privatebin.svg){ .twemoji loading=lazy } [PrivateBin](pastebins.md#privatebin)
- ![Paaster logo](assets/images/pastebins/paaster.svg){ .twemoji loading=lazy } [Paaster](pastebins.md#paaster)

</div>

[Learn more :material-arrow-right-drop-circle:](pastebins.md)

### Real-Time Communication

<div class="grid cards" markdown>

- ![Signal logo](assets/images/messengers/signal.svg){ .twemoji loading=lazy } [Signal](real-time-communication.md#signal)
- ![Briar logo](assets/images/messengers/briar.svg){ .twemoji loading=lazy } [Briar](real-time-communication.md#briar)
- ![SimpleX Chat logo](assets/images/messengers/simplex.svg){ .twemoji loading=lazy } [SimpleX Chat](real-time-communication.md#simplex-chat)

</div>

[Learn more :material-arrow-right-drop-circle:](real-time-communication.md)

### Social Networks

<div class="grid cards" markdown>

- ![Mastodon logo](assets/images/social-networks/mastodon.svg){ .twemoji loading=lazy } [Mastodon](social-networks.md#mastodon)
- ![Element logo](assets/images/social-networks/element.svg){ .twemoji loading=lazy } [Element](social-networks.md#element)

</div>

[Learn more :material-arrow-right-drop-circle:](social-networks.md)

## Hardware

### Security Keys

<div class="grid cards" markdown>

- ![Yubico logo](assets/images/security-keys/mini/yubico.svg){ .twemoji loading=lazy } [Yubico Security Key](security-keys.md#yubico-security-key)
- ![Yubico logo](assets/images/security-keys/mini/yubico.svg){ .twemoji loading=lazy } [YubiKey](security-keys.md#yubikey)
- ![Nitrokey](assets/images/security-keys/mini/nitrokey.svg){ .twemoji loading=lazy } [Nitrokey](security-keys.md#nitrokey)

</div>

[Learn more :material-arrow-right-drop-circle:](security-keys.md)

### Mobile Phones

<div class="grid cards" markdown>

- ![Google Pixel 6](assets/images/android/google-pixel.png){ .twemoji loading=lazy } [Google Pixel](mobile-phones.md#google-pixel)

</div>

[Learn more :material-arrow-right-drop-circle:](mobile-phones.md)

## Operating Systems

### Mobile

#### Custom Android Operating Systems

<div class="grid cards" markdown>

- ![GrapheneOS logo](assets/images/android/grapheneos.svg#only-light){ .twemoji loading=lazy }![GrapheneOS logo](assets/images/android/grapheneos-dark.svg#only-dark){ .twemoji loading=lazy } [GrapheneOS](android/distributions.md#grapheneos)

</div>

[Learn more :material-arrow-right-drop-circle:](android/distributions.md)

#### Android Apps

<div class="grid cards" markdown>

- ![Shelter logo](assets/images/android/mini/shelter.svg){ .twemoji loading=lazy } [Shelter (Work Profiles)](android/general-apps.md#shelter)
- ![Secure Camera logo](assets/images/android/secure_camera.svg#only-light){ .twemoji loading=lazy }![Secure Camera logo](assets/images/android/secure_camera-dark.svg#only-dark){ .twemoji loading=lazy } [Secure Camera](android/general-apps.md#secure-camera)
- ![Secure PDF Viewer logo](assets/images/android/secure_pdf_viewer.svg#only-light){ .twemoji loading=lazy }![Secure PDF Viewer logo](assets/images/android/secure_pdf_viewer-dark.svg#only-dark){ .twemoji loading=lazy } [Secure PDF Viewer](android/general-apps.md#secure-pdf-viewer)

</div>

[Learn more :material-arrow-right-drop-circle:](android/general-apps.md)

#### Ways to Obtain Android Apps

<div class="grid cards" markdown>

- ![Obtainium logo](assets/images/android/obtainium.svg){ .twemoji loading=lazy } [Obtainium (App Manager)](android/obtaining-apps.md#obtainium)
- ![Aurora Store logo](assets/images/android/aurora-store.webp){ .twemoji loading=lazy } [Aurora Store (Google Play Client)](android/obtaining-apps.md#aurora-store)

</div>

[Learn more :material-arrow-right-drop-circle:](android/obtaining-apps.md)

### Desktop/PC

<div class="grid cards" markdown>

- ![Qubes OS logo](assets/images/qubes/qubes_os.svg){ .twemoji loading=lazy } [Qubes OS (Xen VM Distribution)](desktop.md#qubes-os)
- ![Fedora logo](assets/images/linux-desktop/fedora.svg){ .twemoji loading=lazy } [Fedora Linux](desktop.md#fedora-linux)
- ![openSUSE Tumbleweed logo](assets/images/linux-desktop/opensuse-tumbleweed.svg){ .twemoji loading=lazy } [openSUSE Tumbleweed](desktop.md#opensuse-tumbleweed)
- ![Arch logo](assets/images/linux-desktop/archlinux.svg){ .twemoji loading=lazy } [Arch Linux](desktop.md#arch-linux)
- ![Fedora logo](assets/images/linux-desktop/fedora.svg){ .twemoji loading=lazy } [Fedora Atomic Desktops](desktop.md#fedora-atomic-desktops)
- ![NixOS logo](assets/images/linux-desktop/nixos.svg){ .twemoji loading=lazy } [NixOS](desktop.md#nixos)
- ![Whonix logo](assets/images/linux-desktop/whonix.svg){ .twemoji loading=lazy } [Whonix (Tor)](desktop.md#whonix)
- ![Tails logo](assets/images/linux-desktop/tails.svg){ .twemoji loading=lazy } [Tails (Live Boot)](desktop.md#tails)
- ![Secureblue logo](assets/images/linux-desktop/secureblue.svg){ .twemoji loading=lazy } [Secureblue](desktop.md#secureblue)
- ![Kicksecure logo](assets/images/linux-desktop/kicksecure.svg){ .twemoji loading=lazy } [Kicksecure](desktop.md#kicksecure)

</div>

[Learn more :material-arrow-right-drop-circle:](desktop.md)

### Router Firmware

<div class="grid cards" markdown>

- ![OpenWrt logo](assets/images/router/openwrt.svg#only-light){ .twemoji loading=lazy }![OpenWrt logo](assets/images/router/openwrt-dark.svg#only-dark){ .twemoji loading=lazy } [OpenWrt](router.md#openwrt)
- ![OPNsense logo](assets/images/router/opnsense.svg){ .twemoji loading=lazy } [OPNsense](router.md#opnsense)

</div>

[Learn more :material-arrow-right-drop-circle:](router.md)

## Advanced Tools

These tools may provide utility for certain individuals. They provide functionality which most people do not need to worry about, and often require more in-depth technical knowledge to utilize effectively.

### Alternative Networks

<div class="grid cards" markdown>

- ![I2P logo](assets/images/self-contained-networks/i2p.svg#only-light){ .twemoji loading=lazy } ![I2P logo](assets/images/self-contained-networks/i2p-dark.svg#only-dark){ .twemoji loading=lazy } [I2P](alternative-networks.md#i2p-the-invisible-internet-project)
- ![Tor logo](assets/images/self-contained-networks/tor.svg){ .twemoji loading=lazy } [Tor](alternative-networks.md#tor)
- ![Orbot logo](assets/images/self-contained-networks/orbot.svg){ .twemoji loading=lazy } [Orbot (Mobile Tor Proxy)](alternative-networks.md#orbot)
- ![Snowflake logo](assets/images/self-contained-networks/snowflake.svg#only-light){ .twemoji loading=lazy }![Snowflake logo](assets/images/self-contained-networks/snowflake-dark.svg#only-dark){ .twemoji loading=lazy } [Snowflake](alternative-networks.md#snowflake)

</div>

[Learn more :material-arrow-right-drop-circle:](alternative-networks.md)

### Device Integrity Verification

<div class="grid cards" markdown>

- ![MVT logo](assets/images/device-integrity/mvt.webp#only-light){ .twemoji loading=lazy }![MVT logo](assets/images/device-integrity/mvt-dark.png#only-dark){ .twemoji loading=lazy } [Mobile Verification Toolkit](device-integrity.md#mobile-verification-toolkit)
- ![iMazing logo](assets/images/device-integrity/imazing.png){ .twemoji loading=lazy } [iMazing (iOS)](device-integrity.md#imazing-ios)
- ![Auditor logo](assets/images/device-integrity/auditor.svg#only-light){ .twemoji loading=lazy }![Auditor logo](assets/images/device-integrity/auditor-dark.svg#only-dark){ .twemoji loading=lazy } [Auditor (Android)](device-integrity.md#auditor-android)

</div>

[Learn more :material-arrow-right-drop-circle:](device-integrity.md)

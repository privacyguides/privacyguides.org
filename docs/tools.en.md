---
title: "Privacy Tools"
icon: material/tools
hide:
  - toc
---

If you're looking for a specific solution to something, these are the hardware and software tools we recommend in a variety of categories. Our recommended privacy tools are primarily chosen based on security features, with additional emphasis on decentralized and open-source tools. They are applicable to a variety of threat models ranging from protection against global mass surveillance programs and avoiding big tech companies to mitigating attacks, but only you can determine what will work best for your use case.

## Tor Anonymity Network Resources

!!! tool "[![Tor Browser logo](assets/img/browsers/tor.svg){ align=right } **Tor Browser**: Best For Browsing The Web Anonymously](tor.md#tor-browser)"

    Tor Browser is your choice if you need anonymity. It's a fork of Firefox designed for anonymous browsing for desktop computers and Android, and it includes default settings and extensions that are automatically configured based on your set security level.

    <small>More information: [Tor Overview](basics/tor-overview.md)</small>

!!! tool "[![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right } **Orbot**: Proxy All Your Traffic on iOS and Android Over Tor](tor.md#orbot)"

    Orbot is a free Tor VPN for smartphones which routes traffic from any app on your device through the Tor network. Orbot is often outdated on the Guardian Project's F-Droid repository and Google Play, so consider downloading directly from the [GitHub repository](https://github.com/guardianproject/orbot/releases) instead.

!!! tool annotate "[![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right } **Snowflake**: Easily Support the Tor Network by Donating Bandwidth](tor.md#orbot)"

    Snowflake allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser. Snowflake does not increase your privacy, it allows you to easily contribute to the Tor network and help people in censored networks achieve better privacy.

[Learn more :material-arrow-right-drop-circle:](tor.md)

## Desktop Web Browsing

!!! tool "[![Firefox logo](assets/img/browsers/firefox.svg){ align=right } **Firefox**: Browse With Strong Privacy Protections](desktop-browsers.md#firefox)"

    Firefox is a fast, reliable, and secure web browser which provides strong privacy settings such as Enhanced Tracking Protection, which can help block various types of tracking.

!!! tool "[![Brave logo](assets/img/browsers/brave.svg){ align=right } **Brave**: Best Chromium-Based Privacy Browser](desktop-browsers.md#brave)"

    Brave Browser is a private web browser based on the open-source Chromium web browser project, so it should feel familiar to people switching from Google Chrome and have minimal website compatibility issues.

!!! tool "[![uBlock Origin logo](assets/img/browsers/ublock_origin.svg){ align=right } **uBlock Origin**: Block Ads, Trackers, and Fingerprinting Scripts](desktop-browsers.md#ublock-origin)"

    uBlock Origin is a popular content blocker for Firefox and Chromium-based browsers that could help you block ads, trackers, and fingerprinting scripts.

[Learn more :material-arrow-right-drop-circle:](desktop-browsers.md)

## Mobile Web Browsing

!!! tool "[![Brave logo](assets/img/browsers/brave.svg){ align=right } **Brave**: Best Web Browser for Android](mobile-browsers.md#brave)"

    Chromium-based browsers like Brave are the most secure options on Android, because alternative browser platforms do not meet modern security standards. Brave is a great choice, and securely syncs with Brave Browser on the desktop!

!!! tool "[![Safari logo](assets/img/browsers/safari.svg){ align=right } **Safari**: Best Web Browser for iOS](mobile-browsers.md#safari)"

    We recommend Safari for iOS users, because iOS requires all browsers to use Safari's web engine under the hood. If you have to trust iOS and Safari anyways, there's little reason to also trust a third-party browser developer.

!!! tool "[![AdGuard logo](assets/img/browsers/adguard.svg){ align=right } **AdGuard**: Best Content Blocking Extension for iOS](mobile-browsers.md#safari)"

    AdGuard for iOS is a free and open-source content-blocking extension for Safari that uses the native Content Blocker API. AdGuard for iOS has some premium features; however, standard Safari content blocking is free of charge.

[Learn more :material-arrow-right-drop-circle:](mobile-browsers.md)

## Operating Systems

### Android

<div class="grid cards" markdown>

- ![GrapheneOS logo](assets/img/android/grapheneos.svg#only-light){ .twemoji }![GrapheneOS logo](assets/img/android/grapheneos-dark.svg#only-dark){ .twemoji } [GrapheneOS](android.md#grapheneos)
- ![DivestOS logo](assets/img/android/divestos.svg){ .twemoji } [DivestOS](android.md#divestos)

</div>

[Learn more :material-arrow-right-drop-circle:](android.md)

### Android Apps

<div class="grid cards" markdown>

- ![Aurora Store logo](/assets/img/android/aurora-store.webp){ .twemoji } [Aurora Store (Google Play Client)](android.md#aurora-store)
- ![Shelter logo](assets/img/android/mini/shelter.svg){ .twemoji } [Shelter (Work Profiles)](android.md#shelter)
- ![Auditor logo](assets/img/android/auditor.svg#only-light){ .twemoji }![GrapheneOS logo](assets/img/android/auditor-dark.svg#only-dark){ .twemoji } [Auditor (Supported Devices)](android.md#auditor)
- ![Secure Camera logo](assets/img/android/secure_camera.svg#only-light){ .twemoji }![Secure Camera logo](assets/img/android/secure_camera-dark.svg#only-dark){ .twemoji } [Secure Camera](android.md#secure-camera)
- ![Secure PDF Viewer logo](assets/img/android/secure_pdf_viewer.svg#only-light){ .twemoji }![GrapheneOS logo](assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ .twemoji } [Secure PDF Viewer](android.md#secure-pdf-viewer)

</div>

[Learn more :material-arrow-right-drop-circle:](android.md#general-apps)

### Linux

<div class="grid cards annotate" markdown>

- ![Fedora logo](assets/img/linux-desktop/fedora-workstation.svg){ .twemoji } [Fedora Workstation](linux-desktop.md#fedora-workstation)
- ![openSUSE Tumbleweed logo](assets/img/linux-desktop/opensuse-tumbleweed.svg){ .twemoji } [OpenSUSE Tumbleweed](linux-desktop.md#opensuse-tumbleweed)
- ![Arch logo](assets/img/linux-desktop/archlinux.svg){ .twemoji } [Arch Linux](linux-desktop.md#arch-linux)
- ![Fedora Silverblue logo](assets/img/linux-desktop/fedora-silverblue.svg){ .twemoji } [Fedora Silverblue & Kinoite](linux-desktop.md#fedora-silverblue)
- ![nixOS logo](assets/img/linux-desktop/nixos.svg){ .twemoji } [NixOS](linux-desktop.md#nixos)
- ![Whonix logo](assets/img/linux-desktop/whonix.svg){ .twemoji } [Whonix (Tor)](linux-desktop.md#whonix)
- ![Tails logo](assets/img/linux-desktop/tails.svg){ .twemoji } [Tails (Live Boot)](linux-desktop.md#tails)
- ![Qubes OS logo](assets/img/qubes/qubes_os.svg){ .twemoji } [Qubes OS (Xen VM Distribution)](qubes.md) (1)

</div>

1. Qubes uses Xen to provide strong sandboxing between multiple Linux virtual machine installations, and can run most Linux applications. [Learn more about Qubes...](qubes.md)

[Learn more :material-arrow-right-drop-circle:](linux-desktop.md)

### Router Firmware

<div class="grid cards" markdown>

- ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ .twemoji }![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ .twemoji } [OpenWrt](router.md#openwrt)
- ![OPNsense logo](assets/img/router/opnsense.svg){ .twemoji } [OPNsense](router.md#opnsense)

</div>

[Learn more :material-arrow-right-drop-circle:](router.md)

## Service Providers

### Cloud Storage

<div class="grid cards" markdown>

- ![Cryptee logo](assets/img/cloud/cryptee.svg#only-light){ .twemoji }![Cryptee logo](assets/img/cloud/cryptee-dark.svg#only-dark){ .twemoji } [Cryptee](cloud.md#cryptee)
- ![Nextcloud logo](assets/img/cloud/nextcloud.svg){ .twemoji } [Nextcloud (Self-Hostable)](cloud.md#nextcloud)
- ![Proton Drive logo](assets/img/cloud/protondrive.svg){ .twemoji } [Proton Drive](cloud.md#proton-drive)

</div>

[Learn more :material-arrow-right-drop-circle:](cloud.md)

### DNS

#### DNS Providers

We [recommend](dns.md#recommended-providers) a number of encrypted DNS servers based on a variety of criteria, such as [Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) and [Quad9](https://quad9.net/) amongst others. We recommend for you to read our pages on DNS before choosing a provider. In many cases, using an alternative DNS provider is not recommended.

[Learn more :material-arrow-right-drop-circle:](dns.md)

#### Encrypted DNS Proxies

<div class="grid cards" markdown>

- ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ .twemoji }![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ .twemoji } [RethinkDNS](dns.md#rethinkdns)
- ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ .twemoji } [dnscrypt-proxy](dns.md#dnscrypt-proxy)

</div>

[Learn more :material-arrow-right-drop-circle:](dns.md#encrypted-dns-proxies)

#### Self-hosted Solutions

<div class="grid cards" markdown>

- ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ .twemoji } [AdGuard Home](dns.md#adguard-home)
- ![Pi-hole logo](assets/img/dns/pi-hole.svg){ .twemoji } [Pi-hole](dns.md#pi-hole)

</div>

[Learn more :material-arrow-right-drop-circle:](dns.md#self-hosted-solutions)

### Email

<div class="grid cards" markdown>

- ![Proton Mail logo](assets/img/email/protonmail.svg){ .twemoji } [Proton Mail](email.md#proton-mail)
- ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)
- ![StartMail logo](assets/img/email/startmail.svg#only-light){ .twemoji }![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Tutanota logo](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

[Learn more :material-arrow-right-drop-circle:](email.md)

#### Email Aliasing Services

<div class="grid cards" markdown>

- ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ .twemoji }![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![SimpleLogin logo](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

[Learn more :material-arrow-right-drop-circle:](email.md#email-aliasing-services)

#### Self-Hosting Email

<div class="grid cards" markdown>

- ![mailcow logo](assets/img/email/mailcow.svg){ .twemoji } [mailcow](email.md#self-hosting-email)
- ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ .twemoji } [Mail-in-a-Box](email.md#self-hosting-email)

</div>

[Learn more :material-arrow-right-drop-circle:](email.md#self-hosting-email)

### Search Engines

<div class="grid cards" markdown>

- ![Brave Search logo](assets/img/search-engines/brave-search.svg){ .twemoji } [Brave Search](search-engines.md#brave-search)
- ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){ .twemoji } [DuckDuckGo](search-engines.md#duckduckgo)
- ![SearXNG logo](assets/img/search-engines/searxng.svg){ .twemoji } [SearXNG](search-engines.md#searxng)
- ![Startpage logo](assets/img/search-engines/startpage.svg#only-light){ .twemoji }![Startpage logo](assets/img/search-engines/startpage-dark.svg#only-dark){ .twemoji } [Startpage](search-engines.md#startpage)

</div>

[Learn more :material-arrow-right-drop-circle:](search-engines.md)

### VPN Providers

??? danger "VPNs do not provide anonymity"

    Using a VPN will **not** keep your browsing habits anonymous, nor will it add additional security to non-secure (HTTP) traffic.

    If you are looking for **anonymity**, you should use the Tor Browser **instead** of a VPN.

    If you're looking for added **security**, you should always ensure you're connecting to websites using HTTPS. A VPN is not a replacement for good security practices.

    [Learn more :material-arrow-right-drop-circle:](vpn.md)

<div class="grid cards" markdown>

- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](vpn.md#proton-vpn)
- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](vpn.md#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](vpn.md#mullvad)

</div>

[Learn more :material-arrow-right-drop-circle:](vpn.md)

## Software

### Calendar/Contacts Sync

<div class="grid cards" markdown>

- ![Tutanota logo](assets/img/calendar-contacts/tutanota.svg){ .twemoji } [Tutanota](calendar-contacts.md#tutanota)
- ![EteSync logo](assets/img/calendar-contacts/etesync.svg){ .twemoji } [EteSync](calendar-contacts.md#etesync)
- ![Proton Calendar logo](assets/img/calendar-contacts/proton-calendar.svg){ .twemoji } [Proton Calendar](calendar-contacts.md#proton-calendar)

</div>

[Learn more :material-arrow-right-drop-circle:](calendar-contacts.md)

### Data and Metadata Redaction

<div class="grid cards" markdown>

- ![ExifCleaner logo](assets/img/data-redaction/exifcleaner.svg){ .twemoji } [ExifCleaner](data-redaction.md#exifcleaner)
- ![MAT2 logo](assets/img/data-redaction/mat2.svg){ .twemoji } [MAT2](data-redaction.md#mat2)
- ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ .twemoji } [ExifEraser (Android)](data-redaction.md#exiferaser-android)
- ![Metapho logo](assets/img/data-redaction/metapho.jpg){ .twemoji } [Metapho (iOS)](data-redaction.md#metapho-ios)
- ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ .twemoji } [PrivacyBlur](data-redaction.md#privacyblur)
- ![ExifTool logo](assets/img/data-redaction/exiftool.png){ .twemoji } [ExifTool (CLI)](data-redaction.md#exiftool)

</div>

[Learn more :material-arrow-right-drop-circle:](data-redaction.md)

### Email Clients

<div class="grid cards" markdown>

- ![Thunderbird logo](assets/img/email-clients/thunderbird.svg){ .twemoji } [Thunderbird](email-clients.md#thunderbird)
- ![Apple Mail logo](assets/img/email-clients/applemail.png){ .twemoji } [Apple Mail (macOS)](email-clients.md#apple-mail-macos)
- ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ .twemoji } [Canary Mail (iOS)](email-clients.md#canary-mail-ios)
- ![FairEmail logo](assets/img/email-clients/fairemail.svg){ .twemoji } [FairEmail (Android)](email-clients.md#fairemail-android)
- ![GNOME Evolution logo](assets/img/email-clients/evolution.svg){ .twemoji } [GNOME Evolution (Linux)](email-clients.md#gnome-evolution-gnome)
- ![K-9 Mail logo](assets/img/email-clients/k9mail.svg){ .twemoji } [K-9 Mail (Android)](email-clients.md#k-9-mail-android)
- ![Kontact logo](assets/img/email-clients/kontact.svg){ .twemoji } [Kontact (Linux)](email-clients.md#kontact-kde)
- ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ .twemoji } [Mailvelope (PGP in standard webmail)](email-clients.md#mailvelope-browser)
- ![NeoMutt logo](assets/img/email-clients/mutt.svg){ .twemoji } [NeoMutt (CLI)](email-clients.md#neomutt-cli)

</div>

[Learn more :material-arrow-right-drop-circle:](email-clients.md)

### Encryption Software

??? info "Operating System Disk Encryption"

    For encrypting your operating system drive, we typically recommend using whichever encryption tool your operating system provides, whether that is **BitLocker** on Windows, **FileVault** on macOS, or **LUKS** on Linux. These tools are included with the operating system and typically use hardware encryption elements such as a TPM that other full-disk encryption software like VeraCrypt do not. VeraCrypt is still suitable for non-operating system disks such as external drives, especially drives that may be accessed from multiple operating systems.

    [Learn more :material-arrow-right-drop-circle:](encryption.md##operating-system-included-full-disk-encryption-fde)

<div class="grid cards" markdown>

- ![Cryptomator logo](assets/img/encryption-software/cryptomator.svg){ .twemoji } [Cryptomator](encryption.md#cryptomator-cloud)
- ![Picocrypt logo](assets/img/encryption-software/picocrypt.svg){ .twemoji } [Picocrypt](encryption.md#picocrypt-file)
- ![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ .twemoji }![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ .twemoji } [VeraCrypt (FDE)](encryption.md#veracrypt-disk)
- ![Hat.sh logo](assets/img/encryption-software/hat-sh.png#only-light){ .twemoji }![Hat.sh logo](assets/img/encryption-software/hat-sh-dark.png#only-dark){ .twemoji } [Hat.sh (Browser-based)](encryption.md#hatsh)
- ![Kryptor logo](assets/img/encryption-software/kryptor.png){ .twemoji } [Kryptor](encryption.md#kryptor)
- ![Tomb logo](assets/img/encryption-software/tomb.png){ .twemoji } [Tomb](encryption.md#tomb)

</div>

[Learn more :material-arrow-right-drop-circle:](encryption.md)

#### OpenPGP Clients

<div class="grid cards" markdown>

- ![GnuPG logo](assets/img/encryption-software/gnupg.svg){ .twemoji } [GnuPG](encryption.md#gnu-privacy-guard)
- ![GPG4Win logo](assets/img/encryption-software/gpg4win.svg){ .twemoji } [GPG4Win (Windows)](encryption.md#gpg4win)
- ![GPG Suite logo](assets/img/encryption-software/gpgsuite.png){ .twemoji } [GPG Suite (macOS)](encryption.md#gpg-suite)
- ![OpenKeychain logo](assets/img/encryption-software/openkeychain.svg){ .twemoji } [OpenKeychain](encryption.md#openkeychain)

</div>

[Learn more :material-arrow-right-drop-circle:](encryption.md#openpgp)

### File Sharing and Sync

<div class="grid cards" markdown>

- ![Send logo](assets/img/file-sharing-sync/send.svg){ .twemoji } [Send](file-sharing.md#send)
- ![OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ .twemoji } [OnionShare](file-sharing.md#onionshare)
- ![FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ .twemoji } [FreedomBox](file-sharing.md#freedombox)
- ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ .twemoji } [Syncthing](file-sharing.md#syncthing)

</div>

[Learn more :material-arrow-right-drop-circle:](file-sharing.md)

### Frontends

<div class="grid cards" markdown>

- ![Librarian logo](assets/img/frontends/librarian.svg#only-light){ .twemoji }![Librarian logo](assets/img/frontends/librarian-dark.svg#only-dark){ .twemoji } [Librarian (LBRY, Web)](frontends.md#librarian)
- ![Nitter logo](assets/img/frontends/nitter.svg){ .twemoji } [Nitter (Twitter, Web)](frontends.md#nitter)
- ![FreeTube logo](assets/img/frontends/freetube.svg){ .twemoji } [FreeTube (YouTube, Desktop)](frontends.md#freetube)
- ![NewPipe logo](assets/img/frontends/newpipe.svg){ .twemoji } [NewPipe (YouTube, Android)](frontends.md#newpipe-android)
- ![Invidious logo](assets/img/frontends/invidious.svg#only-light){ .twemoji }![Invidious logo](assets/img/frontends/invidious-dark.svg#only-dark){ .twemoji } [Invidious (YouTube, Web)](frontends.md#invidious)
- ![Piped logo](assets/img/frontends/piped.svg){ .twemoji } [Piped (YouTube, Web)](frontends.md#piped)

</div>

[Learn more :material-arrow-right-drop-circle:](frontends.md)

### Multi-Factor Authentication Tools

<div class="grid cards" markdown>

- ![YubiKeys](assets/img/multi-factor-authentication/mini/yubico.svg){ .twemoji } [YubiKey](multi-factor-authentication.md#yubikey)
- ![Nitrokey](assets/img/multi-factor-authentication/mini/nitrokey.svg){ .twemoji } [Nitrokey](multi-factor-authentication.md#nitrokey-librem-key)
- ![Aegis logo](assets/img/multi-factor-authentication/aegis.png){ .twemoji } [Aegis Authenticator](multi-factor-authentication.md#aegis-authenticator)
- ![Raivo OTP logo](assets/img/multi-factor-authentication/raivo-otp.png){ .twemoji } [Raivo OTP](multi-factor-authentication.md#raivo-otp)

</div>

[Learn more :material-arrow-right-drop-circle:](multi-factor-authentication.md)

### News Aggregators

<div class="grid cards" markdown>

- ![Akregator logo](assets/img/news-aggregators/akregator.svg){ .twemoji } [Akregator](news-aggregators.md#akregator)
- ![Feeder logo](assets/img/news-aggregators/feeder.png){ .twemoji} [Feeder](news-aggregators.md#feeder)
- ![Fluent Reader logo](assets/img/news-aggregators/fluent-reader.svg){ .twemoji } [Fluent Reader](news-aggregators.md#fluent-reader)
- ![GNOME Feeds logo](assets/img/news-aggregators/gfeeds.svg){ .twemoji } [GNOME Feeds](news-aggregators.md#gnome-feeds)
- ![Miniflux logo](assets/img/news-aggregators/miniflux.svg#only-light){ .twemoji }![Miniflux logo](assets/img/news-aggregators/miniflux-dark.svg#only-dark){ .twemoji } [Miniflux](news-aggregators.md#miniflux)
- ![NetNewsWire logo](assets/img/news-aggregators/netnewswire.png){ .twemoji } [NetNewsWire](news-aggregators.md#netnewswire)
- ![Newsboat logo](assets/img/news-aggregators/newsboat.svg){ .twemoji } [Newsboat](news-aggregators.md#newsboat)

</div>

[Learn more :material-arrow-right-drop-circle:](news-aggregators.md)

### Notebooks

<div class="grid cards" markdown>

- ![EteSync Notes logo](assets/img/notebooks/etesync-notes.png){ .twemoji } [EteSync Notes](notebooks.md#etesync-notes)
- ![Joplin logo](assets/img/notebooks/joplin.svg){ .twemoji } [Joplin](notebooks.md#joplin)
- ![Standard Notes logo](assets/img/notebooks/standard-notes.svg){ .twemoji } [Standard Notes](notebooks.md#standard-notes)
- ![Org-mode logo](assets/img/notebooks/org-mode.svg){ .twemoji } [Org-mode](notebooks.md#org-mode)

</div>

[Learn more :material-arrow-right-drop-circle:](notebooks.md)

### Password Managers

<div class="grid cards" markdown>

- ![Bitwarden logo](assets/img/password-management/bitwarden.svg){ .twemoji } [Bitwarden](passwords.md#bitwarden)
- ![1Password logo](assets/img/password-management/1password.svg){ .twemoji } [1Password](passwords.md#1password)
- ![Psono logo](assets/img/password-management/psono.svg){ .twemoji } [Psono](passwords.md#psono)
- ![KeePassXC logo](assets/img/password-management/keepassxc.svg){ .twemoji } [KeePassXC](passwords.md#keepassxc)
- ![KeePassDX logo](assets/img/password-management/keepassdx.svg){ .twemoji } [KeePassDX (Android)](passwords.md#keepassdx-android)
- ![Strongbox logo](assets/img/password-management/strongbox.svg){ .twemoji } [Strongbox (iOS & macOS)](passwords.md#strongbox-ios-macos)
- ![gopass logo](assets/img/password-management/gopass.svg){ .twemoji } [gopass](passwords.md#gopass)

</div>

[Learn more :material-arrow-right-drop-circle:](passwords.md)

### Productivity Tools

<div class="grid cards" markdown>

- ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ .twemoji } [LibreOffice](productivity.md#libreoffice)
- ![OnlyOffice logo](assets/img/productivity/onlyoffice.svg){ .twemoji } [OnlyOffice](productivity.md#onlyoffice)
- ![CryptPad logo](assets/img/productivity/cryptpad.svg){ .twemoji } [CryptPad](productivity.md#cryptpad)
- ![PrivateBin logo](assets/img/productivity/privatebin.svg){ .twemoji } [PrivateBin (Pastebin)](productivity.md#privatebin)

</div>

[Learn more :material-arrow-right-drop-circle:](productivity.md)

### Real-Time Communication

<div class="grid cards" markdown>

- ![Signal logo](assets/img/messengers/signal.svg){ .twemoji } [Signal](real-time-communication.md#signal)
- ![Element logo](assets/img/messengers/element.svg){ .twemoji } [Element](real-time-communication.md#element)
- ![Session logo](assets/img/messengers/session.svg){ .twemoji } [Session](real-time-communication.md#session)
- ![Briar logo](assets/img/messengers/briar.svg){ .twemoji } [Briar (Android)](real-time-communication.md#briar-android)

</div>

[Learn more :material-arrow-right-drop-circle:](real-time-communication.md)

### Video Streaming Clients

<div class="grid cards" markdown>

- ![LBRY logo](assets/img/video-streaming/lbry.svg){ .twemoji } [LBRY](video-streaming.md#lbry)

</div>

[Learn more :material-arrow-right-drop-circle:](video-streaming.md)

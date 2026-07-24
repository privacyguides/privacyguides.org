---
title: "Email Clients"
description: These email clients are privacy-respecting and support OpenPGP email encryption.
aliases:
- /email-clients
- /en/email-clients
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

The **email clients** we recommend support both [OpenPGP](../encryption/index.md#openpgp) and strong authentication such as [Open Authorization (OAuth)](../../../wiki/basics/account-creation/index.md#sign-in-with-oauth). OAuth allows you to use [Multi-Factor Authentication](../../../wiki/basics/multi-factor-authentication/index.md) to prevent account theft.

<details class="warning" markdown>
<summary>Email does not provide forward secrecy</summary>

When using end-to-end encryption (E2EE) technology like OpenPGP, email will still have [some metadata](../../../wiki/basics/email-security/index.md#email-metadata-overview) that is not encrypted in the header of the email.

OpenPGP also does not support [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed: [How do I protect my private keys?](../../../wiki/basics/email-security/index.md#how-do-i-protect-my-private-keys) Consider using a medium that provides forward secrecy:

[Real-time Communication](../../services/messengers/index.md)
{ .pg:buttons }

</details>

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#thunderbird" title="Thunderbird" image="./thunderbird.svg" subtitle="Thunderbird is a free, open-source, cross-platform email, newsgroup, news feed, and chat (XMPP, IRC, Matrix) client developed by the Thunderbird community, and previously by the Mozilla Foundation." >}}
  {{< card link="#apple-mail-macos" title="Apple Mail" image="./applemail.png" subtitle="Apple Mail is included in macOS and can be extended to have OpenPGP support with GPG Suite, which adds the ability to send PGP-encrypted email." >}}
  {{< card link="#fairemail-android" title="FairEmail" image="./fairemail.svg" subtitle="FairEmail is a minimal, open-source email app which uses open standards (IMAP, SMTP, OpenPGP) and minimizes data and battery usage." >}}
  {{< card link="#gnome-evolution-gnome" title="GNOME Evolution" image="./evolution.svg" subtitle="Evolution is a personal information management application that provides integrated mail, calendaring, and address book functionality. Evolution has extensive documentation to help you get started." >}}
  {{< card link="#kontact-kde" title="Kontact" image="./kontact.svg" subtitle="Kontact is a personal information manager (PIM) application from the KDE project. It provides a mail client, address book, RSS client, and an organizer." >}}
  {{< card link="#mailvelope-browser" title="Mailvelope" image="./mailvelope.svg" subtitle="Mailvelope is a browser extension that enables the exchange of encrypted emails following the OpenPGP encryption standard." >}}
  {{< card link="#neomutt-cli" title="NeoMutt" image="./mutt.svg" subtitle="NeoMutt is an open-source command line email reader for Linux and BSD. It's a fork of Mutt) with added features." >}}
{{< /cards >}}
</div>

## Cross-Platform

### Thunderbird

{{< title-card logo="./thunderbird.svg" >}}

**Thunderbird** is a free, open-source, cross-platform email, newsgroup, news feed, and chat (XMPP, IRC, Matrix) client developed by the Thunderbird community, and previously by the Mozilla Foundation.

{{< cards >}}
  {{< card link="https://thunderbird.net" title="Homepage" icon="home" >}}
  {{< card link="https://mozilla.org/privacy/thunderbird" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://thunderbird.net)
[{{< badge content="macOS" color="indigo" >}}](https://thunderbird.net)
[{{< badge content="Windows" color="red" >}}](https://thunderbird.net)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=net.thunderbird.android)
[{{< badge content="GitHub" >}}](https://github.com/thunderbird/thunderbird-android/releases)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/org.mozilla.Thunderbird)

> [!WARNING]
> When replying to someone on a mailing list in Thunderbird Mobile, the "reply" option may also include the mailing list. For more information see [thunderbird/thunderbird-android #3738](https://github.com/thunderbird/thunderbird-android/issues/3738).

#### Recommended Configuration

<div class="annotate" markdown>

We recommend changing some of these settings to make Thunderbird Desktop a little more private.

These options can be found in the menu → **Settings** → **Privacy & Security**.

##### Web Content

- [ ] Uncheck **Remember websites and links I've visited**
- [ ] Uncheck **Accept cookies from sites** (1)

</div>

1. You may need to keep this setting checked when you're logging in to some providers such as Gmail, or via an institution’s SSO. You should uncheck it once you log in successfully.

##### Telemetry

- [ ] Uncheck **Allow Thunderbird to send technical and interaction data to Mozilla**

#### Thunderbird-user.js (advanced)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js) is a set of configuration options that aims to disable as many of the web-browsing features within Thunderbird Desktop as possible in order to reduce attack surface and maintain privacy. Some of the changes are backported from the [Arkenfox project](../desktop-browsers/index.md#arkenfox-advanced).

## Platform Specific

### Apple Mail (macOS)

{{< title-card logo="./applemail.png" >}}

**Apple Mail** is included in macOS and can be extended to have OpenPGP support with [GPG Suite](../encryption/index.md#gpg-suite), which adds the ability to send PGP-encrypted email.

{{< cards >}}
  {{< card link="https://support.apple.com/guide/mail/welcome/mac" title="Homepage" icon="home" >}}
  {{< card link="https://apple.com/legal/privacy/en-ww" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

Apple Mail has the ability to load remote content in the background or block it entirely and hide your IP address from senders on [macOS](https://support.apple.com/guide/mail/mlhl03be2866/mac) and [iOS](https://support.apple.com/guide/iphone/iphf084865c7/ios).

### FairEmail (Android)

{{< title-card logo="./fairemail.svg" >}}

**FairEmail** is a minimal, open-source email app which uses open standards (IMAP, SMTP, OpenPGP) and minimizes data and battery usage.

{{< cards >}}
  {{< card link="https://email.faircode.eu" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/M66B/FairEmail/blob/master/PRIVACY.md" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=eu.faircode.email)
[{{< badge content="GitHub" >}}](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

{{< title-card logo="./evolution.svg" >}}

**Evolution** is a personal information management application that provides integrated mail, calendaring, and address book functionality. Evolution has extensive [documentation](https://gnome.pages.gitlab.gnome.org/evolution/help) to help you get started.

{{< cards >}}
  {{< card link="https://gitlab.gnome.org/GNOME/evolution/-/wikis/home" title="Homepage" icon="home" >}}
  {{< card link="https://gitlab.gnome.org/GNOME/evolution/-/wikis/Privacy-Policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/org.gnome.Evolution)

### Kontact (KDE)

{{< title-card logo="./kontact.svg" >}}

**Kontact** is a personal information manager (PIM) application from the [KDE](https://kde.org) project. It provides a mail client, address book, RSS client, and an organizer.

{{< cards >}}
  {{< card link="https://kontact.kde.org" title="Homepage" icon="home" >}}
  {{< card link="https://kde.org/privacypolicy-apps" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://kontact.kde.org/download)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Browser)

{{< title-card logo="./mailvelope.svg" >}}

**Mailvelope** is a browser extension that enables the exchange of encrypted emails following the OpenPGP encryption standard.

{{< cards >}}
  {{< card link="https://mailvelope.com" title="Homepage" icon="home" >}}
  {{< card link="https://mailvelope.com/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/mailvelope)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

{{< title-card logo="./mutt.svg" >}}

**NeoMutt** is an open-source command line email reader for Linux and BSD. It's a fork of [Mutt](https://en.wikipedia.org/wiki/Mutt_(email_client)) with added features.

NeoMutt is a text-based client that has a steep learning curve. It is, however, very customizable.

{{< cards >}}
  {{< card link="https://neomutt.org" title="Homepage" icon="home" >}}
  {{< card link="https://neomutt.org/guide" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://neomutt.org/distro)
[{{< badge content="macOS" color="indigo" >}}](https://neomutt.org/distro)

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Qualifications

- Apps developed for open-source operating systems must be open source.
- Must not collect telemetry, or have an easy way to disable all telemetry.
- Must support OpenPGP message encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be open source.
- Should be cross-platform.
- Should not collect any telemetry by default.
- Should support OpenPGP natively, i.e. without extensions.
- Should support storing OpenPGP encrypted emails locally.

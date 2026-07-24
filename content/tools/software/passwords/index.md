---
title: Local Password Managers
aliases:
- /passwords
- /en/passwords
---
These options allow you to manage an encrypted password database locally.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#keepassxc" title="KeePassXC" image="./keepassxc.svg" subtitle="KeePassXC is a community fork of KeePassX, a native cross-platform port of KeePass Password Safe, with the goal of extending and improving it with new features and bug fixes to provide a feature-rich, cross-platform, and modern open-source password manager." >}}
  {{< card link="#keepassdx-android" title="KeePassDX" image="./keepassdx.svg" subtitle="KeePassDX is a lightweight password manager for Android; it allows for editing encrypted data in a single file in KeePass format and can fill in forms securely." >}}
  {{< card link="#keepassium-ios-macos" title="KeePassium" image="./keepassium.svg" subtitle="KeePassium is a commercial, open-source password manager made by KeePassium Labs that's compatible with other KeePass applications. It provides autofill support, passkey management, automatic two-way synchronization through most cloud storage providers, and more." >}}
  {{< card link="#gopass-cli" title="Gopass" image="./gopass.svg" subtitle="Gopass is a minimal password manager for the command line written in Go. It can be used within scripting applications and works on all major desktop and server operating systems." >}}
{{< /cards >}}
</div>

## KeePassXC

{{< title-card logo="./keepassxc.svg" >}}

**KeePassXC** is a community fork of KeePassX, a native cross-platform port of KeePass Password Safe, with the goal of extending and improving it with new features and bug fixes to provide a feature-rich, cross-platform, and modern open-source password manager.

{{< cards >}}
  {{< card link="https://keepassxc.org" title="Homepage" icon="home" >}}
  {{< card link="https://keepassxc.org/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://keepassxc.org/download/#linux)
[{{< badge content="macOS" color="indigo" >}}](https://keepassxc.org/download/#mac)
[{{< badge content="Windows" color="red" >}}](https://keepassxc.org/download/#windows)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC stores its export data as [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files. You may encounter data loss if you import this file into another password manager. We advise you check each record manually.

## KeePassDX (Android)

{{< title-card logo="./keepassdx.svg" >}}

**KeePassDX** is a lightweight password manager for Android; it allows for editing encrypted data in a single file in KeePass format and can fill in forms securely.

{{< cards >}}
  {{< card link="https://keepassdx.com" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/Kunzisoft/KeePassDX/wiki" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
[{{< badge content="GitHub" >}}](https://github.com/Kunzisoft/KeePassDX/releases)

The [pro version](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) of the app allows you to unlock cosmetic content and non-standard protocol features, but more importantly, it helps and encourages development.

## KeePassium (iOS & macOS)

[Read our latest KeePassium review.](https://www.privacyguides.org/articles/2025/05/13/keepassium-review)

{{< title-card logo="./keepassium.svg" >}}

**KeePassium** is a commercial, open-source password manager made by KeePassium Labs that's compatible with other KeePass applications. It provides autofill support, passkey management, automatic two-way synchronization through [most cloud storage providers](https://support.keepassium.com/kb/sync), and more.

{{< cards >}}
  {{< card link="https://keepassium.com" title="Homepage" icon="home" >}}
  {{< card link="https://keepassium.com/privacy/app" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/us/app/id1435127111)

KeePassium offers a [Premium version](https://keepassium.com/pricing) with additional features such as support for multiple databases, YubiKey support, and a password audit tool.

KeePassium's iOS app has been [audited](https://cure53.de/pentest-report_keepassium.pdf) by Cure53 in October 2024, and all [issues](https://keepassium.com/blog/2024/11/independent-security-audit-complete) found in the audit were subsequently fixed.

## Gopass (CLI)

{{< title-card logo="./gopass.svg" >}}

**Gopass** is a minimal password manager for the command line written in Go. It can be used within scripting applications and works on all major desktop and server operating systems.

{{< cards >}}
  {{< card link="https://gopass.pw" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/gopasspw/gopass/tree/master/docs" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://gopass.pw/#install-linux)
[{{< badge content="macOS" color="indigo" >}}](https://gopass.pw/#install-macos)
[{{< badge content="Windows" color="red" >}}](https://gopass.pw/#install-windows)
[{{< badge content="FreeBSD" >}}](https://gopass.pw/#install-bsd)

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be cross-platform.

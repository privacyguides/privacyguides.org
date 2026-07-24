---
title: Password Managers
description: Password managers allow you to securely store and manage passwords and other credentials.
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#bitwarden" title="Bitwarden" image="./bitwarden.svg" subtitle="Bitwarden is a free and open-source password and passkey manager. It aims to solve password management problems for individuals, teams, and business organizations." >}}
  {{< card link="#proton-pass" title="Proton Pass" image="./protonpass.svg" subtitle="Proton Pass is an open-source, end-to-end encrypted password manager developed by Proton, the team behind Proton Mail. It securely stores your login credentials, generates unique email aliases, and supports and stores passkeys." >}}
  {{< card link="#1password" title="1Password" image="./1password.svg" subtitle="1Password is a password manager with a strong focus on security and ease-of-use that allows you to store passwords, passkeys, credit cards, software licenses, and any other sensitive information in a secure digital vault. Your vault is hosted on 1Password's servers for a monthly fee." >}}
  {{< card link="#psono" title="Psono" image="./psono.svg" subtitle="Psono is a free and open-source password manager from Germany, with a focus on password management for teams. Psono supports secure sharing of passwords, files, bookmarks, and emails." >}}
{{< /cards >}}
</div>

**Password managers** allow you to securely store and manage passwords and other credentials with the use of a master password.

[Introduction to Passwords](../../../wiki/basics/passwords-overview/index.md)

> [!IMPORTANT]
> Built-in password managers in software like browsers and operating systems are sometimes not as good as dedicated password manager software. The advantage of a built-in password manager is good integration with the software, but it can often be very simple and lack privacy and security features that standalone offerings have.
> 
> For example, the password manager in Microsoft Edge doesn't offer end-to-end encryption at all. Google's password manager has [optional](https://support.google.com/accounts/answer/11350823) E2EE, and [Apple's](https://support.apple.com/HT202303) offers E2EE by default.


## Cloud-based

These password managers sync your passwords to a cloud server for easy accessibility from all your devices and safety against device loss.

### Bitwarden

{{< title-card logo="./bitwarden.svg" >}}

**Bitwarden** is a free and open-source password and passkey manager. It aims to solve password management problems for individuals, teams, and business organizations. Bitwarden is among the best and safest solutions to store all of your logins and passwords while conveniently keeping them synced between all of your devices.

{{< cards >}}
  {{< card link="https://bitwarden.com" title="Homepage" icon="home" >}}
  {{< card link="https://bitwarden.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://bitwarden.com/download)
[{{< badge content="macOS" color="indigo" >}}](https://bitwarden.com/download)
[{{< badge content="Windows" color="red" >}}](https://bitwarden.com/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1137397744)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/nngceckbapebfimnlniiiahkandclblb)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/com.bitwarden.desktop)
[{{< badge content="GitHub" >}}](https://github.com/bitwarden/android/releases)
[{{< badge content="Safari" >}}](https://apps.apple.com/app/id1352778147)

Bitwarden uses [PBKDF2](https://bitwarden.com/help/kdf-algorithms/#pbkdf2) as its key derivation function (KDF) algorithm by default. It also offers [Argon2](https://bitwarden.com/help/kdf-algorithms/#argon2id), which is more secure, as an alternative. You can change your account's KDF algorithm in the web vault:

- [x] Select **Settings → Security → Keys → KDF algorithm → Argon2id**

Bitwarden's server-side code is [open source](https://github.com/bitwarden/server), so if you don't want to use the Bitwarden cloud, you can easily host your own Bitwarden sync server.

### Proton Pass

{{< title-card logo="./protonpass.svg" >}}

**Proton Pass** is an open-source, end-to-end encrypted password manager developed by Proton, the team behind [Proton Mail](../email/index.md#proton-mail). It securely stores your login credentials, generates unique email aliases, and supports and stores passkeys.

{{< cards >}}
  {{< card link="https://proton.me/pass" title="Homepage" icon="home" >}}
  {{< card link="https://proton.me/pass/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Windows" color="red" >}}](https://proton.me/pass/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=proton.android.pass)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id6443490629)
[{{< badge content="Chrome" >}}](https://chromewebstore.google.com/detail/ghmbeldphafepmbegfdlkpapadhbakde)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/gcllgfdnfnllodcaambdaknbipemelie)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/proton-pass)
[{{< badge content="Web" >}}](https://pass.proton.me)

With the acquisition of SimpleLogin in April 2022, Proton has offered a "hide-my-email" feature that lets you create 10 aliases (free plan) or unlimited aliases (paid plans).

The Proton Pass mobile apps and browser extension underwent an audit performed by Cure53 throughout May and June 2023. The security analysis company concluded:

> Proton Pass apps and components leave a rather positive impression in terms of security.

All issues were addressed and fixed shortly after the [report](https://res.cloudinary.com/dbulfrlrz/images/v1707561557/wp-pme/Cure53-proton-pass-20230717/Cure53-proton-pass-20230717.pdf).

### 1Password

{{< title-card logo="./1password.svg" >}}

**1Password** is a password manager with a strong focus on security and ease-of-use that allows you to store passwords, passkeys, credit cards, software licenses, and any other sensitive information in a secure digital vault. Your vault is hosted on 1Password's servers for a [monthly fee](https://1password.com/sign-up).

1Password is [audited](https://support.1password.com/security-assessments) on a regular basis and provides exceptional customer support. 1Password is closed source; however, the security of the product is thoroughly documented in their [security white paper](https://1passwordstatic.com/files/security/1password-white-paper.pdf).

{{< cards >}}
  {{< card link="https://1password.com" title="Homepage" icon="home" >}}
  {{< card link="https://1password.com/legal/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://1password.com/downloads/linux)
[{{< badge content="macOS" color="indigo" >}}](https://1password.com/downloads/mac)
[{{< badge content="Windows" color="red" >}}](https://1password.com/downloads/windows)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.onepassword.android)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1511601750)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/aeblfdkhhhdcdjpifhhbdiojplfjncoa)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/dppgmdbiimibapkepcbdbmkaabgiofem)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/1password-x-password-manager)
[{{< badge content="Safari" >}}](https://apps.apple.com/app/id1569813296)
[{{< badge content="Web" >}}](https://my.1password.com/signin)

Traditionally, 1Password has offered the best password manager user experience for people using macOS and iOS; however, it has now achieved feature parity across all platforms. 1Password's clients boast many features geared towards families and less technical people, such as an intuitive UI for ease-of-use and navigation, as well as advanced functionality. Notably, nearly every feature of 1Password is available within its native mobile or desktop clients.

Your 1Password vault is secured with both your master password and a randomized 34-character security key to encrypt your data on their servers. This security key adds a layer of protection to your data because your data is secured with high entropy regardless of your master password. Many other password manager solutions are entirely reliant on the strength of your master password to secure your data.

### Psono

{{< title-card logo="./psono.svg" >}}

**Psono** is a free and open-source password manager from Germany, with a focus on password management for teams. Psono supports secure sharing of passwords, files, bookmarks, and emails. All secrets are protected by a master password.

{{< cards >}}
  {{< card link="https://psono.com" title="Homepage" icon="home" >}}
  {{< card link="https://psono.com/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.psono.psono)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1545581224)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/eljmjmgjkbmpmfljlmklcfineebidmlo)
[{{< badge content="Docker Hub" >}}](https://hub.docker.com/r/psono/psono-client)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)

Psono provides extensive documentation for their product. The web-client for Psono can be self-hosted; alternatively, you can choose the full Community Edition or the Enterprise Edition with additional features.

In April 2024, Psono added [support for passkeys](https://psono.com/blog/psono-introduces-passkeys) for the browser extension only.

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

#### Minimum Requirements

- Must utilize strong, standards-based/modern E2EE.
- Must have thoroughly documented encryption and security practices.
- Must have a published audit from a reputable, independent third party.
- All non-essential telemetry must be optional.
- Must not collect more PII than is necessary for billing purposes.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Telemetry should be opt-in (disabled by default) or not collected at all.
- Should be open source and reasonably self-hostable.

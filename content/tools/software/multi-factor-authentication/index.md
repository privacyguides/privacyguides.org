---
title: Multifactor Authentication
description: These tools assist you with securing your internet accounts with multifactor authentication without sending your secrets to a third party.
aliases:
- /multi-factor-authentication
- /en/multi-factor-authentication
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

> [!NOTE]
> [Hardware security key recommendations](../../hardware/security-keys/index.md) have been moved to their own category.

**Multifactor authentication apps** implement a security standard adopted by the Internet Engineering Task Force (IETF) called **Time-based One-time Passwords**, or **TOTP**. This is a method where websites share a secret with you which is used by your authenticator app to generate a six (usually) digit code based on the current time, which you enter while logging in for the website to check. Typically, these codes are regenerated every 30 seconds, and once a new code is generated the old one becomes useless. Even if a hacker gets one six-digit code, there is no way for them to reverse that code to get the original secret or otherwise be able to predict what any future codes might be.

We highly recommend that you use mobile TOTP apps instead of desktop alternatives as Android and iOS have better security and app isolation than most desktop operating systems.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#ente-auth" title="Ente Auth" image="./ente-auth.svg" subtitle="Ente Auth is a free and open-source app which stores and generates TOTP tokens. It can be used with an online account to back up and sync your tokens across your devices (and access them via a web interface) in a secure, end-to-end encrypted fashion." >}}
  {{< card link="#aegis-authenticator-android" title="Aegis Authenticator" image="./aegis.png" subtitle="Aegis Authenticator is a free and open-source app for Android to manage your 2-step verification tokens for your online services. Aegis Authenticator operates completely offline/locally, but includes the option to export your tokens for backup unlike many alternatives." >}}
{{< /cards >}}
</div>

## Ente Auth

{{< title-card logo="./ente-auth.svg" >}}

**Ente Auth** is a free and open-source app which stores and generates TOTP tokens. It can be used with an online account to back up and sync your tokens across your devices (and access them via a web interface) in a secure, end-to-end encrypted fashion. It can also be used offline on a single device with no account necessary.

{{< cards >}}
  {{< card link="https://ente.com/auth" title="Homepage" icon="home" >}}
  {{< card link="https://ente.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=io.ente.auth)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id6444121398)
[{{< badge content="GitHub" >}}](https://github.com/ente-io/ente/releases?q=auth)
[{{< badge content="Web" >}}](https://auth.ente.io)

The server-side source code and infrastructure which underpins Ente Auth (if used with an online account) underwent an audit by [Cure53](https://ente.com/blog/cern-audit) in October 2025.

## Aegis Authenticator (Android)

{{< title-card logo="./aegis.png" >}}

**Aegis Authenticator** is a free and open-source app for Android to manage your 2-step verification tokens for your online services. Aegis Authenticator operates completely offline/locally, but includes the option to export your tokens for backup unlike many alternatives.

{{< cards >}}
  {{< card link="https://getaegis.app" title="Homepage" icon="home" >}}
  {{< card link="https://getaegis.app/aegis/privacy.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
[{{< badge content="GitHub" >}}](https://github.com/beemdevelopment/Aegis/releases)

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Source code must be publicly available.
- Must not require internet connectivity.
- Cloud syncing must be optional; sync functionality, if available, must be E2EE.

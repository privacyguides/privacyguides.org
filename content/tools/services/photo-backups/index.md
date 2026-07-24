---
title: Photo Backups
description: These photo backup tools keep your personal photos safe from the prying eyes of cloud storage providers and other unauthorized parties.
aliases:
- /photo-management
- /en/photo-management
---

<small>Protects against the following threat(s):</small>
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#ente-photos" title="Ente Photos" image="./ente.svg" subtitle="Ente Photos is an end-to-end encrypted photo backup service which supports automatic backups on iOS and Android. Their code is fully open source, both on the client side and on the server side." >}}
{{< /cards >}}
</div>

Most cloud **photo backup** solutions like Google Photos, Flickr, and Amazon Photos don't secure your photos against being accessed by the cloud storage provider themselves. These options keep your personal photos private, while allowing you to share them only with family and trusted people.

## Ente Photos

{{< title-card logo="./ente.svg" >}}

**Ente Photos** is an end-to-end encrypted photo backup service which supports automatic backups on iOS and Android. Their code is fully open source, both on the client side and on the server side. It is also [self-hostable](https://github.com/ente-io/ente/tree/main/server#self-hosting).

The free plan offers 10 GB of storage as long as you use the service at least once a year.

{{< cards >}}
  {{< card link="https://ente.com" title="Homepage" icon="home" >}}
  {{< card link="https://ente.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://ente.com/download)
[{{< badge content="macOS" color="indigo" >}}](https://ente.com/download)
[{{< badge content="Windows" color="red" >}}](https://ente.com/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=io.ente.photos)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1542026904)
[{{< badge content="Android" >}}](https://ente.com/download)
[{{< badge content="GitHub" >}}](https://github.com/ente-io/ente/releases?q=photos)
[{{< badge content="Web" >}}](https://web.ente.io)

The server-side source code and infrastructure which underpins Ente Photos underwent an audit by [Cure53](https://ente.com/blog/cern-audit) in October 2025. Previous audits were completed by [Cure53](https://ente.com/blog/cryptography-audit) in March 2023 and by [Fallible](https://ente.com/reports/Fallible-Audit-Report-19-04-2023.pdf) in April 2023.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Cloud-hosted providers must enforce E2EE.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multifactor authentication, or passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must be open source.

### Best Case

- Should have a published audit from a reputable, independent third party.

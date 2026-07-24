---
title: Cloud Storage
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
aliases:
- /cloud
- /en/cloud
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#proton-drive" title="Proton Drive" image="./protondrive.svg" subtitle="Proton Drive is an encrypted cloud storage provider from the popular encrypted email provider Proton Mail. The initial free storage is limited to 2 GB, but with the completion of certain steps, additional storage can be obtained up to 5 GB." >}}
  {{< card link="#tresorit" title="Tresorit" image="./tresorit.svg" subtitle="Tresorit is a Swiss-Hungarian encrypted cloud storage provider founded in 2011. Tresorit is owned by the Swiss Post, the national postal service of Switzerland." >}}
  {{< card link="#peergos" title="Peergos" image="./peergos.svg" subtitle="Peergos is a decentralized protocol and open-source platform for storage, social media, and applications. It provides a secure and private space where users can store, share, view, and edit their photos, videos, documents, etc." >}}
{{< /cards >}}
</div>

Many **cloud storage providers** require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by implementing secure end-to-end encryption.

If these alternatives do not fit your needs, we suggest you look into using encryption software like [Cryptomator](../../software/encryption/index.md#cryptomator-cloud) with another cloud provider. Using Cryptomator in conjunction with **any** cloud provider (including these) may be a good idea to reduce the risk of encryption flaws in a provider's native clients.

> [!NOTE]
> For more technical readers, Nextcloud is [still a recommended tool](../../self-hosting/file-management/index.md#nextcloud) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do [not recommend](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

{{< title-card logo="./protondrive.svg" >}}

**Proton Drive** is an encrypted cloud storage provider from the popular encrypted email provider [Proton Mail](../email/index.md#proton-mail).

The initial free storage is limited to 2 GB, but with the completion of [certain steps](https://proton.me/support/more-free-storage-existing-users), additional storage can be obtained up to 5 GB.

{{< cards >}}
  {{< card link="https://proton.me/drive" title="Homepage" icon="home" >}}
  {{< card link="https://proton.me/drive/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="macOS" color="indigo" >}}](https://proton.me/drive/download)
[{{< badge content="Windows" color="red" >}}](https://proton.me/drive/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=me.proton.android.drive)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1509667851)

The Proton Drive web application has been independently audited by Securitum in [2021](https://proton.me/community/open-source), but the brand new mobile clients have not yet been publicly audited by a third party.

## Tresorit

{{< title-card logo="./tresorit.svg" >}}

**Tresorit** is a Swiss-Hungarian encrypted cloud storage provider founded in 2011. Tresorit is owned by the Swiss Post, the national postal service of Switzerland.

{{< cards >}}
  {{< card link="https://tresorit.com" title="Homepage" icon="home" >}}
  {{< card link="https://tresorit.com/legal/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://tresorit.com/download)
[{{< badge content="macOS" color="indigo" >}}](https://tresorit.com/download)
[{{< badge content="Windows" color="red" >}}](https://tresorit.com/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id722163232)

Tresorit has received a number of independent security audits:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification): ISO/IEC 27001:2013[^1] Compliance [Certification](https://certipedia.com/quality_marks/9108644476) by TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security): Penetration Testing by Computest
    - This review assessed the security of the Tresorit web client, Android app, Windows app, and associated infrastructure.
    - Computest discovered two vulnerabilities which have been resolved.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture): Penetration Testing by Ernst & Young.
    - This review analyzed the full source code of Tresorit and validated that the implementation matches the concepts described in Tresorit's [white paper](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf).
    - Ernst & Young additionally tested the web, mobile, and desktop clients. They concluded:
        > Test results found no deviation from Tresorit’s data confidentiality claims.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 compliance relates to the company's [information security management system](https://en.wikipedia.org/wiki/Information_security_management) and covers the sales, development, maintenance and support of their cloud services.

They have also received the Digital Trust Label, a certification from the [Swiss Digital Initiative](https://efd.admin.ch/en/swiss-digital-initiative-en) which requires passing [35 criteria](https://swiss-digital-initiative.org/criteria) related to security, privacy, and reliability.

## Peergos

{{< title-card logo="./peergos.svg" >}}

**Peergos** is a decentralized protocol and open-source platform for storage, social media, and applications. It provides a secure and private space where users can store, share, view, and edit their photos, videos, documents, etc.

Peergos secures your files with quantum-resistant E2EE and ensures all data about your files remains private. It is also [self-hostable](https://book.peergos.org/features/self).

{{< cards >}}
  {{< card link="https://peergos.org" title="Homepage" icon="home" >}}
  {{< card link="https://peergos.net/privacy.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://peergos.org/download#linux)
[{{< badge content="macOS" color="indigo" >}}](https://peergos.org/download#macos)
[{{< badge content="Windows" color="red" >}}](https://peergos.org/download#windows)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=net.peergos.android)
[{{< badge content="GitHub" >}}](https://github.com/Peergos/web-ui/releases)
[{{< badge content="Web" >}}](https://peergos.net)

Peergos is built on top of the [InterPlanetary File System (IPFS)](https://ipfs.tech), a peer-to-peer architecture that protects against [Censorship](../../../wiki/basics/common-threats/index.md#avoiding-censorship).

The client, server, and command line interface for Peergos all run from the same binary. Additionally, Peergos includes a [sync engine](https://book.peergos.org/features/sync) (accessible via the native apps) for bi-directionally synchronizing a local folder with a Peergos folder, and a [webdav bridge](https://book.peergos.org/features/webdav) to allow other applications to access your Peergos storage. You can refer to Peergos's documentation for a full overview of their numerous features.

Peergos was [audited](https://peergos.org/posts/security-audit-2024) in November 2024 by Radically Open Security and all issues were fixed. They were previously [audited](https://cure53.de/pentest-report_peergos.pdf) by Cure53 in June 2019, and all found issues were subsequently fixed.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must enforce E2EE.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multifactor authentication, or passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Clients should be open source.
- Clients should be audited in their entirety by an independent third party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.

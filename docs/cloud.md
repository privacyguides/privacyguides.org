---
meta_title: "The Best Private and Secure Cloud Storage Providers - Privacy Guides"
title: "Cloud Storage"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
cover: cloud.png
---
Many cloud storage providers require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by implementing secure E2EE.

If these alternatives do not fit your needs, we suggest you look into using encryption software like [Cryptomator](encryption.md#cryptomator-cloud) with another cloud provider. Using Cryptomator in conjunction with **any** cloud provider (including these) may be a good idea to reduce the risk of encryption flaws in a provider's native clients.

??? question "Looking for Nextcloud?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do [not recommend](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }

    **Proton Drive** is a Swiss encrypted cloud storage provider from the popular encrypted email provider [Proton Mail](email.md#proton-mail).

    [:octicons-home-16: Homepage](https://proton.me/drive){ class="md-button md-button--primary" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)
        - [:simple-windows11: Windows](https://proton.me/fr/drive/download)

The Proton Drive web application has been independently audited by Securitum in [2021](https://proton.me/blog/security-audit-all-proton-apps), full details were not made available, but Securitum's letter of attestation states:

> Auditors identified two low-severity vulnerabilities. Additionally, five general recommendations were reported. At the same time, we confirm that no important security issues were identified during the pentest.

Proton Drive's brand new mobile clients have not yet been publicly audited by a third-party.

## Tresorit

!!! recommendation

    ![Tresorit logo](assets/img/cloud/tresorit.svg){ align=right }

    **Tresorit** is a Swiss-Hungarian encrypted cloud storage provider founded in 2011. Tresorit is owned by the Swiss Post, the national postal service of Switzerland.

    [:octicons-home-16: Homepage](https://tresorit.com/){ class="md-button md-button--primary" }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentation}

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit has received a number of independent security audits:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] Compliance [Certification](https://www.certipedia.com/quality_marks/9108644476) by TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Penetration Testing by Computest
    - This review assessed the security of the Tresorit web client, Android app, Windows app, and associated infrastructure.
    - Computest discovered two vulnerabilities which have been resolved.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Penetration Testing by Ernst & Young.
    - This review analyzed the full source code of Tresorit and validated that the implementation matches the concepts described in Tresorit's [white paper](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf).
    - Ernst & Young additionally tested the web, mobile, and desktop clients: "Test results found no deviation from Tresorit’s data confidentiality claims."

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 compliance relates to the company's [information security management system](https://en.wikipedia.org/wiki/Information_security_management) and covers the sales, development, maintenance and support of their cloud services.

They have also received the Digital Trust Label, a certification from the [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) which requires passing [35 criteria](https://digitaltrust-label.swiss/criteria/) related to security, privacy, and reliability.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

### Minimum Requirements

- Must enforce end-to-end encryption.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multi-factor authentication, or Passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must use standard, audited encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Clients should be open-source.
- Clients should be audited in their entirety by an independent third-party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file-sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.

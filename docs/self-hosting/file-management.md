---
title: File Management
meta_title: "Self-Hosting File Management Tools - Privacy Guides"
icon: material/file-multiple-outline
description: For our more technical readers, self-hosting file management tools can provide additional privacy assurances by having maximum control over your data.
cover: cloud.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](../basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

Self-hosting your own **file management** tools may be a good idea to reduce the risk of encryption flaws in a cloud provider's native clients.

## Photo Management

### PhotoPrism

<div class="admonition recommendation" markdown>

![PhotoPrism logo](../assets/img/self-hosting/photoprism.svg){ align=right }

**PhotoPrism** is a platform for managing photos. It supports album syncing and sharing as well as a variety of other [features](https://photoprism.app/features). It does not include end-to-end encryption, so it's best hosted on a server that you trust and is under your control.

[:octicons-home-16: Homepage](https://photoprism.app){ .md-button .md-button--primary }
[:octicons-eye-16:](https://photoprism.app/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://photoprism.app/kb){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/photoprism){ .card-link title="Source Code" }

</div>

## File Sharing and Sync

### FreedomBox

<div class="admonition recommendation" markdown>

![FreedomBox logo](../assets/img/self-hosting/freedombox.svg){ align=right }

**FreedomBox** is an operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications for use cases like sharing files.

[:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title="Documentation" }
[:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
[:octicons-heart-16:](https://freedomboxfoundation.org/donate){ .card-link title="Contribute" }

</div>

### Nextcloud

<div class="admonition recommendation" markdown>

![Nextcloud logo](../assets/img/self-hosting/nextcloud.svg){ align=right }

**Nextcloud** is a suite of free and open-source client-server software for creating your own file hosting services on a private server you control.

[:octicons-home-16: Homepage](https://nextcloud.com){ .md-button .md-button--primary }
[:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://nextcloud.com/support){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Source Code" }
[:octicons-heart-16:](https://nextcloud.com/contribute){ .card-link title="Contribute" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
- [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
- [:fontawesome-brands-windows: Windows](https://nextcloud.com/install/#install-clients)
- [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
- [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)

</details>

</div>

<div class="admonition danger" markdown>
<p class="admonition-title">Danger</p>

We don't recommend using the [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) for Nextcloud as it may lead to data loss; it is highly experimental and not production quality. For this reason, we don't recommend third-party Nextcloud providers.

</div>

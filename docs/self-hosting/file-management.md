---
title: File Management
meta_title: "Self-Hosted File Management Tools - Privacy Guides"
icon: material/file-multiple-outline
description: For our more technical readers, self-hosting your own file management tools can provide additional privacy assurances by having maximum control over your data.
cover: cloud.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](../basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

Self-hosting your own file management tools may be a good idea to reduce the risk of encryption flaws in a cloud provider's native clients.

## Photo Management

### Ente Photos

<div class="admonition recommendation" markdown>

![Ente logo](../assets/img/photo-management/ente.svg){ align=right }

**Ente Photos** is an end-to-end encrypted photo backup service which supports automatic backups on iOS and Android. Their code is fully open-source, both on the client side and on the server side.

[:octicons-home-16:](https://ente.io){ .card-link title="Homepage" }
[:octicons-info-16:](https://help.ente.io/self-hosting){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/ente-io/ente){ .card-link title="Source Code" }

</div>

### Stingle

<div class="admonition recommendation" markdown>

![Stingle logo](../assets/img/photo-management/stingle.png#only-light){ align=right }
![Stingle logo](../assets/img/photo-management/stingle-dark.png#only-dark){ align=right }

**Stingle** is a gallery and camera application with built-in, end-to-end encrypted backup and sync functionality for your photos and videos. Refer to the documentation on their website for hosting your own Stingle API server.

[:octicons-home-16:](https://ente.io){ .card-link title="Homepage" }
[:octicons-info-16:](https://stingle.org/server){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/stingle){ .card-link title="Source Code" }

</details>

</div>

### PhotoPrism

<div class="admonition recommendation" markdown>

![PhotoPrism logo](../assets/img/self-hosting/photoprism.svg){ align=right }

**PhotoPrism** is a platform for managing photos. It supports album syncing and sharing as well as a variety of other [features](https://photoprism.app/features). It does not include end-to-end encryption, so it's best hosted on a server that you trust and is under your control.

[:octicons-home-16: Homepage](https://photoprism.app){ .md-button .md-button--primary }
[:octicons-eye-16:](https://photoprism.app/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://photoprism.app/kb){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/photoprism){ .card-link title="Source Code" }

</div>

### Peergos

<div class="admonition recommendation" markdown>

![Peergos logo](../assets/img/cloud/peergos.svg){ align=right }

**Peergos** provides a secure and private space where users can store, share, and view their photos, videos, documents, etc. Peergos secures your files with quantum-resistant E2EE and ensures all data about your files remains private.

[:octicons-home-16:](https://peergos.org){ .card-link title="Homepage" }
[:octicons-info-16:](https://github.com/peergos/peergos#usage---running-locally-to-log-in-to-another-instance){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/Peergos/Peergos){ .card-link title="Source Code" }

</div>

Peergos is primarily a web app, but you can self-host the server either as a local cache for your remote Peergos account, or as a standalone storage server which negates the need to register for a remote account and subscription. The Peergos server is a `.jar` file, which means the Java 17+ Runtime Environment ([OpenJDK download](https://azul.com/downloads)) should be installed on your machine to get it working.

Running a local version of Peergos alongside a registered account on their paid, hosted service allows you to access your Peergos storage without any reliance on DNS or TLS certificate authorities, and keep a copy of your data backed up to their cloud. The user experience should be the same whether you run their desktop server or just use their hosted web interface.

## File Sharing and Sync

### Send

<div class="admonition recommendation" markdown>

![Send logo](../assets/img/file-sharing-sync/send.svg){ align=right }

**Send** allows you to share files with others using a link. Files are encrypted on your device so that they cannot be read by the server, and they can be optionally password-protected as well.

[:octicons-home-16:](https://send.vis.ee){ .card-link title="Homepage" }
[:octicons-info-16:](https://github.com/timvisee/send/blob/master/docs/deployment.md){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Source Code" }

</div>

To upload files to your own server via the [ffsend](https://github.com/timvisee/ffsend) CLI, specify the `--host` flag:

```bash
ffsend upload --host https://example.com/ FILE
```

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

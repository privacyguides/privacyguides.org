---
title: File Management
description: For our more technical readers, self-hosting file management tools can provide additional privacy assurances by having maximum control over your data.
aliases:
- /self-hosting/file-management
- /en/self-hosting/file-management
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

Self-hosting your own **file management** tools may be a good idea to reduce the risk of encryption flaws in a cloud provider's native clients.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#photoprism" title="PhotoPrism" image="./photoprism.svg" subtitle="PhotoPrism is a platform for managing photos. It supports album syncing and sharing as well as a variety of other features. It does not include end-to-end encryption, so it’s best hosted on a server that you trust and is under your control." >}}
  {{< card link="#freedombox" title="FreedomBox" image="./freedombox.svg" subtitle="FreedomBox is an operating system designed to be run on a single-board computer (SBC). The purpose is to make it easy to set up server applications for use cases like sharing files." >}}
  {{< card link="#nextcloud" title="Nextcloud" image="./nextcloud.svg" subtitle="Nextcloud is a suite of free and open-source client-server software for creating your own file hosting services on a private server you control." >}}
{{< /cards >}}
</div>

## Photo Management

### PhotoPrism

{{< title-card logo="./photoprism.svg" >}}

**PhotoPrism** is a platform for managing photos. It supports album syncing and sharing as well as a variety of other [features](https://photoprism.app/features). It does not include end-to-end encryption, so it's best hosted on a server that you trust and is under your control.

{{< cards >}}
  {{< card link="https://photoprism.app" title="Homepage" icon="home" >}}
  {{< card link="https://photoprism.app/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

## File Sharing and Sync

### FreedomBox

{{< title-card logo="./freedombox.svg" >}}

**FreedomBox** is an operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications for use cases like sharing files.

{{< cards >}}
  {{< card link="https://freedombox.org" title="Homepage" icon="home" >}}
  {{< card link="https://wiki.debian.org/FreedomBox/Manual" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

### Nextcloud

{{< title-card logo="./nextcloud.svg" >}}

**Nextcloud** is a suite of free and open-source client-server software for creating your own file hosting services on a private server you control.

{{< cards >}}
  {{< card link="https://nextcloud.com" title="Homepage" icon="home" >}}
  {{< card link="https://nextcloud.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.nextcloud.client)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1125420102)
[{{< badge content="GitHub" >}}](https://github.com/nextcloud/android/releases)
[{{< badge content="Windows" color="red" >}}](https://nextcloud.com/install/#install-clients)
[{{< badge content="macOS" color="indigo" >}}](https://nextcloud.com/install/#install-clients)
[{{< badge content="Linux" color="yellow" >}}](https://nextcloud.com/install/#install-clients)

> [!WARNING]
> We don't recommend using the [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) for Nextcloud as it may lead to data loss; it is highly experimental and not production quality. For this reason, we don't recommend third-party Nextcloud providers.

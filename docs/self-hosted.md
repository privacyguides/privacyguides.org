---
title: Self-hosted Software and Services
icon: material/server-network
description: For our more technical readers, self-hosted software and services can provide additional privacy assurances by having maximum control over your data.
cover: router.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

**Self-hosted software and services** can be a way to achieve a higher level of privacy through digital sovereignty, particularly independence from cloud servers controlled by product developers or vendors. By self-hosting, we mean hosting applications and data on your own hardware.

Self-hosting your own solutions requires advanced technical knowledge and a deeper understanding of the associated risks. By becoming the host for yourself and possibly others, you take on responsibilities you might not otherwise have. Self-hosting privacy software improperly can leave you worse off than using e.g. an E2EE service provider, so it is best avoided if you are not already comfortable doing so.

## :material-email: Email Servers

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable. In addition to the "all-in-one" solutions below, we've picked out a few articles that cover a more manual approach:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide) (August 2017)

### Stalwart

<div class="admonition recommendation" markdown>

![Stalwart logo](assets/img/self-hosted/stalwart.svg){ align=right }

**Stalwart** is a newer mail server written in Rust which supports JMAP in addition to the standard IMAP, POP3, and SMTP. It has a wide variety of configuration options, but it also defaults to very reasonable settings in terms of both security and features, making it easy to use immediately. It has web-based administration with TOTP 2FA support, and it allows you to enter your public PGP key to encrypt **all** incoming messages.

[:octicons-home-16: Homepage](https://stalw.art){ .md-button .md-button--primary }
[:octicons-info-16:](https://stalw.art/docs/get-started){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/stalwartlabs){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/sponsors/stalwartlabs){ .card-link title="Contribute" }

</div>

Stalwart's [PGP implementation](https://stalw.art/docs/encryption/overview) is unique among our self-hosted recommendations, and allows you to operate your own mail server with zero-knowledge message storage. If you additionally configure Web Key Directory (WKD) on your domain, and if you use an email client which supports PGP and WKD for outgoing mail (like Thunderbird), then this is the easiest way to get self-hosted E2EE compatibility with all [Proton Mail](email.md#proton-mail) users.

Stalwart does **not** have an integrated webmail, so you will need to use it with a [dedicated email client](email-clients.md) (or find an open-source webmail to self-host, like Nextcloud's Mail app). We use Stalwart for our own internal email at *Privacy Guides*.

### Mailcow

<div class="admonition recommendation" markdown>

![Mailcow logo](assets/img/self-hosted/mailcow.svg){ align=right }

**Mailcow** is a more advanced mail server perfect for those with Linux experience. It has everything you need in a Docker container: a mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.

[:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
[:octicons-info-16:](https://docs.mailcow.email){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
[:octicons-heart-16:](https://servercow.de/mailcow?lang=en#sal){ .card-link title="Contribute" }

</div>

### Mail-in-a-Box

<div class="admonition recommendation" markdown>

![Mail-in-a-Box logo](assets/img/self-hosted/mail-in-a-box.svg){ align=right }

**Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.

[:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
[:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

</div>

## :material-file-cloud: Cloud Storage

### Peergos

<div class="admonition recommendation" markdown>

![Peergos logo](assets/img/cloud/peergos.svg){ align=right }

**Peergos** provides a secure and private space where users can store, share, and view their photos, videos, documents, etc. Peergos secures your files with quantum-resistant end-to-end encryption and ensures all data about your files remains private.

[:octicons-home-16:](https://peergos.org){ .card-link title="Homepage" }
[:octicons-info-16:](https://book.peergos.org){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/Peergos/Peergos){ .card-link title="Source Code" }

</div>

Peergos is primarily a web app, but you can self-host the server either as a local cache for your remote Peergos account, or as a standalone storage server which negates the need to register for a remote account and subscription. The Peergos server is a `.jar` file, which means the Java 17+ Runtime Environment ([OpenJDK download](https://azul.com/downloads)) should be installed on your machine to get it working.

Running a local version of Peergos alongside a registered account on their paid, hosted service allows you to access your Peergos storage without any reliance on DNS or TLS certificate authorities, and keep a copy of your data backed up to their cloud. The user experience should be the same whether you run their desktop server or just use their hosted web interface.

## :material-dns: DNS Filtering

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as smart TVs and other IoT devices, as no client-side software is needed. Keep in mind that the DNS solutions below are typically restricted to your home/local network unless you set up a more advanced configuration.

### Pi-hole

<div class="admonition recommendation" markdown>

![Pi-hole logo](assets/img/self-hosted/pi-hole.svg){ align=right }

**Pi-hole** is an open-source [DNS sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.

[:octicons-home-16: Homepage](https://pi-hole.net){ .md-button .md-button--primary }
[:octicons-eye-16:](https://pi-hole.net/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.pi-hole.net){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
[:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title="Contribute" }

</div>

### AdGuard Home

<div class="admonition recommendation" markdown>

![AdGuard Home logo](assets/img/self-hosted/adguard-home.svg){ align=right }

**AdGuard Home** is an open-source [DNS sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

AdGuard Home features a polished web interface to view insights and manage blocked content.

[:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
[:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

</div>

## :material-image: Photo Management

### PhotoPrism

<div class="admonition recommendation" markdown>

![PhotoPrism logo](assets/img/self-hosted/photoprism.svg){ align=right }

**PhotoPrism** is a platform for managing photos. It supports album syncing and sharing as well as a variety of other [features](https://photoprism.app/features). It does not include E2EE, so it's best hosted on a server that you trust and is under your control.

[:octicons-home-16: Homepage](https://photoprism.app){ .md-button .md-button--primary }
[:octicons-eye-16:](https://photoprism.app/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://photoprism.app/kb){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/photoprism){ .card-link title="Source Code" }

</div>

## :material-search-web: Search Engines

### SearXNG

<div class="admonition recommendation" markdown>

![SearXNG logo](assets/img/search-engines/searxng.svg){ align=right }

**SearXNG** is an open-source, [metasearch engine](https://en.wikipedia.org/wiki/Metasearch_engine). It is an actively maintained fork of [SearX](https://github.com/searx/searx).

[:octicons-home-16:](https://searxng.org){ .card-link title="Homepage" }
[:octicons-info-16:](https://docs.searxng.org/admin/installation.html#installation){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Source Code" }

</div>

It is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

## :material-account-group: Document Collaboration

### Nextcloud (Office)

<div class="admonition recommendation" markdown>

![Nextcloud logo](assets/img/self-hosted/nextcloud.svg){ align=right }

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

## :material-share-variant: File Sharing and Sync

### Send

<div class="admonition recommendation" markdown>

![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }

**Send**,a fork of Mozilla's discontinued Firefox Send service, allows you to send files to others with a link. Files are encrypted on your device so that they cannot be read by the server, and they can be optionally password-protected as well.

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

![FreedomBox logo](assets/img/self-hosted/freedombox.svg){ align=right }

**FreedomBox** is an operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications for purposes like file sharing.

[:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title="Documentation" }
[:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
[:octicons-heart-16:](https://freedomboxfoundation.org/donate){ .card-link title="Contribute" }

</div>

### Nextcloud (Files)

<div class="admonition recommendation" markdown>

![Nextcloud logo](assets/img/self-hosted/nextcloud.svg){ align=right }

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

## :material-form-textbox-password: Password Managers

### Vaultwarden

<div class="admonition recommendation" markdown>

![Vaultwarden logo](assets/img/self-hosted/vaultwarden.svg#only-light){ align=right }
![Vaultwarden logo](assets/img/self-hosted/vaultwarden-dark.svg#only-dark){ align=right }

**Vaultwarden** is an alternative implementation of [Bitwarden](passwords.md#bitwarden)'s sync server written in Rust and compatible with official Bitwarden clients, perfect for self-hosted deployment where running the resource-heavy [official service](https://github.com/bitwarden/server) might not be ideal.

[:octicons-repo-16: Repository](https://github.com/dani-garcia/vaultwarden){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title="Contribute" }

</div>

### Psono

<div class="admonition recommendation" markdown>

![Psono logo](assets/img/password-management/psono.svg){ align=right }

**Psono** is a free and open-source password manager with a focus on password management for teams. Psono supports secure sharing of passwords, files, bookmarks, and emails. All secrets are protected by a master password.

[:octicons-home-16:](https://psono.com){ .card-link title="Homepage" }
[:octicons-info-16:](https://doc.psono.com/admin/overview/summary.html){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

</details>

</div>

Psono provides extensive documentation for their product. The webclient for Psono can be self-hosted; alternatively, you can choose the full Community Edition or the Enterprise Edition with additional features.

## :material-flip-to-front: Frontends

Self-hosting your own frontend instance can help you circumvent rate limits that you may encounter on high-traffic, public instances. It is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting, as other peoples' usage will be linked to your hosting.

- [Redlib](frontends.md#redlib)
- [ProxiTok](frontends.md#proxitok)
- [Invidious](frontends.md#invidious)
- [Piped](frontends.md#piped)

## More Services and Software

Tool recommendations in other categories of the website also provide a self-hosted option, so you could consider this if you are confident in your ability to host the software after reading their documentation.

- [**Email Aliasing**](email-aliasing.md): [Addy.io](email-aliasing.md#addyio)
- [**Photo Management**](photo-management.md): [Ente Photos](photo-management.md#ente-photos) and [Stingle](photo-management.md#stingle)
- [**Document Collaboration**](document-collaboration.md): [Cryptpad](document-collaboration.md#cryptpad)
- [**Language Tools**](language-tools.md): [LanguageTool](language-tools.md#languagetool)
- [**News Aggregators**](news-aggregators.md): [Miniflux](news-aggregators.md#miniflux)
- [**Pastebins**](pastebins.md): [Privatebin](pastebins.md#privatebin) and [Paaster](pastebins.md#paaster)
- [**Real Time Communication**](real-time-communication.md): [SimpleX Chat](real-time-communication.md#simplex-chat) and [Element](real-time-communication.md#element)

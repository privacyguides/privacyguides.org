---
title: Email Servers
meta_title: "Self-Hosted Email - Privacy Guides"
icon: material/email
description: For our more technical readers, self-hosting your own email can provide additional privacy assurances by having maximum control over your data.
cover: email.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](../basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable. In addition to the "all-in-one" solutions below, we've picked out a few articles that cover a more manual approach:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide) (August 2017)

## Stalwart

<div class="admonition recommendation" markdown>

![Stalwart logo](../assets/img/self-hosting/stalwart.svg){ align=right }

**Stalwart** is a newer mail server written in Rust which supports JMAP in addition to the standard IMAP, POP3, and SMTP. It has a wide variety of configuration options, but also defaults to very reasonable settings in terms of both security and features, making it easy to use immediately. It has web-based administration with TOTP 2FA support and allows you to enter your public PGP key to encrypt **all** incoming messages.

[:octicons-home-16: Homepage](https://stalw.art){ .md-button .md-button--primary }
[:octicons-info-16:](https://stalw.art/docs/get-started){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/stalwartlabs){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/sponsors/stalwartlabs){ .card-link title="Contribute" }

</div>

Stalwart's [PGP implementation](https://stalw.art/docs/encryption/overview) is unique among our self-hosted recommendations and allows you to operate your own mail server with zero-knowledge message storage. If you additionally configure Web Key Directory (WKD) on your domain, and if you use an email client which supports PGP and WKD for outgoing mail (like Thunderbird), then this is the easiest way to get self-hosted E2EE compatibility with all [Proton Mail](../email.md#proton-mail) users.

Stalwart does **not** have an integrated webmail, so you will need to use it with a [dedicated email client](../email-clients.md) or find an open-source webmail to self-host, like Nextcloud's Mail app.

We use Stalwart for our own internal email at *Privacy Guides*.

## Mailcow

<div class="admonition recommendation" markdown>

![Mailcow logo](../assets/img/self-hosting/mailcow.svg){ align=right }

**Mailcow** is an advanced mail server perfect for those with Linux experience. It has everything you need in a Docker container: a mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.

[:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
[:octicons-info-16:](https://docs.mailcow.email){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
[:octicons-heart-16:](https://servercow.de/mailcow?lang=en#sal){ .card-link title="Contribute" }

</div>

## Mail-in-a-Box

<div class="admonition recommendation" markdown>

![Mail-in-a-Box logo](../assets/img/self-hosting/mail-in-a-box.svg){ align=right }

**Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.

[:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
[:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

</div>

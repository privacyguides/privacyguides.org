---
title: Email Servers
description: For our more technical readers, self-hosting your own email can provide additional privacy assurances by having maximum control over your data.
aliases:
- /self-hosting/email-servers
- /en/self-hosting/email-servers
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

Advanced system administrators may consider setting up their own **email server**. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable. In addition to the "all-in-one" solutions below, we've picked out a few articles that cover a more manual approach:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide) (August 2017)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#stalwart" title="Stalwart" image="./stalwart.svg" subtitle="Stalwart is a newer mail server written in Rust which supports JMAP in addition to the standard IMAP, POP3, and SMTP. It has a wide variety of configuration options, but also defaults to very reasonable settings in terms of both security and features, making it easy to use immediately." >}}
  {{< card link="#mailcow" title="Mailcow" image="./mailcow.svg" subtitle="Mailcow is an advanced mail server perfect for those with Linux experience. It has everything you need in a Docker container: a mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support." >}}
  {{< card link="#mail-in-a-box" title="Mail-in-a-Box" image="./mail-in-a-box.svg" subtitle="Mail-in-a-Box is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server." >}}
{{< /cards >}}
</div>

## Stalwart

{{< title-card logo="./stalwart.svg" >}}

**Stalwart** is a newer mail server written in Rust which supports JMAP in addition to the standard IMAP, POP3, and SMTP. It has a wide variety of configuration options, but also defaults to very reasonable settings in terms of both security and features, making it easy to use immediately. It has web-based administration with TOTP 2FA support and allows you to enter your public PGP key to encrypt **all** incoming messages.

{{< cards >}}
  {{< card link="https://stalw.art" title="Homepage" icon="home" >}}
  {{< card link="https://stalw.art/docs/get-started" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

Stalwart's [PGP implementation](https://stalw.art/docs/encryption/overview) is unique among our self-hosted recommendations and allows you to operate your own mail server with encrypted message storage, lessening the risk of unauthorized access to your emails. If you additionally configure Web Key Directory (WKD) on your domain, and if you use an email client which supports PGP and WKD for outgoing mail (like Thunderbird), then this is the easiest way to get self-hosted E2EE compatibility with all [Proton Mail](../../services/email/index.md#proton-mail) users.

Stalwart does **not** have an integrated webmail, so you will need to use it with a [dedicated email client](../../software/email-clients/index.md) or find an open-source webmail to self-host, like Nextcloud's Mail app.

We use Stalwart for our own internal email at *Privacy Guides*.

## Mailcow

{{< title-card logo="./mailcow.svg" >}}

**Mailcow** is an advanced mail server perfect for those with Linux experience. It has everything you need in a Docker container: a mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.

{{< cards >}}
  {{< card link="https://mailcow.email" title="Homepage" icon="home" >}}
  {{< card link="https://docs.mailcow.email" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

## Mail-in-a-Box

{{< title-card logo="./mail-in-a-box.svg" >}}

**Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.

{{< cards >}}
  {{< card link="https://mailinabox.email" title="Homepage" icon="home" >}}
  {{< card link="https://mailinabox.email/guide.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

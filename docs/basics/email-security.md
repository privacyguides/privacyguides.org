---
meta_title: "Why Email Isn't the Best Choice for Privacy and Security - Privacy Guides"
title: Email Security
icon: material/email
description: Email is inherently insecure in many ways, and these are some of the reasons it isn't our top choice for secure communications.
---

Email is an insecure form of communication by default. You can improve your email security with tools such as OpenPGP, which add End-to-End Encryption to your messages, but OpenPGP still has a number of drawbacks compared to encryption in other messaging applications, and some email data can never be encrypted inherently due to how email is designed.

As a result, email is best used for receiving transactional emails (like notifications, verification emails, password resets, etc.) from the services you sign up for online, not for communicating with others.

## Email Encryption Overview

The standard way to add E2EE to emails between different email providers is by using OpenPGP. There are different implementations of the OpenPGP standard, the most common being [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) and [OpenPGP.js](https://openpgpjs.org).

There is another standard which is popular with business called [S/MIME](https://en.wikipedia.org/wiki/S/MIME), however, it requires a certificate issued from a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) (not all of them issue S/MIME certificates). It has support in [Google Workplace](https://support.google.com/a/topic/9061730) and [Outlook for Web or Exchange Server 2016, 2019](https://support.office.com/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

Even if you use OpenPGP, it does not support [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. This is why we recommend [instant messengers](../real-time-communication.md) which implement forward secrecy over email for person-to-person communications whenever possible.

## What is the Web Key Directory standard?

The Web Key Directory (WKD) standard allows email clients to discover the OpenPGP key for other mailboxes, even those hosted on a different provider. Email clients which support WKD will ask the recipient's server for a key based on the email address' domain name. For example, if you emailed `jonah@privacyguides.org`, your email client would ask `privacyguides.org` for Jonah's OpenPGP key, and if `privacyguides.org` has a key for that account, your message would be automatically encrypted.

In addition to the [email clients we recommend](../email-clients.md) which support WKD, some webmail providers also support WKD. Whether *your own* key is published to WKD for others to use depends on your domain configuration. If you use an [email provider](../email.md#openpgp-compatible-services) which supports WKD, such as Proton Mail or Mailbox.org, they can publish your OpenPGP key on their domain for you.

If you use your own custom domain, you will need to configure WKD separately. If you control your domain name, you can set up WKD regardless of your email provider. One easy way to do this is to use the "[WKD as a Service](https://keys.openpgp.org/about/usage#wkd-as-a-service)" feature from keys.openpgp.org, by setting a CNAME record on the `openpgpkey` subdomain of your domain pointed to `wkd.keys.openpgp.org`, then uploading your key to [keys.openpgp.org](https://keys.openpgp.org). Alternatively, you can [self-host WKD on your own web server](https://wiki.gnupg.org/WKDHosting).

If you use a shared domain from a provider which doesn't support WKD, like @gmail.com, you won't be able to share your OpenPGP key with others via this method.

### What Email Clients Support E2EE?

Email providers which allow you to use standard access protocols like IMAP and SMTP can be used with any of the [email clients we recommend](../email-clients.md). Depending on the authentication method, this may lead to the decrease security if either the provider or the email client does not support OATH or a bridge application as [multifactor authentication](multi-factor-authentication.md) is not possible with plain password authentication.

### How Do I Protect My Private Keys?

A smart card (such as a [YubiKey](https://support.yubico.com/hc/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) or [Nitrokey](../security-keys.md#nitrokey)) works by receiving an encrypted email message from a device (phone, tablet, computer, etc.) running an email/webmail client. The message is then decrypted by the smart card and the decrypted content is sent back to the device.

It is advantageous for the decryption to occur on the smart card to avoid possibly exposing your private key to a compromised device.

## Email Metadata Overview

Email metadata is stored in the [message header](https://en.wikipedia.org/wiki/Email#Message_header) of the email message and includes some visible headers that you may have seen such as: `To`, `From`, `Cc`, `Date`, `Subject`. There are also a number of hidden headers included by many email clients and providers that can reveal information about your account.

Client software may use email metadata to show who a message is from and what time it was received. Servers may use it to determine where an email message must be sent, among [other purposes](https://en.wikipedia.org/wiki/Email#Message_header) which are not always transparent.

### Who Can View Email Metadata?

Email metadata is protected from outside observers with [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) protecting it from outside observers, but it is still able to be seen by your email client software (or webmail) and any servers relaying the message from you to any recipients including your email provider. Sometimes email servers will also use third-party services to protect against spam, which generally also have access to your messages.

### Why Can't Metadata be E2EE?

Email metadata is crucial to the most basic functionality of email (where it came from, and where it has to go). E2EE was not built into the email protocols originally, instead requiring add-on software like OpenPGP. Because OpenPGP messages still have to work with traditional email providers, it cannot encrypt email metadata, only the message body itself. That means that even when using OpenPGP, outside observers can see lots of information about your messages, such as whom you're emailing, the subject lines, when you're emailing, etc.

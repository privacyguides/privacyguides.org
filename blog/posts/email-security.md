---
date:
    created: 2025-02-13T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Email
license: BY-SA
schema_type: BackgroundNewsArticle
description: Email is ubiquitous. If you want to function in modern society, you pretty much have to have an email address. But is it really a good idea to still be relying on the same decades old techology? What can we do about replacing it?
preview:
  cover:
---
# The (Many) Problems with Email

Email is ubiquitous. If you want to function in modern society, you pretty much have to have an email address. What was originally just a simple protocol to send messages between machines has morphed beyond what it was originally intended for into the defacto authentication, identity, and "secure" communication channel for almost all technology users today. It's been updated many many times to fix security issues and there's more updates to come, but is it worth trying to fix a decades-old protocol or should we scrap it all and start over?<!-- more -->

## Security Holes (And Their Fixes)

The [**Simple Mail Transport Protocol (SMTP)**](https://www.rfc-editor.org/rfc/rfc5321.html) is the standard used to send emails.

Over the years, multiple protocols have been introduced to fix security issues and improve the usability of email, resulting in a complex mess that we're still feeling the consequences of to this day.

### Encryption

By default, there's no encryption in SMTP. Not transport encryption or end-to-end encrpytion, it's just a plaintext protocol.

To remedy this, several solutions have been created.

#### STARTTLS

[STARTTLS](https://www.rfc-editor.org/rfc/rfc3207) is a command that allows email clients to negotiate TLS encryption. Importantly, the negotiation phase happens in plaintext which leaves it vulnerable to attackers.

STARTTLS allows a bit more flexibility at the cost of some security. Since you don't really know if the recipient's email client supports TLS or not, it allows you to continue with the SMTP session anyway if you want to.

Since it's just using TLS, STARTTLS can't provide E2EE, just transport encryption. The encryption looks something like:

Encrypted between your email client and your SMTP server -> decrypted at your SMTP server -> Encrypted between your SMTP server and recipient's SMTP server -> decrypted at recipient's SMTP server -> encrypted between their SMTP server and email client

At each point in the process TLS encrytion is not guaranteed. Now consider that you can have multiple recipients with their own SMTP servers as well and you start to see how flimsly this protection can be. And since the initial negotiation is in plaintext, an attacker can simply strip away the STARTTLS command, preventing a secure connection from being established.

Authentication is left to another protocol to solve, this just handles the transport encryption.

#### SMTPS



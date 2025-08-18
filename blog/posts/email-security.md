---
date:
    created: 2025-08-18T19:00:00Z
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

Encrypted between your email client and your SMTP server → decrypted at your SMTP server → Encrypted between your SMTP server and recipient's SMTP server → decrypted at recipient's SMTP server → encrypted between their SMTP server and email client

At each point in the process TLS encrytion is not guaranteed. Now consider that you can have multiple recipients with their own SMTP servers as well and you start to see how flimsly this protection can be. And since the initial negotiation is in plaintext, an attacker can simply strip away the STARTTLS command, preventing a secure connection from being established.

Authentication is left to another protocol to solve, this just handles the transport encryption.

#### SMTPS

Also known as "Implicit TLS" (as opposed to the "Explicit TLS" of STARTTLS), SMTPS starts with an encrypted connection, similar to HTTPS, removing the potential for an adversary to downgrade the connection.

The [current](https://datatracker.ietf.org/doc/html/rfc8314) recommendations are to use port 465 for SMTPS and port 587 for STARTTLS. Unfortunately, these ports aren't standardized and thus there is disagreement and confusion about what port should be used for SMTPS.

In the past, ports 25, 465, 587, and 2525 have all been used for SMTP at various points. This lack of a standardized port means that you end up with services using different ports and being unable to establish a secure connection. Particularly, there is still confusion in some email providers whether to use port 465 or port 587 for SMTPS, althought the current recommendation is port 465.

### Authentication

SMTP by default essentially has no authentication and allows spoofing the `MAIL FROM` header. Your email client will just blindly accept whoever the sender says they are without any authentication. Luckily, there are several solutions for this.

There are multiple methods that email providers can implement to verify the authenticity of an email sender.

#### SPF

The first solution implemented was [Sender Policy Framework (SPF)](https://datatracker.ietf.org/doc/html/rfc7208). SPF uses [DNS TXT records](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/).

Just like the name sounds, a DNS TXT record allows you to store text in a [DNS record](https://www.cloudflare.com/learning/dns/dns-records/). Here's an example of what a DNS TXT record might look like:

| example.com | record type: | value: | TTL |
|-------------|--------------|--------|-----|
| @           | TXT          | "Text" |99999|

SPF lists all the servers that are authorized to send from a specific domain. When an email is received, it checks the sending server against the list of authorized servers for that domain. An SPF record might look like this:

| example.com | record type: | value: | TTL |
|-------------|--------------|--------|-----|
| @ | TXT | "v=spf1 ip4:200.56.78.99 ip4:156.67.109.43 include:_spf.google.com -all" |99999|

The IP addresses are the ones that are authorized to send email from this domain. The `include:` tag denotes what third-party domains are allowed to send email on behalf of `example.com`. The third-party SPF record will be checked and included in the allowed IP addresses.

While a good start, SPF still has several glaring weaknesses. Since it relies on DNS, an attack on the DNS infrastructure could cause spoofed DNS data to be accepted.

Since SPF doesn't authenticate individual users, it's still possible for a sender to impersonate another user. SPF does not authenticate the `MAIL FROM` header. If you try to send an email from a gmail.com domain but server doesn't match gmail.com, it will fail.

SPF has a few different modes, allowing for a hard fail, soft fail, or completely ignoring it. `-all` means an email that fails will be rejected, `~all` will mark emails that fail as insecure or spam but still send them, and `+all` will specify that any server is allowed to send emails on behalf of your domain.

This flexibility, while convenient, allows for the security benefits of SPF to be completely undermined.

#### DKIM



---
title: Email Services
description: These email providers offer a great place to store your emails securely, and many offer interoperable OpenPGP encryption with other providers.
aliases:
- /email
- /en/email
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#proton-mail" title="Proton Mail" image="./protonmail.svg" subtitle="Proton Mail is an email service with a focus on privacy, encryption, security, and ease of use. They have been in operation since 2013. Proton AG is based in Geneva, Switzerland." >}}
  {{< card link="#mailbox-mail" title="Mailbox Mail" image="./mailbox-mail.svg" subtitle="Mailbox Mail (formerly Mailbox.org) is an email service with a focus on being secure, ad-free, and powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox Mail is based in Berlin, Germany." >}}
  {{< card link="#tuta" title="Tuta" image="./tuta.svg" subtitle="Tuta (formerly Tutanota) is an email service with a focus on security and privacy through the use of encryption. Tuta has been in operation since 2011 and is based in Hanover, Germany." >}}
{{< /cards >}}
</div>

Email is practically a necessity for using any online service, however we do not recommend it for person-to-person conversations. Rather than using email to contact other people, consider using an instant messaging medium that supports forward secrecy.

[Recommended Instant Messengers](../messengers/index.md)

## Recommended Providers

For everything else, we recommend a variety of email providers based on sustainable business models and built-in security and privacy features. Read our [full list of criteria](#criteria) for more information.

| Provider | OpenPGP / WKD | IMAP / SMTP | Encrypted Storage | Anonymous Payment Methods |
|---|---|---|---|---|
| [Proton Mail](#proton-mail) | Yes | Paid plans only | Yes | Cash <br>Monero via third party |
| [Mailbox Mail](#mailbox-mail) | Yes | Yes | Mail only | Cash |
| [Tuta](#tuta) | Partial | Partial | Yes | Monero via third party <br>Cash via third party |

In addition to (or instead of) an email provider recommended here, you may wish to consider a dedicated [email aliasing service](../email-aliasing/index.md#recommended-providers) to protect your privacy. Among other things, these services can help protect your real inbox from spam, prevent marketers from correlating your accounts, and encrypt all incoming messages with PGP.

- [More Information](../email-aliasing/index.md)

## OpenPGP Compatible Services

These providers natively support OpenPGP encryption/decryption and the [Web Key Directory (WKD) standard](../../../wiki/basics/email-security/index.md#what-is-the-web-key-directory-standard), allowing for provider-agnostic end-to-end encrypted emails. For example, a Proton Mail user could send an E2EE message to a Mailbox Mail user, or you could receive OpenPGP-encrypted notifications from internet services which support it.

> [!WARNING]
> When using E2EE technology like OpenPGP your email will still have some metadata that is not encrypted in the header of the email, generally including the subject line! Read more about [email metadata](../../../wiki/basics/email-security/index.md#email-metadata-overview).
>
> OpenPGP also does not support forward secrecy, which means if the private key of either you or the message recipient is ever stolen, all previous messages encrypted with it will be exposed.
>
> - [How do I protect my private keys?](../../../wiki/basics/email-security/index.md#how-do-i-protect-my-private-keys)

### Proton Mail

{{< title-card logo="./protonmail.svg" >}}

**Proton Mail** is an email service with a focus on privacy, encryption, security, and ease of use. They have been in operation since 2013. Proton AG is based in Geneva, Switzerland.

The Proton Free plan comes with 500 MB of Mail storage, which you can increase up to 1 GB for free.

{{< cards >}}
  {{< card link="https://proton.me/mail" title="Homepage" icon="home" >}}
  {{< card link="https://proton.me/mail/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://proton.me/mail/bridge#download)
[{{< badge content="macOS" color="indigo" >}}](https://proton.me/mail/bridge#download)
[{{< badge content="Windows" color="red" >}}](https://proton.me/mail/bridge#download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=ch.protonmail.android)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id979659905)
[{{< badge content="GitHub" >}}](https://github.com/ProtonMail/android-mail/releases)
[{{< badge content="Web" >}}](https://mail.proton.me)

Free accounts have some limitations, such as not being able to search body text and not having access to [Proton Mail Bridge](https://proton.me/mail/bridge), which is required to use a [recommended desktop email client](../../software/email-clients/index.md) such as Thunderbird. Paid accounts include features like Proton Mail Bridge, additional storage, and custom domain support. The Proton Unlimited plan or any multi-user Proton plan includes access to [SimpleLogin](../email-aliasing/index.md#simplelogin) Premium.

A [letter of attestation](https://res.cloudinary.com/dbulfrlrz/images/v1714639878/wp-pme/letter-of-attestation-proton-mail-20211109_3138714c61/letter-of-attestation-proton-mail-20211109_3138714c61.pdf) was provided for Proton Mail's apps in November 2021 by [Securitum](https://research.securitum.com).

Proton Mail has internal crash reports that are **not** shared with third parties and can be disabled.

=== "Web"

From your inbox, select Settings → **All Settings** → **Account** → **Security and privacy** → **Privacy and data collection**.

    - [ ] Disable **Collect usage dignostics**
    - [ ] Disable **Send crash reports**

=== "Mobile"

From your inbox, select the menu → **Settings** → select your username.

    - [ ] Disable **Send crash reports**
    - [ ] Disable **Collect usage dignostics**

#### Custom Domains and Aliases

Paid Proton Mail subscribers can use their own domain with the service or a [catch-all](https://proton.me/support/catch-all) address. Proton Mail also supports [sub-addressing](https://proton.me/support/creating-aliases), which is useful for people who don't want to purchase a domain.

#### Private Payment Methods

Proton Mail [accepts](https://proton.me/support/payment-options) **cash** by mail in addition to standard credit/debit card, [Bitcoin](../../../wiki/advanced/payments/index.md#other-coins-bitcoin-ethereum-etc), and PayPal payments. Additionally, you can use [**Monero**](../../software/cryptocurrency/index.md#monero) to purchase vouchers for Proton Mail Plus or Proton Unlimited via their [official](https://discuss.privacyguides.net/t/add-monero-as-an-anonymous-payment-method-for-proton-services/31058/15) reseller [ProxyStore](https://dys2p.com/en/2025-09-09-proton.html).

#### Account Security

Proton Mail supports TOTP [two-factor authentication](https://proton.me/support/two-factor-authentication-2fa) and [hardware security keys](https://proton.me/support/2fa-security-key) using FIDO2 or U2F standards. The use of a hardware security key requires setting up TOTP two-factor authentication first.

#### Data Security

Proton Mail stores your [emails](https://proton.me/blog/zero-access-encryption) and [calendars](https://proton.me/news/protoncalendar-security-model) with PGP-based encryption at rest, where only you have the decryption keys needed to access them later.

Certain information stored in [Proton Contacts](https://proton.me/support/proton-contacts), such as display names and email addresses, are **not** secured with your own encryption keys, so Proton is able to read them. Contact fields which are protected with your own encryption keys, such as phone numbers, are indicated with a padlock icon.

#### Email Encryption

Proton Mail has [integrated OpenPGP encryption](https://proton.me/support/how-to-use-pgp) in their webmail. Emails to other Proton Mail accounts are encrypted automatically, and encryption to non-Proton Mail addresses with an OpenPGP key can be enabled easily in your account settings. Proton also supports automatic external key discovery with WKD. This means that emails sent to other providers which use WKD will be automatically encrypted with OpenPGP as well, without the need to manually exchange public PGP keys with your contacts. They also allow you to [encrypt messages to non-Proton Mail addresses without OpenPGP](https://proton.me/support/password-protected-emails), without the need for them to sign up for a Proton Mail account.

Proton Mail also publishes the public keys of Proton accounts via HTTP from their WKD. This allows people who don't use Proton Mail to find the OpenPGP keys of Proton Mail accounts easily for cross-provider E2EE. This only applies to email addresses ending in one of Proton's own domains, like `@proton.me`. If you use a custom domain, you must [configure WKD](../../../wiki/basics/email-security/index.md#what-is-the-web-key-directory-standard) separately.

#### Account Termination

If you have a paid account and your [bill is unpaid](https://proton.me/support/delinquency) after 14 days, you won't be able to access your data. After 30 days, your account will become delinquent and won't receive incoming mail. You will continue to be billed during this period. Proton will [delete inactive free accounts](https://proton.me/support/inactive-accounts) after one year. You **cannot** reuse the email address of a deactivated account.

#### Additional Functionality

Proton Mail's [Unlimited](https://proton.me/support/proton-plans#proton-unlimited) plan also enables access to other Proton services in addition to providing multiple custom domains, unlimited hide-my-email aliases, and 500 GB of storage.

### Mailbox Mail

{{< title-card logo="./mailbox-mail.svg" >}}

**Mailbox Mail** (formerly *Mailbox.org*) is an email service with a focus on being secure, ad-free, and powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox Mail is based in Berlin, Germany.

Accounts start with up to 2 GB storage, which can be upgraded as needed.

{{< cards >}}
  {{< card link="https://mailbox.org" title="Homepage" icon="home" >}}
  {{< card link="https://mailbox.org/en/data-protection-privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Web" >}}](https://login.mailbox.org)

#### Custom Domains and Aliases

Mailbox Mail lets you use your own domain, and they support [catch-all](https://kb.mailbox.org/en/private/custom-domains/use-your-own-domain-with-catch-all/) addresses. Mailbox Mail also supports [sub-addressing](https://kb.mailbox.org/en/private/e-mail/what-is-an-alias-and-how-do-i-use-it/), which is useful if you don't want to purchase a domain.

#### Private Payment Methods

Mailbox Mail doesn't accept any cryptocurrencies as a result of their payment processor BitPay suspending operations in Germany. However, they do accept **cash** by mail, **cash** payment to bank account, bank transfer, credit card, PayPal, and a couple of German-specific processors: Paydirekt and Sofortüberweisung.

#### Account Security

Mailbox Mail supports [two-factor authentication](https://kb.mailbox.org/en/private/security-and-privacy/how-to-use-two-factor-authentication-2fa/) for their webmail only. You can use either TOTP or a [YubiKey](../../hardware/security-keys/index.md#yubikey) via the [YubiCloud](https://yubico.com/products/services-software/yubicloud). Web standards such as [WebAuthn](../../../wiki/basics/multi-factor-authentication/index.md#fido-fast-identity-online) are not yet supported.

#### Data Security

Mailbox Mail allows for encryption of incoming mail using their [encrypted mailbox](https://kb.mailbox.org/en/private/encryption/your-encrypted-mailbox/). New messages that you receive will then be immediately encrypted with your public key.

However, [Open-Xchange](https://en.wikipedia.org/wiki/Open-Xchange), the software platform used by Mailbox Mail, [does not support](https://kb.mailbox.org/en/business/security-privacy-article/encryption-of-calendar-and-address-book/) the encryption of your address book and calendar. A [standalone option](../calendar/index.md) may be more appropriate for that data.

#### Email Encryption

Mailbox Mail has [integrated encryption](https://kb.mailbox.org/en/private/encryption/how-can-e-mails-be-encrypted-with-pgp/) in their webmail, which simplifies sending messages to people with public OpenPGP keys. They also allow [remote recipients to decrypt an email](https://kb.mailbox.org/en/private/encryption/my-recipient-does-not-use-pgp/) on Mailbox Mail's servers. This feature is useful when the remote recipient does not have OpenPGP and cannot decrypt a copy of the email in their own mailbox.

Mailbox Mail also supports the discovery of public keys via HTTP from their WKD. This allows people outside of Mailbox Mail to find the OpenPGP keys of Mailbox Mail accounts easily for cross-provider E2EE. This only applies to email addresses ending in one of Mailbox Mail's own domains, like `@mailbox.org`. If you use a custom domain, you must [configure WKD](../../../wiki/basics/email-security/index.md#what-is-the-web-key-directory-standard) separately.

#### Account Termination

Your account will be set to a restricted user account when your contract ends. It will be irrevocably deleted after [30 days](https://kb.mailbox.org/en/en/private/account/reactivate-a-deleted-account/).

#### Additional Functionality

You can access your Mailbox Mail account via IMAP/SMTP using their [.onion service](https://kb.mailbox.org/en/en/private/security-privacy/using-the-tor-exit-node-from-mailbox/). However, their webmail interface cannot be accessed via their .onion service, and you may experience TLS certificate errors.

All accounts come with limited cloud storage that [can be encrypted](https://kb.mailbox.org/en/private/drive/encrypt-files-on-your-drive/). Mailbox Mail also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/en/business/e-mail-article/ensuring-e-mails-are-sent-securely/), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox Mail also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

Mailbox Mail has a digital legacy feature for all plans. You can choose whether you want any of your data to be passed to heirs, providing that they apply and provide your testament. Alternatively, you can nominate a person by name and address.

## More Providers

These providers encrypt your emails in a way that only you can read them later, making them great options for keeping your stored emails secure. However, they don't support interoperable encryption standards for E2EE communications between different providers.

### Tuta

{{< title-card logo="./tuta.svg" >}}

**Tuta** (formerly *Tutanota*) is an email service with a focus on security and privacy through the use of encryption. Tuta has been in operation since 2011 and is based in Hanover, Germany.

Free accounts start with 1 GB of storage.

{{< cards >}}
  {{< card link="https://tuta.com" title="Homepage" icon="home" >}}
  {{< card link="https://tuta.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://tuta.com/#download)
[{{< badge content="macOS" color="indigo" >}}](https://tuta.com/#download)
[{{< badge content="Windows" color="red" >}}](https://tuta.com/#download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id922429609)
[{{< badge content="GitHub" >}}](https://github.com/tutao/tutanota/releases)
[{{< badge content="Web" >}}](https://app.tuta.com)

Tuta doesn't support the [IMAP protocol](https://tuta.com/support#imap) or the use of third-party [email clients](../../software/email-clients/index.md), and you also won't be able to add [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) to the Tuta app. [Email import](https://github.com/tutao/tutanota/issues/630) is not currently supported either, though this is [due to be changed](https://tuta.com/blog/kickoff-import). Emails can be exported [individually or by bulk selection](https://tuta.com/support#generalMail) per folder, which may be inconvenient if you have many folders.

#### Custom Domains and Aliases

Paid Tuta accounts can use either 15 or 30 aliases depending on their plan and unlimited aliases on [custom domains](https://tuta.com/support#custom-domain). Tuta doesn't allow for [sub-addressing (plus addresses)](https://tuta.com/support#plus), but you can use a [catch-all](https://tuta.com/support#settings-global) with a custom domain.

#### Private Payment Methods

Tuta only directly accepts credit cards and PayPal, however you can use [**cryptocurrency**](../../software/cryptocurrency/index.md) to purchase gift cards via their [partnership](https://tuta.com/support/#cryptocurrency) with ProxyStore.

#### Account Security

Tuta supports [two-factor authentication](https://tuta.com/support#2fa) with either TOTP or U2F.

#### Data Security

Tuta stores your [emails](https://tuta.com/support#what-encrypted), [address book contacts](https://tuta.com/support#encrypted-address-book), and [calendars](https://tuta.com/support#calendar) with strong encryption where only you have the decryption keys. This means the messages and other data stored in your account cannot be read by anyone other than you after they are stored.

#### Email Encryption

Tuta [does not use OpenPGP](https://tuta.com/support/#pgp). Tuta accounts can only receive encrypted emails from non-Tuta email accounts when sent via a [temporary Tuta mailbox](https://tuta.com/support/#encrypted-email-external).

#### Account Termination

Tuta will [delete inactive free accounts](https://tuta.com/support#inactive-accounts) after six months. You can reuse a deactivated free account if you pay.

#### Additional Functionality

Tuta offers the business version of [Tuta to non-profit organizations](https://tuta.com/blog/secure-email-for-non-profit) for free or with a heavy discount.

## Criteria

**Please note we are not affiliated with any of the providers we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements for any email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an email provider, and conduct your own research to ensure the email provider you choose is the right choice for you.

### Technology

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider has the features you require.

**Minimum to Qualify:**

- Must encrypt email account data at rest with asymmetric encryption, where only the user has the private keys needed to decrypt it.
- Must be capable of exporting emails as [Mbox](https://en.wikipedia.org/wiki/Mbox) or individual .EML with [RFC5322](https://datatracker.ietf.org/doc/rfc5322) standard.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Must operate on owned infrastructure, i.e. not built upon third-party email service providers.

**Best Case:**

- Should encrypt all account data (contacts, calendars, etc.) at rest with asymmetric encryption, where only the user has the private keys needed to decrypt it.
- Should provide integrated webmail E2EE/PGP encryption as a convenience.
- Should support WKD to allow improved discovery of public OpenPGP keys via HTTP. GnuPG users can get a key with this command: `gpg --locate-key example_user@example.com`.
- Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Should support [sub-addressing](https://en.wikipedia.org/wiki/Email_address#Sub-addressing).
- Should allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Catch-all or alias functionality for those who use their own domains.
- Should use standard email access protocols such as IMAP, SMTP, or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.
- Email provider's services should be available via an [onion service](https://en.wikipedia.org/wiki/.onion).

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Minimum to Qualify:**

- Must protect sender's IP address, which can involve filtering it from showing in the `Received` header field.
- Must not require personally identifiable information (PII) besides a username and a password.
- Privacy policy must meet the requirements defined by the GDPR.

**Best Case:**

- Should accept [anonymous payment options](../../../wiki/advanced/payments/index.md) ([cryptocurrency](../../software/cryptocurrency/index.md), cash, gift cards, etc.)
- Should be hosted in a jurisdiction with strong email privacy protection laws.

### Security

Email servers deal with a lot of very sensitive data. We expect that providers will adopt industry best practices in order to protect their customers.

**Minimum to Qualify:**

- Protection of webmail with 2FA, such as [TOTP](../../../wiki/basics/multi-factor-authentication/index.md#time-based-one-time-password-totp).
- Encryption at rest, using asymmetric encryption where the service provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to, or a remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
- No TLS errors or vulnerabilities when being profiled by tools such as [Hardenize](https://hardenize.com), [testssl.sh](https://testssl.sh), or [Qualys SSL Labs](https://ssllabs.com/ssltest); this includes certificate related errors and weak DH parameters, such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- A server suite preference (optional on TLS 1.3) for strong cipher suites which support forward secrecy and authenticated encryption.
- A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
- Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Must have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- A server suite preference of TLS 1.2 or later and a plan for [RFC8996](https://datatracker.ietf.org/doc/rfc8996).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Website security standards such as:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.
- Must support viewing of [message headers](https://en.wikipedia.org/wiki/Email#Message_header), as it is a crucial forensic feature to determine if an email is a phishing attempt.

**Best Case:**

- Should support hardware authentication, i.e. U2F and [WebAuthn](../../../wiki/basics/multi-factor-authentication/index.md#fido-fast-identity-online).
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
- Should implement [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), which is useful for people who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
- Published security audits from a reputable, third-party firm.
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
- Website security standards such as:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163)

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

- Public-facing leadership or ownership.

**Best Case:**

- Frequent transparency reports.

### Marketing

With the email providers we recommend, we like to see responsible marketing.

**Minimum to Qualify:**

- Must self-host analytics (no Google Analytics, Adobe Analytics, etc.).
- Must not have any irresponsible marketing, which can include the following:
    - Claims of "unbreakable encryption." Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
    - Guarantees of protecting anonymity 100%. When someone makes a claim that something is 100%, it means there is no certainty for failure. We know people can quite easily de-anonymize themselves in a number of ways, e.g.:
        - Reusing personal information e.g. (email accounts, unique pseudonyms, etc.) that they accessed without anonymity software such as Tor
        - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Clear and easy-to-read documentation for tasks like setting up 2FA, email clients, OpenPGP, etc.

### Additional Functionality

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

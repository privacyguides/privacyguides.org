---
title: Private Email Providers
icon: material/email
---

Find a secure email provider that will keep your privacy in mind. Don’t settle for ad-supported platforms. Never trust any company with your privacy, always encrypt.

!!! warning

    When using end-to-end encryption (E2EE) technology like OpenPGP, email will still have some metadata that is not encrypted in the header of the email. Read more about email metadata.

    OpenPGP also does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. How do I protect my private keys?

??? example "Email Alternatives"

    Rather than use email for prolonged conversations, consider using a medium that does support Forward secrecy.

    [Recommended Instant Messengers](real-time-communication.md){ .md-button }

## Recommended Email Services

### ProtonMail

!!! recommendation

    ![ProtonMail logo](/assets/img/email/protonmail.svg){ align=right }

    **ProtonMail** is an email service with a focus on privacy, encryption, security, and ease of use. They have been in operation since **2013**. ProtonMail is based in Genève, Switzerland. Accounts start with 500 MB storage with their free plan.

    Free accounts have some limitations, such as not being able to search body text and not having access to [ProtonMail Bridge](https://protonmail.com/bridge), which is required to use a [recommended desktop email client](https://privacyguides.org/software/email) (e.g. Thunderbird). Paid accounts are available starting at **€48/y** which include features like ProtonMail Bridge, additional storage, and custom domain support.

    **Free**

    [Visit ProtonMail.com](https://protonmail.com){ .md-button .md-button--primary }

??? check "Custom Domains and Aliases"

    Paid ProtonMail users can use their own domain with the service. [Catch-all](https://protonmail.com/support/knowledge-base/catch-all/) addresses are supported with custom domains for Professional and Visionary plans. ProtonMail also supports [subaddressing](https://protonmail.com/support/knowledge-base/creating-aliases/), which is useful for users who don't want to purchase a domain.

??? check "Private Payment Methods"

    ProtonMail accepts Bitcoin in addition to accepting credit/debit cards and PayPal.

??? check "Account Security"

    ProtonMail supports [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) [two factor authentication](https://protonmail.com/support/knowledge-base/two-factor-authentication/) only. The use of a [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security key is not yet supported. ProtonMail is planning to implement U2F upon completion of their [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/) code.

??? check "Data Security"

    ProtonMail has [zero access encryption](https://protonmail.com/blog/zero-access-encryption) at rest for your emails, [address book contacts](https://protonmail.com/blog/encrypted-contacts-manager), and [calendars](https://protonmail.com/blog/protoncalendar-security-model). This means the messages and other data stored in your account are only readable by you.

??? check "Email Encryption"

    ProtonMail has [integrated OpenPGP encryption](https://protonmail.com/support/knowledge-base/how-to-use-pgp) in their webmail. Emails to other ProtonMail users are encrypted automatically, and encryption to non-ProtonMail users with an OpenPGP key can be enabled easily in your account settings. They also allow you to [encrypt messages to non-ProtonMail users](https://protonmail.com/support/knowledge-base/encrypt-for-outside-users) without the need for them to sign up for a ProtonMail account or use software like OpenPGP.

    ProtonMail also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows users outside of ProtonMail to find the OpenPGP keys of ProtonMail users easily, for cross-provider E2EE.

??? check ".onion Service"

    ProtonMail's login and services are accessible over Tor, [protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion/)

??? info "Additional Functionality"

    ProtonMail offers a "Visionary" account for €24/Month, which also enables access to ProtonVPN in addition to providing multiple accounts, domains, aliases, and extra storage.

### Mailbox.org

!!! recommendation

    ![Mailbox.org logo](/assets/img/email/mailboxorg.svg){ align=right }

    **Mailbox.org** is an email service with a focus on being secure, ad-free, and privately powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox.org is based in Berlin, Germany. Accounts start with 2 GB of storage, which can be upgraded as needed.

    **EUR €12/year**

    [Visit Mailbox.org](https://mailbox.org){ .md-button .md-button--primary }

??? check "Custom Domains and Aliases"

    Mailbox.org lets users use their own domain and they support [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain) addresses. Mailbox.org also supports [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), which is useful for users who don't want to purchase a domain.

??? info "Private Payment Methods"

    Mailbox.org doesn't accept Bitcoin or any other cryptocurrencies as a result of their payment processor BitPay suspending operations in Germany. However, they do accept Cash by mail, cash payment to bank account, bank transfer, credit card, PayPal and couple of German-specific processors: paydirekt and Sofortüberweisung.

??? check "Account Security"

    Mailbox.org supports [two factor authentication](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) for their webmail only. You can use either [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) or a [Yubikey](https://en.wikipedia.org/wiki/YubiKey) via the [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Web standards such as [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) are not yet supported.

??? info "Data Security"

    Mailbox.org allows for encryption of incoming mail using their [encrypted mailbox](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). New messages that you receive will then be immediately encrypted with your public key.

    However, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), the software platform used by Mailbox.org, [does not support](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) the encryption of your address book and calendar. A [standalone option](https://privacyguides.org/software/calendar-contacts/) may be more appropriate for that information.

??? check "Email Encryption"

    Mailbox.org has [integrated encryption](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) in their webmail, which simplifies sending messages to users with public OpenPGP keys. They also allow [remote recipients to decrypt an email](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) on Mailbox.org's servers. This feature is useful when the remote recipient does not have OpenPGP and cannot decrypt a copy of the email in their own mailbox.

    Mailbox.org also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows users outside of Mailbox.org to find the OpenPGP keys of Mailbox.org users easily, for cross-provider E2EE.

??? info ".onion Service"

    You can access your Mailbox.org account via IMAP/SMTP using their [.onion service](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). However, their webmail interface cannot be accessed via their .onion service, and users may experience TLS certificate errors.

??? info "Additional Functionality"

    All accounts come with limited cloud storage that [can be encrypted](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox.org also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

### Disroot

!!! recommendation

    ![Disroot logo](/assets/img/email/disroot.svg#only-light){ align=right }
    ![Disroot logo](/assets/img/email/disroot-dark.svg#only-dark){ align=right }

    **Disroot** offers email amongst [other services](https://disroot.org/en/#services). The service is maintained by volunteers and its community. They have been in operation since 2015. Disroot is based in Amsterdam. Disroot is free and uses open source software such as Rainloop to provide service. Users support the service through donations and buying extra storage. The mailbox limit is 1 GB, but extra storage can be purchased 0.15€ per GB per month paid yearly.

    **Free**

    [Visit Disroot.org](https://disroot.org){ .md-button .md-button--primary }

??? check "Custom Domains and Aliases"

    Disroot lets users use their own domain. They have aliases, however you must [manually apply](https://disroot.org/en/forms/alias-request-form) for them.

??? check "Private Payment Methods"

    Disroot accepts Bitcoin and Faircoin as payment methods. They also accept PayPal, direct bank deposit, and Patreon payments. Disroot is a not-for-profit organization that also accepts donations through Liberapay, Flattr, and Monero, but these payment methods cannot be used to purchase services.

??? check "Account Security"

    Disroot supports [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) two factor authentication for webmail only. They do not allow [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security key authentication.

??? warning "Data Security"

    Disroot uses full disk encryption. However, it doesn't appear to be "zero access", meaning it is technically possible for them to decrypt the data they have if it is not additionally encrypted with a tool like OpenPGP.

    Disroot also uses the standard [CalDAV](https://en.wikipedia.org/wiki/CalDAV) and [CardDAV](https://en.wikipedia.org/wiki/CardDAV) protocols for calendars and contacts, which do not support E2EE. A [standalone option](https://privacyguides.org/software/calendar-contacts/) may be more appropriate.

??? check "Email Encryption"

    Disroot allows for encrypted emails to be sent from their webmail application using OpenPGP. However, Disroot has not integrated a Web Key Directory (WKD) for users on their platform.

??? missing ".onion Service"

    Disroot does not operate a .onion service.

??? info "Additional Functionality"

    They offer [other services](https://disroot.org/en/#services) such as NextCloud, XMPP Chat, Etherpad, Ethercalc, Pastebin, Online polls and a Gitea instance. They also have an app [available in F-Droid](https://f-droid.org/packages/org.disroot.disrootapp/).

### Tutanota

!!! recommendation

    ![Tutanota logo](/assets/img/email/tutanota.svg#only-light){ align=right }
    ![Tutanota logo](/assets/img/email/tutanota-dark.svg#only-dark){ align=right }

    **[Tutanota.com](https://tutanota.com)** is an email service with a focus on security and privacy through the use of encryption. Tutanota has been in operation since **2011** and is based in Hanover, Germany. Accounts start with 1GB storage with their free plan.

    **Free**

    [Visit Tutanota.com](https://tutanota.com){ .md-button .md-button--primary }

Tutanota [doesn't allow](https://tutanota.com/faq/#imap) the use of third-party [email clients](https://privacyguides.org/software/email/). Tutanota has no plans pull email from [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) using the [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) protocol. [Email import](https://github.com/tutao/tutanota/issues/630) is currently not possible.

Emails can be exported [individually or by bulk selection](https://tutanota.com/howto#generalMail). Tutanota does not allow for [subfolders](https://github.com/tutao/tutanota/issues/927) as you might expect with other email providers.

Tutanota is working on a [desktop client](https://tutanota.com/blog/posts/desktop-clients/) and they have an app [available in F-Droid](https://f-droid.org/packages/de.tutao.tutanota). They also have their app in conventional stores such as [App Store](https://apps.apple.com/us/app/tutanota/id922429609) on iOS and [Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota) for Android.

??? check "Custom Domains and Aliases"

    Paid Tutanota accounts can use up to 5 [aliases](https://tutanota.com/faq#alias) and [custom domains](https://tutanota.com/faq#custom-domain). Tutanota doesn't allow for [subaddressing (plus addresses)](https://tutanota.com/faq#plus), but you can use a [catch-all](https://tutanota.com/howto#settings-global) with a custom domain.

??? warning "Private Payment Methods"

    Tutanota only directly accepts credit cards and PayPal, however Bitcoin and Monero can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

??? check "Account Security"

    Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa). Users can either use [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) or [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor). U2F support is [not yet available on Android](https://github.com/tutao/tutanota/issues/443).

??? check "Data Security"

    Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). This means the messages and other data stored in your account are only readable by you.

??? warning "Email Encryption"

    Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota users can only receive encrypted emails when external users send them through a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

    Tutanota [does have plans](https://github.com/tutao/tutanota/issues/198) to support [AutoCrypt](https://autocrypt.org). This would allow for external users to send encrypted emails to Tutanota users as long as their email client supports the AutoCrypt headers.

??? missing ".onion Service"

    Tutanota does not operate a .onion service but [may consider](https://github.com/tutao/tutanota/issues/528) it in the future.

??? info "Additional Functionality"

    Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.

    Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

### StartMail

!!! recommendation

    ![StartMail logo](/assets/img/email/startmail.svg#only-light){ align=right }
    ![StartMail logo](/assets/img/email/startmail-dark.svg#only-dark){ align=right }

    **StartMail** is an email service with a focus on security and privacy through the use of standard OpenPGP encryption. StartMail has been in operation since 2014 and is based in Boulevard 11, Zeist Netherlands. Accounts start with 10GB. They offer a 30-day trial.

    **USD $59.95/year**

    [Visit StartMail.com](https://startmail.com/){ .md-button .md-button--primary }

??? check "Custom Domains and Aliases"

    Personal accounts can use [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) aliases. [Custom domains](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) are also available.

??? warning "Private Payment Methods"

    StartMail accepts Visa, MasterCard, American Express and Paypal. StartMail also has other [payment options](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) such as Bitcoin (currently only for Personal accounts) and SEPA Direct Debit for accounts older than a year.

??? check "Account Security"

    StartMail supports [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) two factor authentication [for webmail only](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). They do not allow [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security key authentication.

??? info "Data Security"

    StartMail has [zero access encryption at rest](https://www.startmail.com/en/whitepaper/#_Toc458527835), using their "user vault" system. When a user logs in, the vault is opened, and the email is then moved to the vault out of the queue where it is decrypted by the corresponding private key.

    StartMail supports importing [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) however, they are only accessible in the webmail and not through protocols such as [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Contacts are also not stored using zero knowledge encryption, so a [standalone option](https://privacyguides.org/software/calendar-contacts/) may be more appropriate.

??? check "Email Encryption"

    StartMail has [integrated encryption](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) in their webmail, which simplifies sending messages to users with public OpenPGP keys.

??? missing ".onion Service"

    StartMail does not operate a .onion service.

??? info "Additional Functionality"

    StartMail allows for proxying of images within emails. If a user allows the remote image to be loaded, the sender won't know what the user's IP address is.

### CTemplar

!!! recommendation

    ![CTemplar Logo](/assets/img/email/ctemplar.svg#only-light){ align=right }
    ![CTemplar Logo](/assets/img/email/ctemplar-dark.svg#only-dark){ align=right }

    **CTemplar** is an email service with a focus on security and privacy through the use of standard OpenPGP encryption. CTemplar has been in operation since **2018** and is run from Iceland. Paid accounts start with 5GB. They offer free accounts by [invitation](https://ctemplar.com/email-creation-restriction/).

    **USD $96/year**

    [Visit CTemplar.com](https://ctemplar.com){ .md-button .md-button--primary }

??? check "Custom Domains and Aliases"

    Paid accounts can use [Custom Domains](https://ctemplar.com/help/answer/add-a-domain/) and [aliases](https://ctemplar.com/help/answer/how-to-create-aliases/).

??? check "Private Payment Methods"

    CTemplar [payment options](https://ctemplar.com/help/answer/payment-options/) include Credit cards via Stripe, Bitcoin and Monero.

??? check "Account Security"

    CTemplar supports [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) two factor authentication [for webmail only](https://ctemplar.com/help/answer/setting-up-two-factor-authentication-2fa/). They do not allow [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security key authentication.

??? check "Data Security"

    CTemplar has [zero access encryption at rest](https://ctemplar.com/help/answer/what-encryption-method-is-used/), using PGP. They support [protected headers](https://datatracker.ietf.org/doc/html/draft-autocrypt-lamps-protected-headers-02/) and therefore there is [subject encryption](https://ctemplar.com/help/answer/subject-encryption/).

    CTemplar supports importing [contacts](https://ctemplar.com/help/answer/importing-contacts/) and [contacts are encrypted](https://ctemplar.com/help/answer/contact-encryption/) at rest however, they are only accessible in the webmail and apps.

??? check "Email Encryption"

    CTemplar has [integrated encryption](https://ctemplar.com/help/answer/how-does-encryption-decryption-work-in-ctemplar/) in their webmail, which simplifies sending messages to users with public OpenPGP keys.

??? warning ".onion Service"

    CTemplar's .onion service [ctemplarpizuduxk3fkwrieizstx33kg5chlvrh37nz73pv5smsvl6ad.onion](http://ctemplarpizuduxk3fkwrieizstx33kg5chlvrh37nz73pv5smsvl6ad.onion /) is [currently disabled](https://twitter.com/RealCTemplar/status/1458775445202157570) for webmail access, due to a Tor Browser [bug](https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/32865).

??? info "Additional Functionality"

    CTemplar has a [dead man timer](https://ctemplar.com/help/answer/setting-up-a-dead-mans-timer/) feature that will automatically send a specific message that you've set after a given period of time.

    CTemplar also has a feature that allows users verify [checksums](https://ctemplar.com/ctemplar-checksum-implementation/) of production pages with a public copy on Github.

    Electron clients exist for Windows, Mac and Linux. Official clients also exist for iOS and Android ([including F-Droid](https://f-droid.org/en/packages/com.ctemplar.app.fdroid).) All of these clients are [open source](https://github.com/orgs/CTemplar/repositories).

## Our Criteria

**Please note we are not affiliated with any of the providers we recommend.** This allows us to provide completely objective recommendations. We have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Jurisdiction

Operating outside the five/nine/fourteen-eyes countries is not necessarily a guarantee of privacy, and there are other factors to consider.

**Minimum to Qualify:**

-   Operating outside the USA or other Five Eyes countries.

**Best Case:**

-   Operating outside the USA or other Fourteen Eyes countries.
-   Operating inside a country with strong consumer protection laws.

### Technology

We regard these features as important in order to provide a safe and optimal service to users. Users should consider the provider which has the features they require.

**Minimum to Qualify:**

-   Encrypts account data at rest.
-   Integrated webmail encryption provides convenience to users who want improve on having no [E2EE](https://en.wikipedia.org/wiki/End-to-end_encryption) encryption.

**Best Case:**

-   Encrypts account data at rest with zero-access encryption.
-   Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad, be acquired by another company which doesn't prioritize privacy etc.
-   Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP.  
    GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
-   Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email, without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
-   Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
-   [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) support.
-   [Catch all](https://en.wikipedia.org/wiki/Email_filtering) or [aliases](https://en.wikipedia.org/wiki/Email_alias) for users who own their own domains.
-   Use of standard email access protocols such as [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Minimum to Qualify:**

-   Protect sender's IP address. Filter it from showing in the `Received` header field.
-   Don't require personally identifiable information (PII) besides username and password.
-   Privacy policy that meets the requirements defined by the GDPR

**Best Case:**

-   Accepts Bitcoin, cash, and other forms of cryptocurrency and/or anonymous payment options (gift cards, etc.)

### Security

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their users.

**Minimum to Qualify:**

-   Protection of webmail with [two-factor authentication (2FA)](https://en.wikipedia.org/wiki/Multi-factor_authentication), such as [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm).
-   Encryption at rest, (e.g. [dm-crypt](https://en.wikipedia.org/wiki/dm-crypt)) this protects the contents of the servers in case of unlawful seizure.
-   [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
-   No [TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) errors/vulnerabilities when being profiled by tools such as [Hardenize](https://www.hardenize.com), [testssl.sh](https://testssl.sh) or [Qualys SSL Labs](https://www.ssllabs.com/ssltest), this includes certificate related errors, poor or weak ciphers suites, weak DH parameters such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
-   A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
-   Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
-   Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
-   Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or utilize [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
-   A server suite preference of TLS 1.2 or later and a plan for [Deprecating TLSv1.0 and TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
-   [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
-   Website security standards such as:

-   [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
-   [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.

**Best Case:**

-   Support for hardware authentication, ie [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) and [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F and WebAuthn are more secure as they use a private key stored on a client-side hardware device to authenticate users, as opposed to a shared secret that is stored on the web server and on the client side when using TOTP. Furthermore, U2F and WebAuthn are more resistant to phishing as their authentication response is based on the authenticated [domain name](https://en.wikipedia.org/wiki/Domain_name).
-   Zero access encryption, builds on encryption at rest. The difference being the provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to or remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
-   [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
-   Implementation of [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), this is useful for users who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
-   Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
-   Website security standards such as:

-   [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
-   [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

-   Public-facing leadership or ownership.

**Best Case:**

-   Public-facing leadership.
-   Frequent transparency reports.

### Marketing

With the email providers we recommend we like to see responsible marketing.

**Minimum to Qualify:**

-   Must self host analytics (no Google Analytics etc). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for those users who want to opt-out.

Must not have any marketing which is irresponsible:

-   Claims of "unbreakable encryption". Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
-   Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know users can quite easily deanonymize themselves in a number of ways, e.g.:

-   Reusing personal information e.g. (email accounts, unique pseudonyms etc) that they accessed without anonymity software (Tor, VPN etc)
-   [Browser fingerprinting](https://privacyguides.org/browsers/#fingerprint)

**Best Case:**

-   Clear and easy to read documentation. This includes things like, setting up 2FA, email clients, OpenPGP, etc.

### Additional Functionality

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

## Email Encryption Overview

### What is end-to-end encryption (E2EE) encryption in email?

[End-to-end encryption (E2EE)](https://en.wikipedia.org/wiki/End-to-end_encryption) is a way of encrypting email contents so that nobody but the recipient(s) can read the email message.

### How can I encrypt my email?

The standard way to do email E2EE and have it work between different email providers is with [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP). There are different implementations of the OpenPGP standard, the most common being [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) and [OpenPGP.js](https://openpgpjs.org).

There is another standard that was popular with business called [S/MIME](https://en.wikipedia.org/wiki/S/MIME), however it requires a certificate issued from a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) (not all of them issue S/MIME certificates). It has support in [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) and [Outlook for Web or Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

### What software can I use to get E2EE?

Email providers which allow you to use standard access protocols like [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) and [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) can be used with any of the [email clients we recommend](https://privacyguides.org/software/email/). This can be less secure as you are now relying on email providers to ensure that their encryption implementation works and has not been compromised in anyway.

### How do I protect my private keys?

A smartcard (such as a [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) or [Nitrokey](https://www.nitrokey.com)) works by receiving an encrypted email message from a device (phone, tablet, computer etc) running an email/webmail client. The message is then decrypted by the smartcard and the decrypted content is sent back to the device.

It is advantageous for the decryption to occur on the smartcard so as to avoid possibly exposing your private key to a compromised device.

## Email Metadata Overview

### Who can see the email metadata?

Email metadata is able to be seen by your email client software (or webmail) and any servers relaying the message from you to any recipients. Sometimes email servers will also use external parties to protect against spam.

### What is email metadata?

Email software will often show some visible headers that you may have seen such as: `To`, `From`, `Cc`, `Date`, `Subject`.

### When is email metadata used?

Client software may use it to show who a message is from and what time it was received. Servers may use it to determine where an email message must be sent, among [other purposes](https://en.wikipedia.org/wiki/Email#Message_header) not transparent to the user.

### Where is the email metadata?

Email metadata is stored in the [message header](https://en.wikipedia.org/wiki/Email#Message_header) of the email message.

### Why can't email metadata be E2EE?

Email metadata is crucial to the most basic functionality of email (where it came from, and where it has to go). E2EE was not built into the email protocols originally and is also optional, therefore, only the message content is protected.

### How is my metadata protected?

When emails travel between email providers an encrypted connection is negotiated using [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS). This protects the metadata from outside observers, but as it is not E2EE, server administrators can snoop on the metadata of an email.

## Email Cloaking Services

!!! recommendation

    ![AnonAddy logo](/assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](/assets/img/email/anonaddy-dark.svg#only-dark){ align=right }

    **[AnonAddy](https://anonaddy.com)** lets users create aliases that forward to their email address. Can be self-hosted. [Source code on GitHub](https://github.com/anonaddy/anonaddy). 

!!! recommendation

    ![Simplelogin logo](/assets/img/email/simplelogin.svg){ align=right }

    **[SimpleLogin](https://simplelogin.io)** allows you to easily create aliases for your email. Can be self-hosted. [Source code on GitHub](https://github.com/simple-login/app).

## Self-Hosting Email

Advanced users may consider setting up their own email server. Mailservers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Combined software solutions

!!! recommendation

    ![Mail-in-a-Box logo](/assets/img/email/mail-in-a-box.svg){ align=right }

    **[Mail-in-a-Box](https://mailinabox.email)** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for users to set up their own mail server.

!!! recommendation

    ![Mailcow logo](/assets/img/email/mailcow.svg){ align=right }

    **[Mailcow](https://mailcow.email)** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mailserver with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support. **[Mailcow Dockerized docs](https://mailcow.github.io/mailcow-dockerized-docs/)**


For a more manual approach we've picked out these two articles.

-   [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
-   [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Additional Reading

-   [An NFC PGP SmartCard For Android](https://www.grepular.com/An_NFC_PGP_SmartCard_For_Android)
-   [Aging 'Privacy' Law Leaves Cloud E-Mail Open to Cops (2011)](https://www.wired.com/2011/10/ecpa-turns-twenty-five/)
-   [The Government Can (Still) Read Most Of Your Emails Without A Warrant (2013)](https://thinkprogress.org/the-government-can-still-read-most-of-your-emails-without-a-warrant-322fe6defc7b/)

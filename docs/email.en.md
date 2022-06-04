---
title: "Email Services"
icon: material/email
---
Email is practically a necessity for using any online service, however we do not recommend it for person-to-person conversations. Rather than using email to contact other people, consider using an instant messaging medium that supports forward secrecy.

[Recommended Instant Messengers](real-time-communication.md){ .md-button }

For everything else, we recommend a variety of email providers based on sustainable business models and built-in security and privacy features.

!!! warning

    When using E2EE technology like OpenPGP, email will still have some metadata that is not encrypted in the header of the email. Read more about email metadata.

    OpenPGP also does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. [How do I protect my private keys?](email.md#how-do-i-protect-my-private-keys)

## Recommended Email Providers

### Mailbox.org

!!! recommendation

    ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ align=right }

    **Mailbox.org** is an email service with a focus on being secure, ad-free, and privately powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox.org is based in Berlin, Germany. Accounts start with 2 GB of storage, which can be upgraded as needed.

    **EUR €12/year**

    [:octicons-home-16: Homepage](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentation}

??? check "Custom Domains and Aliases"

    Mailbox.org lets you use your own domain, and they support [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain) addresses. Mailbox.org also supports [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), which is useful if you don't want to purchase a domain.

??? info "Private Payment Methods"

    Mailbox.org doesn't accept Bitcoin or any other cryptocurrencies as a result of their payment processor BitPay suspending operations in Germany. However, they do accept Cash by mail, cash payment to bank account, bank transfer, credit card, PayPal and couple of German-specific processors: paydirekt and Sofortüberweisung.

??? check "Account Security"

    Mailbox.org supports [two factor authentication](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) for their webmail only. You can use either TOTP or a [Yubikey](https://en.wikipedia.org/wiki/YubiKey) via the [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Web standards such as [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) are not yet supported.

??? info "Data Security"

    Mailbox.org allows for encryption of incoming mail using their [encrypted mailbox](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). New messages that you receive will then be immediately encrypted with your public key.

    However, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), the software platform used by Mailbox.org, [does not support](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) the encryption of your address book and calendar. A [standalone option](calendar-contacts.md) may be more appropriate for that information.

??? check "Email Encryption"

    Mailbox.org has [integrated encryption](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) in their webmail, which simplifies sending messages to people with public OpenPGP keys. They also allow [remote recipients to decrypt an email](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) on Mailbox.org's servers. This feature is useful when the remote recipient does not have OpenPGP and cannot decrypt a copy of the email in their own mailbox.

    Mailbox.org also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows people outside of Mailbox.org to find the OpenPGP keys of Mailbox.org accounts easily, for cross-provider E2EE.

??? info "Additional Functionality"

    You can access your Mailbox.org account via IMAP/SMTP using their [.onion service](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). However, their webmail interface cannot be accessed via their .onion service, and you may experience TLS certificate errors.

    All accounts come with limited cloud storage that [can be encrypted](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox.org also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

### Proton Mail

!!! recommendation

    ![Proton Mail logo](assets/img/email/protonmail.svg){ align=right }

    **Proton Mail** is an email service with a focus on privacy, encryption, security, and ease of use. They have been in operation since **2013**. Proton AG is based in Genève, Switzerland. Accounts start with 500 MB storage with their free plan.

    Free accounts have some limitations, such as not being able to search body text and not having access to [Proton Mail Bridge](https://proton.me/mail/bridge), which is required to use a [recommended desktop email client](email-clients.md) (e.g. Thunderbird). Paid accounts are available starting at **€48/y** which include features like Proton Mail Bridge, additional storage, and custom domain support.

    With the [transition to Proton.me](https://proton.me/news/updated-proton), paid plans have changed. Existing users before the 25 May 2022 will get to keep their [existing plan](https://proton.me/support/upgrading-to-new-proton-plan) pricing.

    **Free**

    [:octicons-home-16: Homepage](https://proton.me/mail){ .md-button .md-button--primary }
    [:pg-tor:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title=Onion }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="Source Code" }

??? check "Custom Domains and Aliases"

    Paid Proton Mail subscribers can use their own domain with the service or a [catch-all](https://proton.me/support/catch-all) address. Proton Mail also supports [subaddressing](https://proton.me/support/creating-aliases), which is useful for people who don't want to purchase a domain.

??? check "Private Payment Methods"

    Proton Mail [accepts](https://proton.me/support/payment-options) Bitcoin in addition to accepting credit/debit cards and PayPal. They also accept cash by mail

??? check "Account Security"

    Proton Mail supports TOTP [two factor authentication](https://proton.me/support/two-factor-authentication-2fa) only. The use of a U2F security key is not yet supported. Proton Mail is planning to implement U2F upon completion of their [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/) code.

??? check "Data Security"

    Proton Mail has [zero-access encryption](https://proton.me/blog/zero-access-encryption) at rest for your emails and [calendars](https://proton.me/news/protoncalendar-security-model). Data secured with zero-access encryption is only accessible by you.

    Certain information stored in [Proton Contacts](https://proton.me/support/proton-contacts), such as display names and email addresses, are not secured with zero-access encryption. Contact fields that support zero-access encryption, such as phone numbers, are indicated with a padlock icon.

??? check "Email Encryption"

    Proton Mail has [integrated OpenPGP encryption](https://proton.me/support/how-to-use-pgp) in their webmail. Emails to other Proton Mail accounts are encrypted automatically, and encryption to non-Proton Mail addresses with an OpenPGP key can be enabled easily in your account settings. They also allow you to [encrypt messages to non-Proton Mail addresses](https://proton.me/support/password-protected-emails) without the need for them to sign up for a Proton Mail account or use software like OpenPGP.

    Proton Mail also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows people who don't use Proton Mail to find the OpenPGP keys of Proton Mail accounts easily, for cross-provider E2EE.

??? info "Additional Functionality"

    Proton Mail offers an "Unlimited" account for €9.99/Month, which also enables access to Proton VPN in addition to providing multiple accounts, domains, aliases, and 500GB of storage.

### StartMail

!!! recommendation

    ![StartMail logo](assets/img/email/startmail.svg#only-light){ align=right }
    ![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ align=right }

    **StartMail** is an email service with a focus on security and privacy through the use of standard OpenPGP encryption. StartMail has been in operation since 2014 and is based in Boulevard 11, Zeist Netherlands. Accounts start with 10GB. They offer a 30-day trial.

    **USD $59.95/year**

    [:octicons-home-16: Homepage](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentation}

??? check "Custom Domains and Aliases"

    Personal accounts can use [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) aliases. [Custom domains](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) are also available.

??? warning "Private Payment Methods"

    StartMail accepts Visa, MasterCard, American Express and Paypal. StartMail also has other [payment options](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) such as Bitcoin (currently only for Personal accounts) and SEPA Direct Debit for accounts older than a year.

??? check "Account Security"

    StartMail supports TOTP two factor authentication [for webmail only](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). They do not allow U2F security key authentication.

??? info "Data Security"

    StartMail has [zero access encryption at rest](https://www.startmail.com/en/whitepaper/#_Toc458527835), using their "user vault" system. When you log in, the vault is opened, and the email is then moved to the vault out of the queue where it is decrypted by the corresponding private key.

    StartMail supports importing [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) however, they are only accessible in the webmail and not through protocols such as [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Contacts are also not stored using zero knowledge encryption, so a [standalone option](calendar-contacts.md) may be more appropriate.

??? check "Email Encryption"

    StartMail has [integrated encryption](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) in their webmail, which simplifies sending encrypted messages with public OpenPGP keys.

??? info "Additional Functionality"

    StartMail allows for proxying of images within emails. If you allow the remote image to be loaded, the sender won't know what your IP address is.

### Tutanota

!!! recommendation

    ![Tutanota logo](assets/img/email/tutanota.svg#only-light){ align=right }
    ![Tutanota logo](assets/img/email/tutanota-dark.svg#only-dark){ align=right }

    **[Tutanota.com](https://tutanota.com)** is an email service with a focus on security and privacy through the use of encryption. Tutanota has been in operation since **2011** and is based in Hanover, Germany. Accounts start with 1GB storage with their free plan.

    **Free**

    [:octicons-home-16: Homepage](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribute }

Tutanota [doesn't allow](https://tutanota.com/faq/#imap) the use of third-party [email clients](email-clients.md). Tutanota has no plans pull email from [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) using the IMAP protocol. [Email import](https://github.com/tutao/tutanota/issues/630) is currently not possible.

Emails can be exported [individually or by bulk selection](https://tutanota.com/howto#generalMail). Tutanota does not allow for [subfolders](https://github.com/tutao/tutanota/issues/927) as you might expect with other email providers.

Tutanota is working on a [desktop client](https://tutanota.com/blog/posts/desktop-clients/) and they have an app [available in F-Droid](https://f-droid.org/packages/de.tutao.tutanota). They also have their app in conventional stores such as [App Store](https://apps.apple.com/us/app/tutanota/id922429609) on iOS and [Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota) for Android.

??? check "Custom Domains and Aliases"

    Paid Tutanota accounts can use up to 5 [aliases](https://tutanota.com/faq#alias) and [custom domains](https://tutanota.com/faq#custom-domain). Tutanota doesn't allow for [subaddressing (plus addresses)](https://tutanota.com/faq#plus), but you can use a [catch-all](https://tutanota.com/howto#settings-global) with a custom domain.

??? warning "Private Payment Methods"

    Tutanota only directly accepts credit cards and PayPal, however Bitcoin and Monero can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

??? check "Account Security"

    Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F. U2F support is [not yet available on Android](https://github.com/tutao/tutanota/issues/443).

??? check "Data Security"

    Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). This means the messages and other data stored in your account are only readable by you.

??? warning "Email Encryption"

    Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

    Tutanota [does have plans](https://github.com/tutao/tutanota/issues/198) to support [AutoCrypt](https://autocrypt.org). This would allow for non-Tutanota emails to send encrypted emails to Tutanota accounts as long as their email client supports the AutoCrypt headers.

??? info "Additional Functionality"

    Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.

    Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

## Email Aliasing Services

An email aliasing service allows you to easily generate a new email address for every website you register for. The email aliases you generate are then forwarded to an email address of your choosing, hiding both your "main" email address and the identity of your email provider. True email aliasing is better than plus addressing commonly used and supported by many providers, which allows you to create aliases like yourname+[anythinghere]@example.com, because websites, advertisers, and tracking networks can trivially remove anything after the + sign to know your true email address.

Email aliasing can act as a safeguard in case your email provider ever ceases operation. In that scenario, you can easily re-route your aliases to a new email address. In turn, however, you are placing trust in the aliasing service to continue functioning.

Using a dedicated email aliasing service also has a number of benefits over a catch-all alias on a custom domain:

- Aliases can be turned on and off individually when you need them, preventing websites from emailing you randomly.
- Replies are sent from the alias address, shielding your real email address.

They also have a number of benefits over "temporary email" services:

- Aliases are permanent, and can be turned on again if you need to receive something like a password reset.
- Emails are sent to your trusted mailbox rather than stored by the alias provider.
- Temporary email services typically have public mailboxes which can be accessed by anyone who knows the address, aliases are private to you.

Our email aliasing recommendations are providers that allow you to create aliases on domains they control, as well as your own custom domain(s) for a modest yearly fee. They can also be self-hosted if you want maximum control. However, using a custom domain can have privacy-related drawbacks: If you are the only person using your custom domain, your actions can be easily tracked across websites simply by looking at the domain name in the email address and ignoring everything before the at (@) sign.

Using an aliasing service requires trusting both your email provider and your aliasing provider with your unencrypted messages. Some providers mitigate this slightly with automatic PGP encryption, which reduces the number of parties you need to trust from 2 to 1 by encrypting incoming emails before they are delivered to your final mailbox provider.

### AnonAddy

!!! recommendation

    ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }

    **[AnonAddy](https://anonaddy.com)** lets you create 20 domain aliases on a shared domain for free, or unlimited "standard" aliases which are less anonymous. It has two premium plans at $12/year and $36/year which provide additional features. [Source code on GitHub](https://github.com/anonaddy/anonaddy).

    [:octicons-home-16: Homepage](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribute }

    ??? downloads
        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:fontawesome-brands-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)

The number of shared aliases (which end in a shared domain like @anonaddy.me) that you can create is limited to 20 on AnonAddy's free plan and 50 on their $12/month plan. You can create unlimited standard aliases (which end in a domain like @[username].anonaddy.com or a custom domain on paid plans), however, as previously mentioned, this can be detrimental to privacy because people can trivially tie your standard aliases together based on the domain name alone. Unlimited shared aliases are available for $36/year.

Notable free features:

- [x] 20 Shared Aliases
- [x] Unlimited Standard Aliases
- [ ] No Outgoing Replies
- [x] 2 Receipent Mailboxes
- [x] Automatic PGP Encryption

### SimpleLogin

!!! recommendation

    ![Simplelogin logo](assets/img/email/simplelogin.svg){ align=right }

    **[SimpleLogin](https://simplelogin.io)** is a free service which provides email aliases on a variety of shared domain names, and optionally provides features like unlimited aliases and custom domains for $30/year. [Source code on GitHub](https://github.com/simple-login/app).

    [:octicons-home-16: Homepage](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }

    ??? downloads
        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:fontawesome-brands-safari: Safari](https://apps.apple.com/app/id1494051017)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1494359858)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/io.simplelogin.android.fdroid/)

SimpleLogin was [acquired by Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) as of April 8, 2022. If you use Proton Mail for your primary mailbox, SimpleLogin a great choice. As both products are now owned by the same company you now only have to trust a single entity. We also expect that SimpleLogin will be more tightly integrated with Proton's offerings in the future. SimpleLogin continues to support forwarding to any email provider of your choosing.

Notable free features:

- [x] 15 Shared Aliases
- [x] Unlimited Replies
- [x] 1 Recepient Mailbox

*[Automatic PGP Encryption]: Allows you to encrypt non-encrypted incoming emails before they are forwarded to your mailbox, making sure your primary mailbox provider never sees unencrypted email content.

## Self-Hosting Email

Advanced system administrators may consider setting up their own email server. Mailservers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Combined software solutions

!!! recommendation

    ![Mailcow logo](assets/img/email/mailcow.svg){ align=right }

    **Mailcow** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mailserver with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.

    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribute }

!!! recommendation

    ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ align=right }

    **Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.

    [:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

For a more manual approach we've picked out these two articles.

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Our Criteria

**Please note we are not affiliated with any of the providers we recommend.** This allows us to provide completely objective recommendations. We have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Technology

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider which has the features you require.

**Minimum to Qualify:**

- Encrypts email account data at rest with zero-access encryption.
- Integrated webmail E2EE/PGP encryption provided as a convenience.

**Best Case:**

- Encrypts all account data (Contacts, Calendars etc) at rest with zero-access encryption.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy etc.
- Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP.
    GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
- Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email, without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) support.
- Catch-all or alias functionality for those who own their own domains.
- Use of standard email access protocols such as IMAP, SMTP or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Minimum to Qualify:**

- Protect sender's IP address. Filter it from showing in the `Received` header field.
- Don't require personally identifiable information (PII) besides username and password.
- Privacy policy that meets the requirements defined by the GDPR
- Must not be hosted in the US due to [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) which has [yet to be reformed](https://epic.org/ecpa/).

**Best Case:**

- Accepts Bitcoin, cash, and other forms of cryptocurrency and/or anonymous payment options (gift cards, etc.)

### Security

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their members.

**Minimum to Qualify:**

- Protection of webmail with 2FA, such as TOTP.
- Encryption at rest, (e.g. [dm-crypt](https://en.wikipedia.org/wiki/dm-crypt)) this protects the contents of the servers in case of unlawful seizure.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
- No [TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) errors/vulnerabilities when being profiled by tools such as [Hardenize](https://www.hardenize.com), [testssl.sh](https://testssl.sh) or [Qualys SSL Labs](https://www.ssllabs.com/ssltest), this includes certificate related errors, poor or weak ciphers suites, weak DH parameters such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
- Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or utilize [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- A server suite preference of TLS 1.2 or later and a plan for [Deprecating TLSv1.0 and TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Website security standards such as:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.

**Best Case:**

- Support for hardware authentication, ie U2F and [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F and WebAuthn are more secure as they use a private key stored on a client-side hardware device to authenticate people, as opposed to a shared secret that is stored on the web server and on the client side when using TOTP. Furthermore, U2F and WebAuthn are more resistant to phishing as their authentication response is based on the authenticated [domain name](https://en.wikipedia.org/wiki/Domain_name).
- Zero access encryption, builds on encryption at rest. The difference being the provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to or remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
- Implementation of [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), this is useful for people who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
- Website security standards such as:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the email providers we recommend we like to see responsible marketing.

**Minimum to Qualify:**

- Must self-host analytics (no Google Analytics etc). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for those who wish to opt-out.

Must not have any marketing which is irresponsible:

- Claims of "unbreakable encryption". Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
- Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know people can quite easily deanonymize themselves in a number of ways, e.g.:

- Reusing personal information e.g. (email accounts, unique pseudonyms etc) that they accessed without anonymity software (Tor, VPN etc)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Clear and easy to read documentation. This includes things like, setting up 2FA, email clients, OpenPGP, etc.

### Additional Functionality

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

--8<-- "includes/abbreviations.en.md"

---
title: "Provedores de e-mail privados"
icon: material/email
---

Encontre um provedor de e-mail seguro que manterá sua privacidade em mente. Não se contente com plataformas suportadas por anúncios.

[Recommended Instant Messengers](real-time-communication.md ""){.md-button}

Para tudo o resto, recomendamos uma variedade de fornecedores de e-mail baseados em modelos de negócio sustentáveis e que incorporem funcionalidades de segurança e de privacidade.

## Serviços de e-mail recomendados

These providers natively support OpenPGP encryption/decryption, allowing for provider-agnostic E2EE emails. For example, a Proton Mail user could send an E2EE message to a Mailbox.org user, or you could receive OpenPGP-encrypted notifications from internet services which support it.

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    Ao utilizar tecnologia de criptografia de ponta a ponta (E2EE) como o OpenPGP, o e-mail ainda terá alguns metadados que não são criptografados no cabeçalho do e-mail. Leia mais sobre os metadados de e-mail.
    
    O OpenPGP também não suporta Forward secrecy, o que significa que se a sua chave privada ou a do destinatário for roubada, todas as mensagens anteriores criptografadas com ela serão expostas. Como posso proteger as minhas chaves privadas?

### ProtonMail

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Ao invés de usar o e-mail para conversas prolongadas, considere a possibilidade de usar um meio que suporte o sigilo do Forward. [Mensageiros Instantâneos Recomendados](real-time-communication.md){ .md-button } Proton AG is based in Genève, Switzerland. Accounts start with 500 MB storage with their free plan.
    
    As contas gratuitas têm algumas limitações, tais como não ser capaz de procurar no corpo do texto e não ter acesso à [ProtonMail Bridge](https://protonmail.com/bridge), que requer um [cliente de e-mail recomendado](e-mail-clients.md) (por exemplo, Thunderbird). downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

Free accounts have some limitations, such as not being able to search body text and not having access to [Proton Mail Bridge](https://proton.me/mail/bridge), which is required to use a [recommended desktop email client](email-clients.md) (e.g. Thunderbird). verificar "Segurança da Conta". A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton Mail's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

If you have the Proton Unlimited, Business, or Visionary Plan, you also get [SimpleLogin](#simplelogin) Premium for free.

Proton Mail has internal crash reports that they **do not** share with third parties. Verifique "Criptografia de E-mail".

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar ".onion Service" (Serviço de cebola)

    ![logo ProtonMail](/assets/img/email/protonmail.svg){ align=right }
    
    **ProtonMail** é um serviço de e-mail com foco em privacidade, criptografia, segurança e facilidade de uso. Eles estão em operação desde **2013***.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. success "Private Payment Methods"

    Proton Mail [accepts](https://proton.me/support/payment-options) Bitcoin and cash by mail in addition to standard credit/debit card and PayPal payments.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. nota Consulte a [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    O ProtonMail suporta TOTP [autenticação de dois factores](https://protonmail.com/support/knowledge-base/two-factor-authentication/) apenas. The use of a U2F security key is not yet supported. Proton Mail is planning to implement U2F upon completion of their [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/) code.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verifique "Domínios e Pseudônimos Personalizados".

    ProtonMail suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) [autenticação de dois fatores](https://protonmail.com/support/knowledge-base/two-factor-authentication/) apenas. O uso de uma chave de segurança [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) ainda não é suportado.
    
    Certain information stored in [Proton Contacts](https://proton.me/support/proton-contacts), such as display names and email addresses, are not secured with zero-access encryption. Contact fields that support zero-access encryption, such as phone numbers, are indicated with a padlock icon.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Formas de pagamento privadas

    ProtonMail tem [criptografia de acesso zero](https://protonmail.com/blog/zero-access-encryption) em repouso para seus e-mails, [contatos do catálogo de endereços](https://protonmail.com/blog/encrypted-contacts-manager), e [calendars](https://protonmail.com/blog/protoncalendar-security-model). Isto significa que as mensagens e outros dados armazenados na sua conta só são legíveis por si. They also allow you to [encrypt messages to non-Proton Mail addresses](https://proton.me/support/password-protected-emails) without the need for them to sign up for a Proton Mail account or use software like OpenPGP.
    
    O ProtonMail também suporta a descoberta de chaves públicas via HTTP a partir do seu [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows people who don't use Proton Mail to find the OpenPGP keys of Proton Mail accounts easily, for cross-provider E2EE.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. aviso "Métodos de pagamento privados".

    Proton Mail doesn't offer a digital legacy feature.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Segurança de Dados

    If you have a paid account and your [bill is unpaid](https://proton.me/support/delinquency) after 14 days, you won't be able to access your data. After 30 days, your account will become delinquent and won't receive incoming mail. You will continue to be billed during this period.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    Proton Mail offers an "Unlimited" account for €9.99/Month, which also enables access to Proton VPN in addition to providing multiple accounts, domains, aliases, and 500GB of storage.

### Mailbox.org

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org** is an email service with a focus on being secure, ad-free, and privately powered by 100% eco-friendly energy. They have been in operation since 2014. Mailbox.org is based in Berlin, Germany. Accounts start with 2 GB of storage, which can be upgraded as needed.
    
    [:octicons-home-16: Homepage](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar ".onion Service" (Serviço de cebola)

    Mailbox.org permite aos usuários usar seu próprio domínio e eles suportam [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using catch-all alias with own domain) endereços. Mailbox.org também suporta [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What é um pseudônimo e como utilizá-lo), o que é útil para usuários que não querem comprar um domínio.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Formas de pagamento privadas".

    Mailbox.org não aceita Bitcoin ou quaisquer outras moedas criptográficas como resultado de seu processador de pagamento BitPay suspender operações na Alemanha. No entanto, eles aceitam dinheiro pelo correio, pagamento em dinheiro para conta bancária, transferência bancária, cartão de crédito, PayPal e alguns processadores específicos da Alemanha: paydirekt e Sofortüberweisung.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. nota Consulte a [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Mailbox.org suporta [autenticação de dois fatores](https://kb.mailbox.org/display/MBOKBEN/How para usar autenticação de dois fatores - 2FA) apenas para o seu webmail. Você pode usar ou [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) ou um [Yubikey](https://en.wikipedia.org/wiki/YubiKey) através do [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Padrões web como [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) ainda não são suportados.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Formas de pagamento privadas".

    Mailbox.org allows for encryption of incoming mail using their [encrypted mailbox](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). New messages that you receive will then be immediately encrypted with your public key.
    
    However, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), the software platform used by Mailbox.org, [does not support](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) the encryption of your address book and calendar. A [standalone option](calendar.md) may be more appropriate for that information.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Formas de pagamento privadas

    Mailbox.org tem [criptografia integrada](https://kb.mailbox.org/display/MBOKBEN/Send e-mails criptografados com Guard) em seu webmail, o que simplifica o envio de mensagens aos usuários com chaves públicas OpenPGP. Eles também permitem que [destinatários remotos descriptografem um e-mail](https://kb.mailbox.org/display/MBOKBEN/My destinatário não usa PGP) nos servidores da Mailbox.org. Esta funcionalidade é útil quando o destinatário remoto não tem o OpenPGP e não consegue desencriptar uma cópia do e-mail na sua própria caixa de correio.
    
    Mailbox.org também suporta a descoberta de chaves públicas via HTTP a partir de seu [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). This allows people outside of Mailbox.org to find the OpenPGP keys of Mailbox.org accounts easily, for cross-provider E2EE.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. aviso "Segurança de Dados".

    Você pode acessar sua conta Mailbox.org via IMAP/SMTP usando seu [.onion service](https://kb.mailbox.org/display/MBOKBEN/The Tor exit node of mailbox.org). No entanto, a sua interface de webmail não pode ser acessada através do seu serviço .onion, e os usuários podem experimentar erros no certificado TLS. Alternatively, you can nominate a person by name and address.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Segurança de Dados

    Your account will be set to a restricted user account when your contract ends, after [30 days it will be irrevocably deleted](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    ![Disroot logo](/assets/img/email/disroot.svg#only-light){ align=right }
    ![Disroot logo](/assets/img/email/disroot-dark.svg#only-dark){ align=right }
    
    **Disroot** oferece e-mail entre [outros serviços](https://disroot.org/en/#services). O serviço é mantido por voluntários e sua comunidade.
    
    All accounts come with limited cloud storage that [can be encrypted](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox.org also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

### Desarraigar

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Disroot permite que os utilizadores utilizem o seu próprio domínio. Eles têm pseudônimos, porém você deve [aplicar manualmente](https://disroot.org/en/forms/alias-request-form) para eles. Accounts start with 10GB. They offer a 30-day trial.
    
    [:octicons-home-16: Homepage](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar ".onion Service" (Serviço de cebola)

    Personal accounts can use [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) aliases. [Custom domains](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) are also available.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Tutanota não tem planos de puxar e-mails de [contas de e-mail externas](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) usando o protocolo [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) .

    Disroot suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) autenticação de dois fatores apenas para webmail. Eles não permitem [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) autenticação da chave de segurança.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. nota Consulte a [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Disroot usa criptografia de disco completa. No entanto, não parece ser "acesso zero", o que significa que é tecnicamente possível para eles descriptografar os dados que têm se não forem adicionalmente encriptados com uma ferramenta como OpenPGP.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Formas de pagamento privadas".

    Disroot permite o envio de e-mails criptografados a partir de sua aplicação de webmail usando OpenPGP. No entanto, Disroot não integrou um Web Key Directory (WKD) para os utilizadores na sua plataforma.
    
    StartMail supports importing [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) however, they are only accessible in the webmail and not through protocols such as [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Contacts are also not stored using zero knowledge encryption.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Formas de pagamento privadas

    StartMail has [integrated encryption](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) in their webmail, which simplifies sending encrypted messages with public OpenPGP keys.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. aviso "Métodos de pagamento privados".

    StartMail does not offer a digital legacy feature.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Segurança de Dados

    On account expiration, StartMail will permanently delete your account after [6 months in 3 phases](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    StartMail allows for proxying of images within emails. If you allow the remote image to be loaded, the sender won't know what your IP address is.

## More Providers

These providers store your emails with zero-knowledge encryption, making them great options for keeping your stored emails secure. aviso "Criptografia de e-mail".

### Software como um serviço (SaaS) apenas

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Tutanota logo](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** is an email service with a focus on security and privacy through the use of encryption. Tutanota has been in operation since **2011** and is based in Hanover, Germany. Accounts start with 1GB storage with their free plan.
    
    [:octicons-home-16: Homepage](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota doesn't support the [IMAP protocol](https://tutanota.com/faq/#imap) or the use of third-party [email clients](email-clients.md), and you also won't be able to add [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) to the Tutanota app. Neither [Email import](https://github.com/tutao/tutanota/issues/630) or [subfolders](https://github.com/tutao/tutanota/issues/927) are currently supported, though this is [due to be changed](https://tutanota.com/blog/posts/kickoff-import). Emails can be exported [individually or by bulk selection](https://tutanota.com/howto#generalMail) per folder, which may be inconvenient if you have many folders.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar ".onion Service" (Serviço de cebola)

    Tutanota suporta [autenticação de dois fatores](https://tutanota.com/faq#2fa). Os usuários podem usar [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) ou [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Tutanota não tem planos de puxar e-mails de [contas de e-mail externas](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) usando o protocolo [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) .

    Tutanota only directly accepts credit cards and PayPal, however Bitcoin and Monero can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. nota Consulte a [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verifique "Domínios e Pseudônimos Personalizados".

    Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). O serviço é mantido por voluntários e sua comunidade.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. warning "Email Encryption"

    Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. aviso "Métodos de pagamento privados".

    Tutanota doesn't offer a digital legacy feature.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Segurança de Dados

    Tutanota will [delete inactive free accounts](https://tutanota.com/faq#inactive-accounts) after six months. You can reuse a deactivated free account if you pay.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.
    
    Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

## Visão Geral da Criptografia de E-mail

An email aliasing service allows you to easily generate a new email address for every website you register for. The email aliases you generate are then forwarded to an email address of your choosing, hiding both your "main" email address and the identity of your email provider. True email aliasing is better than plus addressing commonly used and supported by many providers, which allows you to create aliases like yourname+[anythinghere]@example.com, because websites, advertisers, and tracking networks can trivially remove anything after the + sign to know your true email address.

Email aliasing can act as a safeguard in case your email provider ever ceases operation. In that scenario, you can easily re-route your aliases to a new email address. In turn, however, you are placing trust in the aliasing service to continue functioning.

Using a dedicated email aliasing service also has a number of benefits over a catch-all alias on a custom domain:

- Aliases can be turned on and off individually when you need them, preventing websites from emailing you randomly.
- Replies are sent from the alias address, shielding your real email address.

They also have a number of benefits over "temporary email" services:

- Aliases are permanent and can be turned on again if you need to receive something like a password reset.
- Emails are sent to your trusted mailbox rather than stored by the alias provider.
- Temporary email services typically have public mailboxes which can be accessed by anyone who knows the address, aliases are private to you.

Our email aliasing recommendations are providers that allow you to create aliases on domains they control, as well as your own custom domain(s) for a modest yearly fee. They can also be self-hosted if you want maximum control. However, using a custom domain can have privacy-related drawbacks: If you are the only person using your custom domain, your actions can be easily tracked across websites simply by looking at the domain name in the email address and ignoring everything before the at (@) sign.

Using an aliasing service requires trusting both your email provider and your aliasing provider with your unencrypted messages. Some providers mitigate this slightly with automatic PGP encryption, which reduces the number of parties you need to trust from two to one by encrypting incoming emails before they are delivered to your final mailbox provider.

### StartMail

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** lets you create 20 domain aliases on a shared domain for free, or unlimited "standard" aliases which are less anonymous.
    
    [:octicons-home-16: Homepage](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

The number of shared aliases (which end in a shared domain like @anonaddy.me) that you can create is limited to 20 on AnonAddy's free plan and 50 on their $12/year plan. You can create unlimited standard aliases (which end in a domain like @[username].anonaddy.com or a custom domain on paid plans), however, as previously mentioned, this can be detrimental to privacy because people can trivially tie your standard aliases together based on the domain name alone. Unlimited shared aliases are available for $36/year.

Notable free features:

- Criptografa os dados da conta em repouso.
- A criptografia integrada do webmail proporciona conveniência aos usuários que desejam melhorar ao não ter [E2EE](https://en.wikipedia.org/wiki/End-to-end_encryption) criptografia.
- [ ] No Outgoing Replies
- [x] 2 Recipient Mailboxes
- [x] Automatic PGP Encryption

### CTemplar

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Simplelogin logo](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** is a free service which provides email aliases on a variety of shared domain names, and optionally provides paid features like unlimited aliases and custom domains.
    
    [:octicons-home-16: Homepage](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin was [acquired by Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) as of April 8, 2022. If you use Proton Mail for your primary mailbox, SimpleLogin is a great choice. As both products are now owned by the same company you now only have to trust a single entity. We also expect that SimpleLogin will be more tightly integrated with Proton's offerings in the future. SimpleLogin continues to support forwarding to any email provider of your choosing. Securitum [audited](https://simplelogin.io/blog/security-audit/) SimpleLogin in early 2022 and all issues [were addressed](https://simplelogin.io/audit2022/web.pdf).

You can link your SimpleLogin account in the settings with your Proton account. If you have the Proton Unlimited, Business, or Visionary Plan, you will have SimpleLogin Premium for free.

Notable free features:

- Criptografa os dados da conta em repouso com criptografia de acesso zero.
- [x] Unlimited Replies
- [x] 1 Recipient Mailbox

## Visão Geral dos Metadados de Email

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Combined software solutions

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Mailcow logo](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.
    
    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribute }

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.
    
    [:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

For a more manual approach we've picked out these two articles:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Framadate

**Please note we are not affiliated with any of the providers we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Jurisdição

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider which has the features you require.

**O melhor caso:**

- Operando fora dos EUA ou de outros países da Five Eyes.
- Export capability as [Mbox](https://en.wikipedia.org/wiki/Mbox) or individual .eml with [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) standard.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Operates on owned infrastructure, i.e. not built upon third-party email service providers.

**Best Case:**

- Protecção do webmail com [autenticação de dois factores (2FA)](https://en.wikipedia.org/wiki/Multi-factor_authentication), tal como [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm).
- Integrated webmail E2EE/PGP encryption provided as a convenience.
- Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP. GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
- Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email, without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) support.
- Catch-all or alias functionality for those who own their own domains.
- Use of standard email access protocols such as IMAP, SMTP or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Tecnologia

We prefer our recommended providers to collect as little data as possible.

**O melhor caso:**

- Protect sender's IP address. Filter it from showing in the `Received` header field.
- Don't require personally identifiable information (PII) besides a username and a password.
- Privacy policy that meets the requirements defined by the GDPR
- Must not be hosted in the US due to [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) which has [yet to be reformed](https://epic.org/ecpa/).

**Best Case:**

- Accepts Bitcoin, cash, and other forms of cryptocurrency and/or anonymous payment options (gift cards, etc.)

### Privacidade

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their members.

**O melhor caso:**

- Protection of webmail with 2FA, such as TOTP.
- Zero access encryption, builds on encryption at rest. The provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to or remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
- No TLS errors or vulnerabilities when being profiled by tools such as [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/), or [Qualys SSL Labs](https://www.ssllabs.com/ssltest); this includes certificate related errors and weak DH parameters, such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- A server suite preference (optional on TLSv1.3) for strong cipher suites which support forward secrecy and authenticated encryption.
- A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
- Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- A server suite preference of TLS 1.2 or later and a plan for [Deprecating TLSv1.0 and TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Website security standards such as:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.
- Must support viewing of [Message headers](https://en.wikipedia.org/wiki/Email#Message_header), as it is a crucial forensic feature to determine if an email is a phishing attempt.

**Best Case:**

- Support for hardware authentication, i.e. U2F and [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F and WebAuthn are more secure as they use a private key stored on a client-side hardware device to authenticate people, as opposed to a shared secret that is stored on the web server and on the client side when using TOTP. Furthermore, U2F and WebAuthn are more resistant to phishing as their authentication response is based on the authenticated [domain name](https://en.wikipedia.org/wiki/Domain_name).
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
- Implementation of [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), this is useful for people who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
- Programas de recompensa de bugs e/ou um processo coordenado de divulgação de vulnerabilidades.
- Website security standards such as:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Segurança

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**O melhor caso:**

- Esquemas de Criptografia Fortes: OpenVPN com autenticação SHA-256; RSA-2048 ou melhor aperto de mão; AES-256-GCM ou AES-256-CBC encriptação de dados.

**Best Case:**

- A Encriptação mais forte: RSA-4096.
- Perfect Forward Secrecy (PFS).

### Confiança

With the email providers we recommend we like to see responsible marketing.

**O melhor caso:**

- Deve auto-instalar análises (sem Google Analytics, etc.). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for those who wish to opt-out.

Must not have any marketing which is irresponsible:

- Claims of "unbreakable encryption." Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
- Fazer garantias de protecção do anonimato a 100%. Quando alguém afirma que algo é 100%, significa que não há certeza de fracasso. We know people can quite easily deanonymize themselves in a number of ways, e.g.:

- Reusing personal information e.g. (email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc)
- [Impressão digital do navegador](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Deve auto-instalar análises (sem Google Analytics, etc.). This includes things like, setting up 2FA, email clients, OpenPGP, etc.

### Marketing

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

--8<-- "includes/abbreviations.pt.txt"

---
title: "Email Services"
icon: material/email
description: These email providers offer a great place to store your emails securely, and many offer interoperable OpenPGP encryption with other providers.
---

L'e-mail è praticamente una necessità per l'utilizzo di qualsiasi servizio online, tuttavia non la consigliamo per le conversazioni personali. Piuttosto che utilizzare l'email per contattare altre persone, considera l'utilizzo di un mezzo di messaggistica istantanea che supporta la forward secrecy.

[Messaggistica istantanea consigliata](real-time-communication.md ""){.md-button}

Per tutto il resto, consigliamo una varietà di provider di posta elettronica basati su modelli di business sostenibile e funzioni di sicurezza integrate.

- [OpenPGP-Compatible Email Providers :material-arrow-right-drop-circle:](#openpgp-compatible-services)
- [Other Encrypted Providers :material-arrow-right-drop-circle:](#more-providers)
- [Email Aliasing Services :material-arrow-right-drop-circle:](#email-aliasing-services)
- [Self-Hosted Options :material-arrow-right-drop-circle:](#self-hosting-email)

## Servizi compatibili con OpenPGP

These providers natively support OpenPGP encryption/decryption and the Web Key Directory (WKD) standard, allowing for provider-agnostic E2EE emails. Ad esempio, un utente di Proton Mail potrebbe inviare un messaggio E2EE a un utente di Mailbox.org, oppure si potrebbero ricevere notifiche cifrate in OpenPGP dai servizi Internet che lo supportano.

<div class="grid cards" markdown>

- ![Proton Mail logo](assets/img/email/protonmail.svg){ .twemoji } [Proton Mail](email.md#proton-mail)
- ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)

</div>

!!! warning "Avviso"

    Quando si utilizza tecnologia E2EE, come OpenPGP, alcuni metadata nell'intestazione dei messaggi non vengono crittografati. Per saperne di più sui metadata della [posta elettronica](basics/email-security.md#email-metadata-overview).
    
    OpenPGP inoltre non supporta la Forward secrecy, il che significa che se la tua chiave privata o quella del destinatario è stata rubata, tutti i messaggi cifrati con esso saranno esposti. [Come proteggo le mie chiavi private?](basics/email-security.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recommendation

    ![Proton Mail logo](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** è un servizio di posta elettronica incentrato su privacy, crittografia, sicurezza e facilità d'uso. Operano dal **2013**. Proton AG ha sede a Ginevra, Svizzera. Gli account partono da 500MB di spazio di archiviazione con il piano gratuito.
    
    [:octicons-home-16: Pagina principale](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="Servizio Onion" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

Gli account gratuiti hanno alcune limitazioni, come non essere in grado di cercare il testo del corpo e non avere accesso a [Proton Mail Bridge](https://proton.me/mail/bridge), che è necessario per utilizzare un [client di posta elettronica desktop raccomandato](email-clients.md) (ad es. Thunderbird). Gli account a pagamento includono funzionalità come Proton Mail Bridge, spazio di archiviazione aggiuntivo e supporto per domini personalizzati. Una [lettera di attestazione](https://proton.me/blog/security-audit-all-proton-apps) è stata fornita per le applicazioni di Proton Mail il 9 novembre 2021 da [Securitum](https://research.securitum.com).

Se hai il piano Proton Unlimited, Business o Visionary, ottieni anche [SimpleLogin](#simplelogin) Premium gratuitamente.

Proton Mail ha rapporti interni di crash che **non condividono** con terze parti. Questa funzione può essere disattivata in: **Impostazioni** > **Vai alle impostazioni** > **Account** > **Sicurezza e privacy** > **Invia rapporti sui crash**.

#### :material-check:{ .pg-green } Custom Domains and Aliases

Paid Proton Mail subscribers can use their own domain with the service or a [catch-all](https://proton.me/support/catch-all) address. Proton Mail also supports [subaddressing](https://proton.me/support/creating-aliases), which is useful for people who don't want to purchase a domain.

#### :material-check:{ .pg-green } Private Payment Methods

Proton Mail [accepts](https://proton.me/support/payment-options) cash by mail in addition to standard credit/debit card, [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), and PayPal payments.

#### :material-check:{ .pg-green } Account Security

Proton Mail supports TOTP [two factor authentication](https://proton.me/support/two-factor-authentication-2fa) only. Il supporto per le chiavi di sicurezza U2F non è ancora presente. Proton Mail is planning to implement U2F upon completion of their [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/) code.

#### :material-check:{ .pg-green } Data Security

Proton Mail has [zero-access encryption](https://proton.me/blog/zero-access-encryption) at rest for your emails and [calendars](https://proton.me/news/protoncalendar-security-model). I dati protetti con crittografia zero-access sono accessibili solo da te.

Certain information stored in [Proton Contacts](https://proton.me/support/proton-contacts), such as display names and email addresses, are not secured with zero-access encryption. I campi dei contatti che supportano la crittografia zero-access, come i numeri di telefono, sono indicati con l'icona di un lucchetto.

#### :material-check:{ .pg-green } Email Encryption

Proton Mail has [integrated OpenPGP encryption](https://proton.me/support/how-to-use-pgp) in their webmail. Le e-mail inviate ad altri account Proton Mail vengono crittografate automaticamente, e la crittografia verso indirizzi non Proton Mail con una chiave OpenPGP può essere abilitata nelle impostazioni dell'account. They also allow you to [encrypt messages to non-Proton Mail addresses](https://proton.me/support/password-protected-emails) without the need for them to sign up for a Proton Mail account or use software like OpenPGP.

Proton Mail also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Questo permette alle persone che non utilizzano Proton Mail di trovare facilmente le chiavi OpenPGP degli account Proton Mail, per un E2EE cross-provider.

#### :material-alert-outline:{ .pg-orange } Digital Legacy

Proton Mail non offre una funzione di eredità digitale.

#### :material-information-outline:{ .pg-blue } Account Termination

If you have a paid account and your [bill is unpaid](https://proton.me/support/delinquency) after 14 days, you won't be able to access your data. Dopo 30 giorni, l'account diventerà delinguente e non riceverà più la posta in arrivo. Durante questo periodo la fattura continuerà ad essere addebitata.

#### :material-information-outline:{ .pg-blue } Additional Functionality

Proton Mail offre un account "Unlimited" a 9,99 euro/mese, che consente anche l'accesso a Proton VPN oltre a fornire account multipli, domini, alias e 500 GB di spazio di archiviazione.

### Mailbox.org

!!! recommendation

    ![Logo Mailbox.org](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org** è un servizio di posta elettronica che si concentra sull'essere sicuro, privo di pubblicità e alimentato privatamente da energia ecologica al 100%. Mailbox.org è opera dal 2014 e ha sede a Berlino, in Germania. Gli account iniziano con 2 GB di spazio di archiviazione, che possono essere aumentati in base alle esigenze.
    
    [:octicons-home-16: Pagina principale](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentazione}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

#### :material-check:{ .pg-green } Custom Domains and Aliases

Mailbox.org lets you use your own domain, and they support [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain) addresses. Mailbox.org also supports [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), which is useful if you don't want to purchase a domain.

#### :material-check:{ .pg-green } Private Payment Methods

Mailbox.org doesn't accept any cryptocurrencies as a result of their payment processor BitPay suspending operations in Germany. Tuttavia, accettano contanti per posta, pagamento in contanti su conto corrente, bonifico bancario, carta di credito, PayPal e un paio di processori specifici per la Germania: paydirekt e Sofortüberweisung.

#### :material-check:{ .pg-green } Account Security

Mailbox.org supports [two factor authentication](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) for their webmail only. You can use either TOTP or a [Yubikey](https://en.wikipedia.org/wiki/YubiKey) via the [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Web standards such as [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) are not yet supported.

#### :material-information-outline:{ .pg-blue } Data Security

Mailbox.org allows for encryption of incoming mail using their [encrypted mailbox](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). I nuovi messaggi ricevuti saranno immediatamente crittografati con la tua chiave pubblica.

However, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), the software platform used by Mailbox.org, [does not support](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) the encryption of your address book and calendar. A [standalone option](calendar.md) may be more appropriate for that information.

#### :material-check:{ .pg-green } Email Encryption

Mailbox.org has [integrated encryption](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) in their webmail, which simplifies sending messages to people with public OpenPGP keys. They also allow [remote recipients to decrypt an email](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) on Mailbox.org's servers. Questa funzione è utile quando il destinatario remoto non dispone di OpenPGP e non può decifrare una copia dell'e-mail nella propria casella di posta elettronica.

Mailbox.org also supports the discovery of public keys via HTTP from their [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Questo permette a persone esterne a Mailbox.org di trovare facilmente le chiavi OpenPGP degli account di Mailbox.org, per un E2EE fra provider diversi.

#### :material-check:{ .pg-green } Digital Legacy

Mailbox.org dispone di una funzione di eredità digitale per tutti i piani. Puoi scegliere se vuoi che i dati siano trasmessi agli eredi, a condizione che ne facciano richiesta e forniscano il testamento. In alternativa, è possibile nominare una persona per nome e indirizzo.

#### :material-information-outline:{ .pg-blue } Account Termination

Your account will be set to a restricted user account when your contract ends, after [30 days it will be irrevocably deleted](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

#### :material-information-outline:{ .pg-blue } Additional Functionality

You can access your Mailbox.org account via IMAP/SMTP using their [.onion service](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). Tuttavia, l'interfaccia webmail non è accessibile tramite il servizio .onion e si possono verificare errori di certificato TLS.

All accounts come with limited cloud storage that [can be encrypted](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox.org also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

## Altri provider

Questi provider archiviano le tue e-mail con una crittografia a conoscenza zero, il che li rende ottime opzioni per mantenere sicure le tue e-mail archiviate. Tuttavia, non supportano standard di crittografia interoperabili per le comunicazioni E2EE tra provider.

<div class="grid cards" markdown>

- ![StartMail logo](assets/img/email/startmail.svg#only-light){ .twemoji }![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Tutanota logo](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

### StartMail

!!! recommendation

    ![Logo StartMail](assets/img/email/startmail.svg#only-light){ align=right }
    ![Logo StartMail](assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    **StartMail** è un servizio di posta elettronica incentrato sulla sicurezza e sulla privacy grazie all'uso della crittografia standard OpenPGP. StartMail è attiva dal 2014 e ha sede in Boulevard 11, Zeist, Paesi Bassi. Gli account partono da 10 GB. Viene offerto un periodo di prova di 30 giorni.
    
    [:octicons-home-16: Pagina principale](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentazione}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

#### :material-check:{ .pg-green } Custom Domains and Aliases

Personal accounts can use [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) aliases. [Custom domains](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) are also available.

#### :material-alert-outline:{ .pg-orange } Private Payment Methods

StartMail accetta Visa, MasterCard, American Express e Paypal. StartMail also has other [payment options](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) such as [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc) (currently only for Personal accounts) and SEPA Direct Debit for accounts older than a year.

#### :material-check:{ .pg-green } Account Security

StartMail supports TOTP two factor authentication [for webmail only](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). Non consentono l'autenticazione con chiave di sicurezza U2F.

#### :material-information-outline:{ .pg-blue } Data Security

StartMail has [zero access encryption at rest](https://www.startmail.com/en/whitepaper/#_Toc458527835), using their "user vault" system. Quando accedi, la cassaforte viene aperta e l'e-mail viene spostata dalla coda e inserita, dove viene decifrata dalla corrispondente chiave privata.

StartMail supports importing [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) however, they are only accessible in the webmail and not through protocols such as [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Inoltre, i contatti non vengono memorizzati utilizzando la crittografia a "conoscenza zero", quindi potrebbe essere più appropriata un'opzione \[autonoma\](calendar-contacts.md).

#### :material-check:{ .pg-green } Email Encryption

StartMail has [integrated encryption](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) in their webmail, which simplifies sending encrypted messages with public OpenPGP keys. However, they do not support the Web Key Directory standard, making the discovery of a Startmail mailbox's public key more challenging for other email providers or clients.

#### :material-alert-outline:{ .pg-orange } Digital Legacy

StartMail non offre una funzione di eredità digitale.

#### :material-information-outline:{ .pg-blue } Account Termination

On account expiration, StartMail will permanently delete your account after [6 months in 3 phases](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

#### :material-information-outline:{ .pg-blue } Additional Functionality

StartMail consente il proxy delle immagini all'interno dei messaggi di posta elettronica. Se consenti il caricamento dell'immagine remota, il mittente non saprà quale sia il tuo indirizzo IP.

### Tutanota

!!! recommendation

    ![Logo Tutanota](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** è un servizio di posta elettronica incentrato sulla sicurezza e sulla privacy attraverso l'uso della crittografia. Tutanota è operativa dal **2011** e ha sede ad Hannover, in Germania. Gli account iniziano con 1 GB di spazio di archiviazione con il piano gratuito.
    
    [:octicons-home-16: Pagina principale](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota non supporta il [protocollo IMAP](https://tutanota.com/faq/#imap) o l'uso di client [di posta elettronica di terze parti](email-clients.md)e non sarà nemmeno possibile aggiungere [account di posta elettronica esterni](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) all'app Tutanota. Al momento non sono supportate né [Importazione e-mail](https://github.com/tutao/tutanota/issues/630) né [sottocartelle](https://github.com/tutao/tutanota/issues/927) , anche se questo [dovrebbe essere modificato](https://tutanota.com/blog/posts/kickoff-import). Le e-mail possono essere esportate [singolarmente o per selezione in blocco](https://tutanota.com/howto#generalMail) per cartella, il che può essere scomodo se si dispone di molte cartelle.

#### :material-check:{ .pg-green } Custom Domains and Aliases

Paid Tutanota accounts can use up to 5 [aliases](https://tutanota.com/faq#alias) and [custom domains](https://tutanota.com/faq#custom-domain). Tutanota doesn't allow for [subaddressing (plus addresses)](https://tutanota.com/faq#plus), but you can use a [catch-all](https://tutanota.com/howto#settings-global) with a custom domain.

#### :material-information-outline:{ .pg-blue } Private Payment Methods

Tutanota only directly accepts credit cards and PayPal, however [cryptocurrency](cryptocurrency.md) can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

#### :material-check:{ .pg-green } Account Security

Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F.

#### :material-check:{ .pg-green } Data Security

Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). Ciò significa che i messaggi e gli altri dati memorizzati nel tuo account sono leggibili solo a te.

#### :material-information-outline:{ .pg-blue } Email Encryption

Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

#### :material-alert-outline:{ .pg-orange } Digital Legacy

Tutanota non offre una funzione di eredità digitale.

#### :material-information-outline:{ .pg-blue } Account Termination

Tutanota will [delete inactive free accounts](https://tutanota.com/faq#inactive-accounts) after six months. È possibile riutilizzare un account gratuito disattivato se si paga.

#### :material-information-outline:{ .pg-blue } Additional Functionality

Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.

Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). Ciò garantisce che il contatto del cliente con l'azienda utilizzi E2EE. La funzione costa 240€ all'anno.

## Servizi di alias per email

Un servizio di aliasing email consente di generare facilmente un nuovo indirizzo email per ogni sito web a cui ci si registra. Gli alias email generati vengono quindi inoltrati a un indirizzo email di tua scelta, nascondendo sia il tuo indirizzo e-mail "principale" che l'identità del tuo provider di posta elettronica. Il vero aliasing di posta elettronica è meglio dell'indirizzo plus comunemente usato e supportato da molti provider, che ti consente di creare alias come tuonome+[qualsiasicosa]@example.com, perché siti Web, inserzionisti e reti di tracciamento possono banalmente rimuovere qualsiasi cosa dopo il segno + per conoscere il tuo vero indirizzo email.

<div class="grid cards" markdown>

- ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ .twemoji }![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![SimpleLogin logo](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

L'aliasing e-mail può funzionare da salvaguardia nel caso in cui il tuo provider di posta elettronica cessi di operare. In questo caso, è possibile reindirizzare facilmente gli alias a un nuovo indirizzo email. A sua volta, tuttavia, si sta mettendo fiducia nel servizio di aliasing che continui a funzionare.

L'utilizzo di un servizio di aliasing email dedicato presenta una serie di vantaggi rispetto a un alias generico su un dominio personalizzato:

- Gli alias possono essere attivati e disattivati singolarmente quando se ne ha bisogno, evitando che i siti web inviino e-mail a caso.
- Le risposte vengono inviate dall'indirizzo alias, nascondendo il tuo vero indirizzo email.

Inoltre, presentano una serie di vantaggi rispetto ai servizi di "posta elettronica temporanea":

- Gli alias sono permanenti e possono essere riattivati nel caso in cui sia necessario ricevere qualcosa come la reimpostazione della password.
- Le mail vengono inviate alla tua casella di posta elettronica di fiducia, anziché essere archiviate dal provider di alias.
- I servizi di posta elettronica temporanea hanno in genere caselle di posta pubbliche a cui può accedere chiunque conosca l'indirizzo, mentre gli alias sono privati.

Le nostre raccomandazioni di aliasing mail sono fornitori che ti consentono di creare alias su domini che controllano, nonché i tuoi domini personalizzati a un costo annuale modesto. Possono anche essere self-hosted se si desidera il massimo controllo. Tuttavia, l'utilizzo di un dominio personalizzato può avere svantaggi relativi alla privacy: se sei l'unica persona che utilizza il tuo dominio personalizzato, le tue azioni possono essere facilmente tracciate su siti web semplicemente guardando il nome di dominio nell'indirizzo e-mail e ignorando tutto prima del simbolo della @.

L'utilizzo di un servizio di aliasing richiede la fiducia del provider di posta elettronica e del provider di aliasing per i messaggi non cifrati. Alcuni provider mitigano leggermente questo problema con la crittografia PGP automatica, che riduce il numero di parti di cui è necessario fidarsi da due a una crittografando le mail in arrivo prima che vengano consegnate al provider della casella di posta finale.

### AnonAddy

!!! recommendation

    ![Logo AnonAddy](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![Logo AnonAddy](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** consente di creare gratuitamente 20 alias di dominio su un dominio condiviso, oppure alias "standard" illimitati, meno anonimi.
    
    [:octicons-home-16: Pagina principale](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribuisci}
    
    ??? downloads
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

Il numero di alias condivisi (che terminano in un dominio condiviso come @anonaddy.me) che puoi creare è limitato a 20 sul piano gratuito di AnonAddy e 50 sul loro piano di $12/anno. Puoi creare alias standard illimitati (che terminano in un dominio come @[username].anonaddy.com o un dominio personalizzato su piani a pagamento), tuttavia, come accennato in precedenza, questo può essere dannoso per la privacy perché le persone possono banalmente collegare i tuoi alias standard in base al solo nome di dominio. Alias condivisi illimitati sono disponibili per $36/anno.

Funzionalità gratuite degne di nota:

- [x] 20 alias condivisi
- [x] Alias standard illimitati
- [ ] Non sono possibili le risposte in uscita
- [x] 2 caselle di posta destinatario
- [x] Crittografia automatica PGP

### SimpleLogin

!!! recommendation

    ![Logo Simplelogin](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** è un servizio gratuito che fornisce alias di posta elettronica su una varietà di nomi di dominio condivisi e, facoltativamente, fornisce funzionalità a pagamento come alias illimitati e domini personalizzati.
    
    [:octicons-home-16: Pagina principale](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Informativa sulla Privacy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin è stata [acquistata da Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) l'8 aprile del 2022. Se utilizzi Proton Mail come tua casella di posta principale, SimpleLogin è un'ottima scelta. Poiché entrambi i prodotti sono ora di proprietà della stessa azienda, è sufficiente fidarsi di un'unica entità. Prevediamo inoltre in futuro che SimpleLogin sarà maggiormente integrato con le offerte di Proton. SimpleLogin continua a supportare l'inoltro a qualsiasi provider di posta elettronica di tua scelta. Securitum [ha revisionato](https://simplelogin.io/blog/security-audit/) SimpleLogin all'inizio del 2022 e tutti i problemi [sono stati risolti](https://simplelogin.io/audit2022/web.pdf).

Puoi collegare il tuo account SimpleLogin con l'account Proton nelle impostazioni. Se hai il piano Proton Unlimited, Business o Visionary, avrai SimpleLogin Premium gratuitamente.

Notable free features:

- [x] 10 alias condivisi
- [x] Risposte illimitate
- [x] 1 casella di posta destinatario

## Email self-hosting

Gli amministratori di sistema avanzati possono prendere in considerazione la possibilità di creare un proprio server di posta elettronica. I server di posta elettronica richiedono attenzione e manutenzione continua per mantenere la sicurezza e l'affidabilità della consegna delle email.

### Soluzioni software combinate

!!! recommendation

    ![Logo Mailcow](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** è un server di posta più avanzato, perfetto per chi ha un po' più di esperienza con Linux. Ha tutto il necessario in un container Docker: un server di posta con supporto DKIM, monitoraggio antivirus e spam, webmail e ActiveSync con SOGo e amministrazione basata sul web con supporto 2FA.
    
    [:octicons-home-16: Pagina principale](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribuisci }

!!! recommendation

    ![Logo Mail-in-a-Box](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** è uno script di configurazione automatica per la distribuzione di un server di posta su Ubuntu. Il suo obiettivo è quello di rendere più semplice la creazione di un proprio server di posta.
    
    [:octicons-home-16: Pagina principale](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Codice sorgente" }

Per un approccio più manuale, abbiamo scelto questi due articoli:

- [Impostare un server di posta elettronica con OpenSMTPD, Dovecot e Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [Come gestire il propio server di posta elettronica](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Criteri

**Si prega di notare che non siamo affiliati con nessuno dei provider che consigliamo.** Oltre a [nostri criteri standard](about/criteria.md), abbiamo sviluppato una chiara serie di requisiti per qualsiasi provider di posta elettronica che desideri essere raccomandato, tra cui l'implementazione delle migliori pratiche del settore, la tecnologia moderna e altro ancora. Ti consigliamo di familiarizzare con questo elenco prima di scegliere un provider di posta elettronica e condurre le tue ricerche per assicurarti che il provider di posta elettronica che scegli sia la scelta giusta per te.

### Tecnologia

Consideriamo queste caratteristiche importanti per fornire un servizio sicuro e ottimale. Dovresti valutare se il fornitore ha le funzionalità che desideri.

**Requisiti minimi:**

- Crittografia dei dati degli account email a riposo con crittografia zero-access.
- Possibilità di esportazione come [Mbox](https://en.wikipedia.org/wiki/Mbox) o singoli .eml con lo standard [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) .
- Consentire agli utenti di utilizzare il proprio [nome di dominio](https://en.wikipedia.org/wiki/Domain_name). I nomi di dominio personalizzati sono importanti per gli utenti perché consentono loro di mantenere la propria autonomia dal servizio, se dovesse diventare negativa o essere acquisita da un'altra società che non dà priorità alla privacy.
- Opera su un'infrastruttura di proprietà, ovvero non si appoggia a provider di servizi e-mail di terze parti.

**Best Case:**

- Crittografia di tutti i dati dell'account (contatti, calendari ecc.) a riposo con crittografia ad zero-access.
- Crittografia webmail integrata E2EE/PGP fornita per comodità.
- Supporto per [WKD](https://wiki.gnupg.org/WKD) per permettere una migliore individuazione delle chiavi OpenPGP pubbliche via HTTP. Gli utenti di GnuPG possono ottenere una chiave digitando: `gpg --locate-key example_user@example.com`
- Supporto per una casella di posta temporanea per utenti esterni. Ciò è utile quando vuoi inviare una mail crittografata, senza inviare una copia effettiva al destinatario. Queste mail hanno di solito un tempo di vita limitato e vengono automaticamente eliminate. Non richiedono, inoltre, di configurare alcuna crittografia, come OpenPGP.
- Disponibilità dei servizi del provider e-mail mediante un [servizio onion](https://en.wikipedia.org/wiki/.onion).
- Supporto del [subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing).
- Funzionalità catch-all o alias per chi possiede un dominio proprio.
- Utilizzo dei protocolli standard di accesso, come IMAP, SMTP o [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Questi protocolli assicurano ai clienti la possibilità di scaricare facilmente tutte le loro e-mail, in caso volessero cambiare provider.

### Privacy

Preferiamo che i provider da noi consigliati raccolgano il minor numero di dati possibile.

**Requisiti minimi:**

- Protezione dell'indirizzo IP del mittente. Filtrare la visualizzazione nell'header d'intestazione `ricevuto`.
- Non richiedere informazioni d'identificazione personale, oltre a un nome utente e una password.
- Un'informativa sulla privacy che soddisfa i requisiti definiti dal GDPR
- Non deve essere hostato negli Stati Uniti a causa del [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism), il quale dev'essere [ancora riformato](https://epic.org/ecpa/).

**Best Case:**

- Accepts [anonymous payment options](advanced/payments.md) ([cryptocurrency](cryptocurrency.md), cash, gift cards, etc.)

### Sicurezza

I server di posta elettronica gestiscono molti dati estremamente sensibili. Ci aspettiamo che i provider adottino le migliori pratiche del settore per proteggere i loro membri.

**Requisiti minimi:**

- Protezione della webmail con 2FA, ad esempio TOTP.
- Crittografia zero-access, basata sulla crittografia a riposo. Il provider non deve disporre delle chiavi di decrittazione dei dati in loro possesso. Questo previene che dipendenti disonesti possano trapelare i dati sensibili, o che un avversario remoto possa rilasciarli, dopo averli rubati, ottenendo un accesso non autorizzato al server.
- Supporto [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions).
- Nessun [errore o vulnerabilità del TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) quando profilato da strumenti come [Hardenize](https://www.hardenize.com), [testssl.sh](https://testssl.sh) o [Qualys SSL Labs](https://www.ssllabs.com/ssltest); questi includono errori relativi ai certificati, suite di cifrari scarse o deboli, parametri DH deboli come quelli che portarono al [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- Una policy [MTA-STS](https://tools.ietf.org/html/rfc8461) e [TLS-RPT](https://tools.ietf.org/html/rfc8460) valida.
- Record [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) validi.
- Record [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) e [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) validi.
- Record [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) e [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) validi.
- Disporre di un record e di una politica [DMARC](https://en.wikipedia.org/wiki/DMARC) adeguati o utilizzare [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) per l'autenticazione. Se si utilizza l'autenticazione DMARC, la politica deve essere impostata su `rifiuta` o `quarantena`.
- A server suite preference of TLS 1.2 or later and a plan for [RFC8996](https://datatracker.ietf.org/doc/rfc8996/).
- [Invio SMTPS](https://en.wikipedia.org/wiki/SMTPS) , supponendo che venga utilizzato SMTP.
- Standard di sicurezza del sito web come:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Integrità Subresource](https://en.wikipedia.org/wiki/Subresource_Integrity) se si caricano oggetti da domini esterni.
- Deve supportare la visualizzazione di [intestazioni di messaggi](https://en.wikipedia.org/wiki/Email#Message_header), in quanto è una funzione forense cruciale per determinare se un'e-mail è un tentativo di phishing.

**Best Case:**

- Supporto per l'autenticazione hardware, come U2F e [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F e WebAuthn sono più sicuri, in quanto utilizzano una chiave privata memorizzata nel client su un dispositivo hardware per autenticare le persone, rispetto a un segreto condiviso che viene memorizzato sul server web e sul client quando si utilizza TOTP. Inoltre, U2F e WebAuthn sono più resistenti al phishing in quanto la loro risposta di autenticazione si basa sul [nome di dominio](https://en.wikipedia.org/wiki/Domain_name) autenticato. Inoltre, U2F e WebAuthn sono più resistenti al phishing in quanto la loro risposta di autenticazione si basa sul [nome di dominio](https://en.wikipedia.org/wiki/Domain_name) autenticato.
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844), oltre al supporto DANE.
- Implementazione della [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), utile per chi posta su liste [RFC8617](https://tools.ietf.org/html/rfc8617) di mailing.
- Programmi di bug-bounty e/o un processo coordinato di divulgazione delle vulnerabilità.
- Standard di sicurezza del sito web come:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163/)

### Fiducia

Non affideresti le tue finanze a qualcuno con un'identità falsa, quindi perché dovresti affidargli la tua e-mail? Richiediamo che i provider da noi consigliati rendano pubbliche la loro dirigenza o proprietà. Vorremmo anche vedere frequenti rapporti di trasparenza, soprattutto per quanto riguarda il modo in cui vengono gestite le richieste del governo.

**Requisiti minimi:**

- Dirigenza o proprietà pubblica.

**Best Case:**

- Dirigenza pubblica.
- Rapporti di trasparenza frequenti.

### Marketing

Con i provider di posta elettronica che consigliamo, ci piacerebbe vedere un marketing responsabile.

**Requisiti minimi:**

- Deve ospitare localmente i sistemi di analitica (no Google Analytics, Adobe Analytics, ecc.). Il sito del fornitore deve inoltre rispettare il [No not track (DNT)](https://it.wikipedia.org/wiki/Do_Not_Track) per chi desidera rinunciare.

Non deve avere alcun marketing ritenuto irresponsabile:

- Dichiarazioni di "crittografia infrangibile". La crittografia deve essere utilizzata con l'intenzione che nel futuro esisterà la tecnologia per decifrarla.
- Garantire al 100% la protezione dell'anonimato. Quando qualcuno afferma che qualcosa è al 100% significa che non esiste fallimento. Sappiamo che le persone possono deanonimizzarsi facilmente in vari modi, ad es.:

- Riutilizzare informazioni personali (p.e., account e-mail, pseudonimi unici ecc.) con cui hanno eseguito accessi senza software di anonimizzazione (Tor, VPN, ecc.)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Documentazione chiara e di facile lettura. Questo include cose come l'impostazione di 2FA, dei client di posta elettronica, di OpenPGP, ecc.

### Funzionalità aggiuntive

Anche se non strettamente necessari, ci sono altri fattori di convenienza o di privacy che abbiamo preso in considerazione per determinare i provider da consigliare.

---
title: "Servizi di posta elettronica"
icon: material/email
---

La posta elettronica (e-mail) è una necessità per utilizzare un qualsiasi servizio online; nonostante ciò, la sconsigliamo per le conversazioni personali e private. Piuttosto di utilizzare una e-mail per contattare altre persona, considera un mezzo di messaggistica istantanea che supporti la \['forward secrecy'\](https://it. wikipedia. org/wiki/Forward_secrecy).

[Messaggistica istantanea consigliata](real-time-communication.md ""){.md-button}

Per tutto il resto, consigliamo una varietà di provider di posta eletronnica basati su modelli di business sostenibile e funzioni di sicurezza integrate.

## Fornitori di posta elettronica consigliati

These providers natively support OpenPGP encryption/decryption, allowing for provider-agnostic E2EE emails. warning

!!! warning "Avviso"

    Quando si utilizza tecnologia E2EE, come OpenPGP, alcuni metadata nell'intestazione dei messaggi non vengono crittografati. Per saperne di più sui metadata della [posta elettronica](basics/email-security.md#email-metadata-overview).
    
    Open PGP non supporta la 'forward secrecy': se le chiave privata tua o del ricevente viene rubata, allora anche tutti i messaggi precedenti possono essere esposti. [Come proteggo le mie chavi private?](email.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recommendation

    ![Proton Mail logo](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** è un servizio di posta elettronica incentrato su privacy, crittografia, sicurezza e facilità d'uso. Operando dal 2013, Proton AG ha sede a Ginevra, Svizzera. Gli account partono da 500MB di spazio di archiviazione con il piano gratuito.
    
    Gli account gratuiti hanno alcune limitazioni, come l'impossibilità di effettuare ricerche del testo nelle mail e non poter accedere al [Proton Mail Bridge](https://proton.me/it/mail/bridge), il quale è necessario se si vuole utilizzare uno dei [client e-mail per desktop consigliati](email-clients.md) (es. Thunderbird). Gli account a pagamento sono disponibili a partire da **48€ all'anno**, ed includono funzionalità come il Proton Mail Bridge e il supporto per domini personalizzati.

Free accounts have some limitations, such as not being able to search body text and not having access to [Proton Mail Bridge](https://proton.me/mail/bridge), which is required to use a [recommended desktop email client](email-clients.md) (e.g. Thunderbird). check "Metodi di pagamento privati" A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton Mail's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

If you have the Proton Unlimited, Business, or Visionary Plan, you also get [SimpleLogin](#simplelogin) Premium for free.

Proton Mail has internal crash reports that they **do not** share with third parties. check "Sicurezza dei dati"

??? check "Crittografia e-mail"

    Gli abbonati a Proton Mail possono scegliere un dominio personalizzato con il servizio o un indirizzo [catch-all](https://proton.me/it/support/catch-all). Inoltre è presente il supporto per il [subaddressing](https://proton.me/it/support/creating-aliases), utile per chi non vuole acquistare un dominio.

??? warning "Eredità digitale"

    Proton Mail [accepts](https://proton.me/support/payment-options) Bitcoin è contanti via mail, oltre ai pagamenti standard con carta di credito/debito e PayPal.

??? info "Chiusura dell'account"

    Proton Mail supporta solo [l'autenticazione a due fattori](https://proton.me/it/support/two-factor-authentication-2fa) TOTP. Il supporto per le chiavi di sicurezza U2F non è ancora presente. Proton Mail ha in programma, però, di integrarlo al completamento del loro codice [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/).

??? success "Data Security"

    La crittografia usata fa sì che Proton Mail [non può accedere](https://proton.me/it/blog/zero-access-encryption) alle vostre e-mail e [calendari](https://proton.me/it/news/protoncalendar-security-model) a riposo. I dati protetti in questo modo sono accessibili solo da te.
    
    Alcune informazioni memorizzate nei [Proton Contacts (Contatti Proton)](https://proton.me/it/support/proton-contacts), come i nomi visualizzati e gli indirizzi e-mail, non sono protette dalla crittografia "ad accesso zero". I campi dei contatti che supportano questa crittografia, come i numeri di telefono, sono contrassegnati da un'icona di un lucchetto.

??? recommendation

    Proton mail ha [integrato la crittografia di OpenPGP](https://proton.me/it/support/how-to-use-pgp) nella loro webmail. Le e-mail inviate ad altri account Proton Mail vengono crittografate automaticamente, e la crittografia verso indirizzi non Proton Mail con una chiave OpenPGP può essere abilitata nelle impostazioni dell'account. Permettono inoltre di [crittografare messaggi verso indirizzi non Proton Mail](https://proton.me/it/support/password-protected-emails) senza il bisogno che il ricevente acceda ad un account Proton Mail o utilizzi software come OpenPGP.
    
    Proton Mail consente anche il reperimento di chiavi pubbliche via HTTP dalla loro [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Questo permette alle persone che non utilizzano Proton Mail di trovare facilmente le chiavi OpenPGP degli account Proton Mail, per un E2EE cross-provider.

??? check "Sicurezza dei dati"

    Proton Mail non offre una funzione di eredità digitale.

??? info "Metodi di pagamento privati"

    Se avete un account a pagamento e la vostra [bolletta non è pagata](https://proton.me/support/delinquency) dopo 14 giorni, non potrete accedere ai vostri dati. Dopo 30 giorni, l'account diventerà delinguente e non riceverà più la posta in arrivo. Durante questo periodo la fattura continuerà ad essere addebitata.

??? info "Funzionalità aggiuntive"

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

??? check "Crittografia e-mail"

    Mailbox.org consente di utilizzare il proprio dominio e supporta gli indirizzi [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain). Mailbox.org supporta anche [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), utile se non si vuole acquistare un dominio.

??? check "Eredità digitale"

    Mailbox.org non accetta Bitcoin o altre criptovalute a causa della sospensione delle attività del processore di pagamento BitPay in Germania. Tuttavia, accettano contanti per posta, pagamento in contanti su conto corrente, bonifico bancario, carta di credito, PayPal e un paio di processori specifici per la Germania: paydirekt e Sofortüberweisung.

??? info "Chiusura dell'account"

    Mailbox.org supporta l'[autenticazione a due fattori](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) solo per la sua webmail. È possibile utilizzare il TOTP o un [Yubikey](https://it.wikipedia.org/wiki/YubiKey) tramite il [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Gli standard web come [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) non sono ancora supportati.

??? info "Data Security"

    Mailbox.org consente la crittografia della posta in arrivo utilizzando la sua [casella di posta crittografata] (https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). I nuovi messaggi ricevuti saranno immediatamente crittografati con la tua chiave pubblica.
    
    Tuttavia, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), la piattaforma software utilizzata da Mailbox.org, [non supporta](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) la crittografia della rubrica e del calendario. Un'[opzione autonoma] (calendario-contatti.md) potrebbe essere più appropriata per queste informazioni.

??? recommendation

    Mailbox.org ha [integrato la crittografia] (https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) nella sua webmail, che semplifica l'invio di messaggi a persone con chiavi OpenPGP pubbliche. Consentono inoltre [ai destinatari remoti di decriptare un'e-mail](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) sui server di Mailbox.org. Questa funzione è utile quando il destinatario remoto non dispone di OpenPGP e non può decifrare una copia dell'e-mail nella propria casella di posta elettronica.
    
    Mailbox.org supporta anche il reperimento di chiavi pubbliche via HTTP dalla sua [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Questo permette a persone esterne a Mailbox.org di trovare facilmente le chiavi OpenPGP degli account di Mailbox.org, per un E2EE fra provider diversi.

??? check "Domini e alias personalizzati"

    Mailbox.org dispone di una funzione di eredità digitale per tutti i piani. Puoi scegliere se vuoi che i dati siano trasmessi agli eredi, a condizione che ne facciano richiesta e forniscano il testamento. In alternativa, è possibile nominare una persona per nome e indirizzo.

??? info "Metodi di pagamento privati"

    L'account sarà impostato come account utente limitato alla scadenza del contratto, dopo [30 giorni sarà irrevocabilmente cancellato](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

??? info "Funzionalità aggiuntive"

    È possibile accedere al proprio account Mailbox.org tramite IMAP/SMTP utilizzando il loro [servizio .onion] (https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). Tuttavia, l'interfaccia webmail non è accessibile tramite il servizio .onion e si possono verificare errori di certificato TLS.
    
    Tutti gli account sono dotati di uno spazio di archiviazione cloud limitato che [può essere crittografato] (https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org offre anche l'alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), che applica la crittografia TLS alla connessione tra i server di posta, altrimenti il messaggio non verrà inviato affatto. Mailbox.org supporta anche [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) oltre ai protocolli di accesso standard come IMAP e POP3.

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

??? check "Crittografia e-mail"

    Gli account personali possono utilizzare alias [Personalizzati o rapidi](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). Sono disponibili anche [domini personalizzati](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain).

??? warning "Eredità digitale"

    StartMail accetta Visa, MasterCard, American Express e Paypal. StartMail ha anche altre [opzioni di pagamento](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) come Bitcoin (attualmente solo per gli account personali) e l'addebito diretto SEPA per gli account più vecchi di un anno.

??? info "Chiusura dell'account"

    StartMail supporta l'autenticazione a due fattori TOTP [solo per la webmail] (https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). Non consentono l'autenticazione con chiave di sicurezza U2F.

??? info "Data Security"

    StartMail dispone di [zero accesso ai dati crittografati a riposo](https://www.startmail.com/en/whitepaper/#_Toc458527835), utilizzando il sistema "user vault". Quando accedi, la cassaforte viene aperta e l'e-mail viene spostata dalla coda e inserita, dove viene decifrata dalla corrispondente chiave privata.
    
    StartMail supporta l'importazione dei [contatti](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts), ma sono accessibili solo nella webmail e non attraverso protocolli come [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Inoltre, i contatti non vengono memorizzati utilizzando la crittografia a "conoscenza zero", quindi potrebbe essere più appropriata un'opzione [autonoma](calendar-contacts.md).

??? recommendation

    Startmail ha [integrato la crittografia] (https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) nella sua webmail, che semplifica l'invio di messaggi a utenti con chiavi OpenPGP pubbliche.

??? check "Sicurezza dei dati"

    StartMail non offre una funzione di eredità digitale.

??? info "Metodi di pagamento privati"

    Alla scadenza dell'account, StartMail eliminerà definitivamente l'account dopo [6 mesi in 3 fasi](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

??? info "Funzionalità aggiuntive"

    StartMail consente il proxy delle immagini all'interno dei messaggi di posta elettronica. Se consenti il caricamento dell'immagine remota, il mittente non saprà quale sia il tuo indirizzo IP.

## Servizi per alias email

These providers store your emails with zero-knowledge encryption, making them great options for keeping your stored emails secure. Gli alias di posta elettronica generati vengono poi inoltrati a un indirizzo e-mail di vostra scelta, nascondendo sia il vostro indirizzo e-mail "principale", sia l'identità del vostro provider di posta elettronica.

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

Tutanota doesn't support the [IMAP protocol](https://tutanota.com/faq/#imap) or the use of third-party [email clients](email-clients.md), and you also won't be able to add [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) to the Tutanota app. Neither [Email import](https://github.com/tutao/tutanota/issues/630) or [subfolders](https://github.com/tutao/tutanota/issues/927) are currently supported, though this is [due to be changed](https://tutanota.com/blog/posts/kickoff-import). Emails can be exported [individually or by bulk selection](https://tutanota.com/howto#generalMail) per folder, which may be inconvenient if you have many folders.

??? check "Crittografia e-mail"

    ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **[AnonAddy](https://anonaddy.com)** consente di creare gratuitamente 20 alias di dominio su un dominio condiviso, oppure alias "standard" illimitati, i quali sono meno anonimi. Offre due piani premium a 12$ USD e 36$ USD all'anno, i quali forniscono funzionalità aggiuntive.

??? warning "Eredità digitale"

    Tutanota only directly accepts credit cards and PayPal, however Bitcoin and Monero can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

??? info "Chiusura dell'account"

    Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F.

??? success "Data Security"

    ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** è un script di configurazione automatica per la distribuzione di un server di posta elettronica su Ubuntu. L'obbiettivo è quello di rendere più semplice la creazione di un servizio personale.

??? warning "Email Encryption"

    Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

??? check "Sicurezza dei dati"

    Tutanota doesn't offer a digital legacy feature.

??? info "Metodi di pagamento privati"

    Tutanota will [delete inactive free accounts](https://tutanota.com/faq#inactive-accounts) after six months. You can reuse a deactivated free account if you pay.

??? info "Funzionalità aggiuntive"

    Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.
    
    Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

## Email installabili in locale

An email aliasing service allows you to easily generate a new email address for every website you register for. The email aliases you generate are then forwarded to an email address of your choosing, hiding both your "main" email address and the identity of your email provider. True email aliasing is better than plus addressing commonly used and supported by many providers, which allows you to create aliases like yourname+[anythinghere]@example.com, because websites, advertisers, and tracking networks can trivially remove anything after the + sign to know your true email address.

Email aliasing can act as a safeguard in case your email provider ever ceases operation. In that scenario, you can easily re-route your aliases to a new email address. In turn, however, you are placing trust in the aliasing service to continue functioning.

Using a dedicated email aliasing service also has a number of benefits over a catch-all alias on a custom domain:

- Gli alias possono essere attivati e disattivati singolarmente quando se ne ha bisogno, evitando che i siti web inviino e-mail a caso.
- Le risposte vengono inviate dall'indirizzo alias, nascondendo il vostro vero indirizzo e-mail.

They also have a number of benefits over "temporary email" services:

- Gli alias sono permanenti e possono essere riattivati nel caso in cui sia necessario ricevere qualcosa come la reimpostazione della password.
- Le e-mail vengono inviate alla vostra casella di posta elettronica di fiducia, anziché essere archiviate dal provider di alias.
- I servizi di posta elettronica temporanea hanno in genere caselle di posta pubbliche a cui può accedere chiunque conosca l'indirizzo, mentre gli alias sono privati.

Our email aliasing recommendations are providers that allow you to create aliases on domains they control, as well as your own custom domain(s) for a modest yearly fee. They can also be self-hosted if you want maximum control. However, using a custom domain can have privacy-related drawbacks: If you are the only person using your custom domain, your actions can be easily tracked across websites simply by looking at the domain name in the email address and ignoring everything before the at (@) sign.

Using an aliasing service requires trusting both your email provider and your aliasing provider with your unencrypted messages. Some providers mitigate this slightly with automatic PGP encryption, which reduces the number of parties you need to trust from two to one by encrypting incoming emails before they are delivered to your final mailbox provider.

### AnonAddy

!!! recommendation

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

- [x] 20 alias condivisi
- [x] Alias standard illimitati
- [ ] Non sono possibili le risposte in uscita
- [x] 2 caselle postali del destinatario
- [x] Crittografia automatica PGP

### SimpleLogin

!!! recommendation

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

- [x] 15 alias condivisi
- [x] Risposte illimitate
- [x] 1 casella postale del destinatario

## I nostri criteri

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Soluzioni software combinate

!!! recommendation

    ![Mailcow logo](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.
    
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

For a more manual approach we've picked out these two articles:

- [Impostare un server di posta elettronica con OpenSMTPD, Dovecot e Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [Come gestire il propio server di posta elettronica](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## CryptPad

**Please note we are not affiliated with any of the providers we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Tecnologia

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider which has the features you require.

**Requisiti minimi:**

- Crittografia dei dati degli account email a riposo con crittografia ad "accesso zero".
- Export capability as [Mbox](https://en.wikipedia.org/wiki/Mbox) or individual .eml with [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) standard.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Operates on owned infrastructure, i.e. not built upon third-party email service providers.

**Best Case:**

- Crittografia di tutti i dati dell'account (contatti, calendari ecc.) a riposo con crittografia ad "accesso zero".
- Integrated webmail E2EE/PGP encryption provided as a convenience.
- Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP. GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
- Supporto per [WKD](https://wiki.gnupg.org/WKD) per permettere una migliore individuazione delle chiavi OpenPGP pubbliche via HTTP. Gli utenti di GnuPGP possono ottenere una chiave digitando: `gpg --locate-key example_user@example.com` These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
- Disponibilità dei servizi del provider e-mail mediante un [servizio onion](https://en.wikipedia.org/wiki/.onion).
- Supporto del [subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing).
- Use of standard email access protocols such as IMAP, SMTP or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Requisiti minimi:**

- Protezione dell'indirizzo IP del mittente. Filtrarne la visualizzazione nell'header d'intestazione `ricevuto`.
- Non richiedere informazioni d'identificazione personale, oltre a un nome utente e una password.
- Un'informativa sulla privacy che soddisfa i requisiti definiti dal GDPR
- Non deve essere hostato negli Stati Uniti a causa del [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism), il quale dev'essere [ancora riformato](https://epic.org/ecpa/).

**Best Case:**

- Accetta Bitcoin, contanti e altre forme di criptovaluta e/o opzioni di pagamento anonime (carte regalo, ecc.)

### Sicurezza

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their members.

**Requisiti minimi:**

- Protezione della webmail con 2FA, ad esempio TOTP.
- Crittografia ad "accesso zero", basata sulla crittografia a riposo. Il provider non deve disporre delle chiavi di decrittazione dei dati in loro possesso. Questo previene che dipendenti disonesti possano trapelare i dati sensibili, o che un avversario remoto possa rilasciarli, dopo averli rubati, ottenendo un accesso non autorizzato al server.
- Supporto [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions).
- Nessun [errore o vulnerabilità del TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) quando profilato da strumenti come [Hardenize](https://www.hardenize.com), [testssl.sh](https://testssl.sh) o [Qualys SSL Labs](https://www.ssllabs.com/ssltest); questi includono errori relativi ai certificati, suite di cifrari scarse o deboli, parametri DH deboli come quelli che portarono al [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- Una policy [MTA-STS](https://tools.ietf.org/html/rfc8461) e [TLS-RPT](https://tools.ietf.org/html/rfc8460) valida.
- Record [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) validi.
- Record [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) e [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) validi.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- Invio [SMTPS](https://en.wikipedia.org/wiki/SMTPS), supponendo che venga utilizzato SMTP.
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Standard di sicurezza del sito web come:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.
- Must support viewing of [Message headers](https://en.wikipedia.org/wiki/Email#Message_header), as it is a crucial forensic feature to determine if an email is a phishing attempt.

**Best Case:**

- Supporto per l'autenticazione hardware, come U2F e [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F e WebAuthn sono più sicuri, in quanto utilizzano una chiave privata memorizzata nel client su un dispositivo hardware per autenticare le persone, rispetto a un segreto condiviso che viene memorizzato sul server web e sul client quando si utilizza TOTP. Inoltre, U2F e WebAuthn sono più resistenti al phishing in quanto la loro risposta di autenticazione si basa sul [nome di dominio](https://en.wikipedia.org/wiki/Domain_name) autenticato. Inoltre, U2F e WebAuthn sono più resistenti al phishing in quanto la loro risposta di autenticazione si basa sul [nome di dominio](https://en.wikipedia.org/wiki/Domain_name) autenticato.
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844), oltre al supporto DANE.
- Implementazione della [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), utile per chi posta su liste [RFC8617](https://tools.ietf.org/html/rfc8617) di mailing.
- Programmi di bug-bounty e/o un processo coordinato di divulgazione delle vulnerabilità.
- Standard di sicurezza del sito web come:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Fiducia

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Requisiti minimi:**

- Dirigenza o proprietà pubblica.

**Best Case:**

- Dirigenza pubblica.
- Rapporti di trasparenza frequenti.

### Marketing

With the email providers we recommend we like to see responsible marketing.

**Requisiti minimi:**

- Deve ospitare localmente i sistemi di analitica (no Google Analytics, Adobe Analytics, ecc.). Il sito del fornitore deve inoltre rispettare il [No not track (DNT)](https://it.wikipedia.org/wiki/Do_Not_Track) per chi desidera rinunciare.

Must not have any marketing which is irresponsible:

- Dichiarazioni di "crittografia infrangibile". La crittografia deve essere utilizzata con l'intenzione che nel futuro esisterà la tecnologia per decifrarla.
- Garantire al 100% la protezione dell'anonimato. Quando qualcuno afferma che qualcosa è al 100% significa che non esiste fallimento. Sappiamo che le persone possono deanonimizzarsi facilmente in vari modi, ad es.:

- Riutilizzare informazioni personali (p.e., account e-mail, pseudonimi unici ecc.) con cui hanno eseguito accessi senza software di anonimizzazione (Tor, VPN, ecc.)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Documentazione chiara e di facile lettura. Questo include cose come l'impostazione di 2FA, dei client di posta elettronica, di OpenPGP, ecc.

### Funzionalità aggiuntive

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

--8<-- "includes/abbreviations.it.txt"

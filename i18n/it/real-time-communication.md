---
title: "Comunicazione in tempo reale"
icon: material/chat-processing
description: Other instant messengers make all of your private conversations available to the company that runs them.
---

Questi sono i nostri consigli per comunicazioni criptate in tempo reale.

[Tipi di reti di comunicazione :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Signal

These messengers are great for securing your sensitive communications.

### Signal

!!! recommendation

    ![Signal logo](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** è un'applicazione per dispositivi mobili sviluppata da Signal Messenger LLC. L'applicazione offre messaggistica istantanea, oltre che chiamate e videochiamate.
    
    Tutte le comunicazioni sono E2EE. La lista dei contatti è crittografata utilizzando il tuo PIN di accesso; in questo modo, il server non può accedervi. Anche i profili personali sono crittografati e condivisi solo con i contatti che ti aggiungono.
    
    [:octicons-home-16: Pagina principale](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://support.signal.org/hc/en-us){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://signal.org/donate/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id874139669)
        - [:simple-android: Android](https://signal.org/android/apk/)
        - [:simple-windows11: Windows](https://signal.org/download/windows)
        - [:simple-apple: macOS](https://signal.org/download/macos)
        - [:simple-linux: Linux](https://signal.org/download/linux)

Il protocollo è stato sottoposto ad un [audit](https://eprint.iacr.org/2016/1013.pdf) indipendente nel 2016. Le specifiche del protocollo Signal possono essere trovate nella loro [documentazione](https://signal.org/docs/). Signal has minimal metadata when [Sealed Sender](https://signal.org/blog/sealed-sender/) is enabled. The sender address is encrypted along with the message body, and only the recipient address is visible to the server. Sealed Sender is only enabled for people in your contacts list, but can be enabled for all recipients with the increased risk of receiving spam. Signal requires your phone number as a personal identifier.

The protocol was independently [audited](https://eprint.iacr.org/2016/1013.pdf) in 2016. The specification for the Signal protocol can be found in their [documentation](https://signal.org/docs/).

We have some additional tips on configuring and hardening your Signal installation:

[Signal Configuration and Hardening :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! recommendation

    ![Element logo](assets/img/messengers/element.svg){ align=right }
    
    **Element** è il client di riferimento per il protocollo [Matrix](https://matrix.org/docs/guides/introduction), uno [standard aperto](https://matrix.org/docs/spec) per comunicazione in tempo reale sicura e decentralizzata. I messaggi e i file condivisi nelle stanze private (quelle che richiedono un invito) sono E2EE in modo predefinito, così come le chiamate e videochiamate tra due persone.
    
    [:octicons-home-16: Pagina principale](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

SimpleX Chat [was audited](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) by Trail of Bits in October 2022.

Il protocollo è stato [verificato](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) indipendentemente nel 2016. Le specifiche del protocollo Matrix possono essere trovate nella sua [documentazione](https://spec.matrix.org/latest/). L'algoritmto crittografico [Olm](https://matrix.org/docs/projects/other/olm) utilizzato da Matrix è un'implementazione dell'[algoritmo Double Ratchet](https://signal.org/docs/specifications/doubleratchet/) di Signal.

Your data can be exported, and imported onto another device, as there are no central servers where this is backed up.

### Briar

!!! recommendation

    ![Simplex logo](assets/img/messengers/simplex.svg){ align=right }
    
    **SimpleX** Chat è una messaggeria istantanea decentralizzata che non dipende da identificatori univoci come numeri di telefono o nomi utente. Gli utenti di SimpleX Chat possono scansionare un codice QR o fare clic su un link di invito per partecipare alle conversazioni di gruppo. [:octicons-home-16: Pagina principale](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Codice sorgente" }
    
    ???
    
    downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

Attualmente SimpleX Chat fornisce solo un client per Android e iOS. Sono supportate le funzionalità di base delle chat di gruppo, la messaggistica diretta, la modifica dei messaggi e il markdown.

I dati possono essere esportati e importati su un altro dispositivo, poiché non esistono server centrali in cui viene eseguito il backup.

Briar has a fully [published specification](https://code.briarproject.org/briar/briar-spec).

Briar supports perfect forward secrecy by using the Bramble [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) and [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) protocol.

## Element

!!! warning "Avviso"

    These messengers do not have Perfect [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) (PFS), and while they fulfill certain needs that our previous recommendations may not, we do not recommend them for long-term or sensitive communications. Session offre il supporto per messaggi diretti, chat di gruppo e chiamate vocali.

### Element

!!! recommendation

    ![Briar logo](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** è un servizio di messaggistica istantanea che si [connette](https://briarproject.org/how-it-works/) ad altri client utilizzando la rete Tor.
    
    Briar può anche connettersi via Wi-Fi o Bluetooth quando si trova nelle vicinanze.
    
    La modalità mesh locale di Briar può essere utile quando la connessione a Internet è problematica. [:octicons-home-16: Pagina principale](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentazione}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Le opzioni per donare solo presenti alla fine della pagina principale" }
    
    ???

Session ha un [whitepaper](https://arxiv.org/pdf/2002.04609.pdf) che descrive le caratteristiche tecniche dell'applicazione e del protocollo.

Group voice and video calls are [not](https://github.com/vector-im/element-web/issues/12878) E2EE, and use Jitsi, but this is expected to change with [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). recommendation We recommend that you do not use this feature for private meetings.

The Matrix protocol itself [theoretically supports PFS](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy), however this is [not currently supported in Element](https://github.com/vector-im/element-web/issues/7101) due to it breaking some aspects of the user experience such as key backups and shared message history.

The protocol was independently [audited](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) in 2016. The specification for the Matrix protocol can be found in their [documentation](https://spec.matrix.org/latest/). The [Olm](https://matrix.org/docs/projects/other/olm) cryptographic ratchet used by Matrix is an implementation of Signal’s [Double Ratchet algorithm](https://signal.org/docs/specifications/doubleratchet/).

### Session

!!! recommendation

    ![Session logo](assets/img/messengers/session.svg){ align=right }
    
    **Session** is a decentralized messenger with a focus on private, secure, and anonymous communications. Session offers support for direct messages, group chats, and voice calls.
    
    Session uses the decentralized [Oxen Service Node Network](https://oxen.io/) to store and route messages. Every encrypted message is routed through three nodes in the Oxen Service Node Network, making it virtually impossible for the nodes to compile meaningful information on those using the network.
    
    [:octicons-home-16: Homepage](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session allows for E2EE in one-on-one chats or closed groups which allow for up to 100 members. Open groups have no restriction on the number of members, but are open by design.

Session does [not](https://getsession.org/blog/session-protocol-technical-information) support PFS, which is when an encryption system automatically and frequently changes the keys it uses to encrypt and decrypt information, such that if the latest key is compromised it exposes a smaller portion of sensitive information.

Oxen requested an independent audit for Session in March of 2020. The audit [concluded](https://getsession.org/session-code-audit) in April of 2021, “The overall security level of this application is good and makes it usable for privacy-concerned people.”

Session has a [whitepaper](https://arxiv.org/pdf/2002.04609.pdf) describing the technicals of the app and protocol.

## CryptPad

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. recommendation

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** è un pastebin online minimalista e open-source in cui il server non ha alcuna conoscenza dei dati incollati. Infatti, vengono criptati/decriptati nel tuo browser utilizzando AES a 256 bit. downloads
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

- Must have open-source clients.
- Must use E2EE for private messages by default.
- Must support E2EE for all messages.
- Must have been independently audited.

### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Should have Perfect Forward Secrecy.
- Should have open-source servers.
- Should be decentralized, i.e. federated or P2P.
- Should use E2EE for all messages by default.
- Should support Linux, macOS, Windows, Android, and iOS.

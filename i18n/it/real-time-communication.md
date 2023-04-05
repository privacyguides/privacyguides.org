---
title: "Comunicazione in tempo reale"
icon: material/chat-processing
description: Altre app di messaggistica istantanea rendono disponibili tutte le tue conversazioni private alla società che le gestisce.
---

Questi sono i nostri consigli per comunicazioni crittografate in tempo reale.

[Tipi di reti di comunicazione :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Messenger crittografati

Questi messenger sono ideali per proteggere le tue comunicazioni sensibili.

### Signal

!!! recommendation

    ![Signal logo](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** è un'app per dispositivi mobili sviluppata da Signal Messenger LLC. L'app offre messaggistica istantanea, oltre che chiamate e videochiamate.
    
    Tutte le comunicazioni sono E2EE. Le liste di contatti è crittografata usando il tuo PIN Signal e il server non può accedervi. Anche i profili personali sono crittografati e condivisi solo con i contatti con cui parli.
    
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

Signal supporta i [gruppi privati](https://signal.org/blog/signal-private-group-system/). Il server non registra le appartenenze, i titoli, gli avatar o gli attributi dei gruppi. Signal ha metadati minimi quando [Mittente sigillato](https://signal.org/blog/sealed-sender/) è attivo. L'indirizzo del mittente viene crittografato insieme al corpo del messaggio e solo l'indirizzo del destinatario è visibile al server. Mittente sigillato è attivo solo per le persone presenti nell'elenco dei contatti, ma può essere attivato per tutti i destinatari, con un rischio maggiore di ricevere spam. Signal richiede il numero di telefono come identificativo personale.

Il protocollo è stato [verificato](https://eprint.iacr.org/2016/1013.pdf) indipendentemente nel 2016. Le specifiche del protocollo Signal possono essere trovate nella sua [documentazione](https://signal.org/docs/).

Abbiamo alcuni suggerimenti aggiuntivi per configurare e rendere più sicuro Signal:

[Configurazione e messa in sicurezza di Signal :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! recommendation

    ![Simplex logo](assets/img/messengers/simplex.svg){ align=right }
    
    **SimpleX** Chat è un'app di messaggistica istantanea decentralizzata che non dipende da alcun identificatore univoco, come numeri di telefono o nomi utente. Gli utenti di SimpleX Chat possono scansionare un codice QR o cliccare un link di invito per partecipare alle conversazioni di gruppo.
    
    [:octicons-home-16: Pagina principale](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){.card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){.card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/simplex-chat){.card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases)

SimpleX Chat [è stato verificato](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) da Trail of Bits nell'ottobre 2022.

Attualmente SimpleX Chat fornisce solo un client per Android e iOS. Sono supportate le funzionalità di base delle chat di gruppo, i messaggi diretti, la modifica dei messaggi e il markdown. Sono supportate anche le chiamate e le videochiamate E2EE.

I dati possono essere esportati e importati su un altro dispositivo, poiché non esistono server centrali in cui viene eseguito il backup.

### Briar

!!! recommendation

    ![Briar logo](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** è un'app di messaggistica istantanea crittografata che si [connette](https://briarproject.org/how-it-works/) agli altri client usando la rete Tor. Briar può anche connettersi via Wi-Fi o Bluetooth quando si trova nelle vicinanze. La modalità mesh locale di Briar può essere utile quando la connessione a Internet è problematica.
    
    [:octicons-home-16: Pagina principale](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentazione}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Le opzioni di donazione sono elencate in fondo alla pagina" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

Per aggiungere un contatto su Briar, è necessario prima aggiungersi a vicenda. Puoi sia scambiare i link `briar://` o scansionare il codice QR di un contatto, se è vicino.

Il software per il client è stato [verificato](https://briarproject.org/news/2017-beta-released-security-audit/) indipendentemente, così come il protocollo anonimo di trasmissione che utilizza la rete Tor.

Le specifiche di Briar sono [completamente pubbliche](https://code.briarproject.org/briar/briar-spec).

Briar supporta la Perfect Forward Secrecy usando l'[Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) Bramble e il protocollo [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md).

## Altre alternative

!!! warning

    Questi messenger non hanno la Perfect [Forward Secrecy](https://it.wikipedia.org/wiki/Forward_secrecy) (PFS) e, pur soddisfacendo alcune esigenze che le nostre precedenti raccomandazioni potrebbero non fare, non li consigliamo per comunicazioni a lungo termine o sensibili. Qualsiasi compromissione di chiavi tra i destinatari del messaggio inciderebbe sulla riservatezza di **tutte** le comunicazioni passate.

### Element

!!! recommendation

    ![Element logo](assets/img/messengers/element.svg){ align=right }
    
    **Element** è il client di riferimento per il protocollo [Matrix](https://matrix.org/docs/guides/introduction), uno [standard aperto](https://matrix.org/docs/spec) per comunicazioni decentralizzate sicure in tempo reale.
    
    I messaggi e i file condivisi nelle stanze private (quelle che richiedono un invito) sono E2EE in modo predefinito, così come le chiamate e videochiamate tra due persone.
    
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

Le immagini del profilo, le reazioni e i nickname non vengono crittografati.

Le chiamate e videochiamate di gruppo [non](https://github.com/vector-im/element-web/issues/12878) sono E2EE e utilizzano Jitsi, ma ciò dovrebbe cambiare con il [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). Le chiamate di gruppo non hanno [alcuna autenticazione](https://github.com/vector-im/element-web/issues/13074) attualmente, il che significa che non appartenenti alla stanza possono unirsi alle chiamate. Consigliamo di non usare questa funzione per riunioni private.

Lo stesso protocollo Matrix [supporta teoricamente il PFS](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy), tuttavia [non è attualmente supportato in Element](https://github.com/vector-im/element-web/issues/7101) perché rovina alcuni aspetti dell'esperienza utente, come il backup delle chiavi e la cronologia dei messaggi condivisi.

Il protocollo è stato [verificato](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) indipendentemente nel 2016. Le specifiche del protocollo Matrix possono essere trovate nella sua [documentazione](https://spec.matrix.org/latest/). L'algoritmto crittografico [Olm](https://matrix.org/docs/projects/other/olm) usato da Matrix è un'implementazione dell'[algoritmo Double Ratchet](https://signal.org/docs/specifications/doubleratchet/) di Signal.

### Session

!!! recommendation

    ![Session logo](assets/img/messengers/session.svg){ align=right }
    
    **Session** è un messenger decentralizzato incentrato su comunicazioni private, sicure e anonime. Session supporta i messaggi diretti, le chat di gruppo e le chiamate vocali.
    
    Session usa la rete decentralizzata [Oxen Service Node Network](https://oxen.io/) per memorizzare e instradare i messaggi. Ogni messaggio crittografato viene instradato attraverso tre nodi della rete di nodi di servizio Oxen, rendendo virtualmente impossibile per i nodi compilare informazioni significative su coloro che utilizzano la rete.
    
    [:octicons-home-16: Pagina principale](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session consente E2EE per chat individuali o in gruppi chiusi che possono ospitare fino a 100 membri. I gruppi aperti non hanno limitazioni sul numero di membri, ma sono aperti per scelta.

Session [non](https://getsession.org/blog/session-protocol-technical-information) supporta la PFS, ovvero quando un sistema di crittografia cambia automaticamente e frequentemente le chiavi utilizzate per crittografare e decifrare le informazioni, in modo tale che anche se la chiave più recente venisse compromessa, verrebbe esposta una porzione minore di informazioni sensibili.

Oxen ha richiesto una verifica indipendente per Session a marzo 2020. La verifica [è stata conclusa](https://getsession.org/session-code-audit) nell'aprile del 2021, "Il livello di sicurezza complessivo di questa applicazione è buono e la rende utilizzabile per individui interessati alla propria privacy."

Session ha un [libro bianco](https://arxiv.org/pdf/2002.04609.pdf) che descrive le caratteristiche tecniche dell'app e del protocollo.

## Criteri

**Si noti che non siamo affiliati a nessuno dei progetti che consigliamo.** Oltre a [i nostri criteri standard](about/criteria.md), abbiamo sviluppato una chiara serie di requisiti che ci permettono di fornire raccomandazioni obiettive. Ti consigliamo di familiarizzare con questo elenco prima di scegliere di utilizzare un progetto e condurre le tue ricerche per assicurarti che sia la scelta giusta per te.

!!! example "Questa sezione è nuova"

    Stiamo lavorando per stabilire criteri definiti per ogni sezione del nostro sito, e ciò potrebbe essere soggetto a modifiche. Se hai domande sui nostri criteri, [chiedi sul nostro forum](https://discuss.privacyguides.net/latest) e non dare per scontato che non abbiamo preso in considerazione qualcosa quando formuliamo i nostri consigli se non è elencato qui. Sono molti i fattori presi in considerazione e discussi quando raccomandiamo un progetto e documentare ogni singolo fattore è un lavoro in corso.

- Deve avere dei client open source.
- Deve usare E2EE per i messaggi privati in modo predefinito.
- Deve supportare E2EE per tutti i messaggi.
- Deve essere stato verificato in modo indipendente.

### Caso migliore

I nostri criteri ottimali rappresentano ciò che vorremmo vedere dal progetto perfetto in questa categoria. Le nostre raccomandazioni potrebbero non includere tutte o alcune di queste funzionalità, ma quelle che le includono potrebbero avere una posizione più alta rispetto ad altre in questa pagina.

- Deve avere la Perfect Forward Secrecy.
- Deve avere server open source.
- Deve essere decentralizzato, cioè federato o P2P.
- Deve usare E2EE per tutti i messaggi in modo predefinito.
- Deve supportare Linux, macOS, Windows, Android e iOS.

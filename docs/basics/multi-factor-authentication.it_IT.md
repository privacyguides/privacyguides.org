---
title: "Autenticazione a più fattori"
icon: 'material/two-factor-authentication'
---

**L'autenticazione a più fattori** (**MFA**) è un meccanismo di sicurezza che richiede ulteriori passaggi oltre all'inserimento del nome utente (o email) e della password. Il metodo più comune è quello dei codici a tempo limitato che si possono ricevere via SMS o tramite un'applicazione.

Solitamente, se un hacker (o un avversario) è in grado di scoprire una password, ha la possibilità di accedere all'account a cui la password appartiene. Un account con MFA costringe l'hacker ad avere sia la password (qualcosa che *conosci*) sia un dispositivo di tua proprietà (qualcosa che *hai*), come un cellulare.

I metodi MFA variano in termini di sicurezza, ma si basano sulla premessa che più è difficile per un attaccante accedere al tuo metodo MFA, meglio è. Esempi di metodi MFA (dal più debole al più forte) sono: SMS, codici email, notifiche push delle app, TOTP, Yubico OTP e FIDO.

## Confrontra tra i metodi MFA

### MFA tramite SMS o email

Ricevere codici OTP via SMS o email è uno dei modi più deboli per proteggere i tuoi account con MFA. Ottenere un codice via email o SMS elimina l'idea di "qualcosa che *possiedi*", perchè ci sono svariati modi con cui un hacker potrebbe [impossessarsi del tuo numero di telefono](https://en.wikipedia.org/wiki/SIM_swap_scam) o accedere alla tua mail senza avere accesso fisico a un tuo dispositivo. Se una persona non autorizzata accedesse alla tua email, sarebbe in grado di resettare la tua password e ricevere il codice di autenticazione, ottenendo così il pieno controllo del'account.

### Notifiche push

L'MFA con notifica push si presenta come un messaggio inviato a un'applicazione sul tuo telefono, chiedendo di confermare nuovi accessi a un account. Questo metodo è molto migliore degli SMS o delle mail, in quanto un attaccante tipicamente non è in grado di ricevere questi notifiche push senza avere un dispositivo già connesso, il che significa che dovrebbe prima compromettere uno dei tuoi altri dispositivi.

Facciamo tutti degli errori, e c'è il rischio che tu possa accettare il tentativo di accesso per errore. Le notifiche push per le autorizzazioni di accesso sono tipicamente inviate a *tutti* i tuoi dispositivi in una volta, ampliando la disponibilità del codice MFA se si possiedono molti device.

La sicurezza delle notifiche push MFA dipende sia dalla qualità dell'app, sia dalla componente server, sia dalla fiducia verso lo sviluppatore che la produce. Un'applicazione installata può anche richiedere di accettare privilegi invasivi che garantiscono l'accesso ad altri dati sul tuo dispositivo. Una singola app può anche richiedere un'applicazione specifica per ogni servizio che non richiede una password per essere aperta, a differenza di una buona app generatrice di TOTP.

### Time-based One-time Password (TOTP)

Il TOTP è una delle forme più comuni di MFA disponibili. Quando imposti il TOTP, è generalmente necessario eseguire la scansione di un [codice QR](https://it.wikipedia.org/wiki/Codice_QR) che stabilisce un "[segreto condiviso](https://en.wikipedia.org/wiki/Shared_secret)" con il servizio che si intende utilizzare. Il segreto condiviso è protetto tra i dati dell'app di autenticazione e talvolta è protetto da password.

Il codice a tempo limitato è quindi derivato dal segreto condiviso e l'ora corrente. Poiché il codice è valido solo per un breve periodo di tempo, senza l'accesso al segreto condiviso, un avversario non può generare nuovi codici.

Se si possiede una chiave di sicurezza hardware che supporta TOTP (come ad esempio YubiKey con [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), consigliamo di memorizzare i "segreti condivisi" nell'hardware. Hardware come YubiKey sono stati sviluppati con l'intenzione di rendere il segreto condiviso difficile da estrarre e copiare. Anche una YubiKey non è connessa a Internet, a differenza di un telefono con un'app TOTP.

A differenza di [WebAuthn](#fido-fast-identity-online), TOTP non offre alcuna protezione contro [il phishing](https://en.wikipedia.org/wiki/Phishing) o gli attacchi di riutilizzo. Se un malintenzionato ottiene un codice valido da te, può usarlo tutte le volte che vuole fino alla scadenza (generalmente 60 secondi).

Un avversario potrebbe creare un sito web per imitare un servizio ufficiale nel tentativo di indurti a fornire nome utente, password e codice TOTP corrente. Se l'avversario utilizza le credenziali registrate, può essere in grado di accedere al servizio reale e dirottare l'account.

Sebbene non sia perfetto, il TOTP è abbastanza sicuro per la maggior parte delle persone e quando le [chiavi di sicurezza hardware](../multi-factor-authentication.md#hardware-security-keys) non sono supportate le [app di autenticazione](../multi-factor-authentication.md#authenticator-apps) sono ancora una buona opzione.

### Chiavi di sicurezza hardware

La YubiKey memorizza i dati su un chip a stato solido resistente alle manomissioni che è [impossibile da accedere](https://security.stackexchange.com/a/245772) in modo non distruttivo senza un processo costoso e un laboratorio forense.

Queste chiavi sono generalmente multifunzione e forniscono una serie di metodi per l'autenticazione. Di seguito sono riportati i più comuni.

#### Yubico OTP

Yubico OTP è un protocollo di autenticazione tipicamente implementato nelle chiavi di sicurezza hardware. Quando si decide di utilizzare Yubico OTP, la chiave genererà un ID pubblico, un ID privato e una chiave segreta che viene quindi caricata sul server OTP Yubico.

Quando si accede a un sito web, è sufficiente toccare fisicamente la chiave di sicurezza. La chiave di sicurezza emulerà una tastiera e stamperà una password una tantum nel campo password.

Il servizio inoltrerà quindi la one-time password al server OTP di Yubico per la convalida. Un contatore viene incrementato sia sulla chiave che sul server di convalida di Yubico. L'OTP può essere utilizzato una sola volta e, quando l'autenticazione ha esito positivo, il contatore viene incrementato per impedire il riutilizzo dell'OTP. Yubico fornisce un documento dettagliato [](https://developers.yubico.com/OTP/OTPs_Explained.html) sul processo.

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

L'utilizzo di Yubico OTP presenta alcuni vantaggi e svantaggi rispetto a TOTP.

Il server di convalida di Yubico è un servizio basato su cloud e l'utente si affida a Yubico per la conservazione dei dati in modo sicuro e senza profilazione. L'ID pubblico associato a Yubico OTP viene riutilizzato su ogni sito web e potrebbe essere un'altra strada per terze parti di profilarti. Come TOTP, Yubico OTP non offre resistenza al phishing.

Se il modello di minaccia richiede di avere identità diverse su siti web diversi, **non** utilizzare Yubico OTP con la stessa chiave di sicurezza hardware su tutti i siti web, poiché l'ID pubblico è unico per ogni chiave di sicurezza.

#### FIDO (Fast IDentity Online)

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) include una serie di standard, prima c'era U2F e poi [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) che include lo standard web [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

U2F e FIDO2 fanno riferimento al protocollo da [Client a Authenticator Protocol](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), che è il protocollo tra la chiave di sicurezza e il computer, ad esempio un laptop o un telefono. È complementare a WebAuthn, che è il componente utilizzato per l'autenticazione con il sito web (la "Relying Party") a cui si sta cercando di accedere.

WebAuthn è la forma più sicura e privata di autenticazione a due fattori. Sebbene l'esperienza di autenticazione sia simile a Yubico OTP, la chiave non stampa una password unica e non viene convalidata da un server di terze parti. Invece, utilizza la [crittografia a chiave pubblica](https://it.wikipedia.org/wiki/Crittografia_asimmetrica) per l'autenticazione.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

Quando crei un account, la chiave pubblica viene inviata al servizio, quindi quando accedi, il servizio ti richiederà di "firmare" alcuni dati con la tua chiave privata. Il vantaggio di questo è che nessun dato della password viene mai memorizzato dal servizio, quindi non c'è nulla che un malintenzionato possa rubare.

Questa presentazione illustra la storia dell'autenticazione tramite password, le insidie (come il riutilizzo delle password) e discute gli standard FIDO2 e [WebAuthn](https://webauthn.guide).

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao" title="Come FIDO2 e WebAuthn impediscono l'appropriazione dell'account" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

FIDO2 e WebAuthn hanno proprietà di sicurezza e privacy superiori rispetto a qualsiasi altro metodo MFA.

In genere per i servizi web viene utilizzato con WebAuthn, che fa parte delle raccomandazioni del W3C [](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). Utilizza l'autenticazione a chiave pubblica ed è più sicura dei segreti condivisi utilizzati nei metodi OTP e TOTP di Yubico, poiché include il nome di origine (di solito, il nome del dominio) durante l'autenticazione. L'attestazione viene fornita per proteggerti dagli attacchi di phishing, in quanto ti aiuta a determinare che stai utilizzando il servizio autentico e non una copia falsa.

A differenza di Yubico OTP, WebAuthn non utilizza alcun ID pubblico, quindi la chiave **non** è identificabile tra diversi siti web. Inoltre, non utilizza alcun server cloud di terze parti per l'autenticazione. Tutte le comunicazioni avvengono tra la chiave e il sito web a cui si accede. FIDO utilizza anche un contatore che viene incrementato al momento dell'uso al fine di prevenire il riutilizzo della sessione e delle chiavi clonate.

Se un sito web o un servizio supporta WebAuthn per l'autenticazione, si consiglia vivamente di utilizzarlo rispetto a qualsiasi altra forma di MFA.

## Consigli generali

Abbiamo queste raccomandazioni generali:

### Quale metodo dovrei usare?

Quando configurate il vostro metodo MFA, tenete presente che è sicuro solo quanto il metodo di autenticazione più debole che utilizzate. Ciò significa che è importante utilizzare solo il miglior metodo MFA disponibile. Ad esempio, se si utilizza già il TOTP, è necessario disattivare l'MFA via e-mail e SMS. Se stai già utilizzando FIDO2/WebAuthn, non dovresti utilizzare Yubico OTP o TOTP sul tuo account.

### Backups

Dovresti sempre avere dei backup per il tuo metodo MFA. Le chiavi di sicurezza hardware possono essere perse, rubate o semplicemente smettere di funzionare nel tempo. Si consiglia di avere una coppia delle chiavi di sicurezza hardware con lo stesso accesso agli account, anziché una sola.

Quando utilizzi il TOTP con un'app di autenticazione, assicurati di eseguire il backup delle chiavi di ripristino o dell'app stessa o di copiare i "segreti condivisi" in un'altra istanza dell'app su un telefono diverso o in un contenitore crittografato (ad esempio [VeraCrypt](../encryption.md#veracrypt)).

### Configurazione iniziale

Quando si acquista una chiave di sicurezza, è importante modificare le credenziali predefinite, impostare una password di protezione per la chiave e abilitare la conferma tattile, se supportata. Prodotti come YubiKey dispongono di più interfacce con credenziali separate per ciascuna di esse, pertanto è necessario esaminare ogni interfaccia e impostare la protezione.

### Email e SMS

Se dovete usare l'e-mail per l'MFA, assicuratevi che l'account e-mail stesso sia protetto con un metodo MFA adeguato.

Se si utilizza l'MFA via SMS, è necessario scegliere un operatore che non cambierà il numero di telefono con una nuova carta SIM senza accesso all'account, oppure utilizzare un numero VoIP dedicato di un provider con una sicurezza simile per evitare un attacco [SIM swap](https://en.wikipedia.org/wiki/SIM_swap_scam).

[Strumenti MFA che consigliamo](../multi-factor-authentication.md ""){.md-button}

## Altri posti in cui configurare l'MFA

Oltre a proteggere gli accessi al sito web, l'autenticazione a più fattori può essere utilizzata anche per proteggere gli accessi locali, le chiavi SSH o persino i database delle password.

### Windows

Yubico ha un provider di credenziali [dedicato](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) che aggiunge l'autenticazione Challenge-Response al flusso di login con nome utente e password per gli account Windows locali. Se si dispone di una YubiKey con supporto per l'autenticazione Challenge-Response, consultare la guida alla configurazione di [Yubico Login for Windows](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), che consente di impostare l'MFA sul computer Windows.

### macOS

macOS ha un [supporto nativo](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) per l'autenticazione con smart card (PIV). Se si dispone di una smartcard o di una chiave di sicurezza hardware che supporta l'interfaccia PIV, come YubiKey, si consiglia di seguire la documentazione del fornitore della smartcard o della chiave di sicurezza hardware e di impostare l'autenticazione a due fattori per il computer macOS.

Yubico ha una guida [Using Your YubiKey as a Smart Card in macOS](https://support.yubico.com/hc/en-us/articles/360016649059) che può aiutare a configurare la YubiKey su macOS.

Dopo aver configurato la smart card o la chiave di sicurezza, si consiglia di eseguire questo comando nel terminale:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

Il comando impedirà a un malintenzionato di aggirare l'MFA all'avvio del computer.

### Linux

!!! warning "Avviso"

    Se il nome dell'host del sistema cambia (ad esempio a causa del DHCP), non sarà possibile effettuare il login. È fondamentale impostare un hostname corretto per il computer prima di seguire questa guida.

Il modulo `pam_u2f` su Linux può fornire l'autenticazione a due fattori per l'accesso alle distribuzioni Linux più popolari. Se si dispone di una chiave di sicurezza hardware che supporta U2F, è possibile impostare l'autenticazione MFA per il login. Yubico ha una guida [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) che dovrebbe funzionare su qualsiasi distribuzione. I comandi del gestore di pacchetti, come `apt-get`, e i nomi dei pacchetti possono tuttavia differire. Questa guida **non si applica** al sistema operativo Qubes.

### Qubes OS

Qubes OS supporta l'autenticazione Challenge-Response con YubiKeys. Se si dispone di una YubiKey con supporto per l'autenticazione Challenge-Response, consultare la documentazione di Qubes OS [YubiKey](https://www.qubes-os.org/doc/yubikey/) se si desidera impostare l'MFA su Qubes OS.

### SSH

#### Chiavi di sicurezza fisiche

SSH MFA può essere impostato utilizzando diversi metodi di autenticazione che sono molto diffusi con le chiavi di sicurezza hardware. Ti consigliamo di consultare [la documentazione](https://developers.yubico.com/SSH/) di Yubico su come configurarla.

#### Time-based One-time Password (TOTP)

SSH MFA può anche essere impostato utilizzando TOTP. DigitalOcean ha fornito un tutorial [Come impostare l'autenticazione a più fattori per SSH su Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). La maggior parte delle cose dovrebbe essere uguale a prescindere dalla distribuzione, tuttavia i comandi del gestore dei pacchetti - come `apt-get`- e i nomi dei pacchetti possono differire.

### KeePass (e KeePassXC)

I database KeePass e KeePassXC possono essere protetti utilizzando Challenge-Response o HOTP come autenticazione di secondo fattore. Yubico ha fornito un documento per KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) e ne esiste uno anche sul sito [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa).

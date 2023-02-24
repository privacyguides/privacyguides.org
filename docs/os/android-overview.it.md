---
title: Panoramica Android
icon: fontawesome/brands/android
---

Android è un sistema operativo sicuro, dotato di [sandboxing delle app](https://source.android.com/security/app-sandbox), [Verified Boot](https://source.android.com/security/verifiedboot) (AVB) e di un robusto sistema di controllo delle [autorizzazioni](https://developer.android.com/guide/topics/permissions/overview).

## Scegliere una distribuzione di Android

Quando acquisti un telefono Android, il sistema operativo predefinito del dispositivo è spesso dotato di un'integrazione invasiva con applicazioni e servizi che non fanno parte di [Android Open-Source Project](https://source.android.com/). Un esempio è Google Play Services, che ha privilegi irrevocabili di accesso ai file, alla memoria dei contatti, ai registri delle chiamate, ai messaggi SMS, alla posizione, alla fotocamera, al microfono, agli identificatori hardware e così via. Queste applicazioni e servizi aumentano la superficie di attacco del dispositivo e sono all'origine di vari problemi di privacy con Android.

Questo problema potrebbe essere risolto utilizzando una distribuzione modificata di Android che non preveda un'integrazione così invasiva. Purtroppo, molte distribuzioni di Android personalizzate spesso violano il modello di sicurezza di Android, non supportando funzioni di sicurezza critiche come AVB, protezione rollback, aggiornamenti del firmware e così via. Alcune distribuzioni forniscono anche build [`userdebug`](https://source.android.com/setup/build/building#choose-a-target) che espongono root tramite [ADB](https://developer.android.com/studio/command-line/adb) e richiedono politiche SELinux [più permissive](https://github.com/LineageOS/android_system_sepolicy/search?q=userdebug&type=code) per ospitare le funzionalità di debug, con conseguente ulteriore aumento della superficie di attacco e indebolimento del modello di sicurezza.

Idealmente, quando si sceglie una distribuzione modificata di Android, bisogna assicurarsi che rispetti il modello di sicurezza Android. Come minimo, la distribuzione dovrebbe avere build di produzione, supporto per AVB, protezione dal rollback, aggiornamenti tempestivi del firmware e del sistema operativo e SELinux in [modalità enforcing](https://source.android.com/security/selinux/concepts#enforcement_levels). Tutte le distribuzioni di Android da noi consigliate soddisfano questi criteri.

[Le nostre raccomandazioni per il sistema Android :material-arrow-right-drop-circle:](../android.md ""){.md-button}

## Evitare il rooting

Il [rooting](https://it.wikipedia.org/wiki/Rooting) dei telefoni Android può diminuire notevolmente la sicurezza in quanto indebolisce nel complesso il [modello di sicurezza di Android](https://it.wikipedia.org/wiki/Android#Privacy_e_sicurezza). Questo può ridurre la privacy nel caso in cui si verifichi un exploit favorito dalla riduzione della sicurezza. I metodi di rooting più comuni prevedono la manomissione diretta della partizione di avvio, rendendo impossibile l'esecuzione di un Verified Boot. Le applicazioni che richiedono il root modificheranno anche la partizione di sistema, il che significa che Verified Boot dovrà rimanere disabilitato. L'esposizione di root direttamente nell'interfaccia utente aumenta inoltre la [superficie di attacco](https://it.wikipedia.org/wiki/Superficie_di_attacco) del dispositivo e può favorire [l'escalation dei privilegi](https://it.wikipedia.org/wiki/Privilege_escalation) e l'aggiramento delle politiche di SELinux.

Gli adblocker che modificano il [file hosts](https://it.wikipedia.org/wiki/Hosts) (AdAway) e i firewall (AFWall+) che richiedono l'accesso root in modo persistente sono pericolosi e non dovrebbero essere utilizzati. Inoltre, non sono il modo corretto per risolvere i loro scopi. Se vuoi bloccare le pubblicità suggeriamo invece l'uso di [DNS](../dns.md) criptati o di [VPN](../vpn.md) con questa funzione. RethinkDNS, TrackerControl e AdAway in modalità non-root occuperanno lo slot VPN (utilizzando un loopback VPN locale) impedendovi di utilizzare servizi di miglioramento della privacy come Orbot o un vero server VPN.

AFWall+ funziona in base all'approccio del [filtraggio dei pacchetti](https://it.wikipedia.org/wiki/Firewall#Filtraggio_dei_pacchetti/contenuti) e può essere bypassato in alcune situazioni.

Non crediamo che i sacrifici in termini di sicurezza fatti con il rooting di un telefono valgano i discutibili vantaggi per la di privacy di queste applicazioni.

## Verified Boot

Il [Verified Boot](https://source.android.com/security/verifiedboot) (avvio verificato) è una parte importante del modello di sicurezza di Android. Fornisce protezione contro gli attacchi [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack), la persistenza del malware e garantisce che gli aggiornamenti di sicurezza non possano essere declassati con la protezione da [rollback](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

A partire da Android 10 si è passati dalla crittografia dell'intero disco alla più flessibile [crittografia basata sui file](https://source.android.com/security/encryption/file-based). I dati vengono crittografati utilizzando chiavi di crittografia uniche, mentre i file del sistema operativo vengono lasciati in chiaro.

Il Verified Boot garantisce l'integrità dei file del sistema operativo, impedendo così a un avversario con accesso fisico di manomettere o installare malware sul dispositivo. Nel caso improbabile che il malware sia in grado di sfruttare altre parti del sistema e ottenere un accesso privilegiato superiore, Verified Boot impedisce e ripristina le modifiche alla partizione di sistema al riavvio del dispositivo.

Sfortunatamente, gli OEM sono obbligati a supportare il Verified Boot solo sulla loro distribuzione stock di Android. Solo alcuni OEM, come Google, supportano la registrazione personalizzata della chiave AVB sui loro dispositivi. Inoltre, alcuni derivati di AOSP come LineageOS o /e/ OS non supportano il Verified Boot anche su hardware con supporto per il Verified Boot per sistemi operativi di terze parti. Si consiglia di verificare il supporto **prima** di acquistare un nuovo dispositivo. I derivati di AOSP che non supportano il Verified Boot **non** sono consigliati.

Molti OEM hanno anche implementazioni non funzionanti del Verified Boot di cui bisogna essere consapevoli al di là del loro marketing. Ad esempio, i Fairphone 3 e 4 non sono sicuri per impostazione predefinita, poiché il bootloader stock di [si affida alla chiave di firma AVB pubblica](https://forum.fairphone.com/t/bootloader-avb-keys-used-in-roms-for-fairphone-3-4/83448/11). Ciò invalida l'avvio verificato su un dispositivo Fairphone stock, in quanto il sistema avvierà sistemi operativi Android alternativi come (ad esempio /e/) [senza alcun avviso](https://source.android.com/security/verifiedboot/boot-flow#locked-devices-with-custom-root-of-trust) sull'utilizzo del sistema operativo modificato.

## Aggiornamenti del firmware

Gli aggiornamenti del firmware sono fondamentali per mantenere la sicurezza e senza di essi il dispositivo non può essere sicuro. Gli OEM stipulano accordi di supporto con i loro partner per fornire i componenti closed-source per un periodo di supporto limitato. Questi sono riportati mesilmente in [Android Security Bulletins](https://source.android.com/security/bulletin) (bollettini di sicurezza di Android).

Poiché i componenti del telefono, come il processore e le tecnologie radio, si basano su componenti closed-source, gli aggiornamenti devono essere forniti dai rispettivi produttori. Pertanto, è importante acquistare un dispositivo all'interno di un ciclo di assistenza attivo. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) e [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) supportano i loro dispositivi per 4 anni, mentre i prodotti più economici hanno spesso cicli di supporto più brevi. Con l'introduzione di [Pixel 6](https://support.google.com/pixelphone/answer/4457705), Google produce ora il proprio SoC e fornirà un supporto di almeno 5 anni.

I dispositivi EOL che non sono più supportati dal produttore del SoC non possono ricevere aggiornamenti del firmware dai fornitori OEM o dai distributori Android after market. Ciò significa che i problemi di sicurezza di questi dispositivi non saranno risolti.

Fairphone, ad esempio, commercializza i propri dispositivi con 6 anni di assistenza. Tuttavia, il SoC (Qualcomm Snapdragon 750G sul Fairphone 4) ha una data di scadenza molto più breve. Ciò significa che gli aggiornamenti di sicurezza del firmware di Qualcomm per il Fairphone 4 termineranno nel settembre 2023, indipendentemente dal fatto che Fairphone continui a rilasciare aggiornamenti di sicurezza del software.

## Versioni di Android

È importante non utilizzare una versione di Android a [fine vita](https://endoflife.date/android). Le nuove versioni di Android non ricevono solo aggiornamenti di sicurezza per il sistema operativo, ma anche importanti aggiornamenti per migliorare la privacy. Ad esempio, [prima di Android 10](https://developer.android.com/about/versions/10/privacy/changes), qualsiasi app con l'autorizzazione [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) poteva accedere a numeri di serie sensibili e unici del telefono, come [IMEI](https://it.wikipedia.org/wiki/International_Mobile_Equipment_Identity), [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier) e [IMSI](https://it.wikipedia.org/wiki/IMSI) della carta SIM, mentre ora devono essere app di sistema per farlo. Le applicazioni di sistema sono fornite solo dagli OEM o dalla distribuzione di Android.

## Autorizzazioni di Android

[Le autorizzazioni su Android](https://developer.android.com/guide/topics/permissions/overview) consentono di controllare ciò a cui le applicazioni hanno accesso. Google apporta regolarmente [miglioramenti](https://developer.android.com/about/versions/11/privacy/permissions) al sistema delle autorizzazioni in ogni nuova versione. Tutte le applicazioni installate sono rigorosamente [confinate in una sandbox](https://source.android.com/security/app-sandbox), pertanto non è necessario installare alcuna applicazione come antivirus. Uno smartphone con l'ultima versione di Android sarà sempre più sicuro di un vecchio smartphone con un antivirus a pagamento. È meglio non pagare il software antivirus e risparmiare per acquistare un nuovo smartphone come il Google Pixel.

Se volete eseguire un'applicazione di cui non siete sicuri, prendete in considerazione l'utilizzo di un profilo utente o di lavoro.

## Accesso ai media

Molte applicazioni consentono di "condividere" un file per il caricamento dei media. Se desideri, ad esempio, caricare una foto su Twitter, non concedere a Twitter l'accesso a "media e foto", perché in questo modo avrà accesso a tutte le immagini. Invece, apri il gestore di file (documentsUI), tieni premuta l'immagine, quindi condividila con Twitter.

## Profili utente

I profili utente multipli si trovano in **Impostazioni** → **Sistema** → **Utenti multipli** e sono il modo più semplice per isolare in Android.

Con i profili utente, è possibile imporre restrizioni a un profilo specifico, come ad esempio: effettuare chiamate, utilizzare SMS o installare applicazioni sul dispositivo. Ogni profilo è crittografato con la propria chiave di crittografia e non può accedere ai dati di altri profili. Anche il proprietario del dispositivo non può visualizzare i dati di altri profili senza conoscere la loro password. I profili utente multipli sono un metodo di isolamento più sicuro.

## Profilo di lavoro

I [Profili di lavoro](https://support.google.com/work/android/answer/6191949) sono un altro modo per isolare le singole app e può essere più comodo dei profili utente separati.

Per creare un profilo di lavoro senza un MDM aziendale è necessaria un'applicazione come **controllore del dispositivo**, come [Shelter](#recommended-apps), a meno che tu non utilizzi un sistema operativo Android modificato che ne include uno.

Il profilo di lavoro dipende da un controllore del dispositivo per funzionare. Funzionalità come *File Shuttle* e *blocco della ricerca dei contatti* o qualsiasi tipo di funzionalità di isolamento devono essere implementate dal controllore. È inoltre necessario fidarsi completamente dell'app di controllo del dispositivo, che ha pieno accesso ai dati dell'utente all'interno del profilo di lavoro.

Questo metodo è generalmente meno sicuro di un profilo utente secondario; tuttavia, consente di eseguire contemporaneamente le applicazioni nel profilo di lavoro e in quello personale.

## Killswitch per VPN

Android 7 e successivi supporta un killswitch per VPN ed è disponibile senza la necessità di installare applicazioni di terze parti. Questa funzione può prevenire la fuga di dati in caso di disconnessione della VPN. Si trova in :gear: **Impostazioni** → **Rete e Internet** → **VPN** → :gear: → **Blocca connessioni senza VPN**.

## Interruttori globali

I dispositivi Android moderni dispongono di interruttori globali per disattivare il Bluetooth e i servizi di localizzazione. Android 12 ha introdotto gli interruttori per la fotocamera e il microfono. Quando non vengono utilizzate, si consiglia di disabilitare queste funzioni. Le applicazioni non possono utilizzare le funzioni disabilitate (anche se hanno ottenuto un'autorizzazione individuale) finché non vengono riattivate.

## Google

Se utilizzi un dispositivo con i servizi di Google, sia con il sistema operativo di serie sia con un sistema operativo che mette in sicurezza i Google Play Services, come GrapheneOS, è possibile apportare una serie di modifiche aggiuntive per migliorare la privacy. Si consiglia comunque di evitare del tutto i servizi di Google o di limitare i servizi di Google Play a un profilo specifico utente o di lavoro, combinando un controller di dispositivo come *Shelter* con Sandboxed Google Play di GrapheneOS.

### Programma di protezione avanzata

Se disponi di un account Google, consigliamo di iscriversi al https://landing.google.com/intl/it/advancedprotection/programma di protezione avanzata</a>. È disponibile gratuitamente per chiunque possieda due o più chiavi di sicurezza hardware con supporto a [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online).

Il programma di protezione avanzata offre un monitoraggio avanzato delle minacce e consente:

- Autenticazione a due fattori più rigorosa; ad esempio, [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) **deve** essere utilizzato e non è consentito l'uso di [SMS OTP](../basics/multi-factor-authentication.md#sms-or-email-mfa), [TOTP](../basics/multi-factor-authentication.md#time-based-one-time-password-totp) e [OAuth](https://it.wikipedia.org/wiki/OAuth)
- Solo Google e le app di terze parti verificate possono accedere ai dati dell'account
- Scansione delle email in arrivo sugli account Gmail per i tentativi di [phishing ](https://en.wikipedia.org/wiki/Phishing#Email_phishing)
- [Scansione sicura del browser](https://www.google.com/chrome/privacy/whitepaper.html#malware) più rigorosa con Google Chrome
- Processo di recupero più rigoroso per gli account con credenziali perdute

 Se utilizzi Google Play Services senza sandbox (comuni sui sistemi operativi stock), il programma di protezione avanzata viene fornito anche con [vantaggi aggiuntivi](https://support.google.com/accounts/answer/9764949?hl=it) quali:

- Non permettere l'installazione di app al di fuori del Google Play Store, dell'app store del fornitore del sistema operativo o tramite [`adb`](https://it.wikipedia.org/wiki/Android_Debug_Bridge)
- Scansione automatica obbligatoria del dispositivo con [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=it#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Avviso sulle applicazioni non verificate

### Aggiornamenti dei servizi di sistema di Google

In passato, gli aggiornamenti di sicurezza di Android dovevano essere forniti dal fornitore del sistema operativo. Android è diventato più modulare a partire da Android 10 e Google può inviare aggiornamenti di sicurezza per **alcuni componenti del sistema** tramite i Play Services privilegiati.

Se disponi di un dispositivo EOL con Android 10 o superiore e non sei in grado di installare uno dei nostri sistemi operativi consigliati sul dispositivo, è probabile che sia meglio attenersi alla distribuzione di Android dell'OEM (rispetto a un sistema operativo non elencato qui, come LineageOS o /e/ OS). Questo ti permetterà di ricevere **alcune** correzioni di sicurezza da parte di Google, senza però violare il modello di sicurezza Android utilizzando un derivato di Android insicuro e aumentando la superficie di attacco. Consigliamo comunque di passare a un dispositivo supportato il prima possibile.

### ID pubblicità

Tutti i dispositivi con Google Play Services installato generano automaticamente un [ID pubblicità](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) utilizzato per la pubblicità mirata. Disattiva questa funzione per limitare i dati raccolti su di te.

Sulle distribuzioni Android con [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), vai su :gear: **Settings** → **Apps** → **Sandboxed Google Play** → **Google Settings** → **Ads**, e selezionare *Delete advertising ID*.

Sulle distribuzioni di Android con Google Play Services privilegiato (come i sistemi operativi stock), l'impostazione può trovarsi in una delle diverse posizioni. Controlla

- :gear: **Impostazioni** → **Google** → **Annunci**
- :gear: **Impostazioni** → **Privacy** → **Annunci**

Ti verrà data la possibilità di eliminare l'ID pubblicità o di *rinunciare agli annunci basati sugli interessi*, questo varia tra le distribuzioni OEM di Android. È raccomandato eliminare l'ID pubblicità se viene data la possibilità. In caso contrario, assicurati di disattivare e reimpostare l'ID pubblicità.

### SafetyNet e API Play Integrity

[SafetyNet](https://developer.android.com/training/safetynet/attestation) e le API [Play Integrity](https://developer.android.com/google/play/integrity) sono generalmente utilizzate per [le app bancarie](https://grapheneos.org/usage#banking-apps). Molte applicazioni bancarie funzionano bene in GrapheneOS con i servizi Play in sandbox, ma alcune applicazioni non finanziarie hanno i loro meccanismi anti-manomissione che potrebbero fallire. GrapheneOS supera il controllo `basicIntegrity`, ma non il controllo di certificazione `ctsProfileMatch`. I dispositivi con Android 8 o successivi dispongono di un supporto di attestazione hardware che non può essere aggirato senza chiavi trapelate o gravi vulnerabilità.

Per quanto riguarda Google Wallet, lo sconsigliamo a causa dell'[informativa sulla privacy](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), che prevede l'opt-out se non si desidera che il proprio rating creditizio e i propri dati personali vengano condivisi con i servizi di marketing affiliati.

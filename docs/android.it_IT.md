---
title: "Android"
icon: 'fontawesome/brands/android'
---

![Logo di Android](assets/img/android/android.svg){ align=right }

**Android Open Source Project** è un sistema operativo mobile open-source sviluppato da Google che viene utilizzato nella maggior parte dei dispositivi mobile del mondo. La maggior parte dei telefoni venduti con Android sono modificati per includere integrazioni e applicazioni invasive come Google Play Services, quindi è possibile migliorare significativamente la privacy sul proprio dispositivo mobile sostituendo l'installazione predefinita del telefono con una versione di Android priva di queste caratteristiche invasive.

[:octicons-home-16:](https://source.android.com/){ .card-link title="Pagina princiapale" }
[:octicons-info-16:](https://source.android.com/docs){ .card-link title=Documentazione}
[:octicons-code-16:](https://cs.android.com/android/platform/superproject/){ .card-link title="Codice sorgente" }

Questi sono i sistemi operativi, i dispositivi e le applicazioni Android che consigliamo per massimizzare la sicurezza e la privacy del proprio dispositivo mobile. Maggiori informazioni su Android:

- [Panoramica generale di Android :material-arrow-right-drop-circle:](os/android-overview.md)
- [Perché consigliamo GrapheneOS rispetto a CalyxOS :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/)

## Derivati di AOSP

Consigliamo di installare sul dispositivo uno dei seguenti sistemi operativi basati su Android, elencati in ordine di preferenza, a seconda della compatibilità del proprio dispositivo con questi sistemi operativi.

!!! note

    I dispositivi a fine vita (come i dispositivi a "supporto esteso" di GrapheneOS o CalyxOS) non hanno patch di sicurezza complete (aggiornamenti del firmware) a causa dell'interruzione del supporto da parte dell'OEM. Questi dispositivi non possono essere considerati completamente sicuri, indipendentemente dal software installato.

### GrapheneOS

!!! recommendation

    ![GrapheneOS logo](assets/img/android/grapheneos.svg#only-light){ align=right }
    ![GrapheneOS logo](assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS** è la scelta migliore quando si tratta di privacy e sicurezza.
    
    GrapheneOS offre miglioramenti aggiuntivi in termini di [hardening della sicurezza] (https://it.wikipedia.org/wiki/Hardening) e di privacy. Dispone di un [allocatore di memoria rafforzato](https://github.com/GrapheneOS/hardened_malloc), di autorizzazioni per la rete e per i sensori, di varie altre [caratteristiche di sicurezza](https://grapheneos.org/features). GrapheneOS viene inoltre fornito con aggiornamenti completi del firmware e build firmate, quindi il verified boot è pienamente supportato.
    
    [:octicons-home-16: Pagina principale](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://grapheneos.org/source){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://grapheneos.org/donate/){ .card-link title=Contribuisci }

GrapheneOS supporta [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), che esegue [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) totalmente confinato in una sandbox come qualsiasi altra app normale. Ciò significa che è possibile sfruttare la maggior parte dei servizi di Google Play, come le [notifiche push](https://firebase.google.com/docs/cloud-messaging/), pur avendo il pieno controllo delle autorizzazioni e dell'accesso, mentre sono contenuti in un [profilo di lavoro](os/android-overview.md#work-profile) specifico o in un [profilo utente](os/android-overview.md#user-profiles) di propria scelta.

I telefoni Google Pixel sono gli unici dispositivi che attualmente soddisfano i [requisiti di sicurezza hardware](https://grapheneos.org/faq#device-support) di GrapheneOS.

### DivestOS

!!! recommendation

    ![DivestOS logo](assets/img/android/divestos.svg){ align=right }
    
    **DivestOS** è una soft-fork di [LineageOS](https://lineageos.org/).
    DivestOS eredita molti [dispositivi supportati] (https://divestos.org/index.php?page=devices&base=LineageOS) da LineageOS. Fornisce build firmate, che consentono di avere [verified boot](https://source.android.com/security/verifiedboot) su alcuni dispositivi non-Pixel.
    
    [:octicons-home-16: Pagnia principale](https://divestos.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://divestoseb5nncsydt7zzf5hrfg44md4bxqjs5ifcv4t7gt7u6ohjyyd.onion){ .card-link title=Onion }
    [:octicons-eye-16:](https://divestos.org/index.php?page=privacy_policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://divestos.org/index.php?page=faq){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/divested-mobile){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://divested.dev/index.php?page=donate){ .card-link title=Contribuisci }

DivestOS offre [patch](https://gitlab.com/divested-mobile/cve_checker) automatizzate per vulnerabilità del kernel ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)), meno blob proprietari e un file [hosts](https://divested.dev/index.php?page=dnsbl) modificato. Il suo WebView rafforzato, [Mulch](https://gitlab.com/divested-mobile/mulch), attiva [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) per tutte le architetture e [il partizionamento dello stato di rete](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning), e riceve aggiornamenti fuori programma. DivestOS include anche le patch del kernel di GrapheneOS e abilita tutte le funzionalità di sicurezza del kernel disponibili tramite [defconfig hardening](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758). Tutti i kernel più recenti della versione 3.4 includono una completa [sanificazione](https://lwn.net/Articles/334747/) delle pagine e tutti i ~22 kernel compilati con Clang hanno [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471) abilitato.

DivestOS implementa alcune patch di hardening del sistema originariamente sviluppate per GrapheneOS. DivestOS 16.0 e versioni successive imposrta da GrapheneOSl'attivazione delle autorizzazioni [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) e SENSORS, [l'allocatore di memoria rafforzato](https://github.com/GrapheneOS/hardened_malloc), [exec-spawning](android/grapheneos-vs-calyxos.md#additional-hardening), [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) [constification](https://en.wikipedia.org/wiki/Const_(computer_programming)), e patch parziali di rafforzamento di [bionic](https://en.wikipedia.org/wiki/Bionic_(software)). Le versioni 17.1 e successive importano da GrapheneOS l'opzione di [randomizzazione MAC](https://en.wikipedia.org/wiki/MAC_address#Randomization) completa per-rete, il controllo [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) e [opzioni di timeout](https://grapheneos.org/features) per riavvio automatico/Wi-Fi/Bluetooth.

DivestOS utilizza F-Droid come distributore di applicazioni predefinito. Normalmente, consigliamo di evitare F-Droid a causa dei suoi numerosi [problemi di sicurezza](#f-droid). Tuttavia, farlo su DivestOS non è fattibile; gli sviluppatori aggiornano le loro applicazioni tramite i propri repository F-Droid ([DivestOS Official](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467) e [DivestOS WebView](https://divestos.org/fdroid/webview/?fingerprint=FB426DA1750A53D7724C8A582B4D34174E64A84B38940E5D5A802E1DFF9A40D2)). Si consiglia di disabilitare l'applicazione ufficiale di F-Droid e di utilizzare [Neo Store](https://github.com/NeoApplications/Neo-Store/) con i repository DivestOS abilitati per mantenere aggiornati questi componenti. Segui gli altri metodi raccomandati per installare altre applicazioni.

Fai molta **attenzione** riguardo l'acquisto di telefoni di seconda mano dai mercati online. warning

    Lo [stato](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS) degli aggiornamenti del firmware di DivestOS e il controllo di qualità variano a seconda dei dispositivi supportati. Consigliamo ancora GrapheneOS a seconda della compatibilità del dispositivo. Per altri dispositivi, DivestOS è una buona alternativa.
    
    Non tutti i dispositivi supportati hanno il verified boot e alcuni lo eseguono meglio di altri.

## Dispositivi Android

Quando acquisti un dispositivo, si consiglia di prenderne uno il più recente possibile. Il software e il firmware dei dispositivi mobili sono supportati solo per un periodo di tempo limitato, quindi l'acquisto di un prodotto recente ne prolunga il più possibile la durata.

Evita di acquistare telefoni dagli operatori di rete mobile. Spesso hanno il **bootloader bloccato** e non supportano [lo sblocco OEM](https://source.android.com/devices/bootloader/locking_unlocking). Queste varianti impediscono d'installare qualsiasi tipo di distribuzione Android alternativa sul dispositivo.

Fai molta **attenzione** all'acquisto di telefoni di seconda mano dai mercati online. Controlla sempre la reputazione del venditore. Se il dispositivo è rubato, c'è la possibilità che [l'IMEI venga bloccato](https://www.gsma.com/security/resources/imei-blacklisting/). Il rischio è anche quello di essere associati all'attività del precedente proprietario.

Altri suggerimenti sui dispositivi Android e sulla compatibilità del sistema operativo:

- Non acquistare dispositivi che hanno raggiunto o sono prossimi alla fine del loro ciclo di vita, ulteriori aggiornamenti del firmware devono essere forniti dal produttore.
- Non acquistare telefoni con preinstallato LineageOS o /e/ OS o qualsiasi telefono Android senza il supporto a [Verified Boot](https://source.android.com/security/verifiedboot) e agli aggiornamenti firmware. Inoltre, questi dispositivi non ti consentono di verificare se sono stati manomessi.
- In breve, se un dispositivo o una distribuzione Android non sono elencati qui, probabilmente c'è una buona ragione. Visita il nostro [forum](https://discuss.privacyguides.org/) per ulteriori dettagli!

### Google Pixel

I telefoni Google Pixel sono gli **unici** dispositivi che consigliamo di acquistare. I telefoni Pixel hanno una sicurezza hardware migliore di qualsiasi altro dispositivo Android attualmente sul mercato, grazie ad un supporto AVB adeguato per i sistemi operativi di terze parti e ai chip di sicurezza [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) personalizzati di Google che fungono da Secure Element.

!!! recommendation

    ![Google Pixel 6](assets/img/android/google-pixel.png){ align=right }
    
    I dispositivi **Google Pixel** sono noti per avere una buona sicurezza e per supportare correttamente il [Verified Boot](https://source. ndroid.com/security/verifiedboot), anche quando si installano sistemi operativi personalizzati.
    
    A partire dal **Pixel 6** e dal **6 Pro**, i dispositivi Pixel ricevono un minimo di 5 anni di aggiornamenti di sicurezza garantiti, assicurando una durata di vita molto più lunga rispetto ai 2-4 anni offerti in genere dagli OEM concorrenti.
    
    [:material-shopping: Store](https://store.google.com/category/phones){ .md-button .md-button--primary }

I Secure Elements come il Titan M2 sono più limitati rispetto al Trusted Execution Environment del processore utilizzato dalla maggior parte degli altri telefoni, in quanto vengono utilizzati solo per la memorizzazione dei segreti, l'attestazione hardware e la limitazione della velocità, non per l'esecuzione di programmi "affidabili". I telefoni privi di un Secure Element devono utilizzare il TEE per *tutte* quelle funzioni, con una conseguente superficie di attacco più ampia.

I telefoni Google Pixel utilizzano un sistema operativo TEE chiamato Trusty che è [open-source](https://source.android.com/security/trusty#whyTrusty), a differenza di molti altri telefoni.

L'installazione di GrapheneOS su un telefono Pixel è facile grazie al [web installer](https://grapheneos.org/install/web). Se non ti senti a tuo agio a farlo da solo e sei disposto a spendere un po' di soldi in più, controlla il [NitroPhone](https://shop.nitrokey.com/shop) su cui viene preinstallato GrapheneOS dalla rispettabile società [Nitrokey](https://www.nitrokey.com/about).

Altri suggerimenti per l'acquisto di un Google Pixel:

- Se vuoi fare un affare con un dispositivo Pixel, ti consigliamo di acquistare un modello "**a**", subito dopo l'uscita del modello seguente. Gli sconti sono solitamente disponibili perché Google cercherà di smaltire le scorte.
- Considera gli sconti e le offerte speciali offerte nei negozi fisici.
- Consulta i siti di contrattazione di commercio online del proprio Paese. Questi possono segnalarti le vendite più convenienti.
- Google pubblica un elenco che mostra il [ciclo di supporto](https://support.google.com/nexus/answer/4457705) per ciascuno dei suoi dispositivi. Il prezzo giornaliero di un dispositivo può essere calcolato come: $\text{Prezzo} \over \text {Data EOL }-\text{ Data attuale}$, il che significa che più lungo è l'uso del dispositivo, minore è il costo giornaliero.

## App Generali

In questo sito raccomandiamo un'ampia gamma di applicazioni per Android. Le applicazioni qui elencate sono esclusive di Android e migliorano o sostituiscono in modo specifico le principali funzionalità del sistema.

### Shelter

!!! recommendation

    ![Shelter logo](assets/img/android/shelter.svg){ align=right }
    
    **Shelter** è un'app che ti aiuta a sfruttare la funzionalità Profilo di Lavoro di Android per isolare o duplicare le app sul tuo dispositivo.
    
    Shelter supporta il blocco della ricerca dei contatti tra i profili e la condivisione dei file tra i profili tramite il gestore file predefinito ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).
    
    [:octicons-repo-16: Repository](https://gitlab.com/spacecowboy/Feeder){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/spacecowboy/Feeder){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.patreon.com/PeterCxy){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)

!!! warning

    Shelter è consigliato rispetto a [Insular](https://secure-system.gitlab.io/Insular/) e [Island](https://github.com/oasisfeng/island) perché supporta il [blocco della ricerca dei contatti] (https://secure-system.gitlab.io/Insular/faq.html).
    
    Utilizzando Shelter, l'utente si affida completamente al suo sviluppatore, in quanto Shelter agisce come [amministratore del dispositivo](https://developer.android.com/guide/topics/admin/device-admin) per creare il profilo di lavoro e ha ampio accesso ai dati memorizzati all'interno del profilo di lavoro.

### Auditor

!!! recommendation

    ![Auditor logo](assets/img/android/auditor.svg#only-light){ align=right }
    ![Auditor logo](assets/img/android/auditor-dark. vg#only-dark){ align=right }
    
    **Auditor** è un'app che sfrutta le funzionalità di sicurezza hardware per fornire il monitoraggio dell'integrità del dispositivo per [dispositivi supportati](https://attestation.app/about#device-support). Attualmente funziona solo con GrapheneOS e con il sistema operativo originale del dispositivo.
    
    [:octicons-home-16: Pagina principale](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://attestation.app/about){ .card-link title=Documentazione}
    [:octicons-code-16:](https://attestation.app/source){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://attestation.app/donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Auditor/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Auditor esegue l'attestazione e il rilevamento delle intrusioni:

- Utilizzando un [modello Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) tra un *revisore* e un *oggetto verificato*, la coppia stabilisce una chiave privata nel [keystore dell'hardware](https://source.android.com/security/keystore/) del *revisore*.
- Il *revisore* può essere un'altra istanza dell'applicazione Auditor o il [Remote Attestation Service](https://attestation.app).
- Il *revisore* registra lo stato attuale e la configurazione dell'*oggetto verificato*.
- In caso di manomissione del sistema operativo dell'*oggetto verificato* dopo il completamento dell'accoppiamento, il revisore sarà a conoscenza della modifica dello stato e delle configurazioni del dispositivo.
- Verrai avvisato della modifica.

Al servizio di attestazione non vengono inviate informazioni d'identificazione personale. Ti consigliamo di registrarti con un account anonimo e di attivare l'attestazione remota per un monitoraggio continuo.

Se il proprio [modello di minaccia](basics/threat-modeling.md) richiede privacy, potresti considerare l'utilizzo di [Orbot](tor.md#orbot) o di una VPN per nascondere il proprio indirizzo IP al servizio di attestazione. Per assicurarsi che l'hardware e il sistema operativo siano autentici, [esegui l'attestazione locale](https://grapheneos.org/install/web#verifying-installation) subito dopo l'installazione del dispositivo e prima di qualsiasi connessione a Internet.

### Secure Camera

!!! recommendation

    ![Secure camera logo](assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Secure camera logo](assets/img/android/secure_camera-dark. vg#only-dark){ align=right }
    
      **Secure Camera** è un'app per fotocamera incentrata sulla privacy e sulla sicurezza che può catturare immagini, video e codici QR. Le estensioni del vendor CameraX (Ritratto, HDR, Visione Notturna, Ritocco del Viso e Auto) sono supportate su dispositivi disponibili.
    
    [:octicons-repo-16: Repository](https://github.com/GrapheneOS/Camera){ .md-button .md-button--primary }
    [:octicons-info-16:](https://grapheneos.org/usage#camera){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/GrapheneOS/Camera){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Camera/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Le principali funzionalità di privacy incluse:

- Rimozione automatica dei metadati [Exif](https://it.wikipedia.org/wiki/Exchangeable_image_file_format) (attivata in modo predefinito)
- Utilizzo della nuova API [Media](https://developer.android.com/training/data-storage/shared/media), pertanto non è richiesta [l'autorizzazione per tutti i file](https://developer.android.com/training/data-storage)
- L'autorizzazione al microfono non è necessaria, a meno che non si voglia registrare l'audio

!!! note

    Attualmente i metadati non vengono eliminati dai file video, ma la funzione è in sviluppo.
    
    I metadati sull'orientamento dell'immagine non vengono eliminati. Se attivi la posizione (in Secure Camera), anche questa **non** verrà rimossa. Se vuoi eliminarla in un secondo momento, dovrai usare un'app esterna come [ExifEraser](data-redaction.md#exiferaser).

### Secure PDF Viewer

!!! recommendation

    ![Secure PDF Viewer logo](assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![Secure PDF Viewer logo](assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }
    
    **Secure PDF Viewer** è un visualizzatore di PDF basato su [pdf.js](https://it.wikipedia.org/wiki/PDF.js) che non richiede alcuna autorizzazione. Il PDF viene inserito in una [webview](https://developer.android.com/guide/webapps/webview) [sandboxed](https://it.wikipedia.org/wiki/Sandbox). Ciò significa che non richiede direttamente l'autorizzazione per accedere a contenuti o file.
    
    [Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) viene utilizzato per imporre che le proprietà JavaScript e di stile all'interno della WebView siano interamente di contenuto statico.
    
    [:octicons-repo-16: Repository](https://github.com/GrapheneOS/PdfViewer){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/GrapheneOS/PdfViewer){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

## Ottenere le applicazioni

### Apps di GrapheneOS

L'app store di GrapheneOS è disponibile su [GitHub](https://github.com/GrapheneOS/Apps/releases). Supporta Android 12 e versioni successive ed è in grado di aggiornarsi da solo. L'app store contiene applicazioni standalone realizzate dal progetto GrapheneOS, come [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera) e [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). Se stai cercando queste applicazioni, ti consigliamo vivamente di scaricarle dal distributore di app di GrapheneOS invece che dal Play Store, in quanto le app presenti nel loro distributore sono firmate dal progetto GrapheneOS con una firma propria a cui Google non ha accesso.

### Aurora Store

Google Play Store richiede un account Google per l'accesso, il che non è un bene per la privacy. È possibile ovviare a questo problema utilizzando un client alternativo, come Aurora Store.

F-Droid è spesso consigliato come alternativa a Google Play, in particolare nella comunità della privacy. recommendation

    ![Aurora Store logo](assets/img/android/aurora-store.webp){ align=right }
    
    **Aurora Store** è un client di Google Play Store che non richiede un account Google, Google Play Services o microG per scaricare le app.
    
    [:octicons-home-16: Pagina principale](https://auroraoss.com/){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/AuroraOSS/AuroraStore){ .card-link title="Codice sorgente" }.
    
    ??? downloads
    
        - [:simple-gitlab: GitLab](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

Aurora Store non consente di scaricare applicazioni a pagamento con la funzione di account anonimo. Puoi facoltativamente accedere con il tuo account Google in Aurora Store per scaricare le app che hai acquistato, il che dà accesso a Google all'elenco delle app che hai installato, ma puoi comunque trarre vantaggio dal fatto di non richiedere il client Google Play completo e i servizi Google Play o microG sul tuo dispositivo.

### Manualmente con le notifiche RSS

Per le app pubblicate su piattaforme come GitHub e GitLab, potresti aggiungere un feed RSS al tuo [aggregatore di notizie](/news-aggregators) che ti aiuterà a tenere traccia delle nuove versioni.

![APK da RSS](./assets/img/android/rss-apk-light.png#only-light) ![APK da RSS](./assets/img/android/rss-apk-dark.png#only-dark) ![Modifiche APK](./assets/img/android/rss-changes-light.png#only-light) ![Modifiche APK](./assets/img/android/rss-changes-dark.png#only-dark)

#### GitHub

Su GitHub, usando [Secure Camera](#secure-camera) come esempio, si dovrebbe navigare alla sua [pagina releases](https://github.com/GrapheneOS/Camera/releases) e aggiungere `.atom` all'URL:

`https://github.com/GrapheneOS/Camera/releases.atom`

#### GitLab

Su GitLab, usando [Aurora Store](#aurora-store) come esempio, si dovrebbe navigare al [repository del progetto](https://gitlab.com/AuroraOSS/AuroraStore) e aggiunge `/-/tags?format=atom` all'URL:

`https://gitlab.com/AuroraOSS/AuroraStore/-/tags?format=atom`

#### Verifica delle impronte digitali degli APK

Se scarichi i file APK da installare manualmente, è possibile verificarne la firma con lo strumento [`apksigner`](https://developer.android.com/studio/command-line/apksigner), che fa parte dei [build-tools](https://developer.android.com/studio/releases/build-tools) di Android.

1. Installa [Java JDK](https://www.oracle.com/java/technologies/downloads/).

2. Scarica gli [strumenti da riga di comando di Android Studio](https://developer.android.com/studio#command-tools).

3. Estrai l'archivio scaricato:

    ```bash
    unzip commandlinetools-*.zip
    cd cmdline-tools
    ./bin/sdkmanager --sdk_root=./ "build-tools;29.0.3"
    ```

4. Esegui il comando di verifica della firma:

    ```bash
    ./build-tools/29.0.3/apksigner verify --print-certs ../Camera-37.apk
    ```

5. Gli hash risultanti possono poi essere confrontati con un'altra fonte. Alcuni sviluppatori, come per Signal, [mostrano le impronte digitali](https://signal.org/android/apk/) sul loro sito web.

    ```bash
    Signer #1 certificate DN: CN=GrapheneOS
    Signer #1 certificate SHA-256 digest: 6436b155b917c2f9a9ed1d15c4993a5968ffabc94947c13f2aeee14b7b27ed59
    Signer #1 certificate SHA-1 digest: 23e108677a2e1b1d6e6b056f3bb951df7ad5570c
    Signer #1 certificate MD5 digest: dbbcd0cac71bd6fa2102a0297c6e0dd3
    ```

### F-Droid

![Logo di F-Droid](assets/img/android/f-droid.svg){ align=right width=120px }

==**Non** raccomandiamo attualmente F-Droid come metodo per ottenere applicazioni.== F-Droid è spesso raccomandato come alternativa a Google Play, in particolare nelle comunità della privacy. La possibilità di aggiungere repository di terze parti e di non essere confinati nel giardino recintato di Google ne ha determinato la popolarità. F-Droid ha inoltre [build riproducibili](https://f-droid.org/it/docs/Reproducible_Builds/) per alcune applicazioni ed è dedicato al software libero e open-source. Tuttavia, ci sono [problemi notevoli](https://wonderfall.dev/fdroid-issues/) con il client ufficiale F-Droid, il loro controllo di qualità e il modo in cui costruiscono, firmano e consegnano i pacchetti.

A causa del processo di costruzione delle app, le applicazioni presenti nel repository ufficiale di F-Droid sono spesso in ritardo con gli aggiornamenti. Inoltre i manutentori di F-Droid riutilizzano gli ID dei pacchetti mentre firmano le applicazioni con le proprie chiavi, il che non è l'ideale perché conferisce al team di F-Droid la massima fiducia.

Altri popolari repository di terze parti, come [IzzyOnDroid](https://apt.izzysoft.de/fdroid/), alleviano alcuni di questi problemi. Il repository IzzyOnDroid estrae le build direttamente da GitHub ed è la seconda scelta migliore dopo i repository degli sviluppatori. Tuttavia, non è una cosa che possiamo raccomandare, poiché le applicazioni sono tipicamente [rimosse](https://github.com/vfsfitvnm/ViMusic/issues/240#issuecomment-1225564446) da quel repository quando arrivano al repository principale di F-droid. Sebbene ciò abbia senso (dato che l'obiettivo di questo particolare repository è ospitare le applicazioni prima che vengano accettate nel repository principale di F-Droid), ti può lasciare con le applicazioni installate senza ricevere più aggiornamenti.

Detto questo, i repository [F-droid](https://f-droid.org/en/packages/) e [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) ospitano innumerevoli applicazioni, quindi possono essere uno strumento utile per cercare e scoprire applicazioni open-source che si possono poi scaricare tramite Play Store, Aurora Store o ottenendo l'APK direttamente dallo sviluppatore. È importante tenere presente che alcune applicazioni presenti in questi repository non sono state aggiornate da anni e possono fare affidamento su librerie non supportate, costituendo un potenziale rischio per la sicurezza. Quando cerchi nuove applicazioni con questo metodo, è bene usare il proprio giudizio.

!!! note

    In alcuni rari casi, lo sviluppatore di un'applicazione la distribuisce solo attraverso F-droid ([Gadgetbridge](https://gadgetbridge.org/) ne è un esempio). Se hai davvero bisogno di un'applicazione del genere, ti consigliamo di utilizzare [Neo Store](https://github.com/NeoApplications/Neo-Store/) al posto dell'applicazione ufficiale di F-droid per ottenerla.

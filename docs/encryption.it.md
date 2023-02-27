---
title: "Software di crittografia"
icon: material/file-lock
---

La crittografia dei dati è l'unico modo per controllare chi può accedervi. Se al momento non stai utilizzando software per la crittografia del tuo hard disk, delle email, o dei file, dovresti scegliere una delle seguenti opzioni.

## Multipiattaforma

Le opzioni qui elencate sono multipiattaforma e ottime per la creazione di backup crittografati dei tuoi dati.

### Cryptomator (Cloud)

!!! recommendation

    ![Cryptomator logo](assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** è una soluzione per la crittografia progettata per salvare privatamente i file di qualsiasi provider cloud. Ti permette di creare cassaforti che sono memorizzate su un'unità di archiviazione virtuale, il cui contenuto è crittografato e sincronizzato con i tuoi provider di cloud storage.
    
    [:octicons-home-16: Pagina principale](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://docs.cryptomator.org/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://cryptomator.org/donate/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
        - [:simple-android: Android](https://cryptomator.org/android)
        - [:simple-windows11: Windows](https://cryptomator.org/downloads)
        - [:simple-apple: macOS](https://cryptomator.org/downloads)
        - [:simple-linux: Linux](https://cryptomator.org/downloads)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

Cryptomator utilizza la crittografia AES-256 per criptare sia i file che i nomi dei file. Cryptomator non è in grado di criptare metadati come i timestamp di accesso, modifica e creazione, né il numero e la dimensione di file e cartelle.

Alcune librerie crittografiche di Cryptomator sono state [revisionate](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) da Cure53. Alcune delle librerie sottoposte a verifica sono: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) e [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). Non è stata controllata [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), che è una libreria usata da Cryptomator per iOS.

La documentazione di Cryptomator descrive più nel dettaglio [i suoi obiettivi di sicurezza](https://docs.cryptomator.org/en/latest/security/security-target/), [l'architettura di sicurezza](https://docs.cryptomator.org/en/latest/security/architecture/), e [le migliori pratiche](https://docs.cryptomator.org/en/latest/security/best-practices/) per l'utilizzo.

### Picocrypt (File)

!!! recommendation

    ![Picocrypt logo](assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** è un strumento semplice e di piccole dimensioni che fornisce tecniche di crittografia moderna. Utilizza il cifrario sicuro XChaCha20 e la funzione di derivazione delle chiavi Argon2id per garantire un alto livello di sicurezza. Utilizza inoltre i moduli standard x/crypto di Go per le sue funzionalità di crittografia.
    
    [:octicons-repo-16: Repository](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### VeraCrypt (Disco)

!!! recommendation

    ![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** è un software di utilità gratuito, disponibile in formato sorgente, utilizzato per crittografare al volo. Permette di creare un disco virtuale crittografato all'interno di un file, crittografare una partizione o interi dispositivi di archiviazione con autenticazione pre-avvio.
    
    [:octicons-home-16: Pagina principale](https://veracrypt.fr){ .md-button .md-button--primary }
    [:octicons-info-16:](https://veracrypt.fr/en/Documentation.html){ .card-link title=Documentazione}
    [:octicons-code-16:](https://veracrypt.fr/code/){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)

VeraCrypt è un fork del progetto abbandonato TrueCrypt. A detta degli sviluppatori, sono stati implementati miglioramenti sulla sicurezza e i problemi sollevati dalla inziale verifica di TrueCrypt sono stati affrontati.

Quando utilizzi la crittografia di VeraCrypt, hai la possibilità di scegliere tra diverse [funzioni di hash](https://it.wikipedia.org/wiki/Funzione_di_hash). Suggeriamo di selezionare **unicamente** [SHA-512](https://it.wikipedia.org/wiki/Secure_Hash_Algorithm) e il cifrario a blocchi [AES](https://it.wikipedia.org/wiki/Advanced_Encryption_Standard).

TrueCrypt è stato [sottoposto ad audit un certo numero di volte](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits); anche VeraCrypt è stato [verificato separatamente](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## Crittografia dell'intero disco del sistema operativo

I sistemi operativi moderni includono la [FDE](https://en.wikipedia.org/wiki/Disk_encryption) e utilizzeranno un [cryptoprocessor sicuro](https://it.wikipedia.org/wiki/Cryptoprocessor).

### BitLocker

!!! recommendation

    ![BitLocker logo](assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** è il programma di crittografia completa del volume integrato a Microsoft Windows. Il principale motivo per cui lo consigliamo è il suo [uso del TPM Trusted Platform Module)](https://docs.microsoft.com/it-it/windows/security/information-protection/tpm/how-windows-uses-the-tpm). La società di analisi forense [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft) ne ha scritto al riguardo in [Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [:octicons-info-16:](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentazione}

BitLocker è [supportato solo](https://support.microsoft.com/it-it/windows/abilitare-la-crittografia-dei-dispositivi-0c453637-bc88-5f74-5105-741561aae838) sulle edizioni Pro, Enterprise ed Education di Windows. Può essere attivato sulle edizioni Home, a condizione che soddisfino i prerequisiti.

??? example "Attivare BitLocker su Windows Home"

    Per abilitare BitLocker sull'edizione "Home" di Windows è necessario che le partizioni siano formattate con una [Tabella di Partizione GUID](https://en.wikipedia.org/wiki/GUID_Partition_Table) e che abbiano un modulo TPM (v1.2, 2.0+) dedicato.

    1. Aprire un prompt dei comandi e verificare il formato della tabella delle partizioni dell'unità con il seguente comando. Dovreste vedere "**GPT**" elencato sotto "Stile partizione":

        ```
        powershell Get-Disk
        ```

    2. Esegui questo comando (in un prompt dei comandi di amministrazione) per verificare la versione del TPM. Dovresti vedere `2.0` o `1.2` elencati accanto a `SpecVersion`:

        ```
        powershell Get-Disk 0 | findstr GPT && echo This is a GPT system disk!
        ```

    3. Accedi alle [Opzioni di Avvio Avanzate](https://support.microsoft.com/it-it/windows/opzioni-di-avvio-avanzate-inclusa-la-modalit%C3%A0-provvisoria-b90e7808-80b5-a291-d4b8-1a1af602b617). È necessario riavviare il sistema premendo il tasto F8 prima dell'avvio di Windows ed entrare nel *prompt dei comandi* in **Risoluzione dei problemi** → **Opzioni avanzate** → **Prompt dei comandi**.

    4. Accedi con il tuo account admin e digita questo nel prompt dei comandi per avviare la cifratura:

        ```
        manage-bde -on c: -used
        ```

    5. Chiudi il prompt dei comandi e continua l'avvio di Windows normalmente.

    6. Apri il prompt dei comandi con privilegio di amministratore ed esegui i seguenti comandi:

        ```
        manage-bde c: -protectors -add -rp -tpm
    manage-bde -protectors -enable c:
    manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! important
   
        Esegui il backup di `BitLocker-Recovery-Key.txt` sul desktop in un dispositivo di archiviazione separato. La perdita di questo codice di recupero può comportare la perdita dei dati.

### FileVault

!!! recommendation

    ![FileVault logo](assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** è la soluzione per la crittografia di volumi on-the-fly integrata in macOS. FileVault è consigliata perché [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) le funzionalità di sicurezza hardware presenti su un SoC in silicio o un T2 Security Chip di Apple.
    
    [:octicons-info-16:](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac){ .card-link title=Documentazione}

Consigliamo di memorizzare una chiave di ripristino locale in un luogo sicuro, anziché utilizzare l'account iCloud per il ripristino.

### Linux Unified Key Setup

!!! recommendation

    ![LUKS logo](assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS** è il metodo di FDE (full-disk encryption) predefinito per Linux. Può essere usato per cifrare volumi completi, partizioni o creare container crittografati.
    
    [:octicons-home-16: Homepage](https://gitlab.com/cryptsetup/cryptsetup/-/blob/main/README.md){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home){ .card-link title=Documentazione}
    [:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup/){ .card-link title="Codice Sorgente" }

??? example "Creazione e apertura di container criptati"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### Apertura di contenitori criptati
    Consigliamo di aprire container e volumi con `udisksctl` poiché utilizza [Polkit](https://it.wikipedia.org/wiki/PolicyKit). La maggior parte dei file manager, tra cui quelli inclusi negli ambienti desktop maggiormente diffusi, posso sbloccare file crittografati. Strumenti come [udiskie](https://github.com/coldfix/udiskie) possono essere eseguiti nella barra delle applicazioni e forniscono un'utile interfaccia utente.
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl unlock -b /dev/loop0
    ```

!!! note "Ricorda di eseguire il backup delle intestazioni dei volumi"

    Consigliamo di eseguire sempre il [back up delle intestazioni LUKS](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) in caso di guasto parziale dell'unità. Ciò può essere fatto con:

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

## Basati sul browser

La crittografia browser-based può essere utile quando è necessario cifrare un file ma non è possibile installare un software o delle applicazioni sul dispositivo.

### hat.sh

!!! recommendation

    ![hat.sh logo](assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![hat.sh logo](assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }
    
    **Hat.sh** è una web application che fornisce una crittografia dei file lato client nel browser. Può anche essere self-hosted ed è utile se è necessario crittografare un file ma non è possibile installare un software sul dispositivo a causa delle politiche organizzative.
    
    [:octicons-globe-16: Sito web](https://hat.sh){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://hat.sh/about/){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://hat.sh/about/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/sh-dv/hat.sh){ .card-link title="Codice Sorgente" }
    :octicons-heart-16:{ .card-link title="Le modalità per le donazioni possono essere trovate al fondo del sito" }

## Linea di comando

Gli strumenti con interfacce a riga di comando sono utili per integrare [script di shells](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

!!! recommendation

    ![Kryptor logo](assets/img/encryption-software/kryptor.png){ align=right }
    
    **Kryptor** è uno strumenti gratuito e open-source per la crittografia e la firma dei file che utilizza algoritmi di cifratura moderni e sicuri. Punta a essere una versione migliorata di[age](https://github.com/FiloSottile/age) e [Minisign](https://jedisct1.github.io/minisign/) per fornire un'alternativa semplice a GPG.
    
    [:octicons-home-16: Homepage](https://www.kryptor.co.uk){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.kryptor.co.uk/features#privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.kryptor.co.uk/tutorial){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.kryptor.co.uk/#donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.kryptor.co.uk)
        - [:simple-apple: macOS](https://www.kryptor.co.uk)
        - [:simple-linux: Linux](https://www.kryptor.co.uk)

### Tomb

!!! recommendation

    ![Tomb logo](assets/img/encryption-software/tomb.png){ align=right }
    
    **Tomb** è un wrapper di shell a riga di comando per LUKS. Supporta la steganografia tramite [strumenti di terze parti](https://github.com/dyne/Tomb#how-does-it-work).
    
    [:octicons-home-16: Pagina principale](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/dyne/Tomb/wiki){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://www.dyne.org/donate){ .card-link title=Contribuisci }

## OpenPGP

OpenPGP è talvolta necessario per compiti specifici, come la firma digitale e la crittografia delle e-mail. PGP ha molte funzionalità ed è [complesso](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html)visto che è in circolazione da molto tempo. Per task come firmare o criptare i file, suggeriamo le opzioni di cui sopra.

Quando cripti con PGP, puoi configurare diverse opzioni nel file `gpg.conf`. Raccomandiamo di attenersi alle opzioni standard specificate nella [FAQ per utenti di GnuPG](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

!!! tip "Utilizzare future-default quando si genera una chiave"

    Quando si [generano le chiavi](https://www.gnupg.org/gph/en/manual/c14.html) suggeriamo di usare il comando 'future-default', che indica a GnuPG di usare metodi di crittografia moderna come [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) e [Ed25519](https://ed25519.cr.yp.to/):

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### GNU Privacy Guard

!!! recommendation

    ![GNU Privacy Guard logo](assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG** è un'alternativa con licenza GPL alla suite PGP per software crittografici. GnuPG è compliant a [RFC 4880](https://tools.ietf.org/html/rfc4880), che è l'attuale specifica IETF di OpenPGP. Il progetto GnuPG ha lavorato a una [bozza aggiornata](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) nel tentativo di modernizzare OpenPGP. GnuPG fa parte del progetto software Free Software Foundation di GNU ed ha ricevuto un'importante [finanziamento](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) dal governo tedesco.
    
    [:octicons-home-16: Pagina principale](https://gnupg.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gnupg.org/privacy-policy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://gnupg.org/documentation/index.html){ .card-link title=Documentazione}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)
        - [:simple-apple: macOS](https://gpgtools.org)
        - [:simple-linux: Linux](https://gnupg.org/download/index.html#binary)

### GPG4win

!!! recommendation

    ![GPG4win logo](assets/img/encryption-software/gpg4win.svg){ align=right }
    
    **GPG4win** è un pacchetto per Windows di [Intevation e g10 Code](https://gpg4win.org/impressum.html). Comprende [diversi strumenti](https://gpg4win.org/about.html) che possono aiutare nell'utilizzo di GPG su Microsoft Windows. Il progetto è stato avviato e in origine [finanziato dal](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) Federal Office per l'Information Security (BSI) tedesco nel 2005.
    
    [:octicons-home-16: Pagina principale](https://gpg4win.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpg4win.org/privacy-policy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://gpg4win.org/documentation.html){ .card-link title=Documentazione}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://gpg4win.org/donate.html){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)

### GPG Suite

!!! note

    Suggeriamo [Canary Mail](email-clients.md#canary-mail) per utilizzare PGP con le email su dispositivi iOS.

!!! recommendation

    ![GPG Suite logo](assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite** fornisce il supporto OpenPGP per [Apple Mail](email-clients.md#apple-mail) e macOS.
    
    Si consiglia di dare un'occhiata ai [primi passi](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) e alle [conoscenze di base](https://gpgtools.tenderapp.com/kb) come supporto.
    
    [:octicons-home-16: Pagina principale](https://gpgtools.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpgtools.org/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://gpgtools.tenderapp.com/kb){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-apple: macOS](https://gpgtools.org)

### OpenKeychain

!!! recommendation

    ![OpenKeychain logo](assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** è un'implementazione Android di GnuPG. È comunementa richiesta da client mail come [K-9 Mail](email-clients.md#k-9-mail) e [FairEmail](email-clients.md#fairemail) e da alltre applicazioni Android per fornire supporto alla crittografia. Cure53 ha completato un'[ispezione di sicurezza](https://www.openkeychain.org/openkeychain-3-6) di OpenKeychain 3.6 nell'ottobre 2015. Dettagli tecnici riguardo all'audit e alle soluzioni di OpenKeychain possono essere trovate [qui](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [:octicons-home-16: Pagina principale](https://www.openkeychain.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.openkeychain.org/help/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://www.openkeychain.org/faq/){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Codice Sorgente" }
    :octicons-heart-16:{ .card-link title="Le donazioni possono essere fatte nell'app" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

## Criteri

**Si noti che non siamo affiliati a nessuno dei progetti che raccomandiamo.** Oltre a [i nostri criteri standard](about/criteria.md), abbiamo sviluppato una chiaro insieme di requisiti che ci permettono di fornire raccomandazioni obiettive. Suggeriamo di familiarizzare con questo elenco prima di scegliere di utilizzare un progetto e di condurre le tue ricerche per assicurarti che la scelta sia giusta per te.

!!! example "Questa sezione è nuova"

    Stiamo lavorando per stabilire criteri definiti per ogni sezione del nostro sito, e ciò potrebbe essere soggetto a modifiche. Se hai domande sui nostri criteri, per favore [chiedi sul nostro forum](https://discuss.privacyguides.net/latest) e non dare per scontato che non abbiamo preso in considerazione qualcosa quando formuliamo i nostri consigli se non è elencato qui. Sono molti i fattori presi in considerazione e discussi quando raccomandiamo un progetto e documentare ogni singolo fattore è un lavoro in corso.

### Requisiti minimi

- Le applicazioni di crittografia multipiattaforma devono essere open-source.
- Le app di crittografia dei file devono supportare la decodifica su Linux, macOS e Windows.
- Le applicazioni per la crittografia dei dischi esterni devono supportare la decodifica su Linux, macOS e Windows.
- Le applicazioni di crittografia del disco interno (OS) devono essere multipiattaforma o integrate nel sistema operativo in modo nativo.

### Caso migliore

I nostri criteri ottimali rappresentano ciò che vorremmo vedere dal progetto perfetto in questa categoria. Le nostre raccomandazioni potrebbero non includere tutte o alcune di queste funzionalità, ma quelle che le includono potrebbero avere una posizione più alta rispetto ad altre in questa pagina.

- Le applicazioni di crittografia del sistema operativo (FDE) dovrebbero utilizzare una protezione hardware come TPM o Secure Enclave.
- Le applicazioni per la crittografia dei file devono avere un supporto di primo o terzo livello per le piattaforme mobili.

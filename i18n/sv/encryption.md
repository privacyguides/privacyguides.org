---
title: "Programvara för kryptering"
icon: material/file-lock
description: Kryptering av data är det enda sättet att kontrollera vem som har tillgång till dem. These tools allow you to encrypt your emails and any other files.
---

Kryptering av data är det enda sättet att kontrollera vem som har tillgång till dem. Om du för närvarande inte använder krypteringsprogram för din hårddisk, e-post eller filer bör du välja ett alternativ här.

## Multiplattform

De alternativ som anges här är flera plattformar och bra för att skapa krypterade säkerhetskopior av dina data.

### Cryptomator (moln)

!!! recommendation

    ![Cryptomators logotyp](assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** är en krypteringslösning som är utformad för privat lagring av filer till alla molnleverantörer. Det låter dig skapa valv som lagras på en virtuell enhet, vars innehåll krypteras och synkroniseras med din molnlagringsleverantör.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.cryptomator.org/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://cryptomator.org/donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
        - [:simple-android: Android](https://cryptomator.org/android)
        - [:simple-windows11: Windows](https://cryptomator.org/downloads)
        - [:simple-apple: macOS](https://cryptomator.org/downloads)
        - [:simple-linux: Linux](https://cryptomator.org/downloads)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

Cryptomator använder AES-256-kryptering för att kryptera både filer och filnamn. Cryptomator kan inte kryptera metadata som åtkomst, ändring och skapande tidsstämplar, eller antalet och storleken på filer och mappar.

Vissa kryptografiska bibliotek från Cryptomator har granskats [av Cure53](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44). De granskade biblioteken omfattar följande: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) och [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). Granskningen omfattade inte [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), som är ett bibliotek som används av Cryptomator för iOS.

I Cryptomators dokumentation beskrivs närmare det avsedda [säkerhetsmålet](https://docs.cryptomator.org/en/latest/security/security-target/), [säkerhetsarkitektur](https://docs.cryptomator.org/en/latest/security/architecture/)och [bästa praxis](https://docs.cryptomator.org/en/latest/security/best-practices/) för användning.

### Picocrypt (Fil)

!!! recommendation

    ![Picocrypt-logotyp](assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** är ett litet och enkelt krypteringsverktyg som tillhandahåller modern kryptering. Picocrypt använder den säkra XChaCha20-chiffern och Argon2id-nyckelderivatfunktionen för att ge en hög säkerhetsnivå. Det använder Go standard x/crypto moduler för sina krypteringsfunktioner.
    
    [:octicons-repo-16: Repository](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-windows11: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### VeraCrypt (disk)

!!! recommendation

    ![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** är ett källkod-tillgängligt freeware-verktyg som används för on-the-fly kryptering. Det kan skapa en virtuell krypterad disk i en fil, kryptera en partition eller kryptera hela lagringsenheten med autentisering före start.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://veracrypt.fr/code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-windows11: Windows](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)

VeraCrypt är en gaffel i det nedlagda TrueCrypt-projektet. Enligt utvecklarna har säkerhetsförbättringar genomförts och problem som togs upp vid den första TrueCrypt-kodgranskningen har åtgärdats.

När du krypterar med VeraCrypt kan du välja mellan olika hashfunktioner [](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). Vi föreslår att du **endast** väljer [SHA-512](https://en.wikipedia.org/wiki/SHA-512) och håller dig till [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) blockchiffer.

Truecrypt har granskats [ett antal gånger](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits), och VeraCrypt har också granskats [separat](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## Fullständig diskkryptering

Moderna operativsystem inkluderar [FDE](https://en.wikipedia.org/wiki/Disk_encryption) och har en [säker kryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

### BitLocker

!!! recommendation

    ![BitLocker-logotyp](assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** är den lösning för fullständig volymkryptering som ingår i Microsoft Windows. Den främsta anledningen till att vi rekommenderar den är att den [använder TPM] (https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft), ett företag som arbetar med kriminalteknik, har skrivit om det i [Understanding BitLocker TPM Protection] (https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [:octicons-info-16:](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentation}

BitLocker stöds endast av [](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) i Windows utgåvorna Pro, Enterprise och Education. Den kan aktiveras i Home-utgåvorna om de uppfyller förutsättningarna.

??? exempel "Aktivering av BitLocker på Windows Home"

    För att aktivera BitLocker i Windows Home-utgåvor måste du ha partitioner som är formaterade med en [GUID Partition Table] (https://en.wikipedia.org/wiki/GUID_Partition_Table) och ha en dedikerad TPM-modul (v1.2, 2.0+).

    1. Öppna en kommandotolk och kontrollera enhetens partitionstabellformat med följande kommando. Du bör se "**GPT**" listad under "Partition Style":

        ```
        powershell Get-Disk
        ```

    2. Kör det här kommandot (i en administratörskommandotolk) för att kontrollera din TPM-version. Du bör se `2.0` eller `1.2` bredvid `SpecVersion`:

        ```
        powershell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm
        ```

    3. Access [Avancerade startalternativ](https://support.microsoft.com/en-us/windows/advanced-startup-options-including-safe-mode-b90e7808-80b5-a291-d4b8-1a1af602b617). Du måste starta om och samtidigt trycka på F8-tangenten innan Windows startar och gå in i kommandotolken ** i **Felsökning** → **Avancerade alternativ** → **Kommandotolk**.

    4. Logga in med ditt administratörskonto och skriv detta i kommandotolken för att starta kryptering:

        ```
        manage-bde -on c: -used
        ```

    5. Stäng kommandotolken och fortsätt att starta upp till vanligt Windows.

    6. Öppna en administratörskommandotolk och kör följande kommandon:

        ```
        manage-bde c: -protectors -add -rp -tpm
        manage-bde -protectors -enable c:
        manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! tips
   
        Säkerhetskopiera `BitLocker-Recovery-Key.txt` på skrivbordet till en separat lagringsenhet. Förlust av denna återställningskod kan leda till förlust av data.

### FileVault

!!! recommendation

    ![FileVaults logotyp](assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** är en lösning för volymkryptering i farten som är inbyggd i macOS. FileVault rekommenderas eftersom det finns [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) maskinvarusäkerhetsfunktioner på ett Apple Silicon SoC- eller T2-säkerhetschip.
    
    [:octicons-info-16:](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac){ .card-link title=Documentation}

Vi rekommenderar att du lagrar en lokal återställningsnyckel på en säker plats i stället för att använda ditt iCloud-konto för återställning.

### Linux Unified Key Setup

!!! recommendation

    ![LUKS-logotyp](assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS** är standardmetoden för FDE för Linux. Den kan användas för att kryptera hela volymer, partitioner eller skapa krypterade behållare.
    
    [:octicons-home-16: Repository](https://github.com/Hackeralert/Picocrypt){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Hackeralert/Picocrypt){ .card-link title="Source Code" }
    [:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup){ .card-link title=Contribute }

??? exempel "Skapa och öppna krypterade behållare"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### Öppna krypterade behållare
    Vi rekommenderar att du öppnar behållare och volymer med `udisksctl` eftersom detta använder [Polkit](https://en.wikipedia.org/wiki/Polkit). De flesta filhanterare, t. ex. de som ingår i populära skrivbordsmiljöer, kan låsa upp krypterade filer. Verktyg som [udiskie](https://github.com/coldfix/udiskie) kan köras i systemfältet och ge ett användbart användargränssnitt.
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl låsa upp -b /dev/loop0
    ```

!!! note "Kom ihåg att säkerhetskopiera volymrubriker"

    Vi rekommenderar att du alltid [säkerhetskopierar dina LUKS-rubriker] (https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) om en del av enheten skulle gå sönder. Detta kan göras genom att:

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

## Webbläsarbaserad

Webbläsarbaserad kryptering kan vara användbar när du behöver kryptera en fil men inte kan installera programvara eller appar på enheten.

### hat.sh

!!! recommendation

    ![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** är ett källkod-tillgängligt freeware-verktyg som används för on-the-fly kryptering. Det kan också vara värd för sig själv och är användbart om du behöver kryptera en fil men inte kan installera någon programvara på din enhet på grund av organisationspolicyer.
    
    [:octicons-globe-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://hat.sh/about/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/sh-dv/hat.sh){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://github.com/sh-dv/hat.sh#donations/){ .card-link title=Contribute" }

## Kommandorad

Verktyg med kommandoradsgränssnitt är användbara för att integrera [skalskript](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

!!! recommendation

    ![Kryptor-logotyp](assets/img/encryption-software/kryptor.png){ align=right }
    
    ** Kryptor** är ett gratis och öppet källkodsverktyg för filkryptering och signering som använder moderna och säkra kryptografiska algoritmer. Det syftar till att vara en bättre version av [age](https://github.com/FiloSottile/age) och [Minisign](https://jedisct1.github.io/minisign/) för att ge ett enkelt, enklare alternativ till GPG.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.kryptor.co.uk/tutorial/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://www.kryptor.co.uk/#donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-windows11: Windows](https://www.kryptor.co.uk)
        - [:simple-apple: macOS](https://www.kryptor.co.uk)
        - [:simple-linux: Linux](https://www.kryptor.co.uk)

### Tomb

!!! recommendation

    ![Tomb-logotyp](assets/img/encryption-software/tomb.png){ align=right }
    
    * * Tomb * * är ett kommandoradsskal för LUKS. Den stöder steganografi via [verktyg från tredje part] (https://github.com/dyne/Tomb#how-does-it-work).
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.dyne.org/donate){ .card-link title=Contribute }

## OpenPGP

OpenPGP behövs ibland för specifika uppgifter som digital signering och kryptering av e-post. PGP har många funktioner och är [komplext](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) eftersom det har funnits länge. För uppgifter som signering eller kryptering av filer föreslår vi ovanstående alternativ.

Vid kryptering med PGP har du möjlighet att konfigurera olika alternativ i din `gpg.conf` -fil. Vi rekommenderar att du använder de standardalternativ som anges i [GnuPG user FAQ](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

!!! tips "Använd framtida standardvärden när du skapar en nyckel"

    När du [genererar nycklar] (https://www.gnupg.org/gph/en/manual/c14.html) föreslår vi att du använder kommandot `future-default`, eftersom detta kommer att instruera GnuPG att använda modern kryptografi som [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) och [Ed25519](https://ed25519.cr.yp.to/):

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### GNU Privacy Guard

!!! recommendation

    ![GNU Privacy Guard-logotypen](assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG * * är ett GPL-licensierat alternativ till PGP-paketet med kryptografisk programvara. GnuPG är kompatibel med [RFC 4880](https://tools.ietf.org/html/rfc4880), som är den aktuella IETF-specifikationen för OpenPGP. GnuPG-projektet har arbetat med ett [uppdaterat utkast](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) i ett försök att modernisera OpenPGP. GnuPG är en del av Free Software Foundations GNU-programvaruprojekt och har fått stora [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) från den tyska regeringen.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gnupg.org/documentation/index.html/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar    - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)    - [:simple-windows11: App Store](download.html)
        - [:simple-apple: Android]()
        - [:simple-linux: Windows]()
        - [ macOS]()
        - [ Linux]()
        - [ Flathub)

### GPG4win

!!! recommendation

    ![GPG4win-logotyp](assets/img/enkrypteringsprogram/gpg4win.svg){ align=right }
    
    **GPG4win** är ett paket för Windows från [Intevation and g10 Code] (https://gpg4win.org/impressum.html). Den innehåller [olika verktyg] (https://gpg4win.org/about.html) som kan hjälpa dig att använda GPG i Microsoft Windows. Projektet initierades och finansierades ursprungligen [av](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) Tysklands federala kontor för informationssäkerhet (BSI) 2005.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](documentation.html/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Källkod" }
    [:octicons-heart-16:](donate.html/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)

### GPG Suite

!!! anmärkning

    Vi rekommenderar [Canary Mail](email-clients.md#canary-mail) för att använda PGP med e-post på iOS-enheter.

!!! recommendation

    ![GPG Suite logo](assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite** ger OpenPGP-stöd för [Apple Mail](email-clients.md#apple-mail) och macOS.
    
    Vi rekommenderar att du tar en titt på deras [First steps] (https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) och [Knowledge base] (https://gpgtools.tenderapp.com/kb) för stöd.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gpgtools.tenderapp.com/kb/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-apple: Flathub](https://gpgtools.org)

### OpenKeychain

!!! recommendation

    ![OpenKeychain-logotyp](assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** är en Android-implementering av GnuPG. Det krävs vanligtvis av e-postklienter som [K-9 Mail](email-clients.md#k-9-mail) och [FairEmail](email-clients.md#fairemail) och andra Android-appar för att ge krypteringsstöd. Cure53 genomförde en [säkerhetsrevision] (https://www.openkeychain.org/openkeychain-3-6) av OpenKeychain 3.6 i oktober 2015. Tekniska detaljer om granskningen och OpenKeychains lösningar finns på [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.openkeychain.org/faq/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

### Minimikrav

- Cross-platform encryption apps must be open-source.
- File encryption apps must support decryption on Linux, macOS, and Windows.
- External disk encryption apps must support decryption on Linux, macOS, and Windows.
- Internal (OS) disk encryption apps must be cross-platform or built in to the operating system natively.

### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Operating System (FDE) encryption apps should utilize hardware security such as a TPM or Secure Enclave.
- File encryption apps should have first- or third-party support for mobile platforms.

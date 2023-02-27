---
title: "Encryptie Software"
icon: material/file-lock
---

Encryptie van gegevens is de enige manier om te controleren wie er toegang toe heeft. Als je momenteel geen encryptiesoftware gebruikt voor jouw harde schijf, e-mails of bestanden, moet je hier een optie kiezen.

## Multi-platform

De hier genoemde opties zijn multiplatform en zeer geschikt voor het maken van versleutelde back-ups van jouw gegevens.

### Cryptomator (Cloud)

!!! recommendation

    ![Cryptomator logo](assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** is een encryptie-oplossing die is ontworpen voor het privé opslaan van bestanden bij elke cloudprovider. Hiermee kunt u kluizen maken die worden opgeslagen op een virtuele schijf, waarvan de inhoud wordt gecodeerd en gesynchroniseerd met uw cloudopslagprovider.
    
    [:octicons-home-16: Homepage](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://docs.cryptomator.org/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://cryptomator.org/donate/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
        - [:simple-android: Android](https://cryptomator.org/android)
        - [:simple-windows11: Windows](https://cryptomator.org/downloads)
        - [:simple-apple: macOS](https://cryptomator.org/downloads)
        - [:simple-linux: Linux](https://cryptomator.org/downloads)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

Cryptomator maakt gebruik van AES-256 encryptie om zowel bestanden als bestandsnamen te versleutelen. Cryptomator kan geen metadata versleutelen, zoals tijdstempels voor toegang, wijziging en creatie, noch het aantal en de grootte van bestanden en mappen.

Sommige cryptografische bibliotheken van Cryptomator zijn [geaudit](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) door Cure53. De reikwijdte van de gecontroleerde bibliotheken omvat: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) en [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). De controle strekte zich niet uit tot [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), een bibliotheek die door Cryptomator voor iOS wordt gebruikt.

In de documentatie van Cryptomator worden de beoogde [beveiligingsdoelstelling](https://docs.cryptomator.org/en/latest/security/security-target/), [beveiligingsarchitectuur](https://docs.cryptomator.org/en/latest/security/architecture/), en [beste praktijken](https://docs.cryptomator.org/en/latest/security/best-practices/) voor gebruik nader toegelicht.

### Picocrypt (Bestand)

!!! recommendation

    ![Picocrypt logo](assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** is een klein en eenvoudig encryptieprogramma dat moderne encryptie biedt. Picocrypt gebruikt het veilige XChaCha20-cijfer en de Argon2id-sleutelafleidingsfunctie om een hoog niveau van veiligheid te bieden. Het gebruikt Go's standaard x/crypto modules voor zijn versleutelingsfuncties.
    
    [:octicons-repo-16: Repository](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-windows11: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### VeraCrypt (Schijf)

!!! recommendation

    ![VeraCrypt-logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt-logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** is een met broncode beschikbaar freeware hulpprogramma dat wordt gebruikt voor on-the-fly encryptie. Het kan een virtuele versleutelde schijf binnen een bestand maken, een partitie versleutelen of het gehele opslagapparaat versleutelen met pre-boot verificatie.
    
    [:octicons-home-16: Homepage](https://veracrypt.fr){ .md-button .md-button--primary }
    [:octicons-info-16:](https://veracrypt.fr/en/Documentation.html){ .card-link title=Documentatie}
    [:octicons-code-16:](https://veracrypt.fr/code/){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-windows11: Windows](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)

VeraCrypt is een vork van het beëindigde TrueCrypt-project. Volgens de ontwikkelaars zijn er beveiligingsverbeteringen doorgevoerd en zijn de problemen die bij de eerste controle van de TrueCrypt-code aan het licht zijn gekomen, aangepakt.

Bij het versleutelen met VeraCrypt heb je de keuze uit verschillende [hashfuncties](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). Wij raden je aan **alleen** [SHA-512](https://en.wikipedia.org/wiki/SHA-512) te selecteren en vast te houden aan het [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) blokcijfer.

Truecrypt is [een aantal keer gecontroleerd](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits), en VeraCrypt is ook [apart gecontroleerd](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## OS Volledige Schijfversleuteling

Moderne besturingssystemen omvatten [FDE](https://en.wikipedia.org/wiki/Disk_encryption) en zullen gebruik maken van een [beveiligde cryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

### BitLocker

!!! recommendation

    ![BitLocker-logo](assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** is de oplossing voor volledige volume-encryptie die met Microsoft Windows wordt meegeleverd. De belangrijkste reden waarom wij het aanbevelen is vanwege zijn [gebruik van TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft), een forensisch bedrijf, heeft er over geschreven in [Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [:octicons-info-16:](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentatie}

BitLocker is [alleen ondersteund](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) op Pro, Enterprise en Education edities van Windows. Het kan worden ingeschakeld op Home-edities, mits deze aan de voorwaarden voldoen.

??? example "BitLocker inschakelen op Windows Home"

    Om BitLocker in te schakelen op "Home"-edities van Windows, moet je partities hebben die zijn geformatteerd met een [GUID Partition Table](https://en.wikipedia.org/wiki/GUID_Partition_Table) en beschikken over een speciale TPM-module (v1.2, 2.0+).

    1. Open een opdrachtprompt en controleer de indeling van de partitietabel van jouw schijf met het volgende commando. Je zou "**GPT**" moeten zien staan onder "Partition Style":

        ```
        powershell Get-Disk
        ```

    2. Voer dit commando uit (in een admin commando prompt) om jouw TPM versie te controleren. Je zou `2.0` of `1.2` moeten zien staan naast `SpecVersion`:

        ```
        powershell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm
        ```

    3. Ga naar de [Geavanceerde opstartopties](https://support.microsoft.com/en-us/windows/advanced-startup-options-including-safe-mode-b90e7808-80b5-a291-d4b8-1a1af602b617). Je moet opnieuw opstarten terwijl je op de F8-toets drukt voordat Windows start en naar de *opdrachtprompt* gaat in **Problemen oplossen** → **Geavanceerde opties** → **Opdrachtprompt**.

    4. Log in met jouw admin-account en typ dit in de opdrachtprompt om de versleuteling te starten:

        ```
        manage-bde -on c: -used
        ```

    5. Sluit de opdrachtprompt en en start verder op naar de gewone Windows installatie.

    6. Open een admin commando prompt en voer de volgende commando's uit:

        ```
        manage-bde c: -protectors -add -rp -tpm
        manage-bde -protectors -enable c:
        manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! tip
   
        Back-up de `BitLocker-Recovery-Key.txt` op uw bureaublad naar een apart opslagapparaat. Het verlies van deze herstelcode kan leiden tot verlies van gegevens.

### FileVault

!!! recommendation

    ![FileVault-logo](assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** is de in macOS ingebouwde oplossing voor volumeversleuteling tijdens het filteren. FileVault wordt aanbevolen omdat het [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) hardware beveiligingsmogelijkheden biedt die aanwezig zijn op een Apple silicium SoC of T2 Security Chip.
    
    [:octicons-info-16:](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac){ .card-link title=Documentatie}

Wij raden je aan een lokale herstelsleutel op een veilige plaats op te slaan in plaats van uw iCloud-account te gebruiken voor herstel.

### Linux Unified Key Setup

!!! recommendation

    ![LUKS-logo](assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS** is de standaard FDE-methode voor Linux. Het kan worden gebruikt om volledige volumes of partities te versleutelen, of om versleutelde containers te maken.
    
    [:octicons-home-16: Homepage](https://gitlab.com/cryptsetup/cryptsetup/-/blob/main/README.md){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home){ .card-link title=Documentatie}
    [:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup/){ .card-link title="Broncode" }

??? example "Creëren en openen van versleutelde containers"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### Versleutelde containers openen
    We raden aan om containers en volumes te openen met `udisksctl`, omdat dit gebruik maakt van [Polkit](https://en.wikipedia.org/wiki/Polkit). De meeste bestandsbeheerders, zoals die van populaire desktopomgevingen, kunnen versleutelde bestanden ontgrendelen. Hulpprogramma's zoals [udiskie](https://github.com/coldfix/udiskie) kunnen in het systeemvak draaien en een nuttige gebruikersinterface bieden.
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl unlock -b /dev/loop0
    ```

!!! note "Vergeet niet een back-up te maken van de volumekoppen"

    Wij raden je aan altijd [een back-up te maken van uw LUKS-headers](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) in geval van een gedeeltelijke schijfstoring. Dit kan gedaan worden met:

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

## Browser-gebaseerd

Versleuteling via de browser kan handig zijn als je een bestand moet versleutelen, maar geen software of apps op jouw apparaat kunt installeren.

### hat.sh

!!! recommendation

    ![hat.sh logo](assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![hat.sh logo](assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }
    
    **Hat.sh** is een webapplicatie die veilige client-side versleuteling van bestanden in jouw browser biedt. Het kan ook zelf worden gehost en is handig als je een bestand moet versleutelen, maar geen software op jouw apparaat kunt installeren vanwege organisatorisch beleid.
    
    [:octicons-globe-16: Website](https://hat.sh){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://hat.sh/about/){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://hat.sh/about/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/sh-dv/hat.sh){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://github.com/sh-dv/hat.sh#donations){ .card-link title="Donatiemogelijkheden vindt u onderaan de website" }

## Command-line

Tools met command-line interfaces zijn handig voor het integreren van [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

!!! recommendation

    ![Kryptor logo](assets/img/encryption-software/kryptor.png){ align=right }
    
    **Kryptor** is een gratis en open-source programma voor het versleutelen en ondertekenen van bestanden dat gebruik maakt van moderne en veilige cryptografische algoritmen. Het beoogt een betere versie te zijn van [age](https://github.com/FiloSottile/age) en [Minisign](https://jedisct1.github.io/minisign/) om een eenvoudig, gemakkelijker alternatief voor GPG te bieden.
    
    [:octicons-home-16: Homepage](https://www.kryptor.co.uk){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.kryptor.co.uk/features#privacy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://www.kryptor.co.uk/tutorial){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://www.kryptor.co.uk/#donate){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-windows11: Windows](https://www.kryptor.co.uk)
        - [:simple-apple: macOS](https://www.kryptor.co.uk)
        - [:simple-linux: Linux](https://www.kryptor.co.uk)

### Tomb

!!! recommendation

    ![Tomb logo](assets/img/encryption-software/tomb.png){ align=right }
    
    **Tomb** is een is een command-line shell wrapper voor LUKS. Het ondersteunt steganografie via [hulpprogramma's van derden](https://github.com/dyne/Tomb#how-does-it-work).
    
    [:octicons-home-16: Homepage](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/dyne/Tomb/wiki){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://www.dyne.org/donate){ .card-link title=Bijdragen}

## OpenPGP

OpenPGP is soms nodig voor specifieke taken zoals het digitaal ondertekenen en versleutelen van e-mail. PGP heeft veel mogelijkheden en is [complex](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) omdat het al heel lang bestaat. Voor taken zoals het ondertekenen of versleutelen van bestanden, raden wij de bovenstaande opties aan.

Bij het versleutelen met PGP, heb je de optie om verschillende opties te configureren in het `gpg.conf` bestand. We raden aan om de standaard opties te gebruiken zoals gespecificeerd in de [GnuPG user FAQ](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

!!! tip "Gebruik toekomstige standaardwaarden bij het genereren van een sleutel"

    Bij het [genereren van sleutels](https://www.gnupg.org/gph/en/manual/c14.html) raden we aan het `future-default` commando te gebruiken omdat dit GnuPG zal instrueren moderne cryptografie te gebruiken zoals [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) en [Ed25519](https://ed25519.cr.yp.to/):

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### GNU Privacy Guard

!!! recommendation

    ![GNU Privacy Guard logo](assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG** is een GPL-gelicenseerd alternatief voor de PGP-suite van cryptografische software. GnuPG is in overeenstemming met [RFC 4880](https://tools.ietf.org/html/rfc4880), de huidige IETF-specificatie van OpenPGP. Het GnuPG-project heeft gewerkt aan een [bijgewerkt ontwerp](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) in een poging OpenPGP te moderniseren. GnuPG is een onderdeel van het GNU-softwareproject van de Free Software Foundation en heeft van de Duitse regering het belangrijke [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) ontvangen.
    
    [:octicons-home-16: Homepage](https://gnupg.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gnupg.org/privacy-policy.html){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://gnupg.org/documentation/index.html){ .card-link title=Documentatie}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)
        - [:simple-apple: macOS](https://gpgtools.org)
        - [:simple-linux: Linux](https://gnupg.org/download/index.html#binary)

### GPG4win

!!! recommendation

    ![GPG4win-logo](assets/img/encryption-software/gpg4win.svg){ align=right }
    
    **GPG4win** is een pakket voor Windows van [Intevation en g10 Code](https://gpg4win.org/impressum.html). Het bevat [diverse hulpmiddelen](https://gpg4win.org/about.html) die je kunnen helpen bij het gebruik van GPG op Microsoft Windows. Het project is in 2005 opgezet en oorspronkelijk [gefinancierd door](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) het Bundesamt für Informationssicherheit (BSI) van Duitsland.
    
    [:octicons-home-16: Homepage](https://gpg4win.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpg4win.org/privacy-policy.html){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://gpg4win.org/documentation.html){ .card-link title=Documentatie}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://gpg4win.org/donate.html){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)

### GPG Suite

!!! note

    We raden [Canary Mail](email-clients.md#canary-mail) aan voor het gebruik van PGP met e-mail op iOS-apparaten.

!!! recommendation

    ![GPG Suite-logo](assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite** biedt OpenPGP-ondersteuning voor [Apple Mail](email-clients.md#apple-mail) en macOS.
    
    Wij raden aan een kijkje te nemen in hun [Eerste stappen pagina](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) en [Kennisbank](https://gpgtools.tenderapp.com/kb) voor ondersteuning.
    
    [:octicons-home-16: Homepage](https://gpgtools.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpgtools.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gpgtools.tenderapp.com/kb){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-apple: macOS](https://gpgtools.org)

### OpenKeychain

!!! recommendation

    ![OpenKeychain-logo](assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** is een Android implementatie van GnuPG. Het wordt algemeen vereist door mail clients zoals [K-9 Mail](email-clients.md#k-9-mail) en [FairEmail](email-clients.md#fairemail) en andere Android apps om encryptie ondersteuning te bieden. Cure53 voltooide een [beveiligingsaudit](https://www.openkeychain.org/openkeychain-3-6) van OpenKeychain 3.6 in oktober 2015. Technische details over de audit en OpenKeychain's oplossingen zijn te vinden op [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [:octicons-home-16: Homepage](https://www.openkeychain.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.openkeychain.org/help/privacy-policy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://www.openkeychain.org/faq/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als u vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

### Minimum kwalificaties

- Cross-platform encryptie apps moeten open-source zijn.
- Apps voor bestandsversleuteling moeten ontsleuteling ondersteunen op Linux, macOS en Windows.
- Apps voor externe schijfversleuteling moeten ontsleuteling ondersteunen op Linux, macOS en Windows.
- Interne (OS) schijfversleutelingsapps moeten platformonafhankelijk zijn of ingebouwd zijn in het besturingssysteem.

### Beste geval

Onze best-case criteria geven aan wat wij zouden willen zien van het perfecte project in deze categorie. Het is mogelijk dat onze aanbevelingen geen of niet alle functies bevatten, maar degene die dat wel doen kunnen hoger gerangschikt worden dan andere op deze pagina.

- Toepassingen voor versleuteling van het besturingssysteem (FDE) moeten gebruik maken van hardwarebeveiliging zoals een TPM of Secure Enclave.
- Bestandsversleutelingsapps moeten ondersteuning van eerste of derde partijen hebben voor mobiele platforms.

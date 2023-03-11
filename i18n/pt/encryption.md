---
title: "Software de encriptação"
icon: material/file-lock
description: A encriptação de dados é a única forma de controlar quem pode acessá-los. These tools allow you to encrypt your emails and any other files.
---

A encriptação de dados é a única forma de controlar quem pode acessá-los. Se você não estiver usando software de criptografia para o seu disco rígido, e-mails ou arquivos, você deve escolher uma opção aqui.

## Multi-plataforma

As opções listadas aqui são multi-plataforma e excelentes para criar backups criptografados dos seus dados.

### VeraCrypt

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo VeraCrypt](/assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](/assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** é um utilitário freeware disponível na fonte, utilizado para encriptação on-the-fly. Ele pode criar um disco virtual encriptado dentro de um ficheiro, encriptar uma partição ou encriptar todo o dispositivo de armazenamento com autenticação pré-boot.
    
    [Visite veracrypt.fr](https://veracrypt.fr){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-apple: macOS](https://www.veracrypt.fr/pt/Downloads.html)
    - [:fontawesome-brands-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-git: Source](https://www.veracrypt.fr/code) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
        - [:simple-android: Android](https://cryptomator.org/android)
        - [:simple-windows11: Windows](https://cryptomator.org/downloads)
        - [:simple-apple: macOS](https://cryptomator.org/downloads)
        - [:simple-linux: Linux](https://cryptomator.org/downloads)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

O VeraCrypt é um garfo do projeto TrueCrypt descontinuado. De acordo com seus desenvolvedores, melhorias de segurança foram implementadas e questões levantadas pela auditoria inicial do código TrueCrypt foram abordadas.

Ao encriptar com VeraCrypt, o utilizador tem a opção de seleccionar de diferentes [funções hash](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). Sugerimos aos utilizadores **apenas** seleccione [SHA-512](https://en.wikipedia.org/wiki/SHA-512) e deve ficar com o [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) cifra de bloco. The audit did not extend to [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), which is a library used by Cryptomator for iOS.

Truecrypt foi [auditada várias vezes](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits) e VeraCrypt também foi [auditada separadamente](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

### Criptomador

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo do criptomator](/assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** facilita o carregamento de ficheiros para a nuvem num sistema de ficheiros virtual encriptado. [Visite cryptomator.org](https://cryptomator.org){ .md-button .md-button--primary } [Política de Privacidade](https://cryptomator.org/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://cryptomator.org/downloads)
    - [:fontawesome-brands-apple: macOS](https://cryptomator.org/downloads)
    - [:fontawesome-brands-linux: Linux](https://cryptomator.org/downloads)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.cryptomator.cryptomator)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
    - [:fontawesome-brands-android: F-Droid repo](https://cryptomator.org/android)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
    - [:fontawesome-brands-github: Source](https://github.com/cryptomator) It uses Go's standard x/crypto modules for its encryption features.
    
    [:octicons-repo-16: Repository](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### Picocrypt

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo Picocrypt](/assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** é uma pequena e simples ferramenta de encriptação que fornece uma encriptação moderna. Picocrypt usa a cifra segura XChaCha20 e a função de derivação da chave Argon2id para proporcionar um alto nível de segurança.
    
    Ele usa os módulos x/crypto padrão da Go para suas funcionalidades de criptografia. [Visite github.com](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-github: Source](https://github.com/HACKERALERT/Picocrypt)

VeraCrypt is a fork of the discontinued TrueCrypt project. According to its developers, security improvements have been implemented and issues raised by the initial TrueCrypt code audit have been addressed.

When encrypting with VeraCrypt, you have the option to select from different [hash functions](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). We suggest you **only** select [SHA-512](https://en.wikipedia.org/wiki/SHA-512) and stick to the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) block cipher.

Truecrypt has been [audited a number of times](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits), and VeraCrypt has also been [audited separately](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## Sistema operacional incluído Criptografia de disco completo (FDE)

Modern operating systems include [FDE](https://en.wikipedia.org/wiki/Disk_encryption) and will have a [secure cryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

### BitLocker

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![BitLocker logo](/assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** é a solução de encriptação de volume completo, em conjunto com o Microsoft Windows. O principal motivo pelo qual o recomendamos é devido ao seu [uso do TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft), uma empresa forense, escreveu sobre isso em [Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [Visite microsoft.com](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .md-button .md-button--primary }

BitLocker is [only supported](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) on Pro, Enterprise and Education editions of Windows. It can be enabled on Home editions provided that they meet the prerequisites.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Também, FileVault deve ser habilitado **após** uma instalação macOS completa como mais gerador de números pseudorandomais ([PRNG](https://support.apple.com/guide/security/random-number-generation-seca0c73a75b/web)) [entropia](https://en.wikipedia.org/wiki/Entropy_(computing)) estará disponível.

    Para habilitar o BitLocker nas edições "Home" do Windows, você deve ter partições formatadas com um módulo [GUID Partition Table](https://en.wikipedia.org/wiki/GUID_Partition_Table) e ter um [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module) (v1.2, 2.0 ) dedicado.

    1. Open a command prompt and check your drive's partition table format with the following command. You should see "**GPT**" listed under "Partition Style":

        ```
        powershell Get-Disk
        ```

    2. Run this command (in an admin command prompt) to check your TPM version. You should see `2.0` or `1.2` listed next to `SpecVersion`:

        ```
        powerhell Get-Disk 0 | findstr GPT && echo Este é um disco do sistema GPT!
        ```

    3. Access [Advanced Startup Options](https://support.microsoft.com/en-us/windows/advanced-startup-options-including-safe-mode-b90e7808-80b5-a291-d4b8-1a1af602b617). You need to reboot while pressing the F8 key before Windows starts and go into the *command prompt* in **Troubleshoot** → **Advanced Options** → **Command Prompt**.

    4. Login with your admin account and type this in the command prompt to start encryption:

        ```
        manage-bde -on c: -used
        ```

    5. Close the command prompt and continue booting to regular Windows.

    6. Feche o prompt de comando, e entre no PowerShell:

        ```
        manage-bde c: -protectores -add -rp -tpm
    manage-bde -protectores -enable c:
    manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! aviso
     Backup `BitLocker-Recovery-Key.txt` em um dispositivo de armazenamento separado.
   
        Backup `BitLocker-Recovery-Key.txt` on your Desktop to a separate storage device. Loss of this recovery code may result in loss of data.

### FileVault

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![FileVault logo](/assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** é a solução de encriptação de volume on-the-fly integrada em macOS. FileVault é recomendado porque [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) recursos de segurança de hardware presentes em um SoC de silício Apple ou Chip de Segurança T2.
    
    [Visite support.apple.com](https://support.apple.com/en-us/HT204837){ .md-button .md-button--primary }

We recommend storing a local recovery key in a secure place as opposed to using your iCloud account for recovery.

### Configuração da Chave Unificada Linux (LUKS)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![LUKS logo](/assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS*** é o método padrão de criptografia de disco completo para Linux. Ele pode ser usado para criptografar volumes completos, partições ou criar containers criptografados.
    
    [Visite gitlab.com](https://gitlab.com/cryptsetup/cryptsetup){ .md-button .md-button--primary }

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. example "Creating and opening encrypted containers"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### Abrindo recipientes encriptados
    Recomendamos abrir recipientes e volumes com `udisksctl`, pois este utiliza [Polkit](https://en.wikipedia.org/wiki/Polkit). A maioria dos gestores de ficheiros, tais como os incluídos em ambientes de desktop populares, consegue desbloquear ficheiros encriptados. Ferramentas como [udiskie](https://github.com/coldfix/udiskie) podem ser executadas na bandeja do sistema e fornecer uma interface de usuário útil.
    ```
    udisksctl loop-setup -f /path-tofile
    udisksctl unlock -b /dev/loop0
    ```

!!! note "Remember to back up volume headers"

    Recomendamos que você sempre [faça backup dos seus cabeçalhos LUKS](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) em caso de falha parcial da unidade. Isto pode ser feito com:

    ```
    cryptsetup luksHeaderBackup /device/device --header-backup-file /mnt/backup/file.img
    ```

## Navegador baseado em

Ferramentas com interfaces de linha de comando são úteis para intergrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### chapéu.sh

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![hat.sh logo](/assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![hat.sh logo](/assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }
    
    **Hat.sh*** é uma aplicação web que fornece criptografia segura de arquivos do lado do cliente no seu navegador. Também pode ser auto-hospedado e é útil se você precisar criptografar um arquivo, mas não pode instalar qualquer software no seu dispositivo, devido às políticas organizacionais.
    
    [Visite hat.sh](https://hat.sh){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/sh-dv/hat.sh)

## Linha de comando

Tools with command-line interfaces are useful for integrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo Kryptor](/assets/img/encryption-software/kryptor.png){ align=right }
    
    **Kryptor** é uma ferramenta de criptografia e assinatura de arquivos livre e de código aberto que faz uso de algoritmos criptográficos modernos e seguros. Pretende ser uma versão melhor de [age](https://github.com/FiloSottile/age) e [Minisign](https://jedisct1.github.io/minisign/) para fornecer uma alternativa simples e amigável ao GPG.
    
    [Visite kryptor.co.uk](https://www.kryptor.co.uk){ .md-button .md-button--primary } [Política de Privacidade](https://www.kryptor.co.uk/features#privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.kryptor.co.uk)
    - [:fontawesome-brands-apple: macOS](https://www.kryptor.co.uk)
    - [:fontawesome-brands-linux: Linux](https://www.kryptor.co.uk)
    - [:fontawesome-brands-github: Fonte](https://github.com/samuel-lucas6/Kryptor) downloads
    
        - [:simple-windows11: Windows](https://www.kryptor.co.uk)
        - [:simple-apple: macOS](https://www.kryptor.co.uk)
        - [:simple-linux: Linux](https://www.kryptor.co.uk)

### Túmulo

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Logotipo da Tumba](/assets/img/encryption-software/tomb.png){ align=right }
    
    **Tomb** é uma shell wrapper de linha de comando para LUKS. Ele suporta esteganografia através de [ferramentas de terceiros](https://github.com/dyne/Tomb#how-does-it-work).
    
    [Visite dyne.org](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/dyne/Tomb)

## OpenPGP

OpenPGP is sometimes needed for specific tasks such as digitally signing and encrypting email. Dica "Use padrões futuros ao gerar uma chave". For tasks such as signing or encrypting files, we suggest the above options.

When encrypting with PGP, you have the option to configure different options in your `gpg.conf` file. We recommend staying with the standard options specified in the [GnuPG user FAQ](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

!!! tip "Use future defaults when generating a key"

    Quando [gerando chaves](https://www.gnupg.org/gph/en/manual/c14.html) sugerimos utilizar o comando `future-default`, pois isto instruirá o GnuPG a utilizar criptografia moderna como [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) e [Ed25519](https://ed25519.cr.yp.to/):

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### Guarda de Privacidade GNU

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![GNU Privacy Guard logo](/assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG** é uma alternativa GPL-licenciada ao conjunto de software criptográfico PGP. GnuPG está em conformidade com [RFC 4880](https://tools.ietf.org/html/rfc4880), que é a especificação atual da IETF do OpenPGP. O projeto GnuPG tem trabalhado em um [rascunho atualizado](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) numa tentativa de modernizar o OpenPGP. GnuPG is a part of the Free Software Foundation's GNU software project and has received major [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) from the German government.
    
    [Visite gnupg.org](https://gnupg.org){ .md-button .md-button--primary } [Política de Privacidade](https://gnupg.org/privacy-policy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
    - [:fontawesome-brands-apple: macOS](https://gpgtools.org)
    - [:fontawesome-brands-linux: Linux](https://gnupg.org/download/index.html#binary)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
    - [:fontawesome-brands-git: Fonte](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)
        - [:simple-apple: macOS](https://gpgtools.org)
        - [:simple-linux: Linux](https://gnupg.org/download/index.html#binary)

### GPG4win

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![GPG4win logo](/assets/img/encryption-software/gpg4win.svg){ align=right }
    
    **GPG4win** é um pacote para Windows da [Intevation and g10 Code](https://gpg4win.org/impressum.html). Inclui [várias ferramentas](https://gpg4win.org/about.html) que auxiliam os usuários do PGP no Microsoft Windows. O projeto foi iniciado e originalmente [financiado por](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) pelo Escritório Federal de Segurança da Informação (BSI) da Alemanha em 2005.
    
    [Visite gpg4win.org](https://gpg4win.org){ .md-button .md-button--primary } [Política de Privacidade](https://gpg4win.org/privacy-policy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
    - [:fontawesome-brands-git: Fonte](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary) downloads
    
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)

### Suíte GPG

!!! note

    We suggest [Canary Mail](email-clients.md#canary-mail) for using PGP with email on iOS devices.

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![GPG Suite logo](assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite** provides OpenPGP support for [Apple Mail](email-clients.md#apple-mail) and macOS.
    
    We recommend taking a look at their [First steps](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) and [Knowledge base](https://gpgtools.tenderapp.com/kb) for support.
    
    [:octicons-home-16: Homepage](https://gpgtools.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpgtools.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gpgtools.tenderapp.com/kb){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-apple: macOS](https://gpgtools.org)

### OpenKeychain

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logótipo OpenKeychain](/assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** é uma implementação Android do GnuPG. É normalmente exigido por clientes de e-mail como [K-9 Mail](/email-clients/#k-9-mail) e [FairEmail](/email-clients/#fairemail) e outros aplicativos Android para fornecer suporte à criptografia. Cure53 concluiu uma [auditoria de segurança](https://www.openkeychain.org/openkeychain-3-6) da OpenKeychain 3.6 em outubro de 2015. Detalhes técnicos sobre a auditoria e as soluções OpenKeychain podem ser encontrados [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [Visite openkeychain.org](https://www.openkeychain.org){ .md-button .md-button--primary } [Política de Privacidade](https://www.openkeychain.org/help/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/org.sufficientlysecure.keychain/)
    - [:fontawesome-brands-git: Source](https://github.com/open-keychain/open-keychain) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

### Minimum Qualifications

- Cross-platform encryption apps must be open-source.
- File encryption apps must support decryption on Linux, macOS, and Windows.
- External disk encryption apps must support decryption on Linux, macOS, and Windows.
- Internal (OS) disk encryption apps must be cross-platform or built in to the operating system natively.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Operating System (FDE) encryption apps should utilize hardware security such as a TPM or Secure Enclave.
- File encryption apps should have first- or third-party support for mobile platforms.

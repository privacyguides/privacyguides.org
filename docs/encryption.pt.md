---
title: Software de encriptação
icon: material/file-lock
---

A encriptação de dados é a única forma de controlar quem pode acessá-los. Se você não estiver usando software de criptografia para o seu disco rígido, e-mails ou arquivos, você deve escolher uma opção aqui.

## Multi-plataforma

As opções listadas aqui são multi-plataforma e excelentes para criar backups criptografados dos seus dados.

### VeraCrypt

!!! recomendação

    ![logo VeraCrypt](/assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](/assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** é um utilitário freeware disponível na fonte, utilizado para encriptação on-the-fly. Ele pode criar um disco virtual encriptado dentro de um ficheiro, encriptar uma partição ou encriptar todo o dispositivo de armazenamento com autenticação pré-boot.
    
    [Visite veracrypt.fr](https://veracrypt.fr){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-apple: macOS](https://www.veracrypt.fr/pt/Downloads.html)
    - [:fontawesome-brands-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-git: Source](https://www.veracrypt.fr/code)

O VeraCrypt é um garfo do projeto TrueCrypt descontinuado. De acordo com seus desenvolvedores, melhorias de segurança foram implementadas e questões levantadas pela auditoria inicial do código TrueCrypt foram abordadas.

Ao encriptar com VeraCrypt, o utilizador tem a opção de seleccionar de diferentes [funções hash](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). Sugerimos aos utilizadores **apenas** seleccione [SHA-512](https://en.wikipedia.org/wiki/SHA-512) e deve ficar com o [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) cifra de bloco.

Truecrypt foi [auditada várias vezes](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits) e VeraCrypt também foi [auditada separadamente](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

### Criptomador

!!! recomendação

    ![logo do criptomator](/assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** facilita o carregamento de ficheiros para a nuvem num sistema de ficheiros virtual encriptado.
    
    [Visite cryptomator.org](https://cryptomator.org){ .md-button .md-button--primary } [Política de Privacidade](https://cryptomator.org/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://cryptomator.org/downloads)
    - [:fontawesome-brands-apple: macOS](https://cryptomator.org/downloads)
    - [:fontawesome-brands-linux: Linux](https://cryptomator.org/downloads)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.cryptomator.cryptomator)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
    - [:fontawesome-brands-android: F-Droid repo](https://cryptomator.org/android)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
    - [:fontawesome-brands-github: Source](https://github.com/cryptomator)

Algumas das Cryptomator Crypto Libraries foram [auditadas](https://cryptomator.org/open-source/) por [Cure53](https://cryptomator.org/audits/2017-11-27%20crypto%20cure53.pdf). O âmbito dessas bibliotecas incluía [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) e [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). Não incluiu [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift) que agora é usado no iOS.

### Picocrypt

!!! recomendação

    ![logotipo Picocrypt](/assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** é uma pequena e simples ferramenta de encriptação que fornece uma encriptação moderna. Picocrypt usa a cifra segura XChaCha20 e a função de derivação da chave Argon2id para proporcionar um alto nível de segurança. Ele usa os módulos x/crypto padrão da Go para suas funcionalidades de criptografia.
    
    [Visite github.com](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-github: Source](https://github.com/HACKERALERT/Picocrypt)

## Sistema operacional incluído Criptografia de disco completo (FDE)

Os sistemas operacionais modernos incluem [encriptação de disco](https://en.wikipedia.org/wiki/Disk_encryption) e utilizarão um [criptoprocessador seguro](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

### BitLocker

!!! recomendação

    ![BitLocker logo](/assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** é a solução de encriptação de volume completo, em conjunto com o Microsoft Windows. O principal motivo pelo qual o recomendamos é devido ao seu [uso do TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft), uma empresa forense, escreveu sobre isso em [Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [Visite microsoft.com](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .md-button .md-button--primary }

BitLocker é [suportado apenas](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) nas edições Pro, Enterprise, e Education do Windows. Ele pode ser ativado nas edições Home, desde que atendam aos pré-requisitos.

??? exemplo "Activando o BitLocker no Windows Home"

    Para habilitar o BitLocker nas edições "Home" do Windows, você deve ter partições formatadas com um módulo [GUID Partition Table](https://en.wikipedia.org/wiki/GUID_Partition_Table) e ter um [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module) (v1.2, 2.0 ) dedicado.

    1. Abrir Windows [PowerShell](https://en.wikipedia.org/wiki/PowerShell). Iniciar "PowerShell".

    2. Verifique para ver o formato da tabela de partição:
        ```
        powerhell Get-Disk 0 | findstr GPT && echo Este é um disco do sistema GPT!
        ```

    3. Verifique a versão TPM. O valor devolvido deve ser "3 Verdadeiro". A especificação deve ser 1.2 ou superior.
        ```
        powerhell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm | findstr "IsActivated IsEnabled IsOwned SpecVersion"
        ```

    4. Aceda ao Windows 10 "Opções de Arranque Avançadas". (Pressione "reboot" enquanto segura o botão shift). *Resolução de problemas > Opções avançadas > Prompt de comando*

    5. Entre com a sua conta que tem privilégios de administrador e digite isto para iniciar a criptografia:
        ```
        manage-bde -em c: -utilizado
        ```

    6. Feche o prompt de comando, e entre no PowerShell:
    ```
    manage-bde c: -protectores -add -rp -tpm
    manage-bde -protectores -enable c:
    manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
    ```

        !!! aviso
     Backup `BitLocker-Recovery-Key.txt` em um dispositivo de armazenamento separado. A perda deste código de recuperação, pode resultar em perda de dados.

### FileVault

!!! recomendação

    ![FileVault logo](/assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** é a solução de encriptação de volume on-the-fly integrada em macOS. FileVault é recomendado porque [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) recursos de segurança de hardware presentes em um SoC de silício Apple ou Chip de Segurança T2.
    
    [Visite support.apple.com](https://support.apple.com/en-us/HT204837){ .md-button .md-button--primary }

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Também, FileVault deve ser habilitado **após** uma instalação macOS completa como mais gerador de números pseudorandomais ([PRNG](https://support.apple.com/guide/security/random-number-generation-seca0c73a75b/web)) [entropia](https://en.wikipedia.org/wiki/Entropy_(computing)) estará disponível.

### Configuração da Chave Unificada Linux (LUKS)

!!! recomendação

    ![LUKS logo](/assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS*** é o método padrão de criptografia de disco completo para Linux. Ele pode ser usado para criptografar volumes completos, partições ou criar containers criptografados.
    
    [Visite gitlab.com](https://gitlab.com/cryptsetup/cryptsetup){ .md-button .md-button--primary }

??? exemplo "Criando e abrindo containers criptografados"

    ```
    dd if=/dev/urandom of=/path-tofile bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-tofile
    ```


    #### Abrindo recipientes encriptados
    Recomendamos abrir recipientes e volumes com `udisksctl`, pois este utiliza [Polkit](https://en.wikipedia.org/wiki/Polkit). A maioria dos gestores de ficheiros, tais como os incluídos em ambientes de desktop populares, consegue desbloquear ficheiros encriptados. Ferramentas como [udiskie](https://github.com/coldfix/udiskie) podem ser executadas na bandeja do sistema e fornecer uma interface de usuário útil.
    ```
    udisksctl loop-setup -f /path-tofile
    udisksctl unlock -b /dev/loop0
    ```

!!! Aviso "Lembre-se de fazer backup dos cabeçalhos de volume".

    Recomendamos que você sempre [faça backup dos seus cabeçalhos LUKS](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) em caso de falha parcial da unidade. Isto pode ser feito com:

    ```
    cryptsetup luksHeaderBackup /device/device --header-backup-file /mnt/backup/file.img
    ```

## Navegador baseado em

A criptografia baseada em navegador pode ser útil quando você precisa criptografar um arquivo, mas não pode instalar software ou aplicativos no seu dispositivo.

### chapéu.sh

!!! recomendação

    ![hat.sh logo](/assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![hat.sh logo](/assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }
    
    **Hat.sh*** é uma aplicação web que fornece criptografia segura de arquivos do lado do cliente no seu navegador. Também pode ser auto-hospedado e é útil se você precisar criptografar um arquivo, mas não pode instalar qualquer software no seu dispositivo, devido às políticas organizacionais.
    
    [Visite hat.sh](https://hat.sh){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/sh-dv/hat.sh)

## Linha de comando

Ferramentas com interfaces de linha de comando são úteis para intergrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

!!! recomendação

    ![logo Kryptor](/assets/img/encryption-software/kryptor.png){ align=right }
    
    **Kryptor** é uma ferramenta de criptografia e assinatura de arquivos livre e de código aberto que faz uso de algoritmos criptográficos modernos e seguros. Pretende ser uma versão melhor de [age](https://github.com/FiloSottile/age) e [Minisign](https://jedisct1.github.io/minisign/) para fornecer uma alternativa simples e amigável ao GPG.
    
    [Visite kryptor.co.uk](https://www.kryptor.co.uk){ .md-button .md-button--primary } [Política de Privacidade](https://www.kryptor.co.uk/features#privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.kryptor.co.uk)
    - [:fontawesome-brands-apple: macOS](https://www.kryptor.co.uk)
    - [:fontawesome-brands-linux: Linux](https://www.kryptor.co.uk)
    - [:fontawesome-brands-github: Fonte](https://github.com/samuel-lucas6/Kryptor)

### Túmulo

!!! recomendação

    ![Logotipo da Tumba](/assets/img/encryption-software/tomb.png){ align=right }
    
    **Tomb** é uma shell wrapper de linha de comando para LUKS. Ele suporta esteganografia através de [ferramentas de terceiros](https://github.com/dyne/Tomb#how-does-it-work).
    
    [Visite dyne.org](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/dyne/Tomb)

## OpenPGP

[OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP) é por vezes necessário para tarefas específicas, tais como assinatura digital e encriptação de e-mail. PGP tem muitas características e é [complexo](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) como tem sido por muito tempo. Para tarefas como assinatura ou criptografia de arquivos, sugerimos as opções acima.

Ao criptografar com PGP, o usuário tem a opção de configurar diferentes opções em seu arquivo `gpg.conf` . Recomendamos ficar com as opções padrão especificadas no [GnuPG FAQ do usuário](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

??? Dica "Use padrões futuros ao gerar uma chave".

    Quando [gerando chaves](https://www.gnupg.org/gph/en/manual/c14.html) sugerimos utilizar o comando `future-default`, pois isto instruirá o GnuPG a utilizar criptografia moderna como [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) e [Ed25519](https://ed25519.cr.yp.to/):

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### Guarda de Privacidade GNU

!!! recomendação

    ![GNU Privacy Guard logo](/assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG** é uma alternativa GPL-licenciada ao conjunto de software criptográfico PGP. GnuPG está em conformidade com [RFC 4880](https://tools.ietf.org/html/rfc4880), que é a especificação atual da IETF do OpenPGP. O projeto GnuPG tem trabalhado em um [rascunho atualizado](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) numa tentativa de modernizar o OpenPGP. GnuPG is a part of the Free Software Foundation's GNU software project and has received major [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) from the German government.
    
    [Visite gnupg.org](https://gnupg.org){ .md-button .md-button--primary } [Política de Privacidade](https://gnupg.org/privacy-policy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
    - [:fontawesome-brands-apple: macOS](https://gpgtools.org)
    - [:fontawesome-brands-linux: Linux](https://gnupg.org/download/index.html#binary)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
    - [:fontawesome-brands-git: Fonte](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git)

### GPG4win

!!! recomendação

    ![GPG4win logo](/assets/img/encryption-software/gpg4win.svg){ align=right }
    
    **GPG4win** é um pacote para Windows da [Intevation and g10 Code](https://gpg4win.org/impressum.html). Inclui [várias ferramentas](https://gpg4win.org/about.html) que auxiliam os usuários do PGP no Microsoft Windows. O projeto foi iniciado e originalmente [financiado por](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) pelo Escritório Federal de Segurança da Informação (BSI) da Alemanha em 2005.
    
    [Visite gpg4win.org](https://gpg4win.org){ .md-button .md-button--primary } [Política de Privacidade](https://gpg4win.org/privacy-policy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
    - [:fontawesome-brands-git: Fonte](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary)

### Suíte GPG

!!! recomendação

    ![logótipo GPG Suite](/assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite*** fornece suporte OpenPGP para [Apple Mail](/email-clients/#apple-mail) e macOS. A GPGTools GmbH custa US$ 24 por ano pelo seu plano de suporte e inclui um teste de 30 dias.
    
    Recomendamos dar uma olhada em seus [Primeiros Passos](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) e [Base de Conhecimento](https://gpgtools.tenderapp.com/kb) para obter suporte.
    
    [Visite gpgtools.org](https://gpgtools.org){ .md-button .md-button--primary } [Política de Privacidade](https://gpgtools.org/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-apple: macOS](https://gpgtools.org)
    - [:fontawesome-brands-git: Fonte](https://github.com/GPGTools)

!!! nota

    Sugerimos [Canary Mail](/email-clients/#canary-mail) para usar o PGP com e-mail em dispositivos iOS.

### OpenKeychain

!!! recomendação

    ![logótipo OpenKeychain](/assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** é uma implementação Android do GnuPG. É normalmente exigido por clientes de e-mail como [K-9 Mail](/email-clients/#k-9-mail) e [FairEmail](/email-clients/#fairemail) e outros aplicativos Android para fornecer suporte à criptografia. Cure53 concluiu uma [auditoria de segurança](https://www.openkeychain.org/openkeychain-3-6) da OpenKeychain 3.6 em outubro de 2015. Detalhes técnicos sobre a auditoria e as soluções OpenKeychain podem ser encontrados [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [Visite openkeychain.org](https://www.openkeychain.org){ .md-button .md-button--primary } [Política de Privacidade](https://www.openkeychain.org/help/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/org.sufficientlysecure.keychain/)
    - [:fontawesome-brands-git: Source](https://github.com/open-keychain/open-keychain)

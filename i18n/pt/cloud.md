---
title: "Email"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Many cloud storage providers require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by either putting you in control of your data or by implementing E2EE.

Confie em seu provedor usando uma alternativa abaixo que suporta [criptografia de ponta a ponta (E2EE)](https://wikipedia.org/wiki/End-to-end_encryption).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. question "Looking for Nextcloud?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do not recommend Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo Proton Drive](/assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** é um serviço geral de armazenamento de arquivos criptografados (E2EE) de ponta a ponta pelo popular provedor de e-mail criptografado [ProtonMail](https://protonmail.com).
    
    [Visite drive.protonmail.com](https://drive.protonmail.com){ .md-button .md-button--primary } [Política de Privacidade](https://protonmail.com/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/ProtonMail/WebClients) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)


## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

### Minimum Requirements

- Must enforce end-to-end encryption.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multi-factor authentication, or Passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must use standard, audited encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Clients should be open-source.
- Clients should be audited in their entirety by an independent third-party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file-sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.

---
title: Armazenamento em nuvem
icon: material/file-cloud
---

Se você está usando atualmente um serviço de armazenamento em nuvem como Dropbox, Google Drive, Microsoft OneDrive ou Apple iCloud, você está colocando total confiança no seu provedor de serviços para não olhar para os seus arquivos.

Confie em seu provedor usando uma alternativa abaixo que suporta [criptografia de ponta a ponta (E2EE)](https://wikipedia.org/wiki/End-to-end_encryption).

### Nextcloud

!!! recomendação

    ![Logotipo da próxima nuvem](/assets/img/cloud/nextcloud.svg){ align=right }
    
    **Nextcloud** é um conjunto de software cliente-servidor gratuito e de código aberto para criar os seus próprios serviços de alojamento de ficheiros num servidor privado que você controla. Também vem com criptografia experimental de ponta a ponta (E2EE).
    
    [Visite nextcloud.com](https://nextcloud.com){ .md-button .md-button--primary } [Política de Privacidade](https://nextcloud.com/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-apple: macOS](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-linux: Linux](https://nextcloud.com/install/#install-clients)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/wwww/nextcloud)
    - [:pg-openbsd: OpenBSD](https://openports.se/www/nextcloud)
    - [:pg-netbsd: NetBSD](https://pkgsrc.se/www/php-nextcloud)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.nextcloud.client)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1125420102)
    - [:fontawesome-brands-github: Source](https://github.com/nextcloud)

Recomendamos verificar se o seu provedor Nextcloud suporta E2EE, caso contrário você tem que confiar no provedor para não olhar para seus arquivos.

Ao hospedar o Nextcloud, você também deve se lembrar de habilitar o E2EE para proteger o seu provedor de hospedagem contra bisbilhotices nos seus dados.

### Acionamento de prótons

!!! recomendação

    ![logo Proton Drive](/assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** é um serviço geral de armazenamento de arquivos criptografados (E2EE) de ponta a ponta pelo popular provedor de e-mail criptografado [ProtonMail](https://protonmail.com).
    
    [Visite drive.protonmail.com](https://drive.protonmail.com){ .md-button .md-button--primary } [Política de Privacidade](https://protonmail.com/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/ProtonMail/WebClients)

O Proton Drive está atualmente em beta e só está disponível através de um cliente web.

Ao usar um cliente web, você está colocando confiança no servidor para enviar o código JavaScript adequado para derivar a chave de decriptação e o token de autenticação localmente no seu navegador. Um servidor comprometido pode enviar-lhe um código JavaScript malicioso para roubar a sua senha mestra e desencriptar os seus dados. Se isto não se ajustar ao seu [modelo de ameaça](/threat-modeling/), considere o uso de uma alternativa.

### Cryptee

!!! recomendação

    ![logótipo Cryptee](./assets/img/cloud/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/cloud/cryptee-dark.svg#only-dark){ align=right }
    
    **Cryptee** é um serviço de armazenamento de fotos criptografado e seguro, e um editor de documentos criptografado para escrever documentos pessoais, notas, revistas, arquivos de armazenamento & mais.
    
    [Visite crypt.ee](https://crypt.ee){ .md-button .md-button--primary } [Política de Privacidade](https://crypt.ee/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/cryptee/web-client)

### Tahoe-LAFS

!!! nota

    Devido à complexidade do sistema e à quantidade de nós necessários para configurá-lo, a Tahoe-LAFS só é recomendada para administradores de sistema experientes.

!!! recomendação

    ![logo Tahoe-LAFS](./assets/img/cloud/tahoe-lafs.svg#only-light){ align=right }
    ![logo Tahoe-LAFS](./assets/img/cloud/tahoe-lafs-dark.svg#only-dark){ align=right }
    
    **Tahoe-LAFS*** é um sistema livre e aberto de armazenamento em nuvem descentralizado. Ele distribui os seus dados por vários servidores. Mesmo que alguns dos servidores falhem ou sejam tomados por um atacante, toda a loja de arquivos continua a funcionar corretamente, preservando sua privacidade e segurança. Os servidores utilizados como pools de armazenamento não têm acesso aos seus dados.
    
    [Visite tahoe-lafs.org](https://www.tahoe-lafs.org){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://github.com/tahoe-lafs/tahoe-lafs#via-pip)
    - [:fontawesome-brands-apple: macOS](https://github.com/tahoe-lafs/tahoe-lafs#via-pip)
    - [:fontawesome-brands-linux: Linux](https://github.com/tahoe-lafs/tahoe-lafs#using-os-packages)
    - [:pg-netbsd: NetBSD](https://pkgsrc.se/filesystems/tahoe-lafs)
    - [:fontawesome-brands-git: Fonte](https://www.tahoe-lafs.org/trac/tahoe-lafs/browser)

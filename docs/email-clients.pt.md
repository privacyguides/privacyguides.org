---
title: Clientes de e-mail
icon: material/email-open
---

Nossa lista de recomendações contém clientes de e-mail que suportam tanto [OpenPGP](/encryption/#openpgp) e autenticação forte como [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). OAuth permite-lhe utilizar [Multi-Factor Authentication](/multi-factor-authentication) e prevenir o roubo de contas.

??? Atenção "O e-mail não fornece sigilo de encaminhamento" Ao usar a tecnologia de criptografia end-to-end (E2EE) como [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy), o e-mail ainda terá [alguns metadados](/email/#email-metadata-overview) que não estão criptografados no cabeçalho do e-mail.

    O OpenPGP também não suporta [reencaminhar sigilo](https://en.wikipedia.org/wiki/Forward_secrecy), o que significa que se a sua chave privada ou a do destinatário for roubada, todas as mensagens anteriores criptografadas com ela serão expostas: [Como posso proteger minhas chaves privadas?](/email/#email-encryption-overview). Pense em usar um meio que transmita sigilo:
    
    [Comunicação em tempo real](/real-time-communication){ .md-button .md-button--primary }

### Thunderbird

!!! recomendação

    ![logótipo Thunderbird](/assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** é um cliente gratuito, de código aberto, email multiplataforma, newsgroup, news feed, e chat (XMPP, IRC, Twitter) desenvolvido pela comunidade Thunderbird, e anteriormente pela Fundação Mozilla.
    
    [Visite thunderbird.net](https://www.thunderbird.net){ .md-button .md-button--primary } [Política de Privacidade](https://www.mozilla.org/privacy/thunderbird){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.thunderbird.net)
    - [:fontawesome-brands-apple: macOS](https://www.thunderbird.net)
    - [:fontawesome-brands-linux: Linux](https://www.thunderbird.net)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.Thunderbird)
    - [:fontawesome-brands-git: Source](https://hg.mozilla.org/comm-central)

### Correio da Apple

!!! recomendação

    ![logo Apple Mail](/assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** está incluído no MacOS e pode ser estendido para ter suporte OpenPGP com [GPG Suite](/encryption/#gpg-suite), que adiciona a capacidade de enviar e-mails criptografados.
    
    !!! nota
        Para dispositivos iOS sugerimos [Canary Mail](/email-clients/#canary-mail) pois tem suporte PGP, o que significa que você pode enviar e-mail criptografado de ponta a ponta.
    
    [Visite apple.com](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary } [Política de Privacidade](https://www.apple.com/legal/privacy/en-ww/){ .md-button }

### Evolução do GNOME

!!! recomendação

    ![Logotipo da evolução](/assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolução*** é uma aplicação de gestão de informação pessoal que proporciona uma funcionalidade integrada de correio, calendarização e livro de endereços. A evolução tem um extenso [documentation](https://help.gnome.org/users/evolution/stable/) para ajudar você a começar.
    
    [Visite gnome.org](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary } [Política de Privacidade](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .md-button }
    
    **Downloads***
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.gnome.Evolution)
    - [:fontawesome-brands-gitlab: Fonte](https://gitlab.gnome.org/GNOME/evolution)

### Kontact

!!! recomendação

    ![logo Kontact](/assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** é uma aplicação de gestão de informação pessoal (PIM) do projecto [KDE](https://kde.org). Fornece um cliente de correio, livro de endereços, organizador e cliente RSS.
    
    [Visite kontact.kde.org](https://kontact.kde.org){ .md-button .md-button--primary } [Política de Privacidade](https://kde.org/privacypolicy-apps){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-linux: Linux](https://kontact.kde.org/downloads)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.kde.kontact)
    - [:fontawesome-brands-git: Source](https://invent.kde.org/pim/kmail)

### Mailvelope

!!! recomendação

    ![logotipo do Mailvelope](/assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** é uma extensão do navegador que permite a troca de e-mails criptografados seguindo o padrão de criptografia OpenPGP.
    
    [Visite mailvelope.com](https://www.mailvelope.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.mailvelope.com/en/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
    - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)
    - [:fontawesome-brands-github: Source](https://github.com/mailvelope/mailvelope)

### K-9 Correio

!!! recomendação

    ![K-9 Logotipo do correio](/assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail*** é uma aplicação de correio independente que suporta tanto caixas de correio POP3 como IMAP, mas só suporta push mail para IMAP.
    
    [Visite k9mail.app](https://k9mail.app){ .md-button .md-button--primary } [Política de Privacidade](https://k9mail.app/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.fsck.k9)
    - [:fontawesome-brands-github: Source](https://github.com/k9mail)

### FairEmail

!!! recomendação

    ![logotipo FairEmail](/assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** é uma aplicação de e-mail de código aberto mínima, utilizando padrões abertos (IMAP, SMTP, OpenPGP) com um baixo consumo de dados e bateria.
    
    [Visite email.faircode.eu](https://email.faircode.eu){ .md-button .md-button--primary } [Política de Privacidade](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/eu.faircode.email/)
    - [:fontawesome-brands-github: Source](https://github.com/M66B/FairEmail)

### Correio Canário

!!! recomendação

    ![logo Canary Mail](/assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** é um cliente de e-mail pago concebido para tornar a encriptação end-to-end sem falhas com funcionalidades de segurança, tais como um bloqueio biométrico da aplicação.
    
    [Visite canarymail.io](https://canarymail.io){ .md-button .md-button--primary } [Política de Privacidade](https://canarymail.io/privacy.html){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://download.canarymail.io/get_windows)
    - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/app/id1236045954)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1236045954)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)

!!! atenção

    Canary Mail só recentemente lançou um cliente Windows e Android, não acreditamos que eles sejam tão estáveis como os seus congéneres iOS e Mac.

Canary Mail é uma fonte fechada. Nós o recomendamos, devido às poucas opções que existem para clientes de e-mail no iOS que suportam [Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy), encriptação de ponta a ponta (E2EE).

### Neomutt

!!! recomendação

    ![logótipo do Neomutt](/assets/img/email-clients/mutt.svg){ align=right }
    
    NeoMutt é um leitor de linha de comando de código aberto (ou MUA) para Linux e BSD. É um garfo de [Mutt](https://en.wikipedia.org/wiki/Mutt_(email_client)) com recursos adicionados.
    
    O Neomut é um cliente baseado em texto que tem uma curva de aprendizagem íngreme. É, no entanto, muito personalizável.
    
    [Visite neomutt.org](https://neomutt.org){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-linux: Linux](https://neomutt.org/distro)
    - [:fontawesome-brands-apple: macOS](https://neomutt.org/distro)
    - [:fontawesome-brands-github: Fonte](https://github.com/neomutt/neomutt)

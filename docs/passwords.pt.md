---
title: Gestores de senhas
icon: material/form-textbox-password
---

Fique seguro e protegido on-line com um gerenciador de senhas criptografado e de código aberto.

## Senha Melhores Práticas

- Use sempre palavras-passe únicas. Não se faça vítima de "[recheio de credenciais](https://en.wikipedia.org/wiki/Credential_stuffing)".
- Armazene um backup exportado de suas senhas em um [container criptografado](/encryption) em outro dispositivo de armazenamento. Isto pode ser útil se algo acontecer ao seu dispositivo ou ao serviço que você está usando.
- Se possível, armazene [Palavra-passe única baseada no tempo (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password) fichas em separado [TOTP app](/security/multi-factor-authentication/#authenticator-apps) e não o seu gestor de palavras-passe. Os códigos TOTP são gerados a partir de um "[segredo compartilhado](https://en.wikipedia.org/wiki/Time-based_one-time_password#Security)". Se o segredo for obtido por um adversário, eles podem gerar valores TOTP. Normalmente, as plataformas móveis têm melhor isolamento de aplicativos e métodos mais seguros para armazenar credenciais sensíveis.

## Gestores locais de senhas

Estes gestores de senhas armazenam a base de dados de senhas localmente.

### KeepassXC

!!! recomendação

    ![logotipo KeepassXC](/assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** é um garfo comunitário do KeePassX, uma porta nativa multi-plataforma do KeePass Password Safe, com o objectivo de o alargar e melhorar com novas funcionalidades e correcções de bugs para fornecer um gestor de senhas moderno, totalmente multi-plataforma e de código aberto.
    
    [Visite keepassxc.org](https://keepassxc.org){ .md-button .md-button--primary } [Política de Privacidade](https://keepassxc.org/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://keepassxc.org/download/#windows)
    - [:fontawesome-brands-apple: macOS](https://keepassxc.org/download/#mac)
    - [:fontawesome-brands-linux: Linux](https://keepassxc.org/download/#linux)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)
    - [:fontawesome-brands-github: Source](https://github.com/keepassxreboot/keepassxc)

!!! aviso

    KeepassXC armazena seus dados de exportação como [comma-separated values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values). Isto pode significar perda de dados se você importar este arquivo para outro gerenciador de senhas. Aconselhamo-lo a verificar cada registo manualmente.

### KeepassDX

!!! recomendação

    ![logotipo KeepassDX](/assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeepassDX*** é um gerenciador de senhas leve para Android, permite editar dados criptografados em um único arquivo no formato KeePass e pode preencher os formulários de uma forma segura. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) permite desbloquear conteúdos cosméticos e recursos de protocolo não-padrão, mas, mais importante, ajuda e incentiva o desenvolvimento.
    
    Para mais detalhes, recomendamos que veja o seu [FAQ](https://github.com/Kunzisoft/KeePassDX/wiki/FAQ).
    
    [Visite keepassdx.com](https://www.keepassdx.com){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
    - [:pg-f-droid: F-Droid](https://www.f-droid.org/packages/com.kunzisoft.keepass.libre)
    - [:fontawesome-brands-github: Source](https://github.com/Kunzisoft/KeePassDX)

## Gerenciadores de Senha de Sincronização de Nuvem

Estes gerentes de senha se sincronizam com um servidor em nuvem que pode ser auto-hospedável.

### Bitwarden

!!! recomendação

    ![Bitwarden logo](/assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** é um gerenciador de senhas gratuito e de código aberto. Visa resolver problemas de gerenciamento de senhas para indivíduos, equipes e organizações empresariais. Bitwarden está entre as soluções mais fáceis e seguras para armazenar todos os seus logins e senhas, mantendo-os convenientemente sincronizados entre todos os seus dispositivos. Se você não quer usar a nuvem Bitwarden, você pode facilmente hospedar seu próprio servidor Bitwarden.
    
    [Visite bitwarden.com](https://bitwarden.com){ .md-button .md-button--primary } [Política de Privacidade](https://bitwarden.com/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://bitwarden.com/download)
    - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/app/bitwarden/id1352778147)
    - [:fontawesome-brands-linux: Linux](https://bitwarden.com/download)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.bitwarden.desktop)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
    - [:pg-f-droid: F-Droid](https://mobileapp.bitwarden.com/fdroid)
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
    - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)
    - [:fontawesome-brands-github: Source](https://github.com/bitwarden)

### Psono

!!! recomendação

    ![logo Psono](/assets/img/password-management/psono.svg){ align=right }
    
    **Psono** é um gestor de senhas gratuito e de código aberto da Alemanha, com foco na gestão de senhas para equipes. Pode ser [self-hosted](/password-management/#password-management-servers). Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails. Todos os segredos são protegidos por uma senha mestra.
    
    [Visite psono.com](https://psono.com){ .md-button .md-button--primary } [Política de Privacidade](https://psono.com/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/psono/psono-client)
    - [:fontawesome-brands-github: Source](https://gitlab.com/psono)

## Servidores de gestão de senhas

Estes produtos são de sincronização auto-hospedável para gestores de senhas baseados em nuvem.

### Vaultwarden

!!! recomendação

    ![Vaultwarden logo](/assets/img/password-management/vaultwarden.svg#only-light){ align=right }
    ![Vaultwarden logo](/assets/img/password-management/vaultwarden-dark.svg#only-dark){ align=right }
    
    **Vaultwarden** é uma implementação alternativa da API do servidor Bitwarden escrita em Rust e compatível com os clientes Bitwarden upstream, perfeita para implantação auto-hospedada onde rodar o serviço oficial de recursos pesados pode não ser o ideal.
    
    [Visite github.com](https://github.com/dani-garcia/vaultwarden){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
    - [:fontawesome-brands-github: Fonte](https://github.com/dani-garcia/vaultwarden)

### Psono Server

!!! recomendação

    ![Logotipo do Psono Server](/assets/img/password-management/psono.svg){ align=right }
    
    Psono fornece [extensa documentação](https://doc.psono.com/) para o seu produto. O [web-client](https://doc.psono.com/admin/installation/install-webclient.html#installation-with-docker) para o Psono pode ser auto hospedado; alternativamente, você pode escolher a [Community Edition](https://doc.psono.com/admin/installation/install-server-ce.html) ou a [Enterprise Edition](https://doc.psono.com/admin/installation/install-server-ee.html) completa, com recursos adicionais.
    
    [Visite gitlab.com](https://gitlab.com/psono/psono-server){ .md-button .md-button--primary } [Política de Privacidade](https://psono.com/privacy-policy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/psono/psono-server)
    - [:fontawesome-brands-gitlab: Fonte](https://gitlab.com/psono/psono-server)

## Gestores Mínimos de Senha

Estes produtos são gestores de senhas mínimas que podem ser utilizadas em aplicações de scripting.

### gopass

!!! recomendação

    ![logo gopass](/assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** é um gerenciador de senhas para a linha de comando escrito em Go. Funciona em todos os principais sistemas operacionais de desktop e servidores (Linux, MacOS, BSD, Windows).
    
    [Visite gopass.pw](https://www.gopass.pw){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.gopass.pw/#install-windows)
    - [:fontawesome-brands-apple: macOS](https://www.gopass.pw/#install-macos)
    - [:fontawesome-brands-linux: Linux](https://www.gopass.pw/#install-linux)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)
    - [:fontawesome-brands-github: Source](https://github.com/gopasspw/gopass)

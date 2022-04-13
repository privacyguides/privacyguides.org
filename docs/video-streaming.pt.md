---
title: Transmissão de vídeo
icon: material/video-wireless
---

A principal ameaça ao usar uma plataforma de streaming de vídeo é que os seus hábitos de streaming e listas de assinaturas podem ser usados para traçar o seu perfil. Você deve combinar estas ferramentas com um [VPN](/vpn) ou [Tor](https://www.torproject.org/) para tornar mais difícil o perfil do seu uso.

## Clientes

### FreeTube

!!! Advertência

    Ao usar o Freetube, seu endereço IP ainda é conhecido pelo YouTube, [Invidious](https://instances.invidious.io) e as instâncias SponsorBlock que você usa. Considere usar um [VPN](/vpn) ou [Tor](https://www.torproject.org) se o seu [modelo de ameaça](/threat-modeling.md) requer esconder o seu endereço IP.

!!! recomendação

    ![FreeTube logo](/assets/img/video-streaming/freetube.svg){ align=right }
    
    **FreeTube** é um aplicativo gratuito e de código aberto para [YouTube](https://youtube.com). Ao utilizar o FreeTube, a sua lista de subscrição e listas de reprodução são guardadas localmente no seu dispositivo.
    
    FreeTube também apresenta [SponsorBlock](https://sponsor.ajay.app) para ajudar você a pular anúncios patrocinados. Todos os anúncios do YouTube também são bloqueados por padrão.
    
    [Visite freetubeapp.io](https://freetubeapp.io){ .md-button .md-button--primary } [Política de Privacidade](https://freetubeapp.io/privacy.php){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://freetubeapp.io/#download)
    - [:fontawesome-brands-apple: macOS](https://freetubeapp.io/#download)
    - [:fontawesome-brands-linux: Linux](https://freetubeapp.io/#download)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/io.freetubeapp.FreeTube)
    - [:fontawesome-brands-github: Source](https://github.com/FreeTubeApp/FreeTube/)

### LBRY

!!! nota

    Apenas o **LBRY cliente desktop*** é recomendado. O site [Odysee](https://odysee.com) e os clientes da LBRY no F-Droid, Play Store e AppStore têm sincronização e telemetria obrigatórias.

!!! recomendação

    ![LBRY logo](/assets/img/video-streaming/lbry.svg){ align=right }
    
    **A rede LBRY** é uma rede descentralizada de compartilhamento de vídeo. Ele usa uma rede [BitTorrent](https://wikipedia.org/wiki/BitTorrent) para armazenar o conteúdo do vídeo, e uma rede [blockchain](https://wikipedia.org/wiki/Blockchain) para armazenar os índices para esses vídeos. O principal benefício deste desenho é a resistência à censura.
    
    **O cliente desktop LBRY** ajuda-o a transmitir vídeos da rede LBRY e armazena a sua lista de subscrições na sua própria carteira LBRY.
    
    [Visite lbry.com](https://lbry.com){ .md-button .md-button--primary } [Política de Privacidade](https://lbry.com/privacypolicy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://lbry.com/get)
    - [:fontawesome-brands-apple: macOS](https://lbry.com/osx)
    - [:fontawesome-brands-linux: Linux](https://lbry.com/linux)
    - [:fontawesome-brands-github: Fonte](https://github.com/lbryio)

!!! aviso

    Enquanto assiste e hospeda vídeos, o seu endereço IP é visível para a rede LBRY. Considere usar um [VPN](/vpn) ou [Tor](https://www.torproject.org) se o seu [modelo de ameaça](/modelagem de ameaça) requer esconder o seu endereço IP.

Nós recomendamos **contra** sincronizando sua carteira com LBRY Inc., pois a sincronização de carteiras criptografadas ainda não é suportada. Se você sincronizar sua carteira com a LBRY Inc., você tem que confiar neles para não olhar sua lista de assinaturas, [LBC](https://lbry.com/faq/earn-credits) fundos, ou assumir o controle do seu canal.

Você pode desabilitar *Salvar dados de hospedagem para ajudar a rede LBRY* opção (⚙️ Settings → Advanced Settings) para evitar expor seu endereço IP e vídeos vistos ao usar o LBRY por um período prolongado de tempo.

### NewPipe

!!! recomendação

    ![logo Newpipe](/assets/img//video-streaming/newpipe.svg){ align=right }
    
    **NewPipe** é uma aplicação livre e de código aberto do Android para [YouTube](https://youtube.com), [SoundCloud](https://soundcloud.com), [media.ccc.de](https://media.ccc.de), [FramaTube](https://framatube.org), e [Bandcamp](https://bandcamp.com).
    
    A sua lista de subscrição e listas de reprodução são guardadas localmente no seu dispositivo Android.
    
    [Visite newpipe.net](https://newpipe.net){ .md-button .md-button--primary } [Política de Privacidade](https://newpipe.net/legal/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-android: F-Droid repo](https://newpipe.net/FAQ/tutorials/install-add-fdroid-repo)
    - [:fontawesome-brands-github: Fonte](https://github.com/TeamNewPipe/NewPipe)

!!! nota

    NewPipe está disponível no repositório principal do [F-Droid](https://www.f-droid.org). Nós recomendamos que você use o próprio [repositório F-Droid](https://newpipe.net/FAQ/tutorials/install-add-fdroid-repo) do NewPipe para obter atualizações mais rápidas.

### NewPipe x SponsorBlock

!!! recomendação

    ![NewPipe x SponsorBlock logo](/assets/img/video-streaming/newpipe.svg){ align=right }
    
    **NewPipe x SponsorBlock** é um garfo de [NewPipe](https://newpipe.net) com [SponsorBlock](https://sponsor.ajay.app) integrado para ajudá-lo a saltar os anúncios patrocinados.
    Ele também tem algumas configurações experimentais, como a capacidade de usar o player embutido para reprodução local, uma opção para forçar tela cheia no modo paisagem e uma opção para desativar avisos de erro.
    
    [Visite github.com](https://github.com/polymorphicshade/NewPipe){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-android: F-Droid repo](https://apt.izzysoft.de/fdroid/index/apk/org.polymorphicshade.newpipe)
    - [:fontawesome-brands-github: Fonte](https://github.com/polymorphicshade/NewPipe)

Este garfo não é endossado ou afiliado ao projecto a montante. A equipa NewPipe tem [rejeitado](https://github.com/TeamNewPipe/NewPipe/pull/3205) integração com o SponsorBlock e assim este garfo é criado para fornecer esta funcionalidade.

## Frontends baseados na Web

### Invidious

!!! aviso

    Invidious não faz o proxy do fluxo de vídeo através do seu servidor por padrão. Os vídeos vistos através do Invidious ainda farão conexões diretas com os servidores do Google (googlevideo.com); no entanto, alguns casos suportam proxy de vídeo. Isto pode ser ativado adicionando `&local=true` à URL.

!!! recomendação

    ![logo Invidious logo](/assets/img/video-streaming/invideo-streaming/invidious.svg#only-light){ align=right }
    ![Invidious logo](/assets/img/video-streaming/invidious-dark.svg#only-dark){ align=right }
    
    **Invidious** é um front end gratuito e de código aberto para o YouTube que também é auto-hospedável. Há uma lista de [instâncias públicas](https://instances.invidious.io). Algumas instâncias têm [Tor](https://www.torproject.org) suporte a serviços de cebola.
    
    [Visite invidious.io](https://invidious.io){ .md-button .md-button--primary } [Política de Privacidade](){ .md-button }
    
    **Downloads***
    - [:fontawesome-solid-earth-americas: Instâncias](https://instances.invidious.io)
    - [:fontawesome-brands-github: Fonte](https://github.com/iv-org/invidious)

!!! dica

    Invidious é útil se você quiser desativar o JavaScript em seu navegador, como [Tor Browser](https://www.torproject.org/) sobre a configuração de segurança mais segura. Ele não proporciona privacidade por si só e não recomendamos o login em nenhuma conta.

Quando se auto-hospedar, é importante que você tenha outras pessoas usando a sua instância também para que você possa se integrar. Você deve ter cuidado com onde e como você está hospedando Invidious, pois o uso de outras pessoas estará ligado ao seu alojamento.

Quando você estiver usando uma instância Invidious, não deixe de ler a Política de Privacidade dessa instância específica. As instâncias invidiosas podem ser modificadas pelos seus proprietários e, portanto, podem não refletir a política de privacidade associada. Alguns casos têm endereços Tor .onion que podem garantir alguma privacidade desde que as suas consultas de pesquisa não contenham informações que identificam pessoalmente (PII).

### Encanada

!!! recomendação

    ![logo canalizado](/assets/img/video-streaming/piped.svg){ align=right }
    
    **Piped** é um front end gratuito e de código aberto para o YouTube que também é auto-hospedável. Instâncias alternativas podem ser selecionadas a partir de "Preferências".
    
    Para funcionar, o Piped requer JavaScript.
    
    [Visite piped.kavin.rocks](https://piped.kavin.rocks/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-github: Source](https://github.com/TeamPiped/Piped)

!!! dica

    Piped é útil se você quiser usar [SponsorBlock](https://sponsor.ajay.app) sem instalar uma extensão ou para acessar conteúdo restrito à idade sem uma conta. Ele não proporciona privacidade por si só e não recomendamos o login em nenhuma conta.

Quando se auto-hospedar, é importante que você tenha outras pessoas usando a sua instância também para que você possa se integrar. Você deve ter cuidado com onde e como você está hospedando Piped, pois o uso de outras pessoas estará ligado ao seu alojamento.

Quando você estiver usando uma instância Piped, certifique-se de ler a Política de Privacidade dessa instância específica. As instâncias canalizadas podem ser modificadas pelos seus proprietários e, portanto, podem não refletir sua política de privacidade associada.

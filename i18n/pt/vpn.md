---
title: "Serviços VPN"
icon: material/vpn
---

Encontre um operador VPN sem registo que não esteja a vender ou a ler o seu tráfego web.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. perigo "As VPNs não proporcionam anonimato".

    Usando uma VPN **não*** manterá seus hábitos de navegação anônimos, nem adicionará segurança adicional ao tráfego não seguro (HTTP).
    
    Se você está procurando por **anonimato**, você deve usar o Navegador Tor **em vez de** de uma VPN.
    
    Se você está procurando por **security** adicionado, você deve sempre garantir que você está se conectando a sites usando [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Uma VPN não é um substituto para as boas práticas de segurança.
    
    [Baixar Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. info "Quando é que as VPNs são úteis?"

    Se você está procurando por **privacidade adicional** do seu provedor, em uma rede Wi-Fi pública, ou enquanto estiver torrentando arquivos, uma VPN pode ser a solução para você, desde que você entenda os riscos envolvidos.
    
    [Mais informações](#vpn-overview){ .md-button }

## Provedores recomendados

!!! exemplo "Critérios".

    Nossos provedores recomendados estão fora dos EUA, usam criptografia, aceitam Monero, suportam WireGuard & OpenVPN, e têm uma política de não registro. Leia a nossa [lista completa de critérios](#nossos-critérios) para mais informações.

### Mullvad

!!! recommendation annotate

    ![logo Mullvad](/assets/img/vpn/mullvad.svg#only-light){ align=right }
    ![Mullvad logo](/assets/img/vpn/mullvad-dark.svg#only-dark){ align=right }
    
    **Mullvad** é uma VPN rápida e barata com um foco sério na transparência e segurança. Eles estão em operação desde **2009***.
    
    Mullvad está sediada na Suécia e não tem um teste gratuito. downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "35 Países".

    Mullvad tem [servidores em 35 países](https://mullvad.net/en/servers/) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Auditado independentemente".

    Os clientes VPN da Mullvad foram auditados pela Cure53 e Assured AB num relatório de pentest [publicado na cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Os investigadores de segurança concluíram:
    
    > Cure53 e Assured AB estão satisfeitos com os resultados da auditoria e o software deixa uma impressão geral positiva. Com a dedicação da equipe interna do complexo Mullvad VPN, os testadores não têm dúvidas de que o projeto está no caminho certo do ponto de vista de segurança. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source/). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit/) and the report was [produced by Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes de código aberto".

    Proton VPN provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/ProtonVPN).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Aceita Dinheiro".

    Proton VPN, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, and **cash/local currency** as anonymous forms of payment.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Suporte WireGuard".

    A Mullvad suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) o uso do WireGuard com o seu serviço. É o protocolo padrão ou único protocolo nos aplicativos Android, iOS, macOS e Linux da Mullvad, enquanto os usuários de Windows têm de [habilitar manualmente](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Suporte IPv6".

    A Mullvad suporta o futuro do networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Sua rede permite aos usuários [acessar serviços hospedados em IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) em oposição a outros provedores que bloqueiam conexões IPv6.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Remote Port Forwarding".

    In addition to providing standard OpenVPN configuration files, Proton VPN has mobile clients for [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases) allowing for easy connections to their servers.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    A Mullvad publicou clientes [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) e [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos com suporte a uma interface fácil de usar, em vez de exigir que os usuários configurem manualmente suas conexões do WireGuard. O cliente móvel no Android também está disponível em [F-Droid](https://f-droid.org/packages/net.mullvad.mullvadvpn), o que garante que ele seja compilado com [builds reproduzíveis](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). They offer adblocking and known malware domains blocking with their DNS service. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

!!! info "Funcionalidade Adicional

    Mullvad é muito transparente sobre quais nós eles [possuem ou alugam](https://mullvad.net/en/servers/). Eles usam [ShadowSocks](https://shadowsocks.org/en/index.html) na sua configuração ShadowSocks OpenVPN, tornando-os mais resistentes contra firewalls com [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) tentando bloquear VPNs.

### ProtonVPN

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![ProtonVPN logo](/assets/img/vpn/protonvpn.svg){ align=right }
    
    **ProtonVPN*** é um forte concorrente no espaço VPN, e estão em operação desde 2016. ProtonVPN está baseado na Suíça e oferece um nível de preços livre limitado, bem como opções premium.
    
    Eles oferecem mais 14 iscount para a compra de uma assinatura de 2 anos. Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "44 Países".

    ProtonVPN tem [servidores em 44 países](https://protonvpn.com/vpn-servers) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Auditado independentemente".

    IVPN has undergone a [no-logging audit from Cure53](https://cure53.de/audit-report_ivpn.pdf) which concluded in agreement with IVPN's no-logging claim. IVPN has also completed a [comprehensive pentest report Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in January 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes de código aberto".

    As of February 2020 [IVPN applications are now open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Aceita Dinheiro".

    In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Suporte WireGuard".

    ProtonVPN suporta principalmente o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    IVPN [recommends](https://www.ivpn.net/wireguard/) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Falta o "Remote Port Forwarding".

    Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is possible with a Pro plan. Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Remote Port Forwarding".

    In addition to providing standard OpenVPN configuration files, IVPN has mobile clients for [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), and [GitHub](https://github.com/ivpn/android-app/releases) allowing for easy connections to their servers.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    ProtonVPN têm seus próprios servidores e datacenters na Suíça, Islândia e Suécia. Eles oferecem bloqueio de domínios malware conhecidos e de bloqueio com o seu serviço DNS.

### IVPN

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logótipo IVPN](/assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN*** é outro provedor VPN premium, e estão em operação desde 2009. A IVPN está sediada em Gibraltar. **Padrão USD $60/ano*** - **Pro USD $100/ano***
    
    [Visite IVPN.net](https://www.ivpn.net/){ .md-button .md-button--primary }
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server). downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "32 Países".

    IVPN tem [servidores em 32 países](https://www.ivpn.net/server-locations) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Auditado independentemente".

    Mullvad's VPN clients have been audited by Cure53 and Assured AB in a pentest report [published at cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). The security researchers concluded:
    
    > Cure53 and Assured AB are happy with the results of the audit and the software leaves an overall positive impression. With security dedication of the in-house team at the Mullvad VPN compound, the testers have no doubts about the project being on the right track from a security standpoint.
    
    In 2020 a second audit [was announced](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) was made available on Cure53's website:
    
    > The results of this May-June 2020 project targeting the Mullvad complex are quite positive. [...] The overall application ecosystem used by Mullvad leaves a sound and structured impression. The overall structure of the application makes it easy to roll out patches and fixes in a structured manner. More than anything, the findings spotted by Cure53 showcase the importance of constantly auditing and re-assessing the current leak vectors, in order to always ensure privacy of the end-users. With that being said, Mullvad does a great job protecting the end-user from common PII leaks and privacy related risks.
    
    In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes de código aberto".

    Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. cheque "Aceita Dinheiro".

    Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Suporte WireGuard".

    O IVPN suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Remote Port Forwarding".

    O envio remoto [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) é possível com um plano Pro. Port forwarding [pode ser ativado](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) através da área do cliente.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. Falta o "Remote Port Forwarding".

    Além de fornecer arquivos de configuração padrão OpenVPN, o IVPN tem clientes móveis para [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683) e [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), permitindo fácil conexão com seus servidores. O cliente móvel no Android também está disponível em [F-Droid](https://f-droid.org/en/packages/net.ivpn.client), o que garante que ele seja compilado com [builds reproduzíveis](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Remote Port Forwarding".

    Clientes IVPN suportam dois factores de autenticação (clientes Mullvad e ProtonVPN não suportam). IVPN também fornece a funcionalidade "[AntiTracker](https://www.ivpn.net/antitracker)", que bloqueia redes de publicidade e rastreadores a partir do nível da rede.

Recomendamos armazenar uma chave de recuperação local em um local seguro, em vez de utilizar a recuperação do iCloud FileVault. verificar "Clientes móveis".

    É importante notar que a utilização de um provedor VPN não o tornará anônimo, mas lhe dará melhor privacidade em certas situações. Uma VPN não é uma ferramenta para actividades ilegais. Não confies numa política de "sem registo". Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

## Framadate

!!! Isto permite-nos fornecer recomendações completamente objectivas.</strong> Desenvolvemos um conjunto claro de requisitos para qualquer provedor de VPN que deseje ser recomendado, incluindo criptografia forte, auditorias de segurança independentes, tecnologia moderna, e muito mais.

    It is important to note that using a VPN provider will not make you anonymous, but it will give you better privacy in certain situations. A VPN is not a tool for illegal activities. Don't rely on a "no log" policy.

Operar fora dos cinco/nove/quatro países não é necessariamente uma garantia de privacidade, e existem outros factores a considerar. No entanto, acreditamos que evitar esses países é importante se você deseja evitar a vigilância de arrastão do governo em massa, especialmente dos Estados Unidos. We suggest you familiarize yourself with this list before choosing a VPN provider, and conduct your own research to ensure the VPN provider you choose is as trustworthy as possible.

### Jurisdição

We require all our recommended VPN providers to provide OpenVPN configuration files to be used in any client. **If** a VPN provides their own custom client, we require a killswitch to block network data leaks when disconnected.

**O melhor caso:**

- Operando fora dos EUA ou de outros países da Five Eyes.
- Killswitch built in to clients.
- Multihop support. Multihopping is important to keep data private in case of a single node compromise.
- If VPN clients are provided, they should be [open-source](https://en.wikipedia.org/wiki/Open_source), like the VPN software they generally have built into them. We believe that [source code](https://en.wikipedia.org/wiki/Source_code) availability provides greater transparency about what your device is actually doing.

**Best Case:**

- Operando fora dos EUA ou de outros 14 países da 14 Eyes.
- Operando dentro de um país com fortes leis de proteção ao consumidor.
- Easy-to-use VPN clients
- Supports [IPv6](https://en.wikipedia.org/wiki/IPv6). We expect that servers will allow incoming connections via IPv6 and allow you to access services hosted on IPv6 addresses.
- Capability of [remote port forwarding](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) assists in creating connections when using P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) file sharing software or hosting a server (e.g., Mumble).

### Tecnologia

We prefer our recommended providers to collect as little data as possible. Not collecting personal information on registration, and accepting anonymous forms of payment are required.

**O melhor caso:**

- Suporte para protocolos fortes como o WireGuard & OpenVPN.
- Killswitch construído para os clientes.

**Best Case:**

- Suporte WireGuard e OpenVPN.
- Killswitch com opções altamente configuráveis (ativar/desativar em certas redes, no boot, etc.)

### Privacidade

A VPN is pointless if it can't even provide adequate security. We require all our recommended providers to abide by current security standards for their OpenVPN connections. Ideally, they would use more future-proof encryption schemes by default. We also require an independent third-party to audit the provider's security, ideally in a very comprehensive manner and on a repeated (yearly) basis.

**O melhor caso:**

- Monero ou opção de pagamento em dinheiro.
- Não é necessária nenhuma informação pessoal para se registar: Somente nome de usuário, senha e e-mail, no máximo.
- Published security audits from a reputable third-party firm.

**Best Case:**

- Aceita Monero, dinheiro e outras formas de pagamento anônimo (cartões presente, etc.)
- Não é necessária nenhuma informação pessoal para se registar: Somente nome de usuário, senha e e-mail, no máximo.
- Comprehensive published security audits from a reputable third-party firm.
- Programas de recompensa de bugs e/ou um processo coordenado de divulgação de vulnerabilidades.

### Segurança

You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**O melhor caso:**

- Esquemas de Criptografia Fortes: OpenVPN com autenticação SHA-256; RSA-2048 ou melhor aperto de mão; AES-256-GCM ou AES-256-CBC encriptação de dados.

**Best Case:**

- A Encriptação mais forte: RSA-4096.
- Perfect Forward Secrecy (PFS).

### Confiança

With the VPN providers we recommend we like to see responsible marketing.

**O melhor caso:**

- Deve auto-instalar análises (sem Google Analytics, etc.). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for people who want to opt-out.

Must not have any marketing which is irresponsible:

- Fazer garantias de protecção do anonimato a 100%. Quando alguém afirma que algo é 100%, significa que não há certeza de fracasso. We know people can quite easily deanonymize themselves in a number of ways, e.g.:
    - Reusing personal information (e.g., email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc.)
    - [Impressão digital do navegador](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Relatórios de transparência frequentes.
- Use responsible language: i.e., it is okay to say that a VPN is "disconnected" or "not connected", however claiming that someone is "exposed", "vulnerable" or "compromised" is needless use of alarming language that may be incorrect. For example, that person might simply be on another VPN provider's service or using Tor.

**Best Case:**

Responsible marketing that is both educational and useful to the consumer could include:

- An accurate comparison to when [Tor](tor.md) should be used instead.
- Availability of the VPN provider's website over a [.onion service](https://en.wikipedia.org/wiki/.onion)

### Marketing

While not strictly requirements, there are some factors we looked into when determining which providers to recommend. These include adblocking/tracker-blocking functionality, warrant canaries, multihop connections, excellent customer support, the number of allowed simultaneous connections, etc.

--8<-- "includes/abbreviations.pt.txt"

---
title: Serviços VPN
icon: material/vpn
---

Encontre um operador VPN sem registo que não esteja a vender ou a ler o seu tráfego web.

??? perigo "As VPNs não proporcionam anonimato".

    Usando uma VPN **não*** manterá seus hábitos de navegação anônimos, nem adicionará segurança adicional ao tráfego não seguro (HTTP).
    
    Se você está procurando por **anonimato**, você deve usar o Navegador Tor **em vez de** de uma VPN.
    
    Se você está procurando por **security** adicionado, você deve sempre garantir que você está se conectando a sites usando [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Uma VPN não é um substituto para as boas práticas de segurança.
    
    [Baixar Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

??? info "Quando é que as VPNs são úteis?"

    Se você está procurando por **privacidade adicional** do seu provedor, em uma rede Wi-Fi pública, ou enquanto estiver torrentando arquivos, uma VPN pode ser a solução para você, desde que você entenda os riscos envolvidos.
    
    [Mais informações](#vpn-overview){ .md-button }

## Provedores recomendados

!!! exemplo "Critérios".

    Nossos provedores recomendados estão fora dos EUA, usam criptografia, aceitam Monero, suportam WireGuard & OpenVPN, e têm uma política de não registro. Leia a nossa [lista completa de critérios](#nossos-critérios) para mais informações.

### Mullvad

!!! recomendação

    ![logo Mullvad](/assets/img/vpn/mullvad.svg#only-light){ align=right }
    ![Mullvad logo](/assets/img/vpn/mullvad-dark.svg#only-dark){ align=right }
    
    **Mullvad** é uma VPN rápida e barata com um foco sério na transparência e segurança. Eles estão em operação desde **2009***. Mullvad está sediada na Suécia e não tem um teste gratuito.
    
    **EUR 60 euros/ano***
    
    [Visite Mullvad.net](https://mullvad.net){ .md-button .md-button--primary }

??? verificar "35 Países".

    Mullvad tem [servidores em 35 países](https://mullvad.net/en/servers/) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

??? verificar "Auditado independentemente".

    Os clientes VPN da Mullvad foram auditados pela Cure53 e Assured AB num relatório de pentest [publicado na cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Os investigadores de segurança concluíram:
    
    > Cure53 e Assured AB estão satisfeitos com os resultados da auditoria e o software deixa uma impressão geral positiva. Com a dedicação da equipe interna do complexo Mullvad VPN, os testadores não têm dúvidas de que o projeto está no caminho certo do ponto de vista de segurança.
    
    Em 2020 uma segunda auditoria [foi anunciada](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) e o [relatório de auditoria final](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) foi disponibilizado no site do Cure53:
    
    > Os resultados deste projecto de Maio-Junho de 2020, que visa o complexo Mullvad, são bastante positivos. [...] O ecossistema de aplicação global utilizado pela Mullvad deixa uma impressão sólida e estruturada. A estrutura geral da aplicação facilita a aplicação de remendos e reparos de forma estruturada. Mais do que tudo, os resultados obtidos por Cure53 mostram a importância de auditar e reavaliar constantemente os atuais vetores de fuga, a fim de garantir sempre a privacidade dos usuários finais. Dito isto, a Mullvad faz um excelente trabalho protegendo o usuário final de vazamentos comuns de Dados de Identificação Pessoal e riscos relacionados à privacidade.
    
    Em 2021 uma auditoria de infra-estrutura [foi anunciada](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) e o [relatório final de auditoria](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) foi disponibilizado no site do Cure53.

??? verificar "Clientes de código aberto".

    A Mullvad fornece o código fonte para seus clientes desktop e móveis em sua [organização GitHub](https://github.com/mullvad/mullvadvpn-app).

??? cheque "Aceita Dinheiro".

    Mullvad, além de aceitar cartões de crédito/débito e PayPal, aceita Bitcoin, Bitcoin Cash, e **cash/moeda local*** como formas de pagamento anônimas. Eles também aceitam Swish e transferências bancárias.

??? verificar "Suporte WireGuard".

    A Mullvad suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) o uso do WireGuard com o seu serviço. É o protocolo padrão ou único protocolo nos aplicativos Android, iOS, macOS e Linux da Mullvad, enquanto os usuários de Windows têm de [habilitar manualmente](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. A Mullvad também oferece um gerador de configuração WireGuard para uso com o WireGuard oficial [apps](https://www.wireguard.com/install/).

??? verificar "Suporte IPv6".

    A Mullvad suporta o futuro do networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Sua rede permite aos usuários [acessar serviços hospedados em IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) em oposição a outros provedores que bloqueiam conexões IPv6.

??? verificar "Remote Port Forwarding".

    O Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) é permitido para usuários que fazem pagamentos únicos, e não é permitido para contas com um método de pagamento periódico/subscrição. Isto é para evitar que a Mullvad seja capaz de identificar os usuários do porto com base em informações de assinatura armazenadas. Veja [Port forwarding com Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) para mais informações.

??? verificar "Clientes móveis".

    A Mullvad publicou clientes [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) e [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos com suporte a uma interface fácil de usar, em vez de exigir que os usuários configurem manualmente suas conexões do WireGuard. O cliente móvel no Android também está disponível em [F-Droid](https://f-droid.org/packages/net.mullvad.mullvadvpn), o que garante que ele seja compilado com [builds reproduzíveis](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html).

??? info "Funcionalidade Adicional

    Mullvad é muito transparente sobre quais nós eles [possuem ou alugam](https://mullvad.net/en/servers/). Eles usam [ShadowSocks](https://shadowsocks.org/en/index.html) na sua configuração ShadowSocks OpenVPN, tornando-os mais resistentes contra firewalls com [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) tentando bloquear VPNs. Supostamente, [a China tem que usar um método diferente para bloquear os servidores ShadowSocks](https://github.com/net4people/bbs/issues/22). O website da Mullvad também está acessível via Tor em [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### ProtonVPN

!!! recomendação

    ![ProtonVPN logo](/assets/img/vpn/protonvpn.svg){ align=right }
    
    **ProtonVPN*** é um forte concorrente no espaço VPN, e estão em operação desde 2016. ProtonVPN está baseado na Suíça e oferece um nível de preços livre limitado, bem como opções premium. Eles oferecem mais 14 iscount para a compra de uma assinatura de 2 anos.
    
    **Livre** - **Plano básico USD $48/ano** - **Plano plano USD $96/ano***
    
    [Visite ProtonVPN.com](https://protonvpn.com/){ .md-button .md-button--primary }

??? verificar "44 Países".

    ProtonVPN tem [servidores em 44 países](https://protonvpn.com/vpn-servers) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

??? verificar "Auditado independentemente".

    Desde Janeiro de 2020, o ProtonVPN foi submetido a uma auditoria independente pela SEC Consult. A SEC Consult encontrou algumas vulnerabilidades de médio e baixo risco nas aplicações Windows, Android e iOS do ProtonVPN, todas "devidamente corrigidas" pelo ProtonVPN antes da publicação dos relatórios. Nenhum dos problemas identificados teria fornecido a um atacante acesso remoto ao dispositivo ou tráfego de um usuário. Você pode ver relatórios individuais para cada plataforma em [protonvpn.com](https://protonvpn.com/blog/open-source/).

??? verificar "Clientes de código aberto".

    ProtonVPN fornece o código fonte para seus clientes desktop e móveis em sua [organização GitHub](https://github.com/ProtonVPN).

??? cheque "Aceita Dinheiro".

    ProtonVPN, além de aceitar cartões de crédito/débito e PayPal, aceita Bitcoin, e **cash/moeda local*** como formas anônimas de pagamento.

??? verificar "Suporte WireGuard".

    ProtonVPN suporta principalmente o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    ProtonVPN [recommends](https://protonvpn.com/blog/wireguard/) o uso do WireGuard com o seu serviço. Nos aplicativos Windows, MacOS, iOS, Android, ChromeOS e Android TV da ProtonVPN, o WireGuard é o protocolo padrão; entretanto, [support](https://protonvpn.com/support/how-to-change-vpn-protocols/) para o protocolo não está presente em seu aplicativo Linux.

??? Falta o "Remote Port Forwarding".

    ProtonVPN não suporta actualmente o reencaminhamento remoto de portas, o que pode ter impacto em algumas aplicações. Especialmente aplicações Peer-to-Peer como clientes Torrent.

??? verificar "Clientes móveis".

    Além de fornecer arquivos de configuração padrão OpenVPN, ProtonVPN tem clientes móveis para [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085) e [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US) permitindo fácil conexão com seus servidores. O cliente móvel no Android também está disponível em [F-Droid](https://f-droid.org/en/packages/ch.protonvpn.android), o que garante que ele seja compilado com [builds reprodutíveis](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html).

??? info "Funcionalidade Adicional

    ProtonVPN têm seus próprios servidores e datacenters na Suíça, Islândia e Suécia. Eles oferecem bloqueio de domínios malware conhecidos e de bloqueio com o seu serviço DNS. Além disso, ProtonVPN também oferece servidores "Tor" que permitem que você se conecte facilmente a sites de cebola, mas ainda assim recomendamos fortemente o uso [do Navegador Oficial Tor](https://www.torproject.org/) para este propósito.

### IVPN

!!! recomendação

    ![logótipo IVPN](/assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN*** é outro provedor VPN premium, e estão em operação desde 2009. A IVPN está sediada em Gibraltar.
    
    **Padrão USD $60/ano*** - **Pro USD $100/ano***
    
    [Visite IVPN.net](https://www.ivpn.net/){ .md-button .md-button--primary }

??? verificar "32 Países".

    IVPN tem [servidores em 32 países](https://www.ivpn.net/server-locations) no momento de escrever esta página. Escolher um provedor VPN com um servidor mais próximo de você irá reduzir a latência do tráfego de rede que você envia. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
    
    Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

??? verificar "Auditado independentemente".

    A IVPN foi submetida a uma [auditoria sem registro do Cure53](https://cure53.de/audit-report_ivpn.pdf) que concluiu em acordo com a alegação de não registro da IVPN. O IVPN também completou um [relatório abrangente de pentest Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) em janeiro de 2020. O IVPN também disse que planeja ter [relatórios anuais](https://www.ivpn.net/blog/independent-security-audit-concluded) no futuro.

??? verificar "Clientes de código aberto".

    A partir de Fevereiro de 2020 [as aplicações IVPN são agora código aberto](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). O código fonte pode ser obtido na sua [organização GitHub](https://github.com/ivpn).

??? cheque "Aceita Dinheiro e Monero".

    Além de aceitar cartões de crédito/débito e PayPal, IVPN aceita Bitcoin, **Monero** e **cash/moeda local*** (em planos anuais) como formas de pagamento anônimas.

??? verificar "Suporte WireGuard".

    O IVPN suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com)[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.
    
    IVPN [recommends](https://www.ivpn.net/wireguard/) o uso do WireGuard com seu serviço e, como tal, o protocolo é o padrão em todas as aplicações do IVPN. O IVPN também oferece um gerador de configuração WireGuard para uso com o WireGuard oficial [apps](https://www.wireguard.com/install/).

??? verificar "Remote Port Forwarding".

    O envio remoto [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) é possível com um plano Pro. Port forwarding [pode ser ativado](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) através da área do cliente. O encaminhamento de portas só está disponível no IVPN quando usando os protocolos WireGuard ou OpenVPN e está [desabilitado em servidores dos EUA](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? verificar "Clientes móveis".

    Além de fornecer arquivos de configuração padrão OpenVPN, o IVPN tem clientes móveis para [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683) e [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), permitindo fácil conexão com seus servidores. O cliente móvel no Android também está disponível em [F-Droid](https://f-droid.org/en/packages/net.ivpn.client), o que garante que ele seja compilado com [builds reproduzíveis](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html).

??? info "Funcionalidade Adicional

    Clientes IVPN suportam dois factores de autenticação (clientes Mullvad e ProtonVPN não suportam). IVPN também fornece a funcionalidade "[AntiTracker](https://www.ivpn.net/antitracker)", que bloqueia redes de publicidade e rastreadores a partir do nível da rede.

## Nossos Critérios

!!! perigo

    É importante notar que a utilização de um provedor VPN não o tornará anônimo, mas lhe dará melhor privacidade em certas situações. Uma VPN não é uma ferramenta para actividades ilegais. Não confies numa política de "sem registo".

**Por favor, note que não estamos afiliados a nenhum dos provedores que recomendamos. Isto permite-nos fornecer recomendações completamente objectivas.** Desenvolvemos um conjunto claro de requisitos para qualquer provedor de VPN que deseje ser recomendado, incluindo criptografia forte, auditorias de segurança independentes, tecnologia moderna, e muito mais. Sugerimos que você se familiarize com esta lista antes de escolher um provedor VPN, e conduza sua própria pesquisa para garantir que o provedor VPN que você escolher seja o mais confiável possível.

### Jurisdição

Operar fora dos cinco/nove/quatro países não é necessariamente uma garantia de privacidade, e existem outros factores a considerar. No entanto, acreditamos que evitar esses países é importante se você deseja evitar a vigilância de arrastão do governo em massa, especialmente dos Estados Unidos.

**Mínimo para se qualificar:**

- Operando fora dos EUA ou de outros países da Five Eyes.

**O melhor caso:**

- Operando fora dos EUA ou de outros 14 países da 14 Eyes.
- Operando dentro de um país com fortes leis de proteção ao consumidor.

### Tecnologia

Nós exigimos que todos os nossos provedores VPN recomendados forneçam arquivos de configuração OpenVPN para serem usados em qualquer cliente. **Se** uma VPN fornece seu próprio cliente personalizado, exigimos um killwitch para bloquear vazamentos de dados da rede quando desconectado.

**Mínimo para se qualificar:**

- Suporte para protocolos fortes como o WireGuard & OpenVPN.
- Killswitch construído para os clientes.
- Apoio Multihop. Multihopping é importante para manter os dados privados em caso de comprometimento de um único nó.
- Se clientes VPN são fornecidos, eles devem ser [open source](https://en.wikipedia.org/wiki/Open_source), como o software VPN que eles geralmente têm embutido neles. Acreditamos que [código fonte](https://en.wikipedia.org/wiki/Source_code) disponibilidade proporciona maior transparência ao usuário sobre o que seu dispositivo está realmente fazendo. Gostamos de ver estas aplicações [disponíveis em F-Droid](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html).

**O melhor caso:**

- Suporte WireGuard e OpenVPN.
- Killswitch com opções altamente configuráveis (ativar/desativar em certas redes, no boot, etc.)
- Clientes VPN fáceis de usar
- Suporta [IPv6](https://en.wikipedia.org/wiki/IPv6). Esperamos que os servidores permitam conexões de entrada via IPv6 e que os usuários possam acessar serviços hospedados em endereços IPv6.
- A capacidade de [encaminhamento de porta remota](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) auxilia na criação de conexões ao usar P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) software de compartilhamento de arquivos, Freenet, ou hospedagem de um servidor (por exemplo, Mumble).

### Privacidade

Preferimos que os nossos fornecedores recomendados recolham o mínimo de dados possível. Não recolher informações pessoais sobre o registo e aceitar formas de pagamento anónimas são necessárias.

**Mínimo para se qualificar:**

- Monero ou opção de pagamento em dinheiro.
- Não é necessária nenhuma informação pessoal para se registar: Somente nome de usuário, senha e e-mail, no máximo.

**O melhor caso:**

- Aceita Monero, dinheiro e outras formas de pagamento anônimo (cartões presente, etc.)
- Nenhuma informação pessoal aceita (nome de usuário gerado automaticamente, nenhum e-mail necessário, etc.)

### Segurança

Uma VPN é inútil se não puder sequer fornecer segurança adequada. Exigimos que todos os nossos provedores recomendados sigam os padrões de segurança atuais para suas conexões OpenVPN. Idealmente, eles usariam mais esquemas de criptografia à prova de futuro, por padrão. Também exigimos uma terceira parte independente para auditar a segurança do provedor, idealmente de uma forma muito abrangente e de forma repetida (anual).

**Mínimo para se qualificar:**

- Esquemas de Criptografia Fortes: OpenVPN com autenticação SHA-256; RSA-2048 ou melhor aperto de mão; AES-256-GCM ou AES-256-CBC encriptação de dados.
- Perfect Forward Secrecy (PFS).
- Publicou auditorias de segurança de uma empresa terceirizada respeitável.

**O melhor caso:**

- A Encriptação mais forte: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Auditorias de segurança publicadas por uma empresa terceirizada de renome.
- Programas de recompensa de bugs e/ou um processo coordenado de divulgação de vulnerabilidades.

### Confiança

Você não confiaria suas finanças a alguém com uma identidade falsa, então por que confiar seus dados da Internet a alguém? Exigimos que nossos provedores recomendados sejam públicos sobre sua propriedade ou liderança. Também gostaríamos de ver relatórios de transparência frequentes, especialmente no que diz respeito à forma como os pedidos do governo são tratados.

**Mínimo para se qualificar:**

- Liderança ou propriedade pública.

**O melhor caso:**

- Liderança voltada para o público.
- Relatórios de transparência frequentes.

### Marketing

Com os provedores de VPN nós recomendamos que nós gostamos de ver o marketing responsável.

**Mínimo para se qualificar:**

- Deve auto-instalar análises (sem Google Analytics, etc.). O site do provedor também deve cumprir com [DNT (Não rastrear)](https://en.wikipedia.org/wiki/Do_Not_Track) para aqueles usuários que querem optar por não participar.

Não deve ter nenhum marketing que seja irresponsável:

- Fazer garantias de protecção do anonimato a 100%. Quando alguém afirma que algo é 100%, significa que não há certeza de fracasso. Sabemos que os usuários podem facilmente se desanonimizar de várias maneiras, por exemplo:
- Reutilização de informações pessoais, por exemplo. (contas de e-mail, pseudónimos únicos, etc.) que acederam sem software de anonimato (Tor, VPN, etc.)
- [Impressão digital do navegador](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Afirmar que um único circuito VPN é "mais anônimo" que o Tor, que é um circuito de 3 ou mais lúpulos que muda regularmente.
- Use linguagem responsável, por exemplo, não faz mal dizer que uma VPN está "desconectada" ou "não conectada", no entanto, afirmar que um usuário está "exposto", "vulnerável" ou "comprometido" é um uso desnecessário de linguagem alarmante que pode ser incorreta. Por exemplo, o usuário visitante pode estar no serviço de outro provedor VPN ou usando o Tor.

**O melhor caso:**

Um marketing responsável que seja simultaneamente educativo e útil para o consumidor poderia incluir:

- Uma comparação precisa de quando Tor ou outro [redes autónomas](/self-contained-networks) deve ser usado.
- Disponibilidade do site do provedor de VPN sobre um .onion [Serviço oculto](https://en.wikipedia.org/wiki/.onion)

### Funcionalidade adicional

Embora não haja requisitos rigorosos, há alguns factores que analisámos ao determinar quais os fornecedores a recomendar. Estes incluem a funcionalidade de bloqueio/bloqueio por adbloqueio, canários de mandado, ligações multi-lojas, excelente suporte ao cliente, o número de ligações simultâneas permitidas, etc.

## Visão Geral VPN

### Devo usar uma VPN?

**Sim**, a menos que você já esteja usando Tor. Uma VPN faz 2 coisas: transferir os riscos do seu Provedor de Internet para si mesmo e esconder o seu IP de um serviço de terceiros.

As VPNs não podem encriptar dados fora da ligação entre o seu dispositivo e o servidor VPN. Os provedores de VPN podem ver e modificar o seu tráfego da mesma forma que o seu ISP poderia. E não há como verificar de forma alguma as políticas de "não registro" de um provedor de VPN.

No entanto, eles escondem o seu IP real de um serviço de terceiros, desde que não haja fugas de IP. Eles ajudam-no a misturar-se com outros e a mitigar o rastreamento baseado em IP.

### E a encriptação?

A encriptação oferecida pelos provedores de VPN está entre seus dispositivos e seus servidores. Ele garante que esta ligação específica é segura. Este é um passo acima do uso de proxies não criptografados onde um adversário na rede pode interceptar as comunicações entre seus dispositivos e os referidos proxies e modificá-los. No entanto, a encriptação entre suas aplicações ou navegadores com os provedores de serviços não são tratados por esta encriptação.

Para manter o que você realmente faz nos sites que você visita privados e seguros, você deve usar HTTPS. Isto irá manter suas senhas, tokens de sessão e consultas seguras do provedor VPN. Considere ativar "HTTPS em qualquer lugar" no seu navegador para mitigar ataques de downgrade como [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

### Devo utilizar DNS encriptado com uma VPN?

A menos que o seu provedor VPN hospede os servidores DNS criptografados, **no**. Usando DOH/DOT (ou qualquer outra forma de DNS criptografado) com servidores de terceiros irá simplesmente adicionar mais entidades para confiar, e faz **absolutamente nada** para melhorar a sua privacidade/segurança. O seu provedor VPN ainda pode ver quais sites você visita com base nos endereços IP e outros métodos. Em vez de confiar apenas no seu provedor VPN, agora você está confiando tanto no provedor VPN quanto no provedor DNS.

Uma razão comum para recomendar o DNS criptografado é que ele ajuda contra a falsificação do DNS. No entanto, o seu navegador já deve estar verificando por [certificados TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) com **HTTPS** e avisá-lo sobre isso. Se você não estiver usando **HTTPS**, então um adversário ainda pode modificar qualquer outra coisa além das suas consultas DNS e o resultado final será pouco diferente.

Escusado será dizer que **você não deve usar DNS criptografado com Tor**. Isso direcionaria todos os seus pedidos DNS através de um único circuito e permitiria que o provedor de DNS criptografado desanonimizasse você.

### Devo usar Tor *e* uma VPN?

Ao usar uma VPN com Tor, você está criando essencialmente um nó de entrada permanente, muitas vezes com uma trilha de dinheiro anexada. Isto proporciona zero benefício adicional para você, enquanto aumenta dramaticamente a superfície de ataque da sua conexão. Se você deseja ocultar seu uso do Tor do seu provedor ou do seu governo, o Tor tem uma solução integrada para isso: Pontes Tor. [Leia mais sobre pontes Tor e porque não é necessário utilizar uma VPN](https://web.archive.org/web/20210116140725/https://write.privacytools.io/my-thoughts-on-security/slicing-onions-part-2-onion-recipes-vpn-not-required).

### E se eu precisar de anonimato?

As VPNs não podem fornecer o anonimato. O seu fornecedor de VPN ainda verá o seu verdadeiro endereço IP, e muitas vezes tem um rasto de dinheiro que pode ser ligado directamente de volta a si. Você não pode confiar nas políticas de "sem registro" para proteger seus dados. Use [Tor](https://www.torproject.org/) em vez disso.

### E os provedores de VPN que fornecem nós Tor?

Não utilize esse recurso. O objetivo de usar o Tor é que você não confia no seu provedor VPN. Atualmente Tor suporta apenas o protocolo [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) . [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (usado em [WebRTC](https://en.wikipedia.org/wiki/WebRTC) para partilha de voz e vídeo, o novo [http3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) protocolo, etc), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) e outros pacotes serão descartados. Para compensar isso, os provedores de VPN normalmente roteiam todos os pacotes não TCP através do seu servidor VPN (o seu primeiro salto). Este é o caso com [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Adicionalmente, ao usar este Tor sobre configuração VPN, você não tem controle sobre outras características importantes do Tor como [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (usando um circuito Tor diferente para cada domínio que você visita).

Assim, esta funcionalidade deve ser vista como uma forma conveniente de acesso à Rede Tor, não para permanecer no anonimato. Para uma verdadeira anonimidade, use o Tor Browser Bundle, TorSocks, ou um gateway Tor.

### Quando é que as VPNs são úteis?

Uma VPN pode ainda ser-lhe útil numa variedade de cenários, como por exemplo:

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.
2. Esconder os seus downloads (tais como torrents) do seu ISP e organizações anti-pirataria.
3. Ocultar o seu IP de sites e serviços de terceiros, impedindo o rastreamento baseado em IP.

Para casos de uso como estes, ou se você tem outra razão convincente, os provedores de VPN que listamos acima são os que achamos que são mais confiáveis. No entanto, usar um provedor VPN ainda significa que você está *confiando* no provedor. Em praticamente qualquer outro cenário você deve estar usando uma ferramenta segura**-by-design** como o Tor.

### Fontes e Leituras Adicionais

1. [VPN - a Very Precarious Narrative](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) por Dennis Schubert
2. [As redes autónomas](/self-contained-networks) recomendadas pelo Privacy Guides são capazes de substituir uma VPN que permite o acesso a serviços na rede local
3. [Cebolas fatiadas: Parte 1 - Mito que quebra o Tor](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904) por luz negra447
4. [Cebolas fatiadas: Parte 2 - Receitas de cebolas; VPN não necessária](https://web.archive.org/web/20210116140725/https://write.privacytools.io/my-thoughts-on-security/slicing-onions-part-2-onion-recipes-vpn-not-required) por blackklight447
5. [Guias de Privacidade IVPN](https://www.ivpn.net/privacy-guides)
6. ["Preciso de uma VPN?"](https://www.doineedavpn.com), uma ferramenta desenvolvida pela IVPN para desafiar o marketing VPN agressivo e ajudar os indivíduos a decidir se uma VPN é adequada para eles.

## Informação VPN relacionada

- [O Problema com VPN e Sites de Revisão de Privacidade](https://medium.com/privacyguides/the-trouble-with-vpn-and-privacy-review-sites-ae9b29eda8fd)
- [Provedor de VPN Proxy.sh Tráfego de Servidor Sniffed para Apanhar Hacker](https://torrentfreak.com/proxy-sh-vpn-provider-monitored-traffic-to-catch-hacker-130930/)
- [blackVPN anunciou a eliminação dos registos de ligação após a desconexão](https://medium.com/@blackVPN/no-logs-6d65d95a3016)
- [Não use o LT2P IPSec, use outros protocolos.](https://gist.github.com/kennwhite/1f3bc4d889b02b35d8aa)
- [Investigação VPN gratuita](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Os proprietários de VPNs ocultas reveladas: 101 produtos VPN geridos por apenas 23 empresas](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Esta empresa chinesa está secretamente por trás de 24 aplicações populares que procuram permissões perigosas](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

## Violações relacionadas com VPN - por que a auditoria externa é importante

- [VPN "Zero logs" expõe milhões de logs incluindo senhas de usuários, os dados das reivindicações são anônimos](https://www.comparitech.com/blog/vpn-privacy/ufo-vpn-data-exposure/) Julho 2020
- [NordVPN HTTP POST bug exposta informação do cliente, sem necessidade de autenticação](https://www.zdnet.com/article/nordvpn-http-post-bug-exposed-sensitive-customer-information/) Março 2020
- [A linha irrompe sobre quem culpar depois do NordVPN dizer: Um dos nossos servidores foi invadido através de uma ferramenta de gestão remota](https://www.theregister.com/2019/10/21/nordvpn_security_issue/) Outubro de 2019
- [Os servidores VPN apreendidos pelas autoridades ucranianas não eram encriptados e permitiam que as autoridades imitassem os servidores Windscribe e capturassem e desencriptassem o tráfego que passava por eles](https://arstechnica.com/gadgets/2021/07/vpn-servers-seized-by-ukrainian-authorities-werent-encrypted/) Julho 2021

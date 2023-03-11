---
title: "VPN Services"
icon: material/vpn
description: These are the best VPN services for protecting your privacy and security online. Find a provider here that isn’t out to spy on you.
---

If you're looking for additional **privacy** from your ISP, on a public Wi-Fi network, or while torrenting files, a VPN may be the solution for you as long as you understand the risks involved. We think these providers are a cut above the rest:

<div class="grid cards" markdown>

- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! perigo "As VPNs não proporcionam anonimato".

    Usando uma VPN **não*** manterá seus hábitos de navegação anônimos, nem adicionará segurança adicional ao tráfego não seguro (HTTP).
    
    Se você está procurando por **anonimato**, você deve usar o Navegador Tor **em vez de** de uma VPN.
    
    Se você está procurando por **security** adicionado, você deve sempre garantir que você está se conectando a sites usando [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Uma VPN não é um substituto para as boas práticas de segurança.
    
    [Baixar Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

[Detailed VPN Overview :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Provedores recomendados

Nossos provedores recomendados estão fora dos EUA, usam criptografia, aceitam Monero, suportam WireGuard & OpenVPN, e têm uma política de não registro. Read our [full list of criteria](#criteria) for more information.

### ProtonVPN

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![ProtonVPN logo](/assets/img/vpn/protonvpn.svg){ align=right }
    
    **ProtonVPN*** é um forte concorrente no espaço VPN, e estão em operação desde 2016. ProtonVPN está baseado na Suíça e oferece um nível de preços livre limitado, bem como opções premium.
    
    Eles oferecem mais 14 iscount para a compra de uma assinatura de 2 anos. Também achamos que é melhor para a segurança das chaves privadas do provedor de VPN se ele usar [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), ao invés de soluções compartilhadas mais baratas (com outros clientes), como [servidores virtuais privados](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } 35 Countries

IVPN has [servers in 35 countries](https://www.ivpn.net/server-locations).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
{ .annotate }

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

IVPN has undergone a [no-logging audit from Cure53](https://cure53.de/audit-report_ivpn.pdf) which concluded in agreement with IVPN's no-logging claim. IVPN has also completed a [comprehensive pentest report Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in January 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

As of February 2020 [IVPN applications are now open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepts Cash and Monero

In addition to accepting credit/debit cards and PayPal, IVPN accepts Bitcoin, **Monero** and **cash/local currency** (on annual plans) as anonymous forms of payment.

#### :material-check:{ .pg-green } WireGuard Support

ProtonVPN suporta principalmente o protocolo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.

IVPN [recommends](https://www.ivpn.net/wireguard/) the use of WireGuard with their service and, as such, the protocol is the default on all of IVPN's apps. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is possible with a Pro plan. Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, IVPN has mobile clients for [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), and [GitHub](https://github.com/ivpn/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

ProtonVPN têm seus próprios servidores e datacenters na Suíça, Islândia e Suécia. IVPN also provides "[AntiTracker](https://www.ivpn.net/antitracker)" functionality, which blocks advertising networks and trackers from the network level.

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

#### :material-check:{ .pg-green } 41 Countries

Mullvad has [servers in 41 countries](https://mullvad.net/servers/).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
{ .annotate }

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Mullvad's VPN clients have been audited by Cure53 and Assured AB in a pentest report [published at cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). The security researchers concluded:

> Cure53 and Assured AB are happy with the results of the audit and the software leaves an overall positive impression. With security dedication of the in-house team at the Mullvad VPN compound, the testers have no doubts about the project being on the right track from a security standpoint.

In 2020 a second audit [was announced](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) was made available on Cure53's website:

> The results of this May-June 2020 project targeting the Mullvad complex are quite positive. [...] The overall application ecosystem used by Mullvad leaves a sound and structured impression. The overall structure of the application makes it easy to roll out patches and fixes in a structured manner. More than anything, the findings spotted by Cure53 showcase the importance of constantly auditing and re-assessing the current leak vectors, in order to always ensure privacy of the end-users. With that being said, Mullvad does a great job protecting the end-user from common PII leaks and privacy related risks.

In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Open-Source Clients

Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepts Cash and Monero

Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. \[WireGuard\](https://www.wireguard.com)\[^1] é um protocolo mais recente que utiliza o estado da arte [cryptography\](https://www.wireguard.com/protocol/).

#### :material-check:{ .pg-green } WireGuard Support

O IVPN suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.

Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } IPv6 Support

Mullvad supports the future of networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Their network allows you to [access services hosted on IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) as opposed to other providers who block IPv6 connections.

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is allowed for people who make one-time payments, but not allowed for accounts with a recurring/subscription-based payment method. O cliente móvel no Android também está disponível em \[F-Droid\](https://f-droid.org/en/packages/net.ivpn.client), o que garante que ele seja compilado com \[builds reproduzíveis\](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

#### :material-check:{ .pg-green } Mobile Clients

Mullvad has published [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) and [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients, both supporting an easy-to-use interface as opposed to requiring you to manually configure your WireGuard connection. The Android client is also available on [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Additional Functionality

Mullvad is very transparent about which nodes they [own or rent](https://mullvad.net/en/servers/). They use [ShadowSocks](https://shadowsocks.org/) in their ShadowSocks + OpenVPN configuration, making them more resistant against firewalls with [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) trying to block VPNs. Supposedly, [China has to use a different method to block ShadowSocks servers](https://github.com/net4people/bbs/issues/22). Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

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

#### :material-check:{ .pg-green } 67 Countries

Proton VPN has [servers in 67 countries](https://protonvpn.com/vpn-servers).(1) Picking a VPN provider with a server nearest to you will reduce latency of the network traffic you send. Isto é devido a uma rota mais curta (menos lúpulo) para o destino.
{ .annotate }

1. Ocultar o seu tráfego de **apenas** o seu fornecedor de serviços de Internet.

We also think it's better for the security of the VPN provider's private keys if they use [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service), instead of cheaper shared solutions (with other customers) such as [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Independently Audited

Os clientes VPN da Mullvad foram auditados pela Cure53 e Assured AB num relatório de pentest \[publicado na cure53.de\](https://cure53.de/pentest-report_mullvad_v2.pdf). Os investigadores de segurança concluíram:

&gt; Cure53 e Assured AB estão satisfeitos com os resultados da auditoria e o software deixa uma impressão geral positiva. Com a dedicação da equipe interna do complexo Mullvad VPN, os testadores não têm dúvidas de que o projeto está no caminho certo do ponto de vista de segurança. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source/). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit/) and the report was [produced by Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Open-Source Clients

Proton VPN provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepts Cash

Proton VPN, in addition to accepting credit/debit cards, PayPal, and [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), also accepts **cash/local currency** as an anonymous form of payment.

#### :material-check:{ .pg-green } WireGuard Support

A Mullvad suporta o protocolo WireGuard®. [WireGuard](https://www.wireguard.com) is a newer protocol that uses state-of-the-art [cryptography](https://www.wireguard.com/protocol/). Além disso, o WireGuard pretende ser mais simples e mais performante.

Proton VPN [recommends](https://protonvpn.com/blog/wireguard/) the use of WireGuard with their service. On Proton VPN's Windows, macOS, iOS, Android, ChromeOS, and Android TV apps, WireGuard is the default protocol; however, [support](https://protonvpn.com/support/how-to-change-vpn-protocols/) for the protocol is not present in their Linux app.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

Proton VPN currently only supports remote [port forwarding](https://protonvpn.com/support/port-forwarding/) on Windows, which may impact some applications. Sua rede permite aos usuários \[acessar serviços hospedados em IPv6\](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) em oposição a outros provedores que bloqueiam conexões IPv6.

#### :material-check:{ .pg-green } Mobile Clients

In addition to providing standard OpenVPN configuration files, Proton VPN has mobile clients for [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases) allowing for easy connections to their servers.

#### :material-information-outline:{ .pg-blue } Additional Functionality

A Mullvad publicou clientes \[App Store\](https://apps.apple.com/app/mullvad-vpn/id1488466513) e \[Google Play\](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos com suporte a uma interface fácil de usar, em vez de exigir que os usuários configurem manualmente suas conexões do WireGuard. O cliente móvel no Android também está disponível em \[F-Droid\](https://f-droid.org/packages/net.mullvad.mullvadvpn), o que garante que ele seja compilado com \[builds reproduzíveis\](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). They offer adblocking and known malware domains blocking with their DNS service. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

#### :material-alert-outline:{ .pg-orange } Killswitch feature is broken on Intel-based Macs

System crashes [may occur](https://protonvpn.com/support/macos-t2-chip-kill-switch/) on Intel-based Macs when using the VPN killswitch. Eles usam \[ShadowSocks\](https://shadowsocks.org/en/index.html) na sua configuração ShadowSocks OpenVPN, tornando-os mais resistentes contra firewalls com \[Deep Packet Inspection\](https://en.wikipedia.org/wiki/Deep_packet_inspection) tentando bloquear VPNs.

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

- [Anonymous cryptocurrency](cryptocurrency.md) **or** cash payment option.
- Killswitch construído para os clientes.

**Best Case:**

- Accepts multiple [anonymous payment options](advanced/payments.md).
- No personal information accepted (autogenerated username, no email required, etc.).

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

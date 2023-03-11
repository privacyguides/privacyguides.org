---
title: "Introdução ao DNS"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

Encrypted DNS with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. DNS criptografado não o ajudará a ocultar qualquer atividade de navegação.

[Learn more about DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Provedores recomendados

| DNS                                                                             | Política de Privacidade                                                                               | Protocolo | Protocolos                                                  | Logging      | ECS                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Comercial | Cleartext <br> DoH <br> DoT <br> DNSCrypt | 4            | Não Filter list being used can be found here. [**DNS sobre HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) como definido em [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) consultas de pacotes no protocolo [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) e fornece segurança com [HTTPS](https://en.wikipedia.org/wiki/HTTPS). |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Comercial | Cleartext <br> DoH <br> DoT                     | 4            | Não                                                                                                                                                                                                                                                                                                                                                 |
| [**ControlID**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Comercial | Cleartext <br> DoH <br> DoT                     | 4            | Não                                                                                                                                                                                                                                                                                                                                                 |
| [**IVPN**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)         | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | Comercial | DoH <br> DoT                                          | 4            | Não Filter list being used can be found here. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)                                                                                                                                                                                                                                 |
| [**PróximoDNS**](https://www.nextdns.io)                                        | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Comercial | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Opcional[^5] | Não                                                                                                                                                                                                                                                                                                                                                 |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Comercial | Some[^6]                                                    | Opcional[^5] | Based on server choice, Malware blocking by default.                                                                                                                                                                                                                                                                                                |

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

- Deve suportar [DNSSEC](technology/dns.md#what-is-dnssec-and-when-is-it-used)
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Allow for [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) to be disabled.
- Prefer [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support or geo-steering support.

## DNS não criptografado

### Android

As últimas versões do iOS, iPadOS, tvOS e macOS, suportam tanto DoT como DoH. Ambos os protocolos são suportados nativamente através de [perfis de configuração](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) ou através de [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

### Dispositivos Apple

Após a instalação de um perfil de configuração ou de um aplicativo que utiliza a API de configurações DNS, a configuração DNS pode ser selecionada. Se uma VPN estiver activa, a resolução dentro do túnel VPN utilizará as definições DNS da VPN e não as definições de todo o seu sistema.

A Apple não fornece uma interface nativa para a criação de perfis DNS criptografados. [Criador de perfil DNS seguro](https://dns.notjakob.com/tool.html) é uma ferramenta não oficial para criar os seus próprios perfis DNS encriptados, no entanto eles não serão assinados.

#### Signed Profiles

Apple does not provide a native interface for creating encrypted DNS profiles. Informações Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    ![logótipo DNSCloak](/assets/img/ios/dnscloak.png){ align=right }
    
    **DNSCloak** é um cliente iOS de código aberto que suporta [DNS-over-HTTPS](/dns/#dns-over-https-doh), [DNSCrypt](/dns/#dnscrypt), e [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki) opções como respostas DNS em cache, consultas DNS de registo local, e listas de blocos personalizadas. Os usuários podem [adicionar resolvedores personalizados por carimbo DNS](https://medium.com/privacyguides/adding-custom-dns-over-https-resolvers-to-dnscloak-20ff5845f4b5).

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](advanced/dns-overview.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### DNS

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo dnscrypt-proxy](/assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** é um proxy DNS com suporte para [DNSCrypt](/dns/#dnscrypt), [DNS-over-HTTPS](/dns/#dns-over-https-doh), e [DNS anonimizado](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    [Visite github.com](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .md-button .md-button--primary } [Política de Privacidade](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/DNSCrypt/dnscrypt-proxy) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### DNSCrypt

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** is a DNS proxy with support for [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), and [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "The anonymized DNS feature does [**not**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonymize other network traffic."
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Self-hosted Solutions

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as Smart TVs and other IoT devices, as no client-side software is needed.

### RethinkDNS

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    AdGuard Home features a polished web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

### DNSCloak

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Pi-hole logo](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribute }

[^1]: Armazenamos métricas agregadas de desempenho do nosso servidor DNS, nomeadamente o número de pedidos completos para um determinado servidor, o número de pedidos bloqueados, a velocidade de processamento dos pedidos. Nós mantemos e armazenamos a base de dados de domínios solicitados nas últimas 24 horas. Precisamos dessas informações para identificar e bloquear novos rastreadores e ameaças. Também registramos quantas vezes este ou aquele rastreador foi bloqueado. Precisamos desta informação para remover regras desactualizadas dos nossos filtros.[https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: O Cloudflare recolhe e armazena apenas os dados limitados da consulta DNS que são enviados para o resolvedor 1.1.1.1. O serviço resolver 1.1.1.1 não registra dados pessoais, e a maior parte dos dados de consulta limitados não identificáveis pessoalmente é armazenada apenas por 25 horas.[https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D only logs for Premium resolvers with custom DNS profiles. Free resolvers do not log data. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad's DNS service is available to both subscribers and non-subscribers of Mullvad VPN. Their privacy policy explicitly claims they do not log DNS requests in any way. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS can provide insights and logging features on an opt-in basis. You can choose retention times and log storage locations for any logs you choose to keep. If it's not specifically requested, no data is logged. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 collects some data for the purposes of threat monitoring and response. That data may then be remixed and shared, such as for the purpose of security research. Quad9 does not collect or record IP addresses or other data they deem personally identifiable. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

---
title: "Resolvedores DNS"
icon: material/dns
---

!!! faq "Devo usar DNS encriptado?"

    DNS criptografado com servidores de terceiros só deve ser usado para contornar [bloqueio de DNS](https://en.wikipedia.org/wiki/DNS_blocking) básico quando você puder ter certeza de que não haverá nenhuma consequência. DNS criptografado não o ajudará a ocultar qualquer atividade de navegação.
    
    [Saiba mais sobre DNS](technology/dns.md){ .md-button }

## Provedores recomendados

| Provedor de DNS                                                                 | Política de Privacidade                                                         | Tipo                | Protocolos                                                  | Logging      | ECS      | Filtragem                                                                                                                                                          |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)          | Comercial           | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Alguns[^1]   | Não      | Com base na escolha do servidor. A lista de filtros a ser usada pode ser encontrada aqui. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://www.cloudflare.com/privacypolicy)         | Comercial           | Cleartext <br> DoH <br> DoT                     | Alguns[^2]   | Não      | Com base na escolha do servidor.                                                                                                                                   |
| [**ControlID**](https://controld.com)                                           | [:octicons-link-external-24:](https://controld.com/privacy)                     | Comercial           | Cleartext <br> DoH <br> DoT                     | Opcional[^3] | Não      | Com base na escolha do servidor.                                                                                                                                   |
| [**MullvadDNS**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)   | [:octicons-link-external-24:](https://mullvad.net/en/help/privacy-policy/) [^4] | Comercial           | DoH <br> DoT                                          | Não          | Não      | Com base na escolha do servidor. A lista de filtros a ser usada pode ser encontrada aqui. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**PróximoDNS**](https://www.nextdns.io)                                        | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                   | Comercial           | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Opcional[^5] | Opcional | Com base na escolha do servidor.                                                                                                                                   |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/service/privacy)                | Sem fins lucrativos | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Não          | Opcional | Com base na escolha do servidor, bloqueio de malware por padrão.                                                                                                   |

Os critérios de servidores para esta tabela são:

- Deve suportar [DNSSEC](technology/dns.md#what-is-dnssec-and-when-is-it-used)
- Deve ter [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) suporte
- [Minimização do QNAME](technology/dns.md#what-is-qname-minimization)

## Suporte a Sistemas Operacionais Nativos

### Android

O Android 9 e superior suporta DNS sobre TLS. O Android 13 irá suportar DNS sobre HTTPS. As configurações podem ser encontradas em: *Configurações* &rarr; *Rede & Internet* &rarr; *DNS privado*.

### Dispositivos Apple

As últimas versões do iOS, iPadOS, tvOS e macOS, suportam tanto DoT como DoH. Ambos os protocolos são suportados nativamente através de [perfis de configuração](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) ou através de [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

Após a instalação de um perfil de configuração ou de um aplicativo que utiliza a API de configurações DNS, a configuração DNS pode ser selecionada. Se uma VPN estiver activa, a resolução dentro do túnel VPN utilizará as definições DNS da VPN e não as definições de todo o seu sistema.

- **iOS/iPadOS:** *Configurações &rarr; Geral &rarr; VPN, DNS, & Gerenciamento de dispositivos &rarr; DNS*
- **macOS:** *Preferências do Sistema &rarr; Perfis* & *Preferências do Sistema &rarr; Rede*
- **tvOS:** *Configurações &rarr; Geral &rarr; Privacidade &rarr;* pairar sobre "*Partilhar Apple TV Analytics*" &rarr; premir o botão play no comando

A Apple não fornece uma interface nativa para a criação de perfis DNS criptografados. [Criador de perfil DNS seguro](https://dns.notjakob.com/tool.html) é uma ferramenta não oficial para criar os seus próprios perfis DNS encriptados, no entanto eles não serão assinados. Os perfis assinados são preferidos; a assinatura valida a origem de um perfil e ajuda a garantir a integridade dos perfis. Uma etiqueta verde "Verificado" é dada aos perfis de configuração assinados. Para mais informações sobre assinatura de código, consulte [Sobre assinatura de código](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html).

- **Perfis assinados** são oferecidos por [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [ControlD](https://kb.controld.com/en/tutorials), [NextDNS](https://apple.nextdns.io), [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

### Windows

Os utilizadores do Windows podem [ligar DoH](https://docs.microsoft.com/en-us/windows-server/networking/dns/doh-client-support) acedendo às definições do Windows no painel de controlo.

Selecione *Configurações* &rarr; *Rede & Internet* &rarr; *Ethernet* ou *WiFi*, &rarr; *Editar Configurações DNS* &rarr; Encriptação DNS preferencial &rarr; *Apenas encriptado (DNS sobre HTTPS)*.

### Linux

`resolvido pelo sistema` ainda não [suporta DoH](https://github.com/systemd/systemd/issues/8639), que muitas distribuições Linux usam para fazer as suas pesquisas DNS. Se você quiser usar o DoH, você precisará instalar um proxy como [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) e [configurá-lo](https://wiki.archlinux.org/title/Dnscrypt-proxy) para pegar todas as consultas DNS do seu resolvedor de sistema e encaminhá-las sobre HTTPS.

## Proxies DNS Criptografados

O software proxy DNS criptografado fornece um proxy local para o DNS [unencrypted DNS](/dns/#unencrypted-dns) resolver para encaminhar para. Normalmente é usado em plataformas que não suportam nativamente [DNS encriptado](/dns/#what-is-encrypted-dns).

### RethinkDNS

!!! recomendação

    ![logo RethinkDNS](/assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](/assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** é um cliente Android de código aberto que suporta [DNS-over-HTTPS](/dns/#dns-over-https-doh), [DNS-over-TLS](/dns/#dns-over-tls-dot), [DNSCrypt](/dns/#dnscrypt) e Proxy DNS juntamente com respostas DNS em cache, consultas DNS de registo local e também pode ser usado como firewall.
    
    [Visite rethinkdns.com](https://rethinkdns.com){ .md-button .md-button--primary } [Política de Privacidade](https://rethinkdns.com/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
    - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.celzero.bravedns)
    - [:fontawesome-brands-github: Fonte](https://github.com/celzero/rethink-app)

### DNSCloak

!!! recomendação

    ![logótipo DNSCloak](/assets/img/ios/dnscloak.png){ align=right }
    
    **DNSCloak** é um cliente iOS de código aberto que suporta [DNS-over-HTTPS](/dns/#dns-over-https-doh), [DNSCrypt](/dns/#dnscrypt), e [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki) opções como respostas DNS em cache, consultas DNS de registo local, e listas de blocos personalizadas. Os usuários podem [adicionar resolvedores personalizados por carimbo DNS](https://medium.com/privacyguides/adding-custom-dns-over-https-resolvers-to-dnscloak-20ff5845f4b5).
    
    [Visite github.com](https://github.com/s-s/dnscloak/blob/master/README.md){ .md-button .md-button--primary } [Política de Privacidade](https://drive.google.com/file/d/1050No_pU74CAWUS5-BwQWyO2x_aiMzWc/view){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1452162351)
    - [:fontawesome-brands-github: Source](https://github.com/s-s/dnscloak)

### dnscrypt-proxy

!!! recomendação

    ![logo dnscrypt-proxy](/assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** é um proxy DNS com suporte para [DNSCrypt](/dns/#dnscrypt), [DNS-over-HTTPS](/dns/#dns-over-https-doh), e [DNS anonimizado](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    [Visite github.com](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .md-button .md-button--primary } [Política de Privacidade](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-github: Fonte](https://github.com/DNSCrypt/dnscrypt-proxy)

!!! aviso "O recurso DNS anonimizado faz [**não**](/dns#why-shouldnt-i-use-encrypted-dns) anonimizar outro tráfego de rede".

[^1]: Armazenamos métricas agregadas de desempenho do nosso servidor DNS, nomeadamente o número de pedidos completos para um determinado servidor, o número de pedidos bloqueados, a velocidade de processamento dos pedidos. Nós mantemos e armazenamos a base de dados de domínios solicitados nas últimas 24 horas. Precisamos dessas informações para identificar e bloquear novos rastreadores e ameaças. Também registramos quantas vezes este ou aquele rastreador foi bloqueado. Precisamos desta informação para remover regras desactualizadas dos nossos filtros.
[^2]: O Cloudflare recolhe e armazena apenas os dados limitados da consulta DNS que são enviados para o resolvedor 1.1.1.1. O serviço resolver 1.1.1.1 não registra dados pessoais, e a maior parte dos dados de consulta limitados não identificáveis pessoalmente é armazenada apenas por 25 horas.
[^3]: Nem o serviço gratuito nem o serviço premium têm o registo activado por defeito. Usuários Premium podem habilitar o registro/análises à vontade.
[^4]: O nosso serviço de DNS público oferece DNS sobre HTTPS (DoH) e DNS sobre TLS (DoT), com minimização de QNAME e bloqueio básico de anúncios. Foi auditado pelos especialistas em segurança da Assured. Você pode usar este serviço de melhoria da privacidade mesmo que não use o Mullvad.
[^5]: O NextDNS pode fornecer insights e recursos de registro em uma base opt-in. Os usuários podem escolher tempos de retenção e locais de armazenamento de logs para quaisquer logs que desejarem manter.

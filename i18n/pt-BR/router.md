---
title: "Firmware para Roteadores"
icon: material/router-wireless
---

Abaixo estão alguns sistemas operacionais alternativos, que podem ser usados em roteadores, pontos de acesso Wi-Fi, etc.

## OpenWrt

!!! recommendation

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark. vg#only-dark){ align=right }
    
    **OpenWrt** é um sistema operacional baseado em Linux; ele é usado principalmente em dispositivos incorporados (embedded) para rotear o tráfego de rede. Inclui util-linux, uClibc e BusyBox. Todos os componentes foram otimizados para roteadores domésticos.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentação}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribuir }

Você pode consultar a tabela [de hardware](https://openwrt.org/toh/start) do OpenWrt para verificar se o seu dispositivo é compatível.

## OPNsense

!!! recommendation

    ![OPNsense logo](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense** é uma plataforma de firewall e roteamento de código aberto baseada em FreeBSD que incorpora muitos recursos avançados, como modelagem de tráfego, balanceamento de carga e recursos de VPN, com muitos outros recursos disponíveis na forma de plugins. O OPNsense é comumente implantado como um firewall de perímetro, roteador, ponto de acesso wireless, servidor DHCP, servidor DNS e endpoint de VPN.
    
    [:octicons-home-16: Homepage](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=Documentação}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=Contribuir }

OPNsense foi originalmente desenvolvido como um fork do [pfSense](https://en.wikipedia.org/wiki/PfSense), e ambos os projetos são conhecidos por serem distribuições de firewall gratuitas e confiáveis que oferecem recursos frequentemente encontrados apenas em firewalls comerciais caros. Lançado em 2015, os desenvolvedores do OPNsense [citaram](https://docs.opnsense.org/history/thefork.html) uma série de problemas de segurança e qualidade de código com o pfSense. Assim, eles sentiram necessário criar um fork do projeto, além de terem preocupações sobre a aquisição majoritária do pfSense pela Netgate e a direção futura do projeto pfSense.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Deve ser de código aberto.
- Deve receber atualizações regulares.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.pt-BR.txt"

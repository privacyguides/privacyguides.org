---
title: "Motores de Busca"
icon: material/search-web
---

Use um motor de busca que não construa um perfil publicitário baseado nas suas pesquisas.

As recomendações aqui são baseadas nos méritos da política de privacidade de cada serviço. Há **sem garantia** de que estas políticas de privacidade sejam honradas.

Considere usar um [VPN](/vpn) ou [Tor](https://www.torproject.org/) se o seu modelo de ameaça requer esconder o seu endereço IP do fornecedor de pesquisa.

## Brave Search

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo DuckDuckGo](/assets/img/search-engines/duckduckgo.svg){ align=right }
    
    **DuckDuckGo*** é um motor de busca popular e é o padrão para o Tor Browser. DuckDuckGo usa uma API comercial Bing e várias [outras fontes](https://help.duckduckgo.com/results/sources) para fornecer seus dados de pesquisa.
    
    [Visite duckduckgo.com](https://duckduckgo.com){ .md-button .md-button--primary } [:pg-tor:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .md-button } [Política de Privacidade](https://duckduckgo.com/privacy){ .md-button }
    
    We recommend you disable [Anonymous usage metrics](https://search.brave.com/help/usage-metrics) as it is enabled by default and can be disabled within settings.
    
    [:octicons-home-16: Homepage](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentation}

Brave Search is based in the United States. Their [privacy policy](https://search.brave.com/help/privacy-policy) states they collect aggregated usage metrics, which includes the operating system and browser in use, however no personally identifiable information is collected. IP addresses are temporarily processed, but are not retained.

## DuckDuckGo

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    DuckDuckGo está sediado em 🇺🇸 US. Sua [Política de Privacidade](https://duckduckgo.com/privacy) declara que eles registram sua consulta de pesquisa, mas não o seu IP ou qualquer outra informação de identificação. The search engine relies on a commercial Bing API to serve most results, but it does use numerous [other sources](https://help.duckduckgo.com/results/sources/) for instant answers and other non-primary results.
    
    DuckDuckGo is the default search engine for the Tor Browser and is one of the few available options on Apple’s Safari browser.
    
    [:octicons-home-16: Homepage](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentation}

DuckDuckGo is based in the United States. Their [privacy policy](https://duckduckgo.com/privacy) states they **do** log your searches for product improvement purposes, but not your IP address or any other personally identifying information.

DuckDuckGo offers two [other versions](https://help.duckduckgo.com/features/non-javascript/) of their search engine, both of which do not require JavaScript. These versions do lack features, however. These versions can also be used in conjunction with their [Tor onion address](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) by appending [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) or [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) for the respective version.

## SearXNG

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo da página inicial](/assets/img/search-engines/startpage.svg){ align=right }
    
    **Startpage** é um motor de pesquisa que fornece resultados de pesquisa do Google. É uma forma muito conveniente de obter resultados de pesquisa no Google sem experimentar padrões escuros, tais como capturas difíceis ou acesso recusado porque você usou um [VPN](/vpn) ou [Tor](https://www.torproject.org/download/).
    
    [Visite startpage.com](https://www.startpage.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.startpage.com/en/privacy-policy){ .md-button }

SearXNG is a proxy between you and the search engines it aggregates from. Your search queries will still be sent to the search engines that SearXNG gets its results from.

When self-hosting, it is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

When you are using a SearXNG instance, be sure to go read their privacy policy. Since SearXNG instances may be modified by their owners, they do not necessarily reflect their privacy policy. Some instances run as a Tor hidden service, which may grant some privacy as long as your search queries does not contain PII.

## Startpage

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Startpage logo](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![Startpage logo](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }
    
    **Startpage** is a private search engine known for serving Google search results.  One of Startpage's unique features is the [Anonymous View](https://www.startpage.com/en/anonymous-view/), which puts forth efforts to standardize user activity to make it more difficult to be uniquely identified. The feature can be useful for hiding [some](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) network and browser properties. Unlike the name suggests, the feature should not be relied upon for anonymity. If you are looking for anonymity, use the [Tor Browser](tor.md#tor-browser) instead.
    
    [:octicons-home-16: Homepage](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentation}

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    Startpage regularly limits service access to certain IP addresses, such as IPs reserved for VPNs or Tor. [DuckDuckGo](#duckduckgo) and [Brave Search](#brave-search) are friendlier options if your threat model requires hiding your IP address from the search provider.

Startpage is based in the Netherlands. According to their [privacy policy](https://www.startpage.com/en/privacy-policy/), they log details such as: operating system, type of browser, and language. They do not log your IP address, search queries, or other personally identifying information.

Startpage's majority shareholder is System1 who is an adtech company. We don't believe that to be an issue as they have a distinctly separate [privacy policy](https://system1.com/terms/privacy-policy). The Privacy Guides team reached out to Startpage [back in 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) to clear up any concerns with System1's sizeable investment into the service. We were satisfied with the answers we received.

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

### Minimum Requirements

- Must not collect personally identifiable information per their privacy policy.
- Must not allow users to create an account with them.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be based on open-source software.
- Should not block Tor exit node IP addresses.

--8<-- "includes/abbreviations.pt.txt"

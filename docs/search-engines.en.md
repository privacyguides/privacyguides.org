---
title: "Search Engines"
icon: material/search-web
---
Use a search engine that doesn't build an advertising profile based on your searches.

The recommendations here are based on the merits of each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org/) if your threat model requires hiding your IP address from the search provider.

### DuckDuckGo

!!! recommendation

    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg#only-light){ align=right }
    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo-dark.svg#only-dark){ align=right }

    **DuckDuckGo** is one of the more mainstream private search engine options. Notable DuckDuckGo search features include [bangs](https://duckduckgo.com/bang) and many [instant answers](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/). The search engine relies on a commercial Bing API to serve most results, but it does use numerous [other sources](https://help.duckduckgo.com/results/sources/) for instant answers and other non-primary results.

    While DuckDuckGo’s primary service is its search engine, the company has recently been branching out by offering various other services and products. This includes their web browsers, email relay service, etc.

    DuckDuckGo is the default search engine for the Tor Browser and is one of the few available options on Apple’s Safari browser.

    [Website](https://duckduckgo.com){ .md-button .md-button--primary } [:pg-tor:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .md-button } [Privacy Policy](https://duckduckgo.com/privacy){ .md-button }

DuckDuckGo is based in the :flag_us: United States. Their [privacy policy](https://duckduckgo.com/privacy) states they **do** log your searches for product improvement purposes, but not your IP address or any other personally identifying information.

DuckDuckGo offers two other [versions](https://help.duckduckgo.com/features/non-javascript/) of their search engine, both of which do not require JavaScript. These versions do lack features, however. These versions can also be used in conjunction with their [Tor onion address](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) by appending [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) or [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) for the respective version.

### Startpage

!!! recommendation

    ![Startpage logo](assets/img/search-engines/startpage.svg){ align=right }

    **Startpage** is a search engine that provides Google search results. It is a very convenient way to get Google search results without experiencing dark patterns such as difficult captchas or being refused access because you used a [VPN](vpn.md) or [Tor](https://www.torproject.org/download/).

    [Website](https://www.startpage.com){ .md-button .md-button--primary } [Privacy Policy](https://www.startpage.com/en/privacy-policy){ .md-button }

Startpage is based in the :flag_nl: Netherlands. According to their [Privacy Policy](https://www.startpage.com/en/privacy-policy/), they only log details such as: operating system, type of browser and language. They do not log your IP address, search queries or other identifying information. Startpage proxies Google Search so Google does have access to your search queries.

Startpage's majority shareholder is System1 who is an adtech company. We don't think that is an issue as they have their own Privacy Policy. The Privacy Guides team reached out to Startpage [back in 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) for clarification and was satisfied by the answers we received.

### Mojeek

!!! recommendation

    ![Mojeek logo](assets/img/search-engines/mojeek.svg){ align=right }

    **Mojeek** is another privacy friendly search engine. They use their own crawler to provide search data.

    [Website](https://www.mojeek.com){ .md-button .md-button--primary } [Privacy Policy](https://www.mojeek.com/about/privacy){ .md-button }

The company is based in the :flag_gb: UK. According to their [Privacy Policy](https://www.mojeek.com/about/privacy/), they log the originating country, time, page requested, and referral data of each query. IP addresses are not logged.

### SearXNG

!!! recommendation

    ![SearXNG logo](assets/img/search-engines/searxng.svg){ align=right }

    **SearXNG** is an open-source, self-hostable, metasearch engine, aggregating the results of other search engines while not storing any information itself. It is an actively maintained fork of [SearX](https://github.com/searx/searx). There is a [list of public instances](https://searx.space/).

    [Homepage](https://searxng.org){ .md-button .md-button--primary }
    ??? downloads

        - [:fontawesome-brands-github: Source](https://github.com/searxng/searxng)

SearXNG is a proxy between you and the search engines it aggregates from. Your search queries will still be sent to the search engines that SearXNG gets its results from.

When self-hosting, it is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

When you are using a SearXNG instance, be sure to go read their privacy policy. Since SearXNG instances may be modified by their owners, they do not necessarily reflect their privacy policy. Some instances run as a Tor hidden service, which may grant some privacy as long as your search queries does not contain PII.

--8<-- "includes/abbreviations.en.md"

---
title: "Search Engines"
icon: material/search-web
---
Use a search engine that doesn't build an advertising profile based on your searches.

The recommendations here are based on the merits of each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org/) if your threat model requires hiding your IP address from the search provider.

### DuckDuckGo

!!! recommendation

    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){ align=right }

    **DuckDuckGo** is a popular search engine and is the default for the Tor Browser.

    DuckDuckGo uses a commercial Bing API and various [other sources](https://help.duckduckgo.com/results/sources) to provide its search data.

    [Website](https://duckduckgo.com){ .md-button .md-button--primary } [:pg-tor:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .md-button } [Privacy Policy](https://duckduckgo.com/privacy){ .md-button }

DuckDuckGo is based in the :flag_us: US. Their [Privacy Policy](https://duckduckgo.com/privacy) states they **do** log your search query, but not your IP or any other identifying information.

DuckDuckGo has a [lite](https://duckduckgo.com/lite) and [html](https://duckduckgo.com/html) only version, both of which [do not require JavaScript](https://help.duckduckgo.com/features/non-javascript) and can be used with their [Tor onion address](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion) (append [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) or [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) for the respective version).

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

    **SearXNG** is an open-source, self-hostable, metasearch engine, aggregating the results of other search engines while not storing information about its users. There is a [list of public instances](https://searx.space/).

    [Homepage](https://searxng.org){ .md-button .md-button--primary }
    ??? downloads

        - [:fontawesome-brands-github: Source](https://github.com/searxng/searxng)

SearXNG is a proxy between the user and the search engines it aggregates from. Your search queries will still be sent to the search engines that SearXNG gets its results from.

When self-hosting, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting SearXNG, as other people looking up illegal content on your instance could draw unwanted attention from authorities.

When you are using a SearXNG instance, be sure to go read the Privacy Policy of that specific instance. SearXNG instances can be modified by their owners and therefore may not reflect their associated privacy policy. Some instances have Tor .onion addresses which may grant some privacy as long as your search queries don't contain PII (Personally Identifiable Information).

--8<-- "includes/abbreviations.en.md"

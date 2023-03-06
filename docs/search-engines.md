---
title: "Search Engines"
icon: material/search-web
---
Use a search engine that doesn't build an advertising profile based on your searches.

The recommendations here are based on the merits of each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

Consider using a [VPN](vpn.md) or [Tor](https://www.torproject.org/) if your threat model requires hiding your IP address from the search provider.

## Brave Search

!!! recommendation

    ![Brave Search logo](assets/img/search-engines/brave-search.svg){ align=right }

    **Brave Search** is developed by Brave and serves results primarily from its own, independent index. The index is optimized against Google Search and therefore may provide more contextually accurate results compared to other alternatives.

    Brave Search includes unique features such as Discussions, which highlights conversation-focused results—such as forum posts.

    We recommend you disable [Anonymous usage metrics](https://search.brave.com/help/usage-metrics) as it is enabled by default and can be disabled within settings.

    [:octicons-home-16: Homepage](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentation}

Brave Search is based in the United States. Their [privacy policy](https://search.brave.com/help/privacy-policy) states they collect aggregated usage metrics, which includes the operating system and browser in use, however no personally identifiable information is collected. IP addresses are temporarily processed, but are not retained.

## DuckDuckGo

!!! recommendation

    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){ align=right }

    **DuckDuckGo** is one of the more mainstream private search engine options. Notable DuckDuckGo search features include [bangs](https://duckduckgo.com/bang) and many [instant answers](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/). The search engine relies on a commercial Bing API to serve most results, but it does use numerous [other sources](https://help.duckduckgo.com/results/sources/) for instant answers and other non-primary results.

    DuckDuckGo is the default search engine for the Tor Browser and is one of the few available options on Apple’s Safari browser.

    [:octicons-home-16: Homepage](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentation}

DuckDuckGo is based in the United States. Their [privacy policy](https://duckduckgo.com/privacy) states they **do** log your searches for product improvement purposes, but not your IP address or any other personally identifying information.

DuckDuckGo offers two [other versions](https://help.duckduckgo.com/features/non-javascript/) of their search engine, both of which do not require JavaScript. These versions do lack features, however. These versions can also be used in conjunction with their [Tor onion address](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) by appending [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) or [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) for the respective version.

## SearXNG

!!! recommendation

    ![SearXNG logo](assets/img/search-engines/searxng.svg){ align=right }

    **SearXNG** is an open-source, self-hostable, metasearch engine, aggregating the results of other search engines while not storing any information itself. It is an actively maintained fork of [SearX](https://github.com/searx/searx).

    [:octicons-home-16: Homepage](https://searxng.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://searx.space/){ .card-link title="Public Instances"}
    [:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Source Code" }

SearXNG is a proxy between you and the search engines it aggregates from. Your search queries will still be sent to the search engines that SearXNG gets its results from.

When self-hosting, it is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

When you are using a SearXNG instance, be sure to go read their privacy policy. Since SearXNG instances may be modified by their owners, they do not necessarily reflect their privacy policy. Some instances run as a Tor hidden service, which may grant some privacy as long as your search queries does not contain PII.

## Startpage

!!! recommendation

    ![Startpage logo](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![Startpage logo](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }

    **Startpage** is a private search engine known for serving Google search results.  One of Startpage's unique features is the [Anonymous View](https://www.startpage.com/en/anonymous-view/), which puts forth efforts to standardize user activity to make it more difficult to be uniquely identified. The feature can be useful for hiding [some](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) network and browser properties. Unlike the name suggests, the feature should not be relied upon for anonymity. If you are looking for anonymity, use the [Tor Browser](tor.md#tor-browser) instead.

    [:octicons-home-16: Homepage](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentation}

!!! warning

    Startpage regularly limits service access to certain IP addresses, such as IPs reserved for VPNs or Tor. [DuckDuckGo](#duckduckgo) and [Brave Search](#brave-search) are friendlier options if your threat model requires hiding your IP address from the search provider.

Startpage is based in the Netherlands. According to their [privacy policy](https://www.startpage.com/en/privacy-policy/), they log details such as: operating system, type of browser, and language. They do not log your IP address, search queries, or other personally identifying information.

Startpage's majority shareholder is System1 who is an adtech company. We don't believe that to be an issue as they have a distinctly separate [privacy policy](https://system1.com/terms/privacy-policy). The Privacy Guides team reached out to Startpage [back in 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) to clear up any concerns with System1's sizeable investment into the service. We were satisfied with the answers we received.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

### Minimum Requirements

- Must not collect personally identifiable information per their privacy policy.
- Must not allow users to create an account with them.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be based on open-source software.
- Should not block Tor exit node IP addresses.

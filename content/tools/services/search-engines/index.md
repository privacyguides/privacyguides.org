---
title: Search Engines
description: Use privacy-respecting search engines which don't build an advertising profile based on your searches.
aliases:
- /search-engines
- /en/search-engines
---

<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#brave-search" title="Brave Search" image="./brave-search.svg" subtitle="Brave Search is a search engine developed by Brave. It includes unique features such as Discussions, which highlights conversation-focused results such as forum posts." >}}
  {{< card link="#duckduckgo" title="DuckDuckGo" image="./duckduckgo.svg" subtitle="DuckDuckGo is one of the more mainstream private search engine options. Notable DuckDuckGo search features include bangs and a variety of instant answers." >}}
  {{< card link="#startpage" title="Startpage" image="./startpage.svg" subtitle="Startpage is a private search engine. One of Startpage's unique features is the Anonymous View, which puts forth efforts to standardize user activity to make it more difficult to be uniquely identified." >}}
  {{< card link="#searxng" title="SearXNG" image="./searxng.svg" subtitle="SearXNG is an open-source, self-hostable, metasearch engine. It is an actively maintained fork of SearX." >}}
{{< /cards >}}
</div>

Use a **search engine** that doesn't build an advertising profile based on your searches.

## Recommended Providers

The recommendations here do not collect personally identifying information (PII) based on each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

Consider using a [VPN](../vpn/index.md) or [Tor](../../software/tor/index.md) if your threat model requires hiding your IP address from the search provider.

| Provider | Search Index | Tor Hidden Service | Logging / Privacy Policy | Country of Operation |
|---|---|---|---|---|
| [Brave Search](#brave-search) | [Independent](https://brave.com/search-independence) | Yes | Anonymized[^1] | United States |
| [DuckDuckGo](#duckduckgo) | [Bing](https://help.duckduckgo.com/results/sources) | Yes | Anonymized[^2] | United States |
| [Startpage](#startpage) | [Google and Bing](https://support.startpage.com/hc/articles/4522435533844-What-is-the-relationship-between-Startpage-and-your-search-partners-like-Google-and-Microsoft-Bing) | Yes | Anonymized[^3] | Netherlands |

[^1]:
    Brave Search collects aggregated usage metrics, which includes the OS and the user agent. However, they do not collect PII. To serve [anonymous local results](https://search.brave.com/help/anonymous-local-results), IP addresses are temporarily processed, but are not retained.

    Brave Search: [*Brave Search privacy notice*](https://search.brave.com/help/privacy-policy)
[^2]:
    DuckDuckGo **does** log your searches for product improvement purposes, but not your IP address or any other PII.

    DuckDuckGo Privacy Policy: [*We don't track you.*](https://duckduckgo.com/privacy)
[^3]:
    Startpage logs details such as operating system, user agent, and language. They do not log your IP address, search queries, or other PII.

    Our Privacy Policy: [*How we have implemented truly anonymous analytics*](https://startpage.com/en/privacy-policy#section-4)

### Brave Search

{{< title-card logo="./brave-search.svg" >}}

**Brave Search** is a search engine developed by Brave. It includes unique features such as [Discussions](https://search.brave.com/help/discussions), which highlights conversation-focused results such as forum posts.

Brave Search is the default search engine for the [Brave Browser](../../software/desktop-browsers/index.md#brave).

{{< cards >}}
  {{< card link="https://search.brave.com" title="Homepage" icon="home" >}}
  {{< card link="https://search.brave.com/help/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

We recommend you disable [Anonymous usage metrics](https://search.brave.com/help/usage-metrics) as it is enabled by default and can be disabled within settings.

### DuckDuckGo

{{< title-card logo="./duckduckgo.svg" >}}

**DuckDuckGo** is one of the more mainstream private search engine options. Notable DuckDuckGo search features include [bangs](https://duckduckgo.com/bang) and a variety of [instant answers](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features). The search engine uses numerous [sources](https://help.duckduckgo.com/results/sources) other than Bing for instant answers and other non-primary results.

DuckDuckGo is the default search engine for the [Tor Browser](../../software/tor/index.md#tor-browser) and is one of the few available options on Apple’s [Safari](../../software/mobile-browsers/index.md#safari-ios) browser.

{{< cards >}}
  {{< card link="https://duckduckgo.com" title="Homepage" icon="home" >}}
  {{< card link="https://duckduckgo.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

DuckDuckGo offers two [other versions](https://help.duckduckgo.com/features/non-javascript) of their search engine, both of which do not require JavaScript. These versions do lack features, however. These versions can also be used in conjunction with their Tor hidden address by appending [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) or [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) for the respective version.

### Startpage

{{< title-card logo="./startpage.svg" >}}

**Startpage** is a private search engine. One of Startpage's unique features is the [Anonymous View](https://startpage.com/en/anonymous-view), which puts forth efforts to standardize user activity to make it more difficult to be uniquely identified. The feature can be useful for hiding [some](https://support.startpage.com/hc/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) network and browser properties. Unlike the name suggests, the feature should not be relied upon for anonymity. If you are looking for anonymity, use the [Tor Browser](../../software/tor/index.md#tor-browser) instead.

{{< cards >}}
  {{< card link="https://startpage.com" title="Homepage" icon="home" >}}
  {{< card link="https://startpage.com/en/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

Startpage's majority shareholder is System1 who is an adtech company. We don't believe that to be an issue as they have a distinctly separate [privacy policy](https://system1.com/terms/privacy-policy). The Privacy Guides team reached out to Startpage [back in 2020](https://blog.privacyguides.org/2020/05/03/relisting-startpage) to clear up any concerns with System1's sizeable investment into the service, and we were satisfied with the answers we received.

Startpage previously placed limitations on VPN and [Tor](../../software/tor/index.md) users, but they recently created an [official](https://support.startpage.com/hc/en-us/articles/24786602537364-Startpage-s-Tor-onion-service) Tor hidden service, and as of April 2024 we have no longer noticed extra roadblocks for Tor or [VPN](../vpn/index.md) users.

## Metasearch Engines

A [metasearch engine](https://en.wikipedia.org/wiki/Metasearch_engine) aggregates the results of other search engines, such as the ones recommended above, while not storing any information itself.

### SearXNG

{{< title-card logo="./searxng.svg" >}}

**SearXNG** is an open-source, self-hostable, metasearch engine. It is an actively maintained fork of [SearX](https://github.com/searx/searx).

{{< cards >}}
  {{< card link="https://searxng.org" title="Homepage" icon="home" >}}
  {{< card link="https://docs.searxng.org/user/about.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

A directory of public instances is available at [searx.space](https://searx.space), and the source code is on [GitHub](https://github.com/searxng/searxng).

SearXNG is a proxy between you and the search engines it aggregates from. Your search queries will still be sent to the search engines that SearXNG gets its results from.

When self-hosting, it is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

When you are using a SearXNG instance, be sure to go read their privacy policy. Since SearXNG instances may be modified by their owners, they do not necessarily reflect their privacy policy. Some instances run as a Tor hidden service, which may grant some privacy as long as your search queries does not contain PII.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must not collect PII per their privacy policy.
- Must not require users to create an account with them.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be based on open-source software.
- Should not block Tor exit node IP addresses.

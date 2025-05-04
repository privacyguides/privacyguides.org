---
title: Self-Hosting
meta_title: "Self-Hosted Software and Services - Privacy Guides"
description: For our more technical readers, self-hosted software and services can provide additional privacy assurances by having maximum control over your data.
cover: router.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](../basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

Using **self-hosted software and services** can be a way to achieve a higher level of privacy through digital sovereignty, particularly independence from cloud servers controlled by product developers or vendors. By self-hosting, we mean hosting applications and data on your own hardware.

Self-hosting your own solutions requires advanced technical knowledge and a deep understanding of the associated risks. By becoming the host for yourself and possibly others, you take on responsibilities you might not otherwise have. Self-hosting privacy software improperly can leave you worse off than using e.g. an end-to-end encrypted service provider, so it is best avoided if you are not already comfortable doing so.

## :material-email: Email Servers

<div class="grid cards" markdown>

- ![Stalwart logo](../assets/img/self-hosting/stalwart.svg){ .twemoji loading=lazy } [Stalwart](email-servers.md#stalwart)
- ![Mailcow logo](../assets/img/self-hosting/mailcow.svg){ .twemoji loading=lazy } [Mailcow](email-servers.md#mailcow)
- ![Mail-in-a-Box logo](../assets/img/self-hosting/mail-in-a-box.svg){ .twemoji loading=lazy } [Mail-in-a-Box](email-servers.md#mail-in-a-box)

</div>

[Learn more :material-arrow-right-drop-circle:](email-servers.md)

## :material-dns: DNS Filtering

<div class="grid cards" markdown>

- ![AdGuard Home logo](../assets/img/self-hosting/adguard-home.svg){ .twemoji loading=lazy } [AdGuard Home](dns-filtering.md#adguard-home)
- ![Pi-Hole logo](../assets/img/self-hosting/pi-hole.svg){ .twemoji loading=lazy } [Pi-Hole](dns-filtering.md#pi-hole)

</div>

[Learn more :material-arrow-right-drop-circle:](dns-filtering.md)

## :material-file-multiple-outline: File Management

<div class="grid cards" markdown>

- ![PhotoPrism logo](../assets/img/self-hosting/photoprism.svg){ .twemoji loading=lazy } [PhotoPrism](file-management.md#photoprism)
- ![FreedomBox logo](../assets/img/self-hosting/freedombox.svg){ .twemoji loading=lazy } [FreedomBox](file-management.md#freedombox)
- ![Nextcloud logo](../assets/img/self-hosting/nextcloud.svg){ .twemoji loading=lazy } [Nextcloud](file-management.md#nextcloud)

</div>

[Learn more :material-arrow-right-drop-circle:](file-management.md)

## :material-search-web: Search Engines

### SearXNG

<div class="admonition recommendation" markdown>

![SearXNG logo](../assets/img/search-engines/searxng.svg){ align=right }

**SearXNG** is an open-source, [metasearch engine](https://en.wikipedia.org/wiki/Metasearch_engine) that serves as a proxy between you and the search engines it aggregates from.

[:octicons-home-16:](https://searxng.org){ .card-link title="Homepage" }
[:octicons-info-16:](https://docs.searxng.org/admin/installation.html#installation){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Source Code" }

</div>

It is important that you have other people using your instance so that the queries would blend in. You should be careful with where and how you are hosting SearXNG, as people looking up illegal content on your instance could draw unwanted attention from authorities.

## :material-form-textbox-password: Password Management

### Vaultwarden

<div class="admonition recommendation" markdown>

![Vaultwarden logo](../assets/img/self-hosting/vaultwarden.svg#only-light){ align=right }
![Vaultwarden logo](../assets/img/self-hosting/vaultwarden-dark.svg#only-dark){ align=right }

**Vaultwarden** is an alternative implementation of [Bitwarden](../passwords.md#bitwarden)'s sync server written in Rust and compatible with official Bitwarden clients, perfect for self-hosted deployment where running the resource-heavy [official service](https://github.com/bitwarden/server) might not be ideal.

[:octicons-repo-16: Repository](https://github.com/dani-garcia/vaultwarden#readme){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title="Contribute" }

</div>

### Psono

<div class="admonition recommendation" markdown>

![Psono logo](../assets/img/password-management/psono.svg){ align=right }

**Psono** is a free and open-source password manager with a focus on password management for teams. Psono supports secure sharing of passwords, files, bookmarks, and emails. All secrets are protected by a master password.

[:octicons-home-16:](https://psono.com){ .card-link title="Homepage" }
[:octicons-info-16:](https://doc.psono.com/admin/overview/summary.html){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

</details>

</div>

Psono provides extensive documentation for their product. The webclient for Psono can be self-hosted; alternatively, you can choose the full Community Edition or the Enterprise Edition with additional features.

## :material-flip-to-front: Frontends

Self-hosting your own instance of a web-based frontend can help you circumvent rate limits that you may encounter on high-traffic, public instances. It is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting, as other peoples' usage will be linked to your hosting.

<div class="grid cards" markdown>

- ![Redlib logo](../assets/img/frontends/redlib.svg){ .lg .middle .twemoji } **Redlib (Reddit)**

    ---

    [:octicons-info-16:](https://github.com/redlib-org/redlib#deployment){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/redlib-org/redlib){ .card-link title="Source Code" }

- ![ProxiTok logo](../assets/img/frontends/proxitok.svg){ .lg .middle .twemoji } **ProxiTok (TikTok)**

    ---

    [:octicons-info-16:](https://github.com/pablouser1/ProxiTok/wiki/Self-hosting){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/pablouser1/ProxiTok){ .card-link title="Source Code" }

- ![Invidious logo](../assets/img/frontends/invidious.svg#only-light){ .twemoji }![Invidious logo](../assets/img/frontends/invidious-dark.svg#only-dark){ .twemoji } **Invidious (YouTube)**

    ---

    [:octicons-home-16:](https://invidious.io){ .card-link title="Homepage" }
    [:octicons-info-16:](https://docs.invidious.io/installation){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/iv-org/invidious){ .card-link title="Source Code" }

- ![Piped logo](../assets/img/frontends/piped.svg){ .twemoji } **Piped (YouTube)**

    ---

    [:octicons-info-16:](https://docs.piped.video/docs/self-hosting){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/TeamPiped/Piped){ .card-link title="Source Code" }

</div>

## :material-account-supervisor-circle-outline: Social Networks

Self-hosting your own instance of a social network software can help circumvent potential [censorship on a server level](../social-networks.md) based on a public server's administrator.

### Mastodon

<div class="admonition recommendation" markdown>

![Mastodon logo](../assets/img/social-networks/mastodon.svg){ align=right }

**Mastodon** is a social network based on open web protocols and free, open-source software. It uses the decentralized **:simple-activitypub: ActivityPub** protocol.

[:octicons-home-16:](https://joinmastodon.org){ .card-link title="Homepage" }
[:octicons-info-16:](https://docs.joinmastodon.org/admin/prerequisites){ .card-link title="Admin Documentation" }

</div>

Mastodon [integrates with the Tor network](https://docs.joinmastodon.org/admin/optional/tor) for more extreme scenarios where even your underlying hosting provider is subject to censorship, but this may limit who can access your content to only other servers which integrate with Tor (like most other hidden services).

Mastodon benefits greatly from a large and active self-hosting community, and its administration is comprehensively documented. While many other ActivityPub platforms can require extensive technical knowledge to run and troubleshoot, Mastodon has very stable and tested releases, and it can generally be run securely without issue by anyone who can use the Linux command line.

### Element

<div class="admonition recommendation" markdown>

![Element logo](../assets/img/messengers/element.svg){ align=right }

**Element** is the flagship client for the **:simple-matrix: [Matrix](https://matrix.org/docs/chat_basics/matrix-for-im)** protocol, an [open standard](https://spec.matrix.org/latest) that enables decentralized communication by way of federated chat rooms.

[:octicons-home-16:](https://element.io){ .card-link title="Homepage" }
[:octicons-info-16:](https://element-hq.github.io/synapse/latest){ .card-link title="Admin Documentation" }
[:octicons-code-16:](https://github.com/element-hq){ .card-link title="Source Code" }

</div>

## More Tools...

Tool recommendations in other categories of the website also provide a self-hosted option, so you could consider this if you are confident in your ability to host the software after reading their documentation.

<div class="grid cards" markdown>

- ![Addy.io logo](../assets/img/email-aliasing/addy.svg){ .twemoji } **Addy.io (Email Aliasing)**

    ---

    [:octicons-home-16:](https://addy.io){ .card-link title="Homepage" }
    [:octicons-info-16:](https://addy.io/self-hosting){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }

- ![SimpleLogin logo](../assets/img/email-aliasing/simplelogin.svg){ .twemoji } **SimpleLogin (Email Aliasing)**

    ---

    [:octicons-home-16:](https://addy.io){ .card-link title="Homepage" }
    [:octicons-info-16:](https://github.com/simple-login/app#prerequisites){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }

- ![CryptPad logo](../assets/img/document-collaboration/cryptpad.svg){ .twemoji } **CryptPad (Online Office Suite)**

    ---

    [:octicons-home-16:](https://cryptpad.fr){ .card-link title="Homepage" }
    [:octicons-info-16:](https://docs.cryptpad.org/en/admin_guide/index.html){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Source Code" }

- ![LanguageTool logo](../assets/img/language-tools/languagetool.svg#only-light){ .twemoji }![LanguageTool logo](../assets/img/language-tools/languagetool-dark.svg#only-dark){ .twemoji } **LanguageTool (Grammar, Style, and Spell Checker)**

    ---

    [:octicons-home-16:](https://languagetool.org){ .card-link title="Homepage" }
    [:octicons-info-16:](https://dev.languagetool.org/http-server){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/languagetool-org){ .card-link title="Source Code" }

- ![Miniflux logo](../assets/img/news-aggregators/miniflux.svg#only-light){ .twemoji }![Miniflux logo](../assets/img/news-aggregators/miniflux-dark.svg#only-dark){ .twemoji } **Miniflux (News Aggregator)**

    ---

    [:octicons-home-16:](https://miniflux.app){ .card-link title="Homepage" }
    [:octicons-info-16:](https://miniflux.app/docs/index.html#administration-guide){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/miniflux/v2){ .card-link title="Source Code" }

- ![Standard Notes logo](../assets/img/notebooks/standard-notes.svg){ .twemoji } **Standard Notes (Notes App)**

    ---

    [:octicons-home-16:](https://standardnotes.com){ .card-link title="Homepage" }
    [:octicons-info-16:](https://standardnotes.com/help/47/can-i-self-host-standard-notes){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Source Code" }

- ![PrivateBin logo](../assets/img/pastebins/privatebin.svg){ .twemoji } **PrivateBin (Pastebin)**

    ---

    [:octicons-home-16:](https://privatebin.info){ .card-link title="Homepage" }
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/blob/master/doc/Installation.md){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Source Code" }

- ![Paaster logo](../assets/img/pastebins/paaster.svg){ .twemoji } **Paaster (Pastebin)**

    ---

    [:octicons-home-16:](https://paaster.io){ .card-link title="Homepage" }
    [:octicons-info-16:](https://github.com/WardPearce/paaster#deployment){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/WardPearce/paaster){ .card-link title="Source Code" }

- ![SimpleX Chat logo](../assets/img/messengers/simplex.svg){ .twemoji } **SimpleX Chat (Instant Messenger)**

    ---

    [:octicons-home-16:](https://simplex.chat){ .card-link title="Homepage" }
    [:octicons-info-16:](https://simplex.chat/docs/server.html){ .card-link title="Admin Documentation" }
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Source Code" }

</div>

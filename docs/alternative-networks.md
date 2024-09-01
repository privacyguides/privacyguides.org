---
title: "Alternative Networks"
icon: material/vector-polygon
description: These tools allow you to access networks other than the World Wide Web.
cover: alternative-networks.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }
- [:material-eye-outline: Mass Surveillance](basics/common-threats.md#mass-surveillance-programs){ .pg-blue }
- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

## Anonymizing Networks

When it comes to anonymizing networks, we want to specially note that [Tor](advanced/tor-overview.md) is our top choice. It is by far the most utilized, robustly studied, and actively developed anonymous network. Using other networks could be more likely to endanger your [:material-incognito: Anonymity](basics/common-threats.md#anonymity-vs-privacy){ .pg-purple }, unless you know what you're doing.

### Tor

<div class="admonition recommendation" markdown>

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

The **Tor** network is a group of volunteer-operated servers that allows you to connect for free and improve your privacy and security on the Internet. Individuals and organizations can also share information over the Tor network with ".onion hidden services" without compromising their privacy. Because Tor traffic is difficult to block and trace, Tor is an effective [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray } circumvention tool.

[:octicons-home-16:](https://torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org){ .card-link title=Documentation}
[:octicons-code-16:](https://gitlab.torproject.org/tpo/core/tor){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org){ .card-link title=Contribute }

</div>

The recommended way to access the Tor network is via the official Tor Browser, which we have covered in more detail on a dedicated page:

[Tor Browser Info :material-arrow-right-drop-circle:](tor.md){ .md-button .md-button--primary } [Detailed Tor Overview :material-arrow-right-drop-circle:](advanced/tor-overview.md){ .md-button }

<div class="admonition example" markdown>
<p class="admonition-title">Try it out!</p>

You can try connecting to *Privacy Guides* via Tor at [xoe4vn5uwdztif6goazfbmogh6wh5jc4up35bqdflu6bkdc5cas5vjqd.onion](http://www.xoe4vn5uwdztif6goazfbmogh6wh5jc4up35bqdflu6bkdc5cas5vjqd.onion).

</div>

#### Snowflake

<div class="admonition recommendation" markdown>

![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }

**Snowflake** allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser.

People who are censored can use Snowflake proxies to connect to the Tor network. Snowflake is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.

[:octicons-home-16: Homepage](https://snowflake.torproject.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
[:octicons-code-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org){ .card-link title=Contribute }

</details>

</div>

You can enable Snowflake in your browser by opening it in another tab and turning the switch on. You can leave it running in the background while you browse to contribute your connection. We don't recommend installing Snowflake as a browser extension, because adding third-party extensions can increase your attack surface.

[Run Snowflake in your Browser :material-arrow-right-drop-circle:](https://snowflake.torproject.org/embed.html){ .md-button }

Snowflake does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even more so than running a Tor relay or bridge which are already not particularly risky endeavours. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

### I2P (The Invisible Internet Project)

<div class="admonition recommendation" markdown>

![I2P logo](assets/img/self-contained-networks/i2p.svg#only-light){ align=right }
![I2P logo](assets/img/self-contained-networks/i2p-dark.svg#only-dark){ align=right }

**I2P** is an network layer which encrypts your connections and routes them via a network of computers distributed around the world. It is mainly focused on creating an alternative, privacy-protecting network rather than making regular internet connections anonymous.

[:octicons-home-16: Homepage](https://geti2p.net/en){ .md-button .md-button--primary }
[:octicons-info-16:](https://geti2p.net/en/about/software){ .card-link title=Documentation }
[:octicons-code-16:](https://github.com/i2p/i2p.i2p){ .card-link title="Source Code" }
[:octicons-heart-16:](https://geti2p.net/en/get-involved){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.i2p.android)
- [:simple-android: Android](https://geti2p.net/en/download#android)
- [:fontawesome-brands-windows: Windows](https://geti2p.net/en/download#windows)
- [:simple-apple: macOS](https://geti2p.net/en/download#mac)
- [:simple-linux: Linux](https://geti2p.net/en/download#unix)

</details>

</div>

Unlike Tor, all I2P traffic is internal to the I2P network, which means regular internet websites are **not** directly accessible from I2P. Instead, you can connect to websites which are hosted anonymously and directly on the I2P network, which are called "eepsites" and have domains which end in `.i2p`.

<div class="admonition example" markdown>
<p class="admonition-title">Try it out!</p>

You can try connecting to *Privacy Guides* via I2P at [privacyguides.i2p](http://privacyguides.i2p/?i2paddresshelper=fvbkmooriuqgssrjvbxu7nrwms5zyhf34r3uuppoakwwsm7ysv6q.b32.i2p).

</div>

Also, unlike Tor, every I2P node will relay traffic for other users by default, instead of relying on dedicated relay volunteers to run nodes. There are approximately [10,000](https://metrics.torproject.org/networksize.html) relays and bridges on the Tor network compared to ~50,000 on I2P, meaning there is potentially more ways for your traffic to be routed to maximize anonymity. I2P also tends to be more performant than Tor, although this is likely a side-effect of Tor being more focused on regular "clearnet" internet traffic and thus using more bottlenecked exit nodes. Hidden service performance is generally considered to be much better on I2P compared to Tor. While running P2P applications like BitTorrent is challenging on Tor (and can massively impact Tor network performance), it is very easy and performant on I2P.

There are downsides to I2P's approach, however. Tor relying on dedicated exit nodes means more people in less safe environments can use it, and the relays that do exist on Tor are likely to be more performant and stable, as they generally aren't run on residential connections. Tor is also far more focused on **browser privacy** (i.e. anti-fingerprinting), with a dedicated [Tor Browser](tor.md) to make browsing activity as anonymous as possible. I2P is used via your [regular web browser](desktop-browsers.md), and while you can configure your browser to be more privacy-protecting, you probably still won't have the same browser fingerprint as other I2P users (there's no "crowd" to blend in with in that regard).

Tor is likely to be more resistant to censorship, due to their robust network of bridges and varying [pluggable transports](https://tb-manual.torproject.org/circumvention). On the other hand, I2P uses directory servers for the initial connection which are varying/untrusted and run by volunteers, compared to the hard-coded/trusted ones Tor uses which are likely easier to block.

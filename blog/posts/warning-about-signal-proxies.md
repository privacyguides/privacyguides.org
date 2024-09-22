---
date:
    created: 2022-10-15
categories:
    - News
authors:
    - jonah
tags:
    - PSA
    - Signal
    - Instant Messengers
links:
    - Signal Configuration Guide: https://www.privacyguides.org/real-time-communication/signal-configuration-hardening/
    - Real-Time Communication: https://www.privacyguides.org/real-time-communication/
license: BY-SA
description: You should be aware of a number of issues with Signal’s current proxy implementation.
schema_type: NewsArticle
---
# A Warning About Signal Proxies in Iran and Other Oppressive Countries

People looking to use [Signal Proxies](https://www.signal.org/blog/run-a-proxy/) to bypass censorship programs should be aware of a number of issues with Signal’s current proxy implementation. Currently, Signal does not tunnel all application traffic through the specified proxy, which means authorities could still track people using Signal.<!-- more -->

[This has been an issue since TLS proxies were added and has not yet been fixed](https://community.signalusers.org/t/traffic-not-routed-to-tls-proxies-can-expose-users-to-censors/27479):

> The latest version of the Android app (v5.3.12 at this time) fails to route all the traffic to the TLS proxy. There are DNS leaks in the app, and it’s trivial for the censors to learn what IP addresses are connecting to Signal. [...]
>
> When the app connects to the Signal server, it first looks up the IP of the Signal servers via DNS, and immediately after, it resolves the IP of the TLS proxy, also with DNS. This is an unexpected behavior that allows the censors to discover proxies by only monitoring the DNS traffic. [...]

There are also a number of other problems with their TLS proxies (such as [outdated dependencies](https://privsec.dev/apps/update-your-signal-tls-proxy/)) which have not been resolved.

Currently, we believe Signal’s TLS Proxies are an incomplete solution to the problems they try to solve. Instead, we recommend using Orbot in conjunction with Molly, an alternative Signal client which natively supports SOCKS proxies, to fully tunnel your Signal traffic over the Tor network. For more information please check out our [Signal configuration guide](https://www.privacyguides.org/real-time-communication/signal-configuration-hardening/).

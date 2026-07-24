---
title: "Alternative Networks"
description: These tools allow you to access networks other than the World Wide Web.
aliases:
- /alternative-networks
- /en/alternative-networks
- /tools/advanced
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)
[{{< badge content="Mass Surveillance" color="blue" >}}](../../../wiki/basics/common-threats/index.md#mass-surveillance-programs)
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

## Anonymizing Networks

When it comes to anonymizing networks, we want to specially note that [Tor](../../../wiki/advanced/tor-overview/index.md) is our top choice. It is by far the most utilized, robustly studied, and actively developed anonymous network. Using other networks could be more likely to endanger your [Anonymity](../../../wiki/basics/common-threats/index.md#anonymity-vs-privacy){ .pg-purple }, unless you know what you're doing.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#tor" title="Tor" image="./tor.svg" subtitle="The Tor network is a group of volunteer-operated servers that allows you to connect for free and improve your privacy and security on the Internet. Individuals and organizations can also share information over the Tor network with “.onion hidden services” without compromising their privacy." >}}
  {{< card link="#orbot" title="Orbot" image="./orbot.svg" subtitle="Orbot is a mobile application which routes traffic from any app on your device through the Tor network." >}}
  {{< card link="#snowflake" title="Snowflake" image="./snowflake.svg" subtitle="Snowflake allows you to donate bandwidth to the Tor Project by operating a “Snowflake proxy” within your browser." >}}
  {{< card link="#i2p-the-invisible-internet-project" title="I2P" image="./i2p.svg" subtitle="I2P is a network layer which encrypts your connections and routes them via a network of computers distributed around the world. It is mainly focused on creating an alternative, privacy-protecting network rather than making regular internet connections anonymous." >}}
{{< /cards >}}
</div>

### Tor

{{< title-card logo="./tor.svg" >}}

The **Tor** network is a group of volunteer-operated servers that allows you to connect for free and improve your privacy and security on the Internet. Individuals and organizations can also share information over the Tor network with ".onion hidden services" without compromising their privacy. Because Tor traffic is difficult to block and trace, Tor is an effective [Censorship](../../../wiki/basics/common-threats/index.md#avoiding-censorship){ .pg-blue-gray } circumvention tool.

{{< cards >}}
  {{< card link="https://torproject.org" title="Homepage" icon="home" >}}
  {{< card link="https://tb-manual.torproject.org" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

The recommended way to access the Tor network is via the official Tor Browser, which we have covered in more detail on a dedicated page:

[Tor Browser Info](../../software/tor/index.md)
{ .pg:buttons }

[Detailed Tor Overview](../../../wiki/advanced/tor-overview/index.md)
{ .pg:buttons }

You can access the Tor network using other tools; making this determination comes down to your threat model. If you are a casual Tor user who is not worried about your ISP collecting evidence against you, using apps like [Orbot](#orbot) or mobile browser apps to access the Tor network is probably fine. Increasing the number of people who use Tor on an everyday basis helps reduce the bad stigma of Tor, and lowers the quality of "lists of Tor users" that ISPs and governments may compile.

> [!TIP]
> You can try connecting to *Privacy Guides* via Tor at [xoe4vn5uwdztif6goazfbmogh6wh5jc4up35bqdflu6bkdc5cas5vjqd.onion](http://www.xoe4vn5uwdztif6goazfbmogh6wh5jc4up35bqdflu6bkdc5cas5vjqd.onion).

#### Orbot

{{< title-card logo="./tor.svg" >}}

**Orbot** is a mobile application which routes traffic from any app on your device through the Tor network.

{{< cards >}}
  {{< card link="https://orbot.app" title="Homepage" icon="home" >}}
  {{< card link="https://orbot.app/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=org.torproject.android)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1609461599)
[{{< badge content="GitHub" >}}](https://github.com/guardianproject/orbot/releases)
[{{< badge content="F-Droid" >}}](https://guardianproject.info/fdroid)

We previously recommended enabling the *Isolate Destination Address* preference in Orbot settings. While this setting can theoretically improve privacy by enforcing the use of a different circuit for each IP address you connect to, it doesn't provide a practical advantage for most applications (especially web browsing), can come with a significant performance penalty, and increases the load on the Tor network. We no longer recommend adjusting this setting from its default value unless you know you need to.[^1]

=== "Android"

Orbot can proxy individual apps if they support SOCKS or HTTP proxying. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN kill switch in **Settings** → **Network & internet** → **VPN** → Settings → **Block connections without VPN**.

    Orbot is often outdated on Google Play and the Guardian Project's F-Droid repository, so consider downloading directly from the GitHub repository instead. All versions are signed using the same signature, so they should be compatible with each other.

=== "iOS"

    On iOS, Orbot has some limitations that could potentially cause crashes or leaks: iOS does not have an effective OS-level feature to block connections without a VPN like Android does, and iOS has an artificial memory limit for network extensions that makes it challenging to run Tor in Orbot without crashes. Currently, it is always safer to use Tor on a desktop computer compared to a mobile device.

#### Snowflake

{{< title-card logo="./tor.svg" >}}

**Snowflake** allows you to donate bandwidth to the Tor Project by operating a "Snowflake proxy" within your browser.

People who are censored can use Snowflake proxies to connect to the Tor network. Snowflake is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.

{{< cards >}}
  {{< card link="https://snowflake.torproject.org" title="Homepage" icon="home" >}}
  {{< card link="https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

You can enable Snowflake in your browser by opening it in another tab and turning the switch on. You can leave it running in the background while you browse to contribute your connection. We don't recommend installing Snowflake as a browser extension, because adding third-party extensions can increase your attack surface.

[Run Snowflake in your Browser](https://snowflake.torproject.org/embed.html)
{ .pg:buttons }

Snowflake does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even more so than running a Tor relay or bridge which are already not particularly risky endeavors. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

### I2P (The Invisible Internet Project)

{{< title-card logo="./i2p.svg" >}}

**I2P** is a network layer which encrypts your connections and routes them via a network of computers distributed around the world. It is mainly focused on creating an alternative, privacy-protecting network rather than making regular internet connections anonymous.

{{< cards >}}
  {{< card link="https://geti2p.net/en" title="Homepage" icon="home" >}}
  {{< card link="https://geti2p.net/en/about/software" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=net.i2p.android)
[{{< badge content="Android" >}}](https://geti2p.net/en/download#android)
[{{< badge content="Windows" color="red" >}}](https://geti2p.net/en/download#windows)
[{{< badge content="macOS" color="indigo" >}}](https://geti2p.net/en/download#mac)
[{{< badge content="Linux" color="yellow" >}}](https://geti2p.net/en/download#unix)

Unlike Tor, all I2P traffic is internal to the I2P network, which means regular internet websites are **not** directly accessible from I2P. Instead, you can connect to websites which are hosted anonymously and directly on the I2P network, which are called "eepsites" and have domains which end in `.i2p`.

Also, unlike Tor, every I2P node will relay traffic for other users by default, instead of relying on dedicated relay volunteers to run nodes. There are approximately [10,000](https://metrics.torproject.org/networksize.html) relays and bridges on the Tor network compared to ~50,000 on I2P, meaning there is potentially more ways for your traffic to be routed to maximize anonymity. I2P also tends to be more performant than Tor, although this is likely a side effect of Tor being more focused on regular "clearnet" internet traffic and thus using more bottle necked exit nodes. Hidden service performance is generally considered to be much better on I2P compared to Tor. While running P2P applications like BitTorrent is challenging on Tor (and can massively impact Tor network performance), it is very easy and performant on I2P.

There are downsides to I2P's approach, however. Tor relying on dedicated exit nodes means more people in less safe environments can use it, and the relays that do exist on Tor are likely to be more performant and stable, as they generally aren't run on residential connections. Tor is also far more focused on **browser privacy** (i.e. anti-fingerprinting), with a dedicated [Tor Browser](../../software/tor/index.md) to make browsing activity as anonymous as possible. I2P is used via your [regular web browser](../../software/desktop-browsers/index.md), and while you can configure your browser to be more privacy-protecting, you probably still won't have the same browser fingerprint as other I2P users (there's no "crowd" to blend in with in that regard).

Tor is likely to be more resistant to censorship, due to their robust network of bridges and varying [pluggable transports](https://tb-manual.torproject.org/circumvention). On the other hand, I2P uses directory servers for the initial connection which are varying/untrusted and run by volunteers, compared to the hard-coded/trusted ones Tor uses which are likely easier to block.

[^1]: The `IsolateDestAddr` setting is discussed on the [Tor mailing list](https://lists.torproject.org/pipermail/tor-talk/2012-May/024403) and [Whonix's Stream Isolation documentation](https://whonix.org/wiki/Stream_Isolation), where both projects suggest that it is usually not a good approach for most people.

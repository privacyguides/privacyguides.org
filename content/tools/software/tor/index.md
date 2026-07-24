---
title: "Tor Browser"
description: Protect your internet browsing from prying eyes by using the Tor network, a secure network which circumvents censorship.
aliases:
- /tor
- /en/tor
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)
[{{< badge content="Mass Surveillance" color="blue" >}}](../../../wiki/basics/common-threats/index.md#mass-surveillance-programs)
[{{< badge content="Censorship" >}}](../../../wiki/basics/common-threats/index.md#avoiding-censorship)

**Tor** is a group of volunteer-operated servers that allows you to connect for free and improve your privacy and security on the Internet. Individuals and organizations can also share information over the Tor network with ".onion hidden services" without compromising their privacy. Because Tor traffic is difficult to block and trace, Tor is an effective censorship circumvention tool.

[Detailed Tor Overview](../../../wiki/advanced/tor-overview/index.md)
[Video: Why You Need Tor](https://www.privacyguides.org/videos/2025/03/02/why-you-need-tor)
{ .pg:buttons }

> [!TIP]
> Before connecting to Tor, please ensure you've read our [overview](../../../wiki/advanced/tor-overview/index.md) on what Tor is and how to connect to it safely. We often recommend connecting to Tor through a trusted [VPN provider](../../services/vpn/index.md), but you have to do so **properly** to avoid decreasing your anonymity.

There are a variety of ways to connect to the Tor network from your device, the most commonly used being the **Tor Browser**, a fork of Firefox designed for [anonymous](../../../wiki/basics/common-threats/index.md#anonymity-vs-privacy){ .pg-purple } browsing for desktop computers and Android.

Some of these apps are better than others; making a determination comes down to your threat model. If you are a casual Tor user who is not worried about your ISP collecting evidence against you, using mobile browser apps like [Onion Browser](#onion-browser-ios) to access the Tor network is probably fine. Increasing the number of people who use Tor on an everyday basis helps reduce the bad stigma of Tor, and lowers the quality of "lists of Tor users" that ISPs and governments may compile.

If more complete anonymity is paramount to your situation, you should **only** be using the desktop Tor Browser client, ideally in a [Whonix](../../os/desktop/index.md#whonix) + [Qubes](../../os/desktop/index.md#qubes-os) configuration. Mobile browsers are less common on Tor (and more fingerprintable as a result), and other configurations are not as rigorously tested against deanonymization.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#tor-browser" title="Tor Browser" image="./tor.svg" subtitle="Tor Browser is the top choice if you need anonymity, as it provides you with access to the Tor network and bridges, and it includes default settings and extensions that are automatically configured by the default security levels: *Standard*, *Safer* and *Safest*." >}}
  {{< card link="#onion-browser-ios" title="Onion Browser" image="./onion_browser.svg" subtitle="Onion Browser is an open-source browser that lets you browse the web anonymously over the Tor network on iOS devices and is endorsed by the Tor Project." >}}
{{< /cards >}}
</div>

## Tor Browser

{{< title-card logo="./tor.svg" >}}

**Tor Browser** is the top choice if you need anonymity, as it provides you with access to the Tor network and bridges, and it includes default settings and extensions that are automatically configured by the default security levels: *Standard*, *Safer* and *Safest*.

{{< cards >}}
  {{< card link="https://torproject.org" title="Homepage" icon="home" >}}
  {{< card link="http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion" title="Onion Service" icon="link" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://torproject.org/download)
[{{< badge content="macOS" color="indigo" >}}](https://torproject.org/download)
[{{< badge content="Windows" color="red" >}}](https://torproject.org/download)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
[{{< badge content="Android" >}}](https://torproject.org/download/#android)

> [!WARNING]
> You should **never** install any additional extensions on Tor Browser or edit `about:config` settings, including the ones we suggest for Firefox. Browser extensions and non-standard settings make you stand out from others on the Tor network, thus making your browser easier to [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

The Tor Browser is designed to prevent fingerprinting, or identifying you based on your browser configuration. Therefore, it is imperative that you do **not** modify the browser beyond the default [security levels](https://tb-manual.torproject.org/security-settings). When modifying the security level setting, you **must** always restart the browser before continuing to use it. Otherwise, [the security settings may not be fully applied](https://www.privacyguides.org/articles/2025/05/02/tor-security-slider-flaw), putting you at a higher risk of fingerprinting and exploits than you may expect based on the setting chosen.

In addition to installing Tor Browser on your computer directly, there are also operating systems designed specifically to connect to the Tor network such as [Whonix](../../os/desktop/index.md#whonix) on [Qubes OS](../../os/desktop/index.md#qubes-os), which provide even greater security and protections than the standard Tor Browser alone.

## Onion Browser (iOS)

[Read our latest Onion Browser review.](https://www.privacyguides.org/articles/2024/09/18/onion-browser-review)

{{< title-card logo="./onion_browser.svg" >}}

**Onion Browser** is an open-source browser that lets you browse the web anonymously over the Tor network on iOS devices and is endorsed by the [Tor Project](https://support.torproject.org/glossary/onion-browser).

{{< cards >}}
  {{< card link="https://onionbrowser.com" title="Homepage" icon="home" >}}
  {{< card link="https://onionbrowser.com/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id519296448)

Onion Browser does not provide the same levels of privacy protections as Tor Browser does on desktop platforms. For casual use it is a perfectly fine way to access hidden services, but if you're concerned about being traced or monitored by advanced adversaries you should not rely on this as an anonymity tool.

[Notably](https://github.com/privacyguides/privacyguides.org/issues/2929), Onion Browser does not *guarantee* all requests go through Tor. When using the built-in version of Tor, [your real IP **will** be leaked via WebRTC and audio/video streams](https://onionbrowser.com/faqs) due to limitations of WebKit. It is *safer* to use Onion Browser alongside [Orbot](../../advanced/alternative-networks/index.md#orbot), but this still comes with some limitations on iOS.

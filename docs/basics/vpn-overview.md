---
meta_title: "How Do VPNs Protect Your Privacy? Our VPN Overview - Privacy Guides"
title: VPN Overview
icon: material/vpn
description: Virtual Private Networks shift risk away from your ISP to a third-party you trust. You should keep these things in mind.
---

Virtual Private Networks are a way of extending the end of your network to exit somewhere else in the world. Originally, they were designed so that you could securely connect to a network even if you weren't *physically* there; you're *virtually* on a *private network*.

## How do VPNs work?

VPNs encrypt your traffic between your device and a server owned by your VPN provider. From the perspective of anyone between you and the VPN server, it looks like you're connecting to the VPN server. From the perspective of anyone between the VPN server and your destination site, all they can see is the VPN server connecting to the website.

``` mermaid
flowchart TD
    server== VPN encryption ===infra(Outside Infrastructure)== VPN encryption ===local[Local Network]== VPN encryption ===device[Your Device]
    server{VPN Server}-. No VPN encryption .--infr(Outside Infrastructure)-. No VPN encryption .--site[Destination Website]
```

## When should I use a VPN?

### Hiding browsing habits from your ISP

An ISP can see the flow of internet traffic entering and exiting your network termination device (i.e. modem).

They usually can't see the content of your traffic since encryption protocols such as HTTPS are commonly used on the internet, but they can see the [domains you request](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns). A VPN will prevent your ISP from seeing what domains you connect to, although the VPN provider is still able to see all your traffic.

==VPNs cannot encrypt data outside of the connection between your device and the VPN server.== VPN providers can see and modify your traffic the same way your ISP could. And there is no way to verify a VPN provider's "no logging" policies in any way.

### Hiding your IP address from third parties

Any website you connect to will see the VPN provider's IP address instead of yours. This can be useful if you want to avoid leaking your IP address to outside parties if you are worried about a DDoS or other attack against your network.

For example, a VPN can also protect you from your ISP or anti-piracy organizations while torrenting.

### Preventing tracking

A VPN can't prevent tracking all on its own, but it can offer a few benefits.

You can connect to a server in a different city or country than you live in, making it appear like you're somwhere you're not. This is easily circumvented using things like your browser's language and timezone settings, so this shouldn't be relied on.

Because you share a pool of IP addresses with many other users, it becomes more difficult to track you. Do note that most people do not have static IP addresses, so even without a VPN your IP address will change even without a VPN.

## When shouldn't I use a VPN?

Using a VPN in cases where you're using your [known identity](common-threats.md#common-misconceptions) is unlikely be useful.

Doing so may trigger spam and fraud detection systems, such as if you were to log into your bank's website.

### For anonymity

VPNs can't provide anonymity. Your VPN provider will still see your real IP address, and often has a money trail that can be linked directly back to you. You cannot rely on "no logging" policies to protect your data. Use [Tor](https://www.torproject.org/) instead.

### For E2EE

Encryption offered by VPN providers is between your devices and their servers. It guarantees that this specific link is secure. This is a step up from using unencrypted proxies where an adversary on the network can intercept the communications between your devices and said proxies and modify them. However, encryption between your apps or browsers with the service providers are not handled by this encryption.

In order to keep what you actually do on the websites you visit private and secure, you must use HTTPS. This will keep your passwords, session tokens, and queries safe from the VPN provider. Consider enabling "HTTPS everywhere" in your browser to mitigate downgrade attacks like [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Should I use encrypted DNS with a VPN?

Unless your VPN provider hosts the encrypted DNS servers, **no**. Using DOH/DOT (or any other form of encrypted DNS) with third-party servers will simply add more entities to trust and does **absolutely nothing** to improve your privacy/security. Your VPN provider can still see which websites you visit based on the IP addresses and other methods. Instead of just trusting your VPN provider, you are now trusting both the VPN provider and the DNS provider.

A common reason to recommend encrypted DNS is that it helps against DNS spoofing. However, your browser should already be checking for [TLS certificates](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) with **HTTPS** and warn you about it. If you are not using **HTTPS**, then an adversary can still just modify anything other than your DNS queries and the end result will be little different.

Needless to say, **you shouldn't use encrypted DNS with Tor**. This would direct all of your DNS requests through a single circuit and would allow the encrypted DNS provider to deanonymize you.

## Should I use Tor *and* a VPN?

By using a VPN with Tor, you're essentially creating a permanent entry node, often with a money trail attached. This provides zero additional benefits to you, while increasing the attack surface of your connection dramatically. If you wish to hide your Tor usage from your ISP or your government, Tor has a built-in solution for that: **Tor bridges**. [Read more about Tor bridges and why using a VPN is not necessary](../advanced/tor-overview.md).

## What about VPN providers that provide Tor nodes?

Do not use that feature. The point of using Tor is that you ==don't have to trust it==, unlike VPNs which require you to trust your provider. Currently Tor only supports the [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) protocol. [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (used in [WebRTC](https://en.wikipedia.org/wiki/WebRTC) for voice and video sharing, the new [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) protocol, etc.), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) and other packets will be dropped. To compensate for this, VPN providers typically will route all non-TCP packets through their VPN server (your first hop). This is the case with [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Additionally, when using this Tor over VPN setup, you do not have control over other important Tor features such as [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (using a different Tor circuit for every domain you visit).

The feature should be viewed as a convenient way to access the Tor Network, not to stay anonymous. For proper anonymity, use the Tor Browser, TorSocks, or a Tor gateway.

## Sources

- [VPN - a Very Precarious Narrative](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) by Dennis Schubert
- [IVPN Privacy Guides](https://www.ivpn.net/privacy-guides)
- ["Do I need a VPN?"](https://www.doineedavpn.com), a tool developed by IVPN to challenge aggressive VPN marketing by helping individuals decide if a VPN is right for them.
- [Free VPN App Investigation](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Hidden VPN owners unveiled: 101 VPN products run by just 23 companies](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [This Chinese company is secretly behind 24 popular apps seeking dangerous permissions](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)
- [The Trouble with VPN and Privacy Review Sites](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
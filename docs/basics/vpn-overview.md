---
meta_title: "How Do VPNs Protect Your Privacy? Our VPN Overview - Privacy Guides"
title: VPN Overview
icon: material/vpn
description: Virtual Private Networks shift risk away from your ISP to a third-party you trust. You should keep these things in mind.
---

Virtual Private Networks are a way of extending the end of your network to exit somewhere else in the world. Originally, they were designed so that you could securely connect to a network even if you weren't *physically* there; you're *virtually* on a *private network*.

## How do VPNs work?



## Should I use a VPN?

### Hiding Browsing Habits From Your ISP

An ISP can see the flow of internet traffic entering and exiting your network termination device (i.e. modem).

Encryption protocols such as HTTPS are commonly used on the internet, so they may not be able to see the content of your traffic, but they can see the [domains you request](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns). A VPN can shift trust to a server somewhere else in the world. As a result, the ISP then only sees that you are connected to a VPN and nothing about the activity that you're passing into it.


You should [take IVPN's quick test](https://www.doineedavpn.com) to see if a VPN is right for your threat model. A VPN does two things: shifting the risks from your Internet Service Provider to itself and hiding your IP from a third-party service.

VPNs cannot encrypt data outside of the connection between your device and the VPN server. VPN providers can see and modify your traffic the same way your ISP could. And there is no way to verify a VPN provider's "no logging" policies in any way.

However, they do hide your actual IP from a third-party service, provided that there are no IP leaks. They help you blend in with others and mitigate IP based tracking.

## When shouldn't I use a VPN?

Using a VPN in cases where you're using your [known identity](common-threats.md#common-misconceptions) is unlikely be useful.

Doing so may trigger spam and fraud detection systems, such as if you were to log into your bank's website.

## What about encryption?

Encryption offered by VPN providers are between your devices and their servers. It guarantees that this specific link is secure. This is a step up from using unencrypted proxies where an adversary on the network can intercept the communications between your devices and said proxies and modify them. However, encryption between your apps or browsers with the service providers are not handled by this encryption.

In order to keep what you actually do on the websites you visit private and secure, you must use HTTPS. This will keep your passwords, session tokens, and queries safe from the VPN provider. Consider enabling "HTTPS everywhere" in your browser to mitigate downgrade attacks like [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Should I use encrypted DNS with a VPN?

Unless your VPN provider hosts the encrypted DNS servers, **no**. Using DOH/DOT (or any other form of encrypted DNS) with third-party servers will simply add more entities to trust and does **absolutely nothing** to improve your privacy/security. Your VPN provider can still see which websites you visit based on the IP addresses and other methods. Instead of just trusting your VPN provider, you are now trusting both the VPN provider and the DNS provider.

A common reason to recommend encrypted DNS is that it helps against DNS spoofing. However, your browser should already be checking for [TLS certificates](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) with **HTTPS** and warn you about it. If you are not using **HTTPS**, then an adversary can still just modify anything other than your DNS queries and the end result will be little different.

Needless to say, **you shouldn't use encrypted DNS with Tor**. This would direct all of your DNS requests through a single circuit and would allow the encrypted DNS provider to deanonymize you.

## Should I use Tor *and* a VPN?

By using a VPN with Tor, you're creating essentially a permanent entry node, often with a money trail attached. This provides zero additional benefits to you, while increasing the attack surface of your connection dramatically. If you wish to hide your Tor usage from your ISP or your government, Tor has a built-in solution for that: Tor bridges. [Read more about Tor bridges and why using a VPN is not necessary](../advanced/tor-overview.md).

## What if I need anonymity?

VPNs cannot provide anonymity. Your VPN provider will still see your real IP address, and often has a money trail that can be linked directly back to you. You cannot rely on "no logging" policies to protect your data. Use [Tor](https://www.torproject.org/) instead.

## What about VPN providers that provide Tor nodes?

Do not use that feature. The point of using Tor is that you do not trust your VPN provider. Currently Tor only supports the [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) protocol. [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (used in [WebRTC](https://en.wikipedia.org/wiki/WebRTC) for voice and video sharing, the new [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) protocol, etc.), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) and other packets will be dropped. To compensate for this, VPN providers typically will route all non-TCP packets through their VPN server (your first hop). This is the case with [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Additionally, when using this Tor over VPN setup, you do not have control over other important Tor features such as [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (using a different Tor circuit for every domain you visit).

The feature should be viewed as a convenient way to access the Tor Network, not to stay anonymous. For proper anonymity, use the Tor Browser, TorSocks, or a Tor gateway.

## When are VPNs useful?

A VPN may still be useful to you in a variety of scenarios, such as:

1. Hiding your traffic from **only** your Internet Service Provider.
1. Hiding your downloads (such as torrents) from your ISP and anti-piracy organizations.
1. Hiding your IP from third-party websites and services, preventing IP based tracking.

For situations like these, or if you have another compelling reason, the VPN providers we listed above are who we think are the most trustworthy. However, using a VPN provider still means you're *trusting* the provider. In pretty much any other scenario you should be using a secure**-by-design** tool such as Tor.
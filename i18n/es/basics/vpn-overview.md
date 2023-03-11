---
title: Vista general del VPN
icon: material/vpn
description: Virtual Private Networks shift risk away from your ISP to a third-party you trust. You should keep these things in mind.
---

Las redes virtuales privadas (conocidas en inglés como Virtual Private Networks) son una manera de ampliar el extremo de tu red hacia algún lugar del mundo. Un ISP puede ver el flujo de tráfico de Internet que entra y sale de su dispositivo de terminación de red (es decir, el módem).

Encryption protocols such as HTTPS are commonly used on the internet, so they may not be able to see exactly what you're posting or reading, but they can get an idea of the [domains you request](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

Una VPN puede ayudar, ya que puede trasladar la confianza a un servidor en otro lugar del mundo. Como resultado, el ISP solamente ve que te conectaste a una VPN y nada de la actividad que le estás pasando.

## ¿Debería usar una VPN?

**Sí**, a menos que ya estés usando Tor. Una VPN hace dos cosas: trasladar los riesgos de su proveedor de servicios de Internet a sí mismo y ocultar su IP de un servicio de terceros.

Las VPN no pueden cifrar datos fuera de la conexión entre su dispositivo y el servidor VPN. Los proveedores de VPN pueden ver y modificar su tráfico del mismo modo que su proveedor de Internet. Y no hay forma de verificar de ninguna manera las políticas de "no registro" de un proveedor de VPN.

Sin embargo, ocultan tu IP real de un servicio de terceros, siempre que no haya fugas de IP. Le ayudan a mezclarse con los demás y a mitigar el seguimiento basado en la IP.

## ¿Cuándo no debería usar una VPN?

El uso de una VPN en caso de que estés utilizando tu[identidad conocida](common-threats.md#common-misconceptions) probablemente no sea útil.

Si lo hace, pueden activarse los sistemas de detección de spam y fraude, por ejemplo si te conectas al sitio web de tu banco.

## ¿Qué pasa con el cifrado?

Encryption offered by VPN providers are between your devices and their servers. It guarantees that this specific link is secure. This is a step up from using unencrypted proxies where an adversary on the network can intercept the communications between your devices and said proxies and modify them. However, encryption between your apps or browsers with the service providers are not handled by this encryption.

In order to keep what you actually do on the websites you visit private and secure, you must use HTTPS. This will keep your passwords, session tokens, and queries safe from the VPN provider. Consider enabling "HTTPS everywhere" in your browser to mitigate downgrade attacks like [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Should I use encrypted DNS with a VPN?

Unless your VPN provider hosts the encrypted DNS servers, **no**. Using DOH/DOT (or any other form of encrypted DNS) with third-party servers will simply add more entities to trust and does **absolutely nothing** to improve your privacy/security. Your VPN provider can still see which websites you visit based on the IP addresses and other methods. Instead of just trusting your VPN provider, you are now trusting both the VPN provider and the DNS provider.

A common reason to recommend encrypted DNS is that it helps against DNS spoofing. However, your browser should already be checking for [TLS certificates](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) with **HTTPS** and warn you about it. If you are not using **HTTPS**, then an adversary can still just modify anything other than your DNS queries and the end result will be little different.

Needless to say, **you shouldn't use encrypted DNS with Tor**. This would direct all of your DNS requests through a single circuit and would allow the encrypted DNS provider to deanonymize you.

## Should I use Tor *and* a VPN?

By using a VPN with Tor, you're creating essentially a permanent entry node, often with a money trail attached. This provides zero additional benefits to you, while increasing the attack surface of your connection dramatically. If you wish to hide your Tor usage from your ISP or your government, Tor has a built-in solution for that: Tor bridges. [Read more about Tor bridges and why using a VPN is not necessary](../advanced/tor-overview.md).

## ¿Y si necesito anonimato?

VPNs cannot provide anonymity. Your VPN provider will still see your real IP address, and often has a money trail that can be linked directly back to you. You cannot rely on "no logging" policies to protect your data. Use [Tor](https://www.torproject.org/) instead.

## What about VPN providers that provide Tor nodes?

Do not use that feature. The point of using Tor is that you do not trust your VPN provider. Currently Tor only supports the [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) protocol. [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (used in [WebRTC](https://en.wikipedia.org/wiki/WebRTC) for voice and video sharing, the new [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) protocol, etc), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) and other packets will be dropped. To compensate for this, VPN providers typically will route all non-TCP packets through their VPN server (your first hop). This is the case with [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Additionally, when using this Tor over VPN setup, you do not have control over other important Tor features such as [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (using a different Tor circuit for every domain you visit).

The feature should be viewed as a convenient way to access the Tor Network, not to stay anonymous. For proper anonymity, use the Tor Browser, TorSocks, or a Tor gateway.

## When are VPNs useful?

A VPN may still be useful to you in a variety of scenarios, such as:

1. Hiding your traffic from **only** your Internet Service Provider.
1. Hiding your downloads (such as torrents) from your ISP and anti-piracy organizations.
1. Hiding your IP from third-party websites and services, preventing IP based tracking.

For situations like these, or if you have another compelling reason, the VPN providers we listed above are who we think are the most trustworthy. However, using a VPN provider still means you're *trusting* the provider. In pretty much any other scenario you should be using a secure**-by-design** tool such as Tor.

## Sources and Further Reading

1. [VPN - a Very Precarious Narrative](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) by Dennis Schubert
1. [Tor Network Overview](../advanced/tor-overview.md)
1. [IVPN Privacy Guides](https://www.ivpn.net/privacy-guides)
1. ["Do I need a VPN?"](https://www.doineedavpn.com), a tool developed by IVPN to challenge aggressive VPN marketing by helping individuals decide if a VPN is right for them.

## Related VPN Information

- [El problema con las VPN y los sitios de revisión de privacidad](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Investigación sobre aplicaciones VPN gratuitas](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Propietarios ocultos de VPN revelados: 101 productos VPN administrados por solo 23 empresas](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Esta empresa china está secretamente detrás de 24 aplicaciones populares que buscan permisos peligrosos](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

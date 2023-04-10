---
title: Vista general de VPN
icon: material/vpn
description: Las Redes Privadas Virtuales desplazan el riesgo de tu proveedor de Internet a un tercero quien confías. Debes tener en cuenta estas cosas.
---

Las redes privadas virtuales son una forma de ampliar el extremo de tu red para que salga por otro lugar en el mundo. Un ISP puede ver el flujo de tráfico de Internet que entra y sale de tu dispositivo de terminación de red (es decir, el módem).

Los protocolos de cifrado como HTTPS se utilizan habitualmente en Internet, por lo que no puedan ser capaces de ver exactamente lo que estés publicando o leyendo, pero pueden hacerse una idea de los [dominios que solicitas](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

Una VPN puede ayudar, ya que puede trasladar la confianza a un servidor en otro lugar del mundo. Como resultado, el ISP solamente ve que estás conectado a una VPN y nada sobre la actividad que le estás pasando.

## ¿Yo debería usar una VPN?

**Sí**, a menos que ya estés usando Tor. Una VPN hace dos cosas: trasladar los riesgos de tu proveedor de servicios de Internet a sí mismo y ocultar tu IP de un servicio de terceros.

Las VPNs no pueden encriptar datos fuera de la conexión entre tu dispositivo y el servidor VPN. Los proveedores de VPN pueden ver y modificar tu tráfico del mismo modo que tu proveedor de Internet podría. Y no hay forma en absoluto de verificar las políticas de "no registro" de un proveedor de VPN.

Sin embargo, sí ocultan tu IP real de un servicio de terceros, siempre que no haya fugas de IP. Te ayudan a mezclarte con los demás y a mitigar el seguimiento basado en la IP.

## ¿Cuándo no debería usar una VPN?

El uso de una VPN casos donde estés utilizando tu [identidad conocida](common-threats.md#common-misconceptions) probablemente no será útil.

Si lo haces, puede activar sistemas de detección de spam y fraude, por ejemplo si te conectas al sitio web de tu banco.

## ¿Qué pasa con la encriptación?

El cifrado que ofrecen los proveedores de VPN se realiza entre tus dispositivos y sus servidores. Garantiza que este enlace específico es seguro. Esto supone un paso adelante respecto al uso de proxies no cifrados, en los que un adversario en la red puede interceptar las comunicaciones entre tus dispositivos y dichos proxies y modificarlas. Sin embargo, el cifrado entre tus aplicaciones o navegadores con los proveedores de servicios no se gestiona mediante este cifrado.

Para mantener la privacidad y seguridad de lo que haces en los sitios web que visitas, debes utilizar HTTPS. Esto mantendrá tus contraseñas, tokens de sesión y consultas a salvo del proveedor de VPN. Considera la posibilidad de activar "HTTPS en todas partes" en tu navegador para mitigar los ataques de degradación como [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## ¿Debo utilizar DNS cifrado con una VPN?

A menos que tu proveedor de VPN aloje los servidores DNS cifrados, **no**. Usar DOH/DOT (o cualquier otra forma de DNS encriptado) con servidores de terceros simplemente añadirá más entidades en las que confiar y no hace **absolutamente nada** para mejorar tu privacidad/seguridad. Tu proveedor de VPN aún puede ver qué sitios web visitas basándose en las direcciones IP y otros métodos. En lugar de confiar únicamente en tu proveedor de VPN, ahora confías tanto en el proveedor de VPN como en el proveedor de DNS.

Una razón común para recomendar DNS cifrado es que ayuda contra el spoofing de DNS. Sin embargo, tu navegador ya debería estar buscando [certificados TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) con **HTTPS** y advertirte al respecto. Si no estás utilizando **HTTPS**, entonces un adversario todavía puede simplemente modificar cualquier cosa que no sean tus consultas DNS y el resultado final será similar.

No hace falta decir que **no deberías usar DNS encriptados con Tor**. Esto dirigiría todas tus peticiones DNS a través de un único circuito y permitiría al proveedor de DNS cifrado desanonimizarte.

## ¿Debería usar Tor *y* una VPN?

Al usar una VPN con Tor, estás creando esencialmente un nodo de entrada permanente, a menudo con un rastro de dinero adjunto. Esto no te proporciona ningún beneficio adicional, a la vez que aumenta drásticamente la superficie de ataque de tu conexión. Si deseas ocultar el uso de Tor a tu ISP o a tu gobierno, Tor tiene una solución incorporada para eso: los puentes Tor. [Lee más sobre los puentes Tor y por qué no es necesario usar una VPN](../advanced/tor-overview.md).

## ¿Y si necesito anonimato?

Las VPN no pueden proporcionar anonimato. Tu proveedor de VPN aún verá tu dirección IP real, y a menudo tiene un rastro de dinero que puede vincularse directamente a ti. No puedes confiar en las políticas de "no registro" para proteger tus datos. Usa [Tor](https://www.torproject.org/) en vez.

## ¿Qué pasa con los proveedores de VPN que proporcionan nodos Tor?

No utilices esa función. El punto de usar Tor es que no confías en tu proveedor de VPN. Actualmente Tor solamente soporta el protocolo [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol). [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (utilizado en [WebRTC](https://en.wikipedia.org/wiki/WebRTC) para compartir voz y vídeo, el nuevo protocolo [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3), etc), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) y otros paquetes serán descartados. Para compensar por esto, los proveedores de VPN suelen enrutar todos los paquetes no TCP a través de su servidor VPN (tu primer salto). Este es el caso con [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Adicionalmente, al usar esta configuración de Tor sobre VPN, no tienes control sobre otras funciones importantes de Tor como [Dirección de Destino Aislada](https://www.whonix.org/wiki/Stream_Isolation) (usando un circuito Tor diferente para cada dominio que visitas).

La función debe verse como una forma conveniente de acceder a la Red Tor, no para permanecer anónimo. Para anonimato adecuado, usa el navegador Tor, TorSocks o una puerta de enlace Tor.

## ¿Cuándo son útiles las VPNs?

Una VPN puede seguir siéndote útil en una variedad de escenarios, por ejemplo:

1. Ocultando tu tráfico de **sólo** tu proveedor de servicios de Internet.
1. Ocultando tus descargas (como los torrents) de tu ISP y a las organizaciones antipiratería.
1. Ocultando tu IP de sitios web y servicios de terceros, evitando el rastreo basado en IP.

Para situaciones como estas, o si tienes otra razón de peso, los proveedores de VPN que hemos enumerado anteriormente son los que consideramos más fiables. Sin embargo, utilizar un proveedor de VPN aun significa que estás *confiando* en el proveedor. En casi cualquier otro escenario deberías estar usando una herramienta segura**-por diseño** como Tor.

## Fuentes y Lecturas Complementarias

1. [VPN - una narrativa muy precaria](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) por Dennis Schubert
1. [Visión General de la Red Tor](../advanced/tor-overview.md)
1. [IVPN Privacy Guides](https://www.ivpn.net/privacy-guides)
1. ["¿Necesito una VPN?"](https://www.doineedavpn.com), una herramienta desarrollada por IVPN para desafiar el mercadeo agresivo de las VPN ayudando las personas a decidir si una VPN es adecuada para ellas.

## Información Relacionada con las VPNs

- [El Problema con los Sitios de Revisión de VPNs y de Privacidad](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Investigación de Aplicaciones de VPN Gratuita](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Propietarios ocultos de VPN revelados: 101 productos VPN administrados por solo 23 empresas](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Esta empresa china está secretamente detrás de 24 aplicaciones populares que buscan permisos peligrosos](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

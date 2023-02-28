---
title: "Servicios VPN"
icon: material/vpn
---

Encuentre una VPN sin registro que no esté dispuesto a vender o leer su tráfico web.

??? danger "Las VPN no proporcionan anonimato"

    El uso de una VPN **no** mantendrá tus hábitos de navegación en el anonimato, ni añadirá seguridad adicional al tráfico no seguro (HTTP).
    
    Si estás buscando **anonimato**, deberías usar el navegador Tor **en lugar** de una VPN.
    
    Si buscas mayor **seguridad**, deberías asegurarte siempre de que te conectas a sitios web que utilicen HTTPS. Una VPN no sustituye las buenas prácticas de seguridad.
    
    [Descargar Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos de Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

??? question "¿Cuándo son útiles las VPN?"

    Si buscas una mayor **privacidad** de tu ISP, de una red wifi pública o mientras hace o descargar archivos Torrent, una VPN puede ser la solución para usted, siempre y cuando entienda los riesgos que conlleva.
    
    [Más información](basics/vpn-overview.md){ .md-button }

## Proveedores recomendados

!!! summary "Criterios"

    Nuestros proveedores recomendados usan encriptación, aceptan Monero, soportan WireGuard & OpenVPN, y tienen una política de no registro. Lea nuestra [lista de criterios completa](#our-criteria) para mayor información.

### Mullvad

!!! recommendation

    ![Mullvad logo](assets/img/vpn/mullvad.svg#only-light){ align=right }
    ![Mullvad logo](assets/img/vpn/mullvad-dark.svg#only-dark){ align=right }
    
    **Mullvad** es una VPN rápida y cómoda con un enfoque serio en la transparencia y la seguridad. Llevan en funcionamiento desde **2009**.
    
    Mullvad tiene su sede en Suecia y no tiene prueba gratuita. descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

??? check annotate "38 Países"

    Mullvad tiene [servidores en 38 países](https://mullvad.net/servers/) (1). Elegir un proveedor de VPN con un servidor cercano a usted reducirá la latencia del tráfico de red que envíe. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
    
    También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

1. En 2022/05/17

??? check "Auditoria independiente"

    Los clientes VPN de Mullvad han sido auditados por Cure53 y Assured AB en un reporte de pentest [publicado en cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Los investigadores de seguridad concluyeron:
    
    > Cure53 y Assured AB están satisfechos con los resultados de la auditoría y el software deja una impresión positiva en general. Con la dedicación a la seguridad del equipo interno de Mullvad VPN, los testers no tienen dudas de que el proyecto va por buen camino desde el punto de vista de la seguridad. You can view individual reports for each platform at [protonvpn.com](https://protonvpn.com/blog/open-source/). In April 2022 Proton VPN underwent [another audit](https://protonvpn.com/blog/no-logs-audit/) and the report was [produced by Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). A [letter of attestation](https://proton.me/blog/security-audit-all-proton-apps) was provided for Proton VPN's apps on 9th November 2021 by [Securitum](https://research.securitum.com).

??? check "Clientes Open Source"

    Proton VPN proporciona el código fuente para su aplicación de escritorio and móvil en su [GitHub organization](https://github.com/ProtonVPN).

??? check "Acepta dinero y Monero"

    Proton VPN, además de aceptar tarjetas de crédito/débito y Paypal, acepta Bitcoin, y **cash/local currency** como formas anónimas de pago.

??? check "Soporte de WireGuard"

    Mullvad soporta el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más reciente que utiliza [criptografía](https://www.wireguard.com/protocol/) de última generación. Además, WireGuard pretende ser más simple y veloz.
    
    Mullvad [recomienda](https://mullvad.net/en/help/why-wireguard/) el uso de WireGuard con su servicio. Es el protocolo por defecto o único en las aplicaciones de Mullvad para Android, iOS, macOS y Linux, pero en Windows hay que [activar manualmente](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard.

??? check "Soporte de IPv6"

    Mullvad soporta el futuro de la red [IPv6](https://es.wikipedia.org/wiki/IPv6). Su red permite [acceder a servicios alojados en IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) a diferencia de otros proveedores que bloquean las conexiones IPv6.

??? check "Redirección remota de puertos"

    Además de proporcionar los archivos de configuración estándar de OpenVPN, Proton VPN tiene clientes móviles para [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085) y [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US) que permiten conectarse fácilmente a sus servidores.

??? check "Aplicaciones móviles"

    Mullvad ha publicado su cliente en la [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) y en [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos con una interfaz fácil de usar en lugar de requerir la configuración manual de la conexión de WireGuard. El cliente móvil en Android también está disponible en [F-Droid](https://f-droid.org/packages/net.mullvad.mullvadvpn), lo que garantiza que se compila con [builds reproducibles](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). They offer adblocking and known malware domains blocking with their DNS service. Additionally, Proton VPN also offers "Tor" servers allowing you to easily connect to onion sites, but we still strongly recommend using [the official Tor Browser](https://www.torproject.org/) for this purpose.

!!! info "Funcionalidades adicionales"

    Mullvad es muy transparente en cuanto a los nodos que posee o alquila (https://mullvad.net/es/servers/). Utilizan [ShadowSocks](https://shadowsocks.org/en/index.html) en su configuración de ShadowSocks + OpenVPN, lo que les hace más resistentes contra los cortafuegos con [Inspección profunda de paquete](https://es.wikipedia.org/wiki/Deep_Packet_Inspection) que intentan bloquear las VPN.

### Proton VPN

!!! recomendación

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** es un fuerte contendiente en el espacio de las VPN, y ha estado en funcionamiento desde 2016. Proton AG tiene su sede en Suiza y ofrece un nivel gratuito limitado, así como una opción premium con más funciones.
    
    **Free** — **Plus Plan USD $71.88/anual** (1)
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Source Code" } También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

??? check annotate "63 países"

    Proton VPN tiene [servidores en 63 países](https://protonvpn.com/vpn-servers) (1). Elegir un proveedor de VPN con un servidor cercano a usted reducirá la latencia del tráfico de red que envíe. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
    
    También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

1. En 2022/05/17

??? check "Auditoria independiente"

    IVPN se ha sometido a una [auditoría de no-logging de Cure53](https://cure53.de/audit-report_ivpn.pdf) que concluyó de acuerdo con la afirmación de no-logging de IVPN. IVPN también ha completado un [informe completo de pentest Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) en enero de 2020. IVPN has also said they plan to have [annual reports](https://www.ivpn.net/blog/independent-security-audit-concluded) in the future. A further review was conducted [in April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) and was produced by Cure53 [on their website](https://cure53.de/pentest-report_IVPN_2022.pdf).

??? check "Clientes Open Source"

    A partir de febrero de 2020 [las aplicaciones de IVPN son ahora de código abierto](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Source code can be obtained from their [GitHub organization](https://github.com/ivpn).

??? check "Acepta efectivo"

    Además de aceptar tarjetas de crédito/débito y PayPal, IVPN acepta Bitcoin, **Monero** y **efectivo/moneda local** (en planes anuales) como formas de pago anónimas.

??? check "Soporte de WireGuard"

    Proton VPN soporta principalmente el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más reciente que utiliza [criptografía](https://www.wireguard.com/protocol/) de última generación. Además, WireGuard pretende ser más simple y veloz.
    
    IVPN [recomienda](https://www.ivpn.net/wireguard/) el uso de WireGuard con su servicio y, como tal, es el protocolo predeterminado en todas las aplicaciones de IVPN. IVPN also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

??? warning "Redirección remota de puertos"

    El [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) es posible con un plan de pago (Pro). Port forwarding [can be activated](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via the client area. Port forwarding is only available on IVPN when using WireGuard or OpenVPN protocols and is [disabled on US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? check "Redirección remota de puertos"

    Además de proporcionar los archivos de configuración estándar de OpenVPN, Proton VPN tiene clientes móviles para [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683) y [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client) que permiten conectarse fácilmente a sus servidores.

??? check "Aplicaciones móviles"

    Proton VPN tiene sus propios servidores y centros de datos en Suiza, Islandia y Suecia. Ofrecen bloqueo de anuncios y de dominios con malware conocido con su servicio de DNS.

### IVPN

!!! recomendación

    ![IVPN logo](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** es otro proveedor de VPN premium, y llevan en funcionamiento desde 2009. IVPN tiene su sede en Gibraltar. **Standard USD $60/año** — **Pro USD $100/año**
    
    [:octicons-home-16: Homepage](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Source Code" }
    
    También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server). downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

??? check annotate "32 Países"

    IVPN tiene [servidores en 32 países](https://www.ivpn.net/server-locations) (1). Elegir un proveedor de VPN con un servidor cercano a usted reducirá la latencia del tráfico de red que envíe. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
    
    También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

1. En 2022/05/17

??? check "Auditoria independiente"

    Los clientes VPN de Mullvad han sido auditados por Cure53 y Assured AB en un reporte de pentest [publicado en cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Los investigadores de seguridad concluyeron:
    
    > Cure53 y Assured AB están satisfechos con los resultados de la auditoría y el software deja una impresión positiva en general. Con la dedicación a la seguridad del equipo interno de Mullvad VPN, los testers no tienen dudas de que el proyecto va por buen camino desde el punto de vista de la seguridad.
    
    En 2020 se anunció una segunda auditoría (https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) y el [informe final de la auditoría] (https://cure53.de/pentest-report_mullvad_2020_v2.pdf) se publicó en el sitio web de Cure53:
    
    > Los resultados de este proyecto de mayo-junio de 2020 dirigido al complejo Mullvad, son bastante positivos. [...] El ecosistema general de aplicaciones utilizado por Mullvad deja una impresión sólida y estructurada. La estructura general de la aplicación facilita el despliegue de parches y correcciones de forma estructurada. Más que nada, los hallazgos detectados por Cure53 muestran la importancia de auditar y reevaluar constantemente los vectores de filtración actuales, para garantizar siempre la privacidad de los usuarios finales. With that being said, Mullvad does a great job protecting the end-user from common PII leaks and privacy related risks.
    
    In 2021 an infrastructure audit [was announced](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) and the [final audit report](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) was made available on Cure53's website. Another report was commissioned [in June 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

??? check "Clientes Open Source"

    Mullvad provides the source code for their desktop and mobile clients in their [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

??? check "Acepta efectivo"

    Mullvad, in addition to accepting credit/debit cards and PayPal, accepts Bitcoin, Bitcoin Cash, **Monero** and **cash/local currency** as anonymous forms of payment. [WireGuard](https://www.wireguard.com) es un protocolo más reciente que utiliza [criptografía](https://www.wireguard.com/protocol/) de última generación.

??? check "Soporte de WireGuard"

    IVPN soporta el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más reciente que utiliza [criptografía](https://www.wireguard.com/protocol/) de última generación. Además, WireGuard pretende ser más simple y veloz.
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) the use of WireGuard with their service. It is the default or only protocol on Mullvad's Android, iOS, macOS, and Linux apps, but on Windows you have to [manually enable](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad also offers a WireGuard configuration generator for use with the official WireGuard [apps](https://www.wireguard.com/install/).

??? check "Redirección remota de puertos"

    El [redirección de puertos] (https://es.wikipedia.org/wiki/Port_Forwarding) es posible con un plan Pro. La redirección de puertos [puede ser activada](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) a través del Client Area.

??? warning "Redirección remota de puertos"

    Además de proporcionar archivos de configuración estándar de OpenVPN, IVPN tiene aplicaciones móviles para [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683) y [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client) que permiten conectarse fácilmente a sus servidores. La aplicación móvil en Android también está disponible en [F-Droid](https://f-droid.org/en/packages/net.ivpn.client), lo que garantiza que se compila con [builds reproducibles](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). See [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) for more information.

??? check "Redirección remota de puertos"

    Los clientes IVPN soportan la autenticación de dos factores (los clientes Mullvad y Proton VPN no). IVPN también proporciona la funcionalidad "[AntiTracker](https://www.ivpn.net/antitracker)", que bloquea las redes publicitarias y los rastreadores de la red.

??? check "Aplicaciones móviles"

    Es importante tener en cuenta que el uso de un proveedor de VPN no le hará anónimo, pero le dará mayor privacidad en ciertas situaciones. Una VPN no es una herramienta para actividades ilegales. No confíes en una política de "no registro". Mullvad's website is also accessible via Tor at [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

## Criteria

!!! peligro

    It is important to note that using a VPN provider will not make you anonymous, but it will give you better privacy in certain situations. A VPN is not a tool for illegal activities. Don't rely on a "no log" policy.

Exigimos que todos nuestros proveedores de VPN recomendados, proporcionen archivos de configuración de OpenVPN para ser utilizados en cualquier cliente. **Si** una VPN proporciona su propio cliente personalizado, requerimos un killswitch para bloquear las fugas de datos de la red cuando se desconecta. We suggest you familiarize yourself with this list before choosing a VPN provider, and conduct your own research to ensure the VPN provider you choose is as trustworthy as possible.

### Tecnología

We require all our recommended VPN providers to provide OpenVPN configuration files to be used in any client. **If** a VPN provides their own custom client, we require a killswitch to block network data leaks when disconnected.

**Mejor caso:**

- Soporte para protocolos fuertes como WireGuard & OpenVPN.
- Killswitch integrado en los clientes.
- Soporte de multisaltos. El multihopping es importante para mantener la privacidad de los datos en caso de que un solo nodo se vea comprometido.
- Si se proporciona clientes VPN, deben ser [de código abierto](https://en.wikipedia.org/wiki/Open_source), como el software VPN que generalmente llevan incorporado. Creemos que la disponibilidad de [código fuente](https://en.wikipedia.org/wiki/Source_code) proporciona una mayor transparencia sobre lo que su dispositivo está haciendo realmente.

**Best Case:**

- Soporte de WireGuard y OpenVPN.
- Killswitch con opciones altamente configurables (activar/desactivar en determinadas redes, en el arranque, etc.)
- Clientes VPN fáciles de usar
- Admite [IPv6](https://en.wikipedia.org/wiki/IPv6). Esperamos que los servidores permitan las conexiones entrantes a través de IPv6 y le permitan acceder a los servicios alojados en direcciones IPv6.
- La capacidad de [redirección de puertos](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) ayuda a crear conexiones cuando se utiliza software de intercambio de archivos P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)), Freenet, o se aloja un servidor (por ejemplo, Mumble).

### Privacidad

We prefer our recommended providers to collect as little data as possible. Not collecting personal information on registration, and accepting anonymous forms of payment are required.

**Mejor caso:**

- Opción de pago en Monero o en efectivo.
- No se requiere información personal para registrarse: Sólo nombre de usuario, contraseña y correo electrónico como máximo.

**Best Case:**

- Acepta Monero, dinero en efectivo y otras formas de pago anónimo (tarjetas de regalo, etc.)
- No se aceptan datos personales (nombre de usuario autogenerado, no se requiere correo electrónico, etc.)

### Seguridad

A VPN is pointless if it can't even provide adequate security. We require all our recommended providers to abide by current security standards for their OpenVPN connections. Ideally, they would use more future-proof encryption schemes by default. We also require an independent third-party to audit the provider's security, ideally in a very comprehensive manner and on a repeated (yearly) basis.

**Mejor caso:**

- Esquemas de cifrado fuertes: OpenVPN con autenticación SHA-256; RSA-2048 o mejor handshake; AES-256-CBC o cifrado de datos AES-256-GCM.
- Perfect Forward Secrecy (PFS).
- Auditorías de seguridad publicadas por una empresa externa de prestigio.

**Best Case:**

- Cifrado más fuerte: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Auditorías de seguridad exhaustivas publicadas por una empresa externa de prestigio.
- Programas de recompensa de errores y/o un proceso coordinado de divulgación de vulnerabilidades.

### Confianza

You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Mejor caso:**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Informes de transparencia frecuentes.

### Marketing

With the VPN providers we recommend we like to see responsible marketing.

**Mejor caso:**

- Debe tener análisis propios (no Google Analytics, etc.). El sitio del proveedor también debe cumplir con [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) para las personas que quieran excluirse.

Must not have any marketing which is irresponsible:

- Garantizar la protección del anonimato al 100%. Cuando alguien afirma que algo es 100% significa que no hay certeza de fracaso. Sabemos que la gente puede desanonimizarse fácilmente de varias maneras, por ejemplo:
    - Reusing personal information (e.g., email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc.)
    - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Afirmar que una VPN de un solo circuito es "más anónima" que Tor, el cual es un circuito de 3 o más saltos que cambia regularmente.
- Utilice un lenguaje responsable, por ejemplo, está bien decir que una VPN está "desconectada" o "no conectada", pero afirmar que alguien está "expuesto", "vulnerable" o "comprometido" es un uso innecesario de un lenguaje alarmante que puede ser incorrecto. Por ejemplo, esa persona podría simplemente estar en el servicio de otro proveedor de VPN o usar Tor.

**Best Case:**

Responsible marketing that is both educational and useful to the consumer could include:

- Una comparación precisa para cuando se debe utilizar Tor u otras [redes autónomas](self-contained-networks.md).
- Disponibilidad del sitio web del proveedor de VPN a través de un .onion [Hidden Service](https://es.wikipedia.org/wiki/.onion)

### Funcionalidades adicionales

While not strictly requirements, there are some factors we looked into when determining which providers to recommend. These include adblocking/tracker-blocking functionality, warrant canaries, multihop connections, excellent customer support, the number of allowed simultaneous connections, etc.

--8<-- "includes/abbreviations.es.txt"

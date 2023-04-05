---
title: "Servicios de VPN"
icon: material/vpn
description: Estos son los mejores servicios VPN para proteger tu privacidad y seguridad en línea. Encuentra un proveedor aquí que no esté para espiarte.
---

Si buscas **privacidad** adicional de tu proveedor de servicios de internet, en una red wifi pública o mientras descargando archivos Torrent, una VPN puede ser la solución para ti, siempre y cuando entiendas los riesgos que conlleva. Creemos que estos proveedores están por encima de los demás:

<div class="grid cards" markdown>

- ![Logo IVPN](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![logotipo VPN de Proton](assets/img/vpn/protonvpn.svg){ .twemoji } [VPN de Proton](#proton-vpn)

</div>

!!! peligro "Las VPNs no proporcionan anonimato"

    El uso de una VPN **no** mantendrá sus hábitos de navegación en el anonimato, ni añadirá seguridad adicional al tráfico no seguro (HTTP).
    
    Si está buscando **anonimato**, debería usar el navegador Tor **en lugar** de una VPN.
    
    Si busca mayor **seguridad**, debería asegurarse siempre de que se conecta a sitios web que utilicen HTTPS. Una VPN no sustituye las buenas prácticas de seguridad.
    
    [Descargar Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos de Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

[Resumen detallado de VPN :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Proveedores Recomendados

Nuestros proveedores recomendados usan encriptación, aceptan Monero, soportan WireGuard & OpenVPN, y tienen una política de no registro. Lee nuestra [lista completa de criterios](#criteria) para más información.

### IVPN

!!! recomendación

    ![IVPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **IVPN** es un fuerte contendiente en el espacio de las VPNs, y ha estado en funcionamiento desde 2009. IVPN es basado en Gibraltar.
    
    **Free** — **Plus Plan USD $71.88/anual** (1)
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Source Code" } También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } 35 Países

IVPN tiene servidores [en 35 países](https://www.ivpn.net/server-locations).(1) Elegiendo un proveedor de VPN con un servidor más cercano de ti reducirá la latencia del tráfico de red que envíes. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
{ .annotate }

1. Última comprobación: 2022-09-16

También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [[servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Auditado independientemente

IVPN se ha sometido a una auditoría de no-registrar en [por parte de Cure53](https://cure53.de/audit-report_ivpn.pdf) que concluyó de acuerdo con la afirmación de no-registrar de IVPN. IVPN también ha completado una [prueba de penetración exhaustiva Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) en enero de 2020. IVPN también ha dicho que tiene previsto tener [informes anuales](https://www.ivpn.net/blog/independent-security-audit-concluded) en el futuro. Se realizó una revisión adicional [en abril de 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) y fue producida por Cure53 [en su sitio web](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Clientes de código abierto

A partir de febrero de 2020 [Las aplicaciones IVPN ya son de código abierto](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). El código fuente puede ser obtenido en su [organización GitHub](https://github.com/ivpn).

#### :material-check:{ .pg-green } Acepta Efectivo y Monero

Además de aceptar tarjetas de crédito/débito y PayPal, IVPN acepta Bitcoin, **Monero** y **efectivo/moneda local** (en planes anuales) como formas anónimas de pago.

#### :material-check:{ .pg-green } Soporte de WireGuard

IVPN soporta el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más nuevo que utiliza criptografía de última generación [](https://www.wireguard.com/protocol/). Además, WireGuard aspira ser más simple y veloz.

IVPN [recomienda](https://www.ivpn.net/wireguard/) el uso de WireGuard con su servicio y, como tal, el protocolo es el predeterminado en todas las aplicaciones de IVPN. IVPN también ofrece un generador de configuración de WireGuard para utilizarlo con las [apps](https://www.wireguard.com/install/) oficiales.

#### :material-check:{ .pg-green } Reenvío Remoto de Puertos

El reenvío remoto de puertos [](https://en.wikipedia.org/wiki/Port_forwarding) es posible con un plan Pro. Redirección de puertos [puede ser activada](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) a través del client area. La redirección de puertos solo está disponible en IVPN cuando se utilizan los protocolos WireGuard u OpenVPN y está [deshabilitada en los servidores de Estados Unidos](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Clientes Móviles

Además de proporcionar los archivos de configuración estándar de OpenVPN, IVPN tiene clientes móviles para [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), y [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client) y[GitHub](https://github.com/ivpn/android-app/releases) que permiten conexiones fáciles a sus servidores.

#### :material-information-outline:{ .pg-blue } Funcionalidad Adicional

Proton VPN tiene sus propios servidores y centros de datos en Suiza, Islandia y Suecia. IVPN también proporciona la funcionalidad "[AntiTracker](https://www.ivpn.net/antitracker)", que bloquea las redes publicitarias y los rastreadores al nivel de la red.

### Mullvad

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

#### :material-check:{ .pg-green } 41 Países

IVPN tiene servidores [en 41 países](https://mullvad.net/servers/).(1) Elegiendo un proveedor de VPN con un servidor más cercano de ti reducirá la latencia del tráfico de red que envíes. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
{ .annotate }

1. Última comprobación: 2023-01-19

También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [[servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Auditado independientemente

Los clientes VPN de Mullvad han sido auditados por Cure53 y Assured AB en un reporte de prueba de penetración [publicado en cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Los investigadores de seguridad concluyeron:

> Cure53 y Assured AB están satisfechos con los resultados de la auditoría y el software deja una impresión general positiva. Con la dedicación a la seguridad del equipo interno de Mullvad VPN, los comprobadores no tienen dudas de que el proyecto va por buen camino desde el punto de vista de la seguridad.

En 2020 una segunda auditoría [fue anunciada](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) y el [informe final de auditoríase](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) fue hecho disponible en la página de Cure53:

> Los resultados del proyecto de mayo-junio de 2020 dirigido al complejo de Mullvad son bastante positivos. [...] El ecosistema general de aplicaciones utilizado por Mullvad deja una impresión sólida y estructurada. La estructura general de la aplicación facilita el despliegue de parches y correcciones de forma estructurada. Más que nada, los hallazgos detectados por Cure53 muestran la importancia de auditar y reevaluar constantemente los vectores de filtración actuales, para garantizar siempre la privacidad de los usuarios finales. Dicho esto, Mullvad hace un gran trabajo protegiendo al usuario final de las filtraciones comunes de Información personalmente identificable y de los riesgos relacionados con la privacidad.

En 2021 [se anunció](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) una auditoría de infraestructuras y el [informe final de auditoría](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) se publicó en el sitio web de Cure53. Otro informe se encargó a [en junio de 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) y está disponible en [la web de Assured](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Clientes de Código Abierto

Mullvad proporciona el código fuente para sus clientes de escritorio y móviles en su [organización de GitHub](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Acepta Efectivo y Monero

Mullvad, además de aceptar tarjetas de crédito/débito y PayPal, acepta Bitcoin, Bitcoin Cash, **Monero** y **dinero en efectivo/moneda local** como formas de pago anónimas. \[WireGuard\](https://www.wireguard.com) es un protocolo más reciente que utiliza \[criptografía\](https://www.wireguard.com/protocol/) de última generación.

#### :material-check:{ .pg-green } Soporte de WireGuard

IVPN soporta el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más nuevo que utiliza criptografía de última generación [](https://www.wireguard.com/protocol/). Además, WireGuard aspira ser más simple y veloz.

Mullvad [recomienda a](https://mullvad.net/en/help/why-wireguard/) el uso de WireGuard con su servicio. Es el protocolo predeterminado o único en las aplicaciones Android, iOS, macOS y Linux de Mullvad, pero en Windows debe [habilitar manualmente](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad también ofrece un generador de configuraciones WireGuard para su uso con las [aplicaciones](https://www.wireguard.com/install/) oficiales de WireGuard.

#### :material-check:{ .pg-green } Soporte de IPv6

Mullvad soporta el futuro de la red [IPv6](https://en.wikipedia.org/wiki/IPv6). Su red permite [acceder a servicios alojados en IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/), a diferencia de otros proveedores que bloquean las conexiones IPv6.

#### :material-check:{ .pg-green } Reenvío Remoto de Puertos

Se permite el [reenvío remoto de puertos](https://en.wikipedia.org/wiki/Port_forwarding) para personas que realizan pagos de una sola vez, pero no para cuentas con un método de pago recurrente y basado en suscripción. La aplicación móvil en Android también está disponible en \[F-Droid\](https://f-droid.org/en/packages/net.ivpn.client), lo que garantiza que se compila con \[builds reproducibles\](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). Consulte [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) para obtener más información.

#### :material-check:{ .pg-green } Clientes Móviles

Mullvad ha publicado los clientes en [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) y [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos con una interfaz fácil de usar en lugar de tener que configurar manualmente la conexión WireGuard. El cliente de Android también está disponible en [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Funcionalidad Adicional

Mullvad es muy transparente sobre los nodos que [posee o alquila](https://mullvad.net/en/servers/). Utilizan [ShadowSocks](https://shadowsocks.org/) en su configuración ShadowSocks + OpenVPN, haciéndolos más resistentes contra cortafuegos con [Inspección de paquetes profundos](https://en.wikipedia.org/wiki/Deep_packet_inspection) intentando bloquear VPNs. Supuestamente, [China tiene que utilizar un método diferente para bloquear los servidores de ShadowSocks](https://github.com/net4people/bbs/issues/22). El sitio web de Mullvad también es accesible a través de Tor en [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

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

#### :material-check:{ .pg-green } 67 Países

Proton VPN tiene [servidores en 67 países](https://protonvpn.com/vpn-servers).(1) Elegir un proveedor VPN con un servidor más cercano reducirá la latencia del tráfico de red que envía. Esto se debe a que es una ruta más corta (menos saltos) hasta el destino.
{ .annotate }

1. Última comprobación: 2022-09-16

También pensamos que es mejor para la seguridad de las claves privadas del proveedor de VPN si utilizan [servidores dedicados](https://en.wikipedia.org/wiki/Dedicated_hosting_service), en lugar de soluciones compartidas más baratas (con otros clientes) como los [[servidores privados virtuales](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Auditado Independientemente

Los clientes VPN de Mullvad han sido auditados por Cure53 y Assured AB en un reporte de pentest \[publicado en cure53.de\](https://cure53.de/pentest-report_mullvad_v2.pdf). Los investigadores de seguridad concluyeron:

&gt; Cure53 y Assured AB están satisfechos con los resultados de la auditoría y el software deja una impresión positiva en general. Con la dedicación a la seguridad del equipo interno de Mullvad VPN, los testers no tienen dudas de que el proyecto va por buen camino desde el punto de vista de la seguridad. Puedes ver informes individuales para cada plataforma en [protonvpn.com](https://protonvpn.com/blog/open-source/). En abril de 2022, Proton VPN se sometió a [otra auditoría](https://protonvpn.com/blog/no-logs-audit/) y el informe fue [elaborado por Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). El 9 de noviembre de 2021, [Securitum](https://research.securitum.com)proporcionó una carta de certificación [](https://proton.me/blog/security-audit-all-proton-apps) para las aplicaciones de Proton VPN.

#### :material-check:{ .pg-green } Clientes de Código Abierto

Proton VPN proporciona el código fuente para sus clientes de escritorio y móviles en su organización [GitHub](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Acepta efectivo

Proton VPN, además de aceptar tarjetas de crédito/débito, PayPal y [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), también acepta **efectivo/moneda local** como forma de pago anónima.

#### :material-check:{ .pg-green } Soporte de WireGuard

Mullvad soporta el protocolo WireGuard®. [WireGuard](https://www.wireguard.com) es un protocolo más nuevo que utiliza criptografía de última generación [](https://www.wireguard.com/protocol/). Además, WireGuard aspira ser más simple y veloz.

Proton VPN [recomienda](https://protonvpn.com/blog/wireguard/) el uso de WireGuard con su servicio. En las aplicaciones de Proton VPN para Windows, macOS, iOS, Android, ChromeOS y Android TV, WireGuard es el protocolo predeterminado; sin embargo, [la compatibilidad](https://protonvpn.com/support/how-to-change-vpn-protocols/) para el protocolo no está presente en su aplicación para Linux.

#### :material-alert-outline:{ .pg-orange } Reenvío Remoto de Puertos

Actualmente, Proton VPN solo admite el [ reenvío remoto del puerto](https://protonvpn.com/support/port-forwarding/) en Windows, lo que puede afectar a algunas aplicaciones. Su red permite \[acceder a servicios alojados en IPv6\](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) a diferencia de otros proveedores que bloquean las conexiones IPv6.

#### :material-check:{ .pg-green } Clientes Móviles

Además de proporcionar archivos de configuración estándar de OpenVPN, Proton VPN tiene clientes móviles para [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US)y [GitHub](https://github.com/ProtonVPN/android-app/releases), lo que permite conexiones fáciles a sus servidores.

#### :material-information-outline:{ .pg-blue } Funcionalidad Adicional

Mullvad ha publicado su cliente en la \[App Store\](https://apps.apple.com/app/mullvad-vpn/id1488466513) y en \[Google Play\](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), ambos con una interfaz fácil de usar en lugar de requerir la configuración manual de la conexión de WireGuard. El cliente móvil en Android también está disponible en \[F-Droid\](https://f-droid.org/packages/net.mullvad.mullvadvpn), lo que garantiza que se compila con \[builds reproducibles\](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). Ofrecen bloqueo de anuncios y de dominios con malware conocido con su servicio de DNS. Además, Proton VPN también ofrece servidores "Tor" que te permiten conectarte fácilmente a sitios.onion, pero seguimos recomendando encarecidamente utilizar [el Navegador Tor oficial](https://www.torproject.org/) para este propósito.

#### :material-alert-outline:{ .pg-orange } La función Killswitch no funciona en los Macs basados en Intel

Los fallos del sistema [pueden ocurrir](https://protonvpn.com/support/macos-t2-chip-kill-switch/) en Macs basados en Intel cuando se utiliza el killswitch de VPN. Utilizan \[ShadowSocks\](https://shadowsocks.org/en/index.html) en su configuración de ShadowSocks + OpenVPN, lo que les hace más resistentes contra los cortafuegos con \[Inspección profunda de paquete\](https://es.wikipedia.org/wiki/Deep_Packet_Inspection) que intentan bloquear las VPN.

## Criterios

!!! peligro

    Es importante tener en cuenta que el uso de un proveedor de VPN no le hará anónimo, pero le dará mayor privacidad en ciertas situaciones. Una VPN no es una herramienta para actividades ilegales. No confíes en una política de "sin registro".

**Por favor, tenga en cuenta que no estamos afiliados a ninguno de los proveedores que recomendamos. Esto nos permite ofrecer recomendaciones completamente objetivas.** Además de [nuestros cirterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos para cualquier proveedor de VPN que desee ser recomendado, incluyendo un cifrado fuerte, auditorías de seguridad independientes, tecnología moderna y más. Te sugerimos que te familiarices con esta lista antes de elegir un proveedor VPN, y lleves a cabo tu propia investigación para asegurar que el proveedor VPN que elijas sea lo más fiable posible.

### Tecnología

Requerimos que todos nuestros proveedores de VPN recomendados proporcionen archivos de configuración OpenVPN para ser usados en cualquier cliente. **Si** una VPN proporciona su propio cliente personalizado, requerimos un killswitch para bloquear las fugas de datos de la red cuando se desconecta.

**Mínimo para Calificar:**

- Soporte para protocolos fuertes como WireGuard & OpenVPN.
- Killswitch integrado en los clientes.
- Soporte de multisaltos. El multihopping es importante para mantener la privacidad de los datos en caso de que un solo nodo se vea comprometido.
- Si se proporciona clientes VPN, deben ser [de código abierto](https://en.wikipedia.org/wiki/Open_source), como el software VPN que generalmente llevan incorporado. Creemos que la disponibilidad de [código fuente](https://en.wikipedia.org/wiki/Source_code) proporciona una mayor transparencia sobre lo que su dispositivo está haciendo realmente.

**Mejor Caso:**

- Soporte de WireGuard y OpenVPN.
- Killswitch con opciones altamente configurables (activar/desactivar en determinadas redes, en el arranque, etc.)
- Clientes VPN fáciles de usar
- Admite [IPv6](https://en.wikipedia.org/wiki/IPv6). Esperamos que los servidores permitan las conexiones entrantes a través de IPv6 y le permitan acceder a los servicios alojados en direcciones IPv6.
- La capacidad de [redirección de puertos](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) ayuda a crear conexiones cuando se utiliza software de intercambio de archivos P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)), Freenet, o se aloja un servidor (por ejemplo, Mumble).

### Privacidad

Preferimos que nuestros proveedores recomendados recojan la menor cantidad de datos posible. Es necesario no recoger información personal en el momento de la inscripción y aceptar formas de pago anónimas.

**Mínimo para Calificar:**

- [Criptomoneda anónima](cryptocurrency.md) **o** opción de pago en efectivo.
- No se requiere información personal para registrarse: Sólo nombre de usuario, contraseña y correo electrónico como máximo.

**Mejor Caso:**

- Acepte múltiples [opciones de pago anónimo](advanced/payments.md).
- No se acepten datos personales (nombre de usuario autogenerado, no se requiere correo electrónico, etc.).

### Seguridad

Una VPN no tiene sentido si ni siquiera puede proporcionar una seguridad adecuada. Requerimos que todos nuestros proveedores recomendados que se atengan a las normas de seguridad vigentes para sus conexiones OpenVPN. Lo ideal sería que utilizaran por defecto esquemas de encriptación más resistentes al futuro. También requerimos que un tercero independiente audite la seguridad del proveedor, idealmente de una manera muy completa y sobre una base repetida (anual).

**Mínimo para Calificar:**

- Esquemas de cifrado fuertes: OpenVPN con autenticación SHA-256; RSA-2048 o mejor handshake; AES-256-CBC o cifrado de datos AES-256-GCM.
- Perfect Forward Secrecy (PFS).
- Auditorías de seguridad publicadas por una empresa externa de prestigio.

**Mejor Caso:**

- Cifrado más fuerte: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Auditorías de seguridad exhaustivas publicadas por una empresa externa de prestigio.
- Programas de recompensa de errores y/o un proceso coordinado de divulgación de vulnerabilidades.

### Confianza

No confiarías tus finanzas a alguien con una identidad falsa, así que ¿por qué confiarle tus datos de Internet? Requerimos que nuestros proveedores recomendados sean públicos sobre su propiedad o liderazgo. También nos gustaría ver informes de transparencia frecuentes, especialmente en lo que se refiere a cómo se gestionan las solicitudes del gobierno.

**Mínimo para Calificar:**

- Liderazgo o titularidad de cara al público.

**Mejor Caso:**

- Liderazgo de cara al público.
- Informes de transparencia frecuentes.

### Marketing

Con los proveedores de VPN que recomendamos nos gusta ver un marketing responsable.

**Mínimo para Calificar:**

- Debe tener análisis propios (no Google Analytics, etc.). El sitio del proveedor también debe cumplir con [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) para las personas que quieran excluirse.

No debe tener ningún mercadeo que sea irresponsable:

- Garantizar la protección del anonimato al 100%. Cuando alguien afirma que algo es 100% significa que no hay certeza de fracaso. Sabemos que la gente puede desanonimizarse fácilmente de varias maneras, por ejemplo:
    - Reutilizando información personal (por ejemplo, cuentas de correo electrónico, seudónimos únicos, etc) a los que accedieron sin software de anonimato (Tor, VPN, etc.)
    - [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Afirmar que una VPN de un solo circuito es "más anónima" que Tor, el cual es un circuito de 3 o más saltos que cambia regularmente.
- Utilice un lenguaje responsable, por ejemplo, está bien decir que una VPN está "desconectada" o "no conectada", pero afirmar que alguien está "expuesto", "vulnerable" o "comprometido" es un uso innecesario de un lenguaje alarmante que puede ser incorrecto. Por ejemplo, esa persona podría simplemente estar en el servicio de otro proveedor de VPN o usar Tor.

**Mejor Caso:**

El marketing responsable que es a la vez educativo y útil para el consumidor podría incluir:

- Una comparación precisa para cuando se debe utilizar Tor u otras [redes autónomas](self-contained-networks.md).
- Disponibilidad del sitio web del proveedor de VPN a través de un .onion [Hidden Service](https://es.wikipedia.org/wiki/.onion)

### Funcionalidades adicionales

Aunque no son estrictamente requisitos, hay algunos factores en los que nos fijamos a la hora de determinar qué proveedores recomendar. Entre ellas, la funcionalidad de bloqueo de anuncios/rastreo, los alertas de canarios(warrant canaries), las conexiones multihop, la excelente atención al cliente, el número de conexiones simultáneas permitidas, etc.

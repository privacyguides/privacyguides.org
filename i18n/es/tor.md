---
title: "Red Tor"
icon: simple/torproject
description: Protege su navegación por Internet de miradas intrusas utilizando la red Tor, una red segura que elude la censura.
---

![Logotipo de Tor](assets/img/self-contained-networks/tor.svg){ align=right }

La red **Tor** es un grupo de servidores operados por voluntarios que te permite conectarte gratuitamente y mejorar tu privacidad y seguridad en Internet. Los individuos y las organizaciones también pueden compartir información a través de la red Tor con los "servicios ocultos.onion" sin comprometer su privacidad. Debido a que el tráfico de Tor es difícil de bloquear y rastrear, Tor es una herramienta eficaz para eludir la censura.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Página Principal}
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Servicio Onion" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentación}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Código Fuente" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuir }

Tor funciona enrutando tu tráfico de Internet a través de esos servidores operados por voluntarios, en lugar de hacer una conexión directa con el sitio que estás tratando de visitar. Esto ofusca de dónde viene el tráfico, y ningún servidor en la ruta de conexión es capaz de ver la ruta completa de dónde viene y a dónde va el tráfico, lo que significa que incluso los servidores a los que te estás conectando no pueden romper tu anonimato.

[Descripción detallada de Tor :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## Conectándote a Tor

Hay varias maneras de conectarte a la red Tor desde tu dispositivo, la más utilizada es **Tor Browser**, un fork de Firefox diseñado para la navegación anónima para computadoras y Android. Además de las aplicaciones enumeradas a continuación, también hay sistemas operativos diseñados específicamente para conectarse a la red Tor, como [Whonix](linux-desktop.md/#whonix) en [Qubes OS](qubes.md), que proporcionan incluso mayor seguridad y protección que el Navegador Tor estándar.

### Tor Browser

!!! recomendación

    ![Logo del Navegador Tor](assets/img/browsers/tor.svg){ align=right }
    
    **Tor Browser** es la elección si necesitas anonimato, ya que te proporciona acceso a la red de Tor y puentes, e incluye ajustes por defecto y extensiones que estan configuradas automáticamente a los niveles de seguridad por defecto: *Estándar*, *Más seguro* y *Más seguro de todos*.
    
    [:octicons-home-16: Página Principal](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Servicio Onion" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentación }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)
        - [:simple-openbsd: OpenBSD](https://openports.se/net/tor)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/net/tor)

!!! peligro

    **Nunca** deberías instalar ninguna extensión adicional en el Navegador Tor, ni siquiera las que sugerimos para Firefox. Las extensiones del navegador y las configuraciones no estándar te hacen destacar de los demás en la red Tor, haciendo así que tu navegador sea más fácil de [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

El navegador Tor está diseñado para evitar la toma de huellas dactilares o tu identificación basado en la configuración de tu navegador. Por lo tanto, es imperativo que **no** modifiques el navegador más allá de los [niveles de seguridad](https://tb-manual.torproject.org/security-settings/) predeterminados.

### Perfiles de usuario

!!! recomendación

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** es una VPN de Tor gratuita para smartphones que enruta el tráfico desde cualquier aplicación en tu dispositivo a través de la red Tor.
    
    [:octicons-home-16: Página Principal](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentación}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

Para resistir los ataques de análisis de tráfico, considere la posibilidad de activar *Aislar dirección de destino* en :material-menu: → **Configuración** → **Conectividad**. Esto usará un Circuito Tor completamente diferente (diferentes nodos intermedios de retransmisión y salida) para cada dominio al que te conectes.

!!! consejo "Consejos para Android"

    Orbot puede hacer de proxy de aplicaciones individuales si soportan SOCKS o proxy HTTP. También puede hacer un proxy de todas sus conexiones de red usando [VpnService](https://developer.android.com/reference/android/net/VpnService) y se puede usar con el killswitch VPN en :gear: * * Configuración → ** *Red e Internet* → **VPN** → :gear: → **Bloquear conexiones sin VPN**.
    
    Orbot suele estar desactualizado en el [repositorio F-Droid](https://guardianproject.info/fdroid) de Guardian Project y en [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), así que considera descargarlo directamente desde el [repositorio GitHub](https://github.com/guardianproject/orbot/releases).
    
    Todas las versiones están firmadas con la misma firma, por lo que deberían ser compatibles entre sí.

## Relés y puentes

### Snowflake

!!! recomendación

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** te permite donar ancho de banda al Proyecto Tor operando un "proxy Snowflake" dentro de tu navegador.
    
    Las personas censuradas pueden utilizar proxies Snowflake para conectarse a la red Tor. Snowflake es una gran forma de contribuir a la red incluso si no tienes los conocimientos técnicos para dirigir un repetidor o puente Tor.
    
    [:octicons-home-16: Página Principal](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentación}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? consejo "Snowflake incrustado"

    Puedes activar Snowflake en tu navegador haciendo clic en el interruptor de abajo y ==dejando esta página abierta==. También puedes instalar Snowflake como una extensión del navegador para que se ejecute siempre mientras el navegador está abierto, aunque añadir extensiones de terceros puede aumentar tu superficie de ataque.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Si la incrustación no te aparece, asegúrate de que no estés bloqueando el marco de terceros de `torproject.org`. También puede visitar [esta página](https://snowflake.torproject.org/embed.html).</small>

Snowflake no aumenta tu privacidad de ninguna manera, ni se utiliza para conectarte a la red Tor dentro de tu navegador personal. Sin embargo, si tu conexión a Internet no está censurada, deberías ejecutarlo para ayudar a las personas en redes censuradas a conseguir mejor privacidad. No hay necesidad de preocuparte por los sitios web a los que la gente accede a través de tu proxy-su dirección IP de navegación visible coincidirá con su nodo de salida Tor, no con el tuyo.

Ejecutar un proxy Snowflake es de bajo riesgo, incluso más que ejecutar un relé Tor o un puente ya que no son esfuerzos particularmente arriesgados. Sin embargo, no deja de ser un proxy de tráfico a través de tu red, lo que puede tener consecuencias en algunos aspectos, especialmente si tu red tiene un ancho de banda limitado. Asegúrate de que entiendes [cómo funciona Snowflake](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) antes de decidir si ejecutas un proxy.

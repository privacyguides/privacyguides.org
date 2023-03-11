---
title: "Navegadores Web"
icon: simple/torproject
description: Protect your internet browsing from prying eyes by using the Tor network, a secure network which circumvents censorship.
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

La red **Tor** es un grupo de servidores operados por voluntarios que te permite conectarte gratuitamente y mejorar tu privacidad y seguridad en Internet. Los individuos y las organizaciones también pueden compartir información a través de la red Tor con los "servicios ocultos.onion" sin comprometer su privacidad. Debido a que el tráfico de Tor es difícil de bloquear y rastrear, Tor es una herramienta eficaz para eludir la censura.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Inicio}
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Servicio Onion" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentación}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Código Fuente" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuir }

Tor funciona enrutando tu tráfico de Internet a través de esos servidores operados por voluntarios, en lugar de hacer una conexión directa con el sitio que estás tratando de visitar. This obfuscates where the traffic is coming from, and no server in the connection path is able to see the full path of where the traffic is coming from and going to, meaning even the servers you are using to connect cannot break your anonymity.

[Detailed Tor Overview :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## Conectarse a Tor

Hay varias maneras de conectarse a la red Tor desde tu dispositivo, el más utilizado es **Tor Browser**, un fork de Firefox diseñado para la navegación anónima para ordenadores de sobremesa y Android. Además de las aplicaciones enumeradas a continuación, también hay sistemas operativos diseñados específicamente para conectarse a la red Tor, como [Whonix](linux-desktop.md/#whonix) en [Qubes OS](qubes.md), que proporcionan incluso mayor seguridad y protección que el Navegador Tor estándar.

### Tor Browser

!!! recomendación

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }
    
    **Tor Browser** is the choice if you need anonymity, as it provides you with access to the Tor network and bridges, and it includes default settings and extensions that are automatically configured by the default security levels: *Standard*, *Safer* and *Safest*.
    
    [:octicons-home-16: Inicio](https://www.torproject.org){ .md-button .md-button--primary }
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

El navegador Tor está diseñado para evitar la toma de huellas dactilares o tu identificación debido a la configuración de tu navegador. Por lo tanto, es imperativo que **no** modifiques el navegador más allá de los [niveles de seguridad](https://tb-manual.torproject.org/security-settings/) predeterminados.

### Perfiles de usuario

!!! recomendación

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** es una VPN de Tor gratuita para smartphones que enruta el tráfico desde cualquier aplicación en tu dispositivo a través de la red Tor.
    
    [:octicons-home-16: Inicio](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentación}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

For resistance against traffic analysis attacks, consider enabling *Isolate Destination Address* in :material-menu: → **Settings** → **Connectivity**. This will use a completely different Tor Circuit (different middle relay and exit nodes) for every domain you connect to.

!!! consejo "Consejos para Android"

    Orbot puede hacer de proxy de aplicaciones individuales si soportan SOCKS o proxy HTTP. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.
    
    Orbot suele estar desactualizado en el [repositorio F-Droid](https://guardianproject.info/fdroid) de Guardian Project y en [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), así que considera descargarlo directamente desde el [repositorio GitHub](https://github.com/guardianproject/orbot/releases).
    
    Todas las versiones están firmadas con la misma firma, por lo que deberían ser compatibles entre sí.

## Relays and Bridges

### Snowflake

!!! recomendación

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** te permite donar ancho de banda al Proyecto Tor operando un "proxy Snowflake" dentro de tu navegador.
    
    People who are censored can use Snowflake proxies to connect to the Tor network. Snowflake is a great way to contribute to the network even if you don't have the technical know-how to run a Tor relay or bridge.
    
    [:octicons-home-16: Inicio](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentación}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Embedded Snowflake"

    You can enable Snowflake in your browser by clicking the switch below and ==leaving this page open==. You can also install Snowflake as a browser extension to have it always run while your browser is open, however adding third-party extensions can increase your attack surface.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>If the embed does not appear for you, ensure you are not blocking the third-party frame from `torproject.org`. Alternatively, visit [this page](https://snowflake.torproject.org/embed.html).</small>

Snowflake does not increase your privacy in any way, nor is it used to connect to the Tor network within your personal browser. However, if your internet connection is uncensored, you should consider running it to help people in censored networks achieve better privacy themselves. There is no need to worry about which websites people are accessing through your proxy—their visible browsing IP address will match their Tor exit node, not yours.

Running a Snowflake proxy is low-risk, even moreso than running a Tor relay or bridge which are already not particularly risky endeavours. However, it does still proxy traffic through your network which can be impactful in some ways, especially if your network is bandwidth-limited. Make sure you understand [how Snowflake works](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) before deciding whether to run a proxy.

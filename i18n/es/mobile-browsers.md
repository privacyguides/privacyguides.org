---
title: "Navegadores Móviles"
icon: material/cellphone-information
description: Estos navegadores son los que recomendamos actualmente para la navegación estándar/no anónima por Internet en su teléfono.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Private Mobile Browser Recommendations
    url: "./"
    relatedLink: "../desktop-browsers/"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Brave
    image: /assets/img/browsers/brave.svg
    url: https://brave.com
    applicationCategory: Web Browser
    operatingSystem:
      - Android
    subjectOf:
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Safari
    image: /assets/img/browsers/safari.svg
    url: https://www.apple.com/safari/
    applicationCategory: Web Browser
    operatingSystem:
      - iOS
    subjectOf:
      "@type": WebPage
      url: "./"
---

Estos son nuestras recomendaciones actuales sobre navegadores web para móviles y configuraciones para la navegación estándar/no anónima por Internet. Si necesita navegar por Internet de forma anónima, debería utilizar [Tor](tor.md). En general, recomendamos mantener las extensiones al mínimo; tienen acceso privilegiado dentro de su navegador, requieren que confíe en el desarrollador, pueden hacerle [destacar](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), y [debilitar](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) el aislamiento del sitio.

## Android

En Android, Firefox es incluso menos seguro que las alternativas basadas en Chromium: El motor de Mozilla, [GeckoView](https://mozilla.github.io/geckoview/), aún no soporta el aislamiento de sitios [](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) ni habilitar [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

### Brave

!!! recommendation

    ![Brave logo](assets/img/browsers/brave.svg){ align=right }
    
    **Brave Browser** incluye un bloqueador de contenidos integrado y [funciones de privacidad](https://brave.com/privacy-features/), muchas de las cuales están activadas por defecto.
    
    Brave se basa en el proyecto de navegador web Chromium, por lo que debería resultar familiar y tener mínimos problemas de compatibilidad con sitios web.
    
    [:octicons-home-16: Página Principal](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Código Fuente" }
    
    ??? notas de descarga
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)

#### Configuración Recomendada

Tor Browser es la única manera de navegar por Internet de forma verdaderamente anónima. Cuando use Brave, Le recomendamos cambiar los siguiente ajustes para proteger su privacidad de ciertas partes, pero todos los navegadores que no sean [Tor Browser](tor.md#tor-browser) serán rastreables por *alguien* en un sentido u otro.

Estas opciones se pueden encontrar en :material-menu: → **Configuración** → **Protecciones y privacidad de Brave**

##### Escudos

Brave incluye algunas medidas anti-fingerprinting en su función de [Escudos](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Sugerimos configurar estas opciones [globalmente](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) en todas las páginas que visite.

##### Valores generales predeterminados de los escudos de Brave

Las opciones de los escudos pueden reducirse según las necesidades de cada sitio, pero por defecto recomendamos configurar lo siguiente:

<div class="annotate" markdown>

- [x] Seleccione **Agresivo** en Bloquear rastreadores y anuncios

??? advertencia "Usar listas de filtros predeterminadas"
        Brave le permite seleccionar filtros de contenido adicionales dentro de la página interna `brave://adblock`. Desaconsejamos el uso de esta función; en su lugar, mantenga las listas de filtros por defecto. El uso de listas adicionales le hará destacar entre los demás usuarios de Brave y también puede aumentar la superficie de ataque si hay un exploit en Brave y se añade una regla maliciosa a una de las listas que utiliza.

- [x] Seleccione **Mejorar conexiones a HTTPS**
- [x] Seleccione **Usar siempre conexiones seguras**
- [x] (Opcional) Seleccione **Bloquear Scripts** (1)
- [x] Seleccione **Estricto, puede dañar los sitios** en **Bloquear fingerprinting**

</div>

1. Esta opción proporciona una funcionalidad similar a los [modos de bloqueo ](https://github.com/gorhill/uBlock/wiki/Blocking-mode)avanzados de uBlock Origin o la extensión [NoScript](https://noscript.net/).

##### Borrar datos de navegación

- [x] Seleccione **Borrar datos al salir**

##### Bloqueo de redes sociales

- [ ] Desmarque todos los componentes de redes sociales

##### Otros ajustes de privacidad

<div class="annotate" markdown>

- [x] Seleccione **Desactivar UDP sin proxy** en [Política de gestión de IP de WebRTC](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Desmarque **Permite a los sitios comprobar si tienes métodos de pago guardados**
- [ ] Desmarque **Puerta de enlace IPFS** (1)
- [x] Seleccione **Cerrar pestañas al salir**
- [ ] Desmarque **Permitir estadísticas de productos que preservan la privacidad (P3A)**
- [ ] Desmarque **Enviar informes de diagnóstico automáticamente**
- [ ] Desmarque **Enviar automáticamente el ping diario de uso a Brave**

</div>

1. El Sistema de Archivos InterPlanetario (IPFS) es una red descentralizada, de igual a igual, para almacenar y compartir datos en un sistema de archivos distribuido. A menos que utilice la función, desactívela.

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permite que sus datos de navegación (historial, marcadores, etc.) sean accesibles en todos sus dispositivos sin necesidad de una cuenta y los protege con E2EE.

## iOS

En iOS, cualquier aplicación que puede navegar en internet está [limitada](https://developer.apple.com/app-store/review/guidelines) a utilizar un sistema que provee Apple, [llamado WebKit](https://developer.apple.com/documentation/webkit), por lo que hay pocos motivos para utilizar un navegador de terceros.

### Safari

!!! recommendation

    ![Safari logo](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** es el navegador predeterminado en iOS. Incluye [funciones de privacidad](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) como Protección Inteligente de Seguimiento, Informe de Privacidad, pestañas aisladas de Navegación Privada, Retransmisión Privada de iCloud y actualizaciones automáticas de HTTPS.
    
    [:octicons-home-16: Página Principal](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Documentación}

#### Configuración Recomendada

Estas opciones se encuentran en :gear: **Ajustes** → **Safari** → **Privacidad y seguridad**.

##### Prevención del rastreo entre sitios web

- [x] Activa **Evitar el seguimiento cruzado de sitios**

Esto habilita la [Protección de Seguimiento Inteligente (ITP)](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) de WebKit. La función ayuda a proteger contra el rastreo no deseado utilizando el aprendizaje automático en el dispositivo para detener a los rastreadores. La ITP protege contra muchas amenazas comunes, pero no bloquea todas las vías de rastreo porque está diseñada para no interferir con la usabilidad del sitio web.

##### Informe de privacidad

El Informe de privacidad proporciona una instantánea de los rastreadores de sitios cruzados a los que actualmente se les impide elaborar perfiles en el sitio web que está visitando. También puede mostrar un informe semanal para mostrar qué rastreadores se han bloqueado a lo largo del tiempo.

Se puede acceder al Informe de privacidad a través del menú Configuración de la página.

##### Medición de anuncios para preservar la privacidad

- [ ] Desactiva **Medición de anuncios para preservar la privacidad**

La medición de los clics en los anuncios ha utilizado tradicionalmente una tecnología de seguimiento que vulnera la intimidad del usuario. [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) es una función de WebKit y un estándar web propuesto para permitir a los anunciantes medir la eficacia de las campañas web sin comprometer la privacidad del usuario.

La función tiene pocos problemas de privacidad por sí misma, así que aunque puede optar por dejarla activada, consideramos que el hecho de que se desactive automáticamente en Navegación Privada es un indicador para desactivar la función.

##### Navegación privada siempre activa

Abre Safari y pulsa el botón Pestañas, situado en la parte inferior derecha. A continuación, despliegua la lista Grupos de pestañas.

- [x] Selecciona **Privado**

El modo de Navegación Privada de Safari ofrece protecciones de privacidad adicionales. La Navegación Privada utiliza una nueva sesión [efímera](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) para cada pestaña, lo que significa que las pestañas están aisladas unas de otras. La Navegación Privada también ofrece otras pequeñas ventajas de privacidad, como no enviar la dirección de una página web a Apple cuando se utiliza la función de traducción de Safari.

Ten en cuenta que la Navegación Privada no guarda cookies ni datos de sitios web, por lo que no podrás permanecer conectado a los sitios. Esto puede ser un inconveniente.

##### iCloud Sync

La sincronización del historial de Safari, los grupos de pestañas, las pestañas de iCloud y las contraseñas guardadas son E2EE. Sin embargo, por defecto, los marcadores [no](https://support.apple.com/en-us/HT202303) lo son. Apple puede descifrarlos y acceder a ellos de acuerdo con su [política de privacidad](https://www.apple.com/legal/privacy/en-ww/).

Puedes activar E2EE para tus favoritos y descargas de Safari activando [Advanced Data Protection](https://support.apple.com/en-us/HT212520). Vaya a su **Nombre de ID de Apple → iCloud → Protección de datos avanzada**.

- [x] Activa **Protección de datos avanzada**

Si utilizas iCloud con la Protección de Datos Avanzada desactivada, también te recomendamos que compruebes que la ubicación de descarga predeterminada de Safari está configurada como local en tu dispositivo. Esta opción se encuentra en :gear: **Ajustes** → **Safari** → **General** → **Descargas**.

### AdGuard

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard para iOS** es una extensión de bloqueo de contenidos gratuita y de código abierto para Safari que utiliza la [Content Blocker API] nativa (https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).
    
    AdGuard para iOS tiene algunas funciones premium; sin embargo, el bloqueo de contenidos estándar de Safari es gratuito.
    
    [:octicons-home-16: Página Principal](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentació}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Las listas de filtros adicionales ralentizan las cosas y pueden aumentar su superficie de ataque, así que aplique sólo lo que necesite.

## Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Requisitos Mínimos

- Debe admitir actualizaciones automáticas.
- Debe recibir actualizaciones del motor en 0-1 días desde la publicación de la versión anterior.
- Cualquier cambio necesario para que el navegador respete más la privacidad no debería afectar negativamente a la experiencia del usuario.
- Los navegadores Android deben utilizar el motor Chromium.
    - Por desgracia, Mozilla GeckoView sigue siendo menos seguro que Chromium en Android.
    - Los navegadores de iOS están limitados a WebKit.

### Extensión de Criterios

- No debe replicar la funcionalidad integrada del navegador o del sistema operativo.
- Debe afectar directamente a la privacidad del usuario, es decir, no debe limitarse a proporcionar información.

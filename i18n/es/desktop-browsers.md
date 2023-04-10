---
title: "Navegadores de Escritorio"
icon: material/laptop
description: Firefox y Brave son nuestras recomendaciones para la navegación estándar/no anónima.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Recomendaciones de Navegadores de Escritorio Privados
    url: "./"
    relatedLink: "../mobile-browsers/"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Firefox
    image: /assets/img/browsers/firefox.svg
    url: https://firefox.com
    applicationCategory: Web Browser
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Brave
    image: /assets/img/browsers/brave.svg
    url: https://brave.com
    applicationCategory: Web Browser
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@type": WebPage
      url: "./"
---

Estas son nuestras recomendaciones de navegadores web para computadoras y las configuraciones para la navegación estándar/no anónima por Internet. Si necesita navegar por Internet de forma anónima, debería utilizar [Tor](tor.md). En general, recomendamos mantener las extensiones al mínimo; ya que tienen acceso privilegiado dentro de su navegador y requieren que confíe en el desarrollador, pueden hacerle [destacar](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), y [debilitan](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) el aislamiento del sitio.

## Firefox

!!! recommendation

    ![Firefox logo](assets/img/browsers/firefox.svg){ align=right }
    
    **Firefox** brinda una configuración fuerte de privacidad como la [Protección de Rastreo Mejorada](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), que puede ayudar con el bloqueo de varios [tipos de rastreadores](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).
    
    [:octicons-home-16: Página Principal](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/firefox/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title=Documentación}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://donate.mozilla.org/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! advertencia
    Firefox incluye un [token de descarga](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) único en las descargas del sitio web de Mozilla y utiliza la telemetría de Firefox para enviar el token. El token **no** se incluye en las versiones de [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

### Configuración Recomendada

El Navegador Tor es la única manera de navegar por Internet de forma verdaderamente anónima. Cuando utilice Firefox, le recomendamos que cambie los siguientes ajustes para proteger su privacidad de ciertas partes, pero todos los navegadores que no sean [Tor Browser](tor.md#tor-browser) serán rastreables por *alguien* de una forma u otra.

Estas opciones se encuentran en :material-menu: → **Ajustes** → **Privacidad y seguridad**.

##### Protección antirrastreo mejorada

- [x] Seleccione **Estricto** Protección de seguimiento mejorada

Esto le protege bloqueando los rastreadores de redes sociales, las secuencias de comandos de huellas digitales (ten en cuenta que esto no le protege de *todas* las huellas digitales), los criptomineros, las cookies de rastreo de sitios cruzados y algunos otros contenidos de rastreo. ETP protege contra muchas amenazas comunes, pero no bloquea todas las vías de rastreo porque está diseñado para tener un impacto mínimo o nulo en la usabilidad del sitio.

##### Desinfectar al cerrar

Si deseas seguir conectado a determinados sitios, puede permitir excepciones en **Cookies y datos del sitio** → **Administrar excepciones....**

- [x] Marque **Eliminar cookies y datos del sitio cuando se cierra Firefox**

Esto le protege de las cookies persistentes, pero no le protege de las cookies adquiridas durante una sesión de navegación. Cuando esta opción está activada, es posible limpiar fácilmente las cookies del navegador simplemente reiniciando Firefox. Puedes establece excepciones por sitio, si desea permanecer conectado a un sitio concreto que visite con frecuencia.

##### Buscar sugerencias

- [ ] Desmarque **Proporcionar sugerencias de búsqueda**

Es posible que las funciones de sugerencia de búsqueda no estén disponibles en su región.

Las sugerencias de búsqueda envían todo lo que escribe en la barra de direcciones al motor de búsqueda predeterminado, independientemente de si realiza una búsqueda real. Desactivar las sugerencias de búsqueda le permite controlar con mayor precisión los datos que envía al proveedor de su motor de búsqueda.

##### Telemetría

- [ ] Desmarque **Permitir que Firefox envíe infromación técnica y de interacción a Mozilla**
- [ ] Desmarque **Permitir Firefox para instalar y ejecutar estudios**
- [ ] Desmarque **Permitir que Firefox envié informes de fallos acumulados en tu nombre**

> Firefox envía datos sobre su versión e idioma de Firefox; sistema operativo del dispositivo y configuración del hardware; memoria, información básica sobre fallos y errores; resultado de procesos automatizados como actualizaciones, navegación segura y activación. Cuando Firefox envía datos, su dirección IP se recoge temporalmente como parte de los registros de nuestro servidor.

Además, el servicio Firefox Accounts recoge [algunos datos técnicos](https://www.mozilla.org/en-US/privacy/firefox/#firefox-accounts). Si usa una cuenta de Firefox, puede excluir:

1. Abra la [configuración de su perfil en accounts.firefox.com](https://accounts.firefox.com/settings#data-collection)
2. Desmarque **Recopilación y uso de datos** > **Ayuda a mejorar Cuentas de Firefox**

##### Modo solo HTTPS

- [x] Seleccione **Habilitar el modo solo HTTPS en todas las ventanas**

Esto evita que se conecte involuntariamente a un sitio web en texto plano HTTP. Los sitios sin HTTPS son poco comunes hoy en día, por lo que esto debería tener poco o ningún impacto en su navegación diaria.

### Firefox Sync

[Firefox Sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) permite que sus datos de navegación (historial, marcadores, etc.) sean accesibles en todos sus dispositivos y los protege con E2EE.

### Arkenfox (avanzado)

El [proyecto Arkenfox](https://github.com/arkenfox/user.js) proporciona un conjunto de opciones cuidadosamente consideradas para Firefox. Si [decide](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) utilizar Arkenfox, unas [pocas opciones](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) son subjetivamente estrictas y/o pueden hacer que algunos sitios web no funcionen correctamente - [lo que puede cambiar fácilmente](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) para adaptarse a sus necesidades. Nosotros **recomendamos encarecidamente** que lea su [wiki ](https://github.com/arkenfox/user.js/wiki)(lamentablemente solo en inglés). Arkenfox también permite el soporte de [contenedores](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users).

## Brave

!!! recommendation

    ![Logo de Brave](assets/img/browsers/brave.svg){ align=right }
    
    **Brave Browser** incluye un bloqueador de contenidos integrado y [funciones de privacidad](https://brave.com/privacy-features/), muchas de las cuales están activadas por defecto.
    
    Brave se basa en el proyecto de navegador web Chromium, por lo que debería resultar familiar y tener mínimos problemas de compatibilidad con sitios web.
    
    [:octicons-home-16: Página Principal](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)

    1. Desaconsejamos el uso de la versión Flatpak de Brave, ya que sustituye el sandbox de Chromium por el de Flatpak, que es menos efectivo. Además, el paquete no es mantenido por Brave Software, Inc.

### Configuración Recomendada

El Navegador Tor es la única manera de navegar por Internet de forma verdaderamente anónima. Cuando use Brave, Le recomendamos cambiar los siguiente ajustes para proteger su privacidad de ciertas partes, pero todos los navegadores que no sean [Tor Browser](tor.md#tor-browser) serán rastreables por *alguien* en un sentido u otro.

Estas opciones se encuentran en :material-menu: → **Configuración**.

##### Protecciones

Brave incluye algunas medidas anti-fingerprinting en su función de [Escudos](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Sugerimos configurar estas opciones [globalmente](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) en todas las páginas que visite.

Las opciones de los escudos pueden reducirse según las necesidades de cada sitio, pero por defecto recomendamos configurar lo siguiente:

<div class="annotate" markdown>

- [x] Seleccione **Impedir que los sitios obtengan mis huellas digitales en función de mis preferencias de idioma**
- [x] Selecciona * * Agresivo * * en Bloqueo de rastreadores y anuncios

    ??? advertencia "Use listas de filtros predeterminadas"
        Brave le permite seleccionar filtros de contenido adicionales dentro de la página interna `brave://adblock`. Le aconsejamos que no utilice esta función; en su lugar, mantenga las listas de filtros predeterminadas. El uso de listas adicionales le hará destacar entre los demás usuarios de Brave y también puede aumentar la superficie de ataque si hay un exploit en Brave y se añade una regla maliciosa a una de las listas que utiliza.

- [x] (Opcional) Seleccione **Bloquear Scripts** (1)
- [x] Seleccione **Estricto, puede dañar los sitios** en Bloquear huellas digitales

</div>

1. Esta opción proporciona una funcionalidad similar a los [modos de bloqueo ](https://github.com/gorhill/uBlock/wiki/Blocking-mode)avanzados de uBlock Origin o la extensión [NoScript](https://noscript.net/).

##### Bloqueo de RRSS

- [ ] Desmarque todos los componentes de redes sociales

##### Privacidad y seguridad

<div class="annotate" markdown>

- [x] Selecciona **Desactivar UDP no proxy** en [Política de gestión de IP de WebRTC](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Desmarca **Utilizar los servicios de Google para la mensajería push**
- [ ] Desmarca **Permitir análisis de productos que preservan la privacidad (P3A)**
- ¡[ ] Desmarcar **Enviar automáticamente ping de uso diario a Brave**
- [ ] Desmarca **Enviar automáticamente informes de diagnóstico**
- [x] Selecciona **Usar siempre conexiones seguras** en el menú **Seguridad**
- [ ] Desmarca **Ventana privada con Tor** (1)

    !!! consejo "Desinfectar al cerrar"
        - [x] Selecciona **Borrar cookies y datos de sitios al cerrar todas las ventanas** en el menú *Cookies y otros datos de sitios*

        Si deseas permanecer conectado a un sitio concreto que visitas con frecuencia, puedes establecer excepciones por sitio en la sección *Comportamientos personalizados*.

</div>

1. Brave **no** es tan resistente a las huellas dactilares como Tor Browser y mucha menos gente usa Brave con Tor, así que usted destacará. Cuando se requiera un [fuerte anonimato](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) utilice [Tor Browser ](tor.md#tor-browser).

##### Extensiones

Desactive las extensiones integradas que no utilice en **Extensiones**

- [ ] Desmarca **Hangouts**
- [ ] Desmarca **WebTorrent**

##### Web3

<div class="annotate" markdown>

- [x] Selecciona Deshabilitado en Método para resolver los recursos IPFS (1)

</div>

1. El Sistema de Archivos InterPlanetario (IPFS) es una red descentralizada, de igual a igual, para almacenar y compartir datos en un sistema de archivos distribuido. A menos que utilice la función, desactívela.

##### Ajustes Adicionales

En el menú *Sistema*

<div class="annotate" markdown>

- [ ] Desmarca **Seguir ejecutando aplicaciones en segundo plano al cerrar Brave** para desactivar las aplicaciones en segundo plano (1)

</div>

1. Esta opción no está presente en todas las plataformas.

### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permite que sus datos de navegación (historial, marcadores, etc.) sean accesibles en todos sus dispositivos sin necesidad de una cuenta y los protege con E2EE.

## Recursos Adicionales

Por lo general, no recomendamos instalar extensiones, ya que aumentan la superficie de ataque. Sin embargo, uBlock Origin puede resultarte útil si valoras la funcionalidad de bloqueo de contenidos.

### uBlock Origin

!!! recomendación

    ![logo de uBlock Origin](assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin** es un popular bloqueador de contenidos que puede ayudarte a bloquear anuncios, rastreadores y scripts de huellas digitales.
    
    [:octicons-repo-16: Repositorio](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

Te sugerimos que sigas la [documentación del desarrollador](https://github.com/gorhill/uBlock/wiki/Blocking-mode) y elijas uno de los "modos". Las listas de filtros adicionales pueden afectar al rendimiento y [pueden aumentar la superficie de ataque](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

##### Otras listas

Estas son algunas otras [listas de filtros](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) que puedes considerar añadir:

- [x] Selecciona **Privacidad** > **AdGuard URL Tracking Protection**
- Añade [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

## Criterios

**Por favor, ten en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que te familiarices con esta lista, antes de decidir utilizar un proyecto y realizar tu propia investigación para asegurarte de que es la elección ideal para ti.

!!! example "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Requisitos Mínimos

- Debe ser software de código abierto.
- Admite actualizaciones automáticas.
- Recibe actualizaciones del motor en 0-1 días desde la publicación de la versión anterior.
- Disponible para iOS, macOS y Windows.
- Cualquier cambio necesario para que el navegador respete más la privacidad no debería afectar negativamente a la experiencia del usuario.
- Bloquea las cookies de terceros por defecto.
- Admite la [partición de estados](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) para mitigar el rastreo entre sitios.[^1]

### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Incluye funciones integradas de bloqueo de contenidos.
- Admite la compartimentación de cookies (como [Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers)).
- Soporta Progressive Web Apps.  
  Las PWA permiten instalar determinados sitios web como si fueran apps nativas en su ordenador. Esto puede tener ventajas sobre la instalación de aplicaciones basadas en Electron, porque usted se beneficia de las actualizaciones de seguridad periódicas de su navegador.
- No incluye funciones adicionales (bloatware) que no afectan a la privacidad del usuario.
- No recopila telemetría por defecto.
- Ofrece la implementación de un servidor de sincronización de código abierto.
- Por defecto usa un [motor de búsqueda privado](search-engines.md).

### Extensión de Criterios

- No debe replicar la funcionalidad integrada del navegador o del sistema operativo.
- Debe afectar directamente a la privacidad del usuario, es decir, no debe limitarse a proporcionar información.

[^1]: La implementación de Brave se detalla en [Brave Privacy Updates: Partitioning network-state for privacy](https://brave.com/privacy-updates/14-partitioning-network-state/).

---
title: "Administradores de Contraseñas"
icon: material/form-textbox-password
description: Los administradores de contraseñas le permiten almacenar y administrar de forma segura contraseñas y otras credenciales.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Password Manager Recommendations
    url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Bitwarden
    image: /assets/img/password-management/bitwarden.svg
    url: https://bitwarden.com
    sameAs: https://en.wikipedia.org/wiki/Bitwarden
    applicationCategory: Administrador de contraseñas
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: 1Password
    image: /assets/img/password-management/1password.svg
    url: https://1password.com
    sameAs: https://en.wikipedia.org/wiki/1Password
    applicationCategory: Administrador de contraseñas
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Psono
    image: /assets/img/password-management/psono.svg
    url: https://psono.com
    applicationCategory: Administrador de contraseñas
    operatingSystem:
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassXC
    image: /assets/img/password-management/keepassxc.svg
    url: https://keepassxc.org/
    sameAs: https://en.wikipedia.org/wiki/KeePassXC
    applicationCategory: Administrador de contraseñas
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassDX
    image: /assets/img/password-management/keepassdx.svg
    url: https://www.keepassdx.com/
    applicationCategory: Administrador de contraseñas
    operatingSystem: Android
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Strongbox
    image: /assets/img/password-management/strongbox.svg
    url: https://strongboxsafe.com/
    applicationCategory: Administrador de contraseñas
    operatingSystem: iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: gopass
    image: /assets/img/password-management/gopass.svg
    url: https://www.gopass.pw/
    applicationCategory: Administrador de contraseñas
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - FreeBSD
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
---

Manténgase seguro y protegido en línea con un gestor de contraseñas cifrado y de código abierto.

[Introducción a las Contraseñas :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info

    Los administradores de contraseñas integrados en programas como navegadores y sistemas operativos a veces no son tan buenos como los programas de administración de contraseñas específicos. La ventaja de un administrador de contraseñas incorporado es una buena integración con el software, pero a menudo puede ser muy simple y carecer de características de privacidad y seguridad que las ofertas independientes tienen.
    
    Por ejemplo, el administrador de contraseñas de Microsoft Edge no ofrece E2EE. El administrador de contraseñas de Google tiene [optional](https://support.google.com/accounts/answer/11350823) E2EE, y [Apple 's](https://support.apple.com/en-us/HT202303) ofrece E2EE de forma predeterminada.

## Basado en la nube

Estos administradores de contraseñas sincronizan sus contraseñas con un servidor en la nube para facilitar el acceso desde todos sus dispositivos y ofrecer seguridad frente a la pérdida de dispositivos.

### Bitwarden

!!! recomendación

    ![Bitwarden logo](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** es un administrador de contraseñas gratuito y de código abierto. Su objetivo es resolver los problemas de gestión de contraseñas para individuos, equipos y organizaciones empresariales. Bitwarden es una de las soluciones más fáciles y seguras para almacenar todas sus contraseñas e inicios de sesión manteniéndolos convenientemente sincronizados entre todos sus dispositivos.
    
    [:octicons-home-16: Página Principal](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden también cuenta con [Bitwarden Send](https://bitwarden.com/products/send/), que permite compartir texto y archivos de forma segura con [cifrado de extremo a extremo](https://bitwarden.com/help/send-encryption). Se puede solicitar una [contraseña](https://bitwarden.com/help/send-privacy/#send-passwords) junto con el enlace de envío. Bitwarden Send también cuenta con [borrado automático](https://bitwarden.com/help/send-lifespan).

Necesita el [Plan Premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) para poder compartir archivos. El plan gratuito sólo permite compartir texto.

El código del lado del servidor de Bitwarden es [de código abierto](https://github.com/bitwarden/server), por lo que si no desea utilizar la nube de Bitwarden, puede alojar fácilmente su propio servidor de sincronización Bitwarden.

**Vaultwarden** es una implementación alternativa del servidor de sincronización de Bitwarden escrito en Rust y compatible con los clientes oficiales de Bitwarden, perfecto para la implementación autoalojada donde ejecutar el servicio oficial de recursos pesados podría no ser ideal. Si usted está buscando autoalojar Bitwarden en su propio servidor, es casi seguro que desee utilizar Vaultwarden en lugar del código del servidor oficial de Bitwarden.

[:octicons-repo-16: Repositorio de Vaultwarden](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentación}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Código Fuente" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribuir }

### 1Password

!!! recomendación

    ![1Password logo](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** es un administrador de contraseñas con un fuerte enfoque en la seguridad y la facilidad de uso, que le permite almacenar contraseñas, tarjetas de crédito, licencias de software y cualquier otra información sensible en una bóveda digital segura. Su bóveda es alojada en los servidores de 1Password por una [cuota mensual](https://1password.com/sign-up/). 1Password es [audited](https://support.1password.com/security-assessments/) de forma regular y ofrece una atención al cliente excepcional. 1Password es de código cerrado; sin embargo, la seguridad del producto está exhaustivamente documentada en su [libro blanco de seguridad](https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: Página Principal](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Documentación}
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

Tradicionalmente, **1Password** ha ofrecido la mejor experiencia de usuario entre los administradores de contraseñas para personas que utilizan macOS e iOS; sin embargo, ahora ha logrado la paridad de funciones en todas las plataformas. Cuenta con muchas funciones orientadas a las familias y a las personas menos técnicas, así como con funcionalidades avanzadas.

Su bóveda de 1Password está protegida tanto con su contraseña maestra como con una clave de seguridad aleatoria de 34 caracteres para cifrar sus datos en los servidores. Esta clave de seguridad añade una capa de protección a sus datos, ya que estos están asegurados con una alta entropía independientemente de su contraseña maestra. Muchas otras soluciones de administración de contraseñas dependen totalmente de la fortaleza de su contraseña maestra para proteger sus datos.

Una ventaja que 1Password tiene sobre Bitwarden es su soporte de primera clase para clientes nativos. Mientras que Bitwarden relega muchas funciones, especialmente las de gestión de cuentas, a su interfaz web, 1Password hace que casi todas las funciones estén disponibles en sus clientes nativos para móvil o escritorio. Los clientes de 1Password también tienen una interfaz de usuario más intuitiva, lo que facilita su uso y navegación.

### Psono

!!! recomendación

    ![Psono logo](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** es un administrador de contraseñas gratuito y de código abierto alemán, centrado en la gestión de contraseñas para equipos. Psono permite compartir de forma segura contraseñas, archivos, marcadores y correos electrónicos. Todos los secretos están protegidos por una contraseña maestra.
    
    [:octicons-home-16: Página Principal](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Documentación}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono proporciona una amplia documentación para su producto. El cliente web para Psono puede ser autoalojado; alternativamente, puede elegir la Community Edition completa o la Enterprise Edition con funciones adicionales.

### Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

#### Requisitos Mínimos

- Debe utilizar E2EE sólido, basado en estándares/moderno.
- Debe contar con prácticas de encriptación y seguridad minuciosamente documentadas.
- Debe tener una auditoría publicada de una tercera parte independiente y de buena reputación.
- Toda telemetría no esencial debe ser opcional.
- No debe recopilar más IIP de la necesaria a efectos de facturación.

#### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- La telemetría debe ser opcional (desactivada por defecto) o no recopilarse en absoluto.
- Debe ser de código abierto y razonablemente autoalojable.

## Almacenamiento Local

Estas opciones le permiten administrar una base de datos de contraseñas cifradas localmente.

### KeePassXC

!!! recomendación

    ![KeePassXC logo](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** es una bifurcación comunitaria de KeePassX, un port nativo multiplataforma de KeePass Password Safe, con el objetivo de extenderlo y mejorarlo con nuevas características y correcciones de errores para proporcionar un administrador de contraseñas de código abierto rico en características, multiplataforma y moderno.
    
    [:octicons-home-16: Página Principal](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC almacena sus datos de exportación como archivos [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas). Esto puede significar la pérdida de datos si importa este archivo a otro administrador de contraseñas. Le aconsejamos que compruebe cada registro manualmente.

### KeePassDX (Android)

!!! recomendación

    ![KeePassDX logo](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** es un administrador de contraseñas ligero para Android, que permite editar datos encriptados en un único archivo en formato KeePass y puede rellenar los formularios de forma segura. [Contribuidor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) permite desbloquear contenido cosmético y funciones de protocolo no estándar, pero lo más importante es que ayuda y fomenta el desarrollo.
    
    [:octicons-home-16: Página Principal](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS & macOS)

!!! recomendación

    ![Strongbox logo](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** es un administrador de contraseñas nativo y de código abierto para iOS y macOS. Es compatible con los formatos KeePass y Password Safe, por lo que Strongbox puede utilizarse junto con otros administradores de contraseñas, como KeePassXC, en plataformas que no sean Apple. Al emplear un [modelo freemium](https://strongboxsafe.com/pricing/), Strongbox ofrece la mayoría de las funciones en su nivel gratuito con más funciones orientadas a la comodidad [features](https://strongboxsafe.com/comparison/) -como la autenticación biométrica- bloqueadas tras una suscripción o licencia perpetua.
    
    [:octicons-home-16: Página Principal](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

Además, hay una versión sin conexión: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Esta versión tiene solo lo básico para reducir la superficie de ataque.

### Línea de comandos

Estos productos son administradores de contraseñas mínimos que se pueden utilizar dentro de las aplicaciones de scripting.

#### gopass

!!! recomendación

    ![gopass logo](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** es un gestor de contraseñas para línea de comandos escrito en Go. Funciona en los principales sistemas operativos de escritorio y servidor (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Página Principal](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

- Debe ser multiplataforma.

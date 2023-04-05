---
title: "Clientes de Correo Electrónico"
icon: material/email-open
description: Estos clientes de correo electrónico respetan la privacidad y admiten el cifrado de correo electrónico OpenPGP.
---

Nuestra lista de recomendaciones contiene clientes de correo electrónico que soportan [OpenPGP](encryption.md#openpgp) y una autenticación fuerte como [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). OAuth le permite utilizar la [Autenticación Multifactor](basics/multi-factor-authentication.md) y previene el robo de cuentas.

??? advertencia "El correo electrónico no proporciona el secreto de reenvío"

    Cuando se utiliza una tecnología de cifrado de extremo a extremo (E2EE, por sus siglas en inglés) como OpenPGP, el correo aún tendrá algunos [metadatos](email.md#email-metadata-overview) que no son encriptados en el encabezado del correo.
    
    OpenPGP tampoco soporta '[forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy)', lo que significa que si la clave privada del receptor es robada, todos los mensajes encriptados previamente con esta se encontrarán expuestos: [¿Cómo puedo proteger mis claves privadas?](basics/email-security.md) Considere utilizar un medio que brinde 'forward secrecy':
    
    [Comunicación en tiempo real](real-time-communication.md){ .md-button }

## Multiplataforma

### Thunderbird

!!! recomendación

    ![Thunderbird logo](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** es un cliente gratuito, de código abierto y multiplataforma, de correo electrónico, grupos de noticias y chat (XMPP, IRC, Twitter), desarrollado por la comunidad Thunderbird, y previamente por la Fundación Mozilla.
    
    [:octicons-home-16: Página Principal](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=Documentación}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### Configuración Recomendada

Recomendamos cambiar algunas de estas configuraciones para que Thunderbird sea un poco más privado.

Estas opciones se encuentran en :material-menu: → **Ajustes** → **Privacidad y seguridad**.

##### Contenido web

- [ ] Desmarque  **Recordar sitios web y enlaces que he visitado**
- [ ] Desmarque  **Aceptar cookies de los sitios**

##### Telemetría

- [ ] Desmarque **Permitir a Thunderbird enviar datos técnicos y de interacción a Mozilla**

#### Thunderbird-user.js (avanzado)

[`thunderbird-user.js`](https://github.om/HorlogeSkynet/thunderbird-user.js), es un conjunto de opciones de configuración cuyo objetivo es desactivar el mayor número posible de funciones de navegación web dentro de Thunderbird con el fin de reducir la superficie y mantener la privacidad. Algunos de los cambios son adaptados desde el [proyecto Arkenfox](https://github.com/arkenfox/user.js).

## Plataforma Específica

### Apple Mail (macOS)

!!! recomendación

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** está incluido en macOS y puede ampliarse para que sea compatible con OpenPGP con [GPG Suite](encryption.md#gpg-suite), que añade la posibilidad de enviar correo electrónico cifrado con PGP.
    
    [:octicons-home-16: Página Principal](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentación}

### Canary Mail (iOS)

!!! recomendación

    ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** es un cliente de correo electrónico de pago diseñado para que el cifrado de extremo a extremo sea perfecto, con funciones de seguridad como el bloqueo biométrico de aplicaciones.
    
    [:octicons-home-16: Página Principal](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentación}
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! advertencia

    Canary Mail acaba de lanzar un cliente para Windows y Android, aunque no creemos que sea tan estable como su homólogo para iOS y Mac.

Canary Mail es de código cerrado. Lo recomendamos debido a las pocas opciones que hay para clientes de correo electrónico en iOS que soporten PGP E2EE.

### FairEmail (Android)

!!! recomendación

    ![FairEmail logo](assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** es una aplicación de correo electrónico mínima, de código abierto, que utiliza estándares abiertos (IMAP, SMTP, OpenPGP) con un bajo consumo de datos y batería.
    
    [:octicons-home-16: Página Principal](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! recomendación

    ![Evolution logo](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution** es una aplicación de gestión de información personal que proporciona funciones integradas de correo, calendario y libreta de direcciones. Evolution cuenta con una amplia [documentation](https://help.gnome.org/users/evolution/stable/) para ayudarle a empezar.
    
    [:octicons-home-16: Página Principal](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentación}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! recomendación

    ![K-9 Mail logo](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail** es una aplicación de correo independiente que soporta buzones POP3 e IMAP, pero sólo soporta push mail para IMAP.
    
    En el futuro, K-9 Mail será el cliente [de marca oficial](https://k9mail.app/2022/06/13/K-9-Mail-and-Thunderbird.html) Thunderbird para Android.
    
    [:octicons-home-16: Página de Inicio](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

!!! advertencia

    Al responder a alguien de una lista de correo, la opción "responder" también puede incluir la lista de correo. Para obtener más información, consulte (https://github.com/thundernest/k-9/issues/3738).

### Kontact (KDE)

!!! recomendación

    ![Kontact logo](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** es una aplicación de gestión de información personal (PIM) del proyecto [KDE](https://kde.org). Ofrece un cliente de correo, una libreta de direcciones, un organizador y un cliente RSS.
    
    [:octicons-home-16: Página Principal](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentación}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Navegador)

!!! recomendación

    ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** es una extensión de navegador que permite el intercambio de correos electrónicos cifrados siguiendo el estándar de cifrado OpenPGP.
    
    [:octicons-home-16: Página Principal](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! recomendación

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }
    
    **NeoMutt** * * NeoMutt** es un lector de correo de línea de comandos de código abierto (o MUA) para Linux y BSD. Es una bifurcación de [Mutt](https://en.wikipedia.org/wiki/Mutt_ (email_client)) con funciones adicionales.
    
    NeoMutt es un cliente basado en texto que tiene una curva de aprendizaje pronunciada. Sin embargo, es muy personalizable.
    
    [:octicons-home-16: Página Principal](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

## Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Requisitos Mínimos

- Las aplicaciones desarrolladas para sistemas operativos de código abierto deben ser de código abierto.
- No debe recolectar telemetría, o debe tener una manera fácil de deshabilitar toda la telemetría.
- Debe soportar el cifrado de mensajes OpenPGP.

### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Debe ser de código abierto.
- Debe ser multiplataforma.
- No debe recopilar ninguna telemetría por defecto.
- Debe soportar OpenPGP de forma nativa, es decir, sin extensiones.
- Debe soportar el almacenamiento local de correos electrónicos encriptados con OpenPGP.

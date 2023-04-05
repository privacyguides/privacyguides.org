---
title: "Compartición y sincronización de archivos"
icon: material/share-variant
description: Descubra cómo puede compartir de manera privada sus archivos entre sus dispositivos, con sus amigos y familia, o de manera anónima en línea.
---

Descubra cómo puede compartir de manera privada sus archivos entre sus dispositivos, con sus amigos y familia, o de manera anónima en línea.

## Programas para compartir archivos

### Send

!!! recomendación

    ![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** es una bifurcación del programa Firefox Send (descontinuado por Mozilla), que permite enviar archivos a otras personas mediante un enlace. Los archivos son encriptados en su dispositivo, lo que no permite que sean leídos por el servidor y, opcionalmente, también pueden protegerse por una contraseña. El responsable de mantener Send ofrece una [instancia pública](https://send.vis.ee/). Puede usitlizar otras instancias públicas o puede hospedar Send usted mismo.
    
    [:octicons-home-16: Página principal](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Contribute }

Send puede utilizarse a través de su interfaz web o mediante la herremienta de comandos [ffsend](https://github.com/timvisee/ffsend). Si usted es familiar con la línea de comandos y envía archivos frecuentemente, recomendamos utilizar el cliente CLI para evitar la encriptación basada en JavaScript. Usted puede especificar la bandera `--host` para utilizar un servidor en específico:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! recomendación

    ![OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** es una herramienta de código abierto que permite compartir de manera segura y anónima un archivo de cualquier tamaño. Funciona iniciando un servidor web accesible como un servicio onion de Tor, con un enlace indescifrable que se puede compartir con los receptores para descargar o enviar archivos.
    
    [:octicons-home-16: Página principal](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Source Code" }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Criterios

**Por favor, tome en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** En adición a [nuestros criterios estándares](about/criteria.md), hemos desarrollado un claro conjunto de requisitos para permitirnos brindar recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista antes de optar por utilizar un proyecto, y realizar su propia investigación para asegurarse que es la elección adecuada.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna pregunta sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no consideramos algo al hacer nuestras recomendaciones, si no se encuentra listado aquí. Hay múltiples factores considerados y discutidos cuando recomendamos un proyecto, y documentar cada uno es un trabajo en progreso.

- No debe almacenar información sin encriptar en un servidor remoto.
- Debe ser un programa de código abierto.
- Debe tener clientes para Linux, macOS y Winwos; o tener una interfaz web.

## FreedomBox

!!! recomendación

    ![FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** es un sistema operativo diseñado para correr en una [computadora de placa única (SBC, por sus siglas en inglés)](https://en.wikipedia.org/wiki/Single-board_computer). El propósito es facilitar la configuración de aplicaciones que requieran un servidor y se puedan alojar por usted mismo.
    
    [:octicons-home-16: Página principal](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Contribute }

## Sincronización de archivos

### Nextcloud (Cliente-Servidor)

!!! recomendación

    ![Nextcloud logo](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** es un conjunto de programas gratuitos y de código abierto, para la creación de su propio servicio de almacenamiento de archivos en un servidor privado que usted controle.
    
    [:octicons-home-16: Página principal](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribute }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! peligro

    No recomendamos utilizar la [aplicación con cifrado de extremo a extremo](https://apps.nextcloud.com/apps/end_to_end_encryption) para Nextcloud, porque puede causar la pérdida de datos; esta es considerada como altamente experimental y no debe utilizarse en entornos de producción.

### Syncthing (P2P)

!!! recomendación

    ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** es una herramienta de sincronización continua de archivos peer-to-peer de código abierto. Es utilizada para sincronizar archivos entre dos o más dispositivos sobre la red local o el Internet. Syncthing no utiliza un servidor centralizado, este utiliza el [Protocolo de Intercambio de Bloques](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) para transferir los datos entre dispositivos. Todos los datos son encriptados utilizando TLS.
    
    [:octicons-home-16: Página principal](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribute }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Criterios

**Por favor, tome en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** En adición a [nuestros criterios estándares](about/criteria.md), hemos desarrollado un claro conjunto de requisitos para permitirnos brindar recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista antes de optar por utilizar un proyecto, y realizar su propia investigación para asegurarse que es la elección adecuada.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tienes alguna duda sobre nuestros criterios, por favor [pregunta en nuestro foro](https://discuss.privacyguides.net/latest) y no asumas que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

#### Requisitos Mínimos

- No debe requerir un servidor de terceros remoto o en la nube.
- Debe ser software de código abierto.
- Debe tener clientes para Linux, macOS y Winwos; o tener una interfaz web.

#### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Dispone de clientes móviles para iOS y Android, que al menos permiten previsualizar los documentos.
- Admite la copia de seguridad de fotos desde iOS y Android, y opcionalmente admite la sincronización de archivos/carpetas en Android.

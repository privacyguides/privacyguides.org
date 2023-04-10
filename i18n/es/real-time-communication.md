---
title: "Comunicación en Tiempo Real"
icon: material/chat-processing
description: Otros servicios de mensajería instantánea ponen todas sus conversaciones privadas a disposición de la empresa que los gestiona.
---

Estas son nuestras recomendaciones para la comunicación cifrada en tiempo real.

[Tipos de Redes de Comunicación :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Servicios de Mensajería Cifrados

Estos servicios de mensajería son ideales para proteger sus comunicaciones confidenciales.

### Signal

!!! recommendation

    ![Logotipo de Signal](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** es una aplicación móvil desarrollada por Signal Messenger LLC. La aplicación ofrece mensajería instantánea, así como llamadas de voz y vídeo.
    
    Todas las comunicaciones son E2EE. Las listas de contactos se encriptan con su PIN de Signal y el servidor no tiene acceso a ellas. Los perfiles personales también están encriptados y sólo se comparten con los contactos con los que chatea.
    
    [:octicons-home-16: Página Principal](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.signal.org/hc/en-us){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://signal.org/donate/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id874139669)
        - [:simple-android: Android](https://signal.org/android/apk/)
        - [:simple-windows11: Windows](https://signal.org/download/windows)
        - [:simple-apple: macOS](https://signal.org/download/macos)
        - [:simple-linux: Linux](https://signal.org/download/linux)

Signal admite [grupos privados](https://signal.org/blog/signal-private-group-system/). El servidor no tiene registro de la pertenencia a un grupo, los títulos de los grupos, los avatares de los grupos o los atributos de los grupos. Signal tiene pocos metadatos cuando [Remitente Confidencial](https://signal.org/blog/sealed-sender/) está activado. La dirección del remitente se encripta junto con el cuerpo del mensaje, y sólo la dirección del destinatario es visible para el servidor. Remitente confidencial sólo está activado para las personas de su lista de contactos, pero se puede activar para todos los destinatarios con el consiguiente riesgo de recibir spam. Signal requiere su número de teléfono como identificador personal.

El protocolo fue [auditado](https://eprint.iacr.org/2016/1013.pdf) de forma independiente en 2016. La especificación del protocolo Signal puede encontrarse en su [documentación](https://signal.org/docs/).

Tenemos algunos consejos adicionales para configurar y endurecer su instalación de Signal:

[Configuración y Endurecimiento de Signal :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! recommendation

    ![Simplex logo](assets/img/messengers/simplex.svg){ align=right }
    
    **SimpleX** Chat es un servicio de mensajería instantánea descentralizado que no depende de ningún identificador único, como números de teléfono o nombres de usuario. Los usuarios de SimpleX Chat pueden escanear un código QR o hacer clic en un enlace de invitación para participar en conversaciones de grupo.
    
    [:octicons-home-16: Página Principal](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases)

SimpleX Chat [fue auditado](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) por Trail of Bits en octubre de 2022.

Actualmente SimpleX Chat sólo ofrece un cliente para Android e iOS. Se admiten funciones básicas de chat en grupo, mensajería directa, edición de mensajes y markdown. También se admiten llamadas de audio y vídeo E2EE.

Sus datos se pueden exportar e importar a otro dispositivo, ya que no hay servidores centrales en los que se realice una copia de seguridad.

### Briar

!!! recommendation

    ![Briar logo](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** es un servicio de mensajería instantánea encriptado que [connects](https://briarproject.org/how-it-works/) a otros clientes usando la Red Tor. Briar también puede conectarse a través de Wi-Fi o Bluetooth si está cerca. El modo de malla local de Briar puede ser útil cuando la disponibilidad de Internet es un problema.
    
    [:octicons-home-16: Página Principal](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title=""Política de Privacidad" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentación}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Las opciones de donación están listadas en la parte inferior de la página principal" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

Para añadir un contacto en Briar, ambos deben añadirse entre sí primero. Puede intercambiar enlaces `briar://` o escanear el código QR de un contacto si están cerca.

El software cliente fue [auditado](https://briarproject.org/news/2017-beta-released-security-audit/) de forma independiente, y el protocolo de enrutamiento anónimo utiliza la red Tor, que también ha sido auditada.

Briar tiene una [especificación publicada](https://code.briarproject.org/briar/briar-spec) completamente.

Briar admite el secreto de reenvío perfecto utilizando el protocolo Bramble [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) y el protocolo [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md).

## Opciones Adicionales

!!! advertencia

    Estos servicios de mensajería no tienen Perfect [Forward Secrecy](https://es.wikipedia.org/wiki/Perfect_forward_secrecy) (PFS), y aunque satisfacen ciertas necesidades que nuestras recomendaciones anteriores no pueden satisfacer, no los recomendamos para comunicaciones a largo plazo o sensibles. Cualquier compromiso de claves entre los destinatarios de los mensajes afectaría a la confidencialidad de **todas** las comunicaciones anteriores.

### Element

!!! recommendation

    ![Element logo](assets/img/messengers/element.svg){ align=right }
    
    **Element** es el cliente de referencia para el protocolo [Matrix](https://matrix.org/docs/guides/introduction), un [estándar abierto](https://matrix.org/docs/spec) para la comunicación segura descentralizada en tiempo real.
    
    Los mensajes y los archivos compartidos en las salas privadas (las que requieren una invitación) son por defecto E2EE, al igual que las llamadas de voz y vídeo uno a uno.
    
    [:octicons-home-16: Página Principal](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

Las fotos de perfil, las reacciones y los apodos no están cifrados.

Las llamadas de voz y vídeo en grupo [no](https://github.com/vector-im/element-web/issues/12878) son E2EE, y utilizan Jitsi, pero se espera que esto cambie con [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). Actualmente, las llamadas grupales [no tienen autenticación](https://github.com/vector-im/element-web/issues/13074), lo que significa que los participantes que no son de la sala también pueden entrar a las llamadas. Le recomendamos que no utilice esta función para las reuniones privadas.

El propio protocolo Matrix [soporta teóricamente PFS](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy), sin embargo [no está soportado actualmente en Element](https://github.com/vector-im/element-web/issues/7101) debido a que rompe algunos aspectos de la experiencia del usuario como las copias de seguridad de claves y el historial de mensajes compartidos.

El protocolo fue [auditado](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) de forma independiente en 2016. La especificación del protocolo Matrix puede encontrarse en su [documentación](https://spec.matrix.org/latest/). El trinquete criptográfico [Olm](https://matrix.org/docs/projects/other/olm) utilizado por Matrix es una implementación del algoritmo [Double Ratchet](https://signal.org/docs/specifications/doubleratchet/) de Signal.

### Session

!!! recommendation

    ![Session logo](assets/img/messengers/session.svg){ align=right }
    
    **Session** es un servicio de mensajería descentralizado centrado en las comunicaciones privadas, seguras y anónimas. Session ofrece soporte para mensajes directos, chats de grupo y llamadas de voz.
    
    Session utiliza la red descentralizada [Oxen Service Node Network](https://oxen.io/) para almacenar y enrutar los mensajes. Cada mensaje encriptado pasa por tres nodos de la Oxen Service Node Network, lo que hace prácticamente imposible que los nodos recopilen información significativa sobre quienes utilizan la red.
    
    [:octicons-home-16: Página Principal](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session permite E2EE en chats individuales o grupos cerrados que admiten hasta 100 miembros. Los grupos abiertos no tienen ninguna restricción en cuanto al número de miembros, pero son abiertos por diseño.

Session [no](https://getsession.org/blog/session-protocol-technical-information) soporta PFS, que es cuando un sistema de cifrado cambia automáticamente y con frecuencia las claves que utiliza para cifrar y descifrar la información, de tal manera que si la última clave se ve comprometida expone una porción menor de información sensible.

Oxen solicitó una auditoría independiente para Session en marzo de 2020. La auditoría [concluyó](https://getsession.org/session-code-audit) en abril de 2021, "El nivel de seguridad general de esta aplicación es bueno y la hace utilizable para las personas preocupadas por la privacidad".

Session tiene un [informe oficial](https://arxiv.org/pdf/2002.04609.pdf) que describe los aspectos técnicos de la aplicación y el protocolo.

## Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

- Debe tener clientes de código abierto.
- Debe utilizar E2EE para los mensajes privados por defecto.
- Debe ser compatible con E2EE para todos los mensajes.
- Debe haber sido objeto de una auditoría independiente.

### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Debe tener Perfect Forward Secrecy.
- Debe tener servidores de código abierto.
- Debe ser descentralizado, es decir, federado o P2P.
- Debe utilizar E2EE para todos los mensajes por defecto.
- Debe ser compatible con Linux, macOS, Windows, Android e iOS.

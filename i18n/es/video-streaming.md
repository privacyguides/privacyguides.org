---
title: "Transmisiones en Vivo"
icon: material/video-wireless
description: Estas redes le permiten transmitir contenidos de Internet sin crear un perfil publicitario basado en sus intereses.
---

La principal amenaza al utilizar una plataforma de streaming es que sus hábitos de streaming y sus suscripciones podrían utilizarse para elaborar un perfil. Deberías combinar estas herramientas con un [VPN](vpn.md) o [Tor](https://www.torproject.org/) para hacer más difícil la recolección de tu perfil.

## LBRY

!!! recommendation

    ![Logo LBRY](assets/img/video-streaming/lbry.svg){ align=right }
    
    **La red LBRY** es una red de intercambio de vídeo descentralizada. Usa una red tipo [BitTorrent](https://wikipedia.org/wiki/BitTorrent) para almacenar el contenido de los vídeos, y una [blockchain](https://wikipedia.org/wiki/Blockchain) para almacenar los índices de esos vídeos. La principal ventaja de este diseño es la resistencia a la censura.
    
    **El cliente de escritorio LBRY** te ayuda a transmitir vídeos desde la red LBRY y almacena tu lista de suscripción en tu propia billetera LBRY.
    
    [:octicons-home-16: Inicio](https://lbry.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://lbry.com/privacypolicy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://lbry.com/faq){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Código fuente" }
    
    ??? Descargas
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! nota

    Solo se recomienda el **cliente de escritorio LBRY**, ya que el sitio web [Odysee](https://odysee.com) y los clientes LBRY en F-Droid, Play Store y App Store tienen sincronización y telemetría obligatorias.

!!! advertencia

    Mientras ve y aloja vídeos, su dirección IP es visible para la red LBRY. Considera la posibilidad de utilizar un [VPN](vpn.md) o [Tor](https://www.torproject.org) si tu [modelo de amenaza](basics/threat-modeling.md) requiere ocultar tu dirección IP.

Recomendamos **no** sincronizar tu monedero con LBRY Inc, ya que la sincronización de monederos encriptados no es compatible todavía. Si sincronizas tu wallet con LBRY Inc. tendrás que confiar que ellos no mirarán tu lista de suscripciones, tus fondos [LBC](https://lbry.com/faq/earn-credits) o tomen el control de tu canal.

Puedes desactivar la opción *Guardar datos de alojamiento para ayudar a la red LBRY* en :gear: **Ajustes** → **Ajustes avanzados**, para evitar exponer tu dirección IP y los vídeos vistos cuando utilices LBRY durante un periodo de tiempo prolongado.

## Criterios

**Por favor, ten en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! example "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna pregunta sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no consideramos algo al hacer nuestras recomendaciones, si no se encuentra listado aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

- No debe requerir una cuenta centralizada para ver los vídeos.
    - La autenticación descentralizada, como por ejemplo a través de la clave privada de un monedero móvil, es aceptable.

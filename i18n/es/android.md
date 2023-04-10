---
title: "Android"
icon: 'simple/android'
description: Puedes sustituir el sistema operativo de tu teléfono Android por estas alternativas seguras y respetuosas con la privacidad.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Sistemas Operativos Android Privados
    url: "./"
  - 
    "@context": http://schema.org
    "@type": CreativeWork
    name: Android
    image: /assets/img/android/android.svg
    url: https://source.android.com/
    sameAs: https://en.wikipedia.org/wiki/Android_(operating_system)
  - 
    "@context": http://schema.org
    "@type": CreativeWork
    name: GrapheneOS
    image: /assets/img/android/grapheneos.svg
    url: https://grapheneos.org/
    sameAs: https://en.wikipedia.org/wiki/GrapheneOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": CreativeWork
    name: Divest
    image: /assets/img/android/divestos.svg
    url: https://divestos.org/
    sameAs: https://en.wikipedia.org/wiki/DivestOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": Product
    name: Pixel
    brand:
      "@type": Brand
      name: Google
    image: /assets/img/android/google-pixel.png
    sameAs: https://en.wikipedia.org/wiki/Google_Pixel
    review:
      "@type": Review
      author:
        "@type": Organization
        name: Privacy Guides
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Shelter
    applicationCategory: Utilities
    operatingSystem: Android
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Auditor
    applicationCategory: Utilities
    operatingSystem: Android
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Cámara de Seguridad
    applicationCategory: Utilities
    operatingSystem: Android
  - 
    "@context": http://schema.org
    "@type": MobileApplication
    name: Visor seguro de PDF
    applicationCategory: Utilities
    operatingSystem: Android
---

![Logotipo de Android](assets/img/android/android.svg){ align=right }

El **proyecto de código abierto de Android** es un sistema operativo móvil de código abierto liderado por Google, que está detrás de la mayor parte de los dispositivos móviles del mundo. La mayor parte de los teléfono vendidos con Android son modificados para incluir integraciones y aplicaciones invasivas como los servicios de Google Play, así que puedes mejorar la privacidad de tu dispositivo móvil de manera significativa al reemplazar la instalación predeterminada de tu teléfono con una versión de Android sin esas características invasivas.

[:octicons-home-16:](https://source.android.com/){ .card-link title=Página Principal }
[:octicons-info-16:](https://source.android.com/docs){ .card-link title=Documentación}
[:octicons-code-16:](https://cs.android.com/android/platform/superproject/){ .card-link title="Código Fuente" }

Estos son los sistemas operativos Android, dispositivos y aplicaciones que recomendamos para maximizar la seguridad y privacidad de tu dispositivo móvil. Para obtener más información sobre Android:

[Visión general de Android :material-arrow-right-drop-circle:](os/android-overview.md ""){.md-button}

[Por qué recomendamos GrapheneOS sobre CalyxOS :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/ ""){.md-button}

## Derivados de AOSP

Recomendamos instalar uno de estos sistemas operativos Android personalizados en tu dispositivo, enumerados por orden de preferencia, en función de la compatibilidad de tu dispositivo con estos sistemas operativos.

!!! Nota

    ![Logotipo de GrapheneOS](assets/img/android/grapheneos.svg#only-light){ align=right }
    ![Logotipo de GrapheneOS ](assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS** es la mejor opción cuando se trata de privacidad y seguridad. GrapheneOS proporciona mejoras adicionales de [seguridad](https://es.wikipedia.org/wiki/Endurecimiento_(inform%C3%A1tica)) y de privacidad.

### GrapheneOS

!!! recommendation

    ![Logo de GrapheneOS](assets/img/android/grapheneos.svg#only-light){ align=right }
    ![Logo de GrapheneOS](assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS** es la mejor opción cuando se trata de privacidad y seguridad.
    
    GrapheneOS proporciona mejoras adicionales de seguridad (https://en.wikipedia.org/wiki/Hardening_(computing)) y privacidad. Dispone de un [asignador de memoria reforzado](https://github.com/GrapheneOS/hardened_malloc), permisos de red y de sensores, y otras [características de seguridad](https://grapheneos.org/features). GrapheneOS también incluye actualizaciones completas de firmware y compilaciones firmadas, por lo que el arranque verificado es totalmente compatible.
    
    [:octicons-home-16: Página Principal](https://grapheneos.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://grapheneos.org/faq#privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://grapheneos.org/faq/){ .card-link title=Documentación}
    [:octicons-code-16:](https://grapheneos.org/source){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://grapheneos.org/donate/){ .card-link title=Contribuir }

GrapheneOS es compatible con [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), que ejecuta [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) totalmente sandboxed como cualquier otra aplicación normal. Esto significa que puede aprovechar la mayoría de los servicios de Google Play, como [notificaciones push](https://firebase.google.com/docs/cloud-messaging/), al tiempo que le da un control total sobre sus permisos y acceso, y mientras que los contiene a un [perfil de trabajo](os/android-overview.md#work-profile) o [perfil de usuario](os/android-overview.md#user-profiles) específico de su elección.

Los teléfonos Pixel de Google son los únicos dispositivos que actualmente cumplen los [requisitos de seguridad de hardware ](https://grapheneos.org/faq#device-support)de GrapheneOS.

### DivestOS

!!! recommendation

    ![Logo de DivestOS](assets/img/android/divestos.svg){ align=right }
    
    **DivestOS** es un soft-fork de [LineageOS](https://lineageos.org/).
    DivestOS hereda muchos [dispositivos soportados](https://divestos.org/index.php?page=devices&base=LineageOS) de LineageOS. Tiene compilaciones firmadas, lo que hace posible tener [arranque verificado](https://source.android.com/security/verifiedboot) en algunos dispositivos que no son Pixel.
    
    [:octicons-home-16: Página Principal](https://divestos.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://divestoseb5nncsydt7zzf5hrfg44md4bxqjs5ifcv4t7gt7u6ohjyyd.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://divestos.org/index.php?page=privacy_policy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://divestos.org/index.php?page=faq){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/divested-mobile){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://divested.dev/index.php?page=donate){ .card-link title=Contribuir }

DivestOS ha automatizado la vulnerabilidad del kernel ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)) [parcheando](https://gitlab.com/divested-mobile/cve_checker), menos bloques propietarios, y un archivo personalizado [hosts](https://divested.dev/index.php?page=dnsbl). Su WebView reforzado, [Mulch](https://gitlab.com/divested-mobile/mulch), permite [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) para todas las arquitecturas, [partición del estado de la red](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) y recibe actualizaciones fuera de banda. DivestOS también incluye parches de GrapheneOS para el kernel y habilita todas las características de seguridad del kernel disponibles a través de [endurecimiento defconfig](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758). Todos los kernels más recientes que la versión 3.4 incluyen [saneamiento](https://lwn.net/Articles/334747/) de página completa y todos los ~22 kernels compilados por Clang tienen [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471) habilitado.

DivestOS implementa algunos parches de endurecimiento del sistema desarrollados originalmente para GrapheneOS. DivestOS 16.0 y superior implementa los permisos de GrapheneOS [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) y SENSORS, [asignador de memoria endurecido](https://github.com/GrapheneOS/hardened_malloc), [exec-spawning](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/#additional-hardening), [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) [constificación](https://en.wikipedia.org/wiki/Const_(computer_programming)), y parches de endurecimiento parcial [biónico](https://en.wikipedia.org/wiki/Bionic_(software)). A partir de la versión 17.1, GrapheneOS ofrece la opción de [MAC aleatoria por red ](https://en.wikipedia.org/wiki/MAC_address#Randomization), el control [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) y las opciones de reinicio automático/Wi-Fi/Bluetooth [timeout](https://grapheneos.org/features).

DivestOS utiliza F-Droid como su tienda de aplicaciones por defecto. Normalmente, recomendaríamos evitar F-Droid debido a sus numerosos [problemas de seguridad](#f-droid). Sin embargo, hacerlo en DivestOS no es viable; los desarrolladores actualizan sus aplicaciones a través de sus propios repositorios F-Droid ([DivestOS Official](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467) y [DivestOS WebView](https://divestos.org/fdroid/webview/?fingerprint=FB426DA1750A53D7724C8A582B4D34174E64A84B38940E5D5A802E1DFF9A40D2)). Recomendamos deshabilitar la aplicación oficial F-Droid y usar [Neo Store](https://github.com/NeoApplications/Neo-Store/) con los repositorios DivestOS habilitados para mantener esos componentes actualizados. Para las demás aplicaciones, se siguen aplicando nuestros métodos recomendados para obtenerlas.

!!! Advertencia

    La actualización del firmware de DivestOS [status](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS) y el control de calidad varían según los dispositivos que soporta. Seguimos recomendando GrapheneOS en función de la compatibilidad de tu dispositivo. Para otros dispositivos, DivestOS es una buena alternativa.
    
    No todos los dispositivos compatibles tienen arranque verificado y algunos lo realizan mejor que otros.

## Dispositivos Android

Al comprar un dispositivo, recomendamos obtener uno lo más nuevo posible. El software y el firmware de los dispositivos móviles sólo son compatibles durante un tiempo limitado, por lo que comprar nuevos alarga esa vida útil todo lo posible.

Evita comprar teléfonos a operadores de redes móviles. Estos suelen tener un **bootloader bloqueado** y no admiten [desbloqueo OEM](https://source.android.com/devices/bootloader/locking_unlocking). Estas variantes de teléfono te impedirán instalar cualquier tipo de distribución alternativa de Android.

Ten mucho **cuidado** con la compra de teléfonos de segunda mano de los mercados en línea. Comprueba siempre la reputación del vendedor. Si el dispositivo es robado, existe la posibilidad de que [el IMEI esté en la lista negra](https://www.gsma.com/security/resources/imei-blacklisting/). También existe el riesgo de que se te asocie con la actividad del propietario anterior.

Algunos consejos más sobre los dispositivos Android y la compatibilidad del sistema operativo:

- No compres dispositivos que hayan alcanzado o estén cerca del final de su vida útil, las actualizaciones adicionales del firmware deben ser proporcionadas por el fabricante.
- No compres teléfonos LineageOS, OS precargados o cualquier teléfono Android sin el soporte adecuado, [Arranque verificado](https://source.android.com/security/verifiedboot) y actualizaciones de firmware. Tampoco tienes forma de comprobar si estos dispositivos han sido manipulados.
- En resumen, si un dispositivo o una distribución de Android no aparece aquí, probablemente haya una buena razón. Consulta nuestro [foro](https://discuss.privacyguides.net/) para obtener más información.

### Google Pixel

Los teléfonos Google Pixel son los **únicos **dispositivos que recomendamos comprar. Los teléfonos Pixel tienen una seguridad de hardware más fuerte que cualquier otro dispositivo Android actualmente en el mercado, debido al soporte AVB adecuado para sistemas operativos de terceros y los chips de seguridad [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) personalizados de Google que actúan como elemento seguro.

!!! recommendation

    ![Google Pixel 6](assets/img/android/google-pixel.png){ align=right }
    
    **Se sabe que los dispositivos Google Pixel** tienen una buena seguridad y admiten correctamente [Verified Boot](https://source.android.com/security/verifiedboot), incluso al instalar sistemas operativos personalizados.
    
    A partir de los **Pixel 6** y **6 Pro**, los dispositivos Pixel reciben un mínimo de 5 años de actualizaciones de seguridad garantizadas, lo que asegura una vida útil mucho más larga en comparación con los 2-4 años que suelen ofrecer los OEM de la competencia.
    
    [:material-shopping: Tienda](https://store.google.com/category/phones){ .md-button .md-button--primary }

Los elementos seguros como el Titan M2 son más limitados que el entorno de ejecución confiable del procesador utilizado por la mayoría de los otros teléfonos, ya que solo se utilizan para el almacenamiento secreto, la certificación de hardware y la limitación de velocidad, no para ejecutar programas "confiables". Los teléfonos sin un Elemento Seguro tienen que utilizar el TEE para *todas* esas funciones, lo que resulta en una mayor superficie de ataque.

Los teléfonos Google Pixel utilizan un SO TEE llamado Trusty que es [de código abierto](https://source.android.com/security/trusty#whyTrusty), a diferencia de muchos otros teléfonos.

La instalación de GrapheneOS en un teléfono Pixel es fácil con su [instalador web](https://grapheneos.org/install/web). Si no te sientes cómodo haciéndolo tu mismo y estás dispuesto a gastar un poco más de dinero, échale un vistazo a [NitroPhone](https://shop.nitrokey.com/shop), ya que vienen con GrapheneOS, de la reputada empresa [Nitrokey](https://www.nitrokey.com/about).

Algunos consejos más para comprar un Google Pixel:

- Si buscas una ganga en un dispositivo Pixel, te sugerimos comprar un modelo "**a**", justo después del lanzamiento del modelo más nuevo. Los descuentos suelen estar disponibles porque Google intentará liquidar sus existencias.
- Considera la posibilidad de batir los precios y las ofertas especiales de las tiendas físicas.
- Busca en los sitios de ofertas de la comunidad en línea de tu país. Estos pueden alertarle de buenas ventas.
- Google proporciona una lista que muestra el [ciclo de soporte](https://support.google.com/nexus/answer/4457705) para cada uno de sus dispositivos. El precio por día de un dispositivo puede calcularse como: $\text{Cost} \over \text {EOL Date}-\text{Current Date}$, lo que significa que cuanto mayor sea el uso del dispositivo, menor será el coste por día.

## Aplicaciones generales

En este sitio recomendamos una amplia variedad de aplicaciones para Android. Las aplicaciones enumeradas aquí son exclusivas de Android y mejoran o sustituyen específicamente funciones clave del sistema.

### Shelter

!!! recommendation

    ![Logotipo de Shelter](assets/img/android/shelter.svg){ align=right }
    
    **Shelter** es una aplicación que te ayuda a aprovechar la funcionalidad perfil de trabajo de Android para aislar o duplicar aplicaciones en tu dispositivo.
    
    Shelter permite bloquear la búsqueda de contactos entre perfiles y compartir archivos entre perfiles a través del gestor de archivos predeterminado ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).
    
    [:octicons-repo-16: Repositorio](https://gitea.angry.im/PeterCxy/Shelter#shelter){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitea.angry.im/PeterCxy/Shelter){ .card-link title="Código fuente" }
    [:octicons-heart-16:](https://www.patreon.com/PeterCxy){ .card-link title=Contribuir }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)

!!! advertencia

    Se recomienda Shelter en lugar de [Insular](https://secure-system.gitlab.io/Insular/) e [Island](https://github.com/oasisfeng/island), ya que admite [bloqueo de búsqueda de contactos](https://secure-system.gitlab.io/Insular/faq.html).
    
    Al usar Shelter, está depositando toda su confianza en su desarrollador, ya que Shelter actúa como [Administrador de dispositivos](https://developer.android.com/guide/topics/admin/device-admin) para crear el perfil de trabajo, y tiene un amplio acceso a los datos almacenados en él.

### Auditor

!!! recommendation

    ![Logo Auditor](assets/img/android/auditor.svg#only-light){ align=right }
    ![Logo Auditor ](assets/img/android/auditor-dark.svg#only-dark){ align=right }
    
    **Auditor** es una aplicación que aprovecha las funciones de seguridad del hardware para supervisar la integridad de los dispositivos [compatibles](https://attestation.app/about#device-support). Actualmente, sólo funciona con GrapheneOS y con el sistema operativo original del dispositivo.
    
    [:octicons-home-16: Página Principal](https://attestation.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://attestation.app/privacy-policy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://attestation.app/about){ .card-link title=Documentación}
    [:octicons-code-16:](https://attestation.app/source){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://attestation.app/donate){ .card-link title=Contribuir }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Auditor/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Auditor realiza atestación y detección de intrusos por:

- Utilizando un modelo [Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) entre un *auditor* y un * auditado *, la pareja establece una clave privada en el [almacén de claves respaldado por hardware ](https://source.android.com/security/keystore/) del *auditor*.
- El *auditor* puede ser otra instancia de la aplicación Auditor o el [Servicio de atestación remota](https://attestation.app).
- El *auditor* registra el estado actual y la configuración del *auditado*.
- En caso de que se produzca una manipulación del sistema operativo del *auditado* una vez finalizado el emparejamiento, el auditor será consciente del cambio en el estado y las configuraciones del dispositivo.
- Se te avisará del cambio.

No se envía información personal identificable al servicio de certificación. Recomendamos que te registres con una cuenta anónima y actives la atestación remota para una supervisión continua.

Si tu [modelo de amenaza](basics/threat-modeling.md) requiere privacidad, podrías considerar el uso de [Orbot](tor.md#orbot) o una VPN para ocultar tu dirección IP del servicio de atestación. Para asegurarte de que el hardware y el sistema operativo son auténticos, [realiza una atestación local](https://grapheneos.org/install/web#verifying-installation) inmediatamente después de instalar el dispositivo y antes de cualquier conexión a Internet.

### Cámara de Seguridad

!!! recommendation

    ![Logo de Secure Camera](assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Logo de Secure camera](assets/img/android/secure_camera-dark.svg#only-dark){ align=right }
    
    **Secure Camera** es una aplicación de cámara centrada en la privacidad y la seguridad que puede capturar imágenes, vídeos y códigos QR. Las extensiones de proveedor de CameraX (Retrato, HDR, Visión nocturna, Retoque facial y Auto) también son compatibles con los dispositivos disponibles.
    
    [:octicons-repo-16: Repositorio](https://github.com/GrapheneOS/Camera){ .md-button .md-button--primary }
    [:octicons-info-16:](https://grapheneos.org/usage#camera){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/GrapheneOS/Camera){ .card-link title="Código fuente" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Camera/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Las principales características de privacidad incluyen:

- Eliminación automática de los metadatos [Exif](https://en.wikipedia.org/wiki/Exif) (activada por defecto)
- Uso de la nueva API [Media](https://developer.android.com/training/data-storage/shared/media), por lo que no se requieren [permisos de almacenamiento ](https://developer.android.com/training/data-storage)
- No se requiere permiso de micrófono a menos que desees grabar sonido

!!! Nota

    Actualmente no se eliminan los metadatos de los archivos de vídeo, pero está previsto hacerlo.
    
    Los metadatos de orientación de la imagen no se borran. Si habilitas la ubicación (en la cámara segura), * * tampoco se eliminará * *. Si quieres borrarlo más tarde tendrás que utilizar una aplicación externa como [ExifEraser](data-redaction.md#exiferaser).

### Visor seguro de PDF

!!! recommendation

    ![Secure PDF Viewer logo](assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![Secure PDF Viewer logo](assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }
    
    **Secure PDF Viewer** es un visor de PDF basado en [pdf.js](https://en.wikipedia.org/wiki/PDF.js) que no requiere permisos. El PDF se introduce en un [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(desarrollo_software)) [webview](https://developer.android.com/guide/webapps/webview). Esto significa que no necesita permiso para acceder directamente a contenidos o archivos.
    
    [Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) se utiliza para garantizar que las propiedades de JavaScript y de estilo dentro de WebView sean enteramente de contenido estático.
    
    [:octicons-repo-16: Repositorio](https://github.com/GrapheneOS/PdfViewer){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/GrapheneOS/PdfViewer){ .card-link title="Código fuente" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuir }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

## Obteniendo Aplicaciones

### Tienda de aplicaciones GrapheneOS

La tienda de aplicaciones de GrapheneOS está disponible en [GitHub](https://github.com/GrapheneOS/Apps/releases). Soporta Android 12 o superior y es capaz de actualizarse a sí mismo. La tienda de aplicaciones cuenta con aplicaciones independientes creadas por el proyecto GrapheneOS, como [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera)y [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). Si estás buscando estas aplicaciones, te recomendamos que las obtengas desde la tienda de aplicaciones de GrapheneOS en lugar de la Play Store, ya que las aplicaciones en su tienda están firmadas por la propia firma del proyecto de GrapheneOS a la que Google no tiene acceso.

### Aurora Store

La tienda de Google Play requiere una cuenta de Google para iniciar sesión, lo que no es ideal para la privacidad. Eso se puede evitar utilizando un cliente alternativo, como Aurora Store.

!!! recommendation

    ![Logo Aurora Store](assets/img/android/aurora-store. ebp){ align=right }
    
    **Aurora Store** es un cliente de Google Play Store que no requiere de una cuenta de Google, Servicios Google Play, o microG para descargar aplicaciones.
    
    [:octicons-home-16: Página del proyecto](https://auroraoss.com/){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/AuroraOSS/AuroraStore){ .card-link title="Código fuente" }
    
    ??? downloads
    
        - [:simple-gitlab: GitLab](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

Aurora Store no te permite descargar aplicaciones de pago con su función de cuenta anónima. Opcionalmente, puedes iniciar sesión con tu cuenta de Google en Aurora Store para descargar aplicaciones que hayas comprado, lo cuál da acceso a Google a la lista de aplicaciones que instales, sin embargo, todavía mantienes el beneficio de que no sea requerido el cliente completo de Google Play y de los Servicios de Google Play o microG en el dispositivo.

### Manualmente con notificaciones RSS

Para aplicaciones lanzadas en plataformas como GitHub y GitLab, es posible que puedas añadir un feed RSS a tu [agregador de noticias](/news-aggregators) que te ayudará a llevar un seguimiento de novedades.

![RSS APK](./assets/img/android/rss-apk-light.png#only-light) ![RSS APK](./assets/img/android/rss-apk-dark.png#only-dark) ![Cambios en APKs](./assets/img/android/rss-changes-light.png#only-light) ![Cambios en APKs](./assets/img/android/rss-changes-dark.png#only-dark)

#### GitHub

En GitHub, utilizando [Secure Camera](#secure-camera) como ejemplo navegarías a su [página de lanzamientos](https://github.com/GrapheneOS/Camera/releases) y añadirías `.atom` a la URL:

`https://github.com/GrapheneOS/Camera/releases.atom`

#### GitLab

En GitLab, utilizando [Aurora Store](#aurora-store) como ejemplo, irías a su [repositorio de proyecto](https://gitlab.com/AuroraOSS/AuroraStore) y añadirías `/-/tags?format=atom` a la URL:

`https://gitlab.com/AuroraOSS/AuroraStore/-/tags?format=atom`

#### Comprobando Firmas de las APK

Si descargas archivos APK para instalar manualmente, puedes verificar su firma con la herramienta [`apksigner`](https://developer.android.com/studio/command-line/apksigner), que es parte de Android [build-tools](https://developer.android.com/studio/releases/build-tools).

1. Instala [Java JDK](https://www.oracle.com/java/technologies/downloads/).

2. Descarga las [herramientas de línea de comandos de Android Studio](https://developer.android.com/studio#command-tools).

3. Extrae el archivo descargado:

    ```bash
    unzip commandlinetools-*.zip
    cd cmdline-tools
    ./bin/sdkmanager --sdk_root=./ "build-tools;29.0.3"
    ```

4. Ejecuta el comando de verificación de firmas:

    ```bash
    ./build-tools/29.0.3/apksigner verify --print-certs ../Camera-37.apk
    ```

5. Los hashes resultantes pueden compararse con otra fuente. Algunos desarrolladores como Signal [muestran las firmas](https://signal.org/android/apk/) en su sitio web.

    ```bash
    Signer #1 certificate DN: CN=GrapheneOS
    Signer #1 certificate SHA-256 digest: 6436b155b917c2f9a9ed1d15c4993a5968ffabc94947c13f2aeee14b7b27ed59
    Signer #1 certificate SHA-1 digest: 23e108677a2e1b1d6e6b056f3bb951df7ad5570c
    Signer #1 certificate MD5 digest: dbbcd0cac71bd6fa2102a0297c6e0dd3
    ```

### F-Droid

![Logotipo de F-Droid](assets/img/android/f-droid.svg){ align=right width=120px }

==Nosotros **no** recomendamos F-Droid como forma de obtener aplicaciones.== F-Droid se recomienda a menudo como una alternativa a Google Play, particularmente en la comunidad de privacidad. La opción de añadir repositorios de terceros y no limitarse al jardín amurallado de Google ha dado lugar a su popularidad. Además, F-Droid tiene [compilaciones reproducibles](https://f-droid.org/en/docs/Reproducible_Builds/) para algunas aplicaciones y está dedicado a software libre y de código abierto. Sin embargo, hay [notables problemas](https://privsec.dev/posts/android/f-droid-security-issues/) con el cliente oficial de F-Droid, su control de calidad y cómo construyen, firman y entregan paquetes.

Debido a su proceso de compilación de aplicaciones, las aplicaciones en el repositorio oficial de F-Droid suelen quedarse atrás en las actualizaciones. Los mantenedores de F-Droid también reutilizan IDs de paquetes mientras firman aplicaciones con sus propias claves, lo que no es ideal ya que le da al equipo F-Droid la máxima confianza.

Otros repositorios populares de terceros, como [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) alivian algunas de estas preocupaciones. El repositorio de IzzyOnDroid se construye directamente desde GitHub y es lo mejor para los repositorios propios de los desarrolladores. Sin embargo, no es algo que podamos recomendar, ya que las aplicaciones suelen ser [eliminadas](https://github.com/vfsfitvnm/ViMusic/issues/240#issuecomment-1225564446) de ese repositorio cuando llegan al repositorio principal de F-Droid. Si bien esto tiene sentido (ya que el objetivo de ese repositorio en particular es alojar aplicaciones antes de que sean aceptadas en el repositorio principal de F-Droid), puede dejarte con aplicaciones instaladas que ya no reciben actualizaciones.

Dicho esto, los repositorios [F-Droid](https://f-droid.org/en/packages/) y [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) albergan innumerables aplicaciones, por lo que pueden ser una herramienta útil para buscar y descubrir aplicaciones de código abierto que luego puedes descargar a través de Play Store, Aurora Store, o consiguiendo el APK directamente del desarrollador. Es importante tener en cuenta que algunas aplicaciones de estos repositorios no se han actualizado en años y pueden depender de bibliotecas no compatibles, entre otras cosas, lo que supone un riesgo potencial para la seguridad. Deberías utilizar tu mejor criterio cuando busques nuevas aplicaciones mediante este método.

!!! nota

    En algunos raros casos, el desarrollador de una aplicación sólo la distribuirá a través de F-Droid ([Gadgetbridge](https://gadgetbridge.org/) es un ejemplo de ello). Si realmente necesitas una aplicación como esa, te recomendamos que utilices [Neo Store](https://github.com/NeoApplications/Neo-Store/) en lugar de la aplicación oficial F-Droid para obtenerla.

## Criterios

**Por favor, ten en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que te familiarices con esta lista, antes de decidir utilizar un proyecto y realizar tu propia investigación para asegurarte de que es la elección ideal para ti.

!!! example "Esta sección es nueva"

    Estamos trabajando para establecer criterios definidos para cada sección de nuestro sitio, y esto puede estar sujeto a cambios. Si tienes alguna duda sobre nuestros criterios, por favor [pregunta en nuestro foro](https://discuss.privacyguides.net/latest) y no asumas que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Sistema Operativo

- Debe ser software de código abierto.
- Debe soportar el bloqueo del cargador de arranque con soporte de clave AVB personalizada.
- Debe recibir las principales actualizaciones de Android dentro de 0-1 meses desde su lanzamiento.
- Debe recibir actualizaciones de las funciones de Android (versión menor) en un plazo de 0 a 14 días desde su lanzamiento.
- Debe recibir parches de seguridad periódicos en un plazo de 0 a 5 días desde su publicación.
- **No **debe estar "rooteado" de serie.
- **No** debe tener habilitados los servicios de Google Play por defecto.
- **No** debe requerir modificación del sistema para soportar Google Play Services.

### Dispositivos

- Debe ser compatible con al menos uno de nuestros sistemas operativos personalizados recomendados.
- Debe venderse actualmente nuevo en las tiendas.
- Debe recibir un mínimo de 5 años de actualizaciones de seguridad.
- Debe tener un hardware de elementos seguros dedicado.

### Aplicaciones

- Las aplicaciones en esta página no deben ser aplicables a ninguna otra categoría de software en el sitio.
- Las aplicaciones generales deben ampliar o sustituir las funciones básicas del sistema.
- Las aplicaciones deben recibir actualizaciones y mantenimiento periódicos.

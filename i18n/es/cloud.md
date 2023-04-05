---
title: "Almacenamiento en la Nube"
icon: material/file-cloud
description: Muchos proveedores de almacenamiento en la nube exigen que confíes plenamente en que no mirarán tus archivos. Estas son alternativas privadas.
---

Muchos proveedores de almacenamiento en la nube exigen que confíes plenamente en que no mirarán tus archivos. Las alternativas enumeradas a continuación eliminan la necesidad de confianza mediante la implementación de E2EE seguros.

Si estas alternativas no se ajustan a tus necesidades, te sugerimos que busques utilizar un software de encriptación como [Cryptomator](encryption.md#cryptomator-cloud) con otro proveedor en la nube. Utilizar Cryptomator junto con **cualquier** proveedor de la nube(incluidos estos) puede ser una buena idea para reducir el riesgo de fallos de cifrado en los clientes nativos de un proveedor.

??? Pregunta "¿Buscas Nextcloud?"

    Nextcloud es [todavía una herramienta recomendada](productivity.md) para el autoalojamiento de una suite de gestión de archivos, sin embargo no recomendamos proveedores de almacenamiento Nextcloud de terceros por el momento, porque no [recomendamos](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) la funcionalidad E2EE integrada de Nextcloud para usuarios domésticos.

## Proton Drive

!!! recomendación

    ![Logo de Proton Drive](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** es un proveedor suizo de almacenamiento cifrado en la nube del popular proveedor de correo electrónico cifrado [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Inicio](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Código fuente" }
    
    ??? Descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

La aplicación web Proton Drive ha sido auditada de forma independiente por Securitum en [2021](https://proton.me/blog/security-audit-all-proton-apps), no se han facilitado todos los detalles, pero la carta de certificación de Securitum afirma lo siguiente:

> Los auditores identificaron dos vulnerabilidades de baja gravedad. Además, se notificaron cinco recomendaciones generales. Al mismo tiempo, confirmamos que no se detectaron problemas de seguridad importantes durante el pentest.

Los nuevos clientes móviles de Proton Drive aún no han sido auditados públicamente por un tercero.

## Tresorit

!!! recomendación

    ![Logo de Tresorit](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** es un proveedor húngaro de almacenamiento cifrado en la nube fundado en 2011. Tresorit es propiedad de Swiss Post, el servicio postal nacional de Suiza.
    
    [:octicons-home-16: Inicio](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentación}
    
    ??? Descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit ha recibido varias auditorías de seguridad independientes:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] [Certificación](https://www.certipedia.com/quality_marks/9108644476) de conformidad por TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Pruebas de penetración de Computest
    - Esta revisión evaluó la seguridad del cliente web Tresorit, la aplicación Android, la aplicación Windows y la infraestructura asociada.
    - Computest descubrió dos vulnerabilidades que ya han sido resueltas.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Pruebas de penetración de Ernst & Young.
    - En esta revisión se analizó el código fuente completo de Tresorit y se validó que la implementación coincide con los conceptos descritos en el [libro blanco](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf) de Tresorit.
    - Ernst & Young probó además los clientes web, móvil y de escritorio: "Los resultados de las pruebas no encontraron ninguna desviación de las afirmaciones de confidencialidad de datos de Tresorit".

También han recibido el Sello de Confianza Digital, una certificación de la [Iniciativa Digital Suiza](https://www.swiss-digital-initiative.org/digital-trust-label/) que exige superar [35 criterios](https://digitaltrust-label.swiss/criteria/) relacionados con la seguridad, la privacidad y la fiabilidad.

## Criterios

**Por favor, ten en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que te familiarices con esta lista, antes de decidir utilizar un proyecto y realizar tu propia investigación para asegurarte de que es la elección ideal para ti.

!!! Ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tienes alguna duda sobre nuestros criterios, por favor [pregunta en nuestro foro](https://discuss.privacyguides.net/latest) y no asumas que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Hay muchos factores que se consideran y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Requisitos Mínimos

- Debe aplicar el cifrado de extremo a extremo.
- Debe ofrecer un plan gratuito o un periodo de prueba.
- Debe ser compatible con la autenticación multifactor TOTP o FIDO2, o con los inicios de sesión Passkey.
- Debe ofrecer una interfaz web que admita funciones básicas de gestión de archivos.
- Debe permitir exportar fácilmente todos los archivos/documentos.
- Debe utilizar un cifrado estándar auditado.

### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Los clientes deben ser de código abierto.
- Los clientes deben ser auditados en su totalidad por un tercero independiente.
- Debe ofrecer clientes nativos para Linux, Android, Windows, macOS e iOS.
    - Estos clientes deben integrarse con las herramientas nativas del sistema operativo para los proveedores de almacenamiento en la nube, como la integración de la aplicación Files en iOS, o la funcionalidad DocumentsProvider en Android.
- Debe permitir compartir archivos fácilmente con otros usuarios.
- Debe ofrecer al menos funciones básicas de previsualización y edición de archivos en la interfaz web.

[^1]: [El cumplimiento de la norma ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 se refiere al sistema de gestión de la seguridad de la información de la empresa [](https://en.wikipedia.org/wiki/Information_security_management) y abarca la venta, el desarrollo, el mantenimiento y la asistencia de sus servicios en la nube.

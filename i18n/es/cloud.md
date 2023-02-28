---
title: "Correo Electrónico"
icon: material/file-cloud
---

Muchos proveedores de almacenamiento en la nube exigen que confíes plenamente en que no mirarán tus archivos. Las alternativas que se enumeran a continuación eliminan la necesidad de confianza, ya que le ponen en control de sus datos o implementan E2EE.

Confíe en su proveedor utilizando una alternativa a continuación que es compatible con [cifrado de extremo a extremo (E2EE)](https://es.wikipedia.org/wiki/Cifrado_de_extremo_a_extremo).

??? recommendation

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do not recommend Nextcloud's built-in E2EE functionality for home users.

## Cryptee

!!! recomendación

    ![Logotipo de Proton Drive](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** es un servicio general de almacenamiento de archivos cifrados de extremo a extremo (E2EE) hecho por el proveedor de correo electrónico cifrado [ProtonMail](https://protonmail.com).
    
    [Visita drive.protonmail.com](https://drive.protonmail.com){ .md-button .md-button--primary } [Política de privacidad](https://docs.tildes.net/policies/privacy-policy){ .md-button }
    
    **Descargas**
    - [:fontawesome-brands-github: Fuente](hhttps://https://github.com/ProtonMail/WebClients) [:octicons-home-16: Inicio](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Política de privacidad" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Código fuente" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribuir }
    
    ???

Proton Drive's mobile clients were released in December 2022 and are not yet open-source. Proton has historically delayed their source code releases until after initial product releases, and [plans to](https://www.reddit.com/r/ProtonDrive/comments/zf14i8/comment/izdwmme/?utm_source=share&utm_medium=web2x&context=3) release the source code by the end of 2023. Proton Drive desktop clients are still in development.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

### Minimum Requirements

- Must enforce end-to-end encryption.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multi-factor authentication, or Passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must use standard, audited encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Clients should be open-source.
- Clients should be audited in their entirety by an independent third-party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file-sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.

--8<-- "includes/abbreviations.es.txt"

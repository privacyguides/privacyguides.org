---
title: "Data and Metadata Redaction"
icon: material/tag-remove
---

Cuando compartas archivos, asegúrate de eliminar los metadatos asociados. Los archivos de imagen suelen incluir Datos [Exif](https://es.wikipedia.org/wiki/Exchangeable_image_file_format). A veces, las fotos incluyen incluso coordenadas GPS en los metadatos del archivo.

## PC

### MAT2

!!! recomendación

    ![MAT2 logo](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** es un software gratuito que permite eliminar los metadatos de archivos de imagen, audio, torrent y documentos. Proporciona tanto una herramienta de línea de comandos como una interfaz gráfica de usuario a través de una [extensión para Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), el gestor de archivos por defecto de [GNOME](https://www.gnome.org), y [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), el gestor de archivos por defecto de [KDE](https://kde.org).
    
    En Linux, existe una herramienta gráfica de terceros [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) basada en MAT2 y está [disponible en Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Repositorio](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentación}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Firmware del Router

### ExifEraser (Android)

!!! recomendación

    ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** es una moderna aplicación de borrado de metadatos de imagen sin permisos para Android.
    
    Actualmente admite archivos JPEG, PNG y WebP.
    
    [:octicons-repo-16: Repositorio](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

Los metadatos que son eliminados dependen del tipo de archivo de la imagen:

* **JPEG**: Los metadatos ICC Profile, Exif, Photoshop Image Resources and XMP/ExtendedXMP serán eliminados si existen.
* **PNG**: Los metadatos ICC Profile, Exif y XMP serán eliminados si existen.
* **WebP**: Los metadatos ICC Profile, Exif y XMP serán eliminados si existen.

Tras procesar las imágenes, ExifEraser te proporciona un informe completo sobre lo que se ha eliminado exactamente de cada imagen.

La aplicación ofrece múltiples formas de borrar los metadatos de las imágenes. Estas son:

* Puede compartir una imagen de otra aplicación con ExifEraser.
* A través de la propia aplicación, puedes seleccionar una sola imagen, varias imágenes a la vez o incluso un directorio entero.
* Cuenta con una opción de "Cámara", que utiliza la aplicación de cámara de tu sistema operativo para tomar una foto, y luego elimina los metadatos de la misma.
* Te permite arrastrar fotos desde otra aplicación a ExifEraser cuando ambas están abiertas en modo de pantalla dividida.
* Por último, te permite pegar una imagen desde el portapapeles.

### Metapho (iOS)

!!! recomendación

    ![Metapho logo](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** is a simple and clean viewer for photo metadata such as date, file name, size, camera model, shutter speed, and location.
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recomendación

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** is a free app which can blur sensitive portions of pictures before sharing them online.
    
    [:octicons-home-16: Homepage](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning

    You should **never** use blur to redact [text in images](https://bishopfox.com/blog/unredacter-tool-never-pixelation). If you want to redact text in an image, draw a box over the text. For this, we suggest apps like [Pocket Paint](https://github.com/Catrobat/Paintroid).

## Command-line

### ExifTool

!!! recomendación

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** is the original perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).
    
    It's often a component of other Exif removal applications and is in most Linux distribution repositories.
    
    [:octicons-home-16: Homepage](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "Deleting data from a directory of files"

    ```bash
    exiftool -all= *.file_extension
    ```

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Apps developed for open-source operating systems must be open-source.
- Apps must be free and should not include ads or other limitations.

--8<-- "includes/abbreviations.es.txt"

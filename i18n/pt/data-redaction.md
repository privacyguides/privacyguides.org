---
title: "Ferramentas de encriptação"
icon: material/tag-remove
description: Use these tools to remove metadata like GPS location and other identifying information from photos and files you share.
---

Ao partilhar ficheiros, certifique-se de que remove os metadados associados. Os arquivos de imagem geralmente incluem [EXIF](https://en.wikipedia.org/wiki/Exif) dados. As fotos às vezes até incluem [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) coordenadas nos metadados do arquivo.

## Desktop

### ExifCleaner

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![MAT2 logo](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** is free software, which allows the metadata to be removed from image, audio, torrent, and document file types. Ele suporta processamento em lote de vários núcleos e modo escuro.
    
    [Visite exifcleaner.com](https://exifcleaner.com){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-github: Source](https://github.com/szTheory/exifcleaner)
    
    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobile

### Exif Scrambled Exif

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** is a modern, permissionless image metadata erasing application for Android.
    
    Pode remover dados [EXIF](https://en.wikipedia.org/wiki/Exif) para muitos formatos de arquivo e foi traduzido para [many](https://gitlab.com/juanitobananas/scrambled-exif/-/tree/master/app/src/main/res) idiomas.
    
    [Visite gitlab.com](https://gitlab.com/juanitobananas/scrambled-exif){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.jarsilio.android.scrambledeggsif)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.jarsilio.android.scrambledeggsif)
    - [:fontawesome-brands-gitlab: Source](https://gitlab.com/juanitobananas/scrambled-exif) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

The metadata that is erased depends on the image's file type:

* **JPEG**: ICC Profile, Exif, Photoshop Image Resources and XMP/ExtendedXMP metadata will be erased if it exists.
* **PNG**: ICC Profile, Exif and XMP metadata will be erased if it exists.
* **WebP**: ICC Profile, Exif and XMP metadata will be erased if it exists.

After processing the images, ExifEraser provides you with a full report about what exactly was removed from each image.

The app offers multiple ways to erase metadata from images. 17.1 e 18.1 característica GrapheneOS por rede completa [randomização MAC](https://en.wikipedia.org/wiki/MAC_address#Randomization) opção, e [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) controlo, e reinicialização automática/Wi-Fi/Bluetooth [opções de timeout](https://grapheneos.org/features).

* You can share an image from another application with ExifEraser.
* Through the app itself, you can select a single image, multiple images at once, or even an entire directory.
* It features a "Camera" option, which uses your operating system's camera app to take a photo, and then it removes the metadata from it.
* It allows you to drag photos from another app into ExifEraser when they are both open in split-screen mode.
* Lastly, it allows you to paste an image from your clipboard.

### Imagepipe

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Metapho logo](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** is a simple and clean viewer for photo metadata such as date, file name, size, camera model, shutter speed, and location.
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** is a free app which can blur sensitive portions of pictures before sharing them online.
    
    [:octicons-home-16: Homepage](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Source Code" }
    
    ??? Isto significa que não requer permissão para aceder directamente a conteúdos ou ficheiros.

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    ![logotipo PrivacyBlur](/assets/img/android/privacyblur.svg){ align=right }
    
    **PrivacyBlur*** é uma aplicação gratuita que pode desfocar porções sensíveis de imagens antes de as partilhar online. [Visite privacyblur.app](https://privacyblur.app/){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.mathema.privacyblur/)
    - [:fontawesome-brands-github: GitHub](https://github.com/MATHEMA-GmbH/privacyblur) For this, we suggest apps like [Pocket Paint](https://github.com/Catrobat/Paintroid).

## Linha de comando

### Metapho

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** is the original perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).
    
    Foi traduzido para [many](https://codeberg.org/Starfish/Imagepipe#translations) idiomas.
    
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

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

- Apps developed for open-source operating systems must be open-source.
- Apps must be free and should not include ads or other limitations.

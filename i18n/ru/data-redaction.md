---
title: "Инструменты для шифрования"
icon: material/tag-remove
---

Когда вы делитесь с кем-то файлами, то не забудьте удалить связанные с ними метаданные. Файлы изображений обычно содержат [данные EXIF](https://ru.wikipedia.org/wiki/Exif). Иногда фотографии даже включают ваши [GPS](https://ru.wikipedia.org/wiki/GPS) координаты в метаданные файла.

## Для компьютеров

### ExifCleaner

!!! recommendation

    ![MAT2 logo](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** is free software, which allows the metadata to be removed from image, audio, torrent, and document file types. Он поддерживает многоядерную обработку нескольких файлов одновременно, а также темную тему.
    
    [Посетить exifcleaner.com](https://exifcleaner.com){ .md-button .md-button--primary }
    
    downloads
    
        - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-github: Исходный код](https://github.com/szTheory/exifcleaner) downloads
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Прошивки для роутера

### Scrambled Exif

!!! recommendation

    ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** is a modern, permissionless image metadata erasing application for Android.
    
    Он может удалять данные [EXIF](https://ru.wikipedia.org/wiki/Exif) из многих форматов файлов и переведен на [множество](https://gitlab.com/juanitobananas/scrambled-exif/-/tree/master/app/src/main/res) языков.
    
    [Перейти на gitlab.com](https://gitlab.com/juanitobananas/scrambled-exif){ .md-button .md-button--primary } downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

The metadata that is erased depends on the image's file type:

* **JPEG**: ICC Profile, Exif, Photoshop Image Resources and XMP/ExtendedXMP metadata will be erased if it exists.
* **PNG**: ICC Profile, Exif and XMP metadata will be erased if it exists.
* **WebP**: ICC Profile, Exif and XMP metadata will be erased if it exists.

After processing the images, ExifEraser provides you with a full report about what exactly was removed from each image.

The app offers multiple ways to erase metadata from images. recommendation

* You can share an image from another application with ExifEraser.
* Through the app itself, you can select a single image, multiple images at once, or even an entire directory.
* It features a "Camera" option, which uses your operating system's camera app to take a photo, and then it removes the metadata from it.
* It allows you to drag photos from another app into ExifEraser when they are both open in split-screen mode.
* Lastly, it allows you to paste an image from your clipboard.

### Imagepipe

!!! recommendation

    ![Metapho logo](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** is a simple and clean viewer for photo metadata such as date, file name, size, camera model, shutter speed, and location.
    
    [Перейти на codeberg.org](https://codeberg.org/Starfish/Imagepipe){ .md-button .md-button--primary } downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** is a free app which can blur sensitive portions of pictures before sharing them online.
    
    [:octicons-home-16: Homepage](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! note

    You should **never** use blur to redact [text in images](https://bishopfox.com/blog/unredacter-tool-never-pixelation). If you want to redact text in an image, draw a box over the text. For this, we suggest apps like [Pocket Paint](https://github.com/Catrobat/Paintroid).

## Шифрование через командную строку

### Metapho

!!! recommendation

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** is the original perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).
    
    Оно переведено на [множество](https://codeberg.org/Starfish/Imagepipe#translations) языков.
    
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

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Apps developed for open-source operating systems must be open-source.
- Apps must be free and should not include ads or other limitations.

--8<-- "includes/abbreviations.ru.txt"

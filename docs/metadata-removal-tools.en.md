---
title: "Metadata Removal Tools"
icon: material/tag-remove
---
When sharing files, be sure to remove associated metadata. Image files commonly include [Exif](https://en.wikipedia.org/wiki/Exif) data. Photos sometimes even include GPS coordinates in the file metadata.

## Desktop

### ExifCleaner

!!! recommendation

    ![ExifCleaner logo](assets/img/metadata-removal/exifcleaner.svg){ align=right }

    **ExifCleaner** is a freeware, open source graphical app that uses [ExifTool](https://exiftool.org) to remove Exif metadata from images, videos, and PDF documents using a simple drag and drop interface. It supports multi-core batch processing and dark mode.

    [:octicons-home-16: Homepage](https://exifcleaner.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/szTheory/exifcleaner#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/szTheory/exifcleaner){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)

### MAT2

!!! recommendation

    ![MAT2 logo](assets/img/metadata-removal/mat2.svg){ align=right }

    **MAT2** is free software, which allows the metadata to be removed from image, audio, torrent, and document file types. It provides both a command line tool and a graphical user interface via an [extension for Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), the default file manager of [GNOME](https://www.gnome.org), and [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), the default file manager of [KDE](https://kde.org).

    On Linux, a third party graphical tool [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) powered by MAT2 exists and is [available on Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).

    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://pypi.org/project/mat2)
        - [:fontawesome-brands-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:fontawesome-brands-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobile

### ExifEraser (Android)

!!! recommendation

    ![ExifEraser logo](assets/img/metadata-removal/exiferaser.svg){ align=right }

    **ExifEraser** is a modern, permissionless image metadata erasing application for Android.

    It currently supports JPEG, PNG and WebP files.

    [:octicons-repo-16: Repository](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Source Code" }

    ??? downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:fontawesome-brands-android: IzzyOnDroid (APK)](https://android.izzysoft.de/repo/apk/com.none.tom.exiferaser)
        - [:fontawesome-brands-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)
       
The metadata that is erased depends on the image's file type:
        
* **JPEG**: ICC Profile, Exif, Photoshop Image Resources and XMP/ExtendedXMP metadata will be erased if it exists.
* **PNG**: ICC Profile, Exif and XMP metadata will be erased if it exists.
* **WebP**: ICC Profile, Exif and XMP metadata will be erased if it exists.
        
After processing the images, ExifEraser provides you with a full report about what exactly was removed from each image.

The app offers multiple ways to erase metadata from images. Namely:
        
* You can share an image from another application with ExifEraser.
* Through the app itself, you can select a single image, multiple images at once, or even an entire directory.
* It features a "Camera" option, which uses your operating system's camera app to take a photo, and then it removes the metadata from it.
* It allows you to drag photos from another app into ExifEraser when they are both open in split-screen mode.
* Lastly, it allows you to paste an image from your clipboard.

### Metapho (iOS)

!!! recommendation

    ![Metapho logo](assets/img/metadata-removal/metapho.jpg){ align=right }

    Metapho is a simple and clean viewer for photo metadata such as date, file name, size, camera model, shutter speed, and location.
    
    Metapho is closed source, however we recommend it due to the few choices there are for iOS.

    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }

    ??? downloads

        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/metapho/id914457352)

## Command-line

### ExifTool

!!! recommendation

    ![ExifTool logo](assets/img/metadata-removal/exiftool.png){ align=right }

    **ExifTool** is the original perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).

    It's often a component of other Exif removal applications and is in most Linux distribution repositories.

    [:octicons-home-16: Homepage](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://exiftool.org)
        - [:fontawesome-brands-apple: macOS](https://exiftool.org)
        - [:fontawesome-brands-linux: Linux](https://exiftool.org)

!!! example "Deleting data from a directory of files"

    ```bash
    exiftool -all= *.file_extension
    ```

--8<-- "includes/abbreviations.en.md"

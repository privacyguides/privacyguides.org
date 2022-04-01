---
title: Metadata Removal Tools
icon: material/tag-remove
---
When sharing files, be sure to remove associated metadata. Image files commonly include [EXIF](https://en.wikipedia.org/wiki/Exif) data. Photos sometimes even include [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) coordinates in the file metadata.

## Desktop

### MAT2
!!! recommendation

    ![MAT2 logo](/assets/img/metadata-removal/mat2.svg){ align=right }

    **MAT2** is free software, which allows the metadata to be removed from image, audio, torrent, and document file types. It provides both a command line tool and a graphical user interface via an [extension for Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), the default file manager of [GNOME](https://www.gnome.org), and [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), the default file manager of [KDE](https://kde.org).

    For Linux users, a third party graphical tool [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) powered by MAT2 exists and is [available on Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).

    [Visit 0xacab.org](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://pypi.org/project/mat2)
    - [:fontawesome-brands-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
    - [:fontawesome-brands-linux: Linux](https://pypi.org/project/mat2)
    - [:fontawesome-solid-earth-americas: Web](https://0xacab.org/jvoisin/mat2#web-interface)
    - [:fontawesome-brands-gitlab: Source](https://0xacab.org/jvoisin/mat2)

### ExifCleaner
!!! recommendation

    ![ExifCleaner logo](/assets/img/metadata-removal/exifcleaner.svg){ align=right }

    **ExifCleaner** is a freeware, open source graphical app that uses [ExifTool](https://exiftool.org) to remove [EXIF](https://en.wikipedia.org/wiki/Exif) metadata from images, videos, and PDF documents using a simple drag and drop interface. It supports multi-core batch processing and dark mode.

    [Visit exifcleaner.com](https://exifcleaner.com){ .md-button .md-button--primary } [Privacy Policy](https://bitwarden.com/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-github: Source](https://github.com/szTheory/exifcleaner)

## Mobile

### Scrambled Exif
!!! recommendation

    ![Scrambled Exif logo](/assets/img/metadata-removal/scrambled-exif.svg){ align=right }

    **Scrambled Exif** is a metadata removal tool for Android. It can remove [EXIF](https://en.wikipedia.org/wiki/Exif) data for many file formats and has been translated into [many](https://gitlab.com/juanitobananas/scrambled-exif/-/tree/master/app/src/main/res) languages.

    [Visit gitlab.com](https://gitlab.com/juanitobananas/scrambled-exif){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.jarsilio.android.scrambledeggsif)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.jarsilio.android.scrambledeggsif)
    - [:fontawesome-brands-gitlab: Source](https://gitlab.com/juanitobananas/scrambled-exif)

### Imagepipe
!!! recommendation

    ![Imagepipe logo](/assets/img/metadata-removal/imagepipe.svg){ align=right }

    **Imagepipe** is a a paint app for Android that can be used to redact photos and also delete [EXIF](https://en.wikipedia.org/wiki/Exif) metadata. It has been translated into [many](https://codeberg.org/Starfish/Imagepipe#translations) languages.

    !!! info
        Imagepipe is only available from F-Droid and not in Google Play. If you're looking for a paint app in Google Play we suggest [Pocket Paint](https://play.google.com/store/apps/details?id=org.catrobat.paintroid).

    [Visit codeberg.org](https://codeberg.org/Starfish/Imagepipe){ .md-button .md-button--primary }

    **Downloads**
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.jarsilio.android.scrambledeggsif)
    - [:fontawesome-brands-git: Source](https://codeberg.org/Starfish/Imagepipe)

### Metapho
!!! recommendation

    ![Metapho logo](/assets/img/metadata-removal/metapho.jpg){ align=right }

    Metapho is a simple and clean viewer for photo metadata such as date, file name, size, camera model, shutter speed, and location.

    !!! attention
        Metapho is closed source. We recommend it, due to the few choices there are for iOS devices.

    [Visit zininworks.com)](https://zininworks.com/metapho){ .md-button .md-button--primary } [Privacy Policy](https://zininworks.com/privacy/){ .md-button }

    **Downloads**
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/metapho/id914457352)

## Command-line
### Exiftool
!!! recommendation

    ![Exiftool logo](/assets/img/metadata-removal/exiftool.png){ align=right }

    **Exiftool** is the [original](https://en.wikipedia.org/wiki/ExifTool) perl library and command-line application for reading, writing, and editing meta information (EXIF, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).

    It's often a component of other EXIF removal applications and is in most Linux distribution repositories.

    To delete data from a directory of files:
    ```
    exiftool -all= *.file_extension
    ```

    [Visit exiftool.org](https://exiftool.org){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://exiftool.org)
    - [:fontawesome-brands-apple: macOS](https://exiftool.org)
    - [:fontawesome-brands-linux: Linux](https://exiftool.org)
    - [:fontawesome-brands-git: Source](https://sourceforge.net/projects/exiftool)
    - [:fontawesome-brands-github: Source](https://github.com/exiftool/exiftool)

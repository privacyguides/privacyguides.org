---
title: "Outils de chiffrement"
icon: material/tag-remove
---

Lorsque vous partagez des fichiers, veillez à supprimer les métadonnées associées. Les fichiers d'image comprennent généralement des données [Exif](https://en.wikipedia.org/wiki/Exif) . Les photos comportent parfois même des coordonnées GPS dans les métadonnées du fichier.

## Bureau

### MAT2

!!! recommendation

    ![Logo ExifCleaner](assets/img/data-redaction/exifcleaner.svg){ align=right }
    
    **ExifCleaner** est une application graphique gratuite et open-source qui utilise [ExifTool](https://exiftool.org) pour supprimer les métadonnées Exif des images, vidéos et documents PDF à l'aide d'une interface simple de type glisser-déposer. Il prend en charge le traitement par lots multi-cœurs et le mode sombre.
    
    [:octicons-home-16: Page d'accueil](https://exifcleaner.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/szTheory/exifcleaner#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/szTheory/exifcleaner){ .card-link title="Code Source" }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
        - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)

### MAT2

!!! recommendation

    ![Logo MAT2](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** est un logiciel gratuit, qui permet de supprimer les métadonnées des types de fichiers image, audio, torrent et document. Il fournit à la fois un outil en ligne de commande et une interface utilisateur graphique via une [extension pour Nautilus] (https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), le gestionnaire de fichiers par défaut de [GNOME](https://www.gnome.org), et [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), le gestionnaire de fichiers par défaut de [KDE](https://kde.org).
    
    Sous Linux, un outil graphique tiers [Metadata Cleaner] (https://gitlab.com/rmnvgr/metadata-cleaner) fonctionnant avec MAT2 existe et est [disponible sur Flathub] (https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Dépôt](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Code Source" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Micrologiciel du Routeur

### Scrambled Exif

!!! recommendation

    ! [Logo ExifEraser](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** est une application moderne d'effacement des métadonnées d'image sans permission pour Android.
    
    Il peut supprimer les données Exif pour de nombreux formats de fichiers et a été traduit en [beaucoup](https://gitlab.com/juanitobananas/scrambled-exif/-/tree/master/app/src/main/res) de langues.
    
    [Infos du Projet](https://gitlab.com/juanitobananas/scrambled-exif#scrambled-exif){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:simple-android: IzzyOnDroid (APK)](https://android.izzysoft.de/repo/apk/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

Les métadonnées qui sont effacées dépendent du type de fichier de l'image:

* **JPEG**: Les métadonnées ICC Profile, Exif, Photoshop Image Resources et XMP/ExtendedXMP seront effacées si elles existent.
* **PNG**: Les métadonnées ICC Profile, Exif et XMP seront effacées si elles existent.
* **WebP**: les métadonnées ICC Profile, Exif et XMP seront effacées si elles existent.

Après avoir traité les images, ExifEraser vous fournit un rapport complet sur ce qui a été exactement supprimé de chaque image.

L'application offre plusieurs façons d'effacer les métadonnées des images. warning

* Vous pouvez partager une image depuis une autre application avec ExifEraser.
* Par l'intermédiaire de l'application elle-même, vous pouvez sélectionner une seule image, plusieurs images à la fois, ou même un répertoire entier.
* Elle comporte une option "Appareil photo", qui utilise l'application appareil photo de votre système d'exploitation pour prendre une photo, puis en supprime les métadonnées.
* Il vous permet de faire glisser des photos d'une autre application dans ExifEraser lorsque les deux sont ouvertes en mode écran partagé.
* Enfin, il vous permet de coller une image à partir de votre presse-papiers.

### Imagepipe

!!! recommendation

    ![Logo Metapho](assets/img/data-redaction/metapho.jpg){ align=right }
    
    Metapho est une visionneuse simple et propre pour les métadonnées des photos telles que la date, le nom du fichier, la taille, le modèle d'appareil photo, la vitesse d'obturation et le lieu.
    
    [Infos du Projet](https://codeberg.org/Starfish/Imagepipe#imagepipe){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur (Android)

!!! recommendation

    ![Logo PrivacyBlur](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** est une application gratuite qui permet de brouiller les parties sensibles des photos avant de les partager en ligne.
    
    [:octicons-home-16: Page d'accueil](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Code Source" }
    
    ??? downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.mathema.privacyblur/)

!!! warning

    Vous ne devez **jamais** utiliser le flou pour expurger [du texte dans les images] (https://bishopfox.com/blog/unredacter-tool-never-pixelation). Si vous voulez expurger du texte dans une image, dessinez une case sur le texte. Pour cela, nous vous suggérons [Pocket Paint] (https://github.com/Catrobat/Paintroid) ou [Imagepipe](https://codeberg.org/Starfish/Imagepipe).

## Ligne de commande

### Metapho

!!! recommendation

    ![Logo ExifTool](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** est la bibliothèque perl originale et l'application en ligne de commande pour lire, écrire et modifier les méta-informations (Exif, IPTC, XMP, etc.) dans une grande variété de formats de fichiers (JPEG, TIFF, PNG, PDF, RAW, etc.).
    
    Metapho est à source fermée, mais nous le recommandons en raison du peu de choix disponibles pour iOS.
    
    [:octicons-home-16: Page d'accueil](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Politique de confidentialité" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "Suppression des données d'un répertoire de fichiers"

    ```bash
    exiftool -all= *.file_extension
    ```

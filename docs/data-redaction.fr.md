---
title: "Rédaction de données et de métadonnées"
icon: material/tag-remove
---

Lorsque vous partagez des fichiers, veillez à supprimer les métadonnées associées. Les fichiers d'image comprennent généralement des données [Exif](https://en.wikipedia.org/wiki/Exif) . Les photos comportent parfois même des coordonnées GPS dans les métadonnées du fichier.

## Bureau

### MAT2

!!! recommendation

    ![Logo MAT2](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** est un logiciel gratuit, qui permet de supprimer les métadonnées des types de fichiers image, audio, torrent et document. Il fournit à la fois un outil en ligne de commande et une interface utilisateur graphique via une [extension pour Nautilus] (https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), le gestionnaire de fichiers par défaut de [GNOME](https://www.gnome.org), et [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), le gestionnaire de fichiers par défaut de [KDE](https://kde.org).
    
    Sous Linux, un outil graphique tiers [Metadata Cleaner] (https://gitlab.com/rmnvgr/metadata-cleaner) fonctionnant avec MAT2 existe et est [disponible sur Flathub] (https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Dépôt](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Code source" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobile

### ExifEraser (Android)

!!! recommendation

    ! [Logo ExifEraser](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** est une application moderne d'effacement des métadonnées d'image sans autorisation pour Android.
    
    Il prend actuellement en charge les fichiers JPEG, PNG et WebP.
    
    [:octicons-repo-16: Dépôt](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Code source" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

Les métadonnées qui sont effacées dépendent du type de fichier de l'image :

* **JPEG**: Les métadonnées ICC Profile, Exif, Photoshop Image Resources et XMP/ExtendedXMP seront effacées si elles existent.
* **PNG**: Les métadonnées ICC Profile, Exif et XMP seront effacées si elles existent.
* **WebP**: les métadonnées ICC Profile, Exif et XMP seront effacées si elles existent.

Après avoir traité les images, ExifEraser vous fournit un rapport complet sur ce qui a été exactement supprimé de chaque image.

L'application offre plusieurs façons d'effacer les métadonnées des images. À savoir :

* Vous pouvez partager une image depuis une autre application avec ExifEraser.
* Par l'intermédiaire de l'application elle-même, vous pouvez sélectionner une seule image, plusieurs images à la fois, ou même un répertoire entier.
* Elle comporte une option "Appareil photo", qui utilise l'application appareil photo de votre système d'exploitation pour prendre une photo, puis en supprime les métadonnées.
* Elle vous permet de faire glisser des photos d'une autre application dans ExifEraser lorsque les deux sont ouvertes en mode écran partagé.
* Enfin, elle vous permet de coller une image à partir de votre presse-papiers.

### Metapho (iOS)

!!! recommendation

    ![Logo Metapho](assets/img/data-redaction/metapho.jpg){ align=right }
    
    Metapho est une visionneuse simple et propre pour les métadonnées des photos telles que la date, le nom du fichier, la taille, le modèle d'appareil photo, la vitesse d'obturation et le lieu.
    
    [:octicons-home-16: Page d'accueil](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Politique de confidentialité" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![Logo PrivacyBlur](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** est une application gratuite qui permet de brouiller les parties sensibles des photos avant de les partager en ligne.
    
    [:octicons-home-16: Page d'accueil](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Code source" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning "Avertissement"

    Vous ne devez **jamais** utiliser le flou pour expurger [du texte dans les images] (https://bishopfox.com/blog/unredacter-tool-never-pixelation). Si vous voulez expurger du texte dans une image, dessinez une case sur le texte. Pour cela, nous vous suggérons [Pocket Paint] (https://github.com/Catrobat/Paintroid) ou [Imagepipe](https://codeberg.org/Starfish/Imagepipe).

## Ligne de commande

### ExifTool

!!! recommendation

    ![Logo ExifTool](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** est la bibliothèque perl originale et l'application en ligne de commande pour lire, écrire et modifier les méta-informations (Exif, IPTC, XMP, etc.) dans une grande variété de formats de fichiers (JPEG, TIFF, PNG, PDF, RAW, etc.).
    
    Elle est souvent un composant d'autres applications de suppression d'Exif et se trouve dans les dépôts de la plupart des distributions Linux.
    
    [:octicons-home-16: Page d'accueil](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Code source" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribuer }
    
    ??? downloads "Téléchagements"
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "Suppression des données d'un répertoire de fichiers"

    ```bash
    exiftool -all= *.extension_de_fichier
    ```

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

- Les applications développées pour les systèmes d'exploitation open source doivent être open source.
- Les applications doivent être gratuites et ne doivent pas comporter de publicités ou d'autres limitations.

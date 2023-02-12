---
title: "Rimozione di dati e metadati"
icon: material/tag-remove
---

Quando vengono condivisi file, è importante rimuovere i relativi metadata. I file immagine includono comunemente dati [Exif](https://it.wikipedia.org/wiki/Exif). I metadata delle foto, a volte, includono anche le coordinate GPS.

## Desktop

### ExifCleaner

!!! recommendation

    ![Logo ExifCleaner](assets/img/data-redaction/exifcleaner.svg){ align=right }
    
    **ExifCleaner** è un'applicazione grafica freeware e open-source che utilizza [ExifTool](https://exiftool.org) per rimuovere i metadati Exif da immagini, video e documenti PDF utilizzando una semplice interfaccia di trascinamento. Supporta l'elaborazione multi-core di gruppo e il tema scuro.
    
    [:octicons-home-16: Pagina principale](https://exifcleaner.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/szTheory/exifcleaner#readme){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/szTheory/exifcleaner){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/szTheory/exifcleaner/releases)
        - [:simple-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
        - [:simple-linux: Linux](https://github.com/szTheory/exifcleaner/releases)

### MAT2

!!! recommendation

    ![Logo MAT2](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** è un software gratuito che consente di rimuovere i metadati da file immagine, audio, torrent e documenti. Fornisce sia uno strumento a riga di comando che un'interfaccia utente grafica tramite un [estensione per Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), il file manager predefinito di [GNOME](https://www.gnome.org) e [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), il file manager predefinito di [KDE](https://kde.org).
    
    Su Linux, esiste uno strumento grafico di terze parti [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) basato su MAT2 ed è [disponibile su Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentazione}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobile

### ExifEraser (Android)

!!! recommendation

    ![Logo ExifEraser](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** è un'applicazione moderna e senza permessi per la cancellazione dei metadati delle immagini per Android.
    
    Attualmente supporta file JPEG, PNG e WebP.
    
    [:octicons-repo-16: Repository](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

I metadati cancellati dipendono dal tipo di file dell'immagine:

* **JPEG**: i metadati del profilo ICC, Exif, Photoshop Image Resources e XMP/ExtendedXMP verranno cancellati se esistenti.
* **PNG**: i metadati del profilo ICC, Exif e XMP saranno cancellati se esistenti.
* **WebP**: i metadati del profilo ICC, Exif e XMP verranno cancellati se esistenti.

Dopo l'elaborazione delle immagini, ExifEraser fornisce un rapporto completo su cosa è stato rimosso esattamente da ogni immagine.

L'applicazione offre diversi modi per cancellare i metadati dalle immagini. Vale a dire:

* È possibile condividere un'immagine da un'altra applicazione con ExifEraser.
* Attraverso l'applicazione stessa, è possibile selezionare una singola immagine, più immagini contemporaneamente o persino un'intera directory.
* È dotata di un'opzione "Fotocamera" che utilizza l'app fotocamera del sistema operativo per scattare una foto e poi ne rimuove i metadati.
* Consente di trascinare le foto da un'altra applicazione in ExifEraser quando entrambe sono aperte in modalità split-screen.
* Infine, consente di incollare un'immagine dagli appunti.

### Metapho (iOS)

!!! recommendation

    ![Logo Metapho](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** è un visualizzatore semplice e pulito per i metadati delle foto, come data, nome del file, dimensioni, modello di fotocamera, velocità dell'otturatore e posizione.
    
    [:octicons-home-16: Pagina principale](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Informativa sulla privacy" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** è un'applicazione gratuita che consente di sfocare le parti sensibili delle immagini prima di condividerle online.
    
    [:octicons-home-16: Pagina principale](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning

    Non si deve **mai** usare la sfocatura per nascondere [il testo nelle immagini] (https://bishopfox.com/blog/unredacter-tool-never-pixelation). Se desideri eliminare il testo di un'immagine, disegna un riquadro sopra il testo. A questo scopo, suggeriamo applicazioni come [Pocket Paint](https://github.com/Catrobat/Paintroid).

## Linea di comando

### ExifTool

!!! recommendation

    ![Logo ExifTool](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** è l'originale libreria perl e applicazione a riga di comando per leggere, scrivere e modificare i metadati (Exif, IPTC, XMP e altro) in un'ampia varietà di formati di file (JPEG, TIFF, PNG, PDF, RAW e altro).
    
    Spesso è usato come un componente di altre applicazioni di rimozione Exif ed è presente nei repository della maggior parte delle distribuzioni Linux.
    
    [:octicons-home-16: Pagina principale](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "Rimozione di metadati dai file di una cartella"

    ```bash
    exiftool -all= *.file_extension
    ```

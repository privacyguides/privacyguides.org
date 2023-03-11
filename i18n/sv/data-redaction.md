---
title: "Redigering av data och metadata"
icon: material/tag-remove
description: Use these tools to remove metadata like GPS location and other identifying information from photos and files you share.
---

När du delar filer ska du se till att ta bort tillhörande metadata. Bildfiler innehåller vanligtvis [Exif](https://en.wikipedia.org/wiki/Exif) data. Foton innehåller ibland även GPS-koordinater i filmetadata.

## Skrivbord

### MAT2

!!! recommendation

    ![MAT2-logotyp](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** är en gratis programvara som gör det möjligt att ta bort metadata från bild-, ljud-, torrent- och dokumentfiler. Den tillhandahåller både ett kommandoradsverktyg och ett grafiskt användargränssnitt via ett [tillägg för Nautilus] (https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), standardfilhanteraren för [GNOME](https://www.gnome.org), och [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), standardfilhanteraren för [KDE](https://kde.org).
    
    På Linux finns ett grafiskt verktyg från tredje part [Metadata Cleaner] (https://gitlab.com/rmnvgr/metadata-cleaner) som drivs av MAT2 och är [tillgängligt på Flathub] (https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Source Code" }
    
    ??? nedladdningar
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobil

### ExifEraser (Android)

!!! recommendation

    ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** är ett modernt program för radering av bildmetadata för Android, utan behörighet.
    
    För närvarande stöds JPEG-, PNG- och WebP-filer.
    
    [:octicons-repo-16: Repository](https://github.com/Hackeralert/Picocrypt){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Hackeralert/Picocrypt){ .card-link title="Source Code" }
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

Vilka metadata som raderas beror på bildens filtyp:

* **JPEG**: ICC-profil, Exif, Photoshop Image Resources och XMP/ExtendedXMP-metadata raderas om de finns.
* **PNG**: ICC-profil, Exif- och XMP-metadata raderas om de finns.
* **PNG**: ICC-profil, Exif- och XMP-metadata raderas om de finns.

Efter att ha behandlat bilderna ger ExifEraser dig en fullständig rapport om exakt vad som togs bort från varje bild.

Appen erbjuder flera sätt att radera metadata från bilder. Namn:

* Du kan dela en bild från ett annat program med ExifEraser.
* I appen kan du välja en enda bild, flera bilder samtidigt eller till och med en hel katalog.
* Den har ett "kamera"-alternativ som använder operativsystemets kameraapp för att ta ett foto och sedan tar bort metadata från det.
* Du kan dra foton från en annan app till ExifEraser när båda är öppna i delad skärm.
* Slutligen kan du klistra in en bild från klippbordet.

### Metapho (iOS)

!!! recommendation

    ![Metapho logotyp](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** är en enkel och ren visare för fotometadata som datum, filnamn, storlek, kameramodell, slutartid och plats.
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Sekretesspolicy" }
    
    ??? nedladdningar
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur-logotyp](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    **PrivacyBlur** är en gratis app som kan sudda ut känsliga delar av bilder innan de delas på nätet.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! varning

    Du bör **aldrig** använda oskärpa för att redigera [text i bilder] (https://bishopfox.com/blog/unredacter-tool-never-pixelation). Om du vill redigera text i en bild ritar du en ruta över texten. För detta föreslår vi appar som [Pocket Paint] (https://github.com/Catrobat/Paintroid).

## Kommandorad

### ExifTool

!!! recommendation

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** är det ursprungliga perl-biblioteket och kommandoradstillämpningen för att läsa, skriva och redigera metainformation (Exif, IPTC, XMP med mera) i en mängd olika filformat (JPEG, TIFF, PNG, PDF, RAW med mera).
    
    Det är ofta en del av andra program för att ta bort Exif-filer och finns i de flesta Linuxdistributioners arkiv.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! exempel "Radera data från en katalog med filer"

    ```bash
    exiftool -all= *.file_extension
    ```

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Appar som utvecklas för operativsystem med öppen källkod måste vara med öppen källkod.
- Apparna måste vara gratis och får inte innehålla annonser eller andra begränsningar.

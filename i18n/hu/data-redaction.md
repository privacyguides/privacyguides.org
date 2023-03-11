---
title: "Adat és Metaadat Eltávolítás"
icon: material/tag-remove
description: Use these tools to remove metadata like GPS location and other identifying information from photos and files you share.
---

Fájlok megosztásakor ügyelj a kapcsolódó metaadatok eltávolítsára. A képfájlok gyakran tartalmaznak [Exif](https://en.wikipedia.org/wiki/Exif) adatokat. A fényképek időnként még GPS-koordinátákat is tartalmaznak a fájl metaadataiban.

## Asztal

### MAT2

!!! recommendation

    ![MAT2 logo](assets/img/data-redaction/mat2.svg){ align=right }
    
    A **MAT2** ingyenes szoftver, amely lehetővé teszi a metaadatok eltávolítását kép, hang, torrent és dokumentum fájltípusokból. Egy parancssor eszközt és egy grafilus felhasználói felületet is biztosít egy [Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus) és [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin) bővítményen keresztül, amik közül az előbbi a [GNOME](https://www.gnome.org), az utóbbi a [KDE](https://kde.org) alapértelmezett fájlkezelője.
    
    Linuxon létezik egy harmadik féltől származó grafikus eszköz, a [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner), amely alapját a MAT2 adja, és ez [el is érhető a Flathubon](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: Adattár](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## Mobil

### ExifEraser (Android)

!!! recommendation

    ![ExifEraser logo](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    Az **ExifEraser** egy modern, engedély nélküli képmetaadat-törlő alkalmazás Androidra.
    
    Jelenleg támogatja a JPEG, PNG és WebP fájlokat.
    
    [:octicons-repo-16: Adattár](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

A törlésre kerülő metaadat a kép fájltípusától függ:

* **JPEG**: ICC Profil, Exif, Photoshop Image Resources és XMP/ExtendedXMP metaadatok fognak törlődni, ha vannak.
* **PNG**: ICC Profil, Exif és XMP metaadatok fognak törlődni, ha vannak.
* **WebP**: ICC Profil, Exif és XMP metaadatok fognak törlődni, ha vannak.

A képek feldolgozása után ExifEraser teljes jelentést ad arról, hogy pontosan mit távolított el egyes képekről.

Az alkalmazás többféle módszert nyújt metaadatokat törléséhez a képekről. Név szerint:

* Az megoszthat egy képet egy másik alkalmazásból az ExifEraser-nek.
* Magán az alkalmazáson keresztül egyetlen képet, egyszerre több képet vagy akár egy egész könyvtárat is kiválaszthatsz.
* Rendelkezik egy "Kamera" opcióval, amely az operációs rendszer kameraalkalmazását használja egy fénykép készítéséhez, majd eltávolítja arról a metaadatokat.
* Lehetővé teszi, hogy fényképeket húzz át egy másik alkalmazásból az ExifEraser-be, ha mindkét app osztott képernyős módban van megnyitva.
* Végül, lehetővé teszi egy kép beillesztését a vágólapról.

### Metapho (iOS)

!!! recommendation

    ![Metapho logo](assets/img/data-redaction/metapho.jpg){ align=right }
    
    A **Metapho** egy egyszerű és letisztult megjelenítője fényképek metaadatainak, mint például dátum, fájlnév, méret, fényképező modell, zársebesség és helyszín.
    
    [:octicons-home-16: Honlap](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Adatvédelmi Nyilatkozat" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    A **PrivacyBlur** egy ingyenes alkalmazás, amely képes elmosni képek érzékeny részeit, mielőtt online megosztanád azokat.
    
    [:octicons-home-16: Honlap](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Adatvédelmi Tájékoztató" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning

    **Soha** ne használd a homályosítást [képekben lévő szöveg](https://bishopfox.com/blog/unredacter-tool-never-pixelation) szerkesztésére. Ha egy képen lévő szöveget szeretnél eltávolítani, rajzolj egy négyzetet a szöveg fölé. Ehhez olyan alkalmazásokat ajánlunk, mint a [Pocket Paint](https://github.com/Catrobat/Paintroid).

## Parancssor

### ExifTool

!!! recommendation

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    Az **ExifTool** az eredeti perl könyvtár és parancssor alkalmazás a metainformációk (Exif, IPTC, XMP stb.) olvasására, írására és szerkesztésére a legkülönbözőbb fájlformátumok (JPEG, TIFF, PNG, PDF, RAW stb.) esetében.
    
    Gyakran más Exif eltávolító alkalmazások része, és megtalálható a legtöbb Linux disztribúció addattáraiban.
    
    [:octicons-home-16: Honlap](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "Adatok törlése egy fájlkönyvtárból"

    ```bash
    exiftool -all= *.fájl_kiterjesztés
    ```

## Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** Az [alap kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

- Nyílt forráskódú operációs rendszerekre fejlesztett alkalmazásoknak nyílt forráskódúnak kell lenniük.
- Az alkalmazásoknak ingyenesnek kell lenniük, és nem tartalmazhatnak reklámokat vagy egyéb korlátozásokat.

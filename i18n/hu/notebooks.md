---
title: "Jegyzetfüzetek"
icon: material/notebook-edit-outline
description: These encrypted note-taking apps let you keep track of your notes without giving them to a third-party.
---

Kövesd nyomon jegyzeteid és naplóid anélkül, hogy harmadik félnek adnád át azokat.

Ha jelenleg olyan alkalmazást használsz, mint az Evernote, a Google Keep vagy a Microsoft OneNote, javasoljuk, hogy válassz egy olyan alternatívát, amely támogatja az End-to-End titksoítást.

## Felhő-alapú

### Joplin

!!! recommendation

    ![Joplin logo](assets/img/notebooks/joplin.svg){ align=right }
    
    A **Joplin** egy ingyenes, nyílt forráskódú, teljesen felszerelt jegyzetkezelő és teendő vezető alkalmazás, amely nagyszámú, jegyzetfüzetekbe és címkékbe rendezett markdown jegyzeteket képes kezelni. End-to-End titkosítást kínál, és képes szinkronizálni a Nextcloudon, a Dropboxon és sok máson keresztül is. Evernote és nyílt szöveges jegyzetek egyszerű importálását is lehetővé teszi.
    
    [:octicons-home-16: Honlap](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

A Joplin nem támogatja a jelszavas/PIN-kódos védelmet magához az [alkalmazáshoz vagy egyes jegyzetekhez és jegyzetfüzetekhez](https://github.com/laurent22/joplin/issues/289). Ettől függetlenül az adatok szállítás közben és a szinkronizáció helyén is titkosítva lesznek a főkulcs segítségével. 2023 januárjától a Joplin támogatja a biometrikus alkalmazászárat az [Android](https://joplinapp.org/changelog_android/#android-v2-10-3-https-github-com-laurent22-joplin-releases-tag-android-v2-10-3-pre-release-2023-01-05t11-29-06z) és a [iOS](https://joplinapp.org/changelog_ios/#ios-v12-10-2-https-github-com-laurent22-joplin-releases-tag-ios-v12-10-2-2023-01-20t17-41-13z) rendszerekhez.

### Standard Notes

!!! recommendation

    ![Standard Notes logo](assets/img/notebooks/standard-notes.svg){ align=right }
    
    A **Standard Notes** egy egyszerű és privát jegyzetkezelő alkalmazás, amely megkönnyíti és elérhetővé teszi a feljegyzéseid kezelését bárhol is legyél. Minden platformon End-to-End titkosítást, valamint erőteljes asztali élményt kínál témákkal és egyedi szerkesztőkkel. Emellett [felül is lett vizsgálva egy független fél által (PDF)](https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).
    
    [:octicons-home-16: Honlap](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Cryptee

!!! recommendation

    ![Cryptee logo](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }
    
    A **Cryptee** egy nyílt forráskódú, webalapú End-to-End titkosított dokumentumszerkesztő és fotótároló alkalmazás. A Cryptee egy PWA, ami azt jelenti, hogy minden modern eszközön zökkenőmentesen működik anélkül, hogy minden egyes platformra natív alkalmazás igényelne.
    
    [:octicons-home-16: Honlap](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Adatvédelmi Tájékoztató" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

A Cryptee 100MB tárhelyet kínál ingyenesen, fizetős lehetőséggel, ha többre lenne szükség. A regisztrációhoz nincs szükség e-mailre vagy más személyazonosításra alkalmas információra.

## Helyi Jegyzetfüzetek

### Org-mode

!!! recommendation

    ![Org-mode logo](assets/img/notebooks/org-mode.svg){ align=right }
    
    Az **Org-mode** egy [major mode](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) a GNU Emacs számára. Az Org-mode jegyzetek vezetésére, teendő listák fenttartására, projektek tervezésére és dokumentumok írására szolgál egy gyors és hatékony nyílt szöveges rendszerrel. Szinkronizálás a [fájlszinkronizációs](file-sharing.md#file-sync) eszközökkel lehetséges.
    
    [:octicons-home-16: Honlap](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Közreműködés }

## Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** Az [alap kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

- A klienseknek nyílt forráskódúaknak kell lenniük.
- Minden felhőszinkronizálás funkciónak End-to-End titkosítottnak kell lennie.
- Támogatnia kell dokumentumok szabványos formátumba történő exportálását.

### Legjobb Esetben

- A helyi mentési/szinkronizálási funkcióknak támogatniuk kell a titkosítást.
- A felhőalapú platformoknak támogatniuk kell a dokumentumok megosztását.

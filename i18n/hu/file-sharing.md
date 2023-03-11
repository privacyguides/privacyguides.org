---
title: "Fájlmegosztás és Szinkronizálás"
icon: material/share-variant
description: Fedezd fel, hogyan oszthatod meg fájljaid privát módon készülékek között, barátaiddal és családtagjaiddal vagy névtelenül online.
---

Fedezd fel, hogyan oszthatod meg fájljaid privát módon készülékek között, barátaiddal és családtagjaiddal vagy névtelenül online.

## Fájlmegosztás

### Send

!!! recommendation

    ![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }
    
    A **Send** a Mozilla megszűnt Firefox Send szolgáltatásának egy forkja, amely lehetővé teszi, hogy fájlokat küldj másoknak egy link segítségével. A fájlok az eszközön kerülnek titkosításra, így a szerver nem tudja azokat elolvasni, és választhatóan jelszóval is védhetők. A Send karbantartója egy [publikus instance-et](https://send.vis.ee/) üzemeltet. Használhatsz más nyilvános instanceket, vagy magad is üzemeltetheted a Send-et.
    
    [:octicons-home-16: Honlap](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Publikus Instancek"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Közreműködés }

A Send a webes felületén vagy az [ffsend](https://github.com/timvisee/ffsend) CLI segítségével használható. Ha jól ismered a parancssort, és gyakran küldesz fájlokat, a JavaScript-alapú titkosítás elkerülése érdekében a CLI-kliens használatát javasoljuk. Megadhatod a `--host` flaget, ha egy adott szervert szeretnél használni:

```bash
ffsend upload --host https://send.vis.ee/ FÁJL
```

### OnionShare

!!! recommendation

    ![OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    Az **OnionShare** egy nyílt forráskódú eszköz, amellyel biztonságosan és névtelenül oszthatsz meg bármilyen méretű fájlt. Úgy működik, hogy egy Tor onion szolgáltatásként elérhető webszervert indít el, egy kitalálhatatlan URL-címmel együtt, amit megoszthatsz a címzettekkel fájlok letöltéséhez vagy küldéséhez.
    
    [:octicons-home-16: Honlap](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion Szolgáltatás" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** Az [alap kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

- Nem tárolhat visszafejtett adatokat távoli szerveren.
- Nyílt forráskódú szoftvernek kell lennie.
- Linux, macOS és Windows kliensekkel, vagy webes felülettel kell rendelkeznie.

## FreedomBox

!!! recommendation

    ![FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    A **FreedomBox** egy operációs rendszer, amelyet [single-board számítógépen (SBC)](https://en.wikipedia.org/wiki/Single-board_computer) történő futtatásra terveztek. Célja az, hogy megkönnyítse szerveralkalmazások beállítását, amelyeket esetleg magad szeretnél üzemeltetni.
    
    [:octicons-home-16: Honlap](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Közreműködés }

## Fájl Szinkronizálás

### Nextcloud (Kliens-Szerver)

!!! recommendation

    ![Nextcloud logo](assets/img/cloud/nextcloud.svg){ align=right }
    
    A **Nextcloud** egy ingyenes és nyílt forráskódú kliens-szerver szoftvercsomag, amellyel saját fájltárhely-szolgáltatásokat hozhatsz létre egy privát általad ellenőrzött szerveren.
    
    [:octicons-home-16: Honlap](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! danger

    Nem javasoljuk az [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) használatát a Nextcloudhoz, mivel adatvesztéshez vezethet; ez erősen kísérleti jellegű és nem gyártási minőségű.

### Syncthing (P2P)

!!! recommendation

    ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    A **Syncthing** egy nyílt forráskódú peer-to-peer folyamatos fájlszinkronizáló segédprogram. Két vagy több eszköz közötti fájl szinkronizálásra szolgál helyi hálózaton vagy az interneten keresztül. A Syncthing nem használ központi szervert; a [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1)-t használja az eszközök közötti adatátvitelre. Minden adat TLS-sel van titkosítva.
    
    [:octicons-home-16: Honlap](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Kontribúció }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** Az [alap kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

#### Minimális Követelmények

- Nem igényelhet harmadik féltől származó távoli/felhőalapú szervert.
- Nyílt forráskódú szoftvernek kell lennie.
- Linux, macOS és Windows kliensekkel, vagy webes felülettel kell rendelkeznie.

#### Legjobb Esetben

A legjobb esetben alkalmazott követelményeink azt fejezik ki, hogy mit szeretnénk látni egy tökéletes projekttől ebben a kategóriában. Előfordulhat, hogy ajánlásaink nem tartalmazzák az összes ilyen funkciót, de azok, amelyek igen, magasabb helyen szerepelhetnek, mint mások ezen az oldalon.

- Van mobil kliense iOS és Android rendszerekre, amelyek legalább dokumentum előnézeteket támogatnak.
- Támogatja fényképek biztonsági mentését iOS-ről és Androidról, és opcionálisan támogatja a fájl/mappa szinkronizálást Androidon.

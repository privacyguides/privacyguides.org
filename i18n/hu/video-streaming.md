---
title: "Videó Streamelés"
icon: material/video-wireless
---

A videó streamelő platformok használatakor az az elsődleges veszély, hogy a streaming-szokásaid és feliratkozás listáid felhasználhatók profilalkotásra rólad. Ezeket az eszközöket érdemes keverned egy [VPN](vpn.md)-nel vagy [Tor](https://www.torproject.org/)-ra, hogy megnehezítsd a felhasználás szokásaidról készített profilalkotást.

## LBRY

!!! recommendation

    ![LBRY logo](assets/img/video-streaming/lbry.svg){ align=right }
    
    **A LBRY hálózat** egy decentralizált videómegosztó hálózat. Egy [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-szerű hálózatot használ a videotartalom tárolására, és egy [blockchain](https://wikipedia.org/wiki/Blockchain) hálózatot a videók indexeinek tárolására. Ennek a kialakításnak a fő előnye a cenzúrával szembeni ellenállás.
    
    **A LBRY asztali kliens** segít videókat streamelni a LBRY hálózatról, és a feliratkozás listádat a saját LBRY tárcádban tárolni.
    
    [:octicons-home-16: Honlap](https://lbry.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://lbry.com/privacypolicy){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://lbry.com/faq){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Forráskód" }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! note

    Csak az **LBRY asztali kliens** használata ajánlott, mivel a [Odysee](https://odysee.com) weboldal és az F-Droid, a Play Store, valamint az App Store LBRY kliensei kötelező szinkronizcióval és telemetriával rendelkeznek.

!!! warning

    Videók megtekintése és kiszolgálása közben az IP-címed látható a LBRY-hálózat számára. Fontold meg egy [VPN](vpn.md) vagy a [Tor](https://www.torproject.org) használatát, ha a [védelmi modelled](basics/threat-modeling.md) igényli az IP-címed elrejtését.

A tárcád szinkronizálását a LBRY Inc.-kel **nem ajánljuk**, mivel titkosított pénztárcák szinkronizálása még nem támogatott. Ha szinkronizálod a tárcád a LBRY Inc.-kel, meg kell bennük bíznod, hogy nem nézik meg az feliratkozás listádat, [LBC](https://lbry.com/faq/earn-credits) pénzösszegeidet, vagy nem veszik át az irányítást a csatornád felett.

You can disable *Save hosting data to help the LBRY network* option in :gear: **Settings** → **Advanced Settings**, to avoid exposing your IP address and watched videos when using LBRY for a prolonged period of time.

## Követelmények

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** A [szabványos kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott követelményeket állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a követelményinkkel kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Nem igényelhet egy központi fiókot videók megtekintéséhez.
    - Elfogadható a decentralizált hitelesítés, mint például a mobiltárca privát kulcsán keresztül.

--8<-- "includes/abbreviations.hu.txt"

---
title: "Tor Hálózat"
icon: simple/torproject
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

A **Tor** hálózat egy önkéntesek által üzemeltetett szerverekből álló csoport, amely lehetővé teszi, hogy ingyenesen csatlakozhass, és javíts a magánéleteden, valamint a biztonságodon az Interneten. Személyek és szervezetek a Tor-hálózaton keresztül ".onion rejtett szolgáltatásokkal" is megoszthatnak információkat anélkül, hogy veszélyeztetnék a magánéletüket. Mivel a Tor forgalmat nehéz blokkolni és nyomon követni, a Tor egy hatékony cenzúra megkerülő eszköz.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Honlap }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Szolgáltatás" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Dokumentáció}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Forráskód" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Közreműküdés }

A Tor úgy működik, hogy az internetes forgalmadat ezeken az önkéntesek által üzemeltetett szervereken keresztül irányítja át, ahelyett, hogy közvetlen kapcsolatot létesítene a meglátogatni kívánt oldallal. Ez elrejti, hogy honnan érkezik a forgalom, és a kapcsolat útvonalában egyetlen szerver sem látja a teljes útvonalat, ahonnan a forgalom érkezik és ahová tart, ami azt jelenti, hogy még az általad csatlakozásra használt szerverek sem tudják megtörni az anonimitásodat.

<figure markdown>
  ![Tor útvonal](assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor útvonal](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor útvonal - Az útvonal nodejai csak azokat a szervereket látják, amelyekhez közvetlenül kapcsolódnak, például a "Belépő" node látja a te IP-címedet és a "Közép" node címét, de nem látja, hogy éppen melyik weboldalt látogatod.</figcaption>
</figure>

- [További információ a Tor működéséről :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## Csatlakozás a Torhoz

A Tor-hálózathoz többféleképpen is csatlakozni lehet a készülékedről, a leggyakrabban használt módszer a **Tor Böngésző**, a Firefox egy asztali számítógépekre és Androidra tervezett forkja, ami alkalmas anonim böngészésre. Az alább felsorolt alkalmazásokon kívül léteznek olyan operációs rendszerek is, amelyeket kifejezetten a Tor-hálózathoz való csatlakozásra terveztek, mint például a [Whonix](desktop.md#whonix) [Qubes OS](desktop.md#qubes-os)-en, melyek még nagyobb biztonságot és védelmet nyújtanak, mint a hagyományos Tor böngésző.

### Tor Böngésző

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }
    
    A **Tor Böngésző** a legjobb választás, ha anonimitásra van szükséged, mivel hozzáférést biztosít a Tor-hálózathoz és a Tor-hidakhoz, valamint alapértelmezett beállításokat és bővítményeket tartalmaz, amelyek automatikusan előre beállított biztonsági szintek alapján vannak konfigurálva: *Normál*, *Biztonságosabb* és *Legbiztonságosabb*.
    
    [:octicons-home-16: Honlap](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Szolgáltatás" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Dokumentáció }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! danger

    **Soha** nem telepíts semmilyen további bővítményt a Tor Böngészőre vagy szerkeszd az `about:config` beállításokat, beleértve azokat is, amelyeket a Firefoxhoz javasolunk. A böngésző bővítmények és a nem alap beállítások miatt kitűnsz a Tor-hálózat többi felhasználója közül, így téve a böngésződ könnyebben [fingerprintelhetővé](https://support.torproject.org/glossary/browser-fingerprinting).

A Tor böngészőt úgy tervezték, hogy megakadályozza az fingerprintelést, vagyis a beazonosításodat a böngésző konfigurációja alapján. Ezért elengedhetetlen, hogy **ne** módosítsd a böngészőt az alapértelmezett [biztonsági szinteken](https://tb-manual.torproject.org/security-settings/) túl.

### Orbot

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    Az **Orbot** egy ingyenes Tor VPN okostelefonokhoz, amely a Tor hálózaton keresztül irányítja az eszközödön lévő bármely alkalmazás forgalmát.
    
    [:octicons-home-16: Honlap](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Adatvédelmi Nyilatkozat" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

A forgalomelemző támadásokkal szembeni ellenállás érdekében fontold meg a *Célcím elszigetelés* engedélyezését a :material-menu: → **Beállítások** → **Connectivity** menüpontban. Ez egy teljesen más Tor útvonalat fog használni (különböző közép relay és kilépő nodeokokat) minden egyes domainhez, amelyhez csatlakozol.

!!! tip "Tippek Androidhoz"

    Az Orbot képes egyes alkalmazások forgalmát átküldeni egy proxyn, ha azok támogatják a SOCKS vagy a HTTP proxyt. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.
    
    Az Orbot gyakran elavult szokott lenni a Guardian Project [F-Droid adattárjában](https://guardianproject.info/fdroid) és a [Google Playen](https://play.google.com/store/apps/details?id=org.torproject.android), ezért érdemes inkább közvetlenül a [GitHub adattárból](https://github.com/guardianproject/orbot/releases) letölteni.
    
    Minden verzió ugyanazzal az aláírással van tanusítva, így kompatibilisnek kéne egymással lenniük.

## Relayek and Hidak

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    A **Snowflake** lehetővé teszi, hogy sávszélességet adományozz a Tor projektnek azáltal, hogy egy "Snowflake proxy"-t működtetsz a böngésződben.
    
    Azok, akik cenzúra alatt állnak, Snowflake proxykat tudnak használni a Tor-hálózathoz való csatlakozáshoz. A Snowflake egy nagyszerű módja annak, hogy hozzájárulj a hálózathoz, még akkor is, ha nincs meg a technikai tudásod egy Tor relay vagy híd üzemeltetéséhez.
    
    [:octicons-home-16: Honlap](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Közreműködés }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Beágyazott Snowflake"

    A Snowflake-et engedélyezheted a böngésződben, ha a lenti kapcsolóra kattintasz és ==megnyitva hagyod ezt az oldalt==. A Snowflake-et bővítményként is telepítheted, hogy az mindig fusson, amikor a böngésződ nyitva van, azonban a harmadik féltől származó bővítmények hozzáadása növelheti a támadási felületedet.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Ha a beágyazás nem jelenik meg nálad, győződj meg róla, hogy nem blokkolod a harmadik féltől származó keretet a `torproject.org`-ról. Alternatív megoldásként látogasson el [erre az oldalra](https://snowflake.torproject.org/embed.html).</small>

A Snowflake semmilyen módon nem növeli az magánéletedet, és a személyes böngésződön keresztül a Tor-hálózathoz kapcsolódni sem használatos. Ha azonban az internetkapcsolatod nincs cenzúrázva, érdemes megfontolni a futtatását, hogy cenzúrázott hálózatokban élő embereknek is segíts jobb magánéletet elérni. Nem kell aggódnod amiatt, hogy személyek milyen weboldalakhoz férnek hozzá a proxydon keresztül - a látható böngészési IP-címük majd megegyezik a Tor kilépő nodejukkal nem pedig tieddel.

Egy Snowflake proxy futtatása alacsony kockázatú, még inkább, mint egy Tor relay vagy híd futtatása, amelyek már eleve sem különösebben kockázatos vállalkozások. Ettől függetlenül még mindig forgalom kerül átküldésre a hálózatodon ami bizonyos szempontból hatással lehet arra, különösen, ha a hálózatod sávszélessége korlátozott. Győződj meg róla, hogy érted [hogyan működik a Snowflake](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) mielőtt eldöntöd, hogy futtatsz-e proxyt.

--8<-- "includes/abbreviations.hu.txt"

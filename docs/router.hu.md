---
title: "Router Firmware"
icon: material/router-wireless
---

Lejjebb bemutatunk néhány alternatív operációs rendszert, amelyek használhatók routereken, Wi-Fi hozzáférési pontokon stb.

## OpenWrt

!!! recommendation

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    Az **OpenWrt** egy Linux alapú operációs rendszer; elsősorban beágyazott eszközökön használják hálózati forgalom irányítására. Tartalmazza az util-linux, uClibc és BusyBox programokat. Az összes komponens otthoni routerekhez lett optimalizálva.
    
    [:octicons-home-16: Honlap](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Dokumentáció}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Forráskód" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Közreműködés }

Az OpenWrt [hardvertáblázatában](https://openwrt.org/toh/start) ellenőrizheted, hogy az eszközöd támogatott-e.

## OPNsense

!!! recommendation

    ![OPNsense logo](assets/img/router/opnsense.svg){ align=right }
    
    Az **OPNsense** egy nyílt forráskódú, FreeBSD-alapú tűzfal és forgalom irányító platform, amely számos fejlett funkciót tartalmaz, mint például forgalom alakítás, terheléselosztás és VPN-lehetőségek, és számos további funkcióval érhető el bővítmények formájában. Az OPNsense-t általában peremtűzfalként, routerként, vezeték nélküli hozzáférési pontként, DHCP-szerverként, DNS-szerverként és VPN végpontként vetik be.
    
    A pfSense-t általában perem tűzfalként, routerként, vezeték nélküli hozzáférési pontként, DHCP szerverként, DNS szerverként és VPN végpontként telepítik.

Az OPNsense eredetileg a [pfSense](https://en.wikipedia.org/wiki/PfSense) forkjaként lett kifejlesztve, és mindkét projekt arról ismert, hogy ingyenes és megbízható tűzfal disztribúciók, amelyek gyakran csak drága kereskedelmi tűzfalakban található funkciókat kínálnak. A 2015-ben indított OPNsense fejlesztői számos biztonsági és kódminőségi problémára, a Netgate általi többségi pfSense felvásárlásra, valamint a pfSense projekt jövőbeli irányára [hivatkozva](https://docs.opnsense.org/history/thefork.html) a pfSense-el kapcsolatban úgy érezték, hogy ezek miatt az aggályok miatt szükségessé vált egy projekt fork létrehozása.

## Kritériumok

**Tartsd figyelemben, hogy nem állunk kapcsolatban az általunk ajánlott projektek egyikével sem.** A [szabványos kritériumaink mellett](about/criteria.md), egyértelmű követelményrendszert dolgoztunk ki, hogy objektív ajánlásokat tudjunk tenni. Javasoljuk, hogy ismerkedj meg ezzel a listával, mielőtt kiválasztanál egy projektet, és végezz saját kutatásokat, hogy megbizonyosodj arról, hogy ez a megfelelő választás számodra.

!!! example "Ez a szakasz új"

    Azon dolgozunk, hogy meghatározott kritériumokat állapítsunk meg az oldalunk minden egyes szakaszára vonatkozóan, és ez még változhat. Ha bármilyen kérdésed van a kritériumainkkal kapcsolatban, kérjük, [kérdezz a fórumon](https://discuss.privacyguides.net/latest), és ne feltételezd, hogy valamit nem vettünk figyelembe az ajánlásaink elkészítésekor, ha az nem szerepel itt. Számos tényezőt veszünk figyelembe és vitatunk meg, amikor egy projektet ajánlunk, és minden egyes tényező dokumentálása folyamatban lévő munka.

- Nyílt forráskódúnak kell lennie.
- Rendszeres frissítéseket kell kapnia.
- Sokféle hardvert kell támogatnia.

---
title: "Oprogramowanie routera"
icon: material/router-wireless
---

Poniżej wymieniono kilka alternatywnych systemów operacyjnych, które możesz zainstalować na swoim routerze, punkcie dostępowym Wi-Fi itp.

## OpenWrt

!!! rekomendacja

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** to system operacyjny oparty na oprogramowaniu Linux; jest używany głównie w urządzeniach wbudowanych do kierowania ruchem sieciowym. Zawiera util-linux, uClibc oraz BusyBox. Wszystkie komponenty zostały zoptymalizowane pod kątem routerów domowych.
    
    [:octicons-home-16: Strona WWW](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Dokumentacja}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Kod źródłowy" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Wesprzyj }

Zapoznaj się z [listą obsługiwanych urządzeń](https://openwrt.org/toh/start), aby sprawdzić, czy Twoje urządzenie jest obsługiwane.

## OPNsense

!!! rekomendacja

    ![pfSense logo](assets/img/router/pfsense.svg#only-light){ align=right }
    ![pfSense logo](assets/img/router/pfsense-dark.svg#only-dark){ align=right }
    
    pfSense to otwarte oprogramowanie zapory sieciowej/routera bazujące na FreeBSD. Po zainstalowaniu na komputerze pełni rolę dedykowanej zapory sieciowej/routera dla sieci i wyróżnia się niezawodnością oraz oferuje funkcje, które można często znaleźć tylko w drogich zaporach sieciowych.
    
    [:octicons-home-16: Strona WWW](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=Dokumentacja}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Kod źródłowy" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=Wesprzyj }

OPNsense zostało pierwotnie opracowane na podstawie [pfSense](https://en.wikipedia.org/wiki/PfSense), a oba te projekty są znane z bycia bezpłatnymi i niezawodnymi dystrybucjami zapór sieciowych, które oferują funkcje dostępne często tylko w drogich komercyjnych zaporach sieciowych. Począwszy od 2015 roku programiści OPNsense [ujawnili](https://docs.opnsense.org/history/thefork.html) wiele problemów dotyczących bezpieczeństwa i jakości kodu pfSense, co popchnęło ich w stronę utworzenia pochodnego projektu, jak również obawy związane z większościowym zakupem pfSense przez Netgate i przyszłym kierunkiem rozwoju projektu.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Wymagane jest otwarte źródło.
- Wymagane są regularne aktualizacje.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.pl.txt"

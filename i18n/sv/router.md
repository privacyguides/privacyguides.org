---
title: "Router Firmware"
icon: material/router-wireless
---

Nedan följer några alternativa operativsystem som kan användas på routrar, Wi-Fi-accesspunkter osv.

## OpenWrt

!!! recommendation

    ![OpenWrt-logotyp](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** är ett Linuxbaserat operativsystem som främst används på inbyggda enheter för att dirigera nätverkstrafik. Den innehåller util-linux, uClibc och BusyBox. Alla komponenter har optimerats för hem routrar.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribute }

Du kan se OpenWrts [tabell över maskinvara](https://openwrt.org/toh/start) för att kontrollera om din enhet stöds.

## OPNsense

!!! recommendation

    ![OPNsense logo](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense** är en FreeBSD-baserad brandvägg och routningsplattform med öppen källkod som innehåller många avancerade funktioner, t.ex. trafikformning, belastningsbalansering och VPN-funktioner, med många fler funktioner som finns tillgängliga i form av tilläggsmoduler. OPNsense används vanligen som brandvägg, router, trådlös åtkomstpunkt, DHCP-server, DNS-server och VPN-slutpunkt.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opnsense.org/donate){ .card-link title=Contribute }

OPNsense utvecklades ursprungligen som en gaffel av [pfSense](https://en.wikipedia.org/wiki/PfSense), och båda projekten är kända för att vara fria och pålitliga brandväggsdistributioner som erbjuder funktioner som ofta endast finns i dyra kommersiella brandväggar. Utvecklarna av OPNsense [, som lanserades 2015, citerade](https://docs.opnsense.org/history/thefork.html) ett antal säkerhets- och kodkvalitetsproblem med pfSense som de ansåg nödvändiggjorde en delning av projektet, samt oro över Netgates majoritetsförvärv av pfSense och pfSense-projektets framtida inriktning.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Måste vara öppen källkod.
- Måste få regelbundna uppdateringar.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.sv.txt"

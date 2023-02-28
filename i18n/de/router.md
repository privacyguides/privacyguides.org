---
title: "Router-Firmware"
icon: material/router-wireless
---

Nachstehend sind ein paar alternative Betriebssysteme gelistet, die auf Routern, WLAN-Zugangspunkten usw. eingesetzt werden können.

## OpenWrt

!!! recommendation

    ![OpenWrt-Logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt-Logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt* ist ein auf Linux basierendes Betriebssystem; es wird primär auf eingebetteten Geräten zum Weiterleiten des Netzwerkverkehrs genutzt. Es enthält util-linux, uClib und BusyBox. Alle Komponenten sind für Heim-Router optimiert.
    
    [:octicons-home-16: Hauptseite](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Quellcode" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Mitwirken }

Sie können in der [table of hardware](https://openwrt.org/toh/start) von OpenWrt nachsehen, ob Ihr Gerät unterstützt wird.

## OPNsense

!!! recommendation

    ![OPNsense logo](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense* ist eine FreeBSD-basierte Open-Source-Firewall- und Routing-Plattform, die viele erweiterte Funktionen wie Traffic Shaping, Load Balancing und VPN-Funktionen enthält, wobei viele weitere Funktionen in Form von Plugins verfügbar sind. OPNsense wird in der Regel als Perimeter-Firewall, Router, Wireless Access Point, DHCP-Server, DNS-Server und VPN-Endpunkt eingesetzt.
    
    [:octicons-home-16: Homepage](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=Contribute }

OPNsense wurde ursprünglich als Fork von [pfSense](https://en.wikipedia.org/wiki/PfSense) entwickelt. Beide Projekte sind bekannt dafür, freie und zuverlässige Firewall-Distributionen zu sein, die Funktionen bieten, die oft nur in teuren kommerziellen Firewalls zu finden sind. Die Entwickler von OPNsense [zitierten](https://docs.opnsense.org/history/thefork.html) eine Reihe von Sicherheits- und Code-Qualitätsproblemen mit pfSense, die ihrer Meinung nach eine Abspaltung des Projekts erforderlich machten, sowie Bedenken hinsichtlich der Mehrheitsübernahme von pfSense durch Netgate und der zukünftigen Ausrichtung des pfSense-Projekts.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must be open source.
- Must receive regular updates.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.de.txt"

---
title: "Прошивка роутера"
icon: material/router-wireless
description: These alternative operating systems can be used to secure your router or Wi-Fi access point.
---

Нижче наведено кілька альтернативних операційних систем, які можна використовувати на маршрутизаторах, точках доступу Wi-Fi тощо.

## OpenWrt

!!! рекомендації

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** - це операційна система (зокрема, вбудована операційна система), заснована на ядрі Linux, яка в основному використовується на вбудованих пристроях для маршрутизації мережевого трафіку. Основними компонентами є ядро Linux, util-linux, uClibc, та BusyBox. Всі компоненти були оптимізовані за розміром, щоб бути досить маленькими для розміщення в обмеженому сховищі і пам'яті, доступних в домашніх маршрутизаторах.
    
    [Homepage](https://openwrt.org){ .md-button .md-button--primary }
    
    ???

Щоб перевірити, чи підтримується ваш пристрій, перегляньте [таблицю апаратного забезпечення](https://openwrt.org/toh/start) OpenWrt.

## OPNsense

!!! рекомендації

    ![pfSense logo](assets/img/router/pfsense.svg#only-light){ align=right }
    ![pfSense logo](assets/img/router/pfsense-dark.svg#only-dark){ align=right }
    
    pfSense - це дистрибутив програмного забезпечення для брандмауера / маршрутизатора з відкритим вихідним кодом, заснований на FreeBSD. Він встановлюється на комп'ютер для створення виділеного брандмауера/маршрутизатора для мережі та відомий своєю надійністю і пропонує функції, які часто зустрічаються тільки в дорогих комерційних брандмауерах.
    
    pfSense зазвичай розгортається як брандмауер по периметру, маршрутизатор, бездротова точка доступу, DHCP-сервер, DNS-сервер і кінцева точка VPN.

OPNsense was originally developed as a fork of [pfSense](https://en.wikipedia.org/wiki/PfSense), and both projects are noted for being free and reliable firewall distributions which offer features often only found in expensive commercial firewalls. Launched in 2015, the developers of OPNsense [cited](https://docs.opnsense.org/history/thefork.html) a number of security and code-quality issues with pfSense which they felt necessitated a fork of the project, as well as concerns about Netgate's majority acquisition of pfSense and the future direction of the pfSense project.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must be open source.
- Must receive regular updates.
- Must support a wide variety of hardware.

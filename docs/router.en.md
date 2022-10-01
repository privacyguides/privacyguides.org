---
title: "Router Firmware"
icon: material/router-wireless
---
Below are a few alternative operating systems, that can be used on routers, Wi-Fi access points, etc.

## OpenWrt

!!! recommendation

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }

    **OpenWrt** is a Linux-based operating system primarily used on embedded devices to route network traffic. It includes util-linux, uClibc, and BusyBox. All components have been optimized to work well on home routers.

    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribute }

You can consult OpenWrt's [table of hardware](https://openwrt.org/toh/start) to check if your device is supported.

## OPNsense

!!! recommendation

    ![pfSense logo](assets/img/router/opnsense.svg){ align=right }

    **OPNsense** is an open source, FreeBSD-based firewall and routing platform which incorporates many advanced features such as traffic shaping, load balancing, and VPN capabilities, with many more features available in the form of plugins. OPNsense is commonly deployed as a perimeter firewall, router, wireless access point, DHCP server, DNS server, and VPN endpoint.

    [:octicons-home-16: Homepage](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=Contribute }

OPNsense was originally developed as a fork of [pfSense](https://en.wikipedia.org/wiki/PfSense), and both projects are noted for being free and reliable firewall distributions which offer features often only found in expensive commercial firewalls. Launched in 2015, the developers of OPNsense [cited](https://docs.opnsense.org/history/thefork.html) a number of security and code-quality issues with pfSense which they felt necessitated a fork of the project, as well as concerns about Netgate's majority acquisition of pfSense and the future direction of the pfSense project.

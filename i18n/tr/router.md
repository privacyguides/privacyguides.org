---
title: "Yönlendirici Yazılımı"
icon: material/router-wireless
---

Aşağıda; yönlendiricilerde, Wi-Fi erişim noktalarında vb. kullanılabilecek birkaç alternatif işletim sistemi bulunmaktadır.

## OpenWrt

!!! öneri

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** Linux kernelini temel alan, gömülü cihazlarda ağ trafiğini yönlendirmek için kullanılan bir işletim sistemidir. (Gömülü bir işletim sistemi de denebilir.). Ana bileşenler Linux kerneli, util - linux, uClibc ve BusyBox'tur. Tüm bileşenler, ev yönlendiricilerinde bulunan sınırlı depolama ve belleğe sığacak kadar küçük olacak şekilde optimize edilmiştir.
    
    [:octicons-home-16: Anasayfa](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribute }

Cihazınızın desteklenip desteklenmediğini kontrol etmek için OpenWrt'nin [donanım tablosuna](https://openwrt.org/toh/start) başvurabilirsiniz.

## pfSense

!!! öneri

    ![pfSense logo](assets/img/router/pfsense.svg#only-light){ align=right }
    ![pfSense logo](assets/img/router/pfsense-dark.svg#only-dark){ align=right }
    
    pfSense; FreeBSD tabanlı, açık kaynak kodlu bir güvenlik duvarı/yönlendirici programıdır. Bir ağ için özel bir güvenlik duvarı/yönlendirici yapmak üzere bir bilgisayara kurulmuştur ve güvenilirliği, genellikle, sadece pahalı ticari güvenlik duvarlarında bulunan özellikler sunmasıyla bilinir.
    
    pfSense genellikle çevre güvenlik duvarı, yönlendirici, kablosuz erişim noktası, DHCP sunucusu, DNS sunucusu ve VPN noktası olarak dağıtılır.

OPNsense was originally developed as a fork of [pfSense](https://en.wikipedia.org/wiki/PfSense), and both projects are noted for being free and reliable firewall distributions which offer features often only found in expensive commercial firewalls. Launched in 2015, the developers of OPNsense [cited](https://docs.opnsense.org/history/thefork.html) a number of security and code-quality issues with pfSense which they felt necessitated a fork of the project, as well as concerns about Netgate's majority acquisition of pfSense and the future direction of the pfSense project.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must be open source.
- Must receive regular updates.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.tr.txt"

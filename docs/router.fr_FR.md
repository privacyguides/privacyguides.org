---
title: "Firmware du routeur"
icon: matériel/routeur-sans-fil
---

Vous trouverez ci-dessous quelques systèmes d'exploitation alternatifs, qui peuvent être utilisés sur des routeurs, des points d'accès Wi-Fi, etc.

## OpenWrt

!!! recommendation

    ![Logo OpenWrt](assets/img/router/openwrt.svg#only-light){ align=right }
    ![Logo OpenWrt](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** est un système d'exploitation (en particulier, un système d'exploitation embarqué) basé sur le noyau Linux, principalement utilisé sur des périphériques embarqués pour router le trafic réseau. Les principaux composants sont le noyau Linux, util-linux, uClibc et BusyBox. Tous les composants ont été optimisés pour avoir une taille réduite, afin d'être suffisamment petits pour s'intégrer dans le stockage et la mémoire limités des routeurs domestiques.
    
    [Homepage](https://openwrt.org){ .md-button .md-button--primary }
    
    ???

Vous pouvez consulter le [tableau du matériel](https://openwrt.org/toh/start) d'OpenWrt pour vérifier si votre périphérique est pris en charge.

## pfSense

!!! recommandation

    ![pfSense logo](assets/img/router/pfsense.svg#only-light){ align=right }
    ![pfSense logo](assets/img/router/pfsense-dark.svg#only-dark){ align=right }
    
    pfSense est une distribution logicielle informatique open source de pare-feu/routeur basée sur FreeBSD. Il est installé sur un ordinateur pour constituer un pare-feu/routeur dédié à un réseau. Il est réputé pour sa fiabilité et pour offrir des fonctionnalités que l'on ne trouve souvent que dans les pare-feu commerciaux coûteux.
    
    pfSense est généralement déployé en tant que pare-feu de périmètre, routeur, point d'accès sans fil, serveur DHCP, serveur DNS et point de terminaison VPN.

OPNsense a été développé à l'origine comme un fork de [pfSense](https://fr.wikipedia.org/wiki/PfSense), et les deux projets sont connus pour être des distributions de pare-feu gratuites et fiables qui offrent des fonctionnalités que l'on ne trouve souvent que dans les pare-feu commerciaux coûteux. Lancé en 2015, les développeurs d'OPNsense [ont cité](https://docs.opnsense.org/history/thefork.html) un certain nombre de problèmes de sécurité et de qualité du code de pfSense qui, selon eux, nécessitaient un fork du projet, ainsi que des préoccupations concernant l'acquisition majoritaire de pfSense par Netgate et l'orientation future du projet pfSense.

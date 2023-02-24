---
title: "Micrologiciel de routeur"
icon: material/router-wireless
---

Vous trouverez ci-dessous quelques systèmes d'exploitation alternatifs, qui peuvent être utilisés sur des routeurs, des points d'accès Wi-Fi, etc.

## OpenWrt

!!! recommendation

    ![Logo OpenWrt](assets/img/router/openwrt.svg#only-light){ align=right }
    ![Logo OpenWrt](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** est un système d'exploitation basé sur Linux ; il est principalement utilisé sur les périphériques embarqués pour acheminer le trafic réseau. Il comprend util-linux, uClibc, et BusyBox. Tous les composants ont été optimisés pour les routeurs domestiques.
    
    [:octicons-home-16: Page d'accueil](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Code source" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribuer }

Vous pouvez consulter le [tableau de matériel](https://openwrt.org/toh/start) d'OpenWrt pour vérifier si votre périphérique est pris en charge.

## OPNsense

!!! recommendation

    ![logo OPNsense](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense** est une plateforme de routage et de pare-feu open source basée sur FreeBSD qui intègre de nombreuses fonctionnalités avancées telles que la mise en forme du trafic, l'équilibrage de charge et des capacités VPN, avec de nombreuses autres fonctionnalités disponibles sous forme de plugins. OPNsense est généralement déployé comme pare-feu de périmètre, routeur, point d'accès sans fil, serveur DHCP, serveur DNS et point de terminaison VPN.
    
    [:octicons-home-16: Page d'accueil](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Code source" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=Contribuer }

OPNsense a été développé à l'origine comme un fork de [pfSense](https://fr.wikipedia.org/wiki/PfSense), et les deux projets sont connus pour être des distributions de pare-feu gratuites et fiables qui offrent des fonctionnalités que l'on ne trouve souvent que dans les pare-feu commerciaux coûteux. Lancé en 2015, les développeurs d'OPNsense [ont cité](https://docs.opnsense.org/history/thefork.html) un certain nombre de problèmes de sécurité et de qualité du code de pfSense qui, selon eux, nécessitaient un fork du projet, ainsi que des préoccupations concernant l'acquisition majoritaire de pfSense par Netgate et l'orientation future du projet pfSense.

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

- Doit être open-source.
- Doit recevoir des mises à jour régulières.
- Doivent prendre en charge une grande variété de matériel.

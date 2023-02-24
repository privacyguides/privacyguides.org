---
title: Vue d'Ensemble VPN
icon: material/vpn
---

Les Réseaux Privés Virtuels sont un moyen d'étendre l'extrémité de votre réseau à une sortie située ailleurs dans le monde. Un Fournisseur d'Accès Internet (FAI) peut voir le flux du trafic internet qui entre et sort de votre dispositif de terminaison de réseau (c'est-à-dire la box/modem).

Les protocoles de chiffrement tels que HTTPS sont couramment utilisés sur internet, ils peuvent donc ne pas être en mesure de voir exactement ce que vous publiez ou lisez, mais ils peuvent avoir une idée [des domaines que vous visitez](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

Un VPN peut vous aider car il peut déplacer la confiance offerte à votre FAI vers un serveur situé ailleurs dans le monde. Par conséquent, le FAI ne voit que le fait que vous êtes connecté à un VPN et rien sur l'activité que vous lui transmettez.

## Devrais-je utiliser un VPN ?

**Oui**, sauf si vous utilisez déjà Tor. Un VPN fait deux choses: déplacer les risques de votre Fournisseur d'Accès à Internet vers lui-même et cacher votre adresse IP d'un service tiers.

Les VPN ne peuvent pas chiffrer les données en dehors de la connexion entre votre appareil et le serveur VPN. Les fournisseurs de VPN peuvent voir et modifier votre trafic de la même manière que votre FAI pourrait le faire. Et il n'existe aucun moyen de vérifier de quelque manière que ce soit la politique de "non journalisation" d'un fournisseur de VPN.

Cependant, ils cachent votre IP réelle d'un service tiers, à condition qu'il n'y ait pas de fuites d'IP. Ils vous aident à vous fondre dans la masse et à atténuer le suivi par IP.

## Quand ne devrais-je pas utiliser un VPN ?

L'utilisation d'un VPN dans les cas où vous utilisez votre \[identité connue\](common-threats.md#common-misconceptions) ne sera probablement pas utile.

Cela peut déclencher des systèmes de détection de spam et de fraude, par exemple si vous vous connectez au site web de votre banque.

## Qu'en est-il du chiffrement ?

Le chiffrement offert par les fournisseurs VPN se situe entre vos appareils et leurs serveurs. Il garantit que ce lien spécifique est sécurisé. Il s'agit d'une avancée par rapport à l'utilisation de proxys non chiffrés où un adversaire sur le réseau peut intercepter les communications entre vos appareils et lesdits proxys et les modifier. Cependant, le chiffrement entre vos applications ou navigateurs et les fournisseurs de services n'est pas géré par ce chiffrement.

Pour que ce que vous faites sur les sites web que vous visitez reste privé et sécurisé, vous devez utiliser le protocole HTTPS. Cela protégera vos mots de passe, jetons de session et requêtes du fournisseur VPN. Envisagez d'activer "HTTPS partout" dans votre navigateur pour atténuer les attaques de rétrogradation comme [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Devrais-je utiliser un DNS chiffré avec un VPN ?

À moins que votre fournisseur VPN n'héberge les serveurs DNS chiffrés, **non**. L'utilisation de DOH/DOT (ou de toute autre forme de DNS chiffré) avec des serveurs tiers ne fera qu'ajouter des entités supplémentaires auxquelles il faudra faire confiance, et ne fait **absolument rien** pour améliorer votre confidentialité/sécurité. Votre fournisseur de VPN peut toujours voir quels sites web vous visitez en se basant sur les adresses IP et d'autres méthodes. Au lieu de faire uniquement confiance à votre fournisseur de VPN, vous faites maintenant confiance à la fois au fournisseur de VPN et au fournisseur de DNS.

Une raison courante de recommander le DNS chiffré est qu'il permet de lutter contre l'usurpation DNS. Cependant, votre navigateur devrait déjà vérifier la présence de [certificats TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) avec **HTTPS** et vous en avertir. Si vous n'utilisez pas **HTTPS**, alors un adversaire peut toujours modifier n'importe quoi d'autre que vos requêtes DNS et le résultat final sera peu différent.

Inutile de dire que **vous ne devriez pas utiliser de DNS chiffré avec Tor**. Toutes vos requêtes DNS seraient ainsi dirigées vers un seul circuit, ce qui permettrait au fournisseur de DNS chiffré de vous désanonymiser.

## Devrais-je utiliser Tor *et* un VPN?

En utilisant un VPN avec Tor, vous créez essentiellement un nœud d'entrée permanent, souvent avec une trace financière attachée. Cela ne vous apporte aucun avantages supplémentaires, tout en augmentant considérablement la surface d'attaque de votre connexion. Si vous souhaitez cacher votre utilisation de Tor à votre FAI ou à votre gouvernement, Tor a une solution intégrée pour cela : les passerelles Tor. [En savoir plus sur les passerelles Tor et pourquoi l'utilisation d'un VPN n'est pas nécessaire](../advanced/tor-overview.md).

## Et si j'ai besoin d'anonymat ?

Les VPNs ne peuvent pas fournir d'anonymat. Votre fournisseur de VPN verra toujours votre adresse IP réelle, et dispose souvent d'une trace financière qui peut être liée directement à vous. Vous ne pouvez pas compter sur des politiques de "non journalisation" pour protéger vos données. Utilisez plutôt [Tor](https://www.torproject.org/fr/).

## Qu'en est-il des fournisseurs de VPN qui proposent des nœuds Tor ?

N'utilisez pas cette fonctionnalité. L'intérêt d'utiliser Tor est que vous ne faites pas confiance à votre fournisseur de VPN. Actuellement Tor ne supporte que le protocole [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol). [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (utilisé dans [WebRTC](https://en.wikipedia.org/wiki/WebRTC) pour le partage de la voix et de la vidéo, le nouveau protocole [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3), etc...), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) et les autres paquets seront abandonnés. Pour compenser cela, les fournisseurs de VPN acheminent généralement tous les paquets non TCP par leur serveur VPN (votre premier saut). C'est le cas de [Proton VPN](https://protonvpn.com/support/tor-vpn/). De plus, lorsque vous utilisez cette configuration Tor par VPN, vous n'avez pas le contrôle sur d'autres fonctionnalités importantes de Tor telles que [Adresse de Destination Isolée](https://www.whonix.org/wiki/Stream_Isolation) (utilisation d'un circuit Tor différent pour chaque domaine que vous visitez).

Cette fonctionnalité doit être considérée comme un moyen pratique d'accéder au réseau Tor, et non comme un moyen de rester anonyme. Pour un véritable anonymat, utilisez le navigateur Tor, TorSocks, ou une passerelle Tor.

## Quand les VPNs sont-ils utiles ?

Un VPN peut toujours vous être utile dans divers scénarios, tels que :

1. Cacher votre trafic de **seulement** votre Fournisseur d'Accès Internet.
1. Cacher vos téléchargements (tels que les torrents) à votre FAI et aux organisations anti-piratage.
1. Cacher votre adresse IP des sites web et services tiers, empêchant le suivi basé sur l'adresse IP.

Pour des cas d'utilisation comme ceux-ci, ou si vous avez une autre raison convaincante, les fournisseurs VPN que nous avons énumérés ci-dessus sont ceux qui nous semblent les plus dignes de confiance. Cependant, l'utilisation d'un fournisseur de VPN signifie toujours que vous *faites confiance* à ce fournisseur. Dans presque tous les autres cas, vous devriez utiliser un outil sécurisé **par conception** tel que Tor.

## Sources et Lectures Complémentaires

1. [VPN - un Récit Très Précaire](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) par Dennis Schubert
1. [Présentation du Réseau Tor](../advanced/tor-overview.md)
1. [IVPN Privacy Guides](https://www.ivpn.net/privacy-guides)
1. ["Ai-je besoin d'un VPN ?"](https://www.doineedavpn.com), un outil développé par IVPN pour défier le marketing agressif des autres VPNs en aidant les individus à décider si un VPN leur convient.

## Informations VPN Liées

- [Le Problème avec les sites d'évaluation des VPNs et de la Vie Privée](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Enquête sur les Applications VPN Gratuites](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Les propriétaires inconnus des VPNs dévoilés : 101 produits VPN gérés par seulement 23 sociétés](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Cette société chinoise est secrètement à l'origine de 24 applications populaires qui cherchent à obtenir des autorisations dangereuses](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

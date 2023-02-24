---
title: "Partage et Synchronisation de Fichiers"
icon: material/share-variant
---

Découvrez comment partager vos fichiers en toute confidentialité entre vos appareils, avec vos amis et votre famille, ou de manière anonyme en ligne.

## Partage de fichiers

### Envoyer

!!! recommendation

    ![Logo de Send](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** est un dérivé du service Firefox Send de Mozilla, qui a été abandonné, et qui vous permet d'envoyer des fichiers à d'autres personnes à l'aide d'un lien. Les fichiers sont cryptés sur votre appareil afin qu'ils ne puissent pas être lus par le serveur, et ils peuvent également être protégés par un mot de passe. Le responsable de Send héberge une [instance publique] (https://send.vis.ee/). Vous pouvez utiliser d'autres instances publiques, ou vous pouvez héberger Send vous-même.
    
    [:octicons-home-16: Page d'accueil](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Instances Publiques"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Contribuer }

Send peut être utilisé via son interface web ou via le CLI [ffsend](https://github.com/timvisee/ffsend) . Si vous êtes familier avec la ligne de commande et que vous envoyez fréquemment des fichiers, nous vous recommandons d'utiliser le client CLI pour éviter le cryptage basé sur JavaScript. Vous pouvez spécifier le flag `--host` pour utiliser un serveur spécifique :

```bash
ffsend upload --host https://send.vis.ee/ FICHIER
```

### OnionShare

!!! recommendation

    ![Logo OnionShare](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** est un outil open-source qui vous permet de partager de manière sécurisée et anonyme un fichier de n'importe quelle taille. Il fonctionne en démarrant un serveur web accessible en tant que service oignon Tor, avec une URL non devinable que vous pouvez partager avec les destinataires pour télécharger ou envoyer des fichiers.
    
    [:octicons-home-16: Page d'accueil](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Source Code" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Critère

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

- Ne doit pas stocker des données déchiffrées sur un serveur distant.
- Doivent être open-source.
- Doit avoir soit des clients pour Linux, macOS et Windows, soit une interface web.

## FreedomBox

!!! recommendation

    ![Logo FreedomBox](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** est un système d'exploitation conçu pour être exécuté sur un [single-board computer (SBC)] (https://en.wikipedia.org/wiki/Single-board_computer). L'objectif est de faciliter la mise en place d'applications serveur que vous pourriez vouloir auto-héberger.
    
    [:octicons-home-16: Page d'accueil](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Contribuer }

## Synchronisation de Fichiers

### Nextcloud (Client-Serveur)

!!! recommendation

    ![Logo Nextcloud](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** est une suite de logiciels client-serveur gratuits et open-source permettant de créer vos propres services d'hébergement de fichiers sur un serveur privé que vous contrôlez.
    
    [:octicons-home-16: Page d'accueil](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribute }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! danger

    Nous ne recommandons pas l'utilisation de [l'Application E2EE] (https://apps.nextcloud.com/apps/end_to_end_encryption) pour Nextcloud car elle peut entraîner une perte de données ; elle est hautement expérimentale et n'est pas de qualité de production.

### Syncthing (P2P)

!!! recommendation

    ![Logo de Syncthing](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** est un utilitaire open-source de synchronisation continue de fichiers de pair à pair. Il est utilisé pour synchroniser des fichiers entre deux ou plusieurs appareils via le réseau local ou internet. Syncthing n'utilise pas de serveur centralisé ; il utilise le [Protocole d'Échange de Blocs] (https://docs.syncthing.net/specs/bep-v1.html#bep-v1) pour transférer les données entre appareils. Toutes les données sont chiffrées à l'aide de TLS.
    
    [:octicons-home-16: Page d'accueil](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

#### Exigences minimales

- Ne doit pas nécessiter un serveur distant/cloud tiers.
- Doivent être open-source.
- Doit avoir soit des clients pour Linux, macOS et Windows, soit une interface web.

#### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- Dispose de clients mobiles pour iOS et Android, qui permettent au moins de prévisualiser les documents.
- Prend en charge la sauvegarde des photos à partir d'iOS et d'Android et, en option, la synchronisation des fichiers/dossiers sur Android.

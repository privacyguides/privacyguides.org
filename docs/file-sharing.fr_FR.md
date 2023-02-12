---
title: "Partage et Synchronisation de Fichiers"
icon: material/share-variant
---

Découvrez comment partager vos fichiers en toute confidentialité entre vos appareils, avec vos amis et votre famille, ou de manière anonyme en ligne.

## Partage de fichiers

### OnionShare

!!! recommendation

    ![Logo OnionShare](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** est un outil open-source qui vous permet de partager de manière sécurisée et anonyme un fichier de n'importe quelle taille. Il fonctionne en démarrant un serveur web accessible en tant que service oignon Tor, avec une URL non devinable que vous pouvez partager avec les destinataires pour télécharger ou envoyer des fichiers. [Page d'accueil](https://onionshare.org){ .md-button .md-button--primary } [:pg-tor:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .md-button }
    
    ??? Bitwarden Send permet également la [suppression automatique] (https://bitwarden.com/help/send-lifespan).
    
    [:octicons-home-16: Page d'accueil](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Instances Publiques"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Contribuer }

Send peut être utilisé via son interface web ou via le CLI [ffsend](https://github.com/timvisee/ffsend) . recommendation Vous pouvez spécifier le flag `--host` pour utiliser un serveur spécifique :

```bash
ffsend upload --host https://send.vis.ee/ FICHIER
```

### Magic Wormhole

!!! recommendation

    ![Logo FreedomBox](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** est un système d'exploitation conçu pour être exécuté sur un [ordinateur monocarte (SBC)](https://fr.wikipedia.org/wiki/Ordinateur_à_carte_unique). L'objectif est de faciliter la mise en place d'applications serveur que vous pourriez vouloir héberger vous-même.
    
    [Page d'accueil](https://freedombox.org){ .md-button .md-button--primary }
    
    ??? Toutes les données sont chiffrées à l'aide de TLS.

## FreedomBox

!!! recommendation

    ![Logo FreedomBox](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** est un système d'exploitation conçu pour être exécuté sur un [ordinateur monocarte (SBC)](https://fr.wikipedia.org/wiki/Ordinateur_à_carte_unique). L'objectif est de faciliter la mise en place d'applications serveur que vous pourriez vouloir auto-héberger.
    
    [:octicons-home-16: Page d'accueil](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Contribuer }

## Synchronisation de Fichiers

### Syncthing

!!! recommendation

    ![Logo de Syncthing](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** est un utilitaire open-source de synchronisation continue de fichiers de pair à pair. Il est utilisé pour synchroniser des fichiers entre deux ou plusieurs appareils via le réseau local ou internet. Syncthing n'utilise pas de serveur centralisé ; il utilise le [Protocole d'Échange de Blocs] (https://docs.syncthing.net/specs/bep-v1.html#bep-v1) pour transférer les données entre appareils. Toutes les données sont chiffrées à l'aide de TLS.
    
    [:octicons-home-16: Page d'accueil](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

---
title: "Agrégateurs d'Actualités"
icon: octicons/rss-24
---

Un [agrégateur d'actualités](https://en.wikipedia.org/wiki/News_aggregator) est un moyen de suivre vos blogs et sites d'actualités préférés.

## Clients agrégateurs

### Fluent Reader

!!! recommendation

    ! [Logo de Fluent Reader](assets/img/news-aggregators/fluent-reader.svg){ align=right }
    
    **Fluent Reader** est un agrégateur d'actualités multiplateforme sécurisé qui dispose de fonctionnalités de confidentialité utiles telles que la suppression des cookies à la sortie, des [politiques de sécurité du contenu (CSP)] (https://en.wikipedia.org/wiki/Content_Security_Policy) strictes et une prise en charge des proxys, ce qui signifie que vous pouvez l'utiliser par [Tor](self-contained-networks.md#tor). [Page d'accueil](https://hyliu.me/fluent-reader){ .md-button .md-button--primary } [Politique de confidentialité](https://github.com/yang991178/fluent-reader/wiki/Privacy){ .md-button }
    
    ???
    
    downloads
    
        - [:fontawesome-brands-windows: Windows](https://hyliu.me/fluent-reader)
        - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/app/id1520907427)
        - [:fontawesome-brands-github: Source](https://github.com/yang991178/fluent-reader.git) downloads
    
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.kde.akregator)

### GNOME Feeds

!!! recommendation

    ![Logo GNOME Feeds](assets/img/news-aggregators/gfeeds.svg){ align=right }
    
    **GNOME Feeds** est un lecteur d'actualités [RSS](https://en.wikipedia.org/wiki/RSS) et [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) pour [GNOME](https://www.gnome.org). Il possède une interface simple et est assez rapide.
    
    [Page d'accueil](https://gfeeds.gabmus.org){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:fontawesome-brands-linux: Linux](https://gfeeds.gabmus.org/#install)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.gabmus.gfeeds)
        - [:fontawesome-brands-gitlab: Source](https://gitlab.gnome.org/World/gfeeds)

### Akregator

!!! recommendation

    ![Logo Akregator](assets/img/news-aggregators/akregator.svg){ align=right }
    
    **Akregator** est un lecteur de flux d'actualités qui fait partie du projet [KDE](https://kde.org).
    
    Il est doté d'une fonction de recherche rapide, d'une fonctionnalité d'archivage avancée et d'un navigateur interne pour faciliter la lecture des actualités. [Page d'accueil](https://apps.kde.org/akregator){ .md-button .md-button--primary } [Politique de confidentialité](https://kde.org/privacypolicy-apps){ .md-button }
    
    ???

### Feeder

!!! recommendation

    ![Logo de Feeder](assets/img/news-aggregators/feeder.png){ align=right }
    
    **Feeder** est un client RSS moderne pour Android qui possède de nombreuses [fonctionnalités](https://gitlab.com/spacecowboy/Feeder#features) et fonctionne bien avec des dossiers de flux RSS. Il prend en charge [RSS](https://en.wikipedia.org/wiki/RSS), [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)), [RDF](https://en.wikipedia.org/wiki/RDF%2FXML) et [JSON Feed](https://en.wikipedia.org/wiki/JSON_Feed).
    
    [Page d'accueil](https://gitlab.com/spacecowboy/Feeder){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nononsenseapps.feeder.play)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.nononsenseapps.feeder/)
        - [:fontawesome-brands-gitlab: Source](https://gitlab.com/spacecowboy/Feeder)

### NetNewsWire

!!! recommendation

    ![Logo NetNewsWire](assets/img/news-aggregators/netnewswire.png){ align=right }
    
    **NetNewsWire** est un lecteur de flux gratuit et open-source pour macOS et iOS qui met l'accent sur un design et des fonctionnalités natives. Il prend en charge les formats de flux habituels, ainsi que les flux Twitter et Reddit.
    
    [Page d'accueil](https://netnewswire.com){ .md-button .md-button--primary } [Politique de confidentialité](https://netnewswire.com/privacypolicy){ .md-button }
    
    ???

### Miniflux

!!! recommendation

    ![Logo Miniflux](assets/img/news-aggregators/miniflux.svg#only-light){ align=right }
    ![Logo Miniflux](assets/img/news-aggregators/miniflux-dark.svg#only-dark){ align=right }
    
    **Miniflux** est un agrégateur d'actualités basé sur le web que vous pouvez auto-héberger. Il prend en charge [RSS](https://en.wikipedia.org/wiki/RSS), [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)), [RDF](https://en.wikipedia.org/wiki/RDF%2FXML) et [JSON Feed](https://en.wikipedia.org/wiki/JSON_Feed).
    
    [Page d'accueil](https://miniflux.app){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:fontawesome-brands-apple: macOS](https://netnewswire.com)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/netnewswire-rss-reader/id1480640210)

### Newsboat

!!! recommendation

    ![Logo Newsboat](assets/img/news-aggregators/newsboat.svg){ align=right }
    
    **Newsboat** est un lecteur de flux RSS/Atom pour la console texte. C'est un fork activement maintenu de [Newsbeuter](https://en.wikipedia.org/wiki/Newsbeuter). Il est très léger et idéal pour une utilisation via [Secure Shell] (https://en.wikipedia.org/wiki/Secure_Shell).
    
    [Page d'accueil](https://newsboat.org){ .md-button .md-button--primary }
    
    ???

## Réseaux sociaux prenant en charge le RSS

Certains services de réseaux sociaux prennent également en charge le RSS, bien que cela ne soit pas souvent annoncé.

### YouTube

Vous pouvez vous abonner aux chaînes YouTube sans vous connecter et sans associer les informations d'utilisation à votre compte Google.

!!! example
    Remplacez `subbreddit_name` par le subreddit auquel vous souhaitez vous abonner.

    ```text
    https://www.reddit.com/r/{{ subreddit_name }}/new/.rss
    ```

### Reddit

Reddit prend également en charge l'abonnement via RSS.

!!! example
    1. Choisissez une instance et définissez `nitter_instance`.
    2. Remplacez `twitter_account` par le nom du compte.

       ```text
       https://{{ nitter_instance }}/{{ twitter_account }}/rss
       ```

### Twitter

En utilisant l'une des instances de Nitter [](https://github.com/zedeus/nitter/wiki/Instances) vous pouvez facilement vous abonner en utilisant le RSS.

!!! example

    Pour s'abonner à une chaîne YouTube avec un client RSS, cherchez d'abord votre [code de chaîne] (https://support.google.com/youtube/answer/6180214), remplacez `channel_id` ci-dessous :
    ```text
    https://www.youtube.com/feeds/videos.xml?channel_id={{ channel id }}
    ```

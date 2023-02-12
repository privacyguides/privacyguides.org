---
title: "Gestionnaires de Mots de Passe"
icon: material/form-textbox-password
---

Restez en sécurité sur internet avec un gestionnaire de mots de passe chiffré et à code source ouvert.

[Introduction aux mots de passe :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info

    ![Logo KeePassXC](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** est un fork communautaire de KeePassX, un portage natif multiplateforme de KeePass Password Safe, avec l'objectif de l'étendre et de l'améliorer avec de nouvelles fonctionnalités et des corrections de bogues pour fournir un gestionnaire de mots de passe open-source riche en fonctionnalités, entièrement multiplateforme et moderne. [Page d'accueil](https://keepassxc.org){ .md-button .md-button--primary } [Politique de confidentialité](https://keepassxc.org/privacy){ .md-button }
    
    ???
    
    téléchargements
    
        - [:fontawesome-brands-windows: Windows](https://keepassxc.org/download/#windows)
        - [:fontawesome-brands-apple: macOS](https://keepassxc.org/download/#mac)
        - [:fontawesome-brands-linux: Linux](https://keepassxc.org/download/#linux)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)
        - [:fontawesome-brands-github: Source](https://github.com/keepassxreboot/keepassxc) downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:pg-f-droid: F-Droid](https://www.f-droid.org/packages/com.kunzisoft.keepass.libre)
        - [:fontawesome-brands-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

## Bonnes Pratiques en Matière de Mots de Passe

Ces gestionnaires de mots de passe synchronisent vos mots de passe sur un serveur cloud pour un accès facile à partir de tous vos appareils et une sécurité contre la perte d'appareils.

### KeePassXC

!!! recommendation

    ! [Logo KeePassDX](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** est un gestionnaire de mots de passe léger pour Android, permettant d'éditer des données chiffrées dans un seul fichier au format KeePass et de remplir les formulaires de manière sécurisée. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) permet de débloquer du contenu cosmétique et des fonctions de protocole non standard, mais surtout, il aide et encourage le développement. Pour plus de détails, nous vous recommandons de consulter leur [FAQ](https://github.com/Kunzisoft/KeePassDX/wiki/FAQ).
    
    1Password est closed source; cependant, la sécurité du produit est documentée de manière approfondie dans leur [livre blanc sur la sécurité] (https://1passwordstatic.com/files/security/1password-white-paper.pdf). [:octicons-home-16: Page d'accueil](https://1password.com/fr/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Documentation}

Vous devez disposer du [plan Premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) pour pouvoir partager des fichiers. Le plan gratuit ne permet que le partage de texte. Bitwarden Send dispose également d'une fonction de [suppression automatique](https://bitwarden.com/help/send-lifespan).

Vous devez disposer du [plan Premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) pour pouvoir partager des fichiers. Le plan gratuit ne permet que le partage de texte.

Le code côté serveur de Bitwarden est [open-source](https://github.com/bitwarden/server), donc si vous ne voulez pas utiliser le cloud Bitwarden, vous pouvez facilement héberger votre propre serveur de synchronisation Bitwarden.

**Vaultwarden** est une implémentation alternative du serveur de synchronisation de Bitwarden écrite en Rust et compatible avec les clients officiels de Bitwarden. Elle est parfaite pour les déploiements auto-hébergés où l'utilisation du service officiel, lourd en ressources, n'est pas idéale. Si vous cherchez à héberger Bitwarden sur votre propre serveur, vous voudrez certainement utiliser Vaultwarden plutôt que le code serveur officiel de Bitwarden.

[:octicons-repo-16: Dépôt Vaultwarden](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Code Source" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribuer }

### KeePassDX

Traditionnellement, **1Password** offrait la meilleure expérience utilisateur en matière de gestion de mots de passe pour les personnes utilisant macOS et iOS ; cependant, il a désormais atteint la parité de fonctionnalités sur toutes les plateformes. Il présente de nombreuses caractéristiques destinées aux familles et aux personnes moins techniques, ainsi que des fonctionnalités avancées.

    ![Logo Bitwarden](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** est un gestionnaire de mots de passe gratuit et open-source. Il vise à résoudre les problèmes de gestion des mots de passe pour les individus, les équipes et les organisations commerciales. Bitwarden est l'une des solutions les plus simples et les plus sûres pour stocker tous vos identifiants et mots de passe tout en les synchronisant de manière pratique entre tous vos appareils. Si vous ne souhaitez pas utiliser le cloud Bitwarden, vous pouvez facilement héberger votre propre serveur Bitwarden.
    
    [Page d'accueil](https://bitwarden.com){ .md-button .md-button--primary } [Politique de confidentialité](https://bitwarden.com/privacy){ .md-button }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

Votre coffre-fort 1Password est sécurisé à la fois par votre mot de passe principal et par une clé de sécurité aléatoire de 34 caractères pour chiffrer vos données sur leurs serveurs. Cette clé de sécurité ajoute une couche de protection à vos données, car celles-ci sont sécurisées par une entropie élevée, indépendamment de votre mot de passe principal.

Un avantage de 1Password sur Bitwarden est son support de première classe pour les clients natifs. Alors que Bitwarden relègue de nombreuses fonctions, notamment les fonctions de gestion de compte, à son interface de coffre-fort web, 1Password met à disposition presque toutes les fonctions disponibles dans ses clients natifs mobiles ou de bureau. Les clients de 1Password ont également une interface utilisateur plus intuitive, ce qui les rend plus faciles à utiliser et à naviguer.

Un avantage de 1Password sur Bitwarden est son support de première classe pour les clients natifs. Alors que Bitwarden relègue de nombreuses fonctions, notamment les fonctions de gestion de compte, à son interface de coffre-fort web, 1Password met à disposition presque toutes les fonctions disponibles dans ses clients natifs mobiles ou de bureau. Les clients de 1Password ont également une interface utilisateur plus intuitive, ce qui les rend plus faciles à utiliser et à naviguer.

### Bitwarden

!!! Le [client web](https://doc.psono.com/admin/installation/install-webclient.html#installation-with-docker) pour Psono peut être auto-hébergé; vous pouvez également choisir l'édition complète [Community Edition](https://doc.psono.com/admin/installation/install-server-ce.html) ou l'édition [Enterprise Edition](https://doc.psono.com/admin/installation/install-server-ee.html) avec des fonctionnalités supplémentaires.

    ![Logo Psono](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** est un gestionnaire de mots de passe gratuit et open source d'Allemagne, avec un accent sur la gestion des mots de passe pour les équipes. Il peut être [auto-hébergé](#password-management-servers). Psono prend en charge le partage sécurisé de mots de passe, de fichiers, de signets et d'e-mails.
    
    [:octicons-home-16: Page d'accueil](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Code Source" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono fournit une documentation complète pour son produit. Le client web de Psono peut être hébergé par vous-même ; vous pouvez également choisir l'édition Community complète ou l'édition Enterprise avec des fonctionnalités supplémentaires.

## Gestionnaires de Mots de Passe Locaux

Ces options vous permettent de gérer une base de données de mots de passe chiffrés localement.

### Psono

!!! Cela peut entraîner une perte de données si vous importez ce fichier dans un autre gestionnaire de mots de passe.

    ![Logo Vaultwarden](assets/img/password-management/vaultwarden.svg#only-light){ align=right }
    ![Logo Vaultwarden](assets/img/password-management/vaultwarden-dark.svg#only-dark){ align=right }
    
    **Vaultwarden** est une implémentation alternative de l'API du serveur Bitwarden écrite en Rust et compatible avec les clients Bitwarden, parfaite pour un déploiement auto-hébergé où l'exécution du service officiel lourd en ressources n'est pas idéale.
    
    [Info sur le projet](https://github.com/dani-garcia/vaultwarden#readme){ .md-button .md-button--primary }
    
    ??? téléchargements
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Source](https://github.com/dani-garcia/vaultwarden)

KeePassXC stocke ses données d'exportation sous forme de fichiers [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Cela peut entraîner une perte de données si vous importez ce fichier dans un autre gestionnaire de mots de passe. Nous vous conseillons de vérifier chaque entrée manuellement.

### Vaultwarden

!!! recommendation

    ![Logo Strongbox](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** est un gestionnaire de mots de passe open-source pour iOS et macOS qui prend en charge les formats KeePass et Password Safe. Il propose une [version premium] (https://strongboxsafe.com/pricing/) avec plus de fonctionnalités telles que le déverrouillage TouchID et FaceID.
    
    [:octicons-home-16: Page d'accueil](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:simple-apple: Mac App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

### Strongbox (iOS & macOS)

!!! recommendation

    ![logo gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** est un gestionnaire de mots de passe pour ligne de commande écrit en Go. Il fonctionne sur tous les principaux systèmes d'exploitation de bureau et de serveur (Linux, macOS, BSD, Windows). [:octicons-home-16: Page d'accueil](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribuer }
    
    ???
    
    downloads
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd) downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

En outre, une version hors ligne est proposée : [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Cette version est dépouillée dans le but de réduire la surface d'attaque.

## Gestionnaires de Mots de Passe avec Synchronisation Cloud

Ces produits sont des gestionnaires de mots de passe minimalistes qui peuvent être utilisés dans des applications de script.

### gopass

!!! recommendation

    ![logo gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** est un gestionnaire de mots de passe pour ligne de commande écrit en Go. Il fonctionne sur tous les principaux systèmes d'exploitation de bureau et de serveur (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Page d'accueil](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

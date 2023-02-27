---
title: "Gestionnaires de mots de passe"
icon: material/form-textbox-password
---

Les gestionnaires de mots de passe vous permettent de stocker et de gérer en toute sécurité les mots de passe et autres informations d'identification à l'aide d'un mot de passe principal.

[Introduction aux mots de passe :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info "Information"

    Les gestionnaires de mots de passe intégrés dans des logiciels tels que les navigateurs et les systèmes d'exploitation ne sont parfois pas aussi performants que les logiciels de gestion de mots de passe dédiés. L'avantage d'un gestionnaire de mots de passe intégré est une bonne intégration avec le logiciel, mais il peut souvent être très simpliste et manquer de fonctions de confidentialité et de sécurité dont disposent les offres dissociées.
    
    Par exemple, le gestionnaire de mots de passe de Microsoft Edge ne propose pas du tout E2EE. Le gestionnaire de mots de passe de Google dispose d'un E2EE [facultatif](https://support.google.com/accounts/answer/11350823), et [celui d'Apple](https://support.apple.com/fr-fr/HT202303) propose E2EE par défaut.

## Basé sur le cloud

Ces gestionnaires de mots de passe synchronisent vos mots de passe sur un serveur cloud pour un accès facile à partir de tous vos appareils et une sécurité contre la perte d'appareils.

### Bitwarden

!!! recommendation

    ![Logo Bitwarden](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** est un gestionnaire de mots de passe gratuit et open-source. Il vise à résoudre les problèmes de gestion des mots de passe pour les individus, les équipes et les organisations commerciales. Bitwarden est l'une des solutions les plus simples et les plus sûres pour stocker tous vos identifiants et mots de passe tout en les synchronisant de manière pratique entre tous vos appareils.
    
    [:octicons-home-16: Page d'accueil](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden propose également [Bitwarden Send](https://bitwarden.com/products/send/), qui vous permet de partager du texte et des fichiers en toute sécurité grâce au [chiffrement de bout en bout](https://bitwarden.com/help/send-encryption). Un [mot de passe](https://bitwarden.com/help/send-privacy/#send-passwords) peut être demandé avec le lien d'envoi. Bitwarden Send dispose également d'une fonction de [suppression automatique](https://bitwarden.com/help/send-lifespan).

Vous devez disposer de [l'offre Premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) pour pouvoir partager des fichiers. L'offre gratuite ne permet que le partage de texte.

Le code côté serveur de Bitwarden est [open-source](https://github.com/bitwarden/server), donc si vous ne voulez pas utiliser le cloud Bitwarden, vous pouvez facilement héberger votre propre serveur de synchronisation Bitwarden.

**Vaultwarden** est une implémentation alternative du serveur de synchronisation de Bitwarden écrite en Rust et compatible avec les clients officiels de Bitwarden. Elle est parfaite pour les déploiements auto-hébergés où l'utilisation du service officiel, lourd en ressources, n'est pas idéale. Si vous cherchez à héberger Bitwarden sur votre propre serveur, vous voudrez certainement utiliser Vaultwarden plutôt que le code serveur officiel de Bitwarden.

[:octicons-repo-16: Dépôt Vaultwarden](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Code source" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribuer }

### 1Password

!!! recommendation

    ![Logo 1Password](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** est un gestionnaire de mots de passe qui met l'accent sur la sécurité et la facilité d'utilisation. Il vous permet de stocker des mots de passe, des cartes de crédit, des licences de logiciels et toute autre information sensible dans un coffre-fort numérique sécurisé. Votre chambre forte est hébergée sur les serveurs de 1Password pour un [tarif mensuel](https://1password.com/sign-up/). 1Password est [audité](https://support.1password.com/security-assessments/) régulièrement et fournit un support client exceptionnel. 1Password est closed source ; cependant, la sécurité du produit est documentée de manière approfondie dans leur [livre blanc sur la sécurité] (https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: Page d'accueil](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Documentation}
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

Traditionnellement, **1Password** offrait la meilleure expérience utilisateur en matière de gestion de mots de passe pour les personnes utilisant macOS et iOS ; cependant, il a désormais atteint la parité de fonctionnalités sur toutes les plateformes. Il présente de nombreuses caractéristiques destinées aux familles et aux personnes moins techniques, ainsi que des fonctionnalités avancées.

Votre coffre-fort 1Password est sécurisé à la fois par votre mot de passe principal et par une clé de sécurité aléatoire de 34 caractères pour chiffrer vos données sur leurs serveurs. Cette clé de sécurité ajoute une couche de protection à vos données, car celles-ci sont sécurisées par une entropie élevée, indépendamment de votre mot de passe principal. De nombreuses autres solutions de gestion des mots de passe dépendent entièrement de la force de votre mot de passe principal pour sécuriser vos données.

Un avantage de 1Password sur Bitwarden est sa prise en charge de première classe pour les clients natifs. Alors que Bitwarden relègue de nombreuses fonctions, notamment les fonctions de gestion de compte, à son interface de coffre-fort web, 1Password met à disposition presque toutes les fonctions disponibles dans ses clients natifs mobiles ou de bureau. Les clients de 1Password ont également une interface utilisateur plus intuitive, ce qui les rend plus faciles à utiliser et à parcourir.

### Psono

!!! recommendation

    ![Logo Psono](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** est un gestionnaire de mots de passe gratuit et open source d'Allemagne, avec un accent sur la gestion des mots de passe pour les équipes. Il peut être [auto-hébergé](#password-management-servers). Psono prend en charge le partage sécurisé de mots de passe, de fichiers, de signets et d'e-mails.
    
    [:octicons-home-16: Page d'accueil](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono fournit une documentation complète pour son produit. Le client web de Psono peut être hébergé par vous-même ; vous pouvez également choisir l'édition Community complète ou l'édition Enterprise avec des fonctionnalités supplémentaires.

### Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

#### Exigences minimales

- Doit utiliser un système E2EE solide, basé sur des normes et moderne.
- Doit avoir des pratiques de chiffrement et de sécurité soigneusement documentées.
- Doit disposer d'un audit publié par une tierce partie indépendante et réputée.
- Toute télémétrie non essentielle doit être facultative.
- Ne doit pas collecter plus de DPI que nécessaire à des fins de facturation.

#### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- La télémétrie devrait être optionnelle (désactivée par défaut) ou ne pas être collectée du tout.
- Devrait être open-source et raisonnablement auto-hébergeable.

## Stockage local

Ces options vous permettent de gérer une base de données de mots de passe chiffrés localement.

### KeePassXC

!!! recommendation

    ![Logo KeePassXC](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** est un fork communautaire de KeePassX, un portage natif multiplateforme de KeePass Password Safe, dans le but de l'étendre et de l'améliorer avec de nouvelles fonctionnalités et des corrections de bugs afin de fournir un gestionnaire de mots de passe open-source riche en fonctionnalités, multiplateforme et moderne.
    
    [:octicons-home-16: Page d'accueil](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Code source" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribute }
    
    ??? downloads "Téléchargements"
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC stocke ses données d'exportation sous forme de fichiers [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Cela peut entraîner une perte de données si vous importez ce fichier dans un autre gestionnaire de mots de passe. Nous vous conseillons de vérifier chaque entrée manuellement.

### KeePassDX (Android)

!!! recommendation

    ![Logo KeePassDX](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** est un gestionnaire de mots de passe léger pour Android. Il permet de modifier des données cryptées dans un seul fichier au format KeePass et de remplir les formulaires de manière sécurisée. Il fonctionne sur tous les principaux systèmes d'exploitation de bureau et de serveur (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Page d'accueil](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Code source" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS & macOS)

!!! recommendation

    ![Logo Strongbox](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** est un gestionnaire de mots de passe natif et open-source pour iOS et macOS. Prenant en charge les formats KeePass et Password Safe, Strongbox peut être utilisé en tandem avec d'autres gestionnaires de mots de passe, comme KeePassXC, sur des plateformes autres qu'Apple. En utilisant un [modèle freemium](https://strongboxsafe.com/pricing/), Strongbox propose la plupart des fonctionnalités dans son volet gratuit, tandis que les fonctions plus pratiques [features](https://strongboxsafe.com/comparison/) - telles que l'authentification biométrique - sont verrouillées par un abonnement ou une licence perpétuelle.
    
    [:octicons-home-16: Page d'accueil](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Code source" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Contribuer }
    
    ??? downloads "Téléchagements"
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

En outre, une version hors ligne est proposée : [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Cette version est dépouillée dans le but de réduire la surface d'attaque.

### Ligne de commande

Ces produits sont des gestionnaires de mots de passe minimaux qui peuvent être utilisés dans des applications de script.

#### gopass

!!! recommendation

    ![logo gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** est un gestionnaire de mots de passe pour ligne de commande écrit en Go. Il fonctionne sur tous les principaux systèmes d'exploitation de bureau et de serveur (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Page d'accueil](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Code source" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum](https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

- Doit être multiplateforme.

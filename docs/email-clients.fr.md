---
title: "Partage de fichiers"
icon: material/email-open
---

Notre liste de recommandations contient des clients de messagerie qui prennent en charge à la fois [OpenPGP](encryption.md#openpgp) et l'authentification forte telle que [Open Authorization (OAuth)](https://en.wikipedia.org/wiki/OAuth). OAuth vous permet d'utiliser l'[Authentification à Multi-Facteurs](multi-factor-authentication) et d'empêcher le vol de compte.

??? Attention "L'e-mail ne fournit pas de confidentialité persistante" Lors de l'utilisation de la technologie de chiffrement de bout en bout (E2EE) comme OpenPGP, l'e-mail aura toujours [certaines métadonnées](email.md#email-metadata-overview) qui ne sont pas chiffrées dans l'en-tête de l'e-mail.

    OpenPGP ne prend pas non plus en charge la [confidentialité persistante](https://fr.wikipedia.org/wiki/Confidentialit%C3%A9_persistante), ce qui signifie que si votre clé privée ou celle du destinataire est volée, tous les messages précédents chiffrés avec cette clé seront exposés: [Comment protéger mes clés privées ?](basics/email-security.md) Envisagez l'utilisation d'un support qui assure la confidentialité persistante:
    
    [Communication en temps réel](real-time-communication.md){ .md-button }

## Multi-Plateformes

### Thunderbird

!!! recommendation

    ![Logo Thunderbird](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** est un client de messagerie, de groupes de discussion, de flux d'informations et de chat (XMPP, IRC, Twitter) gratuit, open-source et multiplateforme, développé par la communauté Thunderbird, et précédemment par la Fondation Mozilla.
    
    [:octicons-home-16: Page d'accueil](https://www.thunderbird.net/fr/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://support.mozilla.org/fr/products/thunderbird){ .card-link title=Documentation}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Code Source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-windows11: Windows](https://www.thunderbird.net/fr/)
        - [:simple-apple: macOS](https://www.thunderbird.net/fr/)
        - [:simple-linux: Linux](https://www.thunderbird.net/fr/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### Configuration recommandée

Nous vous recommandons de modifier certains de ces paramètres pour rendre Thunderbird un peu plus privé.

Ces options se trouvent dans :material-menu: → **Paramètres** → **Confidentialité & Sécurité**.

##### Contenu Web

- [ ] Décochez  **Se souvenir des sites web et des liens que j'ai visités**
- [ ] Décochez  **Accepter les cookies des sites**

##### Télémétrie

- [ ] Décochez  **Autoriser Thunderbird à envoyer des données techniques et d'interaction à Mozilla**

#### Thunderbird-user.js (avancé)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js), est un ensemble d'options de configuration qui vise à désactiver le plus grand nombre possible de fonctions de navigation web dans Thunderbird afin de réduire la surface d'attaque et de préserver la confidentialité. Certains changements sont rétroportés depuis le [projet Arkenfox](https://github.com/arkenfox/user.js).

## Spécifique à une Plateforme

### Apple Mail (macOS)

!!! recommendation

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** est inclus dans macOS et peut être étendu pour prendre en charge OpenPGP avec [GPG Suite](/encryption/# gpg-suite), ce qui ajoute la possibilité d'envoyer des e-mails chiffrés.
    
    [:octicons-home-16: Page d'accueil](https://support.apple.com/fr-fr/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/fr/legal/privacy/fr-ww/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://support.apple.com/fr-fr/guide/mail/toc){ .card-link title=Documentation}

### Canary Mail (iOS)

!!! recommendation

    ![Logo de Canary Mail](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail** est un client de messagerie payant conçu pour rendre le chiffrement de bout en bout transparent grâce à des fonctions de sécurité telles que le verrouillage biométrique des applications.
    
    [:octicons-home-16: Page d'accueil](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentation}
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! warning "Avertissement"

    Canary Mail n'a publié que récemment un client Windows et Android, mais nous ne pensons pas qu'ils soient aussi stables que leurs homologues iOS et Mac.

Canary Mail est à source fermée. Nous le recommandons en raison du peu de choix disponibles pour les clients de messagerie sur iOS prenant en charge PGP E2EE.

### FairEmail (Android)

!!! recommendation

    ![Logo FairEmail](assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** est une application de messagerie électronique minimale et open-source, utilisant des standards ouverts (IMAP, SMTP, OpenPGP) avec une faible consommation de données et de batterie.
    
    [:octicons-home-16: Page d'accueil](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title="Faire un don"}
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! recommendation

    !Logo Evolution](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution** est une application de gestion des informations personnelles qui fournit des fonctionnalités intégrées de courrier, de calendrier et de carnet d'adresses. Evolution dispose d'une vaste [documentation](https://help.gnome.org/users/evolution/stable/) pour vous aider à démarrer.
    
    [:octicons-home-16: Page d'accueil](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title="Faire un don"}
    
    ??? downloads "Téléchargements"
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K-9 Mail (Android)

!!! recommendation

    ![Logo de K-9 Mail](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K-9 Mail** est une application de messagerie indépendante qui prend en charge les boîtes aux lettres POP3 et IMAP, mais ne prend en charge le push mail que pour IMAP.
    
    À l'avenir, K-9 Mail sera le client Thunderbird [officiel] (https://k9mail.app/2022/06/13/K-9-Mail-and-Thunderbird.html) pour Android .
    
    [:octicons-home-16: Page d'accueil](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

### Kontact (KDE)

!!! recommendation

    ![Logo Kontact](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** est une application de gestion des informations personnelles (PIM) issue du projet [KDE](https://kde.org). Il offre un client de messagerie, un carnet d'adresses, un organiseur et un client RSS.
    
    [:octicons-home-16: Page d'accueil](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentation}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (Navigateur)

!!! recommendation

    ![Logo Mailvelope](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelope** est une extension de navigateur qui permet l'échange de courriers électroniques chiffrés selon la norme de chiffrement OpenPGP.
    
    [:octicons-home-16: Page d'accueil](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Code Source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! recommendation

    ![Logo NeoMutt](assets/img/email-clients/mutt.svg){ align=right }
    
    NeoMutt est un lecteur de courrier en ligne de commande (ou MUA) open-source pour Linux et BSD. C'est un fork de [Mutt](https://fr.wikipedia.org/wiki/Mutt) avec des fonctionnalités supplémentaires.
    
    NeoMutt est un client textuel qui a une courbe d'apprentissage abrupte. Il est cependant très personnalisable.
    
    [:octicons-home-16: Page d'accueil](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

### Qualifications minimales

- Les applications développées pour les systèmes d'exploitation open source doivent être open source.
- Ne doit pas collecter de télémétrie, ou disposer d'un moyen facile de désactiver toute télémétrie.
- Doit prendre en charge le chiffrement des messages OpenPGP.

### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- Doit être open-source.
- Doit être multiplateforme.
- Ne doit pas collecter de télémétrie par défaut.
- Doit prendre en charge OpenPGP nativement, c'est-à-dire sans extensions.
- Doit prendre en charge le stockage local de courriels chiffrés par OpenPGP.

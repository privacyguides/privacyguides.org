---
title: "Stockage Cloud"
icon: material/file-cloud
---

De nombreux fournisseurs de stockage cloud nécessitent que vous leur fassiez entièrement confiance pour ne pas consulter vos fichiers. Les alternatives énumérées ci-dessous éliminent le besoin de confiance en vous mettant en position de contrôle de vos données ou en implémentant le chiffrement de bout en bout (E2EE).

Si ces alternatives ne répondent pas à vos besoins, nous vous suggérons de vous tourner vers un [Logiciel de Chiffrement](encryption.md).

??? question "Vous cherchez Nextcloud ?"

    Nextcloud est [toujours un outil recommandé] (productivity.md) pour l'auto-hébergement d'une suite de gestion de fichiers, mais nous ne recommandons pas de fournisseurs de stockage Nextcloud tiers pour le moment, car nous ne recommandons pas la fonctionnalité E2EE intégrée de Nextcloud pour les utilisateurs moyens.

## Proton Drive

!!! recommendation

    !Logo Proton Drive](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** est un service de stockage de fichiers E2EE proposé par le célèbre fournisseur de courriers électroniques chiffrés [Proton Mail] (https://proton.me/mail).
    
    [:octicons-home-16: Page d'accueil](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Code source" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

Les clients mobiles de Proton Drive ont été publiés en décembre 2022 et ne sont pas encore open-source. Proton a toujours retardé la publication de son code source jusqu'à la sortie initiale du produit, et [prévoit de](https://www.reddit.com/r/ProtonDrive/comments/zf14i8/comment/izdwmme/?utm_source=share&utm_medium=web2x&context=3) publier le code source d'ici la fin 2023. Les clients de bureau de Proton Drive sont toujours en cours de développement.

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

### Exigences minimales

- Doit imposer le chiffrement de bout en bout.
- Doit avoir une offre gratuite ou une période d'essai pour les tests.
- Doit prendre en charge l'authentification multifactorielle TOTP ou FIDO2, ou les connexions Passkey.
- Doit offrir une interface web prennant en charge les fonctionnalités de base de gestion des fichiers.
- Doit permettre d'exporter facilement tous les fichiers/documents.
- Doit utiliser un chiffrement standard et audité.

### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- Les clients doivent être open-source.
- Les clients doivent être audités dans leur intégralité par un tiers indépendant.
- Doit offrir des clients natifs pour Linux, Android, Windows, macOS et iOS.
    - Ces clients doivent s'intégrer aux outils natifs du système d'exploitation pour les fournisseurs de stockage cloud, comme l'intégration de l'application Fichiers sur iOS, ou la fonctionnalité DocumentsProvider sur Android.
- Doit permettre de partager facilement des fichiers avec d'autres utilisateurs.
- Doit offrir au moins une fonctionnalité de base d'aperçu et d'édition de fichiers sur l'interface web.

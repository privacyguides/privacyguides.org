---
title: "Stockage cloud"
icon: material/file-cloud
description: De nombreux fournisseurs de stockage cloud nécessitent que vous leur fassiez confiance pour ne pas consulter vos fichiers. Voici des alternatives privées !
---

De nombreux fournisseurs de stockage cloud nécessitent que vous leur fassiez entièrement confiance pour ne pas consulter vos fichiers. Les alternatives énumérées ci-dessous éliminent le besoin de confiance en mettant en œuvre un E2EE sécurisé.

Si ces alternatives ne répondent pas à vos besoins, nous vous suggérons d'utiliser un logiciel de chiffrement tel que [Cryptomator](encryption.md#cryptomator-cloud) avec un autre fournisseur de cloud. L'utilisation de Cryptomator en conjonction avec **tout** fournisseur de cloud (y compris ceux-ci) peut être une bonne idée pour réduire le risque de failles de chiffrement dans les clients natifs d'un fournisseur.

??? question "Vous cherchez Nextcloud ?"

    Nextcloud est [toujours un outil recommandé](productivity.md) pour l'auto-hébergement d'une suite de gestion de fichiers, mais nous ne recommandons pas de fournisseurs de stockage Nextcloud tiers pour le moment, car nous [ne recommandons pas](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) la fonctionnalité E2EE intégrée de Nextcloud pour les utilisateurs moyens.

## Proton Drive

!!! recommendation

    ![Logo Proton Drive](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** est un fournisseur suisse de stockage cloud chiffré issu du populaire fournisseur d'email chiffré [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Page d'accueil](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Code source" }
    
    ??? downloads "Téléchagements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

L'application web Proton Drive a fait l'objet d'un audit indépendant par Securitum en [2021](https://proton.me/blog/security-audit-all-proton-apps), tous les détails n'ont pas été communiqués, mais la lettre d'attestation de Securitum indique ce qui suit :

> Les auditeurs ont relevé deux faiblesses de faible gravité. En outre, cinq recommandations générales ont été formulées. En même temps, nous confirmons qu'aucun problème de sécurité important n'a été identifié pendant le test d'intrusion.

Les nouveaux clients mobiles de Proton Drive n'ont pas encore fait l'objet d'un audit public par un tiers.

## Tresorit

!!! recommendation

    ![Logo Tresorit](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** est un fournisseur hongrois de stockage cloud chiffré fondé en 2011. Tresorit appartient à la Poste suisse, le service postal national de la Suisse.
    
    [:octicons-home-16: Page d'accueil](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentation}
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit a fait l'objet d'un certain nombre d'audits de sécurité indépendants :

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/) : ISO/IEC 27001:2013[^1] [Certification](https://www.certipedia.com/quality_marks/9108644476) de conformité par TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/) : Test de pénétration par Computest
    - Cet examen a permis d'évaluer la sécurité du client web de Tresorit, de l'application Android, de l'application Windows et de l'infrastructure associée.
    - Computest a découvert deux vulnérabilités qui ont été résolues.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/) : Test de pénétration par Ernst & Young.
    - Cette étude a analysé le code source complet de Tresorit et validé que la mise en œuvre correspond aux concepts décrits dans le [livre blanc](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf) de Tresorit.
    - Ernst & Young a également testé les clients web, mobiles et de bureau : "Les résultats des tests n'ont révélé aucun écart par rapport aux affirmations de Tresorit en matière de confidentialité des données".

Ils ont également reçu le Digital Trust Label, une certification de la [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) qui exige la réussite de [35 critères](https://digitaltrust-label.swiss/criteria/) liés à la sécurité, à la confidentialité et à la fiabilité.

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum](https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

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

[^1]: La conformité à la norme [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 concerne le [système de gestion de la sécurité de l'information](https://en.wikipedia.org/wiki/Information_security_management) de l'entreprise et couvre la vente, le développement, la maintenance et le soutien de ses services cloud.

---
title: "Android"
icon: 'simple/android'
---

![Logo d'Android](assets/img/android/android.svg){ align=right }

**Android Open Source Project** est un système d'exploitation mobile à code source ouvert dirigé par Google qui équipe la majorité des appareils mobiles dans le monde. La plupart des téléphones vendus avec Android sont modifiés pour inclure des intégrations et des applications invasives telles que Google Play Services. Vous pouvez donc améliorer considérablement votre vie privée sur votre appareil mobile en remplaçant l'installation par défaut de votre téléphone par une version d'Android dépourvue de ces fonctionnalités invasives.

[:octicons-home-16:](https://source.android.com/){ .card-link title=Page d'accueil }
[:octicons-info-16:](https://source.android.com/docs){ .card-link title=Documentation}
[:octicons-code-16:](https://cs.android.com/android/platform/superproject/){ .card-link title="Code Source" }

Voici les systèmes d'exploitation, les appareils et les applications Android que nous recommandons pour optimiser la sécurité et la confidentialité de votre appareil mobile. Pour en savoir plus sur Android :

- [Présentation générale d'Android :material-arrow-right-drop-circle:](os/android-overview.md)
- [Pourquoi nous recommandons GrapheneOS plutôt que CalyxOS :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/)

## Dérivés de AOSP

Nous vous recommandons d'installer l'un de ces systèmes d'exploitation Android personnalisés sur votre appareil, classés par ordre de préférence, en fonction de la compatibilité de votre appareil avec ces systèmes d'exploitation.

!!! note "À noter"

    Les appareils en fin de vie (tels que les appareils à "support étendu" de GrapheneOS ou de CalyxOS) ne disposent pas de correctifs de sécurité complets (mises à jour de micrologiciel) en raison de l'arrêt du support par le constructeur. Ces appareils ne peuvent pas être considérés comme totalement sûrs, quel que soit le logiciel installé.

### GrapheneOS

!!! recommendation

    ![Logo GrapheneOS](assets/img/android/grapheneos.svg#only-light){ align=right }
    ![Logo GrapheneOS](assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS** est le meilleur choix en matière de confidentialité et de sécurité.
    
    GrapheneOS apporte des améliorations supplémentaires en matière de [renforcement de la sécurité](https://fr.wikipedia.org/wiki/Durcissement_%28informatique%29) et de confidentialité. Il dispose d'un [allocateur de mémoire renforcé](https://github.com/GrapheneOS/hardened_malloc), d'autorisations pour le réseau et les capteurs, et de diverses autres [fonctions de sécurité](https://grapheneos.org/features). GrapheneOS est également livré avec des mises à jour complètes du micrologiciel et des versions signées, de sorte que le démarrage vérifié est entièrement pris en charge.
    
    [:octicons-home-16: Page d'accueil ](https://grapheneos.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://grapheneos.org/faq#privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://grapheneos.org/source){ .card-link title="Code source" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuer }

GrapheneOS prend en charge [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), qui exécute les [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) entièrement sandboxed comme toute autre application normale. Cela signifie que vous pouvez profiter de la plupart des services Google Play, tels que [les notifications push](https://firebase.google.com/docs/cloud-messaging/), tout en vous donnant un contrôle total sur leurs autorisations et leur accès, et tout en les contenant à un [profil de travail](os/android-overview.md#work-profile) ou un [profil d'utilisateur](os/android-overview.md#user-profiles) spécifique de votre choix.

Les téléphones Google Pixel sont les seuls appareils qui répondent actuellement aux [exigences de sécurité matérielle](https://grapheneos.org/faq#device-support) de GrapheneOS.

### DivestOS

!!! recommendation

    ![Logo DivestOS](assets/img/android/divestos.svg){ align=right }
    
    **DivestOS** est un léger dérivé de [LineageOS](https://lineageos.org/).
    DivestOS hérite de nombreux [appareils pris en charge](https://divestos.org/index.php?page=devices&base=LineageOS) de LineageOS. Il a des versions signées, ce qui permet d'avoir un [démarrage vérifié](https://source.android.com/security/verifiedboot) sur certains appareils non-Pixel.
    
    [:octicons-home-16: Page d'accueil](https://divestos.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://divestoseb5nncsydt7zzf5hrfg44md4bxqjs5ifcv4t7gt7u6ohjyyd.onion){ .card-link title="Service oignon" }
    [:octicons-eye-16:](https://divestos.org/index.php?page=privacy_policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://divestos.org/index.php?page=faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/divested-mobile){ .card-link title="Code source" }
    [:octicons-heart-16:](https://divested.dev/index.php?page=donate){ .card-link title=Contribuer }

DivestOS dispose d'un système de [correction](https://gitlab.com/divested-mobile/cve_checker) automatique des vulnérabilités du noyau ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)), de moins de morceaux propriétaires et d'un fichier [hosts](https://divested.dev/index.php?page=dnsbl) personnalisé. Son WebView renforcé, [Mulch](https://gitlab.com/divested-mobile/mulch), permet [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) pour toutes les architectures et [un partitionnement de l'état du réseau](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning), et reçoit des mises à jour hors bande. DivestOS inclut également les correctifs de noyau de GrapheneOS et active toutes les fonctions de sécurité de noyau disponibles via [defconfig hardening](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758). Tous les noyaux plus récents que la version 3.4 incluent une [désinfection](https://lwn.net/Articles/334747/) complète de la page et tous les ~22 noyaux compilés par Clang ont [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471) activé.

DivestOS met en œuvre certains correctifs de renforcement du système développés à l'origine pour GrapheneOS. DivestOS 16.0 et plus implémente les autorisations [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) et SENSORS de GrapheneOS, l'[allocateur de mémoire renforcé](https://github.com/GrapheneOS/hardened_malloc), [exec-spawning](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/#additional-hardening), la [constification](https://en.wikipedia.org/wiki/Java_Native_Interface) [JNI](https://en.wikipedia.org/wiki/Const_(computer_programming)), et des patchs de renforcement [bioniques](https://en.wikipedia.org/wiki/Bionic_(software)) partiels. Les versions 17.1 et supérieures offrent l'option de GrapheneOS pour [rendre aléatoire les adresses MAC](https://en.wikipedia.org/wiki/MAC_address#Randomization) entre réseaux, le contrôle [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) et les options de redémarrage/coupure Wi-Fi/coupure Bluetooth automatique [sur délai](https://grapheneos.org/features).

DivestOS utilise F-Droid comme magasin d'applications par défaut. Normalement, nous recommandons d'éviter F-Droid en raison de ses nombreux [problèmes de sécurité](#f-droid). Cependant, le faire sur DivestOS n'est pas viable ; les développeurs mettent à jour leurs applications via leurs propres dépôts F-Droid ([Official DivestOS](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467) et [WebView DivestOS](https://divestos.org/fdroid/webview/?fingerprint=FB426DA1750A53D7724C8A582B4D34174E64A84B38940E5D5A802E1DFF9A40D2)). Nous recommandons de désactiver l'application officielle F-Droid et d'utiliser [Neo Store](https://github.com/NeoApplications/Neo-Store/) avec les dépôts DivestOS activés pour maintenir ces composants à jour. Pour les autres applications, nos méthodes recommandées pour les obtenir restent applicables.

!!! warning "Avertissement"

    L'[état](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS) des mises à jour du micrologiciel DivestOS et le contrôle de la qualité varient selon les appareils qu'il prend en charge. Nous recommandons toujours GrapheneOS en fonction de la compatibilité de votre appareil. Pour les autres appareils, DivestOS est une bonne alternative.
    
    Tous les appareils pris en charge ne disposent pas d'un démarrage vérifié, et certains le font mieux que d'autres.

## Appareils Android

Lorsque vous achetez un appareil, nous vous recommandons d'en prendre un aussi neuf que possible. Les logiciels et les micrologiciels des appareils mobiles ne sont pris en charge que pour une durée limitée. L'achat de nouveaux appareils permet donc de prolonger cette durée de vie autant que possible.

Évitez d'acheter des téléphones auprès des opérateurs de réseaux mobiles. Ces derniers ont souvent un **chargeur d'amorçage verrouillé** et ne supportent pas le [déverrouillage constructeur](https://source.android.com/devices/bootloader/locking_unlocking). Ces variantes de téléphone vous empêcheront d'installer tout type de distribution Android alternative.

Soyez très **prudent** lorsque vous achetez des téléphones d'occasion sur des marchés en ligne. Vérifiez toujours la réputation du vendeur. Si l'appareil est volé, il est possible que l'[IMEI soit mis sur liste noire](https://www.gsma.com/security/resources/imei-blacklisting/). Il y a également un risque d'être associé à l'activité de l'ancien propriétaire.

Quelques conseils supplémentaires concernant les appareils Android et la compatibilité du système d'exploitation :

- N'achetez pas d'appareils qui ont atteint ou sont sur le point d'atteindre leur fin de vie, des mises à jour supplémentaires du micrologiciel doivent être fournies par le fabricant.
- N'achetez pas de téléphones LineageOS ou /e/ OS préchargés ou tout autre téléphone Android sans prise en charge adéquate de [Démarrage Vérifié](https://source.android.com/security/verifiedboot) et sans mises à jour du micrologiciel. En outre, ces appareils ne vous permettent pas de vérifier s'ils ont été manipulés.
- En bref, si un appareil ou une distribution Android ne figure pas dans cette liste, il y a probablement une bonne raison. Consultez notre [forum](https://discuss.privacyguides.net/) pour en savoir plus !

### Google Pixel

Les téléphones Google Pixel sont les **seuls** appareils dont nous recommandons l'achat. Les téléphones Pixel ont une sécurité matérielle plus forte que tous les autres appareils Android actuellement sur le marché, grâce à une prise en charge AVB adéquate pour les systèmes d'exploitation tiers et aux puces de sécurité personnalisées [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) de Google faisant office d'Elément Sécurisé.

!!! recommendation

    ![Google Pixel 6](assets/img/android/google-pixel.png){ align=right }
    
    Les appareils **Google Pixel** sont connus pour avoir une bonne sécurité et prendre correctement en charge le [Démarrage Vérifié](https://source.android.com/security/verifiedboot), même lors de l'installation de systèmes d'exploitation personnalisés.
    
    À partir des **Pixel 6** et **6 Pro**, les appareils Pixel bénéficient d'un minimum de 5 ans de mises à jour de sécurité garanties, ce qui leur assure une durée de vie bien plus longue que les 2 à 4 ans généralement proposés par les constructeurs concurrents.
    
    [:material-shopping: Boutique](https://store.google.com/category/phones){ .md-button .md-button--primary }

Les Eléments Sécurisés comme le Titan M2 sont plus limités que le Trusted Execution Environment du processeur utilisé par la plupart des autres téléphones, car ils ne sont utilisés que pour le stockage des secrets, l'attestation matérielle et la limitation du débit, et non pour exécuter des programmes "de confiance". Les téléphones dépourvus d'un Elément Sécurisé doivent utiliser le TEE pour *toutes* ces fonctions, ce qui élargit la surface d'attaque.

Les téléphones Google Pixel utilisent un OS TEE appelé Trusty qui est [open-source](https://source.android.com/security/trusty#whyTrusty), contrairement à de nombreux autres téléphones.

L'installation de GrapheneOS sur un téléphone Pixel est facile avec leur [installateur web](https://grapheneos.org/install/web). Si vous ne vous sentez pas à l'aise pour le faire vous-même et que vous êtes prêt à dépenser un peu plus d'argent, consultez le site [NitroPhone](https://shop.nitrokey.com/shop) car ils sont préchargés avec GrapheneOS et viennent de la société réputée [Nitrokey](https://www.nitrokey.com/about).

Quelques conseils supplémentaires pour l'achat d'un Google Pixel :

- Si vous cherchez une bonne affaire pour un appareil Pixel, nous vous suggérons d'acheter un modèle "**a**", juste après la sortie du prochain produit phare de la marque. Les remises sont généralement disponibles parce que Google essaie d'écouler son stock.
- Tenez compte des offres spéciales et réductions proposées par les magasins physiques.
- Consultez les sites communautaires de bonnes affaires en ligne dans votre pays. Ils peuvent vous signaler les bonnes ventes.
- Google fournit une liste indiquant le [cycle de support](https://support.google.com/nexus/answer/4457705) pour chacun de ses appareils. Le prix par jour d'un appareil peut être calculé comme suit :\text{Coût} - \text {Date fin de vie}-\text{Date du jour}$, ce qui signifie que plus l'utilisation de l'appareil est longue, plus le coût par jour est faible.

## Applications générales

Nous recommandons une grande variété d'applications Android sur ce site. Les applications répertoriées ici sont exclusives à Android et améliorent ou remplacent les principales fonctionnalités du système.

### Shelter

!!! recommendation

    ![Logo Shelter](assets/img/android/shelter.svg){ align=right }
    
    **Shelter** est une application qui vous aide à tirer parti de la fonctionnalité Profil de Travail d'Android pour isoler ou dupliquer des applications sur votre appareil.
    
    Shelter prend en charge le blocage de la recherche de contacts entre profils et le partage de fichiers entre profils via le gestionnaire de fichiers par défaut ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).
    
    [:octicons-repo-16: Dépôt](https://gitea.angry.im/PeterCxy/Shelter#shelter){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitea.angry.im/PeterCxy/Shelter){ .card-link title="Code source" }
    [:octicons-heart-16:](https://www.patreon.com/PeterCxy){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)

!!! warning "Avertissement"

    Shelter est recommandé par rapport à [Insular](https://secure-system.gitlab.io/Insular/) et [Island](https://github.com/oasisfeng/island) car il prend en charge le [blocage de la recherche de contact](https://secure-system.gitlab.io/Insular/faq.html).
    
    En utilisant Shelter, vous accordez une confiance totale à son développeur, car Shelter agit en tant qu'[Administrateur de l'appareil](https://developer.android.com/guide/topics/admin/device-admin) pour créer le Profil de Travail, et il a un accès étendu aux données stockées dans ce dernier.

### Auditor

!!! recommendation

    ![Logo d'Auditor](assets/img/android/auditor.svg#only-light){ align=right }
    ![Logo d'Auditor](assets/img/android/auditor-dark.svg#only-dark){ align=right }
    
    **Auditor** est une application qui exploite les fonctions de sécurité matérielle pour assurer le contrôle de l'intégrité des [appareils pris en charge] (https://attestation.app/about#device-support). Actuellement, il ne fonctionne qu'avec GrapheneOS et le système d'exploitation d'origine de l'appareil.
    
    [:octicons-home-16: Page d'accueil](https://attestation.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://attestation.app/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://attestation.app/about){ .card-link title=Documentation}
    [:octicons-code-16:](https://attestation.app/source){ .card-link title="Code source" }
    [:octicons-heart-16:](https://attestation.app/donate){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Auditor/releases)
        - [:material-cube-outline: Magasin d'application de GrapheneOS](https://github.com/GrapheneOS/Apps/releases)

Auditor effectue l'attestation et la détection d'intrusion :

- A l'aide d'un modèle de [Confiance lors de la première utilisation (TOFU - Trust On First Use)](https://en.wikipedia.org/wiki/Trust_on_first_use) entre un *auditeur* et un *audité*, la paire établit une clé privée dans le trousseau [matériel](https://source.android.com/security/keystore/) d'*Auditor*.
- L'*auditeur* peut être une autre instance de l'application Auditor ou le [Service d'Attestation à Distance](https://attestation.app).
- L'*auditeur* enregistre l'état et la configuration actuels de l'*audité*.
- En cas d'altération du système d'exploitation de l'*audité* après l'appairage, l'auditeur sera informé de la modification de l'état et des configurations de l'appareil.
- Vous serez alerté de ce changement.

Aucune information personnelle identifiable n'est soumise au service d'attestation. Nous vous recommandons de vous inscrire avec un compte anonyme et d'activer l'attestation à distance pour un contrôle continu.

Si votre [modèle de menace](basics/threat-modeling.md) nécessite une certaine confidentialité, vous pouvez envisager d'utiliser [Orbot](tor.md#orbot) ou un VPN pour cacher votre adresse IP au service d'attestation. Pour s'assurer de l'authenticité de votre matériel et de votre système d'exploitation, [effectuez une attestation locale](https://grapheneos.org/install/web#verifying-installation) immédiatement après l'installation de l'appareil et avant toute connexion à Internet.

### Secure Camera

!!! recommendation

    ![Logo de Secure Camera](assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Logo de Secure Camera](assets/img/android/secure_camera-dark.svg#only-dark){ align=right }
    
      **Secure Camera** est une application de caméra axée sur la confidentialité et la sécurité qui peut capturer des images, des vidéos et des QR codes. Les extensions du vendeur CameraX (Portrait, HDR, Night Sight, Face Retouch et Auto) sont également prises en charge sur les appareils disponibles.
    
    [:octicons-repo-16: Dépôt](https://github.com/GrapheneOS/Camera){ .md-button .md-button--primary }
    [:octicons-info-16:](https://grapheneos.org/usage#camera){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/GrapheneOS/Camera){ .card-link title="Code source" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Camera/releases)
        - [:material-cube-outline: Magasin d'application de GrapheneOS](https://github.com/GrapheneOS/Apps/releases)

Les principales caractéristiques de confidentialité comprennent :

- Suppression automatique des métadonnées [Exif](https://en.wikipedia.org/wiki/Exif) (activée par défaut)
- Utilisation de la nouvelle API [Media](https://developer.android.com/training/data-storage/shared/media), donc les [autorisations de stockage](https://developer.android.com/training/data-storage) ne sont pas nécessaires
- L'autorisation microphone n'est pas nécessaire, sauf si vous souhaitez enregistrer des sons

!!! note "À noter"

    Les métadonnées ne sont pour le moment pas supprimées des fichiers vidéo, mais cela est prévu.
    
    Les métadonnées d'orientation de l'image ne sont pas supprimées. Si vous activez la fonction de localisation (dans Secure Camera), elle ne **sera pas** non plus supprimée. Si vous voulez la supprimer ultérieurement, vous devrez utiliser une application externe telle que [ExifEraser](data-redaction.md#exiferaser).

### Secure PDF Viewer

!!! recommendation

    ![Logo de Secure PDF Viewer](assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![Logo de Secure PDF Viewer](assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }
    
    **Secure PDF Viewer** est un visualiseur de PDF basé sur [pdf.js](https://en.wikipedia.org/wiki/PDF.js) qui ne nécessite aucune autorisation. Le PDF est introduit dans une [webview](https://developer.android.com/guide/webapps/webview) [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(software_development)). Cela signifie qu'il n'a pas besoin d'autorisation directe pour accéder au contenu ou aux fichiers.
    
    [Content-Security-Policy](https://fr.wikipedia.org/wiki/Content_Security_Policy) est utilisé pour faire en sorte que les propriétés JavaScript et de style dans la WebView soient entièrement statiques.
    
    [:octicons-repo-16: Dépôt](https://github.com/GrapheneOS/PdfViewer){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/GrapheneOS/PdfViewer){ .card-link title="Code source" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)
        - [:material-cube-outline: Magasin d'application de GrapheneOS](https://github.com/GrapheneOS/Apps/releases)

## Obtenir des applications

### Magasin d'applications GrapheneOS

Le magasin d'applications de GrapheneOS est disponible sur [GitHub](https://github.com/GrapheneOS/Apps/releases). Il prend en charge Android 12 et plus et est capable de se mettre à jour. Le magasin d'applications contient des applications autonomes construites par le projet GrapheneOS, telles que [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera), et [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). Si vous recherchez ces applications, nous vous recommandons vivement de les obtenir à partir du magasin d'applications de GrapheneOS plutôt que du Play Store, car les applications de leur magasin sont signées par la signature du projet GrapheneOS à laquelle Google n'a pas accès.

### Aurora Store

Le Google Play Store nécessite un compte Google pour se connecter, ce qui n'est pas idéal pour la confidentialité. Vous pouvez contourner ce problème en utilisant un client alternatif, tel que Aurora Store.

!!! recommendation

    ![Logo Aurora Store](assets/img/android/aurora-store.webp){ align=right }
    
    **Aurora Store** est un client Google Play Store qui ne nécessite pas de compte Google, de services Google Play ou microG pour télécharger des applications.
    
    [:octicons-home-16: Page d'accueil](https://auroraoss.com/){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/AuroraOSS/AuroraStore){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-gitlab: GitLab](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

Aurora Store ne vous permet pas de télécharger des applications payantes grâce à sa fonction de compte anonyme. Vous pouvez éventuellement vous connecter avec votre compte Google sur Aurora Store pour télécharger les applications que vous avez achetées, ce qui donne accès à la liste des applications que vous avez installées à Google, mais vous bénéficiez toujours de l'avantage de ne pas avoir besoin du client Google Play complet et des services Google Play ou microG sur votre appareil.

### Manuellement avec les notifications RSS

Pour les applications publiées sur des plateformes telles que GitHub et GitLab, vous pouvez ajouter un flux RSS à votre [agrégateur d'actualités](/news-aggregators) qui vous aidera à suivre les nouvelles versions.

![RSS APK](./assets/img/android/rss-apk-light.png#only-light) ![RSS APK](./assets/img/android/rss-apk-dark.png#only-dark) ![Notes de version APK](./assets/img/android/rss-changes-light.png#only-light) ![Notes de version APK](./assets/img/android/rss-changes-dark.png#only-dark)

#### GitHub

Sur GitHub, en prenant l'exemple de [Secure Camera](#secure-camera), vous naviguez vers sa [page de publications](https://github.com/GrapheneOS/Camera/releases) et ajoutez `.atom` à l'URL :

`https://github.com/GrapheneOS/Camera/releases.atom`

#### GitLab

Sur GitLab, en prenant l'exemple de [Aurora Store](#aurora-store) , vous naviguez vers son [dépôt de projet](https://gitlab.com/AuroraOSS/AuroraStore) et ajoutez `/-/tags?format=atom` à l'URL :

`https://gitlab.com/AuroraOSS/AuroraStore/-/tags?format=atom`

#### Vérifier les empreintes numériques des APK

Si vous téléchargez des fichiers APK à installer manuellement, vous pouvez vérifier leur signature à l'aide de l'outil [`apksigner`](https://developer.android.com/studio/command-line/apksigner), qui fait partie des [build-tools](https://developer.android.com/studio/releases/build-tools) d'Android.

1. Installez [Java JDK](https://www.oracle.com/java/technologies/downloads/).

2. Téléchargez les [outils de ligne de commande d'Android Studio](https://developer.android.com/studio#command-tools).

3. Extrayez l'archive téléchargée :

    ```bash
    unzip commandlinetools-*.zip
    cd cmdline-tools
    ./bin/sdkmanager --sdk_root=./ "build-tools;29.0.3"
    ```

4. Exécutez la commande de vérification de la signature :

    ```bash
    ./build-tools/29.0.3/apksigner verify --print-certs ../Camera-37.apk
    ```

5. Les hachés obtenus peuvent ensuite être comparés avec une autre source. Certains développeurs, comme Signal, [montrent les empreintes numériques](https://signal.org/android/apk/) sur leur site web.

    ```bash
    Signer #1 certificate DN: CN=GrapheneOS
    Signer #1 certificate SHA-256 digest: 6436b155b917c2f9a9ed1d15c4993a5968ffabc94947c13f2aeee14b7b27ed59
    Signer #1 certificate SHA-1 digest: 23e108677a2e1b1d6e6b056f3bb951df7ad5570c
    Signer #1 certificate MD5 digest: dbbcd0cac71bd6fa2102a0297c6e0dd3
    ```

### F-Droid

![Logo F-Droid](assets/img/android/f-droid.svg){ align=right width=120px }

==Nous ne recommandons **pas** actuellement F-Droid comme moyen d'obtenir des applications.== F-Droid est souvent recommandé comme une alternative à Google Play, en particulier dans la communauté de la vie privée. La possibilité d'ajouter des dépôts tiers et de ne pas être confiné au jardin clos de Google a conduit à sa popularité. F-Droid dispose en outre de [versions reproductibles](https://f-droid.org/en/docs/Reproducible_Builds/) pour certaines applications et est dédié aux logiciels libres et open-source. Cependant, il y a des [problèmes notables](https://privsec.dev/posts/android/f-droid-security-issues/) avec le client officiel F-Droid, leur contrôle de qualité, et la façon dont ils construisent, signent, et livrent les paquets.

En raison de leur processus de construction d'applications, les applications du dépôt officiel de F-Droid sont souvent en retard sur les mises à jour. Les mainteneurs de F-Droid réutilisent également les identifiants des paquets tout en signant les applications avec leurs propres clés, ce qui n'est pas idéal car cela donne à l'équipe F-Droid une confiance ultime.

D'autres dépôts tiers populaires tels que [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) atténuent certains de ces problèmes. Le dépôt IzzyOnDroid récupère les versions directement depuis GitHub et constitue la meilleure alternative aux dépôts des développeurs. Cependant, ce n'est pas quelque chose que nous pouvons recommander, car les applications sont généralement [retirées](https://github.com/vfsfitvnm/ViMusic/issues/240#issuecomment-1225564446) de ce dépôt lorsqu'elles arrivent dans le dépôt principal de F-droid. Bien que cela soit logique (puisque le but de ce dépôt particulier est d'héberger des applications avant qu'elles ne soient acceptées dans le dépôt principal de F-Droid), cela peut vous laisser avec des applications installées qui ne reçoivent plus de mises à jour.

Cela dit, les dépôts [F-droid](https://f-droid.org/en/packages/) et [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) abritent d'innombrables applications. Ils peuvent donc être un outil utile pour rechercher et découvrir des applications open-source que vous pouvez ensuite télécharger via le Play Store, Aurora Store ou en obtenant l'APK directement auprès du développeur. Il est important de garder à l'esprit que certaines applications de ces dépôts n'ont pas été mises à jour depuis des années et peuvent s'appuyer sur des bibliothèques non prises en charge, entre autres, ce qui constitue un risque potentiel pour la sécurité. Vous devez faire preuve de discernement lorsque vous recherchez de nouvelles applications par cette méthode.

!!! note "À noter"

    Dans certains cas rares, le développeur d'une application ne la distribue que par le biais de F-droid ([Gadgetbridge](https://gadgetbridge.org/) en est un exemple). Si vous avez vraiment besoin d'une telle application, nous vous recommandons d'utiliser [Neo Store](https://github.com/NeoApplications/Neo-Store/) au lieu de l'application officielle F-droid pour l'obtenir.

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

### Systèmes d'exploitation

- Doit être un logiciel open source.
- Doit prendre en charge le verrouillage du chargeur d'amorçage avec prise en charge d'une clé AVB personnalisée.
- Doit recevoir les mises à jour majeures d'Android dans le mois suivant leur publication.
- Doit recevoir les mises à jour des fonctionnalités d'Android (version mineure) dans les 14 jours suivant leur publication.
- Doit recevoir les correctifs de sécurité réguliers dans les 5 jours suivant leur publication.
- Ne doit **pas** être fourni "rooté".
- Ne doit **pas** activer Google Play Services par défaut.
- Ne doit **pas** nécessiter une modification du système pour prendre en charge les Google Play Services.

### Appareils

- Doit prendre en charge au moins l'un des systèmes d'exploitation personnalisés que nous recommandons.
- Doit être actuellement vendu neuf en magasin.
- Doit recevoir un minimum de 5 ans de mises à jour de sécurité.
- Doit disposer d'un matériel dédié aux éléments sécurisés.

### Applications

- Les applications de cette page ne doivent pas être applicables à une autre catégorie de logiciels sur le site.
- Les applications générales doivent étendre ou remplacer les fonctionnalités de base du système.
- Les applications doivent être régulièrement mises à jour et entretenues.

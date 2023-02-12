---
title: "Outils d'Authentification Multi-Facteurs"
icon: 'material/two-factor-authentication'
---

## Clés de Sécurité Matérielles

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    Les **YubiKeys** font partie des clés de sécurité les plus populaires. Certains modèles de YubiKey disposent d'un large éventail de fonctionnalités telles que : [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 et WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP et HOTP](https://developers.yubico.com/OATH).
    
    L'un des avantages de la YubiKey est qu'une seule clé peut faire presque tout (YubiKey 5) ce que vous pouvez attendre d'une clé de sécurité matérielle. Nous vous encourageons à faire le [quiz](https://www.yubico.com/quiz/) avant d'acheter afin d'être sûr de faire le bon choix.
    
    [:octicons-home-16: Page d'accueil](https://www.yubico.com/?lang=fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

Le [tableau de comparaison](https://www.yubico.com/store/compare/) montre les fonctionnalités de chaque YubiKeys et leurs différences. Nous vous recommandons vivement de choisir des clés de la série YubiKey 5.

Les YubiKeys peuvent être programmées à l'aide du [Gestionnaire YubiKey](https://www.yubico.com/support/download/yubikey-manager/) ou de l'[Outil de Personnalisation YubiKey](https://www.yubico.com/support/download/yubikey-personalization-tools/). Pour gérer les codes TOTP, vous pouvez utiliser le [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). Tous les clients de Yubico sont open source.

Pour les modèles qui supportent HOTP et TOTP, il y a 2 emplacements dans l'interface OTP qui peuvent être utilisés pour HOTP et 32 emplacements pour stocker les secrets TOTP. Ces secrets sont stockés et chiffrés sur la clé et ne sont jamais exposés aux appareils sur lesquels elle est branchée. Une fois qu'une graine (secret partagé) est donnée à l'authentificateur Yubico, celui-ci ne donnera que les codes à six chiffres, mais jamais la graine. Ce modèle de sécurité permet de limiter ce qu'un attaquant peut faire s'il compromet l'un des appareils exécutant le Yubico Authenticator et rend la YubiKey résistante à un attaquant physique.

!!! warning
    Le micrologiciel des YubiKeys n'est pas open source et ne peut pas être mis à jour. Si vous souhaitez obtenir des fonctionnalités dans des versions plus récentes du firmware, ou si la version du firmware que vous utilisez présente une vulnérabilité, vous devrez acheter une nouvelle clé.

### Nitrokey / Librem Key

!!! recommendation

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** possède une clé de sécurité qui supporte [FIDO2 et WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) appelée la **Nitrokey FIDO2**. Pour la prise en charge de PGP, vous devez acheter l'une de leurs autres clés comme la **Nitrokey Start**, la **Nitrokey Pro 2** ou la **Nitrokey Storage 2**.
    
    [:octicons-home-16: Page d'accueil](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentation}

Le [tableau de comparaison](https://www.nitrokey.com/#comparison) montre les fonctionnalités de chaque Nitrokey et leurs différences. La **Nitrokey 3** répertoriée aura un ensemble de fonctionnalités combinées.

Les modèles de Nitrokey peuvent être configurés à l'aide de l'[application Nitrokey](https://www.nitrokey.com/download).

Pour les modèles qui supportent HOTP et TOTP, il y a 3 emplacements pour HOTP et 15 pour TOTP. Certaines Nitrokeys peuvent faire office de gestionnaire de mots de passe. tip Ils peuvent stocker 16 identifiants différents et les chiffrer en utilisant le même mot de passe que l'interface OpenPGP.

!!! recommendation

    Bien que les Nitrokeys ne divulguent pas les secrets HOTP/TOTP à l'appareil auquel ils sont connectés, le stockage HOTP et TOTP n'est **pas** chiffré et est vulnérable aux attaques physiques. Si vous cherchez à stocker ces secrets HOTP ou TOTP, nous vous recommandons vivement d'utiliser plutôt un Yubikey.

!!! recommendation

    La réinitialisation de l'interface OpenPGP sur une Nitrokey rendra également la base de données des mots de passe [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

 La Nitrokey Pro 2, Nitrokey Storage 2 et la prochaine Nitrokey 3 prennent en charge la vérification de l'intégrité du système pour les ordinateurs portables équipés du micrologiciel [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/). La [Librem Key](https://puri.sm/products/librem-key/) de Purism est un NitroKey Pro 2 rebaptisé avec un micrologiciel similaire et peut également être utilisé pour les mêmes fins.

Le micrologiciel de Nitrokey est open-source, contrairement à la YubiKey. Le micrologiciel des modèles NitroKey modernes (à l'exception de la **NitroKey Pro 2**) peut être mis à jour.

!!! tip

    L'application Nitrokey, bien que compatible avec les clés Librem, nécessite la version 3.6 ou supérieure de `libnitrokey` pour les reconnaître. Actuellement, le paquet est périmé sur Windows, macOS, et sur la plupart des dépôts des distributions Linux, donc vous devrez probablement compiler l'application Nitrokey vous-même pour la faire fonctionner avec la clé Librem. Sous Linux, vous pouvez obtenir une version à jour à partir de [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

## Applications d'Authentification

Les applications d'authentification implémentent une norme de sécurité adoptée par l'Internet Engineering Task Force (IETF) appelée **Mots de Passe à Usage Unique Basé sur le Temps**, ou **Time based One Time Password (TOTP)**. Il s'agit d'une méthode par laquelle les sites web partagent avec vous un secret qui est utilisé par votre application d'authentification pour générer un code à six chiffres (généralement) basé sur l'heure actuelle, que vous saisissez lorsque vous vous connectez pour que le site web puisse le vérifier. En général, ces codes sont régénérés toutes les 30 secondes, et dès qu'un nouveau code est généré, l'ancien devient inutile. Même si un pirate obtient un code à six chiffres, il n'a aucun moyen d'inverser ce code pour obtenir le secret original, ni de prédire quels seront les codes futurs.

Nous vous recommandons vivement d'utiliser des applications TOTP mobiles plutôt que des alternatives de bureau, car Android et IOS offrent une meilleure sécurité et une meilleure isolation des applications que la plupart des systèmes d'exploitation de bureau.

### Aegis Authenticator

!!! recommendation

    ![Logo Aegis](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** est une application gratuite, sécurisée et open source pour gérer les doubles authentifications de vos services en ligne.
    
    [Page d'accueil](https://getaegis.app){ .md-button .md-button--primary } [Politique de confidentialité](https://getaegis.app/aegis/privacy.html){ .md-button }
    
    ??? downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis)
        - [:fontawesome-brands-github: Source](https://github.com/beemdevelopment/Aegis)

### Raivo OTP

!!! recommendation

    ![Logo Raivo OTP](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** est un client iOS natif, léger et sécurisé qui permet de gérer des TOTP & HOTP. Raivo OTP offre une sauvegarde & une synchronisation iCloud optionnelle. Raivo OTP est également disponible pour macOS sous la forme d'une application de barre d'état, mais l'application Mac ne fonctionne pas indépendamment de l'application iOS.
    
    [Info sur le projet](https://github.com/raivo-otp/ios-application#readme){ .md-button .md-button--primary } [Politique de confidentialité](https://github.com/raivo-otp/ios-application/blob/master/PRIVACY.md){ .md-button }
    
    ??? downloads
    
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)
        - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/us/app/raivo-otp/id1498497896)
        - [:fontawesome-brands-github: Source](https://github.com/raivo-otp/ios-application)

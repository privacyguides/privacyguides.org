---
title: "Logiciels de Chiffrement"
icon: material/file-lock
---

Le chiffrement des données est le seul moyen de contrôler de qui peut y accéder. Si vous n'utilisez pas actuellement de logiciel de chiffrement pour votre disque dur, vos e-mails ou vos fichiers, vous devriez choisir une option ici.

## Multi-plateforme

Les options répertoriées ici sont multiplateformes et parfaites pour créer des sauvegardes chiffrées de vos données.

### Cryptomator (Cloud)

!!! recommendation

    ![Logo Cryptomator](assets/img/encryption-software/cryptomator.svg){ align=right }
    
    **Cryptomator** est une solution de chiffrement conçue pour enregistrer vos fichiers de manière privée vers n'importe quel fournisseur de cloud. Il vous permet de créer des coffres-forts qui sont stockés sur un disque virtuel, dont le contenu est chiffré et synchronisé avec votre fournisseur de stockage cloud.
    
    [:octicons-home-16: Page d'accueil](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://docs.cryptomator.org/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://cryptomator.org/donate/){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://cryptomator.org/downloads)
        - [:fontawesome-brands-apple: macOS](https://cryptomator.org/downloads)
        - [:fontawesome-brands-linux: Linux](https://cryptomator.org/downloads)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.cryptomator.Cryptomator)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:fontawesome-brands-android: Android](https://cryptomator.org/android)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/fr/app/cryptomator-2/id1560822163)

Cryptomator utilise le chiffrement AES-256 pour chiffrer les fichiers et les noms de fichiers. Cryptomator ne peut pas chiffrer certaines métadonnées telles que les dates et heures d'accès, de modification et de création, ni le nombre et la taille des fichiers et des dossiers.

Certaines bibliothèques cryptographiques de Cryptomator ont été [auditées](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) par Cure53. La portée des bibliothèques auditées comprend: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) et [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). L'audit ne s'est pas étendu à [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), qui est une bibliothèque utilisée par Cryptomator pour iOS.

La documentation de Cryptomator détaille sa [cible de sécurité](https://docs.cryptomator.org/en/latest/security/security-target/), son [architecture de sécurité](https://docs.cryptomator.org/en/latest/security/architecture/), et ses [meilleures pratiques](https://docs.cryptomator.org/en/latest/security/best-practices/) prévues pour une utilisation de manière plus détaillée.

### Picocrypt (Fichier)

!!! recommendation

    ![Logo de Picocrypt](assets/img/encryption-software/picocrypt.svg){ align=right }
    
    **Picocrypt** est un outil de chiffrement léger et simple qui fournit un chiffrement moderne. Picocrypt utilise le chiffrement sécurisé XChaCha20 et la fonction de dérivation de clé Argon2id pour assurer un haut niveau de sécurité. Il utilise les modules x/crypto standards de Go pour ses fonctions de chiffrement.
    
    [:octicons-repo-16: Dépôt](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:fontawesome-brands-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:fontawesome-brands-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### VeraCrypt (Disque)

Certaines des bibliothèques cryptographiques de Cryptomator ont été [auditées](https://cryptomator.org/open-source/) par [Cure53](https://cryptomator.org/audits/2017-11-27%20crypto%20cure53.pdf). recommendation

    ![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }
    
    **VeraCrypt** est un utilitaire gratuit et open source pour le chiffrement de fichiers/dossiers à la volée. Il peut créer un disque virtuel chiffré dans un fichier, chiffrer une partition ou l'ensemble du périphérique de stockage avec une authentification avant le démarrage.
    
    [:octicons-home-16: Page d'accueil](https://veracrypt.fr){ .md-button .md-button--primary }
    [:octicons-info-16:](https://veracrypt.fr/en/Documentation.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://veracrypt.fr/code/){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://www.veracrypt.fr/en/Downloads.html)
        - [:fontawesome-brands-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
        - [:fontawesome-brands-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)

VeraCrypt est un dérivé du projet TrueCrypt, qui a été abandonné. Selon ses développeurs, des améliorations de la sécurité ont été apportées et les problèmes soulevés par l'audit initial du code de TrueCrypt ont été résolus.

Lors du chiffrement avec VeraCrypt, vous avez la possibilité de choisir parmi différentes [fonctions de hachage](https://fr.wikipedia.org/wiki/VeraCrypt#Syst%C3%A8me_de_chiffrement). Nous vous suggérons de **seulement** sélectionner [SHA-512](https://fr.wikipedia.org/wiki/SHA-2) et de vous en tenir au [chiffrement par blocs AES](https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard).

Truecrypt a été [audité un certain nombre de fois](https://fr.wikipedia.org/wiki/TrueCrypt#Audit_global_du_logiciel_en_2013) et VeraCrypt a également été [audité séparément](https://fr.wikipedia.org/wiki/VeraCrypt#Audit).

## Chiffrement Complet du Disque du Système d'Exploitation

Les systèmes d'exploitation modernes incluent le [Chiffrement de Disque](https://fr.wikipedia.org/wiki/Chiffrement_de_disque) et utiliseront un [cryptoprocesseur sécurisé](https://fr.wikipedia.org/wiki/Cryptoprocesseur_s%C3%A9curis%C3%A9).

### BitLocker

!!! recommendation

    ![Logo BitLocker](assets/img/encryption-software/bitlocker.png){ align=right }
    
    **BitLocker** est la solution de chiffrement intégral de volume fournie avec Microsoft Windows. La principale raison pour laquelle nous le recommandons est son [utilisation du TPM] (https://docs.microsoft.com/fr-fr/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft), une entreprise de forensique, a écrit à ce sujet dans [Understanding BitLocker TPM Protection] (https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/).
    
    [:octicons-info-16:](https://docs.microsoft.com/fr-fr/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentation}

BitLocker est [uniquement pris en charge](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) sur les éditions Pro, Entreprise et Éducation de Windows. Il peut être activé sur les éditions Famille à condition qu'elles remplissent les pré-requis.

??? example "Activer BitLocker sur Windows Famille"

    Pour activer BitLocker sur les éditions "Famille" de Windows, vous devez formater vos partitions avec une [Table de Partitionnement GUID](https://fr.wikipedia.org/wiki/GUID_Partition_Table) et disposer d'un module TPM dédié (v1.2, 2.0+).

    1. Ouvrez une invite de commande et vérifiez le format de la table de partition de votre disque à l'aide de la commande suivante. Vous devriez voir "**GPT**" listé sous "Style de partition" :

        ```
        powershell Get-Disk
        ```

    2. Exécutez cette commande (dans une invite de commande administrateur) pour vérifier la version de votre TPM. Vous devriez voir `2.0` ou `1.2` listé à côté de `SpecVersion`:

        ```
        powershell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm
        ```

    3. Accédez à [Options de démarrage avancées](https://support.microsoft.com/fr-fr/windows/options-de-d%C3%A9marrage-avanc%C3%A9es-y-compris-le-mode-sans-%C3%A9chec-b90e7808-80b5-a291-d4b8-1a1af602b617). Vous devez redémarrer en appuyant sur la touche F8 avant que Windows ne démarre et aller dans l'*invite de commande* dans **Dépannage** → **Options avancées** → **Invite de commande**.

    4. Connectez-vous avec votre compte administrateur et tapez ceci dans l'invite de commande pour lancer le chiffrement:

        ```
        manage-bde -on c: -used
        ```

    5. Fermez l'invite de commande et continuez le démarrage vers Windows normalement.

    6. Ouvrez une invite de commande administrateur et exécutez les commandes suivantes:

        ```
        manage-bde c: -protectors -add -rp -tpm
    manage-bde -protectors -enable c:
    manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! important
   
        Sauvegardez le fichier `BitLocker-Recovery-Key.txt` de votre ordinateur de bureau sur un périphérique de stockage distinct. La perte de ce code de récupération peut entraîner la perte de données.

### FileVault

!!! recommendation

    ![Logo FileVault](assets/img/encryption-software/filevault.png){ align=right }
    
    **FileVault** est la solution de chiffrement de volume à la volée intégrée à macOS. FileVault est recommandé parce qu'il [tire profit](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) de capacités de sécurité matérielle présentes sur un SoC de silicium Apple ou une Puce de Sécurité T2.
    
    [:octicons-info-16:](https://support.apple.com/fr-fr/guide/mac-help/mh11785/mac){ .card-link title=Documentation}

Nous recommandons de stocker une clé de récupération locale dans un endroit sûr plutôt que d'utiliser votre compte iCloud pour la récupération.

### Linux Unified Key Setup

!!! recommendation

    ![Logo LUKS](assets/img/encryption-software/luks.png){ align=right }
    
    **LUKS** est la méthode de chiffrement de disque par défaut pour Linux. Elle peut être utilisée pour chiffrer des volumes complets, des partitions ou créer des conteneurs chiffrés.
    
    [:octicons-home-16: Page d'accueil](https://gitlab.com/cryptsetup/cryptsetup/-/blob/main/README.md){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup/){ .card-link title="Code Source" }

??? example "Créer et ouvrir des conteneurs chiffrés"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### Ouvrir des conteneurs chiffrés
    Nous recommandons d'ouvrir les conteneurs et les volumes avec `udisksctl` car cela utilise [Polkit](https://fr.wikipedia.org/wiki/Polkit). La plupart des gestionnaires de fichiers, tels que ceux inclus dans les environnements de bureau les plus courants, peuvent déverrouiller les fichiers chiffrés. Des outils comme [udiskie](https://github.com/coldfix/udiskie) peuvent s'exécuter dans la barre d'état système et fournir une interface utilisateur utile.
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl unlock -b /dev/loop0
    ```

!!! note "N'oubliez pas de sauvegarder les en-têtes de volume"

    Nous vous recommandons de toujours [sauvegarder vos en-têtes LUKS](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) en cas de panne partielle du lecteur. Cela peut être fait avec :

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

## Basé sur le navigateur

Le chiffrement basé sur le navigateur peut être utile lorsque vous avez besoin de chiffrer un fichier, mais que vous ne pouvez pas installer de logiciel ou d'applications sur votre appareil.

### hat.sh

!!! recommendation

    ![logo hat.sh](assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![logo hat.sh](assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }
    
    **Hat.sh** est une application web qui fournit un chiffrement sécurisé des fichiers dans votre navigateur. Il peut également être auto-hébergé et est utile si vous devez chiffrer un fichier mais que vous ne pouvez pas installer de logiciel sur votre appareil en raison de politiques d'entreprises.
    
    [:octicons-globe-16: Page d'accueil](https://hat.sh){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://hat.sh/about/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://hat.sh/about/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/sh-dv/hat.sh){ .card-link title="Code Source" }
    :octicons-heart-16:{ .card-link title="Les méthodes de dons se trouvent au bas du site web" }

## Ligne de commande

Les outils dotés d'une interface de ligne de commande sont utiles pour intégrer des [scripts shell](https://fr.wikipedia.org/wiki/Script_shell).

### Kryptor

!!! recommendation

    ![Logo Kryptor](assets/img/encryption-software/kryptor.png){ align=right }
    
    **Kryptor** est un outil gratuit et open source de chiffrement et de signature de fichiers qui utilise des algorithmes cryptographiques modernes et sécurisés. Il vise à être une meilleure version d'[age](https://github.com/FiloSottile/age) et [Minisign](https://jedisct1.github.io/minisign/) pour fournir une alternative simple et facile à GPG.
    
    [:octicons-home-16: Page d'accueil](https://www.kryptor.co.uk){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.kryptor.co.uk/features#privacy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://www.kryptor.co.uk/tutorial){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://www.kryptor.co.uk/#donate){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://www.kryptor.co.uk)
        - [:fontawesome-brands-apple: macOS](https://www.kryptor.co.uk)
        - [:fontawesome-brands-linux: Linux](https://www.kryptor.co.uk)

### Tomb

!!! recommendation

    ![Logo de Tomb](assets/img/encryption-software/tomb.png){ align=right }
    
    **Tomb** est un outil pour LUKS en ligne de commande shell. Il prend en charge la stéganographie via des [outils tiers](https://github.com/dyne/Tomb#how-does-it-work).
    
    [:octicons-home-16: Page d'accueil](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/dyne/Tomb/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://www.dyne.org/donate){ .card-link title=Contribuer }

## OpenPGP

OpenPGP est parfois nécessaire pour des tâches spécifiques telles que la signature numérique et le chiffrage des e-mails. PGP possède de nombreuses fonctionnalités et est [complexe](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) car il existe depuis longtemps. Pour des tâches telles que la signature ou le chiffrement des fichiers, nous suggérons les options ci-dessus.

Lorsque vous chiffrez avec PGP, vous avez la possibilité de configurer différentes options dans votre fichier `gpg.conf` . Nous recommandons de suivre les options standard spécifiées dans la [FAQ de l'utilisateur de GnuPG](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

!!! tip "Utiliser future-defaults lors de la génération d'une clé"

    Lorsque vous [générez des clés](https://www.gnupg.org/gph/en/manual/c14.html), nous vous suggérons d'utiliser la commande `future-default` car elle demandera à GnuPG d'utiliser de la cryptographie moderne telle que [Curve25519](https://fr.wikipedia.org/wiki/Curve25519) et [Ed25519](https://ed25519.cr.yp.to/) :

    ```bash
    gpg --quick-gen-key alice@exemple.com future-default
    ```

### GNU Privacy Guard

!!! recommendation

    ![Logo de GNU Privacy Guard](assets/img/encryption-software/gnupg.svg){ align=right }
    
    **GnuPG** est une alternative sous licence GPL de la suite de logiciels cryptographiques PGP. GnuPG est conforme [RFC 4880](https://tools.ietf.org/html/rfc4880), qui est la spécification actuelle de l'IETF pour OpenPGP. Le projet GnuPG a travaillé sur une [nouvelle ébauche](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) dans le but de moderniser OpenPGP. GnuPG fait partie du projet logiciel GNU de la Free Software Foundation et a reçu un [financement](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) majeur du gouvernement allemand.
    
    [:octicons-home-16: Page d'accueil](https://gnupg.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gnupg.org/privacy-policy.html){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://gnupg.org/documentation/index.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Code Source" }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
        - [:fontawesome-brands-apple: macOS](https://gpgtools.org)
        - [:fontawesome-brands-linux: Linux](https://gnupg.org/download/index.html#binary)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

### GPG4win

!!! recommendation

    ![Logo GPG4win](assets/img/encryption-software/gpg4win.svg){ align=right }
    
    **GPG4win** est un paquet pour Windows de [Intevation et g10 Code](https://gpg4win.org/impressum.html). Il comprend [divers outils](https://gpg4win.org/about.html) qui peuvent vous aider à utiliser GPG sous Microsoft Windows. Le projet a été lancé et initialement [financé par](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) l'Office Fédéral allemand pour la Sécurité de l'Information (BSI) en 2005.
    
    [:octicons-home-16: Page d'accueil](https://gpg4win.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpg4win.org/privacy-policy.html){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://gpg4win.org/documentation.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://gpg4win.org/donate.html){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)

### GPG Suite

!!! note

    Nous suggérons [Canary Mail](email-clients.md#canary-mail) pour utiliser PGP avec les e-mails sur les appareils iOS.

!!! recommendation

    ![Logo de GPG Suite](assets/img/encryption-software/gpgsuite.png){ align=right }
    
    **GPG Suite** fournit un support OpenPGP pour [Courrier Apple](email-clients.md#apple-mail) et macOS.
    
    GPG Mail coûte 24€ par an pour son plan d'assistance et comprend un essai de 30 jours.
    
    Pour plus de détails, voir la [FAQ](https://gpgtools.org/faq). Nous vous recommandons de consulter leurs [Premiers pas](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) et leur [Base de connaissances](https://gpgtools.tenderapp.com/kb) pour obtenir de l'aide.

### OpenKeychain

!!! recommendation

    ![Logo OpenKeychain](assets/img/encryption-software/openkeychain.svg){ align=right }
    
    **OpenKeychain** est une implémentation Android de GnuPG. Elle est généralement requise par les clients de messagerie comme [K-9 Mail](email-clients.md#k-9-mail) et [FairEmail](email-clients.md#fairemail) et d'autres applications Android pour fournir la prise en charge du chiffrement. Cure53 a réalisé un [audit de sécurité](https://www.openkeychain.org/openkeychain-3-6) d'OpenKeychain 3.6 en octobre 2015. Les détails techniques concernant l'audit et les solutions d'OpenKeychain peuvent être trouvés [ici](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
    
    [:octicons-home-16: Page d'accueil](https://www.openkeychain.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.openkeychain.org/help/privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://www.openkeychain.org/faq/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Code Source" }
    :octicons-heart-16:{ .card-link title="Les dons peuvent être faits dans l'application" }
    
    ??? downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/org.sufficientlysecure.keychain/)

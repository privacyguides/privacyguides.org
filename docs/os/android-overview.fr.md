---
title: Présentation d'Android
icon: simple/android
---

Android est un système d'exploitation sécurisé qui dispose d'un [sandboxing](https://source.android.com/security/app-sandbox) solide, du [Démarrage Vérifié](https://source.android.com/security/verifiedboot) (AVB), et d'un système de contrôle des [autorisations](https://developer.android.com/guide/topics/permissions/overview) robuste.

## Choisir une distribution Android

Lorsque vous achetez un téléphone Android, le système d'exploitation par défaut de l'appareil s'accompagne souvent d'une intégration envahissante des applications et des services qui ne font pas partie de l'[Android Open-Source Project](https://source.android.com/). C'est le cas par exemple de l'application Services Google Play, qui dispose de privilèges irrévocables pour accéder à vos fichiers, au stockage de vos contacts, aux journaux d'appels, aux SMS, à votre localisation, à votre appareil photo, à votre microphone, aux identifiants matériels, etc. Ces applications et ces services augmentent la surface d'attaque de votre appareil et sont à l'origine de divers problèmes d'invasion de la vie privée sur Android.

Ce problème pourrait être résolu en utilisant une distribution Android qui n'est pas fournie avec une intégration de ces applications invasives. Malheureusement, de nombreuses distributions d'Android enfreignent souvent le modèle de sécurité d'Android en ne prenant pas en charge les fonctions de sécurité essentielles telles que l'AVB, le rollback protection, les mises à jour du firmware, etc. Certaines distributions fournissent également des builds [`userdebug`](https://source.android.com/setup/build/building#choose-a-target) qui permettent le root via [ADB](https://developer.android.com/studio/command-line/adb) et nécessitent [des politiques SELinux plus permissives](https://github.com/LineageOS/android_system_sepolicy/search?q=userdebug&type=code) pour prendre en compte les fonctionnalités de débogage, ce qui augmente encore plus la surface d'attaque et affaiblit grandement le modèle de sécurité.

Idéalement, lorsque vous choisissez une distribution Android, vous devez vous assurer qu'elle respecte le modèle de sécurité Android. Au minimum, la distribution doit disposer de builds de production, d'un support pour AVB, d'une rollback protection, de mises à jour dans les meilleurs délais du firmware et du système d'exploitation, et de SELinux en [mode enforcing](https://source.android.com/security/selinux/concepts#enforcement_levels). Toutes les distributions Android que nous recommandons répondent à ces critères.

[Nos recommandations de distributions Android :material-arrow-right-drop-circle:](../android.md ""){.md-button}

## Éviter le rootage

[Le rootage](https://en.wikipedia.org/wiki/Rooting_(Android)) des téléphones Android peut diminuer la sécurité de manière significative car il affaiblit complétement le modèle de sécurité d'[Android](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). Cela peut nuire à la protection de la vie privée en cas d'exploitation facilitée par la diminution de la sécurité. Les méthodes courantes de rootage impliquent une modification directe de la partition de démarrage, ce qui rend impossible l'exécution du Démarrage Vérifié. Les applications qui requièrent un Android rooté modifieront également la partition du système, ce qui signifie que le Démarrage Vérifié devra rester désactivé. Le fait que le root soit exposé directement dans l'interface utilisateur augmente également la [surface d'attaque](https://en.wikipedia.org/wiki/Attack_surface) de votre appareil et peut contribuer aux vulnérabilités [d'élévation de privilèges](https://en.wikipedia.org/wiki/Privilege_escalation) et aux contournements de la politique SELinux.

Les bloqueurs de publicités, qui modifient le [fichier hosts](https://en.wikipedia.org/wiki/Hosts_(file)) (AdAway) et les pare-feu (AFWall+ ) qui requièrent un accès root de manière persistante sont dangereux et ne doivent pas être utilisés. Ils ne sont pas non plus la bonne façon de résoudre les problèmes auxquels ils sont destinés. Pour le blocage des publicités, nous suggérons plutôt des serveurs [DNS](../dns.md) chiffrés ou un [VPN](../vpn.md). RethinkDNS, TrackerControl et AdAway en mode non root occuperont l'emplacement VPN (afin de rediriger tout le trafic vers l'application), ce qui vous empêchera d'utiliser des vrais services améliorant votre vie privée tels qu'Orbot ou un vrai serveur VPN.

AFWall+ fonctionne sur le [filtrage des paquets](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter) et peut être contourné dans certaines situations.

Nous ne pensons pas que les sacrifices de sécurité en rootant un smartphone valent les avantages discutables de ces applications en matière de vie privée.

## Démarrage Vérifié

Le [Démarrage Vérifié](https://source.android.com/security/verifiedboot) est un élément important du modèle de sécurité d'Android. Il fournit une protection contre les attaques de type [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack), la persistance de logiciels malveillants et garantit que les mises à jour de sécurité ne peuvent pas être rétrogradées grâce au [rollback protection](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

Les versions supérieures à Android 10 ont abandonné le chiffrement complet du disque au profit d'un chiffrement plus souple [basé sur les fichiers](https://source.android.com/security/encryption/file-based). Vos données sont chiffrées à l'aide de clés de chiffrement propres à chaque utilisateur, tandis que les fichiers du système d'exploitation ne sont pas chiffrés.

Le Démarrage Vérifié garantit l'intégrité des fichiers du système d'exploitation, empêchant un adversaire disposant d'un accès physique d'altérer ou d'installer des logiciels malveillants sur l'appareil. Dans le cas improbable où un logiciel malveillant parviendrait à exploiter d'autres parties du système et à obtenir un accès privilégié, le Démarrage Vérifié empêchera et annulera toutes modifications apportées à la partition système lors du redémarrage de l'appareil.

Malheureusement, les fabricants sont tenus de prendre uniquement en charge le Démarrage Vérifié que sur leurs distributions Android. Seuls quelques fabricants OEM, tels que Google, supportent l'enrolement de clés AVB personnalisées sur leurs appareils. De plus, certaines ROM dérivées d'AOSP tels que LineageOS ou /e/ OS ne prennent pas en charge le Démarrage Vérifié, même si le matériel peut le prendre en charge. Nous vous recommandons de vérifier le support de cette fonctionnalité **avant** d'acheter un nouvel appareil. Les dérivés d'AOSP qui ne prennent pas en charge le Démarrage Vérifié ne sont **pas** recommandés.

De nombreux contructeurs ont également une implémentation défectueuse du Démarrage Vérifié dont vous devez être conscient au-delà de leur marketing. Par exemple, les Fairphone 3 et 4 ne sont pas sécurisés par défaut, car le [chargeur d'amorçage de base fait confiance à la clé de signature AVB publique](https://forum.fairphone.com/t/bootloader-avb-keys-used-in-roms-for-fairphone-3-4/83448/11). Cela contourne le Démarrage Vérifié sur un appareil Fairphone d'origine, car le système démarrera des systèmes d'exploitation Android alternatifs tels que (comme /e/) [sans aucun avertissement](https://source.android.com/security/verifiedboot/boot-flow#locked-devices-with-custom-root-of-trust) sur l'utilisation d'un système d'exploitation personnalisé.

## Mises à jour du micrologiciel

Les mises à jour du micrologiciel sont essentielles au maintien de la sécurité. Sans elles, votre appareil ne peut être sécurisé. Les fabriquants ont conclu des accords de prise de en charge avec leurs partenaires pour fournir les mises à jour des composants closed-source pendant une période limitée. Celles-ci sont détaillées dans les [Bulletins de Sécurité Android](https://source.android.com/security/bulletin) mensuels.

Comme les composants du téléphone, tels que le processeur et les technologies radio, reposent sur des composants closed-source, les mises à jour doivent être fournies par leur fabricants respectifs. Par conséquent, il est important que vous achetiez un appareil qui reçoit activement des mises à jours. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) et [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) prennent en charge leurs appareils pendant 4 ans, tandis que les produits moins chers ont souvent des cycles de mises à jour plus courts. Avec l'introduction du [Pixel 6](https://support.google.com/pixelphone/answer/4457705), Google fabrique maintenant son propre SoC et fournira un minimum de 5 ans de mises à jour.

Les appareils qui ne sont plus pris en charge par le fabricant du SoC ne peuvent pas recevoir de mises à jour du micrologiciel de la part des fabricants ou des distributeurs. Cela signifie que les problèmes de sécurité de ces appareils ne seront pas corrigés.

Fairphone, par exemple, commercialise ses appareils comme bénéficiant de 6 ans de mises à jour. Cependant, le SoC (Qualcomm Snapdragon 750G sur le Fairphone 4) a une date de fin de vie (EOL) beaucoup plus courte. Cela signifie que les mises à jour de sécurité du micrologiciel de Qualcomm pour le Fairphone 4 prendront fin en septembre 2023, que Fairphone continue ou non à publier des mises à jour de sécurité logicielle.

## Versions d'Android

Il est important de ne pas utiliser une version d'Android [en fin de vie](https://endoflife.date/android). Les nouvelles versions d'Android reçoivent non seulement des mises à jour de sécurité pour le système d'exploitation, mais aussi d'importantes mises à jour destinées à améliorer votre vie privée. Par exemple, [avant Android 10](https://developer.android.com/about/versions/10/privacy/changes), toute application disposant de l'autorisation [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) pouvait accéder aux numéros de série uniques et sensibles de votre téléphone, tels que l'[IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), le [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier), et l'[IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity) de votre carte SIM, alors qu'aujourd'hui les applications soivent désormais être des des applications système pour lire ces données sensibles. Les applications système sont uniquement fournies par le fabricant ou la distribution Android.

## Autorisations d'Android

Les [autorisations sur Android](https://developer.android.com/guide/topics/permissions/overview) vous permettent de contrôler ce que les applications ont le droit d'accéder. Google apporte régulièrement des [améliorations](https://developer.android.com/about/versions/11/privacy/permissions) sur le système d'autorisations à chaque nouvelle version d'Android. Toutes les applications que vous installez sont strictement [isolées](https://source.android.com/security/app-sandbox), il n'est donc pas nécessaire d'installer des applications antivirus. Un smartphone avec la dernière version d'Android sera toujours plus sécurisé qu'un ancien smartphone muni d'un antivirus que vous aurez payé. Il est plutôt conseillé de ne pas payer pour ces antivirus et d'économiser pour acheter un smartphone neuf tel qu'un Google Pixel.

Si vous souhaitez utiliser une application dont vous n'êtes pas sûr, envisagez d'utiliser un profil utilisateur ou professionnel.

## Accès aux médias

De nombreuses applications vous permettent de "partager" un fichier avec elles pour le téléchargement de médias. Si vous voulez, par exemple, envoyer une photo sur Twitter, n'accordez pas à Twitter l'accès à vos "médias et photos", car il aura alors accès à toutes vos photos. Au lieu de cela, allez dans votre gestionnaire de fichiers (documentsUI), appuyez longuement sur l'image, puis partagez-la avec Twitter.

## Profils Utilisateurs

Les profils d'utilisateurs multiples se trouvent dans **Paramètres** → **Système** → **Utilisateurs multiples** et constituent le moyen le plus simple d'isoler dans Android.

Avec les profils d'utilisateur, vous pouvez imposer des restrictions à un profil spécifique, par exemple : passer des appels, utiliser des SMS ou installer des applications sur l'appareil. Chaque profil est chiffré à l'aide de sa propre clé de chiffrement et ne peut accéder aux données d'aucun autre profil. Même le propriétaire de l'appareil ne peut pas voir les données des autres profils sans connaître leur mot de passe. Les profils d'utilisateurs multiples est une méthode d'isolement plus sécurisée.

## Profil Professionnel

Les [Profils Professionnels](https://support.google.com/work/android/answer/6191949?hl=fr) sont une autre façon d'isoler des applications de manière individuelles et peuvent s'avérer plus pratiques que des profils d'utilisateur séparés.

Une application de **gestionnaire d'appareil** telle que [Shelter](#recommended-apps) est nécessaire pour créer un profil professionnel sans MDM d'entreprise, à moins que vous n'utilisiez un OS Android personnalisé qui en comprend une.

Le profil professionnel dépend d'un gestionnaire d'appareil pour fonctionner. Les fonctionnalités telles que la *Navigation de Fichiers* et le *blocage de la recherche de contacts* ou tout autre type de fonctionnalités d'isolation doivent être implémentées par le gestionnaire. Vous devez également faire entièrement confiance à l'application de gestionnaire d'appareil, car elle a un accès total à vos données au sein du profil professionnel.

Cette méthode est généralement moins sûre qu'un profil utilisateur secondaire, mais elle vous permet d'exécuter simultanément des applications dans les profils professionnel et personnel.

## Arrêt d'Urgence VPN

Android 7 et plus prennent en charge un arrêt d'urgence de VPN et il est disponible sans qu'il soit nécessaire d'installer des applications tierces. Cette fonction permet d'éviter les fuites si le VPN est déconnecté. Il se trouve dans :gear: **Paramètres** → **Réseau & internet** → **VPN** → :gear: → **Bloquer les connexions sans VPN**.

## Boutons à Bascule Globaux

Les appareils Android modernes disposent de boutons à bascule permettant de désactiver les services Bluetooth et de localisation. Android 12 a introduit des boutons à bascule pour l'appareil photo et le microphone. Lorsque vous n'utilisez pas ces fonctions, nous vous recommandons de les désactiver. Les applications ne peuvent pas utiliser les fonctions désactivées (même si elles ont reçu une autorisation individuelle) jusqu'à ce qu'elles soient réactivées.

## Google

Si vous utilisez un appareil doté des services Google, qu'il s'agisse de votre système d'exploitation d'origine ou d'un système d'exploitation qui intègre les services Google Play sandboxed en toute sécurité, comme GrapheneOS, vous pouvez apporter un certain nombre de modifications supplémentaires pour améliorer votre confidentialité. Nous recommandons toujours d'éviter complètement les services Google ou de limiter les services Google Play à un profil utilisateur/professionnel spécifique en combinant un contrôleur d'appareil comme *Shelter* avec le Sandboxed Google Play de GrapheneOS.

### Programme de Protection Avancé

Si vous avez un compte Google, nous vous suggérons de vous inscrire au [Programme de Protection Avancée](https://landing.google.com/advancedprotection/). Il est disponible gratuitement pour toute personne possédant au moins deux clés de sécurité physiques qui prennent en charge le protocole [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online).

Le Programme de Protection Avancée offre une surveillance accrue des menaces et permet :

- Une authentification à deux facteurs plus stricte; par exemple, seul [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) **doit** être utilisé et toute autre type de double autentification tels que [SMS OTP](../basics/multi-factor-authentication.md#sms-or-email-mfa), [TOTP](../basics/multi-factor-authentication.md#time-based-one-time-password-totp) et [OAuth](https://en.wikipedia.org/wiki/OAuth) sont bloqués
- Seul Google et les applications tierces vérifiées peuvent accéder aux données du compte
- Une analyse des e-mails entrants sur les comptes Gmail pour détecter les tentatives de [hameçonnage](https://en.wikipedia.org/wiki/Phishing#Email_phishing)
- Une plus stricte [analyse de sécurité du navigateur](https://www.google.com/chrome/privacy/whitepaper.html#malware) avec Google Chrome
- Un processus de récupération plus strict pour les comptes ayant perdu leurs informations d'identification

 Si vous utilisez des services Google Play non sandboxés (courants sur les systèmes d'exploitation d'origine), l'Advanced Protection Program est également accompagné d'[avantages supplémentaires](https://support.google.com/accounts/answer/9764949?hl=en) tels que :

- Ne pas autoriser l'installation d'applications en dehors du Google Play Store, en dehors de la boutique d'applications du fournisseur du système d'exploitation ou via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- Analyse automatique obligatoire des appareils avec [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Avertissement des applications non vérifiées

### Mise à jour du système avec Google Play

Dans le passé, les mises à jour de sécurité d'Android devaient être envoyées par le fournisseur du système d'exploitation. Android est devenu plus modulaire à partir d'Android 10, et Google peut envoyer des mises à jour de sécurité pour **certains** composants du système via les services Google Play privilégiés.

Si vous avez un appareil sous Android 10 minimum qui n'est plus supporté et que vous ne pouvez pas installer l'un des systèmes d'exploitation que nous recommandons sur votre appareil, vous feriez mieux de vous en tenir à votre installation Android d'origine (par opposition à un système d'exploitation non répertorié ici, tel que LineageOS ou /e/ OS). Cela vous permettra de recevoir **certains** correctifs de sécurité de Google, sans enfreindre le modèle de sécurité Android en utilisant par exemple un dérivé d'Android non sécurisé et augmentant votre surface d'attaque. Nous vous recommanderions néanmoins de passer à un appareil qui est toujours supporté dès que possible.

### L'Identifiant Publicitaire

Tous les appareils sur lesquels les Google Play Services sont installés génèrent automatiquement un [identifiant publicitaire](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) utilisé pour la publicité ciblée. Désactivez cette fonctionnalité pour limiter les données collectées à votre sujet.

Sur les distributions Android avec [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), allez dans :gear: **Paramètres** → **Applications** → **Sandboxed Google Play** → **Paramètres Google** → **Annonces**, et sélectionnez *Supprimer l'ID publicitaire*.

Sur les distributions Android avec des services Google Play privilégiés (comme les systèmes d'exploitation d'origines), le paramètre peut se trouver à plusieurs endroits. Vérifiez:

- :gear: **Paramètres** → **Google** → **Annonces**
- :gear: **Paramètres** → **Confidentialité** → **Annonces**

Vous aurez la possibilité de supprimer votre identifiant publicitaire ou de *refuser les publicités basées sur les centres d'intérêt*, cela varie selon les distributions OEM d'Android. Si l'on vous présente l'option de supprimer l'identifiant publicitaire, faites-le. Si ce n'est pas le cas, veillez à refuser la personnalisation des publicités puis à réinitialiser votre identifiant publicitaire.

### SafetyNet et Play Integrity API

[SafetyNet](https://developer.android.com/training/safetynet/attestation) et les [API Play Integrity](https://developer.android.com/google/play/integrity) sont généralement utilisés pour des [applications bancaires](https://grapheneos.org/usage#banking-apps). De nombreuses applications bancaires fonctionneront sans problème sur GrapheneOS avec les services Google Play en sandbox, mais certaines applications non financières ont leurs propres mécanismes anti-tampering rudimentaires qui peuvent échouer. GrapheneOS passe le contrôle `basicIntegrity`, mais pas le contrôle de certification `ctsProfileMatch`. Les appareils équipés d'Android 8 ou d'une version ultérieure sont dotés d'un système d'attestation matérielle qui ne peut être contourné qu'en cas de fuite de clés ou de vulnérabilité grave.

Quant à Google Wallet, nous ne le recommandons pas en raison de sa [politique de confidentialité](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), qui stipule que vous devez manuellement refuser si vous ne voulez pas que votre note de crédit et vos informations personnelles soient partagées avec des services de marketing affilié.

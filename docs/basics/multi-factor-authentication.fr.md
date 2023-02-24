---
title: "Authentification Multi-Facteurs"
icon: 'material/two-factor-authentication'
---

L'**Authentification Multi-Facteurs** (**MFA**) est un mécanisme de sécurité qui exige des étapes supplémentaires au-delà de la saisie du nom d'utilisateur (ou de l'email) et du mot de passe. La méthode la plus courante est celle des codes à durée limitée que vous pouvez recevoir par SMS ou par une application.

Normalement, si un pirate informatique (ou un adversaire) est capable de trouver votre mot de passe, il aura alors accès au compte auquel ce mot de passe appartient. Un compte avec MFA oblige le pirate informatique à avoir à la fois le mot de passe (quelque chose que vous *connaissez*) et un appareil que vous possédez (quelque chose que vous *avez*), comme votre téléphone.

Les méthodes MFA varient en termes de sécurité, mais elles reposent sur le principe suivant : plus il est difficile pour un hacker d'accéder à votre méthode MFA, mieux c'est. Parmi les méthodes MFA (de la plus faible à la plus forte), citons les SMS, les codes par e-mail, les notifications push des applications, TOTP, Yubico OTP et FIDO.

## Comparaison des méthodes de MFA

### MFA SMS ou Email

La réception de codes OTP par SMS ou e-mail est l'un des moyens les plus faibles pour sécuriser vos comptes avec MFA. L'obtention d'un code par e-mail ou SMS retire de l'idée "quelque chose que vous *avez*", parce qu'il existe une variété de façons dont un pirate informatique pourrait [prendre le contrôle de votre numéro de téléphone](https://en.wikipedia.org/wiki/SIM_swap_scam) ou accéder à votre e-mail sans avoir physiquement accès à aucun de vos appareils. Si une personne non autorisée a accès à votre e-mail, ils seraient en mesure d'utiliser cet accès à la fois pour réinitialiser votre mot de passe et pour recevoir le code d'authentification, en leur donnant un accès complet à votre compte.

### Notifications push

La MFA par notification push prend la forme d'un message envoyé à une application sur votre téléphone vous demandant de confirmer les nouvelles connexions de compte. Cette méthode est bien meilleure que le SMS ou l'e-mail, car un attaquant ne pourrait généralement pas obtenir ces notifications push sans avoir un appareil déjà connecté, ce qui signifie qu'il devrait d'abord compromettre l'un de vos autres appareils.

Nous faisons tous des erreurs, et il y a le risque que vous acceptiez la tentative de connexion par accident. Les autorisations de connexion par notification push sont généralement envoyées à *tous* vos appareils en même temps, ce qui élargit la disponibilité du code MFA si vous avez de nombreux appareils.

La sécurité de la MFA par notification push dépend à la fois de la qualité de l'application, du composant serveur et de la confiance du développeur qui la produit. L'installation d'une application peut également vous obliger à accepter des privilèges envahissants qui donnent accès à d'autres données sur votre appareil. Une application individuelle nécessite également que vous ayez une application spécifique pour chaque service qui peut ne pas nécessiter l'ouverture d'un mot de passe. contrairement à une bonne application de générateur TOTP.

### Mot de passe unique basé sur le temps (TOTP)

TOTP est l'une des formes les plus courantes de MFA. Lorsque vous configurez un TOTP, vous devez généralement scanner un code QR [](https://fr.wikipedia.org/wiki/Code_QR) qui établit un "[secret partagé](https://fr.wikipedia.org/wiki/Secret_partag%C3%A9)" avec le service que vous avez l'intention d'utiliser. Le secret partagé est sécurisé à l'intérieur des données de l'application d'authentification, et est parfois protégé par un mot de passe.

Le code limité dans le temps est alors dérivé du secret partagé et de l'heure courante. Comme le code n'est valable que pour une courte période, sans accès au secret partagé, un adversaire ne peut pas générer de nouveaux codes.

Si vous disposez d'une clé de sécurité matérielle avec support TOTP (comme une YubiKey avec [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), nous vous recommandons de stocker vos "secrets partagés" sur le matériel. Un matériel tel que la YubiKey a été développé dans l'intention de rendre le "secret partagé" difficile à extraire et à copier. Une clé YubiKey n'est pas non plus connectée à Internet, contrairement à un téléphone équipé d'une application TOTP.

Contrairement à [WebAuthn](#fido-fast-identity-online), TOTP n'offre aucune protection contre les attaques d'[hammeçonnage](https://en.wikipedia.org/wiki/Phishing) ou de réutilisation. Si un adversaire obtient de vous un code valide, il peut l'utiliser autant de fois qu'il le souhaite jusqu'à son expiration (généralement 60 secondes).

Un adversaire pourrait créer un site web imitant un service officiel afin de vous inciter à donner votre nom d'utilisateur, votre mot de passe et votre code TOTP actuel. Si l'adversaire utilise ensuite ces informations d'identification enregistrées, il peut être en mesure de se connecter au service réel et de détourner le compte.

Bien qu'imparfait, TOTP est suffisamment sûr pour la plupart des gens, et lorsque [les clés de sécurité matérielles](../multi-factor-authentication.md#hardware-security-keys) ne sont pas prises en charge [les applications d'authentification](../multi-factor-authentication.md#authenticator-apps) restent une bonne option.

### Clés de Sécurité Matérielles

La clé YubiKey stocke les données sur une puce à semi-conducteurs inviolable à laquelle il est [impossible d'accéder](https://security.stackexchange.com/a/245772) de manière non destructive sans un processus coûteux et un laboratoire d'expertise.

Ces clés sont généralement multifonctionnelles et fournissent un certain nombre de méthodes d'authentification. Vous trouverez ci-dessous les plus courantes.

#### Yubico OTP

Le protocole OTP de Yubico est un protocole d'authentification généralement mis en œuvre dans les clés de sécurité matérielles. Lorsque vous décidez d'utiliser l'OTP de Yubico, la clé génère un identifiant public, un identifiant privé et une clé secrète qui sont ensuite téléchargés sur le serveur OTP de Yubico.

Lorsque vous vous connectez à un site web, il vous suffit de toucher physiquement la clé de sécurité. La clé de sécurité émule un clavier et imprime un mot de passe unique dans le champ mot de passe.

Le service transmettra ensuite le mot de passe unique au serveur Yubico OTP pour validation. Un compteur est incrémenté à la fois sur la clé et sur le serveur de validation de Yubico. L'OTP ne peut être utilisé qu'une seule fois, et lorsqu'une authentification réussie se produit, le compteur est augmenté, ce qui empêche la réutilisation de l'OTP. Yubico fournit un [document détaillé](https://developers.yubico.com/OTP/OTPs_Explained.html) sur le processus.

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

L'utilisation de l'OTP de Yubico présente certains avantages et inconvénients par rapport à TOTP.

Le serveur de validation Yubico est un service basé sur le cloud, et vous placez la confiance dans Yubico pour stocker les données en toute sécurité et ne pas vous profiler. L'identifiant public associé à l'OTP de Yubico est réutilisé sur tous les sites web et pourrait constituer un autre moyen pour des tiers de vous profiler. Comme TOTP, Yubico OTP ne fournit pas de résistance au phishing.

Si votre modèle de menace exige que vous ayez des identités différentes sur différents sites Web, **ne pas** utiliser Yubico OTP avec la même clé de sécurité matérielle entre ces sites Web car l'identifiant public est unique à chaque clé de sécurité.

#### FIDO (Fast IDentity Online)

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) comprend un certain nombre de normes, d'abord l'U2F puis, plus tard, la [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) qui comprend la norme Web [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

U2F et FIDO2 font référence au [Protocole client à authentificateur](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), qui est le protocole entre la clé de sécurité et l'ordinateur, comme un ordinateur portable ou un téléphone. Il complète WebAuthn qui est le composant utilisé pour s'authentifier avec le site Web (la « partie utilisatrice ») sur lequel vous essayez de vous connecter.

WebAuthn est la forme la plus sûre et la plus privée d'authentification par second facteur. Bien que l'expérience d'authentification soit similaire à celle de Yubico OTP, la clé n'imprime pas un mot de passe à usage unique et ne le valide pas auprès d'un serveur tiers. Il utilise plutôt la [cryptographie asymétrique](https://en.wikipedia.org/wiki/Public-key_cryptography) pour l'authentification.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

Lorsque vous créez un compte, la clé publique est envoyée au service, puis lorsque vous vous connectez, le service vous demande de "signer" certaines données avec votre clé privée. L'avantage de cette méthode est qu'aucune donnée de mot de passe n'est jamais stockée par le service, et qu'il n'y a donc rien qu'un adversaire puisse voler.

Cette présentation aborde l'histoire de l'authentification par mot de passe, les pièges (tels que la réutilisation du mot de passe), et discute des normes FIDO2 et [WebAuthn](https://webauthn.guide) .

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao" title="Comment FIDO2 et WebAuthn empêchent les vols de compte" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

FIDO2 et WebAuthn présentent des propriétés de sécurité et de confidentialité supérieures à celles de toute autre méthode MFA.

Généralement pour les services web, il est utilisé avec WebAuthn qui fait partie des [recommandations W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). Il utilise l'authentification asymétrique et est plus sécurisé que les secrets partagés utilisés dans les méthodes OTP de Yubico et TOTP, car il inclut le nom d'origine (habituellement le nom de domaine) lors de l'authentification. L'attestation est fournie pour vous protéger des attaques de phishing, car elle vous aide à déterminer que vous utilisez le service authentique et non une fausse copie.

Contrairement à Yubico OTP, WebAuthn n'utilise pas d'identifiant public, de sorte que la clé est **non** identifiable sur différents sites web. Il n'utilise pas non plus de serveur cloud tiers pour l'authentification. Toute la communication se fait entre la clé et le site web auquel vous vous connectez. FIDO utilise également un compteur qui est incrémenté lors de l'utilisation afin d'empêcher la réutilisation de session et les clés clonées.

Si un site Web ou un service prend en charge WebAuthn pour l'authentification, il est fortement recommandé de l'utiliser plutôt que toute autre forme de MFA.

## Recommandations générales

Nous avons les recommandations générales suivantes :

### Quelle méthode choisir ?

Lors de la configuration de votre méthode MFA, gardez à l'esprit qu'elle est aussi sécurisée que votre méthode d'authentification la plus faible que vous utilisez. Cela signifie qu'il est important que vous n'utilisiez que la meilleure méthode d'MFA disponible. Par exemple, si vous utilisez déjà TOTP, vous devez désactiver les MFA par e-mail et les SMS. Si vous utilisez déjà FIDO2/WebAuthn, vous ne devez pas utiliser Yubico OTP ou TOTP sur votre compte.

### Sauvegardes

Vous devriez toujours avoir des sauvegardes pour votre méthode MFA. Les clés de sécurité matérielle peuvent être perdues, volées ou simplement cesser de fonctionner au fil du temps. Il est recommandé d'avoir une paire de clés de sécurité matérielle avec le même accès à vos comptes au lieu d'une seule.

Lorsque vous utilisez TOTP avec une application d'authentification, assurez-vous de sauvegarder vos clés de récupération ou l'application elle-même, ou copiez les « secrets partagés » vers une autre instance de l'application sur un autre téléphone ou vers un conteneur chiffré (par exemple [VeraCrypt](../encryption.md#veracrypt)).

### Configuration Initiale

Lors de l'achat d'une clé de sécurité, il est important de modifier les informations d'identification par défaut, de configurer la protection par mot de passe de la clé et d'activer la confirmation tactile si votre clé la prend en charge. Les produits tels que la clé YubiKey ont plusieurs interfaces avec des informations d'identification distinctes pour chacune d'entre elles, vous devez donc passer en revue chaque interface et mettre en place une protection.

### E-mail et SMS

Si vous devez utiliser le courrier électronique pour MFA, assurez-vous que le compte de courrier électronique est lui-même sécurisé avec une méthode MFA appropriée.

Si vous utilisez la MFA par SMS, utilisez un opérateur qui ne changera pas votre numéro de téléphone pour une nouvelle carte SIM sans accès au compte, ou utilisez un numéro VoIP dédié d'un fournisseur offrant une sécurité similaire pour éviter une attaque par [échange de carte SIM](https://en.wikipedia.org/wiki/SIM_swap_scam).

[Outils de MFA que nous recommandons](../multi-factor-authentication.md ""){.md-button}

## Plus d'endroits pour configurer MFA

Au-delà de la simple sécurisation des connexions à votre site web, l'authentification multifactorielle peut être utilisée pour sécuriser vos connexions locales, vos clés SSH ou même vos bases de données de mots de passe.

### Windows

Yubico dispose d'un [fournisseur d'identifiants](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) dédié qui ajoute l'authentification à épreuve-réponse pour le flux de connexion nom d'utilisateur + mot de passe pour les comptes Windows locaux. Si vous avez une YubiKey avec le support d'authentification de Challenge-Response, jetez un œil au [Guide de configuration de Yubico pour Windows](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), qui vous permettra de configurer la MFA sur votre ordinateur Windows.

### macOS

macOS dispose d'un [support natif](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) pour l'authentification par carte à puce (PIV). Si vous avez une carte à puce ou une clé de sécurité matérielle qui prend en charge l'interface PIV telle que la YubiKey, nous vous recommandons de suivre la documentation de votre fournisseur de sécurité de carte à puce/matérielle et de configurer l'authentification à second facteur pour votre ordinateur macOS.

Yubico a un guide [Utiliser votre YubiKey comme une Smart Card dans macOS](https://support.yubico.com/hc/en-us/articles/360016649059) qui peut vous aider à configurer votre YubiKey sur macOS.

Une fois votre carte à puce/clé de sécurité configurée, nous vous recommandons d'exécuter cette commande dans le terminal :

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

Cette commande empêchera un adversaire de contourner le MFA au démarrage de l'ordinateur.

### Linux

!!! warning "Avertissement"

    Si le nom d'hôte de votre système change (par exemple à cause du DHCP), vous ne pourrez pas vous connecter. Il est essentiel que vous configuriez un nom d'hôte approprié pour votre ordinateur avant de suivre ce guide.

Le module `pam_u2f` sous Linux peut fournir une authentification à deux facteurs pour se connecter sur la plupart des distributions Linux populaires. Si vous avez une clé de sécurité matérielle qui prend en charge U2F, vous pouvez configurer l'authentification MFA pour votre connexion. Yubico a un guide [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) qui devrait fonctionner sur n'importe quelle distribution. Les commandes du gestionnaire de paquets - telles que `apt-get`- et les noms de paquets peuvent toutefois différer. Ce guide ne s'applique **pas** à Qubes OS.

### Qubes OS

Qubes OS prend en charge l'authentification Challenge-Response avec YubiKeys. Si vous avez une YubiKey avec un support d'authentification Challenge-Response, jetez un coup d'oeil à la documentation de Qubes OS [YubiKey](https://www.qubes-os.org/doc/yubikey/) si vous voulez configurer la MFA sur Qubes OS.

### SSH

#### Clés de Sécurité Matérielles

La MFA par SSH peut être configuré en utilisant plusieurs méthodes d'authentification différentes qui sont populaires avec les clés de sécurité matérielle. Nous vous recommandons de consulter la [documentation](https://developers.yubico.com/SSH/) de Yubico sur la manière de la configurer.

#### Mot de passe unique basé sur le temps (TOTP)

La MFA par SSH peut également être configurée en utilisant TOTP. DigitalOcean fourni un tutoriel [Comment configurer l'authentification multifacteurs pour SSH sur Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). La plupart des éléments devraient être les mêmes quelle que soit la distribution, mais les commandes du gestionnaire de paquets - telles que `apt-get`- et les noms des paquets peuvent différer.

### KeePass (et KeePassXC)

Les bases de données KeePass et KeePassXC peuvent être sécurisées en utilisant Challenge-Response ou HOTP comme second facteur d'authentification. Yubico a fourni un tutoriel pour KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) et il y en a également un autre sur le site [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) .

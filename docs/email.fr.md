---
title: "Services de messagerie électronique"
icon: material/email
---

Le courriel est pratiquement une nécessité pour utiliser n'importe quel service en ligne, mais nous ne le recommandons pas pour les conversations de personne à personne. Plutôt que d'utiliser le courriel pour contacter d'autres personnes, envisagez d'utiliser un support de messagerie instantanée qui prend en charge le secret de transfert.

[Messageries instantanées recommandées](real-time-communication.md ""){.md-button}

Pour tout le reste, nous recommandons une variété de fournisseurs de messagerie électronique en fonction de la viabilité de leur modèle économique et de leurs fonctions intégrées de sécurité et de confidentialité.

## Fournisseurs recommandés

Ces fournisseurs prennent en charge le chiffrement/déchiffrement OpenPGP nativement, ce qui permet d'envoyer des e-mails chiffrés de bout en bout (E2EE) indépendamment du fournisseur. Par exemple, un utilisateur de Proton Mail peut envoyer un message E2EE à un utilisateur de Mailbox.org, ou vous pouvez recevoir des notifications chiffrées par OpenPGP de la part de services internet qui le supportent.

!!! warning "Avertissement"

    Lors de l'utilisation d'une technologie E2EE telle que OpenPGP, le courrier électronique contiendra toujours certaines métadonnées non chiffrées dans l'en-tête du courrier. En savoir plus sur les [métadonnées de messagerie](basics/email-security.md#email-metadata-overview).
    
    OpenPGP ne prend pas non plus en charge le secret de transfert, ce qui signifie que si votre clé privée ou celle du destinataire est volée, tous les messages précédents chiffrés avec elle seront exposés. [Comment protéger mes clés privées ?](basics/email-security.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recommendation

    ![Logo Proton Mail](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** est un service de messagerie électronique qui met l'accent sur la confidentialité, le chiffrement, la sécurité et la facilité d'utilisation. Ils sont en activité depuis **2013**. Proton AG a son siège à Genève, en Suisse. Les comptes commencent avec 500 Mo de stockage avec leur offre gratuite.
    
    [:octicons-home-16: Page d'accueil](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

Les comptes gratuits présentent certaines limitations, comme le fait de ne pas pouvoir effectuer de recherche dans le corps du texte et de ne pas avoir accès à [Proton Mail Bridge](https://proton.me/mail/bridge), qui est nécessaire pour utiliser un [client de messagerie de bureau recommandé](email-clients.md) (par exemple Thunderbird). check "Modes de paiement privés" check "Modes de paiement privés" Une [lettre d'attestation](https://proton.me/blog/security-audit-all-proton-apps) a été fournie pour les applications de Proton Mail le 9 novembre 2021 par [Securitum](https://research.securitum.com).

Si vous avez l'offre Proton Illimité, entreprise ou Visionnaire, vous obtenez également [SimpleLogin](#simplelogin) Premium gratuitement.

Proton Mail dispose de rapports de plantages internes qu'il **ne partage pas** avec des tiers. Ils peuvent être désactivés dans : **Paramètres** > **Aller à Paramètres** > **Compte** > **Sécurité et confidentialité** > **Envoyer des rapports de crash**.

??? success "Domaines personnalisés et alias"

    Les abonnés payants à Proton Mail peuvent utiliser leur propre domaine avec le service ou une adresse [fourre-tout](https://proton.me/support/catch-all). Proton Mail prend également en charge le [sous-adressage](https://proton.me/support/creating-aliases), ce qui est utile pour les personnes qui ne souhaitent pas acheter un domaine.

??? success "Modes de paiement privés"

    Proton Mail [accepte](https://proton.me/support/payment-options) le Bitcoin et l'argent liquide par courrier en plus des paiements standards par carte de crédit/débit et PayPal.

??? success "Sécurité du compte"

    Proton Mail ne prend en charge que l'[authentification à deux facteurs](https://proton.me/support/two-factor-authentication-2fa) TOTP. L'utilisation d'une clé de sécurité U2F n'est pas encore prise en charge. Proton Mail prévoit d'implémenter U2F dès l'achèvement de son système d'[Authentification unique (SSO - Single Sign On)](https://reddit.com/comments/cheoy6/comment/feh2lw0/).

??? success "Sécurité des données"

    Proton Mail dispose d'un [chiffrement à accès zéro](https://proton.me/blog/zero-access-encryption) au repos pour vos e-mails et [calendriers](https://proton.me/news/protoncalendar-security-model). Les données sécurisées par un chiffrmeent à accès zéro ne sont accessibles que par vous.
    
    Certaines informations stockées dans [Proton Contacts](https://proton.me/support/proton-contacts), telles que les noms et les adresses e-mail, ne sont pas sécurisées par un chiffrement à accès zéro. Les champs de contact qui prennent en charge le chiffrement à accès zéro, comme les numéros de téléphone, sont indiqués par une icône de cadenas.

??? success "Chiffrement des e-mails"

    Proton Mail a [intégré le chiffrement OpenPGP](https://proton.me/support/how-to-use-pgp) dans son webmail. Les e-mails destinés à d'autres comptes Proton Mail sont chiffrés automatiquement, et le chiffrement vers des adresses autres que Proton Mail avec une clé OpenPGP peut être activé facilement dans les paramètres de votre compte. Ils vous permettent également de [chiffrer les messages destinés à des adresses autres que celles de Proton Mail](https://proton.me/support/password-protected-emails) sans qu'ils aient besoin de s'inscrire à un compte Proton Mail ou d'utiliser un logiciel comme OpenPGP.
    
    Proton Mail prend également en charge la découverte de clés publiques via HTTP à partir de son [Répertoire de Clés Web (WKD - Web Key Directory)](https://wiki.gnupg.org/WKD). Cela permet aux personnes qui n'utilisent pas Proton Mail de trouver facilement les clés OpenPGP des comptes Proton Mail, pour un E2EE inter-fournisseurs.

??? warning "Héritage numérique"

    Proton Mail ne propose pas de fonction d'héritage numérique.

??? info "Résiliation du compte"

    Si vous avez un compte payant et que votre [facture est impayée](https://proton.me/support/delinquency) après 14 jours, vous ne pourrez pas accéder à vos données. Après 30 jours, votre compte sera en impayé et ne recevra plus d'e-mail entrant. Vous continuerez à être facturé pendant cette période.

??? info "Fonctionnalités supplémentaires"

    Proton Mail propose un compte "Illimité" pour 9,99 €/mois, qui permet également d'accéder à Proton VPN en plus de fournir plusieurs comptes, domaines, alias et 500 Go de stockage.

### Mailbox.org

!!! info "Sécurité des données"

    ![Logo de Mailbox.org](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org** est un service de messagerie électronique qui se veut sécurisé, sans publicité et alimenté par une énergie 100% écologique. Ils sont en activité depuis 2014. Mailbox.org est basé à Berlin, en Allemagne. Les comptes commencent avec 2 Go de stockage, qui peuvent être mis à niveau si nécessaire.
    
    [:octicons-home-16: Page d'accueil](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentation}
    
    ??? downloads "Téléchargements"
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

??? success "Domaines personnalisés et alias"

    Mailbox.org vous permet d'utiliser votre propre domaine et prend en charge les adresses [fourre-tout](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+avec+propre+domaine). Mailbox.org prend également en charge le [sous-adressage](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), ce qui est utile pour les personnes qui ne souhaitent pas acheter un domaine.

??? info "Modes de paiement privés"

    Mailbox.org n'accepte pas les bitcoins ni les autres crypto-monnaies en raison de la suspension des opérations de leur processeur de paiement BitPay en Allemagne. Cependant, ils acceptent les paiements par courrier, les paiements en espèces sur compte bancaire, les virements bancaires, les cartes de crédit, PayPal et quelques processeurs spécifiques à l'Allemagne : paydirekt et Sofortüberweisung.

??? success "Sécurité du compte"

    Mailbox.org prend en charge [l'authentification à deux facteurs](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) pour son webmail uniquement. Vous pouvez utiliser soit TOTP soit un [Yubikey](https://fr.wikipedia.org/wiki/YubiKey) via le [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Les normes web telles que [WebAuthn](https://fr.wikipedia.org/wiki/WebAuthn) ne sont pas encore prises en charge.

??? info "Sécurité des données"

    Mailbox.org permet de chiffrer les e-mails entrants en utilisant leur [boîte mail chiffrée](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). Les nouveaux messages que vous recevrez seront alors immédiatement chiffrés avec votre clé publique.
    
    Toutefois, [Open-Exchange](https://fr.wikipedia.org/wiki/Open-Xchange), la plate-forme logicielle utilisée par Mailbox.org, [ne prend pas en charge](https://kb.mailbox.org/display/BMBOKBEN/Encryption+de+calendrier+et+carnet+d'adresses) le chiffrement de votre carnet d'adresses et de votre calendrier. Une [option dissociée](calendar.md) peut être plus appropriée pour ces informations.

??? success "Chiffrement des e-mails"

    Mailbox.org a [intégré le chiffrement](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) dans son webmail, ce qui simplifie l'envoi de messages aux personnes disposant de clés OpenPGP publiques. Ils permettent également [aux destinataires distants de déchiffrer un e-mail](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) sur les serveurs de Mailbox.org. Cette fonction est utile lorsque le destinataire distant ne dispose pas d'OpenPGP et ne peut pas déchiffrer une copie de l'e-mail dans sa propre boîte mail.
    
    Mailbox.org supporte également la découverte de clés publiques via HTTP à partir de leur [Répertoire de Clés Web (WKD - Web Key Directory)](https://wiki.gnupg.org/WKD). Cela permet aux personnes extérieures à Mailbox.org de trouver facilement les clés OpenPGP des comptes Mailbox.org, pour un E2EE inter-fournisseurs.

??? sucess "Héritage numérique"

    Mailbox.org dispose d'une fonction d'héritage numérique pour toutes les offres. Vous pouvez choisir de transmettre certaines de vos données à vos héritiers, à condition d'en faire la demande et de fournir votre testament. Vous pouvez également désigner une personne par son nom et son adresse.

??? info "Résiliation du compte"

    Votre compte sera défini comme un compte d'utilisateur restreint lorsque votre contrat prendra fin, après [30 jours, il sera irrévocablement supprimé](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

??? info "Fonctionnalités supplémentaires"

    Vous pouvez accéder à votre compte Mailbox.org via IMAP/SMTP en utilisant leur [service .onion](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+de+mailbox.org). Cependant, leur interface webmail n'est pas accessible via leur service .onion et vous pouvez rencontrer des erreurs de certificat TLS.
    
    Tous les comptes sont dotés d'un espace de stockage cloud limité qui [peut être chiffré](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+sur+votre+Drive). Mailbox.org propose également l'alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely) qui impose le chiffrement TLS sur la connexion entre les serveurs de messagerie, sinon le message ne sera pas envoyé du tout. Mailbox.org supporte également [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) en plus des protocoles d'accès standard comme IMAP et POP3.

### StartMail

!!! recommendation

    ![Logo de StartMail](assets/img/email/startmail.svg#only-light){ align=right }
    ![Logo de StartMail](assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    **StartMail** est un service de messagerie électronique qui met l'accent sur la sécurité et la confidentialité grâce à l'utilisation du standard de chiffrement OpenPGP. StartMail est en activité depuis 2014 et est basé à Boulevard 11, Zeist Pays-Bas. Les comptes commencent avec 10 Go. Ils offrent un essai de 30 jours.
    
    [:octicons-home-16: Page d'accueil](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentation}
    
    ??? downloads "Téléchargements"
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

??? success "Domaines personnalisés et alias"

    Les comptes personnels peuvent utiliser des alias [Personnalisés ou Rapides](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). Des [domaines personnalisés](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) sont également disponibles.

??? warning "Modes de paiement privés"

    StartMail accepte Visa, MasterCard, American Express et Paypal. StartMail propose également d'autres [options de paiement](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) telles que le Bitcoin (actuellement uniquement pour les comptes personnels) et le prélèvement SEPA pour les comptes de plus d'un an.

??? success "Sécurité du compte"

    StartMail supporte l'authentification TOTP à deux facteurs [pour le webmail uniquement](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). Ils ne permettent pas l'authentification par clé de sécurité U2F.

??? info "Sécurité des données"

    StartMail dispose d'un [chiffrement à accès zéro au repos](https://www.startmail.com/en/whitepaper/#_Toc458527835), utilisant leur système de "coffre-fort utilisateur". Lorsque vous vous connectez, le coffre-fort est ouvert, et le courriel est alors déplacé dans le coffre-fort hors de la file d'attente où il est déchiffré par la clé privée correspondante.
    
    StartMail supporte l'import de [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts), cependant, ils ne sont accessibles que dans le webmail et non par des protocoles tels que [CalDAV](https://fr.wikipedia.org/wiki/CalDAV). Les contacts ne sont pas non plus stockés à l'aide d'un chiffrement à connaissance zéro.

??? success "Chiffrement des e-mails"

    StartMail dispose d'un [chiffrement intégré](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) dans son webmail, ce qui simplifie l'envoi de messages chiffrés avec des clés OpenPGP publiques.

??? warning "Héritage numérique"

    StartMail ne propose pas de fonction d'héritage numérique.

??? info "Résiliation du compte"

    À l'expiration du compte, StartMail supprimera définitivement votre compte après [6 mois en 3 phases](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

??? info "Fonctionnalités supplémentaires"

    StartMail permet de faire passer les images des e-mails par leur serveur proxy. Si vous autorisez le chargement de l'image distante, l'expéditeur ne saura pas quelle est votre adresse IP.

## D'autres fournisseurs

Ces fournisseurs stockent vos e-mails avec un chiffrement à connaissance zéro, ce qui en fait d'excellentes options pour assurer la sécurité de vos courriels stockés. check "Sécurité du compte"

### Tutanota

!!! recommendation

    ![Logo Tutanota](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** est un service de messagerie électronique qui met l'accent sur la sécurité et la confidentialité grâce à l'utilisation du chiffrement. Tutanota est en activité depuis **2011** et est basée à Hanovre, en Allemagne. Les comptes commencent avec 1 Go de stockage avec leur offre gratuite.
    
    [:octicons-home-16: Page d'accueil](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Code source" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota ne prend pas en charge le [protocole IMAP](https://tutanota.com/faq/#imap) ni l'utilisation de [clients de messagerie](email-clients.md) tiers, et vous ne pourrez pas non plus ajouter [des comptes de messagerie externes](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) à l'application Tutanota. Ni [l'import d'e-mails](https://github.com/tutao/tutanota/issues/630) ni [les sous-dossiers](https://github.com/tutao/tutanota/issues/927) ne sont actuellement pris en charge, bien que cela soit [amené à changer](https://tutanota.com/blog/posts/kickoff-import). Les e-mails peuvent être exportés [individuellement ou par sélection groupée](https://tutanota.com/howto#generalMail) par dossier, ce qui peut s'avérer peu pratique si vous avez de nombreux dossiers.

??? success "Domaines personnalisés et alias"

    Les comptes Tutanota payants peuvent utiliser jusqu'à 5 [aliases](https://tutanota.com/faq#alias) et [domaines personnalisés](https://tutanota.com/faq#custom-domain). Tutanota ne permet pas le [sous-adressage (adresses plus)](https://tutanota.com/faq#plus), mais vous pouvez utiliser un [fourre-tout](https://tutanota.com/howto#settings-global) avec un domaine personnalisé.

??? warning "Modes de paiement privés"

    Tutanota n'accepte directement que les cartes de crédit et PayPal, mais les Bitcoin et Monero peuvent être utilisés pour acheter des cartes-cadeaux via leur [partenariat](https://tutanota.com/faq/#cryptocurrency) avec Proxystore.

??? success "Sécurité du compte"

    Tutanota prend en charge l'[authentification à deux facteurs](https://tutanota.com/faq#2fa) avec TOTP ou U2F.

??? success "Sécurité des données"

    Tutanota dispose d'un [chiffrement à accès zéro au repos](https://tutanota.com/faq#what-encrypted) pour vos e-mails, [contacts du carnet d'adresses](https://tutanota.com/faq#encrypted-address-book) et [calendriers](https://tutanota.com/faq#calendar). Cela signifie que les messages et autres données stockés dans votre compte ne sont lisibles que par vous.

??? warning "Chiffrement des e-mails"

    Tutanota [n'utilise pas OpenPGP](https://www.tutanota.com/faq/#pgp). Les comptes Tutanota peuvent uniquement recevoir des e-mails chiffrés provenant de comptes de messagerie non Tutanota lorsqu'ils sont envoyés via une [boîte aux lettres temporaire Tutanota] (https://www.tutanota.com/howto/#encrypted-email-external).

??? warning "Héritage numérique"

    Tutanota ne propose pas de fonction d'héritage numérique.

??? info "Résiliation du compte"

    Tutanota [supprimera les comptes gratuits inactifs](https://tutanota.com/faq#inactive-accounts) après six mois. Vous pouvez réutiliser un compte gratuit désactivé si vous payez.

??? info "Fonctionnalités supplémentaires"

    Tutanota propose la version professionnelle de [Tutanota pour les organisations à but non lucratif](https://tutanota.com/blog/posts/secure-email-for-non-profit) gratuitement ou avec une grosse réduction.
    
    Tutanota dispose également d'une fonction commerciale appelée [Secure Connect](https://tutanota.com/secure-connect/). Cela garantit que le contact du client avec l'entreprise utilise E2EE. La fonctionnalité coûte 240 €/an.

## Services d'alias d'e-mails

Un service d'alias d'e-mails vous permet de générer facilement une nouvelle adresse e-mail pour chaque site web auquel vous vous inscrivez. Les alias que vous créez sont ensuite transférés vers une adresse électronique de votre choix, ce qui permet de masquer à la fois votre adresse électronique "principale" et l'identité de votre fournisseur de messagerie. Un véritable alias d'e-mail est mieux que l'adressage plus, couramment utilisé et pris en charge par de nombreux fournisseurs, qui vous permet de créer des alias tels que votrenom+[nimportequoiici]@exemple.fr, car les sites web, les annonceurs et les réseaux de pistage peuvent trivialement supprimer tout ce qui suit le signe + pour connaître votre véritable adresse e-mail.

L'alias d'e-mail peut servir de protection au cas où votre fournisseur d'e-mail cesserait de fonctionner. Dans ce cas, vous pouvez facilement rediriger vos alias vers une nouvelle adresse électronique. En revanche, vous faites confiance au service d'aliasing pour qu'il continue de fonctionner.

L'utilisation d'un service d'alias d'e-mail dédié présente également un certain nombre d'avantages par rapport à un alias fourre-tout sur un domaine personnalisé :

- Les alias peuvent être activés et désactivés individuellement lorsque vous en avez besoin, ce qui empêche les sites web de vous envoyer des messages électroniques de façon aléatoire.
- Les réponses sont envoyées à partir de l'adresse alias, qui masque votre véritable adresse électronique.

Ils présentent également un certain nombre d'avantages par rapport aux services qui fournissent des "e-mails temporaires" :

- Les alias sont permanents et peuvent être réactivés si vous devez recevoir quelque chose comme une réinitialisation de mot de passe.
- Les courriels sont envoyés à votre boîte mails de confiance plutôt que d'être stockés par le fournisseur d'alias.
- Les services d'e-mails temporaires proposent généralement des boîtes mail publiques auxquelles peuvent accéder tous ceux qui connaissent l'adresse, tandis que les alias sont privés.

Nos recommandations en matière d'alias d'e-mail sont des fournisseurs qui vous permettent de créer des alias sur des domaines qu'ils contrôlent, ainsi que sur votre ou vos propres domaine(s) personnalisé(s), pour un coût annuel modeste. Ils peuvent également être auto-hébergés si vous souhaitez un contrôle maximal. Toutefois, l'utilisation d'un domaine personnalisé peut présenter des inconvénients en matière de confidentialité : Si vous êtes la seule personne à utiliser votre domaine personnalisé, vos actions peuvent être facilement suivies sur les sites web en regardant simplement le nom de domaine dans l'adresse électronique et en ignorant tout ce qui se trouve avant le signe arobase (@).

L'utilisation d'un service d'alias nécessite de faire confiance à la fois à votre fournisseur de messagerie et à votre fournisseur d'alias pour vos messages non chiffrés. Certains fournisseurs atténuent légèrement ce problème grâce au chiffrement automatique PGP, qui réduit le nombre de services auxquels vous devez faire confiance de deux à un en chiffrant les e-mails entrants avant qu'ils ne soient remis à votre fournisseur de boîte mail final.

### AnonAddy

!!! recommendation

    ![Logo AnonAddy](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![Logo AnonAddy](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** vous permet de créer gratuitement 20 alias de domaine sur un domaine partagé, ou un nombre illimité d'alias "standard" qui sont moins anonymes.
    
    [:octicons-home-16: Page d'accueil](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Code source" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/fr/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

Le nombre d'alias partagés (qui se terminent par un domaine partagé comme @anonaddy.me) que vous pouvez créer est limité à 20 sur l'offre gratuite d'AnonAddy et à 50 sur leur offre à 12 $/an. Vous pouvez créer un nombre illimité d'alias standard (qui se terminent par un domaine tel que @[nomdutilisateur].anonaddy.com ou un domaine personnalisé sur les offres payantes), mais, comme nous l'avons déjà mentionné, cela peut nuire à la confidentialité car les gens peuvent trivialement relier vos alias standard en se basant sur le seul nom de domaine. Des alias partagés illimités sont disponibles pour 36 $/an.

Fonctions gratuites notables :

- [x] 20 Alias partagés
- [x] Alias standard illimités
- [ ] Pas de réponses sortantes
- [x] 2 Boîtes mail de réception
- [x] Chiffrement automatique PGP

### SimpleLogin

!!! recommendation

    ![Logo Simplelogin](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** est un service gratuit qui fournit des alias d'e-mail sur une variété de noms de domaine partagés, et offre en option des fonctionnalités payantes comme des alias illimités et des domaines personnalisés.
    
    [:octicons-home-16: Page d'accueil](https://simplelogin.io/fr/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/fr/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin a été [acquis par Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) à compter du 8 avril 2022. Si vous utilisez Proton Mail pour votre boîte mail principale, SimpleLogin est un excellent choix. Les deux produits étant désormais détenus par la même société, vous ne devez plus faire confiance qu'à une seule entité. Nous supposons également que SimpleLogin sera plus étroitement intégré aux offres de Proton à l'avenir. SimpleLogin continue de prendre en charge la redirection vers le fournisseur de messagerie de votre choix. Securitum [a audité](https://simplelogin.io/blog/security-audit/) SimpleLogin début 2022 et tous les problèmes [ont été résolus](https://simplelogin.io/audit2022/web.pdf).

Vous pouvez lier votre compte SimpleLogin avec votre compte Proton dans les paramètres de SimpleLogin. Si vous avez l'offre Proton Illimité, Entreprise, ou Visionnaire, vous aurez SimpleLogin Premium gratuitement.

Fonctions gratuites notables :

- [x] 10 Alias partagés
- [x] Réponses illimitées
- [x] 1 Boîte mail de réception

## E-mail auto-hébergé

Les administrateurs système peuvent envisager de mettre en place leur propre serveur de messagerie. Les serveurs de messagerie requièrent une attention et une maintenance permanente afin de garantir la sécurité et la fiabilité de la distribution des e-mails.

### Solutions logicielles combinées

!!! recommendation

    ![Logo Mailcow](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** est un serveur de messagerie plus avancé, parfait pour ceux qui ont un peu plus d'expérience de Linux. Il possède tout ce dont vous avez besoin dans un conteneur Docker : Un serveur de messagerie avec prise en charge de DKIM, une surveillance antivirus et spam, un webmail et ActiveSync avec SOGo, et une administration basée sur le web avec prise en charge de 2FA.
    
    [:octicons-home-16: Page d'accueil](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Code source" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribuer }

!!! recommendation

    ![Logo Mail-in-a-Box](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** est un script de configuration automatisé pour le déploiement d'un serveur de messagerie sur Ubuntu. Son objectif est de faciliter la mise en place d'un serveur de courrier électronique.
    
    [:octicons-home-16: Page d'accueil](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Code source" }

Nous préférons que nos prestataires recommandés collectent le moins de données possible.

- [Configuration d'un serveur de messagerie avec OpenSMTPD, Dovecot et Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [Comment gérer votre propre serveur de messagerie](https://www.c0ffee.net/blog/mail-server-guide/) (août 2017)

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des fournisseurs que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour tout fournisseur d'email souhaitant être recommandé, y compris la mise en place des bonnes pratiques du secteur, une technologie moderne et bien plus. Nous vous suggérons de vous familiariser avec cette liste avant de choisir un fournisseur d'e-mails, et de mener vos propres recherches pour vous assurer que le fournisseur d'e-mails que vous choisissez est le bon choix pour vous.

### Technologie

Nous considérons ces caractéristiques comme importantes afin de fournir un service sûr et optimal. Vous devez vous demander si le fournisseur possède les caractéristiques dont vous avez besoin.

**Minimum pour se qualifier :**

- Chiffre les données du compte de messagerie au repos avec un chiffrement à accès zéro.
- Capacité d'export en tant que [Mbox](https://fr.wikipedia.org/wiki/Mbox) ou .eml individuel avec standard [RFC5322](https://datatracker.ietf.org/doc/rfc5322/).
- Permet aux utilisateurs d'utiliser leur propre [nom de domaine](https://fr.wikipedia.org/wiki/Nom_de_domaine). Les noms de domaine personnalisés sont importants pour les utilisateurs car ils leur permettent de conserver leur indépendance du service, au cas où celui-ci tournerait mal ou serait racheté par une autre société qui ne donne pas priorité à la vie privée.
- Fonctionne sur sa propre infrastructure, c'est-à-dire qu'elle ne repose pas sur des fournisseurs de services de messagerie tiers.

**Dans le meilleur des cas :**

- Chiffre toutes les données du compte (contacts, calendriers, etc.) au repos avec un chiffrement à accès zéro.
- Un webmail intégré avec chiffrement E2EE/PGP est fourni à titre de commodité.
- Prise en charge de [WKD](https://wiki.gnupg.org/WKD) pour permettre une meilleure découverte des clés publiques OpenPGP via HTTP. Les utilisateurs de GnuPG peuvent obtenir une clé en tapant : `gpg --locate-key utilisateur_exemple@exemple.fr`
- Prise en charge d'une boîte mail temporaire pour les utilisateurs externes. Cette fonction est utile lorsque vous souhaitez envoyer un e-mail chiffré, sans envoyer une copie réelle à votre destinataire. Ces e-mails ont généralement une durée de vie limitée et sont ensuite automatiquement supprimés. Ils n'obligent pas non plus le destinataire à configurer un système de chiffrement comme OpenPGP.
- Disponibilité des services du fournisseur de courrier électronique via un [service onion](https://en.wikipedia.org/wiki/.onion).
- Prise en charge du [sous-adressage](https://en.wikipedia.org/wiki/Email_address#Subaddressing).
- Fonctionnalité fourre-tout ou alias pour ceux qui possèdent leurs propres domaines.
- Utilisation de protocoles standard d'accès au e-mails tels que IMAP, SMTP ou [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Les protocoles d'accès standard garantissent que les clients peuvent facilement télécharger l'ensemble de leur courrier électronique, s'ils souhaitent changer de fournisseur.

### Confidentialité

Nous préférons que nos prestataires recommandés collectent le moins de données possible.

**Minimum pour se qualifier :**

- Protéger l'adresse IP de l'expéditeur. Filtrez-la pour qu'elle n'apparaisse pas dans le champ d'en-tête `Received`.
- Ne demandez pas d'Informations Personnelles Identifiables (PII) en plus d'un nom d'utilisateur et d'un mot de passe.
- Politique de confidentialité répondant aux exigences définies par le RGPD.
- Ne doit pas être hébergé aux États-Unis en raison de [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) qui doit [encore être réformé](https://epic.org/ecpa/).

**Dans le meilleur des cas :**

- Accepte le Bitcoin, les espèces et d'autres formes de crypto-monnaies et/ou options de paiement anonymes (cartes-cadeaux, etc.).

### Sécurité

Les serveurs de courrier électronique traitent un grand nombre de données très sensibles. Nous nous attendons à ce que les prestataires adoptent les meilleures pratiques du secteur afin de protéger leurs membres.

**Minimum pour se qualifier :**

- Protection du webmail avec 2FA, tel que TOTP.
- Le chiffrement à accès zéro, qui complète le chiffrement au repos. Le fournisseur ne dispose pas des clés de déchiffrement des données qu'il détient. Cela permet d'éviter qu'un employé malhonnête ne divulgue les données auxquelles il a accès ou qu'un adversaire distant ne divulgue les données qu'il a volées en obtenant un accès non autorisé au serveur.
- Prise en charge de [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions).
- Aucune erreurs ou vulnérabilités TLS lors du profilage par des outils tels que [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/), ou [Qualys SSL Labs](https://www.ssllabs.com/ssltest); cela inclut les erreurs liées aux certificats et les paramètres DH faibles, tels que ceux qui ont conduit à [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- Une préférence, pour les serveurs (facultatif sur TLSv1.3), pour les suites de chiffrement fortes qui prennent en charge la confidentialité persistante et le chiffrement authentifié.
- Une politique valide [MTA-STS](https://tools.ietf.org/html/rfc8461) et [TLS-RPT](https://tools.ietf.org/html/rfc8460).
- Des enregistrements [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) valides.
- Des enregistrements [SPF](https://fr.wikipedia.org/wiki/Sender_Policy_Framework) et [DKIM](https://fr.wikipedia.org/wiki/DomainKeys_Identified_Mail) valides.
- Disposer d'un enregistrement et d'une politique [DMARC](https://fr.wikipedia.org/wiki/DMARC) appropriés ou utiliser [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) pour l'authentification. Si l'authentification DMARC est utilisée, la politique doit être définie comme suit : `reject` ou `quarantine`.
- Une préférence pour les serveurs avec TLS 1.2 ou plus et un plan pour [retirer TLSv1.0 et TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
- Une soumission [SMTPS](https://en.wikipedia.org/wiki/SMTPS), en supposant que le SMTP est utilisé.
- Des normes de sécurité des sites web telles que :
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - Une [Intégrité des sous-ressources](https://en.wikipedia.org/wiki/Subresource_Integrity) si des éléments sont chargés depuis des domaines externes.
- Doit prendre en charge l'affichage des [en-têtes de message](https://en.wikipedia.org/wiki/Email#Message_header), car il s'agit d'une fonction d'analyse scientifique essentielle pour déterminer si un e-mail est une tentative de hammeçonnage.

**Dans le meilleur des cas :**

- Prise en charge de l'authentification matérielle, à savoir Prise en charge de l'authentification matérielle, à savoir U2F et [WebAuthn](https://fr.wikipedia.org/wiki/WebAuthn). U2F et WebAuthn sont plus sûrs car ils utilisent une clé privée stockée sur un dispositif matériel côté client pour authentifier les personnes, par opposition à un secret partagé qui est stocké sur le serveur web et côté client lors de l'utilisation de TOTP. De plus, U2F et WebAuthn sont plus résistants au phishing car leur réponse d'authentification est basée sur le [nom de domaine](https://fr.wikipedia.org/wiki/Nom_de_domaine) authentifié.
- Un [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) en plus de la prise en charge de DANE.
- Prise en charge de [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), utile pour les personnes qui publient sur des listes de diffusion [RFC8617](https://tools.ietf.org/html/rfc8617).
- Des programmes de primes aux bugs et/ou un processus coordonné de divulgation des vulnérabilités.
- Des normes de sécurité des sites web telles que :
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Confiance

Vous ne confieriez pas vos finances à une personne ayant une fausse identité, alors pourquoi lui confier vos e-mails ? Nous exigeons de nos fournisseurs recommandés qu'ils rendent public leur propriété ou leur direction. Nous aimerions également voir des rapports de transparence fréquents, notamment en ce qui concerne la manière dont les demandes de gouvernement sont traitées.

**Minimum pour se qualifier :**

- Une direction ou un propriétaire public.

**Dans le meilleur des cas :**

- Une direction publique.
- Rapports de transparence fréquents.

### Marketing

Avec les fournisseurs de courrier électronique que nous recommandons, nous aimons voir un marketing responsable.

**Minimum pour se qualifier :**

- Doit héberger lui-même ses outils d'analyse de traffic (pas de Google Analytics, Adobe Analytics, etc.). Le site du fournisseur doit également se conformer à [DNT (Do Not Track)](https://fr.wikipedia.org/wiki/Do_Not_Track) pour ceux qui souhaitent refuser.

Ne doit pas avoir de marketing irresponsable :

- Prétendre à un "chiffrement incassable". Le chiffrement doit être utilisé en supposant qu'il ne soit plus secret dans le futur, lorsque la technologie existera pour le décrypter.
- Garantir à 100% la protection de l'anonymat. Lorsque quelqu'un prétend que quelque chose est à 100%, cela signifie qu'il n'y a aucune certitude d'échec. Nous savons que les gens peuvent assez facilement se désanonymiser de plusieurs façons, par exemple :

- Réutiliser des informations personnelles (comptes de messagerie, pseudonymes uniques, etc.) auxquelles ils ont eu accès sans logiciel d'anonymat (Tor, VPN, etc.).
- [Empreinte numérique des navigateurs](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Dans le meilleur des cas :**

- Une documentation claire et facile à lire. Notamment pour la mise en place du 2FA, des clients de messagerie, d'OpenPGP, etc.

### Fonctionnalités supplémentaires

Bien qu'il ne s'agisse pas d'exigences strictes, nous avons pris en compte d'autres facteurs liés à la commodité ou à la confidentialité pour déterminer les fournisseurs à recommander.

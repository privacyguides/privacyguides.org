---
title: Sécurité des Emails
icon: material/email
---

Le courrier électronique est une forme de communication non sécurisée par défaut. Vous pouvez améliorer la sécurité de votre courrier électronique avec des outils tels que OpenPGP, qui ajoute un chiffrement de bout en bout à vos messages, mais OpenPGP présente toujours un certain nombre d'inconvénients par rapport au chiffrement dans d'autres applications de messagerie, et certaines données de courrier électronique ne peuvent jamais être chiffrées de manière inhérente en raison de la manière dont le courrier électronique est conçu.

Par conséquent, il est préférable d'utiliser le courrier électronique pour recevoir des courriels transactionnels (notifications, courriels de vérification, réinitialisation de mot de passe, etc.) provenant des services auxquels vous vous inscrivez en ligne, et non pour communiquer avec d'autres personnes.

## Aperçu du chiffrement des e-mails

La méthode standard pour ajouter du E2EE aux emails entre différents fournisseurs mails est d'utiliser OpenPGP. Il existe différentes implémentations de la norme OpenPGP, les plus courantes étant [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) et [OpenPGP.js](https://openpgpjs.org).

Il existe une autre norme populaire auprès des entreprises, appelée [S/MIME](https://en.wikipedia.org/wiki/S/MIME), mais elle nécessite un certificat émis par une [Autorité de Certification](https://en.wikipedia.org/wiki/Certificate_authority) (toutes ne délivrent pas de certificats S/MIME). Elle est prise en charge par [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) et [Outlook sur le Web ou Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

Même si vous utilisez OpenPGP, il ne prend pas en charge la [confidentialité persistante](https://en.wikipedia.org/wiki/Forward_secrecy), ce qui signifie que si votre clé privée ou celle du destinataire est volée, tous les messages précédents chiffrés avec cette clé seront exposés. C'est pourquoi nous recommandons, dans la mesure du possible, les [messageries instantanées](../real-time-communication.md) qui mettent en œuvre la confidentialité persistante par rapport aux emails pour les communications de personne à personne.

### Quels clients mails supportent le E2EE ?

Les fournisseurs d'emails qui vous permettent d'utiliser les protocoles d'accès standard comme IMAP et SMTP peuvent être utilisés avec n'importe lequel des [clients mail que nous recommandons](../email-clients.md). En fonction de la méthode d'authentification, cela peut entraîner une diminution de la sécurité si le fournisseur ou le client mail ne prend pas en charge OATH ou une application passerelle, car [l'authentification multi-facteurs](/basics/multi-factor-authentication/) n'est pas possible avec l'authentification par mot de passe simple.

### Comment Puis-Je Protéger Mes Clés Privées?

Une carte à puce (telle qu'une [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) ou [Nitrokey](https://www.nitrokey.com)) fonctionne en recevant un email chiffré d'un appareil (téléphone, tablette, ordinateur, etc.) exécutant un client mail/webmail. Le message est ensuite déchiffré par la carte à puce et le contenu déchiffré est renvoyé à l'appareil.

Il est avantageux que le déchiffrement se fasse sur la carte à puce afin d'éviter d'exposer votre clé privée à un dispositif compromis.

## Aperçu des Métadonnées des Emails

Les métadonnées des emails sont stockées dans [l'en-tête de message](https://en.wikipedia.org/wiki/Email#Message_header) de l'email et comprennent certains en-têtes visibles que vous avez peut-être vus, tels que : `À`, `De`, `Cc`, `Date`, `Sujet`. Il existe également un certain nombre d'en-têtes cachés inclus par de nombreux clients et fournisseurs de messagerie qui peuvent révéler des informations sur votre compte.

Le logiciel client peut utiliser les métadonnées de l'email pour montrer de qui provient un message et à quelle heure il a été reçu. Les serveurs peuvent l'utiliser pour déterminer où un email doit être envoyé, parmi [d'autres objectifs](https://en.wikipedia.org/wiki/Email#Message_header) qui ne sont pas toujours transparents.

### Qui Peut Voir Les Métadonnées Des Emails?

Les métadonnées des emails sont protégées des observateurs extérieurs par le protocole [TLS Opportuniste](https://en.wikipedia.org/wiki/Opportunistic_TLS). Elles peuvent néanmoins être vues par votre logiciel client mail (ou webmail) et par tout serveur relayant le message de votre part à ses destinataires, y compris votre fournisseur mails. Parfois, les serveurs mails font également appel à des services tiers pour se protéger des spams, qui ont généralement aussi accès à vos messages.

### Pourquoi les métadonnées ne peuvent-elles pas être E2EE?

Les métadonnées des emails sont essentielles à la fonctionnalité la plus élémentaire d'un email (d'où il vient et où il doit aller). À l'origine, l'E2EE n'était pas intégré dans les protocoles d'emails, mais nécessitait un logiciel complémentaire comme OpenPGP. Comme les messages OpenPGP doivent toujours fonctionner avec les fournisseurs d'emails traditionnels, il ne peut pas chiffrer les métadonnées du mail, mais seulement le corps du message lui-même. Cela signifie que, même en utilisant OpenPGP, des observateurs extérieurs peuvent voir de nombreuses informations sur vos messages, comme l'identité de l'expéditeur, l'objet du message, le moment de l'envoi, etc.

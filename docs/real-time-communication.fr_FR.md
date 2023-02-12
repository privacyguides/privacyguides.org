---
title: "Clients de Streaming Vidéo"
icon: material/chat-processing
---

Voici nos recommandations pour la communication chiffrée en temps réel.

[Types de Réseaux de Communication :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Messageries instantanées chiffrées

Le protocole a fait l'objet d'un [audit](https://eprint.iacr.org/2016/1013.pdf) indépendant en 2016. La spécification du protocole Signal se trouve dans leur documentation [](https://signal.org/docs/).

    ![Logo de Signal](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** est une application mobile développée par Signal Messenger LLC. L'application offre une messagerie instantanée, ainsi que des appels vocaux et vidéo.
    
    Toutes les communications sont E2EE. Les listes de contacts sont chiffrées à l'aide de votre code PIN de connexion et le serveur n'y a pas accès. Les profils personnels sont également chiffrés et ne sont partagés qu'avec les contacts qui vous ajoutent.
    
    [:octicons-home-16: Page d'accueil](https://signal.org/fr/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://support.signal.org/hc/fr){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://signal.org/fr/donate/){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://signal.org/fr/download/)
        - [:fontawesome-brands-apple: macOS](https://signal.org/fr/download/)
        - [:fontawesome-brands-linux: Linux](https://signal.org/fr/download/)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id874139669)

Signal prend en charge les [groupes privés](https://signal.org/blog/signal-private-group-system/). Le serveur n'a aucune trace de votre appartenance à un groupe, de vos titres de groupe, de vos avatars de groupe ou de vos attributs de groupe. Signal expose un minimum de métadonnées lorsque l'option [Expéditeur Scellé](https://signal.org/blog/sealed-sender/) est activée. L'adresse de l'expéditeur est chiffrée avec le corps du message, et seule l'adresse du destinataire est visible par le serveur. Expéditeur Scellé est uniquement activé pour les personnes de votre liste de contacts, mais peut être activé pour tous les destinataires avec le risque accru de recevoir du spam. Signal requiert votre numéro de téléphone comme identifiant personnel.

Le protocole a fait l'objet d'un [audit](https://eprint.iacr.org/2016/1013.pdf) indépendant en 2016. La spécification du protocole Signal se trouve dans leur [documentation](https://signal.org/docs/).

Nous avons quelques conseils supplémentaires pour configurer et renforcer votre installation Signal:

[Configuration et Renforcement de Signal :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

## Types de Réseaux de Communication

Les appels vocaux et vidéo de groupe ne sont [pas](https://github.com/vector-im/element-web/issues/12878) E2EE, et utilisent Jitsi, mais cela devrait changer avec [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). Les appels de groupe n'ont [pas d'authentification](https://github.com/vector-im/element-web/issues/13074) actuellement, ce qui signifie que les participants ne faisant pas partie de la salle peuvent également se joindre aux appels.

    ![Logo d'Element](assets/img/messengers/element.svg){ align=right }
    
    **Element** est le client de référence pour le protocole [Matrix](https://matrix.org/docs/guides/introduction), un [standard ouvert](https://matrix.org/docs/spec) pour la communication décentralisée sécurisée en temps réel.
    
    Les messages et les fichiers partagés dans les salons privés (ceux qui nécessitent une invitation) sont par défaut E2EE, tout comme les appels vocaux et vidéo entre deux personnes.
    
    [Page d'accueil](https://element.io/){ .md-button .md-button--primary } [Politique de confidentialité](https://element.io/privacy){ .md-button }
    
    ??? téléchargements
    
        - [:fontawesome-brands-windows: Windows](https://element.io/get-started)
        - [:fontawesome-brands-apple: macOS](https://element.io/get-started)
        - [:fontawesome-brands-linux: Linux](https://element.io/get-started)
        - [:octicons-browser-16: Browser](https://app.element.io)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/im.vector.app/)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:fontawesome-brands-github: Source](https://github.com/vector-im/element-web)

Les photos de profil, les réactions et les surnoms ne sont pas chiffrés.

Le protocole a fait l'objet d'un [audit indépendant](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) en 2016. La spécification du protocole Matrix se trouve dans leur [documentation](https://spec.matrix.org/latest/). Le cliquet cryptographique [Olm](https://matrix.org/docs/projects/other/olm) utilisé par Matrix est une implémentation de l'algorithme Signal [Cliquet Double](https://signal.org/docs/specifications/doubleratchet/).

Le protocole a fait l'objet d'un [audit](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) indépendant en 2016. recommendation Le cliquet cryptographique [Olm](https://matrix.org/docs/projects/other/olm) utilisé par Matrix est une implémentation de l'[algorithme Cliquet Double](https://signal.org/docs/specifications/doubleratchet/) de Signal.

## SimpleX Chat

Pour ajouter un contact sur Briar, vous devez d'abord vous ajouter tous les deux. Vous pouvez soit échanger des liens `briar://` soit scanner le code QR d'un contact s'il se trouve à proximité.

    ![Logo Briar](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** est une messagerie instantanée chiffrée que se [connecte](https://briarproject.org/how-it-works/) à d'autres clients par le réseau Tor. Briar peut également se connecter par Wi-Fi ou Bluetooth lorsqu'il se trouve à proximité.
    
    Le mode de maillage local de Briar peut être utile lorsque la disponibilité d’internet pose problème. [Page d'accueil](https://briarproject.org){ .md-button .md-button--primary } [Politique de confidentialité](https://briarproject.org/privacy-policy){ .md-button }
    
    ???

SimpleX Chat [a été audité](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) par Trail of Bits en Octobre 2022.

Actuellement, SimpleX Chat ne fournit qu'un client pour Android et iOS. Les fonctionnalités de base de conversation de groupe, la conversation directe, l'édition des messages et le markdown sont pris en charge. Les appels audio et vidéo E2EE sont également pris en charge.

Vos données peuvent être exportées et importées sur un autre appareil, car il n'y a pas de serveur central où elles sont sauvegardées.

## Session

!!! recommendation

    ![Logo de Session](assets/img/messengers/session.svg){ align=right }
    
    **Session** est une messagerie décentralisée axée sur les communications privées, sécurisées et anonymes. Session prend en charge les messages directs, les discussions de groupe et les appels vocaux.
    
    Session utilise le réseau décentralisé [Oxen Service Node Network] (https://oxen.io/) pour stocker et acheminer les messages. Chaque message chiffré est acheminé via trois nœuds dans le Oxen Service Node Network, ce qui rend pratiquement impossible pour les nœuds de compiler des informations significatives sur ceux qui utilisent le réseau.
    
    [Page d'accueil](https://getsession.org){ .md-button .md-button--primary } [Politique de confidentialité](https://getsession.org/privacy-policy){ .md-button }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session permet l'E2EE dans des chats individuels ou des groupes fermés pouvant compter jusqu'à 100 membres. Les groupes ouverts n'ont aucune restriction quant au nombre de membres, mais sont ouverts par conception.

Session ne prend [pas](https://getsession.org/blog/session-protocol-technical-information) en charge la confidentialité persistante, c'est-à-dire lorsqu'un système de chiffrement change automatiquement et fréquemment les clés qu'il utilise pour chiffrer et déchiffrer des informations, de sorte que si la dernière clé est compromise, elle expose une plus petite partie des informations sensibles.

Oxen a demandé un audit indépendant pour Session en mars 2020. L'audit [s'est conclu](https://getsession.org/session-code-audit) en Avril 2021 : "Le niveau de sécurité global de cette application est bon et la rend utilisable pour les personnes soucieuses de la protection de leur vie privée."

Briar prend en charge la confidentialité persistante en utilisant le protocole d'[Établissement de Liaison](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) et de [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) Bramble .

## Briar

!!! recommendation

    ![Logo Briar](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** est une messagerie instantanée chiffrée qui se [connecte](https://briarproject.org/how-it-works/) à d'autres clients par le réseau Tor. Briar peut également se connecter par Wi-Fi ou Bluetooth lorsqu'il se trouve à proximité. Le mode de maillage local de Briar peut être utile lorsque la disponibilité d’internet pose problème.
    
    [:octicons-home-16: Page d'accueil](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentation}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Les options de dons sont listées au bas de la page d'accueil" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

Pour ajouter un contact sur Briar, vous devez d'abord vous ajouter tous les deux. Vous pouvez soit échanger des liens `briar://` soit scanner le QR code d'un contact s'il se trouve à proximité.

Le logiciel client a été indépendamment [audité](https://briarproject.org/news/2017-beta-released-security-audit/) et le protocole de routage anonyme utilise le réseau Tor qui a également été audité.

Briar a un [cahier des charges entièrement publié](https://code.briarproject.org/briar/briar-spec).

Briar prend en charge la confidentialité persistante en utilisant le protocole de [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) et [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) Bramble .

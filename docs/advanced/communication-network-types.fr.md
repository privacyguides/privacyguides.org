---
title: "Types de réseaux de communication"
icon: 'material/transit-connection-variant'
---

Il existe plusieurs architectures réseau couramment utilisées pour relayer des messages entre des personnes. Ces réseaux peuvent offrir des garanties différentes en matière de protection de la vie privée. C'est pourquoi il est utile de tenir compte de votre [modèle de menace](../basics/threat-modeling.md) lorsque vous décidez quelle application à utiliser.

[Messageries instantanées recommandées](../real-time-communication.md ""){.md-button}

## Réseaux Centralisés

![Centralized networks diagram](../assets/img/layout/network-centralized.svg){ align=left }

Les messageries centralisées sont celles où tous les participants se trouvent sur le même serveur ou réseau de serveurs, contrôlés par la même organisation.

Certaines messageries auto-hébergées vous permettent de configurer votre propre serveur. L'auto-hébergement peut offrir des garanties de confidentialité supplémentaires, tel que l'absence de journaux d'utilisation ou un accès limité aux métadonnées (les données sur qui parle à qui). Les messageries centralisées auto-hébergées sont isolées et tout le monde doit être sur le même serveur pour communiquer.

**Avantages :**

- Les nouvelles fonctionnalités et les changements peuvent être mis en place plus rapidement.
- Il est plus facile de démarrer et de trouver des contacts.
- L'écosystème de fonctionnalités est plus mature et plus stable, car plus facile à programmer dans un logiciel centralisé.
- Les problèmes de confidentialité peuvent être réduits lorsque vous faites confiance à un serveur que vous hébergez vous-même.

**Inconvénients :**

- Peut inclure des [restrictions de contrôle ou d'accès](https://drewdevault.com/2018/08/08/Signal.html). Cela peut inclure des choses telles que :
- Être [interdit de connecter des clients tiers](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) au réseau centralisé, ce qui pourrait permettre une plus grande personnalisation ou une meilleure expérience. Ces modalités sont souvent définies dans les conditions d'utilisation.
- Documentation insuffisante ou inexistante pour les développeurs tiers.
- La [propriété](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), la politique de confidentialité et les opérations du service peuvent changer facilement lorsqu'une seule entité le contrôle, ce qui peut compromettre le service par la suite.
- L'auto-hébergement demande des efforts et des connaissances sur la manière de mettre en place un service.

## Réseaux Fédérés

![Federated networks diagram](../assets/img/layout/network-decentralized.svg){ align=left }

Les messageries fédérées utilisent plusieurs serveurs indépendants et décentralisés capables de communiquer entre eux (le courrier électronique est un exemple de service fédéré). La fédération permet aux administrateurs système de contrôler leur propre serveur tout en faisant partie d'un réseau de communication plus vaste.

Lorsqu'ils sont auto-hébergés, les membres d'un serveur fédéré peuvent découvrir et communiquer avec les membres d'autres serveurs, bien que certains serveurs puissent choisir de rester privés en étant non fédérés (par exemple, un serveur d'équipe de travail).

**Avantages :**

- Permet un meilleur contrôle de vos propres données lorsque vous utilisez votre propre serveur.
- Vous permet de choisir à qui confier vos données en choisissant entre plusieurs serveurs "publics".
- Permet souvent l'utilisation de clients tiers qui peuvent fournir une expérience plus naturelle, personnalisée ou accessible.
- Il est possible de vérifier que le logiciel du serveur correspond au code source public, en supposant que vous avez accès au serveur ou que vous faites confiance à la personne qui y a accès (par exemple, un membre de la famille).

**Inconvénients :**

- L'ajout de nouvelles fonctionnalités est plus complexe, car ces dernières doivent être normalisées et testées pour s'assurer qu'elles fonctionnent avec tous les serveurs du réseau.
- En raison du point précédent, les fonctionnalités peuvent manquer, être incomplètes ou fonctionner de manière inattendue par rapport aux plateformes centralisées, comme le relais des messages hors ligne ou la suppression des messages.
- Certaines métadonnées peuvent être disponibles (par exemple, des informations comme "qui parle à qui", mais pas le contenu réel du message si le chiffrement de bout en bout est utilisé).
- Les serveurs fédérés nécessitent généralement de faire confiance à l'administrateur de votre serveur. Il peut s'agir d'un amateur ou d'une personne qui n'est pas un "professionnel de la sécurité", et il se peut qu'il ne fournisse pas de documents aux normes comme une politique de confidentialité ou des conditions de service détaillant l'utilisation de vos données.
- Les administrateurs de serveurs choisissent parfois de bloquer d'autres serveurs, qui sont une source d'abus non modérés ou qui enfreignent les règles générales de comportement accepté. Cela entravera votre capacité à communiquer avec les membres de ces serveurs.

## Réseaux Pair-à-Pair

![P2P diagram](../assets/img/layout/network-distributed.svg){ align=left }

Les messageries P2P se connectent à un [réseau distribué](https://fr.wikipedia.org/wiki/Réseau_distribué) de nœuds pour relayer un message au destinataire sans serveur tiers.

Les clients (les pairs) se trouvent généralement les uns les autres grâce à l'utilisation d'un réseau de [calcul distribué](https://fr.wikipedia.org/wiki/Calcul_distribué). Citons par exemple les [Tables de Hachages Distribuées](https://fr.wikipedia.org/wiki/Table_de_hachage_distribuée) (THD), utilisées par les [Torrents](https://fr.wikipedia.org/wiki/BitTorrent) et [l'IPFS](https://fr.wikipedia.org/wiki/InterPlanetary_File_System). Une autre approche est celle des réseaux basés sur la proximité, où une connexion est établie par Wi-Fi ou Bluetooth (par exemple Briar ou le protocole de réseau social [Scuttlebutt](https://www.scuttlebutt.nz)).

Lorsqu'un pair a trouvé une route vers son contact par l'une de ces méthodes, une connexion directe est établie entre eux. Bien que les messages soient généralement cryptés, un observateur peut toujours déduire l'emplacement et l'identité de l'expéditeur et du destinataire.

Les réseaux P2P n'utilisent pas de serveurs, car les pairs communiquent directement entre eux, et ne peuvent donc pas être auto-hébergés. Cependant, certains services supplémentaires peuvent dépendre de serveurs centralisés, comme la découverte d'autres utilisateurs ou le relais des messages hors ligne, qui peuvent bénéficier de l'auto-hébergement.

**Avantages :**

- Minimum d'informations exposées à des tiers.
- Les plateformes P2P modernes implémentent l'E2EE par défaut. Il n'y a pas de serveurs qui pourraient potentiellement intercepter et déchiffrer vos transmissions, contrairement aux modèles centralisés et fédérés.

**Inconvénients :**

- Ensemble de fonctionnalités réduit :
- Les messages ne peuvent être envoyés que lorsque les deux pairs sont en ligne. Toutefois, votre client peut stocker les messages localement pour attendre le retour en ligne du contact.
- Augmente généralement l'utilisation de la batterie sur les appareils mobiles, car le client doit rester connecté au réseau distribué pour savoir qui est en ligne.
- Certaines fonctionnalités courantes de messageries peuvent ne pas être mises en œuvre ou de manière incomplète, comme la suppression des messages.
- Votre adresse IP et celle des contacts avec lesquels vous communiquez peuvent être exposées si vous n'utilisez pas le logiciel avec un VPN [](../vpn.md) ou [Tor](../tor.md). De nombreux pays disposent d'une forme de surveillance de masse et/ou de conservation des métadonnées.

## Routage Anonyme

![Anonymous routing diagram](../assets/img/layout/network-anonymous-routing.svg){ align=left }

Une messagerie utilisant le [routage anonyme](https://doi.org/10.1007/978-1-4419-5906-5_628) cache soit l'identité de l'expéditeur, celle du destinataire, ou la preuve qu'ils aient communiqué. Idéalement, une messagerie devrait cacher les trois.

Il existe de [nombreuses](https://doi.org/10.1145/3182658) façons différentes de mettre en œuvre le routage anonyme. L'une des plus célèbres est le [routage en oignon](https://en.wikipedia.org/wiki/Onion_routing) comme [Tor](https://fr.wikipedia.org/wiki/Tor_(réseau)), qui communique des messages chiffrés par le biais d'un [réseau superposé](https://fr.wikipedia.org/wiki/Réseau_superposé) qui masque l'emplacement de chaque nœud ainsi que le destinataire et l'expéditeur de chaque message. L'expéditeur et le destinataire n'interagissent jamais directement et ne se rencontrent que par l'intermédiaire d'un nœud de rendez-vous secret, de sorte qu'il n'y ait aucune fuite d'adresses IP ni de localisation physique. Les nœuds ne peuvent pas déchiffrer les messages ni la destination finale, seul le destinataire le peut. Chaque nœud intermédiaire ne peut déchiffrer qu'une partie qui indique où envoyer ensuite le message encore chiffré, jusqu'à ce qu'il arrive au destinataire qui peut le déchiffrer entièrement, d'où les "couches d'oignon."

L'auto-hébergement d'un nœud dans un réseau de routage anonyme ne procure pas à l'hébergeur des avantages supplémentaires en matière de confidentialité, mais contribue plutôt à la résilience de l'ensemble du réseau contre les attaques d'identification pour le bénéfice de tous.

**Avantages :**

- Minimum d'informations exposées à des tiers.
- Les messages peuvent être relayés de manière décentralisée même si l'une des parties est hors ligne.

**Inconvénients :**

- Propagation des messages lente.
- Souvent limité à un nombre restreint de types de médias, principalement du texte, car le réseau est lent.
- Moins fiable si les nœuds sont sélectionnés par un routage aléatoire, certains nœuds peuvent être très éloignés de l'expéditeur et du récepteur, ce qui ajoute une latence ou même l'impossibilité de transmettre les messages si l'un des nœuds se déconnecte.
- Plus complexe à mettre en œuvre car la création et la sauvegarde sécurisée d'une clé cryptographique privé sont nécessaires.
- Comme pour les autres plateformes décentralisées, l'ajout de fonctionnalités est plus complexe pour les développeurs que sur une plateforme centralisée. Par conséquent, des fonctionnalités peuvent manquer ou être incomplètement mises en œuvre, comme le relais des messages hors ligne ou la suppression des messages.

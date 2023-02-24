---
title: "Menaces Courantes"
icon: 'material/eye-outline'
---

Pour faire simple, nous classons nos recommandations dans ces catégories générales de [menaces](threat-modeling.md) ou d'objectifs qui s'appliquent à la plupart des gens. ==Vous pouvez vous sentir concerné par une, plusieurs, toutes, ou bien aucune de ces possibilités==, et les outils et services que vous utilisez dépendent de vos objectifs. Il est possible que vous ayez des menaces spécifiques ne rentrant dans aucune de ces catégories, ce qui est tout à fait normal ! L'important est de bien comprendre les avantages et les inconvénients des outils que vous choisissez d'utiliser, car pratiquement aucun d'entre eux ne vous protégera contre toutes les menaces possibles.

- <span class="pg-purple">:material-incognito: Anonymat</span> - Séparer votre activité en ligne de votre identité réelle, vous vous protégez des personnes qui tentent de découvrir explicitement *votre* identité
- <span class="pg-red">:material-target-account: Attaques Ciblées</span> - Se protéger contre les pirates informatiques dévoués ou d'autres agents malintentionnés essayant d'accéder spécifiquement à *vos* données ou appareils
- <span class="pg-orange">:material-bug-outline: Attaques Passives</span> - Se protéger des logiciels malveillants, des fuites de données, et autres attaques qui sont faites contre des groupes de personnes
- <span class="pg-teal">:material-server-network: Fournisseurs de Services</span> - Protéger vos données des fournisseurs de services, en utilisant par exemple un chiffrement de bout en bout rendant vos données illisibles par le serveur
- <span class="pg-blue">:material-eye-outline: Surveillance de Masse</span> - Protection contre les agences gouvernementales, organisations, sites web et services qui collaborent pour suivre vos activités en ligne
- <span class="pg-brown">:material-account-cash: Capitalisme de Surveillance</span> - Se protéger des grands réseaux publicitaires comme Google et Facebook, ainsi que d'une myriade d'autres collecteurs de données tiers
- <span class="pg-green">:material-account-search: Exposition Publique</span> - Limiter les informations en ligne vous concernant, accessibles par les moteurs de recherche ou par le grand public
- <span class="pg-blue-gray">:material-close-outline: Censure</span> - Éviter les accès censurés à l'information et d'être soi-même censuré lorsqu'on discute en ligne

Certaines de ces menaces peuvent peser plus que d'autres en fonction de vos préoccupations. Par exemple, un développeur de logiciels ayant accès à des données précieuses ou critiques peut être principalement concerné par les <span class="pg-red">:material-target-account: Attaques Ciblées</span>. Mais de plus, il veut probablement empêcher ses données personnelles d'être récupérées par des programmes de <span class="pg-blue">:material-eye-outline: Surveillance de Masse</span>. De même, une « personne lambda » peut être principalement concernée par l'<span class="pg-green">:material-account-search: Exposition Publique</span> de ses données personnelles, mais devrait tout de même se méfier des problèmes de sécurité tels que les <span class="pg-orange">:material-bug-outline: Attaques Passives</span> comme les logiciels malveillants affectant ses appareils.

## Anonymat vs Vie Privée

<span class="pg-purple">:material-incognito: Anonymat</span>

L'anonymat et le concept de vie privée sont deux concepts radicalement différents. Avoir une vie privée en ligne est un ensemble de choix que vous faites sur la façon dont vos données sont utilisées et partagées, l'anonymat est la dissociation complète de vos activités en ligne de votre identité réelle.

Les lanceurs d'alerte et les journalistes, par exemple, peuvent avoir un modèle de menace beaucoup plus extrême nécessitant un anonymat total. Il ne s'agit pas seulement de cacher ce qu'ils font, les données dont ils disposent ou de ne pas se faire pirater par des hackers ou des gouvernements, mais aussi de cacher entièrement qui ils sont. Ils sont prêts à sacrifier tout type de commodité s'il s'agit de protéger leur anonymat, leur vie privée ou leur sécurité, car leur vie pourrait en dépendre. La plupart des gens n'ont pas besoin d'aller si loin.

## Sécurité et Vie privée

<span class="pg-orange">:material-bug-outline: Attaques Passives</span>

La sécurité et la vie privée sont souvent confondues, car vous avez besoin de sécurité pour obtenir tout semblant de vie privée : Utiliser des outils qui semblent respecter votre vie privée est futile s'ils peuvent facilement être exploités par des attaquants pour publier vos données plus tard. Cependant, l'inverse n'est pas nécessairement vrai ; le service le plus sécurisé au monde *ne respece pas nécessairement* votre vie privée. Le meilleur exemple est de confier des données à Google qui, compte tenu de leur envergure, ont connu un minimum d'incidents de sécurité grâce à l'emploi d'experts en sécurité de premier plan pour sécuriser leur infrastructure. Même si Google fournit un service très sécurisé, rares sont ceux qui considèrent que leurs données restent privées dans les produits grand public gratuits de Google (Gmail, YouTube, etc).

En matière de sécurité des applications, nous ne savons généralement pas (et parfois ne pouvons pas) savoir si le logiciel que nous utilisons est malveillant, ou pourrait un jour le devenir. Même avec les développeurs les plus dignes de confiance, il n'y a généralement aucune garantie que leur logiciel ne présente pas une vulnérabilité grave qui pourrait être exploitée ultérieurement.

Pour minimiser les dommages potentiels qu'un logiciel malveillant peut causer, vous devez employer la sécurité par compartimentation. Il peut s'agir d'utiliser des ordinateurs différents pour des tâches différentes, d'utiliser des machines virtuelles pour séparer différents groupes d'applications connexes ou d'utiliser un système d'exploitation sécurisé mettant l'accent sur le principe de sandboxing des applications et du mandatory access control.

!!! tip "Conseil"

    Les systèmes d'exploitation mobiles sont généralement plus sûrs que les systèmes d'exploitation de bureau en ce qui concerne le sandboxing des applications.
    
    Les systèmes d'exploitation de bureau sont généralement à la traîne en ce qui concerne le sandboxing. ChromeOS possède des capacités de sandboxing similaires à celles d'Android, et macOS dispose d'un contrôle complet des autorisations système (et les développeurs peuvent opter pour le sandboxing pour les applications). Cependant, ces systèmes d'exploitation transmettent des informations d'identification à leurs constructeurs respectifs. Linux a tendance à ne pas soumettre d'informations aux fournisseurs de systèmes, mais il a une mauvaise protection contre les exploits et les applications malveillantes. Ce problème peut être quelque peu atténué avec des distributions spécialisées qui font un usage intensif des machines virtuelles ou des conteneurs, comme Qubes OS.

<span class="pg-red">:material-target-account: Attaques Ciblées</span>

Les attaques ciblées contre un personne spécifique sont plus difficiles à gérer. Les voies d'attaque les plus courantes sont l'envoi de documents malveillants par courrier électronique, l'exploitation de vulnérabilités dans le navigateur et les systèmes d'exploitation, et les attaques physiques. Si cela vous préoccupe, vous devrez peut-être recourir à des stratégies plus avancées d'atténuation des menaces.

!!! tip "Conseil"

    **Les navigateurs Web**, **les clients de messagerie électronique** et **les applications de bureautique** exécutent généralement volontairement, et by-design, du code non fiable qui vous est envoyé par des tiers. L'exécution de plusieurs machines virtuelles pour séparer les applications de ce type de votre système hôte ainsi que les unes des autres est une technique que vous pouvez utiliser pour éviter qu'un code d'exploitation dans ces applications ne compromette le reste de votre système. Les technologies comme Qubes OS ou Microsoft Defender Application Guard sur Windows fournissent des méthodes pratiques pour le faire de manière transparente, par exemple.

Si vous êtes préoccupé par les **attaques physiques** vous devriez utiliser un système d'exploitation avec une implémentation de démarrage vérifié sécurisé, à la manière d'Android, d'iOS, de macOS ou de [Windows (avec TPM)](https://docs.microsoft.com/fr-fr/windows/security/information-protection/secure-the-windows-10-boot-process). Vous devriez également vous assurer que votre disque est chiffré et que le système d'exploitation utilise un TPM ou une [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) sécurisée ou encore un [Element](https://developers.google.com/android/security/android-ready-se) sécurisé pour limiter le taux de tentatives de saisie de la phrase de passe. Vous devriez éviter de partager votre ordinateur avec des personnes en qui vous n'avez pas confiance, car la plupart des systèmes d'exploitation de bureau ne chiffrent pas les données séparément par utilisateur.

## Protection de ses Données des Fournisseurs de Services

<span class="pg-teal">:material-server-network: Fournisseurs de Service</span>

Nous vivons dans un monde où presque tout est connecté à Internet. Nos messages « privés », e-mails et nos interactions sociales sont généralement stockés sur un serveur quelque part. Généralement, lorsque vous envoyez un message à quelqu'un, ce message est alors stocké en clair sur un serveur, et lorsque votre ami souhaite lire le message, le serveur le lui montre.

Le problème évident avec cela est que le fournisseur de services (ou un pirate informatique qui a compromis le serveur) peut consulter vos conversations "privées" quand et comme il le souhaite, sans jamais que vous ne le sachiez. Cela s'applique à de nombreux services courants tels que la messagerie SMS, Telegram, Discord, etc.

Heureusement, le chiffrement de bout en bout peut atténuer ce problème en rendant illisibles les communications entre vous et vos destinataires avant même qu'elles ne soient envoyées au serveur. La confidentialité de vos messages est garantie, tant que le prestataire de services n'a pas accès aux clés privées d'une des deux personnes.

!!! note "Note sur le chiffrement basé sur le web"

    Dans la pratique, l'efficacité des différentes mises en œuvre du chiffrement de bout en bout varie. Des applications telles que [Signal](../real-time-communication.md#signal) s'exécutent nativement sur votre appareil, et chaque copie de l'application est la même sur différentes installations. Si le fournisseur de services venait à ouvrir une porte dérobée dans son application pour tenter de voler vos clés privées, cela pourrait être détecté ultérieurement par rétro-ingénierie.
    
    D'autre part, les implémentations de chiffrement de bout en bout basées sur le web, telles que l'application web de Proton Mail ou le coffre-fort web de Bitwarden, reposent sur le serveur qui sert dynamiquement du code JavaScript au navigateur pour gérer les opérations cryptographiques. Un serveur malveillant pourrait cibler une personne spécifique et lui envoyer un code JavaScript malveillant pour voler sa clé de chiffrement, et il serait extrêmement difficile pour l'utilisateur de s'en rendre compte. Même si cette personne s'aperçoit de la tentative de vol de sa clé, il serait incroyablement difficile de prouver que c'est le fournisseur qui tente de le faire, car le serveur peut choisir de servir différents clients web à différentes personnes.
    
    Par conséquent, lorsque vous comptez sur le chiffrement de bout en bout, vous devriez choisir d'utiliser des applications natives plutôt que des clients web, dans la mesure du possible.

Même avec le chiffrement de bout en bout, les fournisseurs de services peuvent toujours vous profiler sur la base des **métadonnées**, qui ne sont généralement pas protégées. Si le fournisseur de services ne peut pas lire vos messages pour savoir ce que vous dites, il peut néanmoins observer des choses comme les personnes avec lesquelles vous parlez, la fréquence de vos messages et les heures où vous êtes généralement actif. La protection des métadonnées est assez rare, et vous devriez prêter une attention particulière à la documentation technique du logiciel que vous utilisez pour voir s'il y a une minimisation ou une protection des métadonnées, si cela vous préoccupe.

## Programmes de Surveillance de Masse

<span class="pg-blue">:material-eye-outline: Surveillance de masse</span>

La surveillance de masse est un effort visant à surveiller le "comportement, de nombreuses activités ou les informations" d'une population entière (ou d'une fraction substantielle d'une population).[^1] Elle fait souvent référence à des programmes gouvernementaux, tels que ceux [divulgués par Edward Snowden en 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)). Cependant, elle peut également être réalisée par des entreprises, soit pour le compte d'agences gouvernementales, soit de leur propre initiative.

!!! abstract "Atlas de la surveillance

    Si vous souhaitez en savoir plus sur les méthodes de surveillance et la manière dont elles sont mises en œuvre dans les villes des USA, vous pouvez également consulter l'[Atlas de la Surveillance] (https://atlasofsurveillance.org/) de l'[Electronic Frontier Foundation] (https://www.eff.org/).
    En France vous pouvez consulter le site [Technolopolice](https://technopolice.fr/villes/) maintenu par l'association La Quadrature du Net.

Les gouvernements justifient souvent les programmes de surveillance de masse comme des moyens nécessaires pour combattre le terrorisme et prévenir la criminalité. Cependant, en violation des droits de l'homme, elle est le plus souvent utilisée pour cibler de manière disproportionnée les minorités et les dissidents politiques, entre autres.

!!! quote "ACLU : [*La leçon du 11 septembre en matière de vie privée : La surveillance de masse n'est pas la voie à suivre*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    Face aux [révélations d'Edward Snowden sur des programmes gouvernementaux tels que [PRISM](https://fr.wikipedia.org/wiki/PRISM_%28programme_de_surveillance%29) et [Upstream](https://fr.wikipedia.org/wiki/Upstream_collection)], les responsables des services de renseignement ont également admis que la NSA collectait secrètement depuis des années des enregistrements sur pratiquement tous les appels téléphoniques des Américains - qui appelle qui, quand ces appels sont passés et la durée de ces appels. Ce type d'informations, lorsqu'il est amassé par la NSA jour après jour, peut révéler des détails incroyablement sensibles sur la vie des gens et leurs associations, par exemple s'ils ont appelé un pasteur, une clinique d'avortement, un centre d'addiction, une ligne d'assistance contre le suicide.

Malgré la surveillance de masse croissante aux États-Unis, le gouvernement a constaté que les programmes de surveillance de masse comme la section 215 ont eu "peu de valeur unique" en ce qui concerne l'arrêt de crimes réels ou de complots terroristes, les efforts faisant largement double emploi avec les propres programmes de surveillance ciblée du FBI.[^2]

Malgré la surveillance de masse croissante aux États-Unis, le gouvernement a constaté que les programmes de surveillance de masse comme la section 215 ont eu "peu de valeur unique" en ce qui concerne l'arrêt de crimes réels ou de complots terroristes, les efforts faisant largement double emploi avec les propres programmes de surveillance ciblée du FBI.[^1]

- Votre adresse IP
- Les cookies de navigateur
- Les données que vous soumettez aux sites web
- L'empreinte numérique de votre navigateur ou de votre appareil
- La corrélation des modes de paiement

\[Cette liste n'est pas exhaustive].

Si vous êtes préoccupé par les programmes de surveillance de masse, vous pouvez utiliser des stratégies comme compartimenter vos identités virtuelles, vous fondre dans la masse des utilisateurs, ou, dans la mesure du possible, simplement éviter de renseigner des informations qui pourraient permettre de vous identifier.

<span class="pg-brown">:material-account-cash: Capitalisme de Surveillance</span>

> Le capitalisme de surveillance est un système économique centré sur la capture et la marchandisation des données personnelles dans le but essentiel de faire du profit.[^3]

Pour de nombreuses personnes, le suivi et la surveillance par des sociétés privées constituent une préoccupation croissante. Les réseaux publicitaires omniprésents, tels que ceux exploités par Google et Facebook, s'étendent sur internet bien au-delà des sites qu'ils contrôlent et suivent vos actions tout le long de votre navigation. L'utilisation d'outils tels que des bloqueurs de contenu pour limiter les requêtes du réseau vers leurs serveurs, et la lecture des politiques de confidentialité des services que vous utilisez peuvent vous aider à éviter de nombreux adversaires de base (bien que cela ne puisse pas empêcher complètement le pistage).[^4]

En outre, même les entreprises n'appartenant pas au secteur de l'*Industrie Publicitaire (AdTech)* ou du pistage peuvent partager vos informations avec [des courtiers en données](https://en.wikipedia.org/wiki/Information_broker) (tels que Cambridge Analytica, Experian ou Datalogix) ou d'autres parties. Vous ne pouvez pas automatiquement supposer que vos données sont en sécurité simplement parce que le service que vous utilisez n'a pas un modèle économique typique de l'AdTech ou du pistage. La meilleure protection contre la collecte de données par les entreprises est de chiffrer ou d'obscurcir vos données dans la mesure du possible, afin qu'il soit difficile pour les différents fournisseurs de corréler les données entre elles et d'établir un profil sur vous.

## Limiter l'Information Publique

<span class="pg-green">:material-account-search: Exposition Publique</span>

La meilleure façon de préserver la confidentialité de vos données est tout simplement de ne pas les mettre en ligne. La suppression des informations indésirables que vous trouvez sur vous en ligne est l'une des meilleures premières mesures que vous pouvez prendre pour retrouver votre vie privée.

- [Consultez notre guide sur la suppression de compte :material-arrow-right-drop-circle:](account-deletion.md)

Sur les sites où vous partagez des informations, il est très important de vérifier les paramètres de confidentialité de votre compte pour limiter la diffusion de ces données. Par exemple, activez le "mode privé" sur vos comptes si vous en avez la possibilité : Cela garantit que votre compte n'est pas indexé par les moteurs de recherche et qu'il ne peut pas être consulté sans votre permission.

Si vous avez déjà soumis vos véritables informations à des sites qui ne devraient pas les avoir, envisagez d'utiliser des tactiques de désinformation, comme la soumission d'informations fictives liées à cette identité en ligne. Cela rend vos vraies informations indiscernables des fausses informations.

## Éviter la Censure

<span class="pg-blue-gray">:material-close-outline: Censure</span>

La censure en ligne peut être exercée (à des degrés divers) par des acteurs tels que des gouvernements totalitaires, des administrateurs de réseaux et des fournisseurs de services. Ces efforts pour contrôler la communication et restreindre l'accès à l'information seront toujours incompatibles avec le droit humain à la liberté d'expression.[^5]

La censure sur les plateformes privées est de plus en plus courante, car des plateformes comme Twitter et Facebook cèdent à la demande du public, aux pressions du marché et à celles des agences gouvernementales. Les pressions gouvernementales peuvent prendre la forme de demandes secrètes adressées aux entreprises, comme la Maison Blanche [demandant le retrait](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) d'une vidéo provocante sur YouTube, ou de demandes manifestes, comme le gouvernement chinois exigeant des entreprises qu'elles adhèrent à un régime de censure strict.

Les personnes concernées par la menace de la censure peuvent utiliser des technologies comme \[Tor\](../advanced/tor-overview.md) pour la contourner, et soutenir des plateformes de communication résistantes à la censure comme [Matrix](../real-time-communication.md#element), qui ne dispose pas d'une autorité centralisée pouvant fermer des comptes de manière arbitraire.

!!! tip "Conseil"

    S'il peut être facile d'échapper à la censure en soi, cacher le fait que vous le faites peut être très problématique.
    
    Vous devez prendre en compte quels aspects du réseau votre adversaire peut observer, et si vous avez une possibilité de déni plausible pour vos actions. Par exemple, l'utilisation de [DNS chiffrés] (../advanced/dns-overview.md#what-is-encrypted-dns) peut vous aider à contourner les systèmes de censure rudimentaires basés sur les DNS, mais elle ne peut pas vraiment cacher ce que vous visitez à votre FAI. Un VPN ou Tor peut aider à cacher ce que vous visitez aux administrateurs du réseaux, mais ne peut pas cacher que vous utilisez ces réseaux. Les transports enfichables (tels que Obfs4proxy, Meek ou Shadowsocks) peuvent vous aider à contourner les pare-feu qui bloquent les protocoles VPN courants ou Tor, mais vos tentatives de contournement peuvent toujours être détectées par des méthodes telles que le sondage ou [l'inspection approfondie des paquets] (https://fr.wikipedia.org/wiki/Deep_packet_inspection).

Vous devez toujours tenir compte des risques encourus en essayant de contourner la censure, des conséquences potentielles et du degré de sophistication de votre adversaire. Soyez très prudent dans le choix de vos logiciels et prévoyez un plan de secours au cas où vous seriez pris.

[^1]: Commission de surveillance de la vie privée et des libertés civiles des États-Unis : [Rapport sur le programme d'enregistrements téléphoniques mené en vertu de la section 215](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^2]: Conseil de surveillance de la vie privée et des libertés civiles des États-Unis : [*Rapport sur le programme d'enregistrements téléphoniques mené en vertu de la section 215*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: Wikipédia : [*Capitalisme de surveillance*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: "[Énumérer la méchanceté](https://www.ranum.com/security/computer_security/editorials/dumb/)" (ou "énumérer toutes les mauvaises choses que nous connaissons") comme le font de nombreux bloqueurs de publicités et programmes antivirus, ne permet pas de vous protéger correctement contre les menaces nouvelles et inconnues, car elles n'ont pas encore été ajoutées à la liste des filtres. Vous devriez également utiliser d'autres techniques d'atténuation.
[^5]: Nations Unies : [*Déclaration universelle des droits de l'homme*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).

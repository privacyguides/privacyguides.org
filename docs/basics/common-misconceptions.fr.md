---
title: "Idées Reçues"
icon: 'material/robot-confused'
---

## "Les logiciels libres et open-source sont toujours sécurisés" ou "Les logiciels propriétaires sont plus sécurisé"

Ces mythes découlent d'un certain nombre de préjugés, mais le fait que le code source soit disponible ou non et la manière dont les logiciels sont concédés sous licence n'affectent en rien leur sécurité. ==Les logiciels open-source ont le *potentiel* d'être plus sécurisé que les logiciels propriétaires, mais il n'y a absolument aucune garantie que ce soit le cas.== Lorsque vous évaluez un logiciel, vous devez examiner la réputation et la sécurité de chaque outil individuellement.

Les logiciels libres *peuvent* être audités par des tiers et sont souvent plus transparents sur les vulnérabilités potentielles que leurs homologues propriétaires. Ils vous permettent également d'examiner le code et de désactiver vous-même toute fonctionnalité suspecte. Cependant, *à moins que vous ne le fassiez*, il n'y a aucune garantie que le code ait jamais été évalué, en particulier pour les petits projets. Le processus de développement ouvert a aussi parfois été exploité pour introduire de nouvelles vulnérabilités même dans des projets importants.[^1]

Par ailleurs, les logiciels propriétaires sont moins transparents, mais cela ne signifie pas qu'ils ne sont pas sécurisés. Des projets logiciels propriétaires majeurs peuvent être audités en interne et par des agences tierces, et des chercheurs indépendants en sécurité peuvent toujours trouver des vulnérabilités avec des techniques telles que la rétro-ingénierie.

Pour éviter les décisions biaisées, il est *essentiel* que vous évaluiez les normes de confidentialité et de sécurité des logiciels que vous utilisez.

## "Déplacer la confiance peut améliorer la vie privée"

Nous parlons souvent de "déplacement de confiance" lorsque nous abordons des solutions telles que les VPN (qui déplacent la confiance que vous accordez à votre Fournisseur d'Accès Internet vers le fournisseur de VPN). Bien que cela protège vos données de navigation de votre FAI *spécifiquement*, le fournisseur de VPN que vous choisissez a toujours accès à vos données de navigation : Vos données ne sont pas complètement protégées de toutes les parties. Cela signifie que :

1. Vous devez faire preuve de prudence lorsque vous choisissez un fournisseur auquel accorder votre confiance.
2. Vous devez toujours utiliser d'autres techniques, comme E2EE, pour protéger complètement vos données. Le simple fait de se méfier d'un fournisseur pour faire confiance à un autre ne sécurise pas vos données.

## "Les solutions axées sur la protection de la vie privée sont intrinsèquement dignes de confiance"

Se concentrer uniquement sur les politiques de confidentialité et le marketing d'un outil ou d'un fournisseur peut vous aveugler face à ses faiblesses. Lorsque vous recherchez une solution plus privée, vous devez déterminer quel est le problème sous-jacent et trouver des solutions techniques à ce problème. Par exemple, vous voudrez peut-être éviter Google Drive, qui donne à Google l'accès à toutes vos données. Le problème sous-jacent dans ce cas est l'absence d'E2EE, vous devez donc vous assurer que le fournisseur vers lequel vous passez met effectivement en œuvre E2EE, ou utiliser un outil (comme [Cryptomator](../encryption.md#cryptomator-cloud)) qui fournit E2EE sur n'importe quel fournisseur de cloud. Le passage à un fournisseur "soucieux de la protection de la vie privée" (qui ne met pas en œuvre E2EE) ne résout pas votre problème : il ne fait que déplacer la confiance de Google vers ce fournisseur.

Les politiques de confidentialité et les pratiques commerciales des fournisseurs que vous choisissez sont très importantes, mais doivent être considérées comme secondaires par rapport aux garanties techniques de votre vie privée : Vous ne devriez pas faire confiance à un autre fournisseur lorsque la confiance en un fournisseur n'est pas du tout requise.

## "Plus c'est complexe mieux c'est"

Nous voyons souvent des personnes décrire des modèles de menace pour protéger leurs vies privées qui sont trop complexes. Souvent, ces solutions incluent des problèmes tels que de nombreux comptes de messagerie différents ou des configurations compliquées avec de nombreuses pièces mobiles et conditions. Les réponses sont généralement des réponses à la question "Quelle est la meilleure façon de faire *X*?"

Trouver la "meilleure" solution pour soi ne signifie pas nécessairement que l'on recherche une solution infaillible avec des dizaines de conditions - ces solutions sont souvent difficiles à utiliser de manière réaliste. Comme nous l'avons vu précédemment, la sécurité se fait souvent au détriment de la commodité. Nous vous donnons ci-dessous quelques conseils :

1. ==Les actions doivent servir un objectif particulier:== réfléchissez à la manière de faire ce que vous voulez avec le moins d'actions possible.
2. ==Supprimer les points d'échec humains:== nous échouons, nous nous fatiguons et nous oublions des choses. Pour maintenir la sécurité, évitez de vous appuyer sur des conditions et des processus manuels dont vous devez vous souvenir.
3. ==Utilisez le bon niveau de protection pour ce que vous voulez faire.== Nous voyons souvent des recommandations de solutions soi-disant à l'épreuve des forces de l'ordre et des assignations/mandats. Celles-ci nécessitent souvent des connaissances spécialisées et ne sont généralement pas ce que les gens recherchent. Il ne sert à rien de construire un modèle de menace complexe pour l'anonymat si vous pouvez être facilement désanonymisé par un simple oubli.

Alors, à quoi ça pourrait ressembler ?

Les modèles de menace les plus clairs sont ceux où les gens *savent qui vous êtes* et ceux où ils ne le savent pas. Il y aura toujours des situations où vous devrez déclarer votre nom légal et d'autres où vous n'aurez pas à le faire.

1. **Identité connue** - Une identité connue est utilisée pour les endroits où vous devez déclarer votre nom. Il existe de nombreux documents juridiques et contrats de ce type pour lesquels une identité légale est requise. Il peut s'agir de l'ouverture d'un compte bancaire, de la signature d'un bail immobilier, de l'obtention d'un passeport, de déclarations douanières lors de l'importation d'articles ou de toute autre démarche auprès de votre gouvernement. Ces éléments conduisent généralement à des informations d'identification telles que des cartes de crédit, des vérifications de la solvabilité, des numéros de compte et éventuellement des adresses physiques.

    Nous ne suggérons pas l'utilisation d'un VPN ou de Tor pour toutes ces choses, car votre identité est déjà connue par d'autres moyens.

    !!! tip "Conseil"
   
        Lorsque vous effectuez des achats en ligne, l'utilisation d'une [consigne à colis](https://en.wikipedia.org/wiki/Parcel_locker) peut contribuer à préserver la confidentialité de votre adresse physique.

2. **Identité inconnue** - Une identité inconnue pourrait être un pseudonyme stable que vous utilisez régulièrement. Il n'est pas anonyme car il ne change pas. Si vous faites partie d'une communauté en ligne, vous souhaiterez peut-être conserver un personnage que les autres connaissent. Ce pseudonyme n'est pas anonyme car, s'il est surveillé suffisamment longtemps, les détails concernant le propriétaire peuvent révéler d'autres informations, telles que sa façon d'écrire, ses connaissances générales sur des sujets d'intérêt, etc.

    Vous pouvez utiliser un VPN pour masquer votre adresse IP. Les transactions financières sont plus difficiles à masquer : Vous pouvez envisager d'utiliser des crypto-monnaies anonymes, comme [Monero](https://www.getmonero.org/). L'utilisation de monnaies alternatives peut également contribuer à masquer l'origine de votre monnaie. En règle générale, les centres d'échange exigent que le processus [KYC](https://fr.wikipedia.org/wiki/Know_your_customer) (connaissance du client) soit complété avant de vous autoriser à échanger de la monnaie fiduciaire contre tout type de cryptomonnaie. Les options de rencontres locales peuvent également être une solution, mais elles sont souvent plus coûteuses et nécessitent parfois un processus KYC.

3. **Identité anonyme** - Même avec de l'expérience, les identités anonymes sont difficiles à maintenir sur de longues périodes. Il doit s'agir d'identités à court terme et de courte durée qui font l'objet d'une rotation régulière.

    L'utilisation de Tor peut y contribuer. Il convient également de noter qu'un plus grand anonymat est possible grâce à la communication asynchrone : La communication en temps réel est vulnérable à l'analyse des habitudes de frappe (c'est-à-dire plus d'un paragraphe de texte, diffusé sur un forum, par e-mail, etc.)

[^1]: Un exemple notable est l'[incident de 2021 dans lequel des chercheurs de l'Université du Minnesota ont introduit trois vulnérabilités dans le projet de développement du noyau Linux](https://cse.umn.edu/cs/linux-incident).

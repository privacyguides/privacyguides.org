---
title: "Introduction aux mots de passe"
icon: 'material/form-textbox-password'
---

Les mots de passe sont un élément essentiel de notre vie numérique quotidienne. Nous les utilisons pour protéger nos comptes, nos appareils et nos secrets. Bien qu'ils soient souvent la seule chose qui nous sépare d'un adversaire qui en veut à nos informations privées, ils ne font pas l'objet d'une réflexion approfondie, ce qui conduit souvent les gens à utiliser des mots de passe faciles à deviner ou à forcer.

## Bonnes Pratiques

### Utiliser des mots de passe uniques pour chaque service

Imaginez ceci : vous vous inscrivez à un compte avec le même e-mail et le même mot de passe sur plusieurs services en ligne. Si l'un de ces fournisseurs de services est malveillant ou si son service subit une fuite de données qui expose votre mot de passe dans un format non chiffré, il suffit à un acteur malveillant d'essayer cette combinaison d'e-mail et de mot de passe sur plusieurs services populaires jusqu'à ce qu'il obtienne un résultat. La force de ce mot de passe n'a pas d'importance, car ils l'ont déjà.

C'est ce qu'on appelle le [bourrage d'identifiants](https://en.wikipedia.org/wiki/Credential_stuffing), et c'est l'une des façons les plus courantes dont vos comptes peuvent être compromis par des cybercriminels. Pour éviter cela, assurez-vous de ne jamais réutiliser vos mots de passe.

### Utilisez des mots de passe générés de manière aléatoire

==Vous ne devez **jamais** compter sur vous-même pour trouver un bon mot de passe.== Nous vous recommandons d'utiliser [des mots de passe générés de manière aléatoire](#passwords) ou [des phrases secrètes de type "diceware"](#diceware-passphrases) avec une entropie suffisante pour protéger vos comptes et vos appareils.

Tous nos [gestionnaires de mots de passe recommandés](../passwords.md) comprennent un générateur de mots de passe intégré que vous pouvez utiliser.

### Rotation des Mots de Passe

Vous devez éviter de changer trop souvent les mots de passe que vous devez retenir (comme le mot de passe principal de votre gestionnaire de mots de passe), sauf si vous avez des raisons de penser qu'ils ont été compromis, car le fait de les changer trop souvent vous expose au risque de les oublier.

En ce qui concerne les mots de passe que vous n'avez pas à retenir (comme les mots de passe stockés dans votre gestionnaire de mots de passe), si votre [modèle de menace](threat-modeling.md) le demande, nous vous recommandons de passer en revue les comptes importants (en particulier les comptes qui n'utilisent pas l'authentification multi-facteurs) et de changer leur mot de passe tous les deux mois, au cas où ils auraient été compromis dans le cadre d'une fuite de données qui n'a pas encore été rendue publique. La plupart des gestionnaires de mots de passe vous permettent de fixer une date d'expiration pour votre mot de passe afin d'en faciliter la gestion.

!!! tip "Vérifier les fuites de données"

    Si votre gestionnaire de mots de passe vous permet de vérifier les mots de passe compromis, assurez-vous de le faire et changez rapidement tout mot de passe qui pourrait avoir été exposé dans une fuite de données. Vous pouvez également suivre le flux [Dernières Brèches de Have I Been Pwned](https://feeds.feedburner.com/HaveIBeenPwnedLatestBreaches) à l'aide d'un [agrégateur d'actualités](../news-aggregators.md).


## Créer des mots de passe forts

### Mots de passe

De nombreux services imposent certains critères en ce qui concerne les mots de passe, notamment une longueur minimale ou maximale, ainsi que les caractères spéciaux qui peuvent être utilisés le cas échéant. Vous devez utiliser le générateur de mots de passe intégré à votre gestionnaire de mots de passe pour créer des mots de passe aussi longs et complexes que le service le permet en incluant des lettres majuscules et minuscules, des chiffres et des caractères spéciaux.

Si vous avez besoin d'un mot de passe que vous pouvez mémoriser, nous vous recommandons la [phrase secrète diceware](#diceware-passphrases).

### Phrases secrètes Diceware

Diceware est une méthode permettant de créer des phrases secrètes faciles à retenir, mais difficiles à deviner.

Les phrases secrètes Diceware sont une excellente option lorsque vous devez mémoriser ou saisir manuellement vos informations d'identification, par exemple pour le mot de passe principal de votre gestionnaire de mots de passe ou le mot de passe de chiffrement de votre appareil.

Un exemple de phrase secrète diceware est `viewable fastness reluctant squishy seventeen shown pencil`.

Pour générer une phrase secrète diceware à l'aide de vrais dés, suivez ces étapes :

!!! note "À noter"

    Ces instructions supposent que vous utilisez la [grande liste de mots de l'EFF] (https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) pour générer la phrase secrète, ce qui nécessite cinq lancers de dés par mot. D'autres listes de mots peuvent nécessiter plus ou moins de lancers par mot, et peuvent nécessiter un nombre différent de mots pour obtenir la même entropie.

1. Lancez cinq fois un dé à six faces, en notant le nombre après chaque lancer.

2. Par exemple, disons que vous avez obtenu `2-5-2-6-6`. Cherchez dans la [grande liste de mots de l'EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) le mot qui correspond à `25266`.

3. Vous trouverez le mot `encrypt`. Notez ce mot.

4. Répétez ce processus jusqu'à ce que votre phrase secrète comporte autant de mots que nécessaire, que vous devez séparer par un espace.

!!! warning "Avertissement"

    Vous ne devez **pas** relancer les mots jusqu'à ce que vous obteniez une combinaison de mots qui vous plaît. Le processus doit être complètement aléatoire.

Si vous n'avez pas accès à de vrais dés ou si vous préférez ne pas en utiliser, vous pouvez utiliser le générateur de mots de passe intégré à votre gestionnaire de mots de passe, car la plupart d'entre eux ont la possibilité de générer des phrases secrètes diceware en plus des mots de passe ordinaires.

Nous vous recommandons d'utiliser la [grande liste de mots de l'EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) pour générer vos phrases secrètes diceware, car elle offre exactement la même sécurité que la liste originale, tout en contenant des mots plus faciles à mémoriser. Il existe également [d'autres listes de mots dans différentes langues](https://theworld.com/~reinhold/diceware.html#Diceware%20in%20Other%20Languages|outline), si vous ne souhaitez pas que votre phrase secrète soit en anglais.

??? note "Explication de l'entropie et de la force des phrases secrètes diceware"

    Pour démontrer la force des phrases secrètes diceware, nous utiliserons la phrase secrète de sept mots mentionnée plus haut (`viewable fastness reluctant squishy seventeen shown pencil`) et la [grande liste de mots de l'EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) comme exemple.
    
    L'une des mesures permettant de déterminer la force d'une phrase secrète est son degré d'entropie. L'entropie par mot dans une phrase secrète est calculée comme suit : $\text{log}_2(\text{WordsInList})$ et l'entropie globale de la phrase secrète est calculée comme suit : $\text{log}_2(\text{WordsInList}^\text{WordsInPhrase})$.
    
    Par conséquent, chaque mot de la liste susmentionnée génère ~12,9 bits d'entropie ($\text{log}_2(7776)$), et une phrase secrète de sept mots dérivée de cette liste a ~90,47 bits d'entropie ($\text{log}_2(7776^7)$).
    
    La [grande liste de mots de l'EFF] (https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) contient 7776 mots uniques. Pour calculer le nombre de phrases secrètes possibles, il suffit de faire $\text{WordsInList}^\text{WordsInPhrase}$, ou dans notre cas, $7776^7$.
    
    Mettons tout cela en perspective : Une phrase secrète de sept mots utilisant la [grande liste de mots de l'EFF] (https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) est l'une des ~1 719 070 799 748 422 500 000 000 000 phrases secrètes possibles.
    
    En moyenne, il faut essayer 50 % de toutes les combinaisons possibles pour deviner votre phrase. En gardant cela à l'esprit, même si votre adversaire est capable de faire ~1 000 000 000 000 de suppositions par seconde, il lui faudrait toujours ~27 255 689 ans pour deviner votre phrase secrète. C'est le cas même si les choses suivantes sont vraies :

    - Votre adversaire sait que vous avez utilisé la méthode du diceware.
    - Votre adversaire connaît la liste de mots spécifique que vous avez utilisée.
    - Votre adversaire sait combien de mots contient votre phrase secrète.

Pour résumer, les phrases secrètes diceware sont votre meilleure option lorsque vous avez besoin d'une phrase à la fois facile à retenir *et* exceptionnellement forte.

## Stockage des mots de passe

### Gestionnaires de mots de passe

La meilleure façon de stocker vos mots de passe est d'utiliser un gestionnaire de mots de passe. Ils vous permettent de stocker vos mots de passe dans un fichier ou dans le cloud et de les protéger avec un seul mot de passe principal. Ainsi, vous n'aurez à retenir qu'un seul mot de passe fort, qui vous permettra d'accéder aux autres.

Il existe de nombreuses options intéressantes, qu'elles soient basées sur le cloud ou locales. Choisissez l'un de nos gestionnaires de mots de passe recommandés et utilisez-le pour établir des mots de passe forts pour tous vos comptes. Nous vous recommandons de sécuriser votre gestionnaire de mots de passe avec une [phrase secrète diceware](#diceware-passphrases) composée d'au moins sept mots.

[Liste des gestionnaires de mots de passe recommandés](../passwords.md ""){.md-button}

!!! warning "Ne placez pas vos mots de passe et vos codes TOTP dans le même gestionnaire de mots de passe"

    Lorsque vous utilisez des codes TOTP comme [authentification à multi-facteurs](../multi-factor-authentication.md), la meilleure pratique de sécurité consiste à conserver vos codes TOTP dans une [application séparée](../multi-factor-authentication.md#authenticator-apps).
    
    Le stockage de vos codes TOTP au même endroit que vos mots de passe, bien que pratique, réduit les comptes à un seul facteur dans le cas où un adversaire aurait accès à votre gestionnaire de mots de passe.
    
    En outre, nous ne recommandons pas de stocker des codes de récupération à usage unique dans votre gestionnaire de mots de passe. Ils doivent être stockés séparément, par exemple dans un conteneur chiffré sur un dispositif de stockage hors ligne.

### Sauvegardes

Vous devriez conserver une sauvegarde [chiffrée](../encryption.md) de vos mots de passe sur plusieurs dispositifs de stockage ou sur un fournisseur de stockage cloud. Cela peut vous aider à accéder à vos mots de passe si quelque chose arrive à votre appareil principal ou au service que vous utilisez.

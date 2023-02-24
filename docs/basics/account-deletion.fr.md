---
title: "Suppression de compte"
icon: 'material/account-remove'
---

Au fil du temps, il est facile d'accumuler un certain nombre de comptes en ligne, dont beaucoup ne sont peut-être plus utilisés. La suppression de ces comptes inutilisés est une étape importante dans la récupération de votre vie privée, car les comptes inactifs sont vulnérables aux fuites de données. Il y a une fuite des données lorsque la sécurité d'un service est compromise et que des informations protégées sont consultées, transmises ou volées par des acteurs non autorisés. Les fuites de données sont malheureusement [très fréquentes](https://haveibeenpwned.com/PwnedWebsites) de nos jours, et donc le meilleur moyen de minimiser l'impact qu'elles ont sur votre vie et de pratiquer une bonne hygiène numérique. L'objectif de ce guide est donc de vous aider à traverser le processus fastidieux de la suppression d'un compte, souvent rendu difficile à cause du [dark pattern](https://www.deceptive.design/), une pratique que certains services utilisent afin que vous abandonniez l'idée de supprimer votre compte.

## Recherche d'anciens comptes

### Gestionnaire de mots de passe

Si vous disposez d'un gestionnaire de mots de passe que vous avez utilisé pendant toute votre vie numérique, cette partie sera très facile. Souvent, ils incluent une fonctionnalité intégrée pour détecter si vos informations d'identification ont été exposées dans une fuite de données - comme le [Data Breach Report](https://bitwarden.com/blog/have-you-been-pwned/) de Bitwarden.

<figure markdown>
  ![Bitwarden's Data Breach Report feature](../assets/img/account-deletion/exposed_passwords.png)
</figure>

Même si vous n'avez pas explicitement utilisé un gestionnaire de mots de passe auparavant, il y a de fortes chances que vous ayez utilisé celui de votre navigateur ou de votre téléphone sans même vous en rendre compte. Par exemple : [Firefox Password Manager](https://support.mozilla.org/fr/kb/gestionnaire-mots-passe), [Google Password Manager](https://passwords.google.com/intro) et [Edge Password Manager](https://support.microsoft.com/fr-fr/microsoft-edge/enregistrer-ou-oublier-des-mots-de-passe-dans-microsoft-edge-b4beecb0-f2a8-1ca0-f26f-9ec247a3f336).

Les systèmes d'exploitation aussi, disposent souvent d'un gestionnaire de mots de passe qui peut vous aider à récupérer les mots de passe que vous avez oubliés :

- Windows [Credential Manager](https://support.microsoft.com/fr-fr/windows/acc%C3%A8s-au-gestionnaire-d-informations-d-identification-1b5c916a-6a16-889f-8581-fc16e8165ac0)
- macOS [Passwords](https://support.apple.com/fr-fr/HT211145)
- iOS [Passwords](https://support.apple.com/fr-fr/HT211146)
- Linux, Gnome Keyring, accessible par [Seahorse](https://help.gnome.org/users/seahorse/stable/passwords-view.html.fr) ou [KDE Wallet Manager](https://userbase.kde.org/KDE_Wallet_Manager).

### Email

Si vous n'avez pas utilisé de gestionnaire de mots de passe dans le passé ou si vous pensez avoir des comptes qui n'ont jamais été ajoutés à votre gestionnaire de mots de passe, une autre option consiste à rechercher le ou les comptes de messagerie sur lesquels vous pensez vous être inscrit. Sur votre client de messagerie, recherchez des mots-clés tels que "vérifier" ou "bienvenue". Presque à chaque fois que vous créez un compte en ligne, le service envoie un lien de vérification ou un message d'introduction à votre adresse électronique. Cela peut être un bon moyen de retrouver d'anciens comptes oubliés.

## Suppression des anciens comptes

### Se connecter

Pour supprimer vos anciens comptes, vous devez d'abord vous assurer que vous pouvez vous y connecter. Une fois encore, si le compte est enregistré dans votre gestionnaire de mots de passe, cette étape est facile. Si ce n'est pas le cas, vous pouvez essayer de deviner votre mot de passe. Dans le cas contraire, il existe généralement des options permettant de récupérer l'accès à votre compte, souvent disponibles par le biais d'un lien "mot de passe oublié" sur la page de connexion. Il est également possible que les comptes que vous avez abandonnés aient déjà été supprimés - il arrive que certains services suppriment tous les anciens comptes.

Lorsque vous tentez de vous reconnecter, si le site renvoie un message d'erreur indiquant que cette adresse électronique n'est pas associée à un compte, ou si vous ne recevez pas de lien de réinitialisation après plusieurs tentatives, c'est que vous n'avez probablement pas de compte sous cette adresse électronique et devez en essayer une autre. Si vous n'arrivez pas à trouver l'adresse électronique que vous avez utilisée ou si vous n'avez plus accès à cette adresse, vous pouvez essayer de contacter l'assistance clientèle du service. Malheureusement, il n'y a aucune garantie que vous puissiez récupérer l'accès à votre compte.

### RGPD (résidents de l'Espace Économique Européen uniquement)

Les résidents de l'EEE disposent de droits supplémentaires concernant l'effacement des données spécifiés dans l'article [Article 17](https://www.gdpr.org/regulation/article-17.html) du RGPD. Si vous êtes concerné, lisez la politique de confidentialité de chaque service pour trouver des informations sur la manière d'exercer votre droit à l'effacement. La lecture de la politique de confidentialité peut s'avérer importante, car certains services proposent une option "Supprimer le compte" qui ne fait que le désactiver, vous devez dans ce cas prendre des mesures supplémentaires pour réellement supprimer votre compte. Parfois, la suppression effective peut impliquer de remplir des questionnaires, d'envoyer un courriel au responsable de la protection des données du service ou même de prouver que vous résidez dans l'EEE. Si vous envisagez de procéder de cette manière, n'écrasez **pas** les informations du compte - votre identité en tant que résident de l'EEE peut être requise. Notez que l'emplacement du service n'a pas d'importance ; le RGPD s'applique à toute personne desservant des utilisateurs européens. Si le service ne respecte pas votre droit à l'effacement, vous pouvez contacter votre [autorité nationale de protection des données](https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens/redress/what-should-i-do-if-i-think-my-personal-data-protection-rights-havent-been-respected_en) et vous pouvez avoir droit à une compensation monétaire. L'autorité nationale de protection des données en France est la [Commission Nationale de l'Informatique et des Libertés (CNIL)](https://www.cnil.fr/). Des modèles de courrier pour des clôtures de compte ou de suppression de données sont accessibles sur leur [site](https://www.cnil.fr/fr/modeles/courrier). Pour en savoir plus sur votre droit à l'effacement, voici un [article](https://www.cnil.fr/fr/le-droit-leffacement-supprimer-vos-donnees-en-ligne) de la CNIL.

### Remplacer les informations de compte

Dans certaines situations où vous prévoyez d'abandonner un compte, il peut être judicieux de modifier les informations du compte avec de fausses données. Une fois que vous vous êtes assuré que vous pouvez vous connecter, remplacez toutes les informations de votre compte par des informations falsifiées. La raison en est que de nombreux sites conservent les informations que vous aviez auparavant, même après la suppression du compte. L'idée est qu'ils écrasent les informations précédentes avec les données les plus récentes que vous avez saisies. Cependant, il n'y a aucune garantie qu'il n'y aura pas de sauvegardes avec les informations précédentes.

Pour l'email du compte, créez un nouveau compte email alternatif via le fournisseur de votre choix ou créez un alias en utilisant un [service d'alias d'emails](/email/#email-aliasing-services). Vous pouvez ensuite supprimer cette adresse électronique une fois que vous avez terminé. Nous vous déconseillons d'utiliser des fournisseurs d'emails temporaires, car il est souvent possible de réactiver des emails temporaires.

### Suppression

Vous pouvez consulter [JustDeleteMe](https://justdeleteme.xyz/fr) pour obtenir des instructions sur la suppression du compte d'un service en particulier. Certains sites proposent gracieusement une option "Supprimer le compte", tandis que d'autres vont jusqu'à vous obliger à parler au service assistant. Le processus de suppression peut varier d'un site à l'autre, la suppression du compte peut être impossible sur certains.

Pour les services qui ne permettent pas la suppression du compte, la meilleure chose à faire est de falsifier toutes vos informations comme indiqué précédemment et de renforcer la sécurité du compte. Pour ce faire, activez le [MFA](multi-factor-authentication.md) et toutes les fonctions de sécurité supplémentaires proposées par le site web. De même, changez le mot de passe avec un mot de passe généré de manière aléatoire qui correspond à la taille maximale autorisée par le site web (un [gestionnaire de mots de passe](/passwords/#local-password-managers) peut être utile pour cela).

Si vous êtes convaincu que toutes les informations auxquelles vous tenez ont été supprimées, vous pouvez oublier ce compte en toute sécurité. Si ce n'est pas le cas, il peut être judicieux de conserver les informations d'identification avec vos autres mots de passe et de vous reconnecter occasionnellement pour réinitialiser le mot de passe.

Même lorsque vous êtes en mesure de supprimer un compte, il n'y a aucune garantie que toutes vos informations seront supprimées. Certaines entreprises sont tenues par la loi de conserver certaines informations, notamment lorsqu'elles sont liées à des transactions financières. Vous n'avez pratiquement aucun contrôle sur ce qui arrive à vos données lorsqu'il s'agit des sites web et des services cloud.

## Éviter la création de nouveaux comptes

Comme le dit le vieil adage, "Mieux vaut prévenir que guérir". Chaque fois que vous êtes tenté de vous inscrire à un nouveau service ou site web, demandez-vous : "En ai-je vraiment besoin ? Puis-je accomplir ce dont j'ai besoin sans compte ?" Il est souvent beaucoup plus difficile de supprimer un compte que d'en créer un. Et même après avoir supprimé ou modifié les informations sur votre compte, il se peut qu'il existe une version en cache provenant d'un tiers, comme [Internet Archive](https://archive.org/). Évitez la tentation quand vous le pouvez - votre futur vous en remerciera !

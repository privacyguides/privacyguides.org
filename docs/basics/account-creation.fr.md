---
title: "Création de Compte"
icon: 'material/account-plus'
---

Souvent, les gens s'inscrivent à des services sans réfléchir. Il s'agit peut-être d'un service de streaming qui vous permet de regarder la nouvelle émission dont tout le monde parle, ou d'un compte qui vous permet de bénéficier d'une réduction dans votre fast-food préféré. Quoi qu'il en soit, vous devez tenir compte des implications pour vos données, maintenant et plus tard.

Chaque nouveau service que vous utilisez comporte des risques. Les fuites de données, la divulgation d'informations sur les clients à des tiers, l'accès à des données par des employés véreux sont autant de possibilités qui doivent être envisagées avant de founir vos informations. Vous devez être sûr que vous pouvez faire confiance au service, c'est pourquoi nous ne recommandons pas de stocker des données précieuses sur autre chose que les produits les plus matures et les plus éprouvés. Il s'agit généralement de services qui fournissent E2EE et qui ont fait l'objet d'un audit cryptographique. Un audit renforce l'assurance que le produit a été conçu sans problèmes de sécurité flagrants causés par un développeur inexpérimenté.

Il peut également être difficile de supprimer les comptes sur certains services. Il est parfois possible [d'écraser les données](account-deletion.md#overwriting-account-information) associées à un compte, mais dans d'autres cas, le service conservera un historique complet des modifications apportées au compte.

## Conditions Générales d'Utilisation & Politique de Confidentialité

Les CGU sont les règles que vous acceptez de suivre lorsque vous utilisez le service. Dans les grands services, ces règles sont souvent appliquées par des systèmes automatisés. Parfois, ces systèmes automatisés peuvent faire des erreurs. Par exemple, vous pouvez être banni ou bloqué de votre compte sur certains services pour avoir utilisé un VPN ou numéro VOIP. Il est souvent difficile de faire appel de ces interdictions, et cela implique également une procédure automatisée, qui n'aboutit pas toujours. C'est l'une des raisons pour lesquelles nous ne suggérons pas d'utiliser Gmail pour la messagerie électronique, par exemple. L'e-mail est essentiel pour accéder à d'autres services auxquels vous avez peut-être souscrit.

La Politique de Confidentialité est la manière dont le service indique qu'il utilisera vos données. Elle mérite d'être lue pour que vous compreniez comment vos données seront utilisées. Une entreprise ou une organisation peut ne pas être légalement obligée de suivre tout ce qui est contenu dans la politique (cela dépend de la juridiction). Nous vous recommandons d'avoir une idée de la législation locale et de ce qu'elle autorise un prestataire à collecter.

Nous vous recommandons de rechercher des termes particuliers tels que "collecte de données", "analyse de données", "cookies", "annonces", "publicité" ou services "tiers". Parfois, vous aurez la possibilité de refuser la collecte ou le partage de vos données, mais il est préférable de choisir un service qui respecte votre vie privée dès le départ.

Vous faites également confiance à l'entreprise ou à l'organisation pour se conformer à sa propre politique de confidentialité.

## Méthodes d'authentification

Il existe généralement plusieurs façons de créer un compte, chacune ayant ses propres avantages et inconvénients.

### E-mail et mot de passe

Le moyen le plus courant de créer un nouveau compte est d'utiliser une adresse e-mail et un mot de passe. Lorsque vous utilisez cette méthode, vous devriez utiliser un gestionnaire de mots de passe et suivre les [bonnes pratiques](passwords-overview.md) concernant les mots de passe.

!!! tip "Conseil"

    Vous pouvez également utiliser votre gestionnaire de mots de passe pour gérer d'autres méthodes d'authentification ! Il suffit d'ajouter la nouvelle entrée et de remplir les champs appropriés. Vous pouvez ajouter des notes pour des choses comme des questions de sécurité ou une clé de secours.

Vous serez responsable de la gestion de vos identifiants de connexion. Pour plus de sécurité, vous pouvez configurer [MFA](multi-factor-authentication.md) sur vos comptes.

[Gestionnaires de mots de passe recommandés](../passwords.md ""){.md-button}

#### Alias d'e-mail

Si vous ne voulez pas donner votre véritable adresse e-mail à un service, vous avez la possibilité d'utiliser un alias. Nous les avons décrits plus en détail sur notre page de recommandation des services d'e-mail. Essentiellement, les services d'alias vous permettent de créer de nouvelles adresses e-mail qui transmettent tous les courriers à votre adresse principale. Cela peut permettre d'éviter le pistage entre les services et vous aider à gérer les e-mail de marketing qui accompagnent parfois le processus d'inscription. Ceux-ci peuvent être filtrés automatiquement en fonction de l'alias auquel ils sont envoyés.

Si un service est piraté, vous pouvez commencer à recevoir des e-mails d'hameçonnage ou de spam à l'adresse que vous avez utilisée pour vous inscrire. L'utilisation d'alias uniques pour chaque service peut aider à identifier exactement quel service a été piraté.

[Services d'alias d'e-mail recommandés](../email.md#email-aliasing-services ""){.md-button}

### Authentification unique

!!! note "À noter"

    Nous parlons de l'authentification unique pour l'usage personnel, pas pour les entreprises.

L'authentification unique (SSO) est une méthode d'authentification qui vous permet de vous inscrire à un service sans partager beaucoup d'informations, voire aucune. Chaque fois que vous voyez quelque chose du type "Continuer avec *nom du fournisseur*" sur un formulaire d'inscription, il s'agit de SSO.

Lorsque vous choisissez l'authentification unique sur un site web, la page de connexion de votre fournisseur d'authentification unique s'affiche et votre compte est ensuite connecté. Votre mot de passe ne sera pas communiqué, mais certaines informations de base le seront (vous pouvez les consulter lors de la demande de connexion). Ce processus est nécessaire chaque fois que vous voulez vous connecter au même compte.

Les principaux avantages sont les suivants :

- **Sécurité**: aucun risque d'être impliqué dans une [fuite de données](https://fr.wikipedia.org/wiki/Violation_de_donn%C3%A9es) car le site ne stocke pas vos informations d'identification.
- **Facilité d'utilisation**: plusieurs comptes sont gérés par un seul login.

Mais il y a des inconvénients :

- **Vie privée**: un fournisseur de SSO connaîtra les services que vous utilisez.
- **Centralisation**: si votre compte SSO est compromis ou si vous n'êtes pas en mesure de vous y connecter, tous les autres comptes qui y sont connectés sont affectés.

Le SSO peut être particulièrement utile dans les situations où vous pouvez bénéficier d'une intégration plus poussée entre les services. Par exemple, l'un de ces services peut offrir le SSO pour les autres. Notre recommandation est de limiter le SSO aux seuls endroits où vous en avez besoin et de protéger le compte principal avec [MFA](multi-factor-authentication.md).

Tous les services qui utilisent le SSO seront aussi sécurisé que votre compte SSO. Par exemple, si vous souhaitez sécuriser un compte à l'aide d'une clé matérielle mais que ce service ne prend pas en charge les clés matérielles, vous pouvez sécuriser votre compte SSO à l'aide d'une clé matérielle et disposer ainsi d'un MFA matériel sur tous vos comptes. Il convient toutefois de noter qu'une authentification faible sur votre compte SSO signifie que tout compte lié à cette connexion sera également faiblement sécurisé.

### Numéro de téléphone

Nous vous recommandons d'éviter les services qui exigent un numéro de téléphone pour l'inscription. Un numéro de téléphone peut vous identifier auprès de plusieurs services et, en fonction des accords de partage des données, cela rendra votre navigation plus facile à suivre, en particulier si l'un de ces services a une fuite, car le numéro de téléphone est souvent **non** chiffré.

Vous devriez éviter de donner votre vrai numéro de téléphone si vous le pouvez. Certains services autorisent l'utilisation de numéros VOIP, mais ceux-ci déclenchent souvent des systèmes de détection des fraudes, entraînant le blocage du compte, ce que nous ne recommandons pas pour les comptes importants.

Dans de nombreux cas, vous devrez fournir un numéro à partir duquel vous pourrez recevoir des SMS ou des appels, en particulier lorsque vous effectuez des achats à l'étranger, au cas où votre commande rencontrerait un problème lors du contrôle aux frontières. Il est courant que les services utilisent votre numéro comme méthode de vérification ; ne vous faites pas bloquer un compte important parce que vous avez voulu être malin et donner un faux numéro !

### Nom d'utilisateur et mot de passe

Certains services vous permettent de vous inscrire sans utiliser d'adresse électronique et vous demandent seulement de définir un nom d'utilisateur et un mot de passe. Ces services peuvent offrir un anonymat accru lorsqu'ils sont associés à un VPN ou à Tor. Gardez à l'esprit que pour ces comptes, il n'y aura très probablement **aucun moyen de récupérer votre compte** au cas où vous oublieriez votre nom d'utilisateur ou votre mot de passe.

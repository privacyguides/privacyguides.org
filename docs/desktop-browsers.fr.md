---
title: "Navigateurs de Bureau"
icon: material/laptop
---

Ce sont les navigateurs web de bureau et les configurations que nous recommandons actuellement pour une navigation classique/non anonyme. Si vous avez besoin de naviguer anonymement sur Internet, vous devriez plutôt utiliser [Tor](tor.md). D'une manière générale, nous vous recommandons de limiter au maximum les extensions de votre navigateur ; elles ont un accès privilégié dans votre navigateur, vous obligent à faire confiance au développeur, peuvent vous faire [sortir du lot](https://fr.wikipedia.org/wiki/Empreinte_digitale_d%27appareil), et [affaiblir](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) l'isolation des sites.

## Firefox

!!! recommendation

    ![Logo Firefox](assets/img/browsers/firefox.svg){ align=right }
    
    **Firefox** offre de solides paramètres de confidentialité, tels que la [protection renforcée contre le suivi] (https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur), qui peut contribuer à bloquer divers [types de suivi] (https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur#w_what-enhanced-tracking-protection-blocks).
    
    [:octicons-home-16: Accueil](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/fr/privacy/firefox/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title="Documentation"}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="Code source"}
    [:octicons-heart-16:](https://donate.mozilla.org/fr/){ .card-link title=Contribuer}
    
    ??? downloads "Téléchargements"
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! warning "Avertissement"
    Firefox inclut un [jeton de téléchargement](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) unique dans les téléchargements effectués à partir du site Web de Mozilla et utilise la télémétrie dans Firefox pour envoyer le jeton. Le jeton **n'est pas** inclus dans les versions de [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

### Configuration recommandée

Le navigateur Tor est le seul moyen de vraiment naviguer anonymement sur Internet. Si vous utilisez Firefox, nous recommandons de modifier les paramètres suivants pour protéger votre vie privée de certains acteurs, mais tous les navigateurs autres que le [Navigateur Tor](tor.md#tor-browser) seront traçables par *quelqu'un* d'une manière ou d'une autre.

Ces options se trouvent dans :material-menu: → **Paramètres** → **Confidentialité & Sécurité**.

##### Protection renforcée contre le pistage

- [x] Sélectionnez **Stricte** Protection renforcée contre le pistage

Cela vous protège en bloquant les traceurs de réseaux sociaux, les scripts de prise d'empreinte (notez que cela ne vous protège pas de *toutes* les prises d'empreinte), les cryptomineurs, les cookies de suivi intersites et certains autres contenus de suivi. La PRT protège de nombreuses menaces courantes, mais ne bloque pas tous les moyens de suivi, car il est conçu pour avoir un impact minimal, voire nul, sur l'utilisation du site.

##### Supprimer à la fermeture

Si vous voulez rester connecté à des sites en particulier, vous pouvez autoriser des exceptions dans **Cookies et données de site** → **Gérer les exceptions....**

- [x] Cochez **Supprimer les cookies et les données du site lorsque Firefox est fermé**

Cela vous protège contre les cookies persistants, mais ne vous protège pas contre les cookies acquis au cours d'une même session de navigation. Lorsque cette option est activée, il devient possible de nettoyer facilement les cookies de votre navigateur en redémarrant simplement Firefox. Vous pouvez définir des exceptions par site, si vous souhaitez rester connecté à un site précis que vous visitez souvent.

##### Suggestions de recherche

- [ ] Décochez **Fournir des suggestions de recherche**

Les fonctionnalités de suggestion de recherche peuvent ne pas être disponibles dans votre région.

Les suggestions de recherche envoient tout ce que vous tapez dans la barre d'adresse au moteur de recherche par défaut, que vous effectuiez ou non une recherche effective. La désactivation des suggestions de recherche vous permet de contrôler plus précisément les données que vous envoyez à votre fournisseur de moteur de recherche.

##### Télémétrie

- [ ] Décochez **Autoriser Firefox à envoyer des données techniques et d'interaction à Mozilla**
- [ ] Décochez **Autoriser Firefox à installer et à exécuter des études**
- [ ] Décochez **Permettre à Firefox d'envoyer en votre nom les rapports de plantage**

> Firefox nous envoie des données sur la version et la langue de votre Firefox ; le système d'exploitation de l'appareil et la configuration matérielle ; la mémoire, les informations de base sur les plantages et les erreurs; les résultats de processus automatisés tels que les mises à jour, la navigation sécurisée et l'activation de notre système. Lorsque Firefox nous envoie des données, votre adresse IP est temporairement collectée dans les journaux de notre serveur.

En outre, le service Firefox Accounts collecte [certaines données techniques](https://www.mozilla.org/en-US/privacy/firefox/#firefox-accounts). Si vous utilisez un compte Firefox, vous pouvez la refuser :

1. Ouvrez les [paramètres de votre profil sur accounts.firefox.com](https://accounts.firefox.com/settings#data-collection)
2. Décochez **Collecte et utilisation de données** > **Aidez à améliorer les comptes Firefox**

##### Mode HTTPS uniquement

- [x] Sélectionnez **Activer le mode HTTPS uniquement dans toutes les fenêtres**

Cela vous empêche de vous connecter involontairement à un site Web en "clair" HTTP. Les sites sans HTTPS sont rares de nos jours. Cela ne devrait donc avoir que peu ou pas d'impact sur votre navigation quotidienne.

### Synchronisation Firefox

La [Synchronisation Firefox](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) permet à vos données de navigation (historique, favoris, etc.) d'être accessibles sur tous vos appareils et les protège avec le chiffrement de bout en bout (E2EE).

### Arkenfox (avancé)

Le projet [Arkenfox](https://github.com/arkenfox/user.js) fournit un ensemble d'options soigneusement étudiées pour Firefox. Si vous [décidez](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) d'utiliser Arkenfox, quelques [options](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) sont subjectivement strictes et/ou peuvent empêcher certains sites Web de fonctionner correctement. [Vous pouvez facilement modifier ces options](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) pour répondre à vos besoins. Nous **recommandons vivement** de lire l'intégralité de leur [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox permet également la prise en charge des [conteneurs](https://support.mozilla.org/fr/kb/conteneurs#w_for-advanced-users).

## Brave

!!! recommendation

    ![Logo Brave](assets/img/browsers/brave.svg){ align=right }
    
    **Le navigateur Brave** comprend un bloqueur de contenu intégré et des [fonctions de confidentialité](https://brave.com/privacy-features/), dont la plupart sont activées par défaut.
    
    Brave est basé sur le projet de navigateur Web Chromium. Il devrait donc vous être familier et présenter un minimum de problèmes de compatibilité avec les sites Web.
    
    [:octicons-home-16: Page d'accueil](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Code source" }
    
    ??? downloads annotate "Téléchargements"
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)

    1. Nous vous déconseillons d'utiliser la version Flatpak de Brave, car elle remplace la sandbox de Chromium par celle de Flatpak, qui est moins efficace. De plus, le paquet n'est pas maintenu par Brave Software, Inc.

### Configuration recommandée

Le navigateur Tor est le seul moyen de vraiment naviguer anonymement sur Internet. Lorsque vous utilisez Brave, nous vous recommandons de modifier les paramètres suivants afin de protéger votre vie privée de certains tiers, mais tous les navigateurs autres que le [Navigateur Tor](tor.md#tor-browser) seront traçables par *quelqu'un* d'une manière ou d'une autre.

Ces options se trouvent dans :material-menu: → **Paramètres**.

##### Shields

Brave inclut certaines mesures contre la prise d'empreinte numérique dans sa fonction [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Nous vous suggérons de configurer ces options [de manière globale](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) sur toutes les pages que vous visitez.

Les options Shields peuvent être réduites par site selon les besoins, mais par défaut, nous recommandons de définir les paramètres suivants:

<div class="annotate" markdown>

- [x] Sélectionnez **Empêchez les sites de prendre mon empreinte numérique en fonction de mes préférences linguistiques**
- [x] Sélectionnez **Agressif** dans la rubrique Blocage des pisteurs et annonces

    ??? warning "Utiliser les listes de filtres par défaut"
        Brave vous permet de sélectionner des filtres de contenu supplémentaires dans la page interne `brave://adblock`. Nous vous déconseillons d'utiliser cette fonctionnalité ; conservez plutôt les listes de filtres par défaut. L'utilisation de listes supplémentaires vous distinguera des autres utilisateurs de Brave et peut également augmenter la surface d'attaque s'il y a une faille dans Brave et qu'une règle malveillante est ajoutée à l'une des listes que vous utilisez.

- [x] (Facultatif) Sélectionnez **Bloquer les scripts** (1)
- [x] Sélectionnez **Strict, peut casser les sites** sous Bloquer la capture d'empreinte numérique

</div>

1. Cette option fournit une fonctionnalité similaire aux [modes de blocage](https://github.com/gorhill/uBlock/wiki/Blocking-mode) avancés de uBlock Origin ou l'extension [NoScript](https://noscript.net/).

##### Blocage des médias sociaux

- [ ] Décochez toutes les fonctionnalités de médias sociaux

##### Confidentialité et sécurité

<div class="annotate" markdown>

- [x] Sélectionnez **Désactiver l'UDP pas en proxy** sous [Politique de gestion  des adresses IP WebRTC](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Décochez **Utiliser les services Google pour la messagerie push**
- [ ] Décochez **Autoriser l'analyse de produits respectueuse de la vie privée (P3A)**
- [ ] Décochez **Envoyer automatiquement un signal d'utilisation quotidienne à Brave**
- [x] Sélectionnez **Toujours utiliser une connexion sécurisée** dans le menu **Sécurité**
- [ ] Décochez **Fenêtre privée avec Tor** (1)

    !!! tip "Nettoyer à la Fermeture"
        - [x] Sélectionnez **Effacer les cookies et les données du site lorsque vous fermez toutes les fenêtres** dans le menu *Cookies et autres données du site*

        Si vous souhaitez rester connecté à un site particulier que vous visitez souvent, vous pouvez définir des exceptions par site dans la section *Comportements personnalisés*.

</div>

1. Brave **n'est pas** aussi résistant à la prise d'empreinte numérique que le navigateur Tor et beaucoup moins de personnes utilisent Brave avec Tor, vous sortirez donc du lot. Lorsqu'[un fort anonymat est nécessaire](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) utilisez le [Navigateur Tor ](tor.md#tor-browser).

##### Extensions

Désactivez les extensions intégrées que vous n'utilisez pas dans **Extensions**

- [ ] Décochez **Hangouts**
- [ ] Décochez **WebTorrent**

##### IPFS

InterPlanetary File System (IPFS) est un réseau décentralisé, de pair à pair, permettant de stocker et de partager des données dans un système de fichiers distribué. À moins que vous n'utilisiez cette fonctionnalité, désactivez-la.

- [x] Sélectionnez **désactivé** dans la méthode pour résoudre les ressources IPFS

##### Paramètres additionnels

Dans le menu *Système*

<div class="annotate" markdown>

- [ ] Décochez **Continuer l'exécution des applications lorsque Brave est fermé** pour désactiver les applications en arrière-plan (1)

</div>

1. Cette option n'est pas présente sur toutes les plateformes.

### Synchronisation Brave

La [Synchronisation Brave](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) permet à vos données de navigation (historique, signets, etc.) d'être accessibles sur tous vos appareils sans nécessiter de compte et les protège avec E2EE.

## Ressources Supplémentaires

Nous ne recommandons généralement pas l'installation d'extensions, car elles augmentent votre surface d'attaque. Cependant, uBlock Origin peut s'avérer utile si vous appréciez la fonctionnalité de blocage de contenu.

### uBlock Origin

!!! recommendation

    ![Logo uBlock Origin](assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin** est un bloqueur de contenu populaire qui peut vous aider à bloquer les publicités, les traqueurs et les scripts d'empreintes numériques.
    
    [:octicons-repo-16: Dépôt](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

Nous vous suggérons de suivre la [documentation du développeur](https://github.com/gorhill/uBlock/wiki/Blocking-mode) et de choisir l'un des "modes". Des listes de filtres supplémentaires peuvent avoir un impact sur les performances et [peuvent augmenter la surface d'attaque](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

##### Autres listes

Voici d'autres [listes de filtres](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) que vous pourriez envisager d'ajouter :

- [x] Cochez **Confidentialité** > **AdGuard URL Tracking Protection**
- Ajoutez [Actually Legitimate URL Shortener Tool](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

### Exigences minimales

- Open-source.
- Prend en charge les mises à jour automatiques.
- Reçoit les mises à jour du moteur dans un délai de 1 jour à partir de la publication en amont.
- Disponible sur Linux, macOS et Windows.
- Les modifications nécessaires pour rendre le navigateur plus respectueux de la vie privée ne devraient pas avoir d'impact négatif sur l'expérience des utilisateurs.
- Bloque les cookies tiers par défaut.
- Prend en charge le [cloisonnement des états](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) pour atténuer le suivi intersite.[^1]

### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- Comprend une fonctionnalité intégrée de blocage du contenu.
- Supporte la compartimentation des cookies (à la [Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers)).
- Prend en charge les Progressive Web Apps.  
  Les PWAs vous permettent d'installer certains sites web comme s'il s'agissait d'applications natives sur votre ordinateur. Cela peut présenter des avantages par rapport à l'installation d'applications basées sur Electron, car vous bénéficiez des mises à jour de sécurité régulières de votre navigateur.
- Ne comprend pas de fonctionnalités supplémentaires (bloatware) qui n'ont pas d'incidence sur la vie privée des utilisateurs.
- Ne collecte pas de télémétrie par défaut.
- Fournit une implémentation de serveur de synchronisation open-source.
- Le moteur de recherche par défaut est un [moteur de recherche privé](search-engines.md).

### Critères d'extension

- Ne doit pas dupliquer une fonctionnalité intégrée dans le navigateur ou dans le système d'exploitation.
- Doit avoir un impact direct sur la vie privée des utilisateurs, c'est-à-dire qu'il ne doit pas simplement fournir des informations.

[^1]: L'implémentation de Brave est détaillée dans [Mises à jour de la confidentialité de Brave : Partitionnement de l'état du réseau pour la confidentialité](https://brave.com/privacy-updates/14-partitioning-network-state/).

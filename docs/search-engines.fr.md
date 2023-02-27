---
title: "Moteurs de Recherche"
icon: material/search-web
---

Utilisez un moteur de recherche qui ne construit pas un profil publicitaire en fonction de vos recherches.

Les recommandations formulées ici sont fondées sur les mérites de la politique de confidentialité de chaque service. Il n'y a **aucune garantie** que ces politiques de confidentialité soient respectées.

Envisagez d'utiliser un [VPN](vpn.md) ou [Tor](https://www.torproject.org/) si votre modèle de menace nécessite de cacher votre adresse IP du fournisseur de recherche.

## Brave Search

!!! recommendation

    ![Logo de Brave Search](assets/img/search-engines/brave-search.svg){ align=right }
    
    **Brave Search** est développé par Brave et fournit des résultats provenant principalement de son propre index indépendant. L'index est optimisé en se basant sur Google Search et peut donc fournir des résultats contextuellement plus précis que d'autres solutions.
    
    Brave Search comprend des fonctionnalités uniques telles que Discussions, qui met en évidence les résultats axés sur la conversation, comme les messages des forums.
    
    Nous vous recommandons de désactiver [Mesures d'utilisation anonymes](https://search.brave.com/help/usage-metrics) car ells sont activées par défaut et peuvent être désactivées dans les paramètres.
    
    [:octicons-home-16: Page d'accueil](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentation}

Brave Search est basé aux États-Unis. Leur [politique de confidentialité](https://search.brave.com/help/privacy-policy) indique qu'ils collectent des données d'utilisation agrégées, notamment le système d'exploitation et le navigateur utilisés, mais qu'aucune information permettant d'identifier une personne n'est collectée. Les adresses IP sont traitées temporairement, mais ne sont pas conservées.

## DuckDuckGo

!!! recommendation

    ![Logo DuckDuckGo](assets/img/search-engines/duckduckgo.svg){ align=right }
    
    **DuckDuckGo** est l'un des moteurs de recherche privés les plus populaires. Parmi les fonctionnalités de recherche notables de DuckDuckGo figurent les [bangs](https://duckduckgo.com/bang) et de nombreuses [réponses instantanées](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/). Le moteur de recherche s'appuie sur une API commerciale de Bing pour fournir la plupart des résultats, mais il utilise également de nombreuses [autres sources](https://help.duckduckgo.com/results/sources/) pour les réponses instantanées et d'autres résultats non primaires.
    
    DuckDuckGo est le moteur de recherche par défaut du navigateur Tor et l'une des rares options disponibles sur le navigateur Safari d'Apple.
    
    [:octicons-home-16: Page d'accueil](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentation}

DuckDuckGo est basé aux États-Unis. Leur [politique de confidentialité](https://duckduckgo.com/privacy) indique qu'ils **font** enregistrer vos recherches à des fins d'amélioration des produits, mais pas votre adresse IP ou toute autre information d'identification personnelle.

DuckDuckGo propose deux [autres versions](https://help.duckduckgo.com/features/non-javascript/) de son moteur de recherche, toutes deux ne nécessitant pas de JavaScript. Ces versions manquent toutefois de fonctionnalités. Ces versions peuvent également être utilisées conjointement avec leur [adresse oignon Tor](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) en ajoutant [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) ou [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) pour la version respective.

## SearXNG

!!! recommendation

    ![Logo SearXNG](assets/img/search-engines/searxng.svg){ align=right }
    
    **SearXNG** est un métamoteur de recherche open-source, auto-hébergeable, qui agrège les résultats d'autres moteurs de recherche sans stocker lui-même d'informations. C'est un fork activement maintenu de [SearX](https://github.com/searx/searx).
    
    [:octicons-home-16: Page d'accueil](https://searxng.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://searx.space/){ .card-link title="Instances publiques"}
    [:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Code source" }

SearXNG est un proxy entre vous et les moteurs de recherche qu'il agrège. Vos requêtes de recherche seront toujours envoyées aux moteurs de recherche dont SearXNG tire ses résultats.

Lorsque vous auto-hébergez, il est important que d'autres personnes utilisent également votre instance pour que vous puissiez vous fondre dans la masse. Vous devriez faire attention à l'endroit et à la manière dont vous hébergez SearXNG, car les personnes qui recherchent du contenu illégal sur votre instance pourraient attirer l'attention des autorités.

Lorsque vous utilisez une instance SearXNG, assurez-vous d'aller lire sa politique de confidentialité. Les instances SearXNG pouvant être modifiées par leurs propriétaires, elles ne reflètent pas nécessairement leur politique de confidentialité. Certaines instances fonctionnent en tant que service caché Tor, ce qui peut garantir une certaine confidentialité tant que vos requêtes de recherche ne contiennent pas de DCP (données à caractère personnelles).

## Startpage

!!! recommendation

    ![Logo de Startpage](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![Logo de Startpage](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }
    
    **Startpage** est un moteur de recherche privé connu pour servir les résultats de recherche de Google.  L'une des caractéristiques uniques de Startpage est la [Vue anonyme](https://www.startpage.com/en/anonymous-view/), qui s'efforce de normaliser l'activité des utilisateurs afin de rendre plus difficile leur identification. Cette fonction peut être utile pour masquer [quelques](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) propriétés du réseau et du navigateur. Contrairement à ce que son nom suggère, il ne faut pas compter sur cette fonction pour assurer l'anonymat. Si vous recherchez l'anonymat, utilisez plutôt le [Navigateur Tor](tor.md#tor-browser).
    
    [:octicons-home-16: Page d'accueil](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentation}

!!! warning "Avertissement"

    Startpage limite régulièrement l'accès au service à certaines adresses IP, comme les IP réservées aux VPN ou à Tor. [DuckDuckGo](#duckduckgo) et [Brave Search](#brave-search) sont des options plus conviviales si votre modèle de menace nécessite de cacher votre adresse IP au fournisseur de recherche.

Startpage est basée aux Pays-Bas. Selon leur [politique de confidentialité](https://www.startpage.com/en/privacy-policy/), ils enregistrent des détails tels que : le système d'exploitation, le type de navigateur et la langue. Ils n'enregistrent pas votre adresse IP, vos requêtes de recherche ou d'autres informations à caractère personnel.

L'actionnaire majoritaire de Startpage est System1 qui est une société de technologie publicitaire. Nous ne pensons pas que ce soit un problème car ils ont une [politique de confidentialité](https://system1.com/terms/privacy-policy)distincte. L'équipe de Privacy Guides a contacté Startpage [en 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) pour dissiper toute inquiétude quant à l'investissement considérable de System1 dans ce service. Nous avons été satisfaits des réponses que nous avons reçues.

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

### Exigences minimales

- Ne doit pas collecter d'informations permettant d'identifier une personne, conformément à sa politique de confidentialité.
- Ne doit pas permettre aux utilisateurs de créer un compte chez eux.

### Dans le meilleur des cas

Nos critères de cas idéal représentent ce que nous aimerions voir d'un projet parfait dans cette catégorie. Nos recommandations peuvent ne pas inclure tout ou partie de cette fonctionnalité, mais celles qui l'inclus peuvent être mieux classées que les autres sur cette page.

- Doit être basé sur des logiciels open-source.
- Ne doit pas bloquer les adresses IP des nœuds de sortie Tor.

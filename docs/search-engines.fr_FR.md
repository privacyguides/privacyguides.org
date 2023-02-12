---
title: "Moteurs de Recherche"
icon: material/search-web
---

Utilisez un moteur de recherche qui ne construit pas un profil publicitaire en fonction de vos recherches.

Les recommandations formulées ici sont fondées sur les mérites de la politique de confidentialité de chaque service. Il n'y a **aucune garantie** que ces politiques de confidentialité soient respectées.

Envisagez d'utiliser un [VPN](vpn.md) ou [Tor](https://www.torproject.org/) si votre modèle de menace nécessite de cacher votre adresse IP du fournisseur de recherche.

## DuckDuckGo

!!! recommendation

    ![Logo DuckDuckGo](assets/img/search-engines/duckduckgo.svg#only-light){ align=right }
    ![logo DuckDuckGo](assets/img/search-engines/duckduckgo-dark.svg#only-dark){ align=right }
    
    **DuckDuckGo** est l'une des options de moteur de recherche privé les plus courantes. Parmi les fonctionnalités de recherche notables de DuckDuckGo figurent les [bangs](https://duckduckgo.com/bang) et de nombreuses [réponses instantanées] (https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/).
    
    Le moteur de recherche s'appuie sur une API commerciale de Bing pour fournir la plupart des résultats, mais il utilise également de nombreuses [autres sources] (https://help.duckduckgo.com/results/sources/) pour les réponses instantanées et d'autres résultats non primaires.
    
    Si le principal service de DuckDuckGo est son moteur de recherche, l'entreprise s'est récemment diversifiée en proposant plusieurs autres services et produits.
    
    Cela inclut leurs navigateurs web, leur service de relais de messagerie, etc.
    
    DuckDuckGo est le moteur de recherche par défaut du navigateur Tor et l'une des rares options disponibles sur le navigateur Safari d'Apple.

Brave Search est basé aux États-Unis. Leur [politique de confidentialité](https://duckduckgo.com/privacy) indique qu'ils **font** enregistrer vos recherches à des fins d'amélioration des produits, mais pas votre adresse IP ou toute autre information d'identification personnelle. Les adresses IP sont traitées temporairement, mais ne sont pas conservées.

## Startpage

DuckDuckGo propose deux autres [versions](https://help.duckduckgo.com/features/non-javascript/) de son moteur de recherche, qui ne nécessitent pas de JavaScript. Ces versions manquent toutefois de fonctionnalités.

    ![logo Startpage](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![logo Startpage](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }
    
    **Startpage** est un moteur de recherche privé connu pour servir les résultats de recherche Google. La fonctionnalité phare de Startpage est la [Vue Anonyme] (https://www.startpage.com/en/anonymous-view/), qui met en avant des efforts pour standardiser l'activité des utilisateurs pour rendre plus difficile leur identification unique. Contrairement à ce que son nom suggère, il ne faut pas compter sur cette fonction pour assurer l'anonymat.
    
    Si vous recherchez l'anonymat, utilisez plutôt le navigateur Tor.
    
    Cette fonction peut être utile pour masquer certaines propriétés du réseau et du navigateur - voir le [document technique] (https://support.startpage.com/index.php?/Knowledgebase/Article/View/1185/0/the-anonymous-view-proxy---technical-details=undefined) pour plus de détails.

DuckDuckGo est basé aux États-Unis. recommendation

DuckDuckGo propose deux [autres versions](https://help.duckduckgo.com/features/non-javascript/) de son moteur de recherche, toutes deux ne nécessitant pas de JavaScript. Selon leur [politique de confidentialité](https://www.startpage.com/en/privacy-policy/), ils enregistrent des détails tels que : le système d'exploitation, le type de navigateur et la langue. Ils n'enregistrent pas votre adresse IP, vos requêtes de recherche ou d'autres informations d'identification personnelle.

## Brave Search

L'actionnaire majoritaire de Startpage est System1 qui est une société de technologie publicitaire. Nous ne pensons pas que ce soit un problème car ils ont une [politique de confidentialité](https://system1.com/terms/privacy-policy)distincte.

    ![Logo de Brave Search](assets/img/search-engines/brave-search.svg){ align=right }
    
    **Brave Search** est développé par Brave et sert des résultats provenant principalement de son propre index indépendant. L'index est optimisé contre Google Search et peut donc fournir des résultats contextuellement plus précis que d'autres solutions.
    
    Brave Search comprend des fonctionnalités uniques telles que Discussions, qui met en évidence les résultats axés sur la conversation, comme les messages des forums.

SearXNG est un proxy entre vous et les moteurs de recherche qu'il agrège. recommendation

Lorsque vous auto-hébergez, il est important que d'autres personnes utilisent également votre instance pour que vous puissiez vous fondre dans la masse. recommendation

Lorsque vous utilisez une instance SearXNG, assurez-vous d'aller lire sa politique de confidentialité. Vos requêtes de recherche seront toujours envoyées aux moteurs de recherche dont SearXNG tire ses résultats. Certaines instances fonctionnent en tant que service caché Tor, ce qui peut garantir une certaine confidentialité tant que vos requêtes de recherche ne contiennent pas de DCP (données à caractère personnelles).

## SearXNG

Lors de l'auto-hébergement, il est important que d'autres personnes utilisent votre instance afin que les requêtes se fondent. Vous devez faire attention à l'endroit et à la manière dont vous hébergez SearXNG, car les personnes qui recherchent du contenu illégal sur votre instance pourraient attirer l'attention des autorités.

    ![Logo SearXNG](assets/img/search-engines/searxng.svg){ align=right }
    
    **SearXNG** est un métamoteur de recherche open-source, auto-hébergeable, qui agrège les résultats d'autres moteurs de recherche tout en ne stockant aucune information lui-même.  C'est un fork activement maintenu de [SearX](https://github.com/searx/searx). Il existe une [liste d'instances publiques] (https://searx.space/). Si vous recherchez l'anonymat, utilisez plutôt le navigateur Tor. Cette fonction peut être utile pour masquer certaines propriétés du réseau et du navigateur - voir le [document technique] (https://support.startpage.com/index.php?/Knowledgebase/Article/View/1185/0/the-anonymous-view-proxy---technical-details=undefined) pour plus de détails.
    
    Startpage est connu pour refuser l'accès à ceux qui utilisent un service VPN ou Tor, donc votre expérience peut varier.

Lorsque vous utilisez une instance de SearXNG, veillez à lire sa politique de confidentialité. Les instances SearXNG pouvant être modifiées par leurs propriétaires, elles ne reflètent pas nécessairement leur politique de confidentialité.

    Startpage limite régulièrement l'accès au service à certaines adresses IP, comme les IP réservées aux VPN ou à Tor. [DuckDuckGo](#duckduckgo) et [Brave Search](#brave-search) sont des options plus conviviales si votre modèle de menace nécessite de cacher votre adresse IP au fournisseur de recherche.

Lorsque vous utilisez une instance SearXNG, assurez-vous d'aller lire sa politique de confidentialité. Les instances SearXNG pouvant être modifiées par leurs propriétaires, elles ne reflètent pas nécessairement leur politique de confidentialité. Certaines instances fonctionnent comme un service caché Tor, ce qui peut garantir une certaine confidentialité tant que vos requêtes de recherche ne contiennent pas de DCP (données à caractère personnelles).

L'actionnaire majoritaire de Startpage est System1 qui est une société de technologie publicitaire. Nous ne pensons pas que ce soit un problème car ils ont une [politique de confidentialité](https://system1.com/terms/privacy-policy)distincte. L'équipe de Privacy Guides a contacté Startpage [en 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) pour dissiper toute inquiétude quant à l'investissement considérable de System1 dans ce service. Nous avons été satisfaits des réponses que nous avons reçues.

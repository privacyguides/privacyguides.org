---
title: "Réseau Tor"
icon: simple/torproject
---

![Logo Tor](assets/img/self-contained-networks/tor.svg){ align=right }

Le réseau **Tor** est un groupe de serveurs gérés par des bénévoles qui vous permet de vous connecter gratuitement et d'améliorer votre confidentialité et votre sécurité sur Internet. Les particuliers et les organisations peuvent également partager des informations sur le réseau Tor avec des "services cachés .onion" sans compromettre leur vie privée. Parce que le trafic Tor est difficile à bloquer et à tracer, Tor est un outil efficace pour contourner la censure.

[:octicons-home-16:](https://www.torproject.org/fr/){ .card-link title="Page d'accueil"}
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/fr/){ .card-link title="Service Onion" }
[:octicons-info-16:](https://tb-manual.torproject.org/fr/){ .card-link title=Documentation}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Code Source" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuer }

Tor fonctionne en acheminant votre trafic Internet via ces serveurs gérés par des volontaires, au lieu d'établir une connexion directe avec le site que vous essayez de visiter. Cela permet de masquer la provenance du trafic, et aucun serveur sur le chemin de la connexion n'est en mesure de voir le chemin complet de la provenance et de la destination du trafic, ce qui signifie que même les serveurs que vous utilisez pour vous connecter ne peuvent pas briser votre anonymat.

<figure markdown>
  ![Chemin de Tor](assets/img/how-tor-works/tor-path.svg#only-light)
  ![Chemin de Tor](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Chemin du circuit de Tor - Les nœuds du chemin ne peuvent voir que les serveurs auxquels ils sont directement connectés, par exemple le nœud "d'Entrée" indiqué peut voir votre adresse IP, et l'adresse du nœud "Central", mais n'a aucun moyen de voir quel site Web vous visitez.</figcaption>
</figure>

- [Plus d'informations sur le fonctionnement de Tor :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## Se connecter à Tor

Il existe plusieurs façons de se connecter au réseau Tor à partir de votre appareil, la plus utilisée étant le **Navigateur Tor**, un fork de Firefox conçu pour la navigation anonyme sur les ordinateurs de bureau et Android. En plus des applications listées ci-dessous, il existe également des systèmes d'exploitation conçus spécifiquement pour se connecter au réseau Tor tels que [Whonix](linux-desktop.md/#whonix) sur [Qubes OS](qubes.md), qui offrent une sécurité et des protections encore plus importantes que le navigateur Tor standard.

### Navigateur Tor

!!! recommendation

    ![Logo de Tor Browser](assets/img/browsers/tor.svg){ align=right }
    
    Le **Navigateur Tor** est le choix idéal si vous avez besoin d'anonymat, car il vous donne accès au réseau et aux ponts Tor, et il inclut des paramètres par défaut et des extensions qui sont automatiquement configurées par les niveaux de sécurité par défaut : *Normal*, *Plus sûr* et *Le plus sûr*.
    
    [:octicons-home-16: Page d'accueil](https://www.torproject.org/fr/){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/fr/){ .card-link title="Service Onion" }
    [:octicons-info-16:](https://tb-manual.torproject.org/fr/){ .card-link title=Documentation }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuer }
    
    ??? téléchargements
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/fr/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/fr/download/)
        - [:simple-apple: macOS](https://www.torproject.org/fr/download/)
        - [:simple-linux: Linux](https://www.torproject.org/fr/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)
        - [:simple-openbsd: OpenBSD](https://openports.se/net/tor)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/net/tor)

!!! danger

    Vous ne devriez **jamais** installer des extensions supplémentaires sur le navigateur Tor, y compris celles que nous suggérons pour Firefox. Les extensions de navigateur et les paramètres non standard vous distinguent des autres sur le réseau Tor, rendant ainsi votre navigateur plus facile à la [prise d'empreintes numérique](https://support.torproject.org/fr/glossary/browser-fingerprinting/).

Le Navigateur Tor est conçu pour empêcher la prise d'empreintes numérique, ou l'identification en fonction de la configuration de votre navigateur. Par conséquent, il est impératif de ne **pas** modifier le navigateur au-delà des [niveaux de sécurité](https://tb-manual.torproject.org/fr/security-settings/) par défaut.

### Orbot

!!! recommendation

    ![Logo Orbot](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** est un VPN Tor gratuit pour smartphones qui achemine le trafic de n'importe quelle application sur votre appareil à travers le réseau Tor.
    
    [:octicons-home-16: Page d'accueil](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentation}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-fdroid: F-Droid](https://guardianproject.info/fdroid)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)

Pour résister aux attaques par analyse de trafic, pensez à activer l'option *Isoler l'adresse de destination* dans :material-menu: → **Paramètres** → **Connectivité**. Cela utilisera un circuit Tor complètement différent (différents relais intermédiaires et nœuds de sortie) pour chaque domaine auquel vous vous connectez.

!!! tip "Astuces pour Android"

    Orbot peut proxy des applications individuelles si elles supportent le proxying SOCKS ou HTTP. Il peut également proxy toutes vos connexions réseau en utilisant [VpnService](https://developer.android.com/reference/android/net/VpnService) et peut être utilisé avec le killswitch VPN dans :gear: **Paramètres** → **Réseau & internet** → **VPN** → :gear: → **Bloquer les connexions sans VPN**.
    
    Orbot est souvent obsolète sur le [dépôt F-Droid] (https://guardianproject.info/fdroid) du Guardian Project et sur le [Google Play] (https://play.google.com/store/apps/details?id=org.torproject.android), alors envisagez à la place de télécharger directement depuis le [dépôt GitHub] (https://github.com/guardianproject/orbot/releases).
    
    Toutes les versions sont signées en utilisant la même signature, elles devraient donc être compatibles entre elles.

## Relais et Ponts

### Snowflake

!!! recommendation

    ![Logo Snowflake](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Logo Snowflake](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** vous permet de donner de la bande passante au Projet Tor en faisant fonctionner un "proxy Snowflake" dans votre navigateur.
    
    Les personnes censurées peuvent utiliser les proxys Snowflake pour se connecter au réseau Tor. Snowflake est un excellent moyen de contribuer au réseau même si vous n'avez pas le savoir-faire technique pour gérer un relais ou un pont Tor.
    
    [:octicons-home-16: Page d'accueil](https://snowflake.torproject.org/?lang=fr){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuer }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/fr/firefox/addon/torproject-snowflake/){ .card-link title=Firefox }
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie){ .card-link title=Chrome }
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Laissez cette page ouverte pour être un proxy Snowflake")

??? tip "Snowflake intégré"

    Vous pouvez activer Snowflake dans votre navigateur en cliquant sur le bouton ci-dessous et en laissant cette page ouverte. Vous pouvez également installer Snowflake en tant qu'extension de navigateur pour qu'il s'exécute toujours lorsque votre navigateur est ouvert, mais l'ajout d'extensions tierces peut augmenter votre surface d'attaque.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Si l'intégration n'apparaît pas pour vous, assurez-vous que vous ne bloquez pas le cadre tiers de `torproject.org`. Vous pouvez également consulter [cette page] (https://snowflake.torproject.org/embed.html).</small>

Snowflake n'améliore en rien votre vie privée et n'est pas utilisé pour se connecter au réseau Tor dans votre navigateur personnel. Toutefois, si votre connexion Internet n'est pas censurée, vous devriez envisager de l'utiliser pour aider les personnes se trouvant sur des réseaux censurés à améliorer elles-mêmes leur vie privée. Il n'y a pas besoin de s'inquiéter des sites web auxquels les gens accèdent via votre proxy - leur adresse IP de navigation visible correspondra à leur nœud de sortie Tor, pas à la vôtre.

Faire fonctionner un proxy Snowflake est peu risqué, encore moins que de faire fonctionner un relais ou un pont Tor qui ne sont déjà pas des entreprises particulièrement risquées. Toutefois, il achemine le trafic par le biais de votre réseau, ce qui peut avoir un impact à certains égards, surtout si votre réseau a une bande passante limitée. Assurez-vous de comprendre [le fonctionnement de Snowflake](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) avant de décider de faire tourner un proxy.

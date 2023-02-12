---
title: "Services VPN"
icon: material/vpn
---

Trouvez un opérateur VPN sans journalisation qui n'est pas là pour vendre ou lire votre trafic Web.

??? danger "Les VPN ne fournissent pas l'anonymat"

    L'utilisation d'un VPN ne rendra **pas** votre navigation anonyme et n'ajoutera pas de sécurité supplémentaire à un trafic non sécurisé (HTTP).
    
    Si vous recherchez l' **anonymat**, vous devriez utiliser le navigateur Tor **au lieu** d'un VPN.
    
    Si vous recherchez plus de **sécurité**, vous devriez toujours vous assurer que vous vous connectez à des sites web utilisant HTTPS. Un VPN ne remplace pas les bonnes pratiques de sécurité.
    
    [Télécharger Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mythes sur Tor & FAQ](https://medium.com/privacyguides/slicing-onions-part-1-myth-busting-tor-9ec188ae1904){ .md-button }

??? question "Quand les VPN sont-ils utiles ?"

    Si vous recherchez à protéger votre **vie privé** vis-à-vis de votre fournisseur d'accès internet, sur un réseau Wi-Fi public ou lors du torrenting de fichiers, un VPN peut être la solution pour vous, à condition que vous compreniez les risques encourus.
    
    [Plus d'infos](#vpn-overview){ .md-button }

## Fournisseurs Recommandés

!!! summary "Critères"

    Les fournisseurs que nous recommandons utilisent le chiffrement, acceptent le Monero, prennent en charge WireGuard & OpenVPN, et ont une politique de non journalisation. Lisez notre [liste complète de critères] (#our-criteria) pour plus d'informations.

### Mullvad

!!! recommendation annotate

    ![Logo Mullvad](assets/img/vpn/mullvad.svg#only-light){ align=right }
    ![Logo Mullvad](assets/img/vpn/mullvad-dark.svg#only-dark){ align=right }
    
    **Mullvad** est un VPN rapide et peu coûteux qui met l'accent sur la transparence et la sécurité. Ils sont en activité depuis **2009**.
    
    Mullvad est basé en Suède et n'a pas de période d'essai gratuit. téléchargements
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/fr/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/fr/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

??? check annotate "38 Pays"

    Mullvad possède [des serveurs dans 38 pays] (https://mullvad.net/servers/) (1). En choisissant un fournisseur de VPN dont le serveur est le plus proche de vous vous réduirez la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
    
    Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur de VPN qu'il utilise des [serveurs dédiés] (https://en.wikipedia.org/wiki/Dedicated_hosting_service), plutôt que des solutions partagées moins chères (avec d'autres clients) telles que les [serveurs privés virtuels] (https://en.wikipedia.org/wiki/Virtual_private_server).

1. En date du 17/05/2022

??? check "Audités de manière indépendante"

    Les clients VPN de Mullvad ont été audités par Cure53 et Assured AB dans un rapport de test de pénétration [publié sur cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Les chercheurs en sécurité ont conclu :
    
    > Cure53 et Assured AB sont satisfaits des résultats de l'audit et le logiciel laisse une impression globalement positive. Grâce au dévouement de l'équipe interne du complexe VPN de Mullvad, les testeurs n'ont aucun doute sur le fait que le projet est sur la bonne voie du point de vue de la sécurité. Vous pouvez consulter les rapports individuels pour chaque plateforme à l'adresse [protonvpn.com](https://protonvpn.com/blog/open-source/). En avril 2022, Proton VPN a fait l'objet d'un [autre audit] (https://protonvpn.com/blog/no-logs-audit/) et le rapport a été [produit par Securitum] (https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). Une [lettre d'attestation] (https://proton.me/blog/security-audit-all-proton-apps) a été fournie pour les applications de Proton VPN le 9 novembre 2021 par [Securitum](https://research.securitum.com).

??? check "Clients Open Source"

    Proton VPN fournit le code source de ses clients de bureau et mobiles dans son [organisation GitHub] (https://github.com/ProtonVPN).

??? check "Accepte l'Argent Liquide et le Monero"

    En plus d'accepter les cartes de crédit/débit et PayPal, IVPN accepte le Bitcoin, le **Monero** et **l'argent liquide/la monnaie locale** (sur les plans annuels) comme formes de paiement anonymes.

??? check "Supporte WireGuard"

    Mullvad prend en charge le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise de la [cryptographie](https://www.wireguard.com/protocol/) de pointe. De plus, WireGuard vise à être plus simple et plus performant.
    
    Mullvad [recommande](https://mullvad.net/en/help/why-wireguard/) l'utilisation de WireGuard avec leur service. Il s'agit du seul protocole ou celui par défaut sur les applications Android, iOS, macOS et Linux de Mullvad, mais sous Windows, vous devez [activer manuellement](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard.

??? check "Supporte IPv6"

    Mullvad soutient l'avenir du réseau [IPv6](https://en.wikipedia.org/wiki/IPv6). Leur réseau vous permet [d'accéder à des services hébergés sur IPv6] (https://mullvad.net/en/blog/2014/9/15/ipv6-support/), contrairement à d'autres fournisseurs qui bloquent les connexions IPv6.

??? check "Redirection de port distant"

    En plus de fournir des fichiers de configuration OpenVPN standard, Proton VPN dispose de clients mobiles pour [App Store] (https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play] (https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), et [GitHub](https://github.com/ProtonVPN/android-app/releases) permettant de se connecter facilement à leurs serveurs.

??? check "Clients Mobile"

    Mullvad a publié des clients [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) et [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), qui prennent tous deux en charge une interface facile à utiliser, au lieu de vous demander de configurer manuellement votre connexion WireGuard. Le client mobile sur Android est également disponible dans [F-Droid](https://f-droid.org/packages/net.mullvad.mullvadvpn), ce qui garantit qu'il est compilé avec des [builds reproductibles] (https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). De plus, Proton VPN propose également des serveurs "Tor" vous permettant de vous connecter facilement aux sites oignon, mais nous vous recommandons toujours fortement d'utiliser [le navigateur officiel Tor] (https://www.torproject.org/fr/) à cet effet. De plus, Proton VPN propose également des serveurs "Tor" vous permettant de vous connecter facilement aux sites oignon, mais nous vous recommandons toujours fortement d'utiliser [le navigateur officiel Tor] (https://www.torproject.org/fr/) à cet effet.

!!! info "Fonctionnalités Supplémentaires"

    Mullvad est très transparent quant aux nœuds qu'il [possède ou loue] (https://mullvad.net/en/servers/). Ils utilisent [ShadowSocks](https://shadowsocks.org/en/index.html) dans leur configuration ShadowSocks OpenVPN, ce qui les rend plus résistants aux pare-feu avec l'[Inspection Approfondie des Paquets] (https://en.wikipedia.org/wiki/Deep_packet_inspection) qui tentent de bloquer les VPN.

### Proton VPN

!!! recommendation annotate

    ![Logo Proton VPN](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** est un concurrent solide dans l'espace VPN, et ils sont en service depuis 2016. Proton AG est basé en Suisse et propose une offre gratuite limitée, ainsi qu'une option premium plus complète.
    
    **Gratuit** - **Forfait Plus EUR 71.88€/an** (1)
    
    [Page d'accueil](https://protonvpn.com/){ .md-button .md-button--primary } Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur de VPN qu'il utilise des [serveurs dédiés] (https://en.wikipedia.org/wiki/Dedicated_hosting_service), plutôt que des solutions partagées moins chères (avec d'autres clients) telles que les [serveurs privés virtuels] (https://en.wikipedia.org/wiki/Virtual_private_server).

??? check annotate "63 Pays"

    Proton VPN a [des serveurs dans 63 pays] (https://protonvpn.com/vpn-servers) (1). En choisissant un fournisseur de VPN dont le serveur est le plus proche de vous vous réduirez la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
    
    Une autre étude a été réalisée [en avril 2022] (https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) et a été produite par Cure53 [sur leur site web] (https://cure53.de/pentest-report_IVPN_2022.pdf).

1. Une réduction supplémentaire de 10% est accordée pour un abonnement de 2 ans (119,76€).

??? check "Audités de manière indépendante"

    Depuis février 2020 [les applications IVPN sont désormais open source] (https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Le code source peut être obtenu auprès de leur [organisation GitHub] (https://github.com/ivpn). IVPN a également déclaré qu'il prévoyait de publier des [rapports annuels] (https://www.ivpn.net/blog/independent-security-audit-concluded) à l'avenir. Une autre étude a été réalisée [en avril 2022] (https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) et a été fournie par Cure53 [sur leur site web] (https://cure53.de/pentest-report_IVPN_2022.pdf).

??? check "Clients Open Source"

    Depuis février 2020 [les applications IVPN sont désormais open source] (https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Le code source peut être obtenu auprès de leur [organisation GitHub] (https://github.com/ivpn).

??? check "Accepte l'Argent Liquide et le Monero"

    En plus d'accepter les cartes de crédit/débit et PayPal, IVPN accepte le Bitcoin, le **Monero** et **l'argent liquide/la monnaie locale** (sur les plans annuels) comme formes de paiement anonymes.

??? check "Supporte WireGuard"

    Proton VPN supporte le protocole WireGuard® la plupart du temps. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise de la [cryptographie](https://www.wireguard.com/protocol/) de pointe. La redirection de port n'est disponible sur IVPN que lorsque l'on utilise les protocoles WireGuard ou OpenVPN et est [désactivée sur les serveurs américains] (https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).
    
    IVPN [recommande](https://www.ivpn.net/wireguard/) l'utilisation de WireGuard avec leur service et, de ce fait, ce protocole est le protocole par défaut sur toutes les applications d'IVPN. IVPN propose également un générateur de configuration WireGuard à utiliser avec l'[application](https://www.wireguard.com/install/) officielle WireGuard.

??? warning "Redirection de Port Distant"

    La [redirection de port](https://fr.wikipedia.org/wiki/Redirection_de_port) distants est possible avec une offre Pro. La redirection de port [peut être activée](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via l'espace client. La redirection de port n'est disponible sur IVPN que lorsque l'on utilise les protocoles WireGuard ou OpenVPN et est [désactivée sur les serveurs US] (https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? check "Clients Mobile"

    En plus de fournir des fichiers de configuration OpenVPN standard, IVPN dispose de clients mobiles pour [App Store] (https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play] (https://play.google.com/store/apps/details?id=net.ivpn.client), et [GitHub](https://github.com/ivpn/android-app/releases) permettant de se connecter facilement à leurs serveurs.

??? check "Clients Mobile"

    Proton VPN possède ses propres serveurs et centres de données en Suisse, en Islande et en Suède. Ils proposent le blocage des publicités et des domaines de logiciels malveillants connus avec leur service DNS.

### IVPN

!!! recommendation

    ![Logo IVPN](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** est un autre fournisseur de VPN premium, et il est en activité depuis 2009. IVPN est basé à Gibraltar. **Standard USD $60/an** — **Pro USD $100/an**
    
    [Page d'accueil](https://www.ivpn.net/){ .md-button .md-button--primary }
    
    Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur de VPN qu'il utilise des [serveurs dédiés] (https://en.wikipedia.org/wiki/Dedicated_hosting_service), plutôt que des solutions partagées moins chères (avec d'autres clients) telles que les [serveurs privés virtuels] (https://en.wikipedia.org/wiki/Virtual_private_server). downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

??? check annotate "32 Pays"

    IVPN possède [des serveurs dans 32 pays] (https://www.ivpn.net/server-locations) (1). En choisissant un fournisseur de VPN dont le serveur est le plus proche de vous vous réduirez la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
    
    Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur de VPN qu'il utilise des [serveurs dédiés] (https://en.wikipedia.org/wiki/Dedicated_hosting_service), plutôt que des solutions partagées moins chères (avec d'autres clients) telles que les [serveurs privés virtuels] (https://en.wikipedia.org/wiki/Virtual_private_server).

1. En date du 17/05/2022

??? check "Audités de manière indépendante"

    Les clients VPN de Mullvad ont été audités par Cure53 et Assured AB dans un rapport de test de pénétration [publié sur cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Les chercheurs en sécurité ont conclu :
    
    > Cure53 et Assured AB sont satisfaits des résultats de l'audit et le logiciel laisse une impression globalement positive. Grâce au dévouement de l'équipe interne du complexe du VPN Mullvad, les testeurs n'ont aucun doute sur le fait que le projet est sur la bonne voie du point de vue de la sécurité.
    
    En 2020, un deuxième audit [a été annoncé](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) et le [rapport d'audit final](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) a été mis à disposition sur le site internet de Cure53 :
    
    > Les résultats de ce projet de mai-juin 2020 ciblant le complexe Mullvad sont plutôt positifs. [...] L'écosystème applicatif utilisé par Mullvad laisse une impression solide et structurée. La structure globale de l'application permet de déployer facilement des correctifs et corrections de manière structurée. Plus que tout, les résultats repérés par Cure53 montrent l'importance d'un audit et d'une réévaluation constante des vecteurs de fuite actuels, afin de toujours garantir la confidentialité des utilisateurs finaux. Ceci étant dit, Mullvad fait un excellent travail en protégeant l'utilisateur final contre les fuites courantes de DCP et les risques liés à la confidentialité.
    
    En 2021, un audit des infrastructures [a été annoncé] (https://mullvad.net/fr/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) et le [rapport d'audit final] (https://cure53.de/pentest-report_mullvad_2021_v1.pdf) a été mis à disposition sur le site web de Cure53. Un autre rapport a été commandé [en juin 2022] (https://mullvad.net/fr/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) et est disponible sur [le site web d'Assured] (https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

??? check "Clients Open Source"

    Mullvad fournit le code source de ses clients de bureau et mobiles dans son [organisation GitHub] (https://github.com/mullvad/mullvadvpn-app).

??? check "Accepte l'Argent Liquide et le Monero"

    Mullvad prend en charge le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise de la [cryptographie](https://www.wireguard.com/protocol/) de pointe.

??? check "Supporte WireGuard"

    IVPN supporte le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise de la [cryptographie](https://www.wireguard.com/protocol/) de pointe. De plus, WireGuard vise à être plus simple et plus performant.
    
    Mullvad [recommande](https://mullvad.net/fr/help/why-wireguard/) l'utilisation de WireGuard avec leur service. Il s'agit du seul protocole ou celui par défaut sur les applications Android, iOS, macOS et Linux de Mullvad, mais sous Windows, vous devez l'[activer manuellement](https://mullvad.net/fr/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad propose également un générateur de configuration WireGuard à utiliser avec l'[application](https://www.wireguard.com/install/) officielle WireGuard.

??? check "Redirection de port distant"

    La [redirection de port](https://en.wikipedia.org/wiki/Port_forwarding) à distance est possible avec une offre Pro. La redirection de port [peut être activée](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via l'espace client.

??? check "Clients Mobile"

    En plus de fournir des fichiers de configuration OpenVPN standard, IVPN dispose de clients mobiles pour [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683) et [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client) permettant de se connecter facilement à leurs serveurs. Le client mobile sur Android est également disponible dans [F-Droid](https://f-droid.org/en/packages/net.ivpn.client), ce qui garantit qu'il est compilé avec des [builds reproductibles](https://www.f-droid.org/en/2019/05/05/trust-privacy-and-free-software.html). Voir [Redirection de port avec Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) pour plus d'informations.

??? info "Fonctionnalités Supplémentaires"

    Les clients IVPN prennent en charge l'authentification à deux facteurs (les clients VPN Mullvad et Proton ne le font pas). IVPN offre également la fonctionnalité "[AntiTraqueurs](https://www.ivpn.net/antitracker)", qui bloque les réseaux publicitaires et les trackers au niveau du réseau.

??? danger

    Il est important de noter que l'utilisation d'un fournisseur VPN ne vous rendra pas anonyme, mais qu'elle vous permettra de mieux protéger votre vie privée dans certaines situations. Un VPN n'est pas un outil pour des activités illégales. Ne vous fiez pas à une politique de "non-journalisation". Le site web de Mullvad est également accessible via Tor à l'adresse [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

## Nos Critères

**Veuillez noter que nous ne sommes affiliés à aucun des fournisseurs que nous recommandons. Cela nous permet de fournir des recommandations totalement objectives.** Nous avons élaboré un ensemble clair d'exigences pour tout fournisseur de VPN souhaitant être recommandé, notamment un chiffrage fort, des audits de sécurité indépendants, des technologies modernes, et plus encore.

    Il est important de noter que l'utilisation d'un fournisseur VPN ne vous rendra pas anonyme, mais qu'elle vous permettra de mieux protéger votre vie privée dans certaines situations. Un VPN n'est pas un outil pour des activités illégales. Ne vous fiez pas à une politique de "non-journalisation".

Nous exigeons de tous nos fournisseurs VPN recommandés qu'ils fournissent des fichiers de configuration OpenVPN utilisables dans n'importe quel client. **Si** un VPN fournit son propre client personnalisé, nous exigeons un killswitch pour bloquer les fuites de données du réseau lors de la déconnexion. Nous vous suggérons de vous familiariser avec cette liste avant de choisir un fournisseur VPN, et de mener vos propres recherches pour vous assurer que le fournisseur VPN que vous choisissez est le plus digne de confiance possible.

### Technologie

Nous exigeons de tous nos fournisseurs VPN recommandés qu'ils fournissent des fichiers de configuration OpenVPN utilisables dans n'importe quel client. **Si** un VPN fournit son propre client personnalisé, nous exigeons un killswitch pour bloquer les fuites de données du réseau lors de la déconnexion.

**Le Meilleur Cas:**

- Prise en charge de protocoles forts tels que WireGuard & OpenVPN.
- Killswitch intégré dans les clients.
- Support multi-sauts. Le multi-sauts est important pour garder les données privées en cas de compromission d'un seul noeud.
- Si des clients VPN sont fournis, ils doivent être [open source](https://en.wikipedia.org/wiki/Open_source), comme le logiciel VPN qui y est généralement intégré. Nous pensons que la disponibilité du [code source](https://en.wikipedia.org/wiki/Source_code) offre une plus grande transparence sur ce que fait réellement votre appareil.

**Le Meilleur Cas :**

- Prise en charge de WireGuard et d'OpenVPN.
- Killswitch avec des options hautement configurables (activer/désactiver sur certains réseaux, au démarrage, etc.)
- Clients VPN faciles à utiliser
- Supporte [IPv6](https://en.wikipedia.org/wiki/IPv6). Nous nous attendons à ce que les serveurs autorisent les connexions entrantes via IPv6 et vous permettent d'accéder aux services hébergés sur des adresses IPv6.
- La capacité de [redirection de port à distance](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) aide à créer des connexions lors de l'utilisation de logiciels de partage de fichiers P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)), de Freenet ou de l'hébergement d'un serveur (par exemple, Mumble).

### Confidentialité

Nous préférons que nos prestataires recommandés collectent le moins de données possible. Ne pas recueillir de renseignements personnels sur l'inscription et accepter des modes de paiement anonymes sont requis.

**Le Meilleur Cas:**

- Option de paiement en Monero ou en espèces.
- Aucune information personnelle requise pour s'inscrire : Seuls le nom d'utilisateur, le mot de passe et l'e-mail sont requis.

**Le Meilleur Cas :**

- Accepte Monero, espèces et autres formes d'options de paiement anonymes (cartes-cadeaux, etc.)
- Aucune information personnelle acceptée (nom d'utilisateur généré automatiquement, pas d'e-mail requis, etc.)

### Sécurité

Un VPN est inutile s'il ne peut même pas fournir une sécurité adéquate. Nous exigeons de tous nos fournisseurs recommandés qu'ils respectent les normes de sécurité en vigueur pour leurs connexions OpenVPN. Idéalement, ils utiliseraient par défaut des schémas de chiffrement plus évolutifs. Nous exigeons également qu'un tiers indépendant procède à un audit de la sécurité du fournisseur, idéalement de manière très complète et de manière répétée (chaque année).

**Le Meilleur Cas:**

- Schémas de chiffrement forts : OpenVPN avec authentification SHA-256 ; poignée de main RSA-2048 ou mieux ; chiffrage des données AES-256-GCM ou AES-256-CBC.
- Confidentialité Persistante (PFS).
- Des audits de sécurité publiés par une société tierce réputée.

**Le Meilleur Cas :**

- Chiffrement le plus fort : RSA-4096.
- Confidentialité Persistante (PFS).
- Des audits de sécurité complets publiés par une société tierce réputée.
- Des programmes de primes aux bugs et/ou un processus coordonné de divulgation des vulnérabilités.

### Confiance

Vous ne confieriez pas vos finances à une personne ayant une fausse identité, alors pourquoi lui confier vos données internet ? Nous exigeons de nos fournisseurs recommandés qu'ils rendent public leur propriété ou leur direction. Nous aimerions également voir des rapports de transparence fréquents, notamment en ce qui concerne la manière dont les demandes du gouvernement sont traitées.

**Le Meilleur Cas:**

- Une direction ou un propriétaire public.

**Le Meilleur Cas :**

- Une direction publique.
- Rapports de transparence fréquents.

### Marketing

Avec les fournisseurs de VPN que nous recommandons, nous aimons voir un marketing responsable.

**Le Meilleur Cas:**

- Doit héberger lui-même ses outils d'analyse de traffic (pas de Google Analytics, etc.). Le site du fournisseur doit également se conformer à [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) pour les personnes qui souhaitent se désinscrire.

Ne doit pas avoir de marketing irresponsable :

- Garantir la protection de l'anonymat à 100%. Lorsque quelqu'un prétend que quelque chose est à 100%, cela signifie qu'il n'y a aucune certitude d'échec. Nous savons que les gens peuvent assez facilement se désanonymiser de plusieurs façons, par exemple :
    - Réutiliser des informations personnelles (par exemple, des comptes de messagerie, des pseudonymes uniques, etc.) auxquelles ils ont accédé sans logiciel d'anonymat (Tor, VPN, etc.)
    - [Empreinte digitale des navigateurs](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Affirmer qu'un seul circuit VPN est « plus anonyme » que Tor, qui est un circuit de 3 sauts ou plus qui change régulièrement.
- Utilisez un langage responsable, par exemple, il est acceptable de dire qu'un VPN est "déconnecté" ou "non connecté", mais dire qu'une personne est "exposée", "vulnérable" ou "compromise" est une utilisation inutile d'un langage alarmant qui peut être incorrect. Par exemple, cette personne peut simplement être sur le service d'un autre fournisseur de VPN ou utiliser Tor.

**Le Meilleur Cas :**

Un marketing responsable qui est à la fois éducatif et utile au consommateur pourrait inclure :

- Une comparaison précise pour savoir quand utiliser Tor ou d'autres [réseaux autonomes](self-contained-networks.md) .
- Disponibilité du site web du fournisseur VPN sur un [Service caché](https://en.wikipedia.org/wiki/.onion) .onion

### Fonctionnalités Supplémentaires

Bien qu'il ne s'agisse pas d'exigences strictes, nous avons tenu compte de certains facteurs pour déterminer les fournisseurs à recommander. Ceux-ci incluent la fonctionnalité de blocage des publicités/traqueurs, les canaris de mandats, les connexions multi-sauts, un excellent support client, le nombre de connexions simultanées autorisées, etc.

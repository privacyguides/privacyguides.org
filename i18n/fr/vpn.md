---
title: "Services VPN"
icon: material/vpn
description: Voici les meilleurs services VPN pour protéger votre vie privée et votre sécurité en ligne. Trouvez ici un fournisseur qui ne cherche pas à vous espionner.
---

Si vous recherchez à protéger votre **vie privée** vis-à-vis de votre FAI, sur un réseau Wi-Fi public ou lorsque vous téléchargez des fichiers en torrent, un VPN peut être la solution pour vous, à condition que vous compreniez les risques encourus. Nous pensons que ces fournisseurs se distinguent des autres :

<div class="grid cards" markdown>

- ![Logo IVPN](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Logo Mullvad](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Logo Proton VPN](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! danger "Les VPN ne fournissent pas l'anonymat"

    L'utilisation d'un VPN ne rendra **pas** votre navigation anonyme et n'ajoutera pas de sécurité supplémentaire à un trafic non sécurisé (HTTP).
    
    Si vous recherchez l'**anonymat**, vous devriez utiliser le navigateur Tor **au lieu** d'un VPN.
    
    Si vous recherchez plus de **sécurité**, vous devez toujours vous assurer que vous vous connectez aux sites web en utilisant HTTPS. Un VPN ne remplace pas les bonnes pratiques de sécurité.
    
    [Télécharger Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mythes sur Tor & FAQ](advanced/tor-overview.md){ .md-button }

[Présentation détaillée des VPNs :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Fournisseurs recommandés

Les fournisseurs que nous recommandons utilisent le chiffrement, acceptent le Monero, prennent en charge WireGuard & OpenVPN, et ont une politique de non journalisation. Lisez notre [liste complète de critères](#criteria) pour plus d'informations.

### IVPN

!!! recommendation

    ![Logo IVPN](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** est un autre fournisseur de VPN haut de gamme, et il est en activité depuis 2009. IVPN est basé à Gibraltar.
    
    [:octicons-home-16: Page d'accueil](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 pays

IVPN a ses [serveurs dans 35 pays](https://www.ivpn.net/server-locations).(1) Choisir un fournisseur VPN avec un serveur le plus proche de vous réduira la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
{ .annotate }

1. En date du : 2022-09-16

Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur VPN d'utiliser des [serveurs dédiés](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9), plutôt que des solutions partagées (avec d'autres clients) moins chères telles que les [serveurs privés virtuels](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel).

#### :material-check:{ .pg-green } Audit indépendant

IVPN a fait l'objet d'un [audit de non-journalisation par Cure53](https://cure53.de/audit-report_ivpn.pdf) qui a conclu à la validité de l'affirmation d'IVPN concernant l'absence d'enregistrement. IVPN a également terminé un [rapport complet de test d'intrusion par Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) en janvier 2020. IVPN a également indiqué qu'elle prévoyait à l'avenir de mettre à disposition les [rapports annuels](https://www.ivpn.net/blog/independent-security-audit-concluded). Une nouvelle étude a été réalisée [en avril 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) et a été mise à disposition par Cure53 sur [leur site web](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Clients open source

Depuis février 2020, [les applications IVPN sont désormais open source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Le code source peut être obtenu auprès de leur [organisation GitHub](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepte l'argent liquide et le Monero

En plus d'accepter les cartes de crédit/débit et PayPal, IVPN accepte le Bitcoin, **le Monero** et **les espèces/la monnaie locale** (sur les abonnements annuels) comme formes de paiement anonymes.

#### :material-check:{ .pg-green } Prise en charge de WireGuard

IVPN prend en charge le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise une [cryptographie](https://www.wireguard.com/protocol/) de pointe. De plus, WireGuard vise à être plus simple et plus performant.

IVPN [recommande](https://www.ivpn.net/wireguard/) l'utilisation de WireGuard avec leur service et, en tant que tel, le protocole est par défaut sur toutes les applications d'IVPN. IVPN propose également un générateur de configuration WireGuard à utiliser avec les [applications](https://www.wireguard.com/install/) officielles WireGuard.

#### :material-check:{ .pg-green } Redirection de port

La [redirection de port](https://fr.wikipedia.org/wiki/Redirection_de_port) est possible avec une offre Pro. La redirection de port [peut être activée](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via l'espace client. La redirection de port n'est disponible sur IVPN que lorsque l'on utilise les protocoles WireGuard ou OpenVPN et est [désactivée sur les serveurs américains](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Clients mobiles

En plus de fournir des fichiers de configuration OpenVPN standard, IVPN a des clients mobiles pour l'[App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), le [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), et [GitHub](https://github.com/ivpn/android-app/releases) permettant des connexions faciles à leurs serveurs.

#### :material-information-outline:{ .pg-blue } Fonctionnalités supplémentaires

Les clients IVPN prennent en charge l'authentification à deux facteurs (les clients de Mullvad ne le font pas). IVPN propose également la fonctionnalité "[AntiTracker](https://www.ivpn.net/antitracker)", qui bloque les réseaux publicitaires et les traqueurs au niveau du réseau.

### Mullvad

!!! recommendation

    ![Logo Mullvad](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** est un VPN rapide et peu coûteux qui met l'accent sur la transparence et la sécurité. Il est en activité depuis **2009**. Mullvad est basé en Suède et n'a pas de période d'essai gratuit.
    
    [:octicons-home-16: Page d'accueil](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

#### :material-check:{ .pg-green } 41 pays

Mullvad a des [serveurs dans 41 pays](https://mullvad.net/servers/).(1) Choisir un fournisseur VPN avec un serveur le plus proche de vous réduira la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
{ .annotate }

1. En date du : 2023-01-19

Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur VPN d'utiliser des [serveurs dédiés](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9), plutôt que des solutions partagées (avec d'autres clients) moins chères telles que les [serveurs privés virtuels](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel).

#### :material-check:{ .pg-green } Audit indépendant

Les clients VPN de Mullvad ont été audités par Cure53 et Assured AB dans un rapport de test d'intrusion [publié sur cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Les chercheurs en sécurité ont conclu :

> Cure53 et Assured AB sont satisfaits des résultats de l'audit et le logiciel laisse une impression générale positive. Grâce au dévouement de l'équipe interne du complexe du VPN Mullvad, les testeurs n'ont aucun doute sur le fait que le projet est sur la bonne voie du point de vue de la sécurité.

En 2020, un deuxième audit [a été annoncé](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) et le [rapport d'audit final](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) a été publié sur le site web de Cure53 :

> Les résultats de ce projet de mai-juin 2020 ciblant le complexe de Mullvad sont assez positifs. [...] L'écosystème applicatif utilisé par Mullvad laisse une impression solide et structurée. La structure globale de l'application permet de déployer facilement des correctifs et corrections de manière structurée. Plus que tout, les résultats repérés par Cure53 montrent l'importance d'un audit et d'une réévaluation constante des vecteurs de fuite actuels, afin de toujours garantir la confidentialité des utilisateurs finaux. Ceci étant dit, Mullvad fait un excellent travail en protégeant l'utilisateur final contre les fuites courantes de DCP et les risques liés à la confidentialité.

En 2021, un audit des infrastructures [a été annoncé](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) et le [rapport d'audit final](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) a été publié sur le site web de Cure53. Un autre rapport a été commandé [en juin 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) et est disponible sur le [site web d'Assured](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Clients open source

Mullvad fournit le code source pour leurs clients de bureau et mobiles dans leur [organisation GitHub](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepte l'argent liquide et le Monero

Mullvad, en plus d'accepter les cartes de crédit/débit et PayPal, accepte le Bitcoin, le Bitcoin Cash, **le Monero** et **les espèces/la monnaie locale** comme formes de paiement anonymes. Ils acceptent également Swish et les virements bancaires.

#### :material-check:{ .pg-green } Prise en charge de WireGuard

Mullvad prend en charge le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise une [cryptographie](https://www.wireguard.com/protocol/) de pointe. De plus, WireGuard vise à être plus simple et plus performant.

Mullvad [recommande](https://mullvad.net/en/help/why-wireguard/) l'utilisation de WireGuard avec leur service. C'est le protocole par défaut ou le seul sur les applications Android, iOS, macOS et Linux de Mullvad, mais sur Windows, vous devez [activer manuellement](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad propose également un générateur de configuration WireGuard à utiliser avec les [applications](https://www.wireguard.com/install/) officielles WireGuard.

#### :material-check:{ .pg-green } Prise en charge de l'IPv6

Mullvad soutient l'avenir des réseaux [IPv6](https://fr.wikipedia.org/wiki/IPv6). Leur réseau vous permet d'accéder aux [services hébergés sur IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/), contrairement à d'autres fournisseurs qui bloquent les connexions IPv6.

#### :material-check:{ .pg-green } Redirection de port

La [redirection de port](https://en.wikipedia.org/wiki/Port_forwarding) est autorisée pour les personnes qui effectuent des paiements ponctuels, mais pas pour les comptes ayant un mode de paiement récurrent ou par abonnement. Ceci afin d'empêcher Mullvad de pouvoir vous identifier sur la base de votre utilisation du port et des informations d'abonnement stockées. Voir [Redirection de port avec Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) pour plus d'informations.

#### :material-check:{ .pg-green } Clients mobiles

Mullvad a publié des clients [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) et [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), tous deux avec une interface simple à utiliser plutôt que nécessiter de votre part une configuration manuelle de votre connexion WireGuard. Le client Android est également disponible sur [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Fonctionnalités supplémentaires

Mullvad est très transparent quant aux nœuds qu'il possède [ou qu'il loue](https://mullvad.net/en/servers/). Ils utilisent [ShadowSocks](https://shadowsocks.org/) dans leur configuration ShadowSocks + OpenVPN, ce qui les rend plus résistants aux pare-feux avec de l'[inspection profonde de paquets](https://fr.wikipedia.org/wiki/Deep_packet_inspection) qui tentent de bloquer les VPNs. Il semblerait que [la Chine utilise une méthode différente pour bloquer les serveurs ShadowSocks](https://github.com/net4people/bbs/issues/22). Le site web de Mullvad est également accessible via Tor à l'adresse suivante [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

!!! recommendation annotate

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** est un concurrent de poids dans l'espace VPN, et il est en service depuis 2016. Proton AG est basé en Suisse et propose une offre gratuite limitée, ainsi qu'une option premium plus complète.
    
    [:octicons-home-16: Page d'accueil](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

#### :material-check:{ .pg-green } 67 pays

Proton VPN a des [serveurs dans 67 pays](https://protonvpn.com/vpn-servers).(1) Choisir un fournisseur VPN avec un serveur le plus proche de vous réduira la latence du trafic réseau que vous envoyez. Cela est dû à un itinéraire plus court (moins de sauts) vers la destination.
{ .annotate }

1. En date du : 2022-09-16

Nous pensons également qu'il est préférable pour la sécurité des clés privées du fournisseur VPN d'utiliser des [serveurs dédiés](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9), plutôt que des solutions partagées (avec d'autres clients) moins chères telles que les [serveurs privés virtuels](https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel).

#### :material-check:{ .pg-green } Audit indépendant

Depuis janvier 2020, Proton VPN a fait l'objet d'un audit indépendant réalisé par SEC Consult. SEC Consult a trouvé quelques vulnérabilités à risque moyen et faible dans les applications Windows, Android et iOS de Proton VPN, qui ont toutes été "correctement corrigées" par Proton VPN avant la publication des rapports. Aucun des problèmes identifiés n'aurait permis à un attaquant d'accéder à distance à votre appareil ou à votre trafic. Vous pouvez consulter les rapports individuels pour chaque plateforme sur [protonvpn.com](https://protonvpn.com/blog/open-source/). En avril 2022, Proton VPN a fait l'objet d'un [autre audit](https://protonvpn.com/blog/no-logs-audit/) et le rapport a été [produit par Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). Une [lettre d'attestation](https://proton.me/blog/security-audit-all-proton-apps) a été fournie pour les applications de Proton VPN le 9 novembre 2021 par [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Clients open source

Proton VPN fournit le code source de ses clients bureau et mobile dans son [organisation GitHub](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepte l'argent liquide

Proton VPN, en plus d'accepter les cartes de crédit/débit, PayPal, et [le Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), accepte également **les espèces/la monnaie locale** comme forme de paiement anonyme.

#### :material-check:{ .pg-green } Prise en charge de WireGuard

Proton VPN prend principalement en charge le protocole WireGuard®. [WireGuard](https://www.wireguard.com) est un protocole plus récent qui utilise une [cryptographie](https://www.wireguard.com/protocol/) de pointe. De plus, WireGuard vise à être plus simple et plus performant.

Proton VPN [recommande](https://protonvpn.com/blog/wireguard/) l'utilisation de WireGuard avec leur service. Sur les applications Windows, macOS, iOS, Android, ChromeOS et Android TV de Proton VPN, WireGuard est le protocole par défaut ; cependant, la [prise en charge](https://protonvpn.com/support/how-to-change-vpn-protocols/) du protocole n'est pas présente dans leur application Linux.

#### :material-alert-outline:{ .pg-orange } Redirection de port

Proton VPN ne prend actuellement en charge que la [redirection de port](https://protonvpn.com/support/port-forwarding/) sous Windows, ce qui peut avoir un impact sur certaines applications. En particulier les applications pair à pair comme les clients Torrent.

#### :material-check:{ .pg-green } Clients mobiles

En plus de fournir des fichiers de configuration OpenVPN standard, Proton VPN a des clients mobiles pour l'[App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), le [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), et [GitHub](https://github.com/ProtonVPN/android-app/releases) permettant des connexions faciles à leurs serveurs.

#### :material-information-outline:{ .pg-blue } Fonctionnalités supplémentaires

Les clients VPN de Proton prennent en charge l'authentification à deux facteurs sur toutes les plateformes, sauf Linux pour le moment. Proton VPN possède ses propres serveurs et centres de données en Suisse, en Islande et en Suède. Ils proposent le blocage des publicités et des domaines de logiciels malveillants connus avec leur service DNS. En outre, Proton VPN propose également des serveurs "Tor" vous permettant de vous connecter facilement aux sites onion, mais nous recommandons fortement d'utiliser [le navigateur officiel Tor](https://www.torproject.org/) à cette fin.

#### :material-alert-outline:{ .pg-orange } La fonction d'arrêt d'urgence ne fonctionne pas sur les Macs à processeur Intel

Des pannes du système [peuvent se produire](https://protonvpn.com/support/macos-t2-chip-kill-switch/) sur les Mac basés sur Intel lors de l'utilisation de l'arrêt d'urgence du VPN. Si vous avez besoin de cette fonction, et que vous utilisez un Mac avec un chipset Intel, vous devriez envisager d'utiliser un autre service VPN.

## Critères

!!! danger "Danger"

    Il est important de noter que l'utilisation d'un fournisseur VPN ne vous rendra pas anonyme, mais qu'elle vous permettra de mieux protéger votre vie privée dans certaines situations. Un VPN n'est pas un outil pour des activités illégales. Ne vous fiez pas à une politique de "non-journalisation".

**Veuillez noter que nous ne sommes affiliés à aucun des fournisseurs que nous recommandons. Cela nous permet de fournir des recommandations totalement objectives.** En plus de [nos critères standards](about/criteria.md), nous avons développé un ensemble d'exigences claires pour tout fournisseur de VPN souhaitant être recommandé, y compris un chiffrement fort, des audits de sécurité indépendants, une technologie moderne, et plus encore. Nous vous suggérons de vous familiariser avec cette liste avant de choisir un fournisseur VPN, et de mener vos propres recherches pour vous assurer que le fournisseur VPN que vous choisissez est le plus digne de confiance possible.

### Technologie

Nous exigeons de tous nos fournisseurs VPN recommandés qu'ils fournissent des fichiers de configuration OpenVPN utilisables dans n'importe quel client. **Si** un VPN fournit son propre client personnalisé, nous exigeons un killswitch pour bloquer les fuites de données du réseau lors de la déconnexion.

**Minimum pour se qualifier :**

- Prise en charge de protocoles forts tels que WireGuard & OpenVPN.
- Arrêt d'urgence intégré dans les clients.
- Prise en charge du multi-sauts. Le multi-sauts est important pour garder les données privées en cas de compromission d'un seul noeud.
- Si des clients VPN sont fournis, ils doivent être [open source](https://en.wikipedia.org/wiki/Open_source), comme le logiciel VPN qui y est généralement intégré. Nous pensons que la disponibilité du [code source](https://en.wikipedia.org/wiki/Source_code) offre une plus grande transparence sur ce que fait réellement votre appareil.

**Dans le meilleur des cas :**

- Prise en charge de WireGuard et d'OpenVPN.
- Un arrêt d'urgence avec des options hautement configurables (activer/désactiver sur certains réseaux, au démarrage, etc.)
- Clients VPN faciles à utiliser
- Prend en charge [IPv6](https://en.wikipedia.org/wiki/IPv6). Nous nous attendons à ce que les serveurs autorisent les connexions entrantes via IPv6 et vous permettent d'accéder aux services hébergés sur des adresses IPv6.
- La capacité de [redirection de port](https://fr.wikipedia.org/wiki/Redirection_de_port) aide à créer des connexions lors de l'utilisation de logiciels de partage de fichiers P2P (<a href="https://fr.wikipedia.org/wiki/Pair-%C3%A0-pair>pair à pair</a>) ou de l'hébergement d'un serveur (par exemple, Mumble).

### Confidentialité

Nous préférons que nos prestataires recommandés collectent le moins de données possible. Ne pas recueillir de renseignements personnels sur l'inscription et accepter des modes de paiement anonymes sont requis.

**Minimum pour se qualifier :**

- Option de paiement en [crypto-monnaie anonyme](cryptocurrency.md) **ou** en espèces.
- Aucune information personnelle requise pour s'inscrire : seuls le nom d'utilisateur, le mot de passe et l'e-mail sont requis.

**Dans le meilleur des cas :**

- Accepte plusieurs [options de paiement anonymes](advanced/payments.md).
- Aucune information personnelle acceptée (nom d'utilisateur généré automatiquement, pas d'email requis, etc.).

### Sécurité

Un VPN est inutile s'il ne peut même pas fournir une sécurité adéquate. Nous exigeons de tous nos fournisseurs recommandés qu'ils respectent les normes de sécurité en vigueur pour leurs connexions OpenVPN. Idéalement, ils utiliseraient par défaut des schémas de chiffrement plus évolutifs. Nous exigeons également qu'un tiers indépendant procède à un audit de la sécurité du fournisseur, idéalement de manière très complète et de manière répétée (chaque année).

**Minimum pour se qualifier :**

- Schémas de chiffrement forts : OpenVPN avec authentification SHA-256 ; poignée de main RSA-2048 ou mieux ; chiffrement des données AES-256-GCM ou AES-256-CBC.
- Confidentialité Persistante (PFS).
- Des audits de sécurité publiés par une société tierce réputée.

**Dans le meilleur des cas :**

- Chiffrement le plus fort : RSA-4096.
- Confidentialité Persistante (PFS).
- Des audits de sécurité complets publiés par une société tierce réputée.
- Des programmes de primes aux bugs et/ou un processus coordonné de divulgation des vulnérabilités.

### Confiance

Vous ne confieriez pas vos finances à une personne ayant une fausse identité, alors pourquoi lui confier vos données internet ? Nous exigeons de nos fournisseurs recommandés qu'ils rendent public leur propriété ou leur direction. Nous aimerions également voir des rapports de transparence fréquents, notamment en ce qui concerne la manière dont les demandes de gouvernement sont traitées.

**Minimum pour se qualifier :**

- Une direction ou un propriétaire public.

**Dans le meilleur des cas :**

- Une direction publique.
- Rapports de transparence fréquents.

### Marketing

Avec les fournisseurs de VPN que nous recommandons, nous aimons voir un marketing responsable.

**Minimum pour se qualifier :**

- Doit héberger lui-même ses outils d'analyse de traffic (pas de Google Analytics, etc.). Le site du fournisseur doit également se conformer à [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) pour les personnes qui souhaitent se désinscrire.

Ne doit pas avoir de marketing irresponsable :

- Garantir la protection de l'anonymat à 100%. Lorsque quelqu'un prétend que quelque chose est à 100%, cela signifie qu'il n'y a aucune certitude d'échec. Nous savons que les gens peuvent assez facilement se désanonymiser de plusieurs façons, par exemple :
    - Réutiliser des informations personnelles (par exemple, des comptes de messagerie, des pseudonymes uniques, etc.) auxquelles ils ont accédé sans logiciel d'anonymat (Tor, VPN, etc.)
    - [Empreinte numérique des navigateurs](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Affirmer qu'un seul circuit VPN est « plus anonyme » que Tor, qui est un circuit de 3 sauts ou plus qui change régulièrement.
- Utilisez un langage responsable, par exemple, il est acceptable de dire qu'un VPN est "déconnecté" ou "non connecté", mais dire qu'une personne est "exposée", "vulnérable" ou "compromise" est une utilisation inutile d'un langage alarmant qui peut être incorrect. Par exemple, cette personne peut simplement être sur le service d'un autre fournisseur de VPN ou utiliser Tor.

**Dans le meilleur des cas :**

Un marketing responsable qui est à la fois éducatif et utile au consommateur pourrait inclure :

- Une comparaison précise pour savoir quand [Tor](tor.md) devrait être utilisée à la place.
- Disponibilité du site web du fournisseur VPN sur un [service .onion](https://en.wikipedia.org/wiki/.onion)

### Fonctionnalités supplémentaires

Bien qu'il ne s'agisse pas d'exigences strictes, nous avons tenu compte de certains facteurs pour déterminer les fournisseurs à recommander. Ceux-ci incluent la fonctionnalité de blocage des publicités/traqueurs, les canaris de mandats, les connexions multi-sauts, un excellent support client, le nombre de connexions simultanées autorisées, etc.

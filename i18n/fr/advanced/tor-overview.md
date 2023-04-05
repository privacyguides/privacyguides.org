---
title: "Introduction à Tor"
icon: 'simple/torproject'
description: Tor est un réseau décentralisé, gratuit, conçu pour utiliser Internet avec le plus de confidentialité possible.
---

Tor est un réseau décentralisé, gratuit, conçu pour utiliser Internet avec le plus de confidentialité possible. S'il est utilisé correctement, le réseau permet une navigation et des communications privées et anonymes.

## Création de chemins vers les services de surface

Les "services de surface" sont des sites web auxquels vous pouvez accéder avec n'importe quel navigateur, comme [privacyguides.org](https://www.privacyguides.org). Tor vous permet de vous connecter à ces sites web de manière anonyme en acheminant votre trafic via un réseau composé de milliers de serveurs gérés par des bénévoles et appelés nœuds (ou relais).

Chaque fois que vous [vous connectez à Tor](../tor.md), il choisit trois nœuds pour construire un chemin vers Internet - ce chemin est appelé "circuit"

<figure markdown>
  ![Chemin Tor montrant votre appareil se connectant à un noeud d'entrée, un noeud central et un noeud de sortie avant d'atteindre le site web de destination](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Chemin Tor montrant votre appareil se connectant à un noeud d'entrée, un noeud central et un noeud de sortie avant d'atteindre le site web de destination](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Chemin du circuit Tor</figcaption>
</figure>

Chacun de ces nœuds a sa propre fonction:

### Le nœud d'entrée

Le noeud d'entrée, souvent appelé le noeud de garde, est le premier noeud auquel votre client Tor se connecte. Le nœud d'entrée est capable de voir votre adresse IP, mais il est incapable de voir à quoi vous vous connectez.

Contrairement aux autres nœuds, le client Tor choisira aléatoirement un nœud d'entrée et restera avec lui pendant deux à trois mois pour vous protéger de certaines attaques.[^1]

### Le nœud central

Le noeud central est le second noeud auquel votre client Tor se connecte. Il peut voir de quel nœud provient le trafic - le nœud d'entrée - et vers quel nœud il se dirige ensuite. Le nœud central ne peut pas voir votre adresse IP ou le domaine auquel vous vous connectez.

Pour chaque nouveau circuit, le nœud central est choisi au hasard parmi tous les nœuds Tor disponibles.

### Le nœud de sortie

Le nœud de sortie est le point où votre trafic web quitte le réseau Tor et est transféré vers la destination souhaitée. Le nœud de sortie ne peut pas voir votre adresse IP, mais il sait à quel site il se connecte.

Le noeud de sortie sera choisi au hasard parmi tous les noeuds Tor disponibles et exécutés avec une balise "relais de sortie".[^2]

## Création de chemins vers les services onion

Les "services onion" (également communément appelés "services cachés") sont des sites web auxquels on ne peut accéder qu'au moyen du navigateur Tor. Ces sites web ont un long nom de domaine généré de manière aléatoire et se terminant par `.onion`.

La connexion à un service onion dans Tor fonctionne de manière très similaire à la connexion à un service de surface, mais votre trafic est acheminé à travers un total de **six nœuds** avant d'atteindre le serveur de destination. Cependant, comme auparavant, seuls trois de ces nœuds contribuent à *votre* anonymat, les trois autres nœuds protègent *l'anonymat du service onion*, en cachant la véritable IP et la localisation du site web de la même manière que le navigateur Tor cache les vôtres.

<figure style="width:100%" markdown>
  ![Chemin Tor montrant votre trafic acheminé à travers vos trois noeuds Tor plus trois noeuds Tor supplémentaires qui cachent l'identité du site web](../assets/img/how-tor-works/tor-path-hidden-service.svg#only-light)
  ![Chemin Tor montrant votre trafic acheminé à travers vos trois noeuds Tor plus trois noeuds Tor supplémentaires qui cachent l'identité du site web](../assets/img/how-tor-works/tor-path-hidden-service-dark.svg#only-dark)
  <figcaption>Chemin du circuit Tor avec des services onion. Les nœuds de la zone <span class="pg-blue">bleue</span> appartiennent à votre navigateur, tandis que les nœuds de la zone <span class="pg-red">rouge</span> appartiennent au serveur, de sorte que leur identité vous est cachée.</figcaption>
</figure>

## Chiffrement

Tor chiffre chaque paquet (un bloc de données transmises) trois fois avec les clés du nœud de sortie, du nœud central, et du nœud d'entrée, dans cet ordre.

Une fois que Tor a construit un circuit, la transmission des données se fait comme suit:

1. Premièrement: lorsque le paquet arrive au nœud d'entrée, la première couche de chiffrement est supprimée. Dans ce paquet chiffré, le nœud d'entrée trouvera un autre paquet chiffré avec l'adresse du nœud central. Le nœud d'entrée transmet ensuite le paquet au nœud central.

2. Deuxièmement : lorsque le nœud central reçoit le paquet du nœud d'entrée, il supprime lui aussi une couche de chiffrement avec sa clé, et trouve cette fois un paquet chiffré avec l'adresse du nœud de sortie. Le nœud central transmet ensuite le paquet au nœud de sortie.

3. Enfin, lorsque le nœud de sortie reçoit son paquet, il supprime la dernière couche de chiffrement avec sa clé. Le nœud de sortie verra l'adresse de destination et transmettra le paquet à cette adresse.

Vous trouverez ci-dessous un autre schéma illustrant le processus. Chaque nœud supprime sa propre couche de chiffrement, et lorsque le serveur de destination renvoie les données, le même processus se déroule entièrement en sens inverse. Par exemple, le nœud de sortie ne sait pas qui vous êtes, mais il sait de quel nœud il provient. Il ajoute donc sa propre couche de chiffrement et renvoie le message.

<figure markdown>
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>Envoyer et recevoir des données à travers le réseau Tor</figcaption>
</figure>

Tor nous permet de nous connecter à un serveur sans que personne ne connaisse le chemin entier. Le nœud d'entrée sait qui vous êtes, mais pas où vous allez; le nœud central ne sait pas qui vous êtes ni où vous allez; et le nœud de sortie sait où vous allez, mais pas qui vous êtes. Comme le nœud de sortie est celui qui établit la connexion finale, le serveur de destination ne connaîtra jamais votre adresse IP.

## Mises en garde 

Bien que Tor offre de solides garanties de confidentialité, il faut être conscient que Tor n'est pas parfait:

- Des adversaires bien financés ayant la capacité d'observer passivement la plupart du trafic réseau mondial ont une chance de désanonymiser les utilisateurs de Tor au moyen d'une analyse avancée du trafic. Tor ne vous protège pas non plus contre le risque de vous exposer par erreur, par exemple si vous partagez trop d'informations sur votre véritable identité.
- Les nœuds de sortie de Tor peuvent également surveiller le trafic qui passe par eux. Cela signifie que le trafic qui n'est pas chiffré, comme le trafic HTTP ordinaire, peut être enregistré et surveillé. Si ce trafic contient des informations permettant de vous identifier, il peut vous désanonymiser aux yeux de ce nœud de sortie. Par conséquent, nous recommandons d'utiliser HTTPS via Tor dans la mesure du possible.

Si vous souhaitez utiliser Tor pour naviguer sur le web, nous ne recommandons que le navigateur Tor **officiel** - il est conçu pour empêcher la prise d'empreintes numériques.

- [Navigateur Tor :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## Ressources supplémentaires

- [Manuel d'utilisation du navigateur Tor](https://tb-manual.torproject.org)
- [Comment Tor fonctionne - Computerphile](https://invidious.privacyguides.net/embed/QRYzre4bf7I?local=true) <small>(YouTube)</small>
- [Services onion Tor - Computerphile](https://invidious.privacyguides.net/embed/lVcbq_a5N9I?local=true) <small>(YouTube)</small>

[^1]: Le premier relais de votre circuit est appelé "garde d'entrée" ou "garde". Il s'agit d'un relais rapide et stable qui reste le premier de votre circuit pendant 2 à 3 mois afin de vous protéger contre une attaque connue de rupture d'anonymat. Le reste de votre circuit change avec chaque nouveau site web que vous visitez, et tous ensemble ces relais fournissent les protections complètes de Tor en matière de vie privée. Pour en savoir plus sur le fonctionnement des relais de garde, consultez cet [article de blog](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) et ce [document](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) sur les gardes d'entrée. ([https://support.torproject.org/fr/tbb/tbb-2/](https://support.torproject.org/fr/tbb/tbb-2/))

[^2]: Balise de relai: une (dis-)qualification spéciale des relais pour les positions de circuit (par exemple, "Guard", "Exit", "BadExit"), les propriétés de circuit (par exemple, "Fast", "Stable") ou les rôles (par exemple, "Authority", "HSDir"), tels qu'attribués par les autorités de l'annuaire et définis plus précisément dans la spécification du protocole de l'annuaire. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

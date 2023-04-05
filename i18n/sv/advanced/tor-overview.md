---
title: "Tor Översikt"
icon: 'simple/torproject'
description: Tor är ett decentraliserat nätverk som är gratis att använda och som är utformat för att använda internet med så mycket integritet som möjligt.
---

Tor är ett decentraliserat nätverk som är gratis att använda och som är utformat för att använda internet med så mycket integritet som möjligt. Om nätverket används på rätt sätt möjliggör det privat och anonym surfning och kommunikation.

## Path Building to Clearnet Services

"Clearnet services" are websites which you can access with any browser, like [privacyguides.org](https://www.privacyguides.org). Tor lets you connect to these websites anonymously by routing your traffic through a network comprised of thousands of volunteer-run servers called nodes (or relays).

Every time you [connect to Tor](../tor.md), it will choose three nodes to build a path to the internet—this path is called a "circuit."

<figure markdown>
  ![Tor path showing your device connecting to an entry node, middle node, and exit node before reaching the destination website](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path showing your device connecting to an entry node, middle node, and exit node before reaching the destination website](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway</figcaption>
</figure>

Var och en av dessa noder har sin egen funktion:

### Entrénod

Ingångsnoden, ofta kallad guard-noden, är den första noden som din Tor-klient ansluter till. Ingångsnoden kan se din IP-adress, men den kan inte se vad du ansluter till.

Till skillnad från andra noder väljer Tor-klienten slumpmässigt en ingångsnod och håller sig till den i två till tre månader för att skydda dig mot vissa attacker.[^1]

### Den mellersta noden

Den mellersta noden är den andra noden som din Tor-klient ansluter till. Den kan se vilken nod trafiken kom från - ingångsnoden - och vilken nod den går vidare till härnäst. Mellannoden kan inte se din IP-adress eller den domän du ansluter till.

För varje ny krets väljs mittnoden slumpmässigt ut av alla tillgängliga Tor-noder.

### Entrénod

The exit node is the point in which your web traffic leaves the Tor network and is forwarded to your desired destination. The exit node is unable to see your IP address, but it does know what site it's connecting to.

The exit node will be chosen at random from all available Tor nodes ran with an exit relay flag.[^2]

## Path Building to Onion Services

"Onion Services" (also commonly referred to as "hidden services") are websites which can only be accessed by the Tor browser. These websites have a long randomly generated domain name ending with `.onion`.

Connecting to an Onion Service in Tor works very similarly to connecting to a clearnet service, but your traffic is routed through a total of **six** nodes before reaching the destination server. Just like before however, only three of these nodes are contributing to *your* anonymity, the other three nodes protect *the Onion Service's* anonymity, hiding the website's true IP and location in the same manner that Tor Browser is hiding yours.

<figure style="width:100%" markdown>
  ![Tor path showing your traffic being routed through your three Tor nodes plus three additional Tor nodes which hide the website's identity](../assets/img/how-tor-works/tor-path-hidden-service.svg#only-light)
  ![Tor path showing your traffic being routed through your three Tor nodes plus three additional Tor nodes which hide the website's identity](../assets/img/how-tor-works/tor-path-hidden-service-dark.svg#only-dark)
  <figcaption>Tor circuit pathway with Onion Services. Nodes in the <span class="pg-blue">blue</span> fence belong to your browser, while nodes in the <span class="pg-red">red</span> fence belong to the server, so their identity is hidden from you.</figcaption>
</figure>

## Encryption

Tor encrypts each packet (a block of transmitted data) three times with the keys from the exit, middle, and entry node—in that order.

Once Tor has built a circuit, data transmission is done as follows:

1. Firstly: when the packet arrives at the entry node, the first layer of encryption is removed. In this encrypted packet, the entry node will find another encrypted packet with the middle node’s address. The entry node will then forward the packet to the middle node.

2. Secondly: when the middle node receives the packet from the entry node, it too will remove a layer of encryption with its key, and this time finds an encrypted packet with the exit node's address. The middle node will then forward the packet to the exit node.

3. Lastly: when the exit node receives its packet, it will remove the last layer of encryption with its key. The exit node will see the destination address and forward the packet to that address.

Below is an alternative diagram showing the process. Each node removes its own layer of encryption, and when the destination server returns data, the same process happens entirely in reverse. For example, the exit node does not know who you are, but it does know which node it came from, and so it adds its own layer of encryption and sends it back.

<figure markdown>
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>Sending and receiving data through the Tor Network</figcaption>
</figure>

Tor allows us to connect to a server without any single party knowing the entire path. The entry node knows who you are, but not where you are going; the middle node doesn’t know who you are or where you are going; and the exit node knows where you are going, but not who you are. Because the exit node is what makes the final connection, the destination server will never know your IP address.

## Caveats

Though Tor does provide strong privacy guarantees, one must be aware that Tor is not perfect:

- Välfinansierade motståndare som har möjlighet att passivt övervaka den mesta nätverkstrafiken över hela världen har en chans att avanonymisera Tor-användare med hjälp av avancerad trafikanalys. Tor skyddar dig inte heller från att avslöja dig själv av misstag, till exempel om du delar för mycket information om din verkliga identitet.
- Tor-utgångsnoderna kan också övervaka trafiken som passerar genom dem. Detta innebär att trafik som inte är krypterad, såsom vanlig HTTP-trafik, kan registreras och övervakas. Om sådan trafik innehåller personligt identifierbar information kan den avanonymisera dig till den utgångsnoden. Därför rekommenderar vi att du använder https över Tor där det är möjligt.

Om du vill använda Tor för att surfa på webben rekommenderar vi endast den officiella **** Tor Browser - den är utformad för att förhindra fingeravtryck.

- [Läs mer :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## Ytterligare resurser

- [Användarhandbok för Tor Browser](https://tb-manual.torproject.org)
- [Hur Tor fungerar - Computerphile](https://invidious.privacyguides.net/embed/QRYzre4bf7I?local=true) <small>(YouTube)</small>
- [Tor Lök Tjänster - Datorfil](https://invidious.privacyguides.net/embed/lVcbq_a5N9I?local=true) <small>(YouTube)</small>

[^1]: Det första reläet i din krets kallas "entry guard" eller "guard". Det är ett snabbt och stabilt relä som förblir det första i din krets i 2-3 månader för att skydda mot en känd attack som bryter anonymiteten. Resten av din krets ändras med varje ny webbplats du besöker, och alla dessa reläer ger Tor: s fullständiga integritetsskydd. För mer information om hur skyddsreläer fungerar, se detta [blogginlägg](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) och [papper](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) på ingångsvakter. ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: Reläflagga: en särskild (diskvalificering) av reläer för kretslägen (t.ex. "Guard", "Exit", "BadExit"), kretsegenskaper (t.ex. "Fast", "Stable") eller roller (t.ex. "Authority", "HSDir") som tilldelats av katalogmyndigheterna och som definieras ytterligare i specifikationen för katalogprotokollet. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

---
title: "Tor Översikt"
icon: 'simple/torproject'
description: Tor är ett decentraliserat nätverk som är gratis att använda och som är utformat för att använda internet med så mycket integritet som möjligt.
---

Tor är ett decentraliserat nätverk som är gratis att använda och som är utformat för att använda internet med så mycket integritet som möjligt. Om nätverket används på rätt sätt möjliggör det privat och anonym surfning och kommunikation.

## Vägbyggnad

Tor fungerar genom att din trafik dirigeras genom ett nätverk bestående av tusentals servrar som drivs av frivilliga och som kallas noder (eller reläer).

Varje gång du ansluter till Tor kommer det att välja tre noder för att bygga en väg till internet - denna väg kallas en "krets" Var och en av dessa noder har sin egen funktion:

### Entrénod

Ingångsnoden, ofta kallad guard-noden, är den första noden som din Tor-klient ansluter till. Ingångsnoden kan se din IP-adress, men den kan inte se vad du ansluter till.

Till skillnad från andra noder väljer Tor-klienten slumpmässigt en ingångsnod och håller sig till den i två till tre månader för att skydda dig mot vissa attacker.[^1]

### Den mellersta noden

Den mellersta noden är den andra noden som din Tor-klient ansluter till. Den kan se vilken nod trafiken kom från - ingångsnoden - och vilken nod den går vidare till härnäst. Mellannoden kan inte se din IP-adress eller den domän du ansluter till.

För varje ny krets väljs mittnoden slumpmässigt ut av alla tillgängliga Tor-noder.

### Entrénod

The exit node is the point in which your web traffic leaves the Tor network and is forwarded to your desired destination. The exit node is unable to see your IP address, but it does know what site it's connecting to.

The exit node will be chosen at random from all available Tor nodes ran with an exit relay flag.[^2]

<figure markdown>
  ![Tor path](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway</figcaption>
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

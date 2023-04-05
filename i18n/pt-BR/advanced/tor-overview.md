---
title: "Tor Overview"
icon: 'simple/torproject'
description: Tor is a free to use, decentralized network designed for using the internet with as much privacy as possible.
---

Tor is a free to use, decentralized network designed for using the internet with as much privacy as possible. If used properly, the network enables private and anonymous browsing and communications.

## Path Building to Clearnet Services

"Clearnet services" are websites which you can access with any browser, like [privacyguides.org](https://www.privacyguides.org). Tor lets you connect to these websites anonymously by routing your traffic through a network comprised of thousands of volunteer-run servers called nodes (or relays).

Every time you [connect to Tor](../tor.md), it will choose three nodes to build a path to the internet—this path is called a "circuit."

<figure markdown>
  ![Tor path showing your device connecting to an entry node, middle node, and exit node before reaching the destination website](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path showing your device connecting to an entry node, middle node, and exit node before reaching the destination website](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway</figcaption>
</figure>

Each of these nodes has its own function:

### The Entry Node

The entry node, often called the guard node, is the first node to which your Tor client connects. The entry node is able to see your IP address, however it is unable to see what you are connecting to.

Unlike the other nodes, the Tor client will randomly select an entry node and stick with it for two to three months to protect you from certain attacks.[^1]

### The Middle Node

The middle node is the second node to which your Tor client connects. It can see which node the traffic came from—the entry node—and to which node it goes to next. The middle node cannot, see your IP address or the domain you are connecting to.

For each new circuit, the middle node is randomly selected out of all available Tor nodes.

### The Exit Node

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

- Well-funded adversaries with the capability to passively watch most network traffic over the globe have a chance of deanonymizing Tor users by means of advanced traffic analysis. Nor does Tor protect you from exposing yourself by mistake, such as if you share too much information about your real identity.
- Tor exit nodes can also monitor traffic that passes through them. This means traffic which is not encrypted, such as plain HTTP traffic, can be recorded and monitored. If such traffic contains personally identifiable information, then it can deanonymize you to that exit node. Thus, we recommend using HTTPS over Tor where possible.

If you wish to use Tor for browsing the web, we only recommend the **official** Tor Browser—it is designed to prevent fingerprinting.

- [Tor Browser :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## Recursos Adicionais

- [Tor Browser User Manual](https://tb-manual.torproject.org)
- [Como funciona o Tor - Computerphile](https://invidious.privacyguides.net/embed/QRYzre4bf7I?local=true) <small>(YouTube)</small>
- [Serviços Tor Onion - Computerphile](https://invidious.privacyguides.net/embed/lVcbq_a5N9I?local=true) <small>(YouTube)</small>

[^1]: The first relay in your circuit is called an "entry guard" or "guard". It is a fast and stable relay that remains the first one in your circuit for 2-3 months in order to protect against a known anonymity-breaking attack. The rest of your circuit changes with every new website you visit, and all together these relays provide the full privacy protections of Tor. For more information on how guard relays work, see this [blog post](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) and [paper](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) on entry guards. ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: Relay flag: a special (dis-)qualification of relays for circuit positions (for example, "Guard", "Exit", "BadExit"), circuit properties (for example, "Fast", "Stable"), or roles (for example, "Authority", "HSDir"), as assigned by the directory authorities and further defined in the directory protocol specification. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

---
title: "Types of Communication Networks"
icon: 'material/transit-connection-variant'
---

There are several network architectures commonly used to relay messages between people. These networks can provide different privacy guarantees, which is why it's worth considering your [threat model](../basics/threat-modeling.md) when deciding which app to use.

[Recommended Instant Messengers](../real-time-communication.md){ .md-button }

## Centralized Networks

![Centralized networks diagram](../assets/img/layout/network-centralized.svg){ align=left }

Centralized messengers are those where all participants are on the same server or network of servers controlled by the same organization.

Some self-hosted messengers allow you to set up your own server. Self-hosting can provide additional privacy guarantees, such as no usage logs or limited access to metadata (data about who is talking to whom). Self-hosted centralized messengers are isolated and everyone must be on the same server to communicate.

**Advantages:**

- New features and changes can be implemented more quickly.
- Easier to get started with and to find contacts.
- Most mature and stable features ecosystems, as they are easier to program in a centralized software.
- Privacy issues may be reduced when you trust a server that you're self-hosting.

**Disadvantages:**

- Can include [restricted control or access](https://drewdevault.com/2018/08/08/Signal.html). This can include things like:
- Being [forbidden from connecting third-party clients](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) to the centralized network that might provide for greater customization or a better experience. Often defined in Terms and Conditions of usage.
- Poor or no documentation for third-party developers.
- The [ownership](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), privacy policy, and operations of the service can change easily when a single entity controls it, potentially compromising the service later on.
- Self-hosting requires effort and knowledge of how to set up a service.

## Federated Networks

![Federated networks diagram](../assets/img/layout/network-decentralized.svg){ align=left }

Federated messengers use multiple, independent, decentralized servers that are able to talk to each other (email is one example of a federated service). Federation allows system administrators to control their own server and still be a part of the larger communications network.

When self-hosted, members of a federated server can discover and communicate with members of other servers, although some servers may choose to remain private by being non-federated (e.g., work team server).

**Advantages:**

- Allows for greater control over your own data when running your own server.
- Allows you to choose whom to trust your data with by choosing between multiple "public" servers.
- Often allows for third-party clients which can provide a more native, customized, or accessible experience.
- Server software can be verified that it matches public source code, assuming you have access to the server or you trust the person who does (e.g., a family member).

**Disadvantages:**

- Adding new features is more complex because these features need to be standardized and tested to ensure they work with all servers on the network.
- Due to the previous point, features can be lacking, or incomplete or working in unexpected ways compared to centralized platforms, such as message relay when offline or message deletion.
- Some metadata may be available (e.g., information like "who is talking to whom," but not actual message content if E2EE is used).
- Federated servers generally require trusting your server's administrator. They may be a hobbyist or otherwise not a "security professional," and may not serve standard documents like a privacy policy or terms of service detailing how your data is used.
- Server administrators sometimes choose to block other servers, which are a source of unmoderated abuse or break general rules of accepted behavior. This will hinder your ability to communicate with members of those servers.

## Peer-to-Peer Networks

![P2P diagram](../assets/img/layout/network-distributed.svg){ align=left }

P2P messengers connect to a [distributed network](https://en.wikipedia.org/wiki/Distributed_networking) of nodes to relay a message to the recipient without a third-party server.

Clients (peers) usually find each other through the use of a [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) network. Examples of this include [Distributed Hash Tables](https://en.wikipedia.org/wiki/Distributed_hash_table) (DHT), used by [torrents](https://en.wikipedia.org/wiki/BitTorrent_(protocol)) and [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) for example. Another approach is proximity based networks, where a connection is established over WiFi or Bluetooth (for example, Briar or the [Scuttlebutt](https://www.scuttlebutt.nz) social network protocol).

Once a peer has found a route to its contact via any of these methods, a direct connection between them is made. Although messages are usually encrypted, an observer can still deduce the location and identity of the sender and recipient.

P2P networks do not use servers, as peers communicate directly between each other and hence cannot be self-hosted. However, some additional services may rely on centralized servers, such as user discovery or relaying offline messages, which can benefit from self-hosting.

**Advantages:**

- Minimal information is exposed to third-parties.
- Modern P2P platforms implement E2EE by default. There are no servers that could potentially intercept and decrypt your transmissions, unlike centralized and federated models.

**Disadvantages:**

- Reduced feature set:
- Messages can only be sent when both peers are online, however, your client may store messages locally to wait for the contact to return online.
- Generally increases battery usage on mobile devices, because the client must stay connected to the distributed network to learn about who is online.
- Some common messenger features may not be implemented or incompletely, such as message deletion.
- Your IP address and that of the contacts you're communicating with may be exposed if you do not use the software in conjunction with a [VPN](../vpn.md) or [Tor](../tor.md). Many countries have some form of mass surveillance and/or metadata retention.

## Anonymous Routing

![Anonymous routing diagram](../assets/img/layout/network-anonymous-routing.svg){ align=left }

A messenger using [anonymous routing](https://doi.org/10.1007/978-1-4419-5906-5_628) hides either the identity of the sender, the receiver, or evidence that they have been communicating. Ideally, a messenger should hide all three.

There are [many](https://doi.org/10.1145/3182658) different ways to implement anonymous routing. One of the most famous is [onion routing](https://en.wikipedia.org/wiki/Onion_routing) (i.e. [Tor](../basics/tor-overview.md)), which communicates encrypted messages through a virtual [overlay network](https://en.wikipedia.org/wiki/Overlay_network) that hides the location of each node as well as the recipient and sender of each message. The sender and recipient never interact directly and only meet through a secret rendezvous node so that there is no leak of IP addresses nor physical location. Nodes cannot decrypt messages, nor the final destination; only the recipient can. Each intermediary node can only decrypt a part that indicates where to send the still encrypted message next, until it arrives at the recipient who can fully decrypt it, hence the "onion layers."

Self-hosting a node in an anonymous routing network does not provide the hoster with additional privacy benefits, but rather contributes to the whole network's resilience against identification attacks for everyone's benefit.

**Advantages:**

- Minimal to no information is exposed to other parties.
- Messages can be relayed in a decentralized manner even if one of the parties is offline.

**Disadvantages:**

- Slow message propagation.
- Often limited to fewer media types, mostly text, since the network is slow.
- Less reliable if nodes are selected by randomized routing, some nodes may be very far from the sender and receiver, adding latency or even failing to transmit messages if one of the nodes goes offline.
- More complex to get started, as the creation and secured backup of a cryptographic private key is required.
- Just like other decentralized platforms, adding features is more complex for developers than on a centralized platform. Hence, features may be lacking or incompletely implemented, such as offline message relaying or message deletion.

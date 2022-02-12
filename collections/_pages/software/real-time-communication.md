---
layout: evergreen
title: Real-Time Communication
description: |
  We only recommend messengers that support strong [end-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption) (E2EE) and have been been independently [audited](https://en.wikipedia.org/wiki/Information_security_audit#The_audited_systems) to ensure their cryptography works as intended. The selection listed here is [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software) (FOSS), ensuring that the code can be verified by experts now and in the future.
---

## Encrypted Instant Messengers

{% for item_hash in site.data.software.messengers %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Types of Communication Networks

There are several network architectures commonly used to relay messages between users. These networks can provide different different privacy guarantees, which is why it's worth considering your [threat model](https://en.wikipedia.org/wiki/Threat_model) when making a decision about which app to use.

### Centralized Networks

{% capture markdown_text %}
Centralized messengers are those where all participants are on the same server or network of servers controlled by the same organization.

Some self-hosted messengers allow you to set up your own server. Self-hosting can provide additional privacy guarantees such as no usage logs or limited access to metadata (data about who is talking to whom). Self-hosted centralized messengers are isolated and everyone must be on the same server to communicate.
{% endcapture %}
{% include media-left.html text=markdown_text src="/assets/img/layout/network-centralized.svg" alt="Centralized network" %}

<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h4>Advantages</h4>
      <ul>
        <li>New features and changes can be implemented more quickly.</li>
        <li>Easier to get started with and to find contacts.</li>
        <li>Most mature and stable features ecosystems, as they are easier to program in a centralized software.</li>
        <li>Privacy issues may be reduced when you trust a server that you're self-hosting.</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h4>Disadvantages</h4>
      <ul>
        <li>Can include <a href="https://drewdevault.com/2018/08/08/Signal.html">restricted control or access</a>. This can include things like:</li>
        <ul>
          <li>Being <a href="https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165">forbidden from connecting third-party clients</a> to the centralized network that might provide for greater customization or better user experience. Often defined in Terms and Conditions of usage.</li>
          <li>Poor or no documentation for third-party developers.</li>
        </ul>
        <li>The <a href="https://blog.privacytools.io/delisting-wire">ownership</a>, privacy policy, and operations of the service can change easily when a single entity controls it, potentially compromising the service later on.</li>
        <li>Self hosting requires effort and knowledge of how to set up a service.</li>
      </ul>
    </div>
  </div>
</div>

### Federated Networks

{% capture markdown_text %}
Federated messengers use multiple, independent, decentralized servers that are able to talk to each other (email is one example of a federated service). Federation allows system administrators to control their own server and still be a part of the larger communications network.

When self-hosted, users of a federated server can discover and communicate with users of other servers, although some servers may choose to remain private by being non-federated (e.g., work team server).
{% endcapture %}
{% include media-left.html text=markdown_text src="/assets/img/layout/network-decentralized.svg" alt="Decentralized network" %}

<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h3>Advantages</h3>
      <ul>
        <li>Allows for greater control over your own data when running your own server.</li>
        <li>Allows you to choose who to trust your data with by choosing between multiple "public" servers.</li>
        <li>Often allows for third party clients which can provide a more native, customized, or accessible experience.</li>
        <li>Server software can be verified that it matches public source code, assuming you have access to the server or you trust the person who does (e.g., a family member)</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3>Disadvantages</h3>
      <ul>
        <li>Adding new features is more complex, because these features need to be standardized and tested to ensure they work with all servers on the network.</li>
        <li>Due to the previous point, features can be lacking, or incomplete or working in unexpected ways compared to centralized platforms, such as message relay when offline or message deletion.</li>
        <li>Some metadata may be available (e.g., information like "who is talking to whom," but not actual message content if E2EE is used).</li>
        <li>Federated servers generally require trusting your server's administrator. They may be a hobbyist or otherwise not a "security professional," and may not serve standard documents like a privacy policy or terms of service detailing how your data is utilized.</li>
        <li>Server administrators sometimes choose to block other servers, which are a source of unmoderated abuse or break general rules of accepted behavior. This will hinder your ability to communicate with users on those servers.</li>
      </ul>
    </div>
  </div>
</div>

### Peer-to-Peer (P2P) Networks

{% capture markdown_text %}
[P2P](https://en.wikipedia.org/wiki/Peer-to-peer) messengers connect to a [distributed network](https://en.wikipedia.org/wiki/Distributed_networking) of nodes to relay a message to the recepient without a third-party server.

Clients (peers) usually find each other through the use of a [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) network. Examples of this include [Distributed Hash Tables](https://en.wikipedia.org/wiki/Distributed_hash_table) (DHT), used by [torrents](https://en.wikipedia.org/wiki/BitTorrent_(protocol)) and [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) for example. Another approach is proximity based networks, where a connection is established over WiFi or Bluetooth (for example, Briar or the [Scuttlebutt](https://www.scuttlebutt.nz) social network protocol).

Once a peer has found a route to its contact via any of these methods, a direct connection between them is made. Although messages are usually encrypted, an observer can still deduce the location and identity of the sender and recipient.

P2P networks do not use servers, as users communicate directly between each others, and hence cannot be self-hosted. However, some additional services may rely on centralized servers, such as users discovery or offline messages relaying, which can benefit from self-hosting.
{% endcapture %}
{% include media-left.html text=markdown_text src="/assets/img/layout/network-distributed.svg" alt="Distributed network" %}

<div class="container">
  <div class="row">
    <div class="col-md-6">
    <h3>Advantages</h3>
    <ul>
      <li>Minimal information is exposed to third parties.</li>
      <li>Modern P2P platforms implement end-to-end encryption by default. There are no servers that could potentially intercept and decrypt your transmissions, unlike centralized and federated models.</li>
    </ul>
    </div>
    <div class="col-md-6">
      <h3>Disadvantages</h3>
      <ul>
        <li>Reduced feature set:</li>
        <ul>
          <li>Messages can only be sent when both peers are online, however, your client may store messages locally to wait for the contact to return online.</li>
          <li>Generally increases battery usage on mobile devices, because the client must stay connected to the distributed network to learn about who is online.</li>
          <li>Some common messenger features may not be implemented or incompletely, such as message deletion.</li>
        </ul>
        <li>Your <a href="https://en.wikipedia.org/wiki/IP_address">IP address</a> and that of the contacts you're communicating with may be exposed if you do not use the software in conjunction with a <a href="/providers/vpn">VPN</a> or <a href="/software/networks">self contained network</a>, such as <a href="https://www.torproject.org">Tor</a> or <a href="https://geti2p.net/">I2P</a>. Many countries have some form of mass surveillance and/or metadata retention.</li>
      </ul>
    </div>
  </div>
</div>

### Anonymous Routing

{% capture markdown_text %}
A messenger using [anonymous routing](https://doi.org/10.1007/978-1-4419-5906-5_628) hides either the identity of the sender, the receiver, or evidence that they have been communicating. Ideally, a messenger should hide all three.

There are [many](https://doi.org/10.1145/3182658) different ways to implement anonymous routing. One of the most famous is [onion routing](https://en.wikipedia.org/wiki/Onion_routing) (i.e. [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network))), which communicates encrypted messages through a virtual [overlay network](https://en.wikipedia.org/wiki/Overlay_network) that hides the location of each node as well as the recipient and sender of each message. The sender and recipient never interact directly, and only meet through a secret rendezvous node, so that there is no leak of IP addresses nor physical location. Nodes cannot decrypt messages nor the final destination, only the recipient can. Each intermediary node can only decrypt a part that indicates where to send the still encrypted message next, until it arrives at the recipient who can fully decrypt it, hence the "onion layers".

Self-hosting a node in an anonymous routing network does not provide the hoster with additional privacy benefits, but rather contributes to the whole network's resilience against identification attacks for everyone's benefit.
{% endcapture %}
{% include media-left.html text=markdown_text src="/assets/img/layout/network-anonymous-routing.svg" alt="Anonymous routing network" %}

<div class="container">
  <div class="row">
    <div class="col-md-6">
    <h3>Advantages</h3>
    <ul>
      <li>Minimal to no information is exposed to other parties.</li>
      <li>Messages can be relayed in a decentralized manner even if one of the parties is offline.</li>
    </ul>
    </div>
    <div class="col-md-6">
      <h3>Disadvantages</h3>
      <ul>
        <li>Slow message propagation.</li>
        <li>Often limited to fewer media types, mostly text since the network is slow.</li>
        <li>Less reliable if nodes are selected by randomized routing, some nodes may be very far from the sender and receiver, adding latency or even failing to transmit messages if one of the nodes goes offline.</li>
        <li>More complex to get started as the creation and secured backup of a cryptographic private key is required.</li>
        <li>Just like other decentralized platforms, adding features is more complex for developers than on a centralized platform, hence features may be lacking or incompletely implemented, such as offline message relaying or message deletion.</li>
      </ul>
    </div>
  </div>
</div>

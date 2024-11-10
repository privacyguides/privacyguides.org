---
title: "Tor Overview"
icon: 'simple/torproject'
description: Tor is a free to use, decentralized network designed for using the internet with as much privacy as possible.
---

![Tor logo](../assets/img/self-contained-networks/tor.svg){ align=right }

[**Tor**](../alternative-networks.md#tor) is a free to use, decentralized network designed for using the internet with as much privacy as possible. If used properly, the network enables private and anonymous browsing and communications. Because Tor traffic is difficult to block and trace, Tor is an effective censorship circumvention tool.

Tor works by routing your internet traffic through volunteer-operated servers, instead of making a direct connection to the site you're trying to visit. This obfuscates where the traffic is coming from, and no server in the connection path is able to see the full path of where the traffic is coming from and going to, meaning even the servers you are using to connect cannot break your anonymity.

[:octicons-home-16:](https://torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org){ .card-link title=Documentation}
[:octicons-code-16:](https://gitlab.torproject.org/tpo/core/tor){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org){ .card-link title=Contribute }

## Safely Connecting to Tor

Before connecting to Tor, you should carefully consider what you're looking to accomplish by using Tor in the first place, and who you're trying to hide your network activity from.

If you live in a free country, are accessing mundane content via Tor, aren't worried about your ISP or local network administrators having the knowledge that you're using Tor, and want to help [de-stigmatize](https://2019.www.torproject.org/about/torusers.html.en) Tor usage, you can likely connect to Tor directly via standard means like [Tor Browser](../tor.md) without worry.

If you have the ability to access a trusted VPN provider and **any** of the following are true, you almost certainly should connect to Tor through a VPN:

- You already use a [trusted VPN provider](../vpn.md)
- Your threat model includes an adversary which is capable of extracting information from your ISP
- Your threat model includes your ISP itself as an adversary
- Your threat model includes local network administrators before your ISP as an adversary

Because we already [generally recommend](../basics/vpn-overview.md) that the vast majority of people use a trusted VPN provider for a variety of reasons, the following recommendation about connecting to Tor via a VPN likely applies to you. <mark>There is no need to disable your VPN before connecting to Tor</mark>, as some online resources would lead you to believe.

Connecting directly to Tor will make your connection stand out to any local network administrators or your ISP. Detecting and correlating this traffic [has been done](https://edition.cnn.com/2013/12/17/justice/massachusetts-harvard-hoax) in the past by network administrators to identify and deanonymize specific Tor users on their network. On the other hand, connecting to a VPN is almost always less suspicious, because commercial VPN providers are used by everyday consumers for a variety of mundane tasks like bypassing geo-restrictions, even in countries with heavy internet restrictions.

Therefore, you should make an effort to hide your IP address **before** connecting to the Tor network. You can do this by simply connecting to a VPN (through a client installed on your computer) and then accessing [Tor](../tor.md) as normal, through Tor Browser for example. This creates a connection chain like:

- [x] You → VPN → Tor → Internet

From your ISP's perspective, it looks like you're accessing a VPN normally (with the associated cover that provides you). From your VPN's perspective, they can see that you are connecting to the Tor network, but nothing about what websites you're accessing. From Tor's perspective, you're connecting normally, but in the unlikely event of some sort of Tor network compromise, only your VPN's IP would be exposed, and your VPN would *additionally* have to be compromised to deanonymize you.

This is **not** censorship circumvention advice, because if Tor is blocked entirely by your ISP, your VPN likely is as well. Rather, this recommendation aims to make your traffic blend in better with commonplace VPN user traffic, and provide you with some level of plausible deniability by obscuring the fact that you're connecting to Tor from your ISP.

---

We **very strongly discourage** combining Tor with a VPN in any other manner. Do not configure your connection in a way which resembles any of the following:

- You → Tor → VPN → Internet
- You → VPN → Tor → VPN → Internet
- Any other configuration

Some VPN providers and other publications will occasionally recommend these **bad** configurations to evade Tor bans (exit nodes being blocked by websites) in some places. [Normally](https://support.torproject.org/#about_change-paths), Tor frequently changes your circuit path through the network. When you choose a permanent *destination* VPN (connecting to a VPN server *after* Tor), you're eliminating this advantage and drastically harming your anonymity.

Setting up bad configurations like these is difficult to do accidentally, because it usually involves either setting up custom proxy settings inside Tor Browser, or setting up custom proxy settings inside your VPN client which routes your VPN traffic through the Tor Browser. As long as you avoid these non-default configurations, you're probably fine.

---

<div class="admonition info" markdown>
<p class="admonition-title">VPN/SSH Fingerprinting</p>

The Tor Project [notes](https://gitlab.torproject.org/legacy/trac/-/wikis/doc/TorPlusVPN#vpnssh-fingerprinting) that *theoretically* using a VPN to hide Tor activities from your ISP may not be foolproof. VPNs have been found to be vulnerable to website traffic fingerprinting, where an adversary can still guess what website is being visited, because all websites have specific traffic patterns.

Therefore, it's not unreasonable to believe that encrypted Tor traffic hidden by a VPN could also be detected via similar methods. There are no research papers on this subject, and we still consider the benefits of using a VPN to far outweigh these risks, but it is something to keep in mind.

If you still believe that pluggable transports (bridges) provide additional protection against website traffic fingerprinting that a VPN does not, you always have the option to use a bridge **and** a VPN in conjunction.

</div>

Determining whether you should first use a VPN to connect to the Tor network will require some common sense and knowledge of your own government's and ISP's policies relating to what you're connecting to. However, again in most cases you will be better off being seen as connecting to a commercial VPN network than directly to the Tor network. If VPN providers are censored in your area, then you can also consider using Tor pluggable transports (e.g. Snowflake or meek bridges) as an alternative, but using these bridges may arouse more suspicion than standard WireGuard/OpenVPN tunnels.

## What Tor is Not

The Tor network is not the perfect privacy protection tool in all cases, and has a number of drawbacks which should be carefully considered. These things should not discourage you from using Tor if it is appropriate for your needs, but they are still things to think about when deciding which solution is most appropriate for you.

### Tor is not a free VPN

The release of the *Orbot* mobile app has lead many people to describe Tor as a "free VPN" for all of your device traffic. However, treating Tor like this poses some dangers compared to a typical VPN.

Unlike Tor exit nodes, VPN providers are usually not *actively* [malicious](#caveats). Because Tor exit nodes can be created by anybody, they are hotspots for network logging and modification. In 2020, many Tor exit nodes were documented to be downgrading HTTPS traffic to HTTP in order to [hijack cryptocurrency transactions](https://therecord.media/thousands-of-tor-exit-nodes-attacked-cryptocurrency-users-over-the-past-year). Other exit node attacks such as replacing downloads via unencrypted channels with malware have also been observed. HTTPS does mitigate these threats to an extent.

As we've alluded to already, Tor is also easily identifiable on the network. Unlike an actual VPN provider, using Tor will make you stick out as a person likely attempting to evade authorities. In a perfect world, Tor would be seen by network administrators and authorities as a tool with many uses (like how VPNs are viewed), but in reality the perception of Tor is still far less legitimate than the perception of commercial VPNs, so using a real VPN provides you with plausible deniability, e.g. "I was just using it to watch Netflix," etc.

### Tor usage is not undetectable

**Even if you use bridges and pluggable transports,** the Tor Project provides no tools to hide the fact that you are using Tor from your ISP. Even using obfuscated "pluggable transports" or non-public bridges do not hide the fact that you are using a private communications channel. The most popular pluggable transports like obfs4 (which obfuscates your traffic to "look like nothing") and meek (which uses domain fronting to camouflage your traffic) can be [detected](https://hackerfactor.com/blog/index.php?/archives/889-Tor-0day-Burning-Bridges.html) with fairly standard traffic analysis techniques. Snowflake has similar issues, and can be [easily detected](https://hackerfactor.com/blog/index.php?/archives/944-Tor-0day-Snowflake.html) *before* a Tor connection is even established.

Pluggable transports other than these three do exist, but typically rely on security through obscurity to evade detection. They aren't impossible to detect, they are just used by so few people that it's not worth the effort building detectors for them. They shouldn't be relied upon if you specifically are being monitored.

It is critical to understand the difference between bypassing censorship and evading detection. It is easier to accomplish the former because of the many real-world limitations on what network censors can realistically do en masse, but these techniques do not hide the fact that you—*specifically* you—are using Tor from an interested party monitoring your network.

### Tor Browser is not the most *secure* browser

Anonymity can often be at odds with security: Tor's anonymity requires every user to be identical, which creates a monoculture (the same bugs are present across all Tor Browser users). As a cybersecurity rule of thumb, monocultures are generally regarded as bad: Security through diversity (which Tor lacks) provides natural segmentation by limiting vulnerabilities to smaller groups, and is therefore usually desirable, but this diversity is also less good for anonymity.

Additionally, Tor Browser is based on Firefox's Extended Support Release builds, which only receives patches for vulnerabilities considered *Critical* and *High* (not *Medium* and *Low*). This means that attackers could (for example):

1. Look for new Critical/High vulnerabilities in Firefox nightly or beta builds, then check if they are exploitable in Tor Browser (this vulnerability period can last weeks).
2. Chain *multiple* Medium/Low vulnerabilities together until they get the level of access they're looking for (this vulnerability period can last months or longer).

Those at risk of browser vulnerabilities should consider additional protections to defend against Tor Browser exploits, such as using Whonix in [Qubes](../os/qubes-overview.md) to contain your Tor browsing in a secure VM and protect against leaks.

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

[^1]: The first relay in your circuit is called an "entry guard" or "guard". It is a fast and stable relay that remains the first one in your circuit for 2-3 months in order to protect against a known anonymity-breaking attack. The rest of your circuit changes with every new website you visit, and all together these relays provide the full privacy protections of Tor. For more information on how guard relays work, see this [blog post](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) and [paper](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) on entry guards. ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2))

### The Middle Node

The middle node is the second node to which your Tor client connects. It can see which node the traffic came from—the entry node—and to which node it goes to next. The middle node cannot, see your IP address or the domain you are connecting to.

For each new circuit, the middle node is randomly selected out of all available Tor nodes.

### The Exit Node

The exit node is the point in which your web traffic leaves the Tor network and is forwarded to your desired destination. The exit node is unable to see your IP address, but it does know what site it's connecting to.

The exit node will be chosen at random from all available Tor nodes ran with an exit relay flag.[^2]

[^2]: Relay flag: a special (dis-)qualification of relays for circuit positions (for example, "Guard", "Exit", "BadExit"), circuit properties (for example, "Fast", "Stable"), or roles (for example, "Authority", "HSDir"), as assigned by the directory authorities and further defined in the directory protocol specification. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

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

- Tor never protects you from exposing yourself by mistake, such as if you share too much information about your real identity.
- Tor exit nodes can **modify** unencrypted traffic which passes through them. This means traffic which is not encrypted, such as plain HTTP traffic, can be changed by a malicious exit node. **Never** download files from an unencrypted `http://` website over Tor, and ensure your browser is set to always upgrade HTTP traffic to HTTPS.
- Tor exit nodes can also monitor traffic that passes through them. Unencrypted traffic which contains personally identifiable information can deanonymize you to that exit node. Again, we recommend only using HTTPS over Tor.
- Powerful adversaries with the capability to passively watch *all* network traffic around the globe ("Global Passive Adversaries") are **not** something that Tor protects you against (and using Tor [with a VPN](#safely-connecting-to-tor) doesn't change this fact).
- Well-funded adversaries with the capability to passively watch *most* network traffic around the globe still have a *chance* of deanonymizing Tor users by means of advanced traffic analysis.

If you wish to use Tor for browsing the web, we only recommend the **official** Tor Browser—it is designed to prevent fingerprinting.

- [Tor Browser :material-arrow-right-drop-circle:](../tor.md#tor-browser)

### Protections provided by bridges

Tor bridges are commonly touted as an alternative method to hiding Tor usage from an ISP, instead of a VPN (as we suggest using if possible). Something to consider is that while bridges may provide adequate censorship circumvention, this is only a *transient* benefit. They do not adequately protect you from your ISP discovering you connected to Tor in the *past* with historical traffic log analysis.

To illustrate this point, consider the following scenario: You connect to Tor via a bridge, and your ISP doesn’t detect it because they are not doing sophisticated analysis of your traffic, so things are working as intended. Now, 4 months go by, and the IP of your bridge has been made public. This is a very common occurrence with bridges, they are discovered and blocked relatively frequently, just not immediately.

Your ISP wants to identify Tor users 4 months ago, and with their limited metadata logging they can see that you connected to an IP address which was later revealed to be a Tor bridge. You have virtually no other excuse to be making such a connection, so the ISP can say with very high confidence that you were a Tor user at that time.

Contrast this with our recommended scenario, where you connect to Tor via a VPN. Say that 4 months later your ISP again wants to identify anybody who used Tor 4 months ago. Their logs almost certainly can identify your traffic 4 months ago, but all they would likely be able to see is that you connected to a VPN’s IP address. This is because most ISPs only retain metadata over long periods of time, not the full contents of the traffic you request. Storing the entirety of your traffic data would require a massive quantity of storage which nearly all threat actors wouldn't possess.

Because your ISP almost certainly is not capturing all packet-level data and storing it forever, they have no way of determining what you connected to with that VPN *after* the fact with an advanced technique like deep packet inspection, and therefore you have plausible deniability.

Therefore, bridges provide the most benefit when circumventing internet censorship *in the moment*, but they are not an adequate substitute for **all** the benefits that using a VPN alongside Tor can provide. Again, this is not advice *against* using Tor bridges, you should just be aware of these limitations while making your decision. In some cases bridges may be the *only* option (if all VPN providers are blocked, for instance), so you can still use them in those circumstances with this limitation in mind.

If you think that a bridge can aid in defending against fingerprinting or other advanced network analysis more than a VPN's encrypted tunnel already can, you always have the option to use a bridge in conjunction with a VPN as well. That way you are still protected by the pluggable transport's obfuscation techniques even if an adversary gains some level of visibility into your VPN tunnel. If you decide to go this route, we recommend connecting to an obfs4 bridge behind your VPN for optimal fingerprinting protection, rather than meek or Snowflake.

It is [possible](https://discuss.privacyguides.net/t/clarify-tors-weaknesses-with-respect-to-observability/3676/16) that the [WebTunnel](https://forum.torproject.org/t/tor-relays-announcement-webtunnel-a-new-pluggable-transport-for-bridges-now-available-for-deployment/8180) pluggable transport currently being trialed may mitigate some of these concerns. We will continue to keep an eye on that technology as it develops.

## Additional Resources

- [Tor Browser User Manual](https://tb-manual.torproject.org)
- [How Tor Works - Computerphile](https://youtube.com/watch?v=QRYzre4bf7I) <small>(YouTube)</small>
- [Tor Onion Services - Computerphile](https://youtube.com/watch?v=lVcbq_a5N9I) <small>(YouTube)</small>

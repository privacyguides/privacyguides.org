---
date:
    created: 2025-02-13T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Zero Trust
    - Networking
license: BY-SA
schema_type: BackgroundNewsArticle
description: |
  Zero Trust is the new hotness for corporate networks. But can it be simplified and made useful for our home networks?
preview:
  cover:
---

# Zero Trust: What Can We Learn for Our Personal Networks

You may have heard of "Zero Trust", usually in relation to corporate networks. It's used a lot as a buzzword to sell cloud products to companies, but the overall concept is sound. Even though it seems complicated, I think we can learn from it for our personal home networks.<!-- more -->

## Previous Method

A traditional approach to security focuses heavily on protecting network access. You define a "secure" network that you control, usually with a [firewall](https://www.cisco.com/site/us/en/learn/topics/security/what-is-a-firewall.html#tabs-9da71fbd27-item-1288c79d71-tab) and/or a [NAT](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-address-translation-nat.html#tabs-9da71fbd27-item-1288c79d71-tab).

Anyone inside the secure network is considered trusted and has access to things such as network drives belonging to the organization, and other data.

Anyone outside the network is considered "untrusted" and are not given access to sensitive data.

``` mermaid
    graph LR
        A[Untrusted Traffic] -.-> B{Network Boundary};
        B --> C[Network Drive];
        C --> B;
        B --> D[User];
        D --> B;
        B --> E[Printer];
        E --> B;
```

This doesn't just include people physically inside the network, this also includes people connecting to the network over a VPN. Once the VPN spits you out, it's like you're physically there on the network, along with all the privileges that entails.

## Issues

You might notice this model leaves people on the network and the network itself highly vulnerable; once a malicious actor is inside the network, they can wreak havok and access troves of data and attack other users and devices.

``` mermaid
    graph LR
        A[Untrusted Traffic] -.-> B{Network Boundary};
        B --> C[Network Drive];
        C --> B;
        B --> D[User];
        D --> B;
        B --> E[Printer];
        E --> B;
        C --> F(Attacker);
        D --> F;
        E --> F;
```

Once an attacker is inside your network, they can [move laterally ](https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/lateral-movement/) and access deeper and more sensitive parts of the network.

How does an attacker get past the network boundary though?

### Virus

It's happened to us all at some point. Either through a malicious link, or maybe a malicioud program masquerading as a legitimate one, there's any number of ways a "trusted" machine can get infected with malware.

Once it is, as soon as that user connects to the network, it's open season to infect other devices on the network, access sensitive data, and cause all kinds of damage.

Unfortunately, technology isn't at a point where we can have 100% confidence that our devices aren't infected, which makes any "trusted" device, even if the user isn't malicious, a possible security threat.

This is especially relevant considering the rise in [bring-your-own-device (BYOD)](https://market.biz/bring-your-own-device-byod-statistics/) in workplaces. Devices that aren't set up by the organization can't be trusted to have the best security practices in place: automatic updates, restricted software installs, etc. For all you know, someone could be on your network with a laptop from 2004 running Windows Vista.

### Malicious User

Of course, sometimes our "trusted" users *are* malicious. [Corporate espionage](https://www.bbc.com/news/world-asia-china-64206950) is a very real threat. Even in your own home network, there's probably people you don't want to have access to your data.

### Stolen Credentials

Sometimes credentials can get stolen, either through [phishing](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams), [social engineering](https://www.ibm.com/think/topics/social-engineering), or just plain irresponsible [credential sharing](https://www.thezebra.com/resources/home/dangers-of-sharing-passwords/).

Whatever the case may be, users can't necessarilly be trusted to keep their credentials secure.

Passwords are, of course, the most vulnerable type of credentials to phishing and compromise in general.

## Zero Trust

This is where [Zero Trust](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview) comes in.

The motto here is "**never trust, always verify**". This means that 
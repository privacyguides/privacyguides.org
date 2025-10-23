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
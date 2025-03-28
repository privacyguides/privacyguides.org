---
date:
    created: 2025-03-17T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Privacy Pass
license: BY-SA
schema_type: BackgroundNewsArticle
description: |
  Privacy Pass is a new way to privately authenticate with a service. Let's look at how it could change the way we use services.
---
# Privacy Pass: The New Protocol for Private Authentication

Services that require authentication can correlate your activity on that service with your account, and that account is normally linked with payment information that could potentially link back to your real identity. With the privacy pass protocol, it doesn't have to be that way.<!-- more -->

## History

The story of privacy pass begins with a pahttps://dl.acm.org/doi/pdf/10.1145/4372.4373per by David Chaum from 1985, in which he laments the ever-increasing data collection by companies and government agencies.

It's funny that all the way back in 1985 he talks about the same issues we deal with today: persistent identifiers tied to our real identity for transactions, government ID's, etc.

Chaum proposes three solutions to the state of affairs he describes.

### Pseudorandom Identifiers

Instead of persistent identifiers like we now have with our government ID's, credit cards, etc, Chaum suggests randomly generated identifiers. For example, you could have a one-time unique identifier for each transaction at a shop.

For ongoing relationships such as a bank, you can use a single pseudorandom identifier for that organization that you use continuously.

### Card Computers

One of the more quaint ideas in the paper is the idea of a small "card computer" on which you would perform transactions. Chaum's theoretical device resembles "a credit-card-sized calculator, and [includes] a character display, keyboard, and a limited distance communication capability (like that of a television remote control)".

Nowadays we carry around credit-card sized computers like it's nothing. The secret "card number" he describes would probable be your device PIN or even biometric authentication, which are already used to authenticate transactions.

We still haven't *quite* reached Chaum's vision yet in some areas. His idea is for these "card computers" to fully replace ATM's and checkout terminals in stores. Essentially, he wants all transactions to be online transactions, with something like Apple Pay or Google Pay on your device mediating the transaction and using your device PIN to prevent fraudulent transactions.

Making all transactions online transactions is an interesting idea. I think most people can share in the frustration of dealing with checkout terminals, especially the self-checkout ones with cameras pointed at your face.

We're still falling short in a major area though.

>card computers could be purchased or constructed just like any other personal computer, and would have no secrets from or structures unmodifiable by their owners.

Current smartphones are non-upgradeable by their owners and can't be built from scratch like a desktop computer can. They also contain lots of black-box proprietary code. Even a Google Pixel, the gold standard of Android smartphone freedom that allows you to install your own operating system securely, still suffers from the same pitfalls.

### Cryptography

How do we ensure the psuedonyms can't be linked together? We already use cryptography to protect our communications; here Chaum presents ways to protect unlinkability in a similar way using cryptography.

>Simple mathematical proofs show that, with appropriate use of the systems, even conspiracy of all organizations and tapping of all communication lines cannot yield enough information to link the pseudonyms-regardless of how clever the approach is or how much computation is expended.

## Blind Signatures

Digital signatures normally are used to ensure that something like a piece of software or a message comes from the original sender and hasn't been tampered with. You want to know who the signer is for this system to work.

But what if the signer and the one sending a request are different? Say you have a membership to the PrivacyGuides+ subscription service and you want to authenticate with it but don't want to identify yourself. That's where blind signatures come in.

### How it Works

You can imagine blind signatures like an envelope that's been wrapped in [carbon paper](https://en.wikipedia.org/wiki/Carbon_paper) with a window showing your psuedonym for that account, whether it be an account number, username, etc. They never see anything but the account identifier, or whatever they need to verify that you're a valid customer.

The organization then signs it, indicating you're a valid customer and you're allowed to access the service.

Later, when you're presented with a request to authenticate as an active subscriber of  PrivacyGuides+, you unwrap the envelope and discard it along with the carbon paper. You rewrap it in a new envelope with a window showing the signature, and the requester can then be sure that you're allowed to access PrivacyGuides+.

![A diagram showing an envelope being wrapped in carbon paper, transfered to an organization, then passing over a boundary representing the unlinkability between the two transactions. Then the envelope is unwrapped, put in a new envelope with a window showing the signature from the previous organization, and presented to a different organization.](../assets/images/privacy-pass/Blind_signatures.png)

<small aria-hidden="true">Illustration: David Chaum</small>

## Problems

Services that don't require an account or payment to use are great; you can use them with Tor, clear your browser history, whatever you need to do to keep your activity private. 

But logging into an account completely invalidates all of that.

### Linkability

As long as you're logged into an account with a service, all your previous and current activity can be linked together, along with any data you provided such as an email address, payment information, etc.

### Data Collection

A lot of websites want to be able to filter out users below a certain age. 

We're starting to see a rise in extremely privacy-invasive age verification systems such as submitting a government ID when you want to access a website or invasive facial scans.

### Blocking VPN and Tor Users

Bots are a rampant problem for online services, leading them to sometimes block non-residential IP addresses such as those used for commercial VPNs and Tor.

### CAPTCHAs

When VPN and Tor users aren't blocked, they often have to deal with annoying CAPTCHAs that take up your precious time and use invasive fingerprinting.

CAPTCHAs aren't even particularly good at detecting bots. With advances in AI, bots can solve CAPTCHAs better than humans can.
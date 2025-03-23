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
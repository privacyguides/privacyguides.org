---
date:
    created: 2025-05-13T17:30:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Multi-Party Computation
    - Privacy Enhancing Technologies
license: BY-SA
schema_type: BackgroundNewsArticle
description: Learn about Secure Multi-Party Computation and how it can 

---
# Multi-Party Computation

We know how to secure data in storage using E2EE, but is it possible to ensure data privacy even while processing it server-side?<!--more-->

## History

In a pivotal [paper](https://dspace.mit.edu/bitstream/handle/1721.1/148953/MIT-LCS-TM-125.pdf?sequence=1) called "Mental Poker" by Adi Shamir, Ronald L. Rivest, and Leonard M. Adleman from 1979, the researchers attempt to demonstrate a way of playing poker over distance using only messages and still have it be a fair game.

To explain, fan favorites Alice and Bob will make a return. First, Bob encrypts all the cards with his key, then sends them to Alice. Alice picks five to deal back to Bob as his hand, then encrypts five with her own key and sends those to Bob as well. Bob removes his encryption from all ten cards and sends Alice's cards back to her.

Notice that Bob needs to be able to remove his encryption *after* Alice has applied hers. This commutative property is important for the scheme to work.

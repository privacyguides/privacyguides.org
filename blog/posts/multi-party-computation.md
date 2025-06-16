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

In a seminal [paper](https://dspace.mit.edu/bitstream/handle/1721.1/148953/MIT-LCS-TM-125.pdf?sequence=1) called "Mental Poker" by Adi Shamir, Ronald L. Rivest, and Leonard M. Adleman from 1979, the researchers attempt to demonstrate a way of playing poker over a distance using only messages and still have it be a fair game.

To explain, fan favorites Alice and Bob will make a return. First, Bob encrypts all the cards with his key, then sends them to Alice. Alice picks five to deal back to Bob as his hand, then encrypts five with her own key and sends those to Bob as well. Bob removes his encryption from all ten cards and sends Alice's cards back to her.

Notice that Bob needs to be able to remove his encryption *after* Alice has applied hers. This commutative property is important for the scheme to work.



Alice and Bob have struck it rich! They're both millionaires, but they want to be able to see who has more money without revealing exactly how much they have to each other.

Luckily, we can use MPC to solve this "Millionaire's Problem" this using a method invented by Andrew Yao called *garbled cricuits*. Garbled circuits allow us to use MPC for any problem as long as it can be represented as a boolean circuit i.e. a set of logic gates such as `AND` `OR` `XOR` etc.

## Garbled Circuits

We can split the two parties into an "Evaluator" and a "Generator". The Generator will be responsible for setting up the cryptography that'll be used and the Evaluator will actually perform the computation.

We start by making the truth table for our inputs. In order to hide the values of the truth table, we assign each input a different label. Importantly, we need to assign a different label for each input, so 1 will not be represented by the same label for each. We also need to shuffle the order of the rows so the values can't be inferred from that.

We can still tell what the value is based on knowing the type of logic gate, for example an `AND` gate would only have one different output, so you could infer that output is 1 and the others are 0. To fix this, we can encrypt the rows using the input labels as keys, so only the correct output can be decrypted.

We still have a problem, though: how can the Evaluator put in their inputs? Asking for both labels would allow them to decrypt more than one output, and giving their input would break the whole point. The solution is something called "Oblivious Transfer".

The solution is for the Evaluator to generate two public keys, one of which they have the private key for. The Generator encrypts the two labels for the Evaluator's inputs using the provide public keys and sends them back. Since the Generator only has a private key for one of the labels, they will decrypt the one they want. The Generator puts the labels in order so that the Evaluator can choose which one they want to decrypt. This method relies on the Evaluator not to send multiple keys that can be decrypted.

There's a good explainer for Yao's garbled circuits [here](https://lcamel.github.io/MPC-Notes/story-en-US.html) if you're interested in a step-by-step walkthrough.

### Birth of Multi-Party Computation

Multi-Party Computation was solidified with the research of Oded Goldreich, Siltnb Micali, and Avi Wigderson and the GMW paradigm (named after the researchers, similar to how RSA is named).

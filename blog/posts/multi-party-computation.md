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
description: Learn about Secure Multi-Party Computation and how it can be used to solve real-world privacy problems.
---
# Multi-Party Computation

We know how to secure data in storage using E2EE, but is it possible to ensure data privacy even while processing it server-side?<!--more-->

## History

In a seminal [paper](https://dspace.mit.edu/bitstream/handle/1721.1/148953/MIT-LCS-TM-125.pdf?sequence=1) called "Mental Poker" by Adi Shamir, Ronald L. Rivest, and Leonard M. Adleman from 1979, the researchers attempt to demonstrate a way of playing poker over a distance using only messages and still have it be a fair game.

To explain, fan favorites Alice and Bob will make a return. First, Bob encrypts all the cards with his key, then sends them to Alice. Alice picks five to deal back to Bob as his hand, then encrypts five with her own key and sends those to Bob as well. Bob removes his encryption from all ten cards and sends Alice's cards back to her.

Notice that Bob needs to be able to remove his encryption *after* Alice has applied hers. This commutative property is important for the scheme to work.

This early scheme is highly specialized for this task and not applicable to different situations.

### Secure Two-Party Computation

Alice and Bob have struck it rich! They're both millionaires, but they want to be able to see who has more money without revealing exactly how much they have to each other.

Luckily, we can use MPC to solve this "Millionaire's Problem" this using a method invented by Andrew Yao called *garbled cricuits*. Garbled circuits allow us to use MPC for any problem as long as it can be represented as a boolean circuit i.e. a set of logic gates such as `AND` `OR` `XOR` etc.

### Garbled Circuits

We can split the two parties into an "Evaluator" and a "Generator". The Generator will be responsible for setting up the cryptography that'll be used and the Evaluator will actually perform the computation.

We start by making the truth table for our inputs. In order to hide the values of the truth table, we assign each input a different label. Importantly, we need to assign a different label for each input, so 1 will not be represented by the same label for each. We also need to shuffle the order of the rows so the values can't be inferred from that.

We can still tell what the value is based on knowing the type of logic gate, for example an `AND` gate would only have one different output, so you could infer that output is 1 and the others are 0. To fix this, we can encrypt the rows using the input labels as keys, so only the correct output can be decrypted.

We still have a problem, though: how can the Evaluator put in their inputs? Asking for both labels would allow them to decrypt more than one output, and giving their input would break the whole point. The solution is something called "Oblivious Transfer".

The solution is for the Evaluator to generate two public keys, one of which they have the private key for. The Generator encrypts the two labels for the Evaluator's inputs using the provide public keys and sends them back. Since the Generator only has a private key for one of the labels, they will decrypt the one they want. The Generator puts the labels in order so that the Evaluator can choose which one they want to decrypt. This method relies on the Evaluator not to send multiple keys that can be decrypted. Because some trust is required, this protocol is considered "semi-honest".

There's a good explainer for Yao's garbled circuits [here](https://lcamel.github.io/MPC-Notes/story-en-US.html) if you're interested in a step-by-step walkthrough.

### Birth of Multi-Party Computation

Multi-Party Computation was solidified with the [research](https://dl.acm.org/doi/pdf/10.1145/28395.28420) of Oded Goldreich, Silvio Micali, and Avi Wigderson and the GMW paradigm (named after the researchers, similar to how RSA is named).

#### More Than Two Parties

Yao's protocol was limited to two parties. The new GMW paradigm expands the protocol to be able to handle any number of parties and can handle actively malicious actors as long as the majority are honest. 

#### Secret Sharing

The new paradigm relies on secret sharing which is a method of splitting private information like a cryptographic key into multiple parts such that it will only reveal the secret if the shares are combined together. The GMW protocol uses additive secret sharing, which is quite simple. You come up with a secret number, say 123, and you split it up into however many other numbers you want.

`99 + 24 = 123`

You distribute each number to a participant and add them all together to get the original secret. While simple, it doesn't play well with multiplication operations.

#### Zero-Knowledge Proofs

The GMW paradigm introduced protections against malicious adversaries, powered by zero-knowledge proofs (ZKP). ZKP allow one party to convince another party a statement is true without revealing any other information than the fact that the statement is true. The concept of ZKP was first introduced in a [paper](https://dl.acm.org/doi/pdf/10.1145/22145.22178) from 1985 by Shafi Goldwasser, Silvio Micali, and Charles Rackoff.

A slightly humorous paper called *[How to Explan Zero-Knowledge Protocols to Your Children](https://pages.cs.wisc.edu/~mkowalcz/628.pdf)* gives a storybook explanation of how they work (who says academic papers can't be fun?).

The main crux revolves around probability: if a party knows the proper way to get a result, they should be able to reliably get the correct answer.

To borrow the cave explanation, imagine Alice and Bob have taken up cave exploration. They've found a cave in the shape of a loop with a magic door connecting each entrance together and Alice claims to know how to open it. However, she doesn't want Bob to know the secret to open the door.

Alice, acting as the "Prover" goes into the cave. Bob, the "Verifier", stays outside and yells which side of the cave Alice should come out of. They repeat this many times. If Alice can reliably make it out of the correct side of the cave, then she must know how to open the magic door.

### BGW Protocol

While the GMW protocol was a huge leap forward for MPC, there were still huge limitations. The garbled circuit protocol is limited to boolean logic gates which makes implementing many different common operations much more difficult. It also requires communication for every single gate, which is highly inefficient.

The researchers Michael Ben-Or, Shafi Goldwassert, and Avi Wigderson in their paper *[Completeness Theorems for Non-Cryptographic Fault-Tolerant Distributed Computation](https://dl.acm.org/doi/pdf/10.1145/62212.62213)* made several advancements in the efficiency and robustness of MPC, moving it closer to being practical to use in the real world.

#### Arithmetic Circuits

Instead of boolean circuits, the BGW protocol uses arithmetic circuits. These allow for easier mathematical operations like multiplication and addition instead of being limited to logic gates on individual bits. This makes a huge difference in the amount of communication between parties and thus the efficiency of the protocol.

#### Shamir's Secret Sharing

The BGW protocol utilizes [Shamir's Secret Sharing](https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf), which relies on polynomials instead of addition. This allows for more efficiency in multiplication and allows for setting a threshold where only a certain number of shares need to be present in order to reconstruct the secret.

### Real-World Usage

As MPC saw gradual optimizations and improvements, it grew from an interesting thought experiment to something that could have real-world uses.

#### Less Communication

The BGW protocol doesn't require as much communication between parties, partly thanks to its use of Shamir's secret sharing which works well with arithmetic operations.

Additionally, it doesn't require Oblivious Transfer or zero-knowledge proofs. Its use of Shamir's secret sharing and error correction codes instead provides the same properties in a more efficient way.

#### Danish Sugar Beet Auction

The first instance of MPC being used in a real-world scenario wouldn't occur until 2008.

Denmark's sugar beet industry faced a problem: with the EU significantly reducing its financial support for sugar beet production, they needed to figure out what price the thousands of sugar beet farmers were willing to sell at, and which price the company that bought all the sugar beets would be willing to buy them at, a so-called "double auction" where the buyer and seller figure out the **market clearing price**, or the price at which demand meets supply most effectively.

But who should be in charge of the auction? Farmers don't want to trust Danisco with their bids as it reveals information about each individual farmer's business. The farmers can't be in charge of it because they don't trust each other. They could use an external consulting firm, but then the entire operation would rely on that one firm's confidentiality and the reliability of their tools.

The [solution](https://a.storyblok.com/f/266767/x/e4c85ffa34/mpc-goes-live_whitepaper_2008-068.pdf) was to use a "virtual auctioneer" that relied on MPC to fairly carry the auction out.

It relied on three servers, with one representing each party: Danisco, DKS (the Danish sugar beet growers association), and The SIMAP project (Secure Information Management and Processing, a project sponsored by the Danish National Research Agency).

The solution was so successful that it was used every year until 2015 when it was no longer needed. A survey of the farmers found that the vast majority found the system simplified the process of trading contracts and that they were satisfied with the level of confidentiality it provided.

The first test run of MPC was a massive success and the potential was now proven.

#### 
---
date:
    created: 2021-02-23
categories:
    - Opinion
authors:
    - natebartram
links:
    - 'Threat Modeling<br><small>Creating Your Threat Model</small>': https://www.privacyguides.org/basics/threat-modeling/
    - posts/choosing-the-right-messenger.md
tags:
    - Security
license: BY
description: Privacy, security, and anonymity often complement each other, but they are not always dependent on each other, and they are definitely not the same thing.
schema_type: OpinionNewsArticle
---
# Security, Privacy, and Anonymity

![](../assets/images/security-privacy-anonymity/cover.jpeg)

We may think that we know the differences between privacy, security and anonymity, however we often mix them up. People will often criticize a product or service as “not private” when they really mean “not anonymous.” Privacy, security, and anonymity often complement each other, but they are not always dependent on each other, and they are definitely not the same thing. A service can be private without being anonymous, or even secure without being private. Which one should you prioritize?<!-- more --> To some extent, there are no wrong answers. It really comes down to your threat model and what your desired goal is. It is perfectly fine to pick a product that provides privacy even though it doesn't provide anonymity. Furthermore, it's okay to pick a product that doesn't provide security if it does provide one of the other features. The important thing is that you need to be aware what these products and services are and aren’t offering you so that you can use them correctly.

There’s lots of ways to define privacy, security, and anonymity. Someone showed me [this](https://code.privacyguides.dev/privacyguides/privacytools.io/issues/1760#issuecomment-10452) definition and I really liked it. It seems to pretty much hit the nail on the head when applying these terms specifically to data privacy and cybersecurity:

**Anonymity**: *The sender and/or recipient's real ID is unknown*

In the real world this could be a secret admirer sending a Valentine's Day card. Online this could be when ones "footprints" cannot lead back to the poster: e.g. Tor.

**Privacy**: *The contents of the message can only be seen/heard by the intended recipient(s)*

In the real world this could be a whispered conversation between two people in the middle of Siberia. Online this could be a Signal message, which is end-to-end encrypted and only the recipient & sender can read the contents.

**Security** (in the context of privacy/anonymity): *The parties involved are who they say they are*

In the real world this could be something unique and verifiable such as a passport or fingerprints. Online this could be certificates or PGP signatures.

These topics often overlap: Privacy can help your security because if people don't know information about you, they can't effectively target you. For example, an attacker that doesn't know who you bank with cannot know which bank to target. Security can protect your privacy by forcibly controlling who has access to that information about you. Let’s take a few examples:

## Security without Privacy or Anonymity

The most obvious example of this that comes to mind is Google. Google has had almost no major data breaches in all their years of existence, yet they know almost everything about everyone to the point that the former CEO Eric Schmidt remarked "[We can more or less know what you're thinking about.](https://web.archive.org/web/20210729190743/https://www.zdnet.com/article/google-even-knows-what-youre-thinking/)" Google offers world-class security with zero privacy or anonymity.

## Security and Some Privacy without Anonymity

Consider the renowned encrypted messaging app Signal. Because your phone number is required, you can be unmasked by a court order or even a web search depending on the phone number you use. However, Signal is renowned for having some of the best security in the world, and the content of your messages and the information you transfer will be protected and controlled even if your identity is not. Top-notch security and privacy over the content of your messages, but anonymity cannot be guaranteed.

## Anonymity without Security

Cash is a great example of this. Paying for a product in cash preserves your anonymity - unless the business requires it, you don't have to give any kind of information at all. Yet, you have no security if the seller doesn't deliver the item (unless you have a receipt). You have no protection from fraud or anything like that.

## Security with Privacy and Anonymity

XMPP is arguably the best example of this. XMPP allows you to sign up without any real information, over a VPN or Tor connection for total anonymity. Additionally, the conversations can be protected by OMEMO encryption, meaning the data itself is also private. When used properly, this is as closed to perfect as you can get, if a bit user-unfriendly. (**Editor's note**: XMPP is not officially endorsed by Privacy Guides for the reasons listed [here](https://code.privacyguides.dev/privacyguides/privacytools.io/issues/1854).)

## Closing Thoughts

These three concepts are not necessarily dependent on each other. A secure product does not guarantee privacy, a private product does not guarantee security, and anonymity does not guarantee either. As I said before, there is nothing wrong with valuing one facet over another.  It's also okay to use Signal even though it doesn't give you total anonymity. Just be sure you understand how a product is meant to be used and where it both shines and falls short. It would be awful to use Google thinking that it will give your communications total privacy and then your financial details get stolen by a [rogue employee](https://web.archive.org/web/20210729190743/https://nypost.com/2020/09/23/shopify-says-rogue-employees-may-have-stolen-customer-data/). Or if you used a service like Signal to organize protests in a hostile country only to be arrested once your phone number is unmasked. Know the limitations of the services you choose and decide what features are important to you. It’s also important to know that privacy and security are sliding scales. This could be an entire blog post on its own. Think of passwords. Any password – even “password” - is technically more secure than no password at all. But a 16-character randomly-generated password is even more secure than “password.” Sometimes it’s okay to find a solution that offers a blend – less privacy in one area in exchange for more security in another, or vice versa. Once again, it all comes back to your threat model, your needs, and your resources.

---

*Originally published on [The New Oil](https://web.archive.org/web/20210729190743/https://thenewoil.xyz/privsecanon.html).*

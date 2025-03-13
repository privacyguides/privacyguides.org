---
date:
    created: 2025-03-10
categories:
    - Explainers
authors:
    - kevpham
tags:
    - Government
    - United States
    - Threat Model
license: BY-SA
description: Privacy threat modeling could be an intimidating topic for most people. In this series, we introduce a hypothetical situation inspired by real-world usage cases. Each article will cover different recomendations already present in Privacy Guides' knowledge base. For today, we focus on Sally - a Texas woman seeking to purchase contraceptive pills online.
schema_type: BackgroundNewsArticle

# Threat Modelling Series: Purchasing Contraceptive Pills Online

![Reproductive Health Supplies Coalition - Unsplashed](...assets/images/purchasing-contraceptive/Reproductive-Health-Supplies-Coalition.jpg)

<small aria-hidden="true">Photo: Reproductive Health Supplies Coalition / Unsplashed</small>

[Privacy threat modeling](https://www.privacyguides.org/en/basics/threat-modeling/) could be an intimidating topic for most people. In this blog series, we introduce a hypothetical situation inspired by real-world usage cases. Each article will cover different recomendations already present in Privacy Guides' knowledge base. For today, we focus on Sally - a Texan college student seeking to purchase contraceptive pills online.

## Contextualization

On January 31, a New York doctor was [indicted by a Louisiana grand jury](https://apnews.com/article/abortion-indictment-lousiana-new-york-doctor-63ff4d9da8a9b592a7ca4ec7ba538cd3) for prescribing abortion pills online to a patient. Although New York's shield law has protected the doctor from extraditiion, the patient and her mother face criminal charges because of the state's strict abortion bans.

Since some states may soon implement laws that criminalizing basic reproductive healthcare, this begs the question: **How can patients protect their reproductive health data from prying eyes?**

## Scenario

In the far-away future of 2030, Sally is a second-year medical student attending the University of Texas at Austin. For the past few years, she has been living with her boyfriend, Alex, in an apartment near the city center. Having had a pregancy scare before, they decided to stockpile basic contraceptives, such as birth control pills and morning-after pills, in anticipation of future government restrictions.

When researching this topic online, Sally notices upsetting news - the Texas House of Representatives have passed a law mandating all contraceptive purchases must be placed in a state-run registry. Not only that, but identification cards are now required for future purchases. Sally realizes that she only has a few months at best before these new requirements are enforced.

Later that night, Sally and Alex meet in the living room to discuss their options. They eventually agreed on an appropiate threat model for her situation.

### What do I want to protect?

"Obviously, I want to avoid my name in any government registry if possible. I'm afraid that this can be weaponized against me if a complete contraceptive ban ever occurs."

Under the proposed law, Sally is concerned that her purchases could be tied back to her identity. Although a complete ban has not occurred yet, authorities may place increased scrutiny on her transaction history if she has a recorded history of contraceptive usage. If medical complications were to occur from using the morning-after pill, Sally worries she may be reported to law enforcement if such a ban is enacted. This prospect may lead to serious consequences for her reproductive autonomy.

In addition to transaction history, Sally should consider protecting the digital security of her accounts, especially on online fourms or social media.

### Who do I want to protect it from?

"Don't forget that we might get some unwanted attention from certain groups. Not just the police."

Regardless of whether this registry is public or not, Sally could eventually be targeted by third-parties - not just law enforcement. She can't assume that any form of storage remains 100 percent secure or confidential. A data breach would expose Sally's name along with thousands of other people to broader public. In addition to state threat actors, Sally must also consider the possibility of coordinated harrassment campaigns as well. There is also the possibility of this data being utilized by medical practictoners and employers to discriminate based on her transaction history.

### How likely is it that I will need to protect it?

"Given the history of past abortion restrictions and actual criminal charges pressed across the United States, I am not surpised that more specific laws are being passed. I shouldn't count on the bill not being passed in Senate and signed by the Governor."

The best time to act is always now. Even if the proposed bill is defeated in the Senate or vetoed by the Governor, Sally would protect herself best by preparing for these consequences early. By waiting until the last minute, she would face increased access barriers when purchasing contraceptives from online pharmacies.

Thankfully, Sally was able to learn about the proposed bill early. Monitoring the news is the best way Sally can plan her threat model before committing to an action plan.

### How bad are the consequences if I fail?

"If I do nothing, I might risk facing legal and health consquences."

If Sally fails to protect the confidentiality of her purchases, she could encounter legal consquences through the form of fines or criminal charges. Additionally, she may face health-related consquences if Sally cannot access the mediciation that she needs. Finally, Sally may also face social stigma if such purchases are revealed publiclly to her employers, friends, and family.

### How much trouble am I willing to go through to try to prevent potential consequences?

"Circumventing these purchase restrictions through online pharmacies and anonymous payments may threaten my safety."

Sally's ability to circumvent these laws through online pharmacies or anonymous markets will depend on the urgency of her situation. She may face specific challenges such as navigating complex online platforms, ensuring product legitimacy, and dealing with legal repercussions if her purchases are traced. Moreover, she might encounter issues with maintaining anonymity in payment methods, the risk of receiving counterfeit medications, and the stress of managing her privacy in a restrictive environment. If she is informed about safe sources, she could be more inclined to take these risks, weighing the benefits of obtaining contraceptives against the challenges involved.

## Mitigation Steps

After constructing a threat model, Sally and Alex starts reviewing potential action plans for them to follow.

### Solution 1: Legal Compliance

The couple honors the legal restrictions in Louisiana. Since circumvention may lead to unwanted attention, they may consider moving to another jurisdiction, such as another state or country, after Sally finishes medical school. While this solution would be safer for the couple, Sally might need to endure unintended health consquences or an unwanted pregnancy if she could not access reliable contraceptives.

### Solution 2: Active Preparation

To address the impending legal restrictions, Sally can begin purchasing contraceptives from reputable online pharmacies before any laws are enacted. By researching and identifying pharmacies that prioritize customer privacy and have positive reviews, she can secure her supply of contraceptives without breaking state laws. Implementing basic digital security practices, such as using a [virtual private network (VPN)](https://www.privacyguides.org/en/vpn/) to encrypt her internet connection and creating strong, unique passwords for her accounts, will further protect her personal information. This solution allows Sally to obtain the contraceptives she needs while minimizing the risk of government surveillance or data breaches.

### Solution 3: Anonymous Circumvention

If a state ban on contraceptives takes place, Sally can utilize anonymous payment methods and end-to-end encrypted messaging apps to discreetly obtain contraceptives. Using [Tor Browser](https://www.privacyguides.org/en/tor/) enables her to access online pharmacies without revealing her identity or location, effectively circumventing state restrictions. Additionally, she can adopt [Monero](https://www.privacyguides.org/en/cryptocurrency/), a cryptocurrency designed for anonymous transactions, to make transactions without leaving a trace. For secure communication with loved ones about her situation, Sally can use [Signal](https://www.privacyguides.org/en/real-time-communication/#encrypted-messengers), an encrypted messaging app that protects her conversations from surveillance. By choosing these privacy tools during a state ban, Sally can safeguard her personal safety while minimizing the risk of legal repercussions. However, this approach is dangerous and may cause additional harm.

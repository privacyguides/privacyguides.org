---
date:
    created: 2025-02-28T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Passkeys
    - Passwords
license: BY-SA
---

# Toward a Passwordless Future

Passwords are annoying, vulnerable to attack, and open to human error. The multitude of issues with passwords has cost billions of dollars and forced terrible bandaid solutions in how we handle signing up for, logging in to, and securing online accounts. I'd like to break down some of these design paradigms that have entrenched themselves in our lives and how passkeys can lead to more secure and more private online accounts.<!-- more -->

## How did we get here?

Passwords are a surprisingly old concept, dating all the way back to ancient Rome. The ancient Roman historian Polybius in his *[Histories](http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0234%3Abook%3D6%3Achapter%3D34)* describes how the Roman military would pass around a wooden tablet inscribed with a "watchword" that would allow them to identify each other as friendly.

During Prohibition in 1920's US, speakeasies, or private, unlicensed bars selling illegal alcohol, would require a spoken [password](https://prohibition.themobmuseum.org/the-history/the-prohibition-underworld/the-speakeasies-of-the-1920s/) to gain entry. The name comes from how quietly you had to say the password so law enforcement didn't overhear.

The US military later used [countersigns](https://en.wikipedia.org/wiki/Countersign_(military)#cite_note-2), consisting of a challenge and a password to identify allies. On D-Day, they used the challenge "flash" and the password "thunder." Thunder was used specifically because it was difficult for Germans to pronounce, since the English "th" sound doesn't exist in German. This is an example of a shibboleth, or a way of distinguishing groups of people based on cultural differences.

It wasn't long after the dawn of the digital age that a solution for authentication was needed. Computers in the 1950's were expensive and slow, only able to handle one problem at a time. MIT's Compatible Time Sharing System (CTSS), pioneered by Fernando Corbató, aimed to solve this problem by allowing multiple users to do work at the same time, but they needed a way to authenticate specific users. "Putting a password on for each individual user as a lock seemed like a very straightforward solution" Corbató told Wired in an [interview](https://www.wired.com/2012/01/computer-password/). These passwords weren't designed to be very secure. Fred Schneider, a computer science professor at Cornell University, said in the same Wired article "nobody wanted to devote many machine resources to this authentication stuff."

The first password breach occured not long after in 1962, detailed in a [pamphlet](https://www.multicians.org/thvv/compatible-time-sharing-system.pdf) written to commemorate the CTSS. Allan Scherr, a Ph.D. researcher at MIT, wanted more time for his detailed simulations. He knew that the passwords were stored in a plaintext file, so he requested it to be printed offline and that was that: he now had everyone's password and all the time he could ask for. A later incident in 1966 saw all users' passwords being printed at login due to administrator accidentally swapping the master password file and the message of the day.

Clearly there was work to be done on securely storing passwords. A [paper](https://rist.tech.cornell.edu/6431papers/MorrisThompson1979.pdf) from 1979 by Robert Morris and Ken Thompson of Bell Labs outlines the need for passwords to not be stored in plaintext on the system, instead recommending storing a hash. A hash is a one-way function: you give a certain input and it spits out data that can't be easily rersed back to the input, even knowing the algorithm that was used. But, given the same input, you'll get the same output, allowing you to compare an inputted user password to a stored one.
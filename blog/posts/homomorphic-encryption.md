---
date:
    created: 2025-07-24T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Privacy-Enhancing Technologies
    - Homomorphic Encryption
license: BY-SA
schema_type: BackgroundNewsArticle
description: We rely on services that process our data every day. It's accepted that in order to process our data, the service needs to see it in plaintext, however homomorphic encryption aims to change that by bringing E2EE to serverside processing.
preview:

---

# Privacy-Enhancing Technologies Series: Homomorphic Encryption

We rely on lots of server-facing services in our day to day lives, whether it's using server-side AI like ChatGPT or querying search engines. It's just assumed that when we use services like this, those services need to process our data in the clear. But, with homomorphic encryption, data can be processed server-side while still remaining E2EE.

## Privacy Violations

We've surrendered much of our lives to the services we use everyday. From music and video streaming to searching, to using AI services. Even things we don't typically think of as online services like buying things at the store typically query a database.

### AOL Search Data Release

AOL thought it would be a great idea in 2006 to [release the searches](https://www.nytimes.com/2006/08/09/technology/a-face-is-exposed-for-aol-searcher-no-4417749.html) of over 650,000 users. It was "anonymized" by scrubbing the actual user's names and replacing them with numbers.

Simply using user No. 4417749's searches such as "homes sold in shadow lake subdivision gwinnett county georgia" and "60 single men", journalists at the New York Times were able to reidentify the user as Thelma Arnold, a 62-year-old widow who lives in Lilburn, Ga. They even went to her house to meet her.

Search engines keeping enough data to send someone straight to your house is *terrifying* needless to say, and that's just what they released *willingly*.

### Yahoo!

In 2013, the search engine Yahoo! experienced a [data breach](https://www.bbc.com/news/business-41493494) affecting "all 3 billion accounts". All those users risk reidentification just like what happened with the AOL users, except this time there was no attempt at anonymizing the users.

### Equifax

The credit bureau Equifax which handles sensitive data such as SSN's was [breached](https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement) in 2017, exposing extremely sensitive data of 147 million people. The company settled for $425 million in damages, but it's hard to put a number on the devastation of having your identity stolen. Stronger protections for sensitive financial data need to be put in place to avoid situations like this.

### MediSecure

In 2024, the [personal health information](https://medisecurenotification.wordpress.com) of "2.9 million Australians who used the MediSecure prescription delivery service during the approximate period of March 2019 to November 2023" was breached. The data included extremely sensitive health data such as

- full name
- title
- date of birth
- gender
- email address
- address
- phone number
- individual healthcare identifier (IHI)
- Medicare card number, including individual identifier, and expiry
- Pensioner Concession card number and expiry
- Commonwealth Seniors card number and expiry
- Healthcare Concession card number and expiry
- Department of Veterans’ Affairs (DVA) (Gold, White, Orange) card number and expiry
- prescription medication, including name of drug, strength, quantity and repeats
- reason for prescription and instructions

An absolutely devastating breach of user privacy by any metric.

### OpenAI

When services process our data in the clear, we not only run the risk of the service themselves abusing their access to that data, but also court orders legally requiring them to retain data.

OpenAI was required to [retain](https://arstechnica.com/tech-policy/2025/06/openai-says-court-forcing-it-to-save-all-chatgpt-logs-is-a-privacy-nightmare/) all ChatGPT user logs, even deleted ones. This is devastating for user privacy when you consider that ChatGPT handles over [1 billion](https://x.com/OpenAINewsroom/status/1864373399218475440) queries per day.

This is a clear violation of user privacy, and it happened out of the blue in a lawsuit that wasn't even related to user privacy. When companies have access to our data, it might not even be up to them how it's handled sometimes. This is why E2EE is so important: it's not only about trust but about making it so services *can't* access data even if they tried.

## Beginnings of Homomorphic Encryption

As is typical, the first mention of homomorphic encryption come from a paper from 1978 titled *[ON DATA BANKS AND PRIVACY HOMOMORPHISMS](https://people.csail.mit.edu/rivest/pubs/RAD78.pdf)*.

It's funny seeing the concerns of the time. A given example is a loan company that uses a time share (sharing a computer with others and having a limited time window to do your computing) with another company and how they have to choose between that and getting their own computer. With companies now moving more and more of their own infrastructure to cloud services provided by other companies, it seems we've come full circle.

One of the suggestions is to use modified hardware that can decrypt data for the CPU to process. The idea of using secure hardware to protect user data is currently in use through Confidential Computing and the use of secure enclaves in the CPU to separate out the data of different users.

The second solution they propose is a solution that doesn't require decryption of user data at all, which they call "privacy homomorphisms". The examles they give theoretically allow for addition, subtraction, multiplication, and division on encrypted data, although they state in the paper that many of them are likely not secure.

Notably, the schemes mentioned allow only for *either* addition and subtraction *or* multiplication and division, which means if you want to do both you need to decrypt the data. Since these schemes can only perform one type of operation or the other, they're considered *partially homomorphic*.

Despite the shaky security of these early schemes, they would lay the groundwork for the field in the field going forward.

## Fully Homomorphic Encryption

It wasn't until 2009 when the idea of homomorphic encryption would be improved on in *[A FULLY HOMOMORPHIC ENCRYPTION SCHEME](https://crypto.stanford.edu/craig/craig-thesis.pdf)* by Craig Gentry.

This paper introduced fully homomorphic encryption, which allows for *both* addition *and* multiplication, meaning it can now theoretically be used for any calculation.

The scheme relies on some injected "noise" when performing operations. When adding, the noise is increased, but when multiplying the noise is amplified quite a bit. The scheme relies on staying below a certain noise threshold so that the answer can be decrypted and still be accurate.

This limits how many operations can be done on the numbers before they become to noisy to use.

However, it's possible to "bootstrap" after it gets too noisy, resetting the noise to below the threshold. This gives this scheme the ability to do as many operations as you want since you can just keep resetting the noise.

It's based around ideal lattices because they have some useful properties allowing for more efficient key generation and algabraic operations. Because it's based on lattices, it's considered quantum resistant as well (there's no known efficient algorithm to solve lattice problems).

Unfortunately these early homomorphic encryption schemes weren't very performant, taking up to [30 minutes per bootstrapping operation](https://eprint.iacr.org/2010/520). Obviously, this is not ideal and prevents the scheme from being used for any real world tasks.

## Second Generation FHE

Several papers would chip away at the inefficiencies of Gentry's original scheme, finding ways of improving it over the next few years. They found a way to manage noise better

Still, even with all of these improvements, the second generation fully-homomorphic schemes would still rely on bootstrapping a partially-homomorphic scheme.

[Researchers](https://eprint.iacr.org/2011/344.pdf) were able to achieve fully homomorphic encryption using arbitrary lattices instead of ideal lattices using a new relinearization technique. They were also able to remove the *squashing* step, improving efficiency and reducing the amount of assumptions that have to be made.

A later [paper](https://eprint.iacr.org/2011/277.pdf) introduced *leveled* homomorphic encryption, allowing for evaluating problems of any length. It introduced modulus switching as an improved noise reduction technique. It also  used bootstrapping as an optimization instead of being required to achieve fully homomorphic encryption. They also introduced *batching*, where they incorporate multiple plaintexts into one ciphertext, allowing them to evaluate multiple inputs with the same efficiency as evaluating one.

## Third Generation FHE

A [paper](https://eprint.iacr.org/2013/340.pdf) in 2013 removed the need for relinearization, significantly improving the efficiency and reducing the complexity of FHE. They also removed the need for modulus switching for noise management, improving efficiency even further. They were also able to eliminate the need for "evaluator" keys, which previously needed to be obtained from the user. Now the evaluator can perform operations without needing any keys from the user.

By 2014 [researchers](https://eprint.iacr.org/2014/816.pdf) had figured out how to reduce the bootstrapping procedure down to less than a second on an average PC of the day, compared to about six minutes on previous schemes.

## Fourth Generation FHE

An [advancement](https://eprint.iacr.org/2016/421.pdf) in 2016 allowed for efficient approximate operations, similar to how floating point operations always have an error. The noise added for security is considered to be part of error correction, which is reduced by a new technique called *rescaling*. They also improved efficiency by introducing a new batching technique.

## FHE Today

Fully-homomorphic encryption has advanced enough that it's become practical to use for some limited applications. Many big tech companies have released their own open source implementations of FHE and work is ongoing on making FHE more efficient and making development of FHE software easier.

### Apple

Apple is making use of [FHE](https://machinelearning.apple.com/research/homomorphic-encryption) mainly for privately looking up info on a server.



## Looking Toward the Future of FHE

Lots of companies are working toward [standardizing](https://www.iso.org/standard/87638.html) and accelerating the adoption of FHE.

### HomomorphicEncryption.org

[HomomorphicEncryption.org](https://homomorphicencryption.org/standard/) represents a collaboration between government agencies, industry leaders, and academics. It's the biggest effort toward establishing a standard for FHE and while that hasn't happened yet, it's on the horizon.

Open, standardized, and battle-tested FHE is fast approaching.

### FHE Hardware

One of the main bottlenecks for adoption of FHE is the extra computation cost. 

In an effort to address this issue, DARPA introduced their [Data Protection in Virtual Environments (DPRIVE) program](https://www.darpa.mil/news/2021/homomorphic-encryption), working directly with four companies: Duality Technologies, Galois, SRI International, and Intel Federal. The end goal? To create hardware accelerators that can bring the speed closer to what the computations would be in plaintext.

Similar to [hardware-accelerated AES](https://www.ti.com/lit/ug/slau458f/slau458f.pdf?ts=1753712760177&ref_url=https%253A%252F%252Fduckduckgo.com%252F) we have in chips nowadays, these hardware accelerators could enable FHE at speeds fast enough to be practical for most everyday computations.

#### BASALISC

Galois's Bespoke Asynchronous Silicon-Accelerated LWE Intrinsics through Software/Hardware Codesign (BASALISC) is their attempt at creating a FHE [ASIC](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit). Galois estimates it can speed up FHE by around 10,000 times

#### HERACLES

Intel's [HERACLES](https://community.intel.com/t5/Blogs/Tech-Innovation/Data-Center/Intel-Labs-Continues-Focused-Research-and-Standards-Efforts-to/post/1488532) is their own attempt at a FHE accelerator.

Intel also released an [SDK](https://github.com/IntelLabs/encrypted-computing-sdk) to allow developers to easily develop FHE solutions for different architectures, with hopes to eventually integrate with Google's [HEIR](https://heir.dev) compiler.

They also developed a [FHE library](https://www.intel.com/content/www/us/en/developer/articles/technical/homomorphic-encryption/accelerating-homomorphic-encryption-for-fpga.html) for Field-Programmable Gate Arrays (FPGAs), essentially a circuit that can have its logic reprogrammed after manufacturing. While not offering the same efficiency as dedicated hardware, they could act as a stopgap while ASICs and hardware accelerators for FHE are finialized.

## Final Thoughts

FHE has come a long way in such a short time, it's really only been about 16 years since the first FHE scheme was proposed and we're already seeing a huge push from the government, big tech companies, and academia, as well as a massive push for openness and collaboration from everyone involved. It's truly a great thing to see and definitely something I'd like to see more of.

The future for data privacy looks bright, but it still depends on widespread adoption, not just by the biggest companies but by everyone. I'll continue to be an advocate for mass adoption of PETs across the board and technical solutions to privacy that don't rely on legislation or privacy policy promises. We need to take a multi-pronged approach to privacy, not just relying on data privacy laws but also cryptography and mathematical rigor to protect our data.
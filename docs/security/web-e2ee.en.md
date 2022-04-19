---
title: "E2EE in Web Applications"
---
[E2EE](https://en.wikipedia.org/wiki/End-to-end_encryption) (End to End Encryption) mathematically ensures the security of exchanged data in transit (common security properties include integrity, authenticity, confidentiality, deniability, and forward secrecy). The most common method of what people perceive as E2EE is done between users' web browsers and websites (e.g. [`https://google.com`](https://google.com)) using [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Although, the definition of E2EE is loosely defined and varies definitions, prompting [a research paper by cryptographers questioning the "end"ness](https://eprint.iacr.org/2022/449).

Web applications (a type of client) are continuously served from servers, composed of HTML, CSS, and JS to provide structure, styles, and interactivity to the web.

## Problematic Design Limitations

[Nadim Kobeissi](https://en.wikipedia.org/wiki/Nadim_Kobeissi) released [An Analysis of the ProtonMail Cryptographic Architecture](https://eprint.iacr.org/2018/1121) paper, covering ProtonMail specifically. However, the same principles can be applied to other web applications (e.g. Tutanota, BitWarden, Threema, etc.) which attempt to provide E2EE through web browsers.

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/DM1tPmxGY7Y"
  title="Why E2EE on the web is Flawed"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

[LiveOverflow](https://www.youtube.com/c/LiveOverflow) explained Nadim's paper, and why the scope of the E2EE bypassing mechanism isn't arbitrarily chosen.

### Servers Must be Trusted

Malicious web applications can be delivered by the service providers' server(s) unbeknownst to most, if not all (targeted) users. Their server(s) have complete control over the client. Even if the service providers are trustworthy and don't abuse this design flaw, if adversaries gain access to their servers, they can swap out a trustworthy client for a malicious client.

### Plausible Deniability

Communities are at a severe disadvantage over service providers (e.g. Bitwarden Inc.) because no one can *easily* prove the validity of users' claims regarding the intent of web applications they were served, *especially* when it is ephemerally served to targeted individuals. And that's if users are aware of malicious code extracting their confidential information (e.g. passwords, TOTP secrets, credit card information, etc.).

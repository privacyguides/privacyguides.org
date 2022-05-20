---
title: "Threat Modeling"
icon: 'material/eye-outline'
---

## Threat Models

==A threat model is a list of the most probable threats to your security/privacy endeavors.== Since it's impossible to protect yourself against **every** attack(er), you should focus on the **most probable** threats. In computer security, a threat is a potential event that could undermine your efforts to stay private and secure.

By focusing on the threats that matter to you, this narrows down your thinking about the protection you need, so you can choose the tools that are right for the job.


## Defining a threat

To make a threat model, we must first define a threat. A common mistake made by people who are just getting into the privacy space is to define the threat as "big-tech companies". There is a fundamental problem with this definition:

Why are we not trusting "big-tech companies", but then shift our trust to "small-tech companies"? What happens if those "small-tech companies" turn out to be malicious? What happens when our favorite "small-tech company" becomes successful and grow exponentially? The proper way to define the threat here is the "service provider", not "big-tech".

Broadly speaking, there are four primary threats concerning an average user. You may be concerned with one, a few, or all of these possibilities, and the tools and services you use depends on what your goals are. You may also have specific threats outside of these categories as well, which is perfectly fine! The important part is developing an understanding of the benefits and shortfallings of the tools you choose to use, because virtually none of them will protect you from every threat imaginable.

- <span class="pg-red">:material-target-account: Targeted Attacks</span> - An adversary specifically targetting a user to steal their data or persistently spy on them.
- <span class="pg-orange">:material-bug-outline: Mass Malware Attacks</span> - An adversary spreading malware to the masses, turning infected devices to part of a botnet or stealing user data at scale.
- <span class="pg-teal">:material-server-network: Service Providers</span> - Service providers spying on users using data submitted to their platforms
- <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> -  Websites and services working together to track the user across the internet.

Some of these threats may weigh more than others. For example, a software developer might have targetted attacks as their primary threat, but beyond that they would also want privacy from the websites they visit and so on. Likewise, an average Joe may have mass surveillance programs and service provider data access as their primary threat, but beyond that they also need to have decent security to prevent malware from stealing their data.

## Anonymity vs Privacy

<span class="pg-purple" title="Protects your activities from being tied to your real-life identity">:fontawesome-solid-user-secret: Anonymity</span>

Anonymity is often confused for privacy, but it's a distinct concept. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real-life identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model requiring total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by hackers or governments, but also hiding who they are entirely. They will sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, as their lives could depend on it. Most regular people do not need to go so far.

## Privacy From Service Providers

<span class="pg-teal" title="Protects your data from being readable by your service provider">:material-server-network: Service Providers</span> ·

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this model is that the service provider, the server operator, or a hacker who has compromised the server can look into your "private" conversations whenever and however they want to do it, without you ever knowing. Privacy policies are not to be trusted, as they are nothing more than a pinky promise that you cannot verify. This applies to common services like Discord, non "Secret Chat" on Telegram, SMS messages, and so on.

Thankfully, we could use end to end encryption to eliviate this issue. In a typical end to end encrypted setup, both users will generate a pair of asymetric encryption keys - a public and private key. One person can encrypt a message using the other user's public key, and

## Security and Privacy

<span class="pg-red" title="Protects you from malicious agents targeting you specifically">:material-target-account: Targeted Attacks</span> ·
<span class="pg-orange" title="Protects you from malware and other untargeted attacks">:material-bug-outline: Untargeted Attacks</span>

## Mass Surveillance Programs

<span class="pg-blue" title="Protects you from mass surveillance programs">:material-eye-outline: Mass Surveillance</span> ·

## Limiting Public Information

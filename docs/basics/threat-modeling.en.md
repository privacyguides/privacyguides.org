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

- <span class="pg-teal">:material-server-network: Service Providers</span> - Service providers spying on users using data submitted to their platforms
- <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> -  Websites and services working together to track the user across the internet.
- <span class="pg-orange">:material-bug-outline: Mass Malware Attacks</span> - An adversary spreading malware to the masses, turning infected devices to part of a botnet or stealing user data at scale.
- <span class="pg-red">:material-target-account: Targeted Attacks</span> - An adversary specifically targetting a user to steal their data or persistently spy on them.

Some of these threats may weigh more than others. For example, a software developer might have targetted attacks as their primary threat, but beyond that they would also want privacy from the websites they visit and so on. Likewise, an average Joe may have mass surveillance programs and service provider data access as their primary threat, but beyond that they also need to have decent security to prevent malware from stealing their data.

## Anonymity vs Privacy

<span class="pg-purple" title="Protects your activities from being tied to your real-life identity">:fontawesome-solid-user-secret: Anonymity</span>

Anonymity is often confused for privacy, but it's a distinct concept. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real-life identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model requiring total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by hackers or governments, but also hiding who they are entirely. They will sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, as their lives could depend on it. Most regular people do not need to go so far.

## Privacy From Service Providers

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this model is that the service provider, the server operator, or a hacker who has compromised the server can look into your "private" conversations whenever and however they want to do it, without you ever knowing. Privacy policies are not to be trusted, as they are nothing more than a pinky promise that you cannot verify. This applies to common services like Discord, non "Secret Chat" on Telegram, SMS messages, and so on.

Thankfully, we could use end to end encryption to eliviate this issue. In a typical end to end encrypted setup, both users will generate a pair of asymetric encryption keys - a public and private key. One person can encrypt a message using the other user's public key, and the user on the recieving end can decrypt the message using their private key. The confidentiality of their messages are guaranteed by math, so long as the service provider does not have access to the user's private key.

In practice, the effectiveness of different end to end encryption implementations varies. Applications such as Signal, Briar, Sessions run natively on the user's system, and every copy of of the application is the same across different installations. If the service provider was to backdoor their applications, such backdoor could be detected later on using reverse engineering, and there will be no plausible deniability for the service provider. On the other hand, web based end to end encryption implementation such as ProtonMail web client, Bitwarden web vault, etc rely on the server dynamically serving javascript code to the browser to handle cryptographic operations. A malicious server could target a specific user and send them malicious javascript code to steal their encryption key and it would be extremely hard for the user to ever notice such a thing. Even if the user do notice the attempt to steal their key, it would be incredibly hard to prove that it is the provider trying to do so, because the server can choose to serve different web clients to different users. As such, to protect the confidentiality of your data from the service provider, use an end to end encryption implementation that does **not** rely on web clients.

Another avenue in which the provider can still profile the user is using the metadata, which is not typically protected. While the service provider, with end to end encryption, cannot see what the user are saying, they can still observe who the user is talking to, how often they talk to said person, what time they usually have a conversation, and so on. Protection of metadata is extremely problematic, and the if your threat model calls for protection of such information, pay close attention to the technical documemtation of the software you are using to see if there is any metadata reduction or protection at all.

## Mass Surveillance

Mass surveillance is typically service providers working together, sharing user data among each other and even possibly the government. Such data can be used to figure out what the user is doing across the internet. 

In order to solve this problem, the user needs segregation of their online identities, to blend in with other users, and to not give out their real information as much as possible.

Here are the most common avenues in which the user can be tracked and their potential solution:

- IP based tracking: This can be solved by using a VPN or Tor. Both solutions will help you blend in with other users using the same VPN provider or Tor network, and thus making IP based tracking useless. Do note that when you use a VPN provider, you are only protected from service providers other than the VPN providers from tracking you, as a VPN provider can see which sites you are visiting.

- Cross site cookie based tracking: Most modern browsers have an option to block third party cookies which will thrwat this threat. All you need to do is enable it.

- Persistent tracking using cookies and site data: Clearing your cookies and site data upon exiting the browser will prevent this type of tracking.

- Cross site tracking using user submitted data: Use email aliases, secondary phone numbers, and lie about your real information (name, birthday, "security" questions) whenever possible. If you have already submitted your real information to various different sites, employ disinformation and submitted various fake information related to the same online identity and make your real information indistinguishable from the fake one. 

- Tracking using payment method: Use virtual cards (preferably from your bank if they support it), prepaid cards, giftcards, cryptocurrencies, etc.

Instead of relying on privacy policies (which are practically pinky promises that could be violated), try to obfuscate your information in such a way that it is very difficult for different providers to correlate data with each other and build a profile on you.

## Mass Malware attacks
Unfortunately, the reality is that we generally do not know if a certain piece of software that we use is malicious or would one day turn malicious or not. Even if assume the developers to be trustworthy, there is generally no guarantee that their software does not have a serious vulnerability that can be exploited.

To minimize the potential damage that a malicious piece of software can do, employ security by compartmentalization. This could come in the form of using different computers for different jobs, using virtual machines groups of related applications, or use a secure operating system with an strong focus on application sandboxing and mandatory access control.



## Privacy Theatre

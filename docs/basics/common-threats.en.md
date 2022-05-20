---
title: "Common Threats"
icon: 'material/eye-outline'
---

Broadly speaking, we categorize our recommendations into seven categories of threats or goals that apply to most people. You may be concerned with one, a few, or all of these possibilities, and the tools and services you use depends on what your goals are. You may also have specific threats outside of these categories as well, which is perfectly fine! The important part is developing an understanding of the benefits and shortfallings of the tools you choose to use, because virtually none of them will protect you from every threat imaginable.

- <span class="pg-purple" title="Protects your activities from being tied to your real-life identity">:fontawesome-solid-user-secret: Anonymity</span> - Tools that provide anonymity allow you to completely shield your online activity from your real-life identity, protecting you from people who are trying to uncover your identity specifically.
- <span class="pg-red" title="Protects you from malicious agents targeting you specifically">:material-target-account: Targeted Attacks</span> - Using tools which protect you from dedicated hackers or other malicious agents trying to gain access to *your* data or devices specifically.
- <span class="pg-orange" title="Protects you from malware and other passive attacks">:material-bug-outline: Passive Attacks</span> - Using tools which protect you from things like malware, data breaches, and other attacks that are made against many people at once.
- <span class="pg-teal" title="Protects your data from being readable by your service provider">:material-server-network: Service Providers</span> - Using tools which protect your data from service providers, e.g. with end-to-end encryption rendering your data unreadable to the server.
- <span class="pg-blue" title="Protects you from mass surveillance programs">:material-eye-outline: Mass Surveillance</span> - Using tools that protect you from government agencies, organizations, websites, and services working together to track your activities.
- <span class="pg-brown" title="Protects you from big tech companies and advertising network tracking">:material-advertisements: AdTech Tracking</span> - Related to both service providers and mass surveillance programs, you may wish to use tools which protect you from Big Tech companies or Advertising Networks specifically, although non-commercial/governmental surveillance programs can still be more pervasive.
- <span class="pg-green" title="Protects your data from being publicly accessible">:material-account-search: Public Exposure</span> - Limiting the information about you online that is accessible to search engines or the general public.

Some of these threats may weigh more than others. For example, a software developer might have a hacker as their primary threat, but beyond that they would also want privacy from the websites they visit and so on. Likewise, an average Joe may have mass surveillance programs and service provider data access as their primary threat, but beyond that they also need to have decent security to prevent malware from stealing their data.

## Anonymity vs Privacy

<span class="pg-purple" title="Protects your activities from being tied to your real-life identity">:fontawesome-solid-user-secret: Anonymity</span>

Anonymity is often confused for privacy, but it's a distinct concept. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real-life identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model requiring total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by hackers or governments, but also hiding who they are entirely. They will sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, as their lives could depend on it. Most regular people do not need to go so far.

## Privacy From Service Providers

<span class="pg-teal" title="Protects your data from being readable by your service provider">:material-server-network: Service Providers</span> ·
<span class="pg-brown" title="Protects you from big tech companies and advertising network tracking">:material-advertisements: AdTech Tracking</span>

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this model is that the service provider, the server operator, or a hacker who has compromised the server can look into your "private" conversations whenever and however they want to do it, without you ever knowing. Privacy policies are not to be trusted, as they are nothing more than a pinky promise that you cannot verify. This applies to common services like Discord, non "Secret Chat" on Telegram, SMS messages, and so on.

Thankfully, we could use end to end encryption to eliviate this issue. In a typical end to end encrypted setup, both users will generate a pair of asymetric encryption keys - a public and private key. One person can encrypt a message using the other user's public key, and the user on the recieving end can decrypt the message using their private key. The confidentiality of their messages are guaranteed by math, so long as the service provider does not have access to the user's private key.

In practice, the effectiveness of different end to end encryption implementations varies. Applications such as Signal, Briar, Sessions run natively on the user's system, and every copy of of the application is the same across different installations. If the service provider was to backdoor their applications, such backdoor could be detected later on using reverse engineering, and there will be no plausible deniability for the service provider. On the other hand, web based end to end encryption implementation such as ProtonMail web client, Bitwarden web vault, etc rely on the server dynamically serving javascript code to the browser to handle cryptographic operations. A malicious server could target a specific user and send them malicious javascript code to steal their encryption key and it would be extremely hard for the user to ever notice such a thing. Even if the user do notice the attempt to steal their key, it would be incredibly hard to prove that it is the provider trying to do so, because the server can choose to serve different web clients to different users. As such, to protect the confidentiality of your data from the service provider, use an end to end encryption implementation that does **not** rely on web clients.

Another avenue in which the provider can still profile the user is using the metadata, which is not typically protected. While the service provider, with end to end encryption, cannot see what the user are saying, they can still observe who the user is talking to, how often they talk to said person, what time they usually have a conversation, and so on. Protection of metadata is extremely problematic, and the if your threat model calls for protection of such information, pay close attention to the technical documentation of the software you are using to see if there is any metadata reduction or protection at all.

## Security and Privacy

<span class="pg-red" title="Protects you from malicious agents targeting you specifically">:material-target-account: Targeted Attacks</span> ·
<span class="pg-orange" title="Protects you from malware and other passive attacks">:material-bug-outline: Passive Attacks</span>

Unfortunately, the reality is that we generally do not know if a certain piece of software that we use is malicious or would one day turn malicious or not. Even if assume the developers to be trustworthy, there is generally no guarantee that their software does not have a serious vulnerability that can be exploited.

To minimize the potential damage that a malicious piece of software can do, employ security by compartmentalization. This could come in the form of using different computers for different jobs, using virtual machines groups of related applications, or use a secure operating system with an strong focus on application sandboxing and mandatory access control.

    - Mobile operating systems are generally safer than desktop operating systems when it comes to application sandboxing. On iOS and Android, apps practically cannot access things you do not grant them access to, and a user installed app cannot elevate its permission to use admin/root permission.
    - With desktop operating systems, ChromeOS has the best application sandbox, followed by macOS. On ChromeOS, apps are strictly confined as if they were on Android (except Linux applications which are not isolated from each other inside of the same Crostini container). On macOS, the application is opt-in, however, even apps not using the sandbox still have to play by the rules of the permission system. The downside with these operating systems is that they do collect your hardware ID, and often force you to sign in with an online account (in the case of ChromeOS) or coerece you into doing so (in the case of macOS). Linux on the other hand, has poor protection again malicious or vulnerable application, however, they do tend to respect your wish to not submit any information to the operating system vendor. Some of Linux's deficiencies can be eliviated by using a specialized distribution like QubesOS, which is technically a Xen hypverisor made up of multiple Linux virtual machines, with each virtual machine running a group of related applications.

When doing threat modeling, you typically have to balance between protection against malware and freedom from mass surveillance with desktop operating systems. For most average users, a phone with a privacy and security Android distribution such as GrapheneOS and laptop with macOS with iCloud disabled would strike a reasonable balance.

Targeted attacks against a specific user is the most problematic one to deal with. The common attack avenues include sending malicious documents via emails, exploiting vulnerabilities in the browser and operating systems, and physical attacks. There are a couple of strategy the user could employ to protect themselves against such attacks:

    - Browser: The browser is a very hostile environment, as it is constantly executing untrusted code from different parties as you browse the web. To protect yourself against a browser exploit, use different virtual machines for different browsing purposes and do not use the browser directly on the host system. Disposable virtual machines on QubesOS and Microsoft Defender Application Guard on Windows provide you with a convenient method of doing so.
    - Email client: The email client is another dangerous application to run, as an adversary can send malicious files to your address and the it will automatically download them to your computer. We highly recommended that you use a dedicated virtual machine for your email client, and if you are not using an email provider with zero access encryption or PGP, just use their webmail client.
    - Office applications: Office applications are often targetted for various attacks, including malicious macros to exploits of vulnerabilities in the application's parser. Thus, it is highly recommended that you run your office applications inside of a virtual machine to open and edit your documents. Disposable virtual machines on QubesOS and Microsoft Defender Application Guard with Microsoft Office on Windows provide you with a convenient method of doing so.
    - Physical attacks: Use an operating system with verified boot implemented such as Android, iOS, macOS, and ChromeOS. Ideally, you should also make sure that your drive is encrypted, and that the operating system uses the TPM or Secure Element for rate limiting attempts to enter the encryption passphrase. If you have to share your computer with another user, ChromeOS is the only viable option for desktop, as it implements per user encryption keys. Set firmware passwords on your computer, and try not to leave your devices unattended.

## Mass Surveillance Programs

<span class="pg-blue" title="Protects you from mass surveillance programs">:material-eye-outline: Mass Surveillance</span> ·
<span class="pg-brown" title="Protects you from big tech companies and advertising network tracking">:material-advertisements: AdTech Tracking</span>

Mass surveillance is typically service providers working together, sharing user data among each other and even possibly the government. Such data can be used to figure out what the user is doing across the internet.

In order to solve this problem, the user needs segregation of their online identities, to blend in with other users, and to not give out their real information as much as possible.

Here are the most common avenues in which the user can be tracked and their potential solution:

    - IP based tracking: This can be solved by using a VPN or Tor. Both solutions will help you blend in with other users using the same VPN provider or Tor network, and thus making IP based tracking useless. Do note that when you use a VPN provider, you are only protected from service providers other than the VPN providers from tracking you, as a VPN provider can see which sites you are visiting.
    - Cross site cookie based tracking: Most modern browsers have an option to block third party cookies which will thrwat this threat. All you need to do is enable it.
    - Persistent tracking using cookies and site data: Clearing your cookies and site data upon exiting the browser will prevent this type of tracking.
    - Cross site tracking using user submitted data: Use email aliases, secondary phone numbers, and lie about your real information (name, birthday, "security" questions) whenever possible. If you have already submitted your real information to various different sites, employ disinformation and submitted various fake information related to the same online identity and make your real information indistinguishable from the fake one.
    - Cross site tracking using browser fingerprint: Use browsers with fingerprinting resistance such as Tor, Brave, or Firefox with Arkenfox.
    - Tracking using payment method: Use virtual cards (preferably from your bank if they support it), prepaid cards, giftcards, cryptocurrencies, etc.

Instead of relying on privacy policies (which are promises that could be violated), try to obfuscate your information in such a way that it is very difficult for different providers to correlate data with each other and build a profile on you.

## Limiting Public Information

<span class="pg-green" title="Protects your data from being publicly accessible">:material-account-search: Public Exposure</span>

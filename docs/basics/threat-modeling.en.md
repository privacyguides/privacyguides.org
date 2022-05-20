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

### Anonymity vs Privacy

Anonymity is often confused for privacy, but it's a distinct concept. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real-life identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model requiring total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by hackers or governments, but also hiding who they are entirely. They will sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, as their lives could depend on it. Most regular people do not need to go so far.

### Privacy From Service Providers

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this model is that the service provider, the server operator, or a hacker who has compromised the server can look into your "private" conversations whenever and however they want to do it, without you ever knowing. Privacy policies are not to be trusted, as they are nothing more than a pinky promise that you cannot verify. This applies to common services like Discord, non "Secret Chat" on Telegram, SMS messages, and so on.

Thankfully, we could use end to end encryption to eliviate this issue. In a typical end to end encrypted setup, both users will generate a pair of asymetric encryption keys - a public and private key. One person can encrypt a message using the other user's public key, and the user on the recieving end can decrypt the message using their private key. The confidentiality of their messages are guaranteed by math, so long as the service provider does not have access to the user's private key.

In practice, the effectiveness of different end to end encryption implementations varies. Applications such as Signal, Briar, Sessions run natively on the user's system, and every copy of of the application is the same across different installations. If the service provider was to backdoor their applications, such backdoor could be detected later on using reverse engineering, and there will be no plausible deniability for the service provider. On the other hand, web based end to end encryption implementation such as ProtonMail web client, Bitwarden web vault, etc rely on the server dynamically serving javascript code to the browser to handle cryptographic operations. A malicious server could target a specific user and send them malicious javascript code to steal their encryption key and it would be extremely hard for the user to ever notice such a thing. Even if the user do notice the attempt to steal their key, it would be incredibly hard to prove that it is the provider trying to do so, because the server can choose to serve different web clients to different users. As such, to protect the confidentiality of your data from the service provider, use an end to end encryption implementation that does **not** rely on web clients.

Another avenue in which the provider can still profile the user is using the metadata, which is not typically protected. While the service provider, with end to end encryption, cannot see what the user are saying, they can still observe who the user is talking to, how often they talk to said person, what time they usually have a conversation, and so on. Protection of metadata is extremely problematic, and the if your threat model calls for protection of such information, pay close attention to the technical documemtation of the software you are using to see if there is any metadata reduction or protection at all.

### Mass Surveillance

Mass surveillance is typically service providers working together, sharing user data among each other and even possibly the government. Such data can be used to figure out what the user is doing across the internet. 

In order to solve this problem, the user needs segregation of their online identities, to blend in with other users, and to not give out their real information as much as possible.

Here are the most common avenues in which the user can be tracked and their potential solution:

* IP based tracking: This can be solved by using a VPN or Tor. Both solutions will help you blend in with other users using the same VPN provider or Tor network, and thus making IP based tracking useless. Do note that when you use a VPN provider, you are only protected from service providers other than the VPN providers from tracking you, as a VPN provider can see which sites you are visiting.

* Cross site cookie based tracking: Most modern browsers have an option to block third party cookies which will thrwat this threat. All you need to do is enable it.

* Persistent tracking using cookies and site data: Clearing your cookies and site data upon exiting the browser will prevent this type of tracking.

* Cross site tracking using user submitted data: Use email aliases, secondary phone numbers, and lie about your real information (name, birthday, "security" questions) whenever possible. If you have already submitted your real information to various different sites, employ disinformation and submitted various fake information related to the same online identity and make your real information indistinguishable from the fake one. 

* Cross site tracking using browser fingerprint: Use browsers with fingerprinting resistance such as Tor, Brave, or Firefox with Arkenfox.

* Tracking using payment method: Use virtual cards (preferably from your bank if they support it), prepaid cards, giftcards, cryptocurrencies, etc.

Instead of relying on privacy policies (which are promises that could be violated), try to obfuscate your information in such a way that it is very difficult for different providers to correlate data with each other and build a profile on you.

### Mass Malware Attacks
Unfortunately, the reality is that we generally do not know if a certain piece of software that we use is malicious or would one day turn malicious or not. Even if assume the developers to be trustworthy, there is generally no guarantee that their software does not have a serious vulnerability that can be exploited.

To minimize the potential damage that a malicious piece of software can do, employ security by compartmentalization. This could come in the form of using different computers for different jobs, using virtual machines groups of related applications, or use a secure operating system with an strong focus on application sandboxing and mandatory access control.

Mobile operating systems are generally safer than desktop operating systems when it comes to application sandboxing. On iOS and Android, apps practically cannot access things you do not grant them access to, and a user installed app cannot elevate its permission to use admin/root permission.

With desktop operating systems, ChromeOS has the best application sandbox, followed by macOS. On ChromeOS, apps are strictly confined as if they were on Android (except Linux applications which are not isolated from each other inside of the same Crostini container). On macOS, the application is opt-in, however, even apps not using the sandbox still have to play by the rules of the permission system. The downside with these operating systems is that they do collect your hardware ID, and often force you to sign in with an online account (in the case of ChromeOS) or coerece you into doing so (in the case of macOS). Linux on the other hand, has poor protection again malicious or vulnerable application, however, they do tend to respect your wish to not submit any information to the operating system vendor. Some of Linux's deficiencies can be elivated by using a specialized distribution like QubesOS, which is technically a Xen hypverisor made up of multiple Linux virtual machines, with each virtual machine running a group of related applications.

When doing threat modeling, you typically have to balance between protection against malware and freedom from mass surveillance with desktop operating systems. For most average users, a phone with a privacy and security Android distribution such as GrapheneOS and laptop with macOS with iCloud disabled would strike a reasonable balance.

### Targeted Attacks
Targeted attacks against a specific user is the most problematic one to deal with. The common attack avenues include sending malicious documents via emails, exploiting vulnerabilities in the browser and operating systems, and physical attacks. There are a couple of strategy the user could employ to protect themselves against such attacks:

* Browser: The browser is a very hostile environment, as it is constantly executing untrusted code from different parties as you browse the web. To protect yourself against a browser exploit, use different virtual machines for different browsing purposes and do not use the browser directly on the host system. Disposable virtual machines on QubesOS and Microsoft Defender Application Guard on Windows provide you with a convenient method of doing so.

* Email client: The email client is another dangerous application to run, as an adversary can send malicious files to your address and the it will automatically download them to your computer. We highly recommended that you use a dedicated virtual machine for your email client, and if you are not using an email provider with zero access encryption or PGP, just use their webmail client.

* Office applications: Office applications are often targetted for various attacks, including malicious macros to exploits of vulnerabilities in the application's parser. Thus, it is highly recommended that you run your office applications inside of a virtual machine to open and edit your documents. Disposable virtual machines on QubesOS and Microsoft Defender Application Guard with Microsoft Office on Windows provide you with a convenient method of doing so.

* Physical attacks: Use an operating system with verified boot implemented such as Android, iOS, macOS, and ChromeOS. Ideally, you should also make sure that your drive is encrypted, and that the operating system uses the TPM or Secure Element for rate limiting attempts to enter the encryption passphrase. If you have to share your computer with another user, ChromeOS is the only viable option for desktop, as it implements per user encryption keys. Set firmware passwords on your computer, and try not to leave your devices unattended.

## Privacy Theatre
As a beginner, it is very easy to fall into the trap of implementing solutions that don't actually do anything much for privacy and getting a false sense of security. Sometimes, this might even lead the user into doing things that are harmful for their actual privacy and security. Here are some common privacy theatre that you should be aware of:

* Anti Big-Tech mentality: As explained at the beginning of this page, big companies are not inherently bad, and small companies are not inherently good. Corporations are amoral entities, and sometimes their business interest align with the interest of the users, sometimes they do not. It is vital that you analyze their products and services on a case by case basis, and if there is something you do not like, try to define the root cause of the problem before looking for an alternative. For example, you may not like Google Drive because Google themselves have access to all of your files. The problem here is the lack of encryption, and thus you should be using something like Cryptomator to encrypt your files before uploading them to Google Drive, or use a provider that offers end to end encryption like ProtonDrive. Blindly switching from Google Drive to a random Nextcloud host without end to end encryption does not help. Likewise, you may not like Facebook for profiling your pictures or posts that you post publicly. The only viable solution to this problem is to stop posting your thoughts and photos publicly on the internet, rather than switching to the Fediverse and start doing the same thing all over again. Bare in mind that if you define the threat as "the service provider" and "third party providers" and take proper precautions, all "Big-Tech" or "Ad-Tech" related threats are also thwarted, since they are only a subset of what you are protected against.

* Badness enumeration: Solutions which make a list of bad actors and then trying to block them is called badness enumeration. These come in the form of antiviruses, DNS blackholes, host egress firewalls, and so on. The obvious problem with these approach is that if an adversary is not on the known bad actor list, they are not going to be stopped, and these adversaries will try to change their name, IPs, domains, signatures, etc as time goes on. Thus, solutions that rely upon badness enumeration **cannot** be relied on for true privacy and security. Sometimes, they serve as a convenience feature where no harm is done, such as a DNS blackhole implemented on a server by the VPN provider. Other times, they are directly harmful to your privacy or security, such as a third party antivirus program being yet-another-privileged-application with access to all of your sensitive files while providing no systematic solution to the malware problem. Always be skeptical of these solutions, and avoid implementing them if it means sacrificing your privacy or security.

* Open source = privacy & security: There is a common myth among privacy communities that open source software is inherently more private or secure than proprietary software. In reality, whether a piece of software is private or secure is not related to its source model. When using open source software, you are still placing trust in whoever compiles the package for you, as they could simply compile it from an entirely different version from the code that is released publicly. Even if you were to compile the code yourself or verify that the compiled version matches the source with reproducible builds, someone still needs to audit the source code of the program, libraries being used, and the toolchain used to compile that piece of software. On top of that, even if we were to assume that nothing is malicious, sometimes the design of the the open source solution lacks security properties that its open source counterpart has. Traditional Linux desktop not having a full system permission control for apps, verified boot, or system intergrity protection when compared to macOS is an example. Do not blindly trust a piece of software because it is open source, but try to understand what privacy and security feature it brings to the table and how it stands compared to the alternatives. To be clear here, software freedom is a very important ethical issue when it comes to software development and usage, however, it is orthogonal to the privacy and security discussion and you should not be conflating the two.
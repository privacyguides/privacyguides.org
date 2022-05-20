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

<span class="pg-purple" title="Protects your activities from being tied to your real-life identity">:fontawesome-solid-user-secret: Anonymity</span>

Anonymity is often confused for privacy, but it's a distinct concept. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real-life identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model requiring total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by hackers or governments, but also hiding who they are entirely. They will sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, as their lives could depend on it. Most regular people do not need to go so far.

### Privacy From Service Providers

<span class="pg-teal" title="Protects your data from being readable by your service provider">:material-server-network: Service Providers</span>

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this is that the service provider (or a hacker who has compromised the server) can look into your "private" conversations whenever and however they want to do it, without you ever knowing. This applies to many common services like Discord, Telegram, SMS messages, and so on.

Thankfully, end-to-end encryption can alleviate this issue by encrypting communications between parties before they are even sent to the server. The confidentiality of their messages are guaranteed, so long as the service provider does not have access to the user's private key.

??? note "Note on web-based encryption"

    In practice, the effectiveness of different end-to-end encryption implementations varies. Applications such as Signal run natively on the user's system, and every copy of of the application is the same across different installations. If the service provider was to backdoor their applications to try and steal your private keys, that could be detected later using reverse engineering. 

    On the other hand, web based end-to-end encryption implementations such as ProtonMail's webmail or Bitwarden's web vault rely on the server dynamically serving Javascript code to the browser to handle cryptographic operations. A malicious server could target a specific user and send them malicious Javascript code to steal their encryption key, and it would be extremely hard for the user to ever notice such a thing. Even if the user does notice the attempt to steal their key, it would be incredibly hard to prove that it is the provider trying to do so, because the server can choose to serve different web clients to different users. 

    Therefore, to protect the confidentiality of your data from the service provider, use an end to end encryption implementation that does not rely on web clients.

Even with end-to-end encryption, service providers can still profile you based on **metadata**, which is not typically protected. While the service provider could not read your messages to see what you're saying, they can still observe things like who you're talking to, how often you message them, and what times you're typically active. Protection of metadata is fairly uncommon, and you should pay close attention to the technical documentation of the software you are using to see if there is any metadata reduction or protection at all, if that is a concern for you.

### Security and Privacy

<span class="pg-orange" title="Protects you from malware and other passive attacks">:material-bug-outline: Passive Attacks</span>

Security and privacy are often conflated, because you need security to obtain any semblance of privacy—Using tools which appear private is futile if they could easily be exploited by attackers to release your data later. However the inverse is not necessarily true, the most secure service in the world *isn't necessarily* private. The best example of this is trusting data to Google, who have never lost data to breaches and employ industry-leading security experts to secure their services. Even though Google provides a very secure service, very few would consider their data private in their hands.

When it comes to application security, we generally do not (and sometimes cannot) know if the software that we use is malicious, or might one day become malicious. Even with the most trustworthy developers, there is generally no guarantee that their software does not have serious vulnerabilities that could later be exploited.

To minimize the potential damage that a malicious piece of software can do, you should employ security by compartmentalization. This could come in the form of using different computers for different jobs, using virtual machines groups of related applications, or using a secure operating system with an strong focus on application sandboxing and mandatory access control.

!!! tip

    Mobile operating systems are generally safer than desktop operating systems when it comes to application sandboxing. Apps cannot obtain root access and only have access to system resources which you grant them.

    Desktop operating systems generally lag behind on proper sandboxing. ChromeOS has similar sandboxing properties to Android, and macOS has opt-in (for developers) sandboxing and strong permissions, however these operating systems do transmit identifying information to their respective vendor. Traditional Linux desktop tends to not submit information to system vendors, but it has poor protection against exploits and malicious apps. This can be mitigated somewhat with specialized distributions which make heavy use of VMs or containers, such as QubesOS.

<span class="pg-red" title="Protects you from malicious agents targeting you specifically">:material-target-account: Targeted Attacks</span>

Targeted attacks against a specific user are more problematic to deal with. Common avenues of attack include sending malicious documents via emails, exploiting vulnerabilities in the browser and operating systems, and physical attacks. If this is a concern for you, you may have to employ more advanced threat mitigation strategies.

!!! tip

    **Web browsers**, **email clients**, and **office applications** all typically run untrusted code sent to you from third-parties by design. Running multiple virtual machines separating applications like these from your main system and each other is one technique you can use to avoid an exploit in these applications from gaining access to the rest of your system. Technologies like QubesOS or Microsoft Defender Application Guard on Windows provide convenient methods to seamlessly do this, for example.

If you are concerned about **physical attacks** you should use an operating system with a verified boot implementation, such as Android, iOS, macOS, or ChromeOS. You should also make sure that your drive is encrypted, and that the operating system uses a TPM or Secure Element for rate limiting attempts to enter the encryption passphrase. You should avoid sharing your computer with people you don't trust, because most desktop operating systems outside of ChromeOS do not encrypt data separately per-user.

### Mass Surveillance

Mass surveillance refers to organizations and sometimes governments working together to share user data and track your activities across the internet. You can be tracked via a wide variety of methods, including but not limited to:

- Your IP address
- Browser cookies
- Data you submit to websites
- Your browser fingerprint
- Payment method correlation

Therefore your goals could be to segregate your online identities from each other, to blend in with other users, and simply to avoid giving out identifying information to anyone as much as possible.

Instead of relying on privacy policies (which are promises that could be violated), try to obfuscate your information in such a way that it is very difficult for different providers to correlate data with each other and build a profile on you. This could come in the form of using encryption tools like Cryptomator prior to uploading your data to cloud services, using prepaid cards or cryptocurrency to protect your credit/debiat card information, using a VPN to hide your IP address from websites and services on the internet, etc. The privacy policy should only be relied upon as a last resort, when you have exhausted all of your option for true privacy and need to put complete trust in your service provider.

Bare in mind that if you define the threat as "the service provider" or "third party providers" and take proper precautions, all "Big-Tech" or "Ad-Tech" related threats are also thwarted, since they are only a subset of what you are protected against.

### Limiting Public Information

The best way to ensure your data is private is to simply not put it out there in the first place. Deleting information you can find about yourself online is one of the best first steps you can take to regain your privacy. Use email aliases, secondary phone numbers, and lie about your real information (name, birthday, "security" questions) whenever possible. If you have already submitted your real information to various different sites, employ disinformation and submitted various fake information related to the same online identity and make your real information indistinguishable from the fake one.
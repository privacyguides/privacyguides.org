---
title: "Common Threats"
icon: 'material/eye-outline'
---

Broadly speaking, we categorize our recommendations into the [threats](threat-modeling.md) or goals that apply to most people. ==You may be concerned with none, one, a few, or all of these possibilities==, and the tools and services you use depend on what your goals are. You may have specific threats outside of these categories as well, which is perfectly fine! The important part is developing an understanding of the benefits and shortcomings of the tools you choose to use, because virtually none of them will protect you from every threat.

- <span class="pg-purple">:material-incognito: Anonymity</span> - Shielding your online activity from your real identity, protecting you from people who are trying to uncover *your* identity specifically.
- <span class="pg-red">:material-target-account: Targeted Attacks</span> - Being protected from hackers or other malicious actors who are trying to gain access to *your* data or devices specifically.
- <span class="pg-orange">:material-bug-outline: Passive Attacks</span> - Being protected from things like malware, data breaches, and other attacks that are made against many people at once.
- <span class="pg-teal">:material-server-network: Service Providers</span> - Protecting your data from service providers (e.g. with E2EE, which renders your data unreadable to the server).
- <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> - Protection from government agencies, organizations, websites, and services which work together to track your activities.
- <span class="pg-brown">:material-account-cash: Surveillance Capitalism</span> - Protecting yourself from big advertising networks, like Google and Facebook, as well as a myriad of other third-party data collectors.
- <span class="pg-green">:material-account-search: Public Exposure</span> - Limiting the information about you that is accessible online—to search engines or the general public.
- <span class="pg-blue-gray">:material-close-outline: Censorship</span> - Avoiding censored access to information or being censored yourself when speaking online.

Some of these threats may be more important to you than others, depending on your specific concerns. For example, a software developer with access to valuable or critical data may be primarily concerned with <span class="pg-red">:material-target-account: Targeted Attacks</span>, but they probably still want to protect their personal data from being swept up in <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> programs. Similarly, many people may be primarily concerned with <span class="pg-green">:material-account-search: Public Exposure</span> of their personal data, but they should still be wary of security-focused issues, such as <span class="pg-orange">:material-bug-outline: Passive Attacks</span>—like malware affecting their devices.

## Anonymity vs. Privacy

<span class="pg-purple">:material-incognito: Anonymity</span>

Anonymity is often confused with privacy, but they're distinct concepts. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model which requires total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by malicious actors or governments, but also hiding who they are entirely. They will often sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, because their lives could depend on it. Most people don't need to go so far.

## Security and Privacy

<span class="pg-orange">:material-bug-outline: Passive Attacks</span>

Security and privacy are also often confused, because you need security to obtain any semblance of privacy: Using tools—even if they're private by design—is futile if they could be easily exploited by attackers who later release your data. However, the inverse isn't necessarily true: The most secure service in the world *isn't necessarily* private. The best example of this is trusting data to Google who, given their scale, have had few security incidents by employing industry-leading security experts to secure their infrastructure. Even though Google provides very secure services, very few people would consider their data private in Google's free consumer products (Gmail, YouTube, etc.)

When it comes to application security, we generally don't (and sometimes can't) know if the software we use is malicious, or might one day become malicious. Even with the most trustworthy developers, there's generally no guarantee that their software doesn't have a serious vulnerability that could later be exploited.

To minimize the damage that a malicious piece of software *could* do, you should employ security by compartmentalization. For example, this could come in the form of using different computers for different jobs, using virtual machines to separate different groups of related applications, or using a secure operating system with a strong focus on application sandboxing and mandatory access control.

!!! tip

    Mobile operating systems generally have better application sandboxing than desktop operating systems: Apps can't obtain root access, and require permission for access to system resources.

    Desktop operating systems generally lag behind on proper sandboxing. ChromeOS has similar sandboxing capabilities to Android, and macOS has full system permission control (and developers can opt-in to sandboxing for applications). However, these operating systems do transmit identifying information to their respective OEMs. Linux tends to not submit information to system vendors, but it has poor protection against exploits and malicious apps. This can be mitigated somewhat with specialized distributions which make significant use of virtual machines or containers, such as Qubes OS.

<span class="pg-red">:material-target-account: Targeted Attacks</span>

Targeted attacks against a specific person are more problematic to deal with. Common attacks include sending malicious documents via email, exploiting vulnerabilities (e.g. in browsers and operating systems), and physical attacks. If this is a concern for you, you should employ more advanced threat mitigation strategies.

!!! tip

    By design, **web browsers**, **email clients**, and **office applications** typically run untrusted code, sent to you from third parties. Running multiple virtual machines—to separate applications like these from your host system, as well as each other—is one technique you can use to mitigate the chance of an exploit in these applications compromising the rest of your system. For example, technologies like Qubes OS or Microsoft Defender Application Guard on Windows provide convenient methods to do this.

If you are concerned about **physical attacks** you should use an operating system with a secure verified boot implementation, such as Android, iOS, macOS, or [Windows (with TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process). You should also make sure that your drive is encrypted, and that the operating system uses a TPM or Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) or [Element](https://developers.google.com/android/security/android-ready-se) to rate limit attempts to enter the encryption passphrase. You should avoid sharing your computer with people you don't trust, because most desktop operating systems don't encrypt data separately per-user.

## Privacy From Service Providers

<span class="pg-teal">:material-server-network: Service Providers</span>

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, and social interactions are typically stored on a server, somewhere. Generally, when you send someone a message it's stored on a server, and when your friend wants to read the message the server will show it to them.

The obvious problem with this is that the service provider (or a hacker who has compromised the server) can access your conversations whenever and however they want, without you ever knowing. This applies to many common services, like SMS messaging, Telegram, and Discord.

Thankfully, E2EE can alleviate this issue by encrypting communications between you and your desired recipients before they are even sent to the server. The confidentiality of your messages is guaranteed, assuming the service provider doesn't have access to the private keys of either party.

!!! note "Note on Web-based Encryption"

    In practice, the effectiveness of different E2EE implementations varies. Applications, such as [Signal](../real-time-communication.md#signal), run natively on your device, and every copy of the application is the same across different installations. If the service provider were to introduce a [backdoor](https://en.wikipedia.org/wiki/Backdoor_(computing)) in their application—in an attempt to steal your private keys—it could later be detected with [reverse engineering](https://en.wikipedia.org/wiki/Reverse_engineering).

    On the other hand, web-based E2EE implementations, such as Proton Mail's webmail or Bitwarden's *Web Vault*, rely on the server dynamically serving JavaScript code to the browser to handle cryptography. A malicious server can target you and send you malicious JavaScript code to steal your encryption key (and it would be extremely hard to notice). Because the server can choose to serve different web clients to different people—even if you noticed the attack—it would be incredibly hard to prove the provider's guilt.

    Therefore, you should use native applications over web clients whenever possible.

Even with E2EE, service providers can still profile you based on **metadata**, which typically isn't protected. While the service provider can't read your messages, they can still observe important things, such as who you're talking to, how often you message them, and when you're typically active. Protection of metadata is fairly uncommon, and—if it's within your [threat model](threat-modeling.md)—you should pay close attention to the technical documentation of the software you're using to see if there's any metadata minimization or protection at all.

## Mass Surveillance Programs

<span class="pg-blue">:material-eye-outline: Mass Surveillance</span>

Mass surveillance is the intricate effort to monitor the "behavior, many activities, or information" of an entire (or substantial fraction of a) population.[^1] It often refers to government programs, such as the ones [disclosed by Edward Snowden in 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)). However, it can also be carried out by corporations, either on behalf of government agencies or by their own initiative.

Governments often justify mass surveillance programs as necessary means to combat terrorism and prevent crime. However, breaching human rights, it's most often used to disproportionately target minority groups and political dissidents, among others.

!!! quote "ACLU: [*The Privacy Lesson of 9/11: Mass Surveillance is Not the Way Forward*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    In the face of [Edward Snowden's disclosures of government programs such as [PRISM](https://en.wikipedia.org/wiki/PRISM) and [Upstream](https://en.wikipedia.org/wiki/Upstream_collection)], intelligence officials also admitted that the NSA had for years been secretly collecting records about virtually every American’s phone calls — who’s calling whom, when those calls are made, and how long they last. This kind of information, when amassed by the NSA day after day, can reveal incredibly sensitive details about people’s lives and associations, such as whether they have called a pastor, an abortion provider, an addiction counselor, or a suicide hotline.

Despite growing mass surveillance in the United States, the government has found that mass surveillance programs like Section 215 have had "little unique value" with respect to stopping actual crimes or terrorist plots, with efforts largely duplicating the FBI's own targeted surveillance programs.[^2]

Online, you can be tracked via a variety of methods:

- Your IP address
- Browser cookies
- The data you submit to websites
- Your browser or device fingerprint
- Payment method correlation

\[This list isn't exhaustive].

If you're concerned about mass surveillance programs, you can use strategues like compartmentalizing your online identities, blending in with other users, or, whenever possible, simply avoiding giving out identifying information.

<span class="pg-brown">:material-account-cash: Surveillance Capitalism</span>

> Surveillance capitalism is an economic system centered around the capture and commodification of personal data for the core purpose of profit-making.[^3]

For many people, tracking and surveillance by private corporations is a growing concern. Pervasive ad networks, such as those operated by Google and Facebook, span the internet far beyond just the sites they control, tracking your actions along the way. Using tools like content blockers to limit network requests to their servers, and reading the privacy policies of the services you use can help you avoid many basic adversaries (although it can't completely prevent tracking).[^4]

Additionally, even companies outside of the *AdTech* or tracking industry can share your information with [data brokers](https://en.wikipedia.org/wiki/Information_broker) (such as Cambridge Analytica, Experian, or Datalogix) or other parties. You can't automatically assume your data is safe just because the service you're using doesn't fall within the typical AdTech or tracking business model. The strongest protection against corporate data collection is to encrypt or obfuscate your data whenever possible, making it difficult for different providers to correlate data with each other and build a profile on you.

## Limiting Public Information

<span class="pg-green">:material-account-search: Public Exposure</span>

The best way to keep your data private is simply not making it public in the first place. Deleting unwanted information you find about yourself online is one of the best first steps you can take to regain your privacy.

- [View our guide on account deletion :material-arrow-right-drop-circle:](account-deletion.md)

On sites where you do share information, checking the privacy settings of your account to limit how widely that data is spread is very important. For example, enable "private mode" on your accounts if given the option: This ensures that your account isn't being indexed by search engines, and that it can't be viewed without your permission.

If you've already submitted your real information to sites which shouldn't have it, consider using disinformation tactics, like submitting fictitious information related to that online identity. This makes your real information indistinguishable from the false information.

## Avoiding Censorship

<span class="pg-blue-gray">:material-close-outline: Censorship</span>

Censorship online can be carried out (to varying degrees) by actors including totalitarian governments, network administrators, and service providers. These efforts to control communication and restrict access to information will always be incompatible with the human right to Freedom of Expression.[^5]

Censorship on corporate platforms is increasingly common, as platforms like Twitter and Facebook give in to public demand, market pressures, and pressures from government agencies. Government pressures can be covert requests to businesses, such as the White House [requesting the takedown](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) of a provocative YouTube video, or overt, such as the Chinese government requiring companies to adhere to a strict regime of censorship.

People concerned with the threat of censorship can use technologies like [Tor](tor-overview.md) to circumvent it, and support censorship-resistant communication platforms like [Matrix](../real-time-communication.md#element), which doesn't have a centralized account authority that can close accounts arbitrarily.

!!! important

    While evading censorship itself can be easy, hiding the fact that you are doing it can be very problematic.

    You should consider which aspects of the network your adversary can observe, and whether you have plausible deniability for your actions. For example, using [encrypted DNS](dns-overview.md#what-is-encrypted-dns) can help you bypass rudimentary, DNS-based censorship systems, but it can't truly hide what you are visiting from your ISP. A VPN or Tor can help hide what you are visiting from network administrators, but can't hide that you're using those networks in the first place. Pluggable transports (such as Obfs4proxy, Meek, or Shadowsocks) can help you evade firewalls that block common VPN protocols or Tor, but your circumvention attempts can still be detected by methods like probing or [deep packet inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection).

You must always consider the risks of trying to bypass censorship, the potential consequences, and how sophisticated your adversary may be. You should be cautious with your software selection, and have a backup plan in case you are caught.

[^1]: Wikipedia: [*Mass Surveillance*](https://en.wikipedia.org/wiki/Mass_surveillance) and [*Surveillance*](https://en.wikipedia.org/wiki/Surveillance).
[^2]: United States Privacy and Civil Liberties Oversight Board: [*Report on the Telephone Records Program Conducted under Section 215*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: Wikipedia: [*Surveillance capitalism*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: "[Enumerating badness](https://www.ranum.com/security/computer_security/editorials/dumb/)" (or, "listing all the bad things that we know about"), as many adblockers and antivirus programs do, fails to adequately protect you from new and unknown threats because they have not yet been added to the filter list. You should also employ other mitigation techniques.
[^5]: United Nations: [*Universal Declaration of Human Rights*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).

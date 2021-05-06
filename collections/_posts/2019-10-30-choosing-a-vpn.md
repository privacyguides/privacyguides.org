---
title: Choosing a VPN
author: Jonah Aragon
canonical: 'https://blog.privacytools.io/choosing-a-vpn/'
canonical_publisher: the PrivacyTools Blog
tags: VPN Guides Privacy Security
layout: post
excerpt: Now you know what a VPN is, here's how you choose between them...
---

So [you know what a VPN is]({% link _posts/2019-10-05-understanding-vpns.md %}), but there are so many options to choose from! Well before we dive into this, let's get one thing off the bat:

## Avoid Free VPNs

Privacy-respecting VPNs can provide their service because you pay them for it. Free VPNs are **worse** than your ISP when it comes to respecting your privacy, because **selling your data is the only way they can make money**, whereas an ISP is primarily paid for by you.

> If you’re not paying for it, you’re the product.

This isn't to say all paid VPNs automatically become trustworthy, far from it. In fact many paid VPN providers have been known to or suspected to have sold their users' data or have done some otherwise shady things with it. Always completely evaluate the VPN provider you choose, rather than just take theirs or anyone else's word for it. The main takeaway here is that it is impossible to provide a service like a VPN — which requires servers, bandwidth, time, and energy to maintain — for free for thousands of users, without having some sort of other monetization model.

## Choosing a VPN

Alright, now we can get into it. The first thing we need to decide is _why_ exactly you need a VPN. Most people will fall into the following two camps:

### 1. Avoiding Geographical Restrictions

Maybe you want to watch BBC online, possibly avoid creeps at cafés, but don’t really care about your VPN logging your traffic — just like your ISP does.

**Therefore**: You want a VPN with servers in countries like US, UK — basically where services like Netflix work. (Tip: Netflix is continually banning VPNs, so be sure to use one that isn’t blocked. You might want to look into the [r/NetflixViaVPN](https://www.reddit.com/r/NetflixViaVPN) Subreddit for help with this one).

### 2. Maximizing Your Privacy Online

Being **Privacy** Guides, this is the big one for us. If you really care about your privacy, you'll want to look for a provider that at the very least does the following:

-  Supports modern technologies like OpenVPN or WireGuard.
-  Accepts anonymous payments like cash, gift cards, or cryptocurrencies.
-  Provides strong, future-proof encryption for their connections.
-  And, is public about their leadership and ownership.

These 4 points should always be considered when you're evaluating a VPN provider. Additionally, note what jurisdiction the provider is incorporated in, and where their servers are located. This is probably the most important factor to consider, and also the most time-consuming, as privacy laws in various countries vary wildly.

Let me explain what these points mean exactly in more detail, so you know what to look for.

## Modern Technology

You should be able to connect to your VPN with any **OpenVPN** client. L2TP, PPTP, and IPSec are all insecure technologies that should not be used. A new technology called **WireGuard** looks very promising, but is still in active development and not recommended for use.

While we're looking at technology, take a look at whether your provider has their own client for you to download and connect with. These applications usually make using your VPN a lot simpler, and sometimes safer. If they do, ask the following questions:

-  **Is this client open-source?** Having an open-source client is important because it allows you or anyone else to audit the code and see exactly what's happening. Closed source clients are essentially a black box you'd be putting all your data into, not the best idea!
-  **Does the client have a killswitch?** Not many generic OpenVPN clients come with this functionality, but many custom VPN clients will. A killswitch option allows you to completely disable your internet connection when the VPN is disconnected. This will make sure that you don't accidentally connect to the internet with your ISP's connection.

## Anonymous Payments

This one's an easy one. Take a look at how you're able to pay for your provider's subscription. Some providers will take cash in the mail as payment, a great way to pay without leaving a digital money trail. Others will allow you to pay with gift cards from major retailers like Amazon, Target, and Wal-Mart (which you can hopefully obtain anonymously with cash, replacing the mail middleman from before). Still others will accept various cryptocurrencies.

If not leaving a money trail is important, you'll want to make sure you aren't paying with something linked to you financially, like a credit or debit card, or PayPal. If your provider doesn't accept the payment forms above, you aren't entirely out of luck however. You can still use a prepaid debit card to pay for things as anonymously as possible. But consider: If your provider isn't dedicated to making easy, anonymous payment alternatives available to you, how focused are they on your privacy?

## Strong Security

Most providers using OpenVPN will also be using strong encryption methods, but still make sure you double-check before choosing a provider. What you'll want to look for from your provider at a minimum is:

-  **RSA-2048 encryption.** Ideally, they should support RSA-4096 connections, for maximum security.
-  **Perfect Forward Secrecy (PFS).** This technology makes each VPN session use a different key every time, so that if an attacker manages to decrypt one of your connections, they won't also be able to see all your other data.

In addition, look into whether your provider has ever had their security practices audited by an independent third-party. For example, TunnelBear [publishes](https://cure53.de/summary-report_tunnelbear_2018.pdf) yearly audits of their entire service, or Mullvad, which has [published](https://cure53.de/pentest-report_mullvad_v2.pdf) a comprehensive security audit of their client applications.

Independent audits are important because, while ultimately the actual security of the service will come down to _trusting_ the providers, a successful security audit demonstrates that the provider at least has the _capability_ to provide you with a secure connection, instead of just taking their claims at face value.

## Public Trust

You want to remain private, but your provider shouldn't. If your provider is hiding their ownership information and their leadership from you behind some Panamanian shell company, what other business practices might they be hiding?

> You wouldn't trust your finances to someone with a fake identity, so why trust them with your internet data?

Find out where your choice is incorporated. Who owns it? What other companies have their executives worked for?

Frequent transparency reports are a huge plus too. They should publish information related to government requests, so you know what their responses look like. All VPN providers will need to respond to legitimate legal requests, but does your choice reject or counter as many as possible?

## So what next?

If you're currently using a commercial VPN, use this information to evaluate their business. Do they seem trustworthy?

At Privacy Guides we've [evaluated]({% link legacy_pages/providers/vpn.html %}) a huge number of VPN providers along similar criteria to these. In our opinion, as of October 2019, Mullvad leads the pack with respect to all these criteria, with IVPN and ProtonVPN falling just slightly behind but catching up quickly. There are still a huge number of providers out there, however. The way to find the best solution for you, is by researching providers with _your_ criteria in mind.

Join the discussion on our forum below, and chat with our community about any questions you have or any interesting things you discover.

----------

_Please note that we are not affiliated with or receive financial compensation from any commercial VPN providers. A lot of VPN providers engage in questionable affiliate marketing strategies which generates a lot of misinformation on VPNs in general online. At Privacy Guides we are trying to make guides and recommendations based on objective research and criteria._

---
title: Understanding VPNs
author: Jonah
background: understanding-vpns-cover.jpg
background_src: 'https://unsplash.com/@freeche'
template: overrides/blog.html
excerpt: A VPN is a tool that secures your internet connection from attackers on your network...
---

<p class="lead">A <strong>VPN</strong> — or <strong>Virtual Private Network</strong> — is a tool that secures your internet connection from attackers on your network. But before I explain how that all works, let's talk about the internet without them.</p>

Your Internet Service Provider (ISP) can see everything you do online. Well, nearly everything: When websites use HTTPS (or TLS, or SSL. these terms are often used interchangeably when referring to website encryption), indicated by the padlock in your web browser, your ISP cannot see exactly what you're doing on the website. So, they usually can't see what specific pages you look at or what you type in to forms. However, they can still see what websites you're visiting (domains and IP addresses).

That sounds bad, right? But that’s not even the worst part! (I know, right?) Not only can your ISP see what you’re doing online, they can (and do) insert ads into websites, sell your browsing history (which is now legal in the US), restrict access to some websites, and do other awful stuff, because <mark>your ISP complete control over your Internet connection</mark>.

Furthermore, this doesn't only happen at your home. Every network you connect to—your cellular network, your Wi-Fi at work, the internet at Starbucks—has their own ISP that will be able to read your data.

Fortunately, more and more websites are beginning to use HTTPS, thanks to free certificates from Let's Encrypt and Cloudflare. But many sites still don't (at least by default), and even HTTPS doesn't solve the problem that your ISP can see the websites you're visiting.

## How VPNs can protect us
Luckily, you can hide all this information from your ISP using a VPN. Instead of letting your ISP see all the websites you visit, VPNs only let them see that you are connected (using an **encrypted** connection) to the VPN provider's servers.

*Basically, instead of connecting directly to the Internet, you connect to one of your VPN providers’ servers, which connects you to the Internet.*

So, `you <----> Internet` becomes `you <----> VPN <----> Internet` and your ISP can only see the `you <----> VPN` part.

## More ways VPNs can protect us
So VPNs are pretty handy, but hiding your traffic from your ISP isn't the only advantage a VPN provides.

Did you know that if you’re on a public Wi-Fi network, <mark>anyone connected to the same network can see as much as your ISP can</mark>? Obviously, this isn’t an issue at home, unless you have very creepy neighbors and an open Wi-Fi network. However, it is a problem in public places with Wi-Fi, such as cafés.

Because your connection to the VPN is **encrypted** and it’s the only active connection on your device, that creepy guy with the laptop sitting in the corner is no longer a threat to your Internet connection. Like the ISP, the only thing he'd be able to see is that single connection to your VPN.

So, is that all? Not yet. There’s still one big advantage. Websites that you’re connected to can see this (usually) near-unique identifier called an **IP address**. But when you use a VPN the websites don’t see your IP address, they see one of the VPN server's IP addresses.

This also provides an added side-benefit: Most VPN providers have servers in many countries, thus you can make it appear to websites as if you’re browsing from a completely different country (which apart from privacy is useful due to some content and services being available only to specific regions, like Netflix and Hulu).

But even if you use a different IP address than your “normal” one,  isn’t it still personally identifiable? Nope. Many people use the same  server, letting the websites you visit see only that you’re using the  same VPN as many other people.

## Drawbacks of a VPN
But VPNs aren't all powerful tools to protect your privacy. In fact, there are a number of glaring issues that should not be overlooked when making the decision to use one.

Most importantly, using a VPN only *shifts* the power to view your traffic from your ISP to the VPN provider itself. That means that all the traffic your ISP used to be able to see, your VPN provider will still be able to. Therefore, choosing a trustworthy VPN is important. Many will be able to find a provider that they can trust more than their ISP, but some may not.

Using a commercial VPN provider is almost like entrusting your data to a black box. There are no ways to verify claims like "no logging", you just need to take them at their word. Some providers will work harder than others to validate their claims for you—by releasing audits of their policies and code for example—, but at the end of the day it ultimately comes down to trust.

Finally, using a VPN will not make you anonymous in any way. Your VPN provider or especially dedicated attackers will be able to trace a connection back to you fairly trivially. Your VPN provider will also likely have a money trail leading back to you.

## So what?
If you're looking for perfect anonymity, there are better options. Software like the Tor Browser provides privacy and anonymity *by design*, whereas VPNs provide privacy based on trust alone. You cannot rely on "no logging" claims to protect you.

If you just need protection on a public Wi-Fi network, from your ISP, or just from copyright warnings in the mail, a VPN might be the solution for you.

PrivacyTools's [VPN Providers](https://www.privacytools.io/providers/vpn/) page lists some recommendations and reasonings for privacy-respecting and trustworthy VPN providers.

Wondering what exactly makes a VPN choice good or bad? We've published a guide on some of the criteria we use to evaluate VPN providers. Looking into the details of any VPN provider you choose will help you make a more fully informed decision about who you trust your internet traffic to.

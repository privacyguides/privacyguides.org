---
title: 'Firefox Privacy: Tips and Tricks for Better Browsing'
author: Jonah
background: firefox-privacy-cover.jpg
background_src: 'https://unsplash.com/@vmxhu'
template: overrides/blog.html
excerpt: Mozilla Firefox is one of the most popular web browsers around, and for good reason. It's fast, secure, open-source, and it's backed by an organization that actually respects your privacy.
---

Mozilla Firefox is one of the most popular web browsers around, and for good reason. It's fast, secure, open-source, and it's backed by an organization that actually respects your privacy. Unlike many other Chrome alternatives and forks, it has a massive development team behind it that publishes new updates on a constant, regular basis. Regular updates doesn't only mean shiny new features, it means you'll also receive security updates that will keep you protected as you browse the web.

Because of all of this, the Privacy Guides team [recommends Firefox](https://privacyguides.org/browsers/) as a general-purpose browser for most users. It's the best alternative to Google Chrome and Edge for privacy conscious individuals.

Firefox is fantastic out of the box, but where it really shines is customizability. By adjusting Firefox privacy settings and using helpful add-ons, you can increase your privacy and security even further. Making those changes is what we're going to go over in this Firefox privacy guide.

Before we get started, there's a couple things that should be noted that are not only applicable to this guide, but privacy in general:

## Considerations

Protecting your privacy online is a tricky proposition, there are so many factors to take into consideration on an individual basis for any one guide or site to cover comprehensively. You will need to take into account things like threat modeling and your general preferences before making any changes or following any recommendations.

### Threat Modeling

*What is [threat modeling](/threat-modeling/)?* Consider who you're trying to keep your data hidden from. Do you need to keep your information hidden from the government, or just the average stranger? Maybe you're just looking for alternatives to Big Tech Corporations like Google and Facebook. You'll also want to consider how much time and resources you want to spend hiding your data from those "threats". Some solutions might not be feasible from a financial or time standpoint and you'll have to make compromises. Taking all those questions into account creates a basic *threat model* for you to work with.

We want to publish a more complete guide on threat modeling in the future, so stay tuned to this blog for further updates. But for now, just keep those thoughts in the back of your mind as we go through this article. Not every solution might be for you, or conversely you may need to pay more attention to certain areas we aren't able to cover completely.

### Browser Fingerprinting

Another consideration is your browser's fingerprint. When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using more common tracking tools, like cookies.

That's right, add-ons contribute to your fingerprint. Another thing a lot of people miss when they are setting up their browser is that <mark>more is not always the best solution to your problems</mark>. You don't need to use every add-on and tweak that offers privacy, and the more you configure the greater chance there is that your browser will appear more unique to websites. Think about your specific situation and pick and choose the add-ons and tweaks we recommend only if you think they will help *you*.

## Firefox Privacy Settings

We'll start off with the easy solutions. Firefox has a number of privacy settings built in, no add-ons necessary! Open your *Options* page (*Preferences* on macOS) and we'll go through them one at a time.

### DNS over HTTPS

DNS (or the Domain Name System) is what your browser uses to turn domain names like `privacyguides.org` into IP addresses like `145.239.169.56`. Because computers can only make connections to IP addresses, it's necessary to use DNS every time you visit a new domain. But DNS is unencrypted by default, that means everyone on your network (including your ISP) can view what domains you're looking up, and in some situations even change the IP answers to redirect you to their own websites! Encrypting your DNS traffic can shield your queries and add some additional protection to your browsing.

Encrypted DNS takes many forms: DNS over HTTPS (DoH), DNS over TLS, DNSCrypt, etc., but they all accomplish the same thing. They keep your DNS queries private from your ISP, and they make sure they aren't tampered with in transit between your DNS provider. Fortunately, Firefox recently added native DoH support to the browser. On the **General** page of your preferences, scroll down to and open **Network Settings**. At the bottom of the window you will be able to select "Enable DNS over HTTPS" and choose a provider:

![Screenshot of the Enable DNS over HTTPS box checked, with Cloudflare selected in the provider dropdown.](/assets/img/blog/firefox-privacy-1.png){:.img-fluid .w-75 .mx-auto .d-block}

Keep in mind that by using DoH you're sending all your queries to a single provider, probably Cloudflare unless you choose [another provider](https://privacyguides.org/dns) that supports DNS over HTTPS. While it may add some privacy protection from your ISP, you're only shifting that trust to the DoH provider. Make sure that's something you want to do.

It should also be noted that even with DoH, your ISP will still be able to see what domain you're connecting to because of a technology called Server Name Indication (SNI). Until SNI is encrypted as well, there's no getting around it. Encrypted SNI (eSNI) is in the works — and can actually be [enabled on Firefox](https://blog.cloudflare.com/encrypt-that-sni-firefox-edition/) today — but it only works with a small number of servers, mainly ones operated by Cloudflare, so its use is limited currently. Therefore, while DoH provides some additional privacy and integrity protections, its use as a privacy tool is limited until other supplemental tools like eSNI and [DNSSEC](https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en) are finalized and implemented.

### Change Your Search Engine

This is an easy one. In the Search tab, change your Default Search Engine to something other than Google.

![Screenshot of the search engine preferences](/assets/img/blog/firefox-privacy-2.png){:.img-fluid .w-75 .mx-auto .d-block}

Out of the built-in options, DuckDuckGo is the most privacy respecting service, but there's a number of [search engines we would recommend](https://privacyguides.org/providers/search-engines/) that can be easily installed as well.

### Enhanced Tracking Protection

Now we'll delve into the biggest set of options for people like us, Firefox's Privacy & Security tab. First up is their Enhanced Tracking Protection. This set of filters is set to *Standard* by default, but we'll want to change it to *Strict* for more comprehensive coverage.

![Screenshot of strict tracking protection enabled](/assets/img/blog/firefox-privacy-3.png){:.img-fluid .w-75 .mx-auto .d-block}

In rare occasions, Strict browsing protections might cause some of the websites you visit to not function properly. But there's no need to worry! If you suspect the Strict browsing protection is breaking a website you visit frequently, you can disable it on a site by site basis with the shield icon in the address bar.

![Screenshot of per-site settings for Firefox tracking protection](/assets/img/blog/firefox-privacy-4.png){:.img-fluid .w-75 .mx-auto .d-block}

Disabling Enhanced Tracking Protection will of course decrease your privacy on that site, so you will have consider whether that's something you are willing to compromise on, on a site-by-site basis.

Another benefit of Firefox's Enhanced Tracking Protection is that it can actually speed up your browsing! Advertising networks and social media embeds can sometimes make your browser download huge files just to show an ad or a like button, and blocking those out trims the fat, in a sense.

### Disabling Telemetrics

When you use Firefox, Mozilla collects information about what you do, what kind of extensions you have installed, and various other aspects of your browser. While they claim to do this in a privacy-respecting way, sending as little data as possible is always preferred from a privacy standpoint, so we would go ahead and uncheck all the boxes under **Firefox Data Collection and Use** just to be safe.

![Screenshot of Firefox data collection checkboxes](/assets/img/blog/firefox-privacy-5.png){:.img-fluid .w-75 .mx-auto .d-block}

### Clearing Cookies and Site Data

This one is for more advanced users, so if you don't understand what this is doing you can skip this section. Firefox provides the option to delete all your cookies and site data every time Firefox is closed. Cookies and site data are little pieces of information sites store in your browser, and they have a myriad of uses. They are used for things like keeping you logged in and saving your website preferences, but they also can be used to track you across different websites. By deleting your cookies regularly, your browser will appear clean to websites, making you harder to track.

![Screenshot of cookies and site data](/assets/img/blog/firefox-privacy-6.png){:.img-fluid .w-75 .mx-auto .d-block}

This will likely log you out of websites quite often, so make sure that's an inconvenience you're willing to put up with for enhanced privacy.

## Firefox Privacy Add-ons

Of course, just the browser settings alone won't go quite far enough to protect your privacy. Mozilla has made a lot of compromises in order to provide a more functional browsing experience for the average user, which is completely understandable. But, we can take it even further with some browser add-ons that prevent tracking and make your experience more private and secure.

There are a number of [fantastic add-ons for Firefox](https://privacyguides.org/browsers/#addons), but they aren't all necessary for everyone. Some of them provide redundant functionality to each other, and some of them accomplish similar tasks to the settings we've enabled above.

When you are installing add-ons for Firefox, consider whether you actually need them for your personal browsing. Remember that fingerprinting warning from earlier? Adding as many extensions as possible might make you stand out more, which is not the goal.

Keeping all that in mind, there are three add-ons I would consider necessary for virtually every user:

* uBlock Origin
* HTTPS Everywhere
* Decentraleyes

Out of the box, these add-ons only complement the settings we've described in this article already, and they have sane defaults that won't break the sites you visit.

### uBlock Origin

[**uBlock Origin**](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) is an efficient ad- and tracker-blocker that is easy on memory, and yet can load and enforce thousands more filters than competing blockers. We trust it because it is completely open-source. Additionally, unlike its competitors it has no monetization strategy: There's no "Acceptable" ads program or a similar whitelist like many other adblockers feature.

### HTTPS Everywhere

HTTPS is the secure, encrypted version of HTTP. When you see an address starting with https:// along with the padlock in your browser's address bar, you know that your connection to the website is completely secure. This is of course important when you're logging into websites and sending your passwords and emails in a form. But it also prevents people on your network and your ISP from snooping in on what you're reading, or changing the contents of an unencrypted webpage to whatever they want.

Therefore, [**HTTPS Everywhere**](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere) is a must-have extension, all it does is upgrade your HTTP connections to HTTPS wherever possible. And because it works silently in the background, you probably will never notice it! We trust HTTPS Everywhere because it is completely open-source, and is developed by the [Electronic Frontier Foundation](https://www.eff.org/https-everywhere), a non-profit dedicated to private and secure technologies.

Of course, it only works with sites that support HTTPS on the server's side, so you'll still need to keep an eye on your address bar to make sure you're securely connected. But fortunately more and more websites have implemented HTTPS, thanks to the advent of free certificates from organizations like Let's Encrypt.

### Decentraleyes

When you connect to many websites, your browser is most likely making connections to a myriad of "Content Delivery Networks" like Google Fonts, Akamai, and Cloudflare, to download fonts and Javascript that make the website run. This generally makes websites look and feel better, but it means you're constantly making connections to these servers, allowing them to build a fairly accurate tracking profile of you.

[**Decentraleyes**](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes) works by impersonating those CDNs locally in your browser. When a website wants to download a program like jQuery, instead of connecting to a remote CDN Decentraleyes will serve the file from its own cache of files. This means that you'll won't have to make remote CDN connections for the files that Decentraleyes supports, and therefore the remote CDNs can't track your browser. Decentraleyes may even speed up your browsing, because everything is stored locally instead of on a far-away server. Everything happens instantly, and you won't see a difference in the websites you visit.

### Additional Firefox Privacy Add-ons

There is of course more functionality that can be achieved at the expense of more time spent configuring your browser and reduced website functionality. If you're looking for the most privacy options possible however, they may be for you. Check out the page on [Browser add-ons at Privacy Guides](https://privacyguides.org/browsers/#addons) for further information and additional resources.

## More Privacy Functionality

Firefox has developed a number of other privacy tools that can be used to enhance your privacy or security. They may be worth looking into, but they have some drawbacks that would prevent me from recommending them outright.

### Firefox Private Network

**Firefox Private Network** is a new extension developed by Mozilla that serves as a [Virtual Private Network](/blog/2019/10/05/understanding-vpns) (VPN), securing you on public WiFi networks and other situations where you might trust Mozilla more than the ISP or network administrator. It is free in beta, but will likely be available at some subscription pricing once the test pilot ends.

Firefox Private Network is still just a VPN, and there are a number of drawbacks you would want to consider before using it. Ultimately, your VPN provider of choice will be able to see your web traffic. All you are accomplishing is shifting the trust from your network to the VPN provider, in this case *Cloudflare*, the operators behind this service.

Additionally, unlike a traditional VPN, only data through the Firefox browser is protected, not every app on your machine. This means that it won't adequately protect you from many of the threats people typically want to protect against when they use a VPN, like IP leaks.

And finally, Cloudflare and Mozilla are both US companies. There are a number of concerns with entrusting internet traffic to the US and other [Fourteen Eyes](https://privacyguides.org/providers/#ukusa) countries that should not be overlooked.

If you require a Virtual Private Network, we would look elsewhere. There are a number of [good VPN providers](https://privacyguides.org/providers/vpn/) like Mullvad that will provide a better experience at a low cost.

### Multi-Account Containers

Mozilla has an in-house add-on called [**Multi-Account Containers**](https://support.mozilla.org/en-US/kb/containers) that allows you to isolate websites from each other. For example, you could have Facebook in a container separate from your other browsing. In this situation, Facebook would only be able to set cookies with your profile on sites within the container, keeping your other browsing protected.

A containers setup may be a good alternative to techniques like regularly deleting cookies, but requires a lot of manual intervention to setup and maintain. If you want complete control of what websites can do in your browser, it's definitely worth looking into, but we wouldn't call it a necessary addition by any means.

## Additional Resources

[ghacks user.js](https://github.com/ghacksuserjs/ghacks-user.js) — For more advanced users, the ghacks user.js is a "configuration file that can control hundreds of Firefox settings [...] which aims to provide as much privacy and enhanced security as possible, and to reduce tracking and fingerprinting as much as possible - while minimizing any loss of functionality and breakage".

[Mozilla's Privacy Policy](https://www.mozilla.org/en-US/privacy/) — Of course, we always recommend reading through the privacy statement of any organization you deal with, and Mozilla is no exception.

## Firefox Privacy Summary

In conclusion, we believe that Firefox is the most promising browser for privacy-conscious individuals. The non-profit behind it seems truly dedicated to promoting user control and privacy, and the good defaults coupled with the sheer customizability of the browser allow you to truly protect your information when you browse the web.

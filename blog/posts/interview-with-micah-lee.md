---
date:
    created: 2025-03-28T17:00:00Z
categories:
    - News
authors:
    - em
description: 'This article is an interview with Micah Lee, the creator of Cyd and OnionShare, founder of Lockdown Systems, and author of Hacks, Leaks, and Revelations: The Art of Analyzing Hacked and Leaked Data.'
schema_type: NewsArticle
preview:
  cover: blog/assets/images/interview-with-micah-lee/social-preview-cover.webp
---
# Interview with Micah Lee: Cyd, Lockdown Systems, OnionShare, and more

![Photo of Micah Lee over a yellow and purple graphic background, and with the name Micah Lee written on the right.](../assets/images/interview-with-micah-lee/micah-lee-cover.webp)

<small aria-hidden="true">Illustration: Jonah Aragon / Privacy Guides | Photo: Micah Lee</small>

If you don't know who Micah Lee is yet, here's why you should: Micah is an information security engineer, a software engineer, a journalist, and an author who has built an impressive career developing software for the public good, and working with some of the most respected digital rights organizations in the United States.<!-- more -->

If you have been following software development related to data privacy and security for a while, you probably already know one of Micah's projects such as [OnionShare](https://onionshare.org/), [Dangerzone](https://dangerzone.rocks/), the [Tor Browser Launcher](https://github.com/torproject/torbrowser-launcher), and more recently [Cyd](https://cyd.social/) (a rebirth of Semiphemeral). Additionally, he is also a core contributor to the [Tor Project](https://www.torproject.org/) and a contributor to [Hush Line](https://hushline.app/).

Besides software development, Micah is a board member for [Science & Design](https://scidsg.org/) and [Distributed Denial of Secrets](https://ddosecrets.com/), a former board member and cofounder of [Freedom of the Press Foundation](https://freedom.press), and has been a Staff Technologist for the [Electronic Frontier Foundation](https://www.eff.org/).

You might have already read some of Micah's articles when he worked at [The Intercept](https://theintercept.com/staff/micah-lee/), or even read his new [book](https://hacksandleaks.com/) Hacks, Leaks, and Revelations: The Art of Analyzing Hacked and Leaked Data.

We spoke with Micah over email and are delighted that he decided to talk with us at Privacy Guides. Let's get into it!

***Em:*** *Hi Micah! We're thrilled that you have accepted to give us this interview at Privacy Guides. Thank you for taking time off your busy schedule to talk with us.*

## Cyd: The app to claw back your data from Big Tech

***Em:*** *Let's start with your newest project. [Cyd](https://cyd.social) is an application you have created in 2024 to help people backing up and deleting their tweets on X-(Twitter). This app emerged from the ashes of [Semiphemeral](https://micahflee.com/2024/07/like-a-phoenix-semiphemeral-will-rise-from-the-ashes/), a great tool that was unfortunately rendered unusable when Twitter decided to [shut off its API](https://mashable.com/article/twitter-ending-free-api-tier-elon-musk-worst-decision). I personally loved Semiphemeral and used it to delete thousands of my tweets before eventually deleting my whole Twitter account later on. Can you tell us more about how Cyd works despite not using X's API?*

**Micah:**

APIs make it way simpler for programmers to interact with online services, but they're not the only way. As long as social media platforms like X still run websites, and it's still possible for you, the human, to manually scroll through your tweets and delete them, it's possible to write a program that can do this for you.

This is basically how Cyd works. It's a desktop app that includes an embedded web browser. When you add an X account to it, you login to your account in the browser, and then Cyd takes over. You can tell it that you want to delete your tweets, or likes, or bookmarks, or unfollow everyone, or save a backup of your DMs, or plenty of other things, and it does this by automating the embedded browser on your behalf. No API required.

Cyd uses open APIs when they're available and make sense. For example, if you want to quit X but you don't want your old tweets to disappear forever, Cyd can migrate them to Bluesky using Bluesky's API -- soon we'll add support for migrating to Mastodon too. But for closed platforms that suck (like X, and Facebook too, which we're adding support for right now), we're forced to do it the hard way.

***Em:*** *Talking about openness, recently this year you have decided to [make Cyd open source](https://infosec.exchange/@micahflee/113885066507235250). This is fantastic news! What did you take into consideration before making this decision and what kind of [contributions](https://github.com/lockdown-systems/cyd) or feedback are you hoping to receive from the community?*

**Micah:**

I'm extremely happy that Cyd is now open source. I've open-sourced most code that I've ever written, so it honestly felt kind of weird starting out making Cyd proprietary.

My biggest concern with making it open was that I want Cyd to be a sustainable business, where some of the features are free and some of the features are premium and cost money -- enough so that me, and eventually other people working on it, could get paid a decent wage. And as an open source app, it would be easy for someone to fork it and remove the bits of code that check if you've paid for premium access.

But after talking it through with some other people who are very experienced open source devs, I decided that this isn't that big of a deal, and that the benefits of being open source far outweigh the costs.

Now when you use Cyd, you can now *confirm* that it doesn't have access to your social media accounts or any of the data in it. Having an open issue tracker on GitHub is great too, because people in the community can open issues, post comments, and track the progress of features they're looking forward to. Also being open source means we have the ability to accept grants and donations, in addition to selling premium accounts. You can check out our Open Collective page at [https://opencollective.com/lockdown-systems](https://opencollective.com/lockdown-systems).

I'm hoping that members of the community will discuss features we're making, or even contribute code directly to our project. Right now, Cyd is only available in English, but we're also hoping to translate it into many different languages going forward, so I'm hoping that people will eventually chip in it to help translate Cyd to their native languages.

***Em:*** *Having access to Cyd in multiple languages would really be wonderful. Likewise for multiple social media, when additional ones will be added later on. But at the moment, Cyd definitely seems to be [focusing](https://cyd.social/want-to-quit-x-in-2025-heres-how-to-do-it-the-right-way-with-cyd/) on X. You have personally been on the receiving end of Elon Musk's vengeful whims before when your Twitter account got [banned](https://micahflee.com/2023/05/elon-banned-me-from-twitter-for-doing-journalism-good-riddance/) in 2022 for criticizing him. I would say this qualifies as a badge of honor. Do you think you could still be on his radar with Cyd focusing on [data deletion for X](https://cyd.social/delete-all-your-tweets-for-free-with-cyd/) even though X has shut off its API? Have you taken any specific measures about this?*

**Micah:**

I think it's actually more likely that I'll be on Elon Musk's radar because of my [recent work](https://www.youtube.com/live/APHo7bea_p4?si=stSrkmo1MWy5_iVX&t=3338) with the Tesla Takedown movement than with Cyd... Right now, Musk is spending all of his time purging the US government of critics and consolidating executive power under Trump. So maybe he's too distracted on his fascism project to care about what we're doing with deleting tweets?

But that said, Musk is litigious and we're definitely concerned about legal threats. We've consulted lawyers and we're trying to be as safe as possible.

## Lockdown Systems: The new organization developing Cyd

***Em:*** *Cyd is a project of [Lockdown Systems](https://lockdown.systems), a new organization you have created with colleagues just a few months ago. Can you tell us more about the structure of this organization and who else is involved?*

**Micah:**

We're still finalizing the paperwork, but Lockdown Systems is a new worker-owned collective! At the moment there are five of us:

- me
- Jen, a former SecureDrop engineer who was the technical editor of my book and, for several years, my Dungeons & Dragons dungeon master
- Saptak, a talented human-rights-focused open source developer who I work with on OnionShare
- Yael, an investigative journalist friend who, among other things, broke a story with me about how Zoom had lied about supporting end-to-end encryption just as everyone started using it during the pandemic
- Akil, a talented newsroom engineer I worked closely with at The Intercept

Most companies are owned by investors who only care about profit. They don't care about the workers, and they definitely don't care about the end-users of the software they make. This is why it's so common for tech companies to end up spying on their users and selling that data: it's an additional way to make a profit for their investors.

We're different. Lockdown Systems is owned by its workers, and we don't have outside investors. We have all agreed to the explicit goals of: ensuring the well-being of our members; making tools that help fight fascism and authoritarianism; and prioritizing impact over profit.

We make decisions by coming to consensus, and everyone in the collective gets paid the same wage. Even though I started Cyd, I don't have more say than anyone else.

***Em:*** *That is such a great organizational structure for software development. Lockdown Systems really has an impressive team of skilled and dedicated people. Presently, it seems from the website and [GitHub page](https://github.com/lockdown-systems) that Lockdown Systems is focusing on developing and growing Cyd only. Are you planning on using Lockdown Systems mainly for Cyd or are you envisaging other applications getting added to Lockdown Systems in the near (or far) future?*

**Micah:**

So far, Cyd is our only product. There are many features we plan on building, and we also need to get it the point where it can fund our continued work. Most likely, this will be our main project for the near future.

That said, we're definitely open to branching out. We make software that directly empowers individuals, helping them reclaim their autonomy and privacy. So if we see an opportunity to build something that will directly help people who are facing fascist threats -- whether it's supporting abortion access, keeping immigrants safe, helping communities organize mutual aid, etc. -- we will absolutely do it.

***Em:*** *If one day some generous millionaire (let's keep it at millionaire, we all know what happens at billionaire) decided to give Lockdown Systems a huge budget bump no string attached, how would you like to grow the organization with this money?*

**Micah:**

One cool thing about being a member of a collective is that if this happened, the whole collective would brainstorm together and we'd come up with ideas that are far better than what I could come up with alone. But that said, I definitely have some thoughts.

Right now, everyone is working part time, between about 10 and 30 hours a week each. If we had the resources, many of us would work on Cyd full-time, and we'd be able to offer benefits like health care and retirement contributions. We could also increase how many people are part of the collective, and build out new features at a much faster rate.

In my mind, future Cyd will be a single app (possible available on mobile devices, not just desktop) where you can have total control over all of your data that's currently stored by tech companies (X, Facebook, Instagram, TikTok, LinkedIn, Reddit, Bluesky, Mastodon, Discord, Slack, Telegram, Amazon, Airbnb, Substack, and on and on). You can backup all your data and then have choice over where you want the rest of it: you can delete *everything*, or you can choose to keep your online presence that you're proud of. You can easily cross-post to multiple platforms, and also automatically delete your older posts from the corporate platforms, while keeping them live on the open ones. Or, however else you choose to do it.

If we had a bigger team to pay for more labor, there's a lot that we could get done.

***Em:*** *In the meantime, I imagine one million $1 donations could also help. If our readers would like to support the development of Lockdown Systems, they can make a [donation on this page](https://opencollective.com/lockdown-systems).*

## OnionShare: The app to share files, host websites, and chat anonymously through Tor

***Em:*** *Our community is likely familiar with this great application included in so many security and privacy-focused projects, including [Tails](https://tails.net/), [Qubes OS](https://www.qubes-os.org/), [Whonix](https://www.whonix.org/), and [Parrot OS](https://parrotsec.org/). What motivated you to create [OnionShare](https://onionshare.org) more than 10 years ago, and what do you think is the best way to use it now?*

**Micah:**

I made OnionShare in 2014 while I was helping journalists report on the Snowden documents. The big motivation was a border search: Glenn Greenwald's partner, David, traveled from Berlin, where he was visiting Laura Poitras, back to his home in Rio de Janeiro. He was carrying an encrypted hard drive, on an assignment for The Guardian. During his layover at Heathrow airport in London, UK authorities detained him and searched him.

None of this was necessary. Using the internet, encryption, and Tor, it's possible to securely move documents around the world without putting anyone at risk at a border crossing. In fact, I was already doing something similar with journalists I was collaborating with on Snowden stories myself. To send someone secret documents, I'd first encrypt them using PGP, and then place them in a folder on my laptop. I'd start up a web server with a simple directory listing for that folder, and then make that web server accessible as a Tor onion service.

While this wasn't too hard for me, an experienced Linux nerd, to set up, it would be very challenging for most people. I made OnionShare basically as a user-friendly way for anyone to be able to securely share files, peer-to-peer, without needing to first upload them to some third party service like Dropbox.

Today, OnionShare has more features. It's basically like a graphical interface to do cool things with Tor onion services -- you can send files, but you can also turn your laptop into an anonymous dropbox so people can upload files to you, and you can quickly host onion websites and spin up temporary chatrooms too. And there are Android and iPhone apps!

The last time I used OnionShare myself was last week. On my personal newsletter, I'm writing a [series of posts](https://micahflee.com/exploring-the-paramilitary-leaks/) exploring the Paramilitary Leaks, 200 GB of data from the American militia movement, obtained by an infiltrator name John Williams. While working on one of my posts, John used OnionShare to send me some additional documents.

## Other projects and thoughts

***Em:*** *You have been a prolific writer as a journalist for [The Intercept](https://theintercept.com/staff/micah-lee/), your own [Blog](https://micahflee.com/), and in January 2024 you [released](https://micahflee.com/2023/12/hacks-leaks-and-revelations-the-art-of-analyzing-hacked-and-leaked-data/) a book called Hacks, Leaks, and Revelations: The Art of Analyzing Hacked and Leaked Data. What is this book about, and who is it written for?*

**Micah:**

I spent many years reporting on hacked and leaked datasets, starting with the Snowden archive. Since then, I've seen the amount of hacked and leaked data grow exponentially. And at the same time, journalists and researchers -- the people who really need to dig through this data and find the good stories -- don't even know where to start.

So that's what my book is, an interactive guide to downloading and exploring datasets. It doesn't require any prior knowledge, but it does get pretty technically, including two chapters teaching Python programming. If you're following along, near the beginning of the book you'll encrypt a USB hard drive and then download a copy of BlueLeaks to it -- hundreds of gigabytes of hacked police documents from the middle of the Black Lives Matter uprising in 2020. You'll use this dataset, along with several others, as examples as you learn how to make sense of data like this.

You should definitely buy the book if you're interested and you can, but information wants to be free, so I also released the whole book under a Creative Commons license. You can read the whole thing online at [hacksandleaks.com](https://hacksandleaks.com/).

***Em:*** *I can see how much of a valuable skill this is to learn for journalists and researchers in this day and age. Even if nothing compares to having a physical paper copy (in my opinion), it's wonderful that you share your book online for people who, for various reasons, cannot order a copy. You have worked or still work with the Electronic Frontier Foundation, Freedom of the Press Foundation, Science & Design, the Tor Project, and Distributed Denial of Secrets. Your contribution and commitment to digital rights is undeniable. From your experience, what are you envisioning for the future of digital rights activism?*

**Micah:**

I don't have all of the answers, but I do think that it's important for digital rights activists to meet the moment. Fascist politicians are gaining power around the world. The gap between the ultra rich and everyone else is wider than it's ever been before. Elon Musk has openly bought the US government, and the Trump-supporting oligarchs control all of our critical tech infrastructure. Climate change deniers and anti-vaxxers are the ones in charge right now, at least in the US. Things are pretty bad.

Whatever we do, we should have the goal of shifting power away from the fascists and billionaires and towards everyone else. We need alternative platforms that are not only open and democratic, but also just as easy to use as the corporate walled gardens. We need digital rights, not to mention digital security, to fully integrate itself into the rest of the mass movements going on now, whether it's to save the planet from climate change, to protect immigrants getting sent to gulags, or to stop the genocide in Gaza.

***Em:*** *Absolutely, and digital rights advocates and organizations undeniably have a crucial role to play in these movements. Finally, is there anything else you would like to share with us that we haven't discussed yet?*

**Micah:**

If you want to support Lockdown Systems and you work for an organization that might be interested in offering Cyd as a benefit to their employees, check out Cyd for Teams! If we can get organizations on board this will go a long way to making sure we can continue to get paid doing this work: [https://docs.cyd.social/docs/cyd-for-teams/intro](https://docs.cyd.social/docs/cyd-for-teams/intro)

***Em:*** *Thank you so much Micah for taking the time to answer our questions today! The new projects you are working on are fascinating, and so important in the current landscape. I'm excited for more people to discover Cyd and Lockdown Systems, and will myself be following their evolution and expansion enthusiastically.*

## Consider supporting Micah Lee's projects

If you would like to follow Micah Lee's work and support his projects, consider:

- [Following Micah Lee on Mastodon](https://infosec.exchange/@micahflee)

- [Reading Micah Lee's Blog](https://micahflee.com/)

- [Donating to Cyd and Lockdown Systems](https://opencollective.com/lockdown-systems)

- [Signing up for Cyd for Teams](https://docs.cyd.social/docs/cyd-for-teams/sign-up)

- [Getting a copy of Hacks, Leaks, and Revelations](https://hacksandleaks.com/)

- [Contributing to one of Micah Lee's software](https://github.com/micahflee)

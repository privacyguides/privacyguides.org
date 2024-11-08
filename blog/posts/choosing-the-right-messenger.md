---
date:
    created: 2019-11-27
categories:
    - Opinion
authors:
    - danarel
links:
    - Real Time Communication: https://www.privacyguides.org/real-time-communication/
    - Types of Communication Networks: https://www.privacyguides.org/real-time-communication/communication-network-types/
tags:
    - Instant Messengers
license: BY-SA
description: Choosing an instant messenger is a challenge. How can you be sure you’re using the most secure, privacy respecting platform?
schema_type: AnalysisNewsArticle
---
# Choosing the Right Messenger

!["Choosing The Right Messenger" cover image](../assets/images/choosing-the-right-messenger/cover.png)

One of the most common questions users have when it comes to privacy is about messaging services. It seems almost all of them mention some level of privacy or encryption to entice the user to sign up for their service, but how can you be sure you’re using the most secure, privacy respecting platform?<!-- more -->

The answer actually lies in one’s [threat model](https://www.privacyguides.org/basics/threat-modeling/), which is often an ignored step in choosing all privacy related apps and services, meaning a lot of users limit their internet and communication experience because they believe they need Edward Snowden level privacy settings.

The truth is, each user needs to decide what their privacy goals are. Is your goal to stop corporations from tracking you, targeting you, and profiting from your data? Or, are you are trying to hide communications from the government or law enforcement, which is common for journalists and activists who want to protect their sources or communications from government eyes?

Once you understand your goals you can start to look at messengers and their upsides and downsides, and it’s important to remember, there is no perfect solution. Each service, no matter how secure can be compromised, because at the end of the day, you’re dealing with other humans who can screenshot, copy, or forward your messages to parties you did not intend to see them. So, it’s also important to know who you are messaging, verifying their keys, and ensuring that you place the utmost trust in them with the content you are sending.

If your goal is to simply avoid corporate tracking and the harvesting of your data from your communications, you can eliminate apps such as Facebook Messenger and WhatsApp, both services owned by Facebook and while offering encrypted messaging (optional in Messenger), Facebook [reads your non-encrypted messages](https://web.archive.org/web/20210729190737/https://www.digitaltrends.com/social-media/facebook-reads-messenger-messages/), and WhatsApp has [fallen victim](https://web.archive.org/web/20210729190737/https://www.forbes.com/sites/zakdoffman/2019/05/14/whatsapps-cybersecurity-breach-phones-hit-with-israeli-spyware-over-voice-calls/#734cec155549) to security breaches.

For this type of user, your options are much more wide as you may be more willing to share your email address or phone number at signup and can be less concerned with metadata (we will get to that shortly), and you want to look for a messenger that simply isn’t scanning your content or behavior to sell it.

If your goal is to evade more massive state-sponsored surveillance programs, the aforementioned apps are out of the question, but so are many others.

This is because when it comes to these apps, and other like it, you don’t own the encryption keys, the service does, so they are able to decrypt your messages, for their own use, or for the use of government officials who request it. This is something important you’ll want to remember as you choose the messenger that is right for you.

Even Apple’s iMessage, which is encrypted, while more secure than Facebook’s offerings, still control the keys and can access your messages if necessary. Apple does also collect data based on your behavior, so while using iMessage isn’t the same as handing your data over to Facebook, you’re still messaging with a variety of privacy vulnerabilities. On Android, you’re using SMS messages which are even less secure and can be [easily hijacked](https://web.archive.org/web/20210729190737/https://www.theverge.com/2017/9/18/16328172/sms-two-factor-authentication-hack-password-bitcoin) by someone with just enough know-how.

## Metadata

One important aspect of messaging apps you need to be sure of is what kind of [metadata](https://ssd.eff.org/en/glossary/metadata) it exposes, what is encrypted and what isn’t.

Wire, a popular encrypted messenger app has always been criticized for its decision not to encrypt user metadata, such as the date and time of registration, IP geographical coordinates, and the date and time of creation, creator, name, and list of participants in a conversation.

Metadata can be used to place you in a certain location, speaking to a certain person and can be used against you by law enforcement, even if they have no idea and no access to what the conversation was about.

Apps such as Signal, or Wickr encrypt metadata, making the conversations between two or more parties more secure and harder to track individual users with.

When it comes to avoiding corporate data mining, your metadata won’t be as useful, especially if you’re using a service that is not profiting from your data to begin with. For those avoiding state-sponsored surveillance, [metadata can be a killer](https://web.archive.org/web/20210729190737/https://theintercept.com/2019/08/04/whistleblowers-surveillance-fbi-trump/).

## Encryption

This article will not get into the complexities of the best kinds of end-to-end encryption (E2EE), but ensuring your messenger has it, that must be discussed.

The popular messaging app Telegram has come under fire the most for this. Telegram says on their homepage that, “Telegram messages are heavily encrypted and can self-destruct.” Yet, this statement is only partially true. Yes, you can set your messages to self-destruct, a great privacy feature for some, and yes, they do offer encryption, but what they don’t tell users is that encryption isn’t turned on by default.

In an [interview](https://web.archive.org/web/20210729190737/https://gizmodo.com/why-you-should-stop-using-telegram-right-now-1782557415) with Gizmodo, Christopher Soghoian, Principal Technologist and Senior Policy Analyst at the American Civil Liberties Union said that, "There are many Telegram users who think they are communicating in an [end-to-end] encrypted way, when they’re not because they don’t realize that they have to turn on an additional setting,” he continued to say that while he’s happy they offer the encryption, it’s not useful if it’s turned off.

Apps such as Signal, Keybase, and Wickr offer E2EE by default. Less popular but quickly growing apps such as Element, offer E2EE but like Telegram, have not made it a default setting, though the Matrix.org team has [said](https://web.archive.org/web/20210729190737/https://github.com/vector-im/element-web/issues/6779) that default encryption is on their road map.

Ensuring your conversations and metadata are E2EE is one of the best practices you can have when choosing a messenger.

## Registration Process

When it comes to your goals and threat model, you will need to decide how much, if any, information you’re willing to give this company on signup. Do they require a phone number and or SIM card? Do they require an email address, or do they allow completely anonymous signups, and how anonymous is anonymous? Are they storing that info (remember the metadata) unencrypted?

Giving up your phone number or email won’t be a big deal for many, as any good privacy policy will state they won’t use it for any purpose other than those you’ve granted permission for. Yet, for those avoiding state-sponsored surveillance, you may have a regularly changing number, no number, or would rather not risk giving that information up. Same goes for email.

So, you will want to find a service that fits this need. While Signal is currently testing signup without a phone number, currently you’re unable to do so. Element, Wickr, many XMPP services, don’t require anything but choosing a username.

## Source Code

Open source may be the most used phrase in all of privacy and security, and for good reason. It’s really helpful to be able to review the source code of the product you’re trusting. Experts can look for backdoors, leaks, and other bugs. Organizations that opt to open source their code are showing good faith effort to increase trust between them and the user.

Yet, open source can also limit your options, again, depending on your threat model and goals. Signal, Wire, and Keybase all offer open source repositories of their applications, and sometimes even the server software itself.

Open source also doesn’t mean secure. This is often misunderstood, and people hear open source and assume it must be good. Look at the apps code you want to use, you don’t need to be able to check it, but are others? An open source app that no one follows, or contributes to is no more or less secure than a closed source app.

Wickr, Threema, and others are closed source. They don’t offer the ability to check the source, but that doesn’t immediately rule them out either. When the Electronic Frontier Foundation (EFF) had a comparison chart for messenger apps, it gave Wickr 5-stars. This doesn’t mean it’s perfect for someone like Snowden, but for those avoiding Facebook and Google, it could be a usable option.

It’s also important to remember there’s no way to check that someone is always using the source code in their repository in the app or server you’re downloading from the Apple Store or Google Play. When it comes to this, reputation becomes a key player in your decision, as does trust, which we will get to next.

If you’re unsure what to do here, it’s always a safe bet to stick with open source that has a large contributor base and strong reputation. It’s always best to use open source options when they are available and only recommend closed source when there isn’t a usable open source option. This is generally a good way to pick a messenger app as well.

## Ownership & Trust

An often overlooked, but increasingly important part of choosing a secure messenger is, who owns the company that’s providing your service? What would the gain or lose from selling your data and who does the company answer to?

Wire [recently lost](https://web.archive.org/web/20210729190737/https://blog.privacytools.io/delisting-wire/) a great deal of trust and standing in the privacy world because they quietly sold their company and moved it to the US. They also changed parts of their privacy policy making it harder for users to tell when Wire would share customer data. They did all of this while never updating their current users of such changes, either to the change of the privacy policy, or the move to the US.

Wire also took in more than $8 million in venture capital funding. So now, users wanted to know more about who owned their data and what jurisdictional rights were changing with the move from Europe to the United States?

These are questions we must ask of all services. Wire now has investors to answer to who will want a return on their millions of dollars.

Signal on the other hand is a [non-profit](https://signal.org/blog/signal-foundation/) which does not rely on investors and instead relies on donations, sponsorships, and grants. Because of their non-profit status in the US, they must also be highly transparent about not only where the money comes from, but how they spend it. So, users can see where this money goes, and who it’s going to.

Matrix.org (the service Element uses) runs a similar business model as Signal, located in the UK instead of the US, they reply on donations, partnerships, and grants. Matrix.org is heavily supported by New Vector, a venture capital backed company, however, Matrix.org as a non-profit is transparent about its spending, income, and influences.

Not all services are non-profit, and that should not rule them out immediately. You can also follow their funding goals. Wire lost credibility because instead of simply relying on user signups, they wanted to be the next Skype for Business and wanted to build a larger enough user base to get the attention of investors. Meanwhile apps such as Wickr, while for-profit, is transparent about taking limited investors to become sustainable on subscriptions.

This can take some time, because it’s important to know who the investors are, and what the organizational goals are. Will they eventually need to resort to data harvesting to sustain itself, if they do, and you decide to leave the platform, will you leave behind data you don’t want them to get their hands on?

## Making Your Choice

Now it’s time to choose a messenger and no one can do that for you. Popularity will need to play a role here, there’s no point in joining the new up and coming messenger service if you don’t have a single contact using it as well. One reason Telegram has been so popular is they have managed to convince more than 100 million people to sign up. If you sign in today, you’ll likely see a group of your friends in there. Signal isn’t as far behind, and others are catching up.

You’ll need to decide who you trust, and who your other contacts trust, and then compare all of that with your goals and your threat model. How much information are you willing to give on signup, does metadata matter to your threat model, and is the service you’re choosing likely to sell itself to the highest bidder once enough people sign up?

The important thing to remember is there is no one size fits all for messengers, and that each user must decide what is best for them. If someone is an avid WhatsApp or Facebook Messenger user, even Telegram is a step in the right direction. Yet, if that user is concerned with more than just giving data over to Facebook, they may need to look at more secure options.

Ensure you keep your messenger apps up to date. You don’t want to discover you’ve been compromised because a bug found in version 1 was fixed in version 2 but you didn’t bother upgrading your apps.

One last piece of advice is that users need to be diligent and never become complacent in their decision. You must be willing to change services if the goals and values of your messenger of choice change in a way that no longer match yours. Look for news of sales, mergers, or acquisitions that could compromise the organization.

---

*Dan Arel is a journalist, author, and privacy advocate. This article was originally published to [Hacker Noon](https://hackernoon.com/choosing-the-right-messenger-mm3x2z47) on November 27th, 2019.*

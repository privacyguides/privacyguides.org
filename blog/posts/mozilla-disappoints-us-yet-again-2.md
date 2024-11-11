---
date:
    created: 2024-07-14
categories:
    - News
authors:
    - jonah
tags:
    - Firefox
    - Mozilla
description: "'No shady privacy policies or back doors for advertisers' proclaims the Firefox homepage, but that's no longer true in Firefox 128."
schema_type: AnalysisNewsArticle
---

# "Privacy-Preserving" Attribution: Mozilla Disappoints Us Yet Again

![](../assets/images/mozilla-disappoints-us-yet-again-2/cover.jpeg)

**"No shady privacy policies or back doors for advertisers" proclaims the Firefox homepage, but that's no longer true in Firefox 128.**

Less than a month after [acquiring the AdTech company Anonym](https://discuss.privacyguides.net/t/mozilla-acquires-anonym-raising-the-bar-for-privacy-preserving-digital-advertising/18936), Mozilla has added special software co-authored by Meta and built for the advertising industry directly to the latest release of Firefox, in an experimental trial you have to opt out of manually. This "Privacy-Preserving Attribution" (PPA) API adds another tool to the arsenal of tracking features that advertisers can use, which is thwarted by traditional content blocking extensions.<!-- more -->

It seems that 6 years after the [Mr. Robot extension debacle](https://www.theverge.com/2017/12/16/16784628/mozilla-mr-robot-arg-plugin-firefox-looking-glass), Mozilla still hasn't learned their lesson about sneaking unwanted advertising and features onto our computers.

We already know from Google's [Privacy Sandbox](https://www.eff.org/deeplinks/2019/08/dont-play-googles-privacy-sandbox-1) that simply adding "privacy" to the name of your feature does not make it private. While Mozilla claims that the "Privacy-Preserving" attribution aims to provide a more privacy-friendly alternative to ad tracking, there are a plethora of issues with this new (anti-)feature that are worth examining:

## Misaligned Incentives

Mozilla's decision to implement PPA in Firefox highlights a growing trend among user agents (browsers) to grant preferential treatment to the advertising industry over all other businesses.

**All** websites on the internet—including ad networks!—are **guests** on our computers, and the content they provide are merely suggestions for a user agent to interpret and show us how it chooses. This has always been a fundamental truth of how the internet works, and enables many great things: from highly-accessible text-based web browsers to the ability to [block trackers](https://www.privacyguides.org/en/browser-extensions/) and other unwanted bloat on the websites you visit. By baking in software that's tailor-made for the advertising industry, Mozilla is wrongly asserting that the advertising industry has a legitimate interest in collecting your data and tracking you across the internet over all other parties, including over your own interests.

The advertising industry and [Google](https://discuss.privacyguides.net/t/ublock-origin-lite/15329/11) in particular have been trying their hardest to reverse this dynamic, to turn browsers into a locked-down piece of viewing software under the total control of the servers it's accessing. Mozilla is the organization meant to protect us from the ever-encroaching desires of industry to control and track what we see online, but instead they're continually giving in to the idea that user agents should serve website operators and ad-tracking networks instead of users.

## Lack of Consent

Mozilla constantly fails to understand the basic concept of consent. Firefox developers seem to see their position as shepherds, herding the uninformed masses towards choices they interpret to be "good for them." Firefox users are not a captive audience that needs to be coddled, they are generally full-grown adult computer users who need to be listened to.

One Mozilla developer claimed that explaining PPA would be too challenging, so they had to opt users in by default.

<iframe src="https://mastodon.social/@Schouten_B/112784434152717689/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

<iframe src="https://mastodon.social/@Schouten_B/112784608473016028/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

The reality is that it isn't simply a *privileged minority* of users who care about surveillance tracking software being built in to their browsers.

Firefox users are **fully** capable of understanding basic concepts like tracking, and can make an informed decision about whether they want their browser to track them. Mozilla refuses to acknowledge this, because it's in their best (financial) interest to get as many people as possible to use this feature.

At the end of the day, Mozilla **knows** this feature isn't something that Firefox users want. If they truly believed this was the one path away from the constant data theft perpetuated by the advertising industry, they would've announced this loudly and proudly. They could've given the privacy and general Firefox communities ample time to scrutinize the protocol beforehand.

Instead, they buried the announcement in a two sentence blurb at the bottom of the release notes, 5 months after they posted a very brief [blog post](https://blog.mozilla.org/en/mozilla/privacy-preserving-attribution-for-advertising/) talking about this technology which was likely ignored by the vast majority of Firefox users.

## False Privacy

Let's ignore all of this though, and say you don't care that Mozilla is selling out to advertisers, as long as the feature is actually more private than the current status quo. PPA still isn't the answer we are looking for.

The simple truth is that the "Distributed Aggregation Protocol" Mozilla is using here is **not private by design.**

The way it works is that individual browsers report their behavior to a data aggregation server (operated by Mozilla), then that server reports the aggregated data to an advertiser's server. The "advertising network" only receives aggregated data with differential privacy, but the aggregation server still knows the behavior of individual browsers!

This is essentially a semantic trick Mozilla is trying to pull, by claiming the advertiser can't infer the behavior of individual browsers by re-defining part of the advertising network to not be the advertiser.

It is extremely disingenuous for Mozilla to claim that Firefox is adding technical measures to protect your privacy, when the reality is that your privacy is only being protected by social measures. In this particular case, Mozilla and their partner behind this technology, the ISRG (responsible for Let's Encrypt), could trivially collude to compromise your privacy.

## Uselessness

Finally, there is no reason for this technology to exist in the first place, because tracking aggregate ad conversions like this **can already be done** by websites without cookies and without invading privacy, using basic web technology.

All an advertisement has to do is link to a unique URL: Instead of linking to `example.com` one could link to `example.com/ad01`, and the website operator simply has to track how many people visit the `ad01` page on their end.

In contrast to the amazingly complex PPA setup Mozilla is pushing, this is a perfectly viable alternative that advertisers could easily adopt today. The reason they do not is simply because they have an insatiable need for as much of your data as possible.

## Disabling PPA

Firefox users should disable this feature:

1. Open Firefox's settings page at `about:preferences`
2. In the Privacy & Security panel, find the *Website Advertising Preferences* section.
3. Uncheck the box labeled **Allow websites to perform privacy-preserving ad measurement.**

There are also plenty of other [web browsers](https://www.privacyguides.org/en/desktop-browsers/) you could choose from, if you're growing tired of Mozilla's behavior in recent months. Between their foray into generative AI and their business acquisitions in the advertising industry itself, I certainly wouldn't blame you.

PPA is an additional privacy attack surface that has no value for end users whatsoever, as its sole purpose is to give data to the advertising industry for nothing in return. Instead of focusing their efforts on compromising with advertisers, Mozilla could work to actively block unwanted data collection. Because they aren't blocking any of the myriad of ways advertisers currently track you, Mozilla is not acting in your best interest here.

For a browser and organization which has built its reputation entirely on protecting user privacy, these moves are really eroding the trust of its core user base. We hope that Mozilla will listen to the overwhelming user feedback surrounding this feature and their other endeavors, and consider whether these recent actions are aligned with their core mission of putting users first.

---

[Discuss this article on our forum](https://discuss.privacyguides.net/t/privacy-preserving-attribution-mozilla-disappoints-us-yet-again/19467/2), or leave a comment below.

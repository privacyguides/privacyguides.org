---
title: Social Networks
icon: material/account-supervisor-circle-outline
description: Find a new social network that doesn’t pry into your data or monetize your profile.
cover: social-networks.webp
---
<small>Protects against the following threat(s):</small>

- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }
- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

These privacy-respecting **social networks** allow you to participate in online communities without giving up your personal information, like your full name, phone number, and other data commonly requested by tech companies.

A growing problem among social media platforms is censorship in two different forms. First, they often acquiesce to illegitimate censorship requests, either from malicious governments or their own internal policies.

Second, they often require accounts to access walled-off content that would otherwise be published freely on the open internet. This effectively censors the browsing activities of privacy-conscious users who are unable to pay the privacy cost of opening an account on these networks.

The social networks we recommend solve the issue of censorship by operating atop an open and decentralized social networking protocol. While it is possible for your account to be banned or silenced by an individual server, there is no central authority which can censor your account across the entire network. They also don't require an account merely to view publicly available content.

You should note that **no** social networks are appropriate for private or sensitive communications. For chatting directly with others, you should use a recommended [instant messenger](real-time-communication.md) with strong end-to-end encryption, and only use direct messages on social media in order to establish a more private and secure chat platform with your contacts.

## Mastodon

<div class="admonition recommendation" markdown>

![Mastodon logo](assets/img/social-networks/mastodon.svg){ align=right }

**Mastodon** is a social network based on open web protocols and free, open-source software. It uses the **:simple-activitypub: ActivityPub** protocol, which is decentralized like email: users can exist on different servers or even different platforms but still communicate with each other.

[:octicons-home-16: Homepage](https://joinmastodon.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://docs.joinmastodon.org){ .card-link title="Documentation" }

</div>

There are many software platforms which use ActivityPub as their backend social networking protocol, meaning they can talk to servers even when they are running different software. For example, PeerTube is a video publishing software that uses ActivityPub, meaning you can follow channels on PeerTube either with another PeerTube account, *or* with a Mastodon account because Mastodon also uses ActivityPub.

We chose to recommend Mastodon over other ActivityPub software as your primary social media platform for these reasons:

1. Mastodon has a solid history of security updates. In the handful of circumstances where major security vulnerabilities have been found, they coordinate patch releases quickly and cleanly. Historically they have also backported these security patches to older feature branches. This makes it easier for less experienced server hosts who may not feel comfortable upgrading to the latest releases right away to keep their instances secure. Mastodon also has an update notification system built in to the web interface, making it much more likely for server administrators to be aware of critical security patches available for their instance.

2. Mastodon is largely usable with most content types. While it is primarily a microblogging platform, Mastodon easily handles longer posts, image posts, video posts, and most other posts you might encounter when following ActivityPub users who aren't on Mastodon. This makes your Mastodon account an ideal "central hub" for following anyone regardless of the platform they chose to use. In contrast, if you were only using a PeerTube account, you would *only* be able to follow other video channels, for example.

3. Mastodon has fairly comprehensive privacy controls. It has many built-in features which allow you to limit how and when your data is shared, some of which we'll cover below. They also develop new features with privacy in mind. For example, while other ActivityPub software quickly implemented "quote posts" by merely handling links to other posts with a slightly different embed modal, Mastodon is [developing](https://blog.joinmastodon.org/2025/02/bringing-quote-posts-to-mastodon/) a quote post feature which will give you more fine-grained control when your post is quoted.

### Choosing an Instance

To benefit the most from Mastodon, it is critical to choose a server, or "instance," which is well aligned with the type of content you want to post or read about. While censorship in Mastodon does not exist on a network level, it is very possible to experience censorship on a server level depending on your server's administrator.

It is critical to understand that Mastodon is not a single, unified service in the way that X (Twitter) or Facebook are. Each server is its own legal entity, with its own privacy policy, terms of use, administration team, and moderators. While many of these servers are far *less* restrictive and more privacy-respecting than traditional social media platforms, some can be far *more* restrictive or potentially *worse* for your privacy. The Mastodon software does not discriminate between these administrators or place any limitations on their powers.

We do not currently recommend any specific instances, but you may find advice within our communities. We recommend avoiding *mastodon.social* and *mastodon.online* because they are operated by the same company which develops Mastodon itself. From the perspective of decentralization, it is better in the long term to separate software developers and server hosts so that no one party can exert too much control over the network as a whole.

If you are greatly concerned about an existing server censoring your content or the content you can view, you generally have two options:

1. **Host Mastodon yourself.** This approach gives you the exact same censorship resistance as any other website you can host yourself, which is fairly high. Mastodon even [integrates with the Tor network](https://docs.joinmastodon.org/admin/optional/tor) for more extreme scenarios where even your underlying hosting provider is subject to censorship, but this may limit who can access your content to only other servers which integrate with Tor, like most other hidden services.

    Mastodon benefits greatly from a large and active self-hosting community, and its administration is comprehensively documented. While many other ActivityPub platforms can require extensive technical knowledge to run and troubleshoot, Mastodon has very stable and tested releases, and it can generally be run securely without issue by anyone who can use the Linux command line and follow [step-by-step instructions](https://docs.joinmastodon.org/admin/prerequisites).

2. **Use a managed hosting service.** We don't have any specific recommendations, but there are a variety of Mastodon hosting services which will create a brand-new Mastodon server on your own domain (or occasionally a subdomain of their domain, but we recommend against this unless registering your own domain presents too much of a burden to your privacy).

    Typically, Mastodon hosting providers will handle the *technical* side of your instance, but they completely leave the *moderation* side up to you. This means that you will be able to follow any content you like, although it may expose you to more spam or unwanted content because you will not have the dedicated moderation team many larger instances will have.

    This often represents a better approach than self-hosting for most people, because you can benefit from greater control over your own instance without worrying about technical problems or unpatched security vulnerabilities.

    You should look closely at your hosting provider's terms of service and acceptable use policies before registering. These are often far more broad than typical hosted instance rules, and they are far less likely to be enforced without recourse, but they can still be restrictive in undesirable ways.

### Recommended Privacy Settings

From Mastodon's web interface, click the **Administration** link in the right sidebar. Within the administration control panel, you'll find these sections in the left sidebar:

#### Public Profile

There are a number of privacy controls under the **privacy and reach** tab here. Most notably, pay attention to these:

- [ ] **Automatically accept new followers**: You should consider unchecking this box to have a private profile. This will allow you to review who can follow your account before accepting them.

    In contrast to most social media platforms, if you have a private profile you still have the *option* to publish posts which are publicly visible to non-followers, and which can still be boosted and seen by non-followers. Therefore, unchecking this box is the only way to have the *choice* to publish to either the entire world or a select group of people.

- [ ] **Show follows and followers on profile**: You should uncheck this box to hide your social graph from the public. It is fairly uncommon for the list of people you follow to have some genuine benefit to others, but that information can present a risk to you.

- [ ] **Display from which app you sent a post**: You should uncheck this box to prevent revealing information about your personal computing setup to others unnecessarily.

The other privacy controls on this page should be read through, but we would stress that they are **not** technical controls—they are merely requests that you make to others. For example, if you choose to hide your profile from search engines on this page, **nothing** is actually stopping a search engine from reading your profile. You are merely requesting search engine indexes not publish your content to their users.

You will likely still wish to make these requests because they can practically reduce your digital footprint. However, they should not be *relied* upon. The only effective way to hide your posts from search engines and others is to post with non-public (followers only) visibility settings *and* limit who can follow your account.

#### Preferences

You should change your **posting privacy** setting from public to: **Followers-only - Only show to followers**.

Note that this only changes your default settings to prevent accidental over-sharing. You can always adjust your visibility level when composing a new post.

#### Automated post deletion

- [x] Check the **Automatically delete old posts** box.

The default settings here are fine, and will delete any posts you make after 2 weeks, unless you favorite (star) them. This gives you an easy way to control which posts stick around forever, and which ones are only ephemeral. Many settings about how long and when posts are kept can be adjusted here to suit your own needs, however.

It is very rare for social media posts older than a few weeks to be read or relevant to others. These older posts are often ignored because they are challenging to deal with in bulk, but they can build a fairly comprehensive profile about you over time. You should always strive to publish content ephemerally by default, and only keep posts around for longer than that very intentionally.

### Posting Content

When publishing a new post, you will have the option to choose from one of these visibility settings:

- **Public**, which publishes your content to anyone on the internet.
- **Quiet public**, which you should consider equivalent to publicly posting! This is not a technical guarantee, merely a request you are making to other servers to hide your post from some feeds.
- **Followers**, which publishes your content only to your followers. If you did not follow our recommendation of restricting your followers, you should consider this equivalent to publicly posting!
- **Specific people**, which only shares the post with people who are specifically mentioned within the post. This is Mastodon's version of direct messages, but should never be relied on for private communications as we covered earlier, since Mastodon has no E2EE.

If you used our recommended configuration settings above, you should be posting to **Followers** by default, and only posting to **Public** on an intentional and case-by-case basis.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be free and open source software.
- Must use a federated protocol to communicate with other instances of the social networking software.
- Must not have non-technical restrictions on who can be federated with.
- Must be usable within a standard [web browser](desktop-browsers.md).
- Must make public content accessible to visitors without an account.
- Must allow you to limit who can follow your profile.
- Must allow you to post content visible only to your followers.
- Must support modern web application security standards/features (including [multifactor authentication](multi-factor-authentication.md)).

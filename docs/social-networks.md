---
title: Social Networks
icon: material/account-supervisor-circle-outline
description: Find a new social network that doesn’t pry into your data or monetize your profile.
cover: social-networks.webp
---
<small>Protects against the following threat(s):</small>

- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }
- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

These privacy-respecting **social networks** allow you to participate in online communities without giving up your personal information like your full name, phone number, and other data commonly requested by tech companies.

A growing problem among social media platforms is censorship in two different forms. First, they often acquiesce to illegitimate censorship requests, either from malicious governments or their own internal policies. Second, they often require accounts to access walled-off content that would otherwise be published freely on the open internet; this effectively censors the browsing activities of privacy-conscious users who are unable to pay the privacy cost of opening an account on these networks.

The social networks we recommend solve the issue of censorship by operating atop an open and decentralized social networking protocol. They also don't require an account merely to view publicly available content.

You should note that **no** social networks are appropriate for private or sensitive communications. For chatting directly with others, you should use a recommended [instant messenger](real-time-communication.md) with strong end-to-end encryption, and only use direct messages on social media in order to establish a more private and secure chat platform with your contacts.

## Decentralization

Decentralized social networks are built on an architecture that is fundamentally different than mainstream social media platforms, yet quite similar to the underlying structure of email. Instead of opening an account under a single, unified service like you would for Facebook or Discord, you instead choose an independent, public server to join. The server you join can communicate with and discover other servers; this aspect of decentralization is also known as *federation*.

A significant benefit of this decentralized model is that there is no central authority which can censor your account across the entire network, though it is possible for your account to be banned or silenced by an individual server.

A caveat of this decentralized model is that each server is its own legal entity, with its own privacy policy, terms of use, administration team, and moderators. While many of these servers are far *less* restrictive and more privacy-respecting than traditional social media platforms, some can be far *more* restrictive or potentially *worse* for your privacy. Typically, the software on which the social network runs does not discriminate between these administrators or place any limitations on their powers.

## Censorship Resistance

While censorship in decentralized social networks does not exist on a network level, it is very possible to experience censorship on a server level depending on a server's administrator. Administrators have the power to *defederate* from other servers, which leads to limiting the content you can view and the people you can interact with.

If you are greatly concerned about an existing server censoring your content, the content available to you, or other servers, you generally have two options:

1. **Host the social network software yourself.** This approach gives you the exact same censorship resistance as any other website you can host yourself, which is fairly high.

2. **Use a managed hosting service.** We don't have any specific recommendations, but there are a variety of hosting services which will create a brand-new server on your own domain (or occasionally a subdomain of their domain, but we recommend against this unless registering your own domain presents too much of a burden to your privacy).

    Typically, hosting providers will handle the *technical* side of your server, but completely leave the *moderation* side up to you. This often represents a better approach than self-hosting for most people because you can benefit from greater control over your own server without worrying about technical problems or unpatched security vulnerabilities.

    You should look closely at your hosting provider's terms of service and acceptable use policies before registering. These are often far more broad than typical hosted server rules, and they are far less likely to be enforced without recourse, but they can still be restrictive in undesirable ways.

## Mastodon

<div class="admonition recommendation" markdown>

![Mastodon logo](assets/img/social-networks/mastodon.svg){ align=right }

**Mastodon** is a social network based on open web protocols and free, open-source software. It uses the **:simple-activitypub: ActivityPub** protocol, which is decentralized like email: Users can exist on different servers or even different platforms but still communicate with each other.

[:octicons-home-16: Homepage](https://joinmastodon.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://docs.joinmastodon.org){ .card-link title="Documentation" }

</div>

There are many software platforms which use ActivityPub as their backend social networking protocol, meaning they can talk to servers even when they are running different software. For example, PeerTube is a video publishing software that uses ActivityPub, meaning you can follow channels on PeerTube either with another PeerTube account, *or* with a Mastodon account because Mastodon also uses ActivityPub.

We chose to recommend Mastodon over other ActivityPub software as your primary social media platform for these reasons:

1. Mastodon has a solid history of security updates. In the handful of circumstances where major security vulnerabilities have been found, they coordinate patch releases quickly and cleanly. Historically they have also backported these security patches to older feature branches. This makes it easier for less experienced server hosts who may not feel comfortable upgrading to the latest releases right away to keep their instances secure. Mastodon also has an update notification system built in to the web interface, making it much more likely for server administrators to be aware of critical security patches available for their instance.

2. Mastodon is largely usable with most content types. While it is primarily a microblogging platform, Mastodon easily handles longer posts, image posts, video posts, and most other posts you might encounter when following ActivityPub users who aren't on Mastodon. This makes your Mastodon account an ideal "central hub" for following anyone regardless of the platform they chose to use. In contrast, if you were only using a PeerTube account, you would *only* be able to follow other video channels, for example.

3. Mastodon has fairly comprehensive privacy controls. It has many built-in features which allow you to limit how and when your data is shared, some of which we'll cover below. They also develop new features with privacy in mind. For example, while other ActivityPub software quickly implemented "quote posts" by merely handling links to other posts with a slightly different embed modal, Mastodon is [developing](https://blog.joinmastodon.org/2025/02/bringing-quote-posts-to-mastodon) a quote post feature which will give you more fine-grained control when your post is quoted.

### Choosing an Instance

To benefit the most from Mastodon, it is critical to choose a server, or "instance," which is well aligned with the type of content you want to post or read about. We do not currently recommend any specific instances, but you may find advice within our communities. We recommend avoiding *mastodon.social* and *mastodon.online* because they are operated by the same company which develops Mastodon itself. From the perspective of decentralization, it is better in the long term to separate software developers and server hosts so that no one party can exert too much control over the network as a whole.

### Recommended Privacy Settings

From Mastodon's web interface, click the **Administration** link in the right sidebar. Within the administration control panel, you'll find these sections in the left sidebar:

#### Public Profile

There are a number of privacy controls under the **privacy and reach** tab here. Most notably, pay attention to these:

- [ ] **Automatically accept new followers**: You should consider unchecking this box to have a private profile. This will allow you to review who can follow your account before accepting them.

    In contrast to most social media platforms, if you have a private profile you still have the *option* to publish posts which are publicly visible to non-followers and can still be boosted by non-followers. Therefore, unchecking this box is the only way to have the *choice* to publish to either the entire world or a select group of people.

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
- **Quiet public**, which you should consider equivalent to publicly posting! This is not a technical guarantee, but merely a request you are making to other servers to hide your post from some feeds.
- **Followers**, which publishes your content only to your followers. If you did not follow our recommendation of restricting your followers, you should consider this equivalent to publicly posting!
- **Specific people**, which only shares the post with people who are specifically mentioned within the post. This is Mastodon's version of direct messages, but should never be relied on for private communications as we covered earlier since Mastodon has no E2EE.

If you used our recommended configuration settings above, you should be posting to **Followers** by default, and only posting to **Public** on an intentional and case-by-case basis.

## Element

<div class="admonition recommendation" markdown>

![Element logo](assets/img/social-networks/element.svg){ align=right }

**Element** is the flagship client for the **:simple-matrix: [Matrix](https://matrix.org/docs/chat_basics/matrix-for-im)** protocol, an [open standard](https://spec.matrix.org/latest) that enables decentralized communication by way of federated chat rooms. Users can exist on different homeservers but still communicate with each other.

[:octicons-home-16: Homepage](https://element.io){ .md-button .md-button--primary }
[:octicons-eye-16:](https://element.io/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://element.io/help){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/element-hq){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1083446067)
- [:simple-github: GitHub](https://github.com/element-hq/element-android/releases)
- [:fontawesome-brands-windows: Windows](https://element.io/download)
- [:simple-apple: macOS](https://element.io/download)
- [:simple-linux: Linux](https://element.io/download)
- [:octicons-browser-16: Web](https://app.element.io)

</details>

</div>

### Choosing a Homeserver

To benefit the most from Matrix, it is critical to choose a homeserver which is well aligned with the subject(s) you want to chat about. We do not currently recommend any specific homeservers, but you may find advice within our communities or third-party resources like [*joinmatrix.org*](https://servers.joinmatrix.org). We recommend avoiding *matrix.org* because they are operated by the same company which develops Matrix itself. From the perspective of decentralization, it is better in the long term to separate software developers and server hosts so that no one party can exert too much control over the network as a whole.

### Recommended Privacy Settings

From Element's web or desktop app, go to :gear: → **All settings** to find these sections:

#### Sessions

By default, when you log in to Element on a new device, the session name will be automatically populated with the Matrix client and platform you used for login. This information may be visible to other users depending on the Matrix client they use.

To prevent revealing information about your personal device to others unnecessarily, consider emptying the session name; this will change the session name to the randomly generated alphanumeric Session ID instead.

#### Preferences

- [ ] Uncheck **Send read receipts**
- [ ] Uncheck **Send typing notifications**

You should uncheck these options to reduce the exposure of metadata to other users when chatting in a public room.

#### Voice & Video

- [ ] Uncheck **Allow Peer-to-Peer for 1:1 calls**
- [ ] Uncheck **Allow fallback call assist server (turn.matrix.org)**

If you do decide to use Element for one-to-one communication, we recommend unchecking these settings to prevent the exposure of your IP address to the other party.

#### Security & Privacy

##### Manage integrations (scalar.vector.im)

A Matrix integration manager connects Matrix to third-party services such as bots, bridges, and other enhancements. Element collects information to provide these services to those using an integration manager; you can review its detailed [Privacy Notice](https://element.io/integration-manager-privacy-notice) for the exact information Element collects and the ways it uses such information.

As an end user on a public homeserver, you can consider unchecking the **Enable the integration manager** option, which does not affect the visibility of bots or other third-party services. As a homeserver administrator, consider whether the additional parties with which you share your data are worth the extra functionality.

##### Sessions

- [ ] (Optional) Uncheck **Record the client name, version, and url to recognize sessions for easily in session manager**

Unchecking this option may make it more diffcult to discern your active sessions if you logged in to your Matrix account on multiple devices.

#### Encryption

- [x] (Optional) Check **In encrypted rooms, only send messages to verified users**

With this setting enabled, unverified users (i.e., those who have not used the **Verify User** function) and unverified devices of verified users will not receive your messages in a room with encryption enabled. This may limit the messages you can view and the people you can interact with.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be free and open-source software.
- Must use a federated protocol to communicate with other instances of the social networking software.
- Must not have non-technical restrictions on who can be federated with.
- Must be usable within a standard [web browser](desktop-browsers.md).
- Must make public content accessible to visitors without an account.
- Must allow you to limit who can follow your profile.
- Must allow you to post content visible only to your followers.
- Must support modern web application security standards/features (including [multifactor authentication](multi-factor-authentication.md)).

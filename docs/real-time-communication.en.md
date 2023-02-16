---
title: "Real-Time Communication"
icon: material/chat-processing
---

These are our recommendations for encrypted real-time communication.

[Types of Communication Networks :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Encrypted Messengers

These messengers are great for securing your sensitive communications.

### Signal

!!! recommendation

    ![Signal logo](assets/img/messengers/signal.svg){ align=right }

    **Signal** is a mobile app developed by Signal Messenger LLC. The app provides instant messaging, as well as voice and video calling.

    All communications are E2EE. Contact lists are encrypted using your Signal PIN and the server does not have access to them. Personal profiles are also encrypted and only shared with contacts you chat with.

    [:octicons-home-16: Homepage](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.signal.org/hc/en-us){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://signal.org/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id874139669)
        - [:simple-android: Android](https://signal.org/android/apk/)
        - [:simple-windows11: Windows](https://signal.org/download/windows)
        - [:simple-apple: macOS](https://signal.org/download/macos)
        - [:simple-linux: Linux](https://signal.org/download/linux)

Signal supports [private groups](https://signal.org/blog/signal-private-group-system/). The server has no record of your group memberships, group titles, group avatars, or group attributes. Signal has minimal metadata when [Sealed Sender](https://signal.org/blog/sealed-sender/) is enabled. The sender address is encrypted along with the message body, and only the recipient address is visible to the server. Sealed Sender is only enabled for people in your contacts list, but can be enabled for all recipients with the increased risk of receiving spam. Signal requires your phone number as a personal identifier.

The protocol was independently [audited](https://eprint.iacr.org/2016/1013.pdf) in 2016. The specification for the Signal protocol can be found in their [documentation](https://signal.org/docs/).

We have some additional tips on configuring and hardening your Signal installation:

[Signal Configuration and Hardening :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! recommendation

    ![Simplex logo](assets/img/messengers/simplex.svg){ align=right }

    **SimpleX** Chat is an instant messenger that is decentralized and doesn't depend on any unique identifiers such as phone numbers or usernames. Users of SimpleX Chat can scan a QR code or click an invite link to participate in group conversations.

    [:octicons-home-16: Homepage](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases)

SimpleX Chat [was audited](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) by Trail of Bits in October 2022.

Currently SimpleX Chat only provides a client for Android and iOS. Basic group chatting functionality, direct messaging, editing of messages and markdown are supported. E2EE Audio and Video calls are also supported.

Your data can be exported, and imported onto another device, as there are no central servers where this is backed up.

### Briar

!!! recommendation

    ![Briar logo](assets/img/messengers/briar.svg){ align=right }

    **Briar** is an encrypted instant messenger that [connects](https://briarproject.org/how-it-works/) to other clients using the Tor Network. Briar can also connect via Wi-Fi or Bluetooth when in local proximity. Briar’s local mesh mode can be useful when internet availability is a problem.

    [:octicons-home-16: Homepage](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentation}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Donation options are listed on the bottom of the homepage" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

To add a contact on Briar, you must both add each other first. You can either exchange `briar://` links or scan a contact’s QR code if they are nearby.

The client software was independently [audited](https://briarproject.org/news/2017-beta-released-security-audit/), and the anonymous routing protocol uses the Tor network which has also been audited.

Briar has a fully [published specification](https://code.briarproject.org/briar/briar-spec).

Briar supports perfect forward secrecy by using the Bramble [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) and [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) protocol.

## Additional Options

!!! warning

    These messengers do not have Perfect [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) (PFS), and while they fulfill certain use-cases that our previous recommendations may not, we do not recommend them for long-term or sensitive communications. Any key compromise among message recipients would affect the confidentiality of **all** past communications.

### Element

!!! recommendation

    ![Element logo](assets/img/messengers/element.svg){ align=right }

    **Element** is the reference client for the [Matrix](https://matrix.org/docs/guides/introduction) protocol, an [open standard](https://matrix.org/docs/spec) for secure decentralized real-time communication.

    Messages and files shared in private rooms (those which require an invite) are by default E2EE as are one to one voice and video calls.

    [:octicons-home-16: Homepage](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

Profile pictures, reactions, and nicknames are not encrypted.

Group voice and video calls are [not](https://github.com/vector-im/element-web/issues/12878) E2EE, and use Jitsi, but this is expected to change with [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). Group calls have [no authentication](https://github.com/vector-im/element-web/issues/13074) currently, meaning that non-room participants can also join the calls. We recommend that you do not use this feature for private meetings.

The Matrix protocol itself [theoretically supports PFS](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy), however this is [not currently supported in Element](https://github.com/vector-im/element-web/issues/7101) due to it breaking some aspects of the user experience such as key backups and shared message history.

The protocol was independently [audited](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) in 2016. The specification for the Matrix protocol can be found in their [documentation](https://spec.matrix.org/latest/). The [Olm](https://matrix.org/docs/projects/other/olm) cryptographic ratchet used by Matrix is an implementation of Signal’s [Double Ratchet algorithm](https://signal.org/docs/specifications/doubleratchet/).

### Session

!!! recommendation

    ![Session logo](assets/img/messengers/session.svg){ align=right }

    **Session** is a decentralized messenger with a focus on private, secure, and anonymous communications. Session offers support for direct messages, group chats, and voice calls.

    Session uses the decentralized [Oxen Service Node Network](https://oxen.io/) to store and route messages. Every encrypted message is routed through three nodes in the Oxen Service Node Network, making it virtually impossible for the nodes to compile meaningful information on those using the network.

    [:octicons-home-16: Homepage](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session allows for E2EE in one-on-one chats or closed groups which allow for up to 100 members. Open groups have no restriction on the number of members, but are open by design.

Session does [not](https://getsession.org/blog/session-protocol-technical-information) support PFS, which is when an encryption system automatically and frequently changes the keys it uses to encrypt and decrypt information, such that if the latest key is compromised it exposes a smaller portion of sensitive information.

Oxen requested an independent audit for Session in March of 2020. The audit [concluded](https://getsession.org/session-code-audit) in April of 2021, “The overall security level of this application is good and makes it usable for privacy-concerned people.”

Session has a [whitepaper](https://arxiv.org/pdf/2002.04609.pdf) describing the technicals of the app and protocol.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must have open-source clients.
- Must use E2EE for private messages by default.
- Must support E2EE for all messages.
- Must have been independently audited.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should have Perfect Forward Secrecy.
- Should have open-source servers.
- Should be decentralized, i.e. federated or P2P.
- Should use E2EE for all messages by default.
- Should support Linux, macOS, Windows, Android, and iOS.

---
title: Phone Service
icon: material/phone
description: These providers allow you to obtain phone service without providing identifying information.
---

Phone numbers are a fact of life for registering on many internet services, but they can be very difficult to obtain privately. These providers should help you bypass the usual identity verification requirements many large mobile carriers have in place. It is important to note that traditional telephony in general is not anonymous or particularly secure. For sensitive person-to-person communications, we strongly recommend using an instant messaging medium that supports forward secrecy instead:

[Recommended Instant Messengers :material-arrow-right-drop-circle:](real-time-communication.md){ .md-button }

## VoIP Providers

**Voice-over-IP** is the technology which allows phone calls and text messages to be sent over the internet. Consumer VoIP providers are often used as a way to obtain a secondary phone number or multiple phone numbers without providing identifying information. Phone numbers are commonly used by internet services to uniquely identify you, so using the same number between every service is a fingerprinting tactic service providers can use to track you. It is also often more challenging for most people to change their "primary" phone number, so using a secondary VoIP number with less important services and contacts can save you a huge hassle when that secondary phone number is compromised.

These providers offer improved privacy by allowing you to obtain a phone number without providing your personal information, and by allowing you to easily create and dispose of phone numbers as needed, but they do **not** provide encrypted communications, so the service provider will always have full insight into your communications.

### JMP.chat

!!! recommendation

    **JMP.chat** is an advanced service which provides US or Canadian phone numbers which can be accessed with any XMPP client. It also allows you to [port in](https://jmp.chat/faq#existing) your existing phone number.

    [:octicons-home-16: Homepage](https://jmp.chat/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://jmp.chat/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://jmp.chat/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://soprani.ca/){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-android: Android](https://git.singpolyma.net/cheogram-android/refs)

JMP.chat has a fork of Conversations.im for Android called [Cheogram](https://cheogram.com/) which has some JMP-specific features, including Android dialer integration and other calling improvements. They otherwise [recommend](https://jmp.chat/faq) [Conversations.im](https://conversations.im/) on Android, [Snikket](https://apps.apple.com/ca/app/snikket/id1545164189) on iOS, [Gajim](https://gajim.org/) for desktop, or [Movim](https://mov.im/?login) on the web, however any XMPP client can be used.

JMP.chat requires you have an existing XMPP account which you can self-host or get for free with many providers. Choosing an XMPP provider is outside the scope of this site, although JMP.chat recommends [Movim](https://mov.im/) or [Snikket Hosting](https://snikket.org/hosting/).

You can also use JMP.chat with a [Matrix](real-time-communication.md#element) account instead of XMPP by choosing "I am a Matrix user" during registration. This is considered alpha as of [March 2022](https://blog.jmp.chat/b/march-newsletter-2022).

JMP.chat is built on top of [Soprani.ca](https://soprani.ca/)'s suite of open-source telephony projects. For more information, see our entry on [Cheogram](#cheogram-sopranica).

### MySudo

!!! recommendation

    ![MySudo logo](assets/img/voip/mysudo.svg){ align=right }

    **MySudo** provides up to 9 phone numbers depending on the plan you purchase. This is the easiest provider to use, only requiring a standard registration with their official apps.

    [:octicons-home-16: Homepage](https://mysudo.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonyome.com/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.mysudo.com/hc/en-us){ .card-link title=Documentation}

    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.anonyome.mysudo)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/mysudo-private-secure/id1237892621)
        - [:octicons-globe-16: Web (Beta)](https://web.mysudo.com/)

MySudo's paid plans additionally include functionality which may be useful for making purchases privately, such as [virtual card numbers](financial-services.md#payment-masking-services) and email addresses, although we typically recommend other [email aliasing providers](email.md) for extensive email aliasing use.

MySudo requires regisration via their mobile app, and has no desktop client (only a beta [web app](https://web.mysudo.com/)). Some users report issues with MySudo on "de-Googled" [Android operating systems](android.md) like GrapheneOS, particularly with registration. You can test out MySudo with a free account to determine whether it will work for you.

### Hushed

!!! recommendation

    **Hushed** provides prepaid or monthly-subscription phone numbers. You can purchase unlimited numbers on a single account.

    [:octicons-home-16: Homepage](https://hushed.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://hushed.com/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.hushed.com/hc/en-us){ .card-link title=Documentation}

    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.hushed.release)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/hushed-second-phone-number/id600520752)
        - [:octicons-globe-16: Web](https://app.hushed.com/signup)

!!! warning

    Hushed's mobile apps and website do have some privacy unfriendly [dependencies](https://reports.exodus-privacy.eu.org/en/reports/com.hushed.release/latest/), including Google Analytics.

Hushed occasionally offers "[lifetime](https://stacksocial.com/sales/hushed-private-phone-1-line-plan-1000-mins-6000-sms)" plans, which makes it a popular affordable option for a single secondary phone number. Remember that lifetime plans last for the lifetime of the service, not your own lifetime.

Hushed allows registrations via their website, making them the easiest VoIP provider choice if you don't have a mobile device.

### Self-Hosted

It is possible to self-host most aspects of a VoIP server, however you will typically still need an account with a commercial VoIP exchange to actually interconnect with the regular telephone network. Most people use accounts with providers like Twilio, Vonage, or Telnyx, but choosing a specific provider is outside the scope of this guide. Self-hosting gives you the advantage of greater control over how your messages are stored and processed, more flexibility about which underlying VoIP provider you utilize, potentially unlimited phone numbers, and cost benefits in some cases.

!!! danger "Advanced Topic"

    These applications may require extensive knowledge and work to configure correctly, which is outside the scope of this site. Proceed at your own risk!

#### Cheogram (Soprani.ca)

!!! recommendation

    **Cheogram** is a platform which bridges the telephony network with XMPP (and Matrix in alpha). This is the backend used by the hosted **JMP.chat** product.

    [:octicons-home-16: Homepage](https://cheogram.com/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.soprani.ca/){ .card-link title=Documentation}
    [:octicons-code-16:](https://soprani.ca/){ .card-link title="Source Code" }

    ??? downloads

        - [:simple-android: Android](https://git.singpolyma.net/cheogram-android/refs)

Cheogram is a project by [Soprani.ca](https://soprani.ca/), an initiative for bridging phone numbers to the internet with open standards, servers, and clients. Cheogram bridges SMS with XMPP with software called an SGX ("Soprani.ca Gateway to XMPP"). You can choose to use Cheogram/Soprani.ca's hosted SGX with your own Vonage or Twilio account, or host your own SGX instance.

- [Using your own instance of the Vonage SGX](https://wiki.soprani.ca/VonageSetup#Using_your_own_instance_of_the_Vonage_SGX)
- [Using Vonage with Soprani.ca's SGX](https://wiki.soprani.ca/VonageSetup)
- [Using Twilio with Soprani.ca's SGX](https://wiki.soprani.ca/TwilioSetup)

Twilio or Vonage both require an existing phone number to register. According to Soprani.ca, Vonage is the only VoIP provider they have found which accepts VoIP numbers (such as JMP numbers) for registration.

#### Operation Privacy VoIP

!!! recommendation

    **Operation Privacy** provides an open-source web dashboard for interfacing with Twilio or Telnyx, enabling SMS, MMS, and voice calling via your provider's API.

    [:octicons-repo-16: Repository](https://github.com/0perationPrivacy/VoIP){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/0perationPrivacy/voip/wiki){ .card-link title=Documentation}

If you have a Twilio or Telnyx account you can use the official hosted online service at [voip.operationprivacy.com](https://voip.operationprivacy.com/) with your own API keys, however this does give the instance provider insight into your messages. You can also [host it for free on Render](https://github.com/0perationPrivacy/voip/wiki/Cloud-Hosting) or [host it on your own Linux server](https://github.com/0perationPrivacy/VoIP/discussions/49).

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Does not require personal phone number for registration.
- Offers multiple phone numbers.
- Capable of SMS, MMS, and standard voice calls to non-VoIP phone numbers.
- Available on iOS and Android.

## Cellular Providers

It is difficult to privately obtain actual cellular network service in most areas, however these newer service operators provide some advantages over alternatives in the space.

### Silent Link

This is our favorite cell service option if you want to pay with [cryptocurrency](cryptocurrency.md).

!!! recommendation

    **Silent Link** allows you to obtain affordable mobile internet data eSIMs with [cryptocurrency](cryptocurrency.md) and no KYC at affordable pricing, which can be paired with any recommended VoIP provider above for voice/SMS service. They additionally offer phone numbers in the US and UK, with some restrictions.

    [:octicons-home-16: Homepage](https://silent.link/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://silent.link/faq){ .card-link title=Documentation }

Silent Link's US and UK phone numbers support **inbound** call and text **only**, meaning Silent Link cannot be used as a replacement for traditional cell service entirely. However, their phone numbers are considered traditional cell network numbers, meaning that they can be used with many websites which block VoIP phone numbers for text message verification codes.

This service requires an eSIM compatible phone, like the [Google Pixel](android.md#android-devices).

### Pretty Good Phone Privacy

!!! danger

    PGPP makes some claims about how their mobile network does not require trust in Invisv as a network provider, but they are not entirely accurate. Make sure you read this entry entirely before determining whether PGPP makes sense for you.

This is our favorite cell service option if you want to pay with traditional payment methods, or need unlimited mobile data.

!!! recommendation

    **Pretty Good Phone Privacy** (**PGPP**) is a data-only eSIM service from Invisv, which can be paired with any recommended VoIP provider above for voice/SMS service.

    [:octicons-home-16: Homepage](https://invisv.com/pgpp/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://www.usenix.org/system/files/sec21-schmitt.pdf){ .card-link title=Documentation}

    ??? downloads

        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.invisv.pgpp)
        - [:simple-android: Android](https://invisv.com/articles/pgpp-updates.html#f-droid-and-apk)

Invisv does collect your billing information through Stripe, their payment processor. However, PGPP's use of [blinded tokens](https://en.wikipedia.org/wiki/Blind_signature) for network authentication mean that Invisv cannot tie that billing information to your device. In other words, Invisv would be able to tell that "John Doe" has a PGPP account, but would not be able to determine which phone on their network belongs to "John Doe."

Invisv additionally claims that your device cannot be tracked by the network because they periodically randomize your IMSI number, the identifier tied to your SIM card used to identify a subscriber. ==Unfortunately, this practice alone does **not** thwart device tracking.== Another identifier sent to networks is the IM**E**I number, the identifier tied to your phone hardware. You can think of an IMEI as your phone's "[MAC Address](os/linux-overview.md#mac-address-randomization)," except unlike with Wi-Fi/Ethernet MAC Addresses, randomizing or spoofing the IMEI is not possible and even illegal in certain countries.

Therefore, unless you *also* physically swap your phone hardware every few days, ==it would be trivial for the network operator to build a location profile of a specific device despite IMSI randomization, because your IMEI is a static identifier visible to the network.== Additionally, PGPP will not even protect against anything but the most basic third-party [IMSI-catchers](https://en.wikipedia.org/wiki/IMSI-catcher), because most modern IMSI-catchers can track IMEI as well.

This service requires an eSIM compatible Android phone, like the [Google Pixel](android.md#android-devices).

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Does not tie billing information to network access.

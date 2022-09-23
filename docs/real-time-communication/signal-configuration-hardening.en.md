---
title: "Signal Configuration and Hardening"
icon: 'simple/signal'
---

[Signal](../real-time-communication.md#signal) is a widely regarded instant messaging service that is not only easy to use but is also private and secure. Signal's strong E2EE implementation and metadata protections provide a level of assurance that only you and your intended recipients are able to read communications.

This guide details actions you can take to configure and harden Signal in accordance with your [threat model](../basics/threat-modeling.md).

## Signal Configuration

### Signal PIN

When you register for Signal with your phone number, you will be asked to set up a Signal PIN. This PIN can be used to recover your profile, settings, contacts and who you've blocked in case you ever lose or switch devices.

Additionally, your Signal PIN can also double as a registration lock that prevents others from registering with your number.

!!! attention "Registration Lock"

    The server will not enforce the registration lock after 7 days of inactivity. After that, someone will be able to reset the PIN at registration and register with your phone number. This will wipe the data stored in your Signal account, as it is encrypted by the PIN, but it won't prevent someone from registering with your number provided that they can receive a text on it.

If you haven't set up a Signal PIN, or have previously opted out of setting one up, follow these steps on Android/iOS:

- Select :material-dots-vertical: > **Settings** > **Account** > **Signal PIN**
- Select **Create new PIN**

Signal will prompt you to enter a PIN. We suggest using a strong alphanumeric PIN that can be stored in a [password manager](../passwords.md).

Once you have done that, or if you already have set up a PIN, make sure that **Registration Lock** is also enabled.

- Select :material-dots-vertical: > **Settings** > **Account** > **Signal PIN**
- [x] Turn on **Registration Lock**

!!! Important

    If you forget the PIN and have enabled a registration lock, you may be locked out of your account for up to 7 days.

You can learn more about Signal PIN on [Signal's website](https://support.signal.org/hc/en-us/articles/360007059792-Signal-PIN).

### Safety Numbers

Safety numbers are a feature in Signal that allows you to ensure that messages are delivered securely between verified devices.

It is best practice to always compare safety numbers with your contacts. This can be done in a couple of ways:

- Scanning your contact's QR code while viewing their safety number.
- Comparing the safety numbers on both ends, be it visually or audibly.

!!! Important

    In order for safety numbers to also verify that the intended recipient has access to the device you're verifying, you need a secondary communication channel where you can authenticate the person that is holding the device. For example, an in-person meeting or during a video call.

To view the safety number for a particular contact, you need to follow these steps within Signal:

- Go to a chat with a contact.
- Select the chat header or :material-dots-vertical: > **View Safety Number**

Once you've compared the safety numbers on both devices, you can mark that contact as **Verified**.

A checkmark will appear in the chat header by your contact's name when the safety number is marked as verified. It will remain verified unless the safety number changes or you manually change the verification status.

After doing that, any time the safety number changes, you'll be notified.

If the safety number with one of your contacts changes, we recommend asking the contact what happened (if they switched to a new device or re-installed Signal, for example) and verify the safety numbers again.

For more demanding threat models, you should agree on a protocol with your contacts in advance on what to do in case the safety number ever changes.

You can learn more about safety numbers on [Signal's website](https://support.signal.org/hc/en-us/articles/360007060632-What-is-a-safety-number-and-why-do-I-see-that-it-changed-).

### Disappearing Messages

While communication in Signal is E2EE, the messages are still available on the devices, unless they are manually deleted.

It is good practice to set up disappearing messages in Signal's settings so that any chats you start will disappear after a specified amount of time has passed.

On Android/iOS:

- Select :material-dots-vertical: > **Settings** > **Privacy**
- Under **Disappearing messages**, select **Default timer for new chats**
- Select the desired amount of time and select **Save**

!!! tip "Override the global default for specific contacts"

    - Go to a chat with a contact
    - Select :material-dots-vertical: on the top right
    - Select **Disappearing messages**
    - Select the desired amount of time and select **Save**

We recommend setting up a reasonable timer by default, such as one week, and adjusting it per contact as you see fit.

!!! tip "Snapchat-like Functionality"

    Signal allows you to send "view-once" media that are automatically removed from the conversation after they have been viewed.

### Disable Link Previews

Signal offers the ability to retrieve previews of webpages linked within a conversation.

This means that when you send a link, a request will be sent to that website so that a preview of the website can be displayed alongside the link. Thus, we recommend disabling link previews.

Your recipient doesn't make any requests unless they open the link on their end.

On Android/iOS:

- Select :material-dots-vertical: > **Settings** > **Chats**
- [ ] Turn off **Generate link previews**

### Screen Security

Signal allows you to prevent a preview of the app being shown (i.e., in the app switcher) unless you explicitly open it.

On Android:

- Select :material-dots-vertical: > **Settings** > **Privacy**
- [x] Turn on **Screen Security**

On iOS:

- Select :material-dots-vertical: > **Settings** > **Privacy**
- [x] Turn on **Hide Screen in App Switcher**

### Screen Lock

If someone gets a hold of your device while it is unlocked, you run the risk of them being able to open the Signal app and look at your conversations.

To mitigate this, you can leverage the Screen Lock option to require additional authentication before Signal can be accessed.

On Android/iOS:

- Select :material-dots-vertical: > **Settings** > **Privacy**
- [x] Turn on **Screen Lock**

### Notification Privacy

Even when your phone is locked, anyone who can lay eyes on the device can read messages and sender names from your lock screen.

On Signal, you have the ability to hide message content and sender name, or just the message content itself.

On Android:

- Select :material-dots-vertical: > **Settings** > **Notifications**
- Select **Show**
- Select **No name or message** or **Name only** respectively.

On iOS:

- Select :material-dots-vertical: > **Settings** > **Notifications**
- Select **Show**
- Select **No name or Content** or **Name Only** respectively.

### Call Relaying

Signal allows you to relay all calls (including video calls) through the Signal server to avoid revealing your IP address to your contact. This may reduce call quality.

On Android/iOS:

- Select :material-dots-vertical: > **Settings** > **Privacy** > **Advanced**
- [x] Turn on **Always Relay Calls**

For incoming calls from people who are not in your Contacts app, the call will be relayed through the Signal server regardless of how you've set it up.

### Proxy Support

If Signal is blocked in your country, Signal allows you to set up a proxy to bypass it.

!!! Warning

    All traffic remains opaque to the proxy operator. However, the censoring party could learn that you are using Signal through a proxy because the app [fails to route all the IP connections to the proxy](https://community.signalusers.org/t/traffic-not-routed-to-tls-proxies-can-expose-users-to-censors/27479).

You can learn more about Signal's proxy support on their [website](https://support.signal.org/hc/en-us/articles/360056052052-Proxy-Support).

### Disable Signal Call History (iOS)

Signal allows you to see your call history from your regular phone app. This allows your iOS device to sync your call history with iCloud, including who you spoke to, when, and for how long.

If you use iCloud and you don’t want to share call history on Signal, confirm it’s turned off:

- Select :material-dots-vertical: > **Settings** > **Privacy**
- [ ] Turn off **Show Calls in Recents**

## Signal Hardening

### Avoid Device Linking

While it may be tempting to link your Signal account to your desktop device for convenience, keep in mind that this extends your trust to an additional and potentially less secure operating system.

If your threat model calls for it, avoid linking your Signal account to a desktop device to reduce your attack surface.

### Endpoint Security

Signal takes security very seriously, however there is only so much an app can do to protect you.

It is very important to take device security on both ends into account to ensure that your conversations are kept private.

We recommend an up-to-date [GrapheneOS](../android.md#grapheneos) or iOS device.

### Molly (Android)

On Android you can consider using **Molly**, a fork of the Signal mobile client which aims to provide extensive hardening and anti-forensic features.

!!! recommendation

    ![Molly logo](../assets/img/messengers/molly.svg){ align=right }

    **Molly** is an independent Signal fork which offers additional security features, including locking the app at rest, securely shredding unused RAM data, routing via Tor, and more.

    [:octicons-home-16: Homepage](https://molly.im/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/mollyim/mollyim-android/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mollyim/mollyim-android){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/mollyim){ .card-link title=Contribute }

    ??? downloads

         - [:simple-fdroid: F-Droid](https://molly.im/download/fdroid/)
         - [:simple-github: GitHub](https://github.com/mollyim/mollyim-android/releases)

Molly offers two variants of the app: **Molly** and **Molly-FOSS**.

The former is identical to Signal with the addition of Molly's improvements and security features. The latter, Molly-FOSS, removes Google's proprietary code, which is used for some key features (e.g., [FCM](https://en.wikipedia.org/wiki/Firebase_Cloud_Messaging) and Google Maps integration), in an effort to make it fully open-source.

A comparison of the two versions is available in the [project's repository](https://github.com/mollyim/mollyim-android#readme).

Both versions of Molly support [reproducible builds](https://github.com/mollyim/mollyim-android/tree/main/reproducible-builds), meaning it's possible to confirm that the compiled APKs match the source code.

#### Features

Molly has implemented database encryption at rest, which means that you can encrypt the app's database with a passphrase to ensure that none of its data is accessible without it.

!!! note

    As long as Molly is locked, you will not receive notifications for any incoming messages or calls until you unlock it again.

Once enabled, a configurable lock timer can be set, after which point Molly will lock itself if you haven't unlocked your device for that specific time period. Alternatively, you can manually lock the app whenever you want.

For the database encryption feature to be useful, two conditions must be met:

1. Molly has to be locked at the time an attacker gains access to the device. This can include a physical attack in which the attacker seizes your device and manages to unlock the device itself, or a remote attack, in which the device is compromised and manages to elevate privileges to root.
1. If you become aware that your device has been compromised, you should not unlock Molly's database.

If both of the above conditions are met, the data within Molly is safe as long as the passphrase is not accessible to the attacker.

To supplement the database encryption feature, Molly securely wipes your device's RAM once the database is locked to defend against forensic analysis.

While Molly is running, your data is kept in RAM. When any app closes, its data remains in RAM until another app takes the same physical memory pages. That can take seconds or days, depending on many factors. To prevent anyone from dumping the RAM to disk and extracting your data after Molly is locked, the app overrides all free RAM memory with random data when you lock the database.

There is also the ability to configure a SOCKS proxy in Molly to route its traffic through the proxy or [Tor via Orbot](../tor.md#orbot). When enabled, all traffic is routed through the proxy and there are no known IP or DNS leaks. When using this feature, [call relaying](#call-relaying) will always be enabled, regardless of the setting.

Signal adds everyone who you have communicated with to its database. Molly allows you to delete those contacts and stop sharing your profile with them.

To supplement the feature above, as well as for additional security and to fight spam, Molly offers the ability to block unknown contacts that you've never been in contact with or those that are not in your contact list without you having to manually block them.

You can find a full list of Molly's [features](https://github.com/mollyim/mollyim-android#features) on the project's repository.

#### Caveats

- Molly does not support SMS messages within the app, unlike the official Signal app.
- Molly removes Signal's MobileCoin integration.
- Molly is updated every two weeks to include the latest features and bug fixes from Signal. The exception is security issues, that are patched as soon as possible. That said, you should be aware that there might be a slight delay compared to upstream.
- By using Molly, you are extending your trust to another party, as you now need to trust the Signal team, as well as the Molly team.

---
title: iOS Overview
icon: simple/apple
description: iOS is a mobile operating system developed by Apple for the iPhone.
---
**iOS** and **iPadOS** are proprietary mobile operating systems developed by Apple for their iPhone and iPad products, respectively. If you have an Apple mobile device, you can increase your privacy by disabling some built-in telemetry features, and hardening some privacy and security settings which are built in to the system.

## Privacy Notes

iOS devices are frequently praised by security experts for their robust data protection and adherence to modern best practices. However, the restrictiveness of Apple's ecosystem—particularly with their mobile devices—does still hamper privacy in a number of ways.

We generally consider iOS to provide better than average privacy and security protections for most people, compared to stock Android devices from any manufacturer. However, you can achieve even higher standards of privacy with a [custom Android operating system](../android/distributions.md) like GrapheneOS, if you want or need to be completely independent of Apple or Google's cloud services.

### Activation Lock

All iOS devices must be checked against Apple's Activation Lock servers when they are initially set up or reset, meaning an internet connection is **required** to use an iOS device.

### Mandatory App Store

The only source for apps on iOS is Apple's App Store, which requires an Apple Account to access. This means that Apple has a record of every app you install on your device, and can likely tie that information to your actual identity if you provide the App Store with a payment method.

### Invasive Telemetry

Apple has historically had problems with properly disassociating their telemetry from Apple Accounts on iOS. In [2019](https://theguardian.com/technology/2019/jul/26/apple-contractors-regularly-hear-confidential-details-on-siri-recordings), Apple was found to transmit Siri recordings—some containing highly confidential information—to their servers for manual review by third-party contractors. Though Apple temporarily stopped that program after that practice was [widely reported on](https://theverge.com/2019/8/23/20830120/apple-contractors-siri-recordings-listening-1000-a-day-globetech-microsoft-cortana), the company rolled out a switch to [**opt out** of uploading conversations with Siri](https://theguardian.com/technology/2019/oct/30/apple-lets-users-opt-out-of-having-siri-conversations-recorded) a few months later in the succeeding iOS update. Moreover, in 2021, [Apple reworked Siri](https://theguardian.com/technology/2021/jun/07/apple-overhauls-siri-to-address-privacy-concerns-and-improve-performance) so that it processes voice recordings locally rather than sending it to their servers.

More recently, Apple has been found to transmit analytics [even when analytics sharing is disabled](https://gizmodo.com/apple-iphone-analytics-tracking-even-when-off-app-store-1849757558) on iOS, and this data [appears](https://twitter.com/mysk_co/status/1594515229915979776) to be easily linked to unique iCloud account identifiers despite supposedly being decoupled from Apple Accounts.

### Traffic Outside Active VPN Connections

Apple's [privacy policy regarding VPNs](https://apple.com/legal/privacy/data/en/vpns) states:

> Even when a VPN is active, some traffic that is necessary for essential system services will take place outside the VPN so that your device can function properly.

## Recommended Configuration

**Note:** This guide assumes that you're running the latest version of iOS.

### iCloud

The majority of privacy and security concerns with Apple products are related to their cloud services, not their hardware or software. When you use Apple services like iCloud, most of your information is stored on their servers and secured with keys which Apple has access to by default. You can check [Apple's documentation](https://support.apple.com/HT202303) for information on which services are end-to-end encrypted. Anything listed as "in transit" or "on server" means it's possible for Apple to access that data without your permission. This level of access has occasionally been abused by law enforcement to get around the fact that your data is otherwise securely encrypted on your device, and of course Apple is vulnerable to data breaches like any other company.

Therefore, if you do use iCloud you should [enable **Advanced Data Protection**](https://support.apple.com/HT212520). This encrypts nearly all of your iCloud data with keys stored on your devices (end-to-end encryption), rather than Apple's servers, so that your iCloud data is secured in the event of a data breach, and otherwise hidden from Apple.

The encryption used by Advanced Data Protection, while strong, [is not *quite* as robust](https://discuss.privacyguides.net/t/apple-advances-user-security-with-powerful-new-data-protections/10778/4) as the encryption offered by other [cloud services](../cloud.md), particularly when it comes to iCloud Drive. While we strongly encourage using Advanced Data Protection if you use iCloud, we would also suggest considering finding an alternative to iCloud from a more [privacy-focused service provider](../tools.md), although it is unlikely most people would be impacted by these encryption quirks.

You can also protect your data by limiting what you sync to iCloud in the first place. At the top of the **Settings** app, you'll see your name and profile picture if you are signed in to iCloud. Select that, then **iCloud**, and turn off the switches for any services you don't want to sync to iCloud. You may see third-party apps listed under **Show All** if they sync to iCloud, which you can disable here.

#### iCloud+

A paid **iCloud+** subscription (with any iCloud storage plan) comes with some privacy-protecting functionality. While these may provide adequate service for current iCloud customers, we wouldn't recommend purchasing an iCloud+ plan over a [VPN](../vpn.md) and [standalone email aliasing service](../email-aliasing.md) just for these features alone.

[**Private Relay**](https://apple.com/legal/privacy/data/en/icloud-relay) is a proxy service which relays all of your Safari traffic, your DNS queries, and unencrypted traffic on your device through two servers: one owned by Apple and one owned by a third-party provider (including Akamai, Cloudflare, and Fastly). In theory this should prevent any single provider in the chain—including Apple—from having full visibility into which websites you visit while connected. Unlike a VPN, Private Relay does not protect traffic that's already encrypted.

**Hide My Email** is Apple's email aliasing service. You can create an email aliases for free when you *Sign In With Apple* on a website or app, or generate unlimited aliases on demand with a paid iCloud+ plan. Hide My Email has the advantage of using the `@icloud.com` domain for its aliases, which may be less likely to be blocked compared to other email aliasing services, but does not offer functionality offered by standalone services such as automatic PGP encryption or multiple mailbox support.

#### Media & Purchases

At the top of the **Settings** app, you'll see your name and profile picture if you are signed in to an Apple Account. Select that, then select **Media & Purchases** → **View Account**.

- [ ] Turn off **Personalized Recommendations**

#### Find My

**Find My** is a service that lets you track your Apple devices and share your location with your friends and family. It also allows you to wipe your device remotely in case it is stolen, preventing a thief from accessing your data. Your Find My [location data is E2EE](https://apple.com/legal/privacy/data/en/find-my) when:

- Your location is shared with a family member or friend, and you both use iOS 17 or greater.
- Your device is offline and is located by the Find My Network.

Your location data is not E2EE when your device is online and you use Find My iPhone remotely to locate your device. You will have to make the decision whether these trade-offs are worth the anti-theft benefits of Activation Lock.

At the top of the **Settings** app, you'll see your name and profile picture if you are signed in to an Apple Account. Select that, then select **Find My**. Here you can choose whether to enable or disable Find My location features.

### Settings

Many other privacy-related settings can be found in the **Settings** app.

#### Airplane Mode

Enabling **Airplane Mode** stops your phone from contacting cell towers. You will still be able to connect to Wi-Fi and Bluetooth, so whenever you are connected to Wi-Fi you can turn this setting on.

#### Wi-Fi

You can enable [hardware address randomization](https://support.apple.com/en-us/102509#triswitch) to protect you from tracking across Wi-Fi networks, and on the same network over time. On the network you are currently connected to, tap the :material-information: button:

- [x] Set **Private Wi-Fi Address** to **Fixed** or **Rotating**

You also have the option to **Limit IP Address Tracking**. This is similar to iCloud Private Relay but only affects connections to "known trackers." Because it only affects connections to potentially malicious servers, this setting is probably fine to leave enabled, but if you don't want *any* traffic to be routed through Apple's servers, you should turn it off.

#### Bluetooth

**Bluetooth** should be disabled when you aren't using it as it increases your attack surface. Disabling Bluetooth (or Wi-Fi) via the Control Center only disables it temporarily: you must switch it off in Settings for disabling it to remain effective.

- [ ] Turn off **Bluetooth**

Note that Bluetooth is automatically turned on after every system update.

#### General

Your iPhone's device name will by default contain your first name, and this will be visible to anyone on networks you connect to. You should change this to something more generic, like "iPhone." Select **About** → **Name** and enter the device name you prefer.

It is important to install **Software Updates** frequently to get the latest security fixes. You can enable **Automatic Updates** to keep your phone up-to-date without needing to constantly check for updates. Select **Software Update** → **Automatic Updates**:

- [x] Turn on **Download iOS Updates**
- [x] Turn on **Install iOS Updates**
- [x] Turn on **Security Responses & System Files**

**AirDrop** allows you to easily transfer files, but it can allow strangers to send you files you do not want.

- [x] Select **AirDrop** → **Receiving Off**

**AirPlay** lets you seamlessly stream content from your iPhone to a TV; however, you might not always want this. Select **AirPlay & Continuity** → **Automatically AirPlay**:

- [x] Select **Never** or **Ask**

**Background App Refresh** allows your apps to refresh their content while you're not using them. This may cause them to make unwanted connections. Turning this off can also save battery life, but may affect an app's ability to receive updated information, particularly weather and messaging apps.

Select **Background App Refresh** and switch off any apps you don't want to continue refreshing in the background. If you don't want any apps to refresh in the background, you can select **Background App Refresh** again and turn it **Off**.

#### Siri & Search

If you don't want anyone to be able to control your phone with Siri when it is locked, you can turn that off here.

- [ ] Turn off **Allow Siri When Locked**

#### Face ID/Touch ID & Passcode

Setting a strong password on your phone is the most important step you can take for physical device security. You'll have to make tradeoffs here between security and convenience: A longer password will be annoying to type in every time, but a shorter password or PIN will be easier to guess. Setting up Face ID or Touch ID along with a strong password can be a good compromise between usability and security.

Select **Turn Passcode On** or **Change Passcode** → **Passcode Options** → **Custom Alphanumeric Code**. Make sure that you create a [secure password](../basics/passwords-overview.md).

If you wish to use Face ID or Touch ID, you can go ahead and set it up now. Your phone will use the password you set up earlier as a fallback in case your biometric verification fails. Biometric unlock methods are primarily a convenience, although they do stop surveillance cameras or people over your shoulder from watching you input your passcode.

If you use biometrics, you should know how to turn them off quickly in an emergency. Holding down the side or power button and *either* volume button until you see the Slide to Power Off slider will disable biometrics, requiring your passcode to unlock. Your passcode will also be required after device restarts.

On some older devices, you may have to press the power button five times to disable biometrics instead, or for devices with Touch ID, you may just have to hold down the power button and nothing else. Make sure you try this in advance so you know which method works for your device.

**Stolen Device Protection** adds additional security intended to protect your personal data if your device is stolen while unlocked. If you use biometrics and the Find My Device feature in your Apple Account settings, we recommend enabling this new protection:

- [x] Select **Turn On Protection**

After enabling Stolen Device Protection, [certain actions](https://support.apple.com/HT212510) will require biometric authentication without a password fallback (in the event that a shoulder surfer has obtained your PIN), such as using password autofill, accessing payment information, and disabling Lost Mode. It also adds a security delay to certain actions performed away from your home or another "familiar location," such as requiring a 1-hour timer to reset your Apple Account password or sign out of your Apple Account. This delay is intended to give you time to enable Lost Mode and secure your account before a thief can reset your device.

**Allow Access When Locked** gives you options for what you can allow when your phone is locked. The more of these options you disable, the less someone without your password can do, but the less convenient it will be for you. Pick and choose which of these you don't want someone to have access to if they get their hands on your phone.

- [ ] Turn off **Today View and Search**
- [ ] Turn off **Notification Center**
- [ ] Turn off **Control Center**
- [ ] Turn off **Lock Screen Widgets**
- [ ] Turn off **Siri**
- [ ] Turn off **Reply with Message**
- [ ] Turn off **Home Control**
- [ ] Turn off **Wallet**
- [ ] Turn off **Return Missed Calls**
- [ ] Turn off **USB Accessories**

iPhones are already resistant to brute-force attacks by making you wait long periods of time after multiple failed attempts; however, there have historically been exploits to get around this. To be extra safe, you can set your phone to wipe itself after 10 failed passcode attempts.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

With this setting enabled, someone could intentionally wipe your phone by entering the wrong password many times. Make sure you have proper backups and only enable this setting if you feel comfortable with it.

</div>

- [x] Turn on **Erase Data**

#### Privacy & Security

**Location Services** allows you to use features like Find My and Maps. If you don't need these features, you can disable Location Services. Alternatively, you can review and pick which apps can use your location here. Select **Location Services**:

- [ ] Turn off **Location Services**

A purple arrow will appear next to an app in these settings that has used your location recently, while a gray arrow indicates that your location has been accessed within the last 24 hours. If you decide to leave Location Services on, Apple will use it for System Services by default. You can review and pick which services can use your location here. However, if you don't want to submit location analytics to Apple, which they use to improve Apple Maps, you can disable this here as well. Select **System Services**:

- [ ] Turn off **iPhone Analytics**
- [ ] Turn off **Routing & Traffic**
- [ ] Turn off **Improve Maps**

You can decide to allow apps to request to **track** you here. Disabling this disallows all apps from tracking you with your phone's advertising ID. Select **Tracking**:

- [ ] Turn off **Allow Apps to Request to Track**

This is disabled by default and cannot be changed for users under 18.

You should turn off **Research Sensor & Usage Data** if you don't wish to participate in studies. Select **Research Sensor & Usage Data**:

- [ ] Turn off **Sensor & Usage Data Collection**

**Safety Check** allows you to quickly view and revoke certain people and apps that might have permission to access your data. Here you can perform an **Emergency Reset**, immediately resetting permissions for all people and apps which might have access to device resources. You can also **Manage Sharing & Access** which allows you to go through and customize who and what has access to your device and account resources.

You should disable analytics if you don't wish to send Apple usage data. Select **Analytics & Improvements**:

- [ ] Turn off **Share iPhone Analytics** or **Share iPhone & Watch Analytics**
- [ ] Turn off **Share iCloud Analytics**
- [ ] Turn off **Improve Fitness+**
- [ ] Turn off **Improve Safety**
- [ ] Turn off **Improve Siri & Dictation**
- [ ] Turn off **Improve Assistive Voice Features**
- [ ] Turn off **Improve AR Location Accuracy**

Disable **Personalized Ads** if you don't want targeted ads. Select **Apple Advertising**:

- [ ] Turn off **Personalized Ads**

**App Privacy Report** is a built-in tool that allows you to see which permissions your apps are using. Select **App Privacy Report**:

- [x] Select **Turn On App Privacy Report**

[Lockdown Mode](https://blog.privacyguides.org/2022/10/27/macos-ventura-privacy-security-updates/#lockdown-mode) is a security setting you can enable to make your phone more resistant to attacks. Be aware that certain apps and features [won't work](https://support.apple.com/HT212650) as they do normally.

- [x] Select **Turn On Lockdown Mode**

## Additional Advice

### E2EE Calls

Normal phone calls made with the Phone app through your carrier are not E2EE. Both FaceTime Video and FaceTime Audio calls are E2EE. Alternatively, you can use [another app](../real-time-communication.md) like Signal for E2EE calls.

### Encrypted iMessage

The [color of the message bubble](https://support.apple.com/en-us/104972) in the Messages app indicates whether your messages are E2EE or not. A blue bubble indicates that you're using iMessage with E2EE, while a green bubble indicates the other party is using either the outdated SMS and MMS protocols or RCS. RCS on iOS is **not** E2EE. Currently, the only way to have E2EE in Messages is for both parties to be using iMessage on Apple devices.

If either you or your messaging partner have iCloud Backup enabled without Advanced Data Protection, the encryption key will be stored on Apple's servers, meaning they can access your messages. Additionally, iMessage's key exchange is not as secure as alternative implementations like Signal's (which allows you to view the recipients key and verify by QR code), so it shouldn't be relied on for particularly sensitive communications.

### Photo Permissions

When an app prompts you for access to your device's photo library, iOS provides you with options to limit what an app can access.

Rather than allow an app to access all the photos on your device, you can allow it to only access whichever photos you choose by tapping the "Select Photos..." option in the permission dialog. You can change photo access permissions at any time by navigating to **Settings** → **Privacy & Security** → **Photos**.

![Photo Permissions](../assets/img/ios/photo-permissions-light.png#only-light) ![Photo Permissions](../assets/img/ios/photo-permissions-dark.png#only-dark)

**Add Photos Only** is a permission that only gives an app the ability to download photos to the photo library. Not all apps which request photo library access provide this option.

![Private Access](../assets/img/ios/private-access-light.png#only-light) ![Private Access](../assets/img/ios/private-access-dark.png#only-dark)

Some apps also support **Private Access**, which functions similarly to the **Limited Access** permission. However, photos shared to apps using Private Access include their location by default. We recommend unchecking this setting if you do not [remove photo metadata](../data-redaction.md) beforehand.

### Contact Permissions

Similarly, rather than allow an app to access all the contacts saved on your device, you can allow it to only access whichever contacts you choose. You can change contact access permissions at any time by navigating to **Settings** → **Privacy & Security** → **Contacts**.

![Contact Permissions](../assets/img/ios/contact-permissions-light.png#only-light) ![Contact Permissions](../assets/img/ios/contact-permissions-dark.png#only-dark)

### Require Biometrics and Hide Apps

iOS offers the ability to lock most apps behind Touch ID/Face ID or your passcode, which can be useful for protecting sensitive content in apps which do not provide the option themselves. You can lock an app by long-pressing on it and selecting **Require Face ID/Touch ID**. Any app locked in this way requires biometric authentication whenever opening it or accessing its contents in other apps. Also, notification previews for locked apps will not be shown.

In addition to locking apps behind biometrics, you can also hide apps so that they don't appear on the Home Screen, App Library, the app list in **Settings**, etc. While hiding apps may be useful in situations where you have to hand your unlocked phone to someone else, the concealment provided by the feature is not absolute, as a hidden app is still visible in some places such as the battery usage list. Moreover, one notable tradeoff of hiding an app is that you will not receive any of its notifications.

You can hide an app by long-pressing on it and selecting **Require Face ID/Touch ID** → **Hide and Require Face ID/Touch ID**. Note that pre-installed Apple apps, as well as the default web browser and email app, cannot be hidden. Hidden apps reside in a **Hidden** folder at the bottom of the App Library, which can be unlocked using biometrics. This folder appears in the App Library whether you hid any apps or not, which provides you a degree of plausible deniability.

### Blacking Out Faces/Information

If you need to hide information in a photo, you can use Apple's built-in editing tools to do so.

- Open the **Photos** app and tap the photo you have selected for redaction
- Tap the :material-tune: (at the bottom of the screen) → markup symbol (top right) → plus icon at the bottom right
- Select **Add Shape** and choose the square or circle
- On the toolbar, tap the circle (left-most option) and choose black as the color for filling in the shape. You can also move the shape and increase its size as you see fit.

**Don't** use the highlighter to obfuscate information, as its opacity is not quite 100%.

### Avoid Jailbreaking

Jailbreaking an iPhone undermines its security and makes you vulnerable. Running untrusted, third-party software could cause your device to be infected with malware.

### iOS Betas

Apple always makes beta versions of iOS available early for those that wish to help find and report bugs. We don't recommend installing beta software on your phone. Beta releases are potentially unstable and could have undiscovered security vulnerabilities.

## Security Highlights

### Before First Unlock

If your threat model includes [:material-target-account: Targeted Attacks](../basics/common-threats.md#attacks-against-specific-individuals){ .pg-red } that involve forensic tools, and you want to minimize the chance of exploits being used to access your phone, you should restart your device frequently. The state *after* a reboot but *before* unlocking your device is referred to as "Before First Unlock" (BFU), and when your device is in that state it makes it [significantly more difficult](https://belkasoft.com/checkm8_glossary) for forensic tools to exploit vulnerabilities to access your data. This BFU state allows you to receive notifications for calls, texts, and alarms, but most of the data on your device is still encrypted and inaccessible. This can be impractical, so consider whether these trade-offs make sense for your situation.

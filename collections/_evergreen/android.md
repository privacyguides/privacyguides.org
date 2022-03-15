---
layout: evergreen
title: Android
mathjax: true
description: |
    Android is a secure operating system that has strong [app sandboxing](https://source.android.com/security/app-sandbox), [verified boot](https://source.android.com/security/verifiedboot), and a robust [permission](https://developer.android.com/guide/topics/permissions/overview) control system.

    The main privacy concern with most Android devices is that they usually include [Google Play Services](https://developers.google.com/android/guides/overview). This component is proprietary, [closed source](https://en.wikipedia.org/wiki/Proprietary_software), has a privileged role on your phone, and may collect private user information. It is not a part of the [Android Open Source Project](https://source.android.com/) (AOSP) nor is it included with the below derivatives.
---

## AOSP Derivatives

{% for item_hash in site.data.operating-systems.android %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Android security and privacy features

### User Profiles

Multiple user profiles (Settings → System → Multiple users) are the simplest way to isolate in Android. With user profiles you can limit a user from making calls, SMS or installing apps on the device. Each profile is encrypted using its own encryption key and cannot access the data of any other profiles. Even the device owner cannot view the data of other profiles without knowing their password. Multiple user profiles is a more secure method of isolation.

### Work Profile

[Work Profiles](https://support.google.com/work/android/answer/6191949) are another way to isolate individual apps and may be more convenient than separate user profiles.

A **device controller** such as [Shelter](#recommended-apps) is required, unless you're using CalyxOS which includes one.

The work profile is dependent on a device controller to function. Features such as *File Shuttle* and *contact search blocking* or any kind of isolation features must be implemented by the controller. The user must also fully trust the device controller app, as it has full access to the data inside of the work profile.

This method is generally less secure than a secondary user profile; however, it does allow you the convenience of running apps in both the work and personal profiles simultaneously.

### Verified Boot

[Verified boot](https://source.android.com/security/verifiedboot) is an important part of the Android security model. It provides protection against [Evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, malware persistence, and ensures security updates cannot be downgraded with [rollback protection](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

Android 10 and above has moved away from full-disk encryption (FDE) to more flexible [file-based encryption](https://source.android.com/security/encryption/file-based).

Each user's data is encrypted using their own unique encryption key, and the operating system files are left unencrypted. Verified boot ensures the integrity of the operating system files preventing an adversary with physical access from tampering or installing malware on the device. In the unlikely case that malware is able to exploit other parts of the system and gain higher privileged access, verified boot will prevent and revert changes to the system partition upon reboot of the device.

Unfortunately, original equipment manufacturers (OEMs) are only obliged to support verified boot on their stock Android distribution. Only a few OEMs such as Google support custom Android Verified Boot (AVB) key enrollment on their devices. Some AOSP derivatives such as LineageOS or /e/ OS do not support verified boot even on hardware with verified boot support for third party operating systems. We recommend that you check for support **before** purchasing a new device. AOSP derivatives which do not support verified boot are **not** recommended.

### VPN Killswitch

Android 7 and above supports a VPN killswitch and it is available without the need to install third party apps. This feature can prevent leaks if the VPN is disconnected. It can be found in ⚙️ Settings → Network & internet → VPN → ⚙️ → Block connections without VPN.

### Global Toggles

Modern Android devices have global toggles for disabling [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) and location services. Android 12 introduced toggles for the camera and microphone. When not in use, we recommend disabling these features. Apps cannot use disabled features (even if granted individual permission) until renabled.

## Recommended Apps

{% for item_hash in site.data.operating-systems.android-applications %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## General Recommendations

### Avoid Root

[Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) Android phones can decrease security significantly as it weakens the complete [Android security model](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). This can decrease privacy should there be an exploit that is assisted by the decreased security. Common rooting methods involve directly tampering with the boot partition, making it impossible to perform successful [verified boot](https://source.android.com/security/verifiedboot). Apps that require root will also modify the system partition meaning that verified boot would have to remain disabled. Having root exposed directly in the user interface also increases the [attack surface](https://en.wikipedia.org/wiki/Attack_surface) of your device and may assist in [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation) vulnerabilities and [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) policy bypasses.

Adblockers (AdAway) which modify the <a href="https://en.wikipedia.org/wiki/Hosts_(file)">hosts file</a> and firewalls (AFWall+) which require root access persistently are dangerous and should not be used. They are also not the correct way to solve their intended purposes. For Adblocking we suggest encrypted <a href="/providers/dns/">DNS</a> or <a href="/providers/vpn/">VPN</a> server blocking solutions instead. RethinkDNS, TrackerControl and AdAway in non-root mode will take up the VPN slot (by using a local loopback VPN) preventing you from using privacy enhancing services such as Orbot or a real VPN server.

AFWall+ works based on the <a href="#graphene-calyxos">packet filtering approach</a> and is bypassable in some situations.

We do not believe that the security sacrifices made by rooting a phone are worth the questionable privacy benefits of those apps.

### Firmware Updates

Firmware updates are critical for maintaining security and without them your device cannot be secure. Original equipment manufacturers (OEMs)—in other words, phone manufacturers—have support agreements with their partners to provide the closed source components for a limited support period. These are detailed in the monthly [Android Security Bulletins](https://source.android.com/security/bulletin).

As the components of the phone such as the processor and radio technologies rely on closed source components, the updates must be provided by the respective manufacturers. Therefore it is important that you purchase a device within an active support cycle. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) and [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) support their devices for 4 years while cheaper products often have shorter support. With the introduction of the [Pixel 6](https://support.google.com/pixelphone/answer/4457705), Google now makes their own system on chip (SoC) and they will provide 5 years of support.

Devices that have reached their end-of-life (EoL) and are no longer supported by the SoC manufacturer, cannot receive firmware updates from OEM vendors or after market Android distributors. This means that security issues with those devices will remain unfixed.

### Android Versions

It's important to not use an [end-of-life](https://endoflife.date/android) version of Android. Newer versions of Android not only receive security updates for the operating system but also important privacy enhancing updates too. For example, [prior to Android 10](https://developer.android.com/about/versions/10/privacy/changes), any user apps with the [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) permission could access sensitive and unique serial numbers of your phone such as [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier), your SIM card's [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity), whereas now they must be system apps to do so. System apps are only provided by the OEM or Android distribution.

### Android Permissions

[Permissions on Android](https://developer.android.com/guide/topics/permissions/overview) grant users control over what apps are allowed to access. Google regularly makes [improvements](https://developer.android.com/about/versions/11/privacy/permissions) on the permission system in each successive version. All user installed apps are strictly [sandboxed](https://source.android.com/security/app-sandbox), therefore there is no need to install any antivirus apps. The savings you make from not purchasing or subscribing to security apps is better spent on paying for a supported device in the future.

Should you want to run an app that you're unsure about, consider using a user or work [profile](/android/#android-security-privacy).

### SafetyNet and Play Integrity API

[SafetyNet](https://developer.android.com/training/safetynet/attestation) and the [Play Integrity APIs](https://developer.android.com/google/play/integrity) are generally used for [banking apps](https://grapheneos.org/usage#banking-apps). Many banking apps will work fine in GrapheneOS with sandboxed Play services, however some non-financal apps have their own crude anti-tampering mechanisms which might fail. GrapheneOS passes the `basicIntegrity` check, but not the certification check `ctsProfileMatch`. Devices with Android 8 or later have hardware attestation support which cannot be bypassed without leaked keys or serious vulnerabilities.

As for Google Wallet, we don't recommend this due to their [privacy policy](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), which states you must opt-out if you don't want your credit rating and personal information shared with affiliate marketing services.

### Android Device Shopping

Google Pixels are known to have good security and properly support [verified boot](https://source.android.com/security/verifiedboot). Some other phones such as the Fairphone and Oneplus devices also support custom Android verified boot (AVB) key enrollment. However, there have been issues with their older models. In the past they were using [test keys](https://social.coop/@dazinism/105346943304083054) or not doing proper verification, making verified boot on those devices useless.

Avoid buying phones from mobile network operators. These often have a **locked bootloader** and do not support [OEM unlocking](https://source.android.com/devices/bootloader/locking_unlocking). These phone variants will prevent you from installing any kind of alternative Android distribution. Phones that cannot be unlocked will often have an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) starting with "35", that includes phones from purchased from Verizon, Telus, Rogers, EE etc.

Be very **careful** about buying second hand phones from online marketplaces. Always check the reputation of the seller. If the device is stolen there's a possibility of [IMEI blacklisting](https://www.gsma.com/security/resources/imei-blacklisting/). There is also a risk involved with you being associated with the activity of the previous owner.

We have these general tips:

* If you're after a bargain on a Pixel device, we suggest buying an "**a**" model, just after the next flagship is released. Discounts are usually available because Google will be trying to clear their stock.
* Consider price beating options and specials offered at [brick and mortar](https://en.wikipedia.org/wiki/Brick_and_mortar) stores.
* Look at online community bargain sites in your country. These can alert you to good sales.
* The price per day for a device can be calculated as \\({\\text {EoL Date}-\\text{Current Date} \\over \\text{Cost}}\\). Google provides a [list](https://support.google.com/nexus/answer/4457705) of their supported devices.
* Do not buy devices that have reached or are near their end-of-life, additional firmware updates must be provided by the manufacturer.
* Do not buy preloaded LineageOS or /e/ OS phones or any Android phones without proper [verified boot](https://source.android.com/security/verifiedboot) support and firmware updates. These devices also have no way for you to check whether they've been tampered with.
* In short, if a device or Android distribution is not listed here, there is probably a good reason, so check our [discussions](https://github.com/privacyguides/privacyguides.org/discussions) page.

The installation of GrapheneOS on a Pixel phone is easy with their [web installer](https://grapheneos.org/install/web). If you don't feel comfortable doing it yourself and are willing to spend a bit of extra money, check out the [NitroPhone](https://shop.nitrokey.com/shop) as they come preloaded with GrapheneOS from the reputable [Nitrokey](https://www.nitrokey.com/about) company. The GrapheneOS project is not currently affiliated with any vendor and cannot ensure the quality or security of their products.

A [CalyxOS membership](https://calyxinstitute.org/membership/calyxos) also entitles you to a device preloaded with CalyxOS.

## Where to get your applications

Sometimes the official F-Droid repository may fall behind on updates. F-Droid maintainers reuse package ids while signing apps with their own keys, which is not ideal as it does give the F-Droid team ultimate trust. The Google Play version of some apps may contain unwanted telemetry or lack features that are available in the F-Droid version. The Google Play Store requires a Google account to login which is not great for privacy. The [Aurora Store](https://auroraoss.com/download/AuroraStore/) (a Google Play Store proxy) does not always work, though it does most of the time.

We have these general tips:
* Check if the app developers have their own F-Droid repository first eg. [Bitwarden](https://bitwarden.com/), [Samourai Wallet](https://www.samouraiwallet.com/), or [Newpipe](https://newpipe.net/), have their own repositories with either less telemetry, additional features or faster updates. This is the ideal situation and you should be using these repositories if possible.
* Check if an app is available on the [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) repository. The IzzyOnDroid repository pulls builds directly from GitHub and is the next best thing to the developers' own repositories. We recommend that you download the GitHub builds and install them manually first, then use IzzyOnDroid for any subsequent updates. This will ensure that the signature of the applications you get from IzzyOnDroid matches that of the developer and the packages have not been tampered with.
* Check if there are any differences between the F-Droid version and the Google Play Store version. Some applications like [IVPN](https://www.ivpn.net/) do not include certain features (eg [AntiTracker](https://www.ivpn.net/knowledgebase/general/antitracker-faq/)) in their Google Play Store build out of fear of censorship by Google.

Evaluate whether the additional features in the F-Droid build are worth the slower updates. Also think about whether faster updates from the Google Play Store are worth the potential privacy isues in your [threat model](/threat-modeling/).

### GrapheneOS's App Store
GrapheneOS's app store is available on [GitHub](https://github.com/GrapheneOS/Apps/releases). It supports Android 12 and above and is capable of updating itself. The app store has standalone applications built by the GrapheneOS project such as the [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera), and [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). If you are looking for these applications, we highly recommend that you get them from GrapheneOS's app store instead of the Play Store, as the apps on their store are signed by the GrapheneOS's project own signature that Google does not have access to.

### F-Droid
F-Droid is often recommended as an alternative to Google Play, particularly in the privacy community. The option to add third party repositories and not be confined to Google's [walled garden](https://en.wikipedia.org/wiki/Closed_platform) has led to its popularity. F-Droid additionally has [reproducible builds](https://f-droid.org/en/docs/Reproducible_Builds/) for some applications, and is dedicated to free and open source software. However, there are problems with the official F-Droid client, their quality control, and how they build, sign and deliver packages, outlined in this [post](https://wonderfall.dev/fdroid-issues/).

#### Recommended Client
The official F-Droid client targets a [low API level](https://wonderfall.dev/fdroid-issues/#3-low-target-api-level-sdk-for-client--apps) and does not utilize the [seamless updates](https://www.androidcentral.com/google-will-finally-bring-seamless-app-updates-alternative-app-stores-android-12) feature introduced in Android 12. Targetting lower API levels means that the F-Droid client cannot take advantage of the new improvements in the application sandboxes that comes with higher API levels. For automatic updates to work, the F-Droid client requires that the [Privileged Extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/) be included in the operating system, granting it more privileges than what a normal app would have, which is not great for security.

To mitigate these problems, we recommend [Droidify](https://github.com/Iamlooker/Droid-ify) as it supports seamless updates on Android 12 and above without needing any special privileges and targets a higher API level.

{% for item_hash in site.data.operating-systems.android-fdroid %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}


## Advanced Protection Program
If you have a Google account we suggest enrolling in the [Advanced Protection Program](https://landing.google.com/advancedprotection/). It is available at no cost to anyone with two or more hardware security keys with [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) support.

The Advanced Protection Program provides enhanced threat monitoring and enables:

* Stricter two factor authentication; e.g. that [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) **must** be used and disallows the use of [SMS OTPs](https://en.wikipedia.org/wiki/One-time_password#SMS), [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password), and [OAuth](https://en.wikipedia.org/wiki/OAuth).
* Only Google and verified third party apps can access account data
* Scanning of incoming emails on Gmail accounts for [phishing](https://en.wikipedia.org/wiki/Phishing#Email_phishing) attempts
* Stricter [safe browser scanning](https://www.google.com/chrome/privacy/whitepaper.html#malware) with Google Chrome
* Stricter recovery process for accounts with lost credentials

For users that are using the privileged Play Services (common on stock operating systems), the Advanced Protection Program also comes with [additional benefits](https://support.google.com/accounts/answer/9764949?hl=en) such as:
* Not allowing app installation outside of the Google Play Store, the OS vendor's app store, or via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
* Mandatory automatic device scanning with [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
* Warning the user about unverified applications

## Security comparison of GrapheneOS and CalyxOS

### Profiles

CalyxOS includes a device controller app so there is no need to install a third party app like [Shelter](/android/#recommended-apps). GrapheneOS plans to introduce nested profile support with better isolation in the future.

GrapheneOS extends the [user profile](/android/#android-security-privacy) feature allowing a user to press an "End Session" button. This button clears the encryption key from memory. There are plans to add a [cross profile notifications system](https://github.com/GrapheneOS/os-issue-tracker/issues/88) in the future.

### INTERNET permission vs packet filtering

[Packet filter](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter) based solutions such [Datura Firewall](https://calyxos.org/docs/tech/datura-details), [LineageOS](https://gitlab.com/LineageOS/issues/android/-/issues/3228), AFWall+ and NetGuard, are not ideal as they can leak and don't prevent an app from proxying a network request through another app using an [intent](https://developer.android.com/guide/components/intents-filters).

Android has a built-in [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission. This is enforced by the operating system. On AOSP and most of its derivatives, it is treated as an install time permission. GrapheneOS changes it to [runtime](https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase)) permission, meaning that it can be revoked to deny internet access to a specific app.

The [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission is a strong way of controlling internet access. It also blocks direct access to the internet and access to other APIs that rely on the [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission. The only way for an app to circumvent it is for it to communicate with another app that has been granted [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission via mutual consent. Such communication can be prevented by putting apps into seperate profiles.

Some apps might crash if their [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission is revoked. CalyxOS instead uses a [firewall](https://calyxos.org/docs/tech/datura-details) to achieve a similar outcome however, in some circumstances CalyxOS's approach may leak ([#572](https://gitlab.com/CalyxOS/calyxos/-/issues/572), [#581](https://gitlab.com/CalyxOS/calyxos/-/issues/581)).

### Sandboxed Play Services vs Privileged MicroG

When Google Play services are used on GrapheneOS, they run as a user app and are contained within a user or work profile.

Sandboxed Play Services are confined using the highly restrictive, default [`untrusted_app`](https://source.android.com/security/selinux/concepts) domain provided by [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux). Permissions for apps to use Play Services can be revoked at any time by the user.

MicroG is a reimplementation of Google Play Services. This means it needs to be updated every time Android has a major version update (or the Android API changes). It also needs to run in the highly privileged [`system_app`](https://source.android.com/security/selinux/concepts) SELinux domain like the normal Play Services and is less secure than the Sandboxed Play Service approach. We do not believe MicroG provides any privacy advantages over Sandboxed Play Services except for the option to _shift trust_ of the location backend from Google to another provider such as Mozilla or DejaVu.

### Privileged App Extensions

Android 12 comes with special support for seamless app updates with [third party app stores](https://android-developers.googleblog.com/2020/09/listening-to-developer-feedback-to.html). The popular Free and Open Source Software (FOSS) repository [F-Droid](https://f-droid.org) doesn't implement this feature and requires a [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged) to be included with the Android distribution in order to have unattended app installation.

GrapheneOS doesn't compromise on security, therefore they do not include the F-Droid extension therefore, users have to confirm all updates manually if they want to use F-Droid. Alternatively, they can use the Droidify client which does support seamless app updates in Android 12. GrapheneOS officially recommends [Sandboxed Play Services](https://grapheneos.org/usage#sandboxed-play-services) instead. Many FOSS Android apps are also in Google Play but sometimes they are not (like [NewPipe]({% link _evergreen/video-streaming.md %})).

CalyxOS includes the [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged), which may lower device security. Seamless app updates should be possible with [Aurora Store](https://auroraoss.com) in Android 12.

### Additional Hardening

GrapheneOS improves upon [AOSP](https://source.android.com/) security with:

*   **Hardened WebView:** Vanadium WebView requires [64-bit](https://en.wikipedia.org/wiki/64-bit_computing) processes on the [WebView](https://developer.android.com/reference/android/webkit/WebView) process and disables legacy [32-bit](https://en.wikipedia.org/wiki/32-bit_computing) processes. It uses hardened compiler options such as [`-fwrapv`](https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html) and [`-fstack-protector-strong`](https://gcc.gnu.org/onlinedocs/gcc-4.9.3/gcc/Optimize-Options.html), which can help protect against [stack buffer overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow). [API](https://en.wikipedia.org/wiki/API)s such as the [battery status API](https://chromestatus.com/feature/4537134732017664) are disabled for privacy reasons. All system apps on GrapheneOS use the Vanadium WebView which means user installed apps that use WebView will also benefit from Vanadium's hardening. The [Vanadium patch set](https://github.com/GrapheneOS/Vanadium/tree/12/patches) is a lot more comprehensive than CalyxOS's [Chromium patch set](https://gitlab.com/CalyxOS/chromium-patches) which is derived from it.
*   **Hardened Kernel:** GrapheneOS kernel includes some hardening from the [linux-hardened](https://github.com/GrapheneOS/linux-hardened) project and the [Kernel Self Protection Project (KSPP)](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project). CalyxOS uses the [same kernel](https://calyxos.org/docs/development/build/kernel/) as regular Android with some minor modifications.
*   **Hardened Memory Allocator:** GrapheneOS uses the [hardened malloc](https://github.com/GrapheneOS/hardened_malloc) subproject as its memory allocator. This focuses on hardening against [memory heap corruption](https://en.wikipedia.org/wiki/Memory_corruption). CalyxOS uses the default AOSP [Scudo Malloc](https://source.android.com/devices/tech/debug/scudo), which is generally [less effective](https://twitter.com/danielmicay/status/1033671709197398016). Hardened Malloc has uncovered vulnerabilities in AOSP which have been [fixed](https://github.com/GrapheneOS/platform_system_core/commit/be11b59725aa6118b0e1f0712572e835c3d50746) by GrapheneOS such as [CVE-2021-0703](https://nvd.nist.gov/vuln/detail/CVE-2021-0703).
*   **Secure Exec Spawning:** GrapheneOS [spawns](https://en.wikipedia.org/wiki/Spawn_(computing)) fresh processes as opposed to using the [Zygote model](https://ayusch.com/android-internals-the-android-os-boot-process) used by AOSP and CalyxOS. The Zygote model weakens [Address Space Layout Randomization](https://en.wikipedia.org/wiki/Address_space_layout_randomization) (ASLR) and is considered [less secure](https://wenke.gtisc.gatech.edu/papers/morula.pdf). Creating [fresh processes](https://grapheneos.org/usage#exec-spawning) is safer but will have some performance penalty when launching a new application. These penalties are not really noticeable unless you have an [old device](https://support.google.com/nexus/answer/4457705) with slow storage such as the Pixel 3a/3a XL as it has [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC).

**Please note that these are just a few examples and are not an extensive list of GrapheneOS's hardening**. For a more complete list, please read GrapheneOS' [official documentation](https://grapheneos.org/features).

---
icon: 'fontawesome/brands/android'
---
Android is a secure operating system that has strong [app sandboxing](https://source.android.com/security/app-sandbox), [Verified Boot](https://source.android.com/security/verifiedboot), and a robust [permission](https://developer.android.com/guide/topics/permissions/overview) control system.

The main privacy concern with most Android devices is that they usually include [Google Play Services](https://developers.google.com/android/guides/overview). This component is proprietary, [closed source](https://en.wikipedia.org/wiki/Proprietary_software), has a privileged role on your phone, and may collect private user information. It is neither a part of the [Android Open Source Project](https://source.android.com/) (AOSP) nor is it included with the below derivatives.

## AOSP Derivatives

### GrapheneOS

!!! recommendation

    ![GrapheneOS logo](/assets/img/android/grapheneos.svg#only-light){ align=right }
    ![GrapheneOS logo](/assets/img/android/grapheneos-dark.svg#only-dark){ align=right }

    **GrapheneOS** is the best choice when it comes to privacy and security.

    GrapheneOS provides additional [security hardening](https://en.wikipedia.org/wiki/Hardening_(computing)) and privacy improvements. It has a [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc), network and sensor permissions, and various other [security features](https://grapheneos.org/features). GrapheneOS also comes with full firmware updates and signed builds, so [verified boot](https://source.android.com/security/verifiedboot) is fully supported.

    [Visit grapheneos.org](https://grapheneos.org/){ .md-button .md-button--primary } [Privacy Policy](https://grapheneos.org/faq#privacy-policy){ .md-button }

Notably, GrapheneOS supports [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play). Google Play Services can be run fully sandboxed like a regular user app and contained in a work profile or user [profile](/android/#android-security-privacy) of your choice. This means that you can run apps dependant on Play Services, such as those that require push notifications using Google's [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/) service. GrapheneOS allows you to take advantage of most [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) whilst having full user control over their permissions and access.

Currently, only [Pixel phones](https://grapheneos.org/faq#device-support) meet its hardware security requirement and are supported.

!!! attention

    GrapheneOS's "extended support" devices do not have full security patches (firmware updates) due to the original equipment manufacturer (OEM) discontinuing support. These devices cannot be considered completely secure.

### CalyxOS

!!! recommendation

    ![CalyxOS logo](/assets/img/android/calyxos.svg){ align=right }

    **CalyxOS** is a decent alternative to GrapheneOS.

    It has some privacy features on top of AOSP, including [Datura firewall](https://calyxos.org/docs/tech/datura-details), [Signal](https://signal.org) integration in the dialer app, and a built in panic button. CalyxOS also comes with firmware updates and signed builds, so [verified boot](https://source.android.com/security/verifiedboot) is fully supported.

    To accomodate users who need Google Play Services, CalyxOS optionally includes [MicroG](https://microg.org/). With MicroG, CalyxOS also bundles in the [Mozilla](https://location.services.mozilla.com/) and [DejaVu](https://github.com/n76/DejaVu) location services.

    Currently, CalyxOS only supports [Pixel phones](https://calyxos.org/docs/guide/device-support/).

    [Visit calyxos.org](https://calyxos.org/){ .md-button .md-button--primary } [Privacy Policy](https://calyxinstitute.org/legal/privacy-policy){ .md-button }

!!! attention

    CalyxOS's "extended support" does not have full security patches due to the original equipment manufacturer (OEM) discontinuing support; therefore, they cannot be considered completely secure.

### DivestOS

!!! recommendation

    ![DivestOS logo](/assets/img/android/divestos.svg){ align=right }

    **DivestOS** is a [soft-fork](https://en.wikipedia.org/wiki/Fork_(software_development)#Forking_of_free_and_open-source_software) of [LineageOS](https://lineageos.org/).
    DivestOS inherits many [supported devices](https://divestos.org/index.php?page=devices&base=LineageOS) from LineageOS. It has signed builds, making it possible to have [verified boot](https://source.android.com/security/verifiedboot) on some non-Pixel devices.

    [Visit divestos.org](https://divestos.org){ .md-button .md-button--primary } [Privacy Policy](https://divestos.org/index.php?page=privacy_policy){ .md-button }

DivestOS has automated kernel vulnerability ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)) [patching](https://gitlab.com/divested-mobile/cve_checker), fewer proprietary blobs, a custom [hosts](https://divested.dev/index.php?page=dnsbl) file, and [F-Droid](https://www.f-droid.org) as the app store. It includes [UnifiedNlp](https://github.com/microg/UnifiedNlp) for network location and some hardening with [Mulch Webview](https://gitlab.com/divested-mobile/mulch). Users can also select the [Bromite SystemWebView](https://www.bromite.org/system_web_view) in ⚙️ Settings → Developer options → Webview implementation. DivestOS also includes kernel patches from GrapheneOS and enables security features in [defconfig](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L698).

DivestOS 16.0, 17.1, and 18.1 implements GrapheneOS's [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) permission toggle and [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc).

!!! attention

    DivestOS firmware update [status](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS) varies across the devices it supports. For Pixel phones, we still recommend using GrapheneOS or CalyxOS. For other supported devices, DivestOS is a good alternative.

    Not all of the supported devices have [verified boot](https://source.android.com/security/verifiedboot), and some perform it better than others.

## Android security and privacy features
### User Profiles
Multiple user profiles (Settings → System → Multiple users) are the simplest way to isolate in Android. With user profiles you can limit a user from making calls, SMS or installing apps on the device. Each profile is encrypted using its own encryption key and cannot access the data of any other profiles. Even the device owner cannot view the data of other profiles without knowing their password. Multiple user profiles is a more secure method of isolation.

### Work Profile
[Work Profiles](https://support.google.com/work/android/answer/6191949) are another way to isolate individual apps and may be more convenient than separate user profiles.

A **device controller** such as [Shelter](#recommended-apps) is required, unless you're using CalyxOS which includes one.

The work profile is dependent on a device controller to function. Features such as *File Shuttle* and *contact search blocking* or any kind of isolation features must be implemented by the controller. The user must also fully trust the device controller app, as it has full access to the data inside of the work profile.

This method is generally less secure than a secondary user profile; however, it does allow you the convenience of running apps in both the work and personal profiles simultaneously.

### Verified Boot
[Verified Boot](https://source.android.com/security/verifiedboot) is an important part of the Android security model. It provides protection against [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, malware persistence, and ensures security updates cannot be downgraded with [rollback protection](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

Android 10 and above has moved away from full-disk encryption (FDE) to more flexible [file-based encryption](https://source.android.com/security/encryption/file-based).

Each user's data is encrypted using their own unique encryption key, and the operating system files are left unencrypted. Verified Boot ensures the integrity of the operating system files preventing an adversary with physical access from tampering or installing malware on the device. In the unlikely case that malware is able to exploit other parts of the system and gain higher privileged access, Verified Boot will prevent and revert changes to the system partition upon reboot of the device.

Unfortunately, original equipment manufacturers (OEMs) are only obliged to support Verified Boot on their stock Android distribution. Only a few OEMs such as Google support custom Android Verified Boot (AVB) key enrollment on their devices. Some AOSP derivatives such as LineageOS or /e/ OS do not support Verified Boot even on hardware with Verified Boot support for third party operating systems. We recommend that you check for support **before** purchasing a new device. AOSP derivatives which do not support Verified Boot are **not** recommended.

### VPN Killswitch
Android 7 and above supports a VPN killswitch and it is available without the need to install third party apps. This feature can prevent leaks if the VPN is disconnected. It can be found in ⚙️ Settings → Network & internet → VPN → ⚙️ → Block connections without VPN.

### Global Toggles
Modern Android devices have global toggles for disabling [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) and location services. Android 12 introduced toggles for the camera and microphone. When not in use, we recommend disabling these features. Apps cannot use disabled features (even if granted individual permission) until re-enabled.

## Recommended Apps

### Orbot

!!! recommendation

    ![Orbot logo](/assets/img/android/orbot.svg){ align=right }

    **Orbot** is a free proxy app that routes your connections through the Tor Network.

    [Visit orbot.app](https://orbot.app/){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
    - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid)
    - [:fontawesome-brands-github: GitHub](https://github.com/guardianproject/orbot)
    - [:fontawesome-brands-gitlab: GitLab](https://gitlab.com/guardianproject/orbot)

Orbot can proxy individual apps if they support SOCKS or HTTP proxying. It can also proxy all your network connections using [VpnService](https://developer.android.com/reference/android/net/VpnService) and can be used with the VPN killswitch (⚙️ Settings → Network & internet → VPN → ⚙️ → Block connections without VPN).

For resistance against traffic analysis attacks, consider enabling *Isolate Destination Address* ( ⁝ →Settings → Connectivity). This will use a completely different Tor Circuit (different middle relay and exit nodes) for every domain you connect to.

!!! attention

    Orbot is often outdated on the Guardian Project's [F-Droid repository](https://guardianproject.info/fdroid) and [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android) so consider downloading directly from the [GitHub repository](https://github.com/guardianproject/orbot) instead.

    All versions are signed using the same signature so they should be compatible with each other.


### Shelter

!!! recommendation

    ![Shelter logo](/assets/img/android/shelter.svg){ align=right }

    **Shelter** is an app that helps you leverage the Android work profile to isolate other apps.

    Shelter supports blocking contact search cross profiles and sharing files across profiles via the default file manager ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).

    [Visit gitea.angry.im](https://gitea.angry.im/PeterCxy/Shelter){ .md-button .md-button--primary }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/net.typeblog.shelter)
    - [:fontawesome-brands-github: GitHub](https://github.com/PeterCxy/Shelter)
    - [:fontawesome-brands-git-alt: Source](https://gitea.angry.im/PeterCxy/Shelter)

!!! attention

    As CalyxOS includes a device controller, we recommend using their built in work profile instead.

    Shelter is recommended over [Insular](https://secure-system.gitlab.io/Insular/) and [Island](https://github.com/oasisfeng/island) as it supports [contact search blocking](https://secure-system.gitlab.io/Insular/faq.html).

    When using Shelter, you are placing complete trust in its developer as Shelter would be acting as a [Device Admin](https://developer.android.com/guide/topics/admin/device-admin) for the work profile and has extensive access to the data stored within it.


### Auditor

!!! recommendation

    ![Auditor logo](/assets/img/android/auditor.svg#only-light){ align=right }
    ![Auditor logo](/assets/img/android/auditor-dark.svg#only-dark){ align=right }

    **Auditor** is an app which leverages hardware security features to provide device integrity monitoring for [supported devices](https://attestation.app/about#device-support). Currently it works with GrapheneOS and the device's stock operating system.

    [Visit attestation.app](https://attestation.app){ .md-button .md-button--primary }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/Auditor)

Auditor performs attestation and intrusion detection by:

 - Using a [Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) model between an *auditor* and *auditee*, the pair establish a private key in the [hardware-backed keystore](https://source.android.com/security/keystore/) of the *Auditor*.
 - The *auditor* can either be another instance of the Auditor app or the [Remote Attestation Service](https://attestation.app).
 - The *auditor* records the current state and configuration of the *auditee*.
 - Should tampering with the operating system of the *auditee* after the pairing is complete, the auditor will be aware of the change in the device state and configurations.
 - The user will be alerted to the change.

No personally identifiable information is submitted to the attestation service. We recommend that you sign up with an anonymous account and enable remote attestation for continuous monitoring.

If your [threat model](/threat-modeling/) requires privacy you could consider using Orbot or a VPN to hide your IP address from the attestation service.
To make sure that your hardware and operating system is genuine, [perform local attestation](https://grapheneos.org/install/web#verifying-installation) immediately after the device has been installed and prior to any internet connection.

### Secure Camera

!!! recommendation

    ![Secure camera logo](/assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Secure camera logo](/assets/img/android/secure_camera-dark.svg#only-dark){ align=right }

      **Secure Camera** is an camera app focused on privacy and security which can capture images, videos, and QR codes. CameraX vendor extensions (Portrait, HDR, Night Sight, Face Retouch, and Auto) are also supported on available devices.

    [Visit github.com](https://github.com/GrapheneOS/Camera){ .md-button .md-button--primary }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/Camera/releases)

Main privacy features include:

- Auto removal of [Exif](https://en.wikipedia.org/wiki/Exif) metadata (enabled by default)
- Use of the new [Media](https://developer.android.com/training/data-storage/shared/media) API, therefore [storage permissions](https://developer.android.com/training/data-storage) are not required
- Microphone permission not required unless you want to record sound

!!! note

    Metadata is not currently deleted from video files but that is planned.

    The image orientation metadata is not deleted. If you enable location (in Secure Camera) that **won't** be deleted either. If you want to delete that later you will need to use an external app such as [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif/).

### Secure PDF Viewer

!!! recommendation

    ![Secure PDF Viewer logo](/assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![Secure PDF Viewer logo](/assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }

    **Secure PDF Viewer** is a PDF viewer based on [pdf.js](https://en.wikipedia.org/wiki/PDF.js) that doesn't require any permissions. The PDF is fed into a [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(software_development)) [webview](https://developer.android.com/guide/webapps/webview). This means that it doesn't require permission directly to access content or files.

    [Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) is used to enforce that the JavaScript and styling properties within the WebView are entirely static content.

    [Visit github.com](https://github.com/GrapheneOS/PdfViewer){ .md-button .md-button--primary }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](/assets/img/android/privacyblur.svg){ align=right }

    **PrivacyBlur** is a free app which can blur sensitive portions of pictures before sharing them online.

    [Visit privacyblur.app](https://privacyblur.app/){ .md-button .md-button--primary }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.mathema.privacyblur/)
    - [:fontawesome-brands-github: GitHub](https://github.com/MATHEMA-GmbH/privacyblur)

!!! warning

    You should **never** use blur to redact [text in images](https://bishopfox.com/blog/unredacter-tool-never-pixelation). If you want to redact text in an image, draw a box over the text. For this we suggest [Pocket Paint](https://github.com/Catrobat/Paintroid) or [Imagepipe](https://codeberg.org/Starfish/Imagepipe).


## General Recommendations
### Avoid Root
[Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) Android phones can decrease security significantly as it weakens the complete [Android security model](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). This can decrease privacy should there be an exploit that is assisted by the decreased security. Common rooting methods involve directly tampering with the boot partition, making it impossible to perform successful [Verified Boot](https://source.android.com/security/verifiedboot). Apps that require root will also modify the system partition meaning that Verified Boot would have to remain disabled. Having root exposed directly in the user interface also increases the [attack surface](https://en.wikipedia.org/wiki/Attack_surface) of your device and may assist in [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation) vulnerabilities and [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) policy bypasses.

Adblockers (AdAway) which modify the [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) and firewalls (AFWall+) which require root access persistently are dangerous and should not be used. They are also not the correct way to solve their intended purposes. For Adblocking we suggest encrypted [DNS](/dns) or [VPN](/providers/vpn/) server blocking solutions instead. RethinkDNS, TrackerControl and AdAway in non-root mode will take up the VPN slot (by using a local loopback VPN) preventing you from using privacy enhancing services such as Orbot or a real VPN server.

AFWall+ works based on the [packet filtering](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter) approach and may be bypassable in some situations.

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

### Advanced Protection Program
If you have a Google account we suggest enrolling in the [Advanced Protection Program](https://landing.google.com/advancedprotection/). It is available at no cost to anyone with two or more hardware security keys with [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) support.

The Advanced Protection Program provides enhanced threat monitoring and enables:

 - Stricter two factor authentication; e.g. that [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) or [FIDO2](https://en.wikipedia.org/wiki/WebAuthn) **must** be used and disallows the use of [SMS OTPs](https://en.wikipedia.org/wiki/One-time_password#SMS), [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password), and [OAuth](https://en.wikipedia.org/wiki/OAuth)
 - Only Google and verified third party apps can access account data
 - Scanning of incoming emails on Gmail accounts for [phishing](https://en.wikipedia.org/wiki/Phishing#Email_phishing) attempts
 - Stricter [safe browser scanning](https://www.google.com/chrome/privacy/whitepaper.html#malware) with Google Chrome
 - Stricter recovery process for accounts with lost credentials

 For users that are using the privileged Google Play Services (common on stock operating systems), the Advanced Protection Program also comes with [additional benefits](https://support.google.com/accounts/answer/9764949?hl=en) such as:
 - Not allowing app installation outside of the Google Play Store, the OS vendor's app store, or via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
 - Mandatory automatic device scanning with [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
 - Warning the user about unverified applications

### SafetyNet and Play Integrity API
[SafetyNet](https://developer.android.com/training/safetynet/attestation) and the [Play Integrity APIs](https://developer.android.com/google/play/integrity) are generally used for [banking apps](https://grapheneos.org/usage#banking-apps). Many banking apps will work fine in GrapheneOS with sandboxed Play services, however some non-financal apps have their own crude anti-tampering mechanisms which might fail. GrapheneOS passes the `basicIntegrity` check, but not the certification check `ctsProfileMatch`. Devices with Android 8 or later have hardware attestation support which cannot be bypassed without leaked keys or serious vulnerabilities.

As for Google Wallet, we don't recommend this due to their [privacy policy](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), which states you must opt-out if you don't want your credit rating and personal information shared with affiliate marketing services.

### Advertising ID
All devices with Google Play Services installed automatically generate an [advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) used for targeted advertising. Disable this feature to limit the data collected about you.

On Android distributions with [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), go to ⚙️ Settings → Apps → Sandboxed Google Play → Google Settings → Ads and select **Delete advertising ID**.

On Android distributions with privileged Google Play Services (such as stock OSes), the setting may be in one of several locations. Check
 - ⚙️ Settings → Google → Ads
 - ⚙️ Settings → Privacy → Ads

Depending on your system, you will either be given the option to delete your advertising ID or to "Opt out of interest-based ads". You should delete the advertising ID if you are given the option to, and if you are not, we recommend that you opt out of interested-based ads and then reset your advertising ID.

### Android Device Shopping
Google Pixels are known to have good security and properly support [Verified Boot](https://source.android.com/security/verifiedboot). Some other phones such as the Fairphone and OnePlus devices also support custom Android Verified Boot (AVB) key enrollment. However, there have been issues with their older models. In the past they were using [test keys](https://social.coop/@dazinism/105346943304083054) or not doing proper verification, making Verified Boot on those devices useless.

Avoid buying phones from mobile network operators. These often have a **locked bootloader** and do not support [OEM unlocking](https://source.android.com/devices/bootloader/locking_unlocking). These phone variants will prevent you from installing any kind of alternative Android distribution. Phones that cannot be unlocked will often have an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) starting with "35", that includes phones from purchased from Verizon, Telus, Rogers, EE, etc.

Be very **careful** about buying second hand phones from online marketplaces. Always check the reputation of the seller. If the device is stolen there's a possibility of [IMEI blacklisting](https://www.gsma.com/security/resources/imei-blacklisting/). There is also a risk involved with you being associated with the activity of the previous owner.

We have these general tips:
 - If you're after a bargain on a Pixel device, we suggest buying an "**a**" model, just after the next flagship is released. Discounts are usually available because Google will be trying to clear their stock.
 - Consider price beating options and specials offered at [brick and mortar](https://en.wikipedia.org/wiki/Brick_and_mortar) stores.
 - Look at online community bargain sites in your country. These can alert you to good sales.
 - The price per day for a device can be calculated as  $\text {EoL Date}-\text{Current Date} \over \text{Cost}$. Google provides a [list](https://support.google.com/nexus/answer/4457705) of their supported devices.
 - Do not buy devices that have reached or are near their end-of-life, additional firmware updates must be provided by the manufacturer.
 - Do not buy preloaded LineageOS or /e/ OS phones or any Android phones without proper [Verified Boot](https://source.android.com/security/verifiedboot) support and firmware updates. These devices also have no way for you to check whether they've been tampered with.
 - In short, if a device or Android distribution is not listed here, there is probably a good reason, so check our [discussions](https://github.com/privacyguides/privacyguides.org/discussions) page.

The installation of GrapheneOS on a Pixel phone is easy with their [web installer](https://grapheneos.org/install/web). If you don't feel comfortable doing it yourself and are willing to spend a bit of extra money, check out the [NitroPhone](https://shop.nitrokey.com/shop) as they come preloaded with GrapheneOS from the reputable [Nitrokey](https://www.nitrokey.com/about) company. The GrapheneOS project is not currently affiliated with any vendor and cannot ensure the quality or security of their products.

A [CalyxOS membership](https://calyxinstitute.org/membership/calyxos) also entitles you to a device preloaded with CalyxOS.

## GrapheneOS's App Store
GrapheneOS's app store is available on [GitHub](https://github.com/GrapheneOS/Apps/releases). It supports Android 12 and above and is capable of updating itself. The app store has standalone applications built by the GrapheneOS project such as the [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera), and [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). If you are looking for these applications, we highly recommend that you get them from GrapheneOS's app store instead of the Play Store, as the apps on their store are signed by the GrapheneOS's project own signature that Google does not have access to.

## F-Droid
F-Droid is often recommended as an alternative to Google Play, particularly in the privacy community. The option to add third party repositories and not be confined to Google's [walled garden](https://en.wikipedia.org/wiki/Closed_platform) has led to its popularity. F-Droid additionally has [reproducible builds](https://f-droid.org/en/docs/Reproducible_Builds/) for some applications, and is dedicated to free and open source software. However, there are problems with the official F-Droid client, their quality control, and how they build, sign and deliver packages, outlined in this [post](https://wonderfall.dev/fdroid-issues/).

### Droid-ify

The official F-Droid client targets a [low API level](https://wonderfall.dev/fdroid-issues/#3-low-target-api-level-sdk-for-client--apps) and does not utilize the [seamless updates](https://www.androidcentral.com/google-will-finally-bring-seamless-app-updates-alternative-app-stores-android-12) feature introduced in Android 12. Targeting lower API levels means that the F-Droid client cannot take advantage of the new improvements in the application sandboxes that comes with higher API levels. For automatic updates to work, the F-Droid client requires that the [Privileged Extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/) be included in the operating system, granting it more privileges than what a normal app would have, which is not great for security.

To mitigate these problems, we recommend [Droid-ify](https://github.com/Iamlooker/Droid-ify) as it supports seamless updates on Android 12 and above without needing any special privileges and targets a higher API level.

!!! recommendation

    ![Droid-ify logo](assets/img/android/droid-ify.png){ align=right }

    **Droid-ify** is a modern F-Droid client made with MaterialUI, forked from [Foxy Droid](https://github.com/kitsunyan/foxy-droid).

    Unlike the official F-Droid client, Droid-ify supports seamless updates on Android 12 and above without the need for a privileged extension. If your Android distribution is on Android 12 or above and does not include the [F-Droid privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/), it is highly recommended that you use Droid-ify instead of the official client.

    **Downloads:**
    - [:fontawesome-brands-android: APK Download](https://android.izzysoft.de/repo/apk/com.looker.droidify)
    - [:fontawesome-brands-github: GitHub](https://github.com/Iamlooker/Droid-ify)

### Where to get your applications
Sometimes the official F-Droid repository may fall behind on updates. F-Droid maintainers reuse package IDs while signing apps with their own keys, which is not ideal as it does give the F-Droid team ultimate trust. The Google Play version of some apps may contain unwanted telemetry or lack features that are available in the F-Droid version. The Google Play Store requires a Google account to login which is not great for privacy. The [Aurora Store](https://auroraoss.com/download/AuroraStore/) (a Google Play Store proxy) does not always work, though it does most of the time.

We have these general tips:

 - Check if the app developers have their own F-Droid repository first, e.g. [Bitwarden](https://bitwarden.com/), [Samourai Wallet](https://www.samouraiwallet.com/), or [Newpipe](https://newpipe.net/), which have their own repositories with less telemetry, additional features or faster updates. This is the ideal situation and you should be using these repositories if possible.
 - Check if an app is available on the [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) repository. The IzzyOnDroid repository pulls builds directly from GitHub and is the next best thing to the developers' own repositories. We recommend that you download the GitHub builds and install them manually first, then use IzzyOnDroid for any subsequent updates. This will ensure that the signature of the applications you get from IzzyOnDroid matches that of the developer and the packages have not been tampered with.
 - Check if there are any differences between the F-Droid version and the Google Play Store version. Some applications like [IVPN](https://www.ivpn.net/) do not include certain features (eg [AntiTracker](https://www.ivpn.net/knowledgebase/general/antitracker-faq/)) in their Google Play Store build out of fear of censorship by Google.

Evaluate whether the additional features in the F-Droid build are worth the slower updates. Also think about whether faster updates from the Google Play Store are worth the potential privacy isues in your [threat model](/threat-modeling/).

## Security comparison of GrapheneOS and CalyxOS
### Profiles
CalyxOS includes a device controller app so there is no need to install a third party app like [Shelter](/android/#recommended-apps). GrapheneOS plans to introduce nested profile support with better isolation in the future.

GrapheneOS extends the [user profile](/android/#android-security-privacy) feature allowing a user to press an "End Session" button. This button clears the encryption key from memory. There are plans to add a [cross profile notifications system](https://github.com/GrapheneOS/os-issue-tracker/issues/88) in the future.

### Sandboxed Google Play vs Privileged MicroG
When Google Play services are used on GrapheneOS, they run as a user app and are contained within a user or work profile.

Sandboxed Google Play is confined using the highly restrictive, default [`untrusted_app`](https://source.android.com/security/selinux/concepts) domain provided by [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux). Permissions for apps to use Google Play Services can be revoked at any time by the user.

MicroG is a reimplementation of Google Play Services. This means it needs to be updated every time Android has a major version update (or the Android API changes). It also needs to run in the highly privileged [`system_app`](https://source.android.com/security/selinux/concepts) SELinux domain like normal Google Play Services and requires access to [signature spoofing](https://madaidans-insecurities.github.io/android.html#microg-signature-spoofing) so this is less secure than the Sandboxed Google Play approach. We do not believe MicroG provides any privacy advantages over Sandboxed Google Play except for the option to _shift trust_ of the location backend from Google to another provider such as Mozilla or DejaVu.

From a usability point of view, Sandboxed Google Play also works well with far more applications than MicroG, thanks to its support for services like [Google Play Games](https://play.google.com/googleplaygames) and [In-app Billing API](https://android-doc.github.io/google/play/billing/api.html).

### Privileged App Extensions
Android 12 comes with special support for seamless app updates with [third party app stores](https://android-developers.googleblog.com/2020/09/listening-to-developer-feedback-to.html). The popular Free and Open Source Software (FOSS) repository [F-Droid](https://f-droid.org) doesn't implement this feature and requires a [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged) to be included with the Android distribution in order to have unattended app installation.

GrapheneOS doesn't compromise on security; therefore, they do not include the F-Droid extension. Users have to confirm all updates manually if they want to use F-Droid. Alternatively, they can use the Droid-ify client which does support seamless app updates in Android 12. GrapheneOS officially recommends [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play) instead. Many FOSS Android apps are also in Google Play but sometimes they are not (like [NewPipe]({% link _evergreen/video-streaming.md %})).

CalyxOS includes the [privileged extension](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged), which may lower device security. Seamless app updates should be possible with [Aurora Store](https://auroraoss.com) in Android 12.

### Additional hardening
GrapheneOS improves upon [AOSP](https://source.android.com/) security with:

 -   **Hardened WebView:** Vanadium WebView requires [64-bit](https://en.wikipedia.org/wiki/64-bit_computing) processes on the [WebView](https://developer.android.com/reference/android/webkit/WebView) process and disables legacy [32-bit](https://en.wikipedia.org/wiki/32-bit_computing) processes. It uses hardened compiler options such as [`-fwrapv`](https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html) and [`-fstack-protector-strong`](https://gcc.gnu.org/onlinedocs/gcc-4.9.3/gcc/Optimize-Options.html), which can help protect against [stack buffer overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow). [API](https://en.wikipedia.org/wiki/API)s such as the [battery status API](https://chromestatus.com/feature/4537134732017664) are disabled for privacy reasons. All system apps on GrapheneOS use the Vanadium WebView which means user installed apps that use WebView will also benefit from Vanadium's hardening. The [Vanadium patch set](https://github.com/GrapheneOS/Vanadium/tree/12/patches) is a lot more comprehensive than CalyxOS's [Chromium patch set](https://gitlab.com/CalyxOS/chromium-patches) which is derived from it.
 -   **Hardened Kernel:** GrapheneOS kernel includes some hardening from the [linux-hardened](https://github.com/GrapheneOS/linux-hardened) project and the [Kernel Self Protection Project (KSPP)](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project). CalyxOS uses the [same kernel](https://calyxos.org/docs/development/build/kernel/) as regular Android with some minor modifications.
 -   **Hardened Memory Allocator:** GrapheneOS uses the [hardened malloc](https://github.com/GrapheneOS/hardened_malloc) subproject as its memory allocator. This focuses on hardening against [memory heap corruption](https://en.wikipedia.org/wiki/Memory_corruption). CalyxOS uses the default AOSP [Scudo Malloc](https://source.android.com/devices/tech/debug/scudo), which is generally [less effective](https://twitter.com/danielmicay/status/1033671709197398016). Hardened Malloc has uncovered vulnerabilities in AOSP which have been [fixed](https://github.com/GrapheneOS/platform_system_core/commit/be11b59725aa6118b0e1f0712572e835c3d50746) by GrapheneOS such as [CVE-2021-0703](https://nvd.nist.gov/vuln/detail/CVE-2021-0703).
 -   **Secure Exec Spawning:** GrapheneOS [spawns](https://en.wikipedia.org/wiki/Spawn_(computing)) fresh processes as opposed to using the [Zygote model](https://ayusch.com/android-internals-the-android-os-boot-process) used by AOSP and CalyxOS. The Zygote model weakens [Address Space Layout Randomization](https://en.wikipedia.org/wiki/Address_space_layout_randomization) (ASLR) and is considered [less secure](https://wenke.gtisc.gatech.edu/papers/morula.pdf). Creating [fresh processes](https://grapheneos.org/usage#exec-spawning) is safer but will have some performance penalty when launching a new application. These penalties are not really noticeable unless you have an [old device](https://support.google.com/nexus/answer/4457705) with slow storage such as the Pixel 3a/3a XL as it has [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC).

**Please note that these are just a few examples and are not an extensive list of GrapheneOS's hardening**. For a more complete list, please read GrapheneOS' [official documentation](https://grapheneos.org/features).

---
title: "Android Security and Privacy Features"
icon: 'material/cellphone-lock'
---

## User Profiles

Multiple user profiles (Settings → System → Multiple users) are the simplest way to isolate in Android. With user profiles you can limit a user from making calls, SMS or installing apps on the device. Each profile is encrypted using its own encryption key and cannot access the data of any other profiles. Even the device owner cannot view the data of other profiles without knowing their password. Multiple user profiles is a more secure method of isolation.

## Work Profile

[Work Profiles](https://support.google.com/work/android/answer/6191949) are another way to isolate individual apps and may be more convenient than separate user profiles.

A **device controller** such as [Shelter](#recommended-apps) is required, unless you're using CalyxOS which includes one.

The work profile is dependent on a device controller to function. Features such as *File Shuttle* and *contact search blocking* or any kind of isolation features must be implemented by the controller. The user must also fully trust the device controller app, as it has full access to the data inside of the work profile.

This method is generally less secure than a secondary user profile; however, it does allow you the convenience of running apps in both the work and personal profiles simultaneously.

## Verified Boot

[Verified Boot](https://source.android.com/security/verifiedboot) is an important part of the Android security model. It provides protection against [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, malware persistence, and ensures security updates cannot be downgraded with [rollback protection](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

Android 10 and above has moved away from full-disk encryption to more flexible [file-based encryption](https://source.android.com/security/encryption/file-based).

Each user's data is encrypted using their own unique encryption key, and the operating system files are left unencrypted. Verified Boot ensures the integrity of the operating system files preventing an adversary with physical access from tampering or installing malware on the device. In the unlikely case that malware is able to exploit other parts of the system and gain higher privileged access, Verified Boot will prevent and revert changes to the system partition upon reboot of the device.

Unfortunately, OEMs are only obliged to support Verified Boot on their stock Android distribution. Only a few OEMs such as Google support custom AVB key enrollment on their devices. Some AOSP derivatives such as LineageOS or /e/ OS do not support Verified Boot even on hardware with Verified Boot support for third party operating systems. We recommend that you check for support **before** purchasing a new device. AOSP derivatives which do not support Verified Boot are **not** recommended.

## VPN Killswitch

Android 7 and above supports a VPN killswitch and it is available without the need to install third party apps. This feature can prevent leaks if the VPN is disconnected. It can be found in ⚙️ Settings → Network & internet → VPN → ⚙️ → Block connections without VPN.

## Global Toggles

Modern Android devices have global toggles for disabling Bluetooth and location services. Android 12 introduced toggles for the camera and microphone. When not in use, we recommend disabling these features. Apps cannot use disabled features (even if granted individual permission) until re-enabled.

## Google

If you are using a device with Google services, either your stock operating system or an operating system that safely sandboxes Google Play Services like GrapheneOS, there are a number of additional changes you can make to improve your privacy. We still recommend avoiding Google services entirely, or limiting Google Play services to a specific user/work profile by combining a device controller like *Shelter* with GrapheneOS's Sandboxed Google Play.

### Advanced Protection Program

If you have a Google account we suggest enrolling in the [Advanced Protection Program](https://landing.google.com/advancedprotection/). It is available at no cost to anyone with two or more hardware security keys with [FIDO](/security/multi-factor-authentication.md#fido-fast-identity-online) support.

The Advanced Protection Program provides enhanced threat monitoring and enables:

- Stricter two factor authentication; e.g. that [FIDO](/security/multi-factor-authentication/#fido-fast-identity-online) **must** be used and disallows the use of [SMS OTPs](/security/multi-factor-authentication/#sms-or-email-mfa), [TOTP](/security/multi-factor-authentication.md#time-based-one-time-password-totp), and [OAuth](https://en.wikipedia.org/wiki/OAuth)
- Only Google and verified third party apps can access account data
- Scanning of incoming emails on Gmail accounts for [phishing](https://en.wikipedia.org/wiki/Phishing#Email_phishing) attempts
- Stricter [safe browser scanning](https://www.google.com/chrome/privacy/whitepaper.html#malware) with Google Chrome
- Stricter recovery process for accounts with lost credentials

 For users that are using the privileged Google Play Services (common on stock operating systems), the Advanced Protection Program also comes with [additional benefits](https://support.google.com/accounts/answer/9764949?hl=en) such as:

- Not allowing app installation outside of the Google Play Store, the OS vendor's app store, or via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- Mandatory automatic device scanning with [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Warning the user about unverified applications

### Advertising ID

All devices with Google Play Services installed automatically generate an [advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) used for targeted advertising. Disable this feature to limit the data collected about you.

On Android distributions with [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), go to ⚙️ Settings → Apps → Sandboxed Google Play → Google Settings → Ads and select **Delete advertising ID**.

On Android distributions with privileged Google Play Services (such as stock OSes), the setting may be in one of several locations. Check

- ⚙️ Settings → Google → Ads
- ⚙️ Settings → Privacy → Ads

Depending on your system, you will either be given the option to delete your advertising ID or to "Opt out of interest-based ads". You should delete the advertising ID if you are given the option to, and if you are not, we recommend that you opt out of interested-based ads and then reset your advertising ID.

### SafetyNet and Play Integrity API

[SafetyNet](https://developer.android.com/training/safetynet/attestation) and the [Play Integrity APIs](https://developer.android.com/google/play/integrity) are generally used for [banking apps](https://grapheneos.org/usage#banking-apps). Many banking apps will work fine in GrapheneOS with sandboxed Play services, however some non-financal apps have their own crude anti-tampering mechanisms which might fail. GrapheneOS passes the `basicIntegrity` check, but not the certification check `ctsProfileMatch`. Devices with Android 8 or later have hardware attestation support which cannot be bypassed without leaked keys or serious vulnerabilities.

As for Google Wallet, we don't recommend this due to their [privacy policy](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), which states you must opt-out if you don't want your credit rating and personal information shared with affiliate marketing services.

--8<-- "includes/abbreviations.en.md"

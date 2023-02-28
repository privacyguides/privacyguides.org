---
title: Android Overview
icon: fontawesome/brands/android
---

Android to bezpieczny system operacyjny, który posiada silną [izolację aplikacji](https://source.android.com/security/app-sandbox), [Weryfikację rozruchu](https://source.android.com/security/verifiedboot) (AVB), oraz solidny system kontroli [uprawnień](https://developer.android.com/guide/topics/permissions/overview).

## Wybór dystrybucji Androida

System Android na zakupionym telefonie często zawiera zintegrowane inwazyjne aplikacje oraz usługi, które nie są częścią [Android Open Source Project](https://source.android.com/). Jedną z nich są Usługi Google Play, która ma niezbywalne uprawnienia dostępu do Twoich plików, magazynu kontaktów, rejestru połączeń, wiadomości SMS, lokalizacji, aparatu, mikrofonu, identyfikatorów sprzętowych oraz wiele więcej. Te aplikacje i usługi zwiększają możliwości ataku na Twoje urządzenie oraz są źródłem wielu obaw związanych z prywatnością systemu Android.

Ten problem można rozwiązać instalując niestandardową dystrybucję Androida, która nie zawiera tak inwazyjnej integracji. Niestety, ale wiele niestandardowych dystrybucji Androida narusza model bezpieczeństwa systemu nie wspierając funkcji bezpieczeństwa, takich jak AVB, ochrona przed cofnięciem aktualizacji, aktualizacje oprogramowania i innych. Some distributions also ship [`userdebug`](https://source.android.com/setup/build/building#choose-a-target) builds which expose root via [ADB](https://developer.android.com/studio/command-line/adb) and require [more permissive](https://github.com/LineageOS/android_system_sepolicy/search?q=userdebug&type=code) SELinux policies to accommodate debugging features, resulting in a further increased attack surface and weakened security model.

Wybierając niestandardową dystrybucję Androida, należy upewnić się, że jest ona zgodna z modelem bezpieczeństwa tego systemu. At the very least, the distribution should have production builds, support for AVB, rollback protection, timely firmware and operating system updates, and SELinux in [enforcing mode](https://source.android.com/security/selinux/concepts#enforcement_levels). All of our recommended Android distributions satisfy these criteria.

[Polecane przez nas dystrybucje Androida :hero-arrow-circle-right-fill:](../android.md ""){.md-button}

## Unikaj rootowania

[Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) Android phones can decrease security significantly as it weakens the complete [Android security model](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). This can decrease privacy should there be an exploit that is assisted by the decreased security. Common rooting methods involve directly tampering with the boot partition, making it impossible to perform successful Verified Boot. Apps that require root will also modify the system partition meaning that Verified Boot would have to remain disabled. Having root exposed directly in the user interface also increases the [attack surface](https://en.wikipedia.org/wiki/Attack_surface) of your device and may assist in [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation) vulnerabilities and SELinux policy bypasses.

Blokery reklam, które modyfikują [plik hosts](https://en.wikipedia.org/wiki/Hosts_(file)) (AdAway) oraz zapory sieciowe (AFWall+), które wymagają ciągłego dostępu do roota są niebezpieczne i nie powinny być używane. Nie są one również właściwym sposobem na rozwiązanie ich zamierzonych celów. Zamiast tego do blokowania reklam polecamy szyfrowany [DNS](../dns.md) lub [sieć VPN](../vpn.md) z blokowaniem serwerów. RethinkDNS, TrackerControl oraz AdAway bez dostępu do roota zajmą miejsce sieci VPN (używając interfejsu zwrotnego VPN) uniemożliwiając Ci korzystanie z usług zwiększających prywatność, takich jak Orbot lub prawdziwej sieci VPN.

AFWall+ działa w oparciu o [filtrowanie pakietów](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter), które może w niektórych przypadkach zostać ominięte.

Naszym zdaniem, wady zdecydowanie przewyższają zalety rootowania telefonu w celu korzystania z tych aplikacji.

## Verified Boot

[Verified Boot](https://source.android.com/security/verifiedboot) is an important part of the Android security model. It provides protection against [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, malware persistence, and ensures security updates cannot be downgraded with [rollback protection](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

W Androidzie 10 i nowszych zrezygnowano z szyfrowania całego dysku na rzecz bardziej elastycznego [szyfrowania plików](https://source.android.com/security/encryption/file-based). Twoje dane są zaszyfrowane za pomocą niepowtarzalnych kluczy szyfrujących, a pliki systemu operacyjnego pozostają niezaszyfrowane.

Verified Boot ensures the integrity of the operating system files, thereby preventing an adversary with physical access from tampering or installing malware on the device. In the unlikely case that malware is able to exploit other parts of the system and gain higher privileged access, Verified Boot will prevent and revert changes to the system partition upon rebooting the device.

Unfortunately, OEMs are only obliged to support Verified Boot on their stock Android distribution. Only a few OEMs such as Google support custom AVB key enrollment on their devices. Additionally, some AOSP derivatives such as LineageOS or /e/ OS do not support Verified Boot even on hardware with Verified Boot support for third-party operating systems. We recommend that you check for support **before** purchasing a new device. AOSP derivatives which do not support Verified Boot are **not** recommended.

Aktualizacje oprogramowania mają kluczowe znaczenie dla zachowania bezpieczeństwa. Producenci urządzeń zawierają umowy ze swoimi partnerami na dostarczanie komponentów o zamkniętym kodzie źródłowym przez ograniczony czas. This breaks verified boot on a stock Fairphone device, as the system will boot alternative Android operating systems such (such as /e/) [without any warning](https://source.android.com/security/verifiedboot/boot-flow#locked-devices-with-custom-root-of-trust) about custom operating system usage.

## Aktualizacje oprogramowania

Firmware updates are critical for maintaining security and without them your device cannot be secure. Dlatego ważne jest, aby zakupić urządzenie, które jest nadal wspierane. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) oraz [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) oferując wsparcie dla swoich urządzeń przez 4 lata, podczas gdy tańsze produkty często mają krótszy okres wsparcia.

Urządzenia bez aktywnego wsparcia producenta układów nie otrzymują już aktualizacji oprogramowania od producentów urządzeń lub niestandardowych dystrybucji Androida. Oznacza to, że luki bezpieczeństwa w tych urządzeniach nie zostaną naprawione. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) and [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) support their devices for 4 years, while cheaper products often have shorter support cycles. With the introduction of the [Pixel 6](https://support.google.com/pixelphone/answer/4457705), Google now makes their own SoC and they will provide a minimum of 5 years of support.

Ważne jest, aby nie korzystać z [niewspieranej](https://endoflife.date/android) wersji Androida. Nowsze wersje Androida nie tylko otrzymują poprawki bezpieczeństwa dla systemu operacyjnego, ale także ważne aktualizacje poprawiające prywatność.

[Uprawnienia systemu Android](https://developer.android.com/guide/topics/permissions/overview) umożliwiają Ci kontrolę nad tym, do czego mają dostęp Twoje aplikacje. Firma Google regularnie wprowadza [poprawki](https://developer.android.com/about/versions/11/privacy/permissions) do systemu zabezpieczeń z każdą kolejną wersją. Wszystkie instalowane przez Ciebie aplikacje są ściśle [izolowane](https://source.android.com/security/app-sandbox), więc nie ma potrzeby instalowania żadnych aplikacji antywirusowych.

## Wersje Androida

It's important to not use an [end-of-life](https://endoflife.date/android) version of Android. Newer versions of Android not only receive security updates for the operating system but also important privacy enhancing updates too. For example, [prior to Android 10](https://developer.android.com/about/versions/10/privacy/changes), any apps with the [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) permission could access sensitive and unique serial numbers of your phone such as [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier), your SIM card's [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity), whereas now they must be system apps to do so. System apps are only provided by the OEM or Android distribution.

## Uprawnienia systemu Android

[Permissions on Android](https://developer.android.com/guide/topics/permissions/overview) grant you control over what apps are allowed to access. Google regularly makes [improvements](https://developer.android.com/about/versions/11/privacy/permissions) on the permission system in each successive version. All apps you install are strictly [sandboxed](https://source.android.com/security/app-sandbox), therefore, there is no need to install any antivirus apps. A smartphone with the latest version of Android will always be more secure than an old smartphone with an antivirus that you have paid for. It's better not to pay for antivirus software and to save money to buy a new smartphone such as a Google Pixel.

Should you want to run an app that you're unsure about, consider using a user or work profile.

## Profile użytkowników

Quite a few applications allows you to "share" a file with them for media upload. If you want to, for example, tweet a picture to Twitter, do not grant Twitter access to your "media and photos", because it will have access to all of your pictures then. Instead, go to your file manager (documentsUI), hold onto the picture, then share it with Twitter.

## User Profiles

Multiple user profiles can be found in **Settings** → **System** → **Multiple users** and are the simplest way to isolate in Android.

With user profiles, you can impose restrictions on a specific profile, such as: making calls, using SMS, or installing apps on the device. Each profile is encrypted using its own encryption key and cannot access the data of any other profiles. Even the device owner cannot view the data of other profiles without knowing their password. Multiple user profiles are a more secure method of isolation.

## Work Profile

[Work Profiles](https://support.google.com/work/android/answer/6191949) are another way to isolate individual apps and may be more convenient than separate user profiles.

A **device controller** app such as [Shelter](#recommended-apps) is required to create a Work Profile without an enterprise MDM, unless you're using a custom Android OS which includes one.

The work profile is dependent on a device controller to function. Features such as *File Shuttle* and *contact search blocking* or any kind of isolation features must be implemented by the controller. Jeśli w danej chwili z nich nie korzystasz, zalecamy wyłączenie tych funkcji.

This method is generally less secure than a secondary user profile; however, it does allow you the convenience of running apps in both the work and personal profiles simultaneously.

## VPN Killswitch

Android 7 and above supports a VPN killswitch and it is available without the need to install third-party apps. This feature can prevent leaks if the VPN is disconnected. It can be found in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.

## Global Toggles

Modern Android devices have global toggles for disabling Bluetooth and location services. Android 12 introduced toggles for the camera and microphone. When not in use, we recommend disabling these features. Apps cannot use disabled features (even if granted individual permission) until re-enabled.

## Google

If you are using a device with Google services, either your stock operating system or an operating system that safely sandboxes Google Play Services like GrapheneOS, there are a number of additional changes you can make to improve your privacy. We still recommend avoiding Google services entirely, or limiting Google Play services to a specific user/work profile by combining a device controller like *Shelter* with GrapheneOS's Sandboxed Google Play.

### Advanced Protection Program

If you have a Google account we suggest enrolling in the [Advanced Protection Program](https://landing.google.com/advancedprotection/). To umożliwi Ci otrzymywanie **niektórych** poprawek bezpieczeństwa od Google bez naruszania modelu zabezpieczeń Androida poprzez używanie systemu pochodnego od Androida i zwiększanie ryzyka na atak.

The Advanced Protection Program provides enhanced threat monitoring and enables:

- Stricter two factor authentication; e.g. that [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) **must** be used and disallows the use of [SMS OTPs](../basics/multi-factor-authentication.md#sms-or-email-mfa), [TOTP](../basics/multi-factor-authentication.md#time-based-one-time-password-totp) and [OAuth](https://en.wikipedia.org/wiki/OAuth)
- Only Google and verified third-party apps can access account data
- Scanning of incoming emails on Gmail accounts for [phishing](https://en.wikipedia.org/wiki/Phishing#Email_phishing) attempts
- Stricter [safe browser scanning](https://www.google.com/chrome/privacy/whitepaper.html#malware) with Google Chrome
- Stricter recovery process for accounts with lost credentials

 If you use non-sandboxed Google Play Services (common on stock operating systems), the Advanced Protection Program also comes with [additional benefits](https://support.google.com/accounts/answer/9764949?hl=en) such as:

- Not allowing app installation outside of the Google Play Store, the OS vendor's app store, or via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- Mandatory automatic device scanning with [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Warning you about unverified applications

### Aktualizacje systemowe Google Play

In the past, Android security updates had to be shipped by the operating system vendor. Android has become more modular beginning with Android 10, and Google can push security updates for **some** system components via the privileged Play Services.

If you have an EOL device shipped with Android 10 or above and are unable to run any of our recommended operating systems on your device, you are likely going to be better off sticking with your OEM Android installation (as opposed to an operating system not listed here such as LineageOS or /e/ OS). This will allow you to receive **some** security fixes from Google, while not violating the Android security model by using an insecure Android derivative and increasing your attack surface. We would still recommend upgrading to a supported device as soon as possible.

### Advertising ID

All devices with Google Play Services installed automatically generate an [advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) used for targeted advertising. Disable this feature to limit the data collected about you.

On Android distributions with [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), go to :gear: **Settings** → **Apps** → **Sandboxed Google Play** → **Google Settings** → **Ads**, and select *Delete advertising ID*.

On Android distributions with privileged Google Play Services (such as stock OSes), the setting may be in one of several locations. Check

- :gear: **Settings** → **Google** → **Ads**
- :gear: **Settings** → **Privacy** → **Ads**

You will either be given the option to delete your advertising ID or to *Opt out of interest-based ads*, this varies between OEM distributions of Android. If presented with the option to delete the advertising ID that is preferred. If not, then make sure to opt out and reset your advertising ID.

### SafetyNet and Play Integrity API

[SafetyNet](https://developer.android.com/training/safetynet/attestation) and the [Play Integrity APIs](https://developer.android.com/google/play/integrity) are generally used for [banking apps](https://grapheneos.org/usage#banking-apps). Many banking apps will work fine in GrapheneOS with sandboxed Play services, however some non-financial apps have their own crude anti-tampering mechanisms which might fail. GrapheneOS passes the `basicIntegrity` check, but not the certification check `ctsProfileMatch`. Devices with Android 8 or later have hardware attestation support which cannot be bypassed without leaked keys or serious vulnerabilities.

As for Google Wallet, we don't recommend this due to their [privacy policy](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), which states you must opt-out if you don't want your credit rating and personal information shared with affiliate marketing services.

--8<-- "includes/abbreviations.pl.txt"

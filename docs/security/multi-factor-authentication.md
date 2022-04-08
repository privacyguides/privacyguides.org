---
title: Multi-factor Authentication
description: "Using strong MFA can stop over 99% of unauthorized account accesses, and it's easy to set up on the services you already use."
icon: 'material/two-factor-authentication'
---

**Two-Factor Authentication** (also known as **2FA**, **Multi-Factor Authentication**, or **MFA**) is a security mechanism that requires additional steps beyond simply your username/email and password. If you've ever had to enter a 6-digit code sent to your phone to log in to a website, that's an example of 2FA.

The idea behind 2FA is that even if a hacker is able to figure out your password (something you *know*), they will still need a device you own like your phone (something you *have*) in order to generate the code needed to log in to your account. 2FA methods vary in security based on this premise: The more difficult it is for an attacker to gain access to your 2FA method, the better. 2FA methods include: Email or SMS codes, Push Notifications,Software (TOTP) Code-Generating Apps, Hardware Keys.

## MFA Method Comparison

==**SMS Codes** or Emailed Codes are better than nothing at all, but only marginally.== Getting a code over SMS or Email takes away from the "something you *have*" idea, because there are a variety of ways a hacker could take over your phone number or gain access to your emails without having physical access to any of your devices at all!

**Push Notifications** take the form of a message being sent to an app on your phone asking you to confirm new account logins. This is a lot better than SMS or Email, since an attacker typically wouldn't be able to get these push notifications without having an already logged-in device, thus requiring physical access to your device. However, they can be easy to click through and accept accidentally, and are typically sent to *all* your devices at once, widening the availability of the 2FA code if you have many devices. This solution is also generally a proprietary solution, so you are reliant on the company you have an account with to implement their custom solution securely rather than implementing an industry standard. Finally, it requires you to keep an app for every login you have on your mobile device, which may or may not be convenient to you.

==If you want to take your security seriously, you should use a dedicated **Authenticator App** on your phone to generate these codes whenever possible.== These authenticator apps follow the same standard, allowing you to keep codes from many different companies in one place for ease-of-use. They also keep the codes securely stored (optionally requiring biometrics on your phone to access them), and make it difficult to duplicate the codes so they cannot be reproduced by a hacker later, even if they briefly had physical access to your phone.

**Hardware security keys** are a very strong form of multi-factor security. These are devices that implement a standard such as **FIDO2** or **U2F** that you need to physically attach to your computer or phone to log in to your accounts. A hardware key has a secure cryptoprocessor (essentially an entire mini computer) on them which stores and manages your encryption keys. Many of them have specific tamper-resistant mechanisms, but all of them are designed with the goal that they should be impossible to reproduce: The key you have will typically be the **only** way to gain access to your account.

Hardware keys come in a variety of form factors that can connect to your device in different ways, such as a USB stick you plug in to your computer, or a Bluetooth/NFC token you connect to your device wirelessly. Some newer computers and mobile devices even have built-in hardware keys.

There are a few risks with using hardware security keys that are similar to the risks of using your house keys. First, if you lose or destroy a hardware key by accident and don't have a backup or other means of account recovery (either of which would reduce the security value of the hardware key), you will completely and irrevocably lose access to your account. Second, hardware keys can be stolen or forcefully taken from you. Finally, it is possibile that a hardware key might be tampered with or replaced with a fake prior to you receiving it, although most hardware key providers have methods to verify that their keys are authentic and uncompromised.

Ultimately, the best form of two-factor security is the one you will use consistently on every account you have, that doesn't significantly interfere with your life. If you need to log in to an account often or on many devices, a hardware key may prove to be too much of a burden for example.

## Hardware Security Keys

### YubiKey

!!! recommendation

    ![YubiKeys](/assets/img/multi-factor-authentication/yubikey.png)

    The **YubiKey** was one of the first security keys. It has a wide range of features such as for [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 WebAuthn](https://en.wikipedia.org/wiki/WebAuthn), PGP and One-Time-Pad (OTP) authentication. One of the benefits of this key is that one key can do everything.

    The firmware is not open source and cannot be updated without purchasing a new key.

    [Visit yubico.com](https://www.yubico.com){ .md-button .md-button--primary } [Privacy Policy](https://www.yubico.com/support/terms-conditions/privacy-notice){ .md-button }

### NitroKey

!!! recommendation

    ![NitroKey](/assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }

    **NitroKey** has a security key capable of [FIDO2 WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) called the **Nitrokey FIDO2**. For PGP support, you need to purchase one of their other keys such as the **Nitrokey Start**, **Nitrokey Pro 2** or the **Nitrokey Storage 2**.

    The [comparison table](https://www.nitrokey.com/#comparison) shows the features and how the Nitrokeys compare. The Nitrokey 3 listed there will have a combined feature set.

    The Nitrokey has an open source firmware, unlike the YubiKey.

    [Visit nitrokey.com](https://www.nitrokey.com){ .md-button .md-button--primary } [Privacy Policy](https://www.nitrokey.com/data-privacy-policy){ .md-button }

## Authenticator Apps

==Generally speaking, TOTP software authenticator apps are going to be the best bet for most people.== They provide a significantly higher level of security than just SMS or Push Notifications, while remaining very convenient for most people who keep their phones with them at all times.

Authenticator Apps implement a security standard adopted by the Internet Engineering Task Force (IETF) called **Time-based One-time Passwords**, or **TOTP**. This is a method where websites share a secret with you which is used by your authenticator app to generate a six (usually) digit code based on the current time, which you enter while logging in for the website to check. Typically these codes are regenerated every 30 seconds, and once a new code is generated the old one becomes useless. Even if a hacker gets one six-digit code, there is no way for them to reverse that code to get the original secret, or otherwise be able to predict what any future codes might be.

### Aegis Authenticator

!!! recommendation

    ![Aegis logo](/assets/img/multi-factor-authentication/aegis.png){ align=right }

    **Aegis Authenticator** is a free, secure and open source app to manage your 2-step verification tokens for your online services.

    [Visit getaegis.app](https://getaegis.app){ .md-button .md-button--primary } [Privacy Policy](https://getaegis.app/aegis/privacy.html){ .md-button }

    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis)
    - [:fontawesome-brands-github: GitHub](https://github.com/beemdevelopment/Aegis)

### Raivo OTP

!!! recommendation

    ![Raivo OTP logo](/assets/img/multi-factor-authentication/raivo-otp.png){ align=right }

    **Raivo OTP** is a native, lightweight and secure time-based (TOTP) & counter-based (HOTP) password client for iOS. Raivo OTP offers optional iCloud backup & sync. Raivo OTP is also available for macOS in the form of a status bar application, however the Mac app does not work independently of the iOS app.

    [Visit github.com](https://github.com/raivo-otp/ios-application){ .md-button .md-button--primary } [Privacy Policy](https://github.com/raivo-otp/ios-application/blob/master/PRIVACY.md){ .md-button }

    **Downloads:**
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)
    - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/us/app/raivo-otp/id1498497896)
    - [:fontawesome-brands-github: GitHub](https://github.com/raivo-otp/ios-application)

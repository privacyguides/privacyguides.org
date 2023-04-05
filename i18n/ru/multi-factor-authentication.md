---
title: "Многофакторная аутентификация"
icon: 'material/two-factor-authentication'
description: These tools assist you with securing your internet accounts with Multi-Factor Authentication without sending your secrets to a third-party.
---

## Аппаратные ключи безопасности

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    Ключи **YubiKeys** являются одними из самых популярных ключей безопасности. Some YubiKey models have a wide range of features such as: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP and HOTP](https://developers.yubico.com/OATH) authentication.
    
    One of the benefits of the YubiKey is that one key can do almost everything (YubiKey 5), you could expect from a hardware security key. We do encourage you to take the [quiz](https://www.yubico.com/quiz/) before purchasing in order to make sure you make the right choice.
    
    [:octicons-home-16: Homepage](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

The [comparison table](https://www.yubico.com/store/compare/) shows the features and how the YubiKeys compare. We highly recommend that you select keys from the YubiKey 5 Series.

YubiKeys can be programmed using the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) or [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). For managing TOTP codes, you can use the [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). All of Yubico's clients are open-source.

For models which support HOTP and TOTP, there are 2 slots in the OTP interface which could be used for HOTP and 32 slots to store TOTP secrets. These secrets are stored encrypted on the key and never expose them to the devices they are plugged into. Once a seed (shared secret) is given to the Yubico Authenticator, it will only give out the six-digit codes, but never the seed. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

!!! warning
    The firmware of YubiKey is not open-source and is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

### Nitrokey

!!! recommendation

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** has a security key capable of [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) called the **Nitrokey FIDO2**. For PGP support, you need to purchase one of their other keys such as the **Nitrokey Start**, **Nitrokey Pro 2** or the **Nitrokey Storage 2**.
    
    [:octicons-home-16: Homepage](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentation}

The [comparison table](https://www.nitrokey.com/#comparison) shows the features and how the Nitrokey models compare. The **Nitrokey 3** listed will have a combined feature set.

Nitrokey models can be configured using the [Nitrokey app](https://www.nitrokey.com/download).

For the models which support HOTP and TOTP, there are 3 slots for HOTP and 15 for TOTP. Some Nitrokeys can act as a password manager. They can store 16 different credentials and encrypt them using the same password as the OpenPGP interface.

!!! note

    While Nitrokeys do not release the HOTP/TOTP secrets to the device they are plugged into, the HOTP and TOTP storage is **not** encrypted and is vulnerable to physical attacks. If you are looking to store HOTP or TOTP these secrets, we highly recommend that you use a Yubikey instead.

!!! note

    Resetting the OpenPGP interface on a Nitrokey will also make the password database [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

The Nitrokey Pro 2, Nitrokey Storage 2, and the upcoming Nitrokey 3 supports system integrity verification for laptops with the [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/) firmware.

Nitrokey's firmware is open-source, unlike the YubiKey. The firmware on modern NitroKey models (except the **NitroKey Pro 2**) is updatable.

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

#### Минимальные требования к сервисам

- Must use high quality, tamper resistant hardware security modules.
- Must support the latest FIDO2 specification.
- Must not allow private key extraction.
- Devices which cost over $35 must support handling OpenPGP and S/MIME.

#### В лучшем случае

Эти критерии представляют собой то, что мы хотели бы видеть от идеального проекта в этой категории. Наши рекомендации могут не соответствовать всем или нескольким из этих критериев, но проекты, которые им соответствуют, расположены выше остальных.

- Should be available in USB-C form-factor.
- Should be available with NFC.
- Should support TOTP secret storage.
- Should support secure firmware updates.

## Приложение-аутентификатор

Authenticator Apps implement a security standard adopted by the Internet Engineering Task Force (IETF) called **Time-based One-time Passwords**, or **TOTP**. This is a method where websites share a secret with you which is used by your authenticator app to generate a six (usually) digit code based on the current time, which you enter while logging in for the website to check. Typically these codes are regenerated every 30 seconds, and once a new code is generated the old one becomes useless. Even if a hacker gets one six-digit code, there is no way for them to reverse that code to get the original secret or otherwise be able to predict what any future codes might be.

We highly recommend that you use mobile TOTP apps instead of desktop alternatives as Android and iOS have better security and app isolation than most desktop operating systems.

### Aegis Authenticator (Android)

!!! recommendation

    ![Логотип Aegis](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** - это бесплатное и безопасное приложение с открытым исходным кодом для управления токенами двухфакторной аутентификации для ваших онлайн-сервисов.
    
    [Перейти на getaegis.app](https://getaegis.app){ .md-button .md-button--primary } [Политика конфиденциальности](https://getaegis.app/aegis/privacy.html){ .md-button } downloads
    
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis)
        - [:fontawesome-brands-github: GitHub](https://github.com/beemdevelopment/Aegis) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recommendation

    ![Логотип Raivo OTP](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** - это легкий и безопасный клиент TOTP & HOTP для iOS. Raivo OTP также может делать резервные копии в iCloud и синхронизировать эти данные. Raivo OTP также доступен для macOS в виде приложения в строке состояния, однако приложение для Mac не работает отдельно от приложения для iOS.
    
    [Перейти на github.com](https://github.com/raivo-otp/ios-application){ .md-button .md-button--primary } [Политика конфиденциальности](https://github.com/raivo-otp/ios-application/blob/master/PRIVACY.md){ .md-button }
     downloads
    
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)
        - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/us/app/raivo-otp/id1498497896)
        - [:fontawesome-brands-github: GitHub](https://github.com/raivo-otp/ios-application) downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Must be open-source software.
- Must not require internet connectivity.
- Must not sync to a third-party cloud sync/backup service.
    - **Optional** E2EE sync support with OS-native tools is acceptable, e.g. encrypted sync via iCloud.

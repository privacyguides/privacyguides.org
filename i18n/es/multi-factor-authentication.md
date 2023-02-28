---
title: "Autenticación de múltiples factores"
icon: 'material/two-factor-authentication'
---

## Llaves de Seguridad

### YubiKey

!!! recomendación

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    Las **YubiKeys** están entre las llaves de seguridad más populares. Algunos modelos de YubiKey tienen un gran rango de caracteristicas como: [2ndo Factor Universal (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 WebAuthn](https://es.wikipedia.org/wiki/WebAuthn), [Yubico OTP](https://developers.yubico.com/OTP/), [PIV](https://en.wikipedia.org/wiki/FIPS_201), [OpenPGP](https://developers.yubico.com/PGP/) y autenticación [TOTP and HOTP](https://developers.yubico.com/OATH/).
    
    Una de las ventajas de la YubiKey es que una llave puede hacer casi todo (YubiKey 5), se podría esperar de una llave de seguridad. We do encourage you to take the [quiz](https://www.yubico.com/quiz/) before purchasing in order to make sure you make the right choice.
    
    [:octicons-home-16: Homepage](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

La [tabla de comparación](https://www.yubico.com/store/compare/) muestra las características y cómo se comparan las YubiKeys. Le recomendamos que seleccione las llaves de las Series YubiKey 5.

YubiKeys can be programmed using the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) or [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). For managing TOTP codes, you can use the [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). All of Yubico's clients are open-source.

For models which support HOTP and TOTP, there are 2 slots in the OTP interface which could be used for HOTP and 32 slots to store TOTP secrets. These secrets are stored encrypted on the key and never expose them to the devices they are plugged into. Once a seed (shared secret) is given to the Yubico Authenticator, it will only give out the six-digit codes, but never the seed. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

!!! !!! warning
    The firmware of YubiKey is not open-source and is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

### Nitrokey / Librem Key

!!! recomendación

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** has a security key capable of [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) called the **Nitrokey FIDO2**. For PGP support, you need to purchase one of their other keys such as the **Nitrokey Start**, **Nitrokey Pro 2** or the **Nitrokey Storage 2**.
    
    [:octicons-home-16: Homepage](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentation}

The [comparison table](https://www.nitrokey.com/#comparison) shows the features and how the Nitrokey models compare. The **Nitrokey 3** listed will have a combined feature set.

Nitrokey models can be configured using the [Nitrokey app](https://www.nitrokey.com/download).

For the models which support HOTP and TOTP, there are 3 slots for HOTP and 15 for TOTP. Some Nitrokeys can act as a password manager. They can store 16 different credentials and encrypt them using the same password as the OpenPGP interface.

!!! warning

    While Nitrokeys do not release the HOTP/TOTP secrets to the device they are plugged into, the HOTP and TOTP storage is **not** encrypted and is vulnerable to physical attacks. If you are looking to store HOTP or TOTP these secrets, we highly recommend that you use a Yubikey instead.

!!! warning

    Resetting the OpenPGP interface on a Nitrokey will also make the password database [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

 The Nitrokey Pro 2, Nitrokey Storage 2, and the upcoming Nitrokey 3 supports system integrity verification for laptops with the [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/) firmware. Purism's [Librem Key](https://puri.sm/products/librem-key/) is a rebranded NitroKey Pro 2 with similar firmware and can also be used for the same purposes.

Nitrokey's firmware is open-source, unlike the YubiKey. The firmware on modern NitroKey models (except the **NitroKey Pro 2**) is updatable.

!!! tip

    The Nitrokey app, while compatible with Librem Keys, requires `libnitrokey` version 3.6 or above to recognize them. Currently, the package is outdated on Windows, macOS, and most Linux distributions' repository, so you will likely have to compile the Nitrokey app yourself to get it working with the Librem Key. On Linux, you can obtain an up-to-date version from [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

#### Minimum Requirements

- Must use high quality, tamper resistant hardware security modules.
- Must support the latest FIDO2 specification.
- Must not allow private key extraction.
- Devices which cost over $35 must support handling OpenPGP and S/MIME.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be available in USB-C form-factor.
- Should be available with NFC.
- Should support TOTP secret storage.
- Should support secure firmware updates.

## Aplicaciones de Autenticación

Authenticator Apps implement a security standard adopted by the Internet Engineering Task Force (IETF) called **Time-based One-time Passwords**, or **TOTP**. This is a method where websites share a secret with you which is used by your authenticator app to generate a six (usually) digit code based on the current time, which you enter while logging in for the website to check. Typically these codes are regenerated every 30 seconds, and once a new code is generated the old one becomes useless. Even if a hacker gets one six-digit code, there is no way for them to reverse that code to get the original secret or otherwise be able to predict what any future codes might be.

We highly recommend that you use mobile TOTP apps instead of desktop alternatives as Android and iOS have better security and app isolation than most desktop operating systems.

### Aegis Authenticator (Android)

!!! recomendación

    ![Aegis logo](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** is a free, secure and open-source app to manage your 2-step verification tokens for your online services.
    
    [:octicons-home-16: Homepage](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recomendación

    ![Raivo OTP logo](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** is a native, lightweight and secure time-based (TOTP) & counter-based (HOTP) password client for iOS. Raivo OTP offers optional iCloud backup & sync. Raivo OTP is also available for macOS in the form of a status bar application, however the Mac app does not work independently of the iOS app.
    
    [:octicons-home-16: Homepage](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137) downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Must be open-source software.
- Must not require internet connectivity.
- Must not sync to a third-party cloud sync/backup service.
    - **Optional** E2EE sync support with OS-native tools is acceptable, e.g. encrypted sync via iCloud.

--8<-- "includes/abbreviations.es.txt"

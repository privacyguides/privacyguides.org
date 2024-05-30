---
title: "Security Keys"
icon: 'material/key-chain'
description: These tools assist you with securing your internet accounts with Multi-Factor Authentication without sending your secrets to a third-party.
cover: multi-factor-authentication.webp
---
A physical **security key** adds a very strong layer of protection to your online accounts. Compared to [authenticator apps](multi-factor-authentication.md), the FIDO2 security key protocol is immune to phishing, and cannot be compromised without physical possession of the key itself. Many services support FIDO2/WebAuthn as a multi-factor authentication option for securing your account, and some services allow you to use a security key as a strong single-factor authenticator with passwordless authentication.

## Yubico Security Key

<div class="admonition recommendation" markdown>

<figure markdown="span">
  ![Security Key Series by Yubico](assets/img/security-keys/yubico-security-key.webp){ width="315" }
</figure>

The **Yubico Security Key** series is the most cost-effective hardware security key with FIDO Level 2 certification. It supports FIDO2/WebAuthn and FIDO U2F, and works out of the box with most services that support a security key as a second factor, as well as many password managers.

[:octicons-home-16: Homepage](https://www.yubico.com/products/security-key/){ .md-button .md-button--primary }
[:octicons-eye-16:](https://yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.yubico.com){ .card-link title=Documentation}

</details>

</div>

These keys are available in both USB-C and USB-A variants, and both options support NFC for use with a mobile device as well.

This key provides only basic FIDO2 functionality, but for most people that is all you will need. Some notable features the Security Key series does **not** have include:

- [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)
- CCID Smart Card support (PIV-compatibile)
- OpenPGP

If you need any of those features, you should consider their higher-end [YubiKey](#yubikey) of products instead.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

The firmware of Yubico's Security Keys is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

</div>

## YubiKey

<div class="admonition recommendation" markdown>

<figure markdown="span">
  ![YubiKeys](assets/img/security-keys/yubikey.png){ width="400" }
</figure>

The **YubiKey** series from Yubico are among the most popular security keys. The YubiKey 5 Series has a wide range of features such as: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP), [TOTP and HOTP](https://developers.yubico.com/OATH) authentication.

[:octicons-home-16: Homepage](https://www.yubico.com/products/yubikey-5-overview/){ .md-button .md-button--primary }
[:octicons-eye-16:](https://yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.yubico.com){ .card-link title=Documentation}

</details>

</div>

The [comparison table](https://yubico.com/store/compare) shows the features and how the YubiKeys compare to each other and to Yubico's [Security Key](#yubico-security-key) series. One of the benefits of the YubiKey series is that one key can do almost everything you could expect from a hardware security key. We encourage you to take their [quiz](https://yubico.com/quiz) before purchasing in order to make sure you make the right choice.

The Yubikey 5 series has FIDO Level 1 certification, which is the most common. However, some governments or other organizations may require a key with Level 2 certification, in which case you'll have to purchase a [Yubikey 5 **FIPS** series](https://www.yubico.com/products/yubikey-fips/) key, or a [Yubico Security Key](#yubico-security-key). Most people do not have to worry about this distinction.

YubiKeys can be programmed using the [YubiKey Manager](https://yubico.com/support/download/yubikey-manager) or [YubiKey Personalization Tools](https://yubico.com/support/download/yubikey-personalization-tools). For managing TOTP codes, you can use the [Yubico Authenticator](https://yubico.com/products/yubico-authenticator). All of Yubico's clients are open source.

For models which support HOTP and TOTP, there are 2 slots in the OTP interface which could be used for HOTP and 32 slots to store TOTP secrets. These secrets are stored encrypted on the key and never expose them to the devices they are plugged into. Once a seed (shared secret) is given to the Yubico Authenticator, it will only give out the six-digit codes, but never the seed. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

The firmware of YubiKey is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

</div>

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must be a [FIDO Certified](https://fidoalliance.org/certification/fido-certified-products/) product
- Must use high quality, tamper resistant hardware security modules.
- Must support the latest FIDO2 specification.
- Must not allow private key extraction.
- Devices which cost over $35 must support handling OpenPGP and S/MIME.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be available in USB-C form-factor.
- Should be available with NFC.
- Should support TOTP secret storage.
- Should support secure firmware updates.

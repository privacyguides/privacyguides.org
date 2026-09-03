---
title: Security Keys
icon: material/key-chain
description: These security keys provide a form of phishing-immune authentication for accounts that support it.
cover: multi-factor-authentication.webp
---
<small>Protects against the following threat(s):</small>

- [:material-target-account: Targeted Attacks](basics/common-threats.md#attacks-against-specific-individuals){ .pg-red }
- [:material-bug-outline: Passive Attacks](basics/common-threats.md#security-and-privacy){ .pg-orange }

A physical **security key** adds a very strong layer of protection to your online accounts. Compared to [authenticator apps](multi-factor-authentication.md), the [FIDO2](basics/multi-factor-authentication.md#fido-fast-identity-online) security key protocol is immune to phishing, and cannot be compromised without physical possession of the key itself. Many services support FIDO2/WebAuthn as a multifactor authentication option for securing your account, and some services allow you to use a security key as a strong single-factor authenticator with passwordless authentication.

| Product | Price | Connector | Authentication | Android | iOS | Firmware Updates | Backup/Sync | Apps | FIDO Certification
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:
| [**Yubico Security Key**](#yubico-security-key) | $29 USD | NFC + USB-C, USB-A Options | Push Button Only, PIN Optional | NFC, USB | NFC, USB | No[^2] | No | FIDO2 | Level 2
| **YubiKey Bio - FIDO Edition** | $98 USD | USB-C, USB-A Options | Biometric, PIN Fallback | USB Only | USB Only | No[^2] | No | FIDO2 | Level 2
| **[YubiKey 5](#yubikey) NFC** | $58 USD | NFC + USB-C, USB-A Options | Push Button Only, PIN Optional | NFC, USB | NFC, USB | No[^2] | No | FIDO2, OpenPGP, PIV | Level 2
| **YubiKey 5 Nano** | $68 USD | USB-C, USB-A Options | Push Button Only, PIN Optional | USB Only | USB Only | No[^2] | No | FIDO2, OpenPGP, PIV | Level 2
| **[Ledger](#ledger) Nano S Plus** | $59 USD | USB-C Cable | 4-8 Digit PIN | USB Only | **No** | Yes | Both | FIDO2, OpenPGP, [Cryptocurrency](hardware-wallets.md) | Level 1
| **Ledger Nano Gen5, Flex, Stax** | $179 - $399 USD | NFC + USB-C Cable | 4-8 Digit PIN | NFC, USB | NFC Only | Yes | Both | FIDO2, OpenPGP, [Cryptocurrency](hardware-wallets.md) | Level 1
| [**Google Titan Key**](#google-titan-security-key) | $30 - $35 USD | NFC + USB-C, USB-A Options | Push Button Only, PIN Optional | NFC, USB | NFC, USB | No | No | FIDO2 | Level 1

## Yubico Security Key

<div class="admonition recommendation" markdown>

<figure markdown="span">
  ![Security Key Series by Yubico](assets/img/security-keys/yubico-security-key.webp){ width="315" }
</figure>

The **Yubico Security Key** series is the most cost-effective hardware security key with FIDO Level 2 certification[^1]. It supports FIDO2/WebAuthn and FIDO Universal 2nd Factor (U2F), and works out of the box with most services that support a security key as a second factor, as well as many password managers.

[:octicons-home-16: Homepage](https://yubico.com/products/security-key){ .md-button .md-button--primary }
[:octicons-eye-16:](https://yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.yubico.com){ .card-link title="Documentation" }

</details>

</div>

Note that despite the name, the [YubiKey **Bio**](https://www.yubico.com/product/yubikey-bio-series/yubikey-c-bio/) series has a limited feature-set nearly identical to the Yubico Security Key series, rather than the full-fledged [YubiKey](#yubikey) series detailed in the next section. It is another option you could consider if you value biometric authentication.

Yubico's basic security keys provide only FIDO2 functionality, but for most people that is all you will need. Some notable features the Security Key series does **not** have include:

- [Yubico Authenticator](https://yubico.com/products/yubico-authenticator)
- CCID Smart Card support (PIV-compatible)
- OpenPGP

## YubiKey 5

<div class="admonition recommendation" markdown>

<figure markdown="span">
  ![YubiKeys](assets/img/security-keys/yubikey.png){ width="400" }
</figure>

The **YubiKey** series from Yubico are among the most popular security keys with FIDO Level 2 Certification[^1]. The **YubiKey 5 Series** has a wide range of features such as FIDO2/WebAuthn and FIDO U2F, [TOTP and HOTP](https://developers.yubico.com/OATH) authentication, [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), and [OpenPGP](https://developers.yubico.com/PGP).

[:octicons-home-16: Homepage](https://yubico.com/products/yubikey-5-overview){ .md-button .md-button--primary }
[:octicons-eye-16:](https://yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.yubico.com){ .card-link title="Documentation" }

</details>

</div>

This detailed [comparison table](https://yubico.com/store/compare) has more details about how the YubiKeys compare to each other and to Yubico's [Security Key](#yubico-security-key) series in terms of features and other specifications. One of the benefits of the YubiKey series is that one key can do almost everything you could expect from a hardware security key. We encourage you to take their [quiz](https://yubico.com/quiz) before purchasing in order to make sure you choose the right security key.

YubiKeys can be programmed using the [YubiKey Manager](https://yubico.com/support/download/yubikey-manager) or [YubiKey Personalization Tools](https://yubico.com/support/download/yubikey-personalization-tools). For managing TOTP codes, you can use the [Yubico Authenticator](https://yubico.com/products/yubico-authenticator). All of Yubico's clients are open source.

For models which [support HOTP and TOTP](https://support.yubico.com/hc/articles/360013790319-How-many-accounts-can-I-register-my-YubiKey-with), the secrets are stored encrypted on the key and never exposed to the devices they are plugged into. Once a seed (shared secret) is given to the Yubico Authenticator, it will only give out the six-digit codes, but never the seed. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

The firmware of YubiKey is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

</div>

## Ledger

<div class="admonition recommendation" markdown>

**Ledger** makes a number of [cryptocurrency hardware wallet](hardware-wallets.md) products and an optional, FIDO certified [Security Key](https://support.ledger.com/article/12350325732893-zd) app for those wallets which enables FIDO2 security key functionality. If you need a cryptocurrency wallet anyway, this could be an option to consider for security key functionality as well.

</div>

Even if you don't need a cryptocurrency wallet, using Ledger devices as security keys has three key advantages over YubiKey you may wish to consider:

1. **Secure PIN authentication.**

    A 4-8 digit PIN is always required to operate Ledger devices. Additionally, that PIN is entered via the display on the device itself. YubiKey PIN authentication, in contrast, is a software prompt where you enter your PIN on the computer/phone you're using.

2. **Firmware updates.**

    Both the operating system firmware and the Security Key app software can be updated via the Ledger Wallet app if new security improvements are released.

3. **Backups and sync.**

    When setting up your Ledger device you will create a 24-word "seed phrase." Your security key credentials are tied to this seed phrase, meaning that if you lose/break your Ledger device, you can use the same 24-word phrase to set up a new Ledger device, and it will work with your existing accounts.

    You can also use the same 24-word phrase to set up multiple Ledger devices simultaneously, and all of them will work with your accounts in a "synced" fashion, instead of needing to register each security key individually.

Some may consider the last two features to be downsides. Firmware updates can add additional attack surface and introduce new bugs at a later time. However, it is worth noting that many non-updatable security keys from various vendors have been recalled due to discovered security flaws which could not be patched. Backups can also be dangerous if your seed phrase is not properly secured, because it could be used by an attacker to create a duplicate security key if it is leaked.

Note that while all of Ledger's current products technically meet our criteria *for security keys*, the Ledger Nano X does **not** meet our separate [criteria for hardware wallets](hardware-wallets.md#criteria) because it uses an older secure element not certified to the same level as their other products. The Ledger Nano X has no advantages over any of their other devices for security key purposes, so we would not recommend purchasing one.

## Google Titan Security Key

<div class="admonition recommendation" markdown>

Google Titan Security Keys are Yubico-manufactured FIDO2 USB/NFC keys very similar to the [Yubico Security Key](#yubico-security-key) lineup. However, Titan security keys use a different secure element than Yubico's, and they run firmware created by Google. There are generally no functional differences between the two options.

</div>

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must use high-quality, tamper-resistant hardware security modules.
- Must be [certified](https://fidoalliance.org/certification/fido-certified-products/) by FIDO Alliance for the FIDO2 specification.
- Must have USB-C and NFC connectivity options in product line.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should support TOTP secret storage.
- Should support secure firmware updates.

[^1]: Some governments or other organizations may require a key with Level 2 certification, but most people do not have to worry about this distinction.
[^2]: The firmware of Yubico's Security Keys is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

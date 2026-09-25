---
title: Hardware Wallets
icon: material/cash-lock
description: Cryptocurrency hardware wallets secure your private keys against adversaries.
cover: hardware-wallets.webp
---
<small>Protects against the following threat(s):</small>

- [:material-target-account: Targeted Attacks](basics/common-threats.md#attacks-against-specific-individuals){ .pg-red }
- [:material-bug-outline: Passive Attacks](basics/common-threats.md#security-and-privacy){ .pg-orange }

A cryptocurrency **hardware wallet** is a dedicated physical device that stores the private keys used to access and authorize transactions from your cryptocurrency accounts. Unlike a software wallet on a phone or computer, it keeps those keys isolated from internet-connected devices, reducing the risk that malware, phishing, or a compromised operating system can steal them.

## Recommendations

Our top recommendations are full-featured products from the companies we list here, and support all major operating systems (notably including iOS).

### Ledger Nano Gen 5

<div class="admonition recommendation" markdown>

The **Ledger Nano Gen 5** hardware wallet places the private keys, wallet operating system, and cryptocurrency applications inside a certified secure element. Unlike Trezor's devices, it is also a recommended [security key](security-keys.md#ledger) product.

</div>

Ledger runs its *entire* operating system and stores your private keys inside its CC EAL6+ certified secure element. This is a simpler configuration than [Trezor](#trezor-safe-7)'s multi-chip design (described in the next section), but that doesn't necessarily translate to greater or lesser security. In theory, it may provide a smaller attack surface and offer more resistance to offline attacks or some very sophisticated attacks against a running device, but that comes at the cost of Trezor's greater transparency.

Wallet apps installed on Ledger devices are [open-source](https://support.ledger.com/article/11132311094813-zd), as is the companion Ledger Wallet software you install on your computer. However, the Ledger OS/firmware and the secure element implementation are proprietary.

The **Ledger Flex** and **Ledger Stax** are near-identical devices you could also consider. There are no security or software functionality differences between all three of these devices. The Flex and Stax devices have increasingly larger, higher resolution displays; more premium materials; and the Stax has wireless Qi charging.

### Trezor Safe 7

<div class="admonition recommendation" markdown>

The **Trezor Safe 7** is a modern touchscreen hardware wallet notable for using a dual secure element approach to security. It connects via USB-C or with Bluetooth.

</div>

The Safe 7 uses an industry-standard CC EAL6 secure element alongside an open architecture [TROPIC01](https://tropicsquare.com/tropic01) secure element to provide security. It also uses a general-purpose microcontroller unit (MCU), which is not a secure element but allows for better inspectability for developers and researchers.

In this setup, your seed is not stored in either secure element, it is stored *encrypted* in the general-purpose MCU. However, decrypting it requires key material stored by both secure elements. Trezor claims an attacker would need to compromise all three layers to recover the encrypted hardware data. Thus, Trezor's approach balances open-source and transparency in their MCU firmware and the less proven but more open TROPIC01 chip, alongside the more proven CC EAL6+ secure element from a commercial provider.

Trezor devices are not [recommended FIDO2 security keys](security-keys.md), although they do have security key functionality, because Trezor has not sought out certification from the FIDO Alliance to validate their security key software is implemented properly. Some websites/apps will require a key to have some level of FIDO certification, so you may experience compatibility issues using this device for that purpose.

## Budget Picks

Our budget recommendations are generally just as secure as our top recommendations, but neither support iOS. They also have more limited, button-based interfaces instead of touchscreens, making them well-suited for long-term storage, but more inconvenient for frequent use.

### Trezor Safe 3

<div class="admonition recommendation" markdown>

The **Trezor Safe 3** is a simple and inexpensive USB-C only hardware wallet. Like the [Safe 7](#trezor-safe-7), it has open-source firmware and supporting software so that it can be independently inspected.

</div>

The **Trezor Safe 5** is a near-identical device you could also consider. There are no security or software functionality differences between the Safe 3 and Safe 5. However, the Safe 5 has a larger touchscreen for easier navigation, instead of the Safe 3's smaller display and two-button navigation.

The Safe 3/5 devices do **not** use the same dual secure enclave configuration as the Safe 7. Instead, they omit the TROPIC01 to run a single EAL CC6+ secure element, which stores material to unlock the private keys that are stored encrypted on the separate general-purpose MCU.

### Ledger Nano S Plus

<div class="admonition recommendation" markdown>

The **Ledger Nano S Plus** is a small hardware wallet with a two-button interface, recommended by Ledger as a "backup signer" rather than a regular-use device. Compared to the [Nano Gen 5](#ledger-nano-gen-5) it only has USB connectivity, and it has no internal battery, which may provide an improvement in longevity.

</div>

The Nano S Plus lacks NFC connectivity, making it less suitable for [security key](security-keys.md#ledger) functionality on mobile devices, and making it incompatible with Ledger's Recovery Key backup solution. All four Ledger devices we recommend have essentially the same security properties, they only differ in interfaces.

Note we do **not** recommend the similar Ledger Nano X still in production. The Nano X uses an older secure element which is only CC EAL5 certified, while our minimum criteria requires EAL6. There are limited uses for the Nano X compared to all other devices Ledger offers, so it generally does not make sense as a new purchase.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must use a secure element which meets Common Criteria EAL6 or higher.
- Must support a [recommended cryptocurrency](cryptocurrency.md).

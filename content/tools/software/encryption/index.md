---
title: "Encryption Software"
description: Encryption of data is the only way to control who can access it. These tools allow you to encrypt your emails and any other files.
aliases:
- /encryption
- /en/encryption
---
**Encryption** is the only secure way to control who can access your data. If you are currently not using encryption software for your hard disk, emails, or files, you should pick an option here.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#cryptomator-cloud" title="Cryptomator" image="./cryptomator.svg" subtitle="Cryptomator is an encryption solution designed for privately saving files to any cloud Service Provider, eliminating the need to trust that they won't access your files. It allows you to create vaults that are stored on a virtual drive, the contents of which are encrypted and synced with your cloud storage provider." >}}
  {{< card link="#veracrypt-disk" title="VeraCrypt" image="./veracrypt.svg" subtitle="VeraCrypt is a source-available freeware utility used for on-the-fly encryption. It can create a virtual encrypted disk within a file, encrypt a partition, or encrypt the entire storage device with pre-boot authentication." >}}
  {{< card link="#bitlocker" title="BitLocker" image="./bitlocker.png" subtitle="BitLocker is the full volume encryption solution bundled with Microsoft Windows that uses the Trusted Platform Module (TPM) for hardware-based security." >}}
  {{< card link="#filevault" title="FileVault" image="./filevault.png" subtitle="FileVault is the on-the-fly volume encryption solution built into macOS. FileVault takes advantage of the hardware security capabilities present on an Apple Silicon SoC or T2 Security Chip." >}}
  {{< card link="#linux-unified-key-setup" title="LUKS" image="./luks.png" subtitle="LUKS is the default FDE method for Linux. It can be used to encrypt full volumes, partitions, or create encrypted containers." >}}
  {{< card link="#kryptor" title="Kryptor" image="./kryptor.png" subtitle="Kryptor is a free and open-source file encryption and signing tool that makes use of modern and secure cryptographic algorithms. It aims to be a better version of age and Minisign to provide a simple, easier alternative to GPG." >}}
  {{< card link="#tomb" title="Tomb" image="./tomb.png" subtitle="Tomb is a command-line shell wrapper for LUKS. It supports steganography via third-party tools." >}}
  {{< card link="#gnu-privacy-guard" title="GnuPG" image="./gnupg.svg" subtitle="GnuPG is a GPL-licensed alternative to the PGP suite of cryptographic software. GnuPG is compliant with RFC 4880, which is the current IETF specification of OpenPGP." >}}
  {{< card link="#gpg4win" title="GPG4win" image="./gpg4win.svg" subtitle="GPG4win is a package for Windows from Intevation and g10 Code. It includes various tools that can assist you in using GPG on Microsoft Windows." >}}
  {{< card link="#gpg-suite" title="GPG Suite" image="./gpgsuite.png" subtitle="GPG Suite provides OpenPGP support for Apple Mail and other email clients on macOS." >}}
  {{< card link="#openkeychain" title="OpenKeychain" image="./openkeychain.svg" subtitle="OpenKeychain is an implementation of GnuPG for Android. It's commonly required by mail clients such as Thunderbird, FairEmail, and other Android apps to provide encryption support." >}}
{{< /cards >}}
</div>

## Multi-platform

The options listed here are available on multiple platforms and great for creating encrypted backups of your data.

### Cryptomator (Cloud)

<small>Protects against the following threat(s):</small>
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)

{{< title-card logo="./cryptomator.svg" >}}

**Cryptomator** is an encryption solution designed for privately saving files to any cloud [Service Provider](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers){ .pg-teal }, eliminating the need to trust that they won't access your files. It allows you to create vaults that are stored on a virtual drive, the contents of which are encrypted and synced with your cloud storage provider.

{{< cards >}}
  {{< card link="https://cryptomator.org" title="Homepage" icon="home" >}}
  {{< card link="https://cryptomator.org/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://cryptomator.org/downloads)
[{{< badge content="macOS" color="indigo" >}}](https://cryptomator.org/downloads)
[{{< badge content="Windows" color="red" >}}](https://cryptomator.org/downloads)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=org.cryptomator)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1560822163)
[{{< badge content="Android" >}}](https://cryptomator.org/android)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

Cryptomator uses AES-256 encryption to encrypt both files and filenames. Cryptomator cannot encrypt metadata such as access, modification, and creation timestamps, nor the number and size of files and folders.

Cryptomator is free to use on all desktop platforms, as well as on iOS in "read only" mode. Cryptomator offers [paid](https://cryptomator.org/pricing) apps with full functionality on iOS and Android. The Android version can be purchased anonymously via [ProxyStore](https://cryptomator.org/coop/proxystore).

Some Cryptomator cryptographic libraries have been [audited](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) by Cure53. The scope of the audited libraries includes: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) and [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). The audit did not extend to [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), which is a library used by Cryptomator for iOS.

Cryptomator's documentation details its intended [security target](https://docs.cryptomator.org/en/latest/security/security-target), [security architecture](https://docs.cryptomator.org/en/latest/security/architecture), and [best practices](https://docs.cryptomator.org/en/latest/security/best-practices) for use in further detail.

### VeraCrypt (Disk)

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

{{< title-card logo="./veracrypt.svg" >}}

**VeraCrypt** is a source-available freeware utility used for on-the-fly encryption. It can create a virtual encrypted disk within a file, encrypt a partition, or encrypt the entire storage device with pre-boot authentication.

{{< cards >}}
  {{< card link="https://veracrypt.fr" title="Homepage" icon="home" >}}
  {{< card link="https://veracrypt.fr/en/Documentation.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://veracrypt.fr/en/Downloads.html)
[{{< badge content="macOS" color="indigo" >}}](https://veracrypt.fr/en/Downloads.html)
[{{< badge content="Windows" color="red" >}}](https://veracrypt.fr/en/Downloads.html)

VeraCrypt is a fork of the discontinued TrueCrypt project. According to its developers, security improvements have been implemented and issues raised by the initial TrueCrypt code audit have been addressed.

When encrypting with VeraCrypt, you have the option to select from different [hash functions](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). We suggest you **only** select [SHA-512](https://en.wikipedia.org/wiki/SHA-512) and stick to the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) block cipher.

TrueCrypt has been [audited a number of times](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits), and VeraCrypt has also been [audited separately](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## Operating System Encryption

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

Built-in OS encryption solutions generally leverage hardware security features such as a [secure cryptoprocessor](../../../wiki/basics/hardware/index.md#tpmsecure-cryptoprocessor). Therefore, we recommend using the built-in encryption solutions for your operating system. For cross-platform encryption, we still recommend [cross-platform tools](#multi-platform) for additional flexibility and to avoid vendor lock-in.

<details class="warning" markdown>

<summary>Shut devices down when not in use.</summary>

Powering off your devices when they’re not in use provides the highest level of security, as it minimizes the attack surface of your FDE method by ensuring no encryption keys remain in memory.

</details>

### BitLocker

{{< title-card logo="./bitlocker.png" >}}

**BitLocker** is the full volume encryption solution bundled with Microsoft Windows that uses the Trusted Platform Module ([TPM](https://learn.microsoft.com/windows/security/information-protection/tpm/how-windows-uses-the-tpm)) for hardware-based security.

{{< cards >}}
  {{< card link="https://support.microsoft.com/en-us/windows/bitlocker-overview-44c0c61c-989d-4a69-8822-b95cd49b1bbf" title="Overview" icon="home" >}}
  {{< card link="https://learn.microsoft.com/windows/security/information-protection/BitLocker/BitLocker-overview" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

BitLocker is [officially supported](https://support.microsoft.com/en-us/windows/bitlocker-overview-44c0c61c-989d-4a69-8822-b95cd49b1bbf) on the Pro, Enterprise, and Education editions of Windows. The Home edition only supports automatic [Device Encryption](https://support.microsoft.com/en-us/windows/device-encryption-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df) and must meet specific hardware requirements. If you’re using the Home edition, we recommend [upgrading to Pro](https://support.microsoft.com/en-us/windows/upgrade-windows-home-to-windows-pro-ef34d520-e73f-3198-c525-d1a218cc2818), which can be done without reinstalling Windows or losing your files.

Pro and higher editions also support the more secure pre-boot [TPM+PIN](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/faq#what-is-the-difference-between-a-tpm-owner-password--recovery-password--recovery-key--pin--enhanced-pin--and-startup-key) feature, configured through the appropriate [group policy](../../../wiki/os/windows/group-policies/index.md#bitlocker-drive-encryption) settings. The PIN is rate limited and the TPM will panic and lock access to the encryption key either permanently or for a period of time if someone attempts to brute force access.

### FileVault

{{< title-card logo="./filevault.png" >}}

**FileVault** is the on-the-fly volume encryption solution built into macOS. FileVault takes advantage of the [hardware security capabilities](../../../wiki/os/macos/index.md#hardware-security) present on an Apple Silicon SoC or T2 Security Chip.

{{< cards >}}
  {{< card link="https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac" title="Documentation" icon="document-text" >}}
  {{< card link="https://support.apple.com/guide/security/welcome/web" title="Platform Security" icon="home" >}}
{{< /cards >}}

{{< /title-card >}}

We advise against using your iCloud account for recovery; instead, you should securely store a local recovery key on a separate storage device.

### Linux Unified Key Setup

{{< title-card logo="./luks.png" >}}

**LUKS** is the default FDE method for Linux. It can be used to encrypt full volumes, partitions, or create encrypted containers.

{{< cards >}}
  {{< card link="https://gitlab.com/cryptsetup/cryptsetup" title="Repository" icon="code" >}}
  {{< card link="https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

<details class="example" markdown>
<summary>Creating and opening encrypted containers</summary>

```bash
dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
sudo cryptsetup luksFormat /path-to-file
```

#### Opening encrypted containers

We recommend opening containers and volumes with `udisksctl` as this uses [Polkit](https://en.wikipedia.org/wiki/Polkit). Most file managers, such as those included with popular desktop environments, can unlock encrypted files. Tools like [udiskie](https://github.com/coldfix/udiskie) can run in the system tray and provide a helpful user interface.

```bash
udisksctl loop-setup -f /path-to-file
udisksctl unlock -b /dev/loop0
```

</details>

> [!IMPORTANT]
> We recommend you always [back up your LUKS headers](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) in case of partial drive failure. This can be done with:
>
>```bash
>cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
>```

## Command-line

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

Tools with command-line interfaces are useful for integrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

{{< title-card logo="./kryptor.png" >}}

**Kryptor** is a free and open-source file encryption and signing tool that makes use of modern and secure cryptographic algorithms. It aims to be a better version of [age](https://github.com/FiloSottile/age) and [Minisign](https://jedisct1.github.io/minisign) to provide a simple, easier alternative to GPG.

{{< cards >}}
  {{< card link="https://kryptor.co.uk" title="Homepage" icon="home" >}}
  {{< card link="https://kryptor.co.uk/features#privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://kryptor.co.uk)
[{{< badge content="macOS" color="indigo" >}}](https://kryptor.co.uk)
[{{< badge content="Windows" color="red" >}}](https://kryptor.co.uk)

### Tomb

{{< title-card logo="./tomb.png" >}}

**Tomb** is a command-line shell wrapper for LUKS. It supports steganography via [third-party tools](https://dyne.org/software/tomb/#advanced-usage).

{{< cards >}}
  {{< card link="https://dyne.org/software/tomb" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/dyne/Tomb/wiki" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

## OpenPGP

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

OpenPGP is sometimes needed for specific tasks such as digitally signing and encrypting email. PGP has many features and is [complex](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) as it has been around a long time. For tasks such as signing or encrypting files, we suggest the above options.

When encrypting with PGP, you have the option to configure different options in your `gpg.conf` file. We recommend staying with the standard options specified in the [GnuPG user FAQ](https://gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

> [!TIP]
> When [generating keys](https://gnupg.org/gph/en/manual/c14.html) we suggest using the `future-default` command as this will instruct GnuPG use modern cryptography such as [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) and [Ed25519](https://ed25519.cr.yp.to):
>
>```bash
>gpg --quick-gen-key alice@example.com future-default
>```

### GNU Privacy Guard

{{< title-card logo="./gnupg.svg" >}}

**GnuPG** is a GPL-licensed alternative to the PGP suite of cryptographic software. GnuPG is compliant with [RFC 4880](https://tools.ietf.org/html/rfc4880), which is the current IETF specification of OpenPGP. The GnuPG project has been working on an [updated draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh) in an attempt to modernize OpenPGP. GnuPG is a part of the Free Software Foundation's GNU software project and has received major [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) from the German government.

{{< cards >}}
  {{< card link="https://gnupg.org" title="Homepage" icon="home" >}}
  {{< card link="https://gnupg.org/privacy-policy.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://gnupg.org/download/index.html#binary)
[{{< badge content="macOS" color="indigo" >}}](https://gpgtools.org)
[{{< badge content="Windows" color="red" >}}](https://gpg4win.org/download.html)

### GPG4win

{{< title-card logo="./gpg4win.svg" >}}

**GPG4win** is a package for Windows from [Intevation and g10 Code](https://gpg4win.org/impressum.html). It includes [various tools](https://gpg4win.org/about.html) that can assist you in using GPG on Microsoft Windows. The project was initiated and originally [funded by](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) Germany's Federal Office for Information Security (BSI) in 2005.

{{< cards >}}
  {{< card link="https://gpg4win.org" title="Homepage" icon="home" >}}
  {{< card link="https://gpg4win.org/privacy-policy.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Windows" color="red" >}}](https://gpg4win.org/download.html)

### GPG Suite

{{< title-card logo="./gpgsuite.png" >}}

**GPG Suite** provides OpenPGP support for [Apple Mail](../email-clients/index.md#apple-mail-macos) and other email clients on macOS.

We recommend taking a look at their [First steps](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) and [Knowledge Base](https://gpgtools.tenderapp.com/kb) for support.

{{< cards >}}
  {{< card link="https://gpgtools.org" title="Homepage" icon="home" >}}
  {{< card link="https://gpgtools.org/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="macOS" color="indigo" >}}](https://gpgtools.org)

Currently, GPG Suite does [not yet](https://gpgtools.com/sequoia) have a stable release for macOS Sonoma and later.

### OpenKeychain

{{< title-card logo="./openkeychain.svg" >}}

**OpenKeychain** is an implementation of GnuPG for Android. It's commonly required by mail clients such as [Thunderbird](../email-clients/index.md#thunderbird), [FairEmail](../email-clients/index.md#fairemail-android), and other Android apps to provide encryption support.

{{< cards >}}
  {{< card link="https://openkeychain.org" title="Homepage" icon="home" >}}
  {{< card link="https://openkeychain.org/help/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

Cure53 completed a [security audit](https://openkeychain.org/openkeychain-3-6) of OpenKeychain 3.6 in October 2015. The published audit and OpenKeychain's solutions to the issues raised in the audit can be found [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Qualifications

- Cross-platform encryption apps must be open source.
- File encryption apps must support decryption on Linux, macOS, and Windows.
- External disk encryption apps must support decryption on Linux, macOS, and Windows.
- Internal (OS) disk encryption apps must be cross-platform or built in to the operating system natively.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Operating System (FDE) encryption apps should utilize hardware security such as a TPM or Secure Enclave.
- File encryption apps should have first- or third-party support for mobile platforms.

---
meta_title: "Recommended Encryption Software: VeraCrypt, Cryptomator, PicoCrypt, and OpenPGP - Privacy Guides"
title: "Encryption Software"
icon: material/file-lock
description: Encryption of data is the only way to control who can access it. These tools allow you to encrypt your emails and any other files.
cover: encryption.webp
---
**Encryption** is the only secure way to control who can access your data. If you are currently not using encryption software for your hard disk, emails, or files, you should pick an option here.

## Multi-platform

The options listed here are multi-platform and great for creating encrypted backups of your data.

### Cryptomator (Cloud)

<div class="admonition recommendation" markdown>

![Cryptomator logo](assets/img/encryption-software/cryptomator.svg){ align=right }

**Cryptomator** is an encryption solution designed for privately saving files to any cloud provider. It allows you to create vaults that are stored on a virtual drive, the contents of which are encrypted and synced with your cloud storage provider.

[:octicons-home-16: Homepage](https://cryptomator.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.cryptomator.org){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Source Code" }
[:octicons-heart-16:](https://cryptomator.org/donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1560822163)
- [:simple-android: Android](https://cryptomator.org/android)
- [:fontawesome-brands-windows: Windows](https://cryptomator.org/downloads)
- [:simple-apple: macOS](https://cryptomator.org/downloads)
- [:simple-linux: Linux](https://cryptomator.org/downloads)
- [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

</details>

</div>

Cryptomator uses AES-256 encryption to encrypt both files and filenames. Cryptomator cannot encrypt metadata such as access, modification, and creation timestamps, nor the number and size of files and folders.

Some Cryptomator cryptographic libraries have been [audited](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) by Cure53. The scope of the audited libraries includes: [cryptolib](https://github.com/cryptomator/cryptolib), [cryptofs](https://github.com/cryptomator/cryptofs), [siv-mode](https://github.com/cryptomator/siv-mode) and [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor). The audit did not extend to [cryptolib-swift](https://github.com/cryptomator/cryptolib-swift), which is a library used by Cryptomator for iOS.

Cryptomator's documentation details its intended [security target](https://docs.cryptomator.org/en/latest/security/security-target), [security architecture](https://docs.cryptomator.org/en/latest/security/architecture), and [best practices](https://docs.cryptomator.org/en/latest/security/best-practices) for use in further detail.

### Picocrypt (File)

<div class="admonition recommendation" markdown>

![Picocrypt logo](assets/img/encryption-software/picocrypt.svg){ align=right }

**Picocrypt** is a small and simple encryption tool that provides modern encryption. Picocrypt uses the secure XChaCha20 cipher and the Argon2id key derivation function to provide a high level of security. It uses Go's standard x/crypto modules for its encryption features.

[:octicons-repo-16: Repository](https://github.com/Picocrypt/Picocrypt){ .md-button .md-button--primary }
[:octicons-code-16:](https://github.com/Picocrypt/Picocrypt){ .card-link title="Source Code" }
[:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://github.com/Picocrypt/Picocrypt/releases)
- [:simple-apple: macOS](https://github.com/Picocrypt/Picocrypt/releases)
- [:simple-linux: Linux](https://github.com/Picocrypt/Picocrypt/releases)

</details>

</div>

### VeraCrypt (Disk)

<div class="admonition recommendation" markdown>

![VeraCrypt logo](assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
![VeraCrypt logo](assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }

**VeraCrypt** is a source-available freeware utility used for on-the-fly encryption. It can create a virtual encrypted disk within a file, encrypt a partition, or encrypt the entire storage device with pre-boot authentication.

[:octicons-home-16: Homepage](https://veracrypt.fr){ .md-button .md-button--primary }
[:octicons-info-16:](https://veracrypt.fr/en/Documentation.html){ .card-link title=Documentation}
[:octicons-code-16:](https://veracrypt.fr/code){ .card-link title="Source Code" }
[:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://veracrypt.fr/en/Downloads.html)
- [:simple-apple: macOS](https://veracrypt.fr/en/Downloads.html)
- [:simple-linux: Linux](https://veracrypt.fr/en/Downloads.html)

</details>

</div>

VeraCrypt is a fork of the discontinued TrueCrypt project. According to its developers, security improvements have been implemented and issues raised by the initial TrueCrypt code audit have been addressed.

When encrypting with VeraCrypt, you have the option to select from different [hash functions](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme). We suggest you **only** select [SHA-512](https://en.wikipedia.org/wiki/SHA-512) and stick to the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) block cipher.

Truecrypt has been [audited a number of times](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits), and VeraCrypt has also been [audited separately](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit).

## OS Full Disk Encryption

Full disk encryption (FDE) is a comprehensive data encryption solution, encompassing the operating system and system files. FDE principally leverages hardware security features, such as a [secure cryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor) (e.g., a [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module)). Therefore, we recommend using the built-in FDE solutions for your operating system. For external drives, however, we still recommend [cross-platform tools](#multi-platform) for additional flexibility and to avoid vendor lock-in.

Note the terms full *disk* encryption and full *volume* encryption are often used interchangeably.

### BitLocker

<div class="admonition recommendation" markdown>

![BitLocker logo](assets/img/encryption-software/bitlocker.png){ align=right }

**BitLocker**, a proprietary solution built into Windows, provides full volume encryption to protect data at rest. BitLocker [leverages](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/how-windows-uses-the-tpm#tpm-overview) the Trusted Platform Module (TPM) for hardware-based security, provided one is present. BitLocker is only officially supported on Pro, Enterprise and Education editions of Windows.

BitLocker can be managed through the Control Panel: in the search box on the taskbar, type "Manage BitLocker" and then select it from the list of results.

[:octicons-info-16:](https://learn.microsoft.com/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentation}

</details>

</div>

To learn more about BitLocker and TPM, see "[Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection)" by ElcomSoft, a forensics company.

In addition to the TPM, BitLocker can lock the normal startup process until the user supplies a pin or inserts a USB flash drive containing a startup key. Preboot authentication is designed to prevent the encryption keys from being loaded to system memory without the trusted user supplying another authentication factor. This feature helps mitigate direct memory access and memory remanence attacks.

<details class="tip" markdown>
<summary>Enabling preboot authentication</summary>

1. Enable BitLocker on your operating system drive.
2. Allow for preboot authentication:
    1. Open the Group Policy Editor and navigate to:<br>
    **Computer Configuration** → **Administrative Templates** → **Windows Components** → **BitLocker Drive Encryption** → **Operating System Drives**
    2. Open and enable the setting "**Require Additional Authentication at Startup**."
    3. Under "**Configure TPM Startup PIN**," select: "**Require Startup PIN With TPM**."
3. Add a pin:
    1. As an administrator, open a command prompt window.
    2. Type and run:<br>
        `manage-bde -protectors -add c: -TPMAndPIN`<br>
        If necessary, replace `c:` with the drive letter of your operating system drive.
    3. Type and confirm a pin of 6 to 20 characters (you won't see the characters as you type them).
4. Check the preboot authentication status:
    1. Type and run: `manage-bde -status`.
    2. Check whether "**TPM and Pin**" is listed under "**Key Protectors**."

- You can change your preboot pin at any time by running: `manage-bde -changepin c:`, again, replacing `c:` with the drive letter of your operating system drive.
- To remove the preboot pin:
    1. Configure the Group Policy "**Configure TPM Startup PIN**" back to "**Allow Startup PIN With TPM**".
    2. Run: `manage-bde -protectors -add c: -TPM`.

</details>

While BitLocker is not officially supported on Windows Home, it can be enabled on Home editions with a few extra steps.

<details class="example" markdown>
<summary>Enabling BitLocker on Windows Home</summary>

#### Preliminary checks

- You must have partitions formatted with a [GUID Partition Table](https://en.wikipedia.org/wiki/GUID_Partition_Table).
- You must have a TPM (v1.2, 2.0+) and it must be enabled.
- You may need to [disable the non-Bitlocker "Device encryption" functionality](https://discuss.privacyguides.net/t/enabling-bitlocker-on-the-windows-11-home-edition/13303/5) if it is enabled.
- This guide assumes your computer has a typical disk configuration. If you have a non-standard configuration, such as a dual-boot setup, you may want to avoid this workaround.
If your computer has multiple drives, you will need to take a few extra steps to determine the correct drive letter, because it is **not** necessarily the same between when your operating system is booted and while in the recovery environment (see step 3 below).
<details class="info" markdown>
<summary>Determining the correct drive letter</summary>
1. Run, and accept the elevation prompt:
     ```powershell
     diskpart
     ```
2. In the new window that appears, run:
     ```powershell
     list volume
     ```
     Remember the volume number your operating system boots on (check the "ltr" column).
3. Follow the below instructions until and including step 3.
4. Run the commands in the above steps 1 and 2 again.
5. For steps 4-7 in the below instructions, use the drive letter that corresponds with the aforementioned volume number.
</details>

<hr>

1. Open a command prompt window and check your drive's partition table format with the following command:
    ```powershell
    powershell Get-Disk
    ```
    You should see `GPT` in the partition style column.

2. As an administrator, run this command to check your TPM version:
    ```powershell
    powershell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm
    ```
    You should see either `2.0` or `1.2` listed next to `SpecVersion`.

3. Access the [Windows Recovery Environment](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference):
    1. Hold shift and click "**Restart**" in the start menu to restart your computer. Continue holding shift.<br>
        Alternatively, press and hold the F8 key as your computer restarts. You will need to press F8 before the Windows logo appears, otherwise try again.
    2. Once in the recovery environment environment, navigate:<br>
        **Troubleshoot** → **Advanced Options** → **Command Prompt**.
4. In the command prompt window, run:
    ```powershell
    manage-bde -on c: -used
    ```
5. Close the command prompt window and exit the recovery environment; continue into Windows.
6. Open a command prompt window as administrator and run:
    ```powershell
    manage-bde c: -protectors -add -rp -tpm
    ```
    A recovery password will be displayed. **Securely save the recovery password to a separate storage device.**

7. Lastly, run:
    ```powershell
    manage-bde -protectors -enable c:
    ```

</details>

### FileVault

<div class="admonition recommendation" markdown>

![FileVault logo](assets/img/encryption-software/filevault.png){ align=right }

**FileVault**, a proprietary solution integrated into macOS, offers on-the-fly volume encryption to secure all data at rest. On Macs with Apple silicon or a T2 Security Chip, FileVault [leverages](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web) the [Secure Enclave](https://support.apple.com/en-us/guide/security/sec59b0b31ff/web) and its hardware security capabilities.

FileVault can be managed in the Privacy & Security section of System Settings.

[:octicons-info-16:](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac){ .card-link title=Documentation}

</details>

</div>

We advise against using your iCloud account for recovery; instead, securely store a local recovery key on a separate storage device.

### LUKS

<div class="admonition recommendation" markdown>

![LUKS logo](assets/img/encryption-software/luks.png){ align=right }

**LUKS**, or Linux Unified Key Setup, is the open-source standard for Linux disk encryption. By providing a standardized on-disk format,
it facilitates compatibility among distributions. LUKS can be used to encrypt full volumes, encrypt partitions, and create encrypted containers.

LUKS can be [managed](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/FrequentlyAskedQuestions) with the `cryptsetup` command-line tool, however most Linux distributions provide a graphical interface for managing LUKS.

[:octicons-home-16: Homepage](https://gitlab.com/cryptsetup/cryptsetup/-/blob/main/README.md){ .md-button .md-button--primary }
[:octicons-info-16:](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home){ .card-link title=Documentation}
[:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup){ .card-link title="Source Code" }

</details>

</div>

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

<div class="admonition note" markdown>
<p class="admonition-title">Remember to back up volume headers</p>

We recommend you always [back up your LUKS headers](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) in case of partial drive failure. This can be done with:

```bash
cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
```

</div>

## Command-line

Tools with command-line interfaces are useful for integrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor

<div class="admonition recommendation" markdown>

![Kryptor logo](assets/img/encryption-software/kryptor.png){ align=right }

**Kryptor** is a free and open-source file encryption and signing tool that makes use of modern and secure cryptographic algorithms. It aims to be a better version of [age](https://github.com/FiloSottile/age) and [Minisign](https://jedisct1.github.io/minisign) to provide a simple, easier alternative to GPG.

[:octicons-home-16: Homepage](https://kryptor.co.uk){ .md-button .md-button--primary }
[:octicons-eye-16:](https://kryptor.co.uk/features#privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://kryptor.co.uk/tutorial){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Source Code" }
[:octicons-heart-16:](https://kryptor.co.uk/#donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://kryptor.co.uk)
- [:simple-apple: macOS](https://kryptor.co.uk)
- [:simple-linux: Linux](https://kryptor.co.uk)

</details>

</div>

### Tomb

<div class="admonition recommendation" markdown>

![Tomb logo](assets/img/encryption-software/tomb.png){ align=right }

**Tomb** is a command-line shell wrapper for LUKS. It supports steganography via [third-party tools](https://dyne.org/software/tomb/#advanced-usage).

[:octicons-home-16: Homepage](https://dyne.org/software/tomb){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/dyne/Tomb/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Source Code" }
[:octicons-heart-16:](https://dyne.org/donate){ .card-link title=Contribute }

</details>

</div>

## OpenPGP

OpenPGP is sometimes needed for specific tasks such as digitally signing and encrypting email. PGP has many features and is [complex](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) as it has been around a long time. For tasks such as signing or encrypting files, we suggest the above options.

When encrypting with PGP, you have the option to configure different options in your `gpg.conf` file. We recommend staying with the standard options specified in the [GnuPG user FAQ](https://gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf).

<div class="admonition tip" markdown>
<p class="admonition-title">Use future defaults when generating a key</p>

When [generating keys](https://gnupg.org/gph/en/manual/c14.html) we suggest using the `future-default` command as this will instruct GnuPG use modern cryptography such as [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History) and [Ed25519](https://ed25519.cr.yp.to):

```bash
gpg --quick-gen-key alice@example.com future-default
```

</div>

### GNU Privacy Guard

<div class="admonition recommendation" markdown>

![GNU Privacy Guard logo](assets/img/encryption-software/gnupg.svg){ align=right }

**GnuPG** is a GPL-licensed alternative to the PGP suite of cryptographic software. GnuPG is compliant with [RFC 4880](https://tools.ietf.org/html/rfc4880), which is the current IETF specification of OpenPGP. The GnuPG project has been working on an [updated draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh) in an attempt to modernize OpenPGP. GnuPG is a part of the Free Software Foundation's GNU software project and has received major [funding](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html) from the German government.

[:octicons-home-16: Homepage](https://gnupg.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://gnupg.org/privacy-policy.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://gnupg.org/documentation/index.html){ .card-link title=Documentation}
[:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
- [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
- [:simple-apple: macOS](https://gpgtools.org)
- [:simple-linux: Linux](https://gnupg.org/download/index.html#binary)

</details>

</div>

### GPG4win

<div class="admonition recommendation" markdown>

![GPG4win logo](assets/img/encryption-software/gpg4win.svg){ align=right }

**GPG4win** is a package for Windows from [Intevation and g10 Code](https://gpg4win.org/impressum.html). It includes [various tools](https://gpg4win.org/about.html) that can assist you in using GPG on Microsoft Windows. The project was initiated and originally [funded by](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography) Germany's Federal Office for Information Security (BSI) in 2005.

[:octicons-home-16: Homepage](https://gpg4win.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://gpg4win.org/privacy-policy.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://gpg4win.org/documentation.html){ .card-link title=Documentation}
[:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Source Code" }
[:octicons-heart-16:](https://gpg4win.org/donate.html){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)

</details>

</div>

### GPG Suite

<div class="admonition note" markdown>
<p class="admonition-title">Note</p>

We suggest [Canary Mail](email-clients.md#canary-mail-ios) for using PGP with email on iOS devices.

</div>

<div class="admonition recommendation" markdown>

![GPG Suite logo](assets/img/encryption-software/gpgsuite.png){ align=right }

**GPG Suite** provides OpenPGP support for [Apple Mail](email-clients.md#apple-mail-macos) and macOS.

We recommend taking a look at their [First steps](https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email) and [Knowledge base](https://gpgtools.tenderapp.com/kb) for support.

[:octicons-home-16: Homepage](https://gpgtools.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://gpgtools.org/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://gpgtools.tenderapp.com/kb){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-apple: macOS](https://gpgtools.org)

</details>

</div>

### OpenKeychain

<div class="admonition recommendation" markdown>

![OpenKeychain logo](assets/img/encryption-software/openkeychain.svg){ align=right }

**OpenKeychain** is an Android implementation of GnuPG. It's commonly required by mail clients such as [K-9 Mail](email-clients.md#k-9-mail-android) and [FairEmail](email-clients.md#fairemail-android) and other Android apps to provide encryption support. Cure53 completed a [security audit](https://openkeychain.org/openkeychain-3-6) of OpenKeychain 3.6 in October 2015. Technical details about the audit and OpenKeychain's solutions can be found [here](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).

[:octicons-home-16: Homepage](https://openkeychain.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://openkeychain.org/help/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://openkeychain.org/faq){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

</details>

</div>

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Qualifications

- Cross-platform encryption apps must be open source.
- File encryption apps must support decryption on Linux, macOS, and Windows.
- External disk encryption apps must support decryption on Linux, macOS, and Windows.
- Internal (OS) disk encryption apps must be cross-platform or built in to the operating system natively.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Operating System (FDE) encryption apps should utilize hardware security such as a TPM or Secure Enclave.
- File encryption apps should have first- or third-party support for mobile platforms.

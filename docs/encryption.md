---
title: Encryption Software
---
Encryption of data is the only way to control who can access it. If you are currently not using encryption software for your hard disk, emails, or file archives, you should pick an option here.

## Multi-platform
The options listed here are multi-platform and great for creating encrypted backups of your data.

### VeraCrypt
!!! recommendation

    ![VeraCrypt logo](/assets/img/encryption-software/veracrypt.svg#only-light){ align=right }
    ![VeraCrypt logo](/assets/img/encryption-software/veracrypt-dark.svg#only-dark){ align=right }

    **VeraCrypt** is a source-available freeware utility used for on-the-fly encryption. It can create a virtual encrypted disk within a file, encrypt a partition, or encrypt the entire storage device with pre-boot authentication. VeraCrypt is a fork of the discontinued TrueCrypt project. According to its developers, security improvements have been implemented and issues raised by the initial TrueCrypt code audit have been addressed.

    [Visit veracrypt.fr](https://veracrypt.fr){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)
    - [:fontawesome-brands-git: Source](https://www.veracrypt.fr/code)

### GNU Privacy Guard
!!! recommendation

    ![GNU Privacy Guard logo](/assets/img/encryption-software/gnupg.svg){ align=right }

    **GnuPG** is a GPL-licensed alternative to the PGP suite of cryptographic software. GnuPG is compliant with RFC 4880, which is the current IETF standards track specification of OpenPGP. Current versions of PGP (and Veridis' Filecrypt) are interoperable with GnuPG and other OpenPGP-compliant systems. GnuPG is a part of the Free Software Foundation's GNU software project, and has received major funding from the German government.

    [Visit gnupg.org](https://gnupg.org){ .md-button .md-button--primary } [Privacy Policy](https://gnupg.org/privacy-policy.html){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://gpg4win.org/download.html)
    - [:fontawesome-brands-apple: macOS](https://gpgtools.org)
    - [:fontawesome-brands-linux: Linux](https://gnupg.org/download/index.html#binary)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
    - [:fontawesome-brands-git: Source](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git)

### Cryptomator
!!! recommendation

    ![Cryptomator logo](/assets/img/encryption-software/cryptomator.svg){ align=right }

    **Cryptomator** makes it easy for you to upload files to the cloud in a virtual encrypted filesystem.

    Some of the libraries have been [audited](https://cryptomator.org/open-source/) by [cure53](https://cryptomator.org/audits/2017-11-27%20crypto%20cure53.pdf).

    [Visit cryptomator.org](https://cryptomator.org){ .md-button .md-button--primary } [Privacy Policy](https://cryptomator.org/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://cryptomator.org/downloads)
    - [:fontawesome-brands-apple: macOS](https://cryptomator.org/downloads)
    - [:fontawesome-brands-linux: Linux](https://cryptomator.org/downloads)
    - [:fontawesome-brands-linux: Linux (Flatpak)](https://flathub.org/apps/details/org.cryptomator.Cryptomator)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
    - [:fontawesome-brands-android: F-Droid repo](https://cryptomator.org/android)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
    - [:fontawesome-brands-github: Source](https://github.com/cryptomator)

### Picocrypt
!!! recommendation

    ![Picocrypt logo](/assets/img/encryption-software/picocrypt.svg){ align=right }

    **Picocrypt** is a small and simple encryption tool that provides modern encryption. Picocrypt uses the secure XChaCha20 cipher and the Argon2id key derivation function to provide a high level of security. It uses Go's standard x/crypto modules for its encryption features.

    We think the best usecase for this is if you need to encrypt some files, or archives.

    [Visit github.com](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)
    - [:fontawesome-brands-github: Source](https://github.com/HACKERALERT/Picocrypt)

## Operating system included Full Disk Encryption (FDE)
Modern operating systems include [disk encryption](https://en.wikipedia.org/wiki/Disk_encryption) and will utilize a [secure cryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

### Bitlocker
!!! recommendation

    ![Bitlocker logo](/assets/img/encryption-software/bitlocker.png){ align=right }

    **Bitlocker** is the default full volume encryption that comes with Microsoft Windows. The main reason we recommend it is because of its [use of TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). [Elcomsoft](https://en.wikipedia.org/wiki/ElcomSoft), a forensics company, has written about it: [Understanding BitLocker TPM Protection](https://blog.elcomsoft.com/2021/01/understanding-bitlocker-tpm-protection/).


    [Visit microsoft.com](https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview){ .md-button .md-button--primary }

### Filevault
!!! recommendation

    ![Filevault logo](/assets/img/encryption-software/filevault.png){ align=right }

    **Filevault** is the on-the-fly disk encryption that comes with MacOS. We recommend it because tightly intergrates with the [Apple T2 Security Chip](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/1/web/1).

    [Visit support.apple.com](https://support.apple.com/en-us/HT204837){ .md-button .md-button--primary }

### Linux Unified Key Setup (LUKS)
!!! recommendation

    ![LUKS logo](/assets/img/encryption-software/luks.png){ align=right }

    **LUKS** is the default full disk encryption method for Linux. It can be used to encrypt full volumes, partitions, or create encrypted containers.

    ## Creating encrypted containers
    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```

    ## Opening encrypted containers
    We recommend opening containers and volumes with `udisksctl` as this uses [Polkit](https://en.wikipedia.org/wiki/Polkit). Most file managers, such as those included with popular desktop environments, can now unlock encrypted files. Tools like [udiskie](https://github.com/coldfix/udiskie) can run in the system tray and provide a helpful user interface.
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl unlock -b /dev/loop0
    ```

    ## Backup of volume headers
    We recommend you always [backup your LUKS headers](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore) in case of partial drive failure. This can be done with:

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

    [Visit gitlab.com](https://gitlab.com/cryptsetup/cryptsetup){ .md-button .md-button--primary }

## Browser-based
Web based encryption can be useful when you need to encrypt a file, and you cannot install software or apps on your device.

### hat.sh
!!! recommendation

    ![hat.sh logo](/assets/img/encryption-software/hat-sh.png#only-light){ align=right }
    ![hat.sh logo](/assets/img/encryption-software/hat-sh-dark.png#only-dark){ align=right }

    **Hat.sh** is a web application that provides secure client-side file encryption in your browser. It can also be selfhosted and is useful if you need to encrypt a file but cannot install any software on your device due to organizational policies.

    [Visit hat.sh](https://hat.sh){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-github: Source](https://github.com/sh-dv/hat.sh)

## Command-line
Tools with commandline interfaces are useful for intergrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

### Kryptor
!!! recommendation

    ![Kryptor logo](/assets/img/encryption-software/kryptor.png){ align=right }

    **Kryptor** is a free and open source file encryption and signing tool that makes use of modern and secure cryptographic algorithms. It aims to be a better version of [age](https://github.com/FiloSottile/age) and [Minisign](https://jedisct1.github.io/minisign/) to provide a simple, user friendly alternative to GPG.

    [Visit kryptor.co.uk](https://www.kryptor.co.uk){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://www.kryptor.co.uk)
    - [:fontawesome-brands-apple: macOS](https://www.kryptor.co.uk)
    - [:fontawesome-brands-linux: Linux](https://www.kryptor.co.uk)
    - [:fontawesome-brands-github: Source](https://github.com/samuel-lucas6/Kryptor)

### Tomb
!!! recommendation

    ![Tomb logo](/assets/img/encryption-software/tomb.png){ align=right }

    **Tomb** is an is a commandline shell wrapper around LUKS. It includes uses some [third party tools](https://github.com/dyne/Tomb#how-does-it-work) to provide [steganography](https://en.wikipedia.org/wiki/Steganography).

    [Visit dyne.org](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-github: Source](https://github.com/dyne/Tomb)

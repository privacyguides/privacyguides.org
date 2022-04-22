---
title: System Hardening
icon: material/monitor-lock
---
There are a number of procedures you can follow to make your Linux desktop system more secure, some more advanced than others. We cover some general techniques here.

## Firewalls

A [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) may be used to secure connections to your system. If you’re on a public network, the necessity of this may be greater than if you’re on a local trusted network that you control. We would generally recommend that you block incoming connections only, unless you’re using an application firewall such as [OpenSnitch](https://github.com/evilsocket/opensnitch) or [Portmaster](https://safing.io/portmaster/).

Red Hat distributions (such as Fedora) are typically configured through [firewalld](https://en.wikipedia.org/wiki/Firewalld). Red Hat has plenty of [documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/using-and-configuring-firewalld_configuring-and-managing-networking) regarding this topic. There is also the [Uncomplicated Firewall](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) which can be used as an alternative.

Consider blocking all ports which are **not** [well known](https://en.wikipedia.org/wiki/Well-known_port#Well-known_ports) or “privileged ports”. That is, ports from 1025 up to 65535. Block both [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) and [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) after the operating system is installed.

If you use Fedora, consider removing the whitelist for for [smb](https://en.wikipedia.org/wiki/Server_Message_Block)-client and [mdns](https://en.wikipedia.org/wiki/Multicast_DNS) services if you do not use them.

All these firewalls use the [Netfilter](https://en.wikipedia.org/wiki/Netfilter) framework and therefore cannot protect against malicious programs running on the system. A malicious program could insert its own rules.

If you are using Flatpak packages, you can revoke their network socket access using Flatseal and prevent those applications from accessing your network. This permission is not bypassable.

If you are using non-classic [Snap](https://en.wikipedia.org/wiki/Snap_(package_manager)) packages on a system with proper snap confinement support (with both AppArmor and [CGroupsv1](https://en.wikipedia.org/wiki/Cgroups) present), you can use the Snap Store to revoke network permission as well. This is also not bypassable.

## Kernel hardening

There are some additional kernel hardening options such as configuring [sysctl](https://en.wikipedia.org/wiki/Sysctl#Linux) keys and [kernel command-line parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) which are described in the following pages. We don’t recommend you change these options unless you learn about what they do.

- [2.2 Sysctl](https://madaidans-insecurities.github.io/guides/linux-hardening.html#sysctl)
- [2.3 Boot parameters](https://madaidans-insecurities.github.io/guides/linux-hardening.html#boot-parameters)
- [2.5 Kernel attack surface reduction](https://madaidans-insecurities.github.io/guides/linux-hardening.html#kernel-attack-surface-reduction)

Note that setting `kernel.unprivileged_userns_clone=0` will stop Flatpak, Snap (that depend on browser-sandbox), Electron based AppImages, Podman, Docker, and LXC containers from working. Do **not** set this flag if you are using container products.

## Linux-Hardened

Some distributions like Arch Linux have the [linux-hardened](https://github.com/anthraxx/linux-hardened), kernel package. It includes [hardening patches](https://wiki.archlinux.org/title/security#Kernel_hardening) and more security-conscious defaults. Linux-Hardened has `kernel.unprivileged_userns_clone=0` disabled by default. See the [warning above](#kernel-hardening) about how this might impact you.

## Simultaneous multithreading (SMT)

[SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) has been the cause of numerous hardware vulnerabilities, and subsequent patches for those vulnerabilities often come with performance penalties that negate most of the performance gain given by SMT. If you followed the “kernel hardening” section above, some kernel parameters already disable SMT. If the option is available to you, we recommend that you disable it in your firmware as well.

## Hardened memory allocator

The [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc) from [GrapheneOS](https://grapheneos.org) can be used on Linux distributions. It is available by default on Whonix and is available as an [AUR package](https://wiki.archlinux.org/title/Security#Hardened_malloc) on Arch based distributions. If you are using the AUR package, consider setting up `LD_PRELOAD` as described in the [Arch Wiki](https://wiki.archlinux.org/title/Security#Hardened_malloc).

## Umask

If you are not using openSUSE, consider changing the default [umask](https://en.wikipedia.org/wiki/Umask) for both regular users and root to 077. Changing umask to 077 can break snapper on openSUSE and is **not** recommended.

## Mountpoint hardening

Consider adding the [following options](https://man7.org/linux/man-pages/man8/mount.8.html) `nodev`, `noexec`, and `nosuid` to [mountpoints](https://en.wikipedia.org/wiki/Mount_(computing)) which do not need them. Typically, these could be applied to `/boot`, `/boot/efi`, `/home`, `/root`, and `/var`.

If you use [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/), `/var/log/journal` must not have any of those options. If you are on Arch Linux, do not apply `noexec` to `/var/tmp`.

## Linux Pluggable Authentication Modules (PAM)

There is also further hardening to [PAM](https://en.wikipedia.org/wiki/Linux_PAM) to secure authentication to your system. [14. PAM](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam) has some tips on this.

On Red Hat distributions you can use [`authselect`](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_authentication_and_authorization_in_rhel/configuring-user-authentication-using-authselect_configuring-authentication-and-authorization-in-rhel) to configure this e.g.:

```bash
sudo authselect select <profile_id, default: sssd> with-faillock without-nullok with-pamaccess
```

On systems where [`pam_faillock`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) is not available, consider using [`pam_tally2`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) instead.

## USB port protection

To better protect your [USB](https://en.wikipedia.org/wiki/USB) ports from attacks such as [BadUSB](https://en.wikipedia.org/wiki/BadUSB) we recommend [USBGuard](https://github.com/USBGuard/usbguard). USBGuard has [documentation](https://github.com/USBGuard/usbguard#documentation) as does the [Arch Wiki](https://wiki.archlinux.org/title/USBGuard).

Another alternative option if you’re using the [linux-hardened](#linux-hardened) is the [`deny_new_usb`](https://github.com/GrapheneOS/linux-hardened/commit/96dc427ab60d28129b36362e1577b6673b0ba5c4) sysctl. See [Preventing USB Attacks with `linux-hardened`](https://blog.lizzie.io/preventing-usb-attacks-with-linux-hardened.html).

## Secure Boot

[Secure Boot](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_Boot) can be used to secure the boot process by preventing the loading of [unsigned](https://en.wikipedia.org/wiki/Public-key_cryptography) [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) drivers or [boot loaders](https://en.wikipedia.org/wiki/Bootloader). Some guidance for this is provided in [21. Physical security](https://madaidans-insecurities.github.io/guides/linux-hardening.html#physical-security) and [21.4 Verified boot](https://madaidans-insecurities.github.io/guides/linux-hardening.html#verified-boot).

For further resources on Secure Boot we suggest taking a look at the following for instructional advice:

- The Archwiki’s [Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot) article. There are two main methods, the first is to use a [shim](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#shim), the second more complete way is to [use your own keys](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Using_your_own_keys).

For background of how Secure Boot works on Linux:

- [The Strange State of Authenticated Boot and Disk Encryption on Generic Linux Distributions](https://0pointer.net/blog/authenticated-boot-and-disk-encryption-on-linux.html)
- [Rod Smith’s Managing EFI Boot Loaders for Linux](https://www.rodsbooks.com/efi-bootloaders/)
- [Dealing with Secure Boot](https://www.rodsbooks.com/efi-bootloaders/secureboot.html)
- [Controlling Secure Boot](https://www.rodsbooks.com/efi-bootloaders/controlling-sb.html)

One of the problems with Secure Boot particularly on Linux is that only the [chainloader](https://en.wikipedia.org/wiki/Chain_loading#Chain_loading_in_boot_manager_programs) (shim), the [boot loader](https://en.wikipedia.org/wiki/Bootloader) (GRUB), and the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) are verified and that’s where verification stops. The [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) is often left unverified, unencrypted, and open up the window for an [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attack. There are a few things that can be done to reduce risk such as:

- Creating an [EFI Boot Stub](https://docs.kernel.org/admin-guide/efi-stub.html) that contains the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) and [microcode](https://en.wikipedia.org/wiki/Microcode). This EFI stub can then be signed. If you use [dracut](https://en.wikipedia.org/wiki/Dracut_(software)) this can easily be done with the [`--uefi-stub` switch](https://man7.org/linux/man-pages/man8/dracut.8.html) or the [`uefi_stub` config](https://www.man7.org/linux/man-pages/man5/dracut.conf.5.html) option.
- [Encrypting the boot partition](https://wiki.archlinux.org/title/GRUB#Encrypted_/boot). However, this has its own issues, the first being that [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) only supports [LUKS1](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) and not the newer default LUKS2 scheme. As the bootloader runs in [protected mode](https://en.wikipedia.org/wiki/Protected_mode) and the encryption module lacks [SSE acceleration](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) the boot process will take minutes to complete.
- Using [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module) to perform a [measured boot](https://www.krose.org/~krose/measured_boot).

After setting up Secure Boot it is crucial that you set a “firmware password” (also called a “supervisor password, “BIOS password” or “UEFI password”), otherwise an adversary can simply disable Secure Boot.

These recommendations can make you a little more resistant to [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, but they not good as a proper verified boot process such as that found on [Android](https://source.android.com/security/verifiedboot), [ChromeOS](https://support.google.com/chromebook/answer/3438631) or [Windows](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process).

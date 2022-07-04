---
title: System Hardening
icon: material/monitor-lock
---
There are a number of procedures you can follow to make your Linux desktop system more secure, some more advanced than others. We cover some general techniques here.

## Firewalls

A [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) may be used to secure connections to your system. If you’re on a public network, the necessity of this may be greater than if you’re on a local trusted network that you control. We would generally recommend that you block incoming connections only, unless you’re using an application firewall such as [OpenSnitch](https://github.com/evilsocket/opensnitch) or [Portmaster](https://safing.io/portmaster/).

Red Hat distributions (such as Fedora) are typically configured through [firewalld](https://en.wikipedia.org/wiki/Firewalld). Red Hat has plenty of [documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/using-and-configuring-firewalld_configuring-and-managing-networking) regarding this topic. There is also the [Uncomplicated Firewall](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) which can be used as an alternative.

You could also set your default firewall zone to drop packets. If you're on a Redhat based distribution, such as Fedora this can be done with the following commands:

!!! Example
    ```
    firewall-cmd --set-default-zone=drop;
    firewall-cmd --add-protocol=ipv6-icmp --permanent;
    firewall-cmd --add-service=dhcpv6-client --permanent;
    ```

All these firewalls use the [Netfilter](https://en.wikipedia.org/wiki/Netfilter) framework and therefore cannot protect against malicious programs running on the system. A malicious program could insert its own rules.

If you are using Flatpak packages, you can revoke their network socket access using Flatseal and prevent those applications from accessing your network. This permission is not bypassable.

If you are using non-classic [Snap](https://en.wikipedia.org/wiki/Snap_(package_manager)) packages on a system with proper snap confinement support (with both AppArmor and [cgroups](https://en.wikipedia.org/wiki/Cgroups) v1 present), you can use the Snap Store to revoke network permission as well. This is also not bypassable.

## Kernel hardening

Kernel hardening options such as configuring [sysctl](https://en.wikipedia.org/wiki/Sysctl#Linux) keys and [kernel command-line parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) can help harden your system. We suggest looking at the following [sysctl settings](https://madaidans-insecurities.github.io/guides/linux-hardening.html#sysctl) and [boot parameters](https://madaidans-insecurities.github.io/guides/linux-hardening.html#boot-parameters).

We **strongly** recommend that you learn what these options do before applying them. There are also some methods of [kernel attack surface reduction](https://madaidans-insecurities.github.io/guides/linux-hardening.html#kernel-attack-surface-reduction) and [access restrictions to sysfs](https://madaidans-insecurities.github.io/guides/linux-hardening.html#restricting-sysfs) that can further improve security.

!!! Note
    Unprivileged [user namespaces](https://madaidans-insecurities.github.io/linux.html#kernel) can be disabled, due to it being responsible for various privileged escalation vulnerabilities. Some software such as Docker, Podman, and LXC require unprivileged user namespaces to function. If you use these tools you should not disable `kernel.unprivileged_userns_clone`.

    Disabling access to `/sys` without a proper whitelist will lead to various applications breaking. This will unfortunately be an extremely tedious process for most users. Kicksecure, and by extension, Whonix, has an experimental [hide hardware info service](https://github.com/Kicksecure/security-misc/blob/master/lib/systemd/system/hide-hardware-info.service) which does just this. From our testing, these work perfectly fine on minimal Kicksecure installations and both Qubes-Whonix Workstation and Gateway. If you are using Kicksecure or Whonix, we recommend that you follow the [Kicksecure Wiki](https://www.kicksecure.com/wiki/Security-misc) to enable hide hardware info service.

## Linux-Hardened

Some distributions like Arch Linux have the [linux-hardened](https://github.com/anthraxx/linux-hardened), kernel package. It includes [hardening patches](https://wiki.archlinux.org/title/security#Kernel_hardening) and more security-conscious defaults. Linux-Hardened has `kernel.unprivileged_userns_clone=0` disabled by default. See the [note above](#kernel-hardening) about how this might impact you.

## Linux Kernel Runtime Guard (LKRG)

LKRG is a kernel module that performs runtime integrity check on the kernel to help detect exploits against the kernel. LKRG works in a *post*-detect fashion, attempting to respond to unauthorized modifications to the running Linux kernel. While it is [bypassable by design](https://lkrg.org/), it does stop off-the-shelf malware that does not specifically target LKRG itself. This may make exploits harder to develop and execute on vulnerable systems.

If you can get LKRG and maintain module updates, it provides a worthwhile improvement to security. Debian based distributions can get the LKRG DKMS package from KickSecure's secure repository and the [KickSecure documentation](https://www.kicksecure.com/wiki/Linux_Kernel_Runtime_Guard_LKRG) has instructions.

On Fedora, [fepitre](https://github.com/fepitre), a QubesOS developer has a [COPR repository](https://copr.fedorainfracloud.org/coprs/fepitre/lkrg/) where you can install it. Arch based systems can obtain the LKRG DKMS package via an [AUR package](https://aur.archlinux.org/packages/lkrg-dkms).

## GRSecurity

GRSecurity is a set of kernel patches that attempt to improve security of the Linux kernel. It requires [payment to access](https://grsecurity.net/purchase) the code and is worth using if you have a subscription.

## Simultaneous multithreading (SMT)

[SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) has been the cause of numerous hardware vulnerabilities, and subsequent patches for those vulnerabilities often come with performance penalties that negate most of the performance gain given by SMT. If you followed the “kernel hardening” section above, some kernel parameters already disable SMT. If the option is available to you, we recommend that you disable it in your firmware as well.

## Hardened memory allocator

The [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc) from [GrapheneOS](https://grapheneos.org) can also be used on general Linux distributions. It is available as an [AUR package](https://wiki.archlinux.org/title/Security#Hardened_malloc) on Arch based distributions, and (though not enabled by default) on Whonix and Kicksecure.

If you are using Whonix, Kicksecure or the AUR package, consider setting up `LD_PRELOAD` as described in the [Kicksecure Documentation](https://www.kicksecure.com/wiki/Hardened_Malloc) or [Arch Wiki](https://wiki.archlinux.org/title/Security#Hardened_malloc).

## Umask

If you are not using openSUSE, consider changing the default [umask](https://en.wikipedia.org/wiki/Umask) for both regular user accounts and root to 077. Changing umask to 077 can break snapper on openSUSE and is **not** recommended.

## Mountpoint hardening

Consider adding the [following options](https://man7.org/linux/man-pages/man8/mount.8.html) `nodev`, `noexec`, and `nosuid` to [mountpoints](https://en.wikipedia.org/wiki/Mount_(computing)) which do not need them. Typically, these could be applied to `/boot`, `/boot/efi`, and `/var`.

These flags could also be applied to `/home` and `/root` as well, however, `noexec` will prevent applications from working that require binary execution in those locations. This includes products such as Flatpak and Snap.

If you use [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/), `/var/log/journal` must not have any of those options. If you are on Arch Linux, do not apply `noexec` to `/var/tmp`.

## Disabling SUID

SUID allows a user to execute an application as the owner of that application, which in many cases, would be the `root` user. Vulnerable SUID executables could lead to privilege escalation vulnerabilities.

It is desirable to remove SUID from as many binaries as possible; however, this takes substantial effort and trial and error on the user's part, as some applications require SUID to function.

Kicksecure, and by extension, Whonix has an experimental [permission hardening service](https://github.com/Kicksecure/security-misc/blob/master/lib/systemd/system/permission-hardening.service) and [application whitelist](https://github.com/Kicksecure/security-misc/tree/master/etc/permission-hardening.d) to automate SUID removal from most binaries and libraries on the system. From our testing, these work perfectly fine on a minimal Kicksecure installation and both Qubes-Whonix Workstation and Gateway.

If you are using Kicksecure or Whonix, we recommend that you follow the [Kicksecure Wiki](https://www.kicksecure.com/wiki/SUID_Disabler_and_Permission_Hardener) to enable the permission hardener.

Users of other distributions can adapt the permission hardener to their own system based on the source code linked above.

## Secure Time Synchronization

Most Linux distributions by default (especially Arch based distributions with `systemd-timesyncd`) use un-encrypted NTP for time synchronization. Securing NTP can be achieved by [configuring NTS with chronyd](https://fedoramagazine.org/secure-ntp-with-nts/) or by using [swdate](https://github.com/Kicksecure/sdwdate) on Debian based distributions.

## Linux Pluggable Authentication Modules (PAM)

The security of [PAM](https://en.wikipedia.org/wiki/Linux_PAM) can be [hardened](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam) to allow secure authentication to your system.

On Red Hat distributions you can use [`authselect`](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_authentication_and_authorization_in_rhel/configuring-user-authentication-using-authselect_configuring-authentication-and-authorization-in-rhel) to configure this e.g.:

```bash
sudo authselect select <profile_id, default: sssd> with-faillock without-nullok with-pamaccess
```

On systems where [`pam_faillock`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) is not available, consider using [`pam_tally2`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) instead.

## USB port protection

To better protect your [USB](https://en.wikipedia.org/wiki/USB) ports from attacks such as [BadUSB](https://en.wikipedia.org/wiki/BadUSB), we recommend [USBGuard](https://github.com/USBGuard/usbguard). USBGuard has [documentation](https://github.com/USBGuard/usbguard#documentation) as does the [Arch Wiki](https://wiki.archlinux.org/title/USBGuard).

Another alternative option if you’re using the [linux-hardened](#linux-hardened) is the [`deny_new_usb`](https://github.com/GrapheneOS/linux-hardened/commit/96dc427ab60d28129b36362e1577b6673b0ba5c4) sysctl. See [Preventing USB Attacks with `linux-hardened`](https://blog.lizzie.io/preventing-usb-attacks-with-linux-hardened.html).

## Secure Boot

[Secure Boot](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_Boot) can be used to secure the boot process by preventing the loading of [unsigned](https://en.wikipedia.org/wiki/Public-key_cryptography) [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) drivers or [boot loaders](https://en.wikipedia.org/wiki/Bootloader).

One of the problems with Secure Boot, particularly on Linux is, that only the [chainloader](https://en.wikipedia.org/wiki/Chain_loading#Chain_loading_in_boot_manager_programs) (shim), the [boot loader](https://en.wikipedia.org/wiki/Bootloader) (GRUB), and the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) are verified and that's where verification stops. The [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) is often left unverified, unencrypted, and open up the window for an [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attack. The firmware on most devices is also configured to trust Microsoft's keys for Windows and its partners, leading to a large attacks surface.

To eliminate the need to trust Microsoft's keys, follow the "Using your own keys" section on the [Arch Wiki](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot). The important thing that needs to be done here is to replace the OEM's key with your own Platform Key.

There are several ways to work around the unverified initramfs:

The first way is to [encrypt the /boot partition](https://wiki.archlinux.org/title/GRUB#Encrypted_/boot). If you are on Fedora Workstation (not Silverblue), you can follow [this guide](https://mutschler.eu/linux/install-guides/fedora-btrfs-33/) to convert the existing installation to encrypted `/boot`. openSUSE comes with this that by default.

Encrypting `/boot` however have its own issues, one being that [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) only supports [LUKS1](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) and not the newer default LUKS2 scheme. As the bootloader runs in [protected mode](https://en.wikipedia.org/wiki/Protected_mode) and the encryption module lacks [SSE acceleration](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) so the boot process will take minutes to complete. Another problem with this is that you have to type the encryption password twice, which could be solved by following the [openSUSE Wiki](https://en.opensuse.org/SDB:Encrypted_root_file_system#Avoiding_to_type_the_passphrase_twice).

There are a few options depending on your configuration:

- If you enroll your own keys as described above, and your distribution supports Secure Boot by default, you can add your distribution's EFI Key into the list of trusted keys (db keys). It can then be enrolled into the firmware. Then, you should move all of your keys off your local storage device.
- If you enroll your own keys as described above, and your distribution does **not** support Secure Boot out of the box (like Arch Linux), you have to leave the keys on the disk and setup automatic signing of the [kernel](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Signing_the_kernel_with_a_pacman_hook) and bootloader. If you are using Grub, you can install it with the `--no-shim-lock` option and remove the need for the chainloader.

The second option is to creating an [EFI Boot Stub](https://wiki.archlinux.org/title/Unified_kernel_image) that contains the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk), and [microcode](https://en.wikipedia.org/wiki/Microcode). This EFI stub can then be signed. If you use [dracut](https://en.wikipedia.org/wiki/Dracut_(software)) this can easily be done with the [`--uefi-stub` switch](https://man7.org/linux/man-pages/man8/dracut.8.html) or the [`uefi_stub` config](https://www.man7.org/linux/man-pages/man5/dracut.conf.5.html) option. This option also requires you to leave the keys on the disk to setup automatic signing, which weakens the security model.

After setting up Secure Boot it is crucial that you set a “firmware password” (also called a “supervisor password, “BIOS password” or “UEFI password”), otherwise an adversary can simply disable Secure Boot.

These recommendations can make you a little more resistant to [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack) attacks, but they not good as a proper verified boot process such as that found on [Android](https://source.android.com/security/verifiedboot), [ChromeOS](https://support.google.com/chromebook/answer/3438631) or [Windows](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process).

--8<-- "includes/abbreviations.en.md"

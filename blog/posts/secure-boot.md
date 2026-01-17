---
date:
    created: 2025-05-19T20:15:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Secure Boot
    - Measured Boot
    - Verified Boot
preview:
  cover:
---

# Secure Boot Explained

More and more devices are internet-enabled these days, which means the possiblity of malware. A lot of focus goes into securing the software running on our devices, but even if our operating systems are secure, if the lower level firmware that controls our hardware is compromised it's essentially all for naught.<!-- more -->

## What is Firmware?

In order for your hardware to function, it oftentimes needs small programs embedded directly into it, called [firmware](https://en.wikipedia.org/wiki/Firmware).

Firmware provides low-level control for your hardware and allows the operating system to control it. The name comes from the fact that it's in between hardware and software; it's not executing CPU instructions, but it's a running program nonetheless.

Almost every chip in every device you own runs firmware, from the Wi-Fi chip to the CPU to the GPU and even the motherboard itself. Most of these devices store their firmware in non-volatile memory that can be flashed, or rewritten with new data. A lot of the time, it can be flashed from the operating system, without needing any special equipment.

This is desirable since older firmware can have vulnerabilities that need to be patched, which is especially important for connected devices that could be remotely exploited. Being able to easily patch firmware vulnerabilities through normal OS updates is essential for security on modern hardware that's so complex and feature-rich.

However, it introduces a problem: if you can flash new firmware, an attacker can do the same.

## Malware Persistence

That makes any device, from your SSD to your graphics card to your sound card, a potential vector for infection. And once the firmware is infected, it will stay that way: remember, it's installed on the hardware itself, so it can survive a full OS wipe and reinstall.

This isn't just theoretical: sophisticated malware has infected the firmware of devices like [hard drives](https://www.dailykos.com/story/2015/02/17/1364910/-Breaking-Kaspersky-Exposes-NSA-s-Worldwide-Backdoor-Hacking-of-Virtually-All-Hard-Drive-Firmware) to hide from detection and persist between reboots and OS reinstalls.

If you think about the sheer number of devices in your computer, most made by different companies, the attack surface is huge.

## BIOS

In the late 1970's, the Basic Input/Output System was created for the [CP/M](https://www.digitalresearch.biz/CPM.HTM) operating system. It facillitated initializing and communication with hardware components other than the CPU.

The [Intel 8080](https://en.wikipedia.org/wiki/Intel_8080) machines it was designed to run on were only 8-bit, to show how much more primitive the systems BIOS was designed for were.

The original BIOS was contained in true Read-Only Memory baked into the motherboard, so it couldn't be changed without replacing the chip it was stored on. Machines back then weren't as madular and upgradeable as many modern PCs, and they mostly didn't have their own onboard firmware like they do now, so the BIOS could handle everything on its own. Any configuration you wanted to do on early BIOS had to be done using physical [DIP switches](https://en.wikipedia.org/wiki/DIP_switch), although later iterations would replace this with an BIOS setup utility controlled with a keyboard, similar to what we have on modern computers.

As you can imagine, the more devices you had, the more chances for something to go wrong and stop the boot from completing and the longer each boot would take.

## UEFI

In order to facilitate the increasing complexity of firmware and components on the motherboard, Intel created the [Extensible Firmware Interface](https://www.intel.com/content/www/us/en/content-details/841643/basic-instructions-for-using-the-extensible-firmware-interface-efi-for-server-configuration-on-intel-server-boards-and-intel-server-systems.html). In 2005, the [UEFI Forum](https://uefi.org) was formed to make the standard more open and allow broader industry participation and development of the standard.

UEFI defines a standard interface for communication between firmware and the operating system, as well as adding some improvements over BIOS.

Some of these improvements include support for drives larger than 2 terabytes, support for graphical user interfaces in the setup utility with mouse support, support for initializing hardware devices in parallel instead of one after the other, significantly improving boot times, and support for running in 64 bit instead of 16 bit mode.

### Secure Boot

Along with all of this, UEFI also supports [Secure Boot](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-secure-boot-key-creation-and-management-guidance?view=windows-11), security feature that allows you to verify the firmware, bootloader, and OS hasn't been tampered with.

Secure Boot relies on public key infrastructure (PKI) to validate these components.

It uses key chaining, with the keys verifying the keys further down the chain.

``` mermaid
graph LR
  A[Platform Key] -Sign-> B[Key Exchange Key];
  B -Sign-> C[Signature Database];
  B -Sign-> D[Revoked Signature Database];
  E[Secure Firmware Update Key]
```

The PK acts as the root of trust for the KEK which in turn verifies both the signature database and revoked signature database. They're all stored in non-volatile memory (NVRAM) so they can be erased and replaced with different keys if desired.

The secure firmware update key is typically stored in such a way that it's non-writable and protected by hardware, that way in order to flash new firmware, you always need to verify that the firmware is signed by the OEM. This process is separate from Secure Boot.

The design of UEFI Secure Boot allows for users to delete the keys all the way up to the PK (root of trust) and use their own keys if they want, so that's another reason the secure firmware update key is typically different than the PK.

Deleting the PK typically puts the system into Setup Mode, where you'll need to enroll a new PK.

The PK allows updates to the KEK and by extension the signature databases so erasing it effectively disables Secure Boot until a new key is added.

Microsoft provides its own PK for OEMs to use if they don't want the responsibilty of managing the keys themselves. They also provide their own KEK via their KEK certificate authority. For Windows, it's required in order to update the database for newer signed images of Windows.

It also allows booting into non-Microsoft bootloaders like shim, allowing many Linux distributions to support secure boot without any extra configuration.

#### Attack Surface

Since the Microsoft KEK CA allows so many different bootloaders to run by default, it allows more attack surface than many users desire. You can use your own machine owner key (MOK) (and delete the default keys) so that only your own bootloader and/or custom kernel module will be allowed to load. Usually this is provided by your distribution.

Usually, Secure Boot only covers the UEFI firmware, bootloader, and OS kernel, many peripneral devices like drives are left out of the process. This can mean a lot of extra attack surface depending on how many extra devices you have on your system. It also leaves out a lot of the operating system, so even if the kernel isn't compromised, any part of your OS outside the kernel could be, including any app you've installed. There's room for improvement to make Secure Boot work all the way down to the application level, similar to how it works on mobile operating sytems like Android and iOS, where all running software is required to be signed.

## Measured Boot

[Measured Boot](https://learn.microsoft.com/en-us/windows/compatibility/measured-boot) take a bit of different approach. Instead of ensuring the loaded firmware, bootloader, and kernel are properly signed, it records a hash of each boot component.

The measurements are hash-chained together by incrementally adding the previously hashed measurements to the next measurement's hash and running the hashing algorithm on the union of the two.

The hashes are recorded safely in the [TPM](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview) of the device, and a trusted third party can verify that the hash is correct and hasn't been tampered with.

## Trusted Boot

[Trusted Boot](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/trusted-boot#trusted-boot) is a Windows-specific feature and essentially picks up where Secure Boot leaves off. The Windows bootloader verifies the kernel, then the kernel verifies every other part of the startup process including boot drivers, startup files, and early launch anti-malware driver of your anti-malware software.

Similarly to Secure Boot, if Trusted Boot detects any of these components are tampered with, it refuses to load it. Windows can even repair corrupted components a lot of the time.

## Verified Boot

[Verified Boot](https://source.android.com/docs/security/features/verifiedboot/) is more robust than secure boot and strives to ensure that all executed code that's part of the Android version being used are cryptographically verified. This includes the kernel, the [device tree](https://source.android.com/docs/core/architecture/dto), the system partition, the vendor partition, etc.

Verified Boot is mainly used by Android and [ChromeOS](https://www.chromium.org/chromium-os/chromiumos-design-docs/verified-boot/), although Apple's version of "[secure boot](https://support.apple.com/guide/security/boot-process-for-iphone-and-ipad-devices-secb3000f149/1/web/1)" is more akin to Verified Boot.

## What does the future hold?

There's been greater adoption of boot authentication technologies like secure boot across desktop and mobile systems which is great to see.

### Enabled by Default

However, in my opinion, it hasn't gone far enough. Most motherboard manufacturers still support legacy boot modes that aren't compatible with Secure Boot, and likely because of this and issues with many Linux distros and Secure Boot, it typically comes disabled by default. This means that a significant number of computer owners are running their system without any type of boot authentication, a massive security risk.

It would be nice to see a greater push toward making Secure Boot more compatible with more operating systems, dropping legacy boot support, and eventually enabling Secure Boot by default in as many systems as possible. Of course, still allowing the user to enroll their own keys.

### Expansion into More Devices

As it is, boot authentication is mostly limited to regular computers and phones. But we live in 2025, the year of the "smart fridge", so with all the IoT devices in our homes, we need all the security we can get.

In a rare bit of good news, some manufacturers like Samsung are starting to incorporate the same [security technology](https://news.samsung.com/global/samsung-electronics-becomes-the-company-with-the-largest-number-of-level-diamond-iot-security-rating-verifications-by-ul-solutions-in-the-home-appliances-industry) such as their [Knox](https://www.samsungknox.com/en/secured-by-knox) into their appliances, which includes secure boot.

To me this marks a turning point from manufacturers of IoT products not caring about security at all to beginning to implement some basic improvements. Now, I still won't tell anyone to get a smart fridge, but if you do, at least it'll be more secure than before.

UL is an organization that does certification for companies and products, and their [IoT security certification](https://www.ul.com/resources/lot-security-rating-levels-guide) seems like a good indicator to go on if you want more secure IoT devices, especially since the description of the Diamond tier seems to suggest it requires some form of secure boot.

### Secure Boot in Cars

One of the most complex pieces of electronic equipment and also the most potentially deadly is cars.

Modern cars typically contain over 100 million lines of code, which is more than a passenger jet. A *lot* more.

This poses a problem when any component malfunctioning or being hacked could lead to property damage or deaths. Luckily, new standards like [ISO/SAE 21434:2021](https://www.iso.org/standard/70918.html) exist to provide guidance on best practices for automotive manufacturers.

Secure boot and [hardware security modules](https://www.vector.com/int/en/products/products-a-z/embedded-software/microsar-hsm/) for automotives are becoming more common. I think we're going to eventually see similar security to phones on our cars at some point. There does seem to be a genuine push toward more security.

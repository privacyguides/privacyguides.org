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

For devices with onboard firmware, you typically had option ROMs, which were on physical expansion cards you bought and plugged into your motherboard. The BIOS would detect these and run them during the boot process. The BIOS would initialize each device one after another, so it would temporarily hand control over to these option ROMs and rely on them to hand back control when they were done.

As you can imagine, the more devices you had, the more chances for something to go wrong and stop the boot from completing and the longer each boot would take.

## UEFI

In order to facilitate the increasing complexity of firmware and components on the motherboard, Intel created the [Extensible Firmware Interface](https://www.intel.com/content/www/us/en/content-details/841643/basic-instructions-for-using-the-extensible-firmware-interface-efi-for-server-configuration-on-intel-server-boards-and-intel-server-systems.html). In 2005, the [UEFI Forum](https://uefi.org) was formed to make the standard more open and allow broader industry participation and development of the standard.

UEFI defines a standard interface for communication between firmware and the operating system, as well as adding some improvements over BIOS.

Some of these improvements include support for drives larger than 2 terabytes, support for graphical user interfaces in the setup utility with mouse support, support for initializing hardware devices in parallel instead of one after the other, significantly improving boot times, and support for running in 64 bit instead of 16 bit mode.

### Secure Boot

Along with all of this, UEFI also supports Secure Boot, security feature that allows you to verify the firmware, bootloader, and OS hasn't been tampered with.

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

### Measured Boot

[Measured Boot](https://learn.microsoft.com/en-us/windows/compatibility/measured-boot) take a bit of different approach. Instead of ensuring the loaded firmware, bootloader, and kernel are properly signed, it records a hash of each boot component.

The measurements are hash-chained together by incrementally adding the previously hashed measurements to the next measurement's hash and running the hashing algorithm on the union of the two.

The hashes are recorded safely in the [TPM](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview) of the device, and a trusted third party can verify that the hash is correct and hasn't been tampered with.
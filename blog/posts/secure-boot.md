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

## UEFI

In order to facilitate the increasing complexity of firmware and components on the motherboard, 
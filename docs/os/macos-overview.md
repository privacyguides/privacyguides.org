---
title: macOS Overview
icon: simple/macos
description: macOS is Apple's desktop operating system that works with their hardware to provide strong security.
---
macOS provides great security out-of-the-box. With some tweaks, you can tailor it to your privacy needs.

## Hardware

Security features like Verified Boot rely on Apple's hardware to function properly. For this reason, we recommend you only run it on Macs and avoid hackintoshes.

Apple's newer hardware always has the best security; you should check to make sure the Mac you're buying has at least their M1 chip, as their intel Macs are vulnerable to the [checkm8](https://www.theiphonewiki.com/wiki/Checkm8_Exploit) exploit.

If you use bluetooth accessories such as a keyboard, we recommend that you use official Apple ones as their firmware will automatically be updated for you by macOS. Using third party accessories is fine, but you should remember to install firmware updates for them regularly.

Apple's SoC's focus on minimizing attack surface by religating security functions to dedicated hardware with limited functionality.

### Boot ROM

macOS prevents malware persistence by only allowing official Apple software to run at boot time; this is known as secure boot. Macs verify this with a bit of Read-Only Memory on the SoC called the Boot ROM, which is laid down during the manufacturing of the chip.

The Boot ROM forms the hardware root of trust. This ensures that malware cannot tamper with the boot process.

### Secure Enclave

The Secure Enclave is a security chip built into Apple's devices
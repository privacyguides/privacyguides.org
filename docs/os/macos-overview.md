---
title: macOS Overview
icon: simple/macos
description: macOS is Apple's desktop operating system that works with their hardware to provide strong security.
---
macOS provides great security out-of-the-box. With some tweaks, you can tailor it to your privacy needs.

## Hardware

Security features like Verified Boot rely on Apple's hardware to function properly. For this reason, we recommend you only run it on Macs and avoid hackintoshes.

Apple's newer hardware always has the [best security](https://support.apple.com/guide/security/apple-soc-security-sec87716a080/1/web/1); you should check to make sure the Mac you're buying has at least their M1 chip, as their Intel Macs are vulnerable to the [checkm8](https://www.theiphonewiki.com/wiki/Checkm8_Exploit) exploit.

If you use Bluetooth accessories such as a keyboard, we recommend that you use official Apple ones as their firmware will automatically be updated for you by macOS. Using third party accessories is fine, but you should remember to install firmware updates for them regularly.

Apple's SoCs focus on minimizing attack surface by relegating security functions to dedicated hardware with limited functionality.

### Boot ROM

macOS prevents malware persistence by only allowing official Apple software to run at boot time; this is known as secure boot. Macs verify this with a bit of Read-Only Memory on the SoC called the Boot ROM, which is laid down during the manufacturing of the chip.

The Boot ROM forms the hardware root of trust. This ensures that malware cannot tamper with the boot process. When your Mac boots up, the boot ROM is the first thing that runs, forming the first link in the chain of trust.

Macs can be configured to boot in three security modes: *Full Security*, *Reduced Security*, and *Permissive Security*. You should ideally be using Full Security mode, but using things like kernel extensions can require a lower security mode. Make sure to [check](https://support.apple.com/guide/mac-help/change-security-settings-startup-disk-a-mac-mchl768f7291/mac) that you're using the highest security mode you can.

### Secure Enclave

The Secure Enclave is a security chip built into Apple's devices that's responsible for storing and generating encryption keys for data at reast as well as Face ID and Touch ID data. It contains its own separate boot ROM.
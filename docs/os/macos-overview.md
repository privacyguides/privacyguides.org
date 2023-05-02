---
title: macOS Overview
icon: material/apple-finder
description: macOS is Apple's desktop operating system that works with their hardware to provide strong security.
---
macOS provides great security out-of-the-box. With some tweaks, you can tailor it to your privacy needs.

## Recommended Configuration

By default, your account when you first set up your Mac will be an Administrator account, which has higher privileges than a standard user account. Apple [recommends](https://support.apple.com/guide/mac-help/set-up-your-mac-to-be-secure-flvlt003/mac#mchlp6f0f578) setting up a standard user account for yourself that you use when you don't need Administrator privileges (which is most of the time).

Open the Settings app.

### Bluetooth

- [ ] Uncheck **Bluetooth** (unless you are currently using it)

### Network

Depending on if you are using **Wi-Fi** or **ethernet** (denoted by a green dot and the word "connected"), click on the corresponding icon.

Click on the "Details" button by your network name.

- [x] Check **Limit IP address tracking**

**Firewall**

Your firewall blocks unwanted network connections. The stricter your firewall settings are, the more secure your Mac is. However, certain services will be blocked. You should configure your firewall to be as strict as you can without blocking services you use.

- [x] Check **Firewall**

Click the **Options** button

- [x] Check **Block all incoming connections**

If this configuration is too strict, you can come back and uncheck this.

### General

By default, your device name will be something like "Jerry's iMac". You'll want to change your device name to something generic like "Mac".

Click on **About** and type your desired device name into the **Name** field.

**Software Updates**

You should automatically install all available updates to make sure your Mac has the latest security fixes.

Click the small **i** icon next to **Automatic Updates**

- [x] Check **Check for updates**

- [x] Check **Download new updates when available**

- [x] Check **Install macOS updates**

- [x] Check **Install application updates from the App Store**

- [x] Check **Install Security Responses and system files**

### Privacy & Security

Whenever an application requests a permission, it will show up here. You can decide which applications you want to allow or deny specific permissions.

**Location Services**

You can individaully allow location services per-app. Turning off location services system-wide is the most private option.

- [ ] Uncheck **Location Services**

**Analytics & Improvements**

Decide whether you want to share analytics data with Apple and developers.

- [ ] Uncheck **Share Mac Analytics**

- [ ] Uncheck **Improve Siri & Dictation**

- [ ] Uncheck **Share with app developers**

**Apple Advertising**

Decide whether you want personalized ads based on your usage.

- [ ] Uncheck **Personalized Ads**

**Security**

If you don't need non-App Store apps

- [x] Select **App Store**

**Filevault**

Filevault will make it so you need a password to access data on your drive.

- [x] Click **Turn On**

**Lockdown Mode**

Lockdown Mode disables some features in order to improve security. Some apps or features won't work the same way they do when it's off.

- [x] Click **Turn On**

## Software

### Signed System Volume

macOS's system components are protected in a read-only signed system volume, meaning that neither you nor malware can alter important system files.

The system volume is verified while it's running and any data that's not signed with a valid cryptographic signature from Apple will be rejected.

### System Integrity Protection

macOS sets certain security restrictions that can't be overridden. These are called Mandatory Access Controls, and they form the basis of the sandbox, parental controls, and System Integrity Protection on macOS.

System Integrity Protection makes critical file locations read-only to protect against modification from malicious code. This is on top of the hardware-based Kernel Integrity Protection that keeps the kernel from being modified in-memory.

### Rosetta

Rosetta is a translation layer that lets you run programs for Intel Macs on Apple silicon Macs. Installing Rosetta increases your attack surface, so you should only do so if you really need it.

### Data Protection

In Macs with Apple silicon, your data is always stored encrypted with [Class C](https://support.apple.com/guide/security/data-protection-classes-secb010e978a/1/web/1) Data Protection.

You can enable **Filevault** to require a password to decrypt your drive.

### Application Security

macOS apps downloaded from the App Store are required to be sandboxed.

!!! warning

    Software downloaded from outside the official App Store is not required to be sandboxed. You should avoid non-App Store software as much as possible.

macOS comes with built-in antivirus software called XProtect. ==We recommend that you **do not** install third-party antivirus software, as it is a major privacy and security concern==.

## Hardware

Many security features in macOS like Secure Boot rely on Apple's hardware to function properly. For this reason, ==we recommend you only run it on Macs and avoid Hackintoshes==.

Apple's newer hardware always has the [best security](https://support.apple.com/guide/security/apple-soc-security-sec87716a080/1/web/1); you should check to make sure the Mac you're buying has at least their M1 chip, as their Intel Macs are vulnerable to the [checkm8](https://www.theiphonewiki.com/wiki/Checkm8_Exploit) exploit.

If you use Bluetooth accessories such as a keyboard, we recommend that you use official Apple ones as their firmware will automatically be updated for you by macOS. Using third party accessories is fine, but you should remember to install firmware updates for them regularly.

Apple's SoCs focus on minimizing attack surface by relegating security functions to dedicated hardware with limited functionality.

### Boot ROM

macOS prevents malware persistence by only allowing official Apple software to run at boot time; this is known as secure boot. Macs verify this with a bit of read-only memory on the SoC called the boot ROM, which is laid down during the manufacturing of the chip.

The boot ROM forms the hardware root of trust. This ensures that malware cannot tamper with the boot process. When your Mac boots up, the boot ROM is the first thing that runs, forming the first link in the chain of trust.

Macs can be configured to boot in three security modes: *Full Security*, *Reduced Security*, and *Permissive Security*, with the default setting being Full Security. You should ideally be using Full Security mode and avoid things like **kernel extensions** that force you to lower your security mode. Make sure to [check](https://support.apple.com/guide/mac-help/change-security-settings-startup-disk-a-mac-mchl768f7291/mac) that you're using Full Security mode.

### Secure Enclave

The Secure Enclave is a security chip built into Apple's devices that's responsible for storing and generating encryption keys for data at reast as well as Face ID and Touch ID data. It contains its own separate boot ROM.

It's separated from the rest of the system, so even if the main processor is compromised, it should still be safe.

You can think of the Secure Enclave as your device's security hub: it has an AES encryption engine and a mechanism to securely store your encryption keys.

### Touch ID

Apple's Touch ID feature allows you to securely unlock your devices using biometrics.

Your biometric data never leaves your device; it's stored only in the Secure Enclave.

### Hardware Microphone Disconnect

All Apple silicon MacBooks feature a hardware disconnect for the inbuilt microphone whenever the lid is closed. This means that there is no way for an attacker to listen to your Mac's microphone even if the operating system is compromised.

Note that the camera does not have a hardware disconnect, since its view is obscured when the lid is closed anyway.

### Peripheral Processor Security

Computers have built-in processors other than the main CPU that handle things like networking, graphics, power management, etc. These processors can have insufficient security and become compromised, therefore Apple tries to minimize the need for these processors in their hardware.

When it is necessary to use one of these processors, Apple works with the vendor to ensure that the processor

- runs verified firmware from the primary CPU on startup
- has its own Secure Boot chain
- follows minimum cryptographic standards
- doesn't run known bad firmware
- has its debug interfaces disabled
- is signed with Apple's cryptographic keys

### Direct Memory Access Protections

Apple silicon SoCs contain an IOMMU to separate each component that requires direct memory access. For example, a Thunderbolt port can't access memory designated for the kernel.


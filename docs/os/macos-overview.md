---
title: macOS Overview
icon: material/apple-finder
description: macOS is Apple's desktop operating system that works with their hardware to provide strong security.
---
**macOS** is a Unix operating system developed by Apple for their Mac computers. To enhance privacy on macOS, you can disable telemetry features and harden existing privacy and security settings.

Older Intel-based Macs and Hackintoshes do not support all the security features that macOS offers. To enhance data security, we recommend using a newer Mac with [Apple silicon](https://support.apple.com/HT211814).

## Privacy Notes

There are a few notable privacy concerns with macOS that you should consider. These pertain to the operating system itself, and not Apple's other apps and services.

### Activation Lock

Brand new Apple silicon devices can be set up without an internet connection. However, recovering or resetting your Mac will **require** an internet connection to Apple's servers to check against the Activation Lock database of lost or stolen devices.

### App Revocation Checks

macOS performs online checks when you open an app to verify whether an app contains known malware, and whether the developer’s signing certificate is revoked.

Previously, these checks were performed via an unencrypted OCSP protocol which could leak information about the apps you ran to your network. Apple upgraded their OCSP service to use HTTPS encryption in 2021, and [posted information](https://support.apple.com/HT202491) about their logging policy for this service. They additionally promised to add a mechanism for people to opt-out of this online check, but this has not been added to macOS as of July 2023.

While you [can](https://eclecticlight.co/2021/02/23/how-to-run-apps-in-private) manually opt out of this check relatively easily, we recommend against doing so unless you would be badly compromised by the revocation checks performed by macOS, because they serve an important role in ensuring compromised apps are blocked from running.

## Recommended Configuration

Your account when you first set up your Mac will be an Administrator account, which has higher privileges than a Standard user account. macOS has a number of protections which prevent malware and other programs from abusing your Administrator privileges, so it is generally safe to use this account.

However, exploits in protective utilities like `sudo` have been [discovered in the past](https://bogner.sh/2014/03/another-mac-os-x-sudo-password-bypass). If you want to avoid the possibility that programs you run abuse your Administrator privileges, you could consider creating a second, Standard user account which you use for day-to-day operations. This has the added benefit of making it more obvious when an app needs admin access, because it will prompt you for credentials every time.

If you do use a second account, it is not strictly required to ever log in to your original Administrator account from the macOS login screen. When you are doing something as a Standard user which requires Administrator permissions, the system should prompt you for authentication, where you can enter your Administrator credentials as your Standard user on a one-time basis. Apple provides [guidance](https://support.apple.com/HT203998) on hiding your Administrator account if you prefer to only see a single account on your login screen.

Alternatively, you can use a utility like [macOS Enterprise Privileges](https://github.com/SAP/macOS-enterprise-privileges) to escalate to Administrator rights on-demand, but this may be vulnerable to some undiscovered exploit, like all software-based protections.

### iCloud

The majority of privacy and security concerns with Apple products are related to their *cloud services*, not their hardware or software. When you use Apple services like iCloud, most of your information is stored on their servers and secured with keys *which Apple has access to* by default. This level of access has occasionally been abused by law enforcement to get around the fact that your data is otherwise securely encrypted on your device, and of course Apple is vulnerable to data breaches like any other company.

Therefore, if you use iCloud you should [enable **Advanced Data Protection**](https://support.apple.com/HT212520). This encrypts nearly all of your iCloud data with keys stored on your devices (end-to-end encryption), rather than Apple's servers, so that your iCloud data is secured in the event of a data breach, and otherwise hidden from Apple.

### System Settings

There are a number of built-in settings you should confirm or change to harden your system. Open the **Settings** app:

#### Bluetooth

- [ ] Uncheck **Bluetooth** (unless you are currently using it)

#### Network

Depending on if you are using **Wi-Fi** or **Ethernet** (denoted by a green dot and the word "connected"), click on the corresponding icon.

Click on the "Details" button by your network name:

- [x] Check **Limit IP address tracking**

##### Firewall

Your firewall blocks unwanted network connections. The stricter your firewall settings are, the more secure your Mac is. However, certain services will be blocked. You should configure your firewall to be as strict as you can without blocking services you use.

- [x] Check **Firewall**

Click the **Options** button:

- [x] Check **Block all incoming connections**

If this configuration is too strict, you can come back and uncheck this. However, macOS will typically prompt you to allow incoming connections for an app if the app requests it.

#### General

By default, your device name will be something like "[your name]'s iMac". Because this name is publicly broadcast on your network, you'll want to change your device name to something generic like "Mac".

Click on **About** and type your desired device name into the **Name** field.

##### Software Updates

You should automatically install all available updates to make sure your Mac has the latest security fixes.

Click the small :material-information-outline: icon next to **Automatic Updates**:

- [x] Check **Check for updates**

- [x] Check **Download new updates when available**

- [x] Check **Install macOS updates**

- [x] Check **Install application updates from the App Store**

- [x] Check **Install Security Responses and system files**

#### Privacy & Security

Whenever an application requests a permission, it will show up here. You can decide which applications you want to allow or deny specific permissions.

##### Location Services

You can individually allow location services per-app. If you don't need apps to use your location, turning off location services entirely is the most private option.

- [ ] Uncheck **Location Services**

##### Analytics & Improvements

Decide whether you want to share analytics data with Apple and developers.

- [ ] Uncheck **Share Mac Analytics**

- [ ] Uncheck **Improve Siri & Dictation**

- [ ] Uncheck **Share with app developers**

- [ ] Uncheck **Share iCloud Analytics** (visible if you are signed in to iCloud)

##### Apple Advertising

Decide whether you want personalized ads based on your usage.

- [ ] Uncheck **Personalized Ads**

##### FileVault

On modern devices with a Secure Enclave (Apple T2 Security Chip, Apple silicon), your data is always encrypted, but is decrypted automatically by a hardware key if your device doesn't detect it's been tampered with. Enabling FileVault additionally requires your password to decrypt your data, greatly improving security, especially when powered off or before the first login after powering on.

On older Intel-based Mac computers, FileVault is the only form of disk encryption available by default, and should always be enabled.

- [x] Click **Turn On**

##### Lockdown Mode

[Lockdown Mode](https://blog.privacyguides.org/2022/10/27/macos-ventura-privacy-security-updates/#lockdown-mode) disables some features in order to improve security. Some apps or features won't work the same way they do when it's off, for example, [JIT](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers) and [WASM](https://developer.mozilla.org/docs/WebAssembly) are disabled in Safari with Lockdown Mode enabled. We recommend enabling Lockdown Mode and seeing whether it significantly impacts your usage, many of the changes it makes are easy to live with.

- [x] Click **Turn On**

### MAC Address Randomization

macOS uses a randomized MAC address when performing Wi-Fi scans while disconnected from a network. However, when you connect to a preferred Wi-Fi network, the MAC address used is never randomized. Full MAC address randomization is an advanced topic, and most people don't need to worry about performing the following steps.

Unlike iOS, macOS doesn't give you an option to randomize your MAC address in the settings, so if you wish to change this identifier, you'll need to do it with a command or a script. To set a random MAC address, first disconnect from the network if you're already connected, then open **Terminal** and enter this command to randomize your MAC address:

``` zsh
openssl rand -hex 6 | sed 's/^\(.\{1\}\)./\12/; s/\(..\)/\1:/g; s/.$//' | xargs sudo ifconfig en0 ether
```

`en0` is the name of the interface you're changing the MAC address for. This might not be the right one on every Mac, so to check you can hold the option key and click the Wi-Fi symbol at the top right of your screen. "Interface name" should be displayed at the top of the dropdown menu.

This command sets your MAC address to a randomized, "locally administered" address, matching the behavior of iOS, Windows, and Android's MAC address randomization features. This means that every character in the MAC address is fully randomized except the second character, which denotes the MAC address as *locally administered* and not in conflict with any actual hardware. This method is most compatible with modern networks. An alternative method is to set the first six characters of the MAC address to one of Apple's existing *Organizational Unique Identifiers*, which we'll leave as an exercise to the reader. That method is more likely to conflict with some networks, but may be less noticeable. Given the prevalence of randomized, locally administered MAC addresses in other modern operating systems, we don't think either method has significant privacy advantages over the other.

When you connect to the network again, you'll connect with a random MAC address. This will be reset on reboot.

Your MAC address is not the only unique information about your device which is broadcast on the network, your hostname is another piece of information which could uniquely identify you. You may wish to set your hostname to something generic like "MacBook Air", "Laptop", "John's MacBook Pro", or "iPhone" in **System Settings** > **General** > **Sharing**. Some [privacy scripts](https://github.com/sunknudsen/privacy-guides/tree/master/how-to-spoof-mac-address-and-hostname-automatically-at-boot-on-macos#guide) allow you to easily generate hostnames with random names.

## Security Protections

macOS employs defense in depth by relying on multiple layers of software and hardware-based protections, with different properties. This ensures that a failure in one layer does not compromise the system's overall security.

### Software Security

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

macOS allows you to install beta updates. These are unstable and may come with extra telemetry since they're for testing purposes. Because of this, we recommend you avoid beta software in general.

</div>

#### Signed System Volume

macOS's system components are protected in a read-only signed system volume, meaning that neither you nor malware can alter important system files.

The system volume is verified while it's running and any data that's not signed with a valid cryptographic signature from Apple will be rejected.

#### System Integrity Protection

macOS sets certain security restrictions that can't be overridden. These are called Mandatory Access Controls, and they form the basis of the sandbox, parental controls, and System Integrity Protection on macOS.

System Integrity Protection makes critical file locations read-only to protect against modification from malicious code. This is on top of the hardware-based Kernel Integrity Protection that keeps the kernel from being modified in-memory.

#### Application Security

##### App Sandbox

macOS apps submitted to the App Store after June 1, 2012 are required to be sandboxed using the [App Sandbox](https://developer.apple.com/documentation/security/app_sandbox).

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

Software downloaded from outside the official App Store is not required to be sandboxed. You should avoid non-App Store software as much as possible.

</div>

##### Antivirus

macOS comes with two forms of malware defense:

1. Protection against launching malware in the first place is provided by the App Store's review process for App Store applications, or *Notarization* (part of *Gatekeeper*), a process where third-party apps are scanned for known malware by Apple before they are allowed to run.
2. Protection against other malware and remediation from existing malware on your system is provided by *XProtect*, a more traditional antivirus software built-in to macOS.

We recommend against installing third-party antivirus software as they typically do not have the system-level access required to properly function anyways, because of Apple's limitations on third-party apps, and because granting the high levels of access they do ask for often poses an even greater security and privacy risk to your computer.

##### Backups

macOS comes with automatic backup software called [Time Machine](https://support.apple.com/HT201250), so you can create encrypted backups to an external or network drive in the event of corrupted/deleted files.

### Hardware Security

Many modern security features in macOS—such as modern Secure Boot, hardware-level exploit mitigation, OS integrity checks, and file-based encryption—rely on Apple silicon, and Apple's newer hardware always has the [best security](https://support.apple.com/guide/security/apple-soc-security-sec87716a080/1/web/1). We only encourage the use of Apple silicon, and not older Intel-based Mac computers or Hackintoshes.

Some of these modern security features are available on older Intel-based Mac computers with the Apple T2 Security Chip, but that chip is susceptible to the *checkm8* exploit which could compromise its security.

If you use Bluetooth accessories such as a keyboard, we recommend that you use official Apple ones as their firmware will automatically be updated for you by macOS. Using third party accessories is fine, but you should remember to install firmware updates for them regularly.

Apple's SoCs focus on minimizing attack surface by relegating security functions to dedicated hardware with limited functionality.

#### Boot ROM

macOS prevents malware persistence by only allowing official Apple software to run at boot time; this is known as secure boot. Mac computers verify this with a bit of read-only memory on the SoC called the boot ROM, which is laid down during the manufacturing of the chip.

The boot ROM forms the hardware root of trust. This ensures that malware cannot tamper with the boot process. When your Mac boots up, the boot ROM is the first thing that runs, forming the first link in the chain of trust.

Mac computers can be configured to boot in three security modes: *Full Security*, *Reduced Security*, and *Permissive Security*, with the default setting being Full Security. You should ideally be using Full Security mode and avoid things like **kernel extensions** that force you to lower your security mode. Make sure to [check](https://support.apple.com/guide/mac-help/change-security-settings-startup-disk-a-mac-mchl768f7291/mac) that you're using Full Security mode.

#### Secure Enclave

The Secure Enclave is a security chip built into devices with Apple silicon which is responsible for storing and generating encryption keys for data at rest as well as Face ID and Touch ID data. It contains its own separate boot ROM.

You can think of the Secure Enclave as your device's security hub: it has an AES encryption engine and a mechanism to securely store your encryption keys, and it's separated from the rest of the system, so even if the main processor is compromised, it should still be safe.

#### Touch ID

Apple's Touch ID feature allows you to securely unlock your devices using biometrics.

Your biometric data never leaves your device; it's stored only in the Secure Enclave.

#### Hardware Microphone Disconnect

All laptops with Apple silicon or the T2 chip feature a hardware disconnect for the built-in microphone whenever the lid is closed. This means that there is no way for an attacker to listen to your Mac's microphone even if the operating system is compromised.

Note that the camera does not have a hardware disconnect, since its view is obscured when the lid is closed anyway.

#### Peripheral Processor Security

Computers have built-in processors other than the main CPU that handle things like networking, graphics, power management, etc. These processors can have insufficient security and become compromised, therefore Apple tries to minimize the need for these processors in their hardware.

When it is necessary to use one of these processors, Apple works with the vendor to ensure that the processor

- runs verified firmware from the primary CPU on startup
- has its own Secure Boot chain
- follows minimum cryptographic standards
- ensures known bad firmware is properly revoked
- has its debug interfaces disabled
- is signed with Apple's cryptographic keys

#### Direct Memory Access Protections

Apple silicon separates each component that requires direct memory access. For example, a Thunderbolt port can't access memory designated for the kernel.

## Sources

- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)

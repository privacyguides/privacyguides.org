---
title: "Choosing Your Hardware"
icon: 'material/chip'
description: Software isn't all that matters; learn about the hardware tools you use every day to protect your privacy.
---

When it comes to discussions about privacy, hardware is often not thought about as much as what software we use. Your hardware should be considered the foundation on which you build the rest of your privacy setup.

## Picking a Computer

The internals of your devices process and store all of your digital data. It is important that all devices are supported by the manufacturer and developers by continuing to receive security updates.

### Hardware Security Programs

Some devices will have a "hardware security program", which is a collaboration between vendors on best practices and recommendations when designing hardware, for example:

- [Windows Secured-core PCs](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-highly-secure-11) meet a higher security criteria specified by Microsoft. These protections aren't only applicable to Windows users; Users of other operating systems can still take advantage of features like [DMA protection](https://learn.microsoft.com/en-us/windows/security/information-protection/kernel-dma-protection-for-thunderbolt) and the ability to completely distrust Microsoft certificates.
- [Android Ready SE](https://developers.google.com/android/security/android-ready-se) is a collaboration between vendors to ensure their devices follow [best practices](https://source.android.com/docs/security/best-practices/hardware) and include tamper resistant hardware backed storage for things like encryption keys.
- macOS running on an Apple SoC takes advantage of [hardware security](../os/macos-overview.md#hardware-security) which may not be available with third party operating systems.
- [ChromeOS security](https://chromium.org/chromium-os/developer-library/reference/security/security-whitepaper) is at its best when running on a Chromebook as it is able to make use of available hardware features such as the [hardware root-of-trust](https://chromium.org/chromium-os/developer-library/reference/security/security-whitepaper/#hardware-root-of-trust-and-verified-boot).

Even if you don't use these operating systems, participation in these programs may indicate that the manufacturer is following best practices when it comes to hardware security and updates.

### Preinstalled OS

New computers nearly always come with Windows preinstalled, unless you buy a Mac or a specialty Linux machine. It's usually a good idea to wipe the drive and install a fresh copy of your operating system of choice, even if that means just reinstalling Windows from scratch. Due to agreements between hardware vendors and shady software vendors, the default Windows install often comes preloaded with bloatware, [adware](https://bleepingcomputer.com/news/technology/lenovo-gets-a-slap-on-the-wrist-for-superfish-adware-scandal), or even [malware](https://zdnet.com/article/dell-poweredge-motherboards-ship-with-malware).

### Firmware Updates

Hardware often has security issues that are discovered and patched through firmware updates for your hardware.

Almost every component of your computer requires firmware to operate, from your motherboard to your storage devices. It is ideal for all the components of your device to be fully supported. Apple devices, Chromebooks, most Android phones, and Microsoft Surface devices will handle firmware updates for you as long as the device is supported.

If you build your own PC, you may need to manually update your motherboard's firmware by downloading it from your OEM's website. If you use Linux, consider using the built-in [`fwupd`](https://fwupd.org) tool that will let you check for and apply any firmware updates available for your motherboard.

### TPM/Secure Cryptoprocessor

Most computers and phones come equipped with a TPM (or a similar secure cryptoprocessor) which safely stores your encryption keys and handles other security-related functions. If you're currently using a machine that doesn't have one of these, you might benefit from purchasing a newer computer that has this feature. Some desktop and server motherboards have a "TPM header" which can accept a small accessory board containing the TPM.

<div class="admonition Note" markdown>
<p class="admonition-title">Note</p>

Virtual TPMs are susceptible to side-channel attacks and external TPMs, as a result of being separate from the CPU on the motherboard, are vulnerable to [sniffing](https://pulsesecurity.co.nz/articles/TPM-sniffing) when an attacker has access to the hardware. The solution to this problem is to include the secure processor inside the CPU itself, which is the case for Apple's chips and Microsoft's [Pluton](https://microsoft.com/en-us/security/blog/2020/11/17/meet-the-microsoft-pluton-processor-the-security-chip-designed-for-the-future-of-windows-pcs).

</div>

### Biometrics

Many devices come equipped with a fingerprint reader or face recognition capabilities. These can be very convenient, but they aren't perfect and sometimes fail. Most devices will fall back to a PIN or password when this happens, meaning that the security of your devices is still only as good as your password.

Biometrics can prevent someone from watching you type in your password, so if shoulder-surfing is part of your threat model then biometrics are a good option.

Most implementations of face authentication require you to be looking at your phone and also only work from a relatively close distance, so you don't need to worry too much about someone pointing your phone at your face to unlock it without your consent. You can still disable biometrics when your phone is locked if you want. On iOS, you can hold the side button and a volume button for 3 seconds to disable Face ID on models that support it. On Android, hold the power button and press Lockdown on the menu.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

Some devices do not have the proper hardware for secure face authentication. There's two main types of face authentication: 2D and 3D. 3D face authentication makes use of a dot projector that lets the device create a 3D depth map of your face. Make sure that your device has this capability.

</div>

Android defines three [security classes](https://source.android.com/docs/security/features/biometric/measure#biometric-classes) for biometrics; you should check that your device is Class 3 before enabling biometrics.

### Device Encryption

If your device is [encrypted](../encryption.md), your data is most secure when your device is completely powered off (as opposed to merely asleep), i.e. before you've entered your encryption key or lock screen password for the first time. On phones, this state of higher security is referred to as "Before First Unlock" (BFU), and "After First Unlock" (AFU) once you enter the correct password after a reboot/power-on. AFU is considerably less secure against digital forensics toolkits and other exploits, compared to BFU. Therefore, if you are concerned about an attacker with physical access to your device, you should turn it off fully whenever you aren't using it.

This may be impractical, so consider whether it's worth it, but in either case even AFU mode is effective against most threats, given you are using a strong encryption key.

## External Hardware

Some threats can't be protected against by your internal components alone. Many of these options are highly situational; please evaluate if they are really necessary for your threat model.

### Hardware Security Keys

Hardware keys are devices that use strong cryptography to authenticate you to a device or account. The idea is that because they can not be copied, you can use them to secure accounts in such a way that they can only be accessed with physical possession of the key, eliminating many remote attacks.

[Recommended Hardware Keys :material-arrow-right-drop-circle:](../security-keys.md){ .md-button .md-button--primary } [Learn More about Hardware Keys :material-arrow-right-drop-circle:](multi-factor-authentication.md#hardware-security-keys){ .md-button }

### Camera/Microphone

If you don't want to trust your OS's permission controls to prevent the camera from activating in the first place, you can buy camera blockers that physically prevent light from reaching the camera. You could also buy a device that doesn't have a built-in camera and use an external camera that you can unplug whenever you're done using it. Some devices come with built-in camera blockers or hardware switches that physically disconnect the camera from power.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

You should only buy covers that fit your laptop and won't cause damage when you close the lid. Covering the camera will interfere with automatic brightness and face authentication features.

</div>

For microphone access, in most cases you will need to trust your OS's built-in permission controls. Alternatively, buy a device that doesn't have a built-in microphone and use an external microphone that you can unplug when you're done using it. Some devices, like a [MacBook or an iPad](https://support.apple.com/guide/security/hardware-microphone-disconnect-secbbd20b00b/web), feature a hardware disconnect for the microphone when you close the lid.

Many computers have a BIOS option to disable the camera and microphone. When disabled there, the hardware won't even appear as a device on a booted system.

### Privacy Screens

Privacy screens are a film you can put over your normal screen so that the screen is only visible from a certain angle. These are good if your threat model includes others peeking at your screen, but it is not foolproof as anyone could just move to a different viewing angle and see what's on your screen.

### Dead Man's Switches

A dead man's switch stops a piece of machinery from operating without the presence of a human operator. These were originally designed as a safety measure, but the same concept can be applied to an electronic device to lock it when you're not present.

Some laptops are able to [detect](https://support.microsoft.com/en-us/windows/managing-presence-sensing-settings-in-windows-11-82285c93-440c-4e15-9081-c9e38c1290bb) when you're present and can lock automatically when you aren't sitting in front of the screen. You should check the settings in your OS to see if your computer supports this feature.

You can also get cables, like [Buskill](https://buskill.in), that will lock or wipe your computer when the cable is disconnected.

### Anti-Interdiction/Evil Maid Attack

The best way to prevent a targeted attack against you before a device is in your possession is to purchase a device in a physical store, rather than ordering it to your address.

Make sure your device supports secure boot/verified boot, and you have it enabled. Try to avoid leaving your device unattended whenever possible.

## Secure your Network

### Compartmentalization

Many solutions exist that allow you to separate what you're doing on a computer, such as virtual machines and sandboxing. However, the best compartmentalization is physical separation. This is useful especially for situations where certain software requires you to bypass security features in your OS, such as with anti-cheat software bundled with many games.

For gaming, it may be useful to designate one machine as your "gaming" machine and only use it for that one task. Keep it on a separate VLAN. This may require the use of a managed switch and a router that supports segregated networks.

Most consumer routers allow you to do this by enabling a separate "guest" network that can't talk to your main network. All untrusted devices can go here, including IoT devices like your smart fridge, thermostat, TV, etc.

### Minimalism

As the saying goes, "less is more". The fewer devices you have connected to your network, the less potential attack surface you'll have and the less work it will be to make sure they all stay up-to-date.

You may find it useful to go around your home and make a list of every connected device you have to help you keep track.

### Routers

Your router handles all your network traffic and acts as your first line of defense between you and the open internet.

<div class="admonition Note" markdown>
<p class="admonition-title">Note</p>

A lot of routers come with storage to put your files on so you can access them from any computer on your network. We recommend you don't use networking devices for things other than networking. In the event your router was compromised, your files would also be compromised.

</div>

The most important thing to think about with routers is keeping them up-to-date. Many modern routers will automatically install updates, but many others won't. You should check on your router's settings page for this option. That page can usually be accessed by typing `192.168.1.1` or `192.168.0.1` into the URL bar of any browser assuming you're on the same network. You can also check in the network settings of your OS for "router" or "gateway".

If your router does not support automatic updates, you will need to go to the manufacturer's site to download the updates and apply them manually.

Many consumer-grade routers aren't supported for very long. If your router isn't supported by the manufacturer anymore, you can check if it's supported by [FOSS firmware](../router.md). You can also buy routers that come with FOSS firmware installed by default; these tend to be supported longer than most routers.

Some ISPs provide a combined router/modem. It can be beneficial for security to purchase a separate router and set your ISP router/modem into modem-only mode. This way, even when your ISP-provided router is no longer getting updates, you can still get security updates and patches. It also means any problems that affect your modem won't affect your router and vice versa.

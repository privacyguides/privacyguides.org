---
title: "Hardware"
icon: 'material/chip'
description: Software isn't all that matters; learn about the hardware tools you use every day to protect your privacy.
---

When it comes to discussions about privacy, hardware often takes a backseat to software. Far from being an afterthought, your hardware should be considered the foundation on which you build the rest of your privacy setup.

## Internal Hardware

The internals of your devices process and store all of your digital data. You should make sure they are secure and up-to-date.

### Picking a Machine

A [Windows Secured-Core machine](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-highly-secure-11) ensures that it meets certain security criteria laid out by Microsoft. They don't only protect Windows users; users of other operating systems can still take advantage of things like [DMA protection](https://learn.microsoft.com/en-us/windows/security/information-protection/kernel-dma-protection-for-thunderbolt) and the ability to completely distrust Microsoft certificates.

Macs have [great hardware security](https://support.apple.com/guide/security/welcome/web), but many of the hardware security features rely on macOS to function properly. If you plan on running macOS, doing so on official Apple hardware is the way to go.

Similarly, ChromeOS's security is at its best when run on a Chromebook.

### Preinstalled OS

When you buy a new machine, an operating system will normally come preinstalled on it. Due to agreements between hardware vendors and shady software vendors, the default operating system install often comes preloaded with bloatware, [adware](https://www.bleepingcomputer.com/news/technology/lenovo-gets-a-slap-on-the-wrist-for-superfish-adware-scandal/), or even [malware](https://www.zdnet.com/article/dell-poweredge-motherboards-ship-with-malware/). It's usually a good idea to wipe the drive and install a fresh copy of your operating system of choice. It's not normally necessary to do this if the manufacturer of the hardware also develops the operating system, such as with Apple devices and the Microsoft Surface line.

### Firmware

An oft-overlooked but important consideration is firmware updates for your hardware. Is the OEM of your hardware still releasing firmware updates for your device? Will your OS update firmware automatically or do you need to install firmware updates yourself? These are important to consider when deciding what hardware to purchase.

Almost every component of your computer requires firmware to operate, from your motherboard to your drives. Of course, it's ideal for all the components of your device to be fully supported. Apple devices, Chromebooks, most Android phones, and Microsoft Surface devices will handle all your firmware for you as long as the device is supported (another advantage of using hardware made by the same company as the OS developers). 

If you build your own PC, you will be responsible for keeping up with firmware updates on all your components. This can be annoying to deal with, so if you don't think you can keep everything up to date, you should prioritize the most important components. Your motherboard's firmware is more important to keep updated than your hard drive, for instance.

### TPM/Hardware Security Chips

Most computers and phones come equipped with a TPM or security chip which safely stores your encryption keys and handles other security-related functions. If you're currently using a machine that doesn't have one of these, you might benefit from purchasing a newer computer that has this feature.

!!! note

    Virtual TPMs are susceptible to side-channel attacks and external TPMs, as a result of being separate from the CPU on the motherboard, are vulnerable to [sniffing](https://pulsesecurity.co.nz/articles/TPM-sniffing) when an attacker has access to the hardware. The solution to this problem is to include the secure processor inside the CPU itself, which is the case for Apple's chips and Microsoft's [Pluton](https://www.microsoft.com/en-us/security/blog/2020/11/17/meet-the-microsoft-pluton-processor-the-security-chip-designed-for-the-future-of-windows-pcs/).

### Biometrics

Many devices come equipped with a fingerprint reader or face recognition capabilities. These can be very convenient, but they aren't perfect and sometimes fail. Most devices will fall back to a PIN or password when this happens, meaning that the security of your devices is still only as good as your password.

Biometrics can prevent someone from watching you type in your password, so if shoulder-surfing is part of your threat model then biometrics are a good option.

Most implementations of face authentication require you to be looking at your phone and also only work from a relatively close distance, so you don't need to worry too much about someone pointing your phone at your face to unlock it without your consent. You can still disable biometrics when your phone is locked if you want. On iOS, you can hold the side button and a volume button for 3 seconds to disable Face ID on models that support it. On Android, hold the power button and press Lockdown on the menu.

!!! warning

    Some devices do not have the proper hardware for secure face authentication. There's two main types of face authentication: 2D and 3D. 3D face authentication makes use of a dot projector that lets the device create a 3D depth map of your face. Make sure that your device has this capability.
    
Android defines three [security classes](https://source.android.com/docs/security/features/biometric/measure#biometric-classes) for biometrics; you should check that your device is class 3 before enabling biometrics.

### General Tips

If your device is [encrypted](../encryption.md), turning it fully off is more secure than leaving it on. On phones, this is referred to as BFU and AFU respectively. If your threat model includes high-resource adversaries like the government, you may want to turn your device fully off whenever you aren't using it. For other threat models, it's still a good idea to lock it before you leave and make sure the lock screen is password protected.

## External Hardware

Some threats can't be protected against by your internal components alone. Many of these options are highly situational; please evaluate if they are really necessary for your threat model.

### Hardware Keys

Hardware keys are devices that use strong cryptography to authenticate you to a device or account, the idea being that it functions similarly to a regular key; you need to have it in order gain access.

[More Info :material-arrow-right-drop-circle:](../multi-factor-authentication/#hardware-security-keys){ .md-button }

### Camera/Microphone

If you don't want to trust your OS's permission controls to prevent the camera from activating in the first place, you can buy camera blockers that physically prevent light from reaching the camera. You could also buy a device that doesn't have a built-in camera and use an external camera that you can unplug whenever you're done using it. Some devices come with built-in camera blockers or hardware switches that physically disconnect the camera from power.

!!! warning

    You should only buy covers that fit your laptop and won't cause damage when you close the lid. Covering the camera will interfere with automatic brightness and face authentication features.

Similarly, for your microphone, you'll just need to trust your OS's built-in permission controls. Alternatively, buy a device that doesn't have a built-in microphone and use an external microphone that you can unplug when you're done using it. Some devices, like [MacBooks and iPads](https://support.apple.com/en-au/guide/security/secbbd20b00b/web), feature a hardware disconnect for the microphone when you close the lid.

### Privacy Screens

Privacy screens are a film you can put over your normal screen so that the screen is only visible from a certain angle. These are good if your threat model includes others peeking at your screen, but it is not foolproof as anyone could just move to a different viewing angle and see what's on your screen.

### Dead Man's Switches

A dead man's switch stops a piece of machinery from operating without the presence of a human operator. Originally, these were meant as a safety measure; however, the same concept can be applied to an electronic device to lock it when you're not present.

Some laptops are able to detect when you're present and can lock automatically when you aren't sitting in front of the screen. You should check the settings in your OS to see if your computer supports this feature.

You can also get cables, like [Buskill](https://www.buskill.in), that will lock or wipe your computer when the cable is disconnected.

### Anti-Interdiction/Evil Maid Attack

The best way to prevent a targetted attack against you before a device is in your posession is to purchase a device in a physical store, rather than ordering it to your address.

A method you can use once you already have the device is to paint the screws with [glittery nail polish](https://trmm.net/Glitter/), take a picture, and compare the patterns to your pictures in the future.

## Routers

Your router handles all your network traffic and acts as your first line of defense between you and the open internet.

!!! note

    A lot of routers come with storage to put your files on so you can access them from any computer on your network. We recommend you don't use networking devices for things other than networking. In the event your router was compromised, your files would also be compromised.

The most important thing to think about with routers is keeping them up-to-date. Many modern routers will automatically install updates, but many others won't. You should check on your router's settings page for this option. You can usually access this page by typing 192.168.1.1 or 192.168.0.1 into the URL bar of any browser. You can also check in the network settings of your OS for "router" or "gateway".

If your router does not support automatic updates, you will need to go to the manufacturer's site to download the updates and apply them manually.

Many consumer-grade routers aren't supported for very long. If your router isn't supported by the manufacturer any more, you can check if it's supported by [FOSS firmware](../router.md). You can also buy routers that come with FOSS firmware installed by default; these tend to be supported longer than most routers.

Some ISPs provide a combined router/modem. It can be beneficial for security to purchase a separate router and set your ISP router/modem into modem-only mode. This way, even when your ISP-provided router is no longer getting updates, you can still get security updates and patches. It also means any problems that affect your modem won't affect your router and vice versa.

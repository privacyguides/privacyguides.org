---
date:
    created: 2025-10-23T19:00:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Zero Trust
    - Networking
license: BY-SA
schema_type: BackgroundNewsArticle
description: |
  Zero Trust is the new hotness for corporate networks. But can it be simplified and made useful for our home networks?
preview:
  cover:
---

# Zero Trust: What Can We Learn for Our Personal Networks

You may have heard of "Zero Trust", usually in relation to corporate networks. It's used a lot as a buzzword to sell cloud products to companies, but the overall concept is sound. Even though it seems complicated, I think we can learn from it for our personal home networks.<!-- more -->

## Previous Method

A traditional approach to security focuses heavily on protecting network access. You define a "secure" network that you control, usually with a [firewall](https://www.cisco.com/site/us/en/learn/topics/security/what-is-a-firewall.html#tabs-9da71fbd27-item-1288c79d71-tab) and/or a [NAT](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-address-translation-nat.html#tabs-9da71fbd27-item-1288c79d71-tab).

Anyone inside the secure network is considered trusted and has access to things such as network drives belonging to the organization, and other data.

Anyone outside the network is considered "untrusted" and are not given access to sensitive data.

``` mermaid
    graph LR
        A[Untrusted Traffic] -.-> B{Network Boundary};
        B --> C[Network Drive];
        C --> B;
        B --> D[User];
        D --> B;
        B --> E[Printer];
        E --> B;
```

This doesn't just include people physically inside the network, this also includes people connecting to the network over a VPN. Once the VPN spits you out, it's like you're physically there on the network, along with all the privileges that entails.

## Issues

You might notice this model leaves people on the network and the network itself highly vulnerable; once a malicious actor is inside the network, they can wreak havok and access troves of data and attack other users and devices.

``` mermaid
    graph LR
        A[Untrusted Traffic] -.-> B{Network Boundary};
        B --> C[Network Drive];
        C --> B;
        B --> D[User];
        D --> B;
        B --> E[Printer];
        E --> B;
        C --> F(Attacker);
        D --> F;
        E --> F;
```

After getting past the network boundary, they can [move laterally ](https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/lateral-movement/) and access deeper and more sensitive parts of the network.

How does an attacker get past the network boundary though?

### Virus

It's happened to us all at some point. Either through a malicious link, or maybe a fake program masquerading as a legitimate one, there's any number of ways a "trusted" machine can get infected with malware.

Once it is, as soon as that user connects to the network, it's open season to infect other devices on the network, access sensitive data, and cause all kinds of damage.

Unfortunately, technology isn't at a point where we can have 100% confidence that our devices aren't infected, which makes any "trusted" device, even if the user isn't malicious, a possible security threat.

This is especially relevant considering the rise in [bring-your-own-device (BYOD)](https://market.biz/bring-your-own-device-byod-statistics/) in workplaces. Devices that aren't set up by the organization can't be trusted to have the best security practices in place: automatic updates, restricted software installs, etc. For all you know, someone could be on your network with a laptop from 2004 running Windows Vista.

### Malicious User

Of course, sometimes our "trusted" users *are* malicious. [Corporate espionage](https://www.bbc.com/news/world-asia-china-64206950) is a very real threat. Even in your own home network, there's probably people you don't want to have access to your data.

### Stolen Credentials

Sometimes credentials can get stolen, either through [phishing](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams), [social engineering](https://www.ibm.com/think/topics/social-engineering), or just plain irresponsible [credential sharing](https://www.thezebra.com/resources/home/dangers-of-sharing-passwords/).

Whatever the case may be, users can't necessarilly be trusted to keep their credentials secure.

Passwords are, of course, the most vulnerable type of credentials to phishing and compromise in general.

### Offsite Devices

The reality today is, most of what we use isn't located on a network we control anymore. Whether it's a cloud service such as iCloud, streaming services, or even our own devices connecting remotely, the old model of trusting everything behind the network can't work when almost nothing *is* behind the network.

## Zero Trust

This is where [Zero Trust](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview) comes in.

### Verify

The motto here is "**never trust, always verify**". This means that you should never assume any device accessing any resource or performing any action is trusted. You should verify explicitly every time and using as many data points as you can.

### Principle of Least Privilege

The [Principle of Least Privelege](https://www.cloudflare.com/learning/access-management/principle-of-least-privilege/) states that a user should only have access to the bare minimum they need in order to do what they need to do, and no more.

In a corporate network, a sales associate doesn't need full control over the network. In your home network, grandpa probably doesn't need access to your password manager or your user account on your PC.

### Assume Breach

Always assume the attackers are listening: use encryption whenever you can. Treat your internal network traffic like external traffic.

You never know what could be lurking. A single infected printer for example could be scanning your network for unencrypted traffic or holes in your device's firewall.

## Applying These Lessons

How do we apply all this to your home network?

### User Authentication

#### Segmentation

In order to verify who is allowed to access what, you need to segment everything out: if you have a shared family computer, make a separate user account for everyone. If you have shared accounts on services such as Netflix, see if they support everyone making their own account and accessing that way instead of sharing your password.

From now on, every person must explicitly verify who they are using their own credentials. You don't want to be able to access anyone else's data and you don't want them accessing your data either.

Make sure your router has an administrator password set and don't give it to everyone, just people who need to administer it.

#### Two-Factor Authentication

Utilize two-factor authentication and biometrics whenever you can: they help ensure that the crednetials haven't been stolen and the correct person is indeed accessing what they're allowed to access.

#### Avoid Passwords

Passwords can be easily phished, stolen, shared, or otherwise leave your custody. This is a big problem for Zero Trust. Whenever possible, use [passkeys](https://www.passkeys.com), biometric authentication, [hardware security keys](https://www.yubico.com/authentication-standards/fido2/), anything other than passwords to log in if it can be avoided.

[iOS](https://support.apple.com/guide/iphone/use-stolen-device-protection-iph17105538b/ios) and [Android](https://support.google.com/android/answer/15146908?hl=en) offer anti-theft features that require biometric authentication for certain sensitive actions: enable these so that someone who knows your phone password can't change these settings.

#### Network Drives

If you have a shared network drive, consider moving to a cloud solution and using the sharing feature it offers such as [iCloud family sharing](https://www.apple.com/family-sharing/). This will make it so that everyone needs to authenticate with their account before accessing data.

#### Encryption

Make heavy use of encryption, especially end-to-end encryption. Enable E2EE in services that support it such as iCloud [Advanced Data Protection](https://support.apple.com/en-us/108756).

Many routers will allow you to use TLS encryption for accessing their web interface: enable this setting if it's available.

#### Firewall

Enable the firewall on your router of course, but don't rely on it to protect you.

Turn on the firewall for all devices on your network. You can tweak the settings as you see fit, but make sure it's the minimum you need in order to use the device properly. Most operating systems will give you a simple user graphical user interface for changing firewall settings, so it shouldn't be too difficult.

#### Remove Unnecessary Devices

In this day and age, many of us own too many smart devices. We have to ask ourselves if we really need a WiFi enabled toaster, or if the added attack surface isn't worth it.

Go through networked devices in your home and assess what's needed and what's not. These typically are a pain to keep updated and give you very little control over their security anyway. Each one represents another potential entrypoint into your network.

#### Network Segmentation

An important part of Zero Trust is keeping devices [separated](https://learn.microsoft.com/en-us/security/zero-trust/sfi/network-isolation?branch=main) on your network. You don't necessarily need to go as granular as you'd see on corporate networks, and a lot of consumer routers don't even let you anyway, but you can put devices you don't want anywhere near your sensitive data on the [guest network](https://www.netgear.com/hub/network/security/guest-wifi/) that most routers let you enable.

This will keep them separated from your personal devices with your sensitive data.

#### Continuous Verification

Some devices, especially Windows devices, support continuous verification through biometrics. For example, you can set your Windows PC to [automatically lock itself](https://support.microsoft.com/en-us/windows/managing-presence-sensing-settings-in-windows-11-82285c93-440c-4e15-9081-c9e38c1290bb) when it detects you've left.

Some devices also support [onlooker detection](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/sensors-presence-onlooker-detection), so when an unauthorized person is detected looking at your screen, it will turn off.

Unfortunately, this security feature isn't available on most devices. For devices that lack continuous verification, you can set the screen to turn off after a short timer. You can make use of [attention aware](https://support.apple.com/en-us/102216) features to keep your screen from dimming while you use it.

## Takeaways

While the average person won't be achieving the same level of granular isolation you might get on a modern, secure corporate network, we can take the overall concepts and apply them to our home networks fairly easily. I'm sure there's plenty I missed, so feel free to let me know your ideas, and maybe I can even update this article in the future with your suggestions.

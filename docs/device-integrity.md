---
title: "Device Integrity"
icon: material/security
description: These tools can be used to check your devices for compromise.
cover: device-integrity.webp
---

These tools can be used to validate the integrity of your mobile devices and check them for indicators of compromise by spyware and malware such as Pegasus, Predator, or KingsPawn. This page focuses on **mobile security**, because mobile devices typically have read-only systems with well-known configurations, so detecting malicious modifications is easier than on traditional desktop systems. We may expand the focus of this page in the future.

<div class="admonition note" markdown>
<p class="admonition-title">This is an advanced topic</p>

These tools may provide utility for certain individuals. They provide functionality which most people do not need to worry about, and often require more in-depth technical knowledge to use effectively.

</div>

It is **critical** to understand that scanning your device for public indicators of compromise is **not sufficient** to determine that a device is "clean", and not targeted with a particular spyware tool. Reliance on these publicly-available scanning tools can miss recent security developments and give you a false sense of security.

## General Advice

The majority of system-level exploits on modern mobile devices—especially zero-click compromises—are non-persistent, meaning they will not remain or run automatically after a reboot. For this reason, we highly recommend rebooting your device regularly. We recommend everybody reboot their devices once a week at minimum, but if non-persistent malware is of particular concern for you, we and many security experts recommend a daily reboot schedule.

This means an attacker would have to regularly re-infect your device to retain access, although we'll note this is not impossible. Rebooting your device also will not protect you against *persistent* malware, but this is less common on mobile devices due to modern security features like secure/verified boot.

## Post-Compromise Information & Disclaimer

If any of the following tools indicate a potential compromise by spyware such as Pegasus, Predator, or KingsPawn, we advise that you contact:

- If you are a human rights defender, journalist, or from a civil society organization: [Amnesty International's Security Lab](https://securitylab.amnesty.org/contact-us)
- If a business or government device is compromised: Contact the appropriate security liason at your enterprise, department, or agency
- Local law enforcement

**We are unable to help you directly beyond this.** We are happy to discuss your specific situation or circumstances and review your results in our [community](https://discuss.privacyguides.net) spaces, but it is unlikely we can assist you beyond what is written on this page.

The tools on this page are only capable of detecting indicators of compromise, not removing them. If you are concerned about having been compromised, we advise that you:

- Consider replacing the device completely
- Consider changing your SIM/eSIM number
- Not restore from a backup, because that backup may be compromised

These tools provide analysis based on the information they have the ability to access from your device, and publicly-accessible indicators of compromise. It is important to keep in mind two things:

1. Indicators of compromise are just that: *indicators*. They are not a definitive finding, and may occasionally be **false positives**. If an indicator of compromise is detected, it means you should do additional research into the *potential* threat.
2. The indicators of compromise these tools look for are published by threat research organizations, but not all indicators are made available to the public! This means that these tools can present a **false negative**, if your device is infected with spyware which is not detected by any of the public indicators. Reliable and comprehensive digital forensic support and triage requires access to non-public indicators, research and threat intelligence.

## External Verification Tools

External verification tools run on your computer and scan your mobile device for forensic traces which are helpful to identify potential compromise.

<div class="admonition danger" markdown>
<p class="admonition-title">Danger</p>

Public indicators of compromise are insufficient to determine that a device is "clean", and not targeted with a particular spyware tool. Reliance on public indicators alone can miss recent forensic traces and give a false sense of security.

Reliable and comprehensive digital forensic support and triage requires access to non-public indicators, research and threat intelligence.

Such support is available to civil society through [Amnesty International's Security Lab](https://amnesty.org/en/tech) or [Access Now’s Digital Security Helpline](https://accessnow.org/help).

</div>

These tools can trigger false-positives. If any of these tools finds indicators of compromise, you need to dig deeper to determine your actual risk. Some reports may be false positives based on websites you've visited in the past, and findings which are many years old are likely either false-positives or indicate previous (and no longer active) compromise.

### Mobile Verification Toolkit

<div class="admonition recommendation" markdown>

![MVT logo](assets/img/device-integrity/mvt.webp){ align=right }

**Mobile Verification Toolkit** (**MVT**) is a collection of utilities which simplifies and automates the process of scanning mobile devices for potential traces of targeting or infection by known spyware campaigns. MVT was developed by Amnesty International and released in 2021 in the context of the [Pegasus Project](https://forbiddenstories.org/about-the-pegasus-project).

[:octicons-home-16: Homepage](https://mvt.re){ .md-button .md-button--primary }
[:octicons-code-16:](https://github.com/mvt-project/mvt){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-apple: macOS](https://docs.mvt.re/en/latest/install)
- [:simple-linux: Linux](https://docs.mvt.re/en/latest/install)

</details>

</div>

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

Using MVT is insufficient to determine that a device is "clean", and not targeted with a particular spyware tool.

</div>

MVT is *most* useful for scanning iOS devices. Android stores very little diagnostic information useful to triage potential compromises, and because of this `mvt-android` capabilities are limited as well. On the other hand, encrypted iOS iTunes backups provide a large enough subset of files stored on the device to detect suspicious artifacts in many cases. This being said, MVT does still provide fairly useful tools for both iOS and Android analysis.

If you use iOS and are at high-risk, we have three additional suggestions for you:

1. Create and keep regular (monthly) iTunes backups. This allows you to find and diagnose past infections later with MVT, if new threats are discovered in the future.
2. Trigger *sysdiagnose* logs often and back them up externally. These logs can provide invaluable data to future forensic investigators if need be.

    The process to do so varies by model, but you can trigger it on newer phones by holding down *Power* + *Volume Up* + *Volume Down* until you feel a brief vibration. After a few minutes, the timestamped *sysdiagnose* log will appear in **Settings** > **Privacy & Security** > **Analytics & Improvements** > **Analytics Data**.

3. Enable [Lockdown Mode](https://blog.privacyguides.org/2022/10/27/macos-ventura-privacy-security-updates/#lockdown-mode).

MVT allows you to perform deeper scans/analysis if your device is jailbroken. Unless you know what you are doing, **do not jailbreak or root your device.** Jailbreaking your device exposes it to considerable security risks.

### iMazing (iOS)

<div class="admonition recommendation" markdown>

![iMazing logo](assets/img/device-integrity/imazing.png){ align=right }

**iMazing** provides a free spyware analyzer tool for iOS devices which acts as a GUI-wrapper for [MVT](#mobile-verification-toolkit). This can be much easier to run compared to MVT itself, which is a command-line tool designed for technologists and forensic investigators.

[:octicons-home-16: Homepage](https://imazing.com){ .md-button .md-button--primary }
[:octicons-eye-16:](https://imazing.com/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://imazing.com/spyware-analyzer){ .card-link title=Documentation}

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-windows11: Windows](https://imazing.com/download)
- [:simple-apple: macOS](https://imazing.com/download)

</details>

</div>

iMazing automates and interactively guides you through the process of using [MVT](#mobile-verification-toolkit) to scan your device for publicly-accessible indicators of compromise published by various threat researchers. All of the information and warnings which apply to MVT apply to this tool as well, so we suggest you also familiarize yourself with the notes on MVT in the sections above.

## On-Device Verification

These are apps you can install which check your device and operating system for signs of tampering, and validate the identity of your device.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

Using these apps is insufficient to determine that a device is "clean", and not targeted with a particular spyware tool.

</div>

### Auditor (Android)

<div class="admonition recommendation" markdown>

![Auditor logo](assets/img/device-integrity/auditor.svg#only-light){ align=right }
![Auditor logo](assets/img/device-integrity/auditor-dark.svg#only-dark){ align=right }

**Auditor** is an app which leverages hardware security features to provide device integrity monitoring by actively validating the identity of a device and the integrity of its operating system. Currently, it only works with GrapheneOS or the stock operating system for [supported devices](https://attestation.app/about#device-support).

[:octicons-home-16: Homepage](https://attestation.app){ .md-button .md-button--primary }
[:octicons-eye-16:](https://attestation.app/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://attestation.app/about){ .card-link title=Documentation}
[:octicons-code-16:](https://attestation.app/source){ .card-link title="Source Code" }
[:octicons-heart-16:](https://attestation.app/donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor.play)
- [:simple-github: GitHub](https://github.com/GrapheneOS/Auditor/releases)
- [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

</details>

</div>

Auditor is not a scanning/analysis tool like some other tools on this page, rather it uses your device's hardware-backed keystore to allow you to verify the identity of your device and gain assurance that the operating system itself hasn't been tampered with or downgraded via verified boot. This provides a very robust integrity check of your device itself, but doesn't necessarily check whether the user-level apps running on your device are malicious.

Auditor performs attestation and intrusion detection with **two** devices, an *auditee* (the device being verified) and an *auditor* (the device performing the verification). The auditor can be any Android 10+ device (or a remote web service operated by [GrapheneOS](android.md#grapheneos)), while the auditee must be a specifically [supported device](https://attestation.app/about#device-support). Auditor works by:

- Using a [Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) model between an *auditor* and *auditee*, the pair establish a private key in the [hardware-backed keystore](https://source.android.com/security/keystore) of the *Auditor*.
- The *auditor* can either be another instance of the Auditor app or the [Remote Attestation Service](https://attestation.app).
- The *auditor* records the current state and configuration of the *auditee*.
- Should tampering with the operating system of the *auditee* happen after the pairing is complete, the auditor will be aware of the change in the device state and configurations.
- You will be alerted to the change.

It is important to note that Auditor can only effectively detect changes **after** the initial pairing, not necessarily during or before due to its TOFU model. To make sure that your hardware and operating system is genuine, [perform local attestation](https://grapheneos.org/install/web#verifying-installation) immediately after the device has been installed and prior to any internet connection.

No personally identifiable information is submitted to the attestation service. We recommend that you sign up with an anonymous account and enable remote attestation for continuous monitoring.

If your [threat model](basics/threat-modeling.md) requires privacy, you could consider using [Orbot](tor.md#orbot) or a VPN to hide your IP address from the attestation service.

## On-Device Scanners

These are apps you can install on your device which scan your device for signs of compromise.

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

Using these apps is insufficient to determine that a device is "clean", and not targeted with a particular spyware tool.

</div>

### Hypatia (Android)

<div class="admonition recommendation" markdown>

![Hypatia logo](assets/img/device-integrity/hypatia.svg#only-light){ align=right }
![Hypatia logo](assets/img/device-integrity/hypatia-dark.svg#only-dark){ align=right }

**Hypatia** is an open source real-time malware scanner for Android, from the developer of [DivestOS](android.md#divestos). It accesses the internet to download signature database updates, but does not upload your files or any metadata to the cloud (scans are performed entirely locally).

[:octicons-home-16: Homepage](https://divestos.org/pages/our_apps#hypatia){ .md-button .md-button--primary }
[:octicons-eye-16:](https://divestos.org/pages/privacy_policy#hypatia){ .card-link title="Privacy Policy" }
[:octicons-code-16:](https://github.com/divested-mobile/hypatia){ .card-link title="Source Code" }
[:octicons-heart-16:](https://divested.dev/pages/donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-fdroid: F-Droid](https://f-droid.org/packages/us.spotco.malwarescanner)

</details>

</div>

Hypatia is particularly good at detecting common stalkerware: If you suspect you are a victim of stalkerware, you should [visit this page](https://stopstalkerware.org/information-for-survivors) for advice.

### iVerify (iOS)

<div class="admonition recommendation" markdown>

![iVerify logo](assets/img/device-integrity/iverify.webp){ align=right }

**iVerify** is an iOS app which automatically scans your device to check configuration settings, patch level, and other areas of security. It also checks your device for indicators of compromise by jailbreak tools or spyware such as Pegasus.

[:octicons-home-16: Homepage](https://iverify.io/consumer){ .md-button .md-button--primary }
[:octicons-eye-16:](https://iverify.io/privacy-policy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://iverify.io/frequently-asked-questions#iVerify-General){ .card-link title=Documentation}

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-appstore: App Store](https://apps.apple.com/app/id1466120520)

</details>

</div>

Like all iOS apps, iVerify is restricted to what it can observe about your device from within the iOS App Sandbox. It will not provide nearly as robust analysis as a full-system analysis tool like [MVT](#mobile-verification-toolkit). Its primary function is to detect whether your device is jailbroken, which it is effective at, however a hypothetical threat which is *specifically* designed to bypass iVerify's checks would likely succeed at doing so.

iVerify is **not** an "antivirus" tool, and will not detect non-system-level malware such as malicious custom keyboards or malicious Wi-Fi Sync configurations, for example.

In addition to device scanning, iVerify also includes a number of additional security utilities which you may find useful, including device reboot reminders, iOS update notifications (which are often faster than Apple's staggered update notification rollout), some basic privacy and security guides, and a DNS over HTTPS tool which can connect your device's [DNS](dns.md) queries securely to Quad9, Cloudflare, or Google.

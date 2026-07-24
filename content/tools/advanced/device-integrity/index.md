---
title: "Device Integrity"
description: These tools can be used to check your devices for compromise.
robots: nofollow, max-snippet:-1, max-image-preview:large
aliases:
- /device-integrity
- /en/device-integrity
---
These tools can be used to validate the integrity of your mobile devices and check them for indicators of compromise by spyware and malware such as Pegasus, Predator, or KingsPawn. This page focuses on **mobile security**, because mobile devices typically have read-only systems with well-known configurations, so detecting malicious modifications is easier than on traditional desktop systems. We may expand the focus of this page in the future.

> [!IMPORTANT]
> These tools may provide utility for certain individuals. They provide functionality which most people do not need to worry about, and often require more in-depth technical knowledge to use effectively.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#mobile-verification-toolkit" title="MVT" image="./mvt.webp" subtitle="Mobile Verification Toolkit (MVT) is a collection of utilities which simplifies and automates the process of scanning mobile devices for potential traces of targeting or infection by known spyware campaigns. MVT was developed by Amnesty International and released in 2021 in the context of the Pegasus Project." >}}
  {{< card link="#imazing-ios" title="iMazing" image="./imazing.png" subtitle="iMazing provides a free spyware analyzer tool for iOS devices which acts as a GUI-wrapper for MVT. This can be much easier to run compared to MVT itself, which is a command-line tool designed for technologists and forensic investigators." >}}
  {{< card link="#auditor-android" title="Auditor" image="./auditor.svg" subtitle="Auditor is an app which leverages hardware security features to provide device integrity monitoring by actively validating the identity of a device and the integrity of its operating system. Currently, it only works with GrapheneOS or the stock operating system for supported devices." >}}
{{< /cards >}}
</div>

It is **critical** to understand that scanning your device for public indicators of compromise is **not sufficient** to determine that a device is "clean", and not targeted with a particular spyware tool. Reliance on these publicly-available scanning tools can miss recent security developments and give you a false sense of security.

## Advice

The majority of system-level exploits on modern mobile devices—especially zero-click compromises—are non-persistent, meaning they will not remain or run automatically after a reboot. For this reason, we highly recommend rebooting your device regularly. We recommend everybody reboot their devices once a week at minimum, but if non-persistent malware is of particular concern for you, we and many security experts recommend a daily reboot schedule.

This means an attacker would have to regularly re-infect your device to retain access, although we'll note this is not impossible. Rebooting your device also will not protect you against *persistent* malware, but this is less common on mobile devices due to modern security features like secure/verified boot.

### Post-Compromise Information & Disclaimer

If any of the following tools indicate a potential compromise by spyware such as Pegasus, Predator, or KingsPawn, we advise that you contact:

- If you are a human rights defender, journalist, or from a civil society organization: [Amnesty International's Security Lab](https://securitylab.amnesty.org/contact-us)
- If a business or government device is compromised: the appropriate security liaison at your enterprise, department, or agency
- Local law enforcement

**We are unable to help you directly beyond this.** We are happy to discuss your specific situation or circumstances and review your results in our [community](https://discuss.privacyguides.net) spaces, but it is unlikely we can assist you beyond what is written on this page.

The tools on this page are only capable of detecting indicators of compromise, not removing them. If you are concerned about having been compromised, we advise that you:

- Consider replacing the device completely
- Consider changing your SIM/eSIM number
- Not restore from a backup, because that backup may be compromised

These tools provide analysis based on the information they have the ability to access from your device, and publicly-accessible indicators of compromise. It is important to keep in mind two things:

1. Indicators of compromise are just that: *indicators*. They are not a definitive finding, and may occasionally be **false positives**. If an indicator of compromise is detected, it means you should do additional research into the *potential* threat.
2. The indicators of compromise these tools look for are published by threat research organizations, but not all indicators are made available to the public! This means that these tools can present a **false negative**, if your device is infected with spyware which is not detected by any of the public indicators. Reliable and comprehensive digital forensic support and triage require access to non-public indicators, research, and threat intelligence.

## External Verification Tools

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

External verification tools run on your computer and scan your mobile device for forensic traces, which are helpful to identify potential compromise.

> [!CAUTION]
> Public indicators of compromise are insufficient to determine that a device is "clean", and not targeted with a particular spyware tool. Reliance on public indicators alone can miss recent forensic traces and give a false sense of security.
>
> Reliable and comprehensive digital forensic support and triage require access to non-public indicators, research, and threat intelligence.
>
> Such support is available to civil society through [Amnesty International's Security Lab](https://amnesty.org/en/tech) or [Access Now’s Digital Security Helpline](https://accessnow.org/help).

These tools can trigger false-positives. If any of these tools finds indicators of compromise, you need to dig deeper to determine your actual risk. Some reports may be false positives based on websites you've visited in the past, and findings which are many years old are likely either false-positives or indicate previous (and no longer active) compromise.

### Mobile Verification Toolkit

{{< title-card logo="./mvt.webp" >}}

**Mobile Verification Toolkit** (**MVT**) is a collection of utilities which simplifies and automates the process of scanning mobile devices for potential traces of targeting or infection by known spyware campaigns. MVT was developed by Amnesty International and released in 2021 in the context of the [Pegasus Project](https://forbiddenstories.org/about-the-pegasus-project).

{{< cards >}}
  {{< card link="https://mvt.re" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/mvt-project/mvt" title="Source code" icon="code" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="macOS" color="indigo" >}}](https://docs.mvt.re/en/latest/install)
[{{< badge content="Linux" color="yellow" >}}](https://docs.mvt.re/en/latest/install)

> [!WARNING]
> Using MVT is insufficient to determine that a device is "clean", and not targeted with a particular spyware tool.


MVT is *most* useful for scanning iOS devices. Android stores very little diagnostic information useful to triage potential compromises, and because of this, `mvt-android` capabilities are limited as well. On the other hand, encrypted iOS iTunes backups provide a large enough subset of files stored on the device to detect suspicious artifacts in many cases. This being said, MVT does still provide fairly useful tools for both iOS and Android analysis.

If you use iOS and are at high-risk, we have three additional suggestions for you:

1. Create and keep regular (monthly) iTunes backups. This allows you to find and diagnose past infections later with MVT, if new threats are discovered in the future.
2. Trigger *sysdiagnose* logs often and back them up externally. These logs can provide invaluable data to future forensic investigators if need be.

    The process to do so varies by model, but you can trigger it on newer phones by holding down *Power* + *Volume Up* + *Volume Down* until you feel a brief vibration. After a few minutes, the timestamped *sysdiagnose* log will appear in **Settings** > **Privacy & Security** > **Analytics & Improvements** > **Analytics Data**.

3. Enable [Lockdown Mode](https://blog.privacyguides.org/2022/10/27/macos-ventura-privacy-security-updates/#lockdown-mode).

MVT allows you to perform deeper scans/analysis if your device is jailbroken. Unless you know what you are doing, **do not jailbreak or root your device.** Jailbreaking your device exposes it to considerable security risks.

### iMazing (iOS)

{{< title-card logo="./imazing.png" >}}

**iMazing** provides a free spyware analyzer tool for iOS devices which acts as a GUI-wrapper for [MVT](#mobile-verification-toolkit). This can be much easier to run compared to MVT itself, which is a command-line tool designed for technologists and forensic investigators.

{{< cards >}}
  {{< card link="https://imazing.com" title="Homepage" icon="home" >}}
  {{< card link="https://imazing.com/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Windows" color="red" >}}](https://imazing.com/download)
[{{< badge content="macOS" color="indigo" >}}](https://imazing.com/download)

iMazing automates and interactively guides you through the process of using [MVT](#mobile-verification-toolkit) to scan your device for publicly-accessible indicators of compromise published by various threat researchers. All the information and warnings which apply to MVT apply to this tool as well, so we suggest you also familiarize yourself with the notes on MVT in the sections above.

## On-Device Verification

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)

These are apps you can install which check your device and operating system for signs of tampering, and validate the identity of your device.

> [!WARNING]
> Using these apps is insufficient to determine that a device is "clean", and not targeted with a particular spyware tool.


### Auditor (Android)

{{< title-card logo="./auditor.svg" >}}

**Auditor** is an app which leverages hardware security features to provide device integrity monitoring by actively validating the identity of a device and the integrity of its operating system. Currently, it only works with GrapheneOS or the stock operating system for [supported devices](https://attestation.app/about#device-support).

{{< cards >}}
  {{< card link="https://attestation.app" title="Homepage" icon="home" >}}
  {{< card link="https://attestation.app/privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=app.attestation.auditor.play)
[{{< badge content="GitHub" >}}](https://github.com/GrapheneOS/Auditor/releases)
[{{< badge content="GrapheneOS App Store" >}}](https://github.com/GrapheneOS/Apps/releases)

Auditor is not a scanning/analysis tool like some other tools on this page. Rather, it uses your device's hardware-backed keystore to allow you to verify the identity of your device and gain assurance that the operating system itself hasn't been tampered with or downgraded via verified boot. This provides a very robust integrity check of your device itself, but doesn't necessarily check whether the user-level apps running on your device are malicious.

Auditor performs attestation and intrusion detection with **two** devices, an *auditee* (the device being verified) and an *auditor* (the device performing the verification). The auditor can be any Android 10+ device (or a remote web service operated by [GrapheneOS](../../os/android/distributions/index.md#grapheneos)), while the auditee must be a specifically [supported device](https://attestation.app/about#device-support). Auditor works by:

- Using a [Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) model between an *auditor* and *auditee*, the pair establish a private key in the [hardware-backed keystore](https://source.android.com/security/keystore) of the *Auditor*.
- The *auditor* can either be another instance of the Auditor app or the [Remote Attestation Service](https://attestation.app).
- The *auditor* records the current state and configuration of the *auditee*.
- Should tampering with the operating system of the *auditee* happen after the pairing is complete, the auditor will be aware of the change in the device state and configurations.
- You will be alerted to the change.

It is important to note that Auditor can only effectively detect changes **after** the initial pairing, not necessarily during or before due to its TOFU model. To make sure that your hardware and operating system is genuine, [perform local attestation](https://grapheneos.org/install/web#verifying-installation) immediately after the device has been installed and prior to any internet connection.

No personally identifiable information is submitted to the attestation service. We recommend that you sign up with an anonymous account and enable remote attestation for continuous monitoring.

If your [threat model](../../../wiki/basics/threat-modeling/index.md) requires hiding your IP address from the attestation service, you could consider using [Orbot](../alternative-networks/index.md#orbot) or a [VPN](../../services/vpn/index.md).

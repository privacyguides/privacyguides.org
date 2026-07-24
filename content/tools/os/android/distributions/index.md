---
title: Alternative Distributions
description: You can replace the operating system on your Android phone with these secure and privacy-respecting alternatives.
aliases:
- /android/distributions
- /en/android/distributions
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)
[{{< badge content="Passive Attacks" color="amber" >}}](../../../../wiki/basics/common-threats/index.md#security-and-privacy)

A **custom Android-based operating system** (sometimes referred to as a **custom ROM**) can be a way to achieve a higher level of privacy and security on your device. This is in contrast to the "stock" version of Android which comes with your phone from the factory, and is often deeply integrated with Google Play Services as well as other vendor software.

We recommend installing GrapheneOS if you have a Google Pixel as it provides improved security hardening and additional privacy features. The reasons we don't list other operating systems or devices are as follows:

- They often have [weaker security](../_index.md#install-a-custom-distribution).
- Support is frequently dropped when the maintainer loses interest or upgrades their device, which is in contrast to the predictable [support cycle](https://grapheneos.org/faq#device-lifetime) that GrapheneOS follows.
- They generally have few or no notable privacy or security improvements that make installing them worthwhile.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#grapheneos" title="GrapheneOS" image="./grapheneos.svg" subtitle="GrapheneOS hardens the Android stack on supported Pixels with verified boot, firmware updates, and sandboxed Play." >}}
{{< /cards >}}
</div>

## GrapheneOS

{{< title-card logo="./grapheneos.svg" >}}

**GrapheneOS** is the best choice when it comes to privacy and security.

GrapheneOS provides additional [security hardening](https://en.wikipedia.org/wiki/Hardening_(computing)) and privacy improvements. It has a [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc), network and sensor permissions, and various other [security features](https://grapheneos.org/features). GrapheneOS also comes with full firmware updates and signed builds, so verified boot is fully supported.

{{< cards >}}
  {{< card link="https://grapheneos.org" title="Homepage" icon="home" >}}
  {{< card link="https://grapheneos.org/faq#privacy-policy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

GrapheneOS supports [sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), which runs Google Play Services fully sandboxed like any other regular app. This means you can take advantage of most Google Play Services, such as push notifications, while giving you full control over their permissions and access, and while containing them to a specific [work profile](../_index.md#work-profile) or [user profile](../_index.md#user-profiles) of your choice.

[Google Pixel phones](../../../hardware/mobile-phones/index.md#google-pixel) are the only devices that currently meet GrapheneOS's [hardware security requirements](https://grapheneos.org/faq#future-devices). The Pixel 8 and later support ARM's Memory Tagging Extension (MTE), a hardware security enhancement that drastically lowers the probability of exploits occurring through memory corruption bugs. GrapheneOS greatly expands the coverage of MTE on supported devices. Whereas the stock OS only allows you to opt in to a limited implementation of MTE via a developer option or Google's Advanced Protection Program, GrapheneOS features a more robust implementation of MTE by default in the system kernel, default system components, and their Vanadium web browser and its WebView.

GrapheneOS also provides a global toggle for enabling MTE on all user-installed apps at :gear: **Settings** → **Security & privacy** → **Exploit protection** → **Memory tagging** → **Enable by default**. The OS also features per-app toggles to opt out of MTE for apps which may crash due to compatibility issues.

### Connectivity Checks

By default, Android makes many network connections to Google to perform DNS connectivity checks, to sync with current network time, to check your network connectivity, and for many other background tasks. GrapheneOS replaces these with connections to servers operated by GrapheneOS and subject to their privacy policy. This hides information like your IP address [from Google](../../../../wiki/basics/common-threats/index.md#privacy-from-service-providers), but means it is trivial for an admin on your network or ISP to see you are making connections to `grapheneos.network`, `grapheneos.org`, etc. and deduce what operating system you are using.

If you want to hide information like this from an adversary on your network or ISP, you **must** use a [trusted VPN](../../../services/vpn/index.md) in addition to changing the connectivity check setting to **Standard (Google)**. It can be found in :gear: **Settings** → **Network & internet** → **Internet connectivity checks**. This option allows you to connect to Google's servers for connectivity checks, which, alongside the usage of a VPN, helps you blend in with a larger pool of Android devices.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be open-source software.
- Must support bootloader locking with custom AVB key support.
- Must receive major Android updates within 0-1 months of release.
- Must receive Android feature updates (minor version) within 0-14 days of release.
- Must receive regular security patches within 0-5 days of release.
- Must **not** be "rooted" out of the box.
- Must **not** enable Google Play Services by default.
- Must **not** require system modification to support Google Play Services.

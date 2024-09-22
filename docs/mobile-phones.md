---
title: "Mobile Phones"
icon: material/cellphone-check
description: These mobile devices provide the best hardware security support for custom Android operating systems.
cover: android.webp
schema:
  -
    "@context": http://schema.org
    "@type": WebPage
    name: Mobile Phone Recommendations
    url: "./"
  -
    "@context": http://schema.org
    "@type": Product
    name: Pixel
    brand:
      "@type": Brand
      name: Google
    image: /assets/img/android/google-pixel.png
    sameAs: https://en.wikipedia.org/wiki/Google_Pixel
    review:
      "@type": Review
      author:
        "@type": Organization
        name: Privacy Guides
robots: nofollow, max-snippet:-1, max-image-preview:large
---
<small>Protects against the following threat(s):</small>

- [:material-target-account: Targeted Attacks](basics/common-threats.md#attacks-against-specific-individuals){ .pg-red }
- [:material-bug-outline: Passive Attacks](basics/common-threats.md#security-and-privacy){ .pg-orange }

Most **mobile phones** receive short or limited windows of security updates from OEMs; after these devices reach the end of their support period, they **cannot** be considered secure as they no longer receive firmware or driver security updates.

The mobile devices listed here provide a long lifespan of guaranteed security updates and allow you to install a custom operating system without violating the Android security model.

[Recommended Custom OSes :material-arrow-right-drop-circle:](android/distributions.md){ .md-button .md-button--primary } [Details about Android Security :material-arrow-right-drop-circle:](os/android-overview.md#security-protections){ .md-button }

<div class="admonition warning" markdown>
<p class="admonition-title">Warning</p>

End-of-life devices (such as GrapheneOS's "extended support" devices) do not have full security patches (firmware updates) due to the OEM discontinuing support. These devices cannot be considered completely secure regardless of installed software.

</div>

## Purchasing Advice

When purchasing a device, we recommend getting one as new as possible. The software and firmware of mobile devices are only supported for a limited time, so buying new extends that lifespan as much as possible.

Avoid buying phones from mobile network operators. These often have a **locked bootloader** and do not support [OEM unlocking](https://source.android.com/devices/bootloader/locking_unlocking). These phone variants will prevent you from installing any kind of alternative Android distribution.

Be very **careful** about buying second hand phones from online marketplaces. Always check the reputation of the seller. If the device is stolen, there's a possibility of it being entered in the [IMEI database](https://gsma.com/get-involved/working-groups/terminal-steering-group/imei-database). There is also a risk involved with you being associated with the activity of the previous owner.

A few more tips regarding Android devices and operating system compatibility:

- Do not buy devices that have reached or are near their end-of-life; additional firmware updates must be provided by the manufacturer.
- Do not buy preloaded LineageOS or /e/ OS phones or any Android phones without proper [Verified Boot](https://source.android.com/security/verifiedboot) support and firmware updates. These devices also have no way for you to check whether they've been tampered with.
- In short, if a device is not listed here, there is probably a good reason. Check out our [forum](https://discuss.privacyguides.net) to find details!

## Google Pixel

Google Pixel phones are the **only** devices we recommend for purchase. Pixel phones have stronger hardware security than any other Android devices currently on the market, due to proper AVB support for third-party operating systems and Google's custom [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) security chips acting as the Secure Element.

<div class="admonition recommendation" markdown>

![Google Pixel 6](assets/img/android/google-pixel.png){ align=right }

**Google Pixel** devices are known to have good security and properly support [Verified Boot](https://source.android.com/security/verifiedboot), even when installing custom operating systems.

Beginning with the **Pixel 8** and **8 Pro**, Pixel devices receive a minimum of 7 years of guaranteed security updates, ensuring a much longer lifespan compared to the 2-5 years competing OEMs typically offer.

[:material-shopping: Store](https://store.google.com/category/phones){ .md-button .md-button--primary }

</div>

Secure Elements like the Titan M2 are more limited than the processor's Trusted Execution Environment used by most other phones as they are only used for secrets storage, hardware attestation, and rate limiting, not for running "trusted" programs. Phones without a Secure Element have to use the TEE for *all* of those functions, resulting in a larger attack surface.

Google Pixel phones use a TEE OS called Trusty which is [open source](https://source.android.com/security/trusty#whyTrusty), unlike many other phones.

The installation of GrapheneOS on a Pixel phone is easy with their [web installer](https://grapheneos.org/install/web). If you don't feel comfortable doing it yourself and are willing to spend a bit of extra money, check out the [NitroPhone](https://shop.nitrokey.com/shop) as they come preloaded with GrapheneOS from the reputable [Nitrokey](https://nitrokey.com/about) company.

A few more tips for purchasing a Google Pixel:

- If you're after a bargain on a Pixel device, we suggest buying an "**a**" model, just after the next flagship is released. Discounts are usually available because Google will be trying to clear their stock.
- Consider price beating options and specials offered at physical stores.
- Look at online community bargain sites in your country. These can alert you to good sales.
- Google provides a list showing the [support cycle](https://support.google.com/nexus/answer/4457705) for each one of their devices. The price per day for a device can be calculated as:
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline" class="tml-display" style="display:inline math;">
      <mfrac>
        <mtext>Cost</mtext>
        <mrow>
          <mtext>End of Life Date</mtext>
          <mo>−</mo>
          <mtext>Current Date</mtext>
        </mrow>
      </mfrac>
    </math>
    , meaning that the longer use of the device the lower cost per day.
- If the Pixel is unavailable in your region, the [NitroPhone](https://shop.nitrokey.com/shop) can be shipped globally.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must support at least one of our recommended custom operating systems.
- Must be currently sold new in stores.
- Must receive a minimum of 5 years of security updates.
- Must have dedicated secure element hardware.

---
title: "TVs & Projectors"
icon: material/tv 
description: Alternatives towards TVs and Projectors 
cover: tv-projectors.webp
---

<!---If material/tv exists otherwise change--->
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-eye-outline: Mass Surveillance](basics/common-threats.md#mass-surveillance-programs){ .pg-blue }

In general, the TV industry has moved toward making them "smart", meaning that it's super rare to find "dumb" TVs, if you can find a TV that doesn't spy on you. Projectors generally haven't followed the same path, but there are projectors that have "smart features" built in. Below are software and hardware recommendations to protect your privacy.

## Software

### Kodi

<div class="admonition recommendation" markdown>

![Kodi logo](assets/img/tv-projectors/kodi.svg){ align=right }

**Kodi** is a Free and Open Source (FOSS) client that can replace the interface of the likes of Smart TVs, it supports all variety of entertainment including TV (PVR), Music, Games, Videos (TV Shows, Movies) and Pictures. Kodi relies on content being stored locally or on the internet for things like Youtube or hardware to interface with things like TV (PVR) and you can use add-ons<sup>1.</sup> to extend the experience. Kodi is compatible with most operating systems and hardware, including Apple, Raspberry Pi, Linux, and Android, see the [requirements here](https://kodi.wiki/view/Supported_hardware) for running Kodi.

[:octicons-home-16: Homepage](https://kodi.tv){ .md-button .md-button--primary }
[:octicons-info-16:](https://kodi.wiki/){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/xbmc/xbmc){ .card-link title="Source Code" }
[:octicons-heart-16:](https://kodi.tv/contribute/){ .card-link title=Contribute }

</details>

</div>

1. Kodi has an add-ons store to extend the out-of-the-box experience, but **keep in mind that add-ons are made by the community and the company itself, so be careful what you install** luckily most software add-ons are also FOSS, meaning the code on them can be inspected, but in general be careful what you install, see the [addons site](https://kodi.tv/addons/) for more.


# Hardware
## Display
### Monitors (Recommended)
Generally speaking, unless you want to go the used route, it is impossible if not rare to find "dumb" TVs in stores nowadays, so one of the general recommendations is to buy a monitor in the size of a TV (not ultra-wide ones) or the one you want, and adding something like our software recommendations above and devices below makes for a generally much more private alternative than buying a Smart TV.
### Used TVs
If you're willing to go the used route. You could find used TVs on selling sites like craiglist (with necessary precautions) or your local e-waste store which could be a better alternative than the ladder which will generally be "dumbed down" however it does come with downsides which is why the monitor approach is recommended. Also, these TVs will generally be either CRTs or LCDs and we would recommend avoiding used CRT TVs unless you know the risks with them or are willing to be more "janky", especially as CRTs suffer from [burn-in](https://en.wikipedia.org/wiki/Screen_burn-in) and are complex to maintain and generally do not have modern ports like HDMI. And of course for LCDs, old LCD TVs generally do not have the best quality over modern LED, LCD or OLED TVs or monitors, but old LCD is your best bet here.

## Devices
### Raspberry Pi

<div class="admonition recommendation" markdown>

![Raspberry Pi logo](assets/img/tv-projectors/raspberrypi.svg){ align=right }

The Raspberry Pi is a single board computer that is able to use the POGO pins to extend functionality like the [TV HAT](https://www.raspberrypi.com/products/raspberry-pi-tv-hat/) to be used as a TV. It also uses Linux as it's main operating system which also supports the software above, making it a private alternative to the "smart" features we get, it and hopefully other SBC's having something like the TV Hat means that if the consumer still wants television (PVR) or other functionalities still with their monitor, they can use that as an extension.

[:octicons-home-16: Homepage](https://www.raspberrypi.com/){ .md-button .md-button--primary }

</details>

</div>

### Computer
In general, a computer that meets the hardware requirements for the above software can also serve as a media entertainment system and can be expanded to a TV (PVR) with a [Tuner Card](https://kodi.wiki/view/PVR/Tuner_cards). See the related pages for hardware and software requirements.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Software
- Must be open source.
- Must support a wide variety of hardware.
- Must have functionality that can replace the likes of Smart TVs.
### Hardware
For Displays:
- Must not collect any sensitive data or otherwise be a "Smart" device
- Must support the ports devices can use like HDMI, No adapters.

For Devices:
- Similar to Displays, software must not collect any sensitive data (out of the box).
- Can use operating systems like Linux. 
- Can use different peripherals for the likes of TV (PVR) and others and can use the recommended software.
<!--- Feel free to help with the criteria, I'm not sure PG's stance on those I'm going on my own --->

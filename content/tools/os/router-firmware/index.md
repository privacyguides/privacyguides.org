---
title: "Router Firmware"
description: Alternative operating systems for securing your router or Wi-Fi access point.
aliases:
- /router
- /en/router
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)
[{{< badge content="Passive Attacks" color="amber" >}}](../../../wiki/basics/common-threats/index.md#security-and-privacy)

Below are a few alternative operating systems that can be used on routers, Wi-Fi access points, etc.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#openwrt" title="OpenWrt" image="./openwrt.svg" subtitle="OpenWrt is a Linux-based operating system; it’s primarily used on embedded devices to route network traffic. It includes util-linux, uClibc, and BusyBox. All the components have been optimized for home routers." >}}
  {{< card link="#opnsense" title="OPNsense" image="./opnsense.svg" subtitle="OPNsense is an open-source, FreeBSD-based firewall and routing platform which incorporates many advanced features such as traffic shaping, load balancing, and VPN capabilities, with many more features available in the form of plugins." >}}
{{< /cards >}}
</div>

## OpenWrt

{{< title-card logo="./openwrt.svg" >}}

**OpenWrt** is a Linux-based operating system; it's primarily used on embedded devices to route network traffic. It includes util-linux, uClibc, and BusyBox. All the components have been optimized for home routers.

{{< cards >}}
  {{< card link="https://openwrt.org" title="Homepage" icon="home" >}}
  {{< card link="https://openwrt.org/docs/start" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

You can consult OpenWrt's [table of hardware](https://openwrt.org/toh/start) to check if your device is supported.

## OPNsense

{{< title-card logo="./opnsense.svg" >}}

**OPNsense** is an open-source, FreeBSD-based firewall and routing platform which incorporates many advanced features such as traffic shaping, load balancing, and VPN capabilities, with many more features available in the form of plugins. OPNsense is commonly deployed as a perimeter firewall, router, wireless access point, DHCP server, DNS server, and VPN endpoint.

{{< cards >}}
  {{< card link="https://opnsense.org" title="Homepage" icon="home" >}}
  {{< card link="https://docs.opnsense.org/index.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

OPNsense was originally developed as a fork of [pfSense](https://en.wikipedia.org/wiki/PfSense), and both projects are noted for being free and reliable firewall distributions which offer features often only found in expensive commercial firewalls. Launched in 2015, the developers of OPNsense [cited](https://docs.opnsense.org/history/thefork.html) a number of security and code-quality issues with pfSense which they felt necessitated a fork of the project, as well as concerns about Netgate's majority acquisition of pfSense and the future direction of the pfSense project.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be open source.
- Must receive regular updates.
- Must support a wide variety of hardware.

---
title: DNS Filtering
description: For our more technical readers, self-hosting a DNS solution can provide filtering for devices not covered by cloud-based DNS solutions.
aliases:
- /self-hosting/dns-filtering
- /tools/self-hosting
- /en/self-hosting/dns-filtering
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

**Self-hosting DNS** is useful for providing [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) on controlled platforms, such as smart TVs and other IoT devices, as no client-side software is needed. Keep in mind that the DNS solutions below are typically restricted to your home or local network unless you set up a more advanced configuration.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#pi-hole" title="Pi-hole" image="./pi-hole.svg" subtitle="Pi-hole is an open-source DNS sinkhole which features a friendly web interface to view insights and manage blocked content. Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware." >}}
  {{< card link="#adguard-home" title="AdGuard Home" image="./adguard-home.svg" subtitle="AdGuard Home is an open-source DNS sinkhole which features a polished web interface to view insights and manage blocked content." >}}
{{< /cards >}}
</div>

## Pi-hole

{{< title-card logo="./pi-hole.svg" >}}

**Pi-hole** is an open-source DNS sinkhole which features a friendly web interface to view insights and manage blocked content. Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware.

{{< cards >}}
  {{< card link="https://pi-hole.net" title="Homepage" icon="home" >}}
  {{< card link="https://pi-hole.net/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

## AdGuard Home

{{< title-card logo="./adguard-home.svg" >}}

**AdGuard Home** is an open-source DNS sinkhole which features a polished web interface to view insights and manage blocked content.

{{< cards >}}
  {{< card link="https://adguard.com/adguard-home/overview.html" title="Homepage" icon="home" >}}
  {{< card link="https://adguard.com/privacy/home.html" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

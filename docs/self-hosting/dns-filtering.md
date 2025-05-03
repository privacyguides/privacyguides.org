---
title: DNS Filtering
meta_title: "Self-Hosted DNS Solutions - Privacy Guides"
icon: material/dns
description: For our more technical readers, self-hosting your DNS solution can provide filtering for devices not covered by cloud-based DNS solutions.
cover: dns.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](../basics/common-threats.md#privacy-from-service-providers){ .pg-teal }
- [:material-account-cash: Surveillance Capitalism](../basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as smart TVs and other IoT devices, as no client-side software is needed. Keep in mind that the DNS solutions below are typically restricted to your home/local network unless you set up a more advanced configuration.

### Pi-Hole

<div class="admonition recommendation" markdown>

![Pi-hole logo](../assets/img/self-hosting/pi-hole.svg){ align=right }

**Pi-hole** is an open-source [DNS sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.

[:octicons-home-16: Homepage](https://pi-hole.net){ .md-button .md-button--primary }
[:octicons-eye-16:](https://pi-hole.net/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://docs.pi-hole.net){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
[:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title="Contribute" }

</div>

### AdGuard Home

<div class="admonition recommendation" markdown>

![AdGuard Home logo](../assets/img/self-hosting/adguard-home.svg){ align=right }

**AdGuard Home** is an open-source [DNS sinkhole](https://en.wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://cloudflare.com/learning/access-management/what-is-dns-filtering) to block unwanted web content, such as advertisements.

AdGuard Home features a polished web interface to view insights and manage blocked content.

[:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
[:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

</div>

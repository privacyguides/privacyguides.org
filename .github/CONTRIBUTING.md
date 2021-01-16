# Contributing Guidelines

Please read this document in full before contributing.

- [Rules](#rules)
- [Quality over Quantity](#quality-over-quantity)
- [Software Criteria](#software-criteria)
  - [Main (All Software)](#main)
  - [Providers](#providers)
    - [DNS](#dns)
    - [VPN](#vpn)
    - [Email](#email)
  - [Hardware](#hardware)
  - [Software](#software)
  - [Encryption](#encryption)
  - [Operating Systems](#operating-systems)
- [Images](#images)
- [Licensing](#licensing)
- [Contributing via email](#contributing-via-email)

## Rules

- Be nice and respectful.
- Be constructive.

## Quality over Quantity

We're trying to keep it simple and promote the best tools, not all of them.

Something meeting the below criteria ***does not automatically qualify it to be included on the site!***

## Software Criteria

### Primary Requirements

- Privacy respecting (duh!).

### Primary Recommendations

- Open Source / Free Software.
- Prioritize Products without Vendor Lock-in (decentralized/self-hostable) or data interoperability.
- Cross-platform / Accessible.
- Easy to use. Could your mother use that tool or service? Usability is most important.

If no software exists in a certain category that meets *all* these criteria, exceptions can be made on a case-by-case basis.

### Service Provider Information

- Products and services listed as "Providers" SHOULD be prioritized primarily based on their jurisdiction (i.e. how privacy-respecting the laws of their home country are).

### DNS Provider Requirements

- MUST support DoH or DoT (DNSCrypt is great too, but there is already https://github.com/DNSCrypt/dnscrypt-resolvers which is directly supported by dnscrypt-proxy, so we don't consider it useful to list providers exclusively supporting it).
- MUST support DNSSEC (https://dnssec.vs.uni-due.de/ can test your current DNS provider).
- MUST NOT log IP addresses during normal operation (If your suggested provider *ever* logs, please compare its privacy policy with other servers on our table that keep logs).
- SHOULD support QNAME minimization (if you have access to the dig command, `dig +short txt qnamemintest.internet.nl` or `Resolve-DnsName -Type TXT -Name qnamemintest.internet.nl` if you are on Windows 10).

### VPN

See https://privacyguides.org/providers/vpn/#criteria for full details, the following is an incomplete summary.

- MUST NOT be based in USA or UK.
- MUST be accessible via Open Source Software (e.g. OpenVPN, WireGuard).
- MUST Use Strong Encryption.
- SHOULD Accept Cryptocurrency.
- MUST have a no logging policy.

### Email

See https://privacyguides.org/providers/email/#criteria for full details, the following is an incomplete summary.

- MUST Support SMTP SSL.
- SHOULD be accessible with standard/FOSS software (e.g. allows IMAP).

### Hardware

- SHOULD be [H-Node Class A](https://h-node.org/wiki/page/en/compatibility-classes) or equivalent (if applicable)
- SHOULD prioritize hardware certifications like [RYF](https://ryf.fsf.org/), [OSHWA](https://certification.oshwa.org/), and OSI when available.
- SHOULD NOT lock users to a particular platform.

### Software

- MUST be able to download over encrypted network (can be a mirror).
- SHOULD be Free and Open Source Software.

### Encryption

- Only verifiable encryption is to be trusted

### Operating Systems

- Must state if recommends, depends on, or offers non-free software (contrib)
- No Tracking Policy (opt-in analytics is ok)

## Images

- SVG file format is strongly preferred. PNG files can be used as a fallback if images are too complex or otherwise unsuitable as a vector format.
- Provider logo dimensions are 384px x 128px ([example](/assets/img/legacy_svg/3rd-party/mullvad.svg))
- Tool logo dimensions are 128px x 128px ([SVG example](/assets/img/leagcy_svg/3rd-party/firefox_browser.svg), [PNG example](/assets/img/legacy_png/3rd-party/claws_mail.png))

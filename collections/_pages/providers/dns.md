---
layout: page
title: "DNS Resolvers"
description: "The Domain Name System (DNS) is the phonebook of the Internet. DNS translates domain names to IP addresses so browsers and other services can load Internet resources."
---

## When to use encrypted DNS?

<p>
  HTTPS already provides security from anyone modifying Normal cleartext DNS by requiring the websites to have a valid TLS certificate, although anyone can still see which domains you visited. But that is the case with Encrypted DNS too. As an adversary can use <a href="https://madaidans-insecurities.github.io/encrypted-dns.html#sni">SNI</a>,<a href="https://madaidans-insecurities.github.io/encrypted-dns.html#ocsp">OCSP</a> or <a href="https://madaidans-insecurities.github.io/encrypted-dns.html#ip-addresses">IP Addresses</a> of websites to know that anyway. As a result any attempt to bypass censorship evasion using encrypted DNS is still noticed and possibly recorded too.
</p>

<p>
  Which is to say, <strong><mark>Encrypted DNS alone doesn't provide any real privacy or security benefits and VPN and TOR are more suitable for censorship evasion.</mark></strong>
</p>

<p>
  After going via the flowchart if you decide to use Encrypted DNS over Normal DNS. We recommend the natively supported methods over third party apps.
</p>

<section>
    ## Encrypted DNS Resolvers
  <p>
    If you need to use Encrypted DNS Resolvers or change your current DNS provider then listed below are some privacy-centric alternatives to the traditional DNS providers. 
  </p>

  <p>
    All recommended public DNS service providers offer <strong><mark>DNS over HTTPS (DoH) and DNS over TLS (DoT), with QNAME minimization and DNSSEC</mark></strong>. For the terms used in the table refer to the <a href="#definitions">definitions</a> below.
  </p>

  <center>
    <img class="flowchart" src="../../../assets/img/dns/dns.svg" alt="DNS flowchart">
  </center>
</section>

{% include recommendation-table.html data='dns' %}

## Encrypted DNS on Windows
<p>
  Users can turn on DoH natively supported by Windows 10 or later by following <a href="https://docs.microsoft.com/en-us/windows-server/networking/dns/doh-client-support">this guide</a>.
</p>


## Encrypted DNS on Android

{%
  include legacy/cardv2.html
  title="Android's built-in DNS-over-TLS resolver"
  image="/assets/img/legacy_svg/3rd-party/android.svg"
  description="Android comes with built-in DNS-over-TLS support without the need for a 3rd-party application since Android version 9 (Pie) and will add support for DoH in upcoming Android 13."
  website="https://support.google.com/android/answer/9089903#private_dns"
%}

{%
  include legacy/cardv2.html
  title="RethinkDNS"
  image="/assets/img/android/rethink.png"
  description='An open-source Android client supporting DNS-over-HTTPS, DNS-over-TLS, DNSCrypt and DNS Proxy along with caching DNS responses, locally logging DNS queries and can be used as a firewall too. <mark>This is recommended only to those using Android older than version 9 (Pie) and are requested to migrate to a more up to date device ASAP.</mark>'
  website="https://rethinkdns.com/"
  privacy-policy="https://rethinkdns.com/privacy"
  fdroid="https://f-droid.org/packages/com.celzero.bravedns/"
  googleplay="https://play.google.com/store/apps/details?id=com.celzero.bravedns"
  source="https://github.com/celzero/rethink-app"
%}

## Encrypted DNS on Apple devices

<p>
  In iOS, iPadOS, tvOS 14 and macOS 11, DoT and DoH were introduced. DoT and DoH are supported natively by installation of profiles (through mobileconfig files opened in <em>Safari</em>).
  After installation, the encrypted DNS server can be selected in <em>Settings &rarr; General &rarr; VPN and Network &rarr; DNS</em>.
</p>

<ul>
  <li><strong>Signed profiles</strong> are offered by <a href="https://adguard.com/en/blog/encrypted-dns-ios-14.html">AdGuard</a> and <a href="https://apple.nextdns.io/">NextDNS</a>.</li>
</ul>

## Definitions

<p><strong>DNS-over-TLS (DoT):</strong>
  A security protocol for encrypted DNS on a dedicated port 853. Some providers support port 443 which generally works everywhere while port 853 is often blocked by restrictive firewalls.
</p>

<p><strong>DNS-over-HTTPS (DoH):</strong>
  Similar to DoT, but uses HTTPS instead, being indistinguishable from "normal" HTTPS traffic on port 443 and more difficult to block. {% include badge.html color="warning" text="Warning" tooltip="DoH contains metadata such as user-agent (which may include system information) that is sent to the DNS server." link="https://tools.ietf.org/html/rfc8484#section-8.2" icon="fas fa-exclamation-triangle" %}
</p>

<p><strong>DNSSEC:</strong>
  It creates a secure domain name system by adding cryptographic signatures to existing DNS records. By checking its associated signature, you can verify that a requested DNS record comes from its authoritative name server and wasn’t altered en-route, opposed to a fake record injected in a man-in-the-middle attack.
</p>

<p><strong>QNAME minimization:</strong>
  It's a privacy oriented feature in DNS which aims to limit DNS queries from the recursive resolver to include only as much detail in each query as is required for that step in the resolution process.
</p>

<p><strong>ECS:</strong>
  EDNS Client-Subnet (ECS) is an extension to the DNS protocol to include components of the end-user IP address data in requests that are sent to the authoritative DNS servers. This leads to gains in network connection speed as the requested domain's IP returned to the client is usually the closest to them. This is typically used to improve the performance of Content Distribution Networks.
</p>

<p><strong>DNSCrypt:</strong>
  With an <a href="https://dnscrypt.info/protocol/">open specification</a>, DNSCrypt is an older, yet robust method for encrypting DNS.
</p>

<p><strong>Anonymized DNSCrypt:</strong>
  A <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS">lightweight protocol</a> that hides the client IP address by using pre-configured relays to forward encrypted DNS data. This is a relatively new protocol created in 2019 currently only supported by <a href="#dns-desktop-clients">dnscrypt-proxy</a> and a limited number of <a href="https://github.com/DNSCrypt/dnscrypt-resolvers/blob/master/v3/relays.md">relays</a>.
</p>

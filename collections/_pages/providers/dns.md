---
layout: page
title: "Encrypted DNS Resolvers"
description: "Don't let Google see all your DNS traffic. Discover privacy-centric alternatives to the traditional DNS providers."
---

<div class="alert alert-warning" role="alert">
  DNS-over-HTTPS, DNS-over-TLS, and DNSCrypt resolvers will not make you anonymous. Using Anonymized DNSCrypt hides <em>only</em> your DNS traffic from your Internet Service Provider. However, using any of these protocols will prevent DNS hijacking, and make your DNS requests harder for third parties to eavesdrop on and tamper with. If you are currently using Google's DNS resolver, you should pick an alternative here. See the <a href="#definitions">definitions</a> below.
</div>

{% include recommendation-table.html data='dns' %}

## Encrypted DNS Clients for Desktop

{%
  include legacy/cardv2.html
  title="Unbound"
  image="/assets/img/legacy_svg/3rd-party/unbound.svg"
  description='A validating, recursive, caching DNS resolver, supporting DNS-over-TLS, and has been <a href="https://ostif.org/our-audit-of-unbound-dns-by-x41-d-sec-full-results/">independently audited</a>.'
  website="https://nlnetlabs.nl/projects/unbound/about/"
  github="https://github.com/NLnetLabs/unbound"
%}

{%
  include legacy/cardv2.html
  title="dnscrypt-proxy"
  image="/assets/img/legacy_svg/3rd-party/dnscrypt-proxy.svg"
  description='A DNS proxy with support for DNSCrypt, DNS-over-HTTPS, and <a href="https://github.com/DNSCrypt/dnscrypt-protocol/blob/master/ANONYMIZED-DNSCRYPT.txt">Anonymized DNSCrypt</a>, a <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS">relay-based protocol that the hides client IP address.</a>'
  website="https://github.com/DNSCrypt/dnscrypt-proxy/wiki"
  github="https://github.com/DNSCrypt/dnscrypt-proxy"
%}

{%
  include legacy/cardv2.html
  title="Stubby"
  image="/assets/img/legacy_png/3rd-party/stubby.png"
  description='An application that acts as a local DNS-over-TLS stub resolver. Stubby can be used in <a href="https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients#DNSPrivacyClients-Unbound/Stubbycombination">combination with Unbound</a> by managing the upstream TLS connections (since Unbound cannot yet re-use TCP/TLS connections) with Unbound providing a local cache.'
  website="https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby"
  github="https://github.com/getdnsapi/stubby"
%}

{%
  include legacy/cardv2.html
  title="Firefox's built-in DNS-over-HTTPS resolver"
  image="/assets/img/legacy_svg/3rd-party/firefox_browser.svg"
  description='Firefox comes with built-in DNS-over-HTTPS support for <a href="https://blog.mozilla.org/blog/2020/02/25/firefox-continues-push-to-bring-dns-over-https-by-default-for-us-users/">NextDNS and Cloudflare</a> but users can manually use any other DoH resolver.'
  labels="color==warning::icon==fas fa-exclamation-triangle::link==https://developers.cloudflare.com/1.1.1.1/privacy/firefox::text==Warning::tooltip==Cloudflare logs a limited amount of data about the DNS requests that are sent to their custom resolver for Firefox."
  website="https://support.mozilla.org/en-US/kb/firefox-dns-over-https"
  privacy-policy="https://wiki.mozilla.org/Security/DOH-resolver-policy"
%}

## Encrypted DNS Clients for Android

{%
  include legacy/cardv2.html
  title="Android 9's built-in DNS-over-TLS resolver"
  image="/assets/img/legacy_svg/3rd-party/android.svg"
  description="Android 9 (Pie) comes with built-in DNS-over-TLS support without the need for a 3rd-party application."
  labels="color==warning::icon==fas fa-exclamation-triangle::link==https://developers.google.com/speed/public-dns/docs/using#android_9_pie_or_later::text==Warning::tooltip==Android 9's DoT settings have no effect when used concurrently with VPN-based apps which override the DNS."
  website="https://support.google.com/android/answer/9089903#private_dns"
%}

{%
  include legacy/cardv2.html
  title="Nebulo"
  image="/assets/img/legacy_png/3rd-party/nebulo.png"
  description='An open-source Android client supporting DNS-over-HTTPS and DNS-over-TLS, caching DNS responses, and locally logging DNS queries.'
  website="https://git.frostnerd.com/PublicAndroidApps/smokescreen/-/blob/master/README.md"
  privacy-policy="https://smokescreen.app/privacypolicy"
  fdroid="https://git.frostnerd.com/PublicAndroidApps/smokescreen#f-droid"
  googleplay="https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen"
  source="https://git.frostnerd.com/PublicAndroidApps/smokescreen"
%}

## Encrypted DNS Clients for iOS

{%
  include legacy/cardv2.html
  title="DNSCloak"
  image="/assets/img/legacy_png/3rd-party/dnscloak.png"
  description='An open-source iOS client supporting DNS-over-HTTPS, DNSCrypt, and <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki">dnscrypt-proxy</a> options such as caching DNS responses, locally logging DNS queries, and custom block lists. Users can <a href="https://medium.com/privacyguides/adding-custom-dns-over-https-resolvers-to-dnscloak-20ff5845f4b5">add custom resolvers by DNS stamp</a>.'
  website="https://github.com/s-s/dnscloak/blob/master/README.md"
  privacy-policy="https://drive.google.com/file/d/1050No_pU74CAWUS5-BwQWyO2x_aiMzWc/view"
  ios="https://apps.apple.com/app/id1452162351"
  github="https://github.com/s-s/dnscloak"
%}

## Native Operating System Support

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

<p><strong>DNSCrypt:</strong>
  With an <a href="https://dnscrypt.info/protocol/">open specification</a>, DNSCrypt is an older, yet robust method for encrypting DNS.
</p>

<p><strong>Anonymized DNSCrypt:</strong>
  A <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS">lightweight protocol</a> that hides the client IP address by using pre-configured relays to forward encrypted DNS data. This is a relatively new protocol created in 2019 currently only supported by <a href="#dns-desktop-clients">dnscrypt-proxy</a> and a limited number of <a href="https://github.com/DNSCrypt/dnscrypt-resolvers/blob/master/v3/relays.md">relays</a>.
</p>

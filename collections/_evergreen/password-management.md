---
layout: evergreen
title: Password Managers
mathjax: false
description: |
  Stay safe and secure online with an encrypted and open-source password manager.
---

## Password best practices
- Always use unique passwords. Don't make yourself a victim of "[credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing)".
- Store an exported backup of your passwords in an [encrypted container](/software/file-encryption/) on another storage device. This can be useful if something happens to your device or the service you are using.
- Store [Time-based one-time password (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password) tokens in a separate [TOTP app](/password-management#time-based-one-time-password-managers) and not your password manager. TOTP codes are generated from a "[shared secret](https://en.wikipedia.org/wiki/Time-based_one-time_password#Security)". If the secret is obtained by an adversary they can generate TOTP values. Typically, mobile platforms have better app isolation and more secure methods for storing sensitive credentials.

## Local Password Managers
These password managers store the password database locally.

{% for item_hash in site.data.software.password-manager-local %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Cloud syncing Password Managers
These password managers sync up to a cloud server that may be self-hostable.

{% for item_hash in site.data.software.password-manager-cloud %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Password management servers
These products are self-hostable synchronization for cloud based password managers.

{% for item_hash in site.data.software.password-manager-servers %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Minimal Password Managers
These products are minimal password managers that can be used within scripting applications.

{% for item_hash in site.data.software.password-manager-minimal %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

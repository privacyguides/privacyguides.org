---
layout: evergreen
title: Password Managers
mathjax: false
description: |
  Stay safe and secure online with an encrypted and open-source password manager.
---

## Password best practices

- use unique passwords
- store backup passwords in an [encrypted container](/file-encryption)
- Use a [2FA app](/password-management#time-based-one-time-password-managers)
- Don't store 2FA secrets in your password manager

## Local Password Managers
These password managers store the password database locally

{% for item_hash in site.data.software.password-manager-local %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Cloud syncing Password Managers
These password managers sync up to a cloud server that may be self hostable

{% for item_hash in site.data.software.password-manager-cloud %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Password management servers
These products are selfhostable synchronization for cloud based password managers.

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

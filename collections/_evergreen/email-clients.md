---
layout: evergreen
title: Email Clients
mathjax: false
description: |
  Discover free, open-source, and secure email clients, along with some email alternatives you may not have considered.
---

When using end-to-end encryption (E2EE) technology like [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy), email will still have some metadata that is not encrypted in the header of the email. [Read more about email metadata](https://privacyguides.org/providers/email/#metadata).

OpenPGP also does not support [Forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. [How do I protect my private keys?](/providers/email/#email-encryption)

Rather than use email for prolonged conversations, consider using a medium that [does support Forward secrecy](/real-time-communication/).

## Desktop Clients
{% for item_hash in site.data.software.email-clients-desktop %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Mobile Clients
{% for item_hash in site.data.software.email-clients-mobile %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Text-based clients
{% for item_hash in site.data.software.email-clients-text %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

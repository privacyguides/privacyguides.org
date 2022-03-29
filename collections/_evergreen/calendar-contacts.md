---
layout: evergreen
title: Calendar and Contact Sync Tools
description: |
  Calendaring and contacts are some of the most sensitive data posess. Use only products that use end-to-end encryption (E2EE) at rest. This prevents a provider from reading your data.
---

## Software as a service (SaaS) only
These products are included with an subscription to the respective [email providers](/providers/email).

{% for item_hash in site.data.software.calendar-contacts %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Self-hostable
Some of these options are self-hostable, or able to be hosted by third party providers for a fee:

{% for item_hash in site.data.software.calendar-contacts-self-hosted %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

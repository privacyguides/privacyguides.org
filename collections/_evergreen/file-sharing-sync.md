---
layout: evergreen
title: File Sharing and Sync
description: |
  Discover how to privately share your files between your devices, with your friends and family, or anonymously online.
---

## File Sharing
{% for item_hash in site.data.software.file-sharing %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## File Sync
{% for item_hash in site.data.software.sync %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

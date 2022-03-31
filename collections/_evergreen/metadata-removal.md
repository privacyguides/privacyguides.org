---
layout: evergreen
title: Metadata Removal Tools
description: |
  When sharing files, be sure to remove associated metadata. Image files commonly include [EXIF](https://en.wikipedia.org/wiki/Exif) data. Photos sometimes even include [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) coordinates in the file metadata.
---

## Desktop
{% for item_hash in site.data.software.metadata-removal-desktop %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Mobile
{% for item_hash in site.data.software.metadata-removal-mobile %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Command-line
{% for item_hash in site.data.software.metadata-removal-commandline %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

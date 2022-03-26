---
layout: evergreen
title: Video Streaming
description: |
  The primary threat when using a video streaming platform is that your streaming habits and subscription lists could be used to profile you. You should combine these tools with a [VPN](/providers/vpn/) or [Tor](https://www.torproject.org/) to make it harder to profile your usage.
---

## Clients

{% for item_hash in site.data.software.video-streaming-clients %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Web-based Frontends

{% for item_hash in site.data.software.video-streaming-front-ends %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

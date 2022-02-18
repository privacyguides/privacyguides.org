---
layout: evergreen
title: Video Streaming
description: |
  The primary threat when using a video streaming platform is that your streaming habits and subscription lists could be used to profile you. You should combine these tools with a [VPN](/providers/vpn/) or [Tor](https://www.torproject.org/) to make it harder to profile your usage.
---

## Client

{% for item_hash in site.data.software.video-streaming-clients %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Web-based Frontends

The recommended frontend below is useful if you want to disable JavaScript in your browser. It does not provide privacy by itself and we don't recommend logging into any accounts.

{% for item_hash in site.data.software.video-streaming-front-ends %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

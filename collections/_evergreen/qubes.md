---
layout: evergreen
title: Qubes OS
mathjax: false
description: |
   Qubes OS is a distribution of Linux that uses [Xen](https://en.wikipedia.org/wiki/Xen) provide app isolation.
---

{% for item_hash in site.data.operating-systems.qubes %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}


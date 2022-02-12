---
layout: evergreen
title: Search Engines
description: |
    Use a search engine that doesn't build an advertising profile based on your searches.

    The recommendations here are based on the merits of each service's privacy policy. There is **no guarantee** that these privacy policies are honored.

    Consider using a [VPN](/providers/vpn) or [Tor](https://www.torproject.org/) if your threat model requires hiding your IP address from the search provider.
---

{% for item_hash in site.data.providers.search-engines %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

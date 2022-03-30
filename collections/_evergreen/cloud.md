---
layout: evergreen
title: Cloud Storage
description: |
  If you are currently using a Cloud Storage Service like Dropbox, Google Drive, Microsoft OneDrive or Apple iCloud, you are putting complete trust in your service provider to not look at your files.

  Consider reducing the need to trust your provider, by using an alternative below that supports [end-to-end encryption](https://wikipedia.org/wiki/End-to-end_encryption) (E2EE).
---

{% for item_hash in site.data.providers.cloud %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

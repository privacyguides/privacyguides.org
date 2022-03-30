---
layout: evergreen
title: Notebooks
description: |
  Keep track of your notes and journalings without giving them to a third party.
---

If you are currently using an application like Evernote, Google Keep, or Microsoft OneNote, we suggest you pick an alternative here that supports [End-to-end encryption (E2EE)](https://en.wikipedia.org/wiki/End-to-end_encryption).

## Cloud based
{% for item_hash in site.data.software.notebooks %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Local notebooks
{% for item_hash in site.data.software.notebooks-local %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

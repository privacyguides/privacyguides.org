---
layout: evergreen
title: File Encryption Software
description: |
  Encryption of data is the only way to control who can access it. If you are currently not using encryption software for your hard disk, emails, or file archives, you should pick an option here.
---

## Multi-platform
The options listed here are multi-platform and great for creating encrypted backups of your data.

{% for item_hash in site.data.software.encryption-multi-platform %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Operating system included Full Disk Encryption (FDE)
Modern operating systems include [disk encryption](https://en.wikipedia.org/wiki/Disk_encryption) and will utilize a [secure cryptoprocessor](https://en.wikipedia.org/wiki/Secure_cryptoprocessor).

{% for item_hash in site.data.software.encryption-operating-system %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Browser-based
Web based encryption can be useful when you need to encrypt a file, and you cannot install software or apps on your device.

{% for item_hash in site.data.software.encryption-browser-based %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Command-line
Tools with commandline interfaces are useful for intergrating [shell scripts](https://en.wikipedia.org/wiki/Shell_script).

{% for item_hash in site.data.software.encryption-commandline %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

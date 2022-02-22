---
layout: evergreen
title: Browser Recommendations
description: |
  These are our current web browser recommendations and settings you can use to preserve your privacy. We recommend keeping extensions to a minimum: they have privileged access within your browser, require you to trust the developer, can make you [stand out](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), and [weaken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site isolation.
---

## General Recommendations

{% for item_hash in site.data.software.browsers %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Desktop Browser Recommendations

{% for item_hash in site.data.software.browsers-desktop %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Mobile Browser Recommendations

On Android, Mozilla's engine [GeckoView](https://mozilla.github.io/geckoview/) has yet to support [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) or enable [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196). Firefox Android also doesn't yet have [HTTPS-Only mode](https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218) built-in. We do not recommend Firefox or any Gecko based browsers at this time.

On iOS all web browsers use the [WebKit](https://en.wikipedia.org/wiki/WebKit) browser engine, including Firefox. However, Firefox includes a few extra features like Tracking Protection and the ability to add search engines.

{% for item_hash in site.data.software.browsers-mobile %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

## Additional Resources

{% for item_hash in site.data.software.browsers-resources %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}

{% endfor %}

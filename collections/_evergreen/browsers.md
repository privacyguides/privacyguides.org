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

<p>On Android, Mozilla's engine <a href="https://mozilla.github.io/geckoview/">GeckoView</a> has yet to support <a href="https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture">site isolation</a> or enable <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1565196">isolatedProcess</a>. Firefox Android also doesn't yet have <a href="https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218">HTTPS-Only mode</a> built-in. These features are supported in Bromite as it uses <a href="https://developer.android.com/reference/android/webkit/WebView">Chromium WebView</a> which is included in all Android operating systems. We do not recommend Firefox or any Gecko based browsers at this time.</p>

<p>On iOS all web browsers use the <a href="https://en.wikipedia.org/wiki/WebKit">WebKit</a> browser engine, including Firefox. However, Firefox includes a few extra features like Tracking Protection and the ability to add search engines.</p>

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

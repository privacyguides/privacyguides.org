---
title: Curated Articles from Around the Web
hide:
    - navigation
    - feedback
---
<script>
    window.location.href = "https://discuss.privacyguides.org/c/blog/10";
</script>
{% for article in articles %}
- **{{ article.date }}**: [{{ article.name }}]({{ article.url }}) from *{{ article.publisher }}*
{% endfor %}

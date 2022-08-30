---
title: Curated Articles from Around the Web
hide:
    - navigation
    - feedback
---
{% for article in articles %}
- **{{ article.date }}**: [{{ article.name }}]({{ article.url }}) from *{{ article.publisher }}*
{% endfor %}

---
date:
    created: 2023-02-26
categories:
    - Announcements
authors:
    - freddy
    - dngray
    - niek-de-wilde
tags:
    - Privacy Guides
license: BY-SA
description: It's finally here. After countless requests, Privacy Guides now has translations.
schema_type: NewsArticle
---
# Privacy Guides Is Now Multilingual

It's finally here. After countless requests, Privacy Guides now has translations.

People have always asked us for translations to other languages because our team and community produces high quality, reliable, honest, and researched content. Our [previous site](https://blog.privacyguides.org/2021/09/14/welcome-to-privacy-guides) never had a system for this. All translations were done manually, and translators would quickly lose interest. Translated sites would be outdated and lay unmaintained on domains that we didn't own. Privacy Guides now has a proper system.<!-- more -->

Our site runs [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), which supports [internationalization](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/). This allows us to provide language specific content without the mammoth effort previously required.

## What we're planning

You can expect translations of this blog – and lots more content. We will add languages to the site when they near completion. That way they can be checked to make sure they maintain the high quality that people have come to expect from the rest of Privacy Guides.

### Translators

We'd also like to remind everyone you can stay up to date with the main site by looking at [our release page](https://github.com/privacyguides/privacyguides.org/releases), this will show major changes to the main content. You can subscribe with a [News Aggregator](https://www.privacyguides.org/news-aggregators):

- [privacyguides.org (Releases)](https://github.com/privacyguides/privacyguides.org/releases.atom).
- [privacyguides.org (Commit log)](https://github.com/privacyguides/privacyguides.org/commits/main.atom)
- [blog.privacyguides.org](https://blog.privacyguides.org/feed_rss_created.xml)
- [blog.privacyguides.org (Commit log)](https://github.com/privacyguides/blog.privacyguides.org/commits/main.atom)

The blog doesn't have releases, but articles are generally published in a complete state and only updated with minor changes.

Feel free to check out our localization room on Matrix [#pg-i18n:aragon.sh](https://matrix.to/#/%23pg-i18n:aragon.sh) if you have any questions on getting started. You can [find us on Crowdin](https://crowdin.com/project/privacyguides).

Please note that the English version of the site is the primary version, meaning changes occur there first. This means it is still possible that specific languages may be behind. If you notice such an instance please help out. We cannot guarantee the accuracy of all our translations. If you have a suggestion about content specific to your region, please open an issue or pull request to our [main repository](https://github.com/privacyguides/privacyguides.org).

#### Some tips for translators

Crowdin has good documentation and we suggest looking at their [Getting Started](https://support.crowdin.com/crowdin-intro/) guide. Our site is in [Markdown](https://en.wikipedia.org/wiki/Markdown), so it should be easy to chip in.

#### Admonitions

Throughout the site we use MkDocs's [admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage), to show information to readers about the products such as `example`, `warning`, `tip`, etc.

By default when admonitions are used they will have an English string on the site. This can be [customized](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#changing-the-title), without too much effort. For example if you were translating and admonition of type [warning](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#type:warning) to Dutch, this is how you would write it:

```text
!!! warning "Waarschuwing"
```

Downloads are a [custom admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#custom-admonitions) that we use and you would write that like:

```text
??? downloads "Downloaden"
```

The same goes for other types, such as `tip`, `example` etc. Recommendations are also admonitions, but they do not need overriding, because the default has no text, so they are always:

```text
!!! recommendation
```

#### Translation software

Translation software gets the translation quite reliable. We've found [DeepL](https://www.deepl.com/en/translator) works well however, attention does need to be given that the translated string is correct.

For example:

```text
![Software logo](assets/img/path/to/image.svg){ align=right }
```

We have sometimes found that the syntax for inserting an image like above was missing the `![` or an extra space was placed between the text and the path, eg `](`. If a translation string is clearly not correct, we encourage you to **delete** it by pressing the trash icon [or vote](https://support.crowdin.com/enterprise/getting-started-for-volunteers/#voting-view) which one you think sounds best. When invalid strings are deleted they are removed from the organization's [translation memory](https://support.crowdin.com/enterprise/translation-memory), meaning that when the source string is seen again, it won't suggest the incorrect translation.

We'd like to thank the [translation team](https://crowdin.com/project/privacyguides/reports/top-members) who spent many hours on translating the content, that we now have. We're going to launch in Dutch, French and Hebrew.

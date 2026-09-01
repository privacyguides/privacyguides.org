---
title: "Language Tools"
icon: material/alphabetical-variant
description: These language tools do not send your input text to a server and can be used offline and self-hosted.
cover: language-tools.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }
- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }

Text inputted to grammar, spelling, and style checkers, as well as translation services, can contain sensitive information which may be stored on their servers for an indefinite amount of time and sold to third parties. The language tools listed on this page do not store your submitted text on a server and can be self-hosted and used offline for maximum control of your data.

## Grammar & Spelling

### LTeX

<div class="admonition recommendation" markdown>

![LTeX logo](assets/img/language-tools/ltex.svg){ align=right }

**LTeX** is a multilingual grammar, style, and spell checker that supports more than 20 languages. It uses the open-source [LanguageTool](https://languagetool.org) spell checker on the backend to check against not just dictionary spelling, but also thousands of grammar rules and stylistic errors.

**LTeX CLI** is a standalone command-line application which runs completely offline.

[:octicons-home-16: Homepage](https://valentjn.github.io/ltex){ .md-button .md-button--primary }
[:octicons-info-16:](https://valentjn.github.io/ltex/index){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/valentjn/ltex-ls){ .card-link title="Source Code" }

</div>

LTeX comes in multiple forms which may suit different use cases. The LTeX CLI is a standalone, command-line application which runs completely offline. The LTeX extension offers integration with popular code editors and runs completely offline.

## Translation Tools

### LibreTranslate

<div class="admonition recommendation" markdown>

![LibreTranslate logo](assets/img/language-tools/libretranslate.png){ align=right }

**LibreTranslate** is a free and open-source machine translation web interface and API server. It uses [Argos Translate](https://github.com/argosopentech/argos-translate) models on the backend for translations.

[:octicons-home-16: Homepage](https://libretranslate.com){ .md-button .md-button--primary }
[:octicons-server-16:](https://github.com/LibreTranslate/LibreTranslate#mirrors){ .card-link title="Public Instances" }
[:octicons-code-16:](https://github.com/LibreTranslate/LibreTranslate){ .card-link title="Source Code" }

</div>

You can use LibreTranslate through a number of public instances, with some that offer a [Tor](tor.md) onion service or an [I2P](alternative-networks.md#i2p-the-invisible-internet-project) eepsite. You can also host the software yourself for maximum control over the text submitted for translation.

We use a self-hosted instance of LibreTranslate to automatically translate posts on our [forum](https://discuss.privacyguides.net) to multiple languages.

We use the VSCode extension in our GitHub repository configuration to find any grammar and spelling errors on our website and in our articles.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be open source.
- Must run completely offline.

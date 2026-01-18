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

### LanguageTool

<div class="admonition recommendation" markdown>

![LanguageTool logo](assets/img/language-tools/languagetool.svg#only-light){ align=right }
![LanguageTool logo](assets/img/language-tools/languagetool-dark.svg#only-dark){ align=right }

**LanguageTool** is a multilingual grammar, style, and spell checker that supports more than 20 languages. According to their privacy policy, they do not store any content sent to their service for review, but for higher assurance the software is [self-hostable](https://dev.languagetool.org/http-server).

[:octicons-home-16: Homepage](https://languagetool.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://languagetool.org/legal/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://languagetooler.freshdesk.com/en/support/solutions){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/languagetool-org){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-appstore: App Store](https://apps.apple.com/app/id1534275760)
- [:fontawesome-brands-windows: Windows](https://languagetool.org/windows-desktop)
- [:simple-apple: macOS](https://languagetool.org/mac-desktop)
- [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/languagetool)
- [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/oldceeleldhonbafppcapldpdifcinji)
- [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/hfjadhjooeceemgojogkhlppanjkbobc)
- [:simple-safari: Safari](https://apps.apple.com/app/id1534275760)

</details>

</div>

LanguageTool offers integration with a variety of [office suites](https://languagetool.org/services#text_editors) and [email clients](https://languagetool.org/services#mail_clients).

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

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be open source.
- Must be possible to self-host.

---
title: "Language Tools"
description: These language tools do not send your input text to a server and can be used offline and self-hosted.
aliases:
- /language-tools
- /en/language-tools
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#languagetool" title="LanguageTool" image="./languagetool.svg" subtitle="LanguageTool is a multilingual grammar, style, and spell checker that supports more than 20 languages. According to their privacy policy, they do not store any content sent to their service for review, but for higher assurance the software is self-hostable." >}}
  {{< card link="#libretranslate" title="LibreTranslate" image="./libretranslate.png" subtitle="LibreTranslate is a free and open-source machine translation web interface and API server. It uses Argos Translate models on the backend for translations." >}}
{{< /cards >}}
</div>

Text inputted to grammar, spelling, and style checkers, as well as translation services, can contain sensitive information which may be stored on their servers for an indefinite amount of time and sold to third parties. The language tools listed on this page do not store your submitted text on a server and can be self-hosted and used offline for maximum control of your data.

## Grammar & Spelling

### LanguageTool

{{< title-card logo="./languagetool.svg" >}}

**LanguageTool** is a multilingual grammar, style, and spell checker that supports more than 20 languages. According to their privacy policy, they do not store any content sent to their service for review, but for higher assurance the software is [self-hostable](https://dev.languagetool.org/http-server).

{{< cards >}}
  {{< card link="https://languagetool.org" title="Homepage" icon="home" >}}
  {{< card link="https://languagetool.org/legal/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="macOS" color="indigo" >}}](https://languagetool.org/mac-desktop)
[{{< badge content="Windows" color="red" >}}](https://languagetool.org/windows-desktop)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/languagetool)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/oldceeleldhonbafppcapldpdifcinji)
[{{< badge content="Edge" >}}](https://microsoftedge.microsoft.com/addons/detail/hfjadhjooeceemgojogkhlppanjkbobc)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1534275760)

LanguageTool offers integration with a variety of [office suites](https://languagetool.org/services#text_editors) and [email clients](https://languagetool.org/services#mail_clients).

## Translation Tools

### LibreTranslate

{{< title-card logo="./libretranslate.png" >}}

**LibreTranslate** is a free and open-source machine translation web interface and API server. It uses [Argos Translate](https://github.com/argosopentech/argos-translate) models on the backend for translations.

{{< cards >}}
  {{< card link="https://libretranslate.com" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/LibreTranslate/LibreTranslate#mirrors" title="Public Instances" icon="server" >}}
{{< /cards >}}

{{< /title-card >}}

You can use LibreTranslate through a number of public instances, with some that offer a [Tor](../tor/index.md) onion service or an [I2P](../../advanced/alternative-networks/index.md#i2p-the-invisible-internet-project) eepsite. You can also host the software yourself for maximum control over the text submitted for translation.

We use a self-hosted instance of LibreTranslate to automatically translate posts on our [forum](https://discuss.privacyguides.net) to multiple languages.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must be open source.
- Must be possible to self-host.

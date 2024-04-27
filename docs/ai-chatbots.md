---
meta_title: "Recommended AI Chatbots : Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chats"
icon: material-chat-processing-outline
description: Unlike OpenAI ChatGPT and it's successors, those AI Chats do not train their models using your conversations.
cover: file/file
---
Since the release of ChatGPT by OpenAI in December 2022, talking with Largue Language Models (LLMs) has become common. It can help us write better, understand unfamiliar subjects or answer a wide range of questions. However, the developpers of those models need data to improve their model. Unfortunately, this include your conversations with the AI.

## Recommended Providers

The recommendations for online providers here do not train their models using your chats and do not retain your chats for more than 30 days, based on each service's privacy policy. There is no guarantee that these privacy policies are honored. Only submit personally identifiable information using a local model.

### DuckDuckGo AI Chat
<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){align=right}

**DuckDuckGo AI Chat** is made by the popular [seach engine provider] (https://www.privacyguides.org/en/search-engines) and is available directly in the search engine. It is available on a Tor hidden site.

[:octicons-home-16: Homepage](https://duckduckgo.com/aichat)
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/aichat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</details>

</div>

-Models: Anthropic Claude 1.2 and Open AI GPT 3-5
-Type : third-party providers proxied trough DDG servers
-Availability : Any browser with JavaScript. Works with Tor.
Rate limit : none
-Privacy : DuckDuckGo has an agreement with the companies ensuring your prompts and outputs aren't used for improving their models. The agreement also states the providers must delete all chats within 30 days.

<div class="admonition danger" markdown>
<p class="admonition-title">Your chats are kept for 30 days</p>
DuckDuckGo act as proxy between you and OpenAI or Claude. However, those two companies will retain your chats for 30 days. Use a local model if your prompts contains PII, and Tor if it contains sensitive information.
</div>
  
### Brave Leo AI

<div class="admonition recommendation" markdown>

![Brave Logo](assets/img/browsers/brave.svg){align=right}

**Brave Leo** is an AI assistant available in the Brave browser, a browser which we recommend. It can analyse the context of the web page you are visiting, but we advise you to disable it on web pages with your PII. 

[:octicons-home-16: Homepage](https://brave.com/leo)
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title=Documentation}

</details>
</div>

-Models : Antrophic Claude Instant, Mixtral 8x7b and Llama 2 13b.
-Type : Claude is run by Anthropic but proxied trough Brave. Other models are hosted by Brave.
-Availability: only available in the Brave Browser.
-Rate limit : Unlimited for Llama 13b, and heavily limited for the rest.
-Privacy : For in-house models, all chats are discarded after session is ended, and chats aren't used for training. For Claude, all data is retained for 30 days but 'personal data' isn't used for training.


<div class="admonition danger" markdown>
<p class="admonition-title">Claude chats are kept for 30 days</p>
We recommend against using Anthropic's Claude Instant becuase they will keep a chat history for 30 days.
</div>

### Kobold.cpp
<div class="admonition recommendation" markdown>
![Kobold.cpp Logo](https://cdn.discordapp.com/icons/849937185893384223/0985bc338dd5c3ec0424db801de06231.webp?size=80){align=right}

Kobold.cpp is an AI client that runs locally on your computer.



[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp)
[:octicons-eye-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }

</details>
</div>

Kobold.cpp allows you to easily run an AI model right on your computer. You simply select your model files and click run. A chat interface will open in your browser.Since it is run locally, you can submit it sensitive information.
Using quantitised model, you can except models to consume between 0.5GB and 2GB of RAM for every billion paramater. Since the minimum for a quality model is 8B, it is strongly recommended to have at least 12GB of RAM. You can download those quantised models in a format called GGUF, at [Hugging Face] (https://huggingface.co/models?sort=trending&search=.GGUF).

-Models : Llama 1,2,3, Mistral, Phi-2, and a few others.
-Type : Local model
-Availability : Linux, Windows
-Rate limit : None
-Privacy : Total

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to our standard criteria, we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must not use your chats for training.
- Must be accessible over a VPN
- Must provide transparency about models operators and privacy policies.
- Must provide at least one model whith an high rate limit that allows you to use it for work.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be accessible over Tor.
- Should not require JavaScript.
- Providers should only have open-source models.
- Should not be rate-limited
- Should not require expensive hardware

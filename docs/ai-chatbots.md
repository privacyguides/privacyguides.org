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

**DuckDuckGo AI Chat** is made by the popular [seach engine provider] (https://www.privacyguides.org/en/search-engines) and is available directly in the search engine. 

[:octicons-home-16: Homepage](https://duckduckgo.com/aichat)
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/aichat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</details>

</div>

DuckDuckGo offers proprietary models from by Anthropic and Open AI. To protect your privacy, DuckDuckGo proxies your chats through their servers, and the agreement between DuckDuckGo and OpenAI and Antrhopic states that your chats aren't to be used for training and be deleted after 30 days. It is available directly on the (DuckDuckGo)[duckduckgo.com] search engine, including on the Tor hidden site. The later guarantees that you have "unlimited" rate limits for the use of the chatbot.

<div class="admonition danger" markdown>
<p class="admonition-title">Your chats are kept for 30 days</p>
DuckDuckGo and the providers can have access to your chats. Use a local model if your prompts contains PII, and Tor if it contains sensitive information.
</div>
  
### Brave Leo AI

<div class="admonition recommendation" markdown>

![Brave Logo](assets/img/browsers/brave.svg){align=right}

**Brave Leo** is an AI assistant available inside the Brave browser, a browser which we recommend. 
[:octicons-home-16: Homepage](https://brave.com/leo)
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title=Documentation}

</details>
</div>
Brave Leo supports a range of models, including open-source models from Meta and Mixtral and closed-source models from Anthropic. Brave host the open models and do not retain chat or train on the data from those models. For Claude models, Brave proxies your chats through their servers,and the agreement between Brave and Anthropic states that chats are to be deleted after 30 days and that 'personal data' isn't used for training. Leo AI is available on the Brave Browser on all platforms. There is a strict rate limit for most models, but there is 1 free model whith an high-rate limit.



<div class="admonition danger" markdown>
<p class="admonition-title">Pages content are sent by default</p>
Brave will send the page content to their severs by default, and there is no way to permanently disable it. However, we recommend manually switching off the "Use page context for response" toggle for pages with PII. 
</div>
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
-You can run models from Meta, Mistral, Microsoft (Phi-2) and others locally on your Windows or Linux PC. Since your data isn't leaving your PC, you don't have to worry about sharing sensitive PII. 
If you use a quantitised model, you can except models to consume between 0.5GB and 2GB of RAM for every billion paramater. Since the minimum parameters count for a satisfactory model is 8B, you should have at least 12gb of RAM. You can download quantised models in a format called GGUF, at [Hugging Face] (https://huggingface.co/models?sort=trending&search=.GGUF).



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

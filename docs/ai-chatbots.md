---
meta_title: "Recommended AI Chatbots : Private ChatGPT Alternatives - Privacy Guides"
title : "AI Chatbots"
icon: file/file
description: Unlike OpenAI ChatGPT and it's successors, those AI Chatbots do not train their models using your conversations.
cover:file/file
---
Since the release of ChatGPT by OpenAI in December 2022, talking with Largue Language Models (LLMs) has become common. It can help us write better, understand unfamiliar subjects or answer a wide range of questions. However, the developpers of those models need data to improve their model. Unfortunately, this include your conversations with the AI.

## Recommended Providers

The recommendations here do not train their models using your chats, do not retain your chats for more than 30 days, and are accessible privately. However, you should not submit sensitive PII to an online provider.

### DuckDuckGo AI Chat

<div class="admonition recommendation" markdown>

!DuckDuckGo logo{align=right}

DuckDuckGo AI Chat is made by the popular [seach engine provider] (https://www.privacyguides.org/en/search-engines) and is available directly in it.

octicons-home-16: Homepage
:simple-torbrowser:{ .card-link title="Onion Service" }
:octicons-eye-16:{ .card-link title="Privacy Policy" }
:octicons-info-16:{ .card-link title=Documentation}

</details>

</div>

Models: Anthropic Claude 1.2 and Open AI GPT 3-5
Type : third-party providers proxied trough DDG servers
Availability : Any browser with JavaScript. Works with Tor.
Rate limit : none
Privacy : DuckDuckGo has an agreement with the companies ensuring your prompts and outputs aren't used for improving their models. The agreement also states the providers must delete all chats within 30 days.



### Brave Leo AI

<div class="admonition recommendation" markdown>

!Brave Logo{align=right}

Brave Leo is an AI assistant available in Brave, a web browser which we recommend.

octicons-home-16: Homepage
:octicons-eye-16:{ .card-link title="Privacy Policy" }
:octicons-info-16:{ .card-link title=Documentation}

</details>
</div>

Models : Antrophic Claude Instant, Mixtral 8x7b and Llama 13b.
Type : Claude is run by Anthropic but proxied trough Brave. Other models are run by Brave.
Availability: only available in the Brave Browser.
Rate limit : Unlimited for Llama 13b, and heavily limited for the rest.
Privacy : For in-house models, all chats are discarded after session is ended, and chats aren't used for training. For Claude, all data is retained for 30 days but 'personal data' isn't used for training.

### Kobold.cpp
<div class="admonition recommendation" markdown>
!Kobold.cpp Logo{align=right}

Kobold.cpp is an AI client that runs locally on your computer.



:octicons-home-16: Homepage
:octicons-server-16:{ .card-link title="Security Policy"}
:octicons-info-16:{ .card-link title=Documentation}
:octicons-code-16:{ .card-link title="Source Code" }
:octicons-heart-16:{ .card-link title=Contribute }

</details>
</div>

Kobold.cpp allows you to easily run an AI model right on your computer. You simply select your model files and click run. A chat interface will open in your browser.Since it is run locally, you can submit it sensitive information.
To run performant models, you will need at least 16GB of RAM. You do not need a GPU. You can download quantitised models, which are more efficient but slightly less performant. Those models are available in a GGUF format, and can be downloaded at [Hugging Face] (https://huggingface.co/models?sort=trending&search=.GGUF).

Models : Llama 1,2,3, Mistral, Phi-2, and a few others.
Type : Local model
Availability : Linux,Windows.
Rate limit : None.
Privacy : Total

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to our standard criteria, we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must not use your chats for training.
- Must be accesible over a VPN
- Must provide transparency about which models is used and who operates it.
- Must have a reasonable rate limit (*ask feedback*).

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be accessible over Tor.
- Should not require JavaScript.
- Providers should only have open-source models.
- No rate limit

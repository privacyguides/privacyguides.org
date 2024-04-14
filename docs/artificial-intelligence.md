---
meta_title: "Recommended AI Chat: Private ChatGPT Alternatives - Privacy Guides"
title: "AI Services"
icon: material/robot-confused-outline
description: Unlike OpenAI's ChatGPT and its Big Tech competitors, these AI tools do not train their models using your conversations.
cover: ai-chatbots.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }

Since the release of ChatGPT in 2022, interactions with Large Language Models (LLMs) have become increasingly common. LLMs can help us write better, understand unfamiliar subjects, or answer a wide range of questions. Based on a vast amount of data scraped from the web, they can statistically predict the next word.

However, to improve the quality of LLMs, developers of AI software often use [Reinforcement Learning from Human Feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) (RLHF). This entails the possibility of AI companies reading your private AI chats as well as storing them, which introduces a risk of data breaches. Furthermore, there is a real possibility that an LLM will leak your private chat information in future conversations with other users. To solve these problems, you can use trusted and privacy-focused providers or run AI models locally so your data never leaves your device.

<details class="admonition info" markdown>
<summary>Ethical and Privacy Concerns about LLMs</summary>

AI models have been trained on massive amounts of public *and* private data. If you are concerned about these practices, you can either refuse to use AI or use [truly open-source models](https://proton.me/blog/how-to-build-privacy-first-ai), which publicly release their training datasets and therefore weren't trained on private data. One such model is [Olmoe](https://allenai.org/blog/olmoe) made by [Allenai](https://allenai.org/open-data).

[Ethical concerns](https://www.thelancet.com/journals/landig/article/PIIS2588-7500(24)00061-X/fulltext) about AI range from their impact on climate to their potential for discrimination.

</details>

The AI chat cloud providers listed here do not train their models using your chats and do not retain your chats for more than a month, based on each service's privacy policy. However, there is **no guarantee** that these privacy policies are honored. Read our [full list of criteria](#criteria) for more information.

When using cloud-based AI chat tools, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. To protect your privacy and security, **do not share sensitive information** related to health, finance, or other highly personal matters.

A quick **overview** of the two providers we recommend:

| Feature | DuckDuckGo AI | Brave Leo |
|---------|---------------|-----------|
| Tor Access | :material-check:{ .pg-green } Official onion service | :material-alert-outline:{ .pg-orange } Android-only (Orbot) |
| Rate Limits | :material-check:{ .pg-green } High | :material-alert-outline:{ .pg-orange } Low-Medium[^1] |
| Self-hosted Models | :material-close:{ .pg-red } | :material-check:{ .pg-green } |
| Web Search Integration | :material-close:{ .pg-red } | :material-check:{ .pg-green } |
| Multi-language Support | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Limited |
| Account Required | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Mobile Support | :material-check:{ .pg-green } | :material-check:{ .pg-green } only on Brave |

[^1]: Rate limits vary by model, with Llama having the lowest restrictions

### DuckDuckGo AI Chat

<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/artificial-intelligence/duckai.svg){align=right}

**DuckDuckGo AI Chat** is a web frontend for AI models. It is made by the popular [search engine provider](search-engines.md) of the same name.
It is available directly on [DuckDuckGo](https://duckduckgo.com), [duck.ai](https://duck.ai), or [DuckDuckGo onion site](https://duckduckgogg41xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat).

DuckDuckGo give you access to open-weights models from Meta and Mistral, as well as proprietary models from Anthropic and OpenAI. We strongly recommend you use open-weights models, because for those, no chat history is stored by Together.ai, the AI cloud platform DuckDuckGo uses to provide those models.
Furthermore, to protect your IP adress and prevent fingerprinting, DuckDuckGo proxies your chats through their servers.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title="Documentation" }

</div>

DuckDuckGo has agreements with their third-party providers that guarantee that they will not use your data for training their AI models. Proprietary model providers can keep a chat history for up to 30 days. For open-weights model, Duck uses the [together.ai](https://together.ai) AI cloud platform, and has disabled history for those chats.

<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary Model Providers Retain Your Chats</p>

We advise against using proprietary models from Anthropic or OpenAI because those providers keep a chat history for up to 30 days.

</div>

<div class="admonition warning" markdown>
<p class="admonition-title">DuckDuckGo Doesn't Self-Host Open Models</p>

You will have to trust the together.ai cloud platform to honor their commitments to not store chats.

</div>

### Brave Leo

<div class="admonition recommendation" markdown>

![Brave Logo](assets/img/artificial-intelligence/leo.svg){align=right}

**Brave Leo** is an AI assistant available inside the [Brave](desktop-browsers.md#brave) web browser.

Brave Leo supports a variety of models, including open-weights models from Meta and Mistral, and proprietary models from Anthropic. We **strongly recommend** that you use **open-weights models**, because **Brave self-hosts them** and for those open-weights models, they **discards all chat data** after you close your session.

Additionally, the ["Bring Your Own Model"](https://brave.com/blog/byom-nightly/) (BYOM) feature allows you to use one of your local AI models directly in Brave.

[:octicons-home-16: Homepage](https://brave.com/leo){ .md-button .md-button--primary }
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title="Documentation" }

</div>
The default model is Mixtral, which has a low rate limit of 5 messages per hour. However, you can switch to the Llama model, which has "no" rate limits.

Leo can enhance its knowledge through web searches, similar to Microsoft Copilot. However, Brave's AI solution still faces challenges with multi-language support and contextual understanding.

<div class="admonition danger" markdown>
<p class="admonition-title">Page Content is Sent by Default</p>

By default, Brave Leo includes the webpage you are currently on as context for the AI model. While this can often be convenient, it also represents a privacy risk for pages with private information, such as your mailbox or social media. However, this feature cannot be globally disabled. Therefore, you'll need to **manually toggle off "Shape answers based on the page's contents"** for pages with PII.

</div>

<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary Model Providers Retain Your Chats</p>

We advise against using Anthropic's Claude proprietary models because Anthropic keeps chat history for up to 30 days.

</div>

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- The provider or third-parties they use must not use your chats for training.
- The provider or third-parties they use must not retain your chats for more than 30 days.
- Must be accessible privately (no account required, accepts requests from VPN users).
- Must provide models they host themselves or with a third-party that acts on their behalf.
- Must provide at least one model with high rate limits, to allow an user to use it for medium to heavy workloads.

### Best-Case

Our best-case criteria represent what we *would* like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should not retain your chats.
- Should be accessible anonymously trough Tor.
- Should only offer self-hosted open-weights models.
- Should not be rate-limited.

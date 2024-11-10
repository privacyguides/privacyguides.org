---
meta_title: "Recommended AI Chat: Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chat"
icon: material/assistant
description: Unlike OpenAI's ChatGPT and its Big Tech rivals, these AI tools do not train their models using your conversations.
cover: ai-chatbots.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }

Since the release of **ChatGPT** in 2022, interacting with **Large Language Models** (*LLMs*) has become common. **LLMs can help us** write better, understand unfamiliar subjects, or answer a wide range of questions. Based on vast amount of data scraped from the web, they statistically predict the next word. However, to improve the quality of LLMs, developers of AI software often use [Reinforcement Learning from Human Feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback). This means AI companies might read your private AI chats to evaluate and correct their model's answers. But that means that those private conversations must be stored, which introduces a risk of **data breaches**. Furthermore, there is a real possibility that the LLM will leak your private chat information in future conversations with other users. To solve those problems, you can use trusted and privacy-focused providers or run AI models locally so your data never leaves your device.

<details class="admonition info" markdown>
<summary>Privacy and Ethical Concerns about LLMs</summary>
AI models have been trained on massive amounts of public *and* private data. If you are concerned about these practices, you can either refuse to use AI or use [truly open-source models](https://proton.me/blog/how-to-build-privacy-first-ai), which publicly release their training datasets and therefore weren't trained on private data. One such model is [Olmoe](https://blog.allenai.org/olmoe-an-open-small-and-state-of-the-art-mixture-of-experts-model-c258432d0514) made by [Allenai](https://allenai.org/open-data).

[Ethical concerns](https://www.thelancet.com/journals/landig/article/PIIS2588-7500(24)00061-X/fulltext) about AI range from their impact on climate to their potential for discrimination.
</details>

<details class="admonition info" markdown>
<summary>Dictionnary of complex words</summary>
AI is a complex field, with lot of abreviations and field-specific vocabulary. Generally, you can **hover your mouse** on those words and it will **display a definition**. However, reading might be easier if you familiarise yourself with those words. Those words include:
- *[AI]*: Artificial Intelligence
- *[LLaVA]*: Large Language and Vision Assistant (multimodal AI model)
- *[LLMs]*: Largue Language Models (AI models such as ChatGPT)
- *[open-weights]*: An open weights model is an AI model that anyone can download and use, but for which the underlying training data and/or algorithms are proprietary.
</details>

## Cloud Providers

The recommendations below for **cloud providers below do not train their models using your chats** and do not retain your chats for more than a month, based on each service's privacy policy. However, there is **no guarantee** that these privacy policies are honored.

When using cloud-based AI chat tools, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. **Do not share sensitive information** related to health, finance, or other highly personal matters to protect your privacy and security.

### DuckDuckGo AI Chat

<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/ai-chat/duckai.png){align=right}

**DuckDuckGo AI Chat** is a web frontend for AI models. It is made by the popular [search engine provider](search-engines.md) of the same name.

DuckDuckGo give you access to open-weights models from Meta and Mistral, as well as proprietary models from Anthropic and OpenAI. To protect your IP adress and prevent fingerprinting, DuckDuckGo proxies your chats through their servers.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</div>

Duck has agreements with the third-party providers they use guaranteeing that they will not use your data for training their AI models. Proprietary model providers can keep a chat history for up to 30 days. For open-weights model, Duck uses the together.ai AI cloud platform, and has disabled history for those chats.

It is available directly on [DuckDuckGo](https://duckduckgo.com), [duck.ai](https://duck.ai), or [DuckDuckGo onion site](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat).

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

![Brave Logo](assets/img/ai-chat/leo.svg){align=right}

**Brave Leo** is an AI assistant available inside the [Brave browser](desktop-browsers.md#brave), a browser which we recommend.

Brave Leo supports a variety of models, including open-weights models from Meta and Mistral, and proprietary models from Anthropic. Additionally, the ["Bring Your Own Model"](https://brave.com/blog/byom-nightly/) feature allows you to use one of your local AI models directly in Brave.

[:octicons-home-16: Homepage](https://brave.com/leo){ .md-button .md-button--primary }
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title=Documentation}

</div>
Brave self-hosts the open models and for the Brave-hosted models, Brave discards all chat data after you close Leo.

Leo can enhance its knowledge through web searches, similar to Microsoft Copilot. However, Brave's AI solution still faces challenges with multi-language support. Leo AI is available on the Brave Browser on all platforms. There are strict rate limits for most models, but one free model has a high rate limit.

<div class="admonition danger" markdown>
<p class="admonition-title">Page Content is Sent by Default</p>
By default, Brave Leo includes the webpage you are currently on as context for the AI model. While this can often be convenient, it also represents a privacy risk for pages with private information, such as your mailbox or social media. However, this feature cannot be globally disabled. Therefore, you'll need to **manually toggle off "Shape answers based on the page's contents"** for pages with PII.
</div>
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary Model Providers Retain Your Chats</p>
We advise against using Anthropic's Claude proprietary models because Anthropic keeps chat history for up to 30 days.
</div>

## Local AI

**Running AI models locally** offer a more private and secure alternative to cloud-based solutions, as **your data never leaves your device** and is therefore never shared with third-party providers. This provides peace of mind and **allows you to share sensitive information**.

For the best experience, a dedicated GPU with sufficient VRAM or a modern system with fast LPDDR5X memory is recommended. Fortunately, it is possible to run smaller models locally even without a high-end computer or dedicated GPU. A computer with at least 8GB of RAM will be sufficient to run smaller models at lower speeds.

**To run AI locally, you need both an AI client and an AI model**.

### Download AI models

There are many permissively licensed **models available to download**. **[Hugging Face](https://huggingface.co/models?library=gguf)** is a platform that lets you browse, research, and download models in common formats like GGUF. Companies that provide good open-weights models include big names like Mistral, Meta, Microsoft, and Google. But there are also many community models and 'fine-tunes' available. For consumer-grade hardware, it is generally recommended to use [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization) for the best balance between model quality and performance.

### AI chat clients

#### Kobold.cpp

<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chat/kobold.svg){align=right}

Kobold.cpp is an AI client that runs locally on your Windows, Mac, or Linux computer.

In addition to supporting a large range of text models, Kobold.cpp also has a suports an image generators such as [Stable Diffusion](https://stability.ai/stable-image), and automatic speech recognition tools, such as [Whisper](https://github.com/ggerganov/whisper.cpp).

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-apple: macOS](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-linux: Linux](https://github.com/LostRuins/koboldcpp/releases)

</details>

</div>

Kobold shines best when you are looking for heavy customisation and tweaking, such as for roleplaying purposed. It allows you to modify the model temperature,the context window. It also supports creating a network tunnel to access AI models from other devices, such as your phone.


<div class="admonition note" markdown>
<p class="admonition-title">Compatibility Issues</p>
Kobold.cpp might not run on computers without AVX/AVX2 support.
</div>

#### Ollama

<div class="admonition recommendation" markdown>

![Ollama Logo](assets/img/ai-chat/ollama.png){align=right}

Ollama is an easy-to-use command-line AI assistant that is available on macOS, Linux, and Windows (preview).

In addition to supporting a wide range of text models, Ollama also supports [LLaVA](https://github.com/haotian-liu/LLaVA) models and has *experimental* support for Meta's[Llama vision capabilities](https://huggingface.co/blog/llama32#what-is-llama-32-vision).


[:octicons-home-16: Homepage](https://github.com/ollama/ollama){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}

<details class="downloads" markdown>
<summary>Downloads</summary>
- [:fontawesome-brands-windows: Windows](https://ollama.com/download/linux)
- [:simple-apple: macOS](https://ollama.com/download/mac)
- [:simple-linux: Linux](https://ollama.com/download/linux)
</details>

</div>

Ollama shines best when you are looking for an AI client that has great compatibility and ease of use. It runs on all desktop platforms and doesn't involve any manual setup, while still using inference and other techniques to make outputs faster.

It also simplifies the process of setting up a Local AI chat setup, as it downloads the AI model you want to use automatically. For example "ollama run llama3.2" will automatically download and run the Llama 3.2 model.

#### Llamafile

<div class="admonition recommendation" markdown>

![Llamafile Logo](assets/img/ai-chat/llamafile.svg){align=right}

Llamafile is a single-file executable that allows users to run large language models locally on their own computers, without any setup involved. It is available on Linux, macOS and Windows.

The Mozilla-run project also supports LLaVA. However, it does not support speech recognition or image generation. Finally, it is very lightweight and compatible.

[:octicons-home-16: Homepage](https://github.com/Mozilla-Ocho/llamafile/){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Mozilla-Ocho/llamafile/?tab=readme-ov-file#llamafile){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}
[:octicons-lock-16:](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#security){ .card-link title="Security Policy"}
<details class="downloads" markdown>
<summary>Downloads</summary>
- [:fontawesome-solid-desktop: Desktop](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#quickstart)
</details>

</div>

<div class="admonition note" markdown>
<p class="admonition-title">Few Models Available</p>
Mozilla has only made available llamafiles for some Llama and Mistral models, while there are few third-party llamafiles available. Another issue is that Windows limits .exe files to 4GB size, and most models are larger than that. To fix both of those issues, you can load external weights, as detailed [here](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#using-llamafile-with-external-weights).
</div>

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

#### Cloud Providers

- The provider or third-parties they use must not use your chats for training
- The provider or third-parties they use must not retain your chats for more than 30 days.
- Must be accessible privately (no account required, accepts requests from VPN users).
- Must provide models they host themselves or with a third-party that acts on their behalf.
- Must provide at least one model with high rate limits, to allow an user to use it for medium to heavy workloads.

#### Local AI clients
- Must be open-source
- Must not send personal data, including chat data.
- Must not require a GPU.
- Must have support for GPU-powered fast inference.
- Must not require an internet connection.

### Best-Case

Our best-case criteria represent what we *would* like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

#### Cloud Providers

- Should not retain your chats.
- Should be accessible anonymously trough Tor.
- Should only offer self-hosted open-weights models.
- Should not be rate-limited.

#### Local AI clients

- Should be easy to download and setup, such as having a one-click install process.
- Should have a built-in model downloader option.
- Should be customizable (the user can modify model "settings", such as the system prompt and model temperature).

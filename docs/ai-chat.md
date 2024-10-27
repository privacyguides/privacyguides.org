---
meta_title: "Recommended AI Chat Tools: Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chat Tools"
icon: material/assistant
description: Unlike OpenAI's ChatGPT and its Big Tech rivals, these AI tools do not train their models using your conversations.
cover: ai-chatbots.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }

Since the release of **ChatGPT** in 2022, interacting with **Large Language Models** (*LLMs*) has become common. **LLMs can help us** write better, understand unfamiliar subjects, or answer a wide range of questions. However, developers need data to improve their models. Unfortunately, this often **includes your conversations** with the AI. Those private conversations must be stored, which introduces a risk of **data breaches**. Furthermore, there is a real possibility that the LLM will leak your private information in future conversations with other users. To solve this problem, you can use trusted and privacy-focused providers or run AI models locally so your data never leaves your device.

## Recommended Solutions
<details class="admonition info" markdown>
<summary>Privacy and Ethical Concerns about LLMs</summary>
AI models have been trained on massive amounts of public *and* private data. If you are concerned about these practices, you can either refuse to use AI or use [truly open-source models](https://proton.me/blog/how-to-build-privacy-first-ai), which publicly release their training datasets and therefore weren't trained on private data. One such model is [Olmoe](https://blog.allenai.org/olmoe-an-open-small-and-state-of-the-art-mixture-of-experts-model-c258432d0514) made by [Allenai](https://allenai.org/open-data).

[Ethical concerns](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00061-X/fulltext) of AI range from their impact on climate to their potential for discrimination.
</details>
## Cloud Providers

The recommendations for online providers here do not train their models using your chats and do not retain your chats for more than 14 days, based on each service's privacy policy. However, there is **no guarantee** that these privacy policies are honored.

When using cloud-based AI chat tools, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. **Do not share sensitive information** related to health, finance, or other highly personal matters to protect your privacy and security.

### DuckDuckGo AI Chat
<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/ai-chat/duckai.png){align=right}

**DuckDuckGo AI Chat** is made by the popular [search engine provider](search-engines.md) of the same name and is available directly on their website.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/aichat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</div>

DuckDuckGo offers open-weight models from Meta and Mistral, as well as closed-source models from Anthropic and OpenAI. To protect your privacy, DuckDuckGo proxies your chats through their servers. The privacy policy states that providers are "deleting all information received once it is no longer necessary to provide Outputs (at most within 30 days with limited exceptions for safety and legal compliance)." For open-weight models, Duck uses together.ai and has "disabled chat history by turning on the option to 'not store prompts and responses' on the together.ai platform."

It is available directly on [DuckDuckGo](https://duckduckgo.com) or [duck.ai](https://duck.ai). It is also available on DDG's onion site.
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary Model Providers Retain Your Chats</p>
We advise against using proprietary models from Anthropic or OpenAI because those providers keep chat historyfor up to 30 days.
</div>
<div class="admonition warning" markdown>
<p class="admonition-title">DuckDuckGo Doesn't Self-Host Open Models</p>
You will have to trust the together.ai cloud platform to honor their commitments to not store chats.
</div>

### Brave Leo

<div class="admonition recommendation" markdown>

![Brave Logo](assets/img/ai-chat/leo.svg){align=right}

**Brave Leo** is an AI assistant available inside the [Brave browser](desktop-browsers.md#brave), a browser which we recommend.

[:octicons-home-16: Homepage](https://brave.com/leo){ .md-button .md-button--primary }
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title=Documentation}

</div>
Brave Leo supports a variety of models, including open-weight models from Meta and Mistral, and closed-source models from Anthropic. Additionally, you can use your local models or any third-party providers with a standard API. Brave self-hosts the open models and does not retain chat history or use chats for model training. Leo can enhance its knowledge through web searches, similar to Microsoft Copilot. However, Brave's AI solution still faces challenges with multi-language support. Leo AI is available on the Brave Browser on all platforms. There is a strict rate limit for most models, but one free model has a high rate limit.

<div class="admonition danger" markdown>
<p class="admonition-title">Page Content is Sent by Default</p>
We recommend manually switching off the "Use page context for response" toggle for pages with PII.
</div>
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary Model Providers Retain Your Chats</p>
We advise against using Anthropic's proprietary Claude models because Anthropic keeps chat history for up to 30 days.
</div>

## Local Solutions
**Local AI** models offer a more private and secure alternative to cloud-based solutions, as **your data never leaves your device** and is therefore not shared with third-party providers. This provides peace of mind and **allows you to share sensitive information**.

For the best experience, a dedicated GPU with sufficient VRAM or a modern system with fast LPDDR5X memory is recommended. Fortunately, it is possible to run smaller models locally even without a high-end computer or dedicated GPU. A computer with at least 8GB of RAM will be sufficient to run smaller models at lower speeds.

There are many permissively licensed models available that can be run locally. [Hugging Face](https://huggingface.co/models?library=gguf) is a platform that lets you browse, research, and download models in common formats like GGUF. In addition to big names like Mistral, Meta, Microsoft, and Google, there are many community models and 'fine-tunes' to choose from. For consumer-grade hardware, it is generally recommended to use [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization) for the best balance between model quality and performance.

### Kobold.cpp
<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chat/kobold.svg){align=right}

Kobold.cpp is an AI client that runs locally on your Windows, Mac, or Linux computer.

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}

</div>
In addition to supporting a large range of text models, Kobold.cpp also supports image generators such as [Stable Diffusion](https://stability.ai/stable-image) and automatic speech recognition tools, such as [Whisper](https://github.com/ggerganov/whisper.cpp).

<div class="admonition note" markdown>
<p class="admonition-title">Compatibility Issues</p>
Kobold.cpp might not run on computers without AVX/AVX2 support.
</div>

### Ollama
<div class="admonition recommendation" markdown>

![Ollama Logo](assets/img/ai-chat/ollama.png){align=right}

Ollama is a command-line AI assistant that is available on macOS, Linux, and Windows (preview).

[:octicons-home-16: Homepage](https://github.com/ollama/ollama){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}

</div>
In addition to supporting a wide range of text models, Ollama also supports [LLaVA](https://github.com/haotian-liu/LLaVA) models and has *experimental* support for Meta's [Llama vision capabilities](https://huggingface.co/blog/llama32#what-is-llama-32-vision). Ollama can be downloaded and installed with just a few clicks. Furthermore, it is very lightweight and is compatible with almost all PCs. To use Ollama, simply type in your terminal "ollama run model name".

### Llamafile
<div class="admonition recommendation" markdown>

![Llamafile Logo](assets/img/ai-chat/llamafile.svg){align=right}

Llamafile is a single-file executable that allows users to run large language models locally on their own computers, without any setup involved. It is available on Linux, macOS, and Windows.

[:octicons-home-16: Homepage](https://github.com/Mozilla-Ocho/llamafile/){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Mozilla-Ocho/llamafile/?tab=readme-ov-file#llamafile){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}
[:octicons-lock-16:](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#security){ .card-link title="Security Policy"}

</div>
The Mozilla-run project also supports LLaVA. However, it does not support speech recognition or image generation. Finally, it is very lightweight and compatible.

<div class="admonition note" markdown>
<p class="admonition-title">Few Models Available</p>
Mozilla has only made available llamafiles for some Llama and Mistral models, while there are few third-party llamafiles available. Another issue is that Windows limits .exe files to 4GB size, and most models are larger than that. To fix both of those issues, you can load external weights, as detailed [here](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#using-llamafile-with-external-weights).
</div>

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to our standard criteria, we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

#### Cloud Providers

- Must not use your chats for training.
- Must not retain your chats for more than 14 days.
- Must be accessible privately (no account required, accepts requests from VPN users).
- Must provide models they host themselves or with a third-party that acts on their behalf.
- Must provide at least one model with a high rate limit.

#### Local Solutions

- Must not send personal data. Any opt-in mechanism must rely on free consent and avoid dark patterns.
- Must not require a GPU.
- Must have GPU support for fast inference.
- Must not require an internet connection.

### Best-Case

Our best-case criteria represent what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

#### Cloud Providers

- Should not retain your chats.
- Should be accessible anonymously (Tor Browser Safest security level).
- Providers should only have open-weight models that they self-host.
- Should not be rate-limited.

#### Local Solutions

- Should provide a one-click installer.
- Should have a built-in model downloader option.
- Should be customizable (allow modifying the system prompt, temperature, etc.).

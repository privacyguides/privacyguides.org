---
meta_title: "Recommended AI Chatbots : Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chats"
icon: material/assistant
description: Unlike OpenAI's ChatGPT and its Big Tech rivals, those AI tools do not train their models using your conversations.
cover: ai-chatbots.webp
---
<small>Protects against the following threat(s):</small>

- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }

Since the release of **ChatGPT** in 2022, talking with **Large Language Models** (*LLMs*) has become common. **LLMs can help us** write better, understand unfamiliar subjects or answer a wide range of questions. However, the developers of those models **need data to improve their models**. Unfortunately, this often **includes your conversations** with the AI.

To solve this problem, you can use trusted and privacy-focused providers, or run AI models locally so your data never leaves your device.

## Recommended Providers

The recommendations for online providers here do not train their models using your chats and do not retain your chats for more than 14 days, based on each service's privacy policy. There is no guarantee that these privacy policies are honored.

## Cloud providers
When using cloud-based AI chatbots, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. **Do not share sensitive information** related to health, finance, or other highly personal matters to protect your privacy and security.

### DuckDuckGo AI Chat
<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/ai-chatbots/duckai.png){align=right}

**DuckDuckGo AI Chat** is made by the popular [search engine provider](search-engines.md) of the same name and is available directly on their website.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/aichat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</div>

Duckduckgo offers open-weights models from Meta and Mistral, as well as closed-source models from Anthropic and OpenAI. To protect your privacy, DuckDuckGo proxies your chats through their servers. The privacy policy states that providers are "deleting all information received once it is no longer necessary to provide Outputs (at most within 30 days with limited exceptions for safety and legal compliance)." For open-weights models, Duck uses together.ai and Duck has "disabled chat history by turning on the option to "not store prompts and responses" on the together.ai platform.".

 It is available directly on [DuckDuckGo](https://duckduckgo.com), or [duck.ai](https://duck.ai). It is also available on DDG's onion site.
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary models providers retain your chats</p>
We recommend against using the proprietary models from Anthropic or OpenAI because those providers keep chat history for up to 30 days.
</div>
<div class="admonition warning" markdown>
<p class="admonition-title">DuckDuckGo doesn't self-host open models</p>
You will have to trust the together.ai cloud platform to honor their commitments to not store chats.
</div>


### Brave Leo

<div class="admonition recommendation" markdown>

![Brave Logo](assets/img/ai-chatbots/leo.svg){align=right}

**Brave Leo** is an AI assistant available inside the [Brave browser](desktop-browsers.md#brave), a browser which we recommend.

[:octicons-home-16: Homepage](https://brave.com/leo){ .md-button .md-button--primary }
[:octicons-eye-16:](https://brave.com/privacy/browser/#brave-leo){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://github.com/brave/brave-browser/wiki/Brave-Leo){ .card-link title=Documentation}

</div>
Brave Leo supports a variety of models, including open-weights models from Meta and Mistral, and closed-source models from Anthropic. Additionally, you can use your local models, or any third-party providers with a standard API. Brave self-hosts the open models and do not retain chat history or use chats for models training. Leo can enhance its knowledge through web searches, similar to Microsoft Copilot. However, Brave's AI solution still faces challenges with multi-language support. Leo AI is available on the Brave Browser on all platforms. There is a strict rate limit for most models, but one free model has a high rate limit.



<div class="admonition danger" markdown>
<p class="admonition-title">Page content is sent by default </p>
We recommend manually switching off the "Use page context for response" toggle for pages with PII.
</div>
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary model providers retain your chats</p>
We recommend against using Anthropic's proprietary Claude models because Anthropic keeps chat history for up to 30 days.
</div>

## Local solutions
**Local AI** models offer a more private and secure alternative to cloud-based solutions, as **your data never leaves your device** and is therefore not shared with third-party providers. This provides peace of mind and **allows you to share sensitive information**.

For the best experience, a dedicated GPU with sufficient VRAM or a modern system with fast LPDDR5X memory is recommended. But fortunately, it is possible to run smaller models locally even without a high-end computer or dedicated GPU. A computer with at least 8GB of RAM will be sufficient to run smaller models at lower speeds.

There are many permissively licensed models available which can be run locally. [Hugging Face](https://huggingface.co/models?library=gguf) is a platform which lets you browse, research, and download models in common formats like GGUF. In addition to big names like Mistral, Meta, Microsoft, and Google, there are many community models and 'fine-tunes' to choose from. For consumer grade hardware, it is generally recommended to use [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization) for the best balance between model quality and performance.

### Kobold.cpp
<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chatbots/kobold.svg){align=right}

Kobold.cpp is an AI client that runs locally on your Windows, Mac or Linux computer.

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}

</div>
In addition to supporting a large range of text models, Kobold.cpp also has a suports an image generators such as [Stable Diffusion](https://stability.ai/stable-image), and an automatic speech recognition tools, such as [Whisper](https://github.com/ggerganov/whisper.cpp)

<div class="admonition note" markdown>
<p class="admonition-title">Compatibility issues </p>
Kobold.cpp might not run on computers without AVX/AVX2 support.
</div>

### Ollama
<div class="admonition recommendation" markdown>
![Ollama Logo](assets/img/ai-chatbots/ollama.png){align=right}

Ollama is a command line AI assistant that is available on macOS, Linux and Windows(preview).

[:octicons-home-16: Homepage](https://github.com/ollama/ollama){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}


</div>
In addition to supporting a large range of text models, Ollama also supports [Llava](https://github.com/haotian-liu/LLaVA), a "Large Language and Vision Assistant". Ollama can be downloaded and installed with a few clicks. Furthermore, it is very lightweight and compatible with almost all PCs. To use Ollama, simply type in your terminal "ollama run model name".

### llamafile
<div class="admonition recommendation" markdown>

![llamafile Logo](assets/img/ai-chatbots/llamafile.svg){align=right}

Llamafile is a single-file executable that allows users to run large language models locally on their own computers, without any setup involved. It is available on Linux, macOS and Windows.

[:octicons-home-16: Homepage](https://github.com/Mozilla-Ocho/llamafile/){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Mozilla-Ocho/llamafile/?tab=readme-ov-file#llamafile){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}
[:octicons-lock-16:](hhttps://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#security){ .card-link title="Security Policy"}

</div>
The Mozilla-run project also supports Llava, a text and vision model. However, it does not support speech recognition or image generation. Finally, it is very lightweight and compatible.

<div class="admonition note" markdown>
<p class="admonition-title">Few models available </p>
Mozilla has only made available llamafiles for some Llama and Mistral models, while they are few third-party llamafiles available. Another issue is that Windows limits .exe files to 4GB size, and most models are more than this size. To fix both of those issues, you can load external weights, as detailed [here](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#using-llamafile-with-external-weights).
</div>

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to our standard criteria, we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

#### Cloud providers

- Must not use your chats for training.
- Must not retain your chats for more than 14 days.
- Must be accessible privately (no account required, accepts request from VPN users).
- Must provide models they host themselves, or with a third-party that acts in their behalf.
- Must provide at least one model with a high rate limit.

#### Local solutions

- Must not send personal data. Any opt-in mechanism must rely on free consent and avoid dark patterns.
- Must not require a GPU.
- Must have GPU support for fast inference.
- Must not require internet connection.


### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

#### Cloud providers

- Should not retain your chat.
- Should be accessible anonymously (Tor Browser Safest security level).
- Providers should only have open-weights models that they self-host.
- Should not be rate-limited.

#### Local solutions

- Should provide one-click installer.
- Should have a built-in model downloader option.
- Should be customizable (allow modifying the system prompt, temperature, etc.).

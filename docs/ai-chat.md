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


## Cloud Providers

The recommendations below for **cloud providers do not train their models using your chats** and do not retain your chats for more than a month, based on each service's privacy policy. However, there is **no guarantee** that these privacy policies are honored.

When using cloud-based AI chat tools, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. **Do not share sensitive information** related to health, finance, or other highly personal matters to protect your privacy and security.

Our **recommended providers do not train their models using your chats** and respect your privacy. Read our [full list of criteria](#criteria) for more information.

| Feature | DuckDuckGo AI | Brave Leo |
|---------|---------------|-----------|
| Tor Access | :material-check:{ .pg-green } Official onion service | :material-alert-outline:{ .pg-orange } Android-only (Orbot) |
| Rate Limits | :material-check:{ .pg-green } High | :material-alert-outline:{ .pg-orange } Low-Medium¹ |
| Self-hosted Models | :material-close:{ .pg-red } | :material-check:{ .pg-green } |
| Web Search Integration | :material-close:{ .pg-red } | :material-check:{ .pg-green } |
| Multi-language Support | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Limited |
| Account Required | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Mobile Support | :material-check:{ .pg-green } | :material-check:{ .pg-green } only on Brave |
¹ Rate limits vary by model, with Llama having the lowest restrictions

### DuckDuckGo AI Chat

<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/ai-chat/duckai.svg){align=right}

**DuckDuckGo AI Chat** is a web frontend for AI models. It is made by the popular [search engine provider](search-engines.md) of the same name.
It is available directly on [DuckDuckGo](https://duckduckgo.com), [duck.ai](https://duck.ai), or [DuckDuckGo onion site](https://duckduckgogg41xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat).

DuckDuckGo give you access to open-weights models from Meta and Mistral, as well as proprietary models from Anthropic and OpenAI. We strongly recommend youse open-weights models, because for those, no chat history is stored by Together.ai, the AI cloud platform DuckDuckGo uses to provide those models.
Furthermore, to protect your IP adress and prevent fingerprinting, DuckDuckGo proxies your chats through their servers.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/chat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title="Documentation" }

</div>

Duck has agreements with their third-party providers that guarantee that they will not use your data for training their AI models. Proprietary model providers can keep a chat history for up to 30 days. For open-weights model, Duck uses the [together.ai](https://together.ai) AI cloud platform, and has disabled history for those chats.

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

**Brave Leo** is an AI assistant available inside the [Brave browser](https://brave.com), a browser we [recommend](tools/#private-web-browsers).

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

## Local AI Chat

**Running AI models locally** offers a more private and secure alternative to cloud-based solutions, as **your data never leaves your device** and is therefore never shared with third-party providers. This provides peace of mind and **allows you to share sensitive information**.

For the best experience, a dedicated GPU with sufficient VRAM or a modern system with fast LPDDR5X memory is recommended. Fortunately, it is possible to run smaller models locally even without a high-end computer or dedicated GPU. A computer with at least 8GB of RAM will be sufficient to run smaller models at lower speeds. Below is a table with more precise information :
<details class="admonition info" markdown>
<summary>Hardware Requirements for Local Models</summary>
Here are typical requirements for different model sizes:

- 7B parameter models: 8GB RAM minimum, 16GB recommended
- 13B parameter models: 16GB RAM minimum, 32GB recommended
- 70B parameter models: Dedicated GPU with 24GB+ VRAM recommended
- Quantized models (4-bit): Can run with roughly half these requirements
</details>


**To run AI locally, you need both an AI client and an AI model**.

### Download AI models

There are many permissively licensed **models available to download**. **[Hugging Face](https://huggingface.co/models?library=gguf)** is a platform that lets you browse, research, and download models in common formats like GGUF. Companies that provide good open-weights models include big names like Mistral, Meta, Microsoft, and Google. But there are also many community models and 'fine-tunes' available. For consumer-grade hardware, it is generally recommended to use [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization) for the best balance between model quality and performance.
To help you choose a model that fit your needs, you can look at leaderboards and benchmarks. The most widely-used leaderboard is [LM Arena](https://lmarena.ai/), a "Community-driven Evaluation for Best AI chatbots". There is also the [OpenLLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard), which focus on the performance of open-weights models on common benchmarks like MMLU-PRO.  However, there are also specialed benchmarks, that for example measure [emotional intelligence](https://eqbench.com/), ["uncensored general intelligence"](https://huggingface.co/spaces/DontPlanToEnd/UGI-Leaderboard), and many [others](https://www.nebuly.com/blog/llm-leaderboards).

<details class="admonition warning" markdown>
<summary>Model Security and Verification</summary>
When downloading AI models, especially from Hugging Face, it's important to verify their authenticity. Look for:
- Model cards with clear documentation
- Verified organization badge
- Community reviews and usage statistics
- **When available**, verify the file checksum (a type of anti-tampering fingerprint).  On Hugging Face, you can find the hash by:
    1. Clicking on a model file
    2. Looking for "Copy SHA256" button below the file
    3. Comparing this hash with the one you get after downloading (using tools like `sha256sum` on Linux/macOS or `certutil -hashfile file SHA256` on Windows)

Those steps help ensure you're not downloading potentially malicious models.
</details>


### AI chat clients

| Feature | [Kobold.cpp](#koboldcpp) | [Ollama](#ollama) | [Llamafile](#llamafile) |
|---------|------------|---------|-----------|
| GPU Support | :material-check:{ .pg-green } | :material-check:{ .pg-green } | :material-check:{ .pg-green } |
| Image Generation | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Speech Recognition | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Auto-download Models | :material-close:{ .pg-red } | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Few models available |
| Custom Parameters | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-alert-outline:{ .pg-orange } |
| Multi-platform | :material-check:{ .pg-green } | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Size limitations on Windows |

### Kobold.cpp

<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chat/kobold.png){align=right}

Kobold.cpp is an AI client that runs locally on your Windows, Mac, or Linux computer.

In addition to supporting a large range of text models, Kobold.cpp also supports image generators such as [Stable Diffusion](https://stability.ai/stable-image), and automatic speech recognition tools, such as [Whisper](https://github.com/ggerganov/whisper.cpp).

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-apple: macOS](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-linux: Linux](https://github.com/LostRuins/koboldcpp/releases)

</details>

</div>

Kobold shines best when you are looking for heavy customization and tweaking, such as for roleplaying purposes. It allows you to modify parameters such as the AI model temperature and the AI chat's system prompt. It also supports creating a network tunnel to access AI models from other devices, such as your phone.

<div class="admonition note" markdown>
<p class="admonition-title">Compatibility Issues</p>
Kobold.cpp might not run on computers without AVX/AVX2 support.
</div>

### Ollama

<div class="admonition recommendation" markdown>

![Ollama Logo](assets/img/ai-chat/ollama.svg){align=right}

Ollama is an easy-to-use command-line AI assistant that is available on macOS, Linux, and Windows.

In addition to supporting a wide range of text models, Ollama also supports [LLaVA](https://github.com/haotian-liu/LLaVA) models and has *experimental* support for Meta's [Llama vision capabilities](https://huggingface.co/blog/llama32#what-is-llama-32-vision).

[:octicons-home-16: Homepage](https://github.com/ollama/ollama){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}

<details class="downloads" markdown>
<summary>Downloads</summary>
- [:fontawesome-brands-windows: Windows](https://ollama.com/download/linux)
- [:simple-apple: macOS](https://ollama.com/download/mac)
- [:simple-linux: Linux](https://ollama.com/download/linux)
</details>

</div>

Ollama shines best when you're looking for an AI client that has great compatibility and ease of use. It runs on all desktop platforms and doesn't involve any manual setup, while still using inference and other techniques to make outputs faster.

It also simplifies the process of setting up a local AI chat, as it downloads the AI model you want to use automatically. For example, running `ollama run llama3.2` will automatically download and run the Llama 3.2 model. Furthermore, ollama maintains their own [model library](https://ollama.com/library/) where they host various AI models files. This ensures models are vetted for both performance and security, eliminating the need to manually verify model authenticity.

### Llamafile

<div class="admonition recommendation" markdown>

![Llamafile Logo](assets/img/ai-chat/llamafile.svg){align=right}

Llamafile is a single-file executable that allows users to run large language models locally on their own computers, without any setup involved. It is available on Linux, macOS, and Windows.

The Mozilla-run project also supports LLaVA. However, it does not support speech recognition or image generation. It's also very lightweight and compatible.

[:octicons-home-16: Homepage](https://github.com/Mozilla-Ocho/llamafile/){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Mozilla-Ocho/llamafile/?tab=readme-ov-file#llamafile){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#security){ .card-link title="Security Policy" }
<details class="downloads" markdown>
<summary>Downloads</summary>
- [:fontawesome-solid-desktop: Desktop](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#quickstart)
</details>

</div>

<div class="admonition note" markdown>
<p class="admonition-title">Few Models Available</p>
Mozilla has only made llamafiles available for some Llama and Mistral models, while there are few third-party llamafiles available. Another issue is that Windows limits .exe files to 4GB, and most models are larger than that. To fix both of those issues, you can load external weights, as detailed [here](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#using-llamafile-with-external-weights).
</div>

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

#### Cloud Providers

- The provider or third-parties they use must not use your chats for training.
- The provider or third-parties they use must not retain your chats for more than 30 days.
- Must be accessible privately (no account required, accepts requests from VPN users).
- Must provide models they host themselves or with a third-party that acts on their behalf.
- Must provide at least one model with high rate limits, to allow an user to use it for medium to heavy workloads.

#### Local AI clients

- Must be open-source.
- Must not send personal data, including chat data.
- Must be available on Linux.
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
- Should be multi-platform.
- Should be easy to download and set up, such as having a one-click install process.
- Should have a built-in model downloader option.
- Should be customizable (the user can modify the LLM paramaters, such as it's system prompt or it's temperature).

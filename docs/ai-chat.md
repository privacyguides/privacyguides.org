---
meta_title: "Recommended AI Chat: Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chat"
icon: material/assistant
description: Unlike OpenAI's ChatGPT and its Big Tech competitors, these AI tools run locally so your data never leaves your desktop device.
cover: ai-chatbots.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }
- [:material-account-cash: Surveillance Capitalism](basics/common-threats.md#surveillance-as-a-business-model){ .pg-brown }
- [:material-close-outline: Censorship](basics/common-threats.md#avoiding-censorship){ .pg-blue-gray }

Since the release of ChatGPT in 2022, interactions with Large Language Models (LLMs) have become increasingly common. LLMs can help us write better, understand unfamiliar subjects, or answer a wide range of questions. They can statistically predict the next word based on a vast amount of data scraped from the web.

## Privacy Concerns About LLMs

Data used to train AI models, however, includes a massive amount of publicly available data scraped from the web, which can include sensitive information like names and addresses. Cloud-based AI software often [collects your inputs](https://openai.com/policies/row-privacy-policy), meaning your chats are not private from them. This practice also introduces a risk of data breaches. Furthermore, there is a real possibility that an LLM will leak your private chat information in future conversations with other users.

If you are concerned about these practices, you can either refuse to use AI, or use [truly open-source models](https://proton.me/blog/how-to-build-privacy-first-ai) which publicly release and allow you to inspect their training datasets. One such model is [OLMoE](https://allenai.org/blog/olmoe-an-open-small-and-state-of-the-art-mixture-of-experts-model-c258432d0514) made by [Ai2](https://allenai.org/open-data).

Alternatively, you can run AI models locally so that your data never leaves your device and is therefore never shared with third parties. As such, local models are a more private and secure alternative to cloud-based solutions and allow you to share sensitive information to the AI model without worry.

## AI Models

### Hardware for Local AI Models

Local models are also fairly accessible. It's possible to run smaller models at lower speeds on as little as 8GB of RAM. Using more powerful hardware such as a dedicated GPU with sufficient VRAM or a modern system with fast LPDDR5X memory offers the best experience.

LLMs can usually be differentiated by the number of parameters, which can vary between 1.3B to 405B for open-source models available for end users. For example, models below 6.7B parameters are only good for basic tasks like text summaries, while models between 7B and 13B are a great compromise between quality and speed. Models with advanced reasoning capabilities are generally around 70B.

For consumer-grade hardware, it is generally recommended to use [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization) for the best balance between model quality and performance. Check out the table below for more precise information about the typical requirements for different sizes of quantized models.

| Model Size (in Parameters) | Minimum RAM | Minimum Processor |
|---|---|---|
| 7B | 8GB | Modern CPU (AVX2 support) |
| 13B | 16GB | Modern CPU (AVX2 support) |
| 70B | 72GB | GPU with VRAM |

To run AI locally, you need both an AI model and an AI client.

### Choosing a Model

There are many permissively licensed models available to download. [Hugging Face](https://huggingface.co/models) is a platform that lets you browse, research, and download models in common formats like [GGUF](https://huggingface.co/docs/hub/en/gguf). Companies that provide good open-weights models include big names like Mistral, Meta, Microsoft, and Google. However, there are also many community models and 'fine-tunes' available. As mentioned above, quantized models offer the best balance between model quality and performance for those using consumer-grade hardware.

To help you choose a model that fits your needs, you can look at leaderboards and benchmarks. The most widely-used leaderboard is the community-driven [LM Arena](https://lmarena.ai). Additionally, the [OpenLLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) focuses on the performance of open-weights models on common benchmarks like [MMLU-Pro](https://arxiv.org/abs/2406.01574).  There are also specialized benchmarks which measure factors like [emotional intelligence](https://eqbench.com), ["uncensored general intelligence"](https://huggingface.co/spaces/DontPlanToEnd/UGI-Leaderboard), and [many others](https://www.nebuly.com/blog/llm-leaderboards).

## AI Chat Clients

| Feature | [Kobold.cpp](#koboldcpp) | [Ollama](#ollama-cli) | [Llamafile](#llamafile) |
|---|---|---|---|
| GPU Support | :material-check:{ .pg-green } | :material-check:{ .pg-green } | :material-check:{ .pg-green } |
| Image Generation | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Speech Recognition | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-close:{ .pg-red } |
| Auto-download Models | :material-close:{ .pg-red } | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Few models available |
| Custom Parameters | :material-check:{ .pg-green } | :material-close:{ .pg-red } | :material-check:{ .pg-green } |
| Multi-platform | :material-check:{ .pg-green } | :material-check:{ .pg-green } | :material-alert-outline:{ .pg-orange } Size limitations on Windows |

### Kobold.cpp

<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chat/kobold.png){align=right}

Kobold.cpp is an AI client that runs locally on your Windows, Mac, or Linux computer. It's an excellent choice if you are looking for heavy customization and tweaking, such as for role-playing purposes.

In addition to supporting a large range of text models, Kobold.cpp also supports image generators such as [Stable Diffusion](https://stability.ai/stable-image) and automatic speech recognition tools such as [Whisper](https://github.com/ggerganov/whisper.cpp).

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-apple: macOS](https://github.com/LostRuins/koboldcpp/releases)
- [:simple-linux: Linux](https://github.com/LostRuins/koboldcpp/releases)

</details>

</div>

<div class="admonition note" markdown>
<p class="admonition-title">Compatibility Issues</p>

Kobold.cpp might not run on computers without AVX/AVX2 support.

</div>

Kobold.cpp allows you to modify parameters such as the AI model temperature and the AI chat's system prompt. It also supports creating a network tunnel to access AI models from other devices such as your phone.

### Ollama (CLI)

<div class="admonition recommendation" markdown>

![Ollama Logo](assets/img/ai-chat/ollama.png){align=right}

Ollama is a command-line AI assistant that is available on macOS, Linux, and Windows. Ollama is a great choice if you're looking for an AI client that's easy-to-use, widely compatible, and fast due to its use of inference and other techniques. It also doesn't involve any manual setup.

In addition to supporting a wide range of text models, Ollama also supports [LLaVA](https://github.com/haotian-liu/LLaVA) models and has experimental support for Meta's [Llama vision capabilities](https://huggingface.co/blog/llama32#what-is-llama-32-vision).

[:octicons-home-16: Homepage](https://ollama.com){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama#readme){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/ollama/ollama/blob/a14f76491d694b2f5a0dec6473514b7f93beeea0/SECURITY.md){ .card-link title="Security Policy" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-brands-windows: Windows](https://ollama.com/download/windows)
- [:simple-apple: macOS](https://ollama.com/download/mac)
- [:simple-linux: Linux](https://ollama.com/download/linux)

</details>

</div>

Ollama simplifies the process of setting up a local AI chat by downloading the AI model you want to use automatically. For example, running `ollama run llama3.2` will automatically download and run the Llama 3.2 model. Furthermore, Ollama maintains their own [model library](https://ollama.com/library) where they host the files of various AI models. This ensures that models are vetted for both performance and security, eliminating the need to manually verify model authenticity.

### Llamafile

<div class="admonition recommendation" markdown>

![Llamafile Logo](assets/img/ai-chat/llamafile.svg){align=right}

Llamafile is a lightweight single-file executable that allows users to run LLMs locally on their own computers without any setup involved. It is [backed by Mozilla](https://hacks.mozilla.org/2023/11/introducing-llamafile) and available on Linux, macOS, and Windows.

Llamafile also supports LLaVA. However, it doesn't support speech recognition or image generation.

[:octicons-home-16: Homepage](https://github.com/Mozilla-Ocho/llamafile){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/Mozilla-Ocho/llamafile#llamafile){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/Mozilla-Ocho/llamafile){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/Mozilla-Ocho/llamafile#security){ .card-link title="Security Policy" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:fontawesome-solid-desktop: Desktop](https://github.com/Mozilla-Ocho/llamafile#quickstart)

</details>

</div>

Mozilla has made llamafiles available for only some Llama and Mistral models, while there are few third-party llamafiles available. Moreover, Windows limits `.exe` files to 4GB, and most models are larger than that.

To circumvent these issues, you can [load external weights](https://github.com/Mozilla-Ocho/llamafile#using-llamafile-with-external-weights).

## Securely Downloading Models

If you use an AI client that maintains their own library of model files (such as [Ollama](#ollama-cli) and [Llamafile](#llamafile)), you should download it from there. However, if you want to download models not present in their library, or use an AI client that doesn't maintain its library (such as [Kobold.cpp](#koboldcpp)), you will need to take extra steps to ensure that the AI model you download is safe and legitimate.

We recommend downloading model files from Hugging Face since it provides several features to verify that your download is genuine and safe to use.

To check the authenticity and safety of the model, look for:

- Model cards with clear documentation
- A verified organization badge
- Community reviews and usage statistics
- A "Safe" badge next to the model file (Hugging Face only)
- Matching checksums[^1]
    - On Hugging Face, you can find the hash by clicking on a model file and looking for the **Copy SHA256** button below it. You should compare this checksum with the one from the model file you downloaded.

A downloaded model is generally safe if it satisfies all of the above checks.

## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Must be open-source.
- Must not transmit personal data, including chat data.
- Must be multi-platform.
- Must not require a GPU.
- Must have support for GPU-powered fast inference.
- Must not require an internet connection.

### Best-Case

Our best-case criteria represent what we *would* like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be easy to download and set up, e.g. with a one-click install process.
- Should have a built-in model downloader option.
- The user should be able to modify the LLM parameters, such as its system prompt or temperature.

[^1]: A file checksum is a type of anti-tampering fingerprint. A developer usually provides a checksum in a text file that can be downloaded separately, or on the download page itself. Verifying that the checksum of the file you downloaded matches the one provided by the developer helps ensure that the file is genuine and wasn't tampered with in transit. You can use commands like `sha256sum` on Linux and macOS, or `certutil -hashfile file SHA256` on Windows to generate the downloaded file's checksum.

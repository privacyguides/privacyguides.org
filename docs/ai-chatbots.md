---
meta_title: "Recommended AI Chatbots : Private ChatGPT Alternatives - Privacy Guides"
title: "AI Chats"
icon: material-chat-processing-outline
description: Unlike OpenAI's ChatGPT and it's successors, those AI tools do not train their models using your conversations.
cover: ai-chatbots.webp
---
Since the release of ChatGPT in 2022, talking with Large Language Models (LLMs) has become common. LLMs can help us write better, understand unfamiliar subjects or answer a wide range of questions. However, the developers of those models need data to improve their models. Unfortunately, this often includes your conversations with the AI.

## Recommended Providers

The recommendations for online providers here do not train their models using your chats and do not retain your chats for more than 14 days, based on each service's privacy policy. There is no guarantee that these privacy policies are honored.

## Cloud providers
When using cloud-based AI chatbots, be mindful of the personal information you share. Even if a service doesn't store your conversations, there's still a risk of sensitive data being exposed or misused. **Do not share sensitive information** related to health, finance, or other highly personal matters to protect your privacy and security.

### DuckDuckGo AI Chat
<div class="admonition recommendation" markdown>

![DuckDuckGo logo](assets/img/ai-chatbots/duckai.svg){align=right}

**DuckDuckGo AI Chat** is made by the popular [search engine provider] (docs/search-engines.md) and is available directly in the search engine.

[:octicons-home-16: Homepage](https://duck.ai){ .md-button .md-button--primary }
[:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/aichat){ .card-link title="Onion Service" }
[:octicons-eye-16:](https://duckduckgo.com/aichat/privacy-terms){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.duckduckgo.com){ .card-link title=Documentation}

</div>

DuckDuckGo offers proprietary models from Anthropic and Open AI, as well as open-source models from Meta and Mistral. To protect your privacy, DuckDuckGo proxies your chats through their servers. The privacy policy states that providers are "deleting all information received once it is no longer necessary to provide Outputs (at most within 30 days with limited exceptions for safety and legal compliance)." For open-weights models, Duck uses together.ai and Duck has "disabled chat history by turning on the option to "not store prompts and responses" on the together.ai platform.".

 It is available directly on [DuckDuckGo](https://duckduckgo.com), or [duck.ai](https://duck.ai). It is also available on DDG's onion site.
<div class="admonition danger" markdown>
<p class="admonition-title">Proprietary models providers retain your chats</p>
Anthropic and OpenAI stores chats for up to 30 days. Do not use those models for anything you wouldn't want the World to know about.
</div>
<div class="admonition warning" markdown>
<p class="admonition-title">DuckDuckGo doesn't self host open models</p>
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
Brave Leo supports a variety of models, including open-source models from Meta and Mixtral, and closed-source models from Anthropic. Additionally, on the desktop Nightly version, you can use your local models, or any third-party providers with a standard API. Brave self-hosts the open models and do not retain chat history or use chats for models training. Leo can enhance its knowledge through web searches, similar to Microsoft Copilot. However, Brave's AI solution still faces challenges with multi-language support. Leo AI is available on the Brave Browser on all platforms. There is a strict rate limit for most models, but one free model has a high rate limit.



<div class="admonition danger" markdown>
<p class="admonition-title">Page content is sent by default </p>
We recommend manually switching off the "Use page context for response" toggle for pages with PII.
</div>
<div class="admonition danger" markdown>
<p class="admonition-title">Claude chats are kept for 30 days </p>
We recommend against using Anthropic's Claude models because the company keeps a chat history for 30 days.
</div>

## Local solutions
**Local AI** models offer a more private and secure alternative to cloud-based solutions, as **your data never leaves your device** and is therefore not shared with third-party providers. This provides peace of mind and **allows you to share sensitive information**.

To run basic AI models you will fortunately not need a high-end computer. A computer with 8GB of RAM will be sufficient to run a 7B-8B parameters model. One issue with local models is that they have a slower inference speed than their cloud conterparts. You can remedy this by using your GPU.

 But what language models can you run ? Meta and Mistral release their best model under an "open" license, while Google and Microsoft only release small, less capable models. The two leaders in the field OpenAI and Anthropic do not release their model publicly.But you can't run models in their original form, you will need to run [quantized models](https://huggingface.co/docs/optimum/en/concept_guides/quantization). You can download the quantized models in a format called GGUF from [Hugging Face] (https://huggingface.co/models?sort=trending&search=.GGUF).

### Kobold.cpp
<div class="admonition recommendation" markdown>

![Kobold.cpp Logo](assets/img/ai-chatbots/kobold.svg){align=right}

Kobold.cpp is an AI client that runs locally on your Windows or Linux computer.

[:octicons-home-16: Homepage](https://github.com/LostRuins/koboldcpp){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/LostRuins/koboldcpp/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/LostRuins/koboldcpp){ .card-link title="Source Code" }
[:octicons-lock-16:](https://github.com/LostRuins/koboldcpp/blob/2f3597c29abea8b6da28f21e714b6b24a5aca79b/SECURITY.md){ .card-link title="Security Policy"}

</div>
-You can run models from Meta, Mistral, Microsoft (Phi-2), but you can also integrate an image generator such as [Stable Diffusion](https://stability.ai/stable-image), and an automatic speech recognition tool, such as [Whisper](https://github.com/ggerganov/whisper.cpp)

<div class="admonition note" markdown>
<p class="admonition-title">Compatibility issues </p>
Kobold.cpp might not run on computers without AVX/AVX2 support.
</div>

### Ollama
<div class="admonition recommendation" markdown>
![Ollama Logo](assets/img/ai-chatbots/ollama.svg){align=right}

Ollama is a command line AI assistant that is available on macOS, Linux and Windows(preview).

[:octicons-home-16: Homepage](https://github.com/ollama/ollama){ .md-button .md-button--primary }
[:octicons-info-16:](https://github.com/ollama/ollama){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/ollama/ollama){ .card-link title="Source Code"}


</div>
You can run models from Meta, Mistral, Microsoft, Google etc. You can also use [Llava](https://github.com/haotian-liu/LLaVA), a "Large Language and Vision Assistant". Ollama can be downloaded and installed with a few clicks. Furthermore, it is very lightweight and compatible with almost all PCs. To use Ollama, simply type in your terminal "ollama run model name".

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
While llamafile does support the most popular models, it doesn't support more than a dozen models, due to them using a custom file format. Another issue is that Windows limits .exe files to 4GB size, and most models are more than this size. To fix those issues, you can load external models, as detailed [here](https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#using-llamafile-with-external-weights).
</div>
## Criteria

Please note we are not affiliated with any of the projects we recommend. In addition to our standard criteria, we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements
  For cloud providers :
  - Must not use your chats for training
  - Must not retain your chats for more than 14 days
  - Must be accessible privately (no account required, accepts request from VPN users)
  - Must provide models they host themselves, or with a third-party that acts in their behalf.
  - Must provide at least one model whit an high rate limit

  For local solutions :
  - Must not send personal data. Any opt-in mechanism must rely on free consent and avoid dark patterns.
  - Must not require a GPU
  - Must have GPU support for fast inference
  - Must not require internet connection


### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.
For cloud providers :
  - Should not retain your chat
  - Should be accessible anonymously (Tor Browser Safest security level)
  - Providers should only have open-source models that they self-host.
  - Should not be rate-limited
For local solutions :
   -Should provide one-click installer
   -Should have a built-in model downloader option
   -Should be customizable (allow modifying the system prompt, temperature, etc.)


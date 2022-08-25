<!-- markdownlint-disable MD041 -->
<div align="center">
  <a href="https://www.privacyguides.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/privacyguides/brand/main/SVG/Logo/privacy-guides-logo-dark.svg">
      <img alt="Privacy Guides" width="500px" src="https://raw.githubusercontent.com/privacyguides/brand/main/SVG/Logo/privacy-guides-logo.svg">
    </picture>
  </a>

  <p><em>Your central privacy and security resource to protect yourself online.</em></p>

  <a href="https://opencollective.com/privacyguides">
    <img src="https://img.shields.io/opencollective/all/privacyguides">
  </a></p>

  <p><a href="https://www.reddit.com/r/PrivacyGuides/">
    <img src="https://img.shields.io/reddit/subreddit-subscribers/PrivacyGuides?label=Subscribe%20to%20r%2FPrivacyGuides&style=social">
  </a>
  <a href="https://mastodon.social/@privacyguides">
    <img src="https://img.shields.io/mastodon/follow/107604420394178246?style=social">
  </a>
  <a href="https://twitter.com/privacy_guides">
    <img src="https://img.shields.io/twitter/follow/privacy_guides?style=social">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/stargazers">
    <img src="https://img.shields.io/github/stars/privacyguides?style=social">
  </a></p>

  <a href="https://github.com/privacyguides/privacyguides.org/issues">
    <img src="https://img.shields.io/github/issues-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/issues?q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/pulls?q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://crowdin.com/project/privacyguides">
    <img src="https://badges.crowdin.net/privacyguides/localized.svg">
  </a></p>
</div>

## About

**Privacy Guides** is a socially motivated website that provides information for protecting your data security and privacy. We are a non-profit collective operated entirely by volunteer team members and contributors.

Our current list of team members can be found [here](https://github.com/orgs/privacyguides/people). Additionally, [many people](https://github.com/privacyguides/privacyguides.org/graphs/contributors) have made contributions to the project, and you can too!

## Contributing

- 💬 [Start a discussion or suggest an idea](https://github.com/privacyguides/privacyguides.org/discussions)
- 💖 [Sponsor the project](https://github.com/sponsors/privacyguides)
- 🈴 [Help translate the site](https://crwd.in/privacyguides) [[Matrix chat](https://matrix.to/#/#pg-i18n:aragon.sh)]
- 📝 Edit the site, everything's accessible in this repo
  - Browse our [open issues](https://github.com/privacyguides/privacyguides.org/issues) to see what needs to be updated
  - View some contribution tips on our [contributor's wiki](https://github.com/privacyguides/privacyguides.org/wiki)

### Blog

We aspire to publish the best articles about privacy on the net. From hot-takes to long-form essays, we are looking for stylish and well-written pieces.

This not a place for sponsored content or SEO-obsessed posts. Please do **not** pitch us this, as we don't take kindly to it and your email will be blocked. *Caveat scriptor.*

Submit stories or requests to: `freddy@privacyguides.org`

## Mirrors

[![GitHub](https://img.shields.io/static/v1?logo=github&label=&message=GitHub&color=000&style=for-the-badge)](https://github.com/privacyguides/privacyguides.org)
[![Gitea](https://img.shields.io/static/v1?logo=gitea&label=&message=Gitea&color=000&style=for-the-badge)](https://code.privacyguides.dev/privacyguides/privacyguides.org)
[![GitLab](https://img.shields.io/static/v1?logo=gitlab&label=&message=GitLab&color=000&style=for-the-badge)](https://gitlab.com/privacyguides/privacyguides.org)
[![Codeberg](https://img.shields.io/static/v1?logo=codeberg&label=&message=Codeberg&color=000&style=for-the-badge)](https://codeberg.org/privacyguides/privacyguides.org)

## Developing

Committing to this repository requires [signing your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) (`git config commit.gpgsign true`) unless you are making edits via the GitHub.com text editor interface. As of August 2022 the preferred signing method is [SSH commit signatures](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification), but GPG signing is also acceptable. You should add your signing key to your GitHub profile.

This website uses [`mkdocs-material-insiders`](https://squidfunk.github.io/mkdocs-material/insiders/) which offers additional functionality over the open-source `mkdocs-material` project. For obvious reasons we cannot distribute access to the insiders repository. You can install the website locally with the open-source version of `mkdocs-material`:

1. Clone this repository:
    - `git clone https://github.com/privacyguides/privacyguides.org.git` (then `cd privacyguides.org`)
    - `git submodule init`
    - `git submodule update docs/assets/brand`
    - `git config gpg.ssh.allowedSignersFile .allowed_signers`
2. Install [Python 3.6+](https://www.python.org/downloads/) (currently only tested with 3.10)
3. Install [dependencies](/Pipfile): `pip install mkdocs mkdocs-material mkdocs-static-i18n typing-extensions`
4. Serve the site locally: `mkdocs serve`
    - The site will be available at `http://localhost:8000`
    - You can build the site locally with `mkdocs build`
    - Your local version of the site may be missing functionality, which is expected. If you are submitting a PR, please ensure the automatic preview generated for your PR looks correct, as that site will be built with the production insiders build.

**Team members** should clone the repository with `mkdocs-material-insiders` directly. This method is identical to production:

1. Clone this repository and submodules: `git clone --recurse-submodules https://github.com/privacyguides/privacyguides.org.git`
2. Enable SSH commit verification with our local [`.allowed_signers`](/.allowed_signers) file: `git config gpg.ssh.allowedSignersFile .allowed_signers`
3. Install Python **3.10**
4. Install **pipenv**: `pip install pipenv`
5. Install dependencies: `pipenv install --dev` (install [Pillow and CairoSVG](https://squidfunk.github.io/mkdocs-material/setup/setting-up-social-cards/#dependencies) as well to generate social cards)
6. Serve the site locally: `pipenv run mkdocs serve --config-file mkdocs.production.yml` (set `CARDS=true` to generate social cards)
    - The site will be available at `http://localhost:8000`
    - You can build the site locally with `pipenv run mkdocs build`
    - This version of the site should be identical to the live, production version

If you commit to `main` with commits signed with your SSH key, you should add your SSH key to [`.allowed_signers`](/.allowed_signers) in this repo.

## Releasing

1. Create a new tag: `git tag -s v2.X.X -m 'Some message'`
    - [View existing tags](https://github.com/privacyguides/privacyguides.org/tags)
    - Tag [numbering](https://semver.org/): Increment the MINOR (2nd) number when making significant changes (adding/deleting pages, etc.), increment the PATCH (3rd) number when making minor changes (typos, bug fixes). Probably leave the MAJOR number at 2 until a massive revamp (v1 -> v2 was the Jekyll to MkDocs transition).
2. Push the tag to GitHub: `git push --tags`
3. A draft release will be created on GitHub. Publish the release and it will be deployed to the live site automatically.
    - When publishing more significant releases (generally any with a MINOR version increment) check the "Create a discussion for this release" box to post an announcement

<!-- markdownlint-disable MD041 -->
<div align="center">
  <a href="https://www.privacyguides.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/privacyguides/brand/main/SVG/Logo/privacy-guides-logo-dark.svg">
      <img alt="Privacy Guides" width="500px" src="https://raw.githubusercontent.com/privacyguides/brand/main/SVG/Logo/privacy-guides-logo.svg">
    </picture>
  </a>

  <p><em>Your central privacy and security resource to protect yourself online.</em></p>

  <p><a href="https://mastodon.neat.computer/@privacyguides">
    <img src="https://img.shields.io/mastodon/follow/109298532634697668?domain=https%3A%2F%2Fmastodon.neat.computer&label=Follow%20%40privacyguides%40neat.computer&style=social">
  </a>
  <a href="https://twitter.com/privacy_guides">
    <img src="https://img.shields.io/twitter/follow/privacy_guides?style=social">
  </a>
  <a href="https://discuss.privacyguides.net/">
    <img src="https://img.shields.io/discourse/users?label=Join%20our%20forum&logo=discourse&server=https%3A%2F%2Fdiscuss.privacyguides.net&style=social">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/stargazers">
    <img src="https://img.shields.io/github/stars/privacyguides?style=social">
  </a></p>

  <p><a href="https://github.com/privacyguides/privacyguides.org/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://github.com/privacyguides/privacyguides.org/pulls?q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed-raw/privacyguides/privacyguides.org">
  </a>
  <a href="https://opencollective.com/privacyguides">
    <img src="https://img.shields.io/opencollective/all/privacyguides">
  </a></p>
</div>

## About

**Privacy Guides** is a socially motivated website that provides information for protecting your data security and privacy. We are a non-profit collective operated entirely by volunteer team members and contributors.

Our current list of team members can be found [here](https://www.privacyguides.org/about/#our-team). Additionally, [many people](https://github.com/privacyguides/privacyguides.org/graphs/contributors) have made contributions to the project, and you can too!

## Contributing

- 💬 [Start a discussion or suggest an idea](https://discuss.privacyguides.net/)
- 💖 [Sponsor the project](https://github.com/sponsors/privacyguides)
- 🈴 [Help translate the site](https://crwd.in/privacyguides) [[Matrix chat](https://matrix.to/#/#pg-i18n:aragon.sh)]
- 📝 Edit the site, everything's accessible in this repo
  - Browse our [open issues](https://github.com/privacyguides/privacyguides.org/issues) to see what needs to be updated
  - View some contribution tips on our [contributor's wiki](https://github.com/privacyguides/privacyguides.org/wiki)

## Mirrors

[![GitHub](https://img.shields.io/static/v1?logo=github&label=&message=GitHub&color=000&style=for-the-badge)](https://github.com/privacyguides/privacyguides.org)
[![Gitea](https://img.shields.io/static/v1?logo=gitea&label=&message=Gitea&color=000&style=for-the-badge)](https://code.privacyguides.dev/privacyguides/privacyguides.org)
[![GitLab](https://img.shields.io/static/v1?logo=gitlab&label=&message=GitLab&color=000&style=for-the-badge)](https://gitlab.com/privacyguides/privacyguides.org)
[![Codeberg](https://img.shields.io/static/v1?logo=codeberg&label=&message=Codeberg&color=000&style=for-the-badge)](https://codeberg.org/privacyguides/privacyguides.org)
[![SourceHut](https://img.shields.io/static/v1?logo=git&label=&message=SourceHut&color=000&style=for-the-badge)](https://git.sr.ht/~jonaharagon/privacyguides.org)

## Developing

Committing to this repository requires [signing your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) (`git config commit.gpgsign true`) unless you are making edits via the GitHub.com text editor interface. As of August 2022 the preferred signing method is [SSH commit signatures](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification), but GPG signing is also acceptable. You should add your signing key to your GitHub profile.

This website uses [`mkdocs-material-insiders`](https://squidfunk.github.io/mkdocs-material/insiders/) which offers additional functionality over the open-source `mkdocs-material` project. For obvious reasons we cannot distribute access to the insiders repository. You can install the website locally with the open-source version of `mkdocs-material`:

1. Clone this repository:
    - `git clone https://github.com/privacyguides/privacyguides.org.git` (then `cd privacyguides.org`)
    - `git submodule init`
    - `git submodule update docs/assets/brand`
    - `git config gpg.ssh.allowedSignersFile .allowed_signers`
2. Install [Python 3.6+](https://www.python.org/downloads/) (currently only tested with 3.10)
3. Install [dependencies](/Pipfile): `pip install mkdocs mkdocs-material mkdocs-static-i18n mkdocs-macros-plugin typing-extensions`
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

1. Create a new tag: `git tag -s v3.X.X -m 'Some message'`
    - [View existing tags](https://github.com/privacyguides/privacyguides.org/tags)
    - Tag [numbering](https://semver.org/): Increment the MINOR (2nd) number when making significant changes (adding/deleting pages, etc.), increment the PATCH (3rd) number when making minor changes (typos, bug fixes). Probably leave the MAJOR number at 3 until a massive revamp (v1 -> v2 was the Jekyll to MkDocs transition, v2 -> v3 was the introduction of translations).
    - Consider enabling GPG tag signing by default (`git config tag.gpgSign true`) to avoid missing signatures
2. Push the tag to GitHub: `git push --tags`
3. A GitHub Release will be automatically created and deployed to the live site.
    - You may wish to manually check or edit the release changelog/title after it is published for accuracy.

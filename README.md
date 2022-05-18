<!-- markdownlint-disable MD041 -->
<div align="center">
  <a href="https://privacyguides.org#gh-light-mode-only">
    <img src="/docs/assets/img/layout/privacy-guides-logo.svg" width="500px" alt="Privacy Guides" />
  </a>
  
  <a href="https://privacyguides.org#gh-dark-mode-only">
    <img src="/docs/assets/img/layout/privacy-guides-logo-dark.svg" width="500px" alt="Privacy Guides" />
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

## Mirrors

[![GitHub](https://img.shields.io/static/v1?logo=github&label=&message=GitHub&color=000&style=for-the-badge)](https://github.com/privacyguides/privacyguides.org)
[![Gitea](https://img.shields.io/static/v1?logo=gitea&label=&message=Gitea&color=000&style=for-the-badge)](https://code.privacyguides.dev/privacyguides/privacyguides.org)
[![GitLab](https://img.shields.io/static/v1?logo=gitlab&label=&message=GitLab&color=000&style=for-the-badge)](https://gitlab.com/privacyguides/privacyguides.org)
[![Codeberg](https://img.shields.io/static/v1?logo=codeberg&label=&message=Codeberg&color=000&style=for-the-badge)](https://codeberg.org/privacyguides/privacyguides.org)

## Developing

This website uses [`mkdocs-material-insiders`](https://squidfunk.github.io/mkdocs-material/insiders/) which offers additional functionality over the open-source `mkdocs-material` project. For obvious reasons we cannot distribute access to the insiders repository. You can install the website locally with the open-source version of `mkdocs-material`:

1. Clone this repository: `git clone https://github.com/privacyguides/privacyguides.org.git`
2. Install [Python 3.6+](https://www.python.org/downloads/)
3. Install [dependencies](/Pipfile): `pip install mkdocs mkdocs-material mkdocs-static-i18n mkdocs-git-revision-date-localized-plugin typing-extensions`
4. Serve the site locally: `mkdocs serve`
    - The site will be available at `http://localhost:8000`
    - You can build the site locally with `mkdocs build`
    - Your local version of the site may be missing functionality, which is expected. If you are submitting a PR, please ensure the automatic preview generated for your PR looks correct, as that site will be built with the production insiders build.

**Team members** should clone the repository with `mkdocs-material-insiders` directly. This method is identical to production:

1. Clone this repository and submodules: `git clone --recurse-submodules https://github.com/privacyguides/privacyguides.org.git`
2. Install [Python 3.6+](https://www.python.org/downloads/)
3. Install **pipenv**: `pip install pipenv`
4. Install dependencies: `pipenv install --dev`
5. Serve the site locally: `pipenv run mkdocs serve`
    - The site will be available at `http://localhost:8000`
    - You can build the site locally with `pipenv run mkdocs build`
    - This version of the site should be identical to the live, production version

## Releasing

1. Create a new tag: `git tag -s v2.X.X -m 'Some message'`
    - [View existing tags](https://github.com/privacyguides/privacyguides.org/tags)
    - Tag [numbering](https://semver.org/): Increment the MINOR (2nd) number when making significant changes (adding/deleting pages, etc.), increment the PATCH (3rd) number when making minor changes (typos, bug fixes). Probably leave the MAJOR number at 2 until a massive redesign (v1 -> v2 was the Jekyll to MkDocs transition).
2. Push the tag to GitHub: `git push --tags`
3. [Create a new release](https://github.com/privacyguides/privacyguides.org/releases/new) selecting the new tag
    - Title the release the same as the tag version number without the `v`, i.e. `2.X.X`
      - For more significant releases, add a **short** title, for example [2.3.0 - Localization Support](https://github.com/privacyguides/privacyguides.org/releases/tag/v2.3.0) or [2.2.0 - Removing Social Networks](https://github.com/privacyguides/privacyguides.org/releases/tag/v2.2.0)
    - GitHub should let you auto-generate release notes based on PR titles
      - Mark more significant changes in bold, see [2.3.0](https://github.com/privacyguides/privacyguides.org/releases/tag/v2.3.0) for example
4. Publish release, it will be deployed to the live site automatically
    - When publishing more significant releases (generally any with a MINOR version increment) check the "Create a discussion for this release" box to post an announcement

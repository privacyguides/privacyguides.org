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
  </a></p>
</div>

## About

**Privacy Guides** is a socially motivated website that provides information for protecting your data security and privacy. We are a non-profit collective operated entirely by volunteer team members and contributors.

Our current list of team members can be found [here](https://github.com/orgs/privacyguides/people). Additionally, [many people](https://github.com/privacyguides/privacyguides.org/graphs/contributors) have made contributions to the project, and you can too!

## Contributing

- 💬 [Start a discussion or suggest an idea](https://github.com/privacyguides/privacyguides.org/discussions)
- 💖 [Sponsor the project](https://github.com/sponsors/privacyguides)
- 📝 Edit the site, everything's accessible in this repo
  - Browse our [open issues](https://github.com/privacyguides/privacyguides.org/issues) to see what needs to be updated
  - When making more significant (than simple typo fixes, etc.) changes, update the [changelog](/CHANGELOG.md)
  - View some contribution tips on our [contributor's wiki](https://github.com/privacyguides/privacyguides.org/wiki)

## Developing

1. Clone this repository: `git clone https://github.com/privacyguides/privacyguides.org`
2. Install [Python 3.6+](https://www.python.org/downloads/)
3. Install [mkdocs-material](https://squidfunk.github.io/mkdocs-material/getting-started/): `pip install mkdocs-material`
4. Serve the site locally: `mkdocs serve`
    - The site will be available at `http://localhost:8000/`.
  
Your local site will appear slightly different, because the production version of the website uses a private/custom build of mkdocs-material with additional features.

Team members with access to [mkdocs-material-insiders](https://github.com/privacyguides/mkdocs-material-insiders) should instead:

1. Clone this repository and submodules: `git clone --recurse-submodules https://github.com/privacyguides/privacyguides.org`
2. Install [Python 3.6+](https://www.python.org/downloads/)
3. Install **pipenv**: `pip install pipenv`
4. Start a pipenv shell: `pipenv shell`
5. Install dependencies: `pipenv install --dev`
6. Serve the site locally: `mkdocs serve --config-file mkdocs.production.yml`
    - The site will be available at `http://localhost:8000`
    - You can build the site locally with `mkdocs build --config-file mkdocs.production.yml`
    - This version of the site should be identical to the live, production version

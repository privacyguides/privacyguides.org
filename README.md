<div align="center">
<a href="https://privacyguides.org">
	<img src="/assets/img/layout/privacy-guides-logo.svg" width="500px" alt="Privacy Guides" />
</a>
<p>
	<em>The guide to restoring your online privacy.</em>
</p>
<p>
<a href="https://privacyguides.org">
	<img src="https://img.shields.io/uptimerobot/status/m786935055-1117e0819f5c23c651d46a17?label=website%20status">
</a>
<a href="#">
	<img src="https://img.shields.io/uptimerobot/ratio/7/m786935055-1117e0819f5c23c651d46a17">
</a>
</p>
<p>
<a href="https://www.reddit.com/r/PrivacyGuides/">
	<img src="https://img.shields.io/reddit/subreddit-subscribers/privacyguides?style=social">
</a>
<a href="#">
	<img src="https://img.shields.io/github/stars/privacyguides?style=social">
</a>
</p>
<p>
<a href="https://app.netlify.com/sites/privacyguides/deploys">
	<img src="https://img.shields.io/netlify/f40bcb64-a6ed-4650-9ca6-7d3ac293d2be">
</a>
<a href="https://opencollective.com/privacyguides#support">
	<img src="https://img.shields.io/opencollective/all/privacyguides?label=opencollective%20contributors">
</a>
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
<a href="https://github.com/privacytools/privacytools.io/issues">
	<img src="https://img.shields.io/github/issues/privacytools/privacytools.io?color=black&label=upstream%20issues">
</a>
</p>
</div>

## Developing

1. Install the version of [Ruby](https://www.ruby-lang.org/en/downloads/) currently specified by [`.ruby-version`](.ruby-version)
	* With [rbenv](https://github.com/rbenv/rbenv) (**recommended!**): `rbenv install`
	* With [RVM](https://rvm.io): `rvm install "ruby-$(cat .ruby-version)"`
	* [Manually](https://www.ruby-lang.org/en/downloads/)
1. Install node.js and npm
1. Install [Bundler](https://bundler.io/) v2.2.5:
	* `gem install bundler:2.2.5`
1. Install the required dependencies:
	* `bundle install`
	* `npm install`
1. Build the website (the output can be found in the `_site` directory):
	* `npm run build`
1. Serve the website locally with live reloading:
	* `npm run serve`

source "https://rubygems.org"

gem "jekyll", "~> 4.2"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-brotli", "~> 2.3"
end

# Jekyll 3.9.0 now requires this explicitly installed, apparently
gem "kramdown-parser-gfm", "~> 1.1"
gem "webrick", "~> 1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

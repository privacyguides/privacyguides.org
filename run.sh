#!/bin/bash
# Usage: SITE_LANGUAGE=fr PRODUCTION=true ./run.sh build --strict
# With no arguments, serve the English site locally.
set -euo pipefail
language="${SITE_LANGUAGE:-en}"

# Set environment variables if language is not en
if [ "$language" != "en" ]; then
  export BUILD_ABBREVIATIONS="includes/abbreviations.$language.txt"
  export BUILD_DOCS_DIR="i18n/$language"
  export BUILD_EDIT_URI_TEMPLATE="https://github.com/privacyguides/i18n/blob/main/i18n/$language/{path}?plain=1"
  export BUILD_SITE_DIR="site/$language"
  export BUILD_SITE_URL="https://www.privacyguides.org/$language"
  export BUILD_THEME_LANGUAGE="$language"
fi

# Source per-language strings
set -a
  # shellcheck disable=SC1090
  source "includes/strings.$language.env"
set +a

# Set font if hebrew
if [ "$language" == "he" ]; then
  export BUILD_THEME_FONT_CODE="Cousine"
  export BUILD_THEME_FONT_TEXT="Open Sans"
fi

# Set font if russian or chinese
if [[ "ru zh-Hant zh-TW" =~ $language ]]; then
  export BUILD_THEME_FONT_CODE="Noto Sans TC"
  export BUILD_THEME_FONT_TEXT="Noto Sans TC"
fi

# Set stylesheet if hebrew or russian or chinese
if [[ "he ru zh-Hant zh-TW" =~ $language ]]; then
  export TRANSLATION_STYLESHEET="assets/stylesheets/lang-$language.css?v=20240410"
fi

# Apply offline links after the language settings.
if [[ "${BUILD_OFFLINE:-false}" == true ]]; then
  export BUILD_EDIT_URI_TEMPLATE='' BUILD_REPO_URL='' CARDS=false
  export HOMEPAGE_BUTTON_GET_STARTED_LINK="basics/why-privacy-matters.html"
  export HOMEPAGE_BUTTON_TOOLS_LINK="tools.html"
fi

if [[ $# == 0 ]]; then
  set -- serve
fi
exec mkdocs "$@"

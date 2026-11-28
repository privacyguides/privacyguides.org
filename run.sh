#!/bin/bash
# SPDX-FileCopyrightText: 2024-2026 Jonah Aragon
# SPDX-License-Identifier: MIT

# Production: BUILD_CONTEXT=production ./run.sh build --strict
# Translation: SITE_LANGUAGE=fr BUILD_CONTEXT=production ./run.sh build
# Blog: ./run.sh --blog build --strict (or ./run.sh --blog to serve)
# With no arguments, serve the English site locally.
set -euo pipefail
blog=false
if [[ "${1:-}" == --blog ]]; then
  blog=true
  shift
fi

# Use the same context locally and in CI
export BUILD_CONTEXT="${BUILD_CONTEXT:-development}"

# Keep offline navigation in production mode
if [[ "$BUILD_CONTEXT" == production && "${BUILD_OFFLINE:-false}" != true ]]; then
  export MAIN_SITE_BASE_URL=https://www.privacyguides.org/en/
  export MAIN_SITE_ABOUT_URL=https://www.privacyguides.org/en/about/
  export MAIN_SITE_RECOMMENDATIONS_URL=https://www.privacyguides.org/en/tools/
  export MAIN_SITE_KNOWLEDGE_BASE_URL=https://www.privacyguides.org/en/basics/why-privacy-matters/
  export ARTICLES_SITE_BASE_URL=https://www.privacyguides.org/posts/tag/articles/
  export VIDEOS_SITE_BASE_URL=https://www.privacyguides.org/videos/
  export NEWS_SITE_BASE_URL=https://www.privacyguides.org/news/
fi

# The blog doesn't need website translation settings
if [[ "$blog" == false ]]; then
  language="${SITE_LANGUAGE:-en}"

  # Omit Git metadata for offline builds and translations
  git_metadata=false
  if [[ "$language" == en && "$BUILD_CONTEXT" == production && "${BUILD_OFFLINE:-false}" != true ]]; then
    git_metadata=true
  fi
  export GITAUTHORS="${GITAUTHORS:-$git_metadata}"
  export GITREVISIONDATE="${GITREVISIONDATE:-$git_metadata}"

  # Set environment variables if language is not en
  if [ "$language" != "en" ]; then
    export BUILD_ABBREVIATIONS="includes/abbreviations.$language.txt"
    export BUILD_DOCS_DIR="i18n/$language"
    export BUILD_EDIT_URI_TEMPLATE="https://github.com/privacyguides/i18n/blob/main/i18n/$language/{path}?plain=1"
    export BUILD_SITE_DIR="site/$language"
    export BUILD_SITE_URL="https://www.privacyguides.org/$language"
    export BUILD_THEME_LANGUAGE="$language"

    # Share non-localized images with translated builds and previews
    mkdir -p "$BUILD_DOCS_DIR/assets"
    if [[ -e "$BUILD_DOCS_DIR/assets/images" && ! -L "$BUILD_DOCS_DIR/assets/images" ]]; then
      echo "Cannot link shared images: $BUILD_DOCS_DIR/assets/images already exists and is not a symlink." >&2
      exit 1
    fi
    ln -sfn ../../../docs/assets/images "$BUILD_DOCS_DIR/assets/images"

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

  # Set font if Korean
  if [ "$language" == "ko" ]; then
    export BUILD_THEME_FONT_CODE="Noto Sans KR"
    export BUILD_THEME_FONT_TEXT="Noto Sans KR"
  fi

  # Set font if russian or chinese
  if [[ "ru zh-Hant zh-TW" =~ $language ]]; then
    export BUILD_THEME_FONT_CODE="Noto Sans TC"
    export BUILD_THEME_FONT_TEXT="Noto Sans TC"
  fi

  # Set stylesheet if language is non-latin
  if [[ "he ko ru zh-Hant zh-TW" =~ $language ]]; then
    export TRANSLATION_STYLESHEET="assets/stylesheets/lang-$language.css?v=20240410"
  fi

else
  export BUILD_THEME_LANGUAGE=en
fi

# Apply offline links after the language settings
if [[ "${BUILD_OFFLINE:-false}" == true ]]; then
  export BUILD_EDIT_URI_TEMPLATE='' BUILD_REPO_URL='' CARDS=false
  if [[ "$blog" == false ]]; then
    export HOMEPAGE_BUTTON_GET_STARTED_LINK="basics/why-privacy-matters.html"
    export HOMEPAGE_BUTTON_TOOLS_LINK="tools.html"
  fi
fi

if [[ $# == 0 ]]; then
  set -- serve
fi
if [[ "$blog" == true ]]; then
  set -- "$@" --config-file mkdocs.blog.yml
fi
exec mkdocs "$@"

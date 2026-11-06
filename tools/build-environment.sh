# Production navigation shared by the main site and blog.
if [[ "${BUILD_CONTEXT:-}" == production ]]; then
  export MAIN_SITE_BASE_URL=https://www.privacyguides.org/en/
  export MAIN_SITE_ABOUT_URL=https://www.privacyguides.org/en/about/
  export MAIN_SITE_RECOMMENDATIONS_URL=https://www.privacyguides.org/en/tools/
  export MAIN_SITE_KNOWLEDGE_BASE_URL=https://www.privacyguides.org/en/basics/why-privacy-matters/
  export ARTICLES_SITE_BASE_URL=https://www.privacyguides.org/posts/tag/articles/
  export VIDEOS_SITE_BASE_URL=https://www.privacyguides.org/videos/
  export NEWS_SITE_BASE_URL=https://www.privacyguides.org/news/
fi

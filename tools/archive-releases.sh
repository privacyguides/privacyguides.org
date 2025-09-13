#!/bin/bash
set -euo pipefail

REPO="privacyguides/privacyguides.org"
BASE_DIR="releases"

mkdir -p "$BASE_DIR"

# Get all release tags using gh CLI
release_tags=$(gh release list -R "$REPO" --limit 1000 | awk '{print $1}')

for tag in $release_tags; do
  target_dir="$BASE_DIR/$tag"
  mkdir -p "$target_dir"
  echo "Downloading assets for release: $tag"
  gh release download "$tag" -R "$REPO" --dir "$target_dir"
done

echo "All releases downloaded."

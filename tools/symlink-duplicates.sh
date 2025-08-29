#!/bin/bash
set -euo pipefail

declare -A file_hashes

find . -type f | while read -r file; do
  hash=$(sha256sum "$file" | awk '{print $1}')
  if [[ -n "${file_hashes[$hash]+_}" ]]; then
    # Duplicate found, replace with symlink to first copy
    first="${file_hashes[$hash]}"
    # Remove the duplicate file
    rm "$file"
    # Create symlink (relative path)
    ln -s "$(realpath --relative-to="$(dirname "$file")" "$first")" "$file"
    echo "Replaced duplicate: $file -> $first"
  else
    # First time seeing this hash
    file_hashes[$hash]="$file"
  fi
done

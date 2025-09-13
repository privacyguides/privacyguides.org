#!/bin/bash

# Script to find and delete unreferenced asset files
# This script searches through all HTML, CSS, and JavaScript files to see if asset files are referenced

set -e  # Exit on any error

echo -e "Starting unreferenced asset cleanup..."
echo "Assets directory: $ASSETS_DIR"
echo "Search directory: $SEARCH_DIR"
echo ""

# Check if assets directory exists
if [ ! -d "$ASSETS_DIR" ]; then
    echo -e "Error: Assets directory '$ASSETS_DIR' not found!"
    exit 1
fi

# Find all asset files recursively
echo "Finding all asset files..."
ASSET_FILES=$(find "$ASSETS_DIR" -type f)
ASSET_COUNT=$(echo "$ASSET_FILES" | wc -l)
echo "Found $ASSET_COUNT asset files"
echo ""

# Find all HTML, CSS, and JavaScript files
echo "Finding all HTML, CSS, and JavaScript files..."
SEARCH_FILES=$(find "$SEARCH_DIR" \( -name "*.html" -o -name "*.css" -o -name "*.js" \) -type f)
SEARCH_COUNT=$(echo "$SEARCH_FILES" | wc -l)
echo "Found $SEARCH_COUNT HTML, CSS, and JavaScript files"
echo ""

# Process each asset file
echo "Checking each asset file for references..."
echo ""

while IFS= read -r asset_file; do
    if [ -z "$asset_file" ]; then
        continue
    fi

    # Get just the filename (without path)
    asset_filename=$(basename "$asset_file")

    # Search for this filename in all HTML, CSS, and JavaScript files
    found_reference=false

    while IFS= read -r search_file; do
        if [ -z "$search_file" ]; then
            continue
        fi

        # Simple string search for the filename in the file
        if grep -q "$asset_filename" "$search_file" 2>/dev/null; then
            found_reference=true
            break
        fi
    done <<< "$SEARCH_FILES"

    if [ "$found_reference" = false ]; then
        echo -e "Unreferenced: $asset_file"
        rm "$asset_file"
    fi
done <<< "$ASSET_FILES"

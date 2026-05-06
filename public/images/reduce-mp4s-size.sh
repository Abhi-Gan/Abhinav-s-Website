#!/bin/bash

# Usage:
# ./compress-mp4-folder.sh path/to/folder

TARGET_DIR="${1:-.}"

echo "Scanning folder: $TARGET_DIR"

find "$TARGET_DIR" -type f -name "*.mp4" | while read -r file; do
  echo "Processing: $file"

  tmp="${file%.mp4}_tmp.mp4"

  ffmpeg -y -i "$file" \
    -vf "scale=480:-2" \
    -r 10 \
    -c:v libx264 \
    -crf 32 \
    -preset slow \
    -pix_fmt yuv420p \
    -movflags faststart \
    "$tmp"

  # Replace original only if successful
  if [ $? -eq 0 ]; then
    mv "$tmp" "$file"
    echo "✔ Compressed: $file"
  else
    echo "❌ Failed: $file"
    rm -f "$tmp"
  fi

done

echo "Done."
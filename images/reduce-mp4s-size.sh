#!/bin/bash

# Usage:
# ./compress-mp4-folder.sh path/to/folder

TARGET_DIR="${1:-.}"

echo "Scanning folder: $TARGET_DIR"

find "$TARGET_DIR" -type f -name "*.mp4" | while read -r file; do
  echo "Processing: $file"

  tmp="${file%.mp4}_tmp.mp4"

# scale width down to < 1440 (maintain aspect ratio)
# reduce framerate to 12 fps
# compress using H.264 codec with CRF 25 and slow preset
# no audio
# optimize for web streaming
  ffmpeg -y -i "$file" \
    -vf "scale='min(3840,iw)':-2" \
    -r 10 \
    -c:v libx264 \
    -crf 29 \
    -preset slow \
    -pix_fmt yuv420p \
    -an \
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
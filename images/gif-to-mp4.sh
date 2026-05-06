#!/bin/bash

# Check input
if [ -z "$1" ]; then
  echo "Usage: ./gif-to-mp4.sh input.gif"
  exit 1
fi

INPUT="$1"
OUTPUT="${INPUT%.*}.mp4"

ffmpeg -i "$INPUT" \
-movflags faststart \
-pix_fmt yuv420p \
-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
-c:v libx264 \
-crf 28 \
-preset slow \
"$OUTPUT"

echo "Done: $OUTPUT"

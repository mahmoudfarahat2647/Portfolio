#!/bin/bash

# Create avatars directory if it doesn't exist
mkdir -p avatars

# Generate placeholder avatars with different background colors
convert -size 200x200 xc:'#4F46E5' \
  -gravity center -pointsize 72 -fill white \
  -draw "text 0,0 'S'" \
  avatars/sarah.jpg

convert -size 200x200 xc:'#2DD4BF' \
  -gravity center -pointsize 72 -fill white \
  -draw "text 0,0 'M'" \
  avatars/mike.jpg

convert -size 200x200 xc:'#EC4899' \
  -gravity center -pointsize 72 -fill white \
  -draw "text 0,0 'L'" \
  avatars/lisa.jpg

convert -size 200x200 xc:'#F59E0B' \
  -gravity center -pointsize 72 -fill white \
  -draw "text 0,0 'A'" \
  avatars/alex.jpg

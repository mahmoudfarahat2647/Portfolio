#!/bin/bash

# Create tutorials directory if it doesn't exist
mkdir -p tutorials

# Generate placeholder thumbnails with gradients and text
convert -size 800x450 \
  gradient:'#4F46E5-#818CF8' \
  -gravity center -pointsize 36 -fill white \
  -draw "text 0,0 'Dashboard Tutorial'" \
  tutorials/dashboard.jpg

convert -size 800x450 \
  gradient:'#2DD4BF-#14B8A6' \
  -gravity center -pointsize 36 -fill white \
  -draw "text 0,0 'Template Customization'" \
  tutorials/customization.jpg

convert -size 800x450 \
  gradient:'#EC4899-#F472B6' \
  -gravity center -pointsize 36 -fill white \
  -draw "text 0,0 'Animation Techniques'" \
  tutorials/animations.jpg

convert -size 800x450 \
  gradient:'#F59E0B-#FBBF24' \
  -gravity center -pointsize 36 -fill white \
  -draw "text 0,0 'Authentication Guide'" \
  tutorials/auth.jpg

# Make both scripts executable
chmod +x generate-thumbnails.sh
cd ../avatars && chmod +x generate-avatars.sh

// Simple React component to generate thumbnail SVGs with gradients
export function ThumbnailPlaceholder({
  title,
  startColor,
  endColor,
}: {
  title: string;
  startColor: string;
  endColor: string;
}) {
  return (
    <svg
      width="800"
      height="450"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor }} />
          <stop offset="100%" style={{ stopColor: endColor }} />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill={`url(#grad-${title})`} />
      <text
        x="400"
        y="225"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="36"
      >
        {title}
      </text>
    </svg>
  );
}

// Export base64 encoded SVG strings
export const thumbnails = {
  dashboard: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-dashboard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #4F46E5"/>
          <stop offset="100%" style="stop-color: #818CF8"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-dashboard)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Dashboard Tutorial</text>
    </svg>`
  )}`,
  customization: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-customization" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #2DD4BF"/>
          <stop offset="100%" style="stop-color: #14B8A6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-customization)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Template Customization</text>
    </svg>`
  )}`,
  animations: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-animations" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #EC4899"/>
          <stop offset="100%" style="stop-color: #F472B6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-animations)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Animation Techniques</text>
    </svg>`
  )}`,
  auth: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-auth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #F59E0B"/>
          <stop offset="100%" style="stop-color: #FBBF24"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-auth)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Authentication Guide</text>
    </svg>`
  )}`,
};

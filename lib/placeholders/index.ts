interface BaseSVGProps {
  width?: number;
  height?: number;
  viewBox?: string;
}

// Avatar placeholder SVGs
export const avatars = {
  sarah: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#4F46E5"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">S</text>
    </svg>
  `)}`,
  mike: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#2DD4BF"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">M</text>
    </svg>
  `)}`,
  lisa: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#EC4899"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">L</text>
    </svg>
  `)}`,
  alex: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#F59E0B"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">A</text>
    </svg>
  `)}`,
} as const;

// Tutorial thumbnail SVGs
export const thumbnails = {
  dashboard: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-dashboard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #4F46E5"/>
          <stop offset="100%" style="stop-color: #818CF8"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-dashboard)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Dashboard Tutorial</text>
    </svg>
  `)}`,
  customization: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-customization" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #2DD4BF"/>
          <stop offset="100%" style="stop-color: #14B8A6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-customization)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Template Customization</text>
    </svg>
  `)}`,
  animations: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-animations" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #EC4899"/>
          <stop offset="100%" style="stop-color: #F472B6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-animations)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Animation Techniques</text>
    </svg>
  `)}`,
  auth: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-auth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #F59E0B"/>
          <stop offset="100%" style="stop-color: #FBBF24"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-auth)"/>
      <text x="400" y="225" text-anchor="middle" fill="white" font-family="sans-serif" font-size="36">Authentication Guide</text>
    </svg>
  `)}`,
} as const;

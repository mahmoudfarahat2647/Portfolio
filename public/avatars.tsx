// Simple React component to generate avatar SVGs
export function AvatarPlaceholder({ initial, color }: { initial: string; color: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" fill={color} />
      <text
        x="100"
        y="115"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="72"
      >
        {initial}
      </text>
    </svg>
  );
}

// Export base64 encoded SVG strings
export const avatars = {
  sarah: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#4F46E5"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">S</text>
    </svg>`
  )}`,
  mike: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#2DD4BF"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">M</text>
    </svg>`
  )}`,
  lisa: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#EC4899"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">L</text>
    </svg>`
  )}`,
  alex: `data:image/svg+xml,${encodeURIComponent(
    `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#F59E0B"/>
      <text x="100" y="115" text-anchor="middle" fill="white" font-family="sans-serif" font-size="72">A</text>
    </svg>`
  )}`,
};

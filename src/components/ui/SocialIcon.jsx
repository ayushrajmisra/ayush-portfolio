export default function SocialIcon({ name, size = 19 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "github") return (
    <svg {...common} fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.38 3.4 1.7.1-.73.39-1.23.7-1.52-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
  );

  if (name === "linkedin") return (
    <svg {...common} fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.5h2.96v8.84ZM6.45 8.29a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm11.89 10.05h-2.95v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28v4.37H9.36V9.5h2.83v1.21h.04c.39-.7 1.36-1.43 2.8-1.43 2.99 0 3.54 1.97 3.54 4.53v4.53Z"/>
    </svg>
  );

  if (name === "facebook") return (
    <svg {...common} fill="currentColor">
      <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14A22.8 22.8 0 0 0 14.31 3c-2.46 0-4.14 1.5-4.14 4.26V9.6H7.4v3.2h2.77V21h3.33Z"/>
    </svg>
  );

  if (name === "instagram") return (
    <svg {...common} stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );

  return null;
}

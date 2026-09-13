export default function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="brace-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#brace-grid)" />
      <circle cx="120" cy="80" r="3" fill="currentColor" />
      <circle cx="280" cy="160" r="3" fill="currentColor" />
      <circle cx="200" cy="280" r="3" fill="currentColor" />
      <line x1="120" y1="80" x2="280" y2="160" stroke="currentColor" strokeWidth="1" />
      <line x1="280" y1="160" x2="200" y2="280" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

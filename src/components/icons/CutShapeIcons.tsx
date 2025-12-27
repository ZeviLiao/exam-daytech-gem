// SVG icons for different gemstone cut shapes
export const CutShapeIcons = {
  Round: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Round cut"
    >
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="10" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15.86" y1="15.86" x2="44.14" y2="44.14" stroke="currentColor" strokeWidth="0.5" />
      <line x1="44.14" y1="15.86" x2="15.86" y2="44.14" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Square: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Square cut"
    >
      <rect
        x="12"
        y="12"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="18"
        y="18"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="24"
        y="24"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="30" y1="12" x2="30" y2="48" stroke="currentColor" strokeWidth="0.5" />
      <line x1="12" y1="30" x2="48" y2="30" stroke="currentColor" strokeWidth="0.5" />
      <line x1="12" y1="12" x2="48" y2="48" stroke="currentColor" strokeWidth="0.5" />
      <line x1="48" y1="12" x2="12" y2="48" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Cushion: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cushion cut"
    >
      <rect
        x="15"
        y="15"
        width="30"
        height="30"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="20"
        y="20"
        width="20"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="25"
        y="25"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Oval: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Oval cut"
    >
      <ellipse
        cx="30"
        cy="30"
        rx="12"
        ry="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse cx="30" cy="30" rx="9" ry="15" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="30" cy="30" rx="6" ry="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="18" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="0.5" />
      <ellipse cx="30" cy="20" rx="4" ry="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <ellipse cx="30" cy="40" rx="4" ry="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  ),

  Emerald: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Emerald cut"
    >
      <path
        d="M18 15 L42 15 L45 18 L45 42 L42 45 L18 45 L15 42 L15 18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="22"
        y="22"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="26"
        y="26"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Pear: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pear cut"
    >
      <path
        d="M30 10 C20 10, 15 20, 15 30 C15 40, 22 48, 30 48 C38 48, 45 40, 45 30 C45 20, 40 10, 30 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M30 15 C24 15, 20 22, 20 30 C20 38, 25 43, 30 43 C35 43, 40 38, 40 30 C40 22, 36 15, 30 15"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <line x1="30" y1="10" x2="30" y2="48" stroke="currentColor" strokeWidth="0.5" />
      <path d="M25 25 L30 15 L35 25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  ),

  Asscher: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Asscher cut"
    >
      <path
        d="M16 16 L22 12 L38 12 L44 16 L48 22 L48 38 L44 44 L38 48 L22 48 L16 44 L12 38 L12 22 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="20"
        y="20"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="25"
        y="25"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="30" y1="12" x2="30" y2="48" stroke="currentColor" strokeWidth="0.5" />
      <line x1="12" y1="30" x2="48" y2="30" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Heart: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Heart cut"
    >
      <path
        d="M30 45 C20 35, 12 28, 12 20 C12 14, 16 10, 21 10 C25 10, 28 12, 30 15 C32 12, 35 10, 39 10 C44 10, 48 14, 48 20 C48 28, 40 35, 30 45 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M30 40 C23 33, 18 28, 18 22 C18 18, 20 15, 23 15 C26 15, 28 17, 30 20 C32 17, 34 15, 37 15 C40 15, 42 18, 42 22 C42 28, 37 33, 30 40 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Marquise: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Marquise cut"
    >
      <path
        d="M10 30 Q15 15, 30 15 Q45 15, 50 30 Q45 45, 30 45 Q15 45, 10 30 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M15 30 Q18 20, 30 20 Q42 20, 45 30 Q42 40, 30 40 Q18 40, 15 30 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <ellipse cx="30" cy="30" rx="8" ry="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="10" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="0.5" />
      <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),

  Other: () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Other cut"
    >
      <path d="M30 12 L45 35 L15 35 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M30 18 L40 32 L20 32 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M30 24 L35 30 L25 30 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="30" y1="12" x2="30" y2="35" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15" y1="35" x2="45" y2="35" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="30" cy="42" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  ),
};

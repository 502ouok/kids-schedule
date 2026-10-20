// SVG avatar illustrations for each instructor
// Style: soft, rounded, app-character aesthetic

export function AvatarOhKyeongmi({ size = 56 }: { size?: number }) {
  // 오경미 — female, dark hair in bun, cream top, emerald background
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* background */}
      <circle cx="30" cy="30" r="30" fill="#D1F5EA" />

      {/* body — cream sweater */}
      <path d="M10 60 Q10 48 30 48 Q50 48 50 60Z" fill="#F0E8D0" />
      <rect x="10" y="52" width="40" height="10" fill="#F0E8D0" />

      {/* neck */}
      <rect x="25" y="43" width="10" height="8" fill="#FFCBA4" />

      {/* hair — back layer */}
      <ellipse cx="30" cy="27" rx="14" ry="12" fill="#2B1911" />

      {/* face */}
      <circle cx="30" cy="32" r="13" fill="#FFCBA4" />

      {/* hair — top bun */}
      <ellipse cx="30" cy="17" rx="7" ry="6" fill="#2B1911" />
      {/* bun strand */}
      <ellipse cx="30" cy="22" rx="5" ry="3" fill="#2B1911" />

      {/* hair clip — sage green */}
      <rect x="23" y="20" width="5" height="2.5" rx="1.2" fill="#6CC2A0" />

      {/* ears */}
      <ellipse cx="17.5" cy="32" rx="2.5" ry="3" fill="#FFCBA4" />
      <ellipse cx="42.5" cy="32" rx="2.5" ry="3" fill="#FFCBA4" />

      {/* eyes */}
      <ellipse cx="25" cy="31" rx="2.2" ry="2.6" fill="#2B1911" />
      <ellipse cx="35" cy="31" rx="2.2" ry="2.6" fill="#2B1911" />
      {/* eye shine */}
      <circle cx="25.9" cy="30" r="0.8" fill="white" />
      <circle cx="35.9" cy="30" r="0.8" fill="white" />

      {/* eyebrows */}
      <path d="M22.5 27.5 Q25 26.5 27.5 27.5" stroke="#2B1911" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M32.5 27.5 Q35 26.5 37.5 27.5" stroke="#2B1911" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* smile */}
      <path d="M26 36.5 Q30 40 34 36.5" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* blush */}
      <ellipse cx="21.5" cy="35" rx="3.5" ry="2" fill="#FFB5A0" opacity="0.45" />
      <ellipse cx="38.5" cy="35" rx="3.5" ry="2" fill="#FFB5A0" opacity="0.45" />
    </svg>
  )
}

export function AvatarNohHyeongju({ size = 56 }: { size?: number }) {
  // 노형주 — male, short dark hair, black hoodie, blue background
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* background */}
      <circle cx="30" cy="30" r="30" fill="#DDEEFF" />

      {/* body — black top */}
      <path d="M8 60 Q8 46 30 46 Q52 46 52 60Z" fill="#2C2C2C" />
      <rect x="8" y="52" width="44" height="10" fill="#2C2C2C" />

      {/* neck */}
      <rect x="25" y="43" width="10" height="6" fill="#FFD0A8" />

      {/* hair — back / sides */}
      <ellipse cx="30" cy="26" rx="15" ry="13" fill="#1E130E" />

      {/* face */}
      <circle cx="30" cy="32" r="13" fill="#FFD0A8" />

      {/* hair top — slightly textured */}
      <ellipse cx="30" cy="18" rx="13" ry="7" fill="#1E130E" />
      <ellipse cx="22" cy="20" rx="5" ry="4" fill="#1E130E" />
      <ellipse cx="38" cy="20" rx="5" ry="4" fill="#1E130E" />

      {/* ears */}
      <ellipse cx="17" cy="32" rx="2.5" ry="3" fill="#FFD0A8" />
      <ellipse cx="43" cy="32" rx="2.5" ry="3" fill="#FFD0A8" />

      {/* eyes — calm, slightly narrow */}
      <ellipse cx="25" cy="31" rx="2.5" ry="2.2" fill="#1E130E" />
      <ellipse cx="35" cy="31" rx="2.5" ry="2.2" fill="#1E130E" />
      <circle cx="25.9" cy="30.2" r="0.8" fill="white" />
      <circle cx="35.9" cy="30.2" r="0.8" fill="white" />

      {/* eyebrows — straight, confident */}
      <path d="M22.5 27.5 L27.5 27.5" stroke="#1E130E" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M32.5 27.5 L37.5 27.5" stroke="#1E130E" strokeWidth="1.4" strokeLinecap="round" />

      {/* smile — slight */}
      <path d="M27 36.5 Q30 38.5 33 36.5" stroke="#B8836A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function AvatarJiWonhyeok({ size = 56 }: { size?: number }) {
  // 지원혁 — male, medium hair, white t-shirt, violet background
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* background */}
      <circle cx="30" cy="30" r="30" fill="#EDE8FF" />

      {/* body — white t-shirt */}
      <path d="M9 60 Q9 46 30 46 Q51 46 51 60Z" fill="#F4F4F4" />
      <rect x="9" y="52" width="42" height="10" fill="#F4F4F4" />
      {/* t-shirt collar */}
      <path d="M25 46 Q30 50 35 46" stroke="#E0E0E0" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* neck */}
      <rect x="25" y="43" width="10" height="6" fill="#FFCFA6" />

      {/* hair — back / sides, slightly longer */}
      <ellipse cx="30" cy="25" rx="15" ry="14" fill="#1A120C" />

      {/* face */}
      <circle cx="30" cy="32" r="13" fill="#FFCFA6" />

      {/* hair — top, slightly swept */}
      <ellipse cx="30" cy="17" rx="12" ry="7" fill="#1A120C" />
      <ellipse cx="20" cy="21" rx="4.5" ry="5" fill="#1A120C" />
      <ellipse cx="40" cy="21" rx="4.5" ry="5" fill="#1A120C" />
      {/* swoosh */}
      <path d="M20 18 Q30 14 40 18" stroke="#2A1A10" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ears */}
      <ellipse cx="17" cy="32" rx="2.5" ry="3" fill="#FFCFA6" />
      <ellipse cx="43" cy="32" rx="2.5" ry="3" fill="#FFCFA6" />

      {/* eyes — friendly, slightly rounder */}
      <ellipse cx="25" cy="31" rx="2.3" ry="2.6" fill="#1A120C" />
      <ellipse cx="35" cy="31" rx="2.3" ry="2.6" fill="#1A120C" />
      <circle cx="25.9" cy="30.1" r="0.8" fill="white" />
      <circle cx="35.9" cy="30.1" r="0.8" fill="white" />

      {/* eyebrows — gentle arch */}
      <path d="M22.5 27.5 Q25 26 27.5 27" stroke="#1A120C" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M32.5 27 Q35 26 37.5 27.5" stroke="#1A120C" strokeWidth="1.3" strokeLinecap="round" fill="none" />

      {/* smile — open, cheerful */}
      <path d="M26 36 Q30 40.5 34 36" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* blush — subtle */}
      <ellipse cx="21.5" cy="35" rx="3" ry="1.8" fill="#FFB5A0" opacity="0.35" />
      <ellipse cx="38.5" cy="35" rx="3" ry="1.8" fill="#FFB5A0" opacity="0.35" />
    </svg>
  )
}

export function AvatarUnassigned({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill="#F0F0F0" />
      <circle cx="30" cy="26" r="10" fill="#C8C8C8" />
      <path d="M12 56 Q12 44 30 44 Q48 44 48 56Z" fill="#C8C8C8" />
      <text x="30" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">?</text>
    </svg>
  )
}

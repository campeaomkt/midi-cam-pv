import React from 'react';

interface MidiCamLogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
  activeRec?: boolean;
  interactive?: boolean;
  onKeyClick?: (keyIndex: number) => void;
}

export const MidiCamLogo: React.FC<MidiCamLogoProps> = ({
  size = 48,
  className = '',
  showGlow = false,
  activeRec = true,
  interactive = false,
  onKeyClick,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Optional Ambient Outer Glow */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-[22%] -z-10 blur-xl opacity-60 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(0,242,195,0.45) 0%, rgba(0,242,195,0.05) 70%, transparent 100%)',
            transform: 'scale(1.2)',
          }}
        />
      )}

      <svg
        viewBox="0 0 310 310"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`bgGrad-${size}`} cx="50%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#171922" />
            <stop offset="100%" stopColor="#08080a" />
          </radialGradient>

          <filter id={`cyanGlow-${size}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={`recGlow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id={`lensGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c303e" />
            <stop offset="50%" stopColor="#1a1c25" />
            <stop offset="100%" stopColor="#0e0f14" />
          </linearGradient>

          <clipPath id={`squircleClip-${size}`}>
            <rect x="0" y="0" width="310" height="310" rx="68" ry="68" />
          </clipPath>
        </defs>

        {/* Squircle App Body */}
        <g clipPath={`url(#squircleClip-${size})`}>
          {/* Main Dark Background */}
          <rect width="310" height="310" fill={`url(#bgGrad-${size})`} />
          <rect width="310" height="310" fill="none" stroke="#262835" strokeWidth="2" />

          {/* Cyan Internal Ambient Lighting */}
          <circle cx="155" cy="122" r="85" fill="#00f2c3" opacity="0.09" />

          {/* Camera Lens Unit */}
          <g transform="translate(155, 122)">
            {/* Outer Cyan Neon Ring */}
            <circle
              cx="0"
              cy="0"
              r="62"
              stroke="#00f2c3"
              strokeWidth="7.5"
              fill="none"
              filter={`url(#cyanGlow-${size})`}
            />

            {/* Inner Dark Lens Body */}
            <circle cx="0" cy="0" r="58" fill={`url(#lensGrad-${size})`} />
            <circle cx="0" cy="0" r="53" stroke="#101117" strokeWidth="2.5" fill="none" />

            {/* Center Aperture Glass */}
            <circle cx="0" cy="0" r="23" fill="#08080c" />
            <circle cx="0" cy="0" r="22" stroke="#1f212b" strokeWidth="1.5" fill="none" />

            {/* Optical Glass Reflection */}
            <path
              d="M -30 -35 A 48 48 0 0 1 28 -37"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
              opacity="0.22"
            />

            {/* Red REC Indicator Dot */}
            <g className={activeRec ? 'animate-pulse' : ''}>
              <circle
                cx="50"
                cy="-52"
                r="9.5"
                fill="#ef4444"
                filter={`url(#recGlow-${size})`}
              />
              <circle cx="51" cy="-53" r="3" fill="#ff9999" opacity="0.8" />
            </g>
          </g>

          {/* Piano Keyboard Unit (Official Signature Arrangement) */}
          <g transform="translate(51, 187)">
            {/* Key 1: White */}
            <rect
              x="0"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#f4f4f7"
              className={interactive ? 'cursor-pointer hover:fill-[#e0e0ea] transition-colors' : ''}
              onClick={() => onKeyClick?.(0)}
            />
            {/* Key 2: White */}
            <rect
              x="30"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#f4f4f7"
              className={interactive ? 'cursor-pointer hover:fill-[#e0e0ea] transition-colors' : ''}
              onClick={() => onKeyClick?.(1)}
            />
            {/* Key 3: Active Cyan Neon */}
            <rect
              x="60"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#00f2c3"
              filter={`url(#cyanGlow-${size})`}
              className={interactive ? 'cursor-pointer hover:brightness-125 transition-all' : ''}
              onClick={() => onKeyClick?.(2)}
            />
            {/* Key 4: White */}
            <rect
              x="90"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#f4f4f7"
              className={interactive ? 'cursor-pointer hover:fill-[#e0e0ea] transition-colors' : ''}
              onClick={() => onKeyClick?.(3)}
            />
            {/* Key 5: Active Cyan Neon */}
            <rect
              x="120"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#00f2c3"
              filter={`url(#cyanGlow-${size})`}
              className={interactive ? 'cursor-pointer hover:brightness-125 transition-all' : ''}
              onClick={() => onKeyClick?.(4)}
            />
            {/* Key 6: White */}
            <rect
              x="150"
              y="0"
              width="28.5"
              height="71"
              rx="2.5"
              fill="#f4f4f7"
              className={interactive ? 'cursor-pointer hover:fill-[#e0e0ea] transition-colors' : ''}
              onClick={() => onKeyClick?.(5)}
            />
            {/* Key 7: Active Cyan Neon */}
            <rect
              x="180"
              y="0"
              width="28"
              height="71"
              rx="2.5"
              fill="#00f2c3"
              filter={`url(#cyanGlow-${size})`}
              className={interactive ? 'cursor-pointer hover:brightness-125 transition-all' : ''}
              onClick={() => onKeyClick?.(6)}
            />

            {/* Black Keys */}
            <rect x="21" y="0" width="16.5" height="42" rx="2" fill="#08080c" />
            <rect x="51" y="0" width="16.5" height="42" rx="2" fill="#08080c" />
            <rect x="111" y="0" width="16.5" height="42" rx="2" fill="#08080c" />
            <rect x="141" y="0" width="16.5" height="42" rx="2" fill="#08080c" />
            <rect x="171" y="0" width="16.5" height="42" rx="2" fill="#08080c" />
          </g>

          {/* Border Highlight Stroke */}
          <rect
            x="0"
            y="0"
            width="310"
            height="310"
            rx="68"
            ry="68"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

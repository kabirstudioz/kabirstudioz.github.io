import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

mkdirSync('public/images', { recursive: true })

// Cinematic SVG-based frames: gradients + grain-ish noise via overlays
const frames = [
  {
    file: 'hero-reel.png',
    w: 1920,
    h: 1080,
    svg: `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="30%" cy="60%" r="80%">
          <stop offset="0%" stop-color="#3a2a12"/>
          <stop offset="45%" stop-color="#17130c"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </radialGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0e6b6b"/>
          <stop offset="100%" stop-color="#083a3a"/>
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#glow)"/>
      <rect x="420" y="300" width="620" height="360" rx="8" fill="url(#screen)" opacity="0.65"/>
      <rect x="1100" y="360" width="420" height="250" rx="8" fill="#c98a2e" opacity="0.22"/>
      <rect x="420" y="700" width="1100" height="40" rx="4" fill="#c98a2e" opacity="0.25"/>
      <rect x="420" y="760" width="800" height="24" rx="4" fill="#0e6b6b" opacity="0.35"/>
      <rect x="0" y="0" width="1920" height="90" fill="#000"/>
      <rect x="0" y="990" width="1920" height="90" fill="#000"/>
    </svg>`,
  },
  {
    file: 'kabir-portrait.png',
    w: 1024,
    h: 1280,
    svg: `<svg width="1024" height="1280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rim" cx="70%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#5a3d16"/>
          <stop offset="55%" stop-color="#1c150c"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </radialGradient>
      </defs>
      <rect width="1024" height="1280" fill="url(#rim)"/>
      <ellipse cx="512" cy="560" rx="190" ry="240" fill="#241a10" opacity="0.9"/>
      <ellipse cx="512" cy="1150" rx="360" ry="330" fill="#171310" opacity="0.95"/>
      <ellipse cx="620" cy="500" rx="60" ry="180" fill="#c98a2e" opacity="0.18"/>
    </svg>`,
  },
  {
    file: 'grade-before.png',
    w: 1600,
    h: 900,
    svg: `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9a9a94"/>
          <stop offset="60%" stop-color="#7d7d78"/>
          <stop offset="100%" stop-color="#6b6b66"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#flat)"/>
      <rect x="0" y="620" width="1600" height="280" fill="#5f5f5a"/>
      <rect x="180" y="240" width="220" height="420" fill="#71716b"/>
      <rect x="1180" y="200" width="260" height="460" fill="#75756f"/>
      <ellipse cx="800" cy="560" rx="70" ry="170" fill="#585853"/>
      <circle cx="800" cy="380" r="42" fill="#63635e"/>
    </svg>`,
  },
  {
    file: 'grade-after.png',
    w: 1600,
    h: 900,
    svg: `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="graded" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c9772b"/>
          <stop offset="55%" stop-color="#1d3a3f"/>
          <stop offset="100%" stop-color="#0c1c20"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#graded)"/>
      <rect x="0" y="620" width="1600" height="280" fill="#0a1518"/>
      <rect x="180" y="240" width="220" height="420" fill="#122b30"/>
      <rect x="1180" y="200" width="260" height="460" fill="#143034"/>
      <ellipse cx="800" cy="560" rx="70" ry="170" fill="#06131a"/>
      <circle cx="800" cy="380" r="42" fill="#0a1a20"/>
      <ellipse cx="800" cy="300" rx="500" ry="180" fill="#e89b3c" opacity="0.14"/>
    </svg>`,
  },
  {
    file: 'preview-shortform.png',
    w: 960,
    h: 540,
    svg: `<svg width="960" height="540" xmlns="http://www.w3.org/2000/svg">
      <rect width="960" height="540" fill="#12100c"/>
      <rect x="330" y="40" width="300" height="460" rx="12" fill="#1f1a12"/>
      <rect x="360" y="80" width="240" height="300" rx="6" fill="#c98a2e" opacity="0.3"/>
      <rect x="360" y="410" width="240" height="14" rx="7" fill="#c98a2e" opacity="0.6"/>
      <rect x="360" y="440" width="150" height="14" rx="7" fill="#0e6b6b" opacity="0.6"/>
    </svg>`,
  },
  {
    file: 'preview-longform.png',
    w: 960,
    h: 540,
    svg: `<svg width="960" height="540" xmlns="http://www.w3.org/2000/svg">
      <rect width="960" height="540" fill="#0d1113"/>
      <rect x="60" y="70" width="840" height="330" rx="8" fill="#12333a"/>
      <rect x="60" y="430" width="840" height="30" rx="4" fill="#c98a2e" opacity="0.35"/>
      <rect x="60" y="430" width="320" height="30" rx="4" fill="#c98a2e" opacity="0.8"/>
      <ellipse cx="480" cy="235" rx="380" ry="120" fill="#e89b3c" opacity="0.1"/>
    </svg>`,
  },
  {
    file: 'preview-documentary.png',
    w: 960,
    h: 540,
    svg: `<svg width="960" height="540" xmlns="http://www.w3.org/2000/svg">
      <rect width="960" height="540" fill="#0f0e0b"/>
      <rect x="0" y="0" width="960" height="60" fill="#000"/>
      <rect x="0" y="480" width="960" height="60" fill="#000"/>
      <rect x="0" y="60" width="960" height="420" fill="#1a2420"/>
      <ellipse cx="300" cy="300" rx="140" ry="180" fill="#0e1815"/>
      <ellipse cx="700" cy="220" rx="220" ry="110" fill="#c98a2e" opacity="0.12"/>
      <rect x="60" y="410" width="200" height="16" rx="3" fill="#f5f5f5" opacity="0.5"/>
    </svg>`,
  },
]

for (const frame of frames) {
  const noise = await sharp({
    create: {
      width: frame.w,
      height: frame.h,
      channels: 4,
      noise: { type: 'gaussian', mean: 118, sigma: 14 },
    },
  })
    .png()
    .toBuffer()

  await sharp(Buffer.from(frame.svg))
    .composite([{ input: noise, blend: 'overlay' }])
    .modulate({ saturation: 1.05 })
    .png()
    .toFile(`public/images/${frame.file}`)

  console.log('wrote', frame.file)
}

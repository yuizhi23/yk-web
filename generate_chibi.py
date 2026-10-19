import os

svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 215" width="100%" height="100%">
  <defs>
    <!-- Gradients for clean Y2K streetwear -->
    <linearGradient id="wolfHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141318"/>
      <stop offset="50%" stop-color="#1f1b24"/>
      <stop offset="90%" stop-color="#3d2d26"/>
      <stop offset="100%" stop-color="#4d3930"/>
    </linearGradient>

    <!-- Clean oversized tee: soft washed slate-black / dark navy -->
    <linearGradient id="cleanTeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2c35"/>
      <stop offset="50%" stop-color="#20222a"/>
      <stop offset="100%" stop-color="#171920"/>
    </linearGradient>

    <!-- Clean Y2K Baggy Washed Denim Jeans -->
    <linearGradient id="denimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4b6b94"/>
      <stop offset="30%" stop-color="#5a7ea8"/>
      <stop offset="70%" stop-color="#3b567a"/>
      <stop offset="100%" stop-color="#2d4260"/>
    </linearGradient>

    <!-- Denim wash fade highlight -->
    <linearGradient id="denimWash" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7295bf" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#88aed8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#7295bf" stop-opacity="0.3"/>
    </linearGradient>

    <linearGradient id="irisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#121014"/>
      <stop offset="50%" stop-color="#2c1a14"/>
      <stop offset="90%" stop-color="#6e3c20"/>
      <stop offset="100%" stop-color="#9a562c"/>
    </linearGradient>

    <style>
      .blink-open { animation: yukieBlink 4.2s ease-in-out infinite; transform-origin: 80px 72px; }
      @keyframes yukieBlink {
        0%, 94%, 98%, 100% { transform: scaleY(1); opacity: 1; }
        96% { transform: scaleY(0.06); opacity: 0; }
      }
      .blink-closed { animation: yukieBlinkClosed 4.2s ease-in-out infinite; opacity: 0; }
      @keyframes yukieBlinkClosed {
        0%, 94%, 98%, 100% { opacity: 0; }
        96% { opacity: 1; }
      }
      .sparkle-pop { animation: starFloat 3s ease-in-out infinite alternate; }
      @keyframes starFloat {
        0% { transform: scale(0.9) rotate(-6deg); opacity: 0.6; }
        100% { transform: scale(1.15) rotate(12deg); opacity: 1; }
      }
    </style>
  </defs>

  <!-- 1. SOFT OVAL GROUND SHADOW -->
  <ellipse cx="80" cy="204" rx="46" ry="7.5" fill="rgba(0,0,0,0.2)"/>

  <!-- 2. SHAGGY WOLFCUT: BACK LAYERS -->
  <g id="wolfcut-back">
    <path d="M 36 50 Q 22 84 26 122 Q 32 138 46 142 Q 40 120 44 98 Q 80 102 116 98 Q 120 120 114 142 Q 128 138 134 122 Q 138 84 124 50 Z" fill="url(#wolfHairGrad)"/>

    <!-- Choppy wolfcut mullet layers at shoulders -->
    <polygon points="26,112 18,126 28,124" fill="#2d221e"/>
    <polygon points="24,122 16,138 28,134" fill="#382924"/>
    <polygon points="26,132 20,146 34,142" fill="#48332c"/>
    <polygon points="32,138 30,148 42,144" fill="#382924"/>
    <polygon points="40,142 42,150 50,143" fill="#241e22"/>

    <polygon points="134,112 142,126 132,124" fill="#2d221e"/>
    <polygon points="136,122 144,138 132,134" fill="#382924"/>
    <polygon points="134,132 140,146 126,142" fill="#48332c"/>
    <polygon points="128,138 130,148 118,144" fill="#382924"/>
    <polygon points="120,142 118,150 110,143" fill="#241e22"/>

    <path d="M 44 94 Q 80 98 116 94 Q 120 112 112 128 Q 80 134 48 128 Q 40 112 44 94 Z" fill="#131116"/>
  </g>

  <!-- 3. BAGGY Y2K VINTAGE WASHED SKATER DENIM JEANS (Authentic Y2K, not punk!) -->
  <g id="y2k-baggy-denim">
    <!-- Left Leg (Relaxed wide-leg skater fit) -->
    <path d="M 54 146 L 42 186 L 68 188 L 76 148 Z" fill="url(#denimGrad)"/>
    <!-- Left Leg Thigh Wash Fade -->
    <ellipse cx="54" cy="166" rx="6" ry="12" fill="url(#denimWash)"/>

    <!-- Right Leg (Relaxed wide-leg skater fit) -->
    <path d="M 84 148 L 92 188 L 118 186 L 106 146 Z" fill="url(#denimGrad)"/>
    <!-- Right Leg Thigh Wash Fade -->
    <ellipse cx="106" cy="166" rx="6" ry="12" fill="url(#denimWash)"/>

    <!-- Denim Inseam & Crotch -->
    <path d="M 75 148 L 80 156 L 85 148 Z" fill="#1e2e44"/>

    <!-- Clean Gold/Orange Contrast Stitching (Classic 2000s Denim detail) -->
    <path d="M 46 148 L 54 186" fill="none" stroke="#b4833e" stroke-width="0.9" stroke-dasharray="2,2"/>
    <path d="M 114 148 L 106 186" fill="none" stroke="#b4833e" stroke-width="0.9" stroke-dasharray="2,2"/>

    <!-- Clean Curved Denim Front Pockets -->
    <path d="M 48 147 Q 56 150 62 147" fill="none" stroke="#b4833e" stroke-width="1.2"/>
    <path d="M 112 147 Q 104 150 98 147" fill="none" stroke="#b4833e" stroke-width="1.2"/>

    <!-- Natural Baggy Whisker Folds at knees and ankles -->
    <path d="M 48 168 Q 56 172 64 169" fill="none" stroke="#253750" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 45 178 Q 55 182 66 179" fill="none" stroke="#253750" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 96 169 Q 104 172 112 168" fill="none" stroke="#253750" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 94 179 Q 105 182 115 178" fill="none" stroke="#253750" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Baggy Denim Hem gathered over sneakers -->
    <ellipse cx="55" cy="188" rx="13" ry="3.8" fill="#203046"/>
    <ellipse cx="105" cy="188" rx="13" ry="3.8" fill="#203046"/>
  </g>

  <!-- 4. CLEAN RETRO 2000s SKATER SNEAKERS (Chunky Y2K silhouette, clean white/navy/gum) -->
  <g id="skater-sneakers">
    <!-- Left Sneaker -->
    <path d="M 41 190 Q 55 187 69 190 L 70 199 Q 55 202 40 199 Z" fill="#ffffff" stroke="#1e293b" stroke-width="1.6"/>
    <!-- Chunky Gum / Rubber Sole -->
    <path d="M 39 197 Q 55 200 71 197 L 72 203 Q 55 206 38 203 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
    <path d="M 39 200 Q 55 203 71 200 L 71.5 203 Q 55 206 38.5 203 Z" fill="#ca8a04"/> <!-- Gum sole bottom -->
    <!-- Clean Blue/Navy Curved Side Panel -->
    <path d="M 46 191 Q 54 196 64 192" fill="none" stroke="#2563eb" stroke-width="2.6" stroke-linecap="round"/>
    <!-- White Laces -->
    <line x1="51" y1="189" x2="57" y2="189" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="52" y1="192" x2="58" y2="192" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>

    <!-- Right Sneaker -->
    <path d="M 91 190 Q 105 187 119 190 L 120 199 Q 105 202 90 199 Z" fill="#ffffff" stroke="#1e293b" stroke-width="1.6"/>
    <path d="M 89 197 Q 105 200 121 197 L 122 203 Q 105 206 88 203 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
    <path d="M 89 200 Q 105 203 121 200 L 121.5 203 Q 105 206 88.5 203 Z" fill="#ca8a04"/>
    <path d="M 96 192 Q 106 196 114 191" fill="none" stroke="#2563eb" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="102" y1="189" x2="108" y2="189" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="103" y1="192" x2="109" y2="192" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>
  </g>

  <!-- 5. CLEAN Y2K OVERSIZED STREETWEAR TEE (No punk grunge, clean Y2K cyber star graphic!) -->
  <g id="clean-streetwear-tee">
    <!-- Boxy Oversized Tee Body -->
    <path d="M 44 104 L 116 104 L 120 148 Q 80 152 40 148 Z" fill="url(#cleanTeeGrad)" stroke="#111217" stroke-width="1.8"/>

    <!-- Left Loose Drop-Shoulder Sleeve -->
    <path d="M 44 104 L 28 122 L 40 130 L 48 116 Z" fill="url(#cleanTeeGrad)" stroke="#111217" stroke-width="1.8"/>

    <!-- Right Sleeve (Raised arm pose) -->
    <path d="M 116 104 L 132 101 L 137 116 L 118 118 Z" fill="url(#cleanTeeGrad)" stroke="#111217" stroke-width="1.8"/>

    <!-- Clean Crewneck Ribbed Collar -->
    <path d="M 66 104 Q 80 115 94 104" fill="none" stroke="#3d404e" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 68 104 Q 80 113 92 104" fill="none" stroke="#16171d" stroke-width="1.8" stroke-linecap="round"/>

    <!-- CLEAN Y2K RETRO GRAPHIC (Clean 2000s Cyber Stars & Logo, NO PUNK GRUNGE) -->
    <g id="clean-y2k-graphic">
      <!-- 4-Point Cyber Star in Crisp White & Cyan -->
      <path d="M 80 118 L 82 125 L 89 127 L 82 129 L 80 136 L 78 129 L 71 127 L 78 125 Z" fill="#ffffff"/>
      <circle cx="80" cy="127" r="2.2" fill="#38bdf8"/>

      <!-- Accent Cyber Starlets -->
      <path d="M 91 120 L 92 123 L 95 124 L 92 125 L 91 128 L 90 125 L 87 124 L 90 123 Z" fill="#38bdf8"/>
      <path d="M 69 130 L 70 132 L 72 133 L 70 134 L 69 136 L 68 134 L 66 133 L 68 132 Z" fill="#a78bfa"/>

      <!-- Clean 2000s Streetwear Logo Typography -->
      <text x="80" y="142" font-family="'Courier New', monospace" font-size="4" font-weight="900" text-anchor="middle" fill="#ffffff" letter-spacing="1">YUKIE 2000</text>
    </g>

    <!-- Natural Soft Fabric Folds -->
    <path d="M 40 148 Q 80 152 120 148" fill="none" stroke="#111217" stroke-width="2"/>
    <path d="M 46 141 Q 60 145 74 143" fill="none" stroke="#2a2c36" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M 88 143 Q 102 145 114 141" fill="none" stroke="#2a2c36" stroke-width="1.4" stroke-linecap="round"/>
  </g>

  <!-- 6. NO NECKLACE! (Clean Bare Masculine Neck, Directly as Requested) -->
  <g id="clean-neck">
    <!-- Defined masculine neck -->
    <path d="M 70 88 L 70 105 L 90 105 L 90 88 Z" fill="#ffe5d9"/>
    <!-- Subtle jawline shadow -->
    <polygon points="68,88 92,88 88,96 72,96" fill="#f4c2ae"/>
    <!-- Clean, handsome throat / collarbone definition -->
    <line x1="75" y1="94" x2="73" y2="103" stroke="#e8b19d" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="85" y1="94" x2="87" y2="103" stroke="#e8b19d" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="71" y1="104" x2="76" y2="105" stroke="#e8b19d" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="84" y1="105" x2="89" y2="104" stroke="#e8b19d" stroke-width="1.4" stroke-linecap="round"/>
  </g>

  <!-- 7. ARMS & CONFIDENT LEANING POSE -->
  <g id="arms-pose">
    <!-- LEFT ARM: Hanging down casually, hand in jeans pocket -->
    <path d="M 33 125 L 28 147 L 37 149 L 41 127 Z" fill="#ffe5d9"/>
    <!-- Left Hand Resting naturally in pocket -->
    <circle cx="31" cy="150" r="5.2" fill="#ffe5d9"/>

    <!-- RIGHT ARM: Leaning back behind head (Iconic pose from photo!) -->
    <path d="M 128 111 L 138 78 L 130 74 L 120 106 Z" fill="#ffe5d9"/>
    <circle cx="131" cy="74" r="5.8" fill="#ffe5d9"/>
    <path d="M 127 71 Q 124 65 127 60" fill="none" stroke="#ffe5d9" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M 130 70 Q 128 64 131 59" fill="none" stroke="#ffe5d9" stroke-width="3.2" stroke-linecap="round"/>

    <!-- Clean Simple Wristband / Watch (No punk spikes) -->
    <ellipse cx="133" cy="85" rx="5.2" ry="2.6" fill="none" stroke="#171920" stroke-width="2" transform="rotate(-20 133 85)"/>
  </g>

  <!-- 8. HEAD & MASCULINE / SHARP / HANDSOME YUKIE FACE -->
  <g id="handsome-face">
    <!-- SHARP, DEFINED JAWLINE (Angular, handsome anime contour) -->
    <path d="M 48 54 Q 45 74 52 86 L 70 98 Q 80 102 90 98 L 108 86 Q 115 74 112 54 Z" fill="#ffe5d9" stroke="#e2b4a2" stroke-width="1.2"/>

    <!-- Subtle Cool Cheek Contour -->
    <path d="M 50 82 Q 54 87 62 89" fill="none" stroke="#f0bba7" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M 110 82 Q 106 87 98 89" fill="none" stroke="#f0bba7" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

    <!-- COOL, CONFIDENT LIPS (Straight natural lip line, handsome slight smirk) -->
    <g id="handsome-lips">
      <path d="M 72 88 Q 76 86.8 80 87.5 Q 84 86.8 88 88" fill="none" stroke="#991b1b" stroke-width="2" stroke-linecap="round"/>
      <path d="M 74 88.5 Q 80 91.5 86 88.5" fill="#f87171" opacity="0.65"/>
      <path d="M 77 92.5 Q 80 93.5 83 92.5" fill="none" stroke="#e5a089" stroke-width="1.4" stroke-linecap="round"/>
    </g>

    <!-- SHARP, CLEAN NOSE -->
    <path d="M 79 74 L 80 81 L 82.5 81" fill="none" stroke="#d99984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- SHARP, INTENSE ALMOND EYES (Masculine / Cool anime aesthetic) -->
    <g id="handsome-eyes">
      <g class="blink-open">
        <!-- LEFT EYE -->
        <g id="left-eye">
          <!-- Defined, Straight-Arched Dark Eyebrow -->
          <path d="M 50 60 Q 61 57.5 71 60.5" fill="none" stroke="#181418" stroke-width="3" stroke-linecap="round"/>

          <!-- Sharp Upper Eyelid / Lash Line -->
          <path d="M 52 69 Q 62 65 72 68.5" fill="none" stroke="#100e12" stroke-width="3.2" stroke-linecap="round"/>
          <path d="M 52 69 L 48 67" stroke="#100e12" stroke-width="2.6" stroke-linecap="round"/>

          <!-- Eye White -->
          <path d="M 53 69 Q 62 66 71 68.5 Q 62 74 53 69 Z" fill="#ffffff"/>

          <!-- Focused Iris -->
          <ellipse cx="63" cy="69.5" rx="5" ry="4.5" fill="url(#irisGrad)"/>
          <circle cx="63" cy="69.5" r="2.6" fill="#100e12"/>

          <!-- Crisp Highlights -->
          <circle cx="61.5" cy="68" r="1.8" fill="#ffffff"/>
          <circle cx="65" cy="71" r="0.9" fill="#ffffff"/>

          <!-- Lower Eyelid line -->
          <path d="M 56 73 Q 63 74.5 69 72.5" fill="none" stroke="#2a2228" stroke-width="1.4" stroke-linecap="round"/>
        </g>

        <!-- RIGHT EYE -->
        <g id="right-eye">
          <!-- Straight-Arched Dark Eyebrow -->
          <path d="M 89 60.5 Q 99 57.5 110 60" fill="none" stroke="#181418" stroke-width="3" stroke-linecap="round"/>

          <!-- Sharp Upper Eyelid / Lash Line -->
          <path d="M 88 68.5 Q 98 65 108 69" fill="none" stroke="#100e12" stroke-width="3.2" stroke-linecap="round"/>
          <path d="M 108 69 L 112 67" stroke="#100e12" stroke-width="2.6" stroke-linecap="round"/>

          <!-- Eye White -->
          <path d="M 89 68.5 Q 98 66 107 69 Q 98 74 89 68.5 Z" fill="#ffffff"/>

          <!-- Focused Iris -->
          <ellipse cx="97" cy="69.5" rx="5" ry="4.5" fill="url(#irisGrad)"/>
          <circle cx="97" cy="69.5" r="2.6" fill="#100e12"/>

          <!-- Crisp Highlights -->
          <circle cx="95.5" cy="68" r="1.8" fill="#ffffff"/>
          <circle cx="99" cy="71" r="0.9" fill="#ffffff"/>

          <!-- Lower Eyelid line -->
          <path d="M 91 72.5 Q 97 74.5 104 73" fill="none" stroke="#2a2228" stroke-width="1.4" stroke-linecap="round"/>
        </g>
      </g>

      <!-- CLOSED BLINK STATE -->
      <g class="blink-closed">
        <path d="M 51 69 Q 62 72 72 69" fill="none" stroke="#100e12" stroke-width="3" stroke-linecap="round"/>
        <path d="M 88 69 Q 98 72 109 69" fill="none" stroke="#100e12" stroke-width="3" stroke-linecap="round"/>
      </g>
    </g>
  </g>

  <!-- 9. PRONOUNCED WOLFCUT: FRONT & SIDES (Choppy, layered, shaggy fringe) -->
  <g id="wolfcut-front">
    <!-- Top Crown Volume & Spiky Shag Tufts -->
    <path d="M 36 48 Q 44 26 80 18 Q 116 26 124 48 Q 130 68 122 84 Q 114 64 106 54 Q 80 34 54 54 Q 46 64 38 84 Q 30 68 36 48 Z" fill="url(#wolfHairGrad)"/>

    <!-- Spiky Crown Tufts flicking upwards -->
    <polygon points="56,26 62,14 66,24" fill="#241e22"/>
    <polygon points="74,20 80,10 86,20" fill="#1c1920"/>
    <polygon points="94,24 98,14 104,26" fill="#241e22"/>

    <!-- Sharp Textured Anime Sheen Band across crown -->
    <path d="M 50 38 Q 80 24 110 38" fill="none" stroke="#48332c" stroke-width="3" stroke-linecap="round"/>
    <path d="M 54 40 Q 80 28 106 40" fill="none" stroke="#715247" stroke-width="1.6" stroke-linecap="round"/>

    <!-- Left Shaggy Wolfcut Sideburn & Cheek-Hugging Spikes -->
    <polygon points="38,58 32,74 42,70" fill="url(#wolfHairGrad)"/>
    <polygon points="40,68 34,86 46,80" fill="url(#wolfHairGrad)"/>
    <polygon points="42,80 38,98 50,92" fill="url(#wolfHairGrad)"/>

    <!-- Right Shaggy Wolfcut Sideburn & Cheek-Hugging Spikes -->
    <polygon points="122,58 128,74 118,70" fill="url(#wolfHairGrad)"/>
    <polygon points="120,68 126,86 114,80" fill="url(#wolfHairGrad)"/>
    <polygon points="118,80 122,98 110,92" fill="url(#wolfHairGrad)"/>

    <!-- CHOPPY WISPY CURTAIN BANGS -->
    <polygon points="46,46 58,50 56,66 48,60" fill="url(#wolfHairGrad)"/>
    <polygon points="54,48 64,52 62,70 56,64" fill="url(#wolfHairGrad)"/>
    <polygon points="62,48 70,52 69,67 64,62" fill="url(#wolfHairGrad)"/>
    <polygon points="90,48 98,52 93,67 89,62" fill="url(#wolfHairGrad)"/>
    <polygon points="96,48 106,52 104,70 98,64" fill="url(#wolfHairGrad)"/>
    <polygon points="104,46 114,50 112,66 104,60" fill="url(#wolfHairGrad)"/>

    <path d="M 68 54 L 68 64" stroke="#48332c" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M 92 54 L 92 64" stroke="#48332c" stroke-width="1.4" stroke-linecap="round"/>
  </g>

  <!-- 10. Y2K FLOATING RETRO STARS & ACCENTS -->
  <g id="y2k-floating-accents">
    <g class="sparkle-pop" style="transform-origin: 136px 48px;">
      <path d="M 136 44 L 137.5 47 L 140.5 48 L 137.5 49 L 136 52 L 134.5 49 L 131.5 48 L 134.5 47 Z" fill="#38bdf8"/>
      <circle cx="136" cy="48" r="1.2" fill="#ffffff"/>
    </g>

    <g class="sparkle-pop" style="transform-origin: 22px 76px; animation-delay: 1.2s;">
      <path d="M 22 72 L 23.5 75 L 26.5 76 L 23.5 77 L 22 80 L 20.5 77 L 17.5 76 L 20.5 75 Z" fill="#fde047"/>
      <circle cx="22" cy="76" r="1" fill="#ffffff"/>
    </g>
  </g>
</svg>"""

with open("assets/chibi_yukie.svg", "w") as f:
    f.write(svg)

print("Generated Clean Y2K Streetwear Chibi (No Punk, No Necklace)! Size:", len(svg))

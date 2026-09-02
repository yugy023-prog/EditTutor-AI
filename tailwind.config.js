/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // EditTutor Design System — named by function, not decoration
        // Reference Gray: color-grading monitors use neutral mid-gray, not black,
        // because true black biases color perception.
        'ref-gray':    '#242424',
        'panel-slate': '#2E2E2E',
        'grade-teal':  '#3FA9A0',
        'hi-amber':    '#E8863B',
        'wf-white':    '#EDEAE3',
        'sig-red':     '#E5484D',
        // Tonal variants
        'teal-dim':    '#2D7A73',
        'teal-bright': '#5BBDB5',
        'amber-dim':   '#B86B2B',
        'amber-bright':'#F0A060',
        'panel-light': '#383838',
        'panel-dark':  '#1E1E1E',
        'border-sub':  '#3A3A3A',
        'border-main': '#444444',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'waveform': 'waveformPulse 3s ease-in-out infinite',
        'fade-up':  'fadeUp 0.5s ease-out forwards',
        'shimmer':  'shimmer 2s linear infinite',
      },
      keyframes: {
        waveformPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'grid-subtle': 'linear-gradient(rgba(63,169,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(63,169,160,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-subtle': '40px 40px',
      }
    },
  },
  plugins: [],
}

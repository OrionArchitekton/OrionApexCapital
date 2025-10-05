import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0E2433',
          copper: '#9B4D42',
          blue: '#1C49FF',
          gold: '#E6C54A'
        },
        surface: {
          0: '#0B1B28',
          1: '#102233',
          2: '#182B3D'
        },
        text: {
          primary: '#EAEFF5',
          muted: '#A7B3C0',
          onCopper: '#0E2433'
        }
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(230,197,74,0.2), 0 10px 30px -10px rgba(0,0,0,0.5)'
      },
      fontFamily: {
        display: ['"Cinzel", ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;

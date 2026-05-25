/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#080b0f',
        panel: '#10161d',
        line: '#26313b',
        mist: '#b9c3cf',
        signal: '#7dd3fc',
        copper: '#d8a35d',
        greenline: '#86efac'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.24)'
      }
    }
  },
  plugins: []
};

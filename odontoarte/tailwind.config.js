/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Paleta Odontoarte — nunca hardcoded no componente
      colors: {
        rosa: '#E8437A',
        azul: '#2B6CB0',
        'fundo-alt': '#FDF6F9',
        'fundo-escuro': '#0F1923',
        texto: '#1A1A2E',
        'texto-sec': '#6B7280',
        acento: '#FFE4EF',
        whatsapp: '#25D366',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      // Sombras coloridas — sem sombra genérica
      boxShadow: {
        rosa: '0 20px 60px rgba(232, 67, 122, 0.15)',
        'rosa-hover': '0 24px 64px rgba(232, 67, 122, 0.28)',
        'rosa-card': '0 8px 32px rgba(232, 67, 122, 0.12)',
        azul: '0 20px 60px rgba(43, 108, 176, 0.15)',
        soft: '0 4px 24px rgba(26, 26, 46, 0.08)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      l: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      gridTemplateColumns: {
        'code-copy-grid': '1fr auto',
      },
      colors: {
        'dark-purple': 'var(--dark-purple)',
        'light-purple': 'var(--light-purple)',
        'very-light-purple': 'var(--very-light-purple)',
        'dark-blue': 'var(--dark-blue)'
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

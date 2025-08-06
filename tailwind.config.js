/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['0.875rem', '1.25rem'],  // 14px
        base: ['1rem', '1.5rem'],     // 16px
        md: ['1.125rem', '1.75rem'],  // 18px
        lg: ['1.25rem', '1.75rem'],   // 20px
        xl: ['1.5rem', '2rem'],       // 24px
        '2xl': ['2rem', '2.5rem'],    // 32px
        '3xl': ['2.5rem', '2.75rem'], // 40px
        '4xl': ['3rem', '3.25rem'],   // 48px
        '5xl': ['4rem', '1'],         // 64px
      },
    },
  },
  plugins: [],
};

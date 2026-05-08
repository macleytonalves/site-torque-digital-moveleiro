/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        torque: {
          navy: '#071B33',
          navy2: '#0B2747',
          blue: '#0F3A63',
          orange: '#FF6A00',
          orange2: '#FF8A1E',
          cream: '#F5F0E8',
          light: '#E8F0F7',
          slate: '#AAB6C5',
          darkGray: '#2C3E50',
          dark: '#030B14'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 80px rgba(255, 106, 0, 0.18)',
        card: '0 24px 80px rgba(0, 0, 0, 0.35)',
        phone: '0 40px 120px rgba(0, 0, 0, 0.55), 0 0 60px rgba(255, 106, 0, 0.14)'
      },
      backgroundImage: {
        radialTorque: 'radial-gradient(circle at top right, rgba(255,106,0,0.22), transparent 32%), radial-gradient(circle at 20% 10%, rgba(15,58,99,0.9), transparent 38%)'
      }
    }
  },
  plugins: []
}

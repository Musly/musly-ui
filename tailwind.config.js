/* eslint-disable global-require */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx}',
    './src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        navigation: '0 3px 20px rgba(26, 54, 93, 0.4)',
        header: '0 2px 15px rgba(26, 54, 93, 0.1)',
        vheader: 'inset 0px -4px 10px rgba(26, 54, 93, 0.08)',
        'primary-md': '0 3px 8px rgba(49, 130, 206, 0.45)',
        'primary-lg': '0 2px 5px rgba(49, 130, 206, 0.45), 0 4px 11px rgba(49, 130, 206, 0.45)',
        'secondary-md': '0 3px 8px rgba(255, 193, 54, 0.45)',
        'secondary-lg': '0 2px 5px rgba(255, 193, 54, 0.45), 0 4px 11px rgba(255, 193, 54, 0.45)',
        tsearch: '0 1px 6px rgba(49, 130, 206, 0.25)',
        sm: '0 1px 2px 0 rgba(26, 54, 93, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(26, 54, 93, 0.1), 0 1px 2px 0 rgba(26, 54, 93, 0.06)',
        md: '0 4px 6px rgba(26, 54, 93, 0.1), 0 2px 4px rgba(26, 54, 93, 0.06)',
        lg: '0 10px 15px rgba(26, 54, 93, 0.1), 0 4px 6px rgba(26, 54, 93, 0.05)',
        xl: '0 20px 25px rgba(26, 54, 93, 0.1), 0 10px 10px rgba(26, 54, 93, 0.04)',
        '2xl': '0 25px 50px rgba(26, 54, 93, 0.25)',
        inner: 'inset 0 2px 4px rgba(26, 54, 93, 0.075)',
      },
      transitionTimingFunction: {
        sharp: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        gray: {
          25: '#FAFBFC',
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        blue: {
          50: '#EBF8FF',
          100: '#CEEDFF',
          200: '#90CDF4',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#3182CE',
          600: '#2A69AC',
          700: '#1E4E8C',
          800: '#153E75',
          900: '#1A365D',
        },
        yellow: {
          50: '#FFFFF0',
          100: '#FEFCBF',
          200: '#FAF089',
          300: '#F6E05E',
          400: '#ECC94B',
          500: '#FFC136',
          600: '#B7791F',
          700: '#975A16',
          800: '#744210',
          900: '#5F370E',
        },
      },
      spacing: {
        4.5: '1.1428rem',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover', 'focus', 'focus-within'],
      display: ['hover', 'focus', 'group-hover'],
      backgroundColor: ['odd', 'even'],
      zIndex: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};

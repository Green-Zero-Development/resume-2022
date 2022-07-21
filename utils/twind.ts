import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup, tw } from "twind";
import { css } from 'twind/css';
export * from "twind";
export const config: Configuration = {
  theme: {
    extend: {
      fontFamily: {
        'ibm-serif': '"IBM Plex Serif"',
      },
      screens: {
        'xs': {'min': '416px'},
        'sm': '576px',
        'md': {'min': '768px'},
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1440px',
        '3xl': '1441px',
        '4xl': '2000px'
      },
      colors: {
        transparent: 'transparent',
        'coolgray': "#f8f8f8",
        'coolblack': '#222222',
        black: '#000000',
        white: '#fff',
        blue: '#00f',
        red: '#ff5733',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      maxWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '12xl': '120rem',
        full: '100%',
      },
      fontSize: {
        '0': '0px',
        '3xs': '.5rem',
        '2xs': '.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '4.5rem',
      },
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('colors.gray.300', 'currentColor'),
      }),
    },
  },
  preflight: {
    a: {
      color: '#00f',
      textDecoration: 'none'
    },
    mobileMenuIcon: {
      backgroundColor: '#ffffff'
    },
    '@font-face': [
      {
        fontFamily: 'IBM Plex Serif',
        fontWeight: '500',
        src: 'url(/fonts/ibm-plex-serif-v15-latin/ibm-plex-serif-v15-latin-regular.woff2) format("woff2")',
      },
      {
        fontFamily: 'IBM Plex Serif',
        fontWeight: '100',
        src: 'url(/fonts/ibm-plex-serif-v15-latin/ibm-plex-serif-v15-latin-100.woff2) format("woff2")',
      },
      {
        fontFamily: 'IBM Plex Serif',
        fontWeight: '700',
        src: 'url(/fonts/ibm-plex-serif-v15-latin/ibm-plex-serif-v15-latin-700.woff2) format("woff2")',
      },
    ],
  },
  darkMode: "class",
  mode: "silent",
};



if (IS_BROWSER) setup(config);
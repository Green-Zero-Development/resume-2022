import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  theme: {
    extend: {
      fontFamily: {
        'ibm-serif': '"IBM Plex Serif"',
      },
      screens: {
        xs: '416px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1441px',
        '4xl': '2000px'
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
        '2xs': '10px',
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: ['1.125rem', '1.75rem'],
          xl: ['1.25rem', '1.75rem'],
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '6rem'
      },
    },
  },
  preflight: {
    '@font-face': {
      fontFamily: 'IBM Plex Serif',
      fontWeight: '700',
      src: 'url(/fonts/ibm-plex-serif-v15-latin/ibm-plex-serif-v15-latin-700.woff2) format("woff2")',
    },
  },
  darkMode: "class",
  mode: "silent",
};

if (IS_BROWSER) setup(config);
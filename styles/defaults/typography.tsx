import { createGlobalStyle } from 'styled-components'

import { font } from '../variables/fonts'
import { color } from '../variables/colors'
import { breakpoint } from '../variables/breakpoints'

export const FONTFACE_CIRCULAR = `
  @font-face {
    font-family: 'Maison-Neue';
    src: url('/font/maison-neue/maisonneue-book.eot') format('embedded-opentype'),
         url('/font/maison-neue/maisonneue-book.svg') format('svg'),
         url('/font/maison-neue/maisonneue-book.woff') format('woff');
         url('/font/maison-neue/maisonneue-book.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Maison-Neue-Light';
    src: url('/font/maison-neue/maisonneue-light.eot') format('embedded-opentype'),
         url('/font/maison-neue/maisonneue-light.svg') format('svg'),
         url('/font/maison-neue/maisonneue-light.woff') format('woff');
         url('/font/maison-neue/maisonneue-light.woff2') format('woff2');
  }
  `

export default createGlobalStyle`
  body,
  html {
    font-family: ${font.primary};
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;

    &.locked {
      overflow: hidden;
      height: 100%;
      position: relative;
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  span,
  strong {
    color: ${color.text};
    margin: 0;
  }

  h1 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 30px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 40px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 48px;
    }
  }

  h2 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 30px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 35px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 40px;
    }
  }

  h3 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 25px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 30px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 35px;
    }
  }

  h4 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 25px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 30px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 35px;
    }
  }

  h5 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 25px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 30px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 35px;
    }
  }

  h6 {
    color: ${color.primary};
    font-family: ${font.secondary};
    font-size: 19px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 22px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 25px;
    }
  }

  p {
    font-family: ${font.primary};
    font-size: 16px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 18px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 20px;
    }
  }

  input {
    font-family: ${font.primary};
    font-size: 16px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 18px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 20px;
    }
  }

  textarea {
    font-family: ${font.primary};
    font-size: 14px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 16px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  blockquote {
    margin: 0;
    font-family: ${font.primary};
    font-size: 20px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 24px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 28px;
    }
  }

  cite {
    font-family: ${font.primary};
    font-size: 12px;

    @media (min-width: ${breakpoint.tablet}) {
      font-size: 14px;
    }

    @media (min-width: ${breakpoint.desktop}) {
      font-size: 16px;
    }
  }
`

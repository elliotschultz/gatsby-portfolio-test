import { injectGlobal, css } from 'styled-components'

// Fonts
export const primaryFontFamily = 'Tenor Sans'
export const secondaryFontFamily = 'Droid Serif'

// TODO: include font files through webpack
injectGlobal`
  @font-face {

  }
`

export const primaryTypeRegular = css`
  font-family: ${primaryFontFamily}, sans-serif;
  font-style: normal;
  font-weight: 400;
`

// Colours
export const primaryColour = 'lightgrey'
export const secondaryColour = '#1e35a9'
export const highlightColour = 'black'

export const easing = {
  InSine: `cubic-bezier(0.47, 0, 0.745, 0.715)`,
  OutSine: `cubic-bezier(0.39, 0.575, 0.565, 1)`,
  InOutSine: `cubic-bezier(0.445, 0.05, 0.55, 0.95)`,
  InQuad: `cubic-bezier(0.55, 0.085, 0.68, 0.53)`,
  OutQuad: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  InOutQuad: `cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
  InCubic: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  OutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  InOutCubic: `cubic-bezier(0.645, 0.045, 0.355, 1)`,
  InQuart: `cubic-bezier(0.895, 0.03, 0.685, 0.22)`,
  InOutQuart: `cubic-bezier(0.77, 0, 0.175, 1)`,
  InQuint: `cubic-bezier(0.755, 0.05, 0.855, 0.06)`,
  OutQuint: `cubic-bezier(0.23, 1, 0.32, 1)`,
  InOutQuint: `cubic-bezier(0.86, 0, 0.07, 1)`,
  InExpo: `cubic-bezier(0.95, 0.05, 0.795, 0.035)`,
  OutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
  InOutExpo: `cubic-bezier(1, 0, 0, 1)`,
  InCirc: `cubic-bezier(0.6, 0.04, 0.98, 0.335)`,
  OutCirc: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
  InOutCirc: `cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
  InBack: `cubic-bezier(0.6, -0.28, 0.735, 0.045)`,
  OutBack: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
  InOutBack: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
}

export const antialias = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  font-smoothing: antialiased;
`

// Breakpoint defs
export const smMinRaw = 420;
export const mdMinRaw = 768;
export const lgMinRaw = 1200;
export const xlMinRaw = 2200;

export const smMin = '420px';
export const mdMin = '768px';
export const lgMin = '1200px';
export const xlMin = '1600px';

export const xsMax = smMinRaw - 1 + 'px';
export const smMax = mdMinRaw - 1 + 'px';
export const mdMax = lgMinRaw - 1 + 'px';
export const lgMax = xlMinRaw - 1 + 'px';


export const placeholder = (styles) => css`
  &::-webkit-input-placeholder {
    ${styles}
  }
  &:-moz-placeholder {
    ${styles}
  }
  &::-moz-placeholder {
    ${styles}
  }
  &:-ms-input-placeholder {
    ${styles}
  }
`

// Text Styles
export const title = css`
  ${primaryTypeRegular}
  margin: 0;
  font-size: 3.2rem;
  line-height: 1.1;
`

export const subtitle = css`
  ${primaryTypeRegular}
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
  transition: opacity 200ms ease-in-out;

  @media screen and (min-width: ${mdMin}){
    display: inline-block;
  }
`

export const defaultCopy = css`
  ${primaryTypeRegular}
  font-size: 1.6rem;
  line-height: 1.5;
`

export const prominentCopy = css`
  ${primaryTypeRegular}
  font-size: 2rem;
  line-height: 1.5;
`

export const navLink = css`
  ${primaryTypeRegular}
  font-size: 1.6rem;
  line-height: 1.7;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: ${lgMin}){
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }

  &.active {
    ${primaryTypeRegular}
  }
`

export const linkBehaviour = css`
  &:hover {
    color: ${secondaryColour};
    transition: color 200ms ease-out;
    cursor: pointer;
  }
`

export const markdownContent = css`
  & p {
    ${defaultCopy}

    & + p {
      padding-top: 2rem;
    }
  }

  & blockquote {
    margin: 0;

    & p {
      ${prominentCopy}
      padding-top: 0rem;
      margin-bottom: 2rem;
    }
  }

  & h2 {
    ${subtitle}
    padding-top: 4rem;
    margin-bottom: 1rem;

    & + h3 {
      padding-top: 0;
    }
  }

  & a.gatsby-resp-image-link {
    display: inline-block;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }

  & > p > a {
    border-bottom: 1px dotted;
    border-color: inherit;
    margin-bottom: -4px;
    transition: opacity 250ms cubic-bezier(0,.16,.37,1);

    &:hover, &:focus {
      opacity: 0.6;
      border-bottom: 1px solid;
    }
  }

  & > ol,
  & > ul {
    ${defaultCopy}
  }
`

// Zooper Grid config
export const breakpoints = {
  xs: {
    at: 0,
    fluid: true,
    gutter: 3,
    padding: 8,
    width: 100
  },
  sm: {
    at: smMinRaw,
    fluid: true,
    gutter: 3,
    padding: 8,
    width: 100
  },
  md: {
    at: mdMinRaw,
    fluid: true,
    gutter: 1.5,
    padding: 10,
    width: 100
  },
  lg: {
    at: lgMinRaw,
    fluid: true,
    gutter: 1.5,
    padding: 10,
    width: 100
  },
  xl: {
    at: xlMinRaw,
    fluid: true,
    gutter: 1.5,
    padding: 20,
    width: 100
  }
}

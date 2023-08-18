import { createGlobalStyle } from 'styled-components'
import tokens from '@/styles/tokens'
import { fontDMSans } from '@/styles/fonts'

const GlobalStyle = createGlobalStyle`
  ${fontDMSans}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    background: ${tokens.colorNeutralWhite};
  }

  html,
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem ${tokens.fontFamilyBase}, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  
    &::-ms-expand {
      display: none;
    }
  }

  main {
    padding: 14rem ${tokens.spacing5xl} 0;
    
    @media screen and (max-width: ${tokens.breakpointXxl}) {
      padding: 10rem ${tokens.spacing2xl} 0;
    }

    @media screen and (max-width: ${tokens.breakpointLg}) {
      padding: ${tokens.spacing4xl} ${tokens.spacing2xl} 0;
    }
  }
`

export default GlobalStyle

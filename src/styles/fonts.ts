import { css } from 'styled-components'

const fontCircularPath = './public/fonts/DM_Sans/'

export const fontDMSans = css`
  @font-face {
    font-family: 'DMSans';
    font-weight: 400;
    font-display: swap;
    src: url('${fontCircularPath}DMSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'DMSans';
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    src: url('${fontCircularPath}DMSans-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'DMSans';
    font-weight: bold 700;
    font-display: swap;
    src: url('${fontCircularPath}DMSans-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'DMSans';
    font-weight: bold 700;
    font-style: italic;
    font-display: swap;
    src: url('${fontCircularPath}DMSans-BoldItalic.ttf') format('truetype');
  }
`

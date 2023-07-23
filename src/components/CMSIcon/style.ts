import styled from 'styled-components'

export const Wrapper = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => (props.$width ? props.$width + 'px' : '100%')};
  height: ${(props) => (props.$height ? props.$height + 'px' : '100%')};

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

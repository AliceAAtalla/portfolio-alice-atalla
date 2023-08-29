import tokens from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${tokens.spacing2xl};
`

export const WrapperImage = styled.div`
  padding: 0 ${tokens.spacing2xl};
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  text-align: justify;
  font-size: ${tokens.fontSizeXs};
  font-weight: ${tokens.fontNormal};
  color: ${tokens.colorNeutralLight};
  padding: ${tokens.spacingLg} 0;
`

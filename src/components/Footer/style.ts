import tokens from '@/styles/tokens'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${tokens.spacingLg} 0;
`

export const Text = styled.span`
  display: flex;
  font-size: ${tokens.fontSizeMd};
  font-weight: ${tokens.fontNormal};
  color: ${tokens.colorNeutralLight};
`

export const Icon = styled.div`
  padding: 0 ${tokens.spacing2xs};
`

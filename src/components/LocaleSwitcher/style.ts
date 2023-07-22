import styled from 'styled-components'
import tokens from '@/styles/tokens'

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  min-width: ${tokens.spacing6xl};
  font-size: ${tokens.fontSizeMd};
  color: ${tokens.colorNeutralDark};
  font-weight: ${tokens.fontNormal};
  border-radius: ${tokens.roundedSm};
  padding: ${tokens.spacing2xs} ${tokens.spacingXs};
  border: ${tokens.borderSm} solid ${tokens.colorPrimary50};

  @media screen and (max-width: ${tokens.breakpointLg}) {
    padding: ${tokens.spacing2xs};
    min-width: ${tokens.spacing3xl};
    font-size: ${tokens.fontSizeXs};
  }

  .control-select {
    display: flex;
  }

  .placeholder-select {
    text-transform: uppercase;
    padding-right: ${tokens.spacing2xs};
  }

  .menu-select {
    right: 0;
    position: absolute;
    text-transform: uppercase;
    padding: ${tokens.spacing2xs};
    min-width: ${tokens.spacing6xl};
    margin-top: ${tokens.spacing2xs};
    border-radius: ${tokens.roundedSm};
    background-color: ${tokens.colorPrimary50};

    @media screen and (max-width: ${tokens.breakpointLg}) {
      min-width: ${tokens.spacing3xl};
    }
  }
`

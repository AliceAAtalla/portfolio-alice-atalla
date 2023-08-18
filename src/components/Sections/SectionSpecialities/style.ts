import tokens from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;

  @media screen and (max-width: ${tokens.breakpointLg}) {
    display: flex;
  }

  @media screen and (max-width: ${tokens.breakpointXl}) {
    display: flex;
  }
`

export const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: ${tokens.spacing2xl} 0;

  @media screen and (max-width: ${tokens.breakpointLg}) {
    display: flex;
  }

  @media screen and (max-width: ${tokens.breakpointXl}) {
    display: flex;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${tokens.spacingMd};
  margin-bottom: ${tokens.spacingSm};

  width: 416px;
  height: 280px;

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
`

export const WrapperImage = styled.div`
  padding: ${tokens.spacingMd} 0;
`

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: ${tokens.spacing2xs};
`

export const Title = styled.h4`
  font-size: ${tokens.fontSizeMd};
  font-weight: ${tokens.fontBold};
`

export const Description = styled.p`
  text-align: center;
  font-weight: ${tokens.fontNormal};
  font-size: ${tokens.fontSizeXs};
  color: ${tokens.colorNeutralLight};
  padding-top: ${tokens.spacing2xs};
`

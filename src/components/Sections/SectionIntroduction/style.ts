import tokens from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${tokens.breakpointLg}) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: ${tokens.breakpointXl}) {
    width: -webkit-fill-available;
  }
`

export const Description = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  @media screen and (max-width: ${tokens.breakpointLg}) {
    align-items: center;
  }
`

export const WrapperImage = styled.div`
  padding: ${tokens.spacingMd} 0;
`

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;

  a {
    width: auto;
    height: auto;
    margin-right: ${tokens.spacingLg};
  }

  @media screen and (max-width: ${tokens.breakpointXl}) {
    width: auto;
    flex-wrap: wrap;
    justify-content: center;

    a {
      margin-right: ${tokens.spacingXs};
    }
  }

  @media screen and (max-width: ${tokens.breakpointXs}) {
    a {
      margin-bottom: ${tokens.spacingSm};
    }
  }
`

export const H1 = styled.h1`
  font-size: ${tokens.fontSizeXlg};
  font-weight: ${tokens.fontBold};
  color: ${tokens.colorNeutralMid};

  @media screen and (max-width: ${tokens.breakpointXl}) {
    font-size: ${tokens.fontSizeXl};
  }
`

export const H2 = styled.h2`
  font-size: ${tokens.fontSizeXl};

  @media screen and (max-width: ${tokens.breakpointXl}) {
    font-size: ${tokens.fontSizeLg};
  }
`

export const Bold = styled.span`
  color: ${tokens.colorPrimary90};
`

export const Content = styled.div`
  padding: ${tokens.spacingLg} ${tokens.spacing8xl} ${tokens.spacingLg} 0;
  font-weight: ${tokens.fontNormal};
  font-size: ${tokens.fontSizeXs};
  color: ${tokens.colorNeutralLight};

  @media screen and (max-width: ${tokens.breakpointLg}) {
    padding: ${tokens.spacingLg} 0;
  }
`

export const ContainerTechnologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: ${tokens.spacing4xl};
  width: 80%;

  @media screen and (max-width: ${tokens.breakpointSm}) {
    flex-wrap: wrap;
    padding-top: ${tokens.spacingXl};

    div {
      margin: ${tokens.spacing2xs};
    }
  }
`

export const TextTechnologies = styled.p`
  font-size: ${tokens.fontSizeSm};
  color: ${tokens.colorNeutralDark};
  padding-right: ${tokens.spacing2xs};
  border-right: ${tokens.spacing3xs} solid ${tokens.colorNeutralLight};
`

import tokens from '@/styles/tokens'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${tokens.colorNeutralWhite};
  padding: ${tokens.spacingSm} ${tokens.spacingXl};

  @media screen and (max-width: ${tokens.breakpointLg}) {
    padding: ${tokens.spacingSm} ${tokens.spacingMd};
  }

  @media screen and (max-width: ${tokens.breakpointSm}) {
    padding: ${tokens.spacingSm};
  }
`

export const Overlay = styled.div`
  top: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: ${tokens.opacityXl};
  background-color: ${tokens.colorNeutralMid};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`

export const WrapperIconXmark = styled.div`
  align-self: end;
  padding: 0 ${tokens.spacingLg} ${tokens.spacingLg};
`

export const WrapperIconBars = styled.div`
  cursor: pointer;
  min-width: ${tokens.spacing6xl};

  @media screen and (max-width: ${tokens.breakpointLg}) {
    min-width: ${tokens.spacing3xl};
  }

  @media screen and (max-width: ${tokens.breakpointSm}) {
    margin-left: ${tokens.spacingSm};
    min-width: ${tokens.spacingLg};
  }
`

export const Nav = styled.nav<{ $isOpenDrawer: boolean }>`
  display: flex;
  align-items: center;
  z-index: 8;

  @media screen and (max-width: ${tokens.breakpointLg}) {
    display: ${(props) => (props.$isOpenDrawer ? 'flex' : 'none')};
    top: 0;
    left: 0;
    z-index: 9;
    width: 70%;
    height: 100vh;
    background: white;
    position: absolute;
    align-items: center;
    flex-direction: column;
    padding: ${tokens.spacingLg} 0;
    background-color: ${tokens.colorNeutralWhite};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    & a {
      width: 100%;
      text-align: center;
    }
  }
`

export const Text = styled.h3`
  font-size: ${tokens.fontSizeMd};
  font-weight: ${tokens.fontNormal};
  color: ${tokens.colorNeutralDark};

  &:hover {
    color: ${tokens.colorPrimary80};
  }

  @media screen and (min-width: ${tokens.breakpointLg}) {
    padding-right: ${tokens.spacingMd};
  }

  @media screen and (max-width: ${tokens.breakpointLg}) {
    padding: ${tokens.spacingSm};
  }
`

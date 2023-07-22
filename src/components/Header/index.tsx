'use client'

import Link from 'next/link'
import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

import LocaleSwitcher from '../LocaleSwitcher'

import * as Styled from './style'
import tokens from '@/styles/tokens'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { NavbarInfo } from '@/types/page-info'
import { CMSIcon } from '../CMSIcon'

type HeaderProps = {
  data: NavbarInfo
  locale: string
}

const Header = ({ data, locale }: HeaderProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const { logoMobile, logoDesktop, options } = data || {}
  const mobileMedia = `only screen and (max-width: ${tokens.breakpointLg})`
  const isMediumDevice = useMediaQuery(mobileMedia)

  return (
    <Styled.Header>
      {isMediumDevice && (
        <>
          <Styled.WrapperIconBars onClick={() => setIsOpenDrawer(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Styled.WrapperIconBars>
          {isOpenDrawer && (
            <Styled.Overlay onClick={() => setIsOpenDrawer(false)} />
          )}
        </>
      )}
      <Link href={'/'} passHref>
        <CMSIcon icon={isMediumDevice ? logoMobile : logoDesktop} />
      </Link>
      <Styled.Wrapper>
        <Styled.Nav $isOpenDrawer={isOpenDrawer}>
          {isMediumDevice && (
            <Styled.WrapperIconXmark onClick={() => setIsOpenDrawer(false)}>
              <FontAwesomeIcon size="xl" icon={faXmarkCircle} />
            </Styled.WrapperIconXmark>
          )}
          {options &&
            Object.keys(options).map((key) => (
              <Link key={key} href={`/${locale}${options[key].url}`} passHref>
                <Styled.Text>{options[key].name}</Styled.Text>
              </Link>
            ))}
        </Styled.Nav>
        <LocaleSwitcher locale={locale} />
      </Styled.Wrapper>
    </Styled.Header>
  )
}

export default Header

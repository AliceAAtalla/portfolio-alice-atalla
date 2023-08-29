'use client'

import * as Styled from './style'

import { faCopyright, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainPageInfo } from '@/types/page-info'

type FooterProp = {
  mainPageContent: MainPageInfo
}

const Footer = ({ mainPageContent }: FooterProp) => {
  const { location } = mainPageContent || {}

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <Styled.Footer>
      <Styled.Text>
        <Styled.Icon>
          <FontAwesomeIcon icon={faLocationDot} size="xs" />
        </Styled.Icon>
        {location}
      </Styled.Text>

      <Styled.Text>
        <Styled.Icon>
          <FontAwesomeIcon icon={faCopyright} size="xs" />
        </Styled.Icon>
        {currentYear} Todos os direitos reservados</Styled.Text>
    </Styled.Footer>
  )
}

export default Footer

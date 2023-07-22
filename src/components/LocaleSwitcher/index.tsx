'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ReactDropdown, { Option } from 'react-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './style'

type LocaleSwitcherProps = {
  locale: string
}

const LocaleSwitcher = ({ locale }: LocaleSwitcherProps) => {
  const [selectLanguage, setSelectLanguage] = useState(locale)
  const languages = ['en', 'pt']
  const router = useRouter()

  const handlerSelectLanguage = (option: Option) => {
    setSelectLanguage(option.value)
    router.push(`/${option.value}`)
  }
  return (
    <>
      <Styled.Wrapper>
        <ReactDropdown
          value={selectLanguage}
          placeholder={selectLanguage}
          menuClassName="menu-select"
          controlClassName="control-select"
          placeholderClassName="placeholder-select"
          arrowOpen={<FontAwesomeIcon icon={faAngleUp} />}
          arrowClosed={<FontAwesomeIcon icon={faAngleDown} />}
          onChange={(option) => handlerSelectLanguage(option)}
          options={languages.filter((lng) => lng !== selectLanguage)}
        />
      </Styled.Wrapper>
    </>
  )
}
export default LocaleSwitcher

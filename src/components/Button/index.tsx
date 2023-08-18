import { ReactNode } from 'react'
import * as Styled from './style'

type ButtonProp = {
  text: ''
  kind: 'primary' | ''
  handleClickButton: () => void
  children: ReactNode
}

const Button = ({ kind, text, handleClickButton, children }: ButtonProp) => {
  return (
    <Styled.Button onClick={handleClickButton}>
      <Styled.Text $hasIcon={!!children} $kind={kind}>
        {text}
      </Styled.Text>
      {children}
    </Styled.Button>
  )
}

export default Button

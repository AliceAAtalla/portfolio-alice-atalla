import * as Styled from './style'

const Button = ({ kind, text, handleClickButton, children }) => {
  return (
    <Styled.Button onClick={handleClickButton}>
      <Styled.Text kind={kind} hasIcon={!!children}>
        {text}
      </Styled.Text>
      {children}
    </Styled.Button>
  )
}

export default Button

import * as Styled from './style'

type TitleProp = {
  children: string
}

const Title = ({ children }: TitleProp) => {
  return <Styled.Text>{children}</Styled.Text>
}

export default Title

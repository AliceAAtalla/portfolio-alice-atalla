import * as Styled from './style'

type CMSIconProp = {
  icon: string
  width?: string
  height?: string
}

export const CMSIcon = ({ icon, width, height }: CMSIconProp) => {
  return (
    <Styled.Wrapper
      $width={width}
      $height={height}
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}

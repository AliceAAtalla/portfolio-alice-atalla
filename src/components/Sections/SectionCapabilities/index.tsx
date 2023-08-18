'use client'

import * as Styled from './style'
import Title from '@/components/Title'
import { MainPageInfo } from '@/types/page-info'
import { CMSIcon } from '@/components/CMSIcon'

type SectionCapabilitiesProp = {
  mainPageContent: MainPageInfo
}

const SectionCapabilities = ({ mainPageContent }: SectionCapabilitiesProp) => {
  const { capabilities, capabilitiesTitle } = mainPageContent

  return (
    <Styled.Wrapper>
      <Title>{capabilitiesTitle}</Title>
      <Styled.WrapperCard>
        {capabilities.map(({ title, description, image }) => (
          <Styled.Card key={title}>
            <CMSIcon icon={image} width={'150'} height={'150'} />
            <Styled.WrapperText>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.WrapperText>
          </Styled.Card>
        ))}
      </Styled.WrapperCard>
    </Styled.Wrapper>
  )
}

export default SectionCapabilities

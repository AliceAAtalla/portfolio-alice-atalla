'use client'

import * as Styled from './style'
import Title from '@/components/Title'
import { MainPageInfo } from '@/types/page-info'
import { CMSIcon } from '@/components/CMSIcon'

// import useMediaQuery from '@/utils/useMediaQuery'

type SectionSpecialitiesProp = {
  mainPageContent: MainPageInfo
}

const SectionSpecialities = ({ mainPageContent }: SectionSpecialitiesProp) => {
  // const mobileMedia = `only screen and (max-width: ${tokens.breakpointLg})`
  // const isMediumDevice = useMediaQuery(mobileMedia)

  const { specialties, specialtieTitle } = mainPageContent

  return (
    <Styled.Wrapper>
      <Title>{specialtieTitle}</Title>
      <Styled.WrapperCard>
        {specialties.map(({ title, description, image }) => (
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

export default SectionSpecialities

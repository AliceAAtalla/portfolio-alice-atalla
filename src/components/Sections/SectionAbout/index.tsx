'use client'

import * as Styled from './style'
import { MainPageInfo } from '@/types/page-info'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Title from '@/components/Title'

type SectionAboutProp = {
  mainPageContent: MainPageInfo
}

const SectionAbout = ({ mainPageContent }: SectionAboutProp) => {
  const { about } = mainPageContent || {}

  console.log(mainPageContent)

  return (
    <Styled.Wrapper>
      <Styled.WrapperImage>
        <Image
          priority={true}
          width={300}
          height={400}
          src={about?.image.url}
          alt="Imagem de uma mulher branca e com cabelos cacheados ruivos"
        />
      </Styled.WrapperImage>
      <Styled.WrapperText>
        <Title>{about?.title}</Title>
        {about?.text?.raw ? (
          <Styled.Content>
            <RichText content={about.text.raw} />
          </Styled.Content>
        ) : null}
      </Styled.WrapperText>
    </Styled.Wrapper>
  )
}

export default SectionAbout

'use client'

import * as Styled from './style'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import tokens from '@/styles/tokens'
import useMediaQuery from '@/hooks/useMediaQuery'
import { CMSIcon } from '@/components/CMSIcon'
import { MainPageInfo } from '@/types/page-info'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer'

type SectionIntroductionProp = {
  mainPageContent: MainPageInfo
}

const SectionIntroduction = ({ mainPageContent }: SectionIntroductionProp) => {
  const {
    title,
    name,
    career,
    introduction,
    resumeUrl,
    resumeText,
    socials,
    technologies,
    profilePictureDesktop,
    profilePictureMobile,
  } = mainPageContent || {}
  const mobileMedia = `only screen and (max-width: ${tokens.breakpointLg})`
  const isMediumDevice = useMediaQuery(mobileMedia)

  return (
    <Styled.Wrapper>
      <Styled.Description>
        <Styled.H1>
          {title}
          <Styled.Bold>{name}</Styled.Bold>
        </Styled.H1>
        <Styled.H2>{career}.</Styled.H2>
        {introduction?.raw ? (
          <Styled.Content>
            <RichText content={introduction.raw} />
          </Styled.Content>
        ) : null}
        <Styled.ContainerLinks>
          {socials?.map((social) => (
            <Link key={social.name} href={social.url} passHref>
              <CMSIcon width={'40'} height={'40'} icon={social.iconSvg} />
            </Link>
          ))}
          <Button
            kind={'primary'}
            text={resumeText}
            handleClickButton={() => console.log(resumeText, resumeUrl)}
          >
            <FontAwesomeIcon
              icon={faFileArrowDown}
              style={{ color: '#FFFFFF' }}
            />
          </Button>
        </Styled.ContainerLinks>
        {technologies && (
          <Styled.ContainerTechnologies>
            <Styled.TextTechnologies>Tech Stacks</Styled.TextTechnologies>
            {technologies.map((tech) => (
              <CMSIcon
                key={tech.name}
                width={'40'}
                height={'40'}
                icon={tech.iconSvg}
              />
            ))}
          </Styled.ContainerTechnologies>
        )}
      </Styled.Description>
      <Styled.WrapperImage>
        <Image
          priority={true}
          width={isMediumDevice ? 246 : 370}
          height={isMediumDevice ? 200 : 300}
          alt="Image"
          src={
            isMediumDevice
              ? profilePictureMobile?.url
              : profilePictureDesktop?.url
          }
        />
      </Styled.WrapperImage>
    </Styled.Wrapper>
  )
}

export default SectionIntroduction

import type { RichTextContent } from '@graphcms/rich-text-types'

export type NavbarInfo = {
  logoDesktop: string
  logoMobile: string
  options: {
    [key: string]: {
      url: string
      name: string
    }
  }
}

export type NavbarData = {
  navbar: NavbarInfo
}

export type Socials = {
  name: string
  url: string
  iconSvg: string
}

export type Technologies = {
  name: string
  iconSvg: string
}

export type Capabilities = {
  image: string
  title: string
  description: string
}

export type Specialties = {
  image: string
  title: string
  description: string
}

export type About = {
  title: string
  text: {
    raw: RichTextContent
  }
  image: {
    url: string
  }
}

export type MainPageInfo = {
  title: string
  name: string
  location: string
  career: string
  resumeText: string
  resumeUrl: string
  socials: [Socials]
  technologies: [Technologies]
  introduction: {
    raw: RichTextContent
  }
  profilePictureDesktop: {
    url: string
  }
  profilePictureMobile: {
    url: string
  }
  specialtieTitle: string
  specialties: [Specialties]
  capabilitiesTitle: string
  capabilities: [Capabilities]
  about: About
}

export type MainPageData = {
  mainPage: MainPageInfo
}

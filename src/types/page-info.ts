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

export type Specialties = {
  image: string
  title: string
  description: string
}

export type MainPageInfo = {
  title: string
  name: string
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
}

export type MainPageData = {
  mainPage: MainPageInfo
}

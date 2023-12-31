import { MainPageData } from '@/types/page-info'
import { fetchHygraphQuery } from './fetchHygraphyQuery'

export const getMainPageData = async (
  locale: string,
): Promise<MainPageData> => {
  const query = `
    query MyQuery {
      mainPage(where: {id: "clkefdb4a29su0blwzxkbwgx5"}, locales: ${locale}) {
        about {
          title
          text {
            raw
          }
          image {
            url
          }
        }
        title
        location
        name
        career
        resumeUrl
        resumeText
        introduction {
          raw
        }
        profilePictureDesktop {
          url
        }
        profilePictureMobile {
          url
        }
        socials {
          name
          url
          iconSvg
        }
        technologies {
          name
          iconSvg
        }
        specialtieTitle
        specialties {
          image
          title
          description
        }
        capabilitiesTitle
        capabilities {
          image
          title
          description
        }

      }
    }
  `

  return fetchHygraphQuery(query)
}

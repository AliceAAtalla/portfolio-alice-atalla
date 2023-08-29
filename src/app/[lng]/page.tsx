import { getMainPageData } from '@/api/getMainPageData'
import { getNavbarInfo } from '@/api/getNavbarInfo'
import Header from '@/components/Header'
import SectionAbout from '@/components/Sections/SectionAbout'
import SectionCapabilities from '@/components/Sections/SectionCapabilities'
import SectionIntroduction from '@/components/Sections/SectionIntroduction'
import SectionSpecialities from '@/components/Sections/SectionSpecialities'

type Params = {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: Params) {
  const navbarInfo = await getNavbarInfo(lng)
  const mainPageData = await getMainPageData(lng)

  console.log(mainPageData.mainPage.about)

  return (
    <>
      <Header data={navbarInfo?.navbar} locale={lng} />
      {mainPageData?.mainPage ? (
        <main>
          <SectionIntroduction mainPageContent={mainPageData?.mainPage} />
          <SectionSpecialities mainPageContent={mainPageData?.mainPage} />
          <SectionCapabilities mainPageContent={mainPageData?.mainPage} />
          <SectionAbout mainPageContent={mainPageData?.mainPage} />
        </main>
      ) : null}
    </>
  )
}

import { getMainPageData } from '@/api/getMainPageData'
import { getNavbarInfo } from '@/api/getNavbarInfo'
import Header from '@/components/Header'
import SectionIntroduction from '@/components/Sections/SectionIntroduction'

type Params = {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: Params) {
  const navbarInfo = await getNavbarInfo(lng)
  const mainPageData = await getMainPageData(lng)

  return (
    <>
      <Header data={navbarInfo?.navbar} locale={lng} />
      <main>
        <SectionIntroduction mainPageContent={mainPageData?.mainPage} />
      </main>
    </>
  )
}

import { getNavbarInfo } from '@/api/getNavbarInfo'
import Header from '@/components/Header'

type Params = {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: Params) {
  const { navbar } = await getNavbarInfo(lng)

  return (
    <>
      <Header data={navbar} locale={lng} />
      <main>
        <h1>Hello</h1>
      </main>
    </>
  )
}

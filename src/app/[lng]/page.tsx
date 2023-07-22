type Params = {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: Params) {
  return (
    <>
      <main>
        <h1>Hello</h1>
      </main>
    </>
  )
}

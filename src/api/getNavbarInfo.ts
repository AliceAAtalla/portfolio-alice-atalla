import { NavbarData } from '@/types/page-info'
import { fetchHygraphQuery } from './fetchHygraphyQuery'

export const getNavbarInfo = async (locale: string): Promise<NavbarData> => {
  const query = `
    query Navbars {
      navbar(where: {id: "clkd9x7fk4pup0akifezwvzf5"}, locales: ${locale}) {
        logoDesktop
        logoMobile
        options
      }
    }`

  return fetchHygraphQuery(query)
}

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

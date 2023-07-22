type CMSIconProp = {
  icon: string
}

export const CMSIcon = ({ icon }: CMSIconProp) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}

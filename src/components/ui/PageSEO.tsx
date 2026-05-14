import { Helmet } from 'react-helmet-async'

interface PageSEOProps {
  title: string
  description?: string
  keywords?: string
  canonical?: string
}

export default function PageSEO({ title, description, keywords, canonical }: PageSEOProps) {
  const fullTitle = `${title} | VDAS – Vishwas Deshpande Associates`
  const defaultDesc =
    'VDAS (Vishwas Deshpande Associates) is a SEBI-registered mutual fund distributor based in Mumbai with 33+ years of experience. One Step Towards Prosperity.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VDAS – Vishwas Deshpande Associates" />
    </Helmet>
  )
}

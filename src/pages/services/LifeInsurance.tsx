import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '🎯 Goal-Based Investing', to: '/services/goal-base-investing' },
  { label: '📊 Mutual Funds', to: '/services/mutual-fund' },
  { label: '📋 Tax Solutions', to: '/services/tax-solution' },
  { label: '📈 Stocks', to: '/services/stocks' },
]

export default function LifeInsuranceService() {
  return <ServicePageTemplate
    icon="🛡️" 
    title="Legacy & Protection Planning." 
    subtitle="Securing your family's future through optimized term plans and comprehensive risk management strategies."
    image="/family_security_insurance_1778481261559.png"
    seoTitle="Life Insurance Planning | VDAS Financial" 
    seoDesc="Get the right life insurance cover with VDAS — term plans, HLV calculation, and honest advice."
    breadcrumbLabel="Life Insurance"
    features={[
      { title: 'Term Insurance Selection', desc: 'We compare and recommend the best term plans from LIC, HDFC Life, Max Life, and others for your needs.' },
      { title: 'Human Life Value Calculation', desc: 'We calculate the correct sum assured based on your income, dependents, liabilities, and future goals.' },
      { title: 'Health & Critical Illness Cover', desc: 'Guidance on the right health insurance, super top-up, and critical illness plans to protect your family.' },
      { title: 'Policy Review', desc: 'We review your existing insurance policies to identify gaps, over-insurance, or poor-value products.' },
      { title: 'Claim Support', desc: 'In the unfortunate event of a claim, we assist your family through the entire settlement process.' },
      { title: 'No ULIP or Endowment Plans', desc: 'We believe in keeping insurance and investments separate. No ULIP or LIC endowment plans pushed.' },
    ]}
    whyVDAS={[
      'Unbiased advice — we compare all leading insurers',
      'MDRT Pinnacle member — top 1% global advisors',
      'Dedicated claim support for your family',
      'Honest recommendation: pure term plans only',
      'No commissions-first mindset — client interest first',
    ]}
    relatedServices={RELATED}
    ctaText="Get the Right Cover"
  />
}

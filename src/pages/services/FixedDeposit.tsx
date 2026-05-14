import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '🎯 Goal-Based Investing', to: '/services/goal-base-investing' },
  { label: '📊 Mutual Funds', to: '/services/mutual-fund' },
  { label: '📈 Stocks', to: '/services/stocks' },
  { label: '🛡️ Life Insurance', to: '/services/life-insurance' },
  { label: '📋 Tax Solutions', to: '/services/tax-solution' },
]

export default function FixedDepositService() {
  return <ServicePageTemplate
    icon="🏦" 
    title="Safe & Stable FDs." 
    subtitle="Predictable returns with capital safety from top-rated institutions."
    image="/financial_data_analysis_1778220739942.png"
    seoTitle="Fixed Deposit Advisory | VDAS Financial" 
    seoDesc="FD guidance from VDAS — compare bank and corporate FDs for maximum safety and best interest rates."
    breadcrumbLabel="Fixed Deposit"
    features={[
      { title: 'Bank FD Comparison', desc: 'We compare FD rates across leading banks to ensure you get the best rate for your tenure.' },
      { title: 'Corporate FD Selection', desc: 'For higher returns, we identify AAA-rated corporate FDs that offer 0.5-1% higher than bank FDs safely.' },
      { title: 'Laddering Strategy', desc: 'We recommend an FD laddering strategy to manage liquidity and reinvestment risk efficiently.' },
      { title: 'Senior Citizen Benefits', desc: 'We help senior citizens maximise FD returns with 0.5% additional rate benefits and tax-saving FDs.' },
      { title: 'TDS & Tax Planning', desc: 'Guidance on Form 15G/15H submission, spread across banks to minimise TDS deduction.' },
      { title: 'Debt Fund Alternative', desc: 'For investors in higher tax brackets, we suggest debt mutual funds as a more tax-efficient FD alternative.' },
    ]}
    whyVDAS={[
      'Unbiased FD rate comparison across 20+ banks',
      'Safety-first approach — only AAA rated corporate FDs',
      'Tax-efficient structuring for maximum post-tax returns',
      'Guidance on nomination, joint holding, and renewal',
    ]}
    relatedServices={RELATED}
  />
}

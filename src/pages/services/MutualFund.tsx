import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '🎯 Goal-Based Investing', to: '/services/goal-base-investing' },
  { label: '📈 Stocks', to: '/services/stocks' },
  { label: '🏦 Fixed Deposit', to: '/services/fixed-deposit' },
  { label: '🛡️ Life Insurance', to: '/services/life-insurance' },
  { label: '📋 Tax Solutions', to: '/services/tax-solution' },
]

export default function MutualFundService() {
  return <ServicePageTemplate
    icon="📊" 
    title="Strategic Mutual Fund Advisory." 
    subtitle="AMFI-registered advisory matching elite fund selection with your life goals through research-driven asset allocation."
    image="/wealth_management_dashboard_1778479882040.png"
    seoTitle="Mutual Fund Advisory | VDAS Financial" 
    seoDesc="AMFI-registered mutual fund advisory from VDAS — SIP, lumpsum, ELSS, and portfolio management."
    breadcrumbLabel="Mutual Fund"
    features={[
      { title: 'Risk Profiling & Fund Selection', desc: 'We match you with the right funds based on your risk appetite, goals, and investment horizon.' },
      { title: 'SIP Setup & Management', desc: 'Seamless SIP setup via NJ Wealth platform. We handle all paperwork and KYC.' },
      { title: 'Lumpsum Investment Advisory', desc: 'For large lumpsum investments, we recommend STP strategy to reduce timing risk.' },
      { title: 'Portfolio Review & Rebalancing', desc: 'Annual portfolio review to weed out underperformers and rebalance asset allocation.' },
      { title: 'ELSS Tax Saving Funds', desc: 'Best ELSS funds for Section 80C tax saving with the shortest lock-in (3 years) and equity returns.' },
      { title: 'Direct vs Regular Guidance', desc: 'Transparent advice on when direct plans make sense and when advisory adds value through regular plans.' },
    ]}
    whyVDAS={[
      'AMFI-registered distributor — full regulatory compliance',
      'NJ Wealth platform — 1,000+ funds, one dashboard',
      'Fund selection from all AMCs — no AMC bias',
      '33+ years of market cycle experience',
      'SMS/email alerts on portfolio changes',
    ]}
    relatedServices={RELATED}
  />
}

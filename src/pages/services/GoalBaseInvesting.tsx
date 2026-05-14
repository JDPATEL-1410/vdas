import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '📊 Mutual Funds', to: '/services/mutual-fund' },
  { label: '📈 Stocks', to: '/services/stocks' },
  { label: '🏦 Fixed Deposit', to: '/services/fixed-deposit' },
  { label: '🛡️ Life Insurance', to: '/services/life-insurance' },
  { label: '📋 Tax Solutions', to: '/services/tax-solution' },
]

export default function GoalBaseInvestingService() {
  return <ServicePageTemplate
    icon="🎯" 
    title="Goal-Based Investing." 
    subtitle="We don't sell products — we solve goals. Every investment is tied to your life."
    image="/goal_based_investing_header.png"
    seoTitle="Goal-Based Investing | VDAS Financial" 
    seoDesc="Goal-based investing approach from VDAS — every SIP tied to your retirement, education, or home purchase goal."
    breadcrumbLabel="Goal-Based Investing"
    features={[
      { title: 'Goal Discovery Session', desc: 'We start by understanding all your financial goals — short, medium, and long-term — before recommending any product.' },
      { title: 'Corpus Calculation', desc: 'We precisely calculate the corpus required for each goal, adjusted for inflation and your investment horizon.' },
      { title: 'Dedicated Goal SIPs', desc: 'Each goal gets its own dedicated SIP so progress is trackable and goals don\'t mix up.' },
      { title: 'Annual Goal Reviews', desc: 'Every year we review goal progress and adjust SIP amounts if your income or goals change.' },
      { title: 'Priority Framework', desc: 'We help you prioritise goals when funds are limited — emergency fund first, then insurance, then wealth.' },
      { title: 'Goal Achievement Tracking', desc: 'We track each goal\'s progress and send you regular updates on how close you are to achieving it.' },
    ]}
    whyVDAS={[
      '33+ years of goal-based financial planning experience',
      'AMFI-registered mutual fund distributor',
      'Serving 5,000+ families across Mumbai and Maharashtra',
      'Personalized plans — not one-size-fits-all products',
      'Regular review meetings to keep you on track',
    ]}
    relatedServices={RELATED}
  />
}

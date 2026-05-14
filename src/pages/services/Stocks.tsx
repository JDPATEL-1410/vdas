import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '🎯 Goal-Based Investing', to: '/services/goal-base-investing' },
  { label: '📊 Mutual Funds', to: '/services/mutual-fund' },
  { label: '🏦 Fixed Deposit', to: '/services/fixed-deposit' },
  { label: '🛡️ Life Insurance', to: '/services/life-insurance' },
  { label: '📋 Tax Solutions', to: '/services/tax-solution' },
]

export default function StocksService() {
  return <ServicePageTemplate
    icon="📈" 
    title="Direct Equity Advisory." 
    subtitle="Expert stock market participation with research-backed guidance."
    image="/direct_equity_advisory_header.png"
    seoTitle="Stock Investment Advisory | VDAS Financial" 
    seoDesc="Expert stock market advisory from VDAS — research-backed stock recommendations for long-term wealth creation."
    breadcrumbLabel="Stocks"
    features={[
      { title: 'Fundamental Stock Research', desc: 'We analyse companies based on fundamentals — earnings, balance sheet, moat, and management quality.' },
      { title: 'Portfolio Construction', desc: 'We build a diversified stock portfolio with positions across sectors to manage risk and optimize returns.' },
      { title: 'Entry & Exit Guidance', desc: 'We advise on the right time to enter and exit positions based on valuations and market conditions.' },
      { title: 'NJ Wealth Platform', desc: 'Trade and track all your stocks through the NJ Wealth platform with full transparency.' },
      { title: 'Regular Portfolio Review', desc: 'Quarterly reviews to assess each holding and make informed add/hold/exit decisions.' },
      { title: 'Motilal Oswal Integration', desc: 'For active investors, we also facilitate equity investments via Motilal Oswal for broader market access.' },
    ]}
    whyVDAS={[
      'Partnered with Motilal Oswal for direct equity access',
      'Research-backed, not tip-based recommendations',
      'Focus on quality businesses held for the long term',
      'Transparency — no hidden charges or conflicts of interest',
    ]}
    relatedServices={RELATED}
  />
}

import GoalPageTemplate from './GoalPageTemplate'

export default function WealthCreationGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    } 
    title="Build Lasting Wealth." 
    subtitle="Disciplined, long-term equity investing is the most powerful wealth-creation tool available."
    image="/goal_wealth_creation_header_1778571596208.png"
    seoTitle="Wealth Creation | Long-Term Investing | VDAS Financial" 
    seoDesc="Grow your wealth systematically through equity mutual funds with VDAS long-term investment strategies."
    breadcrumbLabel="Wealth Creation"
    facts={[
      { label: 'Nifty 50 CAGR', value: '13-14%' }, 
      { label: 'Compounding', value: 'Exponential' }, 
      { label: 'Min. Horizon', value: '7+ Years' }
    ]}
    steps={[
      { step: '1', title: 'Define Your Wealth Target', desc: 'We help you set a clear ₹ target for the corpus you want to build in 10, 15, or 20 years.' },
      { step: '2', title: 'Choose the Right Equity Funds', desc: 'Based on your risk profile, we select large-cap, mid-cap, flexi-cap, or international funds for your portfolio.' },
      { step: '3', title: 'Stay Invested Through Market Cycles', desc: 'We coach you to stay disciplined during market crashes — the biggest wealth destroyer is panic selling.' },
      { step: '4', title: 'Review and Rebalance Annually', desc: 'Every year we review your portfolio, rebalance asset allocation, and upgrade underperforming funds.' },
    ]}
    calculatorLink="/calculator/sip" 
    calculatorLabel="Wealth Growth Calculator →"
  />
}

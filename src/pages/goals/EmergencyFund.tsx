import GoalPageTemplate from './GoalPageTemplate'

export default function EmergencyFundGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    } 
    title="Build Your Safety Net." 
    subtitle="An emergency fund is the foundation of every solid financial plan. Be prepared for any unexpected event."
    image="/goal_emergency_fund_header_1778571555638.png"
    seoTitle="Emergency Fund Planning | VDAS Financial" 
    seoDesc="Learn how to build a 6-month emergency fund with liquid, accessible investments from VDAS."
    breadcrumbLabel="Emergency Fund"
    facts={[
      { label: 'Ideal Fund Size', value: '6 Months' }, 
      { label: 'Liquid Funds Return', value: '6-7%' }, 
      { label: 'Accessibility', value: 'Same Day' }
    ]}
    steps={[
      { step: '1', title: 'Calculate Your Monthly Expenses', desc: 'We help you add up all fixed and variable monthly expenses to determine the ideal emergency fund size.' },
      { step: '2', title: 'Target 6 Months of Expenses', desc: 'The ideal emergency fund covers 6 months of total expenses — job loss, medical, or any sudden need.' },
      { step: '3', title: 'Invest in Liquid / Overnight Funds', desc: 'We recommend liquid mutual funds — they offer better returns than savings accounts and same-day redemption.' },
      { step: '4', title: 'Automate Monthly Contributions', desc: 'Start a small monthly SIP into your emergency fund and stop once you hit the 6-month target.' },
    ]}
    calculatorLink="/calculator/sip" 
    calculatorLabel="SIP Calculator →"
  />
}

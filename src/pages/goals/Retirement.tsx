import GoalPageTemplate from './GoalPageTemplate'

export default function RetirementGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    } 
    title="Retire Rich & Secure." 
    subtitle="Build a large enough corpus that your investments work for you — not the other way around."
    image="/goal_retirement_header_1778571576919.png"
    seoTitle="Retirement Planning | VDAS Financial" 
    seoDesc="Plan a secure and early retirement with VDAS expert advice."
    breadcrumbLabel="Retirement"
    facts={[
      { label: 'Life Expectancy', value: '85 yrs' }, 
      { label: 'Inflation Erodes', value: '50%' }, 
      { label: 'Ideal Corpus', value: '25x Expenses' }
    ]}
    steps={[
      { step: '1', title: 'Define Your Retirement Age & Lifestyle', desc: 'We help you determine the retirement age and the monthly income you need to sustain your lifestyle.' },
      { step: '2', title: 'Calculate the Required Corpus', desc: 'Using inflation, life expectancy and post-retirement returns, we compute the exact corpus target.' },
      { step: '3', title: 'Build the Corpus via Equity SIP', desc: 'We recommend equity mutual funds to grow wealth pre-retirement and shift to debt post-retirement for stability.' },
      { step: '4', title: 'Systematic Withdrawal Post-Retirement', desc: 'Set up a SWP (Systematic Withdrawal Plan) from your corpus to generate a monthly pension-like income.' },
    ]}
    calculatorLink="/calculator/retirement" 
    calculatorLabel="Retirement Calculator →"
  />
}

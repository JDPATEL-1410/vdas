import GoalPageTemplate from './GoalPageTemplate'

export default function DreamHomeGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    } 
    title="Own Your Dream Home." 
    subtitle="A systematic investment plan to build your down payment and manage your home loan smartly."
    image="/goal_dream_home_header_1778571536623.png"
    seoTitle="Dream Home Planning | VDAS Financial" 
    seoDesc="Plan your home purchase with VDAS — down payment savings, home loan guidance, and smart investment strategies."
    breadcrumbLabel="Dream Home"
    facts={[
      { label: 'Home Price Inflation', value: '8-10%' }, 
      { label: 'Min Down Payment', value: '20%' }, 
      { label: 'Max EMI of Income', value: '40%' }
    ]}
    steps={[
      { step: '1', title: 'Define Your Home Budget', desc: 'We help you set a realistic home budget based on your income, savings, and borrowing capacity.' },
      { step: '2', title: 'Save for the Down Payment', desc: 'We create a dedicated SIP to accumulate the down payment (typically 20-30% of property value) in your timeline.' },
      { step: '3', title: 'Choose the Right Home Loan', desc: 'We advise on loan amount, tenure, and lender selection to minimise your total interest outflow.' },
      { step: '4', title: 'Accelerate Loan Repayment', desc: 'Use bonus income and annual increments to make part-prepayments and become debt-free faster.' },
    ]}
    calculatorLink="/calculator/home-loan" 
    calculatorLabel="Home Loan Calculator →"
  />
}

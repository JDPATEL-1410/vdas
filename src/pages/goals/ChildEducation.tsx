import GoalPageTemplate from './GoalPageTemplate'

export default function ChildEducationGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    } 
    title="Fund Your Child's Best Future." 
    subtitle="Education is the greatest gift. Start saving early for any college, globally."
    image="/goal_child_education_header_1778571492619.png"
    seoTitle="Child Education Planning | VDAS Financial" 
    seoDesc="Plan your child's higher education corpus with VDAS — IIT, IIM, or international university."
    breadcrumbLabel="Child Education"
    facts={[
      { label: 'Education Inflation', value: '10-12%' }, 
      { label: 'IIM MBA Cost', value: '₹25L+' }, 
      { label: 'US University', value: '₹1.5Cr+' }
    ]}
    steps={[
      { step: '1', title: 'Estimate Education Cost Today', desc: 'We estimate the current cost of your target college or university based on your aspirations.' },
      { step: '2', title: 'Adjust for Education Inflation', desc: 'At 10-12% annual inflation, education costs double every 6-7 years. We project the future cost precisely.' },
      { step: '3', title: 'Start a Dedicated Child Education SIP', desc: 'We recommend equity mutual funds with a minimum 10-year horizon to build the required corpus.' },
      { step: '4', title: 'Switch to Debt Funds Closer to Goal', desc: '2-3 years before the child turns 18, we gradually shift to debt funds to protect the accumulated corpus.' },
    ]}
    calculatorLink="/calculator/education" 
    calculatorLabel="Education Calculator →"
  />
}

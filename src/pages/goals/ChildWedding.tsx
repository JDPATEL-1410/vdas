import GoalPageTemplate from './GoalPageTemplate'

export default function ChildWeddingGoal() {
  return <GoalPageTemplate
    icon={
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    } 
    title="Plan a Grand Wedding." 
    subtitle="A wedding is a milestone. Start planning early so the celebration is joyful, not stressful."
    image="/goal_child_wedding_header_1778571513638.png"
    seoTitle="Child Wedding Planning | VDAS Financial" 
    seoDesc="Start saving now for your child's wedding with goal-based investment plans from VDAS."
    breadcrumbLabel="Child Wedding"
    facts={[
      { label: 'Avg. Wedding Cost', value: '₹20L+' }, 
      { label: 'Wedding Inflation', value: '8-10%' }, 
      { label: 'Ideal Start', value: '10 Yrs Early' }
    ]}
    steps={[
      { step: '1', title: 'Estimate Wedding Budget', desc: 'We help you estimate a realistic wedding budget considering current costs and your family expectations.' },
      { step: '2', title: 'Account for Wedding Inflation', desc: 'Wedding costs inflate at 8-10% annually. We project the future cost and build a plan around it.' },
      { step: '3', title: 'Build a Dedicated Wedding Corpus', desc: 'A mix of equity (for growth) and hybrid funds (for stability) over 10-15 years builds the corpus comfortably.' },
      { step: '4', title: 'De-risk 2-3 Years Before the Event', desc: 'Gradually shift to low-risk debt funds to protect the corpus from market volatility near the wedding date.' },
    ]}
    calculatorLink="/calculator/marriage" 
    calculatorLabel="Marriage Calculator →"
  />
}

import ServicePageTemplate from './ServicePageTemplate'

const RELATED = [
  { label: '🎯 Goal-Based Investing', to: '/services/goal-base-investing' },
  { label: '📊 Mutual Funds', to: '/services/mutual-fund' },
  { label: '🏦 Fixed Deposit', to: '/services/fixed-deposit' },
  { label: '🛡️ Life Insurance', to: '/services/life-insurance' },
  { label: '📈 Stocks', to: '/services/stocks' },
]

export default function TaxSolutionService() {
  return <ServicePageTemplate
    icon="📋" 
    title="Tax Efficiency Strategies." 
    subtitle="Legally optimizing your tax liability to maximize your net take-home returns and long-term wealth accumulation."
    image="/tax_planning_documents_1778481281660.png"
    seoTitle="Tax Planning & Solutions | VDAS Financial" 
    seoDesc="Legal tax saving strategies from VDAS — ELSS, NPS, Section 80C, 80D planning to reduce your tax liability."
    breadcrumbLabel="Tax Solutions"
    features={[
      { title: 'Section 80C Planning (₹1.5L)', desc: 'ELSS mutual funds are the best 80C investment — shortest lock-in (3 years) and highest return potential.' },
      { title: 'Section 80D — Health Insurance', desc: 'We help you choose the right health insurance for max 80D benefit of ₹25,000-₹75,000.' },
      { title: 'NPS for Extra ₹50,000 Deduction', desc: 'NPS under Section 80CCD(1B) gives an additional ₹50,000 deduction beyond the ₹1.5L 80C limit.' },
      { title: 'Old vs New Tax Regime', desc: 'We calculate and recommend the best tax regime for your income and deduction profile every year.' },
      { title: 'HRA & Home Loan Structuring', desc: 'Maximise HRA exemption and home loan interest deductions through proper documentation.' },
      { title: 'Capital Gains Tax Planning', desc: 'Strategic timing of mutual fund redemptions to minimise STCG (15%) and LTCG (10%) tax liability.' },
    ]}
    whyVDAS={[
      'ELSS funds recommended from best-performing fund houses',
      'We plan across all sections — 80C, 80D, 80CCD, 24(b)',
      'Annual tax review before March 31 deadline',
      'Coordinate with your CA for optimised filing',
    ]}
    relatedServices={RELATED}
  />
}

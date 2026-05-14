import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'Retirement', to: '/calculator/retirement', icon: '🌅' },
  { title: 'Tax', to: '/calculator/tax', icon: '📋' },
]

export default function InsuranceCalcPage() {
  const [annualIncome, setAnnualIncome] = useState(1200000)
  const [age, setAge] = useState(30)
  const [dependents, setDependents] = useState(2)
  const [liabilities, setLiabilities] = useState(500000)
  const [existingCover, setExistingCover] = useState(0)

  const result = useMemo(() => {
    const yearsToRetirement = 60 - age
    // Human Life Value method: 10-15x annual income depending on age
    const multiplier = age < 35 ? 15 : age < 45 ? 12 : 10
    const coverNeeded = annualIncome * multiplier + liabilities + dependents * 500000 - existingCover
    const estimatedPremium = Math.round((coverNeeded * 0.0004) / 12) // approx 0.04% annual as monthly
    return {
      coverNeeded: Math.max(0, coverNeeded),
      estimatedPremium: Math.max(500, estimatedPremium),
      multiplier,
      yearsToRetirement,
    }
  }, [annualIncome, age, dependents, liabilities, existingCover])

  return (
    <CalculatorLayout
      title="Insurance Calculator"
      titleAccent="How Much Cover Do You Need?"
      description="Calculate the right life insurance cover based on your income, dependents, and financial liabilities."
      relatedCalcs={RELATED}
      image="/family_security_home_concept_1778484088965.png"
      disclaimer="Insurance needs vary by individual circumstances. Consult a certified advisor before purchasing any insurance policy. Premium estimates are indicative only."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
          <SliderInput label="Annual Income" value={annualIncome} min={300000} max={10000000} step={100000}
            onChange={setAnnualIncome} display={formatINR(annualIncome)} />
          <SliderInput label="Your Current Age" value={age} min={20} max={55} step={1}
            onChange={setAge} display={`${age} Yrs`} accent="orange" />
          <SliderInput label="Number of Dependents" value={dependents} min={0} max={6} step={1}
            onChange={setDependents} display={`${dependents}`} />
          <SliderInput label="Outstanding Liabilities (Loans)" value={liabilities} min={0} max={5000000} step={50000}
            onChange={setLiabilities} display={formatINR(liabilities)} accent="orange" />
          <SliderInput label="Existing Life Cover" value={existingCover} min={0} max={10000000} step={100000}
            onChange={setExistingCover} display={formatINR(existingCover)} />
        </div>
        <div className="space-y-5">
          <div className="p-6 bg-slate-100 rounded-2xl text-xs font-medium text-slate-600">
            Using <strong>Human Life Value (HLV)</strong> method: {result.multiplier}× annual income + liabilities + dependents cover
          </div>
          <ResultCard label="Recommended Life Cover" value={formatINR(result.coverNeeded)} sub="Minimum coverage to protect your family" accent="blue" large />
          <ResultCard label="Estimated Monthly Premium" value={formatINR(result.estimatedPremium)} sub="Approximate term insurance premium" accent="orange" />
          <ResultCard label="Coverage until Age" value={`${60} Years`} sub={`${result.yearsToRetirement} years of financial protection`} accent="green" />
          <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl text-xs text-blue-700 font-medium leading-relaxed">
            💡 A pure <strong>Term Plan</strong> is the most cost-effective way to get high coverage. Avoid mixing insurance with investment (ULIPs/endowment) for better returns.
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}

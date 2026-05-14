import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'Insurance', to: '/calculator/insurance', icon: '🛡️' },
]

export default function TaxCalcPage() {
  const [grossIncome, setGrossIncome] = useState(1200000)
  const [section80C, setSection80C] = useState(150000)
  const [section80D, setSection80D] = useState(25000)
  const [hra, setHra] = useState(120000)
  const [homeLoanInterest, setHomeLoanInterest] = useState(0)

  const result = useMemo(() => {
    // Old Tax Regime calculation
    const standardDeduction = 50000
    const totalDeductions = standardDeduction + section80C + section80D + hra + homeLoanInterest
    const taxableIncome = Math.max(0, grossIncome - totalDeductions)

    let taxOld = 0
    if (taxableIncome > 1000000) taxOld = 112500 + (taxableIncome - 1000000) * 0.3
    else if (taxableIncome > 500000) taxOld = 12500 + (taxableIncome - 500000) * 0.2
    else if (taxableIncome > 250000) taxOld = (taxableIncome - 250000) * 0.05
    const taxWithCessOld = taxOld * 1.04

    // New Tax Regime
    let taxNew = 0
    const taxableNew = Math.max(0, grossIncome - 50000) // only standard deduction
    if (taxableNew > 1500000) taxNew = 150000 + (taxableNew - 1500000) * 0.3
    else if (taxableNew > 1200000) taxNew = 90000 + (taxableNew - 1200000) * 0.2
    else if (taxableNew > 900000) taxNew = 45000 + (taxableNew - 900000) * 0.15
    else if (taxableNew > 600000) taxNew = 15000 + (taxableNew - 600000) * 0.1
    else if (taxableNew > 300000) taxNew = (taxableNew - 300000) * 0.05
    const taxWithCessNew = taxNew * 1.04

    return {
      taxableIncome,
      taxOld: Math.round(taxWithCessOld),
      taxNew: Math.round(taxWithCessNew),
      saving: Math.round(Math.abs(taxWithCessNew - taxWithCessOld)),
      betterRegime: taxWithCessOld < taxWithCessNew ? 'Old' : 'New',
    }
  }, [grossIncome, section80C, section80D, hra, homeLoanInterest])

  return (
    <CalculatorLayout
      title="Tax Calculator"
      titleAccent="Old vs New Tax Regime"
      description="Compare your tax liability under the old and new tax regimes to choose the most beneficial option."
      relatedCalcs={RELATED}
      image="/tax_planning_professional_workspace_1778484117621.png"
      disclaimer="Tax calculations are based on FY 2024-25 slabs. Consult a CA for accurate tax computation. This tool does not account for all exemptions and deductions."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
          <SliderInput label="Gross Annual Income" value={grossIncome} min={300000} max={10000000} step={50000}
            onChange={setGrossIncome} display={formatINR(grossIncome)} />
          <SliderInput label="Section 80C (PF, ELSS, LIC etc.)" value={section80C} min={0} max={150000} step={5000}
            onChange={setSection80C} display={formatINR(section80C)} accent="orange" />
          <SliderInput label="Section 80D (Health Insurance)" value={section80D} min={0} max={75000} step={5000}
            onChange={setSection80D} display={formatINR(section80D)} />
          <SliderInput label="HRA Exemption" value={hra} min={0} max={600000} step={10000}
            onChange={setHra} display={formatINR(hra)} accent="orange" />
          <SliderInput label="Home Loan Interest (Sec 24)" value={homeLoanInterest} min={0} max={200000} step={10000}
            onChange={setHomeLoanInterest} display={formatINR(homeLoanInterest)} />
        </div>
        <div className="space-y-5">
          <ResultCard label="Old Regime — Tax Payable" value={formatINR(result.taxOld)} sub={`Taxable Income: ${formatINR(result.taxableIncome)}`} accent="orange" large />
          <ResultCard label="New Regime — Tax Payable" value={formatINR(result.taxNew)} sub="Standard deduction only, simplified slabs" accent="blue" large />
          <div className={`p-6 rounded-2xl border ${result.betterRegime === 'Old' ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}`}>
            <p className="text-xs font-bold text-slate-600 mb-1">✅ Recommended Regime</p>
            <p className={`text-3xl font-black ${result.betterRegime === 'Old' ? 'text-blue-700' : 'text-green-700'}`}>{result.betterRegime} Tax Regime</p>
            <p className="text-sm font-medium text-slate-600 mt-1">Saves you {formatINR(result.saving)} in taxes</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}

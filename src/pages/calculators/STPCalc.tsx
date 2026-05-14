import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcSIP, calcLumpsum } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'SWP', to: '/calculator/swp', icon: '📤' },
  { title: 'Lumpsum', to: '/calculator/lumpsum', icon: '💰' },
]

export default function STPCalcPage() {
  const [sourceCorpus, setSourceCorpus] = useState(1000000)
  const [monthlyTransfer, setMonthlyTransfer] = useState(20000)
  const [sourceRate, setSourceRate] = useState(6)
  const [targetRate, setTargetRate] = useState(12)

  const result = useMemo(() => {
    const months = Math.floor(sourceCorpus / monthlyTransfer)
    const years = Math.floor(months / 12)
    // Debt fund grows during transfer period
    const debtGrowth = calcLumpsum(sourceCorpus, years, sourceRate)
    // Equity SIP receiving monthly transfers
    const equityGrowth = calcSIP(monthlyTransfer, years, targetRate)
    return { months, years, debtGrowth, equityGrowth }
  }, [sourceCorpus, monthlyTransfer, sourceRate, targetRate])

  return (
    <CalculatorLayout
      title="STP Calculator"
      titleAccent="Systematic Transfer Plan"
      description="Calculate the growth when systematically transferring from a debt fund to an equity fund over time."
      relatedCalcs={RELATED}
      image="/financial_planning_precision_tools_1778484192484.png"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest">Source Fund (Debt)</h3>
          <SliderInput label="Initial Corpus" value={sourceCorpus} min={100000} max={10000000} step={50000}
            onChange={setSourceCorpus} display={formatINR(sourceCorpus)} />
          <SliderInput label="Monthly Transfer Amount" value={monthlyTransfer} min={1000} max={100000} step={1000}
            onChange={setMonthlyTransfer} display={formatINR(monthlyTransfer)} accent="orange" />
          <SliderInput label="Debt Fund Return Rate" value={sourceRate} min={4} max={10} step={0.5}
            onChange={setSourceRate} display={`${sourceRate}%`} />
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest pt-4 border-t border-slate-200">Target Fund (Equity)</h3>
          <SliderInput label="Equity Fund Return Rate" value={targetRate} min={8} max={20} step={0.5}
            onChange={setTargetRate} display={`${targetRate}%`} accent="orange" />
        </div>
        <div className="space-y-5">
          <ResultCard label="Transfer Duration" value={`${result.years} Years`} sub={`${result.months} monthly transfers of ${formatINR(monthlyTransfer)}`} accent="slate" />
          <ResultCard label="Debt Fund Final Value" value={formatINR(result.debtGrowth.total)} sub={`Growing at ${sourceRate}% while transferring`} accent="blue" />
          <ResultCard label="Equity Fund Final Value" value={formatINR(result.equityGrowth.total)} sub={`SIP of ${formatINR(monthlyTransfer)}/mo at ${targetRate}%`} accent="orange" />
          <ResultCard label="Combined Portfolio Value" value={formatINR(result.debtGrowth.total + result.equityGrowth.total)} accent="green" large />
          <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl text-xs text-blue-700 font-medium leading-relaxed">
            💡 <strong>STP Strategy:</strong> Instead of investing a large lumpsum in equity directly, STP helps you transfer gradually from a safer debt fund to equity — reducing timing risk.
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}

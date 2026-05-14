import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcGoal } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'Lumpsum', to: '/calculator/lumpsum', icon: '💰' },
  { title: 'Marriage', to: '/calculator/marriage', icon: '💍' },
]

export default function VacationCalcPage() {
  const [vacationCost, setVacationCost] = useState(300000)
  const [years, setYears] = useState(3)
  const [inflation, setInflation] = useState(5)
  const [rate, setRate] = useState(10)

  const result = useMemo(() => calcGoal(vacationCost, years, rate, inflation), [vacationCost, years, rate, inflation])
  const monthlyBudget = Math.round(vacationCost / (years * 12))

  return (
    <CalculatorLayout
      title="Vacation Calculator"
      titleAccent="Plan Your Dream Holiday"
      description="Calculate how much to save monthly to fund your dream vacation or international holiday trip."
      relatedCalcs={RELATED}
      image="/luxury_vacation_resort_1778483973693.png"
      accentColor="#2dd4bf"
      disclaimer="Vacation cost estimates are indicative. Travel costs may vary based on destination, season, and currency exchange rates."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
          <SliderInput label="Estimated Vacation Budget (Today)" value={vacationCost} min={50000} max={5000000} step={25000}
            onChange={setVacationCost} display={formatINR(vacationCost)} />
          <SliderInput label="Years Until Trip" value={years} min={1} max={10} step={1}
            onChange={setYears} display={`${years} Yrs`} accent="orange" />
          <SliderInput label="Travel Inflation Rate" value={inflation} min={3} max={10} step={0.5}
            onChange={setInflation} display={`${inflation}%`} />
          <SliderInput label="Expected Investment Return" value={rate} min={6} max={15} step={0.5}
            onChange={setRate} display={`${rate}%`} accent="orange" />
        </div>
        <div className="space-y-5">
          <ResultCard label="Current Vacation Budget" value={formatINR(vacationCost)} accent="slate" />
          <ResultCard label="Inflation-Adjusted Future Cost" value={formatINR(result.futureTarget)} sub={`At ${inflation}% travel inflation`} accent="orange" large />
          <ResultCard label="Monthly SIP Required" value={formatINR(result.sip)} sub="Invest in liquid or short-term funds" accent="blue" large />
          <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl space-y-3">
            <p className="text-xs font-bold text-blue-700">✈️ Vs. Simple Monthly Saving</p>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Simple monthly savings</span>
              <strong className="text-slate-900">{formatINR(monthlyBudget)}/mo</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">With investment returns ({rate}%)</span>
              <strong className="text-blue-600">{formatINR(result.sip)}/mo</strong>
            </div>
            <p className="text-[10px] text-blue-600">You save <strong>{formatINR(Math.max(0, monthlyBudget - result.sip))}/month</strong> by investing vs. keeping cash!</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}

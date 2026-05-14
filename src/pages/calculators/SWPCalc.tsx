import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'STP', to: '/calculator/stp', icon: '🔄' },
  { title: 'Lumpsum', to: '/calculator/lumpsum', icon: '💰' },
]

export default function SWPCalcPage() {
  const [corpus, setCorpus] = useState(5000000)
  const [withdrawal, setWithdrawal] = useState(30000)
  const [rate, setRate] = useState(8)

  const result = useMemo(() => {
    const r = rate / 100 / 12
    const sustainableWithdrawal = Math.round(corpus * r)
    if (withdrawal <= sustainableWithdrawal) {
      return { sustainable: true, months: null, sustainableWithdrawal }
    }
    const months = Math.ceil(Math.log(withdrawal / (withdrawal - corpus * r)) / Math.log(1 + r))
    return {
      sustainable: false,
      months,
      years: Math.floor(months / 12),
      remainingMonths: months % 12,
      sustainableWithdrawal,
    }
  }, [corpus, withdrawal, rate])

  return (
    <CalculatorLayout
      title="SWP Calculator"
      titleAccent="Systematic Withdrawal Plan"
      description="Find out how long your investment corpus will last with regular monthly withdrawals."
      relatedCalcs={RELATED}
      image="/financial_planning_precision_tools_1778484192484.png"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Total Corpus" value={corpus} min={100000} max={50000000} step={100000}
              onChange={setCorpus} display={formatINR(corpus)} />
            <SliderInput label="Monthly Withdrawal" value={withdrawal} min={1000} max={200000} step={1000}
              onChange={setWithdrawal} display={formatINR(withdrawal)} accent="orange" />
            <SliderInput label="Expected Return Rate" value={rate} min={4} max={15} step={0.5}
              onChange={setRate} display={`${rate}%`} />
          </div>
        </div>
        <div className="space-y-6">
          <ResultCard label="Your Corpus" value={formatINR(corpus)} accent="slate" />
          <ResultCard label="Monthly Withdrawal" value={formatINR(withdrawal)} accent="orange" />
          <ResultCard
            label="Sustainable Monthly Withdrawal"
            value={formatINR(result.sustainableWithdrawal)}
            sub="You can withdraw this amount indefinitely"
            accent="green"
          />
          {result.sustainable ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-black text-emerald-800 text-sm mb-1">Withdrawal is Sustainable!</p>
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    Your monthly withdrawal of {formatINR(withdrawal)} is below the sustainable limit of {formatINR(result.sustainableWithdrawal)}.
                    Your corpus will grow and last indefinitely at {rate}% annual return.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-black text-orange-800 text-sm mb-1">Corpus will last approximately</p>
                  <p className="text-4xl font-black text-orange-600">{result.years}y {result.remainingMonths}m</p>
                  <p className="text-orange-700 text-xs mt-2">
                    Consider reducing withdrawal to {formatINR(result.sustainableWithdrawal)} for indefinite sustainability.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  )
}
